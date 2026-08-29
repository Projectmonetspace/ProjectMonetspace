import { approvedArticles20260829 } from "./blog-content-approved-2026-08-29.ts";
import { blogArticles as legacyBlogArticles } from "./blog-content.ts";
import { glm53MidjourneyArticles } from "./blog-content-glm53-midjourney-v82.ts";
import { googleDemandGenAugust2026Articles } from "./blog-content-google-demand-gen-august-2026.ts";
import { photoshopGoogleArticles } from "./blog-content-photoshop-google.ts";
import { praxistArticles } from "./blog-content-praxist.ts";
import { sparkStationArticles } from "./blog-content-sparkstation.ts";
import type { BlogArticle, BlogCategory } from "./blog-types.ts";

const supportedCategories = new Set<BlogCategory>([
  "AI",
  "Social Media",
  "Marketing",
  "Creator Tools",
  "Web",
  "Automation",
  "SEO",
  "Other",
]);

function validateArticle(article: BlogArticle): BlogArticle {
  if (!article.slug || !article.title || !article.h1 || !article.metaTitle || !article.metaDescription) {
    throw new Error(`Invalid blog article core fields for ${article.slug || "unknown slug"}`);
  }
  if (!supportedCategories.has(article.category)) {
    throw new Error(`Unsupported blog category ${article.category} for ${article.slug}`);
  }
  if (article.sections.length < 1 || article.sources.length < 1) {
    throw new Error(`Incomplete blog article content for ${article.slug}`);
  }
  if (article.articleType === "supporting" && !article.parentSlug) {
    throw new Error(`Supporting article ${article.slug} is missing parentSlug`);
  }
  return article;
}

const sourceArticles: BlogArticle[] = [
  ...sparkStationArticles,
  ...googleDemandGenAugust2026Articles,
  ...approvedArticles20260829,
  ...glm53MidjourneyArticles,
  ...praxistArticles,
  ...photoshopGoogleArticles,
  ...legacyBlogArticles,
];

const supportingPathsByParent = new Map<string, string[]>();
for (const article of sourceArticles) {
  if (article.status !== "published" || article.articleType !== "supporting" || !article.parentSlug) continue;
  const paths = supportingPathsByParent.get(article.parentSlug) ?? [];
  paths.push(`/blog/${article.slug}`);
  supportingPathsByParent.set(article.parentSlug, paths);
}

const registeredArticles: BlogArticle[] = sourceArticles.map((article) => {
  const reciprocalSupportingPaths =
    article.articleType === "main" ? (supportingPathsByParent.get(article.slug) ?? []) : [];

  return validateArticle({
    ...article,
    relatedPaths: [...new Set([...article.relatedPaths, ...reciprocalSupportingPaths])],
  });
});

const registeredSlugs = registeredArticles.map((article) => article.slug);
if (new Set(registeredSlugs).size !== registeredSlugs.length) {
  throw new Error("Duplicate blog article slug detected in the central registry");
}

export const blogArticles = registeredArticles;
export const publishedBlogArticles = blogArticles.filter((article) => article.status === "published");

export function findPublishedArticle(slug: string) {
  return publishedBlogArticles.find((article) => article.slug === slug);
}
