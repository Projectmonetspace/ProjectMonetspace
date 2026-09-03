import type { BlogArticle } from "./blog-types.ts";

const sources = [
  { label: "Microsoft VibeVoice repository", url: "https://github.com/microsoft/VibeVoice" },
  { label: "Microsoft VibeVoice-ASR-Streaming setup guide", url: "https://github.com/microsoft/VibeVoice/blob/main/docs/vibevoice-asr-streaming.md" },
  { label: "Microsoft VibeVoice-ASR-Streaming-7B model card", url: "https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B" },
  { label: "Microsoft VibeVoice-ASR-Streaming technical report", url: "https://arxiv.org/abs/2609.02812" },
];

export const vibeVoiceAsrStreamingArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "VibeVoice-ASR-Streaming",
    targetSearchIntent: "Broad entity overview: what Microsoft VibeVoice-ASR-Streaming is, release status, models, capabilities, local deployment, languages, limitations and use cases",
    targetQuery: "VibeVoice-ASR-Streaming",
    slug: "vibevoice-asr-streaming",
    title: "VibeVoice-ASR-Streaming: Models, Setup, Features & Local Use",
    metaTitle: "VibeVoice-ASR-Streaming: Models, Setup, Features & Local Use",
    metaDescription: "Microsoft released VibeVoice-ASR-Streaming for live speaker-attributed transcription. See models, languages, setup options, license, use cases and limits.",
    h1: "VibeVoice-ASR-Streaming: What Microsoft Released and How It Works",
    excerpt: "Microsoft's new open streaming ASR model transcribes who said what while audio arrives, with hotwords, ten languages and local deployment paths.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "VibeVoice-ASR-Streaming waveform and live speaker-attributed transcript concept",
    sections: [
      {
        id: "what-it-is",
        title: "What Microsoft released",
        blocks: [
          { type: "paragraph", html: "Microsoft Research announced VibeVoice-ASR-Streaming on September 3, 2026. The official repository describes it as a unified streaming ASR model that continuously transcribes who said what as speech arrives, rather than waiting for a recording to finish." },
          { type: "paragraph", html: "The release is open rather than a newly announced paid hosted speech API. Microsoft publishes the code, model links and local inference paths under the MIT license, so developers can evaluate the system in their own environment." },
          { type: "note", html: "Microsoft's technical report says both 1.5B-named and 7B-named streaming model weights were released. Hugging Face currently reports the 7B-named checkpoint as 9B parameters in BF16, so the checkpoint name and the platform-reported parameter count should not be treated as identical." },
        ],
      },
      {
        id: "capabilities",
        title: "Streaming transcription, speakers and hotwords",
        blocks: [
          { type: "paragraph", html: "The core capability is streaming speaker-attributed transcription: text is emitted chunk by chunk while audio is still arriving, and the output keeps speaker identity rather than flattening every voice into one transcript." },
          { type: "paragraph", html: "Customized hotwords are also supported. Names, product terms and technical vocabulary can be supplied as context to bias recognition toward important domain-specific terms." },
          { type: "list", items: ["Live meeting and interview transcription", "Creator captions and rough editing transcripts", "Call or support analysis where speaker identity matters", "Speech-to-agent pipelines that need text before a conversation ends"] },
        ],
      },
      {
        id: "languages-models",
        title: "Languages and model availability",
        blocks: [
          { type: "paragraph", html: "Microsoft's official streaming model cards list ten supported languages: Chinese, English, French, German, Italian, Japanese, Korean, Portuguese, Russian and Spanish. That is narrower than the earlier non-streaming VibeVoice-ASR family, which Microsoft describes as supporting more than 50 languages." },
          { type: "paragraph", html: "The technical report states that 1.5B and 7B model weights were released. Teams should verify the exact official checkpoint they deploy rather than assuming similarly named community conversions behave the same way." },
        ],
      },
      {
        id: "local-deployment",
        title: "How local deployment works",
        blocks: [
          { type: "paragraph", html: "Microsoft's current setup guide recommends an NVIDIA Deep Learning Container, installing the VibeVoice repository in editable mode and installing FFmpeg for audio decoding. It documents both a FastAPI/WebSocket microphone demo and direct streaming inference from audio files." },
          { type: "paragraph", html: "Chunk size and lookahead are read from each checkpoint's preprocessor_config.json, so the checkpoint runs with the chunking behavior it was trained for rather than exposing arbitrary chunk tuning at inference time." },
          { type: "note", html: "For the full documented setup, Docker command, FastAPI demo, file inference and hotword usage, continue to <a href=\"/blog/vibevoice-asr-streaming-local-install\">How to Run VibeVoice-ASR-Streaming Locally</a>." },
        ],
      },
      {
        id: "benchmarks-limits",
        title: "Benchmarks, hardware and important limits",
        blocks: [
          { type: "paragraph", html: "Microsoft's September 2 technical report now includes numerical evaluation claims. The authors report that their 7B model achieves the lowest average WER/CER across five evaluation sets and best or tied-best speaker-attribution results in 12 of 13 settings. These are vendor-paper results, not independent benchmark verification." },
          { type: "paragraph", html: "Microsoft's setup documentation does not state one universal minimum GPU or VRAM requirement. Real memory use varies with checkpoint, precision, runtime, concurrency and serving configuration, so community hardware estimates should be labeled as estimates." },
          { type: "paragraph", html: "The current Hugging Face 7B model page also says the checkpoint is not deployed by an Inference Provider. That should not be confused with a Microsoft-hosted paid API launch; self-hosting or another deployment layer still carries its own infrastructure cost." },
        ],
      },
      {
        id: "bottom-line",
        title: "Who should try it",
        blocks: [
          { type: "paragraph", html: "VibeVoice-ASR-Streaming is most interesting when you need open, self-hosted streaming transcription with speaker attribution and domain hotwords. It is less suitable when you need a turnkey managed API, broad 50-plus-language coverage or a vendor-published universal hardware minimum." },
          { type: "paragraph", html: "For creator and marketing workflows, the practical opportunity is to keep transcription local while passing structured transcript chunks into captioning, summarization, content-repurposing or call-analysis systems. Human review still matters because ASR errors can propagate into downstream automation." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/vibevoice-asr-streaming-local-install"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "VibeVoice-ASR-Streaming",
    targetSearchIntent: "Install and self-host VibeVoice-ASR-Streaming for live microphone or file transcription using Microsoft's documented local stack",
    targetQuery: "how to run VibeVoice-ASR-Streaming locally",
    parentSlug: "vibevoice-asr-streaming",
    slug: "vibevoice-asr-streaming-local-install",
    title: "How to Run VibeVoice-ASR-Streaming Locally",
    metaTitle: "How to Run VibeVoice-ASR-Streaming Locally: Setup Guide",
    metaDescription: "Install Microsoft VibeVoice-ASR-Streaming locally with Docker, CUDA, FFmpeg and FastAPI. Learn microphone, file and hotword workflows plus key limits.",
    h1: "How to Run VibeVoice-ASR-Streaming Locally",
    excerpt: "A source-checked local setup guide covering Microsoft's NVIDIA container workflow, FFmpeg, FastAPI/WebSocket demo, direct file inference and hotwords.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "Local VibeVoice-ASR-Streaming workflow from microphone to GPU server and transcript",
    sections: [
      {
        id: "requirements",
        title: "What you need",
        blocks: [
          { type: "paragraph", html: "Microsoft recommends an NVIDIA Deep Learning Container to manage the CUDA environment. Its current guide marks NVIDIA PyTorch containers 24.07 through 25.12 as verified and uses nvcr.io/nvidia/pytorch:25.12-py3 in the example." },
          { type: "paragraph", html: "You also need the VibeVoice repository, Python tooling inside the container and FFmpeg for audio decoding. If FlashAttention is not already available, Microsoft points to installing flash-attn separately." },
          { type: "note", html: "Microsoft does not publish a universal minimum VRAM requirement in the setup guide. Size your GPU from the exact checkpoint, precision, runtime and concurrency you plan to test rather than treating a community estimate as an official requirement." },
        ],
      },
      {
        id: "install",
        title: "Install VibeVoice and FFmpeg",
        blocks: [
          { type: "paragraph", html: "Inside the GPU-enabled environment, Microsoft's documented flow is to clone https://github.com/microsoft/VibeVoice.git, change into the VibeVoice directory and run pip install -e ." },
          { type: "paragraph", html: "Install FFmpeg with apt update && apt install ffmpeg -y. Both documented usage paths rely on FFmpeg for audio decoding, so verify it before assuming an audio failure is a model failure." },
          { type: "note", html: "For reproducible production deployments, pin and test a specific repository commit and container version instead of automatically pulling the latest main branch." },
        ],
      },
      {
        id: "fastapi-demo",
        title: "Run the FastAPI microphone demo",
        blocks: [
          { type: "paragraph", html: "Microsoft provides demo/vibevoice_asr_streaming_fastapi_demo.py with a model_path argument. After starting it, open http://localhost:7870 to record from a microphone or select a file." },
          { type: "paragraph", html: "The page keeps a WebSocket open for the entire recording session, allowing transcript text to appear while speech is still arriving. This is the simplest end-to-end check that the checkpoint, audio decoder and streaming UI path work together." },
        ],
      },
      {
        id: "file-hotwords",
        title: "Test file streaming and hotwords",
        blocks: [
          { type: "paragraph", html: "For a non-browser test, Microsoft documents demo/vibevoice_asr_streaming_inference_from_file.py with model_path and audio_files arguments. Each chunk is printed as soon as the model emits it." },
          { type: "paragraph", html: "Add context_info such as Microsoft,VibeVoice to bias recognition toward important names or technical terms. Treat hotwords as guidance rather than a guarantee and test them against representative audio." },
          { type: "paragraph", html: "Microsoft says chunk size and lookahead are read from the checkpoint's preprocessor_config.json. Measure end-to-end latency on your own hardware instead of inventing a universal streaming-delay figure." },
        ],
      },
      {
        id: "production",
        title: "Move from demo to a service carefully",
        blocks: [
          { type: "paragraph", html: "The repository links a vLLM streaming serving path, but a self-hosted service still needs session lifecycle handling, queueing, retries, observability, GPU-memory controls and explicit policies for storing or discarding audio and transcripts." },
          { type: "paragraph", html: "Local inference can reduce the need to send raw audio to a third-party transcription API, but local does not automatically mean compliant. Consent, access controls, retention rules and security remain your responsibility." },
          { type: "note", html: "For model capabilities, language support, release status and benchmark attribution, return to the <a href=\"/blog/vibevoice-asr-streaming\">main VibeVoice-ASR-Streaming overview</a>." },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting checklist",
        blocks: [
          { type: "list", items: ["Confirm the NVIDIA GPU is visible inside the container", "Check PyTorch/CUDA and FlashAttention compatibility", "Verify FFmpeg and the input audio format", "Confirm the official checkpoint path and exact model ID", "Profile buffering, WebSocket/UI delay and model inference separately", "Test speaker attribution and hotwords on representative recordings before production use"] },
          { type: "paragraph", html: "Do not assume the streaming model supports the same 50-plus languages as the earlier batch VibeVoice-ASR. The official streaming model cards currently list ten languages." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/vibevoice-asr-streaming"],
  },
];
