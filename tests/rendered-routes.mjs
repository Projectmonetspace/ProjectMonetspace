import assert from "node:assert/strict";
import { allSeoPages } from "../app/lib/seo-content.ts";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";
const routes = ["/industries", "/resources", "/work", ...allSeoPages.map((page) => page.path)];

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

const sitemap = await fetch(`${baseUrl}/sitemap.xml`);
assert.equal(sitemap.status, 200, "sitemap returns 200");
const sitemapXml = await sitemap.text();
for (const page of allSeoPages) assert.ok(sitemapXml.includes(page.path), `sitemap includes ${page.path}`);

console.log(`Verified ${routes.length} SEO routes, ${allSeoPages.length} answer blocks, and the generated sitemap.`);
