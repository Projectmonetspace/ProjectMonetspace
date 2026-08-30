import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-30";

const staatsMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Staats",
  targetSearchIntent: "Understand what Staats is, how its agent-native website analytics and MCP workflow work, current pricing, privacy positioning, supported coding agents and where it fits beside traditional analytics tools.",
  targetQuery: "Staats analytics",
  slug: "staats-agent-native-website-analytics",
  title: "Staats Analytics: Agent-Native Website Analytics via MCP",
  metaTitle: "Staats Analytics: Agent-Native Website Analytics via MCP",
  metaDescription: "Staats is dashboard-less website analytics built for coding agents via MCP. See how it tracks deploys, funnels and conversions, plus pricing, privacy and supported agents.",
  h1: "What Is Staats? Agent-Native Website Analytics for Coding Agents",
  excerpt: "Staats connects production website analytics to coding agents through MCP so teams can measure deploys, funnels and conversions inside the same workflow where they ship code.",
  category: "Web",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a coding-agent conversation connected through MCP to website traffic, funnel and deploy signals",
  sections: [
    { id: "what-it-is", title: "What Staats is", blocks: [
      { type: "paragraph", html: "Staats is an emerging website-analytics product built around a different interface assumption: instead of opening an analytics dashboard, you ask a coding agent what happened after you shipped. Its official site describes a roughly 1.5KB tracker plus a Model Context Protocol server that brings traffic, referrers, conversions and funnels into the agent conversation." },
      { type: "paragraph", html: "The practical idea is a tighter build-measure-decide loop. An agent can help ship a change, record the deployment, inspect what changed in production and use that evidence when discussing the next iteration. Traffic sources, seasonality and simultaneous changes can still confound simple before-and-after comparisons." },
    ]},
    { id: "mcp-workflow", title: "MCP, instrumentation and deploy measurement", blocks: [
      { type: "paragraph", html: "Staats documents native MCP support for clients including Claude Code, Cursor, Windsurf, Codex and compatible VS Code agent setups. Its agent-workflow documentation includes tools for overviews, change detection, annotations, before-and-after comparisons, funnels and durable site context." },
      { type: "paragraph", html: "Interaction tracking can be added while code is being written using a data-track attribute, with window.track() available for custom triggers. Deploy annotations can include a description, commit and modified routes so later analysis can be scoped to the relevant release." },
    ]},
    { id: "privacy-pricing", title: "Privacy positioning and current pricing", blocks: [
      { type: "paragraph", html: "Staats says its tracker is cookieless, does not persist IP addresses or device data, and uses daily-rotating salted visitor hashes plus timezone-based geography. Those are vendor-described product claims, not a legal compliance certification." },
      { type: "paragraph", html: "As rechecked on August 30, 2026, the official site lists Free at $0/month for 10,000 events, Pro at $9 for 100,000, Growth at $29 for 1,000,000 and Scale at $99 for 10,000,000. The site says all tiers include MCP tools and features, with plan-specific site and history limits." },
    ]},
    { id: "fit", title: "Where Staats fits", blocks: [
      { type: "paragraph", html: "Staats explicitly says it can run alongside Google Analytics, PostHog or Plausible. Its differentiation is therefore less about replacing every analytics stack and more about putting production evidence directly in the coding-agent interface used by developers and product teams." },
      { type: "paragraph", html: "Traditional analytics platforms remain stronger when an organization needs mature dashboards, established attribution workflows, governance and broad reporting ecosystems. Staats is most interesting when the primary operator is already working through coding agents." },
    ]},
    { id: "next", title: "What to do next", blocks: [
      { type: "paragraph", html: "The main test is whether agent-native measurement actually improves decisions without reducing measurement rigor. Independent adoption and reliability evidence are still limited because Staats is new, so vendor claims about proactive recommendations should remain attributed." },
      { type: "paragraph", html: "For the practical connection, tracker and deploy-annotation workflow, continue with <a href=\"/blog/how-to-use-staats-analytics-mcp\">the Staats setup guide</a>." },
    ]},
  ],
  sources: [
    { label: "Staats — official product and pricing", url: "https://www.staats.ai/" },
    { label: "Staats Docs — Agent Workflows", url: "https://www.staats.ai/docs/agent-workflows.html" },
    { label: "Product Hunt — Staats", url: "https://www.producthunt.com/products/staats-3" },
  ],
  relatedPaths: ["/blog/how-to-use-staats-analytics-mcp"],
};

