export type ArticleBlock =
  | { type: "paragraph"; html: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "note"; html: string };

export type ArticleSection = {
  id: string;
  title: string;
  blocks: ArticleBlock[];
};

export type BlogArticle = {
  status: "published" | "draft";
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  category: "AI" | "Social Media";
  author: string;
  datePublished: string;
  dateModified: string;
  ogAlt: string;
  sections: ArticleSection[];
  sources: { label: string; url: string }[];
  relatedPaths: string[];
};

const qwen: BlogArticle = {
  status: "published",
  slug: "qwen3-8-flash-next",
  title: "Qwen3.8-Flash-Next: Pricing, API, Context Window & Qwen4 Preview",
  metaTitle: "Qwen3.8-Flash-Next: Pricing, API, Context Window & Qwen4 Preview",
  metaDescription: "Qwen3.8-Flash-Next previews Qwen4 architecture. See its pricing, context length, open weights, benchmarks and current QwenCloud API status.",
  h1: "Qwen3.8-Flash-Next: What It Is, Pricing, API and Qwen4 Architecture Preview",
  excerpt: "Qwen's open-weight multimodal MoE release previews architectural ideas planned for Qwen4, with long context and a cost-focused hosted model announced alongside it.",
  category: "AI",
  author: "Project Monet",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  ogAlt: "Project Monet editorial graphic for Qwen3.8-Flash-Next and its Qwen4 architecture preview",
  sections: [
    {
      id: "in-brief",
      title: "Qwen3.8-Flash-Next in brief",
      blocks: [
        { type: "paragraph", html: "Qwen3.8-Flash-Next is a newly released <strong>multimodal mixture-of-experts model</strong> from Qwen. The company describes it as both a cost-efficiency-focused model and an <strong>early preview of architectural ideas intended for Qwen4</strong>." },
        { type: "paragraph", html: "The open weights were announced on <strong>August 26, 2026</strong>. Qwen says the model uses a 125B-parameter main network plus 51B additional N-gram embedding parameters, while activating about 6B parameters per token. It natively supports <strong>262,144 tokens of context</strong> and can be extended to <strong>1 million tokens with YaRN</strong>." },
        { type: "note", html: "The release is open weight. That is more precise than assuming every surrounding service component is open source." },
      ],
    },
    {
      id: "architecture",
      title: "What makes Qwen3.8-Flash-Next different?",
      blocks: [
        { type: "paragraph", html: "The release is notable because Qwen is exposing architectural changes before the broader Qwen4 family arrives. The company highlights four areas: attention, residual connections, embeddings and optimization." },
        { type: "subheading", text: "1. Qwen Sparse Attention" },
        { type: "paragraph", html: "Qwen3.8-Flash-Next combines Gated DeltaNet with a sparse-attention mechanism called <strong>Qwen Sparse Attention (QSA)</strong>. Qwen says QSA reduces the computational cost of long-context attention by selecting important context at a micro-block level rather than processing every token equally." },
        { type: "subheading", text: "2. Gated Residual" },
        { type: "paragraph", html: "The model introduces a <strong>Gated Residual</strong> design that widens the residual stream into multiple branches and dynamically controls how information moves through them. Qwen says this is intended to improve information flow and training stability with limited additional computation." },
        { type: "subheading", text: "3. N-gram embeddings" },
        { type: "paragraph", html: "Qwen adds 51B N-gram embedding parameters that can act as a form of local-pattern memory. Because these embeddings can be looked up rather than fully computed every token, Qwen says they can increase capacity at relatively low runtime cost and can be offloaded to host memory." },
        { type: "subheading", text: "4. Muon optimization" },
        { type: "paragraph", html: "The model is trained with the Muon optimizer, with additional changes to orthogonalization, parameter assignment and fused-matrix handling." },
      ],
    },
    {
      id: "context",
      title: "Qwen3.8-Flash-Next context window",
      blocks: [
        { type: "paragraph", html: "Qwen reports a <strong>262,144-token native context window</strong>, with support for extension to <strong>1,000,000 tokens using YaRN</strong>." },
        { type: "paragraph", html: "The production Qwen3.8-Flash service is described as using 1 million tokens of context by default. This distinction matters: the open-weight model's native context and the hosted production service configuration are not exactly the same thing." },
      ],
    },
    {
      id: "pricing-api",
      title: "Pricing and current API availability",
      blocks: [
        { type: "paragraph", html: "Qwen's launch announcement lists the hosted <strong>Qwen3.8-Flash</strong> service at <strong>$0.16 per million input tokens</strong> and <strong>$0.47 per million output tokens</strong>. These are launch-post prices and may change." },
        { type: "paragraph", html: "As of the factual review on <strong>August 27, 2026</strong>, Qwen's official launch article still labels the managed QwenCloud API as <strong>“coming soon.”</strong> Qwen's official Hugging Face model card links to a QwenCloud model overview and documents self-hosted API usage, but that does not independently confirm that the managed QwenCloud endpoint is live." },
        { type: "note", html: "The open weights are available for self-hosting. Managed QwenCloud API access has been announced, but this article does not treat it as verified live production access yet." },
        { type: "paragraph", html: "The hosted model name shown by Qwen is <code>qwen3.8-flash</code>. Qwen says its APIs support Anthropic-compatible and OpenAI-compatible interfaces, and its launch material includes setup examples for Claude Code and Codex." },
      ],
    },
    {
      id: "benchmarks",
      title: "Qwen3.8-Flash-Next benchmarks",
      blocks: [
        { type: "paragraph", html: "Qwen published benchmark results comparing the base model with Qwen3.8-27B and Qwen3.7-Plus. The company reports strong results across general reasoning, mathematics, coding and multilingual tasks while activating only 6B parameters per token." },
        { type: "paragraph", html: "These figures are <strong>vendor-reported benchmarks</strong>, not independent validation. Qwen reports scores of 73.23 on MMLU-Pro, 78.76 on EvalPlus and 50.99 on SWEBench-Pretrain in its launch material." },
        { type: "paragraph", html: "The more important claim for this release is not simply benchmark leadership; it is the combination of capability, long context and lower compute requirements that Qwen is positioning as the foundation for its next architecture generation." },
      ],
    },
    {
      id: "open-weights-qwen4",
      title: "Open weights and what the release means for Qwen4",
      blocks: [
        { type: "paragraph", html: "Qwen has released the model weights through its official Hugging Face organization and ModelScope. Anyone planning commercial deployment should review the current model license and hosting terms directly before use." },
        { type: "paragraph", html: "Qwen explicitly describes Qwen3.8-Flash-Next as an <strong>early preview of the architecture that will be used for Qwen4</strong>. That does not mean Qwen4 itself has launched." },
        { type: "paragraph", html: "Qwen3.8-Flash-Next is positioned around cost efficiency and architectural experimentation, while Qwen3.8-Max is the flagship end of the Qwen3.8 family. A detailed comparison should wait until current pricing, API access, benchmark coverage and production behavior for both models are verified side by side." },
      ],
    },
    {
      id: "who-should-watch",
      title: "Who should pay attention to Qwen3.8-Flash?",
      blocks: [
        { type: "paragraph", html: "The model is particularly relevant to developers building high-volume AI applications, coding assistants, long-context workflows and agentic systems where token cost and inference efficiency matter." },
        { type: "paragraph", html: "It may also be worth watching for teams using Claude Code or Codex-style development workflows because Qwen has explicitly documented compatibility paths for those interfaces. Teams that need a managed endpoint should wait for unambiguous QwenCloud availability confirmation before planning a production migration." },
      ],
    },
    {
      id: "faq",
      title: "Frequently asked questions",
      blocks: [
        { type: "subheading", text: "When was Qwen3.8-Flash-Next released?" },
        { type: "paragraph", html: "Qwen announced the model on <strong>August 26, 2026</strong>." },
        { type: "subheading", text: "What is the context window?" },
        { type: "paragraph", html: "The open-weight model natively supports <strong>262,144 tokens</strong> and can extend to <strong>1 million tokens with YaRN</strong>, according to Qwen." },
        { type: "subheading", text: "How much does Qwen3.8-Flash cost?" },
        { type: "paragraph", html: "Qwen's launch post lists the hosted service at <strong>$0.16 per million input tokens</strong> and <strong>$0.47 per million output tokens</strong>." },
        { type: "subheading", text: "Is Qwen3.8-Flash-Next Qwen4?" },
        { type: "paragraph", html: "No. Qwen says it is an early preview of architectural changes intended for Qwen4." },
        { type: "subheading", text: "What should be watched next?" },
        { type: "paragraph", html: "The highest-value update will be confirmation that the managed Qwen3.8-Flash API is fully live, followed by updated pricing, independent benchmarks, wider provider availability or new information about Qwen4." },
      ],
    },
  ],
  sources: [
    { label: "Qwen — Qwen3.8-Flash-Next launch announcement", url: "https://qwen.ai/blog?id=qwen3.8-flash-next" },
    { label: "Qwen — official Hugging Face model card", url: "https://huggingface.co/Qwen/Qwen3.8-Flash-Next" },
    { label: "Reuters — Alibaba's Qwen launches Qwen3.8-Flash", url: "https://www.reuters.com/business/retail-consumer/alibabas-qwen-launches-qwen38-flash-ai-model-with-lower-training-costs-2026-08-26/" },
  ],
  relatedPaths: ["/blog/gemini-3-5-transcribe", "/resources/what-makes-a-good-business-website", "/services/web-design-for-local-businesses"],
};

