import type { BlogArticle } from "./blog-types.ts";

export const marketingSkillsArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Marketing Skills",
    targetSearchIntent: "Understand Corey Haines' Marketing Skills library, its v2 changes, supported agents, workflows, installation and limits.",
    targetQuery: "Marketing Skills",
    slug: "marketing-skills-ai-agents",
    title: "Marketing Skills for AI Agents: Claude Code, Codex & Cursor Guide",
    metaTitle: "Marketing Skills for AI Agents: Claude Code, Codex & Cursor",
    metaDescription: "What Marketing Skills is, what changed in v2, which agents it supports, its SEO/CRO/copy/analytics workflows, installation and practical limitations.",
    h1: "Marketing Skills for AI Agents: What It Is, v2 Changes & How It Works",
    excerpt: "Marketing Skills packages repeatable SEO, CRO, copy, analytics, paid and GTM workflows into inspectable Agent Skills.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Marketing Skills v2 feeding SEO, CRO, content, paid media, growth and GTM workflows across AI coding agents.",
    sections: [
      {
        id: "what",
        title: "What Marketing Skills is",
        blocks: [
          { type: "paragraph", html: "Marketing Skills is an MIT-licensed open-source collection of Markdown-based Agent Skills created by Corey Haines. Its current README documents support for Claude Code, OpenAI Codex, Cursor, Windsurf and hosts that implement the Agent Skills specification." },
          { type: "list", items: ["Skills cover SEO, AI SEO, CRO, copywriting, analytics, paid ads, social, launch, pricing, retention and RevOps.", "The product-marketing skill provides shared context used by downstream workflows.", "The library is instructions and workflow structure, not a standalone AI model or SaaS dashboard."] },
        ],
      },
      {
        id: "v2",
        title: "What changed in v2",
        blocks: [
          { type: "paragraph", html: "The current v2 migration section documents 17 renamed skills, consolidation of page-cro and form-cro into cro, and a move toward a cross-agent .agents/product-marketing.md context file." },
          { type: "list", items: ["Old v1 folders can remain beside new names after reinstalling.", "The current README should be treated as the live rename map.", "The shared .agents layout makes context less tied to one agent host."] },
        ],
      },
      {
        id: "install",
        title: "How to install and use it",
        blocks: [
          { type: "paragraph", html: "The recommended cross-agent route is npx skills add coreyhaines31/marketingskills. The project also documents selected-skill installs, a Claude Code plugin path, clone/submodule workflows and SkillKit." },
          { type: "list", items: ["Install only the workflows you need if a full library is unnecessary.", "Populate accurate product-marketing context before expecting good downstream work.", "Verify the agent actually discovers the installed skill rather than answering generically."] },
        ],
      },
      {
        id: "limits",
        title: "What a skill library does not guarantee",
        blocks: [
          { type: "paragraph", html: "A skill can make a process more repeatable without making every output correct. The underlying model can still hallucinate facts, misread analytics or suggest outdated platform tactics." },
          { type: "list", items: ["Keep publishing, ad-budget and production changes behind appropriate review.", "Treat GitHub popularity as an attention signal, not proof of marketing performance.", "Model usage, APIs and connected tools can still carry costs even though the library itself is open source."] },
        ],
      },
    ],
    sources: [
      { label: "Marketing Skills repository", url: "https://github.com/coreyhaines31/marketingskills" },
      { label: "Marketing Skills README", url: "https://github.com/coreyhaines31/marketingskills/blob/main/README.md" },
      { label: "Agent Skills specification", url: "https://agentskills.io" },
      { label: "Vercel Skills CLI", url: "https://github.com/vercel-labs/skills" },
    ],
    relatedPaths: ["/blog/install-marketing-skills-claude-code-codex-cursor", "/blog/marketing-skills-v2-migration"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Marketing Skills",
    targetSearchIntent: "Upgrade a Marketing Skills v1 installation to v2 without stale renamed skills or lost product-marketing context.",
    targetQuery: "Marketing Skills v2 migration",
    parentSlug: "marketing-skills-ai-agents",
    slug: "marketing-skills-v2-migration",
    title: "Marketing Skills v2 Migration Guide: Rename Old Skills Safely",
    metaTitle: "Marketing Skills v2 Migration: Rename Old Skills Safely",
    metaDescription: "Upgrade Marketing Skills v1 to v2 safely: back up customizations, remove stale renamed folders, migrate product-marketing context and verify the new layout.",
    h1: "Marketing Skills v2 Migration Guide: Rename Old Skills Safely",
    excerpt: "Marketing Skills v2 changes names and paths, so reinstalling without cleanup can leave legacy folders beside the new canonical skills.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Marketing Skills v1 to v2 folder migration from legacy skill names and Claude-specific context to the current agents layout.",
    sections: [
      {
        id: "why",
        title: "Why v2 needs a real migration",
        blocks: [
          { type: "paragraph", html: "The current README says v2 renames 17 skills and consolidates page-cro plus form-cro into cro. A normal reinstall can therefore leave stale v1 folders next to the new canonical names." },
          { type: "list", items: ["Back up any local custom skill edits before deletion.", "Record the current repository commit or installed version.", "Use the live upstream README as the rename source instead of an old article copy."] },
        ],
      },
      {
        id: "renames",
        title: "Clean up legacy names",
        blocks: [
          { type: "paragraph", html: "Examples in the current migration map include analytics-tracking to analytics, paid-ads to ads, schema-markup to schema, social-content to social and launch-strategy to launch. The exact list can evolve." },
          { type: "list", items: ["Remove only legacy folders you have verified are upstream copies.", "Reconcile custom local changes before cleanup.", "Remember that page-cro and form-cro both converge into the broader cro skill."] },
        ],
      },
      {
        id: "context",
        title: "Move shared product context deliberately",
        blocks: [
          { type: "paragraph", html: "The current structure centers shared product context on .agents/product-marketing.md. Older Claude-specific paths may still be checked as fallbacks, but new installations should follow the current cross-agent layout." },
          { type: "list", items: ["Do not overwrite two different legacy context files blindly.", "Keep one canonical product-marketing document after reconciliation.", "Review the git diff so the migration can be audited or rolled back."] },
        ],
      },
      {
        id: "verify",
        title: "Reinstall and verify",
        blocks: [
          { type: "paragraph", html: "Reinstall with the current supported method, then inspect installed folders and run one low-risk task through a renamed skill. Confirm the agent reads the new product-marketing context." },
          { type: "list", items: ["Check old names are gone and new names are present.", "Test at least one renamed workflow.", "Commit the migration after verifying behavior so rollback remains straightforward."] },
        ],
      },
    ],
    sources: [
      { label: "Marketing Skills repository", url: "https://github.com/coreyhaines31/marketingskills" },
      { label: "Current v2 migration README", url: "https://github.com/coreyhaines31/marketingskills/blob/main/README.md" },
      { label: "Current skill tree", url: "https://github.com/coreyhaines31/marketingskills/tree/main/skills" },
      { label: "Product marketing skill", url: "https://github.com/coreyhaines31/marketingskills/blob/main/skills/product-marketing/SKILL.md" },
    ],
    relatedPaths: ["/blog/marketing-skills-ai-agents", "/blog/install-marketing-skills-claude-code-codex-cursor"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Marketing Skills",
    targetSearchIntent: "Install Marketing Skills in Claude Code, OpenAI Codex, Cursor, Windsurf or another compatible Agent Skills environment.",
    targetQuery: "how to install Marketing Skills",
    parentSlug: "marketing-skills-ai-agents",
    slug: "install-marketing-skills-claude-code-codex-cursor",
    title: "How to Install Marketing Skills for Claude Code, Codex & Cursor",
    metaTitle: "Install Marketing Skills for Claude Code, Codex & Cursor",
    metaDescription: "Install Marketing Skills with the Skills CLI, Claude Code plugin, git or SkillKit, then verify agent discovery and shared product context.",
    h1: "How to Install Marketing Skills for Claude Code, Codex & Cursor",
    excerpt: "The current repository recommends the Skills CLI for cross-agent installation and documents a Claude Code-specific target for non-interactive installs.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Terminal installing Marketing Skills for Claude Code, Codex and Cursor with a shared Agent Skills directory.",
    sections: [
      {
        id: "cli",
        title: "Recommended Skills CLI installation",
        blocks: [
          { type: "paragraph", html: "The current README recommends npx skills add coreyhaines31/marketingskills. You can install the whole library, list available skills, or select only specific workflows." },
          { type: "list", items: ["Install all with npx skills add coreyhaines31/marketingskills.", "Install selected skills with the --skill option.", "List the library before installing when you only need a narrow subset."] },
        ],
      },
      {
        id: "claude",
        title: "Claude Code and other install paths",
        blocks: [
          { type: "paragraph", html: "When installation runs non-interactively inside an agent session, the CLI may target the universal .agents/skills directory. The current README documents explicitly targeting Claude Code with -a claude-code when that host-specific location is required." },
          { type: "list", items: ["Claude Code also has a documented plugin installation route.", "Git clone and git submodule are useful when you want version-controlled source.", "SkillKit is documented as another multi-agent option."] },
        ],
      },
      {
        id: "context",
        title: "Set up shared marketing context",
        blocks: [
          { type: "paragraph", html: "The library expects useful product, audience and positioning context. The v2 layout centers that shared information on .agents/product-marketing.md so compatible hosts can reuse it." },
          { type: "list", items: ["Populate real product facts before asking for downstream marketing work.", "Do not use a skill file as evidence for claims about your market.", "Keep client-specific or sensitive information within the appropriate project boundary."] },
        ],
      },
      {
        id: "test",
        title: "Verify the installation safely",
        blocks: [
          { type: "paragraph", html: "After installation, ask the agent to identify installed marketing skills and run a low-risk analysis. Confirm it is loading the intended skill and context instead of producing generic advice." },
          { type: "list", items: ["If Claude Code cannot see a skill, inspect the install destination and use the documented explicit target.", "If old and new folders coexist, follow the v2 migration guide rather than deleting blindly.", "Keep publishing, outreach, ad and production changes human-reviewed until the workflow is trusted."] },
        ],
      },
    ],
    sources: [
      { label: "Marketing Skills repository", url: "https://github.com/coreyhaines31/marketingskills" },
      { label: "Marketing Skills installation README", url: "https://github.com/coreyhaines31/marketingskills/blob/main/README.md" },
      { label: "Vercel Skills CLI", url: "https://github.com/vercel-labs/skills" },
      { label: "Agent Skills specification", url: "https://agentskills.io" },
    ],
    relatedPaths: ["/blog/marketing-skills-ai-agents", "/blog/marketing-skills-v2-migration"],
  },
];
