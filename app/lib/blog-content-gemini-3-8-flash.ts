import type { BlogArticle } from "./blog-types.ts";

const gemini38Sources = [
  { label: "Google — Gemini 3.8 Flash launch", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/" },
  { label: "Google AI — Gemini 3.8 Flash model", url: "https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash" },
  { label: "Google AI — What's new in Gemini 3.8 Flash", url: "https://ai.google.dev/gemini-api/docs/generate-content/latest-model" },
  { label: "Google AI — Release notes", url: "https://ai.google.dev/gemini-api/docs/changelog" },
  { label: "Google AI — Deprecations", url: "https://ai.google.dev/gemini-api/docs/deprecations" },
  { label: "Google AI — Rate limits", url: "https://ai.google.dev/gemini-api/docs/rate-limits" },
  { label: "Google AI — Flex inference", url: "https://ai.google.dev/gemini-api/docs/flex-inference" },
];

const published = "2026-09-03";

export const gemini38FlashArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Gemini 3.8 Flash",
    targetSearchIntent: "Broad entity overview: what Gemini 3.8 Flash is, release status, pricing, API capabilities, limits, benchmarks and use cases",
    targetQuery: "Gemini 3.8 Flash",
    slug: "gemini-3-8-flash",
    title: "Gemini 3.8 Flash: API, Pricing, Benchmarks & Features",
    metaTitle: "Gemini 3.8 Flash: API, Pricing, Benchmarks & Features",
    metaDescription: "Gemini 3.8 Flash is Google's new GA Flash model for coding and agents. See API limits, pricing, capabilities, benchmarks, availability and what changed.",
    h1: "Gemini 3.8 Flash: What Changed, Pricing, API and Benchmarks",
    excerpt: "Google released Gemini 3.8 Flash as a GA model for long-horizon coding, agents and complex workflows, with 1M context and introductory pricing through 2026.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: published,
    dateModified: published,
    ogAlt: "Gemini 3.8 Flash editorial card showing GA status, 1M context, coding and agent workflow cues",
    sections: [
      {
        id: "what-is-gemini-38-flash",
        title: "What is Gemini 3.8 Flash?",
        blocks: [
          { type: "paragraph", html: "Gemini 3.8 Flash is Google's generally available Flash model released on <strong>September 2, 2026</strong>. Google positions it for long-horizon software engineering, autonomous agents and complex enterprise workflows." },
          { type: "paragraph", html: "The stable Gemini API model ID is <code>gemini-3.8-flash</code>. Google's current model documentation lists a <strong>1,048,576-token input limit</strong> and a <strong>65,536-token maximum output</strong>." },
        ],
      },
      {
        id: "availability",
        title: "Release and availability",
        blocks: [
          { type: "paragraph", html: "Google's Gemini API release notes mark Gemini 3.8 Flash as <strong>generally available</strong>, not preview-only. Its deprecation page currently shows no announced shutdown date." },
          { type: "paragraph", html: "Google also says 3.8 Flash is available in Gemini Enterprise and to Google AI Pro and Ultra subscribers across selected consumer surfaces. Account-level quotas and product-surface availability can still differ." },
        ],
      },
      {
        id: "pricing",
        title: "Gemini 3.8 Flash pricing",
        blocks: [
          { type: "paragraph", html: "Google's introductory price through <strong>December 31, 2026</strong> is <strong>$0.75 per million input tokens</strong> and <strong>$3.75 per million output tokens</strong>." },
          { type: "paragraph", html: "Google has announced standard pricing from <strong>January 1, 2027</strong> at <strong>$1.50/M input</strong> and <strong>$7.50/M output</strong>. Teams budgeting beyond 2026 should model the higher standard rate." },
          { type: "note", html: "Token price is not the same as cost per completed task. Google notes that 3.8 Flash can take more reasoning steps and tool calls on difficult work, so real workload testing matters." },
        ],
      },
      {
        id: "capabilities",
        title: "Context window, thinking and built-in tools",
        blocks: [
          { type: "paragraph", html: "Gemini 3.8 Flash accepts text, image, video, audio and PDF inputs and returns text. It supports low, medium and high thinking levels; Google lists <strong>medium</strong> as the default and says <code>minimal</code> is unsupported." },
          { type: "paragraph", html: "The model page lists support for function calling, structured outputs, code execution, file search, Google Search grounding, Maps grounding, URL context, caching and computer use in Preview. The Live API, image generation and audio generation are not supported by this model." },
          { type: "paragraph", html: "For implementation details, model ID, pricing modes and production checks, read the <a href=\"/blog/gemini-3-8-flash-api-pricing\">Gemini 3.8 Flash API & Pricing Guide</a>." },
        ],
      },
      {
        id: "coding-agents",
        title: "Coding and agent capabilities",
        blocks: [
          { type: "paragraph", html: "Google describes 3.8 Flash as its most intelligent Flash model and emphasizes software engineering, autonomous agents and multi-step reasoning. It also says the model is now the default for its managed Antigravity agent and Antigravity SDK." },
          { type: "paragraph", html: "Those claims are vendor positioning, not a guarantee for every workload. Teams should compare success rate, latency, total token use and tool-call reliability on representative tasks before migrating." },
        ],
      },
      {
        id: "benchmarks",
        title: "Benchmarks: what Google claims",
        blocks: [
          { type: "paragraph", html: "Google's launch materials highlight gains on software-engineering and agent benchmarks and cite results including DeepSWE v1.1, Vals Finance Agent V2, Harvey's Legal Agent Benchmark and HLE-Verified." },
          { type: "paragraph", html: "Treat benchmark results with attribution. Some underlying benchmarks are externally operated, but the launch framing and model-selection claims come from Google. Production decisions should use your own evaluation set." },
        ],
      },
      {
        id: "vs-37",
        title: "Gemini 3.8 Flash vs Gemini 3.7 Flash",
        blocks: [
          { type: "paragraph", html: "Google's main argument for 3.8 Flash is stronger reasoning, coding and autonomous-agent reliability while preserving the Flash cost/speed positioning. Google also says 3.7 Flash remains supported for efficiency-first workloads." },
          { type: "paragraph", html: "Do not migrate solely because the version number is newer. Benchmark the same prompts, tools and failure cases on both models and compare cost per successful result." },
        ],
      },
      {
        id: "limits",
        title: "Limitations and operational caveats",
        blocks: [
          { type: "list", items: ["Computer use remains Preview even though the base model is GA", "The model does not support the Gemini Live API", "Image generation and audio generation are not supported", "Rate limits vary by account tier and active capacity", "Introductory pricing ends December 31, 2026 unless Google changes the schedule", "Vendor benchmarks do not guarantee application-specific performance"] },
        ],
      },
      {
        id: "faq",
        title: "Gemini 3.8 Flash FAQ",
        blocks: [
          { type: "paragraph", html: "<strong>Is Gemini 3.8 Flash generally available?</strong> Yes. Google lists <code>gemini-3.8-flash</code> as GA from September 2, 2026." },
          { type: "paragraph", html: "<strong>What is the context window?</strong> Google's model page lists 1,048,576 input tokens and a 65,536-token maximum output." },
          { type: "paragraph", html: "<strong>How much does Gemini 3.8 Flash cost?</strong> Google lists $0.75/M input and $3.75/M output through December 31, 2026, then $1.50/M input and $7.50/M output from January 1, 2027." },
          { type: "paragraph", html: "<strong>Does it support computer use?</strong> Yes, but Google marks computer use as Preview." },
        ],
      },
    ],
    sources: gemini38Sources,
    relatedPaths: ["/blog/gemini-3-8-flash-api-pricing"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Gemini 3.8 Flash",
    targetSearchIntent: "Implement Gemini 3.8 Flash in production and understand model ID, pricing, context limits, thinking levels and inference options",
    targetQuery: "Gemini 3.8 Flash API",
    parentSlug: "gemini-3-8-flash",
    slug: "gemini-3-8-flash-api-pricing",
    title: "Gemini 3.8 Flash API & Pricing Guide",
    metaTitle: "Gemini 3.8 Flash API & Pricing: Model ID, Limits & Cost",
    metaDescription: "Use Gemini 3.8 Flash via the Gemini API. See the model ID, token pricing, 1M context, thinking levels, Batch/Flex options and production checks.",
    h1: "Gemini 3.8 Flash API & Pricing Guide",
    excerpt: "A production-focused guide to the gemini-3.8-flash model ID, pricing, 1M context, thinking levels, Batch, Flex, Priority inference and deployment checks.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: published,
    dateModified: published,
    ogAlt: "Gemini 3.8 Flash API editorial card with model ID, 1M context and introductory token pricing",
    sections: [
      {
        id: "quick-facts",
        title: "Gemini 3.8 Flash API quick facts",
        blocks: [
          { type: "list", items: ["Stable model ID: gemini-3.8-flash", "GA release: September 2, 2026", "Input limit: 1,048,576 tokens", "Maximum output: 65,536 tokens", "Inputs: text, image, video, audio and PDF", "Output: text", "Thinking levels: low, medium and high; medium is default"] },
          { type: "paragraph", html: "For the broader release context, capabilities and benchmark discussion, see the <a href=\"/blog/gemini-3-8-flash\">main Gemini 3.8 Flash overview</a>." },
        ],
      },
      {
        id: "api-pricing",
        title: "API pricing through 2026 and from 2027",
        blocks: [
          { type: "paragraph", html: "Google's introductory base price through December 31, 2026 is <strong>$0.75/M input tokens</strong> and <strong>$3.75/M output tokens</strong>." },
          { type: "paragraph", html: "From January 1, 2027, Google says standard pricing will be <strong>$1.50/M input</strong> and <strong>$7.50/M output</strong>. Recalculate production budgets before the pricing transition." },
        ],
      },
      {
        id: "inference-options",
        title: "Batch, Flex and Priority inference",
        blocks: [
          { type: "paragraph", html: "Google documents Gemini 3.8 Flash as supporting Batch, Flex and Priority inference. Flex is priced at <strong>50% of the standard API rate</strong> and is intended for workloads that can tolerate a more flexible service profile." },
          { type: "paragraph", html: "Google's current inference documentation also describes Batch as a 50% discount path for asynchronous work with up to a 24-hour processing window. Priority is a premium low-latency tier and should be costed separately." },
        ],
      },
      {
        id: "request-strategy",
        title: "Start with a minimal request, then add tools",
        blocks: [
          { type: "paragraph", html: "Use a current Google Gen AI SDK or REST request and specify <code>gemini-3.8-flash</code> as the model. Validate a plain prompt first, then add function calling, grounding, file search or computer use incrementally." },
          { type: "paragraph", html: "Google's migration guidance calls out thought-signature and tool-call behavior across Gemini 3 models. Keep SDKs current and preserve required tool metadata instead of copying assumptions from older integrations." },
        ],
      },
      {
        id: "thinking-cost",
        title: "Thinking levels and cost control",
        blocks: [
          { type: "paragraph", html: "Start with low thinking for latency-sensitive work, use medium as the general baseline and reserve high for tasks where deeper reasoning justifies extra latency and token use." },
          { type: "paragraph", html: "Measure total task economics. A higher reasoning spend can be worthwhile if it reduces retries, but it can also make a nominally cheap model expensive on long agent loops." },
        ],
      },
      {
        id: "context",
        title: "How to use the 1M-token context window",
        blocks: [
          { type: "paragraph", html: "A 1,048,576-token input window can hold very large codebases, document sets and multimodal inputs, but filling the window on every request is rarely the cheapest architecture." },
          { type: "list", items: ["Use retrieval when only a small part of a corpus is relevant", "Use context caching for repeated large prefixes", "Break long-running agent jobs into bounded steps", "Track token use per completed task rather than per request"] },
        ],
      },
      {
        id: "rate-limits",
        title: "Rate limits are tier-dependent",
        blocks: [
          { type: "paragraph", html: "Google publishes Gemini API limits by account tier and says active limits can change with tier and account status. The current table lists Gemini 3.8 Flash across multiple tiers and separate Batch enqueued-token ceilings." },
          { type: "note", html: "Do not hard-code a universal RPM or TPM value into production documentation. Check the project's live limits in Google AI Studio before launch." },
        ],
      },
      {
        id: "production-checklist",
        title: "Production checklist",
        blocks: [
          { type: "list", ordered: true, items: ["Use the stable gemini-3.8-flash model ID", "Use a current Google Gen AI SDK", "Benchmark low, medium and high thinking on representative tasks", "Test tool calls individually before combining many tools", "Cap retries and agent-loop depth", "Require approval for consequential computer-use actions", "Use caching or retrieval for repeated large context", "Compare standard, Batch and Flex costs on real workloads", "Model the January 2027 pricing increase", "Recheck project-specific quotas before deployment"] },
        ],
      },
      {
        id: "faq",
        title: "Gemini 3.8 Flash API FAQ",
        blocks: [
          { type: "paragraph", html: "<strong>What is the exact model ID?</strong> <code>gemini-3.8-flash</code>." },
          { type: "paragraph", html: "<strong>Does it support Batch and Flex?</strong> Yes. Google's current docs list Gemini 3.8 Flash as supported for both, with Flex at 50% of standard API pricing." },
          { type: "paragraph", html: "<strong>Is computer use GA?</strong> No. The base model is GA, but Google still marks computer use as Preview." },
        ],
      },
    ],
    sources: gemini38Sources,
    relatedPaths: ["/blog/gemini-3-8-flash"],
  },
];
