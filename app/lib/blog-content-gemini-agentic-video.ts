import type { BlogArticle } from "./blog-types.ts";

const geminiAgenticVideoSources = [
  { label: "Google — Introducing agentic video understanding with Gemini", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/" },
  { label: "Google AI for Developers — Video understanding", url: "https://ai.google.dev/gemini-api/docs/video-understanding" },
  { label: "Google AI for Developers — Gemini API pricing", url: "https://ai.google.dev/gemini-api/docs/pricing" },
  { label: "Google AI for Developers — Gemini API release notes", url: "https://ai.google.dev/gemini-api/docs/changelog" },
];

export const geminiAgenticVideoArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Gemini agentic video understanding",
    targetSearchIntent: "Understand Google's agentic video-analysis mode, supported Gemini models, API access, pricing, capabilities, limits and creator/developer use cases.",
    targetQuery: "Gemini agentic video understanding",
    slug: "gemini-agentic-video-understanding",
    title: "Gemini Agentic Video Understanding: API, Pricing & How It Works",
    metaTitle: "Gemini Agentic Video Understanding: API, Pricing & How It Works",
    metaDescription: "Google's Gemini agentic video mode dynamically scans frames, audio and transcripts. See supported models, API access, pricing, limits and how it differs from static video analysis.",
    h1: "Gemini Agentic Video Understanding: How Google’s New Video Analysis Mode Works",
    excerpt: "Gemini can now dynamically inspect only the parts of a video needed for a task, instead of relying solely on a fixed one-frame-per-second pass.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    ogAlt: "Gemini agentic video understanding visual with a video timeline and selectively highlighted inspection windows",
    sections: [
      { id: "what-it-is", title: "What is Gemini agentic video understanding?", blocks: [
        { type: "paragraph", html: "Google launched <strong>agentic video understanding</strong> on September 1, 2026 for Gemini 3.7 Flash, Gemini 3.6 Flash and Gemini 3.5 Flash-Lite. Instead of processing a video only through the normal fixed sampling path, supported models can dynamically navigate the timeline and request visual frames, audio or transcript context based on the prompt." },
        { type: "paragraph", html: "Static video processing remains the default. Google's current guide describes static mode as extracting frames at a fixed rate of 1 FPS and placing the result into context in one pass, while agentic mode can adapt frame rate and resolution as it searches for relevant moments." },
      ]},
      { id: "capabilities", title: "What the agentic mode is designed to do", blocks: [
        { type: "paragraph", html: "The new mode is aimed at long-form video and targeted retrieval. Google highlights sub-second moment retrieval, anomaly detection, precise counting and questions where a model needs to revisit only a narrow part of a long recording." },
        { type: "paragraph", html: "For creators and marketers, that can support workflows such as finding every mention of a topic in a podcast, locating a concise explanation inside a keynote, identifying repeated themes across a long interview or surfacing candidate timestamps for a separate editing workflow." },
      ]},
      { id: "benchmarks", title: "Token efficiency and benchmark claims", blocks: [
        { type: "paragraph", html: "Google reports <strong>up to 88% lower token consumption</strong>, <strong>up to 66% lower analysis cost</strong> and <strong>up to 7% higher quality</strong> on evaluated video-analysis workloads. These are Google-reported benchmark results, not independent guarantees." },
        { type: "paragraph", html: "Real token use remains variable because agentic mode loads content based on query complexity and dynamic sampling depth. A prompt that requires detailed inspection across much of a video can still consume substantial context." },
      ]},
      { id: "pricing", title: "Gemini agentic video pricing", blocks: [
        { type: "paragraph", html: "Google says agentic video understanding uses normal Gemini API token pricing and has no separate feature fee. For Gemini 3.7 Flash, the current standard paid rate is <strong>$0.75 per million input tokens</strong> and <strong>$3.75 per million output tokens</strong>." },
        { type: "paragraph", html: "Do not turn Google's benchmark cost reduction into a fixed discount assumption. The actual cost depends on the selected model, prompt, video, input method and how aggressively the model resamples parts of the timeline." },
      ]},
      { id: "inputs", title: "Video input options and limits", blocks: [
        { type: "paragraph", html: "Google supports video through the Files API, Cloud Storage registration, inline data and public YouTube URLs. The video guide currently lists Files API limits of <strong>20 GB on paid access and 2 GB on free access</strong>, and recommends the Files API for large, long or reusable videos." },
        { type: "paragraph", html: "YouTube URL input is currently labeled <strong>Preview</strong> and Google says its pricing and rate limits are likely to change. Only public YouTube videos are supported by that path." },
      ]},
      { id: "api", title: "How developers enable it", blocks: [
        { type: "paragraph", html: "In the Interactions API, the key change is setting the individual video's <code>processing</code> field to <code>agentic</code>. The processing mode is set per video, so a single request can mix an agentic long recording with a static short clip." },
        { type: "paragraph", html: "Google documents Python, JavaScript and REST examples. The dedicated implementation guide below covers the setup in more detail." },
      ]},
      { id: "availability", title: "Availability and current rollout", blocks: [
        { type: "paragraph", html: "The feature is available through the Gemini API in Google AI Studio and the Gemini Enterprise Agent Platform. Google says consumer Gemini app rollout across Flash and Flash-Lite models is coming soon, so that rollout should not be described as universally complete yet." },
        { type: "paragraph", html: "Google also says the capability will later power YouTube's Ask YouTube experience. That is a forward-looking rollout statement, not evidence that every YouTube surface is already using the feature." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "paragraph", html: "Agentic video understanding analyzes video; it does not generate or edit final video output. A separate editing or generation system is still required for production media workflows." },
        { type: "paragraph", html: "Static mode can still be appropriate for short clips or tasks where predictable broad coverage matters more than selective retrieval. Production teams should compare task accuracy, latency and token use on their own representative videos." },
      ]},
    ],
    sources: geminiAgenticVideoSources,
    relatedPaths: ["/blog/how-to-use-gemini-agentic-video-api"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Gemini agentic video understanding",
    targetSearchIntent: "Implement Gemini agentic video processing with uploads or YouTube URLs in Python, JavaScript and REST while understanding limits and processing choices.",
    targetQuery: "how to use Gemini agentic video understanding API",
    parentSlug: "gemini-agentic-video-understanding",
    slug: "how-to-use-gemini-agentic-video-api",
    title: "How to Use Gemini Agentic Video Understanding API",
    metaTitle: "How to Use Gemini Agentic Video Understanding API",
    metaDescription: "Enable Gemini's agentic video mode with uploads or YouTube URLs. This guide covers supported models, Python, JavaScript, REST, file limits, pricing and common setup choices.",
    h1: "How to Use Gemini Agentic Video Understanding API",
    excerpt: "A practical implementation guide for enabling per-video agentic processing with Gemini's Interactions API.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    ogAlt: "Gemini agentic video API tutorial graphic with code brackets, a video timeline and selected frames",
    sections: [
      { id: "requirements", title: "Before you start", blocks: [
        { type: "paragraph", html: "Agentic video understanding currently supports Gemini 3.7 Flash, Gemini 3.6 Flash and Gemini 3.5 Flash-Lite. You need Gemini API access plus a supported video input." },
        { type: "paragraph", html: "Static processing remains the default. To use the new behavior through the Interactions API, set the video's <code>processing</code> field to <code>agentic</code>." },
      ]},
      { id: "files", title: "Upload a reusable video with the Files API", blocks: [
        { type: "paragraph", html: "For large, long or reusable recordings, Google's video guide recommends the Files API. It currently lists limits of 20 GB for paid access and 2 GB for free access. Wait until an uploaded file reaches an active state before using its URI in an interaction." },
        { type: "note", html: "The implementation pattern is: upload the video, poll until it is active, then pass its URI and MIME type in a video input with <code>processing: \"agentic\"</code>." },
      ]},
      { id: "python", title: "Python implementation pattern", blocks: [
        { type: "paragraph", html: "Using the current <code>google-genai</code> SDK, create a client, upload or reference a video, then call <code>client.interactions.create</code> with a supported model such as <code>gemini-3.7-flash</code>." },
        { type: "paragraph", html: "A minimal video item contains <code>type: \"video\"</code>, a video URI, the MIME type and <code>processing: \"agentic\"</code>. Add the user's retrieval question as a separate text input." },
      ]},
      { id: "javascript-rest", title: "JavaScript and REST use the same per-video setting", blocks: [
        { type: "paragraph", html: "The JavaScript SDK follows the same structure through <code>ai.interactions.create</code>. In REST, send the request to the Interactions API and include <code>\"processing\": \"agentic\"</code> on the video object." },
        { type: "paragraph", html: "Because processing is attached to each video, you can mix modes in one request: for example, agentic processing for a long lecture and static processing for a short experiment clip." },
      ]},
      { id: "youtube", title: "Analyze a public YouTube video", blocks: [
        { type: "paragraph", html: "Google's launch announcement says agentic video understanding works with uploaded videos and public YouTube videos. You can pass a public YouTube URL as the video URI and use agentic processing on supported models." },
        { type: "paragraph", html: "YouTube URL support is still <strong>Preview</strong>. Google currently says the feature is available at no charge, but pricing and rate limits are likely to change, so keep that dependency easy to update." },
      ]},
      { id: "prompts", title: "Write prompts that benefit from selective inspection", blocks: [
        { type: "list", items: ["Find every moment where a speaker mentions a specific feature.", "Locate the exact transition where an interface changes state.", "Identify the strongest short explanation of a topic inside a long recording.", "Compare transcript claims with what is visibly happening on screen." ] },
        { type: "paragraph", html: "Broad prompts such as a generic summary can still work, but targeted retrieval gives the model a clearer reason to navigate the timeline selectively." },
      ]},
      { id: "pricing", title: "Understand pricing before production", blocks: [
        { type: "paragraph", html: "Agentic video has no separate add-on fee. Standard token pricing for the selected Gemini model still applies. Gemini 3.7 Flash is currently listed at $0.75/M input and $3.75/M output on the standard paid tier." },
        { type: "paragraph", html: "Google's up-to-88% token and up-to-66% cost reductions are vendor benchmark results. Measure actual token use, latency and answer quality on your own workload rather than assuming those maximums." },
      ]},
      { id: "mistakes", title: "Common implementation mistakes", blocks: [
        { type: "list", items: ["Forgetting the processing field and unknowingly testing static mode.", "Using a Gemini model that does not currently support agentic video.", "Treating YouTube Preview behavior as permanent.", "Assuming benchmark savings apply equally to every video.", "Using agentic mode automatically for short clips without comparing static processing." ] },
        { type: "paragraph", html: "For production systems, log model, processing mode, token usage, latency and task outcome so the choice between static and agentic processing can be evidence-driven." },
      ]},
    ],
    sources: geminiAgenticVideoSources,
    relatedPaths: ["/blog/gemini-agentic-video-understanding"],
  },
];
