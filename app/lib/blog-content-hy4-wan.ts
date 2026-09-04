import type { BlogArticle } from "./blog-content.ts";

const published = "2026-08-28";

const hy4Main: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Tencent Hy4 Preview",
  targetSearchIntent: "Broad entity overview: architecture, access, pricing, benchmarks, licensing and deployment",
  targetQuery: "Hy4 Preview",
  slug: "tencent-hy4-preview",
  title: "Tencent Hy4 Preview: API, Pricing, Benchmarks, 1M Context & Open Weights",
  metaTitle: "Tencent Hy4 Preview: API, Pricing, Benchmarks & 1M Context",
  metaDescription: "Tencent Hy4 Preview is a 770B MoE model with 49B active parameters, 1M context, Apache-2.0 weights, hosted access, vLLM and SGLang support.",
  h1: "Tencent Hy4 Preview: API Pricing, Benchmarks, 1M Context and Open Weights",
  excerpt: "Tencent's 770B-total MoE preview combines 49B active parameters, a 1M-token context window, Apache-2.0 weights and official self-hosting recipes.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic for Tencent Hy4 Preview, a 770B MoE model with 1M-token context",
  sections: [
    {
      id: "what-is-hy4",
      title: "What is Hy4 Preview?",
      blocks: [
        { type: "paragraph", html: "Tencent released <strong>Hy4 Preview</strong> on August 28, 2026 as an open-weight flagship mixture-of-experts model for long-horizon coding, office work, game development and scientific tasks." },
        { type: "paragraph", html: "Tencent documents <strong>770 billion total backbone parameters</strong>, <strong>49 billion active parameters per token</strong>, 78 layers, 256 routed experts plus one shared expert, a <strong>1 million-token context window</strong> and a native MTP layer for speculative decoding." },
        { type: "note", html: "This is explicitly a preview. Architecture, provider coverage, serving behavior and prices can still change." },
      ],
    },
    {
      id: "open-weights-license",
      title: "Open weights, license and local deployment",
      blocks: [
        { type: "paragraph", html: "Tencent publishes official full and FP8 checkpoints under the <strong>Apache License 2.0</strong>. The official model card and repository document deployment through <strong>vLLM</strong> and <strong>SGLang</strong>, including Hy4-specific reasoning and tool-call parsers." },
        { type: "paragraph", html: "Once deployed, either runtime can expose an OpenAI-compatible endpoint. Tencent also points to AngelSlim for compression and quantization work." },
        { type: "paragraph", html: "The model is self-hostable, but its scale makes this a multi-GPU infrastructure project rather than a normal desktop-model workflow. See the <a href=\"/blog/run-hy4-preview-locally\">Hy4 Preview local deployment guide</a> for the official paths and hardware caveats." },
      ],
    },
    {
      id: "api-pricing",
      title: "Hosted API access and current pricing",
      blocks: [
        { type: "paragraph", html: "Hosted access is currently verified through OpenRouter under <code>tencent/hy4-preview</code>. At the August 28 review, OpenRouter listed <strong>$0.834 per million input tokens</strong>, <strong>$2.501 per million output tokens</strong> and <strong>$0.042 per million cache-read tokens</strong>." },
        { type: "note", html: "These are current OpenRouter/provider rates, not a permanent Tencent list price. Recheck them before budgeting." },
        { type: "paragraph", html: "OpenRouter lists a 1,048,576-token context window, up to 64,000 completion tokens, tool calling and structured outputs. Actual usable context, latency and cost still depend on the provider and request." },
      ],
    },
    {
      id: "benchmarks",
      title: "Hy4 Preview benchmarks",
      blocks: [
        { type: "paragraph", html: "Tencent reports a blind comparison across 203 engineering tasks evaluated by 163 internal experts. Its published average scores are <strong>2.99 for Hy4 Preview</strong>, 2.92 for GLM 5.3 and 2.94 for Kimi K3." },
        { type: "paragraph", html: "Tencent also reports 46.8% wins, 12.8% ties and 40.4% losses against GLM 5.3, and 51.2% wins, 7.9% ties and 40.9% losses against Kimi K3." },
        { type: "note", html: "These are vendor-run internal results, not independent third-party benchmarks. Read the <a href=\"/blog/hy4-preview-vs-glm-5-3-vs-kimi-k3\">Hy4 vs GLM 5.3 vs Kimi K3 comparison</a> for the practical differences." },
      ],
    },
    {
      id: "who-is-it-for",
      title: "Who should use Hy4 Preview?",
      blocks: [
        { type: "paragraph", html: "Hy4 is most relevant when open weights, a very large context window, agentic coding, tool use or infrastructure control matter. Teams prioritising inexpensive hosted inference should compare live price, latency and reliability with GLM, Kimi, Qwen and closed models on their own workloads." },
        { type: "paragraph", html: "The next useful evidence will be independent benchmarks, mature lower-bit conversions and reproducible serving data. Until then, Tencent's release is best treated as a credible early signal rather than proof of a universal winner." },
      ],
    },
  ],
  sources: [
    { label: "Tencent — official Hy4 Preview repository", url: "https://github.com/Tencent-Hunyuan/Hy4-preview" },
    { label: "Tencent — official Hy4 Preview model card", url: "https://huggingface.co/tencent/Hy4-preview" },
    { label: "Tencent — official Hy4 Preview FP8 model card", url: "https://huggingface.co/tencent/Hy4-preview-FP8" },
    { label: "OpenRouter — Hy4 Preview access and live provider pricing", url: "https://openrouter.ai/tencent/hy4-preview" },
  ],
  relatedPaths: ["/blog/run-hy4-preview-locally", "/blog/hy4-preview-vs-glm-5-3-vs-kimi-k3"],
};

