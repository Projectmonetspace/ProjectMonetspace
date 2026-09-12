import assert from "node:assert/strict";

import { publishedBlogArticles } from "../app/lib/blog-content-registry.ts";
import { blogSitemapEntries, pagesSitemapEntries } from "../app/lib/sitemap-content.ts";

const base = (process.env.PRODUCTION_BASE_URL ?? "https://www.projectmonet.space").replace(/\/$/, "");
const canonicalOrigin = "https://www.projectmonet.space";
const expectedCommit = process.env.EXPECTED_COMMIT;
if (expectedCommit) {
  const marker = await fetch(`${base}/deployment.json`, { cache: "no-store", signal: AbortSignal.timeout(30000) });
  assert.equal(marker.status, 200, "Cloudflare deployment marker reachable");
  const deployment = await marker.json();
  assert.equal(deployment.platform, "cloudflare-pages");
  assert.equal(deployment.commit, expectedCommit, "Production serves the exact verified commit");
}

async function get(path) {
  const response = await fetch(`${base}${path}`, {
    headers: {
      "user-agent": "ProjectMonet-production-verification/1.0",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
    redirect: "follow",
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });

  return { response, body: await response.text() };
}

async function verifyArticle(article) {
  const path = `/blog/${article.slug}`;
  const { response, body } = await get(path);
  assert.equal(response.status, 200, `${path} returns 200`);
  assert.ok(body.includes(article.h1), `${path} renders its intended H1`);
  assert.ok(
    body.includes(`rel=\"canonical\" href=\"${canonicalOrigin}${path}\"`) || body.includes(`rel="canonical" href="${canonicalOrigin}${path}"`),
    `${path} has the exact production canonical`,
  );
  assert.equal((body.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${path}: one H1`);
  assert.ok(body.includes("BreadcrumbList"), `${path}: breadcrumb schema`);
  assert.ok(body.includes(`${canonicalOrigin}${path}/og`), `${path}: production OG metadata`);
  assert.ok(body.includes(article.datePublished) && body.includes(article.dateModified), `${path}: dates preserved`);
  assert.ok(body.includes("BlogPosting"), `${path} includes BlogPosting schema`);

  if (article.parentSlug) {
    assert.ok(body.includes(`/blog/${article.parentSlug}`), `${path} links back to its main article`);
  }

  for (const relatedPath of article.relatedPaths.filter((relatedPath) => relatedPath.startsWith("/blog/"))) {
    assert.ok(body.includes(relatedPath), `${path} exposes related article ${relatedPath}`);
  }

  const og = await fetch(`${base}${path}/og`, {
    headers: { "cache-control": "no-cache", pragma: "no-cache" },
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
    redirect: "follow",
  });
  assert.equal(og.status, 200, `${path}/og returns 200`);
  assert.match(og.headers.get("content-type") ?? "", /^image\/png/, `${path}/og returns PNG`);
  const png = Buffer.from(await og.arrayBuffer());
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", `${path}/og: genuine PNG`);
  assert.equal(png.readUInt32BE(16), 1200, `${path}/og: width`);
  assert.equal(png.readUInt32BE(20), 630, `${path}/og: height`);
}

// Bound parallel requests so the full published registry remains practical to certify.
for (let start = 0; start < publishedBlogArticles.length; start += 6) {
  await Promise.all(publishedBlogArticles.slice(start, start + 6).map(verifyArticle));
}
for (const entry of [...pagesSitemapEntries, ...blogSitemapEntries].filter(e => !new URL(e.url).pathname.startsWith("/blog/"))) {
  const path = new URL(entry.url).pathname;
  const page = await get(path);
  assert.equal(page.response.status, 200, `${path}: core route`);
  const canonical = page.body.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `${path}: core canonical present`);
  assert.equal(new URL(canonical[1]).href, new URL(entry.url).href, `${path}: core canonical`);
}
const unknown = await get("/migration-unknown-route-404-check");
assert.equal(unknown.response.status, 404, "Unknown routes return a genuine 404");

const blog = await get("/blog");
assert.equal(blog.response.status, 200, "/blog returns 200");
for (const article of publishedBlogArticles) {
  assert.ok(blog.body.includes(`/blog/${article.slug}`), `/blog lists ${article.slug}`);
}

const rootSitemap = await get("/sitemap.xml");
assert.equal(rootSitemap.response.status, 200, "/sitemap.xml returns 200");
assert.ok(rootSitemap.body.includes("<sitemapindex"), "root sitemap is a sitemap index");
assert.ok(rootSitemap.body.includes("/pages-sitemap.xml"), "root sitemap links pages child");
assert.ok(rootSitemap.body.includes("/blog-sitemap.xml"), "root sitemap links blog child");

const pages = await get("/pages-sitemap.xml");
const blogSitemap = await get("/blog-sitemap.xml");
assert.equal(pages.response.status, 200, "/pages-sitemap.xml returns 200");
assert.equal(blogSitemap.response.status, 200, "/blog-sitemap.xml returns 200");

for (const entry of pagesSitemapEntries) {
  assert.ok(pages.body.includes(`<loc>${entry.url}</loc>`), `pages sitemap lists ${entry.url}`);
}
for (const entry of blogSitemapEntries) {
  assert.ok(blogSitemap.body.includes(`<loc>${entry.url}</loc>`), `blog sitemap lists ${entry.url}`);
}

const actualSitemapUrlCount = ((`${pages.body}\n${blogSitemap.body}`).match(/<url>/g) ?? []).length;
const expectedSitemapUrlCount = pagesSitemapEntries.length + blogSitemapEntries.length;
assert.equal(actualSitemapUrlCount, expectedSitemapUrlCount, "production child sitemaps match the data-driven registry count");

console.log(
  `Production verified: ${publishedBlogArticles.length} published articles and ${expectedSitemapUrlCount} canonical sitemap URLs at ${base}.`,
);
