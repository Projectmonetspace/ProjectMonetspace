import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

import { blogArticles, findPublishedArticle, publishedBlogArticles } from "../app/lib/blog-content.ts";

const expectedSlugs = [
  "photoshop-27-10-ai-assisted-editor-prompt-to-edit",
  "how-to-use-photoshop-prompt-to-edit-ai-assisted-editor",
  "photoshop-light-adjustment-layer",
  "google-site-reputation-policy-eea-2026",
  "fix-google-site-reputation-manual-action",
  "parasite-seo-google-site-reputation-policy-eea",
  "tencent-hy4-preview",
  "run-hy4-preview-locally",
  "hy4-preview-vs-glm-5-3-vs-kimi-k3",
  "alibaba-wan-3-0",
  "wan-3-0-api-guide",
  "wan-3-0-vs-gemini-omni-vs-veo",
  "glm-5-3-flash",
  "glm-5-3-flash-vs-glm-5-3",
  "gemini-omni-flash",
  "how-to-use-gemini-omni-flash-api",
  "gemini-omni-flash-vs-veo-3-1",
  "anthropic-model-hardware-standard-mhs",
  "model-hardware-standard-vs-mcp",
  "meta-muse-image-api-pricing",
  "how-to-use-muse-image-api-vercel",
  "accuknox-agentz-ai-agent-platform",
  "how-to-run-qwen3-8-flash-next-locally",
  "claudeforce-salesforce-in-claude",
  "qwen3-8-flash-next",
  "gemini-3-5-transcribe",
  "instagram-first-draft-reels",
];

test("publishes exactly the approved, unique canonical articles", () => {
  assert.deepEqual(publishedBlogArticles.map((article) => article.slug), expectedSlugs);
  assert.equal(new Set(blogArticles.map((article) => article.slug)).size, blogArticles.length);
  assert.equal(new Set(publishedBlogArticles.map((article) => article.metaTitle)).size, publishedBlogArticles.length);
  for (const article of publishedBlogArticles) {
    assert.equal(findPublishedArticle(article.slug), article);
    const blockCount = article.sections.reduce((count, section) => count + section.blocks.length, 0);
    assert.ok(article.sections.length >= 4, `${article.slug} keeps a useful heading structure`);
    assert.ok(blockCount >= 8, `${article.slug} keeps substantive article content`);
    assert.ok(article.sources.length >= 3, `${article.slug} includes source links`);
    assert.ok(article.cluster, `${article.slug} belongs to a topic cluster`);
    assert.ok(article.targetSearchIntent, `${article.slug} has a distinct search intent`);
    assert.ok(article.targetQuery, `${article.slug} has a target query`);
    assert.match(article.datePublished, /^2026-08-(27|28)$/);
    assert.equal(article.dateModified, article.datePublished);
  }
});

test("supporting articles have a reciprocal main-article relationship", () => {
  const supportingArticles = publishedBlogArticles.filter((article) => article.articleType === "supporting");
  assert.ok(supportingArticles.length > 0);

  for (const article of supportingArticles) {
    assert.ok(article.parentSlug, `${article.slug} names its main article`);
    const parent = findPublishedArticle(article.parentSlug);
    assert.ok(parent, `${article.slug} parent is published`);
    assert.equal(parent.articleType, "main");
    assert.equal(parent.cluster, article.cluster);
    assert.ok(article.relatedPaths.includes(`/blog/${parent.slug}`), `${article.slug} links to its main article`);
    assert.ok(parent.relatedPaths.includes(`/blog/${article.slug}`), `${parent.slug} links back to its supporting article`);
  }
});

test("blog routes are reusable and published-state driven", async () => {
  const route = await readFile(new URL("../app/(seo)/blog/[slug]/page.tsx", import.meta.url), "utf8");
  const index = await readFile(new URL("../app/(seo)/blog/page.tsx", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../app/lib/sitemap-content.ts", import.meta.url), "utf8");

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
  assert.match(component, /findPublishedArticle\(slug\)/);
  assert.match(imageRoute, /new ImageResponse/);
  assert.doesNotMatch(route, /opengraph-image/);
  assert.doesNotMatch(component, /opengraph-image/);
});