const hy4Local: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Tencent Hy4 Preview",
  targetSearchIntent: "Deploy Hy4 Preview with official weights, vLLM or SGLang, or current community GGUF builds with accurate llama.cpp patch and hardware caveats",
  targetQuery: "how to run Hy4 Preview locally",
  parentSlug: "tencent-hy4-preview",
  slug: "run-hy4-preview-locally",
  title: "How to Run Hy4 Preview Locally: GGUF, vLLM, SGLang & Hardware",
  metaTitle: "Run Hy4 Preview Locally: GGUF, vLLM, SGLang & Hardware",
  metaDescription: "Run Hy4 Preview with official vLLM or SGLang paths or AngelSlim GGUF builds. Compare quant sizes, required llama.cpp patches and hardware limits.",
  h1: "How to Run Hy4 Preview Locally: GGUF, vLLM and SGLang",
  excerpt: "Use Tencent’s official vLLM or SGLang routes, or evaluate AngelSlim’s community GGUF builds with the required llama.cpp patches and realistic hardware planning.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: "2026-09-04",
  ogAlt: "Project Monet guide graphic comparing Hy4 Preview GGUF, vLLM, SGLang and hardware requirements",
  sections: [
    {
      id: "before-you-start",
      title: "Before you start",
      blocks: [
        { type: "paragraph", html: "Tencent's <a href=\"/blog/tencent-hy4-preview\">Hy4 Preview</a> is open-weight, but “run locally” needs a qualifier: it has 770B total parameters with 49B active per token. Practical deployment is aimed at multi-GPU infrastructure." },
        { type: "paragraph", html: "Start with the official <code>tencent/Hy4-preview</code> or <code>tencent/Hy4-preview-FP8</code> checkpoints. Tencent licenses both under Apache 2.0 and publishes model-specific reasoning and tool-call parsers." },
      ],
    },
    {
      id: "vllm",
      title: "Option 1: vLLM",
      blocks: [
        { type: "paragraph", html: "Tencent documents vLLM as an official serving path. Use the compatible version in the current repository, download the checkpoint and launch it with tensor parallelism sized for your GPU fleet. The resulting server exposes an OpenAI-compatible API." },
        { type: "note", html: "Do not copy a tensor-parallel value blindly. Device count, memory capacity, precision, context target, KV cache and concurrency all change the correct configuration." },
      ],
    },
    {
      id: "sglang",
      title: "Option 2: SGLang",
      blocks: [
        { type: "paragraph", html: "Tencent's current SGLang recipe uses the FP8 checkpoint, Hy4-specific tool and reasoning parsers, EAGLE-style speculative decoding and the native MTP layer." },
        { type: "paragraph", html: "The official example uses tensor parallelism across eight devices. That proves eight-way serving is a supported example configuration; it is not a universal minimum-hardware claim." },
      ],
    },
    {
      id: "hardware",
      title: "FP8, context length and hardware sizing",
      blocks: [
        { type: "paragraph", html: "The official FP8 checkpoint is the clearest starting point for reducing memory pressure. It remains extremely large, so consumer single-GPU claims should be treated cautiously unless they include a reproducible conversion and measured setup." },
        { type: "paragraph", html: "Tencent does not publish one universal minimum-VRAM figure. Precision, tensor parallelism, KV cache, speculative decoding, concurrency and requested context all matter. Attempting a 1M-token context can increase memory requirements sharply compared with short-context tests." },
        { type: "paragraph", html: "Tencent points to AngelSlim for compression and quantization. Any community conversion should be labelled community-produced rather than presented as an official Tencent checkpoint." },
      ],
    },
    {
      id: "gguf",
      title: "Community GGUF builds and current llama.cpp status",
      blocks: [
        { type: "paragraph", html: "AngelSlim now publishes community GGUF conversions for Hy4 Preview. The maintained repository currently lists <strong>Q4_K_M at 435.20 GiB</strong>, <strong>UD-IQ1_M at 219.83 GiB</strong> and <strong>STQ1_0 at 213.66 GiB</strong>. Those file sizes are not minimum-RAM guarantees; runtime overhead, KV cache, context length and offload strategy add to the memory budget." },
        { type: "paragraph", html: "As of September 4, 2026, AngelSlim explicitly says the <code>hyv4</code> architecture is not upstream in stock llama.cpp, so none of these builds should be presented as plug-and-play with an unmodified release. Apply the architecture patch linked by the maintainer; STQ1_0 requires an additional patch." },
        { type: "note", html: "These are community conversions, not official Tencent checkpoints. Recheck the maintained README and patch status before downloading hundreds of GiB or designing production capacity around them." },
      ],
    },
    {
      id: "checklist",
      title: "Practical deployment checklist",
      blocks: [
        { type: "list", ordered: true, items: [
          "Choose the official full/FP8 runtime path or a clearly labelled community GGUF conversion.",
          "Confirm current Transformers and runtime versions in Tencent's repository.",
          "Select vLLM or SGLang and size tensor parallelism for the actual GPU fleet.",
          "Start with a shorter context before testing extreme context lengths.",
          "Verify the Hy4 tool and reasoning parsers.",
          "For GGUF, confirm the current hyv4 architecture patch and any quant-specific patch before launch.",
          "Benchmark latency, throughput and memory on the production workload.",
        ] },
        { type: "paragraph", html: "Self-host when data control, dedicated capacity or custom infrastructure justify it. Hosted access is much simpler for experimentation with a model at this scale." },
      ],
    },
  ],
  sources: [
    { label: "Tencent — official Hy4 Preview repository and serving recipes", url: "https://github.com/Tencent-Hunyuan/Hy4-preview" },
    { label: "Tencent — official Hy4 Preview model card", url: "https://huggingface.co/tencent/Hy4-preview" },
    { label: "Tencent — official Hy4 Preview FP8 model card", url: "https://huggingface.co/tencent/Hy4-preview-FP8" },
    { label: "AngelSlim — Hy4 Preview GGUF builds, sizes and llama.cpp patch status", url: "https://huggingface.co/AngelSlim/Hy4-preview-GGUF/blob/main/README.md" },
  ],
  relatedPaths: ["/blog/tencent-hy4-preview", "/blog/hy4-preview-vs-glm-5-3-vs-kimi-k3"],
};

