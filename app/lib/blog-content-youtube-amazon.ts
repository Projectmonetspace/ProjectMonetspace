import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-30";

const youtubeAmazonMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "YouTube Shopping × Amazon",
  targetSearchIntent: "Understand the new YouTube Shopping integration with Amazon, including eligibility, account linking, product tagging, monetization, availability and creator workflow.",
  targetQuery: "YouTube Amazon affiliate",
  slug: "youtube-shopping-amazon-affiliate",
  title: "YouTube Shopping Amazon Affiliate: Eligibility, Tagging & How It Works",
  metaTitle: "YouTube Shopping Amazon Affiliate: Eligibility & Tagging Guide",
  metaDescription: "YouTube now lets eligible U.S. creators tag Amazon products in Shorts, videos and livestreams. See eligibility, account linking, earnings and key limits.",
  h1: "YouTube Shopping Now Lets Creators Tag Amazon Products",
  excerpt: "Eligible U.S. YouTube Shopping creators can now link Amazon Associates or Influencer accounts and tag Amazon products natively in Shorts, videos and livestreams.",
  category: "Social Media",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a YouTube-style video, native shopping tag and Amazon product purchase flow",
  sections: [
    { id: "launch", title: "What changed", blocks: [
      { type: "paragraph", html: "YouTube announced on August 27, 2026 that Amazon had joined the YouTube Shopping Affiliate Program. Eligible U.S. creators can tag Amazon products directly in Shorts, long-form videos and livestreams instead of relying only on affiliate links in descriptions." },
      { type: "paragraph", html: "The product tag becomes part of YouTube's Shopping experience and the viewer completes the purchase through Amazon. This is a native commerce integration rather than merely another description-link format." },
    ]},
    { id: "eligibility", title: "Who is eligible", blocks: [
      { type: "paragraph", html: "YouTube's Amazon-specific help page requires the creator to be in the YouTube Partner Program, enrolled in the YouTube Shopping affiliate program in the United States, part of the Amazon Influencer Program or Amazon Associates Program in good standing, and to link the YouTube channel to that Amazon account." },
      { type: "paragraph", html: "The broader YouTube Shopping affiliate program operates in multiple countries, including India, but the August 27 Amazon rollout is specifically documented for eligible U.S. creators. Creator eligibility and international viewer routing are separate issues." },
    ]},
    { id: "tagging", title: "Tagging, auto-tagging and catalog limits", blocks: [
      { type: "paragraph", html: "Once enabled, creators can use the product picker in YouTube Studio to tag available Amazon products across Shorts, videos and livestreams. Amazon products can also participate in auto-tagging when that feature is enabled." },
      { type: "paragraph", html: "The available catalog is curated and not every Amazon listing is guaranteed to appear. YouTube directs creators to Creator Support when they want to suggest a missing product, and all tags remain subject to Shopping tagging guidelines, Community Guidelines and paid-promotion rules." },
    ]},
    { id: "earnings", title: "Earnings and analytics", blocks: [
      { type: "paragraph", html: "There is no single universal Amazon commission percentage published by YouTube for this integration. Rates and qualifying offers can vary. YouTube says creators can see aggregate daily revenue, clicks and sales, while finalized affiliate earnings are paid through the YouTube/AdSense payout flow." },
      { type: "paragraph", html: "The current Amazon reporting has a notable limitation: YouTube says creators cannot see which exact video or product drove an Amazon purchase. Returns can also reverse commissions, so estimated revenue should not be treated as final cash earnings." },
    ]},
    { id: "next", title: "How creators should approach the rollout", blocks: [
      { type: "paragraph", html: "The strongest early use cases are reviews, buying guides, tutorials, unboxings and product-focused livestreams where the tagged item is genuinely relevant. Native tags may reduce shopping friction, but creators should test performance rather than assume they always outperform description links." },
      { type: "paragraph", html: "For the actual connection and tagging steps, read <a href=\"/blog/how-to-tag-amazon-products-youtube-shopping\">How to Tag Amazon Products on YouTube Shopping</a>. Creators outside the U.S. should watch official YouTube documentation for expansion instead of assuming general Shopping availability means Amazon tagging is already enabled in their market." },
    ]},
  ],
  sources: [
    { label: "YouTube Blog — Amazon joins YouTube Shopping", url: "https://blog.youtube/news-and-events/youtube-shopping-amazon-creator-affiliates/" },
    { label: "YouTube Help — Tag Amazon products", url: "https://support.google.com/youtube/answer/17105501" },
    { label: "YouTube Help — Shopping affiliate eligibility", url: "https://support.google.com/youtube/answer/13376398" },
  ],
  relatedPaths: ["/blog/how-to-tag-amazon-products-youtube-shopping"],
};

