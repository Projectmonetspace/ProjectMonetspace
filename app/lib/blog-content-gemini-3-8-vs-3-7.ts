import type { BlogArticle } from "./blog-types.ts";

const sources = [
  { label: "Google — Gemini 3.8 Flash launch", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/" },
  { label: "Google AI — What's new in Gemini 3.8 Flash", url: "https://ai.google.dev/gemini-api/docs/latest-model" },
  { label: "Google AI — Gemini API release notes", url: "https://ai.google.dev/gemini-api/docs/changelog" },
  { label: "Google — Gemini 3.7 Flash launch", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/" },
  { label: "Google AI — Gemini API pricing", url: "https://ai.google.dev/gemini-api/docs/pricing" },
];

export const gemini38Vs37Articles: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    cluster: "Gemini 3.8 Flash",
    targetSearchIntent: "Compare Gemini 3.8 Flash with 3.7 Flash and decide whether an existing production workload should migrate",
    targetQuery: "Gemini 3.8 Flash vs 3.7 Flash",
    parentSlug: "gemini-3-8-flash",
    slug: "gemini-3-8-flash-vs-3-7-flash",
    title: "Gemini 3.8 Flash vs 3.7 Flash: What Changed & Should You Migrate?",
    metaTitle: "Gemini 3.8 Flash vs 3.7 Flash: Pricing, Performance & Migration",
    metaDescription: "Compare Gemini 3.8 Flash vs 3.7 Flash on pricing, context, reasoning, coding, agents and token use, with a practical migration decision framework.",
    h1: "Gemini 3.8 Flash vs 3.7 Flash: What Changed and Should You Migrate?",
    excerpt: "Google positions Gemini 3.8 Flash as a stronger coding and agent model than 3.7 Flash at the same introductory token price, but migration still needs workload testing.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "Gemini 3.8 Flash versus 3.7 Flash comparison for pricing, coding and agent workloads",
    sections: [
      {
        id: "short-version",
        title: "The short version",
        blocks: [
          { type: "paragraph", html: "Google released Gemini 3.8 Flash as GA on September 2, 2026 and positions it as its most intelligent Flash model for long-horizon software engineering, autonomous agents and complex enterprise workflows." },
          { type: "paragraph", html: "The practical migration question is not simply which version number is newer. Benchmark 3.8 first when complex task completion matters; keep 3.7 in the comparison set when current workloads are already reliable, latency-sensitive or cost-efficient." },
        ],
      },
      {
        id: "pricing",
        title: "Pricing: same introductory base rate",
        blocks: [
          { type: "paragraph", html: "Google's September 2 launch states that Gemini 3.8 Flash is available at the same introductory price as 3.7 Flash: <strong>$0.75 per million input tokens</strong> and <strong>$3.75 per million output tokens</strong>." },
          { type: "paragraph", html: "Equal unit pricing does not guarantee equal cost per completed task. Google describes 3.8 as taking more deliberate reasoning steps and iterative tool calls on difficult work, so token use, latency, retries and tool-loop depth should be measured together." },
          { type: "note", html: "For detailed 3.8 API limits and pricing mechanics, see the <a href=\"/blog/gemini-3-8-flash-api-pricing\">Gemini 3.8 Flash API & Pricing Guide</a>." },
        ],
      },
      {
        id: "reasoning-agents",
        title: "Reasoning, coding and agent behavior",
        blocks: [
          { type: "paragraph", html: "Google's core 3.8 claim is stronger software-engineering, agentic and multi-step reasoning performance than 3.7 Flash. Those are vendor claims supported by Google's selected benchmark results, not a universal guarantee for every codebase or agent stack." },
          { type: "paragraph", html: "Teams using tool-calling agents should evaluate complete trajectories: success rate, tool-call correctness, retries, latency, safety and total accepted-result cost. A better benchmark score does not automatically mean a safer or cheaper production workflow." },
        ],
      },
      {
        id: "migration-framework",
        title: "When to migrate first — and when to benchmark",
        blocks: [
          { type: "list", items: ["Migrate first when long-horizon coding, multi-step planning or agent reliability is a major bottleneck", "Benchmark carefully when requests are latency-sensitive or mostly simple transformations", "Keep 3.7 temporarily when the current workload already meets acceptance thresholds and you lack a rollback-safe evaluation harness"] },
          { type: "paragraph", html: "Use representative production tasks rather than synthetic prompts alone. Compare task success, latency, input and output tokens, tool-call count, retries, human corrections and final cost per accepted result." },
        ],
      },
      {
        id: "bottom-line",
        title: "Bottom line",
        blocks: [
          { type: "paragraph", html: "Gemini 3.8 Flash is the stronger candidate to test first for difficult coding and agent workloads because that is exactly where Google claims the largest gains. But a production migration should still be earned through A/B testing rather than assumed from launch benchmarks." },
          { type: "paragraph", html: "For the broad release overview, capabilities and current model limits, return to the <a href=\"/blog/gemini-3-8-flash\">main Gemini 3.8 Flash article</a>." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/gemini-3-8-flash", "/blog/gemini-3-8-flash-api-pricing"],
  },
];
