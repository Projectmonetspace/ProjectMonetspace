import type { BlogArticle } from "./blog-types.ts";

const adobeGeminiSources = [
  { label: "Adobe — Adobe comes to Gemini and expands what you can do in Claude", url: "https://blog.adobe.com/en/publish/2026/09/24/adobe-comes-to-gemini-expands-what-you-can-do-in-claude" },
];

export const adobeGeminiArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Adobe in Gemini",
    targetSearchIntent: "Understand Adobe in Gemini, its tools, availability, setup, creator workflows and limitations",
    targetQuery: "Adobe in Gemini",
    slug: "adobe-in-gemini",
    title: "Adobe in Gemini: Photoshop, Lightroom, Express & Firefly Guide",
    metaTitle: "Adobe in Gemini: Photoshop, Lightroom, Express & Firefly",
    metaDescription: "Adobe in Gemini brings Photoshop, Lightroom, Express and Firefly tools into Gemini. See availability, setup, workflows, limits and what launched.",
    h1: "Adobe in Gemini: How Adobe’s Creative Tools Work Inside Gemini",
    excerpt: "Adobe in Gemini brings Photoshop, Lightroom, Express and Firefly capabilities into Gemini conversations, with a global rollout beginning September 24, 2026.",
    category: "Creator Tools",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Project Monet editorial graphic showing Adobe creative tools inside a conversational Gemini workflow",
    sections: [
      { id: "what-is", title: "What is Adobe in Gemini?", blocks: [
        { type: "paragraph", html: "Adobe in Gemini is a connected-app integration rather than a new standalone Adobe editor. Adobe launched it on September 24, 2026, bringing tools from Photoshop, Lightroom, Adobe Express and Firefly into Gemini conversations." },
        { type: "paragraph", html: "A user describes the outcome they want and Adobe orchestrates relevant creative tools. Adobe positions the integration for creation and refinement work that starts inside an AI conversation." },
      ]},
      { id: "capabilities", title: "What can Adobe in Gemini do?", blocks: [
        { type: "paragraph", html: "Adobe's launch examples include improving product photos by adjusting lighting and color and applying consistent crops; adapting one design into social-ready variants while preserving branding and messaging; and finding Adobe Express templates for a campaign and personalizing text, imagery and colors." },
        { type: "paragraph", html: "Firefly is also part of the launch integration. These are first-party examples of supported workflows, not a claim that every feature from the desktop Adobe apps is exposed inside Gemini." },
      ]},
      { id: "availability", title: "Availability and setup", blocks: [
        { type: "paragraph", html: "Adobe says the integration is rolling out globally beginning September 24 and is available across all Gemini plans. Because Adobe describes this as a rollout, compatibility and availability can still vary by account." },
        { type: "paragraph", html: "To connect it, navigate to Gemini's Personal Intelligence area, select Adobe under Connected Apps, then sign in with an Adobe account or create one. For a practical walkthrough, read <a href=\"/blog/how-to-use-adobe-in-gemini\">How to Use Adobe in Gemini</a>." },
      ]},
      { id: "pricing", title: "Is Adobe in Gemini free?", blocks: [
        { type: "paragraph", html: "Adobe says the Gemini integration is available across all Gemini plans and that users can create an Adobe account for free. That does not establish unlimited free use of every Adobe capability." },
        { type: "paragraph", html: "Adobe's launch announcement does not publish a universal generative-credit allowance or quota for this integration, so those limits should be checked in-product rather than inferred." },
      ]},
      { id: "claude", title: "Adobe in Gemini vs Adobe for Claude", blocks: [
        { type: "paragraph", html: "Adobe's September 24 announcement also expands Adobe for Claude, but the products are not identical. Adobe in Gemini launches with Photoshop, Lightroom, Express and Firefly workflows." },
        { type: "paragraph", html: "Adobe for Claude now exposes more than 80 tools across Acrobat, Express, Photoshop, Illustrator, Premiere, Lightroom, InDesign, Adobe Stock and more, and adds interactive PDF and layer-based Express editing. Treat those Claude-specific capabilities as separate from Gemini unless Adobe documents them for Gemini." },
      ]},
      { id: "creators", title: "Why creators and marketers should care", blocks: [
        { type: "paragraph", html: "The useful shift is not simply generating another image. Adobe's launch examples move from an instruction to polished product photography, campaign-template customization and social-format adaptation while invoking established Adobe tools from the assistant." },
        { type: "paragraph", html: "For teams, that can shorten the distance between an initial brief and channel-ready creative, while final brand, factual and legal review still belongs with a human." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "paragraph", html: "Adobe calls this the first step of its Gemini work. Exact compatibility and availability can vary, and the launch announcement does not provide universal usage limits, generative-credit quotas, latency claims or benchmark comparisons." },
        { type: "paragraph", html: "Do not assume every Photoshop, Lightroom, Express or Firefly desktop capability is exposed inside Gemini, and do not copy Claude-specific instructions into Gemini without current documentation." },
      ]},
    ],
    sources: adobeGeminiSources,
    relatedPaths: ["/blog/how-to-use-adobe-in-gemini"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Adobe in Gemini",
    targetSearchIntent: "Connect Adobe to Gemini and use the integration for practical creator and marketing workflows",
    targetQuery: "how to use Adobe in Gemini",
    parentSlug: "adobe-in-gemini",
    slug: "how-to-use-adobe-in-gemini",
    title: "How to Use Adobe in Gemini: Connect Adobe, Prompts & Workflows",
    metaTitle: "How to Use Adobe in Gemini: Setup, Prompts & Workflows",
    metaDescription: "Connect Adobe to Gemini and use Photoshop, Lightroom, Express and Firefly workflows for product photos, social content and marketing assets.",
    h1: "How to Use Adobe in Gemini: Connect Adobe, Prompts & Creator Workflows",
    excerpt: "Connect Adobe through Gemini's Personal Intelligence settings, then use outcome-focused prompts for product photos, social adaptations and marketing assets.",
    category: "Creator Tools",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Project Monet how-to graphic showing a conversational Adobe creative workflow inside Gemini",
    sections: [
      { id: "connect", title: "1. Connect Adobe to Gemini", blocks: [
        { type: "list", ordered: true, items: ["Open Gemini and navigate to Personal Intelligence.", "Select Adobe under Connected Apps.", "Sign in with your Adobe account, or create a free Adobe account.", "Return to the conversation and describe the creative outcome you want."] },
        { type: "paragraph", html: "Adobe says the integration is rolling out globally across all Gemini plans beginning September 24, 2026. If Adobe is not visible yet, an absent toggle does not by itself prove the integration is unsupported in your country or plan." },
      ]},
      { id: "workflows", title: "2. Start with a documented workflow", blocks: [
        { type: "list", items: ["Product photos: ask for consistent lighting, color and cropping for a storefront or campaign.", "Social adaptations: turn one design into channel-ready versions while retaining branding and messaging.", "Campaign templates: describe the campaign, audience and visual direction so Adobe can surface Express designs and personalize text, imagery and colors.", "Generative assets: Firefly participates in the launch integration where supported."] },
        { type: "paragraph", html: "These examples come from Adobe's launch announcement. They are a safer starting point than assuming a specific desktop-only command is exposed in Gemini." },
      ]},
      { id: "prompting", title: "3. Give Gemini the outcome and constraints", blocks: [
        { type: "paragraph", html: "Specify the asset, desired outcome, destination and constraints. For example, state that a product image needs a consistent storefront crop, or that a campaign design needs channel-specific variants without changing the core messaging." },
        { type: "paragraph", html: "Include brand rules explicitly when they matter. Do not assume Gemini or Adobe already knows the exact typography, safe areas, claims or approval requirements for your organization." },
      ]},
      { id: "limits", title: "4. Know what not to assume", blocks: [
        { type: "paragraph", html: "Adobe has not announced that every Photoshop, Lightroom, Express or Firefly feature is exposed in Gemini. It also has not published one universal free-credit quota for the integration." },
        { type: "paragraph", html: "Compatibility and availability vary, and Adobe says this launch is the first step in its Gemini work. Check current in-product information for billing, quotas and account-specific access." },
      ]},
      { id: "claude", title: "5. Do not mix Gemini and Claude instructions", blocks: [
        { type: "paragraph", html: "Adobe for Claude has a broader announced tool set of more than 80 tools and now includes Acrobat plus interactive PDF and Express editing. Those are documented Claude capabilities, not automatically Gemini capabilities." },
        { type: "paragraph", html: "For the broader product, availability and capability picture, return to the <a href=\"/blog/adobe-in-gemini\">Adobe in Gemini overview</a>." },
      ]},
      { id: "troubleshooting", title: "6. Troubleshoot rollout and unsupported operations", blocks: [
        { type: "paragraph", html: "If the Adobe connection is missing, check Personal Intelligence and Connected Apps first and allow for rollout timing. If a requested operation is unavailable, try a narrower task that matches Adobe's documented launch examples." },
        { type: "paragraph", html: "For public-facing work, review generated or edited assets for text accuracy, brand consistency, product details and any factual or legal claims before publishing." },
      ]},
    ],
    sources: adobeGeminiSources,
    relatedPaths: ["/blog/adobe-in-gemini"],
  },
];
