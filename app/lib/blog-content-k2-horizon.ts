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
        { type: "paragraph", html: "The current official 7B card reports 70.6 on SWE-bench Verified, 39.1 on Terminal-Bench 2.1 and 59.0 on BrowseComp. The current 3.7B card reports 68.6 on SWE-bench Verified and 25.1 on Terminal-Bench 2.1." },
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
  {
    status: "published",
    articleType: "supporting",
    cluster: "K2 Horizon",
    targetSearchIntent: "Choose the right K2 Horizon model size and architecture for edge, local, workstation or enterprise use without conflating total parameters, active parameters, benchmark claims or hardware requirements.",
    targetQuery: "K2 Horizon models",
    parentSlug: "k2-horizon",
    slug: "k2-horizon-models",
    title: "Which K2 Horizon Model Should You Use? 0.9B to 375B",
    metaTitle: "K2 Horizon Models Compared: 0.9B to 375B",
    metaDescription: "Compare all six K2 Horizon models from 0.9B to 375B. See architecture, deployment fit, context, local-use tradeoffs and which model to start with.",
    h1: "Which K2 Horizon Model Should You Use?",
    excerpt: "K2 Horizon spans six model sizes from a 0.9B edge model to a 375B-A23B enterprise flagship. The right choice depends on deployment constraints, architecture, latency, context and quality needs—not parameter count alone.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Six K2 Horizon model sizes arranged from edge deployment through local, workstation and enterprise use",
    sections: [
      { id: "quick-recommendation", title: "Quick recommendation", blocks: [
        { type: "paragraph", html: "Choose 0.9B when footprint is the primary constraint and you are targeting edge-class hardware. Choose 3.7B for small local experiments where efficiency matters. Choose 7B when you want the strongest broadly practical local starting point. Choose 32B for workstation or server resources, 36B-A4B when sparse active compute and MoVA fit your serving stack, and 375B-A23B for enterprise-scale inference." },
        { type: "note", html: "These are deployment recommendations based on IFM’s positioning and model architecture, not guaranteed hardware thresholds. Precision, quantization, context, KV-cache size and runtime can materially change memory and latency." },
      ]},
      { id: "small-models", title: "0.9B, 3.7B and 7B: edge to practical local use", blocks: [
        { type: "paragraph", html: "IFM positions 0.9B for highly constrained environments such as watches and glasses. That positioning does not mean every wearable can run the unmodified checkpoint; actual deployment still depends on quantization, runtime, memory and device acceleration." },
        { type: "paragraph", html: "The 3.7B model is a small dense option with a native 524,288-token context window. Its current official model card reports 68.6 on SWE-bench Verified and 25.1 on Terminal-Bench 2.1 under IFM’s evaluation setup." },
        { type: "paragraph", html: "The 7B model is the family’s medium dense option and a sensible general local starting point. Its current official card reports 70.6 on SWE-bench Verified, 39.1 on Terminal-Bench 2.1 and 59.0 on BrowseComp. Those results are vendor-reported, and IFM notes that some comparison protocols differ." },
      ]},
      { id: "large-models", title: "32B, 36B-A4B and 375B-A23B", blocks: [
        { type: "paragraph", html: "The 32B model is a dense workstation/server-class option for users who want more capacity without moving to the flagship. All parameters participate in the standard dense forward computation." },
        { type: "paragraph", html: "The 36B-A4B model is structurally different: IFM describes it as roughly 36B total parameters with about 4B active under a sparse MoVA architecture. The A4B label therefore does not make it equivalent to a dense 4B checkpoint; storage and memory behavior still reflect a much larger model." },
        { type: "paragraph", html: "The 375B-A23B flagship activates about 23B parameters and is positioned for demanding enterprise reasoning and agentic workloads. Sparse activation reduces active compute, but the total checkpoint remains extremely large and belongs in serious infrastructure or hosted-inference discussions." },
      ]},
      { id: "dense-vs-sparse", title: "Dense vs sparse: compare more than active parameters", blocks: [
        { type: "paragraph", html: "Dense variants are straightforward: the full parameter set participates in the forward computation. Sparse variants contain more total parameters but activate a subset per token or operation." },
        { type: "paragraph", html: "That can lower active compute without making total storage requirements disappear. Comparing 36B-A4B directly with a 7B dense model only as ‘4B active versus 7B’ hides architectural, storage and serving differences. Measure latency and memory on the stack you actually plan to use." },
      ]},
      { id: "local-use", title: "Which K2 Horizon model is best for local use?", blocks: [
        { type: "paragraph", html: "For most developers, 3.7B and 7B are the clearest practical starting points because official cards document serving paths and quantization discovery while keeping model size far below the larger workstation and enterprise variants." },
        { type: "paragraph", html: "The separate local-running guide covers Transformers, vLLM, SGLang and GGUF setup in detail. Move to 32B or 36B-A4B only when your own evaluations justify the extra infrastructure and your runtime supports the architecture well." },
      ]},
      { id: "coding-agents", title: "Choosing for coding and agents", blocks: [
        { type: "paragraph", html: "IFM reports strong coding and agentic results across the family, but benchmark rank alone should not choose a production model. Test your own repository, tool-use behavior, context requirements and latency." },
        { type: "paragraph", html: "For a local agent baseline, 7B is a reasonable place to start, then move upward only if your evaluation shows a meaningful gain. A smaller model that responds quickly and reliably with your tools can be operationally better than a larger checkpoint with a higher vendor benchmark." },
      ]},
      { id: "context", title: "Context length changes the deployment equation", blocks: [
        { type: "paragraph", html: "The current 3.7B and 7B cards document native 524,288-token context. Long context can dramatically increase KV-cache memory and latency, so support for 512K does not mean every local request should run at the maximum." },
        { type: "paragraph", html: "Choose a context window around the actual task and available memory. Model size is only one part of the deployment decision." },
      ]},
      { id: "faq", title: "K2 Horizon model-selection FAQ", blocks: [
        { type: "list", items: ["Smallest model: 0.9B.", "Largest model: 375B-A23B.", "A4B meaning: roughly 4B active parameters in the 36B sparse model, not a dense 4B checkpoint.", "Practical local starting point: usually 3.7B or 7B, depending on hardware and quantization.", "Universal best model: none—choose by workload and deployment constraints, then validate on your own evaluation set."] },
        { type: "paragraph", html: "For the broad release, licensing and API picture, return to the main K2 Horizon guide. For implementation details, continue to the local-running guide." },
      ]},
    ],
    sources: k2HorizonSources,
    relatedPaths: ["/blog/k2-horizon", "/blog/how-to-run-k2-horizon-locally"],
  },
];