const youtubeAmazonTagging: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "YouTube Shopping × Amazon",
  targetSearchIntent: "Set up the YouTube × Amazon affiliate connection and correctly tag eligible Amazon products in Shorts, videos and livestreams.",
  targetQuery: "how to tag Amazon products on YouTube",
  parentSlug: "youtube-shopping-amazon-affiliate",
  slug: "how-to-tag-amazon-products-youtube-shopping",
  title: "How to Tag Amazon Products on YouTube Shopping",
  metaTitle: "How to Tag Amazon Products on YouTube Shopping",
  metaDescription: "Learn how to link Amazon Associates or Influencer to YouTube Shopping, tag products in Shorts, videos and livestreams, use auto-tagging and fix common setup issues.",
  h1: "How to Tag Amazon Products on YouTube Shopping",
  excerpt: "Link an eligible Amazon affiliate account to YouTube Shopping, wait for enablement, tag relevant products in Studio and troubleshoot the most common setup problems.",
  category: "Social Media",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet step diagram showing a YouTube channel linking to an Amazon affiliate account and native product tags",
  sections: [
    { id: "eligibility", title: "Confirm eligibility before linking", blocks: [
      { type: "paragraph", html: "This setup guide follows the <a href=\"/blog/youtube-shopping-amazon-affiliate\">YouTube × Amazon overview</a>. YouTube currently requires YPP enrollment, U.S. YouTube Shopping affiliate enrollment, an active Amazon Influencer or Associates account in good standing, and a linked channel." },
      { type: "paragraph", html: "General YouTube Shopping availability in another country does not automatically provide Amazon tagging. Also check YouTube's normal affiliate-program restrictions around music channels, Official Artist Channels and Made for Kids content." },
    ]},
    { id: "link", title: "Link the Amazon account and wait for enablement", blocks: [
      { type: "paragraph", html: "Use the Amazon Storefront portal to link the correct YouTube channel to the active Amazon affiliate account. YouTube says creators who linked an Amazon account before September 2024 need to re-link through the current flow." },
      { type: "paragraph", html: "Enablement may not be instant. Wait for the YouTube Studio notification confirming that Amazon product tagging is ready before troubleshooting a missing product picker as if the connection failed." },
    ]},
    { id: "tag", title: "Tag products in Studio", blocks: [
      { type: "paragraph", html: "Once enabled, open the relevant content in YouTube Studio and use the Shopping product picker to search the available Amazon catalog. The integration supports Shorts, long-form videos and livestreams." },
      { type: "paragraph", html: "Tag products that are genuinely featured or discussed. If a specific item is unavailable, YouTube says creators can contact Creator Support with the product URL rather than substituting an unrelated listing." },
    ]},
    { id: "auto", title: "Use auto-tagging and reporting carefully", blocks: [
      { type: "paragraph", html: "When auto-tagging is enabled, YouTube may review recent and future uploads for eligible Amazon products. Review automatic suggestions for relevance instead of treating them as final." },
      { type: "paragraph", html: "Studio can show aggregate clicks, sales and estimated revenue, but YouTube currently says the Amazon integration does not identify which exact video or product produced a purchase. Commissions can also reverse after returns." },
    ]},
    { id: "troubleshoot", title: "Troubleshoot linking and disabled tagging", blocks: [
      { type: "paragraph", html: "If linking fails, verify the YouTube channel credentials used in Amazon and allow time for enablement. YouTube publishes youtubeshopping@amazon.com for persistent Amazon-linking or tagging problems and asks creators to include the channel URL and Amazon storefront link." },
      { type: "paragraph", html: "YouTube says tagging can be disabled when the Amazon affiliate account closes or the channel becomes unlinked. It also currently limits Amazon tagging eligibility to one YouTube channel per Amazon account. Keep paid-promotion disclosures and tagging policies in place even when the native Shopping tag is used." },
    ]},
  ],
  sources: [
    { label: "YouTube Help — Tag Amazon products", url: "https://support.google.com/youtube/answer/17105501" },
    { label: "YouTube Blog — Amazon creator affiliates", url: "https://blog.youtube/news-and-events/youtube-shopping-amazon-creator-affiliates/" },
    { label: "YouTube Help — Shopping affiliate eligibility", url: "https://support.google.com/youtube/answer/13376398" },
  ],
  relatedPaths: ["/blog/youtube-shopping-amazon-affiliate"],
};

export const youtubeAmazonArticles: BlogArticle[] = [youtubeAmazonMain, youtubeAmazonTagging];
