import type { BlogArticle } from "./blog-types.ts";

const miniCpmApiSources = [
  { label: "OpenBMB — MiniCPM5-2B model card", url: "https://huggingface.co/openbmb/MiniCPM5-2B" },
  { label: "OpenBMB — MiniCPM5-2B GGUF", url: "https://huggingface.co/openbmb/MiniCPM5-2B-GGUF" },
  { label: "OpenBMB — MiniCPM5-2B MLX", url: "https://huggingface.co/openbmb/MiniCPM5-2B-MLX" },
];

const fimoSeoSources = [
  { label: "Fimo — custom agents", url: "https://fimo.ai/features/agents" },
  { label: "Fimo — autonomous agents", url: "https://fimo.ai/features/autonomous-agents" },
  { label: "Fimo — autonomous website platform", url: "https://fimo.ai/" },
  { label: "Fimo — Framer comparison and current pricing", url: "https://fimo.ai/compare/framer" },
];

export const supportingArticles20260909: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    cluster: "MiniCPM5-2B",
    targetSearchIntent: "Serve MiniCPM5-2B behind a self-hosted OpenAI-compatible API and use the documented SGLang tool-calling path without implying a vendor-hosted API.",
    targetQuery: "MiniCPM5-2B vLLM SGLang API tool calling",
    parentSlug: "minicpm5-2b",
    slug: "minicpm5-2b-vllm-sglang-api-tool-calling",
    title: "MiniCPM5-2B API Guide: vLLM, SGLang & Tool Calling",
    metaTitle: "MiniCPM5-2B API Guide: vLLM, SGLang & Tool Calling",
    metaDescription: "Serve MiniCPM5-2B with vLLM or SGLang, expose an OpenAI-compatible API, and use OpenBMB’s documented SGLang tool-calling path safely.",
    h1: "How to Serve MiniCPM5-2B with vLLM or SGLang",
    excerpt: "MiniCPM5-2B can be self-hosted behind OpenAI-compatible endpoints with vLLM or SGLang, while OpenBMB currently recommends SGLang for tool calling.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    ogAlt: "MiniCPM5-2B self-hosted API architecture showing an application connecting to vLLM or SGLang and narrowly scoped tools",
    sections: [
      { id: "self-hosted-api", title: "MiniCPM5-2B is a self-hosted API path", blocks: [
        { type: "paragraph", html: "MiniCPM5-2B is not currently documented by OpenBMB as a separately billed hosted commercial API. The verified server path is self-hosting the downloadable model through supported runtimes such as vLLM or SGLang." },
        { type: "paragraph", html: "Both runtimes are listed by OpenBMB as OpenAI-server deployment backends, so an application that already speaks the familiar chat-completions schema can sit in front of a local or private MiniCPM5-2B deployment." },
      ]},
      { id: "vllm", title: "Serve MiniCPM5-2B with vLLM", blocks: [
        { type: "paragraph", html: "OpenBMB's current deployment table lists vLLM for BF16/FP16 OpenAI-server use. The exact installation requirements belong to the current vLLM cookbook, so recheck the upstream guide instead of pinning an old version from a launch-day draft." },
        { type: "paragraph", html: "Once the server is running, validate the model identifier, chat template, streaming behavior and the exact request fields your application sends before placing the endpoint behind production traffic." },
      ]},
      { id: "sglang-tool-calling", title: "Use SGLang for the documented tool-calling path", blocks: [
        { type: "paragraph", html: "OpenBMB currently marks SGLang as the recommended backend for tool or function calling. Its model card documents a server command using <code>python -m sglang.launch_server --model-path openbmb/MiniCPM5-2B --port 30000 --tool-call-parser minicpm5</code>, with <code>auto</code> also shown as an alternative parser setting." },
        { type: "paragraph", html: "MiniCPM5-2B emits XML-style tool calls, and OpenBMB says SGLang's built-in MiniCPM5 parser converts them into OpenAI-compatible <code>tool_calls</code>. That is an interoperability feature, not a guarantee that every tool schema or multi-step agent loop will behave correctly." },
      ]},
      { id: "validate-agents", title: "Validate agent behavior before production", blocks: [
        { type: "paragraph", html: "Test your exact tool schemas, malformed-call recovery, multi-step behavior, tool-result injection, long-context behavior and concurrency rather than relying on aggregate benchmark tables. OpenBMB's tool-use and agent scores are vendor-published evaluations." },
        { type: "note", html: "Keep tool permissions narrow. A model server that can emit tool calls should not automatically receive broad shell, cloud, billing or account permissions." },
      ]},
      { id: "context-security-cost", title: "Context, security and infrastructure cost", blocks: [
        { type: "paragraph", html: "The model card lists a 131,072-token native context window, but maximum context is not necessarily the best operating point. KV-cache memory, latency and throughput can change substantially as active context grows, so start smaller and measure." },
        { type: "paragraph", html: "Infrastructure cost depends on the hardware, runtime, context size and concurrency you choose. Put authentication, network controls, logging and rate limits around any externally reachable endpoint, and do not expose an unauthenticated local server directly to the public internet." },
        { type: "paragraph", html: "For the model's release details, license and benchmark boundaries, return to the <a href=\"/blog/minicpm5-2b\">MiniCPM5-2B overview</a>. If you want desktop or on-device use rather than an API server, use the <a href=\"/blog/minicpm5-2b-local-gguf-ollama-mlx\">local GGUF, Ollama, LM Studio and MLX guide</a>." },
      ]},
    ],
    sources: miniCpmApiSources,
    relatedPaths: ["/blog/minicpm5-2b", "/blog/minicpm5-2b-local-gguf-ollama-mlx"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Fimo",
    targetSearchIntent: "Use Fimo's scheduled agents for reviewable SEO and GEO maintenance without turning recurring automation into unsupervised production publishing.",
    targetQuery: "Fimo SEO agent",
    parentSlug: "fimo-autonomous-website-platform",
    slug: "fimo-seo-agents-guide",
    title: "Fimo SEO Agents Guide: Automate Audits Without Auto-Publishing",
    metaTitle: "Fimo SEO Agents Guide: Audits, Refreshes & Safe Review",
    metaDescription: "Use Fimo agents for SEO audits, content refreshes, link checks and GEO work while keeping every proposed change in a reviewable branch.",
    h1: "Fimo SEO Agents Guide: Automate Website Maintenance Without Auto-Publishing",
    excerpt: "Fimo's useful SEO automation model is review-first: recurring agents inspect or propose changes in isolated branches, while a person decides what reaches production.",
    category: "SEO",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    ogAlt: "Fimo SEO agent workflow showing recurring audit, isolated branch, preview and diff, human review and production merge",
    sections: [
      { id: "what-agents-can-do", title: "What Fimo SEO agents can actually do", blocks: [
        { type: "paragraph", html: "Fimo's first-party agent pages list SEO audits, content refreshes, translations, image alt text, link checks and post-deploy checks among recurring jobs. Its broader product also markets SEO and GEO maintenance as agent use cases." },
        { type: "note", html: "Those are automation capabilities, not ranking guarantees. Whether a change improves search visibility still has to be measured separately with reliable search and analytics evidence." },
      ]},
      { id: "audit-first", title: "Start with audit-only behavior", blocks: [
        { type: "paragraph", html: "The safest first agent detects problems without rewriting production content. Give it a narrow brief: find broken links, missing alt text, stale dates, duplicate titles, weak internal-link coverage or structured data that no longer matches visible content." },
        { type: "paragraph", html: "Fimo documents agents as folders of plain files under <code>.fimo/agents</code>, with <code>GOAL.md</code> and <code>config.yaml</code> required and optional capabilities or scripts. Put allowed actions, forbidden actions and expected evidence directly in that versioned definition." },
      ]},
      { id: "scheduling", title: "Schedule only work that benefits from repetition", blocks: [
        { type: "paragraph", html: "Fimo supports cron schedules, deploy-triggered runs, other events and manual runs. Broken-link and post-deploy checks may justify frequent execution, while broad content-refresh or competitor work usually benefits from a slower cadence." },
        { type: "paragraph", html: "Fimo currently states that Free includes one active schedule running at most daily, while Pro includes 20 active schedules with intervals down to five minutes. Its pricing is usage-based and launch-state limits can change, so verify the current plan before budgeting." },
      ]},
      { id: "branch-review", title: "Use the branch-per-run model as the safety boundary", blocks: [
        { type: "paragraph", html: "Fimo says every agent run gets its own branch, isolated sandbox and database. The run leaves a report, preview and diff, and nothing reaches production until a person merges it." },
        { type: "paragraph", html: "For SEO-sensitive work, review canonical tags, robots directives, redirects, headings, internal links and structured data especially carefully. A small diff can still have a large indexing effect." },
      ]},
      { id: "refresh-links-schema", title: "Use evidence for refreshes, links and schema", blocks: [
        { type: "paragraph", html: "A content-refresh agent should change a page because facts, search demand or user needs changed, not merely because the page is old. Pricing, API availability, product versions and rollout status are good candidates only when the new facts are verified." },
        { type: "paragraph", html: "Internal-link agents should prioritize reader utility and clear topic-cluster relationships rather than link volume. Schema agents should compare every proposed field against visible content and current platform rules before merge." },
      ]},
      { id: "safe-workflow", title: "A safe Fimo SEO workflow", blocks: [
        { type: "list", items: ["detect an issue or opportunity", "include the evidence in the run report", "propose the minimum necessary change", "review the preview and diff", "validate facts and search intent", "run technical checks", "merge and publish", "measure the production result"] },
        { type: "paragraph", html: "Avoid uncontrolled rewrites, mass near-duplicate page creation, invented statistics, arbitrary keyword insertion, automatic canonical changes and unsupervised publication of legal or pricing content." },
        { type: "paragraph", html: "For Fimo's overall platform, pricing and agent architecture, read the <a href=\"/blog/fimo-autonomous-website-platform\">main Fimo guide</a>. For initial setup, use the <a href=\"/blog/how-to-use-fimo-claude-code-codex-cursor\">Fimo setup guide for Claude Code, Codex and Cursor</a>." },
      ]},
    ],
    sources: fimoSeoSources,
    relatedPaths: ["/blog/fimo-autonomous-website-platform", "/blog/how-to-use-fimo-claude-code-codex-cursor"],
  },
];
