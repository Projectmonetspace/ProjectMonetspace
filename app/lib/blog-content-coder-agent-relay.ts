import type { BlogArticle } from "./blog-types.ts";

const coderAgentRelaySources = [
  { label: "Coder launch announcement", url: "https://coder.com/blog/introducing-agent-relay-cloud-hosted-agents-self-hosted-execution" },
  { label: "Coder AI documentation", url: "https://coder.com/docs/ai-coder" },
  { label: "Cursor self-hosted integrations", url: "https://prod.cursor.com/docs/cloud-agent/self-hosted/integrations" },
  { label: "Cursor self-hosted machines documentation", url: "https://cursor.com/docs/cloud-agent/self-hosted" },
];

export const coderAgentRelayArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Coder Agent Relay",
    targetSearchIntent: "Understand what Coder Agent Relay is, how it works with Cursor Cloud Agents, what stays self-hosted versus provider-hosted, and its current availability.",
    targetQuery: "Coder Agent Relay",
    slug: "coder-agent-relay",
    title: "Coder Agent Relay: Cursor Self-Hosted Execution Explained",
    metaTitle: "Coder Agent Relay: Cursor Self-Hosted Execution Explained",
    metaDescription: "Coder Agent Relay lets Cursor Cloud Agents execute tool calls inside self-hosted Coder workspaces. Learn the architecture, security model, availability and limits.",
    h1: "Coder Agent Relay: Self-Hosted Execution for Cursor Cloud Agents",
    excerpt: "Coder Agent Relay keeps Cursor's agent loop and inference in the cloud while moving tool execution into customer-controlled Coder workspaces.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Diagram showing Cursor cloud reasoning connected through Coder Agent Relay to a self-hosted Coder workspace for tool execution",
    sections: [
      { id: "what-it-is", title: "What Coder Agent Relay is", blocks: [
        { type: "paragraph", html: "Coder Agent Relay is a new architecture for teams that want to keep using cloud-hosted coding agents while moving the agent's execution environment onto infrastructure they control. Coder introduced Agent Relay on September 2, 2026, with Cursor Cloud Agents as the first supported provider." },
        { type: "paragraph", html: "The important boundary is that Agent Relay does <strong>not</strong> self-host the entire AI stack. Cursor continues to run the agent loop, planning and model inference in its cloud. The worker that executes tool calls runs inside a Coder workspace on customer-controlled infrastructure." },
      ]},
      { id: "architecture", title: "How the architecture works", blocks: [
        { type: "paragraph", html: "Coder describes Agent Relay as a bridge between an external cloud-hosted agent provider and a self-hosted Coder workspace. When a task starts, the provider keeps orchestration and inference while a worker inside the Coder workspace executes file operations, terminal commands and other tools." },
        { type: "paragraph", html: "Cursor's own self-hosted Cloud Agent documentation independently confirms the same split: Cursor runs the agent loop, inference and planning, while the connected worker performs file edits, terminal commands, computer-use tools and local MCP operations." },
      ]},
      { id: "data-boundary", title: "What stays inside your infrastructure", blocks: [
        { type: "paragraph", html: "The execution environment can live in infrastructure the organization already governs, such as its cloud, VPC or on-premises environment. That lets teams apply their existing workspace templates, identity controls, network policy and access boundaries to agent execution." },
        { type: "paragraph", html: "Coder highlights controls such as RBAC, audit logging, Agent Firewall and identity mapping. These are architectural capabilities rather than an automatic security guarantee: the result still depends on how Coder, Cursor, credentials, networking and workspace policy are configured." },
      ]},
      { id: "not-fully-self-hosted", title: "What is not self-hosted", blocks: [
        { type: "paragraph", html: "Agent Relay should not be described as a fully self-hosted Cursor stack. The external provider still runs the reasoning loop and inference. Tool results are sent back to the provider so the next inference step can continue." },
        { type: "paragraph", html: "Teams that require the full agent runtime to remain under their control should evaluate Coder Agents instead. Coder documents Coder Agents as its separate self-hosted architecture, where the agent loop runs in the Coder control plane and model access is configured by the customer." },
      ]},
      { id: "availability", title: "Availability and pricing", blocks: [
        { type: "paragraph", html: "At the time of publication, Coder Agent Relay is in private or closed preview with select customers and design partners. Coder has published architecture material and directs interested organizations to request access." },
        { type: "paragraph", html: "No public standalone Agent Relay price or general-availability date was verified in the primary sources reviewed for this article. Treat commercial entitlement, rollout timing and future provider support as account-specific until Coder publishes broader details." },
      ]},
      { id: "fit", title: "Who Agent Relay is for", blocks: [
        { type: "paragraph", html: "Agent Relay is most relevant to organizations that want Cursor's cloud-agent experience but need command execution to happen inside infrastructure they already govern. That can matter for private source control, internal package registries, restricted networks, centralized audit requirements or regulated workloads." },
        { type: "paragraph", html: "For smaller teams whose main goal is simply to use Cursor Cloud Agents quickly, the added infrastructure may be unnecessary. The value rises when execution location, identity attribution, network policy and auditability are mandatory requirements." },
      ]},
      { id: "why-it-matters", title: "Why this architecture matters", blocks: [
        { type: "paragraph", html: "Coding agents increasingly do more than read repositories: they install dependencies, run commands, modify files, access internal services and produce artifacts. Separating the reasoning layer from the execution layer gives enterprises another way to adopt cloud agent products without placing every action in vendor-managed compute." },
        { type: "paragraph", html: "Coder Agent Relay is therefore best understood as a controlled-execution layer for a cloud-hosted agent, not as a local model runner or a fully self-hosted AI system. That distinction is central to evaluating whether it satisfies a team's security and deployment requirements." },
      ]},
    ],
    sources: coderAgentRelaySources,
    relatedPaths: [],
  },
];
