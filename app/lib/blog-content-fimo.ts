import type { BlogArticle } from "./blog-types.ts";

const fimoSources = [
  { label: "Fimo — autonomous website platform", url: "https://fimo.ai/" },
  { label: "Fimo — custom agents", url: "https://fimo.ai/features/agents" },
  { label: "Fimo — deployment and hosting", url: "https://fimo.ai/features/deploy" },
  { label: "Fimo — Cursor comparison and current pricing", url: "https://fimo.ai/compare/cursor" },
];

export const fimoArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Fimo",
    targetSearchIntent: "Broad overview of Fimo's autonomous website platform, AI CMS, agents, pricing and availability",
    targetQuery: "Fimo",
    slug: "fimo-autonomous-website-platform",
    title: "Fimo: Autonomous Websites, AI CMS, Agents & Pricing",
    metaTitle: "Fimo: Autonomous Websites, AI CMS, Agents & Pricing",
    metaDescription: "Fimo turns real website code into an editable, agent-run website. See how its AI CMS, scheduled agents, pricing, hosting and review workflow work.",
    h1: "Fimo: Autonomous Websites, AI CMS and Website Agents Explained",
    excerpt: "Fimo is an autonomous website platform from the team behind Strapi that adds visual editing, reviewable agents, previews and managed deployment around a real codebase.",
    category: "Web",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Fimo autonomous website workflow showing a code repository, visual CMS, scheduled agents, preview branch and human review",
    sections: [
      { id: "what-fimo-is", title: "What Fimo is", blocks: [
        { type: "paragraph", html: "Fimo is an autonomous website platform built around real code rather than a closed site-builder export. Its September 2026 positioning is aimed at the work that starts after an AI coding tool has created a site: editing content, keeping pages current, running recurring audits and shipping changes safely." },
        { type: "paragraph", html: "Fimo does not replace Claude Code, Codex, Cursor or another coding agent. Instead, it sits on top of the same repository and adds a visual CMS, preview environments, hosting and agents that can propose recurring website changes." },
      ]},
      { id: "agents-and-review", title: "How Fimo agents work", blocks: [
        { type: "paragraph", html: "Fimo documents agents as plain files inside the repository, including GOAL.md, config.yaml and optional capabilities or scripts. Agents can run on schedules, events or manual triggers and work with the site's code, content and assets." },
        { type: "paragraph", html: "The important safety boundary is branch-based review. Each agent run gets its own branch and isolated environment, then leaves a report, preview and diff for a person to review. Fimo states that agent work does not touch production on its own." },
        { type: "note", html: "That review model is a product capability, not evidence that agent-generated SEO or content changes will improve rankings, traffic or revenue. Those outcomes still need independent measurement." },
      ]},
      { id: "cms-code-ownership", title: "Visual CMS without giving up code ownership", blocks: [
        { type: "paragraph", html: "Fimo's visual editor is designed so marketers or editors can change content in a live preview while the underlying structured content remains part of the codebase. Developers keep a versioned source of truth instead of handing the site to a separate closed CMS." },
        { type: "paragraph", html: "Fimo also says customers retain the real repository and Git history. That makes the platform relevant to teams that want non-developer editing and automation without losing portability." },
      ]},
      { id: "deployment", title: "Hosting, previews and deployment", blocks: [
        { type: "paragraph", html: "The documented CLI flow uses <code>fimo deploy</code> to create a preview. Fimo's deployment page says publishing main can be done with <code>fimo deploy --publish</code>, <code>fimo publish</code> or the Publish button in Studio." },
        { type: "paragraph", html: "Fimo says its managed hosting includes SSL, CDN delivery, preview URLs and publication history. Its current deployment documentation says custom domains are available on Pro." },
      ]},
      { id: "pricing", title: "Current Fimo pricing", blocks: [
        { type: "paragraph", html: "Fimo's current first-party comparison material lists Free at $0, Pay as you go at a $0 monthly base plus usage, Pro at $149 per month, and Enterprise with custom pricing. Pay-as-you-go usage is currently listed at $2 per 1,000 AI credits, $0.75 per agent-hour and $0.15 per GB, while Pro is described as bundling larger allowances at lower unit rates." },
        { type: "paragraph", html: "The agents page separately states that 1,000 AI credits equal $1 for agent billing and that Free includes one active schedule running at most once per day, while Pro includes 20 active schedules with intervals as short as five minutes. Because Fimo's pricing model is usage-based and launch-state limits can change, verify the checkout and current plan pages before budgeting." },
      ]},
      { id: "who-it-is-for", title: "Who Fimo is for", blocks: [
        { type: "paragraph", html: "The clearest fit is a team already working from a modern repository and using developers or AI coding tools, but wanting marketers and operators to edit content and run recurring website tasks without turning every change into a developer ticket." },
        { type: "paragraph", html: "For a practical onboarding path, read <a href=\"/blog/how-to-use-fimo-claude-code-codex-cursor\">how to use Fimo with Claude Code, Codex or Cursor</a>." },
      ]},
      { id: "limitations", title: "Limitations and open questions", blocks: [
        { type: "paragraph", html: "Fimo's current product documentation is detailed enough to verify its agent, CMS and deployment model, but independent evidence on long-term agent reliability, SEO lift and production outcomes is still limited. Treat those outcomes as unproven until measured on a real site." },
        { type: "paragraph", html: "Framework support, quotas, included credits, bandwidth allowances and enterprise controls can also change. Recheck first-party documentation before making migration or purchasing decisions." },
      ]},
    ],
    sources: fimoSources,
    relatedPaths: [],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Fimo",
    targetSearchIntent: "Set up Fimo on an existing AI-built codebase and connect it to Claude Code, Codex or Cursor",
    targetQuery: "how to use Fimo",
    parentSlug: "fimo-autonomous-website-platform",
    slug: "how-to-use-fimo-claude-code-codex-cursor",
    title: "How to Use Fimo with Claude Code, Codex or Cursor",
    metaTitle: "How to Use Fimo with Claude Code, Codex or Cursor",
    metaDescription: "Set up Fimo on an AI-built website, connect your coding agent, create a preview, add agents and publish without giving up code ownership.",
    h1: "How to Use Fimo with Claude Code, Codex or Cursor",
    excerpt: "A safe Fimo setup keeps your existing repository, creates a preview first, tests visual editing and only then adds narrow, reviewable agents.",
    category: "Web",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Fimo setup workflow showing npx fimo init, a preview deployment, a reviewable agent branch and a human approval step",
    sections: [
      { id: "start", title: "1. Start from a working repository", blocks: [
        { type: "paragraph", html: "Fimo is designed to work on top of an existing codebase. Before integrating it, make sure the site builds cleanly and commit the current working state so you have a clear rollback point." },
        { type: "paragraph", html: "For the broader product model, pricing and agent architecture, read the main <a href=\"/blog/fimo-autonomous-website-platform\">Fimo autonomous website guide</a>." },
      ]},
      { id: "connect", title: "2. Connect your coding agent", blocks: [
        { type: "paragraph", html: "Fimo's public onboarding tells users to copy its setup prompt into Claude Code, Codex or Cursor. The coding agent then runs <code>npx fimo@latest init</code> on the site and creates the first preview." },
        { type: "paragraph", html: "Treat the initialization as a normal dependency and configuration change. Review the resulting diff, confirm which files were added or modified, and run the existing project checks again." },
      ]},
      { id: "preview", title: "3. Create and verify a preview", blocks: [
        { type: "paragraph", html: "Use <code>fimo deploy</code> to create a preview. Fimo's deployment documentation says this pushes the site and its agent definitions to an isolated preview environment without publishing production." },
        { type: "paragraph", html: "Check routes, forms, metadata, canonical URLs, images and any search-sensitive rendering before moving on. A successful build is not the same as a production-safe content or SEO change." },
      ]},
      { id: "visual-editing", title: "4. Test visual editing", blocks: [
        { type: "paragraph", html: "Open Fimo Studio and make a harmless content change such as a heading or CTA label. Verify that the resulting edit is understandable in the repository and remains versionable outside the interface." },
        { type: "paragraph", html: "This step confirms that the CMS layer fits your team's code structure before automation is introduced." },
      ]},
      { id: "first-agent", title: "5. Add one narrow agent", blocks: [
        { type: "paragraph", html: "Fimo agents live in the repository as plain files such as GOAL.md and config.yaml. Start with a task that has an obvious pass/fail condition, such as finding broken links, flagging missing alt text or checking stale dates." },
        { type: "note", html: "Start manually. Fimo supports scheduled and event-triggered agents, but a recurring schedule is safer after you have reviewed several useful runs and understand the diffs they produce." },
      ]},
      { id: "review", title: "6. Review every run before merge", blocks: [
        { type: "paragraph", html: "Each Fimo agent run gets its own branch and sandbox. Review the report, preview and code diff before merging. For SEO work, inspect canonical tags, robots directives, structured data, headings and internal links especially carefully." },
        { type: "paragraph", html: "Fimo states that agents do not publish on their own. Production changes only when a person merges and publishes the approved state." },
      ]},
      { id: "publish", title: "7. Publish only after validation", blocks: [
        { type: "paragraph", html: "Fimo documents <code>fimo deploy --publish</code> as one path to publishing main, alongside <code>fimo publish</code> and the Studio Publish button. Use production checks after publishing instead of assuming the preview guarantees the live result." },
        { type: "paragraph", html: "For an indexed site, recheck status codes, canonical URLs, structured data, important forms and analytics after deployment. Then expand to additional agents gradually rather than granting broad site-wide authority on day one." },
      ]},
    ],
    sources: fimoSources,
    relatedPaths: ["/blog/fimo-autonomous-website-platform"],
  },
];
