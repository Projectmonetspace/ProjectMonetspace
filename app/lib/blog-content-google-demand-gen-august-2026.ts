import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-29";

const demandGenMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Google Demand Gen",
  targetSearchIntent: "Understand Google’s August 2026 Demand Gen changes, what is generally available versus still testing, and what advertisers can use now.",
  targetQuery: "Google Demand Gen August 2026",
  slug: "google-demand-gen-august-2026-update",
  title: "Google Demand Gen August 2026: Messaging, Travel & AI Video",
  metaTitle: "Google Demand Gen August 2026: Messaging, Travel & AI Video",
  metaDescription: "Google’s August 2026 Demand Gen update adds messaging-app tests, travel relevance features and generally available multimodal AI video creation in Asset Studio.",
  h1: "Google Demand Gen’s August 2026 Update Adds Messaging Tests, Travel Ads and AI Video",
  excerpt: "Google’s August 2026 Demand Gen Drop makes multimodal video creation generally available while testing messaging conversations and expanding travel relevance.",
  category: "Marketing",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a Google Demand Gen creative workflow from brief to storyboard and horizontal and vertical video, alongside messaging and travel motifs",
  sections: [
    { id: "what-changed", title: "What changed in the August 2026 Demand Gen Drop", blocks: [
      { type: "paragraph", html: "Google published its August Demand Gen Drop on August 27, 2026. It highlighted three changes: a test that can start messaging-app conversations from Demand Gen ads on YouTube, richer travel and hotel relevance, and generally available Multimodal Video Creation in Asset Studio." },
      { type: "note", html: "These features are not at the same release stage. Google explicitly calls messaging conversations a test; Multimodal Video Creation is generally available." },
    ]},
    { id: "video-ga", title: "Multimodal Video Creation is now generally available", blocks: [
      { type: "paragraph", html: "Google says advertisers can move from a creative brief to storyboard and final production in one workflow, creating horizontal and vertical video assets. Its current Asset Studio material names Gemini, Veo and Nano Banana in the generative stack." },
      { type: "paragraph", html: "For the practical workflow, see <a href=\"/blog/how-to-use-multimodal-video-creation-asset-studio\">how to use Multimodal Video Creation in Google Ads Asset Studio</a>." },
    ]},
    { id: "models", title: "Which Google AI models power the workflow?", blocks: [
      { type: "paragraph", html: "Google’s Asset Studio material names Gemini, Veo and Nano Banana across multimodal creative generation. A separate Google announcement says Gemini Omni enables the conversational multimodal video workflow in Asset Studio." },
      { type: "note", html: "Underlying model names do not mean every model is necessarily exposed as a user-selectable control in every account." },
    ]},
    { id: "messaging", title: "Demand Gen is testing messaging-app conversations", blocks: [
      { type: "paragraph", html: "Google says it is testing ways for viewers to start conversations with brands on messaging apps directly from Demand Gen ads on YouTube. The August announcement does not name the messaging apps, participating markets, account eligibility or a broader rollout date." },
    ]},
    { id: "travel", title: "New travel and hotel relevance features", blocks: [
      { type: "paragraph", html: "Google says Demand Gen can surface local activities, events and real-time offers for travelers, while hotel ads can be personalized to show relevant properties. The launch post does not provide a complete country or eligibility matrix." },
    ]},
    { id: "performance", title: "What Google’s 30% performance claim means", blocks: [
      { type: "paragraph", html: "Google says hundreds of Demand Gen improvements introduced in the second half of 2025 are driving an average 30% increase in conversions or conversion value. Google labels this as internal Demand Gen experiment data, so it is a vendor-reported average rather than an independent benchmark or a promise of individual results." },
    ]},
    { id: "action", title: "What advertisers can do now", blocks: [
      { type: "list", items: ["Check Asset Studio for the multimodal video workflow and test it against an existing approved asset.", "Create horizontal and vertical variants from the same concept and review each composition separately.", "Treat messaging conversations as a test until account-level access and supported apps are confirmed.", "For travel campaigns, verify which relevance features and required data sources are actually available in the account."] },
    ]},
    { id: "unknowns", title: "What Google has not confirmed", blocks: [
      { type: "list", items: ["Which messaging apps participate in the YouTube conversation test", "Participating advertisers and markets for that test", "A country-by-country rollout schedule", "Specific multimodal video generation quotas", "Any new standalone price for the generally available video workflow", "A complete country and language matrix for every creative capability"] },
    ]},
    { id: "bottom-line", title: "Bottom line", blocks: [
      { type: "paragraph", html: "The most concrete August change is AI-assisted video production: Google says Multimodal Video Creation in Asset Studio is generally available. Messaging-app conversations remain a test, while the travel and hotel changes are meaningful but less fully specified. Marketers should test the video workflow with controlled creative experiments and keep rollout claims conservative where Google has not published details." },
    ]},
  ],
  sources: [
    { label: "Google — August 2026 Demand Gen Drop", url: "https://blog.google/products/ads-commerce/demand-gen-drop-august-2026/" },
    { label: "Google — Multimodal Video Creation in Asset Studio", url: "https://business.google.com/us/accelerate/announcements/multimodal-video-creation-in-asset-studio/" },
    { label: "Google — Gemini Omni in Google Ads", url: "https://business.google.com/us/accelerate/announcements/omni-in-google-ads/" },
  ],
  relatedPaths: ["/blog/how-to-use-multimodal-video-creation-asset-studio"],
};

