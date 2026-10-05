import assert from "node:assert/strict";
import test from "node:test";
import { publishedBlogArticles, findPublishedArticle } from "../app/lib/blog-content-registry.ts";
import { allSeoPages, resourcePages } from "../app/lib/seo-content.ts";
import { blogSitemapEntries } from "../app/lib/sitemap-content.ts";
import { articleRedirects, purgedArticleSlugs, retiredArticleSlugs, assertPublicationEligible, cleanArticleHtml } from "../app/lib/content-policy.ts";

test("cleanup preserves measured winners and removes only the approved URL inventory", () => {
  assert.equal(purgedArticleSlugs.size, 102);
  assert.equal(Object.keys(articleRedirects).length, 13);
  assert.equal(publishedBlogArticles.length, 252);
  for (const slug of retiredArticleSlugs) {
    assert.equal(findPublishedArticle(slug), undefined);
    assert.ok(!blogSitemapEntries.some(entry => entry.url === `https://www.projectmonet.space/blog/${slug}`));
  }
  for (const slug of ["claudeforce-salesforce-in-claude", "how-to-run-qwen3-8-flash-next-locally", "photoshop-27-10-ai-assisted-editor-prompt-to-edit", "gemini-omni-flash-vs-veo-3-1"]) assert.ok(findPublishedArticle(slug));
});

test("consolidations have live, improved owners without redirect chains", () => {
  for (const [from, to] of Object.entries(articleRedirects)) {
    assert.ok(!retiredArticleSlugs.has(to), `${from}: target live`);
    const owner = findPublishedArticle(to);
    assert.ok(owner);
    assert.equal(owner.dateModified, "2026-10-05");
    assert.ok(owner.sections.length >= 5);
    assert.ok(owner.relatedPaths.includes("/services/web-design-for-local-businesses"));
  }
});

test("rendered content and related paths contain no retired article links", () => {
  for (const page of [...publishedBlogArticles, ...allSeoPages]) {
    for (const path of page.relatedPaths) if (path.startsWith("/blog/")) assert.ok(findPublishedArticle(path.slice(6)), `${page.slug ?? page.path}: related ${path}`);
    for (const match of JSON.stringify(page.sections).matchAll(/\/blog\/([a-z0-9-]+)/g)) assert.ok(!retiredArticleSlugs.has(match[1]), `${page.slug ?? page.path}: retired ${match[1]}`);
  }
  const purge = [...purgedArticleSlugs][0];
  assert.equal(cleanArticleHtml(`<a href="/blog/${purge}">Readable label</a>`), "Readable label");
  assert.equal(cleanArticleHtml('<a class="link" href="https://www.projectmonet.space/blog/olostep-api#setup">API guide</a>'), '<a class="link" href="/blog/olostep">API guide</a>');
});

test("new model-news and backdated slugs cannot bypass the business brief gate", () => {
  const article = { ...publishedBlogArticles[0], slug: "unapproved-backdated-model-news", datePublished: "2026-08-27" };
  assert.throws(() => assertPublicationEligible(article), /business brief/);
  const editorial = { focus: "website-search-conversion", businessPurpose: "Improve service enquiry qualification", audience: "Local service businesses", originalContribution: "A tested event map for this site", evidenceUrls: ["https://developers.google.com/analytics"], servicePath: "/services/web-design-for-local-businesses", cta: "Review the website scope" };
  assert.throws(() => assertPublicationEligible({ ...article, category: "AI", editorial }), /business brief/);
  assert.doesNotThrow(() => assertPublicationEligible({ ...article, category: "Web", editorial }));
  assert.throws(() => assertPublicationEligible({ ...article, category: "Web", editorial: { ...editorial, evidenceUrls: [] } }), /business brief/);
});

test("existing website query owners retain their URLs and gain decision evidence", () => {
  for (const slug of ["small-business-website-cost-india", "one-page-vs-multi-page-website", "google-business-profile-vs-website", "local-business-website-sections"]) {
    const page = resourcePages.find(page => page.path === `/resources/${slug}`);
    assert.ok(page);
    assert.equal(page.modified, "2026-10-05");
    assert.ok(page.relatedPaths.some(path => path.startsWith("/work/")));
  }
});
