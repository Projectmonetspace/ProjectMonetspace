import type { BlogArticle } from "./blog-types.ts";

const minimaxH3MaxSources = [
  { label: "fal — How to use MiniMax H3 Max", url: "https://fal.ai/learn/tools/how-to-use-minimax-h3-max" },
  { label: "fal — H3 Max text-to-video API", url: "https://fal.ai/models/minimax/h3-max/text-to-video/api" },
  { label: "fal — H3 Max image-to-video API", url: "https://fal.ai/models/minimax/h3-max/image-to-video/api" },
  { label: "fal — H3 Max reference-to-video API", url: "https://fal.ai/models/minimax/h3-max/reference-to-video/api" },
  { label: "MiniMax Design — H3 Max", url: "https://design.minimax.io/tools/minimax-h3-max" },
];

export const minimaxH3MaxArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "MiniMax H3 Max",
    targetSearchIntent: "Understand what MiniMax H3 Max is, who built it, its current text/image/reference video capabilities, synchronized audio, pricing, speed, MiniMax Design availability and where standard MiniMax H3 is still the better fit.",
    targetQuery: "MiniMax H3 Max",
    slug: "minimax-h3-max",
    title: "MiniMax H3 Max: API, Pricing, Features & Reference Video",
    metaTitle: "MiniMax H3 Max: API, Pricing, Features & Reference Video",
    metaDescription: "MiniMax H3 Max explained: current API routes, reference-to-video, pricing, speed, synchronized audio, MiniMax Design access, limits and H3 comparison.",
    h1: "MiniMax H3 Max: Fast AI Video, API, Pricing and Reference-to-Video",
    excerpt: "H3 Max is fal Research's speed-optimized post-training of MiniMax H3, with 5–15 second 480p/768p video, synchronized audio and live text, image and reference-to-video routes.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "MiniMax H3 Max fast AI video workflow from text image and references to synchronized video and audio",
    sections: [
      { id: "what-is-h3-max", title: "What is MiniMax H3 Max?", blocks: [
        { type: "paragraph", html: "MiniMax H3 Max is a video-generation model that fal says it post-trained on top of the open-weight MiniMax H3 base model. fal describes the derivative as tuned for stronger prompt adherence and aesthetics while being co-optimized with its inference stack for higher throughput." },
        { type: "paragraph", html: "That attribution matters: H3 Max is not simply a faster hosted copy of standard H3, and it should not be described as a MiniMax-post-trained release. The base model comes from MiniMax; the H3 Max post-training and serving optimization described here come from fal." },
      ]},
      { id: "capabilities", title: "Current H3 Max capabilities", blocks: [
        { type: "list", items: ["Text-to-video", "Image-to-video, including first/last-frame workflows", "Reference-to-video with images, video and audio references", "Synchronized audio generated with the video", "5–15 second clips", "480p and 768p output"] },
        { type: "paragraph", html: "fal's September 1 guide says the reference-to-video route is now live and can condition on up to 12 supplied reference files across the supported reference types. This is newer than launch copy that described reference video as a follow-up capability." },
      ]},
      { id: "speed", title: "How fast is H3 Max?", blocks: [
        { type: "paragraph", html: "fal reports that a five-second 768p clip can complete in under three seconds of backend inference on its optimized stack. Treat that as a vendor-reported systems result rather than a universal end-to-end latency guarantee." },
        { type: "paragraph", html: "MiniMax Design publishes a different product-level expectation: about 15 seconds for a five-second video and about 40 seconds for a 15-second video. Queueing, prompt expansion, uploads, orchestration, network transfer and service load can all make user-perceived latency longer than backend inference." },
      ]},
      { id: "pricing", title: "MiniMax H3 Max pricing", blocks: [
        { type: "paragraph", html: "As rechecked on September 7, 2026, fal's current standard output pricing is $0.05 per generated second at 480p and $0.08 per generated second at 768p. A five-second clip therefore costs $0.25 or $0.40, and a 15-second clip costs $0.75 or $1.20, before any reference-input charges." },
        { type: "paragraph", html: "Reference-to-video has separate conditioning costs after a free token allowance. fal's current guide says the first 4,096 reference tokens are free and additional reference tokens are billed separately, so a reference workflow can cost more than the output-video price alone." },
        { type: "note", html: "Earlier launch pages mentioned temporary promotional pricing. This article uses the live standard rates verified on September 7 rather than treating an expiring launch promotion as evergreen pricing." },
      ]},
      { id: "availability", title: "Where H3 Max is available", blocks: [
        { type: "paragraph", html: "Developers can use H3 Max through fal's API/playground routes for text-to-video, image-to-video and reference-to-video. MiniMax Design also exposes H3 Max in a creator-facing workflow for text and image generation." },
        { type: "paragraph", html: "fal's current guide advertises a small daily free-generation allowance on its product experience. Free quotas are operational details and can change, so check the live product page before relying on them for a production workflow." },
      ]},
      { id: "h3-comparison", title: "H3 Max vs standard MiniMax H3", blocks: [
        { type: "paragraph", html: "H3 Max prioritizes rapid iteration at 480p/768p. Standard MiniMax H3 remains the broader choice when a workflow needs 2K output or instruction-based video editing." },
        { type: "paragraph", html: "Reference conditioning is no longer a reason by itself to choose standard H3, because fal now documents reference-to-video for H3 Max as well. Choose based on the output and workflow capabilities you actually need rather than assuming Max replaces the base model everywhere." },
      ]},
      { id: "use-cases", title: "Where H3 Max fits best", blocks: [
        { type: "paragraph", html: "The strongest fit is iteration-heavy short-form video: ad concepts, social clips, product motion tests, storyboard exploration, character or scene variations and applications where waiting for every generation slows the creative loop." },
        { type: "paragraph", html: "Synchronized audio is especially useful when a brief includes dialogue, ambience, effects or music and the team would otherwise need a separate audio-generation pass." },
      ]},
      { id: "limits", title: "Important limitations", blocks: [
        { type: "list", items: ["H3 Max currently tops out at 768p rather than standard H3's 2K option.", "Separate calls are not guaranteed to preserve identity or scene continuity deterministically.", "Reference conditioning helps but does not remove the need for careful prompting and review.", "fal's speed and preference-evaluation claims are vendor-reported, not independent universal benchmarks.", "Provider pricing and free allowances can change after publication."] },
      ]},
      { id: "faq", title: "MiniMax H3 Max FAQ", blocks: [
        { type: "paragraph", html: "<strong>Who built H3 Max?</strong> MiniMax built the H3 base model; fal says it post-trained H3 Max on top of that open-weight base and optimized it with fal's inference stack." },
        { type: "paragraph", html: "<strong>Does H3 Max generate audio?</strong> Yes. fal's current documentation says synchronized audio is generated alongside the video." },
        { type: "paragraph", html: "<strong>Is reference-to-video live?</strong> Yes. fal now publishes a live reference-to-video route and current setup documentation." },
        { type: "paragraph", html: "<strong>What does it cost?</strong> The standard rates verified September 7 are $0.05/s at 480p and $0.08/s at 768p, with separate conditioning charges possible for reference inputs." },
      ]},
      { id: "next", title: "Continue reading", blocks: [
        { type: "paragraph", html: "For implementation details, endpoint selection, queue handling, server-side authentication and cost controls, use the dedicated H3 Max API and pricing guide." },
      ]},
    ],
    sources: minimaxH3MaxSources,
    relatedPaths: ["/blog/minimax-h3-max-api-pricing"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "MiniMax H3 Max",
    targetSearchIntent: "Call H3 Max programmatically through fal, choose the correct text/image/reference route, understand current parameters, queue handling, standard per-second pricing, reference-input charges and safe server-side authentication.",
    targetQuery: "MiniMax H3 Max API",
    parentSlug: "minimax-h3-max",
    slug: "minimax-h3-max-api-pricing",
    title: "MiniMax H3 Max API & Pricing: Endpoints, Costs and Setup",
    metaTitle: "MiniMax H3 Max API & Pricing: Endpoints, Costs and Setup",
    metaDescription: "How to use the MiniMax H3 Max API on fal: text, image and reference video routes, parameters, queue workflow, pricing and server-side key setup.",
    h1: "MiniMax H3 Max API & Pricing: Endpoints, Costs and Setup",
    excerpt: "Use fal's separate H3 Max text, image and reference routes with server-side API keys, queue-aware job handling and current standard pricing of $0.05/s at 480p or $0.08/s at 768p.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "MiniMax H3 Max API diagram with text image and reference routes feeding an asynchronous video generation queue",
    sections: [
      { id: "routes", title: "Choose the right H3 Max API route", blocks: [
        { type: "paragraph", html: "fal currently exposes separate H3 Max routes for text-to-video, image-to-video and reference-to-video. Use text-to-video for prompt-only generation, image-to-video when a still should guide the opening composition, and reference-to-video when richer identity, style or audio conditioning is required." },
        { type: "paragraph", html: "The reference route is live in current fal documentation. Do not rely on older launch copy that described it as a future endpoint." },
      ]},
      { id: "auth", title: "Keep authentication server-side", blocks: [
        { type: "paragraph", html: "fal uses API-key authentication and its documentation recommends keeping `FAL_KEY` in a server environment. A browser or mobile client should call your authenticated backend rather than receive a persistent provider key." },
        { type: "paragraph", html: "Also apply your own user authorization and generation limits at that backend boundary so one leaked client session cannot create unlimited provider spend." },
      ]},
      { id: "queue", title: "Use the asynchronous queue workflow", blocks: [
        { type: "paragraph", html: "Video jobs are better handled as asynchronous work. fal documents submission that returns a request identifier, followed by status/result retrieval, with webhook support for long-running jobs." },
        { type: "list", ordered: true, items: ["Validate the prompt, media and requested settings.", "Submit to the matching H3 Max endpoint.", "Store the returned request ID.", "Return control to the client quickly.", "Poll status or receive a webhook.", "Persist the result URL and cost-relevant metadata."] },
      ]},
      { id: "parameters", title: "Important parameters and limits", blocks: [
        { type: "paragraph", html: "The current text-to-video schema exposes prompt, duration, resolution, seed, safety checking, prompt-expansion behavior and aspect-ratio controls. H3 Max supports 480p or 768p output and clips from five to 15 seconds." },
        { type: "paragraph", html: "Image-to-video adds image inputs and can support first/last-frame workflows. Reference-to-video accepts richer conditioning media. Treat exact enum names and file limits as API implementation details and recheck the live schema before shipping a client library or strict validator." },
      ]},
      { id: "pricing", title: "Current H3 Max API pricing", blocks: [
        { type: "paragraph", html: "The standard rates reverified September 7, 2026 are $0.05 per output second at 480p and $0.08 per output second at 768p. At those rates, five seconds costs $0.25/$0.40, ten seconds costs $0.50/$0.80 and 15 seconds costs $0.75/$1.20." },
        { type: "paragraph", html: "Reference inputs can add a second charge. fal's current guide says the first 4,096 reference tokens are free and additional reference tokens cost $0.02 per 1,000 tokens, with video-reference token usage depending on generated resolution and reference duration." },
        { type: "note", html: "Do not hard-code an expired launch discount into budgeting logic. Use the live endpoint price card for purchasing decisions." },
      ]},
      { id: "cost-control", title: "Control generation cost", blocks: [
        { type: "list", items: ["Draft at 480p and short duration while the brief is changing.", "Move selected outputs to 768p only when needed.", "Cap automatic retries.", "Track cost by job using duration, resolution and reference usage.", "Set per-user and per-workspace generation ceilings in your own application."] },
      ]},
      { id: "latency", title: "Set realistic latency expectations", blocks: [
        { type: "paragraph", html: "fal reports under three seconds of backend inference for a five-second 768p clip on its optimized stack. That is not the same as guaranteed API wall-clock latency." },
        { type: "paragraph", html: "Uploads, prompt expansion, reference preprocessing, queue delay, network transfer and CDN delivery can all affect the time a user waits, so instrument your own end-to-end latency instead of repeating the backend figure as an SLA." },
      ]},
      { id: "safeguards", title: "Production safeguards", blocks: [
        { type: "paragraph", html: "Validate uploaded media and file types, preserve request IDs for debugging, rate-limit generation, protect keys, and apply your own rights/moderation checks for likenesses, copyrighted inputs, dialogue and branded material." },
        { type: "paragraph", html: "Seeds are useful for controlled comparison but do not make every output deterministic, especially when prompt expansion or other generation settings change." },
      ]},
      { id: "route-choice", title: "Text vs image vs reference route", blocks: [
        { type: "paragraph", html: "Text-to-video is the simplest route for rapid concept generation. Image-to-video is a better fit for product shots, artwork, characters or compositions that should begin from a known visual. Reference-to-video is the stronger choice when multiple source assets need to influence identity, style or audio." },
        { type: "paragraph", html: "If your actual requirement is 2K output or instruction-based video editing, standard MiniMax H3 may be a better model choice than H3 Max despite the latter's speed." },
      ]},
      { id: "faq", title: "H3 Max API FAQ", blocks: [
        { type: "paragraph", html: "<strong>Is H3 Max available by API?</strong> Yes. fal currently exposes text, image and reference-to-video routes." },
        { type: "paragraph", html: "<strong>Can I call it directly from a browser?</strong> A browser can send a request, but exposing a persistent API key client-side is unsafe; use a server-side proxy." },
        { type: "paragraph", html: "<strong>Does H3 Max support 2K?</strong> No. The current H3 Max routes target 480p and 768p; standard H3 is the broader option when 2K is required." },
      ]},
      { id: "main-guide", title: "Read the main H3 Max guide", blocks: [
        { type: "paragraph", html: "For the broader model overview, MiniMax Design availability, synchronized audio, speed context, limitations and H3 comparison, return to the main MiniMax H3 Max article." },
      ]},
    ],
    sources: minimaxH3MaxSources,
    relatedPaths: ["/blog/minimax-h3-max"],
  },
];
