import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

import { publishedBlogArticles } from "../app/lib/blog-content-registry.ts";
import { blogSitemapEntries, pagesSitemapEntries } from "../app/lib/sitemap-content.ts";
import { allSeoPages, corePages, industryPages, resourcePages, workPages } from "../app/lib/seo-content.ts";

const allowedRelated = new Set([
  "/industries",
  "/resources",
  "/privacy",
  "/terms",
  "/demo-policy",
]);

function textFor(page) {
  return [
    page.title,
    page.heading,
    page.intro,
    page.quickAnswer,
    ...page.sections.flatMap((section) => [section.title, section.answer ?? "", ...(section.paragraphs ?? []), ...(section.bullets ?? [])]),
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");
}

test("ships the expanded 41-page commercial content architecture", () => {
  assert.equal(corePages.length, 6);
  assert.equal(industryPages.length, 12);
  assert.equal(resourcePages.length, 14);
  assert.equal(workPages.length, 6);
  assert.equal(allSeoPages.length + 3, 41, "38 detail pages plus three hubs");
});

test("the homepage hamburger links to the main content pages", async () => {
  const homepage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  for (const path of [
    "/services/web-design-for-local-businesses",
    "/work",
    "/industries",
    "/resources",
    "/about",
    "/pricing",
    "/free-website-demo",
  ]) {
    assert.match(homepage, new RegExp(`href: "${path}"`));
  }

  assert.match(homepage, /aria-label="Mobile navigation"/);
});

test("every detail page is unique, substantive, and internally linked", () => {
  assert.equal(new Set(allSeoPages.map((page) => page.path)).size, allSeoPages.length);
  assert.equal(new Set(allSeoPages.map((page) => page.metaTitle)).size, allSeoPages.length);
  assert.equal(new Set(allSeoPages.map((page) => page.quickAnswer)).size, allSeoPages.length);

  for (const page of allSeoPages) {
    assert.match(page.path, /^\/[a-z0-9/-]+$/);
    assert.ok(page.metaDescription.length >= 100 && page.metaDescription.length <= 160, `${page.path} meta description length`);
    assert.ok(page.sections.length >= 4, `${page.path} has at least four useful sections`);
    assert.ok(page.faqs.length >= 4, `${page.path} answers at least four buyer questions`);
    assert.ok(textFor(page).split(/\s+/).length >= 280, `${page.path} has substantive visible copy`);
    assert.ok(page.relatedPaths.length >= 4, `${page.path} has contextual internal links`);
    for (const relatedPath of page.relatedPaths) {
      assert.ok(allSeoPages.some((candidate) => candidate.path === relatedPath) || allowedRelated.has(relatedPath), `${page.path} links to known ${relatedPath}`);
    }
  }
});

test("priority pages receive a contextual internal link beyond their hub", () => {
  for (const targetPath of [
    "/industries/gyms",
    "/industries/real-estate",
    "/resources/one-page-vs-multi-page-website",
    "/resources/landing-page-vs-website-small-business",
    "/resources/web-design-agency-vs-freelancer-india",
    "/work/ahs-home-services-website-concept",
    "/work/dental-clinic-website-concept",
  ]) {
    const incoming = allSeoPages.filter((page) => page.relatedPaths.includes(targetPath));
    assert.ok(incoming.length >= 1, `${targetPath} has a contextual incoming link`);
  }
});

test("the sitemap index and child sitemaps stay complete, data-driven, and fresh", async () => {
  const source = await readFile(new URL("../app/lib/sitemap-content.ts", import.meta.url), "utf8");
  const indexRoute = await readFile(new URL("../app/sitemap.xml/route.ts", import.meta.url), "utf8");
  const pagesRoute = await readFile(new URL("../app/pages-sitemap.xml/route.ts", import.meta.url), "utf8");
  const blogRoute = await readFile(new URL("../app/blog-sitemap.xml/route.ts", import.meta.url), "utf8");

  assert.match(source, /allSeoPages/);
  assert.match(source, /publishedBlogArticles\.map/);
  assert.match(source, /blog-content-registry/);
  assert.match(source, /allSeoPages\s*\n\s*\.filter\(\(page\) => page\.kind !== "work"\)/);
  assert.match(source, /allSeoPages\s*\n\s*\.filter\(\(page\) => page\.kind === "work"\)/);
  assert.match(source, /export const pagesSitemapEntries = \[\.\.\.fixedPages, \.\.\.seoPages\]/);
  assert.match(source, /export const blogSitemapEntries = \[\.\.\.projectPages, \.\.\.blogPages\]/);
  assert.match(indexRoute, /<sitemapindex xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.match(indexRoute, /pages-sitemap\.xml/);
  assert.match(indexRoute, /blog-sitemap\.xml/);
  assert.doesNotMatch(source, /changefreq|changeFrequency|priority/);
  assert.doesNotMatch(indexRoute, /changefreq|priority/);

  const fixedPagesBlock = source.match(/const fixedPages: SitemapEntry\[\] = \[([\s\S]*?)\n\];/);
  assert.ok(fixedPagesBlock, "fixed sitemap pages remain declared");
  const fixedPageCount = (fixedPagesBlock[1].match(/\{ url:/g) ?? []).length;
  assert.equal(fixedPageCount, 12);

  const expectedTotal = fixedPageCount + allSeoPages.length + publishedBlogArticles.length;
  assert.equal(pagesSitemapEntries.length + blogSitemapEntries.length, expectedTotal, "sitemap registry count derives from fixed, SEO, work and published blog sources");

  assert.match(source, /s-maxage=300/);
  assert.match(source, /stale-while-revalidate=300/);
  for (const route of [indexRoute, pagesRoute, blogRoute]) {
    assert.match(route, /export const revalidate = 300/);
  }
});

test("structured data stays visible-content aligned without FAQ rich-result spam", async () => {
  const component = await readFile(new URL("../app/components/seo-page.tsx", import.meta.url), "utf8");
  assert.match(component, /BreadcrumbList/);
  assert.match(component, /\"@type\": \"Article\"/);
  assert.match(component, /\"@type\": \"Service\"/);
  assert.match(component, /\"@type\": \"CreativeWork\"/);
  assert.match(component, /\"@type\": \"ProfilePage\"/);
  assert.doesNotMatch(component, /FAQPage/);
});