const hy4Comparison: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Tencent Hy4 Preview",
  targetSearchIntent: "Compare verified context, access and vendor-reported engineering evidence",
  targetQuery: "Hy4 Preview vs GLM 5.3 vs Kimi K3",
  parentSlug: "tencent-hy4-preview",
  slug: "hy4-preview-vs-glm-5-3-vs-kimi-k3",
  title: "Hy4 Preview vs GLM 5.3 vs Kimi K3: Benchmarks, Context & Which to Use",
  metaTitle: "Hy4 Preview vs GLM 5.3 vs Kimi K3: Benchmarks & Context",
  metaDescription: "Compare Tencent Hy4 Preview with GLM 5.3 and Kimi K3 on context, open access, agentic workflows and Tencent's vendor-reported engineering evaluation.",
  h1: "Hy4 Preview vs GLM 5.3 vs Kimi K3: What the Early Evidence Shows",
  excerpt: "Tencent's internal evaluation gives Hy4 a narrow lead, but access, licensing, cost and workload fit matter more than a vendor-run score alone.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet comparison graphic for Hy4 Preview, GLM 5.3 and Kimi K3",
  sections: [
    {
      id: "short-version",
      title: "The short version",
      blocks: [
        { type: "paragraph", html: "<a href=\"/blog/tencent-hy4-preview\">Hy4 Preview</a> stands out for Apache-2.0 weights, official full/FP8 checkpoints, a 1M-token context and documented vLLM/SGLang deployment. GLM 5.3 is integrated with Z.ai's coding ecosystem, while Kimi K3 is positioned for long-horizon coding, knowledge work and reasoning." },
        { type: "paragraph", html: "There is no defensible universal winner. The best choice depends on your workload, deployment model, serving budget and need for infrastructure control." },
      ],
    },
    {
      id: "tencent-comparison",
      title: "What Tencent's internal comparison says",
      blocks: [
        { type: "paragraph", html: "Tencent says 163 internal experts evaluated outputs across 203 engineering tasks. It reports average scores of <strong>2.99 for Hy4</strong>, 2.92 for GLM 5.3 and 2.94 for Kimi K3." },
        { type: "paragraph", html: "The reported head-to-head results are 46.8% wins / 12.8% ties / 40.4% losses against GLM 5.3, and 51.2% wins / 7.9% ties / 40.9% losses against Kimi K3." },
        { type: "note", html: "This is a Tencent-run internal evaluation, not an independent leaderboard. It is directional evidence, not proof of universal superiority." },
      ],
    },
    {
      id: "context-access",
      title: "Context, access and self-hosting",
      blocks: [
        { type: "paragraph", html: "Tencent and Moonshot both document 1M-token context for Hy4 and Kimi K3. Long context is useful for large repositories and file collections, but serving cost, KV-cache demand and retrieval quality still determine whether the maximum is practical." },
        { type: "paragraph", html: "Hy4 has official Apache-2.0 full and FP8 checkpoints. Kimi currently provides first-party hosted API access and lists K3 pricing at $3 per million input tokens, $15 per million output tokens and $0.30 per million cache-hit tokens. Z.ai's current first-party pricing lists GLM 5.3 at $1.40 input, $4.40 output and $0.26 cached input per million tokens." },
        { type: "note", html: "Those first-party prices are time-sensitive and do not make an apples-to-apples cost comparison with every hosted Hy4 provider. Recheck the same provider and service conditions before choosing." },
      ],
    },
    {
      id: "which-to-use",
      title: "Which model should you use?",
      blocks: [
        { type: "paragraph", html: "Choose Hy4 when official open weights, Apache licensing, self-hosting and model-level infrastructure control are central. See the <a href=\"/blog/run-hy4-preview-locally\">local deployment guide</a> before estimating hardware." },
        { type: "paragraph", html: "Consider GLM 5.3 when Z.ai's coding ecosystem and current first-party API economics fit the workflow. Consider Kimi K3 where its native multimodal, 1M-context agent stack and hosted API are a stronger operational match." },
        { type: "paragraph", html: "For production, benchmark the candidates on the same tasks, prompts, tools, context size and evaluation rubric. Vendor comparisons cannot replace workload-specific testing." },
      ],
    },
  ],
  sources: [
    { label: "Tencent — Hy4 Preview repository and internal evaluation", url: "https://github.com/Tencent-Hunyuan/Hy4-preview" },
    { label: "Z.ai — GLM 5.3 overview", url: "https://docs.z.ai/guides/llm/glm-5.3" },
    { label: "Z.ai — current model pricing", url: "https://docs.z.ai/guides/overview/pricing" },
    { label: "Moonshot AI — Kimi K3", url: "https://www.moonshot.ai/" },
    { label: "Kimi API — current K3 access and pricing", url: "https://platform.kimi.ai/" },
    { label: "OpenRouter — Hy4 Preview provider pricing", url: "https://openrouter.ai/tencent/hy4-preview" },
  ],
  relatedPaths: ["/blog/tencent-hy4-preview", "/blog/run-hy4-preview-locally"],
};

const wanMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Alibaba Wan 3.0",
  targetSearchIntent: "Broad entity overview: preview status, capabilities, API, pricing, native audio and references",
  targetQuery: "Wan 3.0",
  slug: "alibaba-wan-3-0",
  title: "Wan 3.0: API, Pricing, 30-Second Video, Native Audio & How It Works",
  metaTitle: "Wan 3.0: API, Pricing, 30-Second Video & Native Audio",
  metaDescription: "Alibaba Wan 3.0 generates up to 30-second 1080p video with native audio and multimodal references. See its preview API, pricing, inputs and limits.",
  h1: "Alibaba Wan 3.0: API, Pricing, 30-Second Video and Native Audio",
  excerpt: "Alibaba's publicly documented preview API combines up to 30-second video, native audio, editing, extension and unusually broad reference inputs behind one model.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic for Alibaba Wan 3.0 with 30-second video, native audio and multimodal references",
  sections: [
    {
      id: "what-is-wan",
      title: "What is Wan 3.0?",
      blocks: [
        { type: "paragraph", html: "Alibaba Cloud introduced Wan 3.0 in August 2026 as an all-in-one generative-video model in Model Studio. The public model ID is <code>wan3.0-video</code>, with a Prime variant listed separately." },
        { type: "paragraph", html: "One model covers text-to-video, image-to-video, first/last-frame generation, multimodal reference generation, video editing and video extension." },
      ],
    },
    {
      id: "availability",
      title: "Is Wan 3.0 available?",
      blocks: [
        { type: "paragraph", html: "Yes, through Alibaba Cloud Model Studio's documented asynchronous API in supported regions. However, the official API reference currently marks Wan 3.0 as <strong>preview</strong>, so this article does not describe it as generally available." },
        { type: "note", html: "Preview access can change. Keep the API key, workspace and endpoint in the same Alibaba Cloud region." },
      ],
    },
    {
      id: "capabilities",
      title: "Duration, resolution and native audio",
      blocks: [
        { type: "paragraph", html: "Wan 3.0 supports up to <strong>30 seconds</strong> in a single generation at 30fps when there is no video input. With a video input, the source plus generated output must remain within the documented 30-second limit." },
        { type: "paragraph", html: "Alibaba documents 480p, 720p and 1080p output. The model can generate dialogue, music and sound effects, and it supports editing plus forward, backward or bidirectional extension." },
      ],
    },
    {
      id: "references",
      title: "Images, video, audio, documents and web pages",
      blocks: [
        { type: "paragraph", html: "Alibaba documents up to 10 reference images, five reference videos with a combined maximum of 15 seconds, and five reference audio files with a combined maximum of 15 seconds." },
        { type: "paragraph", html: "A request can also use one supported file or one public web link. Document formats include PDF, DOC/DOCX, PPT/PPTX, XLS/XLSX, text, Markdown and Apple productivity formats, within the current 100MB and 50-page limits." },
        { type: "paragraph", html: "First/last-frame control is mutually exclusive with the reference/file/link modes documented by Alibaba. The <a href=\"/blog/wan-3-0-api-guide\">Wan 3.0 API guide</a> maps these modes to a practical request flow." },
      ],
    },
    {
      id: "pricing",
      title: "Wan 3.0 pricing",
      blocks: [
        { type: "paragraph", html: "For the Singapore region, Alibaba's current pricing page lists <code>wan3.0-video</code> at <strong>$0.05 per second for 480p</strong>, <strong>$0.10 for 720p</strong> and <strong>$0.20 for 1080p</strong>. It marks those rates as a limited-time 30% discount." },
        { type: "paragraph", html: "The same page lists <code>wan3.0-video-prime</code> at $0.068, $0.14 and $0.28 per second for 480p, 720p and 1080p. It also documents a conditional 30-second Singapore free quota. Region, tier and promotion terms can differ." },
        { type: "note", html: "These are current Singapore-region rates, not universal permanent pricing. Failed generation tasks are not billed; successful tasks bill input plus output duration under Alibaba's current rules." },
      ],
    },
    {
      id: "open-source",
      title: "Is Wan 3.0 open source?",
      blocks: [
        { type: "paragraph", html: "The reviewed official Wan 3.0 launch, API and pricing pages establish hosted preview access, but they do not establish an official Wan 3.0 open-weight release. Earlier Wan generations should not be used as evidence that Wan 3.0 weights or a license are available." },
        { type: "paragraph", html: "For a workflow comparison, see <a href=\"/blog/wan-3-0-vs-gemini-omni-vs-veo\">Wan 3.0 vs Gemini Omni 1.1 Flash vs Veo 3.1</a>." },
      ],
    },
  ],
  sources: [
    { label: "Alibaba Cloud — Wan 3.0 video generation API reference", url: "https://www.alibabacloud.com/help/en/model-studio/wan3-video-generation-api-reference" },
    { label: "Alibaba Cloud — Model Studio pricing", url: "https://www.alibabacloud.com/help/en/model-studio/model-pricing" },
    { label: "Alibaba Cloud — Wan 3.0 launch overview", url: "https://modelstudio.alibabacloud.com/intl/blog/wan3-ai-video-generation-model/" },
  ],
  relatedPaths: ["/blog/wan-3-0-api-guide", "/blog/wan-3-0-vs-gemini-omni-vs-veo"],
};

