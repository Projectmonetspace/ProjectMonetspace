import assert from "node:assert/strict";
import { allSeoPages } from "../app/lib/seo-content.ts";
import { publishedBlogArticles } from "../app/lib/blog-content.ts";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";
const blogRoutes = publishedBlogArticles.map((article) => `/blog/${article.slug}`);
const routes = ["/industries", "/resources", "/work", "/blog", ...allSeoPages.map((page) => page.path), ...blogRoutes];

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  assert.equal(response.status, 200, `${route} returns 200`);
  const html = await response.text();
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `${route} has one H1`);
  assert.match(html, /<main class="seo-page/, `${route} renders the SEO layout`);
  assert.match(html, new RegExp(`<link rel="canonical" href="https://www\\.projectmonet\\.space${route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `${route} has its canonical URL`);
  assert.doesNotMatch(html, /FAQPage/, `${route} does not use ineligible FAQ rich-result markup`);
}

for (const page of allSeoPages) {
  const response = await fetch(`${baseUrl}${page.path}`);
  const html = await response.text();
  assert.ok(html.includes(page.quickAnswer), `${page.path} includes the visible answer block`);
  assert.match(html, /BreadcrumbList/, `${page.path} includes breadcrumb structured data`);
}

for (const article of publishedBlogArticles) {
  const response = await fetch(`${baseUrl}/blog/${article.slug}`);
  const html = await response.text();
  assert.match(html, /BlogPosting/, `${article.slug} includes BlogPosting structured data`);
  assert.ok(html.includes(article.author), `${article.slug} includes the author`);
  assert.ok(html.includes(article.datePublished), `${article.slug} includes publication date`);
  assert.ok(html.includes(`/blog/${article.slug}/og`), `${article.slug} uses its stable image route`);

  const image = await fetch(`${baseUrl}/blog/${article.slug}/og`);
  assert.equal(image.status, 200, `${article.slug} image returns 200`);
  assert.match(image.headers.get("content-type") ?? "", /^image\/png/, `${article.slug} image is a PNG`);
}

const sitemap = await fetch(`${baseUrl}/sitemap.xml`);
assert.equal(sitemap.status, 200, "sitemap returns 200");
const sitemapXml = await sitemap.text();
assert.match(sitemapXml, /<sitemapindex xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
assert.ok(sitemapXml.includes("/pages-sitemap.xml"), "sitemap index includes the pages child");
assert.ok(sitemapXml.includes("/blog-sitemap.xml"), "sitemap index includes the blog and projects child");

const pagesSitemap = await fetch(`${baseUrl}/pages-sitemap.xml`);
assert.equal(pagesSitemap.status, 200, "pages sitemap returns 200");
const pagesSitemapXml = await pagesSitemap.text();
assert.match(pagesSitemapXml, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);

const blogSitemap = await fetch(`${baseUrl}/blog-sitemap.xml`);
assert.equal(blogSitemap.status, 200, "blog sitemap returns 200");
const blogSitemapXml = await blogSitemap.text();
assert.match(blogSitemapXml, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);

for (const page of allSeoPages) {
  const expectedSitemap = page.kind === "work" ? blogSitemapXml : pagesSitemapXml;
  assert.ok(expectedSitemap.includes(page.path), `a child sitemap includes ${page.path}`);
}
for (const article of publishedBlogArticles) {
  assert.ok(blogSitemapXml.includes(`/blog/${article.slug}`), `blog sitemap includes ${article.slug}`);
}

const allChildXml = `${pagesSitemapXml}\n${blogSitemapXml}`;
assert.doesNotMatch(allChildXml, /<changefreq>|<priority>/);
assert.equal((allChildXml.match(/<url>/g) ?? []).length, 71, "child sitemaps contain all 71 indexable URLs");

console.log(`Verified ${routes.length} SEO routes, ${allSeoPages.length} answer blocks, ${publishedBlogArticles.length} articles, and the sitemap index with both child sitemaps.`);
