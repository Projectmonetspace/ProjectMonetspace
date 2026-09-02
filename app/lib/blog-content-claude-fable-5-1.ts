import type { BlogArticle } from "./blog-types.ts";

const fableSources = [
  { label: "Anthropic — Claude Fable 5.1", url: "https://platform.claude.com/docs/en/models/fable-5-1/overview" },
  { label: "Anthropic — Claude Fable and Mythos 5.1 announcement", url: "https://www.anthropic.com/claude-fable-and-mythos-5-1" },
  { label: "Anthropic — Fable 5.1 migration guide", url: "https://platform.claude.com/docs/en/models/fable-5-1/migration-guide" },
];

export const claudeFable51Articles: BlogArticle[] = [
  {
    status: "published", articleType: "main", cluster: "Claude Fable 5.1",
    targetSearchIntent: "Understand Claude Fable 5.1, its release, pricing, API identifiers, context and output limits, availability, benchmark claims and migration implications.",
    targetQuery: "Claude Fable 5.1", slug: "claude-fable-5-1",
    title: "Claude Fable 5.1: Pricing, API, Benchmarks & What Changed", metaTitle: "Claude Fable 5.1: Pricing, API, Benchmarks & What Changed",
    metaDescription: "Claude Fable 5.1 launched September 1, 2026. See API pricing, 1M context, 128K output, cache-read savings, availability and key changes.",
    h1: "Claude Fable 5.1: Anthropic’s New Frontier Model Explained",
    excerpt: "Claude Fable 5.1 is Anthropic’s latest Fable model for demanding reasoning and long-horizon agentic work, with cheaper cache reads and documented migration changes.",
    category: "AI", author: "Project Monet Editorial Team", datePublished: "2026-09-02", dateModified: "2026-09-02",
    ogAlt: "Claude Fable 5.1 frontier AI model with long-context agent workflow visualization",
    sections: [
      { id: "release", title: "Release and availability", blocks: [
        { type: "paragraph", html: "Anthropic documents <strong>Claude Fable 5.1</strong> as released on September 1, 2026 and active as its latest Fable model. The Claude API identifier is <code>claude-fable-5-1</code>." },
        { type: "paragraph", html: "Anthropic lists availability through the Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry and Claude Platform on AWS. Claude Mythos 5.1 shares the same underlying capabilities but is invitation-only through Project Glasswing; it should not be treated as generally available." },
      ]},
      { id: "context", title: "Context window, output and reasoning", blocks: [
        { type: "paragraph", html: "The current model documentation lists a <strong>1 million-token context window</strong> and up to <strong>128K output tokens</strong>. Adaptive thinking is always on, with effort controlling reasoning depth." },
        { type: "paragraph", html: "A large context window is useful for codebases, research corpora and long agent histories, but teams should still evaluate retrieval and task accuracy on their own data." },
      ]},
      { id: "pricing", title: "Claude Fable 5.1 API pricing", blocks: [
        { type: "paragraph", html: "Anthropic currently lists <strong>$10 per million input tokens</strong> and <strong>$50 per million output tokens</strong>. Five-minute cache writes cost $12.50/M, one-hour cache writes cost $20/M, and cache reads cost <strong>$0.25/M</strong>. Batch API input and output receive a 50% discount." },
        { type: "paragraph", html: "Base input and output rates are unchanged from Fable 5. The important pricing change is cache reads at one quarter of Fable 5’s rate, which can matter for long-running agents that repeatedly reuse large cached prefixes." },
      ]},
      { id: "changes", title: "What changed from Fable 5", blocks: [
        { type: "paragraph", html: "Anthropic documents three breaking changes for existing Fable 5 callers: forced tool use can return an error, earlier models cannot read Fable 5.1 thinking blocks, and editing earlier turns invalidates thinking blocks." },
        { type: "paragraph", html: "Additions include per-message effort, turn-scoped system messages, readable progress updates between tool calls, lower cache-read pricing and content provenance. Production agents should follow Anthropic’s migration guide instead of blindly swapping the model ID." },
      ]},
      { id: "benchmarks", title: "How to read Anthropic’s benchmark claims", blocks: [
        { type: "paragraph", html: "Anthropic’s launch materials report gains over Fable 5 across coding, research and automation evaluations. These are <strong>vendor-published benchmark results</strong>, not independent proof of universal superiority." },
        { type: "paragraph", html: "Harnesses, effort settings, tools, safeguards and task mixes can materially change results. For production decisions, compare task success, latency and total cost on a representative internal evaluation set." },
      ]},
      { id: "fit", title: "Where Fable 5.1 fits", blocks: [
        { type: "paragraph", html: "Anthropic’s model guide says most workloads should start with Claude Opus 5 and positions Fable 5.1 for demanding reasoning and long-horizon agentic work when Opus 5 at higher effort still falls short." },
        { type: "paragraph", html: "That makes Fable 5.1 most relevant to difficult coding agents, multistep research, large-document work and workflows where cached context is repeatedly reused. Choose it on task-level quality and total cost per successful outcome rather than model tier alone." },
      ]},
      { id: "retention", title: "Data retention and access boundaries", blocks: [
        { type: "paragraph", html: "Anthropic’s current documentation says Fable 5.1 requires 30-day data retention and is not available with zero data retention unless Anthropic expressly authorizes it. Review the current provider and organizational terms before sending sensitive production data." },
      ]},
    ], sources: fableSources, relatedPaths: ["/blog/claude-fable-5-1-vs-fable-5"],
  },
  {
    status: "published", articleType: "supporting", cluster: "Claude Fable 5.1",
    targetSearchIntent: "Decide whether to migrate from Claude Fable 5 to Fable 5.1 by comparing pricing, cache economics, API behavior and operational tradeoffs.",
    targetQuery: "Claude Fable 5.1 vs Fable 5", parentSlug: "claude-fable-5-1", slug: "claude-fable-5-1-vs-fable-5",
    title: "Claude Fable 5.1 vs Fable 5: What Changed & Should You Upgrade?", metaTitle: "Claude Fable 5.1 vs Fable 5: Pricing, Benchmarks & Migration",
    metaDescription: "Compare Claude Fable 5.1 vs Fable 5 on pricing, cache costs, benchmark claims, API changes and migration risks before you upgrade.",
    h1: "Claude Fable 5.1 vs Fable 5: What Actually Changed?",
    excerpt: "A practical Fable 5.1 versus Fable 5 migration comparison covering unchanged base pricing, cheaper cache reads and breaking agent/API behavior.",
    category: "AI", author: "Project Monet Editorial Team", datePublished: "2026-09-02", dateModified: "2026-09-02",
    ogAlt: "Claude Fable 5.1 versus Fable 5 comparison showing cache cost and agent migration changes",
    sections: [
      { id: "pricing", title: "Pricing: same base rate, cheaper cache reads", blocks: [
        { type: "paragraph", html: "Both models use <strong>$10/M input</strong> and <strong>$50/M output</strong> pricing. Fable 5.1 cache reads cost <strong>$0.25/M</strong>, one quarter of Fable 5’s $1/M cache-read rate. Five-minute and one-hour cache-write rates remain $12.50/M and $20/M." },
        { type: "paragraph", html: "The economic advantage therefore grows with cache reuse. Measure your own cache hit rate and output volume rather than assuming a headline savings percentage applies to every workload." },
      ]},
      { id: "capability", title: "Capability and benchmark changes", blocks: [
        { type: "paragraph", html: "Anthropic reports stronger Fable 5.1 performance across long-horizon coding, research and automation evaluations. Those figures are vendor-published launch benchmarks, so your own regression suite should carry more weight for a production migration." },
      ]},
      { id: "breaking", title: "API differences that can break a blind swap", blocks: [
        { type: "paragraph", html: "Anthropic documents three breaking changes: forced tool use can return an error, earlier models cannot read Fable 5.1 thinking blocks, and editing earlier conversation turns invalidates thinking blocks." },
        { type: "paragraph", html: "If an agent relies on forced tool selection, persists thinking blocks, rewrites prior turns or has custom retry logic, test those paths before moving production traffic." },
      ]},
      { id: "context", title: "Context and output", blocks: [
        { type: "paragraph", html: "Fable 5.1 is documented with a 1M-token context window and up to 128K output. The migration is therefore not primarily about a larger context window; it is about model behavior, quality and cache economics." },
      ]},
      { id: "upgrade", title: "Should you upgrade?", blocks: [
        { type: "paragraph", html: "Evaluate Fable 5.1 if you run difficult coding or research agents, reuse large cached contexts or see better task success in your own tests. Delay a full migration until documented tool-use and thinking-state changes are regression-tested." },
        { type: "list", ordered: true, items: ["Run a representative evaluation set on both models.", "Track task success and latency.", "Measure cache hit rate and token consumption.", "Regression-test forced tools and thinking-block handling.", "Compare total cost per successful task before shifting traffic."] },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Fable 5.1 is not simply Fable 5 with a lower sticker price. Base token rates are unchanged, but cached context is four times cheaper to read and Anthropic documents meaningful migration differences. Upgrade where measured task quality and total economics justify it." },
      ]},
    ], sources: fableSources, relatedPaths: ["/blog/claude-fable-5-1"],
  },
];
