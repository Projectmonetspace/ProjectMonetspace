import type { BlogArticle } from "./blog-types.ts";

const dialSources = [
  { label: "Dial official site", url: "https://getdial.ai/" },
  { label: "Dial CLI installation and onboarding", url: "https://docs.getdial.ai/documentation/cli/install-and-onboarding" },
  { label: "Dial phone-number management", url: "https://docs.getdial.ai/documentation/platform/manage-phone-numbers" },
  { label: "Dial WhatsApp lines", url: "https://docs.getdial.ai/documentation/capabilities/whats-app-lines" },
];

export const dialAiAgentArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Dial",
    targetSearchIntent: "Understand what Dial is, how it gives AI agents phone numbers and communication capabilities, what channels and developer surfaces it supports, current pricing and limits, and whether it fits an agent workflow.",
    targetQuery: "Dial AI agent",
    slug: "dial-ai-agent-phone-number",
    title: "Dial AI Agent Phone Numbers: API, Pricing, Features & Setup",
    metaTitle: "Dial AI Agent Phone Numbers: API, Pricing & Setup",
    metaDescription: "Dial gives AI agents real phone numbers for calls, SMS and messaging through REST, MCP, CLI and SDKs. See confirmed pricing, limits, setup and use cases.",
    h1: "Dial: Phone Numbers, Calls and Messaging for AI Agents",
    excerpt: "Dial is an agent-oriented communications layer that gives software real phone numbers and exposes calls, SMS and selected messaging capabilities through REST, MCP, CLI and SDKs.",
    category: "AI",
    author: "Project Monet",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Diagram showing Dial connecting an AI agent to phone calls, SMS, WhatsApp and developer interfaces",
    sections: [
      { id: "what-is-dial", title: "What is Dial?", blocks: [
        { type: "paragraph", html: "Dial is a communications layer built for AI agents. It gives software a real phone-number identity and exposes calling and messaging capabilities without requiring the agent developer to assemble carrier infrastructure from scratch." },
        { type: "paragraph", html: "The current official product surface includes REST, a remote MCP server, a CLI, a Node SDK and a Python SDK. Dial is therefore best understood as the communications layer in an agent stack, not as the reasoning model or workflow engine itself." },
      ]},
      { id: "capabilities", title: "What can an AI agent do with Dial?", blocks: [
        { type: "list", items: ["provision and manage real phone numbers", "place outbound AI voice calls", "receive inbound calls with an inbound instruction", "send and receive SMS", "receive asynchronous call and message events", "use WhatsApp when the account has beta access"] },
        { type: "paragraph", html: "These primitives fit workflows such as appointment confirmation, lead follow-up, inbound qualification, support triage and business notifications. Availability and compliance still depend on the exact destination, channel and use case." },
      ]},
      { id: "developer-surfaces", title: "CLI, MCP, REST and SDK access", blocks: [
        { type: "paragraph", html: "The official CLI is the fastest documented onboarding path. Dial currently requires Node.js 22 or newer and documents installation with <code>npm install -g @getdial/cli</code>. New accounts verify both email and a phone number before onboarding completes." },
        { type: "paragraph", html: "MCP is useful when an agent should discover and invoke Dial tools directly. REST and the Node/Python SDKs are better fits when a backend owns authentication, durable state, audit controls or custom business logic." },
      ]},
      { id: "pricing", title: "Dial pricing and free-account limits", blocks: [
        { type: "paragraph", html: "Dial currently advertises a <strong>$5 signup credit</strong> with no card required and pay-as-you-go number ownership at <strong>$3 per month per phone number plus metered usage</strong>. Voice and SMS usage rates vary by destination, so there is no single universal call or message rate to hard-code." },
        { type: "paragraph", html: "Free accounts that have not topped up or subscribed are currently limited to <strong>5 minutes per call</strong> and <strong>2 concurrent calls</strong>. Dial says those restrictions lift after the first top-up or subscription." },
      ]},
      { id: "channel-limits", title: "WhatsApp, iMessage and channel limits", blocks: [
        { type: "paragraph", html: "Dial currently describes WhatsApp lines as beta and account-enabled rather than universally available. Treat channel access as an account capability that should be checked before a production workflow depends on it." },
        { type: "paragraph", html: "Dial's number-management documentation also gives iMessage numbers separate rules: they remain pay-as-you-go rather than flat-rate subscription numbers. Country availability, carrier registration and messaging requirements can differ by number type and destination." },
      ]},
      { id: "security", title: "Security and production boundaries", blocks: [
        { type: "paragraph", html: "Dial's official guidance says API keys should not be exposed client-side or written into logs, and API traffic should use HTTPS. Production systems should add destination allowlists, budgets, retry limits, audit logs and human approval around high-risk outbound actions." },
        { type: "paragraph", html: "A phone number being technically able to receive a verification message does not mean every third-party service permits automated or virtual-number verification. External platform rules still apply." },
      ]},
      { id: "fit", title: "Where Dial fits in an agent stack", blocks: [
        { type: "paragraph", html: "A typical workflow is: the agent decides a call or message is needed, invokes Dial through MCP, CLI, REST or an SDK, Dial performs the communications action, and the resulting event returns to the workflow for the next decision." },
        { type: "paragraph", html: "That separation is useful because teams can change their reasoning model or agent framework without rebuilding the communications layer. Before scaling, verify live rates, country availability, channel eligibility and compliance for the exact deployment." },
      ]},
    ],
    sources: dialSources,
    relatedPaths: ["/blog/how-to-use-dial-ai-agents"],
  },
  {
    status: "published",
    articleType: "supporting",
    parentSlug: "dial-ai-agent-phone-number",
    cluster: "Dial",
    targetSearchIntent: "Install and connect Dial to an AI agent, authenticate safely, provision or use a number, place calls or send messages, and choose between CLI, MCP, SDK and REST integration paths.",
    targetQuery: "how to use Dial with AI agents",
    slug: "how-to-use-dial-ai-agents",
    title: "How to Use Dial with AI Agents: CLI, MCP & API Setup",
    metaTitle: "How to Use Dial with AI Agents: CLI, MCP & API Guide",
    metaDescription: "Set up Dial for an AI agent using the CLI, MCP, REST API or SDKs. Learn authentication, numbers, calls, messaging, events, security and production checks.",
    h1: "How to Use Dial with AI Agents: CLI, MCP and API Setup",
    excerpt: "A practical setup guide for connecting Dial to an AI agent through the CLI, MCP, REST or SDKs while preserving credential, spending and channel safeguards.",
    category: "AI",
    author: "Project Monet",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Workflow showing an AI agent connecting through Dial CLI, MCP, API or SDK to phone calls and messaging events",
    sections: [
      { id: "requirements", title: "Before you start", blocks: [
        { type: "paragraph", html: "For the current CLI flow you need Node.js 22 or newer. Dial also requires a new account to verify an email address and a phone number the user controls before onboarding is complete." },
        { type: "paragraph", html: "Install the official CLI with <code>npm install -g @getdial/cli</code>, then confirm it is available with <code>dial --version</code>. Keep the resulting credentials out of browser code and logs." },
      ]},
      { id: "authenticate", title: "1. Authenticate the account", blocks: [
        { type: "paragraph", html: "Dial documents an OTP-based CLI flow. Start with <code>dial auth login you@example.com</code>, verify the emailed code, then register and verify a non-Dial phone number you control for a new account." },
        { type: "note", html: "Use the exact current onboarding commands from Dial's documentation. A Dial-provisioned number is not the registration number for this account-verification step." },
      ]},
      { id: "choose-interface", title: "2. Choose CLI, MCP, REST or an SDK", blocks: [
        { type: "paragraph", html: "Use the CLI when a coding agent or terminal workflow is directly driving Dial. Use MCP when an MCP-capable agent should discover structured Dial actions without constructing raw HTTP requests." },
        { type: "paragraph", html: "Use REST when your backend owns orchestration, authorization and persistence. Dial also publishes Node and Python SDKs for application-level integration without manually implementing every request." },
      ]},
      { id: "number-and-calls", title: "3. Configure a number and make a controlled call", blocks: [
        { type: "paragraph", html: "Configure one number for a narrow first workflow and define an inbound instruction with explicit boundaries. For example, a receptionist can qualify a request and collect a callback while escalating payments, legal commitments or sensitive account actions." },
        { type: "paragraph", html: "For outbound calls, keep the instruction task-specific and restrict what the agent may disclose or agree to. Calling, recording, disclosure and marketing rules vary by jurisdiction, so production automation needs a country-specific compliance review." },
      ]},
      { id: "messages-events", title: "4. Handle messaging and events", blocks: [
        { type: "paragraph", html: "Dial supports SMS and currently offers WhatsApp through beta, account-enabled access. Do not assume every channel is immediately available on every account or number." },
        { type: "paragraph", html: "Build event-driven handling instead of assuming a successful request means the communication completed. Number and channel capabilities can settle asynchronously, so production code should inspect current status and error information." },
      ]},
      { id: "cost-controls", title: "5. Add credential and spending controls", blocks: [
        { type: "paragraph", html: "Dial currently starts pay-as-you-go number ownership at $3 per month per phone number plus metered usage, with a $5 signup credit. Voice and SMS rates vary by destination, so verify the live billing view for the destinations you actually use." },
        { type: "list", items: ["store credentials server-side", "allowlist destinations where practical", "set workflow-level budgets", "require approval for high-risk actions", "log prompts, destinations and outcomes", "stop retry loops on policy or carrier errors"] },
      ]},
      { id: "production-checklist", title: "6. Production checklist", blocks: [
        { type: "paragraph", html: "Before launch, verify the exact countries and number types you need, current channel eligibility, destination rates, carrier-registration requirements, error handling, human escalation and recipient-consent rules." },
        { type: "paragraph", html: "Start with one narrow workflow and one controlled number. Expand only after real call and message events confirm that the channel, cost and operational behavior match the assumptions made during development." },
      ]},
    ],
    sources: dialSources,
    relatedPaths: ["/blog/dial-ai-agent-phone-number"],
  },
];
