import type { BlogArticle } from "./blog-types.ts";

const tadataSources = [
  { label: "Tadata — Homepage", url: "https://www.tadata.com/" },
  { label: "Tadata — Pricing", url: "https://www.tadata.com/pricing" },
  { label: "Tadata — Security & Privacy", url: "https://www.tadata.com/security" },
  { label: "Tadata — Privacy Policy", url: "https://www.tadata.com/privacy" },
  { label: "Tadata — Sales Assistant", url: "https://www.tadata.com/solutions/tadata-for-sales" },
  { label: "Tadata — GTM Ops", url: "https://www.tadata.com/solutions/tadata-for-gtm-ops" },
];

export const tadataArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Tadata",
    targetSearchIntent: "Understand what Tadata is, how its Slack-native AI employee works, what it can automate, its integrations, pricing, security model, and whether it fits a team workflow.",
    targetQuery: "Tadata",
    slug: "tadata-ai-employee-slack",
    title: "Tadata: Slack AI Employee, Pricing, Features & How It Works",
    metaTitle: "Tadata: Slack AI Employee, Pricing, Features & How It Works",
    metaDescription: "What Tadata is, how its Slack-native AI employee automates work across connected tools, current pricing, integrations, security, use cases, and limitations.",
    h1: "Tadata: How the Slack-Native AI Employee Works",
    excerpt: "Tadata is a Slack-native AI employee that connects to business tools, prepares work for review and is designed to automate recurring operational tasks without becoming another standalone dashboard.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Slack-native Tadata AI employee connecting team conversations to CRM, email, calendar, docs and approval workflows",
    sections: [
      { id: "what-is-tadata", title: "What is Tadata?", blocks: [
        { type: "paragraph", html: "Tadata describes itself as an AI employee in Slack. Instead of asking users to open a separate AI workspace, it brings research, briefings, drafted follow-ups and workflow suggestions into the place where many teams already coordinate work." },
        { type: "paragraph", html: "The current homepage shows Tadata connecting to tools such as HubSpot, Attio, Notion, Linear, GitHub, Google Sheets, Granola, Monday.com, Gmail and Google Calendar, and it also positions MCP or API connections as extension paths." },
      ]},
      { id: "what-it-does", title: "What Tadata can do", blocks: [
        { type: "list", items: ["prepare meeting and account briefings", "research prospects and company changes", "draft outreach and follow-up messages", "prepare CRM updates", "surface repeatable work that could be automated", "bring completed work back into Slack for review"] },
        { type: "paragraph", html: "Those examples are documented product workflows, not guarantees. Accuracy still depends on the quality of connected data, granted permissions, workflow instructions and human review." },
      ]},
      { id: "approval-model", title: "Approval before action", blocks: [
        { type: "paragraph", html: "Tadata's current product pages repeatedly emphasize review before outward action. The homepage says follow-up work can be prepared and that nothing goes out until the user approves it; its sales page makes the same boundary explicit for outreach, follow-up emails and CRM updates." },
        { type: "note", html: "Approval lowers operational risk, but it does not remove the need to verify recipients, facts, permissions and write actions before giving an agent broader authority." },
      ]},
      { id: "pricing", title: "Tadata pricing", blocks: [
        { type: "paragraph", html: "The live pricing page currently lists Free at $0 with 1,000 one-time credits. Standard Lite is $39 per month for 1,000 monthly credits, Pro is $149 per month for 4,000 monthly credits and Scale is $299 per month for 10,000 monthly credits." },
        { type: "paragraph", html: "Enterprise is listed as custom with unlimited credits, and the pricing page says credits are billed monthly on paid plans. Tadata does not publish one universal task-to-credit conversion, so teams should measure credit use on their own workflows." },
      ]},
      { id: "security", title: "Security and privacy boundaries", blocks: [
        { type: "paragraph", html: "Tadata says credentials are stored in HashiCorp Vault backed by AWS KMS and attached server-side only when a tool runs, so the model does not directly see the credentials. It also says data is encrypted with AES-256 at rest and TLS in transit." },
        { type: "paragraph", html: "The current security page says agent runs execute in isolated ephemeral containers, organization data is scoped per customer, and Tadata only sees Slack channels it has been invited to. Messages sent to Tadata and their thread context are stored as conversation history." },
        { type: "paragraph", html: "Tadata also states that it does not train AI models on customer data and currently uses Anthropic and OpenAI models for reasoning, tool use and Slack replies under API terms that prohibit training on that data. These are vendor-documented controls and policies, not a universal guarantee of risk-free deployment." },
      ]},
      { id: "who-is-it-for", title: "Who Tadata is best suited for", blocks: [
        { type: "paragraph", html: "Tadata looks most relevant to Slack-centric teams that repeatedly move information between conversations, CRM records, email, calendars, documents and research sources. Its current sales and GTM Ops pages focus especially on founders, sales reps and lean go-to-market teams." },
        { type: "paragraph", html: "A small team that barely uses Slack or has little structured business data may get less value than a team with frequent repeatable workflows and well-maintained systems." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Tadata sits between a chatbot and a deterministic automation platform: it uses connected context and model reasoning to prepare multi-step work, but keeps review central to its current product positioning." },
        { type: "paragraph", html: "The best evaluation is a narrow pilot. Start with one measurable workflow, track accuracy, human editing and credit use, then decide whether broader permissions or more connected tools are justified." },
      ]},
    ],
    sources: tadataSources,
    relatedPaths: ["/blog/how-to-use-tadata"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Tadata",
    targetSearchIntent: "Set up Tadata in Slack, connect business tools safely, choose a first useful workflow, configure approvals, test the agent, and evaluate whether the automation is reliable.",
    targetQuery: "how to use Tadata",
    parentSlug: "tadata-ai-employee-slack",
    slug: "how-to-use-tadata",
    title: "How to Use Tadata: Slack Setup, Connectors & First Workflow",
    metaTitle: "How to Use Tadata: Slack Setup, Connectors & Workflows",
    metaDescription: "A practical Tadata setup guide: connect Slack and business tools, choose a first workflow, configure approvals, test permissions, and measure whether the agent saves useful work.",
    h1: "How to Use Tadata: Set Up Slack, Connect Tools and Build Your First Workflow",
    excerpt: "Use Tadata safely by starting with one narrow Slack workflow, connecting only the data sources it needs, keeping approval in the loop and measuring accuracy and credit use before expanding access.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Tadata setup workflow from Slack through connected business tools to an approval checkpoint and action",
    sections: [
      { id: "before-you-start", title: "Before you start", blocks: [
        { type: "paragraph", html: "Treat Tadata as an operational agent rather than a prompt toy. Pick one recurring job with a clear input, output and success condition before connecting a large part of your stack." },
        { type: "list", items: ["pre-call briefing", "post-call follow-up draft", "CRM update proposal", "prospect research", "daily team briefing"] },
      ]},
      { id: "connect-slack", title: "1. Connect Tadata to Slack", blocks: [
        { type: "paragraph", html: "Tadata's current app and product pages use Slack as the primary interaction surface. Start by signing into Tadata and authorizing the Slack workspace you want to use, then review the permissions shown during authorization instead of approving them blindly." },
        { type: "paragraph", html: "The current security page says Tadata sees only channels it has been invited to. Use that as a practical scope boundary: invite it only where the first workflow actually needs context." },
      ]},
      { id: "connect-tools", title: "2. Connect only the tools the workflow needs", blocks: [
        { type: "paragraph", html: "Tadata currently advertises integrations across CRM, email, calendar, docs, project tools and developer systems. A call-preparation pilot might only need Slack, calendar and CRM; a post-call workflow may need meeting context, CRM and email." },
        { type: "note", html: "Every extra connector expands available context and may expand possible actions. Minimum necessary access makes mistakes easier to diagnose and reduces exposure." },
      ]},
      { id: "define-workflow", title: "3. Define one narrow workflow", blocks: [
        { type: "paragraph", html: "Write the job in plain language with four parts: when it should run, which sources it may use, what output it should produce and which actions require approval." },
        { type: "paragraph", html: "For example: prepare a short pre-call brief from the calendar and CRM, post it in Slack and do not send or modify anything externally. That is easier to test than a broad instruction such as 'help the sales team.'" },
      ]},
      { id: "approval", title: "4. Keep approval in the loop", blocks: [
        { type: "paragraph", html: "Tadata's current product positioning explicitly keeps users in control of outward actions. Preserve that model during early testing, especially for emails, CRM writes, issue creation or customer-facing messages." },
        { type: "paragraph", html: "Review operational details, not only prose quality. A polished message can still use the wrong account, stale context or the right action at the wrong time." },
      ]},
      { id: "test-measure", title: "5. Test and measure the workflow", blocks: [
        { type: "list", items: ["factual accuracy", "whether the right records were used", "human editing required", "errors or exceptions", "credits consumed", "human minutes saved per successful run"] },
        { type: "paragraph", html: "Tadata pricing is credit-based, so measuring cost at the workflow level matters. The live pricing page lists the current plan allowances, but it does not give one fixed credit cost for every business task." },
      ]},
      { id: "expand", title: "6. Expand access gradually", blocks: [
        { type: "paragraph", html: "Once the first workflow is reliable, add either more context or more action authority, not both at once. That makes it easier to identify which change introduced a failure." },
        { type: "paragraph", html: "For sensitive teams, also revisit Tadata's current security and privacy pages before adding broader connectors. Vendor controls still need to fit your own internal permission, compliance and data-governance requirements." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "A safe Tadata rollout is narrow by design: Slack first, minimum connectors, one measurable job, approval preserved and repeated testing before broader automation." },
        { type: "paragraph", html: "For current pricing, supported workflow examples and the broader security model, use the main Tadata overview linked below." },
      ]},
    ],
    sources: tadataSources,
    relatedPaths: ["/blog/tadata-ai-employee-slack"],
  },
];
