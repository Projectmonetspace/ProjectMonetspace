import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-31";

const caddiMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Caddi",
  targetSearchIntent: "Broad entity/product overview: what Caddi is, how its screenshare-trained automation works, current pricing, integrations, security, use cases and limitations",
  targetQuery: "Caddi",
  slug: "caddi-ai-automation",
  title: "Caddi AI Automation: Pricing, Features & How It Works",
  metaTitle: "Caddi AI Automation: Pricing, Features & How It Works",
  metaDescription: "Caddi learns back-office workflows from screenshares and turns them into governed automations. See how it works, current pricing, integrations, security and limits.",
  h1: "Caddi: Screenshare-Trained AI Automation for Back-Office Work",
  excerpt: "Caddi turns narrated process demonstrations into governed business automations, with deterministic execution for repeatable steps and bounded AI where judgment is needed.",
  category: "Automation",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet workflow graphic showing a screen recording becoming rules, edge cases, a governed automation loop and connected business apps",
  sections: [
    {
      id: "what-caddi-is",
      title: "What Caddi is and how the workflow starts",
      blocks: [
        { type: "paragraph", html: "Caddi is an AI workflow-automation platform focused on repetitive back-office work. Instead of beginning with a blank workflow canvas, the operator can demonstrate a process through narrated screenshare, answer follow-up questions about exceptions and let Caddi turn that process into a governed loop." },
        { type: "paragraph", html: "Caddi's official launch announcement is dated August 24, 2026, with later Product Hunt attention. The useful product distinction is the authoring model: the user teaches the job much like they would teach a new hire, while the system converts that knowledge into repeatable automation." },
      ],
    },
    {
      id: "execution-model",
      title: "Discover, teach, build and automate",
      blocks: [
        { type: "paragraph", html: "Caddi currently frames the product around discover, teach, build and automate. Discovery surfaces repetitive work; teaching captures the real process and decision logic; building turns it into a loop; and production runs are logged for review." },
        { type: "paragraph", html: "Caddi says deterministic code handles repeatable execution while AI is used where judgment is required. That matters because the platform is not positioning every production step as an unconstrained model decision. Exceptions still need to be taught and risky actions should be validated on representative cases." },
      ],
    },
    {
      id: "pricing",
      title: "Caddi pricing as reverified on August 31, 2026",
      blocks: [
        { type: "paragraph", html: "Caddi's dedicated pricing page now lists the Individual plan at <strong>$0</strong> for one user, with 200 credits per month, 10 active loops and 30 days of run history. The page explicitly says there is no trial clock and no Individual overage; users upgrade when they need more credits or loops." },
        { type: "paragraph", html: "Team is listed at $250 per user per month with 1,000 credits per user and 20 active loops; Business at $6,500 per month with 20,000 credits and 100 active loops; and Enterprise uses a custom annual agreement starting from larger allowances. For the detailed limits and overages, see <a href=\"/blog/caddi-pricing\">the Caddi pricing guide</a>." },
      ],
    },
    {
      id: "integrations-security",
      title: "Integrations, permissions and security claims",
      blocks: [
        { type: "paragraph", html: "Caddi's public pages currently disagree on the headline integration count: the homepage advertises 150+ integrations while the technology page says 75+. Treat those numbers as changing marketing snapshots and verify the exact product/action needed. First-party pages show examples across Microsoft 365, Salesforce, DocuSign, NetDocuments, SharePoint, Clio and other operations software." },
        { type: "paragraph", html: "The technology page says Caddi connects through OAuth and SSO, runs under the connected user's existing credentials and logs actions for audit. It also states SOC 2 Type II and zero-data-retention terms for OpenAI and Anthropic calls. Those are first-party security claims; regulated teams should still review the current Trust Center and contractual scope." },
      ],
    },
    {
      id: "fit-limitations",
      title: "Best-fit workflows and important limitations",
      blocks: [
        { type: "paragraph", html: "Document filing, client intake, inbox triage, CRM updates, payment reconciliation and cross-system synchronization are strong documented examples. The common pattern is a stable process with explainable rules and clear escalation points." },
        { type: "paragraph", html: "Caddi should not be treated as a general-purpose autonomous employee that can safely improvise across any system. A screenshare captures the visible path, but production quality depends on teaching exceptions, scoping permissions and validating run behavior. For a practical rollout sequence, continue with <a href=\"/blog/how-to-use-caddi\">How to Use Caddi</a>." },
      ],
    },
  ],
  sources: [
    { label: "Caddi — official homepage", url: "https://www.trycaddi.com/" },
    { label: "Caddi — pricing", url: "https://www.trycaddi.com/pricing" },
    { label: "Caddi — technology and security", url: "https://www.trycaddi.com/technology" },
    { label: "PR Newswire — Caddi launch announcement", url: "https://www.prnewswire.com/news-releases/caddi-launches-an-ai-agent-that-builds-and-governs-a-firms-back-office-agents-302857872.html" },
    { label: "Product Hunt — Caddi", url: "https://www.producthunt.com/products/caddi-3" },
  ],
  relatedPaths: ["/blog/how-to-use-caddi", "/blog/caddi-pricing"],
};

