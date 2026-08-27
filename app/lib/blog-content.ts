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

export const blogArticles: BlogArticle[] = [qwen, gemini, instagram];

export const publishedBlogArticles = blogArticles.filter((article) => article.status === "published");

export function findPublishedArticle(slug: string) {
  return publishedBlogArticles.find((article) => article.slug === slug);
}
