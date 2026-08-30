import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-30";

const googleAdsMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Google Ads API Developer Assistant",
  targetSearchIntent: "Broad overview of Google Ads API Developer Assistant v4.0.0, its capabilities, architecture, supported agent environments, safety boundaries, setup requirements and relationship to Google Ads agent skills and MCP.",
  targetQuery: "Google Ads API Developer Assistant",
  slug: "google-ads-api-developer-assistant-v4",
  title: "Google Ads API Developer Assistant v4: Features, Setup & AI Workflows",
  metaTitle: "Google Ads API Developer Assistant v4: Features & Setup",
  metaDescription: "Google Ads API Developer Assistant v4.0.0 brings schema-grounded GAQL, code generation, troubleshooting and reporting into AI workflows. See features, setup and limits.",
  h1: "Google Ads API Developer Assistant v4.0.0: What It Does and How It Works",
  excerpt: "Google Ads API Developer Assistant v4 combines natural-language intent, schema-grounded GAQL, code generation and controlled read-only reporting inside supported AI coding environments.",
  category: "Marketing",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing an AI developer workspace connected to GAQL, schema validation and campaign reporting",
  sections: [
    { id: "what-it-is", title: "What the Developer Assistant is", blocks: [
      { type: "paragraph", html: "Google's Ads developer documentation covers Google Ads API Developer Assistant v4.0.0, a specialized development workflow for engineers using the Google Ads API. Google explicitly says the Assistant is an open-source project and <strong>not an official Google product</strong>." },
      { type: "paragraph", html: "The Assistant can answer domain questions, construct GAQL, generate client-library code, inspect schemas, troubleshoot integrations and run controlled read-only reporting. Version 4 moves to a global plugin architecture built around Google Antigravity and Claude Code." },
    ]},
    { id: "grounding", title: "Schema grounding and validation", blocks: [
      { type: "paragraph", html: "Google Ads API changes frequently and combines GAQL with strongly typed Protobuf resources. The Assistant uses current schema information and deterministic validation to reduce field-combination and version errors that a generic chatbot can easily produce." },
      { type: "paragraph", html: "Google documents workflows for inspecting objects and enums, resolving MCC hierarchies, troubleshooting conversions, generating reporting queries and exporting read-only results. That is particularly relevant to agencies and marketing-automation teams that repeatedly build around the API." },
    ]},
    { id: "hosts", title: "Assistant, agent skills and MCP are different layers", blocks: [
      { type: "paragraph", html: "The full v4 Assistant is documented for Google Antigravity and Claude Code. Google separately publishes portable Google Ads API agent skills that can be used in a broader set of compatible coding agents, including Codex and Cursor. Those broader skill claims should not be used to imply that the full v4 Assistant runs identically in every host." },
      { type: "paragraph", html: "Google also documents a separate Google Ads MCP server for controlled access to account data. Skills provide domain instructions; MCP provides tools for live account access; the Developer Assistant combines a broader development workflow with validation, code generation and diagnostics." },
    ]},
    { id: "safety", title: "Read-only execution and mutate safety", blocks: [
      { type: "paragraph", html: "The Assistant can generate code for mutate operations, but Google's documented workflow does not automatically execute those campaign-changing mutations. Developers review and run generated mutation code separately." },
      { type: "paragraph", html: "That boundary lets teams use natural-language reporting and diagnostics without turning the coding agent into an unrestricted autonomous media buyer. Normal Google Ads API developer tokens, OAuth credentials and customer permissions still apply." },
    ]},
    { id: "setup", title: "Requirements and next steps", blocks: [
      { type: "paragraph", html: "Google's current setup documentation requires working Google Ads API access, Python 3.10+ for the default Python path, Git and either the Antigravity CLI or Claude Code with its documented prerequisites. The Assistant itself has no separately documented paid subscription price, although surrounding model and infrastructure costs depend on the chosen environment." },
      { type: "paragraph", html: "For the practical setup and a safer first GAQL report, continue with <a href=\"/blog/how-to-install-google-ads-api-developer-assistant\">the installation guide</a>." },
    ]},
  ],
  sources: [
    { label: "Google Developers — What is the Developer Assistant?", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/what-is-developer-assistant" },
    { label: "Google Developers — Install and use the Developer Assistant", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/ai-assistant" },
    { label: "Google Developers — Agent Skills", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/agent-skills" },
    { label: "Google Developers — MCP Server", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server" },
    { label: "GitHub — Google Ads API Developer Assistant", url: "https://github.com/googleads/google-ads-api-developer-assistant" },
  ],
  relatedPaths: ["/blog/how-to-install-google-ads-api-developer-assistant"],
};

const googleAdsInstall: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Google Ads API Developer Assistant",
  targetSearchIntent: "Practical setup guide for installing and configuring Google Ads API Developer Assistant v4.0.0 with the required Google Ads credentials and supported agent environment, then validating a first read-only GAQL/reporting workflow.",
  targetQuery: "how to install Google Ads API Developer Assistant",
  parentSlug: "google-ads-api-developer-assistant-v4",
  slug: "how-to-install-google-ads-api-developer-assistant",
  title: "How to Install Google Ads API Developer Assistant v4 with Claude Code or Antigravity",
  metaTitle: "How to Install Google Ads API Developer Assistant v4",
  metaDescription: "Set up Google Ads API Developer Assistant v4 with Google Ads credentials and a supported agent environment, then validate your first GAQL/reporting workflow safely.",
  h1: "How to Install and Set Up Google Ads API Developer Assistant v4.0.0",
  excerpt: "A safer Developer Assistant v4 setup: verify Google Ads API access, install the supported plugin host, configure credentials and start with a validated read-only GAQL report.",
  category: "Marketing",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet setup graphic showing Google Ads API credentials, a coding agent, GAQL validation and a read-only report",
  sections: [
    { id: "prerequisites", title: "Verify prerequisites first", blocks: [
      { type: "paragraph", html: "Before using this guide, read the <a href=\"/blog/google-ads-api-developer-assistant-v4\">Developer Assistant overview</a>. You need normal Google Ads API access first: a developer token, OAuth configuration, the customer or manager IDs you intend to query, Git and Python 3.10 or newer for the default Python execution path." },
      { type: "paragraph", html: "The full v4 Assistant is currently documented for Antigravity and Claude Code. Google Ads agent skills have broader host support, but that is a separate layer. Fix authentication with a normal API call before adding the AI tooling." },
    ]},
    { id: "install", title: "Install the current v4 plugin", blocks: [
      { type: "paragraph", html: "Clone Google's current repository and use the platform-specific installation script documented for your host. The official guide currently shows <code>./install.sh agy</code> for Antigravity or <code>./install.sh claude</code> for Claude Code on Linux/macOS, with PowerShell equivalents on Windows." },
      { type: "paragraph", html: "Version 4 is a major plugin-architecture change and is not backward compatible with older project-bound releases. If upgrading, follow Google's current migration guidance rather than carrying legacy settings into the new plugin tree." },
    ]},
    { id: "credentials", title: "Configure credentials and customer context", blocks: [
      { type: "paragraph", html: "Keep the client-library configuration in the expected home-directory location, such as <code>google-ads.yaml</code> for Python. Keep developer tokens and OAuth secrets out of prompts, screenshots and repositories." },
      { type: "paragraph", html: "If you repeatedly use one customer, configure the intended customer context. For manager-account workflows, resolve the MCC hierarchy before trusting results so the agent does not report against the wrong client account." },
    ]},
    { id: "first-report", title: "Start with a validated read-only report", blocks: [
      { type: "paragraph", html: "Use a low-risk first request such as enabled campaigns with impressions, clicks, cost and conversions for the last seven days. Inspect the generated GAQL and let the Assistant validate fields and compatibility against the active schema before execution." },
      { type: "paragraph", html: "When a field is ambiguous, use the schema/object inspection workflow instead of guessing. Compare the first returned report with another trusted account view to make sure authentication, customer context and metric interpretation are correct." },
    ]},
    { id: "safety", title: "Keep mutation operations behind human review", blocks: [
      { type: "paragraph", html: "The Assistant can generate mutate code, but the documented safety model does not automatically execute those account changes. Review generated campaign-changing code separately before running it." },
      { type: "paragraph", html: "A practical division of labor is: agent skills for Google Ads instructions, MCP for controlled read-only data access and the Developer Assistant for the larger coding, validation and diagnostic workflow. Keep credentials isolated and preserve a human approval gate for consequential changes." },
    ]},
  ],
  sources: [
    { label: "Google Developers — Install and use the Assistant", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/ai-assistant" },
    { label: "Google Developers — What is the Assistant?", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/what-is-developer-assistant" },
    { label: "GitHub — Google Ads API Developer Assistant", url: "https://github.com/googleads/google-ads-api-developer-assistant" },
    { label: "Google Developers — Make your first API call", url: "https://developers.google.com/google-ads/api/docs/get-started/make-first-call" },
    { label: "Google Developers — Agent Skills", url: "https://developers.google.com/google-ads/api/docs/developer-toolkit/agent-skills" },
  ],
  relatedPaths: ["/blog/google-ads-api-developer-assistant-v4"],
};

export const googleAdsDeveloperAssistantArticles: BlogArticle[] = [googleAdsMain, googleAdsInstall];
