import type { BlogArticle } from "./blog-types.ts";

const monidSources = [
  { label: "Monid — Documentation", url: "https://docs.monid.ai/" },
  { label: "Monid — Pricing documentation", url: "https://docs.monid.ai/guide/pricing.html" },
  { label: "Monid — Official site", url: "https://monid.ai/" },
  { label: "Product Hunt — Monid", url: "https://www.producthunt.com/products/monid" },
];

const published = "2026-09-03";

export const monidArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Monid",
    targetSearchIntent: "Broad entity/product overview: understand what Monid is, how its agent-tool routing works, current access methods, pricing model, use cases and limitations",
    targetQuery: "Monid",
    slug: "monid-agent-tools",
    title: "Monid: Pricing, MCP, API & Agent Tools Explained",
    metaTitle: "Monid: Pricing, MCP, API & Agent Tools Explained",
    metaDescription: "What is Monid? See how its 1,300+ agent-tool catalog, MCP, Skill, CLI and API work, how pay-per-call pricing works, and the key limitations to know.",
    h1: "Monid: The OpenRouter for AI Agent Tools?",
    excerpt: "Monid gives AI agents one access and payment layer for discovering, inspecting and running third-party tools with price information available before execution.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: published,
    dateModified: published,
    ogAlt: "Monid agent-tool routing concept with one gateway connecting an AI agent to multiple APIs",
    sections: [
      {
        id: "what-it-is",
        title: "What Monid is",
        blocks: [
          { type: "paragraph", html: "Monid is an agent-tool access layer that lets an AI agent discover, inspect and execute third-party tools through one integration and one balance. Monid describes the idea as an <strong>\"OpenRouter for agent tools\"</strong>: the model keeps reasoning, while Monid handles access to external capabilities and their metered execution." },
          { type: "paragraph", html: "The current first-party site advertises <strong>1,300+ tools across 13+ providers</strong>. Those are live vendor figures, not fixed catalog guarantees; Monid's documentation explicitly says the catalog grows every day." },
        ],
      },
      {
        id: "workflow",
        title: "How Monid works",
        blocks: [
          { type: "paragraph", html: "Monid documents a three-step loop: <strong>discover</strong> tools for a task, <strong>inspect</strong> the selected endpoint's schema, documentation and pricing, then <strong>run</strong> it with structured input." },
          { type: "paragraph", html: "The pricing information is part of the workflow rather than an afterthought. Discovery and inspection can expose endpoint pricing before a paid execution, and the run response records the actual cost charged." },
          { type: "note", html: "Monid says it handles trust, payment and fulfillment between an agent and the underlying tool provider. Reliability, rate limits, data quality and output quality can still depend on the provider behind the selected endpoint." },
        ],
      },
      {
        id: "access",
        title: "MCP, Agent Skill, CLI, API and OAuth access",
        blocks: [
          { type: "paragraph", html: "Monid's hosted MCP server is currently <code>https://mcp.monid.ai/v1</code>. Its documentation explicitly lists Claude.ai, ChatGPT and other MCP-compatible clients using Streamable HTTP." },
          { type: "paragraph", html: "For skill-capable agents, Monid publishes a hosted <code>SKILL.md</code>. It also documents a CLI installed with <code>npm install -g @monid-ai/cli</code>, a REST API beginning with endpoints such as <code>POST /v1/discover</code>, and OAuth 2.0 for applications that call Monid on behalf of users." },
          { type: "paragraph", html: "For a practical connection sequence and production safety controls, read the <a href=\"/blog/how-to-use-monid\">Monid setup guide for Claude, ChatGPT and Cursor</a>." },
        ],
      },
      {
        id: "pricing",
        title: "How Monid pricing works",
        blocks: [
          { type: "paragraph", html: "Monid's current pricing documentation says there are <strong>no subscriptions or enterprise contracts for the routing layer</strong>; you pay for the endpoints you use. Each endpoint has its own price." },
          { type: "paragraph", html: "The two documented models are <strong>per-call</strong> pricing, where a fixed amount is charged for an execution, and <strong>per-result</strong> pricing, where cost depends on returned result items and can include a flat base fee." },
          { type: "paragraph", html: "Exact endpoint prices are dynamic. Treat the current discover/inspect response as the source of truth before a production run instead of assuming an example price will remain unchanged." },
        ],
      },
      {
        id: "catalog",
        title: "What kinds of tools are available?",
        blocks: [
          { type: "paragraph", html: "The current Monid site shows tools for social scraping, web search, browser automation, people and company data, voice, video generation and other agent tasks. Displayed providers and services include Apollo, People Data Labs, Apify, Browserbase, Exa, ElevenLabs and social-data tools for platforms such as Instagram, TikTok, YouTube and Reddit." },
          { type: "paragraph", html: "Availability changes at the provider and endpoint level. The live catalog is more authoritative than a static list copied into an article." },
        ],
      },
      {
        id: "marketing",
        title: "Why Monid matters for marketing and creator workflows",
        blocks: [
          { type: "paragraph", html: "The useful shift is runtime tool choice. A marketing agent could discover a search or enrichment endpoint, inspect its cost, run it and pass verified context into the next step without the developer hard-coding a separate integration for every provider." },
          { type: "list", items: ["Prospect research and contact enrichment", "Social monitoring across multiple platforms", "Web and competitor research", "Creator workflows that combine data, video, image or voice tools", "Automation experiments where endpoint choice can change by task"] },
          { type: "paragraph", html: "Monid publishes its own workflow demonstrations and cost examples. Those should be treated as vendor demonstrations, not independent benchmarks or universal price guarantees." },
        ],
      },
      {
        id: "comparisons",
        title: "Monid vs an MCP server and OpenRouter",
        blocks: [
          { type: "paragraph", html: "A conventional MCP server often exposes one product or service to an agent. Monid is broader: it is a discovery, metering and execution layer across many external tools, so it behaves more like a tool gateway or marketplace than a single-purpose MCP integration." },
          { type: "paragraph", html: "The OpenRouter comparison is conceptual. OpenRouter routes model inference; Monid routes external tools and APIs. An agent can use both—one for the model and one for actions or data sources." },
        ],
      },
      {
        id: "limits",
        title: "Current limitations and open questions",
        blocks: [
          { type: "list", items: ["Catalog and provider counts can change quickly", "Endpoint prices and availability are dynamic", "No independent large-scale reliability or latency benchmark was found in the reviewed sources", "Underlying providers still determine many rate limits, output-quality and data-quality constraints", "Agents that can spend money or take consequential actions need explicit budgets and approval controls"] },
          { type: "paragraph", html: "The product is early enough that operators should verify live catalog coverage and pricing for their exact workflow rather than designing around launch-period assumptions." },
        ],
      },
      {
        id: "faq",
        title: "Monid FAQ",
        blocks: [
          { type: "paragraph", html: "<strong>Is Monid free?</strong> Monid's pricing docs currently say there is no subscription for the routing layer, but paid endpoints are metered. The current homepage advertises $1 in starter credit; promotional credit can change." },
          { type: "paragraph", html: "<strong>Does Monid support ChatGPT and Claude?</strong> Monid's documentation explicitly lists ChatGPT and Claude.ai for its hosted MCP route. Actual controls still depend on the host product's current plan and MCP support." },
          { type: "paragraph", html: "<strong>Does Monid replace OpenRouter?</strong> No. They address different layers: model inference versus external tool execution." },
        ],
      },
    ],
    sources: monidSources,
    relatedPaths: ["/blog/how-to-use-monid"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Monid",
    targetSearchIntent: "Implementation/setup intent: connect Monid to Claude, ChatGPT, Cursor or another compatible agent and choose between MCP, Agent Skill, CLI and API access safely",
    targetQuery: "how to use Monid",
    parentSlug: "monid-agent-tools",
    slug: "how-to-use-monid",
    title: "How to Use Monid with Claude, ChatGPT & Cursor",
    metaTitle: "How to Use Monid with Claude, ChatGPT & Cursor",
    metaDescription: "Set up Monid with Claude, ChatGPT, Cursor or your own agent using MCP, Agent Skill, CLI or API. Learn discovery, pricing checks, execution and safety controls.",
    h1: "How to Use Monid with Claude, ChatGPT & Cursor",
    excerpt: "A practical setup guide for connecting Monid through MCP, Agent Skill, CLI or API and adding budgets, logging and approvals before production use.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: published,
    dateModified: published,
    ogAlt: "Four ways to connect an AI agent to Monid through MCP, Skill, CLI and API",
    sections: [
      {
        id: "choose-method",
        title: "1. Choose the right Monid connection method",
        blocks: [
          { type: "paragraph", html: "Monid currently documents MCP, Agent Skill, CLI, HTTP API and OAuth access. The best route depends on whether an interactive agent or your own application controls the workflow." },
          { type: "list", items: ["Hosted MCP for clients that support remote MCP over Streamable HTTP", "Agent Skill for agents that can install and follow hosted skills", "CLI for terminal testing and direct inspection", "HTTP API for application-level control", "OAuth when a platform needs to call Monid on behalf of users"] },
        ],
      },
      {
        id: "mcp",
        title: "2. Connect with hosted MCP",
        blocks: [
          { type: "paragraph", html: "Monid's documented remote server is <code>https://mcp.monid.ai/v1</code>. Its current introduction explicitly names Claude.ai and ChatGPT among compatible clients and says the connection uses Streamable HTTP." },
          { type: "paragraph", html: "The exact UI for adding an MCP server is controlled by the host product and can vary by plan or release. Use the current client-specific connection flow rather than assuming every account exposes the same settings." },
        ],
      },
      {
        id: "skill-cli",
        title: "3. Use the Agent Skill or CLI",
        blocks: [
          { type: "paragraph", html: "For skill-capable agents such as coding-agent environments, Monid publishes a setup instruction pointing to <code>https://monid.ai/SKILL.md</code>. The skill teaches the discover → inspect → run workflow." },
          { type: "paragraph", html: "For terminal access, install the CLI with <code>npm install -g @monid-ai/cli</code>. The CLI is useful for testing catalog discovery and inspecting endpoint details before embedding Monid into an automated production workflow." },
        ],
      },
      {
        id: "api",
        title: "4. Use the HTTP API for application control",
        blocks: [
          { type: "paragraph", html: "Monid's official introduction shows discovery through <code>POST https://api.monid.ai/v1/discover</code> with bearer authentication. The API is the stronger fit when your own software needs deterministic control over budgets, logging, endpoint selection and downstream processing." },
          { type: "paragraph", html: "OAuth 2.0 is documented separately for platforms that need to access Monid on behalf of their users." },
        ],
      },
      {
        id: "execution-loop",
        title: "5. Keep discover, inspect and run separate",
        blocks: [
          { type: "paragraph", html: "Start with <strong>discover</strong> to find endpoints for the job. Then <strong>inspect</strong> the selected endpoint's schema, documentation and current pricing before execution. Finally, <strong>run</strong> the endpoint with structured input." },
          { type: "paragraph", html: "Monid's pricing documentation says discover results, inspect details and run responses all expose pricing information, with the run response showing the actual cost charged. Log that actual cost in production." },
        ],
      },
      {
        id: "budgets",
        title: "6. Add spending and retry controls before production",
        blocks: [
          { type: "list", items: ["Set a per-task spending ceiling", "Require approval above a defined threshold", "Log provider, endpoint and actual charge", "Cap retries and tool-loop depth", "Define a fallback when an endpoint fails", "Validate returned data before consequential writes", "Keep API credentials in environment variables or a secret manager"] },
          { type: "paragraph", html: "Dynamic tool choice is useful because the agent can select among many paid services. That is also why an unlimited wallet is a poor default for unattended automation." },
        ],
      },
      {
        id: "host-notes",
        title: "Claude, ChatGPT and Cursor setup notes",
        blocks: [
          { type: "paragraph", html: "For Claude and ChatGPT, Monid's current docs explicitly support the hosted MCP route. For coding-agent environments such as Cursor, Monid's own introduction points users toward the Agent Skill pattern, while current MCP support can also depend on the host version." },
          { type: "paragraph", html: "The underlying Monid capability does not change with the host: the agent still discovers tools, inspects the schema and price, and executes the selected endpoint. What changes is how the host exposes the integration." },
        ],
      },
      {
        id: "examples",
        title: "Practical Monid workflow examples",
        blocks: [
          { type: "paragraph", html: "A research agent can discover web-search or fetch tools, inspect pricing and run the selected endpoint. A sales workflow can combine company research with people-data or enrichment tools. A creator workflow can discover video, voice or image services without maintaining a direct integration for every provider." },
          { type: "note", html: "Treat any workflow-cost example from Monid as a vendor demonstration. Endpoint prices and the number of calls required by your own task can differ." },
        ],
      },
      {
        id: "mistakes",
        title: "Common Monid setup mistakes",
        blocks: [
          { type: "list", items: ["Treating Monid as the reasoning model instead of the tool-access layer", "Skipping inspect before a paid run", "Assuming catalog pricing is permanent", "Allowing unlimited spending or retries", "Failing to review underlying provider terms for sensitive data"] },
          { type: "paragraph", html: "For the broader product model, current catalog scope, pricing structure and limitations, return to the <a href=\"/blog/monid-agent-tools\">main Monid overview</a>." },
        ],
      },
    ],
    sources: monidSources,
    relatedPaths: ["/blog/monid-agent-tools"],
  },
];
