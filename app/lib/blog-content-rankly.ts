import type { BlogArticle } from "./blog-types.ts";

const ranklySources = [
  { label: "Nyxen — Launching Rankly", url: "https://nyxen.in/blog/i-built-rankly-search-visibility-engine" },
  { label: "Rankly — Website Audit", url: "https://rankly.nyxen.in/" },
  { label: "Rankly — About", url: "https://rankly.nyxen.in/about" },
  { label: "Rankly — Website Analyzer", url: "https://rankly.nyxen.in/website-analyzer" },
  { label: "Rankly — AEO Audit", url: "https://rankly.nyxen.in/aeo-audit" },
  { label: "Rankly — GEO Analyzer", url: "https://rankly.nyxen.in/geo-analyzer" },
  { label: "Rankly — AI Visibility", url: "https://rankly.nyxen.in/ai-visibility" },
];

export const ranklyArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Rankly",
    targetSearchIntent: "Understand what Rankly is, how its SEO/AEO/GEO website audit works, what its scores mean, current free-audit access and limitations, and how to interpret results without confusing readiness with guaranteed rankings or AI citations.",
    targetQuery: "Rankly",
    slug: "rankly-seo-aeo-geo-website-audit",
    title: "Rankly: SEO, AEO & GEO Website Auditor Explained",
    metaTitle: "Rankly: SEO, AEO & GEO Website Auditor Explained",
    metaDescription: "Rankly audits websites across SEO, AEO and GEO. See how its scoring works, what the free audit checks, its limits, and how to interpret the results.",
    h1: "Rankly: SEO, AEO & GEO Website Visibility Auditor",
    excerpt: "Rankly is Nyxen’s website visibility auditor for traditional search, answer-engine readiness and generative discoverability, using deterministic checks against public website signals.",
    category: "SEO",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Rankly website audit across SEO, AEO and GEO visibility signals",
    sections: [
      { id: "what-is-rankly", title: "What is Rankly?", blocks: [
        { type: "paragraph", html: "Rankly launched publicly on September 7, 2026 as a read-only website visibility auditor built by Nyxen. It evaluates three related layers: conventional search visibility, answer-engine readiness and generative-system discoverability." },
        { type: "paragraph", html: "The service starts from a public URL and inspects observable website signals rather than private search-engine or AI-system internals. That makes it a diagnostic tool, not a guarantee that a page will rank or be cited." },
      ]},
      { id: "three-pillars", title: "What Rankly checks across SEO, AEO and GEO", blocks: [
        { type: "list", items: ["SEO: crawlability, indexability, metadata, headings, canonical signals, sitemaps and other technical search fundamentals.", "AEO: question-oriented structure, extractable answers, FAQ/schema alignment and other answer-readiness signals.", "GEO: entity clarity, self-contained claims, attribution readiness and structured context that can help machine interpretation."] },
        { type: "paragraph", html: "These pillars are related but not interchangeable. A technically crawlable site can still have vague answers, while a well-written page can still suffer from broken canonicals, robots rules or invalid structured data." },
      ]},
      { id: "scoring", title: "How Rankly calculates its scores", blocks: [
        { type: "paragraph", html: "Nyxen says Rankly uses 40 deterministic checks written in TypeScript. The launch documentation describes checks around HTTP responses, security headers, canonical bindings, Open Graph metadata, schema integrity, document structure and content extractability." },
        { type: "paragraph", html: "Google Gemini is used as an explanation and remediation layer, but Nyxen says it does not alter the underlying scores. Foundational crawl failures can cap scores so cosmetic strengths do not hide serious access problems." },
      ]},
      { id: "free-access", title: "Is Rankly free?", blocks: [
        { type: "paragraph", html: "Rankly currently says the first public website audit is free and does not require an account or credit card. Creating a free account unlocks saved report history, additional scans and shareable report links." },
        { type: "paragraph", html: "The live product also documents a seven-day per-domain cooldown for public audits. Submitting the same domain inside that window can return the existing verified report instead of running a new crawl." },
        { type: "note", html: "No paid pricing table was verified in the primary sources checked on September 7, 2026. Do not infer a Pro price, monthly quota or paid-plan feature set from the free launch flow." },
      ]},
      { id: "limits", title: "What Rankly can and cannot prove", blocks: [
        { type: "paragraph", html: "Rankly can surface visible technical, structural and content-readiness problems. It can help diagnose crawl/index issues, unclear headings, weak answer structure, schema problems, ambiguous entities and attribution gaps." },
        { type: "paragraph", html: "It cannot see proprietary ranking algorithms or prompt distributions, and it does not guarantee Google rankings, AI citations, indexing dates or traffic gains. A high score means more of Rankly’s documented rules passed, not that a specific search or AI system will surface the site." },
      ]},
      { id: "traditional-tools", title: "Rankly versus a traditional SEO suite", blocks: [
        { type: "paragraph", html: "Rankly should not automatically be treated as a replacement for a full SEO suite. Large platforms commonly add keyword databases, backlink indexes, competitor research, rank tracking and historical datasets that are different from Rankly’s documented website-audit job." },
        { type: "paragraph", html: "The practical distinction is that a keyword platform can help answer what demand exists and who ranks, while Rankly is aimed at whether the public website is structurally ready to be understood across search, answer and generative systems." },
      ]},
      { id: "workflow", title: "A sensible way to use a Rankly report", blocks: [
        { type: "list", ordered: true, items: ["Validate foundational crawl, HTTPS, canonical, robots and sitemap findings first.", "Review titles, descriptions, headings and page structure.", "Improve important answers that are vague, buried or difficult to extract.", "Clarify entities, claims, attribution and structured data where appropriate.", "Verify every meaningful finding directly on the production site before changing code.", "Measure real outcomes separately in Search Console, analytics and referral/citation evidence."] },
        { type: "paragraph", html: "The dedicated Rankly audit guide below walks through this workflow step by step and explains how to prioritize fixes without chasing a vanity score." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Rankly is an early attempt to bring SEO, AEO and GEO readiness into one evidence-based website audit. Its strongest editorial boundary is that deterministic checks drive the score while AI explains findings rather than inventing the grade." },
        { type: "paragraph", html: "Use the report as a triage system. Fix genuine access and clarity problems, then validate whether search visibility, user behavior and business outcomes actually improve." },
      ]},
    ],
    sources: ranklySources,
    relatedPaths: ["/blog/how-to-use-rankly-seo-aeo-geo-audit"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Rankly",
    targetSearchIntent: "Run a Rankly website audit, interpret SEO/AEO/GEO findings, prioritize fixes, validate recommendations on the live site and recheck safely without treating readiness scores as guaranteed outcomes.",
    targetQuery: "how to use Rankly",
    parentSlug: "rankly-seo-aeo-geo-website-audit",
    slug: "how-to-use-rankly-seo-aeo-geo-audit",
    title: "How to Use Rankly: Run and Interpret an SEO, AEO & GEO Audit",
    metaTitle: "How to Use Rankly for SEO, AEO & GEO Audits",
    metaDescription: "Learn how to run a Rankly audit, interpret SEO/AEO/GEO findings, prioritize fixes, avoid misleading score conclusions, and recheck your site.",
    h1: "How to Use Rankly for an SEO, AEO & GEO Website Audit",
    excerpt: "Use Rankly as a structured evidence and triage system: audit the right production URL, inspect the findings behind each score, fix verified problems in priority order and measure real outcomes elsewhere.",
    category: "SEO",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Rankly audit workflow from production website through SEO AEO GEO findings to validation",
    sections: [
      { id: "production-url", title: "1. Audit the production URL you actually care about", blocks: [
        { type: "paragraph", html: "Start with the canonical public HTTPS URL rather than a preview deployment, staging hostname or outdated redirecting domain. Rankly performs read-only server-side checks against what the submitted public URL exposes." },
        { type: "paragraph", html: "Before treating a result as evidence, confirm that the audited URL resolves to the same production site users and crawlers are meant to reach." },
      ]},
      { id: "evidence-first", title: "2. Read the evidence before the headline score", blocks: [
        { type: "paragraph", html: "Rankly says its scores come from deterministic TypeScript checks against observable conditions. The optional AI layer can explain the finding but does not change the score." },
        { type: "paragraph", html: "That means the finding matters more than the number. A score summarizes how the site performed against Rankly’s rules; the evidence tells you what condition was actually observed and whether it is relevant." },
      ]},
      { id: "seo-first", title: "3. Interpret the SEO section first", blocks: [
        { type: "list", items: ["HTTP and HTTPS behavior", "crawlability and indexability", "canonical signals", "robots directives", "sitemap availability", "titles and descriptions", "heading structure", "other technical findings shown in the report"] },
        { type: "paragraph", html: "Prioritize genuine access and indexing blockers before cosmetic improvements. Validate every warning because a robots rule, redirect or canonical can be intentional in the right architecture." },
      ]},
      { id: "aeo", title: "4. Read AEO findings as answer-readiness checks", blocks: [
        { type: "paragraph", html: "For important customer questions, ask whether the page states the question clearly, answers it directly, keeps the answer understandable when extracted, and aligns any structured data with the visible content." },
        { type: "paragraph", html: "Do not manufacture giant FAQ sections only to raise a score. The goal is clearer communication first; machine extractability should follow from useful structure and direct answers." },
      ]},
      { id: "geo", title: "5. Treat GEO as readiness, not citation proof", blocks: [
        { type: "paragraph", html: "Use GEO findings to review brand and product naming, entity relationships, attribution, self-contained claims and structured data. Ask whether a system reading the page without your internal brand context could identify who is being discussed and what each claim refers to." },
        { type: "paragraph", html: "Do not interpret a high GEO score as proof that ChatGPT, Gemini, Perplexity or another system will cite the site. Rankly explicitly says it cannot guarantee AI citations or access proprietary ranking systems." },
      ]},
      { id: "prioritize", title: "6. Prioritize real problems instead of score-chasing", blocks: [
        { type: "list", ordered: true, items: ["Access and indexability", "Meaning and page structure", "Answer clarity", "Entity and attribution clarity", "Lower-impact polish"] },
        { type: "paragraph", html: "This priority order is practical editorial guidance rather than Rankly’s official scoring formula. Business context still matters; a lower-scoring issue on a critical conversion page may matter more than a higher-scoring informational page nobody visits." },
      ]},
      { id: "validate", title: "7. Validate every important finding on the live site", blocks: [
        { type: "paragraph", html: "Open the affected production page, inspect the visible content and response behavior, confirm whether the condition is intentional, understand the user and indexing impact, and only then implement a fix." },
        { type: "paragraph", html: "This is especially important for canonicals, robots directives, redirects and structured data, where a technically valid change can still be strategically wrong." },
      ]},
      { id: "cooldown", title: "8. Respect the current seven-day public-audit cooldown", blocks: [
        { type: "paragraph", html: "Rankly currently documents one new public audit per domain every seven days. A repeat request inside that window can return the existing report without recrawling the site." },
        { type: "paragraph", html: "Batch meaningful changes, keep your own change log and re-audit when a new scan can produce useful comparative information. Recheck the live documentation if Rankly changes its launch-state limits." },
      ]},
      { id: "measure", title: "9. Measure real outcomes outside Rankly", blocks: [
        { type: "list", items: ["Google Search Console impressions, clicks, queries and indexing state", "analytics sessions and landing-page behavior", "conversions and leads", "rank tracking where relevant", "AI/search referrals where attribution is available", "directly observed AI citations or mentions when verifiable"] },
        { type: "paragraph", html: "A better Rankly score shows that the site satisfies more of Rankly’s diagnostic rules. Whether that produces more visibility or business value still needs independent measurement." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "The best way to use Rankly is as a triage and evidence system, not a scoreboard. Audit the correct production URL, investigate the underlying findings, fix genuine problems, verify changes and measure real outcomes separately." },
        { type: "paragraph", html: "For the product’s scoring method, launch access and limitations, use the main Rankly overview linked below." },
      ]},
    ],
    sources: ranklySources,
    relatedPaths: ["/blog/rankly-seo-aeo-geo-website-audit"],
  },
];
