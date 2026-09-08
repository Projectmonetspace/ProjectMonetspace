import type { BlogArticle } from "./blog-types.ts";

const yorollSources = [
  { label: "Yoroll — H3 Superfast and YoLive launch announcement", url: "https://www.globenewswire.com/news-release/2026/09/07/3357194/0/en/10-seconds-of-video-in-4-seconds-yoroll-launches-h3-superfast-and-yolive.html" },
  { label: "YoLive — live interactive storytelling product", url: "https://yo.live/" },
  { label: "Yoroll — interactive video platform", url: "https://app.yoroll.ai/" },
];

export const yorollH3SuperfastArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Yoroll H3 Superfast",
    targetSearchIntent: "Broad overview of Yoroll H3 Superfast, its launch, performance claims, YoLive integration, availability and current limitations",
    targetQuery: "Yoroll H3 Superfast",
    slug: "yoroll-h3-superfast-yolive",
    title: "Yoroll H3 Superfast: Speed, YoLive, Features & Availability",
    metaTitle: "Yoroll H3 Superfast: Speed, YoLive, Features & Availability",
    metaDescription: "Yoroll H3 Superfast is a post-trained AI video model powering YoLive. See its 4-second vendor benchmark, live product proof, availability and current limits.",
    h1: "Yoroll H3 Superfast and YoLive: Real-Time AI Video Explained",
    excerpt: "Yoroll H3 Superfast is a post-trained MiniMax H3 derivative built for faster-than-playback video generation and used in the public YoLive interactive storytelling product.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Yoroll H3 Superfast timeline showing a vendor-reported ten-second 768p video generated in four seconds alongside an interactive story voting flow",
    sections: [
      { id: "what-launched", title: "What Yoroll launched", blocks: [
        { type: "paragraph", html: "Yoroll announced H3 Superfast and launched YoLive on September 7, 2026. H3 Superfast is described by Yoroll as its own post-trained video model based on the open-weight MiniMax H3 family, while YoLive is the public interactive storytelling product powered by it." },
        { type: "paragraph", html: "The launch is more than a roadmap statement because YoLive is publicly reachable. The live interface currently exposes story channels, live chat, candidate voting, a play queue and a control for directing the next scene." },
      ]},
      { id: "speed-claim", title: "The four-second speed claim", blocks: [
        { type: "paragraph", html: "Yoroll reports that H3 Superfast generates ten seconds of 768p video at 24 frames per second with native audio in four seconds on eight NVIDIA B200 GPUs. That is a vendor-reported benchmark under a specific high-end hardware configuration, not a universal end-to-end latency guarantee." },
        { type: "note", html: "Clip-generation time is not the same as viewer-response time. Voting, orchestration, moderation, networking and delivery can add latency around the model itself." },
      ]},
      { id: "why-faster-than-playback-matters", title: "Why faster-than-playback video matters", blocks: [
        { type: "paragraph", html: "If a system can generate a ten-second continuation before the current ten-second segment finishes playing, the next scene can be prepared while viewers are still watching. That changes the product design from asynchronous prompt-and-wait generation toward interactive programming." },
        { type: "paragraph", html: "For creators and marketers, the credible near-term implication is audience-driven video experiences. Broader uses such as live branded storytelling, virtual characters and game-like streams are plausible extensions of the architecture, not announced H3 Superfast commercial features." },
      ]},
      { id: "yolive-proof", title: "What YoLive proves — and what it does not", blocks: [
        { type: "paragraph", html: "YoLive proves that Yoroll is operating H3 Superfast inside a public web product where viewers can propose and vote on directions for a shared story. The current interface also shows session states such as preparing or paused, so availability can vary by channel." },
        { type: "paragraph", html: "A public YoLive interface does not prove a general H3 Superfast developer API, downloadable derivative weights, API quotas, a standalone generation price or a public model license. None of those were verified in first-party documentation at publication time." },
      ]},
      { id: "availability-pricing-license", title: "Availability, pricing, API and license status", blocks: [
        { type: "list", items: ["YoLive web product: publicly accessible", "H3 Superfast general developer API: not verified", "H3 Superfast public weights: not verified", "Standalone API or generation pricing: not verified", "Derivative-model license: not verified"] },
        { type: "paragraph", html: "Do not infer H3 Superfast pricing or licensing from other H3-family hosts or from the underlying MiniMax H3 release. Yoroll's derivative release needs its own first-party terms before those claims can be made safely." },
      ]},
      { id: "limitations", title: "Current limitations", blocks: [
        { type: "paragraph", html: "The main limitation is documentation depth. Yoroll has published a concrete launch claim and a functioning public product, but not a complete developer-facing technical package with independent benchmarks, hardware scaling data, pricing, API documentation or downloadable model artifacts." },
        { type: "paragraph", html: "A fair comparison with MiniMax H3 or other video models would require matched prompts, resolutions, clip lengths and documented hardware. The current launch material is not enough to claim broad superiority in image quality, motion quality, prompt adherence or consistency." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "H3 Superfast is notable because Yoroll pairs an aggressive speed claim with a public interactive product that makes faster-than-playback generation useful. The strongest verified facts today are the September 7 launch, the eight-B200 benchmark conditions and the live YoLive experience; API access, public weights, pricing and derivative licensing remain open questions." },
      ]},
    ],
    sources: yorollSources,
    relatedPaths: [],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Yoroll H3 Superfast",
    targetSearchIntent: "Use the live YoLive product to watch a channel, propose the next scene, vote on directions and understand how the generated story queue works",
    targetQuery: "how to use YoLive",
    parentSlug: "yoroll-h3-superfast-yolive",
    slug: "how-to-use-yolive-ai",
    title: "How to Use YoLive: Direct and Vote on Real-Time AI Stories",
    metaTitle: "How to Use YoLive: Direct & Vote on Real-Time AI Stories",
    metaDescription: "Learn how to use YoLive to enter a channel, propose the next scene, vote on story directions and understand the live generated-story queue.",
    h1: "How to Use YoLive for Real-Time AI Storytelling",
    excerpt: "YoLive is Yoroll's public interactive storytelling product, where viewers can watch a shared AI-generated story, submit directions and vote on what should happen next.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Illustrated YoLive workflow with a live video window, audience story proposals, votes and a generated next-scene queue",
    sections: [
      { id: "before-you-start", title: "Before you start", blocks: [
        { type: "paragraph", html: "YoLive is the public product built around Yoroll H3 Superfast. For the model's launch details, benchmark conditions and current API or weights status, read the main <a href=\"/blog/yoroll-h3-superfast-yolive\">Yoroll H3 Superfast guide</a>." },
        { type: "paragraph", html: "The currently verified experience is browser-based. Individual channels can be active, paused or preparing, so the room state you see can differ from another visit." },
      ]},
      { id: "choose-channel", title: "1. Open YoLive and choose a channel", blocks: [
        { type: "paragraph", html: "Open YoLive and select an available channel. The live interface currently lists channels and shows whether a session is playing, paused or preparing." },
        { type: "paragraph", html: "When a channel is active, watch enough of the current sequence to understand the characters, setting and immediate conflict before proposing what should happen next." },
      ]},
      { id: "direct-next-scene", title: "2. Direct the next scene", blocks: [
        { type: "paragraph", html: "YoLive exposes a 'Direct the next scene' control. At verification time the live interface displayed a 240-character limit, so a focused action works better than a long multi-step paragraph." },
        { type: "note", html: "Short, concrete prompting is practical advice rather than an official Yoroll prompt specification. Yoroll has not published a complete public prompt-language guide for YoLive." },
      ]},
      { id: "vote-candidates", title: "3. Vote on story candidates", blocks: [
        { type: "paragraph", html: "The interface lets viewers vote on story proposals and surfaces popular candidates. Yoroll says the winning proposal guides the next generated scene, turning audience participation into part of the production loop." },
        { type: "paragraph", html: "Exact moderation, safety, tie-breaking and eligibility rules are not documented publicly in detail. Do not assume every submitted direction is guaranteed to enter the vote or become the next scene." },
      ]},
      { id: "play-queue", title: "4. Watch the play queue", blocks: [
        { type: "paragraph", html: "YoLive shows a play queue and indicates what is playing next. The queue coordinates the current scene, the selected direction and the next generation job rather than treating each clip as an isolated request." },
        { type: "paragraph", html: "Yoroll's launch benchmark is relevant here: the company reports ten seconds of 768p, 24fps video with native audio generated in four seconds on eight B200 GPUs. That can leave time to prepare a continuation while the current segment is still playing, although end-to-end product latency includes more than model inference." },
      ]},
      { id: "session-variability", title: "5. Expect live-session variability", blocks: [
        { type: "paragraph", html: "YoLive is a live shared product rather than a static demo. Viewer counts, candidate lists, queue state and channel availability can change, and a quiet room may simply be preparing or waiting for the next selected direction." },
        { type: "paragraph", html: "The current public experience should not be confused with a general H3 Superfast developer console. A general API, API pricing and downloadable H3 Superfast weights were not verified." },
      ]},
      { id: "prompting-ideas", title: "Useful directions to try", blocks: [
        { type: "list", items: ["introduce one obstacle", "reveal one new piece of information", "move a character to a visually distinct location", "force a clear decision", "add one event that can be shown in the next short segment"] },
        { type: "paragraph", html: "Avoid directions that require several minutes of exposition or bundle many unrelated scene changes. The useful goal is a suggestion the audience can understand quickly and the system can express visually in the next short segment." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Using YoLive is straightforward: enter a live channel, understand the current story, submit a concise next-scene direction, vote on candidates and watch the queue advance. The product is a useful public demonstration of audience-driven generative video, while the underlying H3 Superfast developer access remains much less documented." },
      ]},
    ],
    sources: yorollSources,
    relatedPaths: ["/blog/yoroll-h3-superfast-yolive"],
  },
];
