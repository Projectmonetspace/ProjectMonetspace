import type { BlogArticle } from "./blog-types.ts";

const sources = [
  { label: "Anthropic — Claude Fable 5.1", url: "https://platform.claude.com/docs/en/models/fable-5-1/overview" },
  { label: "Anthropic — Claude Fable and Mythos 5.1 announcement", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
  { label: "Anthropic — Fable 5.1 migration guide", url: "https://platform.claude.com/docs/en/models/fable-5-1/migration-guide" },
];

export const claudeFable51ApiArticles: BlogArticle[] = [
  {
    status: "published", articleType: "supporting", cluster: "Claude Fable 5.1",
    targetSearchIntent: "Implement Claude Fable 5.1 through the API with correct model IDs, token and cache pricing, context limits, retention constraints and migration-safe settings.",
    targetQuery: "Claude Fable 5.1 API pricing", parentSlug: "claude-fable-5-1", slug: "claude-fable-5-1-api-pricing",
    title: "Claude Fable 5.1 API & Pricing Guide", metaTitle: "Claude Fable 5.1 API & Pricing: Model ID, Cache Cost & Setup",
    metaDescription: "Use Claude Fable 5.1 via API with the right model ID, 1M context, 128K output, $10/$50 token pricing and $0.25/M cache reads.",
    h1: "Claude Fable 5.1 API & Pricing Guide",
    excerpt: "A practical Claude Fable 5.1 API guide covering the model ID, context and output limits, prompt-cache economics, migration checks and retention constraints.",
    category: "AI", author: "Project Monet Editorial Team", datePublished: "2026-09-02", dateModified: "2026-09-02",
    ogAlt: "Claude Fable 5.1 API pricing and prompt-cache workflow",
    sections: [
      { id: "access", title: "API access and model identifier", blocks: [
        { type: "paragraph", html: "Anthropic lists Claude Fable 5.1 on the Claude API as <code>claude-fable-5-1</code>. Anthropic also lists availability through Amazon Web Services, Google Cloud and Microsoft Foundry." },
        { type: "paragraph", html: "Provider-specific identifiers can differ, so verify the current identifier in the provider documentation instead of assuming the native Claude API string works everywhere." },
      ]},
      { id: "limits", title: "Context and output limits", blocks: [
        { type: "paragraph", html: "Anthropic documents a <strong>1 million-token context window</strong> and up to <strong>128K output tokens</strong> for Fable 5.1. Adaptive thinking is always on, with effort controlling reasoning depth." },
        { type: "paragraph", html: "Treat the large context ceiling as capacity, not a target. Sending unnecessary context can raise latency and spend without improving task success." },
      ]},
      { id: "pricing", title: "Claude Fable 5.1 API pricing", blocks: [
        { type: "paragraph", html: "Anthropic currently lists <strong>$10 per million input tokens</strong> and <strong>$50 per million output tokens</strong>. Five-minute cache writes cost $12.50/M, one-hour cache writes cost $20/M, and cache reads cost <strong>$0.25/M</strong>. Batch API input and output receive a 50% discount." },
        { type: "paragraph", html: "The cache-read rate is 75% below Fable 5’s $1/M rate. Anthropic estimates about 25% lower cost for typical Fable workloads and up to roughly 45% for highly agentic workloads; those are vendor estimates, not guaranteed savings." },
      ]},
      { id: "cost-planning", title: "Plan cost around cache reuse", blocks: [
        { type: "paragraph", html: "Measure uncached input, cache writes, cache reads, output length and completed-task success. Context-heavy agents that repeatedly reuse repositories or tool definitions can benefit more from $0.25/M cache reads than short single-turn tasks." },
        { type: "paragraph", html: "Compare total cost per successful task against Fable 5 and cheaper Claude tiers rather than comparing token prices in isolation." },
      ]},
      { id: "migration", title: "Migration checks before production", blocks: [
        { type: "paragraph", html: "Anthropic documents breaking behavior around forced tool use and thinking-block compatibility. Forced tool selection can error, earlier models cannot read Fable 5.1 thinking blocks, and editing earlier turns invalidates thinking blocks." },
        { type: "list", ordered: true, items: ["Replace the model with the provider-specific Fable 5.1 identifier.", "Confirm account-specific limits and provider settings.", "Measure cache-hit behavior before estimating savings.", "Regression-test tool choice, thinking blocks and retries.", "Run a representative quality set at the effort levels you plan to use."] },
      ]},
      { id: "retention", title: "Data retention can affect deployment", blocks: [
        { type: "paragraph", html: "Anthropic’s current model documentation says Fable 5.1 requires 30-day data retention and is not generally available with zero data retention unless Anthropic expressly authorizes the organization." },
        { type: "paragraph", html: "For regulated or privacy-sensitive workloads, verify contractual and provider-specific retention terms before routing production data to the model." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Fable 5.1’s API economics are most attractive for long, context-heavy agents because base token rates stay unchanged while cached context is substantially cheaper to reread." },
        { type: "paragraph", html: "For the broader model overview, see the Claude Fable 5.1 guide; for migration tradeoffs, compare Fable 5.1 with Fable 5 before shifting production traffic." },
      ]},
    ], sources, relatedPaths: ["/blog/claude-fable-5-1", "/blog/claude-fable-5-1-vs-fable-5"],
  },
];
