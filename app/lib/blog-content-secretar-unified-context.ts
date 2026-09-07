import type { BlogArticle } from "./blog-types.ts";

export const secretarUnifiedContextArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Secretar.AI Unified Context",
    targetSearchIntent: "Understand what Secretar.AI Unified Context is, how the proposed entity-centered context layer works, its September 8 launch status, limits, and relationship to memory, RAG and MCP.",
    targetQuery: "Secretar.AI Unified Context",
    slug: "secretar-ai-unified-context",
    title: "Secretar.AI Unified Context: What It Is, Launch & How It Works",
    metaTitle: "Secretar.AI Unified Context: What It Is, Launch & How It Works",
    metaDescription: "Secretar.AI is scheduled to launch Unified Context on September 8. Here is what the AI-agent context technology is, how it works, and what remains unverified.",
    h1: "Secretar.AI Unified Context: What It Is and How It Works",
    excerpt: "Unified Context is Secretar.AI's entity-centered context-unification technology and proposed standard, with the first Secretar.AI implementation scheduled for September 8, 2026.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Unified Context diagram showing one customer connected across messaging CRM payments documents and appointments to an AI agent",
    sections: [
      { id: "what-is", title: "What is Secretar.AI Unified Context?", blocks: [
        { type: "paragraph", html: "Secretar.AI describes Unified Context as a technology and proposed standard for connecting information, interactions and events related to the same entity across integrated systems. A customer can be the entity, while CRM records, conversations, payments, documents and appointments become parts of the context available to an AI agent." },
        { type: "paragraph", html: "The key idea is broader than chat history. Instead of treating each channel or operational system as an isolated conversation, the system is intended to relate records that belong to the same real-world relationship." },
      ]},
      { id: "launch", title: "September 8 launch status", blocks: [
        { type: "paragraph", html: "Secretar.AI announced Unified Context on September 6, 2026 and says a new version of Secretar.AI with the technology implemented is scheduled to launch September 8, 2026. The company also says all Secretar.AI users will be able to begin using the new AI experience from launch." },
        { type: "note", html: "As rechecked on September 7, 2026, the official English product and launch pages still describe September 8 as a scheduled release. This article therefore does not claim the rollout is already live." },
      ]},
      { id: "how-it-works", title: "How Unified Context is supposed to work", blocks: [
        { type: "paragraph", html: "The entity is the reference point. Information can be produced in different systems, then related to that entity so an agent can use relevant business context when handling a request." },
        { type: "paragraph", html: "Secretar.AI uses examples such as WhatsApp conversations, CRM records, proposals, payments, contracts, appointments and later interactions on another channel. Those are examples of information the architecture can relate; they are not evidence that every named platform has a live connector." },
      ]},
      { id: "boundaries", title: "What the announcement does not prove", blocks: [
        { type: "list", items: ["External systems are not connected automatically; coverage depends on integrations a business has actually implemented.", "The public Draft v0.1 is a discussion specification, not a production API or interoperability certification.", "Pricing, quotas, regional availability, identity-resolution mechanics and full security/compliance details were not verified in the checked English primary sources.", "More context does not guarantee correct agent decisions; execution still depends on tools, rules, models and data quality."] },
        { type: "paragraph", html: "Secretar.AI calls Unified Context a standard, but it is premature to describe it as a mature multi-vendor interoperability standard. The current public material positions Secretar.AI as the first planned implementation." },
      ]},
      { id: "comparison", title: "Unified Context vs memory, RAG and MCP", blocks: [
        { type: "paragraph", html: "Agent memory usually asks what an agent should retain across interactions. RAG retrieves relevant information from external knowledge sources. MCP standardizes access to tools and resources. Unified Context is aimed at relating information around the same entity across systems. These layers can overlap or work together rather than replace one another." },
        { type: "paragraph", html: "For example, a unified entity layer could identify which customer and records matter, while retrieval fetches a document and MCP provides a standardized way to call an external tool." },
      ]},
      { id: "use-cases", title: "Practical use cases", blocks: [
        { type: "list", items: ["Customer support that considers earlier sales or payment state", "Sales follow-up informed by prior conversations and proposal status", "Appointment questions that also depend on contracts or purchases", "Multi-channel service where customers do not have to repeat context already stored elsewhere", "Internal agents that need records from several operational systems"] },
        { type: "paragraph", html: "These are plausible applications based on Secretar.AI's documented product vision, not proof that each workflow is available as a one-click integration." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Unified Context is an early entity-centered approach to keeping customer or business context connected across integrated systems for AI agents. The underlying problem is real, but implementation details and production evidence remain limited before the scheduled September 8 release." },
        { type: "paragraph", html: "The strongest current description is cautious: Unified Context is a Secretar.AI-developed context-unification technology and proposed standard, with Secretar.AI scheduled as its first implementation on September 8, 2026." },
      ]},
    ],
    sources: [
      { label: "Secretar.AI — September 8 Unified Context launch announcement", url: "https://secretar.ai/en/blog/secretar-ai-unified-context-launch" },
      { label: "Secretar.AI — Unified Context concept page", url: "https://secretar.ai/en/unified-context" },
      { label: "Secretar.AI — What is Unified Context?", url: "https://secretar.ai/en/blog/what-is-unified-context" },
      { label: "Secretar.AI — Why we created Unified Context", url: "https://secretar.ai/en/blog/why-we-created-unified-context" },
    ],
    relatedPaths: [],
  },
];