const wanApi: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Alibaba Wan 3.0",
  targetSearchIntent: "Implement Wan 3.0 through Model Studio with current inputs, limits and pricing",
  targetQuery: "Wan 3.0 API",
  parentSlug: "alibaba-wan-3-0",
  slug: "wan-3-0-api-guide",
  title: "How to Use Wan 3.0 API: Text, Images, References, Documents & Pricing",
  metaTitle: "Wan 3.0 API Guide: Text, Images, Documents & Pricing",
  metaDescription: "Use Alibaba Wan 3.0 API for text-to-video, images, multimodal references, documents, editing and extension. See model ID, request flow and current pricing.",
  h1: "How to Use the Wan 3.0 API",
  excerpt: "A practical guide to Model Studio's preview API for text, frames, audiovisual references, documents, editing and extension—plus current regional pricing.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet developer guide graphic for the Wan 3.0 API",
  sections: [
    {
      id: "what-you-need",
      title: "What you need",
      blocks: [
        { type: "paragraph", html: "Create an Alibaba Cloud Model Studio workspace in a supported region, obtain an API key and use the endpoint for that same region. The official documentation currently marks <a href=\"/blog/alibaba-wan-3-0\">Wan 3.0</a> as preview." },
        { type: "paragraph", html: "The API is asynchronous. Create a task, retain its task ID and poll the matching regional task endpoint. Task IDs remain valid for 24 hours, and completed media URLs are temporary, so copy outputs to your own storage." },
      ],
    },
    {
      id: "model-inputs",
      title: "Model ID and input modes",
      blocks: [
        { type: "paragraph", html: "Use <code>wan3.0-video</code> for the standard all-in-one model. Alibaba also lists <code>wan3.0-video-prime</code>; pricing and availability differ by tier and region." },
        { type: "list", items: [
          "Text-to-video: send a prompt without media and set duration, resolution and aspect ratio.",
          "First frame: provide one image with the first-frame media role.",
          "First and last frame: provide both roles for controlled interpolation.",
          "Reference generation: use images, video and audio as documented reference media.",
          "Document or web reference: provide one supported file or one public web link.",
          "Editing and extension: provide a source video and an explicit edit or continuation instruction.",
        ] },
      ],
    },
    {
      id: "limits",
      title: "Current reference and duration limits",
      blocks: [
        { type: "paragraph", html: "The current API reference allows up to 10 reference images, five reference videos totalling no more than 15 seconds, and five reference audio files totalling no more than 15 seconds. It allows one file or one public link in the corresponding reference mode." },
        { type: "paragraph", html: "Without video input, output can be up to 30 seconds. With video input, source plus output must remain within 30 seconds. First/last-frame mode cannot be combined with reference, file or link mode where Alibaba marks them mutually exclusive." },
      ],
    },
    {
      id: "pricing",
      title: "Current API pricing",
      blocks: [
        { type: "paragraph", html: "In Singapore, Alibaba currently lists standard Wan 3.0 at $0.05/$0.10/$0.20 per second for 480p/720p/1080p, under a marked limited-time 30% discount. Prime is listed at $0.068/$0.14/$0.28 per second at the same resolutions." },
        { type: "paragraph", html: "A simple estimate multiplies the applicable per-second rate by billable input plus output duration. Do not treat the Singapore promotion or its conditional 30-second free quota as a permanent global offer." },
      ],
    },
    {
      id: "production-checklist",
      title: "Production checklist",
      blocks: [
        { type: "list", items: [
          "Keep model, workspace, endpoint and API key in the same region.",
          "Create the task asynchronously and poll the matching regional endpoint.",
          "Store completed outputs before temporary URLs expire.",
          "Validate media count, size and duration limits before sending.",
          "Treat regional and promotional pricing as time-sensitive.",
          "Test shorter, lower-resolution drafts before long 1080p runs.",
        ] },
      ],
    },
  ],
  sources: [
    { label: "Alibaba Cloud — Wan 3.0 API reference", url: "https://www.alibabacloud.com/help/en/model-studio/wan3-video-generation-api-reference" },
    { label: "Alibaba Cloud — Model Studio pricing", url: "https://www.alibabacloud.com/help/en/model-studio/model-pricing" },
    { label: "Alibaba Cloud — Wan 3.0 overview", url: "https://modelstudio.alibabacloud.com/intl/blog/wan3-ai-video-generation-model/" },
  ],
  relatedPaths: ["/blog/alibaba-wan-3-0", "/blog/wan-3-0-vs-gemini-omni-vs-veo"],
};

