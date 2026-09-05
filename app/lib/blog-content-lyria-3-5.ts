import type { BlogArticle } from "./blog-types.ts";

const lyriaSources = [
  { label: "Google Gemini app — Lyria 3.5 announcement", url: "https://blog.google/innovation-and-ai/products/gemini-app/better-tracks-lyria-gemini/" },
  { label: "Gemini API — Lyria 3.5 music generation", url: "https://ai.google.dev/gemini-api/docs/music-generation" },
  { label: "Gemini API — Lyria 3.5 model", url: "https://ai.google.dev/gemini-api/docs/models/lyria-3.5" },
  { label: "Gemini Developer API pricing", url: "https://ai.google.dev/gemini-api/docs/pricing" },
  { label: "Gemini API release notes", url: "https://ai.google.dev/gemini-api/docs/changelog" },
];

export const lyria35Articles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Google Lyria 3.5",
    targetSearchIntent: "Broad overview of Lyria 3.5, its Gemini app and API availability, features, pricing, output formats, creator use cases, limitations and current rollout status",
    targetQuery: "Lyria 3.5",
    slug: "lyria-3-5-google-ai-music-generator",
    title: "Lyria 3.5: Gemini Music Generator, API, Pricing & Features",
    metaTitle: "Lyria 3.5: Gemini Music Generator, API & Pricing",
    metaDescription: "Google's Lyria 3.5 is now in Gemini and the Gemini API. See verified features, API pricing, model access, output details, creator uses and current limits.",
    h1: "Lyria 3.5: Google's AI Music Generator in Gemini and the API",
    excerpt: "Google has expanded Lyria 3.5 into the Gemini app and Gemini API, making full-song music generation accessible to creators and developers through a broader set of Google products.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Lyria 3.5 music generation represented by a waveform and creative audio interface in the Project Monet visual system",
    sections: [
      { id: "what-it-is", title: "What is Lyria 3.5?", blocks: [
        { type: "paragraph", html: "Lyria 3.5 is Google's flagship music-generation model for creating full-length songs from text prompts or image inputs. Google documents 44.1 kHz stereo output, MP3 audio and text lyrics, with structural control for verses, choruses and bridges." },
        { type: "paragraph", html: "Google announced broader availability in the Gemini app on September 4, 2026, following the model's public-preview release in the Gemini API on September 3. This is a wider access event, not the original introduction of the Lyria family." },
      ]},
      { id: "gemini-app", title: "Lyria 3.5 in the Gemini app", blocks: [
        { type: "paragraph", html: "The Gemini app now lets users create music by describing a genre, choosing vocal or instrumental styles and using creative templates. Google says the experience is available to users globally on web and mobile." },
        { type: "paragraph", html: "For creators, that makes Lyria useful for rapid soundtrack exploration, backing tracks, jingles, custom themes and other concept-stage audio. The app is the simpler no-code surface, while the Gemini API is intended for programmatic workflows." },
      ]},
      { id: "api", title: "Lyria 3.5 API access", blocks: [
        { type: "paragraph", html: "Google's current developer documentation uses the model ID <code>lyria-3.5</code> for full-song generation through the Gemini API. The model accepts text and image inputs and returns generated audio plus lyrics text where available." },
        { type: "paragraph", html: "The model is specialized for music generation. Google's model page marks function calling, search grounding, code execution, structured outputs, Live API and several other general Gemini capabilities as unsupported." },
      ]},
      { id: "pricing", title: "Current Lyria 3.5 pricing", blocks: [
        { type: "paragraph", html: "Google's Gemini Developer API pricing page currently lists Lyria 3.5 full-song generation at <strong>$0.08 per song</strong>, with no free API tier for this model." },
        { type: "note", html: "A $0.04 price is still listed for the legacy <strong>Lyria 3 Clip Preview</strong> model, <code>lyria-3-clip-preview</code>. It should not be described as a Lyria 3.5 clip endpoint." },
      ]},
      { id: "inputs-outputs", title: "Inputs, outputs and song structure", blocks: [
        { type: "paragraph", html: "Lyria 3.5 supports both text prompts and image inputs. That allows workflows where a campaign image, product visual or mood board influences the generated music alongside an explicit written brief." },
        { type: "paragraph", html: "Google documents full-length songs that can run for several minutes, with duration influenced through prompting. The model is designed for coherent musical structure rather than a fixed one-size-fits-all song length." },
      ]},
      { id: "creator-use", title: "Creator and marketing use cases", blocks: [
        { type: "list", items: [
          "background music for reels and short-form video",
          "campaign-specific jingles and intro themes",
          "prototype audio for ads and client pitches",
          "music concepts generated from campaign imagery",
          "rapid soundtrack exploration before final production",
        ]},
        { type: "paragraph", html: "These are workflow ideas, not a blanket statement about commercial rights. Paid API access does not by itself settle copyright, ownership, licensing or platform-disclosure obligations." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "paragraph", html: "Lyria 3.5 remains a public-preview model as of Google's September 2026 release notes. Preview availability, quotas and behavior can change, so production systems should recheck the live model documentation and project limits before launch." },
        { type: "paragraph", html: "Google's quality claims should be treated as vendor claims. Independent evidence is not yet strong enough to declare Lyria 3.5 universally better than competing music generators such as Suno or Udio." },
      ]},
      { id: "availability", title: "Where Lyria 3.5 is available", blocks: [
        { type: "paragraph", html: "Google lists Lyria 3.5 in the Gemini app and Gemini API, with access also referenced through Google AI Studio and other Google creative surfaces. Consumer-app availability and developer-project access are different surfaces and should not be assumed to have identical account or billing requirements." },
        { type: "paragraph", html: "For API deployments, verify the active model ID, project billing, quotas and regional/account access immediately before shipping." },
      ]},
    ],
    sources: lyriaSources,
    relatedPaths: ["/blog/lyria-3-5-api-pricing", "/blog/how-to-use-lyria-3-5-in-gemini"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Google Lyria 3.5",
    targetSearchIntent: "Developer and commercial evaluation of Lyria 3.5 API access, current model IDs, request pricing, supported inputs/outputs and implementation constraints",
    targetQuery: "Lyria 3.5 API pricing",
    parentSlug: "lyria-3-5-google-ai-music-generator",
    slug: "lyria-3-5-api-pricing",
    title: "Lyria 3.5 API & Pricing Guide: Models, Costs and Setup",
    metaTitle: "Lyria 3.5 API Pricing: Models, Costs & Setup",
    metaDescription: "Lyria 3.5 API pricing is $0.08 per full-song request. See the current model ID, inputs, outputs, setup pattern and implementation limits.",
    h1: "Lyria 3.5 API Pricing, Model ID and Developer Setup",
    excerpt: "Google's current Lyria 3.5 API uses the lyria-3.5 model ID and charges $0.08 per full-song request, with text and image input support through the Gemini API.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Technical Lyria 3.5 API pricing graphic with waveform, API code motif and a current $0.08 full-song price callout",
    sections: [
      { id: "pricing", title: "Current Lyria 3.5 API pricing", blocks: [
        { type: "paragraph", html: "Google's current Gemini Developer API pricing page lists <code>lyria-3.5</code> at <strong>$0.08 per full-song request</strong>. The free API tier is listed as unavailable for this model." },
        { type: "paragraph", html: "Do not convert this into a token-price estimate: Google publishes Lyria 3.5 pricing per request for the music-generation endpoint." },
      ]},
      { id: "model-id", title: "Use the current model ID", blocks: [
        { type: "paragraph", html: "The live model page and September 3 release notes identify the current full-song model as <code>lyria-3.5</code>. Google labels it as public preview." },
        { type: "note", html: "Older launch-week drafts referenced <code>lyria-3.5-pro-preview</code> and a Lyria 3.5 clip variant. The current docs instead use <code>lyria-3.5</code> for full songs, while the $0.04 30-second route is the legacy <code>lyria-3-clip-preview</code> model." },
      ]},
      { id: "inputs", title: "Supported inputs and outputs", blocks: [
        { type: "paragraph", html: "Lyria 3.5 accepts text and image inputs and outputs audio plus lyrics text. Google's current model page specifies MP3 output and 44.1 kHz stereo audio for the full-song model." },
        { type: "paragraph", html: "The model has a 131,072-token input limit, but it should still be treated as a specialized generation model rather than a general-purpose reasoning model." },
      ]},
      { id: "api-pattern", title: "Basic API pattern", blocks: [
        { type: "paragraph", html: "Google's current music-generation guide uses the Interactions API for Lyria. A request identifies <code>lyria-3.5</code> and supplies the music brief as input; developers can then read generated audio and text output from the interaction response." },
        { type: "paragraph", html: "Production code should validate the current response schema, handle missing or failed outputs explicitly and avoid assuming every response part contains audio." },
      ]},
      { id: "unsupported", title: "What Lyria 3.5 does not support", blocks: [
        { type: "paragraph", html: "Google marks function calling, search grounding, code execution, structured outputs, Live API, caching and several other general Gemini capabilities as unsupported for Lyria 3.5." },
        { type: "paragraph", html: "If an application needs planning, research or tool use before music generation, use a general Gemini model for orchestration and hand the final music brief to Lyria 3.5 for the audio-generation step." },
      ]},
      { id: "cost-examples", title: "Simple cost examples", blocks: [
        { type: "list", items: [
          "100 full-song requests = $8",
          "1,000 full-song requests = $80",
          "10,000 full-song requests = $800",
        ]},
        { type: "paragraph", html: "These are direct arithmetic examples from Google's current $0.08 request price. They do not include storage, delivery, moderation, orchestration, hosting or other application costs." },
      ]},
      { id: "production-checklist", title: "What to verify before production", blocks: [
        { type: "list", items: [
          "the active model ID and preview status",
          "project billing and current quotas",
          "region and account access",
          "response handling and retry behavior",
          "storage and delivery costs outside the model request",
          "current Google terms for the intended use case",
        ]},
        { type: "paragraph", html: "Pricing alone is not a capacity or licensing guarantee. Recheck Google's live documentation before committing production budgets or customer-facing rights claims." },
      ]},
    ],
    sources: lyriaSources,
    relatedPaths: ["/blog/lyria-3-5-google-ai-music-generator"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Google Lyria 3.5",
    targetSearchIntent: "Creator workflow for generating music in the Gemini app with Lyria 3.5, including prompt structure, vocal or instrumental choices, short versus longer tracks and practical content uses",
    targetQuery: "how to use Lyria 3.5 in Gemini",
    parentSlug: "lyria-3-5-google-ai-music-generator",
    slug: "how-to-use-lyria-3-5-in-gemini",
    title: "How to Generate Music with Lyria 3.5 in Gemini",
    metaTitle: "How to Use Lyria 3.5 in Gemini to Generate Music",
    metaDescription: "Learn how to generate music with Lyria 3.5 in Gemini: prompt genres, vocals, instrumentals, track length and creator-ready music for reels, ads and brand concepts.",
    h1: "How to Generate Music with Lyria 3.5 in Gemini",
    excerpt: "Lyria 3.5 is available globally in the Gemini app, with genre controls, vocal or instrumental styles, templates and short or longer track choices for creator workflows.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Creator workflow for generating AI music with Lyria 3.5 in Gemini, represented by a prompt panel, waveform and short-form video frame",
    sections: [
      { id: "start-with-job", title: "Start with the job the track needs to do", blocks: [
        { type: "paragraph", html: "Begin with the role of the music, not just a genre label. A useful brief can name the platform, energy, vocal preference and where the music must leave room for dialogue or edits." },
        { type: "paragraph", html: "For example, ask for an energetic electronic instrumental for a fast-cut product reel, with an immediate hook, a cleaner middle section for voiceover and a concise ending. Treat the requested timing as creative direction rather than a guarantee of an exact second count." },
      ]},
      { id: "style-controls", title: "Use Gemini's announced style controls deliberately", blocks: [
        { type: "paragraph", html: "Google says the Gemini app lets users select or describe a genre and choose between vocal or instrumental styles. It also provides templates to jump-start common music ideas." },
        { type: "paragraph", html: "For dialogue-heavy social content, an instrumental is often the easier starting point because lyrics can compete with speech. Vocal tracks can fit jingles, theme songs or concepts where the song itself is the main creative." },
      ]},
      { id: "prompt-detail", title: "Describe texture, energy and structure", blocks: [
        { type: "paragraph", html: "Reduce ambiguity by adding qualities such as instrumentation, energy, mood and arrangement instead of relying on one broad genre word. A prompt can ask for modern synth-pop with crisp drums and a clean bass groove, or sparse dark electronic music with no vocals." },
        { type: "paragraph", html: "Google positions Lyria 3.5 around richer arrangements, and the Gemini app now offers short or longer track choices. You can describe an arc such as hook, quieter middle and clean ending, but the consumer announcement does not promise exact duration control to the second." },
      ]},
      { id: "creator-workflows", title: "Turn creator and brand briefs into music", blocks: [
        { type: "paragraph", html: "Translate a visual or brand brief into sonic attributes: premium, minimalist, energetic, cinematic, playful or restrained. Then specify whether the result should sit under voiceover, carry an ad hook or work as a standalone jingle." },
        { type: "paragraph", html: "Google specifically lists backing tracks and brand jingles as Gemini-app use cases. For a reel, useful instructions include a fast opening hook, enough space for speech, a clear beat for edit points and a clean ending." },
      ]},
      { id: "images-and-api", title: "Keep Gemini-app and API capabilities distinct", blocks: [
        { type: "paragraph", html: "Google's developer documentation supports text-and-image-conditioned music generation through Lyria APIs. The September 4 Gemini-app announcement, however, focuses on genre selection, vocal or instrumental styles, templates and short or longer tracks, so do not assume every API control is exposed identically in the consumer interface." },
        { type: "paragraph", html: "Use Gemini for fast manual creation and iteration. Use the API when software must generate tracks programmatically, repeat briefs at scale or connect music generation to a larger automated workflow." },
      ]},
      { id: "iterate-review", title: "Iterate carefully and review before publishing", blocks: [
        { type: "paragraph", html: "When an output is close, change one major variable at a time: energy, instrumentation, vocal mode, arrangement or length preference. That makes it easier to understand which instruction improved the result." },
        { type: "paragraph", html: "Before publishing, check whether the hook fits the edit, whether vocals clash with narration, whether generated lyrics are suitable and whether current Google terms and platform disclosure policies fit the intended use. API or app availability is not itself a blanket commercial-rights guarantee." },
      ]},
      { id: "faq", title: "Lyria 3.5 in Gemini FAQ", blocks: [
        { type: "paragraph", html: "Google announced on September 4, 2026 that Lyria 3.5 is available to all users globally on Gemini web and mobile. The app supports genre selection, vocal or instrumental styles, templates and short or longer track choices." },
        { type: "paragraph", html: "For most individual creators, Gemini is the simpler no-code starting point. Developers and higher-volume workflows should use the Lyria API guide for model IDs, pricing and implementation constraints." },
      ]},
    ],
    sources: lyriaSources,
    relatedPaths: ["/blog/lyria-3-5-google-ai-music-generator", "/blog/lyria-3-5-api-pricing"],
  },
];
