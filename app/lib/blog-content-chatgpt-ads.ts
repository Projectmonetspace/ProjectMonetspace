import type { BlogArticle } from "./blog-types.ts";

export const chatgptAdsArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "ChatGPT Ads",
    targetSearchIntent: "Understand ChatGPT Ads, current self-service country availability, campaign objectives, bidding, targeting, measurement and privacy boundaries.",
    targetQuery: "ChatGPT Ads",
    slug: "chatgpt-ads",
    title: "ChatGPT Ads: Ads Manager, Pricing, Countries & How It Works",
    metaTitle: "ChatGPT Ads: Ads Manager, Pricing, Countries & How It Works",
    metaDescription: "ChatGPT Ads explained: current Ads Manager availability, CPM/CPC/oCPC, targeting, measurement, privacy and how self-service access works.",
    h1: "ChatGPT Ads: Self-Service Ads Manager, Pricing, Targeting & Availability",
    excerpt: "ChatGPT Ads now has a beta self-service Ads Manager, but access is country-specific and the live availability table is the operational source of truth.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "ChatGPT Ads explainer showing a clearly labeled sponsored placement, campaign controls and conversion measurement.",
    sections: [
      {
        id: "availability",
        title: "Where ChatGPT Ads Manager is available",
        blocks: [
          { type: "paragraph", html: "As of September 1, 2026, OpenAI's live Ads Manager availability table lists self-service as available in Australia, Brazil, Canada, Japan, Korea, Mexico, New Zealand, the United Kingdom and the United States. India and the 31-country Europe expansion are still marked Coming Soon." },
          { type: "list", items: ["Creating an Ads Manager account does not unlock delivery before a country is supported.", "Advertisers in new European markets can currently use the OpenAI Ads team or approved partners where applicable.", "Always check the live country table before planning a launch."] },
        ],
      },
      {
        id: "buying",
        title: "How campaigns are bought",
        blocks: [
          { type: "paragraph", html: "OpenAI's current documentation supports CPM for reach, CPC for clicks and oCPC for conversion-optimized click delivery. Advertisers set budgets and maximum bids, while delivery uses OpenAI's relevance and auction system." },
          { type: "list", items: ["CPM charges per thousand impressions.", "CPC charges per valid click.", "oCPC remains click-billed but optimizes toward a selected downstream conversion event."] },
        ],
      },
      {
        id: "targeting",
        title: "Targeting and measurement",
        blocks: [
          { type: "paragraph", html: "ChatGPT Ads uses conversational context and intent alongside landing-page information, ad copy, advertiser-provided context hints and available targeting controls. OpenAI explicitly says context hints are not exact-match keywords." },
          { type: "list", items: ["Current campaign controls include countries, optional platforms and custom audiences where supported.", "Conversion measurement can use the OpenAI Pixel and/or Conversions API.", "Reporting includes impressions, clicks, spend, CTR, average CPC/CPM and conversions."] },
        ],
      },
      {
        id: "privacy",
        title: "Ads stay separate from ChatGPT answers",
        blocks: [
          { type: "paragraph", html: "OpenAI says advertisers do not receive private conversations and ads do not influence ChatGPT's answers. Sponsored placements are selected and rendered separately from the assistant response." },
          { type: "list", items: ["Do not build strategy around reading individual chat transcripts.", "Treat the platform as early: OpenAI says there are not yet universal advertiser performance benchmarks.", "Evaluate qualified downstream outcomes rather than assuming a new inventory source is automatically cheaper or better."] },
        ],
      },
    ],
    sources: [
      { label: "OpenAI: New ways to buy ChatGPT ads", url: "https://openai.com/index/new-ways-to-buy-chatgpt-ads/" },
      { label: "OpenAI Ads Manager availability", url: "https://help.openai.com/en/articles/20001245-ads-manager-availability" },
      { label: "OpenAI: Ads in ChatGPT basics", url: "https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics" },
      { label: "OpenAI: Create campaigns", url: "https://help.openai.com/en/articles/20001210" },
    ],
    relatedPaths: ["/blog/how-to-advertise-on-chatgpt", "/blog/chatgpt-ads-pricing"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "ChatGPT Ads",
    targetSearchIntent: "Set up and launch a first ChatGPT Ads Manager campaign with objective, budget, targeting, creative and measurement configured correctly.",
    targetQuery: "how to advertise on ChatGPT",
    parentSlug: "chatgpt-ads",
    slug: "how-to-advertise-on-chatgpt",
    title: "How to Advertise on ChatGPT: Ads Manager Campaign Setup",
    metaTitle: "How to Advertise on ChatGPT: Ads Manager Setup Guide",
    metaDescription: "Step-by-step ChatGPT Ads Manager setup: check country access, create the account, choose CPM/CPC/oCPC, target, measure and launch.",
    h1: "How to Advertise on ChatGPT: Set Up Your First Ads Manager Campaign",
    excerpt: "Start by checking self-service country availability; account creation and market activation are separate in OpenAI Ads Manager.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "ChatGPT Ads Manager campaign checklist from availability and account setup through targeting, measurement and launch.",
    sections: [
      {
        id: "access",
        title: "Check self-service access first",
        blocks: [
          { type: "paragraph", html: "OpenAI's live availability page should be the first stop. As of September 1, India and the 31-country Europe expansion are still marked Coming Soon for direct self-service even though advertiser access may exist through OpenAI's team or partners in supported markets." },
          { type: "list", items: ["Create an account only after understanding the country status.", "Do not treat signup as proof that campaigns can deliver in your market.", "Use the live availability table again immediately before launch."] },
        ],
      },
      {
        id: "campaign",
        title: "Create the campaign around one objective",
        blocks: [
          { type: "paragraph", html: "Ads Manager campaigns contain an objective, budget, dates and targeting. Current documentation offers CPM reach, CPC clicks and oCPC conversions." },
          { type: "list", items: ["Use CPM when reach is the primary goal.", "Use CPC when qualified site traffic is the primary goal.", "Use oCPC only after conversion measurement and a meaningful conversion event are configured."] },
        ],
      },
      {
        id: "creative",
        title: "Match ad, conversation context and landing page",
        blocks: [
          { type: "paragraph", html: "OpenAI says context hints help matching but are not exact-match keywords. Make the product category, audience, offer and landing-page promise clear enough that the system and the user can understand the fit." },
          { type: "list", items: ["Target only markets the landing page can actually serve.", "Use a focused set of materially different ads rather than many tiny variants.", "Make the post-click page confirm the same product, offer and next action."] },
        ],
      },
      {
        id: "measurement",
        title: "Instrument and monitor before scaling",
        blocks: [
          { type: "paragraph", html: "Set up conversion measurement with the Pixel and/or Conversions API when downstream outcomes matter. Validate the event before optimizing delivery around it." },
          { type: "list", items: ["Watch actual CPC/CPM, conversion rate and qualified cost per outcome.", "Do not infer a channel benchmark from a handful of clicks.", "Keep policy checks and regulated-category requirements in the launch review."] },
        ],
      },
    ],
    sources: [
      { label: "OpenAI Ads Manager availability", url: "https://help.openai.com/en/articles/20001245-ads-manager-availability" },
      { label: "OpenAI Ads Manager overview", url: "https://help.openai.com/en/articles/20001206" },
      { label: "OpenAI: Create campaigns", url: "https://help.openai.com/en/articles/20001210" },
      { label: "OpenAI: New ways to buy ChatGPT ads", url: "https://openai.com/index/new-ways-to-buy-chatgpt-ads/" },
    ],
    relatedPaths: ["/blog/chatgpt-ads", "/blog/chatgpt-ads-pricing"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "ChatGPT Ads",
    targetSearchIntent: "Understand ChatGPT Ads CPM, CPC and oCPC pricing, maximum bids, auctions and what cost claims are not yet supported.",
    targetQuery: "ChatGPT ads pricing",
    parentSlug: "chatgpt-ads",
    slug: "chatgpt-ads-pricing",
    title: "ChatGPT Ads Pricing: CPC, CPM, oCPC & Bidding Explained",
    metaTitle: "ChatGPT Ads Pricing: CPC, CPM, oCPC & Bidding Explained",
    metaDescription: "How ChatGPT Ads pricing works: CPM, CPC, oCPC, maximum bids, OpenAI's $3–$5 starting CPC guidance and the relevance-weighted auction.",
    h1: "ChatGPT Ads Pricing: CPC, CPM, oCPC and Bidding Explained",
    excerpt: "There is no universal ChatGPT Ads price. OpenAI currently supports CPM, CPC and oCPC objectives with advertiser-set maximum bids.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "ChatGPT Ads pricing explainer comparing CPM, CPC and conversion-optimized CPC without claiming a universal average price.",
    sections: [
      {
        id: "models",
        title: "The three pricing models",
        blocks: [
          { type: "paragraph", html: "OpenAI supports CPM, CPC and oCPC objectives. CPM optimizes for reach and charges per thousand impressions; CPC optimizes for valid clicks; oCPC remains click-billed while optimizing toward a selected conversion event." },
          { type: "list", items: ["There is no verified universal minimum campaign spend in the public documentation reviewed.", "Actual auction prices vary by competition and relevance.", "Conversion-focused delivery requires working conversion measurement."] },
        ],
      },
      {
        id: "bid",
        title: "What the $3–$5 CPC guidance means",
        blocks: [
          { type: "paragraph", html: "OpenAI's current Help Center recommends starting CPC campaigns with a maximum bid of $3–$5 USD per click. That is platform guidance for a starting maximum bid, not a guaranteed CPC, average clearing price or required minimum." },
          { type: "list", items: ["Ads Manager can show bid-strength guidance.", "A maximum bid is not the same as the final amount charged.", "Work backward from downstream economics instead of blindly copying the suggested range."] },
        ],
      },
      {
        id: "auction",
        title: "How the auction selects ads",
        blocks: [
          { type: "paragraph", html: "OpenAI describes a relevance-weighted second-price auction. A larger raw bid does not by itself make an ad useful; landing-page fit, ad relevance and other eligibility signals remain part of delivery." },
          { type: "list", items: ["Improve offer and landing-page clarity before assuming the fix is a higher bid.", "Compare cost per qualified outcome, not CPC alone.", "Do not publish early vendor case studies as universal channel benchmarks."] },
        ],
      },
      {
        id: "budget",
        title: "Set a test budget around learning",
        blocks: [
          { type: "paragraph", html: "A first campaign should be large enough to collect meaningful evidence while remaining small enough to tolerate uncertainty. Keep the test focused so the budget is not fragmented across too many countries, audiences and ads." },
          { type: "list", items: ["Verify conversion tracking before scaling.", "Measure cost per lead, signup or purchase when those are the real goals.", "OpenAI says the platform is still early and does not yet publish universal performance benchmarks."] },
        ],
      },
    ],
    sources: [
      { label: "OpenAI: Ads in ChatGPT basics", url: "https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics" },
      { label: "OpenAI: Create campaigns", url: "https://help.openai.com/en/articles/20001210" },
      { label: "OpenAI: oCPC campaigns", url: "https://help.openai.com/en/articles/20001412-create-ocpc-campaigns" },
      { label: "OpenAI: New ways to buy ChatGPT ads", url: "https://openai.com/index/new-ways-to-buy-chatgpt-ads/" },
    ],
    relatedPaths: ["/blog/chatgpt-ads", "/blog/how-to-advertise-on-chatgpt"],
  },
];
