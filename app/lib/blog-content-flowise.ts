import type { BlogArticle } from "./blog-types.ts";

export const flowiseArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Flowise",
    targetSearchIntent: "Understand Flowise's 2026 end of life, what still works, and whether to keep, fork or migrate.",
    targetQuery: "Flowise shutdown",
    slug: "flowise-shutdown-end-of-life",
    title: "Flowise Is Shutting Down: EOL, What Still Works & What to Do",
    metaTitle: "Flowise Is Shutting Down: EOL, What Still Works & What to Do",
    metaDescription: "Flowise reached end of life on August 31, 2026. See what stopped, what remains open source, the production risks, and whether to keep, fork or migrate.",
    h1: "Flowise End of Life: What the Shutdown Means and What to Do Next",
    excerpt: "Flowise's upstream project reached end of life, but existing deployments do not magically stop. The real change is maintenance ownership.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Flowise 2026 end-of-life timeline with keep, fork and migrate options.",
    sections: [
      {
        id: "what-changed",
        title: "What changed at Flowise end of life",
        blocks: [
          { type: "paragraph", html: "Flowise's official sunset plan reaches its final milestone on August 31, 2026. Active feature development was frozen in July, the main GitHub repository is archived and read-only, and the original core team's official GitHub and Discord presence ends." },
          { type: "list", items: ["The source code remains available under Apache 2.0.", "Existing self-hosted installations can continue running if their dependencies still work.", "End of life removes a normally maintained upstream; it is not a remote kill switch."] },
        ],
      },
      {
        id: "production-risk",
        title: "What EOL changes for production users",
        blocks: [
          { type: "paragraph", html: "A stable deployment can keep working while becoming harder to operate over time. Model APIs, OAuth flows, Node.js versions, databases and third-party packages continue changing even when the application around them is frozen." },
          { type: "list", items: ["Monitor vulnerabilities and dependency advisories yourself.", "Pin and document a known-good runtime before changing versions.", "Inventory every model provider, vector store, webhook, custom component and credential your flows depend on."] },
        ],
      },
      {
        id: "options",
        title: "Keep, fork or migrate",
        blocks: [
          { type: "paragraph", html: "Keeping Flowise can be reasonable for a stable internal deployment owned by an engineering team that accepts maintenance responsibility. Forking preserves the architecture but turns your team into the upstream maintainer. Migrating transfers more maintenance back to an active project but requires careful rebuilding and testing." },
          { type: "list", items: ["Keep: best when the deployment is stable, controlled and actively owned.", "Fork: best when Flowise is deeply embedded and your team can maintain the codebase.", "Migrate: best when long-term upstream maintenance matters more than minimizing short-term change."] },
        ],
      },
      {
        id: "next-steps",
        title: "What to do now",
        blocks: [
          { type: "paragraph", html: "Before changing anything, export and back up the system you know works. Preserve flow definitions, database state, custom components, provider settings, external integrations and a representative test set. Keep credentials in a proper secret store rather than inside migration documents." },
          { type: "list", items: ["Create a restorable backup.", "Document runtime and dependency versions.", "Choose an explicit maintenance or migration owner.", "Do not begin a new production dependency on the archived upstream unless you intentionally accept that burden."] },
        ],
      },
    ],
    sources: [
      { label: "Flowise sunset notice", url: "https://flowiseai.com/sunset" },
      { label: "Flowise GitHub repository", url: "https://github.com/FlowiseAI/Flowise" },
      { label: "Flowise sunset discussion", url: "https://github.com/FlowiseAI/Flowise/discussions/6727" },
      { label: "Flowise documentation", url: "https://docs.flowiseai.com/getting-started" },
    ],
    relatedPaths: ["/blog/migrate-from-flowise", "/blog/flowise-alternatives"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Flowise",
    targetSearchIntent: "Safely preserve a Flowise deployment, map dependencies, rebuild it on a maintained platform or fork, and cut over with validation.",
    targetQuery: "migrate from Flowise",
    parentSlug: "flowise-shutdown-end-of-life",
    slug: "migrate-from-flowise",
    title: "How to Migrate From Flowise After End of Life",
    metaTitle: "How to Migrate From Flowise After End of Life",
    metaDescription: "A practical Flowise EOL migration guide: back up flows, map dependencies, choose a target, rebuild behavior, test it and cut over safely.",
    h1: "How to Migrate From Flowise After End of Life",
    excerpt: "A Flowise migration should preserve behavior, permissions and failure handling—not just redraw the same boxes on a new canvas.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Flowise migration checklist from backup and inventory through testing and cutover.",
    sections: [
      {
        id: "preserve",
        title: "Preserve the working system first",
        blocks: [
          { type: "paragraph", html: "Freeze the known-good environment before you rebuild it. Record the Flowise version, runtime, Docker tag when applicable, database version, model identifiers, custom components and deployment configuration." },
          { type: "list", items: ["Back up the database and flow definitions.", "Export portable configuration where your deployment supports it.", "Keep secrets separate and record only where they are stored and how they are rotated."] },
        ],
      },
      {
        id: "inventory",
        title: "Map hidden dependencies",
        blocks: [
          { type: "paragraph", html: "The visible graph is only part of the system. Inventory models, vector stores, files, APIs, OAuth applications, webhooks, retry rules, schedules, queues, memory, state and idempotency requirements." },
          { type: "list", items: ["Models and tool schemas can behave differently on another platform.", "OAuth callback URLs and credentials often need to be recreated.", "State and side effects require explicit migration tests."] },
        ],
      },
      {
        id: "target",
        title: "Choose a target by workload",
        blocks: [
          { type: "paragraph", html: "Langflow is a natural evaluation target for visual agent construction, n8n for broader cross-application automation with AI steps, and Dify for a broader AI-application and plugin architecture. None should be assumed to import Flowise JSON as a one-click compatible migration." },
          { type: "list", items: ["Compare the actual capabilities your production flow uses.", "Build a node/capability migration matrix.", "Keep the model constant during platform tests when possible so you know what changed."] },
        ],
      },
      {
        id: "cutover",
        title: "Test before cutover",
        blocks: [
          { type: "paragraph", html: "Build a golden test set containing normal requests, edge cases, tool failures, expired credentials, rate limits and repeated requests that exercise idempotency. Parallel-test the replacement before moving all traffic." },
          { type: "list", items: ["Measure correctness, latency, tool reliability and cost.", "Keep the old deployment restorable during a rollback window.", "After cutover, revoke obsolete credentials and remove abandoned public endpoints."] },
        ],
      },
    ],
    sources: [
      { label: "Flowise sunset notice", url: "https://flowiseai.com/sunset" },
      { label: "Flowise migration documentation", url: "https://docs.flowiseai.com/migration-guide/cloud-migration" },
      { label: "Flowise repository", url: "https://github.com/FlowiseAI/Flowise" },
      { label: "Langflow agent documentation", url: "https://docs.langflow.org/components-agents" },
      { label: "Dify plugin documentation", url: "https://docs.dify.ai/en/develop-plugin/getting-started/choose-plugin-type" },
    ],
    relatedPaths: ["/blog/flowise-shutdown-end-of-life", "/blog/flowise-alternatives"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Flowise",
    targetSearchIntent: "Compare maintained alternatives to Flowise by visual agent building, business automation and AI-application architecture.",
    targetQuery: "Flowise alternatives",
    parentSlug: "flowise-shutdown-end-of-life",
    slug: "flowise-alternatives",
    title: "Best Flowise Alternatives After the 2026 Shutdown",
    metaTitle: "Best Flowise Alternatives After the 2026 Shutdown",
    metaDescription: "Compare Langflow, n8n and Dify after Flowise EOL by agent building, automation, integrations, extensibility and maintenance.",
    h1: "Best Flowise Alternatives After the 2026 Shutdown",
    excerpt: "The right Flowise replacement depends on what your workflows actually do. Langflow, n8n and Dify sit at different centers of gravity.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Flowise alternatives compared by visual agents, business automation and AI application use cases.",
    sections: [
      {
        id: "decision",
        title: "Start with the workload, not a winner badge",
        blocks: [
          { type: "paragraph", html: "There is no universal Flowise replacement. Some teams need a visual agent canvas, others need broad SaaS automation, and others are building a reusable AI application platform. Compare the system you have, not the screenshots of the products." },
          { type: "list", items: ["Langflow: evaluate first for visual AI-agent construction and MCP-oriented tooling.", "n8n: evaluate first when AI is one step inside broader business automation.", "Dify: evaluate first for AI applications, workflows, models, tools and plugin-driven extension."] },
        ],
      },
      {
        id: "langflow",
        title: "Langflow for agent-centric visual workflows",
        blocks: [
          { type: "paragraph", html: "Langflow's current documentation centers on agents, tools, models and MCP connectivity. It is conceptually close when the core Flowise job is visually constructing agent behavior." },
          { type: "list", items: ["Re-test memory and structured outputs.", "Map custom nodes rather than assuming equivalents.", "Validate provider and tool behavior with the same test inputs."] },
        ],
      },
      {
        id: "n8n-dify",
        title: "n8n and Dify solve different adjacent jobs",
        blocks: [
          { type: "paragraph", html: "n8n is strongest when triggers, schedules, SaaS actions and data movement dominate the workflow. Dify is worth evaluating when the system is becoming an application platform with reusable models, tools, knowledge and plugins." },
          { type: "list", items: ["Do not treat similar node names as proof of compatible runtime behavior.", "Check self-hosting, licensing and edition boundaries directly before committing.", "Keep Flowise itself as a fourth option only when you deliberately own the fork and maintenance burden."] },
        ],
      },
      {
        id: "proof",
        title: "Run a representative proof of concept",
        blocks: [
          { type: "paragraph", html: "Rebuild one meaningful production flow in the top two candidates and measure setup time, correctness, tool-call reliability, latency, observability, credential handling and operational complexity." },
          { type: "list", items: ["Use the same model where possible.", "Include an error path and a stateful or idempotent action.", "Choose the platform that matches the real workload rather than the longest feature checklist."] },
        ],
      },
    ],
    sources: [
      { label: "Flowise sunset notice", url: "https://flowiseai.com/sunset" },
      { label: "Langflow agent documentation", url: "https://docs.langflow.org/components-agents" },
      { label: "n8n security audit documentation", url: "https://docs.n8n.io/hosting/securing/security-audit/" },
      { label: "Dify plugin documentation", url: "https://docs.dify.ai/en/develop-plugin/getting-started/choose-plugin-type" },
    ],
    relatedPaths: ["/blog/flowise-shutdown-end-of-life", "/blog/migrate-from-flowise"],
  },
];
