import type { BlogArticle } from "./blog-types.ts";

export const nemotron3DiarizationArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "NVIDIA Nemotron 3 Diarization",
    targetSearchIntent: "Broad overview of the final open-weight model, release, features, streaming and offline use, access, license, benchmarks and limitations",
    targetQuery: "NVIDIA Nemotron 3 Diarization",
    slug: "nvidia-nemotron-3-diarization",
    title: "NVIDIA Nemotron 3 Diarization: Local Setup, Streaming & Benchmarks",
    metaTitle: "NVIDIA Nemotron 3 Diarization: Setup & Benchmarks",
    metaDescription: "NVIDIA Nemotron 3 Diarization is an open-weight 100M speaker model for up to 8 speakers. See streaming modes, setup, benchmarks, license and limits.",
    h1: "NVIDIA Nemotron 3 Diarization: Open-Weight Speaker Diarization Explained",
    excerpt: "A verified guide to NVIDIA's open-weight Nemotron 3 speaker diarization model, streaming modes, setup and benchmarks.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Nemotron 3 Diarization waveform separated into eight anonymous overlapping speaker lanes",
    sections: [
      { id: "model", title: "What is Nemotron 3 Diarization?", blocks: [
        { type: "paragraph", html: "NVIDIA Nemotron 3 Diarization is an open-weight speaker-diarization model of roughly 100 million parameters. Diarization answers who spoke when by assigning anonymous speaker channels and timestamps; it does not transcribe the spoken words or identify real people by name." },
        { type: "paragraph", html: "The final checkpoint supports up to eight speaker channels and preserves overlapping speech by allowing multiple channels to be active in the same frame. That makes it relevant to meetings, calls, interviews, podcasts and voice-agent memory." }
      ]},
      { id: "release", title: "Final release, license and availability", blocks: [
        { type: "paragraph", html: "NVIDIA's final model card lists a September 23, 2026 release and publishes nvidia/Nemotron-3-Diarization on Hugging Face under OpenMDW 1.1 for commercial or non-commercial use." },
        { type: "paragraph", html: "This final license differs materially from the earlier preview terms. At verification time, no managed Hugging Face Inference Provider was shown on the model page, so the documented path is local or self-managed inference rather than an assumed hosted API." }
      ]},
      { id: "streaming", title: "One checkpoint for offline and streaming diarization", blocks: [
        { type: "paragraph", html: "NVIDIA documents recommended input-buffer configurations of 30.4 seconds for offline-style processing and 1.04, 0.64 and 0.32 seconds for progressively lower-latency streaming. The architecture can operate below that, but 0.32 seconds is the lowest recommended profile." },
        { type: "paragraph", html: "These numbers describe buffered audio, not complete application latency. Compute, transport, ASR and downstream processing add delay. Streaming continuity is preserved through speaker-cache and recent-frame context carried across chunks." }
      ]},
      { id: "benchmarks", title: "Benchmark results and what they do not prove", blocks: [
        { type: "paragraph", html: "NVIDIA and Hugging Face report an initial Voice Arena Diarization-Bench result of 14.72% DER across 139 English conversations totaling about 22 hours, compared with 19.3% for the next-ranked system in that initial evaluation." },
        { type: "paragraph", html: "The result is explicitly preliminary, while NVIDIA's own tables report about a 41% unweighted mean relative DER reduction versus its earlier four-speaker Streaming Sortformer at a 1.04-second input buffer. These are reported benchmark results, not guarantees for every acoustic environment." }
      ]},
      { id: "limits", title: "Input, hardware and practical limits", blocks: [
        { type: "paragraph", html: "The reference workflow expects 16 kHz mono audio and can return speaker activity at fine time resolution. The eight-speaker maximum is a real design boundary, and unusually long recordings, noise, reverberation, far-field capture or domain shift can reduce quality." },
        { type: "paragraph", html: "NVIDIA does not publish one universal minimum RAM or VRAM requirement in the reviewed final model card. Parameter count alone is not enough to promise a device requirement; runtime, precision, batch size, streaming state and any accompanying ASR model all matter." }
      ]}
    ],
    sources: [
      { label: "NVIDIA — Nemotron 3 Diarization model card", url: "https://huggingface.co/nvidia/Nemotron-3-Diarization" },
      { label: "Hugging Face / NVIDIA — Nemotron diarization launch", url: "https://huggingface.co/blog/nvidia/nemotron-diarization" },
      { label: "Transformers — Nemotron 3 Diarization documentation", url: "https://huggingface.co/docs/transformers/main/model_doc/nemotron3_diarization" }
    ],
    relatedPaths: ["/blog/nvidia-nemotron-3-diarization-local-setup"]
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "NVIDIA Nemotron 3 Diarization",
    targetSearchIntent: "Install and run Nemotron 3 Diarization locally for offline or streaming speaker diarization using NeMo or Transformers",
    targetQuery: "how to run Nemotron 3 Diarization locally",
    parentSlug: "nvidia-nemotron-3-diarization",
    slug: "nvidia-nemotron-3-diarization-local-setup",
    title: "How to Run NVIDIA Nemotron 3 Diarization Locally with NeMo & Transformers",
    metaTitle: "Run Nemotron 3 Diarization Locally: NeMo & Transformers",
    metaDescription: "Run NVIDIA Nemotron 3 Diarization locally with NeMo or Transformers. Configure offline or 0.32–1.04s streaming modes and avoid common setup mistakes.",
    h1: "How to Run NVIDIA Nemotron 3 Diarization Locally",
    excerpt: "A practical setup guide for Nemotron 3 Diarization with NeMo or Hugging Face Transformers.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Local terminal feeding audio into Nemotron 3 Diarization speaker lanes with NeMo and Transformers",
    sections: [
      { id: "prepare", title: "Before you run the checkpoint", blocks: [
        { type: "paragraph", html: "The final checkpoint is nvidia/Nemotron-3-Diarization on Hugging Face. NVIDIA documents 16 kHz audio for the reference workflow and the final OpenMDW 1.1 license for commercial or non-commercial use." },
        { type: "paragraph", html: "The output is anonymous speaker activity and timestamps, not words or verified identity. Pair it with ASR when you need speaker-attributed transcription, and keep diarization errors separate from word-recognition errors during evaluation." }
      ]},
      { id: "nemo", title: "Run with NVIDIA NeMo", blocks: [
        { type: "paragraph", html: "NVIDIA's model card documents NeMo Speech as the reference runtime. Load the checkpoint through SortformerEncLabelModel.from_pretrained and use the diarization workflow with audio paths, arrays or supported manifests." },
        { type: "paragraph", html: "Returned segments identify start time, end time and an anonymous speaker index. Preserve overlapping speaker activity when the application cares about interruptions or cross-talk instead of forcing every instant to one speaker." }
      ]},
      { id: "streaming", title: "Choose and preserve a streaming profile", blocks: [
        { type: "paragraph", html: "The documented recommended input-buffer profiles are 30.4 seconds, 1.04 seconds, 0.64 seconds and 0.32 seconds. Smaller buffers trade context for latency, so the lowest value is not automatically the best production choice." },
        { type: "paragraph", html: "Streaming state carries speaker information across chunks through the model's speaker cache and context. Resetting that state effectively starts a new diarization session and can break label continuity." }
      ]},
      { id: "transformers", title: "Run with Hugging Face Transformers", blocks: [
        { type: "paragraph", html: "Hugging Face added native Transformers support using AutoProcessor and AutoModelForAudioFrameClassification, with separate offline and streaming examples. At verification time, the documentation is on the main branch and may require a sufficiently recent or source installation." },
        { type: "paragraph", html: "The streaming integration exposes low_latency, very_low_latency and ultra_low_latency modes corresponding to the documented 1.04, 0.64 and 0.32 second profiles. Pass the returned speaker cache into subsequent chunks and flush the final chunk correctly." }
      ]},
      { id: "production", title: "Production checklist and hardware caveats", blocks: [
        { type: "paragraph", html: "Measure latency end to end, not just the audio buffer. Validate sample rate, streaming-state continuity, overlap handling, the eight-speaker limit, ASR alignment and behavior on the real meetings or calls your system will process." },
        { type: "paragraph", html: "The final model card does not publish a universal minimum RAM or VRAM requirement. NVIDIA's disclosed throughput tests use specific hardware and batching, so do not convert those benchmark environments into a claimed minimum device specification." }
      ]}
    ],
    sources: [
      { label: "NVIDIA — Nemotron 3 Diarization model card", url: "https://huggingface.co/nvidia/Nemotron-3-Diarization" },
      { label: "Transformers — Nemotron 3 Diarization documentation", url: "https://huggingface.co/docs/transformers/main/model_doc/nemotron3_diarization" },
      { label: "Hugging Face / NVIDIA — Nemotron diarization launch", url: "https://huggingface.co/blog/nvidia/nemotron-diarization" }
    ],
    relatedPaths: ["/blog/nvidia-nemotron-3-diarization"]
  }
];
