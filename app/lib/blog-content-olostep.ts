import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-31";

const olostepMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Olostep",
  targetSearchIntent: "Broad entity/product overview: what Olostep is, current launch/access, API capabilities, pricing, AI-agent integrations, use cases and limitations",
  targetQuery: "Olostep",
  slug: "olostep",
  title: "Olostep: API, Pricing, Web Scraping & AI Agent Features",
  metaTitle: "Olostep: API, Pricing, Web Scraping & AI Agent Features",
  metaDescription: "Olostep is a web-data API for AI agents with search, scraping, crawling, structured extraction and monitoring. See features, pricing, setup and limits.",
  h1: "Olostep: Web Data Infrastructure for AI Agents",
  excerpt: "Olostep combines search, scraping, crawling, structured extraction, monitoring and agent-oriented web-data workflows behind one developer platform.",
  category: "Automation",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet schematic showing the public web flowing through Olostep into Markdown, JSON and an AI agent",
  sections: [
    {
      id: "what-it-is",
      title: "What Olostep is",
      blocks: [
        { type: "paragraph", html: "Olostep is web-data infrastructure for developers and AI agents that need fresh public-web information without maintaining a separate browser, proxy and scraping stack. Its August 30, 2026 Product Hunt launch created a fresh discovery window, while the underlying service and documentation existed before that listing." },
        { type: "paragraph", html: "The platform exposes web search, page scraping, site crawling, URL discovery, batching, structured extraction, web-grounded answers, monitoring and multi-step research workflows. It is infrastructure for building applications rather than a consumer chatbot." },
      ],
    },
    {
      id: "capabilities",
      title: "Scrape, crawl, map, search and monitor",
      blocks: [
        { type: "paragraph", html: "Use scraping when you know the target page, crawling when you need multiple pages from a site, mapping when you first need URL discovery and search when the job begins with a query. Olostep also documents batch workflows and recurring monitors/schedules." },
        { type: "paragraph", html: "Outputs can include machine-usable formats such as Markdown, HTML, text, screenshots and structured data. Olostep documents JavaScript-rendered requests and developer access through HTTP plus Python and Node-oriented workflows." },
      ],
    },
    {
      id: "pricing",
      title: "Olostep pricing as reverified on August 31, 2026",
      blocks: [
        { type: "paragraph", html: "The official pricing page currently lists Trial at $0 with 500 successful requests and no credit card requirement; Starter at $9/month with 5,000 successful requests and 150 concurrent requests; Standard at $99/month with 200,000 successful requests and 500 concurrent requests; and Scale at $399/month with 1 million successful requests plus AI-powered browser automations." },
        { type: "paragraph", html: "Olostep also sells top-up credit packs and enterprise arrangements. The company says it bills successful requests; endpoints involving language-model processing can introduce model-related costs, so total workflow cost should be measured rather than assuming every operation has the same economics." },
      ],
    },
    {
      id: "agents",
      title: "Coding-agent integration",
      blocks: [
        { type: "paragraph", html: "Olostep has a first-party CLI/skills installation path for coding agents. Its current integration page explicitly names Claude Code, Cursor, Windsurf, OpenAI Codex and Gemini CLI, plus compatible agents that support skill directories." },
        { type: "paragraph", html: "The documented setup installs <code>olostep-cli</code>, authenticates through a browser and installs Olostep-prefixed skills into detected agent directories. This is a skill-based integration; it should not be called MCP unless separate first-party MCP documentation appears. See <a href=\"/blog/olostep-claude-code-cursor-codex\">the agent setup guide</a>." },
      ],
    },
    {
      id: "use-cases-limits",
      title: "Use cases and important limits",
      blocks: [
        { type: "paragraph", html: "Olostep can support current-data retrieval for AI/RAG systems, creator and competitor research, SEO monitoring, public company research and recurring change detection. It is a collection layer, not a replacement for first-party analytics such as Search Console and not a guarantee of ranking improvement." },
        { type: "paragraph", html: "Olostep says it works with most publicly available sites, including JavaScript-rendered pages. Logged-in or cookie-based access is case by case. Teams remain responsible for site terms, privacy obligations and applicable law, and vendor uptime/scale/cost claims should be tested against the actual target workload. For implementation details, read <a href=\"/blog/olostep-api\">the Olostep API guide</a>." },
      ],
    },
  ],
  sources: [
    { label: "Olostep — official homepage", url: "https://www.olostep.com/" },
    { label: "Olostep — pricing", url: "https://www.olostep.com/pricing" },
    { label: "Olostep Docs — welcome", url: "https://docs.olostep.com/get-started/welcome" },
    { label: "Olostep — agent integration", url: "https://www.olostep.com/agent-integration" },
    { label: "Product Hunt — Olostep", url: "https://www.producthunt.com/products/olostep" },
  ],
  relatedPaths: ["/blog/olostep-api", "/blog/olostep-claude-code-cursor-codex"],
};

