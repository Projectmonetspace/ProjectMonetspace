import type { BlogArticle } from "./blog-types.ts";

export const qwenAudio31Articles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Qwen-Audio-3.1",
    targetSearchIntent: "Understand the Qwen-Audio-3.1 family, what launched, which models are accessible, capabilities, API options, pricing and limitations",
    targetQuery: "Qwen-Audio-3.1",
    slug: "qwen-audio-3-1",
    title: "Qwen-Audio-3.1: API, Pricing, TTS-Next, ASR & Realtime",
    metaTitle: "Qwen-Audio-3.1: API, Pricing, TTS-Next, ASR & Realtime",
    metaDescription: "Qwen-Audio-3.1 explained: verified ASR, real-time voice and TTS-Next capabilities, API access, pricing, limits, regions and creator use cases.",
    h1: "Qwen-Audio-3.1: Models, API, Pricing and What's New",
    excerpt: "A verified guide to Alibaba's Qwen-Audio-3.1 family across TTS-Next, Realtime and ASR.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Qwen-Audio-3.1 family with ASR, Realtime and TTS-Next audio workflows",
    sections: [
      { id: "family", title: "What is Qwen-Audio-3.1?", blocks: [
        { type: "paragraph", html: "Qwen-Audio-3.1 is Alibaba Cloud Model Studio's current hosted audio family for speech recognition, live duplex voice interaction and generated audio. The important implementation detail is that these are separate models and endpoints, not one universal API." },
        { type: "paragraph", html: "The currently documented family includes qwen-audio-3.1-tts-next for generated speech and soundscapes, qwen-audio-3.1-realtime-plus for live voice applications, and Qwen-Audio-3.1 ASR variants for streaming and file transcription. Model availability and endpoint details vary by region." }
      ]},
      { id: "tts-realtime", title: "TTS-Next and Realtime solve different jobs", blocks: [
        { type: "paragraph", html: "TTS-Next is an AudioGen-style model that can generate speech together with dialogue, ambience and sound effects. Alibaba documents Chinese and English support, optional reference audio and completed audio outputs rather than a low-latency streaming assistant workflow." },
        { type: "paragraph", html: "Realtime Plus is designed for full-duplex spoken applications. It accepts audio and text and returns audio and text, supports turn detection and cloned voices, and can use either function calling or built-in web search; current documentation says those two capabilities cannot be enabled together." }
      ]},
      { id: "asr-pricing", title: "ASR, pricing and regional limits", blocks: [
        { type: "paragraph", html: "For transcription, Alibaba documents qwen-audio-3.1-asr-flash-streaming for live WebSocket recognition and qwen-audio-3.1-asr-flash-filetrans for asynchronous long-file transcription. File transcription supports recordings up to 12 hours or 2 GB, with speaker-diarization caveats for very long audio." },
        { type: "paragraph", html: "There is no single Qwen-Audio-3.1 price. For example, Alibaba currently lists TTS-Next Beijing pricing at $0.848 per million input tokens and $1.696 per million output tokens, while Realtime Plus uses separate text/audio input/output prices that differ by region. Always budget from the exact model and region page." }
      ]},
      { id: "access-limits", title: "Access, open-weight status and limitations", blocks: [
        { type: "paragraph", html: "The 3.1 audio models verified for this guide are accessed through Alibaba Cloud Model Studio. No open-weight release for this specific 3.1 audio family was verified in the first-party sources, so it should not be conflated with other downloadable Qwen model families." },
        { type: "paragraph", html: "TTS-Next is non-streaming and has narrower documented language coverage than ASR. Realtime and ASR have their own protocol and history limits. Launch percentage price-cut claims should remain attributed rather than being used as a substitute for the live model-specific price tables." }
      ]},
      { id: "which-model", title: "Which Qwen-Audio-3.1 model should you use?", blocks: [
        { type: "paragraph", html: "Choose ASR when the output is a transcript, Realtime Plus when a user needs a live spoken conversation, and TTS-Next when the output is a produced audio asset that may combine voices, ambience and effects." },
        { type: "paragraph", html: "For production, pin the exact model ID, deployment region and protocol, then recheck current pricing and limits. Treat ASR-Next launch references separately from the callable ASR-Flash model IDs unless Alibaba publishes a matching first-party API page." }
      ]}
    ],
    sources: [
      { label: "Alibaba Cloud — Qwen-Audio-3.1 TTS-Next", url: "https://www.alibabacloud.com/help/en/model-studio/qwen-audio-3-1-tts-next" },
      { label: "Alibaba Cloud — Qwen-Audio-3.1 Realtime Plus", url: "https://www.alibabacloud.com/help/en/model-studio/qwen-audio-3-1-realtime-plus" },
      { label: "Alibaba Cloud — Qwen Audio realtime guide", url: "https://www.alibabacloud.com/help/en/model-studio/qwen-audio-realtime-user-guides" },
      { label: "Alibaba Cloud — ASR models", url: "https://www.alibabacloud.com/help/en/model-studio/asr-model/" },
      { label: "Alibaba Cloud — Audio generation API", url: "https://www.alibabacloud.com/help/en/model-studio/audio-generation-api" }
    ],
    relatedPaths: ["/blog/qwen-audio-3-1-tts-next-api", "/blog/qwen-audio-3-1-realtime-api", "/blog/qwen-audio-3-1-asr-api"]
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Qwen-Audio-3.1",
    targetSearchIntent: "Generate complete audio with Qwen-Audio-3.1-TTS-Next using text prompts and reference audio",
    targetQuery: "Qwen-Audio-3.1 TTS-Next API",
    parentSlug: "qwen-audio-3-1",
    slug: "qwen-audio-3-1-tts-next-api",
    title: "How to Use Qwen-Audio-3.1 TTS-Next API for Podcasts, Dialogue & Sound Effects",
    metaTitle: "Qwen-Audio-3.1 TTS-Next API: Audio Generation Guide",
    metaDescription: "Use Qwen-Audio-3.1-TTS-Next to generate speech, dialogue, podcasts, ambience and sound effects. Verified API limits, reference audio and pricing.",
    h1: "How to Use Qwen-Audio-3.1 TTS-Next API",
    excerpt: "A practical TTS-Next guide for reference voices, podcasts, dialogue, ambience and sound effects.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Qwen-Audio-3.1 TTS-Next voice, dialogue, ambience and effects workflow",
    sections: [
      { id: "overview", title: "What TTS-Next is designed to generate", blocks: [
        { type: "paragraph", html: "qwen-audio-3.1-tts-next is more than a conventional text-to-speech endpoint. Alibaba documents unified generation of speech, multi-speaker dialogue, sound effects and ambient audio, making it relevant to podcasts, short-form video, games and narrative audio." },
        { type: "paragraph", html: "The model is served through Alibaba Cloud Model Studio and returns completed audio rather than a continuous low-latency voice stream. Use Qwen-Audio Realtime instead when the user needs an interactive spoken assistant." }
      ]},
      { id: "inputs", title: "Reference audio and prompt limits", blocks: [
        { type: "paragraph", html: "The API accepts a text prompt and up to three optional reference clips. Alibaba currently documents a maximum of 30 seconds and 10 MB per reference, with WAV, MP3 and OGG Opus accepted for references." },
        { type: "paragraph", html: "The text prompt is capped at 3,000 characters. Podcast scenarios can generate up to 240 seconds in one request, while other documented scenarios are capped at 120 seconds, so longer productions should be segmented deliberately." }
      ]},
      { id: "workflow", title: "A practical generation workflow", blocks: [
        { type: "paragraph", html: "Start with the core dialogue, then add speaker references, delivery instructions and environmental sound only where needed. Keep reference naming consistent so multi-speaker prompts remain interpretable." },
        { type: "paragraph", html: "The API returns an output audio URL whose documented lifetime is temporary. Production applications should copy completed assets to durable storage rather than treating the result URL as permanent hosting." }
      ]},
      { id: "pricing-limits", title: "Pricing, rate limits and output formats", blocks: [
        { type: "paragraph", html: "For China Beijing, Alibaba currently lists $0.848 per million input tokens and $1.696 per million output tokens and notes that list pricing excludes promotions. The documented rate limit is three requests per second." },
        { type: "paragraph", html: "WAV, MP3 and PCM are documented output formats. Pricing and availability are region-sensitive, so recheck the live model page instead of applying a launch headline or another Qwen audio model's price to TTS-Next." }
      ]},
      { id: "rights", title: "Reference voices, rights and production caveats", blocks: [
        { type: "paragraph", html: "Reference-audio support is a technical capability, not permission to imitate a person. Use reference voices only when the required rights and consent are in place, and preserve those governance decisions in production workflows." },
        { type: "paragraph", html: "TTS-Next currently documents Chinese and English, is non-streaming, and produces a mixed audio asset rather than separate editable stems. Validate consistency, editability and quality on the exact kind of content you plan to publish." }
      ]}
    ],
    sources: [
      { label: "Alibaba Cloud — Qwen-Audio-3.1 TTS-Next", url: "https://www.alibabacloud.com/help/en/model-studio/qwen-audio-3-1-tts-next" },
      { label: "Alibaba Cloud — Audio generation guide", url: "https://www.alibabacloud.com/help/en/model-studio/audio-generation" },
      { label: "Alibaba Cloud — Audio generation API", url: "https://www.alibabacloud.com/help/en/model-studio/audio-generation-api" },
      { label: "Alibaba Cloud — Model Studio rate limits", url: "https://www.alibabacloud.com/help/en/model-studio/rate-limit" }
    ],
    relatedPaths: ["/blog/qwen-audio-3-1", "/blog/qwen-audio-3-1-realtime-api"]
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Qwen-Audio-3.1",
    targetSearchIntent: "Build a real-time duplex voice application with Qwen-Audio-3.1-Realtime-Plus",
    targetQuery: "Qwen-Audio-3.1 Realtime API",
    parentSlug: "qwen-audio-3-1",
    slug: "qwen-audio-3-1-realtime-api",
    title: "Qwen-Audio-3.1 Realtime API: WebSocket, Voice Cloning & Tools",
    metaTitle: "Qwen-Audio-3.1 Realtime API: WebSocket, Pricing & Tools",
    metaDescription: "Build with qwen-audio-3.1-realtime-plus: verified context limits, WebSocket flow, VAD, voice cloning, tools, pricing and regional access.",
    h1: "Qwen-Audio-3.1 Realtime API Guide",
    excerpt: "How to build live duplex voice applications with Qwen-Audio-3.1 Realtime Plus.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Qwen-Audio-3.1 Realtime WebSocket voice assistant workflow",
    sections: [
      { id: "model", title: "What Realtime Plus provides", blocks: [
        { type: "paragraph", html: "qwen-audio-3.1-realtime-plus is Alibaba's 3.1 end-to-end conversational audio model. It accepts text and audio, streams text and audio back, and is designed for live spoken applications rather than offline asset generation." },
        { type: "paragraph", html: "Alibaba currently documents a 262,144-token context window, maximum input length of 245,760 tokens and maximum output length of 16,384 tokens. Audio-history controls impose separate practical limits on retained spoken context." }
      ]},
      { id: "websocket", title: "WebSocket lifecycle and turn detection", blocks: [
        { type: "paragraph", html: "The main integration path is event-driven WebSocket: configure the session, append microphone audio, consume response audio deltas, handle interruptions and close cleanly. Alibaba also documents AOQ and WebRTC integration paths." },
        { type: "paragraph", html: "Turn handling includes acoustic VAD, semantic smart-turn detection and push-to-talk. The current guide documents 16 kHz mono PCM input and 24 kHz mono PCM output and recommends small audio chunks for low-latency playback." }
      ]},
      { id: "tools-voices", title: "Function calling, web search and voice cloning", blocks: [
        { type: "paragraph", html: "Realtime Plus supports function calling and built-in web search, but Alibaba currently states that the two cannot be enabled together. Design the session around the capability that matters rather than promising simultaneous native search and tools." },
        { type: "paragraph", html: "Cloned voices are supported through Alibaba's separate Voice Cloning API and a compatible target model. Use voice cloning only with appropriate rights and consent; a voice ID does not establish permission to imitate another person." }
      ]},
      { id: "pricing", title: "Regional pricing and service limits", blocks: [
        { type: "paragraph", html: "For the Singapore international service, Alibaba currently lists $0.80 per million text-input tokens, $6.40 per million audio-input tokens, $6.40 per million text-output tokens and $24 per million audio-output tokens." },
        { type: "paragraph", html: "The Singapore documentation also lists 60 requests per minute and 100,000 tokens per minute. Beijing uses a separate price table, so there is no safe single global Realtime Plus price." }
      ]},
      { id: "history-choice", title: "Conversation history and choosing the right endpoint", blocks: [
        { type: "paragraph", html: "The realtime guide separately caps retained audio history by turns and cumulative audio duration. A large token context therefore should not be interpreted as unlimited raw audio history." },
        { type: "paragraph", html: "Use Realtime Plus when a user needs immediate spoken interaction. Use TTS-Next for produced audio assets and the ASR family when the application primarily needs transcription rather than an end-to-end conversational model." }
      ]}
    ],
    sources: [
      { label: "Alibaba Cloud — Qwen-Audio-3.1 Realtime Plus", url: "https://www.alibabacloud.com/help/en/model-studio/qwen-audio-3-1-realtime-plus" },
      { label: "Alibaba Cloud — Realtime voice guide", url: "https://www.alibabacloud.com/help/en/model-studio/qwen-audio-realtime-user-guides" },
      { label: "Alibaba Cloud — Speech-to-speech models", url: "https://www.alibabacloud.com/help/en/model-studio/s2s-model" },
      { label: "Alibaba Cloud — Model Studio rate limits", url: "https://www.alibabacloud.com/help/en/model-studio/rate-limit" }
    ],
    relatedPaths: ["/blog/qwen-audio-3-1", "/blog/qwen-audio-3-1-tts-next-api", "/blog/qwen-audio-3-1-asr-api"]
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Qwen-Audio-3.1",
    targetSearchIntent: "Choose and implement Qwen-Audio-3.1 speech recognition for streaming or long-file transcription",
    targetQuery: "Qwen-Audio-3.1 ASR API",
    parentSlug: "qwen-audio-3-1",
    slug: "qwen-audio-3-1-asr-api",
    title: "Qwen-Audio-3.1 ASR API: Streaming, File Transcription & Diarization",
    metaTitle: "Qwen-Audio-3.1 ASR API: Streaming, Files & Diarization",
    metaDescription: "Qwen-Audio-3.1 ASR guide: choose streaming or file transcription, understand language support, diarization, hotwords, limits and API workflows.",
    h1: "Qwen-Audio-3.1 ASR API Guide",
    excerpt: "Choose the correct Qwen-Audio-3.1 ASR path for live streams or long recorded files.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Qwen-Audio-3.1 ASR streaming and file transcription workflow",
    sections: [
      { id: "paths", title: "Streaming and file transcription are separate paths", blocks: [
        { type: "paragraph", html: "Alibaba documents qwen-audio-3.1-asr-flash-streaming for real-time WebSocket recognition and qwen-audio-3.1-asr-flash-filetrans for asynchronous recorded-file transcription. Choosing the endpoint by workload avoids mixing incompatible limits and features." },
        { type: "paragraph", html: "Use streaming for live captions, online meetings and voice applications. Use file transcription for completed recordings such as interviews, calls and long meetings where asynchronous processing and diarization are useful." }
      ]},
      { id: "limits", title: "Long files, streaming and diarization", blocks: [
        { type: "paragraph", html: "The current non-real-time guide documents file transcription up to 12 hours or 2 GB. When speaker diarization is enabled, Alibaba advises keeping audio within two hours because longer files may fail or time out." },
        { type: "paragraph", html: "The streaming model is documented for real-time recognition, but production clients still need reconnect, timeout and backoff handling. A model table's duration category should not be interpreted as a guarantee that any network connection can remain open indefinitely." }
      ]},
      { id: "accuracy", title: "Languages, hotwords and context enhancement", blocks: [
        { type: "paragraph", html: "Qwen-Audio-3.1 ASR supports a broad multilingual set and multiple Chinese dialects. Exact language support should be checked against the specific ASR variant instead of inherited from another Qwen audio model." },
        { type: "paragraph", html: "Alibaba documents hotwords for domain-specific names and context enhancement for recognition of proper nouns. These are useful in interviews, customer calls and technical meetings where generic speech models often miss product and organization names." }
      ]},
      { id: "workflow", title: "Asynchronous file workflow and output", blocks: [
        { type: "paragraph", html: "The long-file workflow is task based: submit the file, receive a task ID, poll or wait for completion, then download the result JSON from the returned URL. High-concurrency systems should follow Alibaba's callback guidance rather than polling aggressively." },
        { type: "paragraph", html: "Timestamps and diarization are endpoint-specific features. If your only goal is a transcript, ASR is the direct tool; if the application needs a spoken response as part of a live interaction, Realtime Plus may remove the need for a separate ASR round trip." }
      ]},
      { id: "naming", title: "Model naming and availability caveats", blocks: [
        { type: "paragraph", html: "Launch coverage also references ASR-Next, but the callable model IDs verified here are the documented ASR-Flash variants. Do not invent an ASR-Next endpoint or substitute an inferred model ID into production code." },
        { type: "paragraph", html: "Region availability and protocol support can change. Confirm the exact model, region, API key scope and current API reference before deployment, especially when moving between Singapore, Beijing and other Model Studio regions." }
      ]}
    ],
    sources: [
      { label: "Alibaba Cloud — ASR model guide", url: "https://www.alibabacloud.com/help/en/model-studio/asr-model/" },
      { label: "Alibaba Cloud — Non-real-time speech recognition", url: "https://www.alibabacloud.com/help/en/model-studio/non-realtime-speech-recognition-user-guide" },
      { label: "Alibaba Cloud — Improve ASR accuracy", url: "https://www.alibabacloud.com/help/en/model-studio/improve-asr-accuracy" }
    ],
    relatedPaths: ["/blog/qwen-audio-3-1", "/blog/qwen-audio-3-1-realtime-api"]
  }
];
