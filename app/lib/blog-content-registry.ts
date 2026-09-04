import { approvedArticles20260829 } from "./blog-content-approved-2026-08-29.ts";
import { blogArticles as legacyBlogArticles } from "./blog-content.ts";
import { alchemerIrisArticles } from "./blog-content-alchemer-iris.ts";
import { asusProArtRtxSparkArticles } from "./blog-content-asus-proart-rtx-spark.ts";
import { browserSkillArticles } from "./blog-content-browserskill.ts";
import { caddiArticles } from "./blog-content-caddi.ts";
import { chatgptAdsArticles } from "./blog-content-chatgpt-ads.ts";
import { claudeFable51ApiArticles } from "./blog-content-claude-fable-5-1-api.ts";
import { claudeFable51Articles } from "./blog-content-claude-fable-5-1.ts";
import { cleanShot5Articles } from "./blog-content-cleanshot-5.ts";
import { cleanShotComparisonArticles } from "./blog-content-cleanshot-comparison.ts";
import { cohereParseArticles } from "./blog-content-cohere-parse.ts";
import { flowiseArticles } from "./blog-content-flowise.ts";
import { gemini38FlashArticles } from "./blog-content-gemini-3-8-flash.ts";
import { gemini38Vs37Articles } from "./blog-content-gemini-3-8-vs-3-7.ts";
import { geminiAgenticVideoArticles } from "./blog-content-gemini-agentic-video.ts";
import { glm53MidjourneyArticles } from "./blog-content-glm53-midjourney-v82.ts";
import { googleAiMaxMigrationArticles } from "./blog-content-google-ai-max-migration.ts";
import { googleAdsDeveloperAssistantArticles } from "./blog-content-google-ads-developer-assistant.ts";
import { googleDemandGenAugust2026Articles } from "./blog-content-google-demand-gen-august-2026.ts";
import { googlePicsArticles } from "./blog-content-google-pics.ts";
import { gpt6AstraArticles } from "./blog-content-gpt-6-astra.ts";
import { huggingFaceWebgpuKernelArticles } from "./blog-content-hugging-face-webgpu-kernels.ts";
import { instagramAiProfileArticles } from "./blog-content-instagram-ai-profiles.ts";
import { marketingSkillsArticles } from "./blog-content-marketing-skills.ts";
import { mercury25Articles } from "./blog-content-mercury-2-5.ts";
import { monidArticles } from "./blog-content-monid.ts";
import { monidMarketingWorkflowArticles } from "./blog-content-monid-marketing-workflows.ts";
import { olostepArticles } from "./blog-content-olostep.ts";
import { openMontageArticles } from "./blog-content-openmontage.ts";
import { optimizelyMarkBenchArticles } from "./blog-content-optimizely-mark-bench.ts";
import { optimizelyVirtualTeammateArticles } from "./blog-content-optimizely-virtual-teammates.ts";
import { perplexityPortableArticles } from "./blog-content-perplexity-portable.ts";
import { photoshopGoogleArticles } from "./blog-content-photoshop-google.ts";
import { praxistArticles } from "./blog-content-praxist.ts";
import { rocm10Articles } from "./blog-content-rocm-10.ts";
import { solarWmArticles } from "./blog-content-solarwm.ts";
import { sparkStationAdArticles } from "./blog-content-sparkstation-ads.ts";
import { sparkStationArticles } from "./blog-content-sparkstation.ts";
import { stackScopeArticles } from "./blog-content-stackscope.ts";
import { staatsArticles } from "./blog-content-staats.ts";
import { topviewMotionStudioArticles } from "./blog-content-topview-motion-studio.ts";
import { vibeVoiceAsrStreamingArticles } from "./blog-content-vibevoice-asr-streaming.ts";
import { youtubeAmazonArticles } from "./blog-content-youtube-amazon.ts";
import type { BlogArticle, BlogCategory } from "./blog-types.ts";

const supportedCategories = new Set<BlogCategory>([
  "AI", "Social Media", "Marketing", "Creator Tools", "Web", "Automation", "SEO", "Other",
]);

function validateArticle(article: BlogArticle): BlogArticle {
  if (!article.slug || !article.title || !article.h1 || !article.metaTitle || !article.metaDescription) throw new Error(`Invalid blog article core fields for ${article.slug || "unknown slug"}`);
  if (!supportedCategories.has(article.category)) throw new Error(`Unsupported blog category ${article.category} for ${article.slug}`);
  if (article.sections.length < 1 || article.sources.length < 1) throw new Error(`Incomplete blog article content for ${article.slug}`);
  if (article.articleType === "supporting" && !article.parentSlug) throw new Error(`Supporting article ${article.slug} is missing parentSlug`);
  return article;
}

const sourceArticles: BlogArticle[] = [
  ...gpt6AstraArticles,
  ...alchemerIrisArticles,
  ...gemini38FlashArticles,
  ...gemini38Vs37Articles,
  ...monidArticles,
  ...monidMarketingWorkflowArticles,
  ...vibeVoiceAsrStreamingArticles,
  ...huggingFaceWebgpuKernelArticles,
  ...solarWmArticles,
  ...cleanShotComparisonArticles,
  ...cleanShot5Articles,
  ...optimizelyMarkBenchArticles,
  ...asusProArtRtxSparkArticles,
  ...claudeFable51ApiArticles,
  ...googlePicsArticles,
  ...geminiAgenticVideoArticles,
  ...claudeFable51Articles,
  ...mercury25Articles,
  ...googleAiMaxMigrationArticles,
  ...flowiseArticles,
  ...browserSkillArticles,
  ...marketingSkillsArticles,
  ...chatgptAdsArticles,
  ...instagramAiProfileArticles,
  ...optimizelyVirtualTeammateArticles,
  ...stackScopeArticles,
  ...caddiArticles,
  ...olostepArticles,
  ...topviewMotionStudioArticles,
  ...openMontageArticles,
  ...youtubeAmazonArticles,
  ...googleAdsDeveloperAssistantArticles,
  ...cohereParseArticles,
  ...staatsArticles,
  ...rocm10Articles,
  ...perplexityPortableArticles,
  ...sparkStationArticles,
  ...sparkStationAdArticles,
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

const modifiedMainSlugs = new Set(["cleanshot-5-studio-mode", "monid-agent-tools", "gemini-3-8-flash"]);
const registeredArticles: BlogArticle[] = sourceArticles.map((article) => {
  const reciprocalSupportingPaths = article.articleType === "main" ? (supportingPathsByParent.get(article.slug) ?? []) : [];
  const dateModified = modifiedMainSlugs.has(article.slug) ? "2026-09-03" : article.dateModified;
  return validateArticle({ ...article, dateModified, relatedPaths: [...new Set([...article.relatedPaths, ...reciprocalSupportingPaths])] });
});

const registeredSlugs = registeredArticles.map((article) => article.slug);
if (new Set(registeredSlugs).size !== registeredSlugs.length) throw new Error("Duplicate blog article slug detected in the central registry");

export const blogArticles = registeredArticles;
export const publishedBlogArticles = blogArticles.filter((article) => article.status === "published");

export function findPublishedArticle(slug: string) {
  return publishedBlogArticles.find((article) => article.slug === slug);
}
