import type { BlogArticle } from "./blog-types.ts";

const k2HorizonSources = [
  { label: "IFM — Introducing K2 Horizon", url: "https://ifm.ai/blog/k2/" },
  { label: "IFM — K2 Horizon press release", url: "https://ifm.ai/k2/press-release/" },
  { label: "IFM — K2 Horizon on Hugging Face", url: "https://huggingface.co/IFM" },
  { label: "IFM — K2 Horizon 7B model card", url: "https://huggingface.co/IFM/K2-Horizon-7B" },
  { label: "IFM — K2 Horizon 3.7B model card", url: "https://huggingface.co/IFM/K2-Horizon-3.7B" },
  { label: "IFM — K2 Horizon 7B GGUF", url: "https://huggingface.co/IFM/K2-Horizon-7B-GGUF" },
];

export const k2HorizonArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "K2 Horizon",
    targetSearchIntent: "Understand what K2 Horizon is, which six models were released, how open the release is, what deployment options exist, current API availability, licensing, benchmarks and major limitations.",
    targetQuery: "K2 Horizon",
    slug: "k2-horizon",
    title: "K2 Horizon: Models, Benchmarks, Download & How to Run",
    metaTitle: "K2 Horizon: Models, Benchmarks, Download & How to Run",
    metaDescription: "K2 Horizon is IFM’s six-model open AI fleet from 0.9B to 375B. See model sizes, benchmarks, downloads, GGUF, local setup, APIs and license details.",
    h1: "K2 Horizon: IFM’s Fully Open AI Model Fleet Explained",
    excerpt: "K2 Horizon is IFM’s September 2026 family of six openly released models spanning edge devices to enterprise-scale inference, with unusually broad training artifacts and deployment support.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "K2 Horizon model family from 0.9B through 375B with open training and deployment paths",
    sections: [
      { id: "what-is-k2-horizon", title: "What is K2 Horizon?", blocks: [
        { type: "paragraph", html: "The Institute of Foundation Models, or IFM, released K2 Horizon on September 3, 2026 as a connected fleet of six foundation models: 0.9B, 3.7B, 7B, 32B, 36B-A4B and 375B-A23B." },
        { type: "paragraph", html: "IFM positions the family as one deployment spectrum from constrained edge devices through local workstations and enterprise serving. The models share core architectural decisions, training methodology, interfaces, evaluation infrastructure and deployment tooling, while the 0.9B model uses a smaller vocabulary." },
      ]},
      { id: "models", title: "The six K2 Horizon models", blocks: [
        { type: "list", items: ["0.9B: the smallest model, designed for highly constrained edge environments.", "3.7B: a small dense model aimed at on-device and local use.", "7B: a medium dense model and practical local-development starting point.", "32B: IFM’s largest dense Horizon model, aimed at stronger local and server workloads.", "36B-A4B: a sparse MoVA + MoE model with roughly 4B active parameters per token.", "375B-A23B: the flagship sparse model for demanding enterprise-scale workloads."] },
        { type: "paragraph", html: "Parameter labels are not hardware guarantees. Memory use depends on precision, quantization, context length, KV cache, runtime overhead and offloading strategy, so one universal VRAM minimum would be misleading." },
      ]},
      { id: "openness-license", title: "How open is K2 Horizon?", blocks: [
        { type: "paragraph", html: "IFM says it is opening the development lifecycle from pretraining through reasoning and agentic post-training, including final weights, intermediate checkpoints, training code, configurations, logs, evaluation resources, and training data or detailed construction recipes when redistribution is restricted." },
        { type: "paragraph", html: "The model weights and code are released under Apache 2.0. Datasets retain their applicable licenses, so commercial users should inspect dataset-specific terms instead of assuming Apache 2.0 covers every training artifact." },
      ]},
      { id: "download-deploy", title: "Download, GGUF and local deployment", blocks: [
        { type: "paragraph", html: "The models are available through IFM’s Hugging Face organization. Official model cards document Transformers, vLLM and SGLang paths, and IFM now publishes GGUF repositories for multiple Horizon sizes including 3.7B, 7B, 32B and 36B-A4B." },
        { type: "paragraph", html: "The official 7B GGUF repository is intended for llama.cpp, but its current model card warns that upstream llama.cpp architecture support is still in progress and points to IFM’s fork. That makes runtime compatibility something to verify before treating Ollama or LM Studio support as universal." },
      ]},
      { id: "context-reasoning", title: "Context length and reasoning settings", blocks: [
        { type: "paragraph", html: "The current 3.7B and 7B cards document a native 524,288-token context window. Their validated serving examples commonly configure shorter contexts, which is a practical reminder that maximum context and sensible local context are not the same thing." },
        { type: "paragraph", html: "For benchmark-style reasoning, IFM recommends high reasoning effort, temperature 1.0, top_p 0.95 and enough output budget to avoid truncating reasoning. Those are vendor-recommended evaluation settings, not mandatory production defaults." },
      ]},
      { id: "api", title: "K2 Horizon API availability and pricing", blocks: [
        { type: "paragraph", html: "IFM’s current press release says K2 Horizon API access is available through inference partners including Compass, Cerebras and Nebius. The same release does not publish one universal K2 Horizon API price." },
        { type: "note", html: "Partner-specific model coverage, token pricing, rate limits and context limits can change. Verify the provider you plan to use rather than copying a single price across the fleet." },
      ]},
      { id: "benchmarks", title: "Benchmarks: useful launch evidence, not independent proof", blocks: [
        { type: "paragraph", html: "The current official 7B card reports 68.4 on SWE-bench Verified, 39.1 on Terminal-Bench 2.1 and 59.0 on BrowseComp. The current 3.7B card reports 68.6 on SWE-bench Verified and 25.1 on Terminal-Bench 2.1." },
        { type: "paragraph", html: "These are IFM-reported results under documented evaluation settings. The 7B card explicitly notes that its BrowseComp protocol can differ from comparison models, so the numbers should not be presented as independent proof of universal superiority." },
      ]},
      { id: "limitations", title: "What to verify before adopting K2 Horizon", blocks: [
        { type: "list", items: ["Independent benchmark reproductions are still limited because the release is new.", "Exact hardware requirements vary by model, precision, quantization and context.", "Dataset licenses differ even though model weights and code are Apache 2.0.", "Provider API pricing and model coverage are not universal.", "GGUF availability does not guarantee every desktop runtime already supports the architecture."] },
        { type: "paragraph", html: "For local deployment, start with the dedicated setup guide below and verify the live model card for the exact checkpoint and runtime you intend to use." },
      ]},
    ],
    sources: k2HorizonSources,
    relatedPaths: ["/blog/how-to-run-k2-horizon-locally"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "K2 Horizon",
    targetSearchIntent: "Set up K2 Horizon locally or self-host it through official serving paths or GGUF-compatible runtimes while understanding model-size and hardware tradeoffs without invented minimum requirements.",
    targetQuery: "how to run K2 Horizon locally",
    parentSlug: "k2-horizon",
    slug: "how-to-run-k2-horizon-locally",
    title: "How to Run K2 Horizon Locally: GGUF, vLLM, SGLang & Hardware",
    metaTitle: "How to Run K2 Horizon Locally: GGUF, vLLM & SGLang",
    metaDescription: "Run K2 Horizon locally with Transformers, vLLM, SGLang or GGUF. See official setup paths, reasoning settings, context tradeoffs and cautious hardware guidance.",
    h1: "How to Run K2 Horizon Locally",
    excerpt: "K2 Horizon supports several local and self-hosted paths. Choose the model size first, then use Transformers for direct Python inference, vLLM or SGLang for serving, or GGUF where your runtime supports the architecture.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "K2 Horizon local deployment paths through Transformers, vLLM, SGLang and GGUF",
    sections: [
      { id: "choose-model", title: "Start by choosing a practical model size", blocks: [
        { type: "paragraph", html: "For local experiments, 3.7B and 7B are the clearest starting points in the current official documentation. The 32B and 36B-A4B models move toward workstation or server-class use, while 375B-A23B is an enterprise-scale serving target rather than a normal desktop model." },
        { type: "paragraph", html: "Do not convert those deployment classes into fixed VRAM numbers. Precision, quantization, context length, KV cache, runtime overhead and CPU/GPU offloading all change the real requirement." },
      ]},
      { id: "transformers", title: "Option 1: Transformers for direct Python inference", blocks: [
        { type: "paragraph", html: "The official 3.7B and 7B cards include Transformers examples using trust_remote_code and automatic device mapping. This is the simplest path when you want to inspect model behavior directly in Python without running a separate API server." },
        { type: "paragraph", html: "The current cards document a validated release stack including Transformers 5.15.0, PyTorch 2.13.0 and Safetensors 0.8.0. Treat those as validated release-state versions, not a guarantee that every future dependency combination is equivalent." },
      ]},
      { id: "vllm", title: "Option 2: vLLM for an OpenAI-compatible API", blocks: [
        { type: "paragraph", html: "IFM’s 7B quick start shows vLLM serving with BF16, trust_remote_code, a K2 Horizon reasoning parser, automatic tool choice and the K2 Horizon tool-call parser." },
        { type: "paragraph", html: "Once served, applications can call the local OpenAI-compatible chat-completions endpoint. This is a practical route for agent frameworks and internal tools that already support a configurable OpenAI-style base URL." },
      ]},
      { id: "sglang", title: "Option 3: SGLang for validated serving", blocks: [
        { type: "paragraph", html: "IFM also documents SGLang recipes for Horizon models. The current 7B card points to a validated BF16 configuration using the K2 Horizon reasoning parser and FlashAttention-based serving." },
        { type: "paragraph", html: "Use the live model card or linked cookbook when deploying rather than freezing a launch-week revision forever. Serving flags, tested revisions and backend recommendations can change quickly after a new model launch." },
      ]},
      { id: "gguf", title: "Option 4: GGUF and llama.cpp-compatible workflows", blocks: [
        { type: "paragraph", html: "IFM publishes official GGUF repositories for several K2 Horizon sizes. The 7B repository says its files are intended for llama.cpp and include tokenizer metadata plus a llama.cpp-compatible chat template." },
        { type: "note", html: "Current IFM GGUF cards warn that upstream llama.cpp K2 Horizon architecture support is still in progress and point to an IFM fork. Verify your exact llama.cpp, Ollama or LM Studio build before assuming compatibility." },
      ]},
      { id: "reasoning-context", title: "Reasoning and context settings", blocks: [
        { type: "paragraph", html: "The current 3.7B and 7B cards recommend high reasoning effort, temperature 1.0, top_p 0.95 and at least 32,768 output tokens for reproducing reported reasoning evaluations. Production workloads can trade that depth for latency." },
        { type: "paragraph", html: "Both cards document a native 524,288-token context window, but the 7B vLLM example configures 131,072 tokens. Longer context increases memory pressure, especially through the KV cache, so begin with the context your workload actually needs." },
      ]},
      { id: "workflow", title: "A practical local workflow", blocks: [
        { type: "list", ordered: true, items: ["Start with 3.7B or 7B unless you have a clear reason to move larger.", "Use Transformers for direct experimentation.", "Use vLLM or SGLang when you want a local API or higher-throughput serving.", "Use an official GGUF only after verifying current runtime architecture support.", "Start below the maximum context length and measure memory and latency.", "Pin revisions when reproducibility matters."] },
        { type: "paragraph", html: "The main K2 Horizon guide explains licensing, model families, API availability and benchmark boundaries. Use it alongside this setup guide when deciding whether local inference or a hosted partner is the better fit." },
      ]},
    ],
    sources: k2HorizonSources,
    relatedPaths: ["/blog/k2-horizon"],
  },
];
