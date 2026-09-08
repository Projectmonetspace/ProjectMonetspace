import type { BlogArticle } from "./blog-types.ts";

const miniCpm5Sources = [
  { label: "OpenBMB — MiniCPM5-2B model card", url: "https://huggingface.co/openbmb/MiniCPM5-2B" },
  { label: "OpenBMB — MiniCPM5-2B GGUF", url: "https://huggingface.co/openbmb/MiniCPM5-2B-GGUF" },
  { label: "OpenBMB — MiniCPM5-2B MLX", url: "https://huggingface.co/openbmb/MiniCPM5-2B-MLX" },
  { label: "OpenBMB — MiniCPM5 collection", url: "https://huggingface.co/collections/openbmb/minicpm5" },
];

export const miniCpm52bArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "MiniCPM5-2B",
    targetSearchIntent: "Understand MiniCPM5-2B: release status, architecture, context length, official formats, local deployment paths, license, vendor-reported benchmarks and current availability.",
    targetQuery: "MiniCPM5-2B",
    slug: "minicpm5-2b",
    title: "MiniCPM5-2B: GGUF, Local Setup, Benchmarks & 131K Context",
    metaTitle: "MiniCPM5-2B: GGUF, Local Setup, Benchmarks & 131K Context",
    metaDescription: "MiniCPM5-2B is OpenBMB’s 2.5B-parameter on-device LLM. See its 131K context, official GGUF/MLX formats, benchmarks, license and local deployment paths.",
    h1: "MiniCPM5-2B: OpenBMB’s 2B On-Device LLM Explained",
    excerpt: "MiniCPM5-2B is OpenBMB’s compact 2.5B-parameter model for local assistants, coding agents and tool-use workflows, with a native 131,072-token context window and first-party local formats.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "MiniCPM5-2B compact AI model card showing 2.5B parameters, 131K context and official GGUF and MLX local formats",
    sections: [
      { id: "what-is-minicpm5-2b", title: "What is MiniCPM5-2B?", blocks: [
        { type: "paragraph", html: "MiniCPM5-2B is the second model in OpenBMB's MiniCPM5 series. The current model card describes a dense causal language model built for on-device, local and resource-constrained deployment, with local assistants, coding agents, tool use and reasoning among its intended scenarios." },
        { type: "paragraph", html: "OpenBMB lists 2,516,756,480 total parameters, 42 layers, grouped-query attention with 16 query heads and 2 key/value heads, and a native context length of 131,072 tokens." },
      ]},
      { id: "official-formats", title: "Official formats and ways to run it", blocks: [
        { type: "paragraph", html: "The release is not limited to one BF16 checkpoint. OpenBMB currently publishes first-party GGUF and 4-bit MLX variants alongside the main model, giving users documented local paths instead of requiring an unofficial conversion before testing." },
        { type: "paragraph", html: "The official GGUF page exposes llama.cpp instructions and a Q4_K_M route. The MLX release is the first-party Apple Silicon option. Runtime support can change, so check the current model card before standardizing a production workflow." },
      ]},
      { id: "benchmarks", title: "How to read the MiniCPM5-2B benchmark claims", blocks: [
        { type: "paragraph", html: "OpenBMB reports a 53.9 average in its published comparison set and says that result exceeds the other models included in that table, whose highest listed average is 51.1. It also highlights strengths in coding, mathematics, long-context understanding, tool use and agentic tasks." },
        { type: "note", html: "These are OpenBMB-reported evaluation results, not independent Project Monet benchmarks. Treat the ranking as a vendor claim tied to that evaluation setup rather than a universal conclusion that MiniCPM5-2B is better for every workload." },
      ]},
      { id: "context-and-hardware", title: "131K context does not mean one fixed hardware requirement", blocks: [
        { type: "paragraph", html: "The model card lists a 131,072-token native context window, but runtime memory depends on more than parameter count. Quantization, active context, KV cache, runtime overhead and CPU/GPU offloading all affect practical RAM or VRAM use." },
        { type: "paragraph", html: "For that reason, there is no responsible single RAM or VRAM number to promise from the model card alone. Start with a shorter context and a quantized local format, then measure the actual workload on the target machine." },
      ]},
      { id: "license-and-api", title: "License, self-hosting and API status", blocks: [
        { type: "paragraph", html: "The OpenBMB MiniCPM5-2B repositories currently identify the release as Apache-2.0. That is a permissive software license, but production users still need their own policy, security and data-governance review." },
        { type: "paragraph", html: "A separately priced first-party hosted commercial API was not verified in the current release material. The reliable access path is downloadable/self-hosted weights; OpenAI-compatible serving can be built through supported local serving runtimes rather than assumed to be a vendor-hosted endpoint." },
      ]},
      { id: "who-should-use-it", title: "Who should evaluate MiniCPM5-2B?", blocks: [
        { type: "paragraph", html: "MiniCPM5-2B is most relevant when a compact local model is more important than maximizing raw model size: private desktop assistants, edge experiments, coding helpers, local tool-calling systems and small self-hosted agents are natural evaluation targets." },
        { type: "paragraph", html: "If your first goal is to install and test the model locally, continue with the MiniCPM5-2B GGUF, Ollama, LM Studio and MLX guide linked below." },
      ]},
    ],
    sources: miniCpm5Sources,
    relatedPaths: ["/blog/minicpm5-2b-local-gguf-ollama-mlx"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "MiniCPM5-2B",
    targetSearchIntent: "Install and run MiniCPM5-2B locally using OpenBMB’s official GGUF or MLX release and documented llama.cpp, Ollama or LM Studio-compatible paths without inventing hardware guarantees.",
    targetQuery: "how to run MiniCPM5-2B locally",
    parentSlug: "minicpm5-2b",
    slug: "minicpm5-2b-local-gguf-ollama-mlx",
    title: "How to Run MiniCPM5-2B Locally with GGUF, Ollama, LM Studio & MLX",
    metaTitle: "Run MiniCPM5-2B Locally: GGUF, Ollama, LM Studio & MLX",
    metaDescription: "Run MiniCPM5-2B locally with OpenBMB’s official GGUF and MLX releases, including llama.cpp, Ollama and LM Studio paths plus cautious hardware guidance.",
    h1: "How to Run MiniCPM5-2B Locally",
    excerpt: "Use OpenBMB’s first-party GGUF for the broad desktop/local path or its 4-bit MLX release on Apple Silicon, then validate memory and context on your own hardware.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "MiniCPM5-2B local deployment flow from the model to GGUF with llama.cpp Ollama and LM Studio plus MLX on Apple Silicon",
    sections: [
      { id: "choose-format", title: "1. Choose the official local format", blocks: [
        { type: "paragraph", html: "For the broadest desktop route, start with OpenBMB's official MiniCPM5-2B-GGUF repository. OpenBMB labels GGUF for local runtimes and Hugging Face currently exposes llama.cpp integration instructions on that first-party page." },
        { type: "paragraph", html: "On Apple Silicon, OpenBMB also publishes MiniCPM5-2B-MLX as a first-party 4-bit MLX release. Prefer these first-party formats over an unofficial conversion when you are validating the model for the first time." },
      ]},
      { id: "llama-cpp", title: "2. Start with the documented llama.cpp Q4_K_M path", blocks: [
        { type: "paragraph", html: "The current official GGUF page shows a Q4_K_M route and documents commands such as <code>llama serve -hf openbmb/MiniCPM5-2B-GGUF:Q4_K_M</code> for a local server and <code>llama cli -hf openbmb/MiniCPM5-2B-GGUF:Q4_K_M</code> for terminal inference." },
        { type: "note", html: "Recheck the official GGUF page when installing. llama.cpp flags and integration helpers can change independently of the model release." },
      ]},
      { id: "ollama-lm-studio", title: "3. Use Ollama or LM Studio if you prefer an app workflow", blocks: [
        { type: "paragraph", html: "The OpenBMB GGUF release is intended for the same local GGUF ecosystem used by llama.cpp, Ollama and LM Studio. Use the official repository as the model source instead of searching for a similarly named community quantization by default." },
        { type: "paragraph", html: "For Ollama or LM Studio, confirm that the app version you are using supports the current MiniCPM5 architecture and chat template. Model availability alone does not guarantee that an outdated runtime will behave correctly." },
      ]},
      { id: "mlx", title: "4. Use the official 4-bit MLX build on Apple Silicon", blocks: [
        { type: "paragraph", html: "OpenBMB's MiniCPM5-2B-MLX repository is the first-party Apple Silicon route and is marked as 4-bit precision. This removes the need to invent a conversion step before basic local testing." },
        { type: "paragraph", html: "Keep the MLX package and runtime current, then verify generation and chat-template behavior with a short prompt before increasing context length or integrating the model into an application." },
      ]},
      { id: "memory-context", title: "5. Start with a short context before attempting 131K", blocks: [
        { type: "paragraph", html: "The source model supports a 131,072-token native context window, but maximum context is not a free setting. Longer context increases memory pressure through the KV cache and runtime overhead." },
        { type: "paragraph", html: "Do not infer total RAM or VRAM needs from the GGUF file size alone. Start with a smaller context, measure actual memory on the target machine, and increase only when the workload justifies it." },
      ]},
      { id: "validate", title: "6. Validate the workload, not only whether the model launches", blocks: [
        { type: "list", items: ["check prompt and chat-template formatting", "test your actual coding or assistant tasks", "measure latency and memory", "test tool-call formatting if your workflow needs tools", "increase context only after the baseline is stable"] },
        { type: "paragraph", html: "OpenBMB's benchmark results are useful context, but they do not replace testing on your own prompts, hardware and agent stack. For release details, benchmark boundaries and licensing, use the main MiniCPM5-2B overview linked below." },
      ]},
    ],
    sources: miniCpm5Sources,
    relatedPaths: ["/blog/minicpm5-2b"],
  },
];
