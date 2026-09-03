import type { BlogArticle } from "./blog-types.ts";

const sources = [
  { label: "Monid — Outbound prospecting workflow", url: "https://monid.ai/blog/claude-for-outbound-prospecting" },
  { label: "Monid — Review monitoring workflow", url: "https://monid.ai/blog/your-agent-reads-every-review" },
  { label: "Monid — Sales pipeline workflow", url: "https://monid.ai/blog/one-agent-runs-your-whole-sales-pipeline" },
  { label: "Monid — Creator workflow", url: "https://monid.ai/blog/claude-for-ai-creators" },
  { label: "Monid — Pricing documentation", url: "https://docs.monid.ai/guide/pricing.html" },
];

export const monidMarketingWorkflowArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    cluster: "Monid",
    targetSearchIntent: "Practical workflow intent: use Monid's tool-routing layer for marketing research, lead generation, social monitoring and creator/media automation",
    targetQuery: "Monid marketing agent workflows",
    parentSlug: "monid-agent-tools",
    slug: "monid-marketing-agent-workflows",
    title: "Monid for Marketing Agents: Lead Gen, Social Research & Creator Workflows",
    metaTitle: "Monid for Marketing Agents: Lead Gen, Social & Creator Workflows",
    metaDescription: "See practical Monid workflows for lead generation, social research, review monitoring and creator automation, with pricing and reliability caveats clearly separated.",
    h1: "How Marketing Agents Can Use Monid",
    excerpt: "Practical Monid patterns for prospecting, social research, review monitoring and creator automation, with vendor claims and dynamic endpoint costs kept clearly attributed.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "Monid marketing-agent workflow for research, lead generation and creator automation",
    sections: [
      {
        id: "lead-generation",
        title: "Lead-generation research",
        blocks: [
          { type: "paragraph", html: "Monid's strongest marketing use case is tool routing rather than autonomous outreach. An agent can discover company-search and enrichment endpoints, inspect the current price, run only the useful calls and prepare a brief for a human before contact." },
          { type: "list", ordered: true, items: ["Find companies matching a trigger or niche", "Inspect available enrichment providers and prices", "Enrich only strong-fit companies", "Identify and verify a decision maker", "Summarize evidence for human review before outreach"] },
          { type: "note", html: "Monid publishes measured prospecting receipts, including a vendor-run $0.15-per-lead example. Treat those as Monid demonstrations, not guaranteed production pricing." },
        ],
      },
      {
        id: "social-research",
        title: "Social research and review monitoring",
        blocks: [
          { type: "paragraph", html: "Monid's catalog and first-party examples include social-data and review-scraping tools. A research agent can collect posts or reviews, deduplicate them, classify recurring themes and draft a strategist brief without giving the agent permission to publish publicly." },
          { type: "paragraph", html: "Do not describe every social endpoint as an official platform API. Monid currently exposes third-party providers and scrapers for services such as Instagram, TikTok, Reddit and Google Reviews, so provider terms and data-handling requirements still matter." },
          { type: "list", ordered: true, items: ["Fetch new reviews or social data", "Deduplicate records", "Classify sentiment and issues", "Draft a response or research summary", "Require human approval before any public reply or outreach"] },
        ],
      },
      {
        id: "creator-workflows",
        title: "Creator and media workflows",
        blocks: [
          { type: "paragraph", html: "Monid also routes to media-generation providers. A creator workflow can combine trend research, a script, voice generation and video generation behind one discovery and billing layer, while the underlying provider still performs the actual generation." },
          { type: "paragraph", html: "Exact media costs are dynamic. Monid's creator pages publish measured examples, but resolution, duration, provider selection and retries can change the final spend. Budget at the completed-workflow level rather than copying one launch-period receipt." },
          { type: "note", html: "For the product architecture, connection methods and current catalog model, return to the <a href=\"/blog/monid-agent-tools\">main Monid overview</a>." },
        ],
      },
      {
        id: "controls",
        title: "Where human controls still belong",
        blocks: [
          { type: "paragraph", html: "A tool gateway reduces integration friction, but it does not remove the need for quality control. Keep humans in the loop for sending outreach, publishing posts, replying publicly, changing CRM records and approving spend above a defined threshold." },
          { type: "list", items: ["Set per-task and per-day spending ceilings", "Log provider, endpoint and actual charge", "Cap retries and tool-loop depth", "Verify sensitive company or people data before using it", "Require approval for public or customer-facing actions"] },
        ],
      },
      {
        id: "bottom-line",
        title: "Bottom line",
        blocks: [
          { type: "paragraph", html: "Monid can be useful for marketing agents when the workflow needs several specialist tools but usage is uneven enough that separate subscriptions and integrations create friction. The safer pattern is controlled automation: let the agent research and draft broadly, but keep budgets, source verification and human approval around actions that affect customers, public channels or money." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/monid-agent-tools", "/blog/how-to-use-monid"],
  },
];