const olostepApi: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Olostep",
  targetSearchIntent: "Implement Olostep with Python, Node.js or HTTP to scrape pages, crawl sites, search the web and return structured data safely",
  targetQuery: "Olostep API",
  parentSlug: "olostep",
  slug: "olostep-api",
  title: "How to Use the Olostep API: Scrape, Crawl & Search the Web",
  metaTitle: "Olostep API Tutorial: Scrape, Crawl & Search with Python",
  metaDescription: "Learn how to use the Olostep API to scrape pages, crawl sites, search the web and return Markdown or JSON with Python, Node.js and HTTP.",
  h1: "How to Use the Olostep API",
  excerpt: "A practical Olostep API workflow for choosing the right endpoint, preserving provenance, controlling cost and validating extracted web data before it reaches an app or agent.",
  category: "Automation",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet API workflow showing a search query or URL flowing through scrape and crawl operations into Markdown and JSON",
  sections: [
    {
      id: "setup-endpoint",
      title: "Start with an API key and the narrowest endpoint",
      blocks: [
        { type: "paragraph", html: "Olostep's current pricing page offers 500 successful requests on the free Trial. Store the API credential as a secret and verify the live endpoint documentation before production because quotas and SDK interfaces can change." },
        { type: "paragraph", html: "Choose the smallest operation that solves the job: scrape a known page, crawl a relevant site scope, map URLs before crawling, search when you only have a query, batch a predetermined URL list or schedule a recurring monitor." },
      ],
    },
    {
      id: "outputs",
      title: "Choose outputs for the downstream system",
      blocks: [
        { type: "paragraph", html: "Olostep's web-scraping material describes outputs including HTML, Markdown, text, screenshots and structured data. Markdown is often easier for retrieval and human inspection; structured JSON is better when a deterministic workflow expects a known schema." },
        { type: "paragraph", html: "Preserve the original source URL, collection timestamp and extraction method with every record. Search discovery tells you where to look; the retrieved source page is what should support a factual claim." },
      ],
    },
    {
      id: "crawl-dynamic",
      title: "Control crawls and JavaScript-heavy pages",
      blocks: [
        { type: "paragraph", html: "Do not crawl an entire domain by default. Map or restrict the path scope first, then collect only the sections required for the job. A competitor-monitoring workflow may need product, pricing, changelog and documentation pages rather than every archive and legal page." },
        { type: "paragraph", html: "Olostep says its infrastructure supports JavaScript-rendered public pages, but dynamic sites can still change layout, trigger anti-bot systems or require interactions. Logged-in and cookie-based sites are case by case, not a universal access promise." },
      ],
    },
    {
      id: "pricing-safeguards",
      title: "Current plan limits and production safeguards",
      blocks: [
        { type: "paragraph", html: "Current published plans are Trial $0/500 successful requests, Starter $9/month/5,000 requests/150 concurrency, Standard $99/month/200,000 requests/500 concurrency and Scale $399/month/1 million requests. Credit packs are also available. Recheck the pricing page before purchase." },
        { type: "paragraph", html: "Production integrations should add request logging, retries with caps, rate/concurrency controls, secret management, output validation and clear retention rules. Treat LLM-powered extraction differently from deterministic parsing because it has both accuracy and cost implications." },
      ],
    },
    {
      id: "agent-workflow",
      title: "Use Olostep as a composable web-data layer",
      blocks: [
        { type: "paragraph", html: "A strong research pipeline can search for candidate sources, scrape the strongest first-party pages, normalize facts into a predetermined schema, validate missing fields and only then pass the record to an LLM or downstream automation." },
        { type: "paragraph", html: "For product and pricing context, return to <a href=\"/blog/olostep\">the Olostep overview</a>. If you want coding agents to call these capabilities through Olostep's official skills workflow, continue with <a href=\"/blog/olostep-claude-code-cursor-codex\">the agent integration guide</a>." },
      ],
    },
  ],
  sources: [
    { label: "Olostep Docs — welcome", url: "https://docs.olostep.com/get-started/welcome" },
    { label: "Olostep — web scraping API", url: "https://www.olostep.com/apis/web-scraping-api" },
    { label: "Olostep — pricing", url: "https://www.olostep.com/pricing" },
    { label: "Olostep — official homepage", url: "https://www.olostep.com/" },
  ],
  relatedPaths: ["/blog/olostep", "/blog/olostep-claude-code-cursor-codex"],
};

