import assert from "node:assert/strict";

import { publishedBlogArticles } from "../app/lib/blog-content.ts";
import { blogSitemapEntries, pagesSitemapEntries } from "../app/lib/sitemap-content.ts";

const base = process.env.PRODUCTION_BASE_URL ?? "https://www.projectmonet.space";

async function get(path) {
  const response = await fetch(`${base}${path}`, {
    headers: {
      "user-agent": "ProjectMonet-production-verification/1.0",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
    redirect: "follow",
    cache: "no-store",
  });

  return { response, body: await response.text() };
}

for (const article of publishedBlogArticles) {
  const path = `/blog/${article.slug}`;
  const { response, body } = await get(path);
  assert.equal(response.status, 200, `${path} returns 200`);
  assert.ok(body.includes(article.h1), `${path} renders its intended H1`);
  assert.ok(
    body.includes(`rel=\"canonical\" href=\"${base}${path}\"`) || body.includes(`rel="canonical" href="${base}${path}"`),
    `${path} has the exact production canonical`,
  );
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
    redirect: "follow",
  });
  assert.equal(og.status, 200, `${path}/og returns 200`);
  assert.match(og.headers.get("content-type") ?? "", /^image\/png/, `${path}/og returns PNG`);
}

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
