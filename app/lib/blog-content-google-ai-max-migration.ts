import type { BlogArticle } from "./blog-types.ts";

const googleAiMaxSources = [
  {
    label: "Google Ads Developer Blog — Migrate Campaign-level Broad Match and Automatically Created Assets to AI Max",
    url: "https://ads-developers.googleblog.com/2026/08/migrate-campaign-level-broad-match-and.html",
  },
  {
    label: "Google — We’re upgrading Dynamic Search Ads to AI Max",
    url: "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/",
  },
  {
    label: "Google Ads API — Get started with AI Max for Search campaigns",
    url: "https://developers.google.com/google-ads/api/docs/campaigns/ai-max-for-search-campaigns/getting-started",
  },
  {
    label: "Google Ads API release notes — migration timestamp fields",
    url: "https://developers.google.com/google-ads/api/docs/release-notes",
  },
];

export const googleAiMaxMigrationArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Google Ads AI Max",
    targetSearchIntent:
      "Understand the September 2026 Google Ads AI Max auto-migration, identify affected Search campaigns, know which settings change for campaign-level Broad Match and ACA, and prepare safely.",
    targetQuery: "Google Ads AI Max migration",
    slug: "google-ads-ai-max-migration",
    title: "Google Ads AI Max Migration: September 2026 Changes Explained",
    metaTitle: "Google Ads AI Max Migration: September 2026 Changes Explained",
    metaDescription:
      "Google Ads began migrating campaign-level Broad Match and ACA Search campaigns to AI Max on September 1, 2026. Here’s what changes and how to prepare.",
    h1: "Google Ads AI Max Migration: What Changes in September 2026",
    excerpt:
      "Google is progressively moving campaign-level Broad Match and standalone ACA Search campaigns into AI Max during September 2026, with different default feature mappings for each legacy setup.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Google Ads AI Max migration timeline and feature mapping for September 2026",
    sections: [
      {
        id: "what-is-changing",
        title: "What is changing in September 2026?",
        blocks: [
          {
            type: "paragraph",
            html: "Google says the first legacy-feature auto-migration phase runs progressively from <strong>September 1 through September 30, 2026</strong>. It covers eligible Search campaigns still using campaign-level Broad Match or standalone Automatically Created Assets (ACA).",
          },
          {
            type: "paragraph",
            html: "This is not a single account-wide switch on September 1. Individual eligible campaigns can migrate at different points during the month, so the useful unit of analysis is the campaign and its actual migration date.",
          },
        ],
      },
      {
        id: "default-mapping",
        title: "How the two legacy setups map into AI Max",
        blocks: [
          {
            type: "list",
            items: [
              "Campaign-level Broad Match: Search Term Matching on; Text Customization off; Final URL Expansion off.",
              "Standalone ACA: Search Term Matching on; Text Customization on; Final URL Expansion off.",
              "Existing brand inclusions and exclusions are preserved during the in-place migration.",
            ],
          },
          {
            type: "paragraph",
            html: "That distinction matters because <strong>AI Max is a suite of features</strong>, not one indivisible setting. A campaign carrying the AI Max label does not automatically mean every AI Max capability is active.",
          },
        ],
      },
      {
        id: "dsa-separate",
        title: "Dynamic Search Ads are not part of this September phase",
        blocks: [
          {
            type: "paragraph",
            html: "Google moved the Dynamic Search Ads automatic migration to <strong>February 2027</strong>. DSA should therefore be kept separate from September 2026 reporting and migration checklists.",
          },
          {
            type: "note",
            html: "Google’s earlier AI Max announcement described a broader September legacy transition, but its June update deferred the DSA portion while keeping ACA and campaign-level Broad Match on the September schedule.",
          },
        ],
      },
      {
        id: "what-advertisers-should-do",
        title: "What advertisers should do during the migration",
        blocks: [
          {
            type: "list",
            items: [
              "Identify Search campaigns still using campaign-level Broad Match or standalone ACA.",
              "Save a pre-migration performance baseline and record current brand/location controls.",
              "Capture the actual campaign migration date when it occurs.",
              "Verify AI Max toggles after migration rather than assuming the full suite is active.",
              "Review search terms and generated text where Text Customization becomes active.",
            ],
            ordered: true,
          },
          {
            type: "paragraph",
            html: "Google Ads API v25.1 added <code>aca_migration_date_time</code> and <code>broad_match_migration_date_time</code> fields, giving technical teams a first-party way to identify when a campaign was migrated.",
          },
        ],
      },
      {
        id: "performance-context",
        title: "Treat performance claims as vendor data, not guarantees",
        blocks: [
          {
            type: "paragraph",
            html: "Google reports that non-Retail advertisers using the full AI Max feature suite averaged 7% more conversions or conversion value at a similar CPA/ROAS than advertisers using Search Term Matching alone. That is Google internal data, not an independent benchmark.",
          },
          {
            type: "paragraph",
            html: "The safer evaluation method is to annotate each campaign’s migration date, compare meaningful pre- and post-migration windows, and separate migration effects from budget, bidding, seasonality and other simultaneous account changes.",
          },
        ],
      },
    ],
    sources: googleAiMaxSources,
    relatedPaths: [
      "/blog/google-ads-ai-max-migration-checklist",
      "/blog/ai-max-broad-match-vs-aca",
    ],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Google Ads AI Max",
    targetSearchIntent:
      "Prepare an affected Google Ads Search campaign for the September 2026 AI Max migration, verify the migration, and audit performance and settings afterward.",
    targetQuery: "Google Ads AI Max migration checklist",
    parentSlug: "google-ads-ai-max-migration",
    slug: "google-ads-ai-max-migration-checklist",
    title: "Google Ads AI Max Migration Checklist: What to Audit Before & After the Upgrade",
    metaTitle: "Google Ads AI Max Migration Checklist: Before & After the Upgrade",
    metaDescription:
      "A practical checklist for Google Ads’ September 2026 AI Max migration: identify affected campaigns, record baselines, verify settings and audit performance.",
    h1: "Google Ads AI Max Migration Checklist: What to Audit Before & After",
    excerpt:
      "A campaign-level checklist for documenting the legacy setup, preserving a performance baseline, verifying AI Max defaults and auditing post-migration behavior.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Google Ads AI Max migration before-and-after audit checklist",
    sections: [
      {
        id: "before-migration",
        title: "Before migration: identify and document the campaign",
        blocks: [
          {
            type: "paragraph",
            html: "Start with the Main guide to confirm whether the campaign is in the September phase. The affected legacy setups are campaign-level Broad Match and standalone ACA; DSA is scheduled separately for February 2027.",
          },
          {
            type: "list",
            items: [
              "Record the legacy feature that makes the campaign eligible.",
              "Save spend, conversions, conversion value, CPA/ROAS, CTR and search-term quality.",
              "Document brand inclusions/exclusions, location controls and key landing pages.",
              "Avoid making unrelated major account changes immediately before migration when possible.",
            ],
          },
        ],
      },
      {
        id: "migration-day",
        title: "On migration: capture the actual change date",
        blocks: [
          {
            type: "paragraph",
            html: "Because the job runs progressively through September, record the date for each migrated campaign instead of using September 1 as a blanket reporting breakpoint.",
          },
          {
            type: "paragraph",
            html: "API users can query the migration timestamp fields exposed by Google Ads API. Teams working only in the interface should document the date from account notifications or change history when the transition appears.",
          },
        ],
      },
      {
        id: "verify-settings",
        title: "Immediately verify the AI Max settings",
        blocks: [
          {
            type: "list",
            items: [
              "Search Term Matching status",
              "Text Customization status",
              "Final URL Expansion status",
              "Brand inclusions and exclusions",
              "Location controls and any text guidelines or creative guardrails",
            ],
          },
          {
            type: "paragraph",
            html: "Do not assume the entire AI Max suite was enabled. Broad Match and ACA migrate to different defaults, and Final URL Expansion is off in both September default mappings.",
          },
        ],
      },
      {
        id: "after-migration",
        title: "After migration: audit search terms, creative and landing pages",
        blocks: [
          {
            type: "paragraph",
            html: "Review whether newly matched queries are commercially useful. Where Text Customization is active after an ACA migration, inspect generated text for factual accuracy, policy compliance and brand fit.",
          },
          {
            type: "paragraph",
            html: "A sudden expansion to different landing pages should not be blamed on the default September migration unless Final URL Expansion was enabled separately, because it remains off by default for both migration paths.",
          },
        ],
      },
      {
        id: "reporting",
        title: "Annotate reporting and audit integrations",
        blocks: [
          {
            type: "paragraph",
            html: "Compare performance over a meaningful post-migration window rather than one day. Separate migration effects from changes in bidding, budgets, seasonality or creative.",
          },
          {
            type: "note",
            html: "If your team uses scripts or third-party integrations, move new development toward standard Search campaigns and AI Max settings rather than legacy campaign-level Broad Match or ACA structures.",
          },
        ],
      },
    ],
    sources: googleAiMaxSources,
    relatedPaths: [
      "/blog/google-ads-ai-max-migration",
      "/blog/ai-max-broad-match-vs-aca",
    ],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Google Ads AI Max",
    targetSearchIntent:
      "Understand exactly how Google maps campaign-level Broad Match and standalone Automatically Created Assets into AI Max and which settings are on or off after migration.",
    targetQuery: "AI Max broad match vs ACA",
    parentSlug: "google-ads-ai-max-migration",
    slug: "ai-max-broad-match-vs-aca",
    title: "AI Max Broad Match vs ACA: Settings After Google’s Migration",
    metaTitle: "AI Max Broad Match vs ACA: Settings After Google’s Migration",
    metaDescription:
      "Campaign-level Broad Match and ACA migrate differently to Google Ads AI Max. See which settings turn on, what stays off and what controls are preserved.",
    h1: "AI Max Broad Match vs ACA: What Settings Change After Migration?",
    excerpt:
      "Google’s September 2026 migration maps campaign-level Broad Match and standalone ACA into different AI Max feature states, so the label alone does not tell you which capabilities are active.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "Comparison of AI Max settings after Broad Match and ACA migration",
    sections: [
      {
        id: "quick-comparison",
        title: "The quick comparison",
        blocks: [
          {
            type: "list",
            items: [
              "Campaign-level Broad Match → Search Term Matching ON; Text Customization OFF; Final URL Expansion OFF.",
              "Standalone ACA → Search Term Matching ON; Text Customization ON; Final URL Expansion OFF.",
              "Existing brand inclusions and exclusions are preserved in both migration paths.",
            ],
          },
          {
            type: "paragraph",
            html: "That mapping is why it is inaccurate to say Google simply turns the full AI Max suite on for every migrated Search campaign.",
          },
        ],
      },
      {
        id: "search-term-matching",
        title: "Search Term Matching is the common layer",
        blocks: [
          {
            type: "paragraph",
            html: "Both September migration paths enable Search Term Matching. Google describes it as the AI-powered query-expansion layer that can use broad match and keywordless technology to find relevant searches beyond existing keywords.",
          },
          {
            type: "paragraph",
            html: "Search Term Matching can be controlled at the ad-group level when AI Max is enabled, so advertisers still need to inspect the actual campaign and ad-group settings after migration.",
          },
        ],
      },
      {
        id: "text-customization",
        title: "Text Customization is where Broad Match and ACA diverge",
        blocks: [
          {
            type: "paragraph",
            html: "Campaign-level Broad Match migrations leave Text Customization off by default because the legacy setting concerned query matching rather than automated creative generation.",
          },
          {
            type: "paragraph",
            html: "ACA migrations turn Text Customization on by default, reflecting ACA’s existing role in automatically creating ad text. Those campaigns deserve an immediate review of generated headlines and descriptions after migration.",
          },
        ],
      },
      {
        id: "final-url-expansion",
        title: "Final URL Expansion remains off in both default mappings",
        blocks: [
          {
            type: "paragraph",
            html: "Final URL Expansion is the AI Max landing-page selection layer. Google’s September migration mapping keeps it off for both campaign-level Broad Match and standalone ACA migrations.",
          },
          {
            type: "note",
            html: "If landing-page expansion appears later, check whether Final URL Expansion was enabled separately rather than assuming the migration itself caused it.",
          },
        ],
      },
      {
        id: "what-to-check",
        title: "What to check after migration",
        blocks: [
          {
            type: "list",
            items: [
              "Confirm which legacy setup triggered the migration.",
              "Verify Search Term Matching, Text Customization and Final URL Expansion individually.",
              "Check that brand controls were preserved.",
              "Use the migration checklist for baseline, reporting and post-change quality review.",
            ],
            ordered: true,
          },
          {
            type: "paragraph",
            html: "Dynamic Search Ads should not be folded into this comparison because their auto-migration has been deferred to February 2027 and follows a different mapping path.",
          },
        ],
      },
    ],
    sources: googleAiMaxSources,
    relatedPaths: [
      "/blog/google-ads-ai-max-migration",
      "/blog/google-ads-ai-max-migration-checklist",
    ],
  },
];
