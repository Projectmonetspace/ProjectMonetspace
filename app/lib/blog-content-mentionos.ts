import type { BlogArticle } from "./blog-types.ts";

const mentionOsSources = [
  { label: "MentionOS — product page", url: "https://mentionos.ai/" },
  { label: "MentionOS — Terms of Service", url: "https://mentionos.ai/terms" },
  { label: "MentionOS — What Is an AI SEO Agent?", url: "https://mentionos.ai/blog/ai-seo-agent" },
  { label: "MentionOS — AEO Audit guide", url: "https://mentionos.ai/guides/aeo-audit" },
];

export const mentionOsArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "MentionOS",
    targetSearchIntent: "Broad overview of MentionOS, what its autonomous AEO agent does, AI-model coverage, pricing, publishing workflow, integrations, approval boundaries and limitations",
    targetQuery: "MentionOS",
    slug: "mentionos-autonomous-aeo-agent",
    title: "MentionOS: Autonomous AEO Agent, Pricing & How It Works",
    metaTitle: "MentionOS: Autonomous AEO Agent, Pricing & How It Works",
    metaDescription: "MentionOS is an autonomous AEO agent that monitors AI answers, explains visibility changes and can draft or publish approved fixes. See pricing, coverage and limits.",
    h1: "MentionOS: The Autonomous AEO Agent for AI Search Visibility",
    excerpt: "MentionOS is a new AEO/GEO agent that monitors AI answers, interprets visibility changes, drafts content and can publish to an authorised brand blog under customer-controlled permissions.",
    category: "SEO",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    ogAlt: "MentionOS autonomous AEO agent monitoring ChatGPT, Perplexity, Gemini and Google AI",
    sections: [
      { id: "what-is-mentionos", title: "What MentionOS is", blocks: [
        { type: "paragraph", html: "MentionOS describes itself as an autonomous AEO and GEO agent for brands that want to understand and improve how they appear inside AI-generated answers. Its public Terms say the service monitors how ChatGPT, Perplexity, Gemini and Google AI answer questions in a customer's category, interprets changes, drafts articles and can publish those articles to an authorised customer site." },
        { type: "paragraph", html: "That makes it different from a visibility dashboard that stops at reporting. MentionOS is positioned as an execution layer: monitor the answers, identify a gap, prepare work and carry out approved publishing actions. It is still an early product, so vendor examples and attribution claims should be treated as product evidence rather than independent proof of business outcomes." },
      ]},
      { id: "coverage", title: "Which AI platforms MentionOS covers", blocks: [
        { type: "paragraph", html: "As of September 6, 2026, the public product page lists four models on every plan: ChatGPT, Perplexity, Gemini and Google AI. Claude is presented there as an add-on rather than part of the standard four-model coverage." },
        { type: "paragraph", html: "MentionOS says the agent scans these systems repeatedly against a brand's category and competitor set. Because each AI product can retrieve and rank different sources, a brand may appear strongly in one answer engine and weakly in another; cross-model monitoring is therefore more useful than treating one visibility score as universal." },
      ]},
      { id: "workflow", title: "How the MentionOS agent works", blocks: [
        { type: "list", ordered: true, items: ["Monitor tracked AI answers and competitor mentions.", "Interpret what changed and surface likely causes or source changes.", "Draft a response such as a new or updated article when there is a substantive content gap.", "Publish to the customer's own blog only under the permissions the customer grants.", "Keep the agent conversation available across the product, email and connected channels."] },
        { type: "note", html: "AI-answer attribution is not perfectly observable. If MentionOS associates a visibility change with a newly cited page or competitor mention, treat that as a useful lead to verify rather than proof of one causal ranking factor." },
      ]},
      { id: "pricing", title: "MentionOS pricing and free audit", blocks: [
        { type: "paragraph", html: "The live product page currently advertises a founder rate of <strong>$79 per month</strong> and <strong>$790 per year</strong>. The FAQ says the founder base rate can remain in place while the subscription continues without interruption, while taxes or local-currency conversion can change the final amount shown at checkout." },
        { type: "paragraph", html: "MentionOS also advertises a free first-look audit without a payment card. The current FAQ says that first look uses a live Perplexity query, while paid coverage opens the standard four-model monitoring set. Because founder pricing is an early-stage offer, it should be rechecked before purchase." },
      ]},
      { id: "approval-and-integrations", title: "Review mode, Autopilot and publishing boundaries", blocks: [
        { type: "paragraph", html: "Review is the default mode on the public site: proposed content waits for the customer to approve or decline it. Autopilot is opt-in. When enabled, the customer grants blog access and allows the agent to write, schedule and publish within the authority they set." },
        { type: "paragraph", html: "The live product page currently names Shopify, WooCommerce, Wix, Webflow, BigCommerce and a native blog path for Autopilot publishing. MentionOS's Terms additionally list third-party interoperability including Shopify, WooCommerce, Webflow, Framer, WordPress, Slack and Stripe. The exact integration matrix can evolve, so teams should verify the specific connector and permission model before relying on it in production." },
        { type: "paragraph", html: "The technical boundary is explicit in the Terms: MentionOS produces robots.txt directives, llms.txt files and structured-data remediations for the customer to apply. Do not assume that enabling blog publishing gives the agent unrestricted authority to rewrite technical site configuration or product pages." },
      ]},
      { id: "limits", title: "What MentionOS cannot guarantee", blocks: [
        { type: "paragraph", html: "MentionOS cannot guarantee a permanent mention, citation, ranking or recommendation inside third-party AI products. Its Terms explicitly state that the underlying AI models are probabilistic, change without notice and remain outside MentionOS's control." },
        { type: "list", items: ["Independent long-term customer evidence is still limited because the product is new.", "Illustrative examples on the product site are not equivalent to verified customer case studies.", "AI-answer attribution can be uncertain.", "Coverage, integrations and founder pricing can change.", "AEO visibility should be measured alongside Search Console, analytics, leads and conversions rather than treated as the final business outcome."] },
      ]},
    ],
    sources: mentionOsSources,
    relatedPaths: ["/blog/how-to-use-mentionos"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "MentionOS",
    targetSearchIntent: "Practical setup and operating workflow for using MentionOS: free audit, monitoring AI-answer visibility, reviewing proposed content, enabling authorised publishing, handling technical remediations and measuring results",
    targetQuery: "how to use MentionOS",
    parentSlug: "mentionos-autonomous-aeo-agent",
    slug: "how-to-use-mentionos",
    title: "How to Use MentionOS: Audit, Monitoring & Autopilot",
    metaTitle: "How to Use MentionOS: Audit, Monitoring & Autopilot",
    metaDescription: "Learn how to use MentionOS for an AI visibility audit, daily monitoring, review-mode content approvals, optional autopilot publishing and outcome tracking.",
    h1: "How to Use MentionOS: From AI Visibility Audit to Autopilot",
    excerpt: "A practical MentionOS workflow starts with a baseline audit, keeps Review mode on, verifies proposed actions and only adds Autopilot after permissions and publishing quality are proven.",
    category: "SEO",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    ogAlt: "MentionOS workflow from AI visibility audit through review, publishing and measurement",
    sections: [
      { id: "audit", title: "1. Start with the free MentionOS audit", blocks: [
        { type: "paragraph", html: "MentionOS currently offers a free first-look audit without a card. The live FAQ says it runs a Perplexity query to show how the brand appears in its category before paid monitoring opens across the standard four-model set." },
        { type: "list", items: ["Record whether your brand is mentioned.", "Note which competitors appear instead.", "Capture the question or decision intent.", "Record cited or referenced sources when available.", "Date-stamp the result and treat one answer as a baseline, not a trend."] },
      ]},
      { id: "monitor", title: "2. Monitor real customer questions, not keyword variations", blocks: [
        { type: "paragraph", html: "Build the monitoring set around jobs a buyer is actually trying to complete: best products for a specific use case, alternatives to a competitor, price-sensitive recommendations, category education or other prompts that can influence a decision. Avoid filling the tracker with dozens of near-duplicate phrasings." },
        { type: "paragraph", html: "Across ChatGPT, Perplexity, Gemini and Google AI, compare whether the brand appears, which competitors appear, which sources are cited, whether factual descriptions are accurate and what changes over time. Different engines can disagree, so repeated patterns matter more than one isolated answer." },
      ]},
      { id: "review", title: "3. Keep Review mode on first", blocks: [
        { type: "paragraph", html: "MentionOS currently presents Review as the default. In this mode, proposed content waits for approval rather than publishing automatically. That is the safest starting point for most teams." },
        { type: "list", items: ["Check every factual claim and source.", "Check whether the proposed topic overlaps an existing canonical page.", "Reject thin pages created only from keyword variation.", "Review brand voice and legal or compliance risk.", "Confirm internal links, structured data and canonical intent before publishing."] },
      ]},
      { id: "publishing", title: "4. Connect publishing with minimum necessary permissions", blocks: [
        { type: "paragraph", html: "The live product page currently describes blog publishing across Shopify, WooCommerce, Wix, Webflow, BigCommerce or a native blog. Because MentionOS is evolving quickly, verify the exact integration and access model for your platform before connecting a production site." },
        { type: "paragraph", html: "A cautious rollout is to approve a small number of posts first, inspect the resulting URL, metadata, formatting and tracking, then widen automation only after the workflow is consistently correct. Do not grant broader write authority than the publishing job requires." },
      ]},
      { id: "autopilot", title: "5. Enable Autopilot only after the review loop is proven", blocks: [
        { type: "paragraph", html: "Autopilot is off by default on the current product page. When enabled, MentionOS can write, schedule and publish to the customer's own blog within the authority that customer grants." },
        { type: "list", items: ["Define which content types may publish automatically.", "Keep high-risk legal, medical, financial or pricing claims under human review.", "Set rules for updating an existing page versus creating a new URL.", "Require adequate sources and internal-link logic.", "Document a rollback or unpublish path before widening authority."] },
      ]},
      { id: "technical-and-measurement", title: "6. Treat technical fixes and measurement separately", blocks: [
        { type: "paragraph", html: "MentionOS's Terms say technical remediations such as robots.txt directives, llms.txt files and structured data are produced for the customer to apply. Run those recommendations through the same code review, testing and deployment controls you would use for any production SEO change." },
        { type: "paragraph", html: "Measure outcomes beyond AI visibility. MentionOS materials reference Search Console and Google Analytics 4, and its AEO guidance recommends repeated measurements rather than one-off readings. Track search impressions, clicks, AI referrals where identifiable, landing-page engagement, leads and conversions alongside model visibility." },
        { type: "note", html: "Do not conclude that a change worked from one favorable AI answer. Third-party AI responses vary by run and can change as retrieval sources, model versions and ranking systems evolve." },
      ]},
    ],
    sources: mentionOsSources,
    relatedPaths: ["/blog/mentionos-autonomous-aeo-agent"],
  },
];
