import type { BlogArticle } from "./blog-types.ts";

export const optimizelyVirtualTeammateArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Optimizely Virtual Teammates",
    targetSearchIntent: "Understand Optimizely Virtual Teammates, their roles, persistent identity, permissions, connectors, Opal credits and current limitations.",
    targetQuery: "Optimizely Virtual Teammates",
    slug: "optimizely-virtual-teammates",
    title: "Optimizely Virtual Teammates: Features, Roles & How They Work",
    metaTitle: "Optimizely Virtual Teammates: Features, Roles & How They Work",
    metaDescription: "Optimizely Virtual Teammates explained: marketing roles, persistent memory, permissions, recurring jobs, connectors, Opal credits and setup.",
    h1: "Optimizely Virtual Teammates: Persistent AI Coworkers for Marketing Teams",
    excerpt: "Optimizely Virtual Teammates are persistent role-specific workers in Opal with their own identity, memory, permissions and scheduled jobs.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Marketing team connected to an Optimizely Virtual Teammate with memory, scheduled jobs, data connectors and human approval.",
    sections: [
      {
        id: "what",
        title: "What Virtual Teammates are",
        blocks: [
          { type: "paragraph", html: "Optimizely's 2026 Opal release notes describe Virtual Teammates as persistent role-specific AI workers rather than one-off chat assistants. Each can have an Opti ID identity, memory, tools, permissions and recurring jobs." },
          { type: "list", items: ["Initial roles include Chief of Staff, SEO & AI Search Analyst, Marketing Analyst, Personalization Strategist and CRO Manager.", "The teammate can keep working between sessions on schedules or triggers.", "Administrators decide which teammates exist and what they can access."] },
        ],
      },
      {
        id: "governance",
        title: "Identity, permissions and approval",
        blocks: [
          { type: "paragraph", html: "A teammate acts as its own virtual user inside Optimizely products. Third-party connectors still require a human to authorize the external account on its behalf." },
          { type: "list", items: ["Selecting a product instance does not itself grant access.", "CMS content rights can require separate role and content permissions.", "The default operating model starts with proposed work and human approval; selected actions can later be automated within configured guardrails."] },
        ],
      },
      {
        id: "roles",
        title: "What the marketing roles do",
        blocks: [
          { type: "paragraph", html: "The SEO & AI Search Analyst focuses on AEO readiness, SEO/GEO monitoring and search opportunities. The Marketing Analyst summarizes connected analytics. The CRO Manager supports experiment ideation, configuration and monitoring, while other roles cover personalization and coordination." },
          { type: "list", items: ["Role usefulness depends on the data and permissions actually connected.", "Vendor-estimated impact is not independent performance proof.", "High-impact publishing or experimentation actions should remain reviewed until the workflow is trusted."] },
        ],
      },
      {
        id: "cost",
        title: "Access and Opal credits",
        blocks: [
          { type: "paragraph", html: "Optimizely does not publish a standalone per-teammate public list price. Opal usage consumes credits. Current support documentation says each Opal instance can use up to 200 complimentary credits per month from October 1, 2025 through December 31, 2026, subject to Optimizely's terms." },
          { type: "list", items: ["A Virtual Teammate itself is documented as not consuming a product seat.", "Connected Optimizely products and enterprise contracts can still have separate costs.", "Credit use varies with the complexity of the work and should be monitored in Admin Center."] },
        ],
      },
    ],
    sources: [
      { label: "Optimizely 2026 Opal release notes", url: "https://support.optimizely.com/hc/en-us/articles/37791100847373-2026-Optimizely-Opal-release-notes" },
      { label: "Virtual Teammates overview", url: "https://support.optimizely.com/hc/en-us/articles/47211851973261-Virtual-Teammates-overview" },
      { label: "Hire a Virtual Teammate", url: "https://support.optimizely.com/hc/en-us/articles/47212988975885-Hire-a-Virtual-Teammate" },
      { label: "Optimizely Opal credits", url: "https://support.optimizely.com/hc/en-us/articles/36304551863181-Optimizely-Opal-credits" },
    ],
    relatedPaths: ["/blog/optimizely-seo-ai-search-analyst", "/blog/how-to-set-up-optimizely-virtual-teammates"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Optimizely Virtual Teammates",
    targetSearchIntent: "Understand and configure Optimizely's SEO & AI Search Analyst for AEO/GEO monitoring, Search Console analysis and prioritized recommendations.",
    targetQuery: "Optimizely SEO AI Search Analyst",
    parentSlug: "optimizely-virtual-teammates",
    slug: "optimizely-seo-ai-search-analyst",
    title: "Optimizely SEO & AI Search Analyst: What It Does & How to Use It",
    metaTitle: "Optimizely SEO & AI Search Analyst: Features & Setup",
    metaDescription: "See what Optimizely's SEO & AI Search Analyst does, which data sources it uses, how AEO/GEO monitoring works and where human review matters.",
    h1: "Optimizely SEO & AI Search Analyst: How the Virtual Teammate Works",
    excerpt: "Optimizely's SEO & AI Search Analyst combines recurring AEO audits, SEO/GEO monitoring and connected search-opportunity analysis into a daily workflow.",
    category: "SEO",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "GA4, Google Search Console and Conductor data feeding an Optimizely SEO and AI Search Analyst briefing with human-reviewed actions.",
    sections: [
      {
        id: "jobs",
        title: "The four main job groups",
        blocks: [
          { type: "paragraph", html: "Optimizely documents the role around AEO readiness auditing, trend research, SEO/GEO anomaly monitoring and keyword/opportunity research." },
          { type: "list", items: ["AEO audits can surface structured-data, crawler-access and content-format issues.", "Monitoring looks for anomalies across search and AI-search signals.", "Opportunity work can combine Google Search Console and Conductor data."] },
        ],
      },
      {
        id: "data",
        title: "What data it needs",
        blocks: [
          { type: "paragraph", html: "Optimizely lists Google Analytics 4, Google Search Console and Conductor as primary connections for the role, with optional Optimizely Analytics and CMS context." },
          { type: "list", items: ["Connector quality is part of analysis quality.", "Verify the exact property, account and date range before trusting a finding.", "Conductor may be a separate commercial dependency for the organization."] },
        ],
      },
      {
        id: "briefing",
        title: "How to use the daily briefing",
        blocks: [
          { type: "paragraph", html: "The teammate can deliver a prioritized morning briefing and, when permission allows, run follow-up agents. Treat the briefing as triage rather than automatic truth." },
          { type: "list", items: ["Inspect underlying Search Console or analytics evidence.", "Confirm the issue is real before changing content, robots, schema or canonicals.", "Keep high-impact SEO changes behind human approval."] },
        ],
      },
      {
        id: "limits",
        title: "Important limitations",
        blocks: [
          { type: "paragraph", html: "An estimated-impact ranking is not a traffic forecast. AI-search visibility methodologies are also still evolving, so first-party search evidence remains important." },
          { type: "list", items: ["Do not present vendor impact scores as guaranteed clicks or revenue.", "Sites with little first-party data may get less useful monitoring.", "Evaluate the teammate against the team's existing SEO process rather than assuming automation is inherently better."] },
        ],
      },
    ],
    sources: [
      { label: "SEO & AI Search Analyst documentation", url: "https://support.optimizely.com/hc/en-us/articles/47378551363853-SEO-AI-Search-Analyst" },
      { label: "Virtual Teammates overview", url: "https://support.optimizely.com/hc/en-us/articles/47211851973261-Virtual-Teammates-overview" },
      { label: "2026 Opal release notes", url: "https://support.optimizely.com/hc/en-us/articles/37791100847373-2026-Optimizely-Opal-release-notes" },
    ],
    relatedPaths: ["/blog/optimizely-virtual-teammates", "/blog/how-to-set-up-optimizely-virtual-teammates"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Optimizely Virtual Teammates",
    targetSearchIntent: "Enable, hire, connect and safely configure an Optimizely Virtual Teammate with correct permissions and human-review boundaries.",
    targetQuery: "how to set up Optimizely Virtual Teammates",
    parentSlug: "optimizely-virtual-teammates",
    slug: "how-to-set-up-optimizely-virtual-teammates",
    title: "How to Set Up Optimizely Virtual Teammates",
    metaTitle: "How to Set Up Optimizely Virtual Teammates in Opal",
    metaDescription: "Set up Optimizely Virtual Teammates: admin enablement, hiring, product instances, connectors, permissions, approvals and safe first jobs.",
    h1: "How to Set Up Optimizely Virtual Teammates in Opal",
    excerpt: "An Opal administrator enables the role first; then a permitted user hires it, connects systems and grants only the access its jobs need.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Optimizely Virtual Teammate setup from admin enablement and hiring through connectors, permissions, approval and automation.",
    sections: [
      {
        id: "enable",
        title: "Enable and hire the teammate",
        blocks: [
          { type: "paragraph", html: "An Opal administrator first enables the Virtual Teammate for the organization. A permitted user can then open the Virtual Teammates directory, choose the role and hire it." },
          { type: "list", items: ["If the directory shows Request rather than Hire, administrator enablement is still required.", "Give the teammate a clear name and role purpose.", "Treat the virtual identity like a new worker account with scoped responsibilities."] },
        ],
      },
      {
        id: "access",
        title: "Choose instances and grant access separately",
        blocks: [
          { type: "paragraph", html: "Choosing an Optimizely product instance tells the teammate where to work; it does not grant the necessary permissions. Roles in Opti ID Admin Center and, for CMS, content-level rights may still need configuration." },
          { type: "list", items: ["Use least privilege.", "Grant only the product and content actions needed for current jobs.", "Review access again before expanding autonomy."] },
        ],
      },
      {
        id: "connect",
        title: "Connect third-party tools",
        blocks: [
          { type: "paragraph", html: "A human must authorize external systems such as GA4, Search Console or HubSpot on the teammate's behalf. Role-specific teammates require different connectors." },
          { type: "list", items: ["Verify the connected property or account is the intended one.", "Do not give a broad administrator account simply because setup is faster.", "Document who owns each external connection and how it can be revoked."] },
        ],
      },
      {
        id: "commission",
        title: "Commission with approval first",
        blocks: [
          { type: "paragraph", html: "Optimizely's default model begins with proposed work and human approval. Test one job end to end, inspect the output and only then consider allowing narrow actions to run automatically." },
          { type: "list", items: ["For SEO, start with a briefing or audit rather than production edits.", "For CRO, start with analysis or draft experiment configuration.", "Review upcoming jobs, past runs, interactions, connectors and permissions regularly."] },
        ],
      },
    ],
    sources: [
      { label: "Hire a Virtual Teammate", url: "https://support.optimizely.com/hc/en-us/articles/47212988975885-Hire-a-Virtual-Teammate" },
      { label: "Enable Virtual Teammates", url: "https://support.optimizely.com/hc/en-us/articles/47378996161165-Enable-Virtual-Teammates" },
      { label: "Manage your Virtual Teammate", url: "https://support.optimizely.com/hc/en-us/articles/48317514197645-Manage-your-Virtual-Teammate" },
      { label: "Virtual Teammates overview", url: "https://support.optimizely.com/hc/en-us/articles/47211851973261-Virtual-Teammates-overview" },
    ],
    relatedPaths: ["/blog/optimizely-virtual-teammates", "/blog/optimizely-seo-ai-search-analyst"],
  },
];
