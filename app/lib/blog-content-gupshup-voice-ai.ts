import type { BlogArticle } from "./blog-types.ts";

const gupshupSources = [
  { label: "Gupshup Voice AI Platform", url: "https://www.gupshup.ai/voice-ai-agents" },
  { label: "Gupshup launch announcement", url: "https://www.prnewswire.com/news-releases/gupshup-launches-self-serve-voice-ai-platform-extending-conversational-engagement-into-phone-calls-302869131.html" },
  { label: "Gupshup Voice AI", url: "https://www.gupshup.ai/voice-ai" },
];

export const gupshupVoiceAiArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Gupshup Voice AI Platform",
    targetSearchIntent: "Understand what Gupshup's self-serve Voice AI Platform is, how it works, what it supports, current starting pricing and whether it fits a business workflow.",
    targetQuery: "Gupshup Voice AI",
    slug: "gupshup-voice-ai",
    title: "Gupshup Voice AI: Pricing, Features & How It Works",
    metaTitle: "Gupshup Voice AI: Pricing, Features & How It Works",
    metaDescription: "Gupshup launched a self-serve Voice AI Platform for phone and WhatsApp agents. See confirmed pricing, channels, setup, features, use cases and limits.",
    h1: "Gupshup Voice AI Platform: Pricing, Features and How It Works",
    excerpt: "A practical guide to Gupshup's self-serve Voice AI Platform, including channels, model flexibility, testing, observability and the confirmed launch pricing.",
    category: "AI",
    author: "Project Monet",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "Gupshup Voice AI connecting phone and WhatsApp calls to configurable AI models and business workflows",
    sections: [
      { id: "what-it-is", title: "What is Gupshup Voice AI?", blocks: [
        { type: "paragraph", html: "Gupshup announced its self-serve Voice AI Platform on September 3, 2026. It lets businesses build, test, deploy and monitor AI voice agents for support, sales and operational calls." },
        { type: "paragraph", html: "The launch extends Gupshup's conversational engagement stack from messaging into voice, with phone and WhatsApp voice workflows managed from the same broader platform." },
      ]},
      { id: "how-it-works", title: "How the platform works", blocks: [
        { type: "paragraph", html: "Teams configure an agent's voice, language, knowledge base, system prompt and workflows, then connect it to business tools. Gupshup says customers can choose speech-to-text, text-to-speech and LLM providers instead of accepting a fixed model stack." },
        { type: "paragraph", html: "Confirmed channels include PSTN phone calls, SIP trunks, WhatsApp voice and web calling. Gupshup also advertises cloud and on-premise telephony plus bring-your-own PSTN infrastructure." },
      ]},
      { id: "testing-observability", title: "Testing, guardrails and observability", blocks: [
        { type: "paragraph", html: "Before deployment, teams can define guardrails, run scenario simulations, use automated tests and compare models. Gupshup also documents recurring tests to catch behavior changes as prompts or knowledge bases evolve." },
        { type: "paragraph", html: "After calls go live, the platform exposes transcripts, conversation history, debug logs, success metrics, satisfaction signals and language usage for review." },
      ]},
      { id: "pricing", title: "Gupshup Voice AI pricing", blocks: [
        { type: "paragraph", html: "Gupshup's September 3 launch announcement says users receive <strong>100 minutes of test credits</strong> and pricing <strong>starts at $0.035 per minute</strong>, also stated as <strong>₹3.50 per minute</strong>." },
        { type: "note", html: "The published figure is explicitly a starting price. Gupshup supports different model and telephony choices, and its public launch material does not provide a complete provider-by-provider all-in cost matrix." },
      ]},
      { id: "fit-limitations", title: "Who should consider it and what to verify", blocks: [
        { type: "paragraph", html: "The platform is most relevant for repeatable call workflows with measurable outcomes such as lead qualification, appointment scheduling, support, collections and reminders." },
        { type: "paragraph", html: "Before production use, verify country and number availability, provider-level charges, self-serve versus enterprise entitlements, API access, data retention, compliance needs and escalation behavior for the exact deployment." },
      ]},
    ],
    sources: gupshupSources,
    relatedPaths: ["/blog/gupshup-voice-ai-pricing"],
  },
  {
    status: "published",
    articleType: "supporting",
    parentSlug: "gupshup-voice-ai",
    cluster: "Gupshup Voice AI Platform",
    targetSearchIntent: "Understand Gupshup Voice AI's confirmed launch price, test allocation, cost uncertainty and how to estimate a pilot without assuming undocumented fees.",
    targetQuery: "Gupshup Voice AI pricing",
    slug: "gupshup-voice-ai-pricing",
    title: "Gupshup Voice AI Pricing & Cost: What the $0.035/Min Rate Means",
    metaTitle: "Gupshup Voice AI Pricing: $0.035/Min, Credits & Costs",
    metaDescription: "Gupshup Voice AI starts at $0.035 (₹3.50) per minute with 100 test minutes. Here is what is confirmed, what may change total cost and how to budget.",
    h1: "Gupshup Voice AI Pricing: Starting Rate, Free Minutes and Cost Factors",
    excerpt: "What Gupshup's $0.035-per-minute starting rate and 100 test minutes mean, plus the cost factors to verify before scaling a voice-agent deployment.",
    category: "AI",
    author: "Project Monet",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "Gupshup Voice AI pricing showing a $0.035 per minute starting rate, 100 test minutes and model and telephony cost factors",
    sections: [
      { id: "launch-pricing", title: "Gupshup Voice AI pricing at launch", blocks: [
        { type: "paragraph", html: "Gupshup's September 3, 2026 launch announcement gives two concrete pricing facts: <strong>100 minutes of credits for testing</strong> and pricing <strong>starting at $0.035 per minute</strong>, also stated as <strong>₹3.50 per minute</strong>." },
        { type: "paragraph", html: "The announcement describes test credits rather than an unlimited free production plan, and it describes the paid rate as a starting price rather than a guaranteed all-in price for every configuration." },
      ]},
      { id: "baseline-arithmetic", title: "What $0.035 per minute costs in baseline arithmetic", blocks: [
        { type: "list", items: ["1,000 minutes × $0.035 = $35", "5,000 minutes × $0.035 = $175", "10,000 minutes × $0.035 = $350", "50,000 minutes × $0.035 = $1,750"] },
        { type: "note", html: "These figures are arithmetic using Gupshup's published starting rate, not vendor quotes or guaranteed invoices." },
      ]},
      { id: "cost-factors", title: "Why the final cost may differ", blocks: [
        { type: "paragraph", html: "Gupshup lets businesses choose STT, TTS and LLM providers and supports different telephony arrangements. Public launch material does not publish a complete fee matrix showing which provider, carrier, number, tax or country-specific costs are included in every self-serve setup." },
        { type: "paragraph", html: "Treat the headline rate as a planning floor until the account's exact model, channel and telephony economics are confirmed." },
      ]},
      { id: "pilot-budget", title: "How to budget a pilot", blocks: [
        { type: "paragraph", html: "Use the 100 test minutes for prompt, voice and scenario testing, then choose a limited live volume large enough to expose real-world edge cases without creating a large support or cost risk." },
        { type: "paragraph", html: "Track total minutes, successful outcomes, human transfers, failed tool actions, repeated calls and average cost per completed outcome. A slightly higher per-minute stack can still be operationally cheaper if it resolves more calls correctly." },
      ]},
      { id: "questions", title: "Questions to confirm before scaling", blocks: [
        { type: "list", items: ["Is the $0.035/₹3.50 rate applicable to your account, country and channel?", "Which STT, TTS and LLM costs are included, if any?", "Are PSTN, SIP or WhatsApp voice charges separate?", "Are there separate number, carrier, on-premise or volume-discount terms?"] },
        { type: "paragraph", html: "Because Gupshup's platform is model-flexible, cost per successful business outcome is more useful than focusing on per-minute price alone." },
      ]},
    ],
    sources: gupshupSources,
    relatedPaths: ["/blog/gupshup-voice-ai"],
  },
];
