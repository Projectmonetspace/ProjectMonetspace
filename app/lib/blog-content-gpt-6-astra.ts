import type { BlogArticle } from "./blog-types.ts";

const mainSources = [
  { label: "OpenAI GPT-6 Astra model page", url: "https://developers.openai.com/api/docs/models/gpt-6-astra" },
  { label: "OpenAI GPT-6 Astra model guidance", url: "https://developers.openai.com/api/docs/guides/latest-model" },
  { label: "OpenAI API changelog", url: "https://developers.openai.com/api/docs/changelog" },
  { label: "ChatGPT release notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
];

const apiSources = [
  { label: "OpenAI GPT-6 Astra model page", url: "https://developers.openai.com/api/docs/models/gpt-6-astra" },
  { label: "OpenAI GPT-6 Astra model guidance", url: "https://developers.openai.com/api/docs/guides/latest-model" },
  { label: "OpenAI reasoning guide", url: "https://developers.openai.com/api/docs/guides/reasoning" },
  { label: "OpenAI API changelog", url: "https://developers.openai.com/api/docs/changelog" },
];

export const gpt6AstraArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "GPT-6 Astra",
    targetSearchIntent: "Broad overview of GPT-6 Astra: release status, capabilities, pricing, API access, context window, tool support, availability, limitations and major changes from prior OpenAI models.",
    targetQuery: "GPT-6 Astra",
    slug: "gpt-6-astra",
    title: "GPT-6 Astra: API, Pricing, Features & Availability",
    metaTitle: "GPT-6 Astra: API, Pricing, Features & Availability",
    metaDescription: "GPT-6 Astra launched September 3, 2026. See its API pricing, 1.05M context window, computer-use tools, rollout status, limits and what changed.",
    h1: "GPT-6 Astra: API, Pricing, Features and What Changed",
    excerpt: "GPT-6 Astra is OpenAI's September 2026 frontier model for complex reasoning, coding, computer use, research and long-running tool workflows.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "GPT-6 Astra API, pricing and computer-use overview",
    sections: [
      {
        id: "what-is-gpt-6-astra",
        title: "What is GPT-6 Astra?",
        blocks: [
          { type: "paragraph", html: "OpenAI released GPT-6 Astra on September 3, 2026 and describes it as its most capable model for difficult end-to-end work. The official API model ID is <code>gpt-6-astra</code>." },
          { type: "paragraph", html: "The model accepts text and image input and produces text output. OpenAI lists a 1,050,000-token context window, up to 128,000 output tokens and an April 30, 2026 knowledge cutoff." },
        ],
      },
      {
        id: "availability",
        title: "Release date and availability",
        blocks: [
          { type: "paragraph", html: "Astra launched with a limited enterprise-first rollout. OpenAI's current documentation says API access and availability through Plus, Pro, Business and Enterprise plans are coming in the following days rather than being universally available at launch." },
          { type: "note", html: "Released does not mean every eligible account can select Astra immediately. Rollout status is still changing and should be checked in the current model picker or API account before planning around access." },
        ],
      },
      {
        id: "pricing",
        title: "GPT-6 Astra API pricing",
        blocks: [
          { type: "paragraph", html: "OpenAI currently lists Standard text pricing per 1 million tokens at $10 input, $1 cached input, $12.50 cache writes and $50 output. Cache writes are billed at 1.25x the uncached input rate." },
          { type: "paragraph", html: "Prompts above 272K input tokens are priced at 2x input and cache rates and 1.5x output rates for the full request. Batch and Flex are priced at 50% of Standard, while Fast mode is 2x the applicable rate where supported." },
        ],
      },
      {
        id: "agent-features",
        title: "What changed for agents and tool workflows",
        blocks: [
          { type: "paragraph", html: "Astra adds async tool calling, allowing the model to continue reasoning or work on independent parts of a request while an application-side tool is still running. The application remains responsible for executing the tool and returning its result with the original call ID." },
          { type: "paragraph", html: "Mid-turn steering lets applications send new user instructions while Astra is already working over a WebSocket Responses API connection. OpenAI also documents configuration updates that can change reasoning effort during a conversation while preserving the cached prompt prefix." },
        ],
      },
      {
        id: "tools-and-limits",
        title: "Tools, rate limits and current limitations",
        blocks: [
          { type: "paragraph", html: "Through the Responses API, OpenAI lists web search, file search, image generation, code interpreter, hosted shell, apply patch, Skills, computer use, MCP and tool search as supported. Function calling, streaming and Structured Outputs are also supported." },
          { type: "paragraph", html: "Fine-tuning is currently unsupported. The model page lists no Free-tier API access; paid rate limits vary by usage tier, from Tier 1 at 500 RPM and 500,000 TPM up to Tier 5 at 15,000 RPM and 40,000,000 TPM at publication time." },
        ],
      },
      {
        id: "who-should-use-it",
        title: "Who should use GPT-6 Astra?",
        blocks: [
          { type: "paragraph", html: "Astra is most compelling when task completion matters more than lowest token price: complex software engineering, browser or computer workflows, research across many sources, large document sets and long-running agent tasks with multiple tools." },
          { type: "paragraph", html: "For routine extraction, classification or high-volume chat, lower-cost models may still be more economical. OpenAI says Astra can reduce estimated cost per successful task in some evaluations despite higher per-token prices, but that remains a vendor claim that should be tested on your own workload." },
        ],
      },
    ],
    sources: mainSources,
    relatedPaths: ["/blog/gpt-6-astra-api-pricing"],
  },
  {
    status: "published",
    articleType: "supporting",
    parentSlug: "gpt-6-astra",
    cluster: "GPT-6 Astra",
    targetSearchIntent: "Developer and buyer intent: how to call GPT-6 Astra through the API, what it costs, how reasoning and tool features work, and how to control production spend.",
    targetQuery: "GPT-6 Astra API pricing",
    slug: "gpt-6-astra-api-pricing",
    title: "GPT-6 Astra API & Pricing Guide",
    metaTitle: "GPT-6 Astra API Pricing, Setup & Cost Guide",
    metaDescription: "Use GPT-6 Astra through OpenAI's API: model ID, pricing, context limits, reasoning levels, async tools, mid-turn steering, rate limits and cost controls.",
    h1: "GPT-6 Astra API & Pricing Guide",
    excerpt: "A practical guide to the GPT-6 Astra model ID, token pricing, long-context surcharge, reasoning controls, agent features and cost management.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "GPT-6 Astra API pricing and agent-cost workflow guide",
    sections: [
      {
        id: "model-id",
        title: "GPT-6 Astra API model ID",
        blocks: [
          { type: "paragraph", html: "Use <code>gpt-6-astra</code> in API requests. OpenAI recommends the Responses API for reasoning and tool-heavy workloads, while the model page also lists Chat Completions support." },
          { type: "paragraph", html: "The model supports low, medium, high, xhigh and max reasoning effort. Astra does not support a none reasoning setting." },
        ],
      },
      {
        id: "current-pricing",
        title: "Current GPT-6 Astra pricing",
        blocks: [
          { type: "paragraph", html: "At publication time, Standard text pricing per 1 million tokens is $10 input, $1 cached input, $12.50 cache writes and $50 output. Tool-specific features such as search or computer use can have additional per-tool charges." },
          { type: "paragraph", html: "Batch and Flex are priced at 50% of Standard rates. Fast mode is priced at 2x applicable rates where supported, and OpenAI says Fast mode is unavailable for Astra with EU data residency." },
        ],
      },
      {
        id: "long-context-cost",
        title: "Long-context pricing and context limits",
        blocks: [
          { type: "paragraph", html: "Astra has a 1,050,000-token context window and a 128,000-token maximum output. That can accommodate very large repositories and document sets, but using the full window is not automatically economical." },
          { type: "paragraph", html: "If a prompt exceeds 272K input tokens, OpenAI prices the full request at 2x input and cache rates and 1.5x output rates. Retrieval, prompt caching, compaction and tighter context selection can therefore materially affect cost." },
        ],
      },
      {
        id: "async-and-steering",
        title: "Async tool calling and mid-turn steering",
        blocks: [
          { type: "paragraph", html: "Async tool calling lets the model continue other work while your application runs a slow function or custom tool marked asynchronous. Your application still executes the tool and returns the result using the original call ID." },
          { type: "paragraph", html: "Mid-turn steering lets a user change requirements while a response is already running over WebSocket. Astra can preserve completed work and continue with the updated instruction instead of discarding the whole task." },
        ],
      },
      {
        id: "reasoning-and-cost-control",
        title: "Reasoning controls and cost management",
        blocks: [
          { type: "paragraph", html: "Astra supports configuration updates that can raise or lower reasoning effort during a conversation while preserving the original cached prompt prefix. Higher effort can improve difficult planning or reasoning, but it can also increase latency and billed output-token usage." },
          { type: "paragraph", html: "For production systems, compare success rate, latency and full task cost rather than defaulting every request to max reasoning. Use cheaper models for routine work, prompt caching for stable repeated context, and Batch or Flex where latency requirements allow." },
        ],
      },
      {
        id: "rate-limits",
        title: "Rate limits and deployment checks",
        blocks: [
          { type: "paragraph", html: "The current model page lists no Free-tier support. Published paid-tier limits range from Tier 1 at 500 requests per minute and 500,000 tokens per minute to Tier 5 at 15,000 requests per minute and 40,000,000 tokens per minute." },
          { type: "note", html: "Rate limits, rollout status and commercial pricing can change. Recheck OpenAI's live model and pricing pages before committing capacity or budget." },
        ],
      },
    ],
    sources: apiSources,
    relatedPaths: ["/blog/gpt-6-astra"],
  },
];
