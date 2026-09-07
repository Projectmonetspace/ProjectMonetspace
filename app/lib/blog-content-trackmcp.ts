import type { BlogArticle } from "./blog-types.ts";

const trackMcpSources = [
  { label: "TrackMCP — Homepage", url: "https://www.trackmcp.com/" },
  { label: "TrackMCP — Pricing", url: "https://www.trackmcp.com/pricing" },
  { label: "TrackMCP — Docs", url: "https://www.trackmcp.com/docs" },
  { label: "TrackMCP — TypeScript SDK", url: "https://www.trackmcp.com/docs/typescript" },
  { label: "TrackMCP — Python SDK", url: "https://www.trackmcp.com/docs/python" },
  { label: "TrackMCP — Security", url: "https://www.trackmcp.com/security" },
  { label: "TrackMCP — Privacy", url: "https://www.trackmcp.com/privacy" },
];

export const trackMcpArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "TrackMCP",
    targetSearchIntent: "Understand what TrackMCP is, what telemetry it captures, how its MCP-specific analytics differ from ordinary logs, current pricing and SDK support, and the privacy and deployment boundaries to verify before production use.",
    targetQuery: "TrackMCP",
    slug: "trackmcp-mcp-server-analytics",
    title: "TrackMCP: MCP Server Analytics, Pricing & How It Works",
    metaTitle: "TrackMCP: MCP Server Analytics, Pricing & How It Works",
    metaDescription: "TrackMCP is an analytics and observability layer for MCP servers. See current pricing, SDK support, workflow analytics, privacy controls and limitations.",
    h1: "TrackMCP: Analytics and Observability for MCP Servers",
    excerpt: "TrackMCP instruments MCP servers at the server boundary so teams can analyze clients, tools, sessions, reliability and workflow outcomes without treating ordinary request logs as the whole product picture.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "TrackMCP MCP server analytics showing clients, tools, workflows, outcomes and reliability",
    sections: [
      { id: "what-is-trackmcp", title: "What is TrackMCP?", blocks: [
        { type: "paragraph", html: "TrackMCP is an analytics and observability product for teams that operate Model Context Protocol servers. Its documented setup wraps the MCP server itself, then turns server-side protocol traffic into views for clients, tools, sessions, reliability and workflow outcomes." },
        { type: "paragraph", html: "That boundary matters. TrackMCP is not the MCP specification, an AI model or a universal client-side monitor. It observes what reaches an instrumented server you control; the official docs say it does not see a host application's private model turn unless you add a separate client-side integration." },
      ]},
      { id: "what-it-measures", title: "What TrackMCP measures", blocks: [
        { type: "list", items: ["AI client attribution and returning usage", "MCP tool discovery and calls", "sessions and multi-tool workflow sequences", "latency, errors and retries", "silent-failure patterns hidden behind superficially successful responses", "explicit and inferred workflow-outcome signals"] },
        { type: "paragraph", html: "The product is trying to answer a different question from a raw log line: not only whether a request happened, but how an agent used tools across a job and where that job appeared to succeed, retry, stall or stop." },
        { type: "note", html: "TrackMCP's dashboard examples and outcome percentages are vendor demonstrations. Treat outcome analytics as useful product signals, not independent proof that every AI answer or business action was correct." },
      ]},
      { id: "how-it-works", title: "How TrackMCP works", blocks: [
        { type: "paragraph", html: "For TypeScript, TrackMCP currently documents the `@trackmcp/sdk` package and `withTrackMCP` wrapper around an existing official MCP server. The Python docs now publish a parallel `trackmcp` package with a `with_trackmcp` wrapper for Python 3.9+ and the official MCP SDK." },
        { type: "paragraph", html: "Both SDKs expose configuration for service/environment labels, sampling and redaction. TrackMCP's security documentation says redaction can run inside the server process before telemetry is transmitted, which is more concrete than simply promising future privacy controls." },
        { type: "paragraph", html: "Because instrumentation sits at the server boundary, a third-party MCP server you cannot modify is not automatically observable through this SDK path. Do not assume TrackMCP can inspect arbitrary hosted MCP services outside your control." },
      ]},
      { id: "pricing", title: "TrackMCP pricing", blocks: [
        { type: "paragraph", html: "TrackMCP's current public pricing page lists Hobby at $0 forever with 1,000 captured tool calls per month, seven-day retention, one MCP server and one team member." },
        { type: "paragraph", html: "Pro is currently $49 per month with 50,000 captured tool calls per month, 90-day retention, up to five MCP servers, privacy-aware telemetry and trace inspection, up to five team members and email support." },
        { type: "paragraph", html: "Enterprise uses custom pricing and custom retention/volume with security review, custom terms and priority onboarding. TrackMCP's privacy page also says Enterprise customers can discuss self-hosting or deployment into their own cloud/VPC." },
        { type: "note", html: "Slack alerts, webhook alerts, anomaly alerts and data exports are currently marked Planned on the pricing page. They should not be described as live Pro features until TrackMCP changes that status." },
      ]},
      { id: "privacy-security", title: "Privacy and security boundaries", blocks: [
        { type: "paragraph", html: "MCP tools can carry customer data, internal records or credentials, so telemetry design matters as much as analytics. TrackMCP says teams control what their server sends and recommends avoiding raw prompts, secrets and unnecessary end-user data." },
        { type: "paragraph", html: "The current SDK documentation provides local redaction paths such as argument, token and result fields. TrackMCP also says data is encrypted in transit and at rest, retention follows the selected plan, and workspace owners can request deletion or other privacy actions." },
        { type: "paragraph", html: "Before production use, verify the exact fields captured in your integration, region/data-residency requirements, access controls, retention, subprocessors and whether your plan's deployment model fits your security obligations." },
      ]},
      { id: "logs-apm", title: "TrackMCP versus logs and APM", blocks: [
        { type: "paragraph", html: "Logs and APM remain useful for infrastructure failures, traces, exceptions and service dependencies. TrackMCP is positioned one layer higher around MCP product usage: which clients arrive, which tools they use, which sequences recur and where workflows appear to break." },
        { type: "paragraph", html: "That makes TrackMCP complementary rather than automatically substitutive. An authoritative business event, database write or transaction record should still win if it disagrees with an inferred workflow-completion label." },
      ]},
      { id: "who-is-it-for", title: "Who is TrackMCP for?", blocks: [
        { type: "paragraph", html: "TrackMCP is most relevant to teams shipping MCP servers to real users: SaaS products exposing actions through MCP, developer-tool companies, internal platform teams and agent products that need to understand tool adoption and reliability after launch." },
        { type: "paragraph", html: "A tiny private MCP server with negligible traffic may not need a dedicated analytics layer yet. The value increases when multiple clients and workflows make ordinary request counts too shallow to explain product behavior." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "TrackMCP is an early MCP-specific observability product with a simple server-boundary integration and a clearer privacy story than its earliest launch copy implied. Its strongest use is turning tool traffic into adoption, reliability and workflow questions a product team can act on." },
        { type: "paragraph", html: "Use the dedicated setup guide below for TypeScript and Python installation, controlled verification traffic, redaction and the checks to run before trusting higher-level analytics." },
      ]},
    ],
    sources: trackMcpSources,
    relatedPaths: ["/blog/how-to-use-trackmcp-mcp-server"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "TrackMCP",
    targetSearchIntent: "Install TrackMCP on an existing TypeScript or Python MCP server, configure keys and redaction, verify incoming telemetry with controlled test traffic, and interpret client, tool, workflow and reliability analytics safely.",
    targetQuery: "how to use TrackMCP",
    parentSlug: "trackmcp-mcp-server-analytics",
    slug: "how-to-use-trackmcp-mcp-server",
    title: "How to Use TrackMCP: Instrument an MCP Server and Read the Analytics",
    metaTitle: "How to Use TrackMCP for MCP Server Analytics",
    metaDescription: "Learn how to install TrackMCP on TypeScript or Python MCP servers, configure redaction, verify telemetry, and interpret workflow and reliability analytics.",
    h1: "How to Use TrackMCP to Monitor an MCP Server",
    excerpt: "Add TrackMCP at the MCP server boundary, verify one known tool call before trusting the dashboard, redact sensitive fields locally and validate outcome analytics against authoritative application evidence.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "TrackMCP server-side instrumentation flow from MCP clients through a wrapped server to analytics",
    sections: [
      { id: "before-install", title: "Before you install TrackMCP", blocks: [
        { type: "paragraph", html: "You need an MCP server you can modify and redeploy, a TrackMCP workspace key, at least one test client and a decision about what telemetry is acceptable for your users and security model." },
        { type: "paragraph", html: "Keep the ingest key in an environment variable or secret manager. TrackMCP's security guidance explicitly warns against committing keys to source control or placing them in tool arguments." },
      ]},
      { id: "typescript", title: "1. Install TrackMCP on a TypeScript MCP server", blocks: [
        { type: "paragraph", html: "TrackMCP currently documents `npm i @trackmcp/sdk`, then wrapping the existing server with `withTrackMCP`. The API key is required; service, environment, sampling, redaction and endpoint options are configurable." },
        { type: "paragraph", html: "A minimal documented shape is: `withTrackMCP(server, { apiKey: process.env.TRACKMCP_KEY, service: \"acme-mcp-server\" })`. Keep your existing tool definitions unchanged and make sure the wrapped export is the server process that actually handles traffic." },
      ]},
      { id: "python", title: "2. Install TrackMCP on a Python MCP server", blocks: [
        { type: "paragraph", html: "The current Python documentation supports Python 3.9+ and the official MCP SDK. Install with `python3 -m pip install trackmcp` or the documented uv/Poetry equivalents." },
        { type: "paragraph", html: "Wrap the server with `with_trackmcp`, pass the key from `os.environ`, and optionally set service, environment, sample rate, redaction paths or a custom endpoint. This is now documented primary-source behavior rather than an inferred translation from the TypeScript SDK." },
      ]},
      { id: "redaction", title: "3. Configure redaction before production telemetry", blocks: [
        { type: "paragraph", html: "TrackMCP's SDK docs allow redaction paths for sensitive argument and result fields. The documentation says this redaction runs in your process before data is sent and stores a redacted placeholder instead of the original value." },
        { type: "paragraph", html: "Build the redaction list around your own tool schemas. Credentials, API keys, raw personal data and unnecessary payload fields should not be captured merely because observability makes capture technically possible." },
      ]},
      { id: "deploy-test", title: "4. Deploy and generate controlled test traffic", blocks: [
        { type: "list", ordered: true, items: ["Deploy the wrapped server through your normal path.", "Point a known MCP client at that exact deployment.", "Run a single deterministic tool call.", "Run a multi-tool workflow.", "Trigger one recoverable error or retry case.", "Record what actually happened so you can compare it with TrackMCP's dashboard."] },
        { type: "paragraph", html: "The quickstart recommends verifying an actual event after wrapping the server. Do not jump directly to interpreting high-level outcome metrics before raw client and tool attribution match behavior you already know." },
      ]},
      { id: "verify-analytics", title: "5. Verify client, tool and session analytics", blocks: [
        { type: "paragraph", html: "Check whether the expected client appeared, the correct tools were counted, service/environment labels are right and retries/errors match your own server evidence. If basic attribution is wrong, higher-level workflow analysis will be less trustworthy." },
        { type: "paragraph", html: "Then inspect recurring tool sequences, stopping points, latency and retry patterns. Those patterns can reveal unclear schemas, weak tool descriptions, ambiguous errors or workflows that ask an agent to make unnecessary calls." },
      ]},
      { id: "outcomes", title: "6. Treat outcome analytics as signals", blocks: [
        { type: "paragraph", html: "TrackMCP can summarize completed workflows and silent failures, but a dashboard outcome is not a substitute for authoritative business evidence. Validate important claims against deterministic tests, database writes, transactions, application logs or user-confirmed results." },
        { type: "paragraph", html: "If TrackMCP says a workflow completed but the underlying business action did not happen, the business system should win that disagreement." },
      ]},
      { id: "pricing-retention", title: "7. Check retention and current plan limits", blocks: [
        { type: "paragraph", html: "Hobby currently includes 1,000 captured tool calls per month and seven-day retention; Pro is $49 per month with 50,000 calls and 90-day retention. Compare those limits with expected traffic before choosing a production sampling strategy." },
        { type: "note", html: "Do not configure an operating process around Slack or webhook alerts yet unless TrackMCP changes the pricing page: those integrations are currently marked Planned." },
      ]},
      { id: "troubleshooting", title: "Troubleshooting: no TrackMCP data appears", blocks: [
        { type: "paragraph", html: "First confirm traffic is reaching the newly deployed wrapped server rather than an older local or production endpoint. Then verify the workspace key exists in the running environment and the exported/wrapped server is the one accepting calls." },
        { type: "paragraph", html: "If some clients or sessions are missing, compare their connection paths and environment labels. If raw calls appear but workflow grouping looks wrong, reproduce the behavior with a deterministic test before changing application code." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "A safe TrackMCP rollout is straightforward: wrap the server, protect the key, redact locally, verify one known event, validate raw attribution, then use higher-level workflow and reliability views to guide product decisions." },
        { type: "paragraph", html: "For current pricing, privacy boundaries and how TrackMCP fits beside logs and APM, use the main TrackMCP overview linked below." },
      ]},
    ],
    sources: trackMcpSources,
    relatedPaths: ["/blog/trackmcp-mcp-server-analytics"],
  },
];