const olostepAgents: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Olostep",
  targetSearchIntent: "Install Olostep's official CLI skills and connect supported coding agents to web search, scraping and crawling",
  targetQuery: "Olostep Claude Code",
  parentSlug: "olostep",
  slug: "olostep-claude-code-cursor-codex",
  title: "How to Connect Olostep to Claude Code, Cursor & Codex",
  metaTitle: "Olostep with Claude Code, Cursor & Codex: Setup Guide",
  metaDescription: "Connect Olostep web search, scraping and crawling to Claude Code, Cursor, Codex, Windsurf or Gemini CLI using the official CLI and agent skills.",
  h1: "How to Connect Olostep to Claude Code, Cursor & Codex",
  excerpt: "Install Olostep's official CLI, authenticate once and add web-data skills to supported coding agents without inventing an undocumented MCP integration.",
  category: "Automation",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet diagram showing coding agents connected through Olostep skills to web search, scraping and crawling",
  sections: [
    {
      id: "install",
      title: "Install the CLI and authenticate",
      blocks: [
        { type: "paragraph", html: "Olostep's current first-party setup documents <code>npm install -g olostep-cli</code> for a global CLI installation. Verify your machine's package policy before using a global npm package in a managed environment." },
        { type: "paragraph", html: "The next documented command is <code>olostep add skills --login</code>. Olostep says this opens browser authentication, stores the API key under <code>~/.agents/credentials.json</code>, installs skills into shared/detected agent directories and records installed versions in <code>~/.agents/.skill-lock.json</code>." },
      ],
    },
    {
      id: "supported-agents",
      title: "Supported coding agents",
      blocks: [
        { type: "paragraph", html: "The current integration page explicitly lists Claude Code, Cursor, Windsurf, OpenAI Codex and Gemini CLI, plus other agents that support compatible skill directories. Treat that as a first-party compatibility claim for the skills mechanism, not a guarantee that every client version exposes skills identically." },
        { type: "paragraph", html: "This is a CLI/skill-directory integration. Do not label it MCP unless Olostep separately publishes first-party MCP documentation. That distinction prevents a common search-page mistake where unrelated agent integration mechanisms are treated as interchangeable." },
      ],
    },
    {
      id: "workflows",
      title: "Useful agent workflows",
      blocks: [
        { type: "paragraph", html: "A coding agent can search for current documentation, retrieve the primary page and return the exact version or parameter before modifying code. It can also collect permitted public pricing/changelog pages for product monitoring or gather public pages for SEO research." },
        { type: "paragraph", html: "Web access does not certify every retrieved claim. Require source URLs and preserve evidence, especially when the result may trigger publishing, advertising changes, CRM writes or production code changes." },
      ],
    },
    {
      id: "security",
      title: "Security and prompt-injection boundaries",
      blocks: [
        { type: "paragraph", html: "Treat the saved Olostep credential like any production secret. Do not commit it, paste it into prompts or let dotfile-sync tooling publish it. Review installed skill directories and the lock file when reproducing the setup across a team." },
        { type: "paragraph", html: "Retrieved webpages are untrusted input. Do not let page text override system or project instructions, and keep a separate validation boundary before high-impact downstream actions." },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting and next steps",
      blocks: [
        { type: "paragraph", html: "If an agent cannot see the skills, verify the install completed, inspect the shared and agent-specific skill directories and restart the client if it scans skills only at launch. If login works but web calls fail, test Olostep independently to separate quota/API problems from skill-discovery problems." },
        { type: "paragraph", html: "For direct programmatic integration, use <a href=\"/blog/olostep-api\">the Olostep API tutorial</a>. For product, pricing and limitations, return to <a href=\"/blog/olostep\">the Olostep main guide</a>." },
      ],
    },
  ],
  sources: [
    { label: "Olostep — agent integration", url: "https://www.olostep.com/agent-integration" },
    { label: "Olostep Docs — welcome", url: "https://docs.olostep.com/get-started/welcome" },
    { label: "Olostep — official homepage", url: "https://www.olostep.com/" },
  ],
  relatedPaths: ["/blog/olostep", "/blog/olostep-api"],
};

export const olostepArticles: BlogArticle[] = [olostepMain, olostepApi, olostepAgents];
