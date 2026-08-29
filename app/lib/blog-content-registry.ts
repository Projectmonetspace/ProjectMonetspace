import { blogArticles as legacyBlogArticles } from "./blog-content.ts";
import { glm53MidjourneyArticles } from "./blog-content-glm53-midjourney-v82.ts";
import { photoshopGoogleArticles } from "./blog-content-photoshop-google.ts";
import { praxistArticles } from "./blog-content-praxist.ts";
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

const registeredArticles: BlogArticle[] = [
  ...glm53MidjourneyArticles,
  ...praxistArticles,
  ...photoshopGoogleArticles,
  ...legacyBlogArticles,
].map(validateArticle);

const registeredSlugs = registeredArticles.map((article) => article.slug);
if (new Set(registeredSlugs).size !== registeredSlugs.length) {
  throw new Error("Duplicate blog article slug detected in the central registry");
}

export const blogArticles = registeredArticles;
export const publishedBlogArticles = blogArticles.filter((article) => article.status === "published");

export function findPublishedArticle(slug: string) {
  return publishedBlogArticles.find((article) => article.slug === slug);
}