const staatsSetup: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Staats",
  targetSearchIntent: "Connect Staats through MCP, install its tracker, instrument important events, record deploy annotations and ask a coding agent to analyze website performance.",
  targetQuery: "how to use Staats analytics",
  parentSlug: "staats-agent-native-website-analytics",
  slug: "how-to-use-staats-analytics-mcp",
  title: "How to Use Staats Analytics with Claude Code, Cursor & Codex",
  metaTitle: "How to Use Staats Analytics with Claude Code, Cursor & Codex",
  metaDescription: "Learn how Staats connects website analytics to coding agents through MCP, including tracker setup, event instrumentation, deploy annotations, funnels and practical prompts.",
  h1: "How to Set Up and Use Staats Analytics with Your Coding Agent",
  excerpt: "Connect Staats through MCP, instrument meaningful website events, annotate deploys and make your coding agent check production evidence before proposing the next change.",
  category: "Web",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet setup diagram showing MCP connection, website tracker, events, deploy annotation and agent analysis",
  sections: [
    { id: "connect", title: "Connect Staats through MCP", blocks: [
      { type: "paragraph", html: "Start with the <a href=\"/blog/staats-agent-native-website-analytics\">Staats overview</a>, then create your account and copy the account-specific MCP connection snippet. Staats says the same service works with MCP-capable clients such as Claude Code, Cursor, Windsurf and Codex." },
      { type: "paragraph", html: "Keep account connection values out of public repositories and screenshots. Before an agent creates a new analytics property, ask it to list existing sites so repeated automation does not create duplicates." },
    ]},
    { id: "tracker", title: "Install the tracker and define events", blocks: [
      { type: "paragraph", html: "Staats describes its tracker as roughly 1.5KB and cookieless. Place it using the framework's normal script-loading mechanism, then verify that real production events arrive rather than assuming a successful build means analytics is working." },
      { type: "paragraph", html: "Use data-track for meaningful button and link interactions and window.track() when a custom trigger is needed. Prefer a small event vocabulary tied to real decisions such as form opens, form submissions, checkout starts or completed signups." },
    ]},
    { id: "context", title: "Store context and annotate meaningful deploys", blocks: [
      { type: "paragraph", html: "The documented update_site_context workflow can preserve audience, conversion goals, event definitions, funnel steps and notes between agent sessions. That reduces interpretation drift when multiple people or agents touch the project." },
      { type: "paragraph", html: "Record meaningful releases with a description, commit and affected routes. Later, a comparison around that annotation has a clearer measurement anchor. Avoid annotating every tiny commit if several pushes belong to one experiment." },
    ]},
    { id: "analyze", title: "Analyze changes and funnels carefully", blocks: [
      { type: "paragraph", html: "Useful questions include whether a hero change affected signups, which routes changed after a navigation update, or where visitors drop between landing page and checkout. Ask for both raw stage counts and rates when analyzing a funnel." },
      { type: "paragraph", html: "A before-and-after movement is correlation, not automatic proof of causation. Campaign spend, viral referrals, seasonality, outages and overlapping releases can all move the same metrics." },
    ]},
    { id: "rollout", title: "A practical first-week rollout", blocks: [
      { type: "paragraph", html: "First connect MCP and verify traffic. Next define the primary conversion and instrument the important actions. Store those definitions in site context. On the next meaningful release, create an annotation. After enough traffic accumulates, ask for an overview, change analysis and funnel breakdown." },
      { type: "paragraph", html: "Staats says it can coexist with Google Analytics, PostHog and Plausible, which makes a parallel trial safer than immediately replacing an established analytics stack. Privacy claims remain vendor-described; evaluate the complete tracking stack for your own requirements." },
    ]},
  ],
  sources: [
    { label: "Staats — official setup and pricing", url: "https://www.staats.ai/" },
    { label: "Staats Docs — Agent Workflows", url: "https://www.staats.ai/docs/agent-workflows.html" },
    { label: "Product Hunt — Staats", url: "https://www.producthunt.com/products/staats-3" },
  ],
  relatedPaths: ["/blog/staats-agent-native-website-analytics"],
};

export const staatsArticles: BlogArticle[] = [staatsMain, staatsSetup];