const caddiPricing: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Caddi",
  targetSearchIntent: "Commercial evaluation: understand current Caddi plans, monthly credits, active-loop limits, overages and cost boundaries before choosing a plan",
  targetQuery: "Caddi pricing",
  parentSlug: "caddi-ai-automation",
  slug: "caddi-pricing",
  title: "Caddi Pricing: Plans, Credits, Loops & Costs Explained",
  metaTitle: "Caddi Pricing: Plans, Credits, Loops & Costs",
  metaDescription: "Caddi's Individual plan is currently free for one user. Compare Team $250/user/month, Business $6,500/month, credits, active loops and Enterprise limits.",
  h1: "Caddi Pricing: Plans, Credits, Active Loops & Overages",
  excerpt: "Caddi now has a free Individual plan, while paid tiers scale by users, credits, active loops and governance requirements.",
  category: "Automation",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet comparison graphic for Caddi Individual, Team, Business and Enterprise plans with credits and active-loop limits",
  sections: [
    {
      id: "individual-team",
      title: "Individual and Team plans",
      blocks: [
        { type: "paragraph", html: "As reverified on August 31, 2026, Caddi Individual is <strong>$0</strong> for one user with 200 credits per month, 10 active loops and 30 days of run history. The pricing page says there is no trial clock and no Individual overage; upgrade when more credits or loops are needed." },
        { type: "paragraph", html: "Team is $250 per user per month, billed monthly, with 1,000 credits per user, 20 active loops, unlimited users billed per user and 30 days of run history. Extra credits are listed at $1.25 each and extra active loops at $100 per month." },
      ],
    },
    {
      id: "business-enterprise",
      title: "Business and Enterprise plans",
      blocks: [
        { type: "paragraph", html: "Business is listed at $6,500 per month with 20,000 credits, 100 active loops, unlimited users at a flat price, Scout, advanced integrations, SAML SSO/DPA on request and two years of run history. Extra credits are $0.75 each and additional active loops are $100 per month." },
        { type: "paragraph", html: "Enterprise uses a custom annual agreement. Caddi currently lists starting allowances of 50,000 credits and 200 active loops, plus multi-instance support, centralized integration governance, priority loop execution and same-day support. Extra credits start from $0.60 each." },
      ],
    },
    {
      id: "credits-loops",
      title: "How credits and active loops affect cost",
      blocks: [
        { type: "paragraph", html: "Credits are the monthly allowance consumed by work the loops perform. Caddi gives standard AI data extraction at one credit per page as a concrete example. Different workflows can have different cost profiles, so estimate spend from the actions your real loop performs." },
        { type: "paragraph", html: "An active loop is an automation kept live. A company can therefore hit its loop limit even if request volume is low. On paid plans, Caddi says overage can continue at the plan's listed credit rate; Individual has no overage and instead requires an upgrade when the included capacity is insufficient." },
      ],
    },
    {
      id: "choose-plan",
      title: "Which Caddi plan fits which use case?",
      blocks: [
        { type: "paragraph", html: "Individual is the obvious starting point for one operator testing a small number of workflows without a subscription fee. Team adds much more monthly credit capacity for groups that need to share loops. Business is positioned for organization-wide automation where SAML SSO, longer history, advanced integrations and contractual support matter." },
        { type: "paragraph", html: "Enterprise is for the largest allowances and centralized governance. These are product-positioning categories rather than a universal recommendation. Before choosing a plan, verify integration needs, action metering, active-loop count and security requirements." },
      ],
    },
    {
      id: "recheck",
      title: "Recheck pricing before purchase",
      blocks: [
        { type: "paragraph", html: "Caddi's commercial packaging changed materially between drafting and publication: the Individual tier moved to a free, no-trial-clock model. That is exactly why the live pricing page should be checked before budgeting or purchase." },
        { type: "paragraph", html: "For the broader product architecture, see <a href=\"/blog/caddi-ai-automation\">the Caddi overview</a>. For rollout and validation steps, read <a href=\"/blog/how-to-use-caddi\">the Caddi setup guide</a>." },
      ],
    },
  ],
  sources: [
    { label: "Caddi — pricing", url: "https://www.trycaddi.com/pricing" },
    { label: "Caddi — official homepage", url: "https://www.trycaddi.com/" },
    { label: "Caddi — technology", url: "https://www.trycaddi.com/technology" },
  ],
  relatedPaths: ["/blog/caddi-ai-automation", "/blog/how-to-use-caddi"],
};

