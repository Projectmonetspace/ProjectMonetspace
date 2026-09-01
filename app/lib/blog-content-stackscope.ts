import type { BlogArticle } from "./blog-types.ts";

export const stackScopeArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "StackScope",
    targetSearchIntent: "Understand StackScope's launch-time tech intelligence, current pricing, API/MCP access, alerts, use cases and limits.",
    targetQuery: "StackScope",
    slug: "stackscope",
    title: "StackScope: Pricing, API, MCP & New-Website Tech Intelligence",
    metaTitle: "StackScope: Pricing, API, MCP & New-Website Tech Intelligence",
    metaDescription: "StackScope tracks newly launched websites and their tech stacks. See current pricing, API/MCP access, alerts, agency use cases and limitations.",
    h1: "StackScope: Find Newly Launched Websites by Tech Stack",
    excerpt: "StackScope centers technographic intelligence on the moment a site is new, with launch-time stack detection, filters, alerts, API access and MCP.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Newly launched websites flowing through technology, country and category filters into StackScope alerts, API and MCP outputs.",
    sections: [
      {
        id: "what",
        title: "What StackScope is",
        blocks: [
          { type: "paragraph", html: "StackScope watches newly appearing websites and records the technologies they shipped with. Its first-party Data page distinguishes reviewed indie launches from the much wider new-web discovery corpus and emphasizes launch-time observation rather than continuous historical recrawling." },
          { type: "list", items: ["Technology detection includes frameworks, hosting, CDN, DNS, email configuration and SaaS tools.", "Lists can be filtered by technology, category, country, launch type and date.", "A launch-time record should not be assumed to describe the site's stack forever."] },
        ],
      },
      {
        id: "access",
        title: "Browse, alerts, API and MCP",
        blocks: [
          { type: "paragraph", html: "StackScope combines public browsing with Stackdar watches, CSV/export, a metered HTTP API and a remote MCP server at https://mcp.stackscope.dev." },
          { type: "list", items: ["MCP documentation explicitly covers Claude, ChatGPT, Cursor and other MCP clients.", "API and MCP share the plan, permissions and usage allowance.", "Watches can deliver matching new detections by email or webhook, with broader delivery options on higher tiers."] },
        ],
      },
      {
        id: "pricing",
        title: "Current pricing and quota caveats",
        blocks: [
          { type: "paragraph", html: "The live Data & API page currently lists Indie at £15/$19 per month, Pro at £49/$59 and Firehose at £159/$199. It shows 2,000, 12,000 and 60,000 request credits respectively, with no automatic overage billing." },
          { type: "list", items: ["The same live page currently shows 5,000 distinct launches for Indie, 50,000 for Pro and no ceiling for Firehose.", "Older cached API references can show a different Indie distinct-launch figure, so verify the live Data page and checkout before purchase.", "Corpus-size and technology-count numbers move continuously and should not be frozen as independent benchmarks."] },
        ],
      },
      {
        id: "fit",
        title: "Where StackScope is most useful",
        blocks: [
          { type: "paragraph", html: "The strongest use cases depend on timing: agencies can qualify recent launches, SaaS vendors can watch fresh adoption of their own or competing technologies, and analysts can study adoption among a genuinely new cohort." },
          { type: "list", items: ["Use StackScope as an early signal, not proof of buyer intent.", "Product Hunt-only listings are excluded from paid data unless StackScope independently discovered the same site under its own pipeline rules.", "Respect the paid data licence and do not rebuild or redistribute the corpus."] },
        ],
      },
    ],
    sources: [
      { label: "StackScope Data & pricing", url: "https://stackscope.dev/data" },
      { label: "StackScope API reference", url: "https://stackscope.dev/docs" },
      { label: "StackScope MCP documentation", url: "https://stackscope.dev/docs/mcp" },
      { label: "StackScope paid data licence", url: "https://stackscope.dev/data-licence" },
    ],
    relatedPaths: ["/blog/stackscope-api-mcp", "/blog/stackscope-lead-generation"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "StackScope",
    targetSearchIntent: "Connect StackScope through HTTP API or MCP, authenticate, understand quotas and build launch-monitoring workflows.",
    targetQuery: "StackScope API MCP",
    parentSlug: "stackscope",
    slug: "stackscope-api-mcp",
    title: "How to Use StackScope API & MCP with Claude, ChatGPT and Cursor",
    metaTitle: "StackScope API & MCP: Claude, ChatGPT and Cursor Setup Guide",
    metaDescription: "Connect StackScope to Claude, ChatGPT, Cursor or your code. Learn MCP setup, API authentication, endpoints, quotas and practical workflows.",
    h1: "How to Use StackScope API & MCP with Claude, ChatGPT and Cursor",
    excerpt: "StackScope exposes the same launch-time technographic data through a conventional HTTP API and a remote MCP server for AI assistants.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "StackScope branching to HTTP API for production workflows and MCP for Claude, ChatGPT and Cursor.",
    sections: [
      {
        id: "mcp",
        title: "Connect through MCP",
        blocks: [
          { type: "paragraph", html: "StackScope's official remote MCP endpoint is https://mcp.stackscope.dev. Its documentation covers Claude, ChatGPT, Cursor, Claude Code, VS Code and other MCP-capable clients." },
          { type: "list", items: ["Claude and ChatGPT can add the endpoint as a custom connector.", "Claude Code can add it over HTTP and then complete sign-in through its MCP flow.", "Cursor and compatible editors can use the remote URL in MCP configuration."] },
        ],
      },
      {
        id: "api",
        title: "Use the HTTP API for deterministic workflows",
        blocks: [
          { type: "paragraph", html: "The HTTP API uses bearer authentication with scoped keys. Current documentation exposes lookup, technology catalogues, launch feeds, trends, exports and watch management depending on the plan and key permissions." },
          { type: "list", items: ["Keep API keys out of client-side code and repositories.", "A 401 generally indicates missing or invalid authentication; 403 indicates a plan or scope limitation.", "Prefer the API for scheduled jobs, database ingestion and repeatable production automation."] },
        ],
      },
      {
        id: "meters",
        title: "Understand credits and distinct launches",
        blocks: [
          { type: "paragraph", html: "StackScope meters requests and newly accessed launch records separately. One normal data call costs one request credit; a new launch record first accessed in the billing period also counts against the plan's distinct-launch allowance." },
          { type: "list", items: ["Re-reading the same launch during the period does not consume another distinct-launch slot.", "A large export can use one request credit but many distinct-launch slots.", "MCP can surface the estimated cost before a large result and wait for approval."] },
        ],
      },
      {
        id: "workflow",
        title: "Choose API vs MCP by job",
        blocks: [
          { type: "paragraph", html: "MCP is useful for exploratory human-in-the-loop research, while the API is better for proven repeatable workflows. A practical pattern is to explore a niche conversationally, then turn a useful filter into a watch or API job." },
          { type: "list", items: ["Review unknown URLs before automatically fetching or rendering them.", "Use scoped credentials for each internal service.", "Keep sales or publishing actions separate from raw data retrieval and qualification."] },
        ],
      },
    ],
    sources: [
      { label: "StackScope API reference", url: "https://stackscope.dev/docs" },
      { label: "StackScope MCP documentation", url: "https://stackscope.dev/docs/mcp" },
      { label: "StackScope Data & pricing", url: "https://stackscope.dev/data" },
    ],
    relatedPaths: ["/blog/stackscope", "/blog/stackscope-lead-generation"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "StackScope",
    targetSearchIntent: "Use StackScope to find recent websites, qualify real agency opportunities and turn timely signals into relevant outreach.",
    targetQuery: "StackScope lead generation",
    parentSlug: "stackscope",
    slug: "stackscope-lead-generation",
    title: "How to Use StackScope for Agency Lead Generation",
    metaTitle: "StackScope Lead Generation: Find New Website Prospects Early",
    metaDescription: "Use StackScope to find newly launched sites, filter by stack and market, qualify real opportunities and build selective agency prospecting workflows.",
    h1: "How to Use StackScope for Agency Lead Generation",
    excerpt: "StackScope's lead-generation value is timing and technographic context—not proof that a company wants to buy your service.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "New websites filtered by stack, location and category, then human-qualified into audits, demos and a CRM.",
    sections: [
      {
        id: "icp",
        title: "Start with a narrow ideal customer profile",
        blocks: [
          { type: "paragraph", html: "Do not begin by exporting thousands of domains. Choose one market and one problem your agency can genuinely solve, then use stack, category, country and launch timing as qualification inputs." },
          { type: "list", items: ["New Shopify stores for conversion work.", "Recent Next.js or Webflow launches in industries you understand.", "Fresh local-business sites in a market you can actually serve."] },
        ],
      },
      {
        id: "review",
        title: "Treat the data as context, not intent",
        blocks: [
          { type: "paragraph", html: "A detected technology does not mean a company wants to replace it, and a recent launch does not prove budget or dissatisfaction. Review the live site for a visible business problem before outreach." },
          { type: "list", items: ["Check mobile UX, analytics, metadata, conversion structure and message clarity.", "Remember StackScope records are launch-time observations and the stack may have changed.", "Score fit and visible opportunity separately from freshness."] },
        ],
      },
      {
        id: "automate",
        title: "Use watches and MCP after a filter proves useful",
        blocks: [
          { type: "paragraph", html: "Once a filter consistently produces real opportunities, turn it into a Stackdar watch or API workflow. MCP can help explore and qualify candidate sets inside an assistant." },
          { type: "list", items: ["Keep a human review step before adding prospects to a CRM.", "Do not automatically send messages simply because a domain matches a filter.", "Measure which filters produce replies, meetings and clients instead of optimizing for list size."] },
        ],
      },
      {
        id: "outreach",
        title: "Make outreach specific and lawful",
        blocks: [
          { type: "paragraph", html: "Good outreach explains an observed problem and a useful next step. StackScope itself says its data is not a mailing list, and its paid-data licence limits redistribution and corpus reconstruction." },
          { type: "list", items: ["Use appropriate published business contact routes.", "Follow applicable privacy, anti-spam and platform rules.", "Treat StackScope as an early-signal layer, not an automatic sales machine."] },
        ],
      },
    ],
    sources: [
      { label: "StackScope Data", url: "https://stackscope.dev/data" },
      { label: "StackScope features", url: "https://stackscope.dev/features" },
      { label: "StackScope MCP documentation", url: "https://stackscope.dev/docs/mcp" },
      { label: "StackScope paid data licence", url: "https://stackscope.dev/data-licence" },
    ],
    relatedPaths: ["/blog/stackscope", "/blog/stackscope-api-mcp"],
  },
];
