import type { BlogArticle } from "./blog-types.ts";

const airtopPricingSources = [
  { label: "Airtop Pricing", url: "https://www.airtop.ai/pricing" },
  { label: "Airtop AI Costs", url: "https://docs.airtop.ai/guides/how-to/ai/ai-costs" },
  { label: "Airtop Agent Builder", url: "https://www.airtop.ai/agent-builder" },
];

export const airtopAgentBuilderPricingArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    parentSlug: "airtop-agent-builder",
    cluster: "Airtop Agent Builder",
    targetSearchIntent: "Compare Airtop plans, deployed-agent and concurrent-session limits, understand credits and estimate which plan fits a workflow before paying.",
    targetQuery: "Airtop Agent Builder pricing",
    slug: "airtop-agent-builder-pricing",
    title: "Airtop Agent Builder Pricing & Credits: Plans, Limits and Costs",
    metaTitle: "Airtop Agent Builder Pricing & Credits: Plans and Limits",
    metaDescription: "Current Airtop Agent Builder pricing explained: Free, Starter, Professional and Enterprise plans, deployed-agent limits, sessions, credits and AI costs.",
    h1: "Airtop Agent Builder Pricing: Plans, Credits and Limits Explained",
    excerpt: "A practical breakdown of Airtop Agent Builder plans, deployed-agent limits, concurrent sessions, credits and the cost controls that matter before you scale.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "Airtop Agent Builder pricing plans, credits, deployed agents and session limits",
    sections: [
      {
        id: "plans-overview",
        title: "Current Airtop Agent Builder plans",
        blocks: [
          { type: "paragraph", html: "Airtop currently lists Free at $0/month, Starter at $29/month, Professional at $189/month, Enterprise at $558/month and a Custom tier. Airtop also advertises a 10% discount for annual billing with credits provided upfront." },
          { type: "note", html: "These are current vendor prices checked on September 4, 2026. SaaS pricing and entitlements can change, so confirm the live pricing page before committing to a plan." },
        ],
      },
      {
        id: "free-starter",
        title: "Free and Starter: testing and small deployments",
        blocks: [
          { type: "paragraph", html: "The Free plan currently shows 1,000 credits, three simultaneous sessions and one deployed agent. Airtop also lists a one-time 10,000-credit bonus and a seven-day Mark trial or until trial credits are consumed." },
          { type: "paragraph", html: "Starter is $29/month and currently lists three simultaneous sessions, up to 10 deployed agents, an integrated proxy and support. Its main advantage over Free is deployment capacity rather than higher browser concurrency." },
        ],
      },
      {
        id: "professional-enterprise",
        title: "Professional and Enterprise: higher concurrency",
        blocks: [
          { type: "paragraph", html: "Professional is currently $189/month with up to 30 deployed agents and 30 simultaneous sessions, plus a custom proxy, Mark and dedicated support. It is the first public tier that materially expands concurrency for teams running several browser workflows in parallel." },
          { type: "paragraph", html: "Enterprise is currently $558/month and lists unlimited deployed agents with up to 100 simultaneous sessions, alongside a SOC 2 Type II report, Mark and dedicated support. Unlimited deployed agents does not mean unlimited credits, compute or simultaneous browser capacity." },
        ],
      },
      {
        id: "credits",
        title: "How Airtop credits and AI costs work",
        blocks: [
          { type: "paragraph", html: "Airtop says it uses a credit system because its AI APIs can use multiple models and pricing tiers. Each AI API call returns a <code>meta.usage</code> object with the number of credits consumed by that call." },
          { type: "paragraph", html: "Airtop's documentation says it does not add a markup to underlying LLM costs. Browser/runtime usage, model-heavy judgment steps and concurrency still affect total workflow economics, so a deployed agent count by itself is not enough to estimate production cost." },
        ],
      },
      {
        id: "cost-controls",
        title: "Cost and runtime controls",
        blocks: [
          { type: "paragraph", html: "Airtop documents <code>costThresholdCredits</code> for limiting AI-call spend and <code>timeThresholdSeconds</code> for limiting runtime. These controls are useful when workflows include open-ended model reasoning or can encounter unexpectedly slow pages." },
          { type: "note", html: "Airtop explicitly describes both controls as periodic thresholds rather than exact hard caps. A request already inside an LLM call can slightly exceed a threshold before subsequent work is stopped." },
        ],
      },
      {
        id: "choose-plan",
        title: "Which Airtop plan fits your workflow?",
        blocks: [
          { type: "paragraph", html: "Use Free to validate one automation, Starter when you need several deployed agents but low concurrency, Professional when many workflows must run in parallel, and Enterprise when you need a much larger fleet, higher simultaneous-session capacity and enterprise support or compliance features." },
          { type: "paragraph", html: "Before upgrading, estimate monthly runs, peak simultaneous sessions, number of deployed workflows and how many steps require AI judgment. Then run a representative workflow and inspect actual credit usage. That measurement is more useful than extrapolating a generic vendor benchmark across every automation." },
        ],
      },
    ],
    sources: airtopPricingSources,
    relatedPaths: ["/blog/airtop-agent-builder", "/blog/how-to-use-airtop-agent-builder"],
  },
];
