import type { BlogArticle } from "./blog-types.ts";

const museSparkFableSources = [
  { label: "Meta AI Research — Introducing Muse Spark 1.3", url: "https://research.meta.ai/blog/introducing-muse-spark-1-3" },
  { label: "Vercel AI Gateway — Muse Spark 1.3 API", url: "https://vercel.com/ai-gateway/models/muse-spark-1.3/api" },
  { label: "Vercel AI Gateway — Muse Spark 1.3 Contributor API", url: "https://vercel.com/ai-gateway/models/muse-spark-1.3-contributor/api" },
  { label: "Anthropic — Claude Fable 5.1", url: "https://www.anthropic.com/claude/fable" },
];

export const museSpark13ComparisonArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    parentSlug: "muse-spark-1-3",
    cluster: "Muse Spark 1.3",
    targetSearchIntent: "Commercial comparison intent: choose between Muse Spark 1.3 and Claude Fable 5.1 for coding agents, long-running automation, price-sensitive workflows and demanding knowledge work.",
    targetQuery: "Muse Spark 1.3 vs Claude Fable 5.1",
    slug: "muse-spark-1-3-vs-claude-fable-5-1",
    title: "Muse Spark 1.3 vs Claude Fable 5.1: Which Fits Your Workflow?",
    metaTitle: "Muse Spark 1.3 vs Claude Fable 5.1: Pricing, Coding & Agents",
    metaDescription: "Compare Muse Spark 1.3 and Claude Fable 5.1 on current pricing, coding and agent workflows, availability and vendor-reported evidence without unsupported winner claims.",
    h1: "Muse Spark 1.3 vs Claude Fable 5.1: Which Model Fits Your Workflow?",
    excerpt: "Muse Spark 1.3 brings unusually low gateway pricing to coding and agent workflows, while Claude Fable 5.1 targets Anthropic's hardest long-running coding and knowledge work. The better choice depends on the task, tool stack and total cost per successful outcome.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Comparison of Muse Spark 1.3 and Claude Fable 5.1 for pricing, coding and agent workflows",
    sections: [
      {
        id: "short-version",
        title: "The short version",
        blocks: [
          { type: "paragraph", html: "<strong>Muse Spark 1.3</strong> is the more aggressive choice on listed gateway token price: Vercel currently shows $1.25/M input and $4.25/M output for its standard route, while Anthropic lists <strong>Claude Fable 5.1</strong> at $10/M input and $50/M output." },
          { type: "paragraph", html: "That price gap does not establish a universal winner. Fable 5.1 is Anthropic's most capable generally available model and is explicitly positioned for ambitious, long-running coding and knowledge work. Compare success rate, latency, retries and human correction time on your own tasks." },
        ],
      },
      {
        id: "pricing",
        title: "Muse Spark 1.3 vs Claude Fable 5.1 pricing",
        blocks: [
          { type: "paragraph", html: "Vercel AI Gateway currently lists <code>meta/muse-spark-1.3</code> at <strong>$1.25/M input</strong>, <strong>$4.25/M output</strong> and $0.15/M cached-input reads. These are Vercel gateway rates and should not be silently generalized to every deployment surface." },
          { type: "paragraph", html: "Anthropic currently lists Claude Fable 5.1 at <strong>$10/M input</strong> and <strong>$50/M output</strong>, with cache reads at <strong>$0.25/M</strong>. Anthropic also notes that US-only inference carries a 1.1x multiplier for input and output tokens." },
          { type: "note", html: "A cheaper token is not necessarily a cheaper completed task. Agent workflows can amplify differences in retries, repeated context, output length, tool loops and human review." },
        ],
      },
      {
        id: "contributor-tier",
        title: "Muse Spark contributor pricing has a data-use tradeoff",
        blocks: [
          { type: "paragraph", html: "Vercel also exposes <code>meta/muse-spark-1.3-contributor</code> at $0.10/M input and $0.20/M output. Vercel states that usage on this route is permitted to improve Meta's products." },
          { type: "paragraph", html: "That can make the contributor route attractive for non-sensitive experimentation, but it changes the data-policy decision. Do not send confidential code, client data, regulated information or secrets unless the current provider terms and your organization policy explicitly permit it." },
        ],
      },
      {
        id: "coding-agents",
        title: "Coding and agent workflows",
        blocks: [
          { type: "paragraph", html: "Meta says Muse Spark 1.3 is designed to sustain longer-horizon work, juggle multiple workflows in one long thread, gather missing context with tools and correct gaps in its plan. It is rolling out in Muse Code and Meta Model API, with Vercel exposing it through AI Gateway." },
          { type: "paragraph", html: "Anthropic describes Fable 5.1 as its most capable model for ambitious coding projects and long-running work across many applications. It is available through Claude's product and API surfaces as well as major cloud marketplaces." },
        ],
      },
      {
        id: "context-availability",
        title: "Context and availability: verify the surface you will actually use",
        blocks: [
          { type: "paragraph", html: "Vercel currently documents a <strong>1M-token context window</strong> for Muse Spark 1.3. Meta says previously available reasoning modes are usable now, while max reasoning remains pending additional safety testing." },
          { type: "paragraph", html: "Anthropic's Fable 5.1 launch page documents broad product, API and cloud availability but does not state the context limit on that page. Because limits can vary by platform and documentation surface, confirm the exact Fable 5.1 context and output limits for the endpoint you plan to deploy rather than assuming equivalence from a comparison table." },
        ],
      },
      {
        id: "benchmarks",
        title: "Do not compare unrelated vendor benchmark headlines",
        blocks: [
          { type: "paragraph", html: "Meta's launch material reports strong gains for Muse Spark 1.3 on coding and agentic evaluations. Anthropic reports Fable 5.1 improvements across coding, knowledge-work and long-running problem-solving benchmarks with its production safeguards enabled." },
          { type: "paragraph", html: "Those results come from different vendors, evaluation setups and sometimes different harnesses. A single Meta score and a single Anthropic score are not enough to declare one model universally better. Prefer shared third-party evaluations when available and a representative internal test set for production decisions." },
        ],
      },
      {
        id: "which-to-choose",
        title: "Which model should you test first?",
        blocks: [
          { type: "paragraph", html: "Test Muse Spark 1.3 first when raw API cost is a major constraint, your workload is coding- or agent-heavy, and the Meta/Vercel deployment and data terms fit your use case. The standard route is already inexpensive relative to Fable 5.1, while the contributor route is cheaper again with a material data-use tradeoff." },
          { type: "paragraph", html: "Test Claude Fable 5.1 first when you already rely on Claude Code or Anthropic APIs, need Anthropic's strongest generally available model for difficult long-running work, or want to minimize migration friction inside an established Claude tool stack." },
          { type: "list", items: ["Run the same prompts and tools", "Use the same time and retry limits", "Measure task success, latency and token usage", "Track human correction time", "Compare total cost per successful task rather than token price alone"] },
        ],
      },
      {
        id: "bottom-line",
        title: "Bottom line",
        blocks: [
          { type: "paragraph", html: "Muse Spark 1.3 makes the frontier-model comparison compelling because Meta is pairing long-horizon coding and agent claims with much lower listed gateway pricing. Claude Fable 5.1 remains Anthropic's strongest generally available option for ambitious coding and knowledge work." },
          { type: "paragraph", html: "There is not enough comparable independent evidence to name a universal winner. For serious production use, choose with workload-specific A/B tests and recheck current pricing, availability, limits and data terms immediately before committing traffic." },
        ],
      },
    ],
    sources: museSparkFableSources,
    relatedPaths: ["/blog/muse-spark-1-3", "/blog/muse-spark-1-3-api-pricing", "/blog/claude-fable-5-1"],
  },
];