const caddiHowTo: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Caddi",
  targetSearchIntent: "Practical setup workflow: teach Caddi a repetitive business process through narrated screenshare, capture exceptions, validate the loop and safely put it into production",
  targetQuery: "how to use Caddi",
  parentSlug: "caddi-ai-automation",
  slug: "how-to-use-caddi",
  title: "How to Use Caddi: Turn a Screenshare Into an AI Automation",
  metaTitle: "How to Use Caddi: Screenshare-to-Automation Guide",
  metaDescription: "Learn how Caddi turns a narrated screenshare into a governed business automation, including process selection, edge cases, validation, permissions and rollout.",
  h1: "How to Use Caddi: From Screenshare to Production Automation",
  excerpt: "A practical Caddi workflow from choosing the right process and recording the demonstration through edge-case teaching, validation and gradual production rollout.",
  category: "Automation",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet workflow diagram showing choose process, screenshare, teach exceptions, validate and run",
  sections: [
    {
      id: "choose-process",
      title: "Choose a process that is actually automatable",
      blocks: [
        { type: "paragraph", html: "Start with work that is repetitive, rule-heavy and already performed in a reasonably consistent way. Client intake, document filing, inbox triage, CRM updates and reconciliation are stronger candidates than jobs dominated by open-ended judgment." },
        { type: "paragraph", html: "List the applications the process touches before recording. Verify the exact integrations and actions you need rather than relying on a headline integration count, because Caddi's public pages currently show different aggregate counts." },
      ],
    },
    {
      id: "record-teach",
      title: "Record the real workflow and explain the decisions",
      blocks: [
        { type: "paragraph", html: "Open the actual task and narrate not only the clicks but the reason behind each decision. For a filing workflow, explain which document qualifies as final, what makes the destination record correct and which naming convention must be used." },
        { type: "paragraph", html: "The most important teaching happens at the edges. Cover missing information, incomplete documents, duplicates, ambiguous matches, permission failures, unavailable systems and any condition that should stop for human review." },
      ],
    },
    {
      id: "permissions-validation",
      title: "Scope permissions and validate the generated loop",
      blocks: [
        { type: "paragraph", html: "Caddi's technology page says it connects through OAuth/SSO and runs under the connected user's existing access. Use the minimum permissions required for the process; do not solve an automation problem by giving broader administrator access than the human operator would normally need." },
        { type: "paragraph", html: "Review the generated sequence before scale, especially write actions such as creating records, sending messages, changing statuses, moving financial data or replacing files. Test representative normal cases and known edge cases rather than replaying only the clean demonstration." },
      ],
    },
    {
      id: "production-rollout",
      title: "Inspect the audit trail and roll out gradually",
      blocks: [
        { type: "paragraph", html: "After each test, inspect the run record and verify what the loop did, which branch it followed and which permissions were used. This matters most when the automation touches regulated, financial, legal or customer data." },
        { type: "paragraph", html: "Start production with a limited queue or narrow scope, monitor early runs and update the process deliberately when business rules change. A demonstration-first authoring flow can be fast, but it does not remove the need for sound process design and controlled rollout." },
      ],
    },
    {
      id: "next-steps",
      title: "Next steps and cost planning",
      blocks: [
        { type: "paragraph", html: "The current free Individual plan is enough to test a small number of loops, but paid-plan capacity and governance become relevant as usage grows. Review <a href=\"/blog/caddi-pricing\">Caddi pricing</a> before expanding the rollout." },
        { type: "paragraph", html: "For the broader architecture, integration claims, security context and product limitations, return to <a href=\"/blog/caddi-ai-automation\">the Caddi main guide</a>." },
      ],
    },
  ],
  sources: [
    { label: "Caddi — official homepage", url: "https://www.trycaddi.com/" },
    { label: "Caddi — technology", url: "https://www.trycaddi.com/technology" },
    { label: "Caddi — client intake solution", url: "https://www.trycaddi.com/solutions/client-intake" },
    { label: "Caddi — cross-system synchronization", url: "https://www.trycaddi.com/solutions/cross-system-sync" },
  ],
  relatedPaths: ["/blog/caddi-ai-automation", "/blog/caddi-pricing"],
};

export const caddiArticles: BlogArticle[] = [caddiMain, caddiPricing, caddiHowTo];
