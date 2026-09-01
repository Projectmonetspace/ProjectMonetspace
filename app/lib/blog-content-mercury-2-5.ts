import type { BlogArticle } from "./blog-types.ts";

const mercurySources = [
  { label: "Inception — Mercury models", url: "https://www.inceptionlabs.ai/models" },
  { label: "OpenRouter — Mercury 2.5 Preview", url: "https://openrouter.ai/inception/mercury-2.5-preview" },
  { label: "OpenRouter — API quickstart", url: "https://openrouter.ai/docs/quickstart" },
];

export const mercury25Articles: BlogArticle[] = [
  {
    status: "published", articleType: "main", cluster: "Mercury 2.5 Preview",
    targetSearchIntent: "Understand what Mercury 2.5 Preview is, current access, first-party pricing and context, provider speed claims, API features, use cases and limitations.", targetQuery: "Mercury 2.5", slug: "mercury-2-5-preview",
    title: "Mercury 2.5 Preview: API, Pricing, Speed & Features", metaTitle: "Mercury 2.5 Preview: API, Pricing, Speed & Features",
    metaDescription: "Mercury 2.5 Preview is Inception’s diffusion reasoning model, live on OpenRouter. See current pricing, context, speed claims, tools and limitations.",
    h1: "Mercury 2.5 Preview: Inception’s New Diffusion Reasoning Model",
    excerpt: "Mercury 2.5 Preview is Inception’s newest diffusion reasoning model, with hosted OpenRouter access, a large context window, tool use and structured output.",
    category: "AI", author: "Project Monet Editorial Team", datePublished: "2026-09-02", dateModified: "2026-09-02",
    ogAlt: "Mercury 2.5 Preview diffusion reasoning model with parallel token generation concept",
    sections: [
      { id: "what-is-mercury", title: "What is Mercury 2.5 Preview?", blocks: [
        { type: "paragraph", html: "Mercury 2.5 Preview is Inception’s newest reasoning diffusion LLM. Instead of producing text strictly one token at a time, Inception’s diffusion approach refines multiple token positions in parallel." },
        { type: "paragraph", html: "Inception currently describes Mercury 2.5 Preview as its most intelligent reasoning dLLM and links directly to OpenRouter for access. The model remains explicitly labeled <strong>Preview</strong>, so behavior and service details can change." },
      ]},
      { id: "availability-pricing", title: "Availability, context and pricing", blocks: [
        { type: "paragraph", html: "Inception’s current models page confirms Mercury 2.5 Preview is live on OpenRouter and lists standard rates of <strong>$0.20 per million input tokens, $0.75 per million output tokens and $0.02 per million cached-input tokens</strong>." },
        { type: "paragraph", html: "OpenRouter currently shows a temporary 80% Inception discount through <strong>September 8, 2026 at 07:00 UTC</strong>: $0.04/M input, $0.15/M output and $0.004/M cached input. Treat those discounted rates as promotional, not permanent." },
        { type: "paragraph", html: "There is a small first-party/provider presentation difference worth preserving: Inception labels the context window <strong>256K</strong>, while OpenRouter currently displays <strong>260K</strong> and up to 65,536 completion tokens. Applications should use the active provider’s documented limit rather than assuming the labels are interchangeable." },
      ]},
      { id: "features", title: "Reasoning, tools and structured output", blocks: [
        { type: "paragraph", html: "Inception lists reasoning, tool use and structured output as Mercury 2.5 features. OpenRouter additionally documents tunable reasoning levels, parallel tool calls and JSON-schema structured output for its hosted route." },
        { type: "paragraph", html: "Those capabilities make the model relevant to agent loops, coding subagents, enterprise search, structured extraction and other workflows where repeated model latency compounds." },
      ]},
      { id: "speed", title: "How to read the Mercury 2.5 speed claims", blocks: [
        { type: "paragraph", html: "OpenRouter’s model description reports a peak claim of <strong>1,107 tokens per second</strong> on standard GPUs and a 10+ point intelligence improvement over Mercury 2. These are provider/vendor claims, not independent benchmark results." },
        { type: "paragraph", html: "Live routed telemetry can be materially lower than a peak model claim. Evaluate time to first token, end-to-end task latency, tool accuracy, error rate and cost on the workload you actually plan to run." },
      ]},
      { id: "direct-api", title: "OpenRouter access versus Inception’s direct API", blocks: [
        { type: "paragraph", html: "Inception says its models are OpenAI API compatible, but its public direct-request example still uses <code>mercury-2</code>. Do not assume the OpenRouter slug is also the direct Inception model identifier until Inception documents that identifier explicitly." },
        { type: "note", html: "For the specific Mercury 2.5 Preview version, OpenRouter is currently the clearest publicly documented implementation path." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "list", items: ["Preview status means pricing, limits and behavior can change.", "No official open-weight or local-runtime release was found in the current source set.", "Peak speed and intelligence comparisons should remain attributed to Inception/OpenRouter.", "Provider context labels currently differ slightly: 256K on Inception versus 260K on OpenRouter."] },
        { type: "paragraph", html: "Mercury 2.5 is most interesting when low latency has practical value, not merely because a headline throughput number is large. Benchmark complete tasks before choosing it for production." },
      ]},
    ], sources: mercurySources, relatedPaths: ["/blog/mercury-2-5-api-pricing"],
  },
  {
    status: "published", articleType: "supporting", cluster: "Mercury 2.5 Preview",
    targetSearchIntent: "Access Mercury 2.5 Preview through OpenRouter, use the correct model slug, understand current pricing and context, and implement it with standard HTTP or the OpenAI SDK.", targetQuery: "Mercury 2.5 API", parentSlug: "mercury-2-5-preview", slug: "mercury-2-5-api-pricing",
    title: "Mercury 2.5 API & Pricing: How to Use It on OpenRouter", metaTitle: "Mercury 2.5 API & Pricing: OpenRouter Setup Guide",
    metaDescription: "Use Mercury 2.5 Preview through OpenRouter. See the model slug, current API pricing, context limits, tool support and implementation caveats.", h1: "How to Use the Mercury 2.5 API on OpenRouter",
    excerpt: "A practical Mercury 2.5 Preview implementation guide covering the OpenRouter slug, API endpoint, OpenAI SDK compatibility, current pricing and production caveats.",
    category: "AI", author: "Project Monet Editorial Team", datePublished: "2026-09-02", dateModified: "2026-09-02", ogAlt: "Mercury 2.5 API setup flow through OpenRouter",
    sections: [
      { id: "before-start", title: "Before you start", blocks: [
        { type: "paragraph", html: "OpenRouter exposes Mercury 2.5 Preview under <code>inception/mercury-2.5-preview</code>. You need an OpenRouter API key and should keep it in an environment variable or secret manager rather than hard-coding it." },
        { type: "paragraph", html: "OpenRouter’s quickstart uses the standard <code>/api/v1/chat/completions</code> endpoint and says catalog model slugs can be substituted into requests." },
      ]},
      { id: "request", title: "Make a basic Mercury 2.5 request", blocks: [
        { type: "paragraph", html: "A minimal Python request uses <code>requests.post(\"https://openrouter.ai/api/v1/chat/completions\", ...)</code> with an <code>Authorization: Bearer &lt;OPENROUTER_API_KEY&gt;</code> header, <code>model: \"inception/mercury-2.5-preview\"</code>, and a standard <code>messages</code> array." },
        { type: "paragraph", html: "OpenRouter-specific attribution headers are optional. Add production timeouts, retries and error handling around the minimal request, and keep the API key outside source code." },
      ]},
      { id: "openai-sdk", title: "Use Mercury 2.5 with the OpenAI SDK", blocks: [
        { type: "paragraph", html: "OpenRouter explicitly documents the OpenAI SDK as a drop-in option. Configure <code>base_url=\"https://openrouter.ai/api/v1\"</code>, supply your OpenRouter API key, and pass <code>inception/mercury-2.5-preview</code> as the model in <code>client.chat.completions.create(...)</code>." },
        { type: "paragraph", html: "This lets an existing OpenAI-SDK integration test Mercury 2.5 without changing the overall chat-completions code structure." },
      ]},
      { id: "pricing", title: "Current Mercury 2.5 API pricing", blocks: [
        { type: "paragraph", html: "Inception currently lists standard Mercury 2.5 rates of <strong>$0.20/M input, $0.75/M output and $0.02/M cached input</strong>. OpenRouter currently applies an 80% Inception discount through September 8, 2026 at 07:00 UTC, showing $0.04/M input, $0.15/M output and $0.004/M cached input." },
        { type: "paragraph", html: "For example, 100,000 input tokens plus 10,000 output tokens at the promotional rates implies about <strong>$0.0055</strong> in token charges. That excludes retries, repeated agent loops and other application behavior." },
      ]},
      { id: "context-tools", title: "Context, tool calling and structured output", blocks: [
        { type: "paragraph", html: "Inception labels Mercury 2.5 with a 256K context window; OpenRouter currently displays 260K and up to 65,536 completion tokens. Use the active provider’s documented limit in production." },
        { type: "paragraph", html: "OpenRouter documents <code>tools</code> and <code>tool_choice</code>, parallel tool calls and JSON-schema structured output. Validate tool selection and returned structured data before consequential automated actions." },
      ]},
      { id: "production", title: "Production checklist", blocks: [
        { type: "list", ordered: true, items: ["Pin the exact OpenRouter model slug.", "Recheck pricing after the September 8 promotion.", "Set token and timeout limits.", "Test tool-call and structured-output reliability.", "Measure end-to-end latency and task success.", "Define fallback behavior for a Preview model.", "Validate outputs before external writes.", "Review provider data-handling requirements for your workload."] },
        { type: "paragraph", html: "Inception’s public direct-API request still demonstrates <code>mercury-2</code>. Until a Mercury 2.5 direct identifier is explicitly documented, do not copy the OpenRouter slug into Inception’s endpoint by assumption." },
      ]},
    ], sources: mercurySources, relatedPaths: ["/blog/mercury-2-5-preview"],
  },
];
