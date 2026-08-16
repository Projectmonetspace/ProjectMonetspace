import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

import { allSeoPages, corePages, industryPages, resourcePages } from "../app/lib/seo-content.ts";

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

test("ships the approved 27-page SEO architecture", () => {
  assert.equal(corePages.length, 5);
  assert.equal(industryPages.length, 12);
  assert.equal(resourcePages.length, 8);
  assert.equal(allSeoPages.length + 2, 27, "25 detail pages plus two hubs");
});

test("every detail page is unique, substantive, and internally linked", () => {
  assert.equal(new Set(allSeoPages.map((page) => page.path)).size, allSeoPages.length);
  assert.equal(new Set(allSeoPages.map((page) => page.metaTitle)).size, allSeoPages.length);
  assert.equal(new Set(allSeoPages.map((page) => page.quickAnswer)).size, allSeoPages.length);

  for (const page of allSeoPages) {
    assert.match(page.path, /^\/[a-z0-9/-]+$/);
    assert.ok(page.metaDescription.length >= 100 && page.metaDescription.length <= 180, `${page.path} meta description length`);
    assert.ok(page.sections.length >= 4, `${page.path} has at least four useful sections`);
    assert.ok(page.faqs.length >= 4, `${page.path} answers at least four buyer questions`);
    assert.ok(textFor(page).split(/\s+/).length >= 280, `${page.path} has substantive visible copy`);
    assert.ok(page.relatedPaths.length >= 4, `${page.path} has contextual internal links`);
    for (const relatedPath of page.relatedPaths) {
      assert.ok(allSeoPages.some((candidate) => candidate.path === relatedPath) || allowedRelated.has(relatedPath), `${page.path} links to known ${relatedPath}`);
    }
  }
});

test("the generated sitemap is data-driven and covers 34 public pages", async () => {
  const source = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(source, /allSeoPages\.map/);
  assert.match(source, /return \[\.\.\.fixedPages, \.\.\.seoPages\]/);
  assert.equal(allSeoPages.length + 9, 34);
});

test("structured data stays visible-content aligned without FAQ rich-result spam", async () => {
  const component = await readFile(new URL("../app/components/seo-page.tsx", import.meta.url), "utf8");
  assert.match(component, /BreadcrumbList/);
  assert.match(component, /\"@type\": \"Article\"/);
  assert.match(component, /\"@type\": \"Service\"/);
  assert.doesNotMatch(component, /FAQPage/);
});