const wanComparison: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Alibaba Wan 3.0",
  targetSearchIntent: "Compare current AI video models by verified workflow, duration, resolution and API pricing",
  targetQuery: "Wan 3.0 vs Gemini Omni 1.1 Flash",
  parentSlug: "alibaba-wan-3-0",
  slug: "wan-3-0-vs-gemini-omni-vs-veo",
  title: "Wan 3.0 vs Gemini Omni 1.1 Flash vs Veo 3.1: Which AI Video Model Fits?",
  metaTitle: "Wan 3.0 vs Gemini Omni 1.1 Flash vs Veo 3.1",
  metaDescription: "Compare Wan 3.0, Gemini Omni 1.1 Flash and Veo 3.1 for video duration, resolution, editing, references, API status and creator workflows.",
  h1: "Wan 3.0 vs Gemini Omni 1.1 Flash vs Veo 3.1",
  excerpt: "Wan emphasises long all-in-one generations and broad references; Omni favours conversational editing; Veo remains Google's dedicated quality-focused video family.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet comparison graphic for Wan 3.0, Gemini Omni 1.1 Flash and Veo 3.1",
  sections: [
    {
      id: "differences",
      title: "The practical difference",
      blocks: [
        { type: "paragraph", html: "<a href=\"/blog/alibaba-wan-3-0\">Wan 3.0</a>, Gemini Omni 1.1 Flash and Veo 3.1 all generate video, but they optimise for different production workflows." },
        { type: "paragraph", html: "Wan combines up to 30-second generation, native audio, documents, web pages, audiovisual references, editing and extension behind one preview model. Gemini Omni focuses on fast conversational generation and editing. Veo is Google's dedicated video-generation family with Standard, Fast and Lite variants." },
      ],
    },
    {
      id: "availability",
      title: "Availability and model status",
      blocks: [
        { type: "paragraph", html: "Alibaba's official Wan 3.0 API reference currently labels the model <strong>preview</strong>. Google made <code>gemini-omni-1.1-flash</code> <strong>generally available</strong> on August 27, 2026. Google's current Veo 3.1 Developer API model IDs still carry <code>-preview</code>." },
        { type: "note", html: "Lifecycle labels matter for production planning. A documented endpoint is not automatically GA." },
      ],
    },
    {
      id: "duration-resolution",
      title: "Duration, resolution and controls",
      blocks: [
        { type: "paragraph", html: "Wan supports up to 30 seconds in one generation at 480p, 720p or 1080p. Gemini Omni generates 3–10 second clips at 360p, 720p, 1080p or 4K, with Google explicitly stating that 1080p and 4K use upscaling." },
        { type: "paragraph", html: "Omni adds video extension and first/last-frame interpolation. Wan also supports editing, extension and first/last-frame control, with the added option to reference documents and public web pages. Veo's controls and supported resolutions vary by current variant." },
      ],
    },
    {
      id: "pricing",
      title: "Current API pricing",
      blocks: [
        { type: "paragraph", html: "Wan's Singapore promotional rates currently start at $0.05 per second for standard 480p, rising with resolution. Gemini Omni's paid API pricing is token-based but Google estimates about <strong>$0.10 per second for 720p output</strong>." },
        { type: "paragraph", html: "Google currently lists Veo 3.1 Standard with audio at $0.40 per second for 720p/1080p and $0.60 for 4K; Fast at $0.10/$0.12/$0.30; and Lite at $0.05 for 720p and $0.08 for 1080p, with no 4K Lite output." },
        { type: "note", html: "Provider, region, resolution, tier and promotions make headline prices non-equivalent. Recheck live billing pages before integration." },
      ],
    },
    {
      id: "which-to-choose",
      title: "Which should you choose?",
      blocks: [
        { type: "paragraph", html: "Choose Wan when 30-second single generations, native audio, broad multimodal references or document-to-video are central. Use the <a href=\"/blog/wan-3-0-api-guide\">Wan API guide</a> to validate the request constraints." },
        { type: "paragraph", html: "Choose Gemini Omni when conversational editing, extension, frame interpolation and quick draft-to-upscaled output fit the workflow. Evaluate Veo 3.1 when Google's dedicated video model family, current quality controls and tier choices matter most." },
        { type: "paragraph", html: "There is no universal winner without testing identical prompts, inputs, duration, resolution and scoring criteria on the kind of video you plan to ship." },
      ],
    },
  ],
  sources: [
    { label: "Alibaba Cloud — Wan 3.0 API reference", url: "https://www.alibabacloud.com/help/en/model-studio/wan3-video-generation-api-reference" },
    { label: "Alibaba Cloud — Wan 3.0 pricing", url: "https://www.alibabacloud.com/help/en/model-studio/model-pricing" },
    { label: "Google — Gemini API release notes", url: "https://ai.google.dev/gemini-api/docs/changelog" },
    { label: "Google — Gemini Omni 1.1 Flash model card", url: "https://ai.google.dev/gemini-api/docs/models/gemini-omni-flash" },
    { label: "Google — Gemini, Omni and Veo API pricing", url: "https://ai.google.dev/gemini-api/docs/pricing" },
  ],
  relatedPaths: ["/blog/alibaba-wan-3-0", "/blog/wan-3-0-api-guide"],
};

export const hy4WanArticles: BlogArticle[] = [hy4Main, hy4Local, hy4Comparison, wanMain, wanApi, wanComparison];
