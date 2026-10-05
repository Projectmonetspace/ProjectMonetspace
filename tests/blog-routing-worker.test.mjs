import assert from "node:assert/strict";
import test from "node:test";
import { createBlogRoutingWorker, blogFunctionRoutes } from "../scripts/blog-routing-worker.mjs";
import { articleRedirects, purgedArticleSlugs } from "../app/lib/content-policy.ts";
import { publishedBlogArticles } from "../app/lib/blog-content-registry.ts";
import { securityHeaders } from "../security-headers.mjs";

const html = '<html><h1>This page left the frame.</h1></html>';
const source = createBlogRoutingWorker({ purgedSlugs: purgedArticleSlugs, notFoundHtml: html, securityHeaders });
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);

test("retired articles and their aliases bypass stale 200 assets", async () => {
  let assetRequests = 0;
  const env = { ASSETS: { async fetch() { assetRequests++; return new Response("stale article", { status: 200 }); } } };
  for (const slug of purgedArticleSlugs) {
    for (const suffix of ["", ".html", "/", "/og"]) {
      const response = await worker.fetch(new Request(`https://www.projectmonet.space/blog/${slug}${suffix}?from=search`), env);
      assert.equal(response.status, 404, `${slug}${suffix}`);
      assert.equal(await response.text(), html);
      assert.equal(response.headers.get("cache-control"), "no-store");
      assert.equal(response.headers.get("x-robots-tag"), "noindex");
      assert.equal(response.headers.get("x-frame-options"), "DENY");
    }
  }
  assert.equal(assetRequests, 0, "retired routes never consult the stale asset service");
});

test("HEAD retirement responses preserve 404 without a body", async () => {
  const slug = [...purgedArticleSlugs][0];
  const response = await worker.fetch(new Request(`https://www.projectmonet.space/blog/${slug}`, { method: "HEAD" }), {});
  assert.equal(response.status, 404);
  assert.equal(await response.text(), "");
});

test("retained articles, OGs and unknown routes preserve asset behavior", async () => {
  const visited = [];
  const env = { ASSETS: { async fetch(request) {
    visited.push(request.url);
    const unknown = new URL(request.url).pathname.endsWith("unknown-retained-route");
    return new Response(unknown ? html : "asset", { status: unknown ? 404 : 200, headers: { "Content-Type": "application/octet-stream", "Cache-Control": "public, max-age=0, must-revalidate" } });
  } } };
  for (const article of publishedBlogArticles) {
    for (const suffix of ["", "/og"]) {
      const response = await worker.fetch(new Request(`https://www.projectmonet.space/blog/${article.slug}${suffix}`), env);
      assert.equal(response.status, 200);
      assert.equal(await response.text(), "asset");
      assert.equal(response.headers.get("content-type"), suffix === "/og" ? "image/png" : "application/octet-stream");
      assert.equal(response.headers.get("x-frame-options"), "DENY");
    }
  }
  const unknown = await worker.fetch(new Request("https://www.projectmonet.space/blog/unknown-retained-route"), env);
  assert.equal(unknown.status, 404);
  assert.equal(unknown.headers.get("cache-control"), "no-store");
  assert.equal(visited.length, publishedBlogArticles.length * 2 + 1);
});

test("consolidations stay outside Functions and within Pages routing limits", () => {
  const routes = blogFunctionRoutes(articleRedirects);
  assert.deepEqual(routes.include, ["/blog/*"]);
  assert.ok(routes.include.length + routes.exclude.length <= 100);
  assert.ok([...routes.include, ...routes.exclude].every(path => path.length <= 100));
  for (const slug of purgedArticleSlugs) {
    assert.ok(!routes.exclude.some(pattern => `/blog/${slug}`.startsWith(pattern.slice(0, -1))), `${slug}: retirement handler must run`);
  }
  for (const [from, to] of Object.entries(articleRedirects)) {
    assert.ok(routes.exclude.includes(`/blog/${from}*`));
    assert.ok(publishedBlogArticles.some(article => article.slug === to));
    assert.equal(purgedArticleSlugs.has(to), false);
  }
});
