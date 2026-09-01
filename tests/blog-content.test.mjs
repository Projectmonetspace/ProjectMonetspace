import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

import { blogArticles, findPublishedArticle, publishedBlogArticles } from "../app/lib/blog-content-registry.ts";

const expectedSlugs = [
  "mercury-2-5-preview",
  "mercury-2-5-api-pricing",
  "google-ads-ai-max-migration",
  "google-ads-ai-max-migration-checklist",
  "ai-max-broad-match-vs-aca",
  "flowise-shutdown-end-of-life",
  "migrate-from-flowise",
  "flowise-alternatives",
  "browserskill",
  "browserskill-install",
  "marketing-skills-ai-agents",
  "marketing-skills-v2-migration",
  "install-marketing-skills-claude-code-codex-cursor",
  "chatgpt-ads",
  "how-to-advertise-on-chatgpt",
  "chatgpt-ads-pricing",
  "instagram-ai-generated-profile-label",
  "how-to-add-instagram-ai-generated-profile-label",
  "optimizely-virtual-teammates",
  "optimizely-seo-ai-search-analyst",
  "how-to-set-up-optimizely-virtual-teammates",
  "stackscope",
  "stackscope-api-mcp",
  "stackscope-lead-generation",
  "caddi-ai-automation",
  "caddi-pricing",
  "how-to-use-caddi",
  "olostep",
  "olostep-api",
  "olostep-claude-code-cursor-codex",
  "topview-motion-studio",
  "how-to-use-topview-motion-studio",
  "openmontage-agentic-video-production",
  "how-to-install-openmontage",
  "openmontage-reference-video-reels-shorts",
  "youtube-shopping-amazon-affiliate",
  "how-to-tag-amazon-products-youtube-shopping",
  "google-ads-api-developer-assistant-v4",
  "how-to-install-google-ads-api-developer-assistant",
  "cohere-parse-v5-document-parsing",
  "how-to-use-cohere-parse-api",
  "staats-agent-native-website-analytics",
  "how-to-use-staats-analytics-mcp",
  "amd-rocm-10-rocm-ai",
  "how-to-install-rocm-10-supported-gpus",
  "amd-skills-claude-code-cursor-codex",
  "perplexity-portable-computer",
  "how-to-use-perplexity-portable-computer-dgx-spark",
  "sparkstation-ai-filmmaking-platform",
  "how-to-use-sparkstation-ai-filmmaking-workflow",
  "sparkstation-ai-ad-generator",
  "google-demand-gen-august-2026-update",
  "how-to-use-multimodal-video-creation-asset-studio",
  "how-to-use-midjourney-v8-2-edit-model",
  "run-glm-5-3-locally",
  "glm-5-3-license",
  "ibm-granite-4-2",
  "run-ibm-granite-4-2-locally",
  "glm-5-3",
  "midjourney-v8-2-edit-model",
  "praxist-autonomous-ai-research-system",
  "how-to-install-use-praxist-codex-claude",
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

const supportedCategories = new Set(["AI", "Social Media", "Marketing", "Creator Tools", "Web", "Automation", "SEO", "Other"]);

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
    assert.ok(supportedCategories.has(article.category), `${article.slug} uses a supported editorial category`);
    assert.match(article.datePublished, /^(2026-08-(27|28|29|30|31)|2026-09-0(1|2))$/);
    assert.equal(article.dateModified, article.datePublished);
  }
});

test("supporting articles have a reciprocal main-article relationship", () => {
  const supportingArticles = publishedBlogArticles.filter((article) => article.articleType === "supporting");
  assert.ok(supportingArticles.length > 0);
  for (const supporting of supportingArticles) {
    assert.ok(supporting.parentSlug, `${supporting.slug} has a parent slug`);
    const parent = findPublishedArticle(supporting.parentSlug);
    assert.ok(parent, `${supporting.slug} parent is published`);
    assert.ok(supporting.relatedPaths.includes(`/blog/${parent.slug}`), `${supporting.slug} links back to parent`);
    assert.ok(parent.relatedPaths.includes(`/blog/${supporting.slug}`), `${parent.slug} links to ${supporting.slug}`);
  }
});

test("blog content registry remains the only sitemap source", async () => {
  const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(sitemap, /publishedBlogArticles/);
  assert.doesNotMatch(sitemap, /87|89|137|139/);
});