const assetStudioHowTo: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Google Demand Gen",
  targetSearchIntent: "Use Google Ads Asset Studio’s multimodal AI workflow to turn a brief or existing assets into editable, multi-format video creative for Demand Gen and other Google campaigns.",
  targetQuery: "how to use Multimodal Video Creation in Asset Studio",
  parentSlug: "google-demand-gen-august-2026-update",
  slug: "how-to-use-multimodal-video-creation-asset-studio",
  title: "How to Use Multimodal Video Creation in Google Ads Asset Studio",
  metaTitle: "How to Use Multimodal Video Creation in Google Ads Asset Studio",
  metaDescription: "Learn the documented workflow for Google Ads Multimodal Video Creation in Asset Studio—from brand inputs and storyboards to prompt refinement and multi-format Demand Gen video.",
  h1: "How to Use Multimodal Video Creation in Google Ads Asset Studio",
  excerpt: "A source-grounded workflow for moving from brand context and a creative brief to storyboards, prompt refinements and multi-format Google Ads video.",
  category: "Marketing",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial workflow showing a brand brief becoming storyboard frames, prompt refinements, and horizontal and vertical video outputs",
  sections: [
    { id: "before", title: "What the workflow does", blocks: [
      { type: "paragraph", html: "Google says Multimodal Video Creation in Asset Studio is generally available and can take advertisers from creative brief to storyboard and final production in one workflow. For the wider launch context, see the <a href=\"/blog/google-demand-gen-august-2026-update\">August 2026 Demand Gen update</a>." },
      { type: "paragraph", html: "Google’s product material names Gemini, Veo and Nano Banana across the generative stack, while its Gemini Omni announcement describes the conversational multimodal video workflow. Exact controls can still differ by account, so this guide sticks to the workflow Google documents rather than inventing navigation paths." },
    ]},
    { id: "brand", title: "Step 1: anchor the creative to your brand", blocks: [
      { type: "paragraph", html: "Google’s Gemini Omni guide says advertisers can import brand guidelines and a URL into Asset Studio. Use those inputs as generation context, then manually review logos, product claims, legal text, brand colors, typography and product appearance before campaign use." },
    ]},
    { id: "brief", title: "Step 2: provide a brief or existing assets", blocks: [
      { type: "paragraph", html: "Google says you can enter a brief prompt or select existing static assets to generate video storyboards and motion scenes." },
      { type: "list", items: ["State the product or offer and intended audience.", "Define the core message and campaign goal.", "Include required brand elements and visual restrictions.", "Specify useful formats or placements without asking the model to invent unapproved claims or prices."] },
    ]},
    { id: "storyboard", title: "Step 3: generate and review the storyboard", blocks: [
      { type: "paragraph", html: "Review the generated concept before final production. Check the opening hook, pacing, brand visibility, product accuracy and whether the story can work across horizontal and vertical layouts." },
    ]},
    { id: "refine", title: "Step 4: refine scenes with prompts", blocks: [
      { type: "paragraph", html: "Google documents prompt-based refinement for scenes, backgrounds, styling, voiceovers, pacing and aspect ratios. Make focused changes so you can preserve what already works while testing one creative variable at a time." },
      { type: "list", items: ["Shorten the opening scene.", "Keep the product but simplify the background.", "Make the final CTA more prominent.", "Adapt the composition for 9:16.", "Change pacing without changing approved claims."] },
    ]},
    { id: "formats", title: "Step 5: create format-specific variants", blocks: [
      { type: "paragraph", html: "Google says the workflow can produce horizontal and vertical assets. Its Gemini Omni material specifically describes 16:9 and 9:16 variations. Review each format as its own composition instead of assuming a crop will preserve text safe areas, subject placement and pacing." },
    ]},
    { id: "qa", title: "Step 6: QA every generated asset", blocks: [
      { type: "list", items: ["Product shape, labels and packaging", "Prices and promotional conditions", "Spelling and on-screen text", "Logos and trademark usage", "People, hands and faces", "Geographic or travel details", "Audio and voiceover accuracy", "Claims requiring substantiation", "Aspect-ratio-specific layout problems"] },
      { type: "paragraph", html: "Google describes SynthID watermarking for AI-generated creative, but watermarking does not replace advertiser responsibility for the content of an ad." },
    ]},
    { id: "test", title: "Step 7: deploy as a controlled test", blocks: [
      { type: "paragraph", html: "Compare an existing approved asset with an AI-assisted variation while keeping the rest of the campaign as stable as practical. Measure campaign outcomes, creative fatigue, revision time and whether the workflow produces usable variation rather than simply more variation." },
    ]},
    { id: "pricing", title: "Availability and pricing caveats", blocks: [
      { type: "paragraph", html: "Google’s Gemini Omni announcement says its multimodal capabilities are rolling out globally as a free feature inside Google Ads, and the August Demand Gen Drop says Multimodal Video Creation is generally available. The August post does not publish separate usage quotas or a new standalone price." },
      { type: "note", html: "General availability does not guarantee an identical interface or every control in every account. Check current account entitlements and Google documentation before making assumptions about quotas, languages or specific model controls." },
    ]},
    { id: "bottom-line", title: "Bottom line", blocks: [
      { type: "paragraph", html: "Use the workflow as an accelerated creative-production system rather than an automatic final-output machine: anchor it to approved brand context, review the storyboard, refine with focused prompts, create format-specific variants and QA every asset before it reaches a live campaign." },
    ]},
  ],
  sources: [
    { label: "Google — Multimodal Video Creation in Asset Studio", url: "https://business.google.com/us/accelerate/announcements/multimodal-video-creation-in-asset-studio/" },
    { label: "Google — Gemini Omni in Google Ads", url: "https://business.google.com/us/accelerate/announcements/omni-in-google-ads/" },
    { label: "Google — August 2026 Demand Gen Drop", url: "https://blog.google/products/ads-commerce/demand-gen-drop-august-2026/" },
  ],
  relatedPaths: ["/blog/google-demand-gen-august-2026-update"],
};

export const googleDemandGenAugust2026Articles: BlogArticle[] = [demandGenMain, assetStudioHowTo];
