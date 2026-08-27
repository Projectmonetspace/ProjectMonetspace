import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

import { blogArticles, findPublishedArticle, publishedBlogArticles } from "../app/lib/blog-content.ts";

const expectedSlugs = ["qwen3-8-flash-next", "gemini-3-5-transcribe", "instagram-first-draft-reels"];

test("publishes exactly the three approved, unique canonical articles", () => {
  assert.deepEqual(publishedBlogArticles.map((article) => article.slug), expectedSlugs);
  assert.equal(new Set(blogArticles.map((article) => article.slug)).size, blogArticles.length);
  assert.equal(new Set(publishedBlogArticles.map((article) => article.metaTitle)).size, publishedBlogArticles.length);
  for (const article of publishedBlogArticles) {
    assert.equal(findPublishedArticle(article.slug), article);
    assert.ok(article.sections.length >= 8, `${article.slug} keeps a substantive article structure`);
    assert.ok(article.sources.length >= 3, `${article.slug} includes source links`);
    assert.equal(article.datePublished, "2026-08-27");
    assert.equal(article.dateModified, "2026-08-27");
  }
});

test("blog routes are reusable and published-state driven", async () => {
  const route = await readFile(new URL("../app/(seo)/blog/[slug]/page.tsx", import.meta.url), "utf8");
  const index = await readFile(new URL("../app/(seo)/blog/page.tsx", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

  assert.match(route, /findPublishedArticle/);
  assert.match(route, /generateStaticParams/);
  assert.match(index, /publishedBlogArticles\.map/);
  assert.match(sitemap, /publishedBlogArticles\.map/);
  assert.doesNotMatch(route, /qwen3-8-flash-next|gemini-3-5-transcribe|instagram-first-draft-reels/);
});

test("articles provide canonical, article social metadata and BlogPosting schema", async () => {
  const route = await readFile(new URL("../app/(seo)/blog/[slug]/page.tsx", import.meta.url), "utf8");
  const component = await readFile(new URL("../app/components/blog-article.tsx", import.meta.url), "utf8");
  const imageRoute = await readFile(new URL("../app/(seo)/blog/[slug]/og/route.tsx", import.meta.url), "utf8");
  assert.match(route, /alternates: \{ canonical: path \}/);
  assert.match(route, /type: "article"/);
  assert.match(route, /publishedTime: article\.datePublished/);
  assert.match(route, /modifiedTime: article\.dateModified/);
  assert.match(component, /"@type": "BlogPosting"/);
  assert.match(component, /BreadcrumbList/);
  assert.match(route, /const image = `\$\{path\}\/og`/);
  assert.match(component, /src=\{`\/blog\/\$\{article\.slug\}\/og`\}/);
  assert.match(component, /unoptimized/);
  assert.match(imageRoute, /new ImageResponse/);
  assert.doesNotMatch(route, /opengraph-image/);
  assert.doesNotMatch(component, /opengraph-image/);
});
