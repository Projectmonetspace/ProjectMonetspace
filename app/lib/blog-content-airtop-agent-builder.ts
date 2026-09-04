import type { BlogArticle } from "./blog-types.ts";

const airtopSources = [
  { label: "Airtop Agent Builder", url: "https://www.airtop.ai/agent-builder" },
  { label: "Airtop How It Works", url: "https://www.airtop.ai/how-it-works" },
  { label: "Airtop Pricing", url: "https://www.airtop.ai/pricing" },
  { label: "Airtop AI cost controls", url: "https://docs.airtop.ai/guides/how-to/ai/ai-costs" },
];

export const airtopAgentBuilderArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Airtop Agent Builder",
    targetSearchIntent: "Understand what Airtop Agent Builder is, how compiled and repair-draft browser agents work, what it can automate, current pricing and whether it fits repeatable business workflows.",
    targetQuery: "Airtop Agent Builder",
    slug: "airtop-agent-builder",
    title: "Airtop Agent Builder: Pricing, Features & How It Works",
    metaTitle: "Airtop Agent Builder: Pricing, Features & How It Works",
    metaDescription: "A practical guide to Airtop Agent Builder: compiled browser agents, tested repair drafts, schedules, login automation, current pricing and plan limits.",
    h1: "Airtop Agent Builder: Compiled, Self-Healing Web Automation Explained",
    excerpt: "Airtop Agent Builder turns plain-language workflow descriptions into compiled cloud agents that can run repeatedly, behind logins, on schedules or triggers.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "Airtop Agent Builder compiled browser automation and repair-draft workflow",
    sections: [
      {
        id: "what-launched",
        title: "What Airtop Agent Builder does",
        blocks: [
          { type: "paragraph", html: "Airtop Agent Builder turns a workflow described in plain language into a reusable automation that runs in Airtop's cloud browser infrastructure. Airtop says the builder uses AI heavily while creating and testing the workflow, then compiles repeatable actions into code rather than asking a model to rediscover every browser step on every run." },
          { type: "paragraph", html: "Airtop's current product page shows agents signing into sites, clicking through browser flows, filling forms, extracting data and running on demand, on schedules or from triggers. It also exposes logs and replay so teams can inspect what happened during a run." },
        ],
      },
      {
        id: "compiled-agents",
        title: "What compiled agents means",
        blocks: [
          { type: "paragraph", html: "Airtop separates build time from runtime. During build time, Agent Builder can ask clarifying questions, navigate a live browser, observe corrections and write an automation script. At runtime, repeatable navigation and browser actions run as code, while genuinely variable judgment can still use an LLM." },
          { type: "note", html: "This does not mean every Airtop workflow is fully deterministic. Model calls can still be used for interpretation or novel situations; the important distinction is that stable browser steps do not have to be re-reasoned from scratch each time." },
        ],
      },
      {
        id: "repair-drafts",
        title: "How Airtop handles broken runs",
        blocks: [
          { type: "paragraph", html: "When a deployed run fails, Airtop says it can diagnose the failure, create a repair draft and test the proposed fix. The tested repair is not silently pushed into production." },
          { type: "paragraph", html: "Airtop's current Agent Builder page explicitly shows the repaired version remaining a draft until the user chooses Deploy or Discard Repair. That makes its 'self-healing' language closer to automated diagnosis plus tested repair assistance than unrestricted modification of a live agent." },
        ],
      },
      {
        id: "pricing-and-limits",
        title: "Current Airtop pricing and plan limits",
        blocks: [
          { type: "paragraph", html: "At publication time, Airtop lists Free at $0/month, Starter at $29/month, Professional at $189/month, Enterprise at $558/month and a Custom tier. The Free plan shows 1,000 credits, three simultaneous sessions and one deployed agent." },
          { type: "paragraph", html: "Starter currently lists three simultaneous sessions and 10 deployed agents; Professional lists 30 deployed agents and 30 simultaneous sessions; Enterprise lists unlimited deployed agents and 100 simultaneous sessions. Airtop uses credits for usage, and its documentation says it does not add markup to underlying LLM token costs." },
        ],
      },
      {
        id: "efficiency-claims",
        title: "Treat Airtop's efficiency numbers as vendor claims",
        blocks: [
          { type: "paragraph", html: "Airtop currently advertises compiled agents as up to 100x more efficient, up to 6x faster and about 1% of the cost at scale compared with LLM-per-step agents. Its product page illustrates that comparison with one multi-step task against Claude Code using Opus 4.7." },
          { type: "note", html: "Those figures are Airtop's own comparison, not an independent universal benchmark. Real cost and speed depend on the website, workflow, AI steps, failure rate and how much reasoning remains at runtime." },
        ],
      },
      {
        id: "business-use-cases",
        title: "Where Agent Builder is most useful",
        blocks: [
          { type: "paragraph", html: "The strongest fit is repetitive browser work where APIs are incomplete or unavailable: authenticated data collection, lead enrichment, recurring QA, back-office portals, campaign checks, monitoring and moving data between web interfaces and business systems." },
          { type: "paragraph", html: "Airtop's template catalog currently includes lead-generation workflows, Reddit monitoring, an on-page SEO consultant, website-to-LLM-ready document collection and social-response workflows. Those examples make the product particularly relevant to marketers, agencies and operations teams that repeatedly work through browser-only interfaces." },
        ],
      },
      {
        id: "security-and-controls",
        title: "Security and operational controls",
        blocks: [
          { type: "paragraph", html: "Airtop says credentials can be stored in a secure vault, sessions run in encrypted cloud environments, customer data is not used for AI training, and the service is SOC 2 Type II certified and HIPAA compliant." },
          { type: "paragraph", html: "Operationally, teams should still apply least-privilege accounts, inspect logs and replay, and keep human review in the repair-deployment loop for workflows that can change records or trigger external actions." },
        ],
      },
    ],
    sources: airtopSources,
    relatedPaths: ["/blog/how-to-use-airtop-agent-builder"],
  },
  {
    status: "published",
    articleType: "supporting",
    parentSlug: "airtop-agent-builder",
    cluster: "Airtop Agent Builder",
    targetSearchIntent: "Build a working Airtop browser automation from a plain-English workflow, test it, deploy it, schedule it and review repair drafts safely.",
    targetQuery: "how to use Airtop Agent Builder",
    slug: "how-to-use-airtop-agent-builder",
    title: "How to Use Airtop Agent Builder: Build, Test & Deploy Agents",
    metaTitle: "How to Use Airtop Agent Builder: Build, Test & Deploy",
    metaDescription: "Step-by-step guide to building an Airtop Agent Builder workflow, testing browser actions, deploying it, scheduling runs and reviewing repair drafts.",
    h1: "How to Use Airtop Agent Builder: Build, Test and Deploy a Browser Agent",
    excerpt: "A practical workflow for describing, testing, deploying, scheduling and safely repairing an Airtop Agent Builder automation.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "How to use Airtop Agent Builder from workflow description to deployment",
    sections: [
      {
        id: "choose-workflow",
        title: "1. Start with one repeatable browser job",
        blocks: [
          { type: "paragraph", html: "Choose a task with a stable goal and an output you can verify: collect rows from a portal, monitor pages, enrich a lead list, update records, run a recurring SEO check or move information between a browser-only system and a spreadsheet." },
          { type: "paragraph", html: "Avoid making your first agent a workflow where every run is fundamentally different. Agent Builder's main advantage is strongest when repetitive browser behavior can be compiled and only genuinely variable decisions require model reasoning." },
        ],
      },
      {
        id: "describe-and-build",
        title: "2. Describe the outcome and let Airtop build it",
        blocks: [
          { type: "paragraph", html: "Tell Agent Builder what should happen, which site or app is involved, what information should be extracted or changed and what the final result should look like. Airtop says the builder can ask clarifying questions and navigate a live browser during the build process." },
          { type: "paragraph", html: "Watch the builder's live execution and correct wrong actions before deployment. Airtop's architecture is designed to fold repeatable corrections into the compiled automation instead of making the model relearn the same browser step on every future run." },
        ],
      },
      {
        id: "authentication",
        title: "3. Handle authenticated sites carefully",
        blocks: [
          { type: "paragraph", html: "Airtop supports agents that sign into websites and stores credentials in a secure vault. Use the narrowest account permissions practical for the workflow and avoid placing passwords or secrets directly inside prompt text or exported workflow descriptions." },
          { type: "paragraph", html: "For workflows that can edit records, send messages or submit forms, test against a low-risk account or sandbox where possible before granting production access." },
        ],
      },
      {
        id: "test-before-deploy",
        title: "4. Test the exact browser actions and outputs",
        blocks: [
          { type: "paragraph", html: "A single successful run is not enough. Verify which pages were opened, which fields changed, what data was returned and how the agent behaves when expected elements are missing. Airtop provides logs and session replay to inspect runs." },
          { type: "paragraph", html: "Keep deterministic browser problems separate from reasoning problems. A selector or navigation issue should be corrected in the browser workflow; inconsistent judgment may require changing the model step or its instructions." },
        ],
      },
      {
        id: "deploy-and-schedule",
        title: "5. Deploy, schedule or trigger the agent",
        blocks: [
          { type: "paragraph", html: "Airtop documents on-demand runs, cron-style schedules and webhook triggers. Choose the least aggressive cadence that meets the business need, then increase frequency only after the workflow produces stable outputs." },
          { type: "paragraph", html: "Before scaling, check your plan's deployed-agent and simultaneous-session limits. Airtop's current pricing page ranges from three simultaneous sessions on Free and Starter to 100 on Enterprise." },
        ],
      },
      {
        id: "cost-guardrails",
        title: "6. Add cost and time guardrails to AI-heavy steps",
        blocks: [
          { type: "paragraph", html: "Airtop's AI APIs report credit usage in response metadata. Its documentation also supports <code>costThresholdCredits</code> and <code>timeThresholdSeconds</code> so applications can stop AI operations after configured thresholds are crossed." },
          { type: "note", html: "Airtop documents both fields as thresholds, not perfect hard caps. An operation already inside an LLM call can slightly exceed the threshold before the next call is prevented." },
        ],
      },
      {
        id: "repair-and-scale",
        title: "7. Review repair drafts before scaling",
        blocks: [
          { type: "paragraph", html: "If a deployed run breaks, Airtop can diagnose the failure, draft a repair and test it. The repair remains a draft until you choose to deploy it, so review the new behavior instead of assuming every automated fix is safe." },
          { type: "paragraph", html: "Once results are predictable, batch across lists of URLs or rows and increase concurrency gradually. Target-site rate limits, CAPTCHAs, authentication changes and runtime AI judgment can still affect throughput even when your Airtop plan permits more parallel sessions." },
        ],
      },
    ],
    sources: airtopSources,
    relatedPaths: ["/blog/airtop-agent-builder"],
  },
];