const gemini: BlogArticle = {
  status: "published",
  slug: "gemini-3-5-transcribe",
  title: "Gemini 3.5 Transcribe: Pricing, API, Features & How to Use It",
  metaTitle: "Gemini 3.5 Transcribe: Pricing, API, Features & How to Use It",
  metaDescription: "Gemini 3.5 Transcribe adds file and live speech-to-text, 85+ languages, diarization, timestamps and low per-minute API pricing.",
  h1: "Gemini 3.5 Transcribe: Pricing, API, Features and Live Speech-to-Text",
  excerpt: "Google's dedicated speech-to-text family covers uploaded audio and low-latency live transcription, with 85+ languages and published API pricing.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  ogAlt: "Project Monet editorial graphic for Gemini 3.5 Transcribe with an abstract audio waveform",
  sections: [
    {
      id: "quick-answer",
      title: "What is Gemini 3.5 Transcribe?",
      blocks: [
        { type: "paragraph", html: "Google introduced <strong>Gemini 3.5 Transcribe</strong> on August 26, 2026 as a dedicated speech-to-text family built on Gemini's audio understanding. It includes <code>gemini-3.5-transcribe</code> for uploaded recordings and <code>gemini-3.5-transcribe-live</code> for low-latency streaming transcription." },
        { type: "paragraph", html: "The file-based endpoint targets recordings such as meetings, interviews and call logs, while the Live endpoint streams incremental transcription over WebSockets for voice agents, captioning and interactive dictation." },
        { type: "paragraph", html: "The models automatically detect more than 85 languages and can switch languages within a session. The recorded-audio model also supports speaker diarization, word-level timestamps and custom vocabulary biasing." },
      ],
    },
    {
      id: "pricing",
      title: "Gemini 3.5 Transcribe pricing",
      blocks: [
        { type: "paragraph", html: "Google's current Gemini API pricing page lists a free tier. Paid <strong>Gemini 3.5 Transcribe</strong> is listed at <strong>$2 per million audio input tokens</strong> and <strong>$12 per million text output tokens</strong>, which Google estimates at roughly <strong>$0.005 per minute</strong> blended." },
        { type: "paragraph", html: "<strong>Gemini 3.5 Transcribe Live</strong> is listed at <strong>$3.50 per million audio input tokens</strong> and <strong>$21 per million text output tokens</strong>, with Google's estimated blended rate around <strong>$0.009 per minute</strong>." },
        { type: "note", html: "The per-minute figures are estimates based on Google's token assumptions. Actual billing can vary with the audio and generated text." },
      ],
    },
    {
      id: "file-vs-live",
      title: "File transcription vs Live transcription",
      blocks: [
        { type: "paragraph", html: "Use <code>gemini-3.5-transcribe</code> when the audio already exists. It supports up to one hour of audio per request, reduced to 30 minutes when diarization or word-level timestamps are enabled. Speaker diarization supports up to eight speakers, although Google labels attribution for three or more speakers experimental." },
        { type: "paragraph", html: "Use <code>gemini-3.5-transcribe-live</code> when text needs to arrive while the speaker is talking. It runs through the Gemini Live API over WebSockets and supports sessions up to 10 minutes." },
      ],
    },
    {
      id: "features",
      title: "Key transcription features",
      blocks: [
        { type: "list", items: [
          "Automatic language detection across 85+ languages",
          "Multilingual code-switching",
          "Smart transcription that can clean up disfluencies and formatting",
          "Custom vocabulary biasing up to 1,000 terms",
          "Speaker diarization on recorded audio",
          "Word-level timestamps on recorded audio",
          "Real-time WebSocket streaming through Gemini Live API",
        ] },
        { type: "paragraph", html: "Google notes that Smart transcription cannot be combined with speaker diarization or word-level timestamps. Those features require verbatim mode." },
      ],
    },
    {
      id: "how-to-use",
      title: "How to use Gemini 3.5 Transcribe",
      blocks: [
        { type: "paragraph", html: "For recorded audio, developers upload an audio file and call the Gemini Interactions API with <code>gemini-3.5-transcribe</code>. Google publishes Python, JavaScript and REST examples in its transcription guide." },
        { type: "paragraph", html: "For live speech, developers connect through the Gemini Live API with <code>gemini-3.5-transcribe-live</code> and stream continuous audio over WebSockets. Both models are documented in Google AI Studio and the Gemini API." },
      ],
    },
    {
      id: "accuracy",
      title: "Accuracy and latency",
      blocks: [
        { type: "paragraph", html: "Google says the new model improves on Chirp 3. In its launch announcement, Google reports a <strong>70% improvement in time to final transcription</strong> as measured by Artificial Analysis. Google also reports FLEURS word error rates of <strong>5.50% in streaming mode</strong> and <strong>5.04% for non-streaming</strong> across its selected languages and locales." },
        { type: "paragraph", html: "These are launch figures reported by Google. They do not establish that Gemini 3.5 Transcribe will beat every competing speech-to-text system across all accents, noise conditions or domains. Production teams should benchmark it on their own recordings." },
      ],
    },
    {
      id: "availability",
      title: "Is Gemini 3.5 Transcribe generally available?",
      blocks: [
        { type: "paragraph", html: "Yes. Google's current Gemini API release notes identify both <code>gemini-3.5-transcribe</code> and <code>gemini-3.5-transcribe-live</code> as <strong>generally available (GA)</strong> as of August 26, 2026. The model pages, API guides and pricing are live in Google's developer documentation." },
      ],
    },
    {
      id: "use-cases",
      title: "What can creators and marketers use it for?",
      blocks: [
        { type: "paragraph", html: "Beyond developer voice agents, the model could be useful for meeting notes, multilingual subtitles, podcast transcripts, customer-call analysis, interview transcription and turning spoken ideas into formatted text. Google's Smart transcription mode is particularly relevant when clean readable copy matters more than a verbatim transcript." },
        { type: "paragraph", html: "For creator workflows, a typical pipeline could be: record video or voice → transcribe with Gemini → turn the transcript into captions, summaries, hooks or repurposed posts with another model." },
        { type: "paragraph", html: "It is too early to make a definitive ranking against Whisper, Deepgram and other APIs. The useful comparison points will be real-world accuracy, latency, language coverage, diarization, pricing and integration complexity." },
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      blocks: [
        { type: "paragraph", html: "Gemini 3.5 Transcribe is a meaningful addition to Google's developer stack because it turns transcription into a dedicated Gemini product with both file processing and real-time streaming. Its 85+ languages, code-switching, diarization, timestamps, custom vocabulary and low listed per-minute pricing make it worth testing against real production audio." },
      ],
    },
  ],
  sources: [
    { label: "Google — Gemini 3.5 Transcribe launch announcement", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/" },
    { label: "Google — Gemini API release notes", url: "https://ai.google.dev/gemini-api/docs/changelog" },
    { label: "Google — Gemini 3.5 Transcribe model documentation", url: "https://ai.google.dev/gemini-api/docs/models/gemini-3.5-transcribe" },
    { label: "Google — Audio transcription guide", url: "https://ai.google.dev/gemini-api/docs/transcribe" },
    { label: "Google — Live transcription guide", url: "https://ai.google.dev/gemini-api/docs/live-api/live-transcribe" },
    { label: "Google — Gemini API pricing", url: "https://ai.google.dev/gemini-api/docs/pricing" },
  ],
  relatedPaths: ["/blog/qwen3-8-flash-next", "/blog/instagram-first-draft-reels", "/resources/website-content-checklist"],
};

const instagram: BlogArticle = {
  status: "published",
  slug: "instagram-first-draft-reels",
  title: "Instagram First Draft for Reels: How It Works, Availability & How to Use It",
  metaTitle: "Instagram First Draft for Reels: How It Works & Availability",
  metaDescription: "Instagram First Draft automatically trims clips and pauses into an editable Reel rough cut. Learn how it works, iPhone availability and limitations.",
  h1: "Instagram First Draft for Reels: What It Is and How to Use It",
  excerpt: "Instagram's new in-app Reels shortcut automatically trims selected clips and creates a reversible rough cut, initially for iPhone users.",
  category: "Social Media",
  author: "Project Monet Editorial Team",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  ogAlt: "Project Monet editorial graphic showing a phone-style Reels timeline for Instagram First Draft",
  sections: [
    {
      id: "what-is-it",
      title: "What is Instagram First Draft?",
      blocks: [
        { type: "paragraph", html: "Instagram has started rolling out <strong>First Draft</strong>, a new Reels creation feature that turns selected video clips into an initial editable cut inside the Instagram app. Instead of manually trimming every clip from scratch, First Draft can remove pauses, shorten footage and assemble a starting version of a Reel in seconds." },
        { type: "paragraph", html: "You select one or more clips, tap <strong>First Draft</strong>, and Instagram automatically produces a rough cut. Instagram says that first pass can be generated in under 10 seconds in suitable cases." },
        { type: "paragraph", html: "The edit is <strong>reversible</strong>. You can reorder clips, restore or adjust trimmed footage, remove clips, change timing or start again before moving to Instagram's full editor or publishing." },
        { type: "note", html: "Instagram announced the rollout on August 25, 2026. The first release is focused on Instagram's iPhone app." },
      ],
    },
    {
      id: "how-it-works",
      title: "How Instagram First Draft works",
      blocks: [
        { type: "subheading", text: "From your Reels gallery" },
        { type: "list", ordered: true, items: [
          "Open the Reels creation flow.",
          "Select one or more video clips.",
          "Tap the First Draft button.",
          "Let Instagram generate the initial edit.",
          "Review the result, then continue to the full editor or publish after making your own changes.",
        ] },
        { type: "subheading", text: "After recording inside Instagram" },
        { type: "paragraph", html: "You can also record footage using Instagram's camera and then tap <strong>First Draft</strong> to generate a starting edit before continuing to the normal editing workflow." },
        { type: "paragraph", html: "The feature is especially relevant for formats that often contain repetitive trimming work: talking-head videos, multi-clip montages, day-in-the-life Reels, travel videos and short vlogs." },
      ],
    },
    {
      id: "what-it-edits",
      title: "What does First Draft actually edit?",
      blocks: [
        { type: "list", items: [
          "Trim selected clips",
          "Remove pauses and silent gaps",
          "Shorten footage into a rough sequence",
          "Assemble multiple clips into one initial timeline",
          "Produce a starting cut within seconds",
          "Keep every automated edit reversible",
        ] },
        { type: "paragraph", html: "First Draft is not designed to make irreversible creative decisions. It reduces repetitive setup work before a creator makes deliberate choices about pacing, storytelling, captions, music, transitions and final timing." },
      ],
    },
    {
      id: "ai",
      title: "Is Instagram First Draft an AI editing tool?",
      blocks: [
        { type: "paragraph", html: "No. Instagram confirmed through a spokesperson quoted by The Verge that First Draft <strong>does not use AI</strong>. It is best described as an automatic Reels editing feature that trims pauses, selects usable moments and creates a reversible starting cut." },
      ],
    },
    {
      id: "availability",
      title: "iPhone and Android availability",
      blocks: [
        { type: "paragraph", html: "At launch, First Draft is rolling out on <strong>iPhone/iOS</strong>. If you use an iPhone and still do not see it, the gradual rollout may not yet have reached your account or app version." },
        { type: "paragraph", html: "Instagram has not publicly confirmed Android availability or an Android release date in the sources verified for this article. This page therefore does not claim that First Draft is available on Android." },
      ],
    },
    {
      id: "why-it-matters",
      title: "Why Instagram is adding First Draft",
      blocks: [
        { type: "paragraph", html: "The first edit is often one of the most tedious parts of making short-form video. A creator may have several clips but still need to find usable sections, remove dead air and build an initial sequence before any creative polish begins." },
        { type: "paragraph", html: "First Draft attacks that specific bottleneck. Instagram is trying to reduce the distance between <strong>raw footage</strong> and <strong>something worth editing</strong>. Easier creation may help more people make Reels without immediately relying on a dedicated third-party editor." },
      ],
    },
    {
      id: "comparisons",
      title: "First Draft vs Instagram Edits and CapCut",
      blocks: [
        { type: "paragraph", html: "First Draft lives inside the main Instagram creation flow rather than being limited to Instagram's separate Edits app. First Draft creates the initial rough cut quickly; the full Instagram editor or Edits provides the deeper stage where creators refine the Reel." },
        { type: "paragraph", html: "The broad automatic-cutting concept is familiar from other editing platforms. Instagram's advantage is distribution and convenience: a creator can move from recording or selecting footage to a rough Reel without leaving the app." },
        { type: "paragraph", html: "That does not automatically make First Draft better than CapCut or other editors. Dedicated tools may still offer more control, effects, templates and advanced timeline features. The strongest use case for First Draft is speed at the beginning of the process." },
      ],
    },
    {
      id: "who-benefits",
      title: "Who will benefit most?",
      blocks: [
        { type: "list", items: [
          "Creators who post frequently",
          "Social media managers processing large volumes of footage",
          "Beginners intimidated by manual trimming",
          "Businesses making simple talking-head Reels",
          "Vlog and montage creators",
          "Anyone whose footage contains long pauses or repeated takes",
        ] },
        { type: "paragraph", html: "Experienced editors may still prefer to build the first cut themselves when timing is central to the creative idea." },
      ],
    },
    {
      id: "limitations",
      title: "Limitations to know before publishing",
      blocks: [
        { type: "paragraph", html: "Automatic editing cannot reliably understand every creative intention. A technically clean cut can still have bad pacing, remove a useful reaction, interrupt a visual payoff or choose the wrong moment from a clip." },
        { type: "note", html: "Treat First Draft exactly as the name suggests: a first draft. Review hooks, pacing, sentence boundaries, music timing, visual continuity, captions and any context that may have been removed." },
        { type: "paragraph", html: "For marketers, the larger implication is production volume. Faster rough cuts may allow teams to test more hooks, variations and content ideas, but the quality advantage still comes from the idea, story and final creative decisions." },
      ],
    },
    {
      id: "faq",
      title: "Frequently asked questions",
      blocks: [
        { type: "subheading", text: "How fast is Instagram First Draft?" },
        { type: "paragraph", html: "Instagram says the initial cut can be produced in seconds, with its announcement showing a first pass in under 10 seconds." },
        { type: "subheading", text: "Can I change the edits First Draft makes?" },
        { type: "paragraph", html: "Yes. The edits are reversible, and you can reorder, remove or adjust clips before publishing." },
        { type: "subheading", text: "Is Instagram First Draft available on Android?" },
        { type: "paragraph", html: "Android availability has not been confirmed. The initial rollout verified for this article is on iPhone/iOS." },
        { type: "subheading", text: "Is First Draft the same as Instagram Edits?" },
        { type: "paragraph", html: "No. First Draft is a quick rough-cut feature inside Instagram's Reels creation flow. It is not the same as the separate Edits app or the full editing workflow." },
      ],
    },
  ],
  sources: [
    { label: "Instagram @creators — original First Draft announcement", url: "https://www.threads.com/@creators/post/Dcd8qfSEbEV/introducing-first-draft-a-new-way-to-create-a-reel-within-the-instagram-app/" },
    { label: "The Verge — First Draft rollout and Instagram spokesperson clarification", url: "https://www.theverge.com/tech/984463/instagram-first-draft-edit-reels" },
    { label: "TechCrunch — Instagram First Draft announcement", url: "https://techcrunch.com/2026/08/25/instagrams-first-draft-feature-aims-to-make-editing-reels-less-tedious/" },
    { label: "Social Media Today — First Draft for Reels", url: "https://www.socialmediatoday.com/news/instagram-launches-first-draft-for-reels/828789/" },
    { label: "PetaPixel — Instagram's automatic first-cut tool", url: "https://petapixel.com/2026/08/26/instagrams-new-video-editing-tool-quickly-makes-a-first-draft/" },
  ],
  relatedPaths: ["/blog/gemini-3-5-transcribe", "/resources/website-content-checklist", "/about"],
};

const claudeforce: BlogArticle = {
  status: "published",
  slug: "claudeforce-salesforce-in-claude",
  title: "Claudeforce: Salesforce in Claude, 37 Skills, Availability & How It Works",
  metaTitle: "Claudeforce: Salesforce in Claude, 37 Skills, Availability & How It Works",
  metaDescription: "Claudeforce brings Salesforce data and workflows into Claude through a new plugin with 37 sales skills. Here’s how it works, current availability, security and what’s still unknown.",
  h1: "Claudeforce Explained: How Salesforce in Claude Works and Who Can Use It",
  excerpt: "Salesforce in Claude connects Claude to live Salesforce context through 37 prebuilt sales skills, with pilot access now and an open beta planned for September 2026.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  ogAlt: "Project Monet editorial graphic explaining Claudeforce and Salesforce in Claude without implying affiliation",
  sections: [
    {
      id: "quick-answer",
      title: "What is Claudeforce?",
      blocks: [
        { type: "paragraph", html: "<strong>Claudeforce</strong> is the name Salesforce and Anthropic are using for an expanded partnership that connects Claude with Salesforce data, workflows and business rules. Its first product is <strong>Salesforce in Claude</strong>, a plugin for sales teams with <strong>37 prebuilt skills</strong> covering work such as pipeline review, meeting preparation, account planning and deal analysis." },
        { type: "paragraph", html: "As of <strong>August 27, 2026</strong>, Salesforce says the plugin is available to <strong>select pilot customers</strong> and is planned to enter <strong>open beta in September 2026</strong>. Salesforce has not announced an exact beta date or standalone pricing." },
        { type: "note", html: "Salesforce in Claude is not generally available to every Salesforce or Claude customer today. Access, packaging and regional availability may depend on customer agreements." },
      ],
    },
    {
      id: "partnership",
      title: "Claudeforce is a partnership, not a new model",
      blocks: [
        { type: "paragraph", html: "Claudeforce is <strong>not a new foundation model</strong>. It is a Salesforce–Anthropic product partnership intended to make Claude useful with live enterprise context rather than limiting it to information a user manually pastes into a conversation." },
        { type: "paragraph", html: "The first concrete product is Salesforce in Claude. Salesforce describes it as a plugin that connects Claude to Salesforce data, Slack and other connected enterprise context while keeping Salesforce permissions and business rules in force." },
        { type: "paragraph", html: "The practical goal is straightforward: a seller can ask Claude about a deal, account, forecast or pipeline without first opening multiple Salesforce records and reconstructing the context manually." },
      ],
    },
    {
      id: "sales-skills",
      title: "What can the 37 Salesforce in Claude skills do?",
      blocks: [
        { type: "paragraph", html: "Salesforce says the initial plugin includes <strong>37 prebuilt sales skills</strong> developed with Anthropic. The companies describe them as capabilities designed around Claude's reasoning, agentic tool use and generated interfaces—not simply generic CRM prompts wrapped around an API." },
        { type: "list", items: [
          "Daily pipeline and priority briefings",
          "Deal-health analysis and close planning",
          "Account planning and stakeholder mapping",
          "Objection handling and lead triage",
          "Customer-health and expansion checks",
          "Meeting preparation and follow-up work",
          "Salesforce record hygiene and updates",
        ] },
        { type: "paragraph", html: "Salesforce also describes an onboarding experience that reads a seller's permitted Salesforce, Slack and connected Claude context to create a tailored dashboard with accounts, pipeline and live data." },
      ],
    },
    {
      id: "architecture",
      title: "How does Claude connect to Salesforce?",
      blocks: [
        { type: "paragraph", html: "Salesforce says the connection builds on <strong>Headless 360</strong>, its architecture for exposing data, applications, workflows, permissions and business logic as capabilities that AI systems can call directly." },
        { type: "paragraph", html: "Those capabilities are exposed to Claude through a <strong>Model Context Protocol (MCP)</strong> connection. In practical terms, Claude can request the information or action it needs from Salesforce instead of relying on a user to copy data between interfaces." },
        { type: "paragraph", html: "The action layer remains routed through Salesforce. That distinction matters because Salesforce is positioning its existing system of record, workflows and governance as the deterministic layer behind Claude's reasoning." },
      ],
    },
    {
      id: "permissions-security",
      title: "Permissions, security and write controls",
      blocks: [
        { type: "paragraph", html: "Salesforce says every answer and action runs through an organization's existing Salesforce permissions and business rules. According to the company, Claude sees only information the signed-in user is authorized to see and can take only actions that user is authorized to take." },
        { type: "paragraph", html: "Salesforce says authentication and permissions are managed centrally when an administrator connects the plugin. It also describes configurable controls for write actions: an organization can require confirmation before Claude sends an external email, while record updates are intended to change only the field Claude identified." },
        { type: "paragraph", html: "The Claudeforce page also advertises <strong>zero data retention for Sonnet, Opus and Haiku</strong> and says Salesforce and Anthropic are developing further controls over data location, access and automated review." },
        { type: "note", html: "These are vendor claims about the product's intended architecture and controls. Security, privacy and compliance teams should evaluate the implementation, contract terms and product configuration against their own requirements before production use." },
      ],
    },
    {
      id: "availability",
      title: "Is Salesforce in Claude available now?",
      blocks: [
        { type: "paragraph", html: "<strong>Partially.</strong> Salesforce says Salesforce in Claude is available to <strong>select pilot customers</strong> as of the August 26 announcement." },
        { type: "paragraph", html: "The company expects to launch an <strong>open beta in September 2026</strong>. The current official product page and announcement do not give a specific September date." },
        { type: "paragraph", html: "Salesforce's public waitlist remains available for updates. It would be inaccurate to describe the plugin as generally available to every Salesforce or Claude customer today." },
      ],
    },
    {
      id: "pricing",
      title: "How much does Claudeforce cost?",
      blocks: [
        { type: "paragraph", html: "Salesforce's public Claudeforce product page and August 26 announcement do <strong>not</strong> provide standalone pricing for Salesforce in Claude." },
        { type: "paragraph", html: "Do not assume the plugin is included in an existing Salesforce, Claude or Agentforce subscription. Required plans, seats, usage costs, packaging and enterprise terms have not been publicly specified in the launch material and may vary by agreement." },
        { type: "note", html: "The accurate answer today is that standalone pricing has not been publicly announced. This page should be updated when Salesforce publishes official packaging." },
      ],
    },
    {
      id: "agentforce-comparison",
      title: "Claudeforce vs Agentforce",
      blocks: [
        { type: "paragraph", html: "The names are similar, but they describe different things. <strong>Agentforce</strong> is Salesforce's platform for building and operating AI agents inside the Salesforce ecosystem." },
        { type: "paragraph", html: "<strong>Claudeforce</strong> is the Salesforce–Anthropic partnership and product direction that brings Salesforce context and actions into Claude. Salesforce in Claude is its first announced product." },
        { type: "paragraph", html: "They are not necessarily competitors. Claude is also available within parts of Salesforce's wider Agentforce and enterprise AI stack, so the products can overlap at the model, data and workflow layers." },
      ],
    },
    {
      id: "what-comes-next",
      title: "Is this only a Salesforce plugin for Claude?",
      blocks: [
        { type: "paragraph", html: "At launch, the most visible product is a Claude plugin focused on Sales, but Salesforce is positioning Claudeforce as a broader partnership rather than a one-off connector." },
        { type: "paragraph", html: "Salesforce says additional prebuilt skills will begin launching later in 2026. The product page marks capabilities for <strong>Service, Marketing and Commerce</strong> as coming later, without firm public release dates." },
        { type: "paragraph", html: "That makes the September open beta, official pricing and the next persona-specific releases the most important milestones to watch." },
      ],
    },
    {
      id: "why-it-matters",
      title: "Why the Claudeforce launch matters",
      blocks: [
        { type: "paragraph", html: "The interesting part of Claudeforce is not simply that two large enterprise AI companies integrated their products. It reflects a wider shift in business software: users increasingly want an AI interface to come to the data and workflows they already use rather than navigating every application manually." },
        { type: "paragraph", html: "For Salesforce, that means exposing more platform capabilities through headless interfaces and MCP. For Anthropic, it means Claude can act as an interface for governed enterprise work instead of operating separately from the systems where the records and business rules live." },
        { type: "paragraph", html: "If the open beta is broad and the skills work reliably, likely demand will move from <strong>“what is Claudeforce?”</strong> toward practical questions about setup, pricing, permissions, supported Salesforce editions and comparisons with Agentforce." },
      ],
    },
    {
      id: "who-should-watch",
      title: "Who should pay attention?",
      blocks: [
        { type: "list", items: [
          "Salesforce sales teams already using Claude",
          "Revenue operations teams",
          "Enterprise AI leaders evaluating agentic workflows",
          "Salesforce administrators responsible for permissions and governance",
          "Teams considering MCP-based enterprise integrations",
          "Security and compliance teams evaluating AI access to live CRM data",
        ] },
        { type: "paragraph", html: "Smaller businesses without Salesforce are unlikely to gain much from the initial release. The first version is aimed at enterprise sales workflows and depends on Salesforce context." },
      ],
    },
    {
      id: "faq",
      title: "Frequently asked questions",
      blocks: [
        { type: "subheading", text: "When was Claudeforce announced?" },
        { type: "paragraph", html: "Salesforce and Anthropic announced Claudeforce on <strong>August 26, 2026</strong>." },
        { type: "subheading", text: "What is Salesforce in Claude?" },
        { type: "paragraph", html: "It is the first product announced under Claudeforce: a Claude plugin that connects to Salesforce business context and launches with 37 prebuilt sales skills." },
        { type: "subheading", text: "Is Salesforce in Claude available to everyone?" },
        { type: "paragraph", html: "No. Salesforce says it is currently available to select pilot customers, with an open beta planned for September 2026." },
        { type: "subheading", text: "Does Claudeforce have pricing?" },
        { type: "paragraph", html: "No standalone public price or packaging was found in Salesforce's current launch material." },
        { type: "subheading", text: "Does Salesforce in Claude use MCP?" },
        { type: "paragraph", html: "Salesforce says Headless 360 exposes Salesforce platform capabilities to Claude through a secure MCP connection." },
        { type: "subheading", text: "Is Claudeforce the same as Agentforce?" },
        { type: "paragraph", html: "No. Agentforce is Salesforce's broader agent platform. Claudeforce is its partnership with Anthropic, with Salesforce in Claude as the first announced product." },
      ],
    },
    {
      id: "updates-to-watch",
      title: "What to watch next",
      blocks: [
        { type: "list", ordered: true, items: [
          "The exact open-beta launch date",
          "Official pricing and packaging",
          "Supported Salesforce and Claude plans",
          "Wider geographic or customer availability",
          "Service, Marketing and Commerce skill releases",
          "Independent evidence about permissions and write controls in production",
        ] },
      ],
    },
  ],
  sources: [
    { label: "Salesforce — Claudeforce official product page", url: "https://www.salesforce.com/claudeforce/" },
    { label: "Salesforce — official Claudeforce announcement", url: "https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/" },
    { label: "Salesforce Investor Relations — Claudeforce announcement", url: "https://investor.salesforce.com/news/news-details/2026/Salesforce-and-Anthropic-Announce-Claudeforce-The-1-AI-Meets-the-1-AI-CRM/default.aspx" },
    { label: "Anthropic — expanded Salesforce partnership and trust-boundary context", url: "https://www.anthropic.com/news/salesforce-anthropic-expanded-partnership" },
    { label: "Salesforce — Headless 360 architecture", url: "https://www.salesforce.com/news/stories/salesforce-headless-360-announcement/" },
  ],
  relatedPaths: ["/blog/gemini-3-5-transcribe", "/blog/qwen3-8-flash-next", "/resources/what-makes-a-good-business-website", "/services/web-design-for-local-businesses"],
};

export const blogArticles: BlogArticle[] = [claudeforce, qwen, gemini, instagram];

export const publishedBlogArticles = blogArticles.filter((article) => article.status === "published");

export function findPublishedArticle(slug: string) {
  return publishedBlogArticles.find((article) => article.slug === slug);
}
