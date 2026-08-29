import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-29";

const midjourneyV82HowTo: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Midjourney V8.2 Edit Model",
  targetSearchIntent: "Practical workflow for editing existing images with Midjourney V8.2 through web or Discord, including image references, inpainting, outpainting, personalization and early-test limitations",
  targetQuery: "how to use Midjourney V8.2 Edit Model",
  parentSlug: "midjourney-v8-2-edit-model",
  slug: "how-to-use-midjourney-v8-2-edit-model",
  title: "How to Use the Midjourney V8.2 Edit Model",
  metaTitle: "How to Use Midjourney V8.2 Edit Model: Web, Discord & Inpainting",
  metaDescription: "Learn how to use Midjourney's V8.2 Edit Model on web or Discord for instruction editing, multiple image references, inpainting and outpainting.",
  h1: "How to Use the Midjourney V8.2 Edit Model",
  excerpt: "A practical guide to Midjourney's new V8.2-native edit workflow, from image attachment and instruction editing to multi-reference generation, inpainting and outpainting.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a four-step Midjourney V8.2 image editing workflow from source image to instruction edit, inpainting and canvas expansion",
  sections: [
    {
      id: "before-you-start",
      title: "What the V8.2 edit test actually is",
      blocks: [
        { type: "paragraph", html: "Midjourney began letting everyone test its first V8.2 image-edit model on August 27, 2026. Midjourney explicitly calls it a test and says the model and interfaces will receive fast-follow updates, so exact labels and paths can change." },
        { type: "paragraph", html: "The new model is distinct from the older Editor workflow. Midjourney's current Editor documentation still notes that some Editor functionality uses V6.1 even when the source image was created with V8.2, so check the current UI before assuming every Edit screen is already using the V8.2-native model." },
      ],
    },
    {
      id: "start",
      title: "Four ways to start an edit",
      blocks: [
        { type: "list", items: ["Drag or attach an image in the prompt bar.", "Open an image in the lightbox and choose Edit.", "Open the Edit tab and upload an image.", "In Discord, use <code>--edit</code> with an image URL."] },
        { type: "paragraph", html: "Use the web path when you want visual image selection and editing controls. Discord is useful when your workflow already depends on prompt commands and hosted image URLs." },
      ],
    },
    {
      id: "prompting",
      title: "Describe the change instead of rewriting the whole image",
      blocks: [
        { type: "paragraph", html: "When the source already has the right subject and composition, focus the prompt on what should change. A useful structure is: what to preserve + requested change + placement or style constraint." },
        { type: "note", html: "Words such as “keep” and “preserve” are prompt guidance, not a deterministic lock. Midjourney has not published a guaranteed preservation syntax for the V8.2 edit test." },
      ],
    },
    {
      id: "references",
      title: "Use up to four image references",
      blocks: [
        { type: "paragraph", html: "Midjourney says the V8.2 edit model can generate with up to four image references at once. That can support combinations such as a base portrait plus wardrobe reference, a product plus environment reference, or a subject plus separate style guidance." },
        { type: "paragraph", html: "Start with the minimum number of references needed. Each additional image gives the model more visual information to reconcile, which can also introduce conflicts or drift." },
      ],
    },
    {
      id: "inpainting",
      title: "Use inpainting for local changes",
      blocks: [
        { type: "paragraph", html: "Inpainting is the better fit when only one region should change. Midjourney's Editor exposes selection and erase tools for localized regeneration, while the V8.2 announcement explicitly includes changing specific areas as a supported capability." },
        { type: "paragraph", html: "After generation, inspect the edges around the edited area. Generative editing can change nearby lighting, texture, geometry or identity even when the prompt targets a small region." },
      ],
    },
    {
      id: "outpainting",
      title: "Use outpainting to change the canvas or aspect ratio",
      blocks: [
        { type: "paragraph", html: "Outpainting expands the canvas and asks the model to generate content outside the original boundaries. That is useful when a source image needs to become a wider website hero, a horizontal ad or a vertical social asset." },
        { type: "paragraph", html: "Give the prompt guidance about what should occupy the new space. Otherwise the model must infer the extension entirely from the source composition." },
      ],
    },
    {
      id: "style-controls",
      title: "Personalization, moodboards and style references",
      blocks: [
        { type: "paragraph", html: "Midjourney says the test supports personalization, moodboards and style references. Its launch note cautions that moodboards and style references may work better with extra prompt direction in this version." },
        { type: "paragraph", html: "For repeatable campaign work, describe the intended visual treatment as well as attaching the style control instead of assuming a style reference alone will preserve every detail." },
      ],
    },
    {
      id: "review",
      title: "Review preservation-sensitive details",
      blocks: [
        { type: "list", items: ["Faces and identity", "Hands and fingers", "Logos and product labels", "Text and typography", "Jewelry and small accessories", "Repeated patterns", "Packaging and product geometry"] },
        { type: "paragraph", html: "Generative editing is not deterministic layer editing. If a logo, regulated label or exact product detail must remain unchanged, preserve the original asset and composite exact elements back in with a conventional editor when necessary." },
      ],
    },
    {
      id: "workflow",
      title: "A practical creator workflow",
      blocks: [
        { type: "paragraph", html: "Start from the approved base image, request one meaningful visual change, add another reference only when needed, repair local mistakes with inpainting and use outpainting last when the final deliverable needs a different frame." },
        { type: "note", html: "Save the original source image and keep a record of prompts and references used for approved variations. The V8.2 edit model remains a test and behavior can change across updates." },
      ],
    },
  ],
  sources: [
    { label: "Midjourney — Edit Model for V8", url: "https://updates.midjourney.com/edit-model-for-v8/" },
    { label: "Midjourney Docs — Editor", url: "https://docs.midjourney.com/hc/en-us/articles/32764383466893-Editor" },
    { label: "Midjourney Docs — Version", url: "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version" },
    { label: "Midjourney Docs — Web vs Discord", url: "https://docs.midjourney.com/hc/en-us/articles/33329300781837-Web-vs-Discord" },
  ],
  relatedPaths: ["/blog/midjourney-v8-2-edit-model"],
};

const glm53Local: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "GLM-5.3",
  targetSearchIntent: "Practical local/self-hosted deployment guide for GLM-5.3 using official serving frameworks, with cautious hardware and quantization guidance for a 753B-parameter model",
  targetQuery: "how to run GLM-5.3 locally",
  parentSlug: "glm-5-3",
  slug: "run-glm-5-3-locally",
  title: "How to Run GLM-5.3 Locally: vLLM, SGLang, Quantization & Hardware",
  metaTitle: "How to Run GLM-5.3 Locally: vLLM, SGLang & Hardware Guide",
  metaDescription: "Run GLM-5.3 locally with the official vLLM, SGLang or Transformers paths, and understand the real hardware and quantization tradeoffs of a 753B model.",
  h1: "How to Run GLM-5.3 Locally",
  excerpt: "GLM-5.3 is officially self-hostable, but its 753B scale makes local deployment an infrastructure problem rather than a normal single-GPU setup.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet technical editorial graphic showing a very large GLM-5.3 model distributed across multiple GPU server nodes with vLLM and SGLang serving paths",
  sections: [
    {
      id: "what-local-means",
      title: "Decide what “local” means first",
      blocks: [
        { type: "paragraph", html: "Z.ai's official Hugging Face organization now lists GLM-5.3 at 753B parameters and provides downloadable model files. That makes self-hosting possible, but not lightweight." },
        { type: "list", items: ["Production self-hosting on multi-GPU or multi-accelerator servers", "Research deployment on powerful workstations or distributed lab machines", "Heavily quantized community experimentation on smaller hardware"] },
      ],
    },
    {
      id: "official-paths",
      title: "Official serving paths",
      blocks: [
        { type: "paragraph", html: "The official model repository documents direct use through Transformers plus serving through vLLM and SGLang. These are the safest starting points because they are listed alongside the current model release." },
        { type: "paragraph", html: "Additional community and specialized stacks can be useful, but do not treat third-party conversion or benchmark claims as Z.ai results unless Z.ai explicitly publishes them." },
      ],
    },
    {
      id: "vllm",
      title: "Serve GLM-5.3 with vLLM",
      blocks: [
        { type: "paragraph", html: "The current Hugging Face integration shows the basic path as <code>pip install vllm</code> followed by <code>vllm serve \"zai-org/GLM-5.3\"</code>. The server exposes an OpenAI-compatible endpoint." },
        { type: "paragraph", html: "The one-line command demonstrates software support, not a single-GPU hardware promise. A 753B checkpoint requires distributed placement, sufficient aggregate memory and practical interconnect bandwidth at native or near-native precision." },
      ],
    },
    {
      id: "sglang",
      title: "Serve GLM-5.3 with SGLang",
      blocks: [
        { type: "paragraph", html: "Z.ai's model repository also documents SGLang with <code>python3 -m sglang.launch_server --model-path \"zai-org/GLM-5.3\" --host 0.0.0.0 --port 30000</code>." },
        { type: "paragraph", html: "SGLang is relevant for higher-throughput or distributed serving where you want more explicit control over runtime behavior and placement." },
      ],
    },
    {
      id: "transformers",
      title: "Use Transformers for direct experimentation",
      blocks: [
        { type: "paragraph", html: "The repository also exposes the standard <code>AutoTokenizer</code> and <code>AutoModelForCausalLM</code> workflow with automatic device placement." },
        { type: "note", html: "Automatic device placement does not remove the underlying memory requirement. It only helps distribute the model across the devices and memory available to the runtime." },
      ],
    },
    {
      id: "memory",
      title: "Hardware planning without inventing a fake minimum",
      blocks: [
        { type: "paragraph", html: "There is no single trustworthy universal minimum-VRAM number for GLM-5.3. Real memory depends on the exact precision or quantization, runtime, expert/tensor placement, KV cache, context length, batch size and concurrency." },
        { type: "paragraph", html: "Use the actual size of the exact checkpoint or quantization you plan to run as the first capacity check, then reserve additional headroom for runtime state and KV cache." },
      ],
    },
    {
      id: "quantization",
      title: "Community quantization is a separate tradeoff",
      blocks: [
        { type: "paragraph", html: "Community quantized variants can materially reduce weight storage and make experimentation possible on smaller hardware. Their quality, compatibility and performance belong to the maintainers of those artifacts, not automatically to Z.ai." },
        { type: "list", items: ["Record the quantizer and upstream revision.", "Check the actual file size.", "Document the runtime version.", "Test reasoning and tool behavior on your workload.", "Keep community benchmark claims clearly attributed."] },
      ],
    },
    {
      id: "context",
      title: "Long context changes the memory equation",
      blocks: [
        { type: "paragraph", html: "Z.ai's launch material reports evaluations using up to a 1M-token context window on some tasks. Very long contexts can sharply increase KV-cache requirements even after the weights already fit." },
        { type: "paragraph", html: "Start with the smallest context and batch size that satisfy the workload. Increase them only after measuring actual memory and latency." },
      ],
    },
    {
      id: "license",
      title: "Check the license before commercial serving",
      blocks: [
        { type: "paragraph", html: "GLM-5.3 uses a custom license. It grants broad rights, but includes a Model-as-a-Service security-review condition for licensees or affiliates whose aggregate revenue exceeds US$10 billion over a consecutive 12-month period." },
        { type: "paragraph", html: "For a plain-English breakdown of that condition, see the <a href=\"/blog/glm-5-3-license\">GLM-5.3 license guide</a>. The official license text remains authoritative." },
      ],
    },
  ],
  sources: [
    { label: "Z.ai — GLM-5.3 model repository", url: "https://huggingface.co/zai-org/GLM-5.3" },
    { label: "Z.ai — GLM-5.3 license", url: "https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE" },
    { label: "Z.ai — GLM-5.3 launch", url: "https://z.ai/blog/glm-5.3" },
    { label: "vLLM project", url: "https://github.com/vllm-project/vllm" },
    { label: "SGLang project", url: "https://github.com/sgl-project/sglang" },
  ],
  relatedPaths: ["/blog/glm-5-3", "/blog/glm-5-3-license", "/blog/glm-5-3-flash"],
};

const glm53License: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "GLM-5.3",
  targetSearchIntent: "Understand what the custom GLM-5.3 License permits, how commercial use and derivative works are treated, and when the Model-as-a-Service security-review condition applies",
  targetQuery: "GLM-5.3 license",
  parentSlug: "glm-5-3",
  slug: "glm-5-3-license",
  title: "GLM-5.3 License Explained: Commercial Use, Model-as-a-Service & the $10B Clause",
  metaTitle: "GLM-5.3 License Explained: Commercial Use & the $10B Clause",
  metaDescription: "The GLM-5.3 License allows broad use and modification but adds a special security-review rule for very large Model-as-a-Service businesses. Here's what it means.",
  h1: "GLM-5.3 License Explained",
  excerpt: "GLM-5.3's custom license is broadly permissive, with an unusual security-review condition aimed at very large Model-as-a-Service businesses.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing open model weights beside a license document highlighting Model as a Service and a 10 billion dollar threshold",
  sections: [
    {
      id: "plain-english",
      title: "The short version",
      blocks: [
        { type: "paragraph", html: "GLM-5.3 is open weight, but it is not released under the MIT license used by GLM-5.3-Flash. Z.ai uses a custom GLM-5.3 License for the flagship weights." },
        { type: "note", html: "This is a factual plain-English summary for developers and product teams, not legal advice. The license file in Z.ai's official repository is authoritative." },
      ],
    },
    {
      id: "permissions",
      title: "What the license permits",
      blocks: [
        { type: "paragraph", html: "The license grants rights to use, copy, modify, merge, publish, distribute, sublicense and sell copies of the software, and explicitly includes running, deploying, fine-tuning and creating derivative works." },
        { type: "paragraph", html: "Its definition of the software includes model weights, parameters, configuration files, inference and training code, and associated documentation." },
      ],
    },
    {
      id: "commercial-use",
      title: "Can you use GLM-5.3 commercially?",
      blocks: [
        { type: "paragraph", html: "Yes. The license grants commercial-use rights. The unusual condition is not a blanket restriction on commercial use; it applies to a narrower category of very large Model-as-a-Service businesses." },
        { type: "paragraph", html: "Most startups, agencies and ordinary end-user applications are not blocked merely because they make money with a product that uses GLM-5.3." },
      ],
    },
    {
      id: "maas-definition",
      title: "What counts as Model as a Service?",
      blocks: [
        { type: "paragraph", html: "The license defines Model as a Service as giving a third party access to inference or fine-tuning in a way that gives that party meaningful control over inputs, parameters or training data." },
        { type: "paragraph", html: "It explicitly excludes end-user products where model capabilities are solely embedded in specific features or harnesses, and also excludes merely relaying requests to models hosted by others." },
      ],
    },
    {
      id: "threshold",
      title: "The US$10 billion condition",
      blocks: [
        { type: "paragraph", html: "If the licensee or any affiliate operates a Model-as-a-Service business and their aggregate revenue exceeds US$10 billion over any consecutive 12-month period, Z.ai requires the business to pass its security review before using GLM-5.3 or derivative works for commercial purposes." },
        { type: "paragraph", html: "Both conditions matter: the business must fall within the license's Model-as-a-Service definition and cross the revenue threshold. The text refers to aggregate revenue of the licensee and affiliates, not only revenue generated by GLM-5.3." },
      ],
    },
    {
      id: "security-review",
      title: "What does the security review require?",
      blocks: [
        { type: "paragraph", html: "The license says the scope and method of the security review are to be reasonably determined by Z.ai. The license itself does not publish a checklist of audits, certifications, fees or geographic conditions." },
        { type: "note", html: "Do not infer additional security-review requirements unless Z.ai publishes them separately." },
      ],
    },
    {
      id: "fine-tuning",
      title: "Fine-tuning, derivatives and redistribution",
      blocks: [
        { type: "paragraph", html: "Fine-tuning and derivative works are explicitly permitted subject to the license conditions. If you distribute copies or substantial portions, the copyright and permission notice must be included." },
        { type: "paragraph", html: "The software is provided as-is without warranty, and use must comply with applicable laws and regulations." },
      ],
    },
    {
      id: "not-mit",
      title: "Do not confuse GLM-5.3 with GLM-5.3-Flash licensing",
      blocks: [
        { type: "paragraph", html: "The flagship GLM-5.3 repository labels its license <code>glm-5.3</code>. GLM-5.3-Flash has a separate MIT license. Models in the same family therefore should not be assumed to carry identical terms." },
        { type: "paragraph", html: "For deployment steps and hardware tradeoffs, see the <a href=\"/blog/run-glm-5-3-locally\">GLM-5.3 local-running guide</a>." },
      ],
    },
    {
      id: "checklist",
      title: "What teams should check before deployment",
      blocks: [
        { type: "list", ordered: true, items: ["Read the current official license file.", "Decide whether your product embeds the model as a feature or exposes model-level control.", "If you operate Model as a Service, evaluate the stated aggregate-revenue threshold.", "Preserve required copyright and permission notices when distributing copies or derivatives.", "Recheck the repository before a major commercial launch in case the license changes."] },
        { type: "paragraph", html: "For most developers the license is not a blanket commercial-use barrier. For hyperscalers or complex enterprise structures, the exact definitions and threshold deserve formal legal review." },
      ],
    },
  ],
  sources: [
    { label: "Z.ai — GLM-5.3 license", url: "https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE" },
    { label: "Z.ai — GLM-5.3 model repository", url: "https://huggingface.co/zai-org/GLM-5.3" },
    { label: "Z.ai — GLM-5.3 launch", url: "https://z.ai/blog/glm-5.3" },
    { label: "Z.ai — GLM-5.3-Flash MIT license", url: "https://huggingface.co/zai-org/GLM-5.3-Flash/blob/main/LICENSE" },
  ],
  relatedPaths: ["/blog/glm-5-3", "/blog/run-glm-5-3-locally"],
};

const granite42Main: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "IBM Granite 4.2",
  targetSearchIntent: "Broad overview of IBM Granite 4.2, its model sizes, reasoning modes, context limits, tool calling, license, weights and deployment options",
  targetQuery: "IBM Granite 4.2",
  slug: "ibm-granite-4-2",
  title: "IBM Granite 4.2: 3B, 8B & 30B Reasoning Models Explained",
  metaTitle: "IBM Granite 4.2: 3B, 8B & 30B Reasoning Models Explained",
  metaDescription: "IBM Granite 4.2 adds open 3B, 8B and 30B reasoning models with thinking modes, tool calling, long context and Apache 2.0 weights. Here's what changed.",
  h1: "IBM Granite 4.2 Adds Open 3B, 8B and 30B Reasoning Models",
  excerpt: "Granite 4.2 is IBM's new open dense reasoning family, combining three model sizes with flexible thinking modes, tool calling and Apache 2.0 weights.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing three Granite 4.2 model blocks labeled 3B, 8B and 30B feeding into reasoning and tool-use paths",
  sections: [
    {
      id: "what-it-is",
      title: "What IBM released",
      blocks: [
        { type: "paragraph", html: "IBM released Granite 4.2 on August 25, 2026 as a family of dense reasoning language models in 3B, 8B and 30B sizes. IBM positions the family for agentic and enterprise workflows where reasoning, tool use, coding and deployability matter." },
        { type: "paragraph", html: "IBM's current research post, Hugging Face repositories and GitHub organization are the strongest live references. IBM's older Granite documentation page now warns that it is no longer being updated, so use it as supporting context rather than the sole source for future changes." },
      ],
    },
    {
      id: "sizes",
      title: "3B, 8B and 30B model sizes",
      blocks: [
        { type: "list", items: ["Granite 4.2 3B: compact option for constrained and edge-oriented deployments.", "Granite 4.2 8B: balanced general-purpose reasoning model.", "Granite 4.2 30B: flagship model for deeper reasoning and specialized tasks."] },
        { type: "paragraph", html: "The multiple sizes let teams reserve larger models for harder tasks while using smaller variants where latency, throughput or memory matters more." },
      ],
    },
    {
      id: "thinking",
      title: "Full thinking, low-effort and non-thinking modes",
      blocks: [
        { type: "paragraph", html: "Granite 4.2 supports native reasoning and exposes flexible thinking behavior. IBM documents full thinking, non-thinking and low-effort modes so applications can trade reasoning depth against latency." },
        { type: "paragraph", html: "That flexibility matters in production because simple requests do not always justify the same token or latency budget as complex planning and coding tasks." },
      ],
    },
    {
      id: "tools",
      title: "Tool calling and agentic training",
      blocks: [
        { type: "paragraph", html: "IBM says all three models support reasoning-augmented tool calling. The 8B and 30B variants also received additional agentic reinforcement-learning training focused on software engineering, terminal interaction and search-driven workflows." },
        { type: "paragraph", html: "IBM documents vLLM serving through an OpenAI-compatible endpoint and model-specific reasoning/tool parsing. That makes Granite 4.2 relevant to teams building coding agents, RAG systems and internal automation." },
      ],
    },
    {
      id: "context",
      title: "Context window",
      blocks: [
        { type: "paragraph", html: "IBM's family documentation states that all Granite 4.2 models natively support a 128K context window, with a long-context extension to 512K on the 30B model." },
        { type: "note", html: "Advertised context is not the same as practical local context. KV-cache memory grows with sequence length, so local deployments may use much smaller contexts depending on hardware and concurrency." },
      ],
    },
    {
      id: "license",
      title: "Open weights and Apache 2.0",
      blocks: [
        { type: "paragraph", html: "IBM publishes Granite 4.2 checkpoints through its Hugging Face organization and releases the language models under Apache 2.0. IBM describes the family as open and suitable for research and commercial deployment subject to the license." },
        { type: "paragraph", html: "IBM also publishes quantized variants, including official GGUF repositories, which makes local and desktop experimentation more practical than releases that depend only on full-precision server checkpoints." },
      ],
    },
    {
      id: "local",
      title: "Can Granite 4.2 run locally?",
      blocks: [
        { type: "paragraph", html: "Yes. IBM documents Transformers and vLLM usage, the Granite project describes additional serving support, and IBM-maintained GGUF repositories provide llama.cpp-compatible quantized paths." },
        { type: "paragraph", html: "For model selection, runtimes and realistic memory tradeoffs, read the <a href=\"/blog/run-ibm-granite-4-2-locally\">Granite 4.2 local-running guide</a>." },
      ],
    },
    {
      id: "benchmarks",
      title: "How to read IBM's benchmarks",
      blocks: [
        { type: "paragraph", html: "IBM reports Granite 4.2 results across reasoning, coding, instruction following, tool calling and agentic benchmarks including AIME25, LiveCodeBench, BFCL and software-engineering evaluations." },
        { type: "note", html: "Those results are useful for understanding IBM's positioning but remain vendor-reported. They should not be presented as an independent universal ranking across every workload." },
      ],
    },
    {
      id: "fit",
      title: "Who should consider Granite 4.2?",
      blocks: [
        { type: "paragraph", html: "The strongest early fit is for developers who want downloadable reasoning models for coding tools, tool-calling agents, RAG systems and enterprise workflows where deployability and Apache 2.0 licensing matter." },
        { type: "paragraph", html: "The 3B model is attractive for constrained deployments, 8B is the most practical general-purpose starting point, and 30B is the higher-capability option when the infrastructure budget supports it." },
      ],
    },
  ],
  sources: [
    { label: "IBM Research — Granite 4.2 release", url: "https://research.ibm.com/blog/introducing-granite-4-2" },
    { label: "IBM Granite — Granite 4.2 documentation", url: "https://www.ibm.com/granite/docs/models/granite4-2" },
    { label: "IBM Granite — Granite 4.2 language models GitHub", url: "https://github.com/ibm-granite/granite-4.2-language-models" },
    { label: "IBM Granite — Granite 4.2 30B", url: "https://huggingface.co/ibm-granite/granite-4.2-30b" },
    { label: "IBM Granite — Granite 4.2 8B", url: "https://huggingface.co/ibm-granite/granite-4.2-8b" },
  ],
  relatedPaths: ["/blog/run-ibm-granite-4-2-locally"],
};

const granite42Local: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "IBM Granite 4.2",
  targetSearchIntent: "Install and serve IBM Granite 4.2 locally using official checkpoints or GGUF files, choose an appropriate model size/runtime, and understand realistic memory and context tradeoffs",
  targetQuery: "how to run Granite 4.2 locally",
  parentSlug: "ibm-granite-4-2",
  slug: "run-ibm-granite-4-2-locally",
  title: "How to Run IBM Granite 4.2 Locally: GGUF, vLLM, SGLang & Hardware",
  metaTitle: "Run Granite 4.2 Locally: GGUF, vLLM, SGLang & Hardware",
  metaDescription: "Learn how to run IBM Granite 4.2 locally with official checkpoints or GGUF, including vLLM, SGLang, llama.cpp, model-size choices and memory tradeoffs.",
  h1: "How to Run IBM Granite 4.2 Locally with GGUF, vLLM or SGLang",
  excerpt: "Choose the right Granite 4.2 size, checkpoint format and runtime, then size memory around the exact model, quantization and context you actually plan to use.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet technical editorial graphic connecting Granite 4.2 model blocks to Transformers, vLLM, SGLang and llama.cpp GGUF serving paths with a memory gauge",
  sections: [
    {
      id: "choose-size",
      title: "Choose the model size first",
      blocks: [
        { type: "paragraph", html: "Granite 4.2 is available in 3B, 8B and 30B variants. For most local users, 3B and 8B are the practical starting points; 30B is substantially heavier and better suited to higher-memory systems or quantized deployment." },
        { type: "paragraph", html: "The 8B model is a strong default because IBM provides detailed serving examples and an IBM-maintained GGUF repository with multiple quantization levels." },
      ],
    },
    {
      id: "official-vs-community",
      title: "Official checkpoints and GGUFs vs community conversions",
      blocks: [
        { type: "paragraph", html: "IBM publishes standard Hugging Face checkpoints for Transformers and serving frameworks, and its Hugging Face organization currently exposes IBM-maintained GGUF repositories for Granite 4.2 sizes including 8B." },
        { type: "paragraph", html: "Community quantizations can also be useful, but record the maintainer, upstream revision and quantization method instead of treating them as IBM-validated artifacts." },
      ],
    },
    {
      id: "transformers",
      title: "Run Granite 4.2 with Transformers",
      blocks: [
        { type: "paragraph", html: "IBM documents the normal <code>AutoTokenizer</code> and <code>AutoModelForCausalLM</code> workflow. For GPU use, the examples load BF16 weights to CUDA and use the Granite chat template to select thinking behavior." },
        { type: "paragraph", html: "Start with 3B or 8B when memory is constrained. Move to 30B only after measuring whether the extra capability justifies the larger footprint." },
      ],
    },
    {
      id: "vllm",
      title: "Serve Granite 4.2 with vLLM",
      blocks: [
        { type: "paragraph", html: "IBM documents Granite 4.2 deployment with vLLM and an OpenAI-compatible API. Its guidance includes Granite-specific reasoning parsing and automatic tool choice for agentic workloads." },
        { type: "paragraph", html: "Follow the current model card for parser flags rather than copying a generic older recipe, because reasoning and tool-call parsing are model-specific parts of the serving stack." },
      ],
    },
    {
      id: "sglang",
      title: "Use SGLang for higher-throughput serving",
      blocks: [
        { type: "paragraph", html: "IBM's Granite material also points to SGLang support. It is most relevant when the local deployment is a server or agent backend rather than a simple desktop chat." },
        { type: "paragraph", html: "Runtime flags can change as model support evolves, so pair the current Granite model documentation with the SGLang release you actually install." },
      ],
    },
    {
      id: "gguf",
      title: "Use an official GGUF with llama.cpp",
      blocks: [
        { type: "paragraph", html: "IBM's Granite 4.2 8B GGUF repository currently exposes multiple quantizations and Hugging Face's llama.cpp integration shows commands such as <code>llama serve -hf ibm-granite/granite-4.2-8b-GGUF:Q4_K_M</code>." },
        { type: "paragraph", html: "The repository lists file sizes from small low-bit quantizations through BF16. Choose the exact artifact based on the quality/memory tradeoff your workload can tolerate." },
      ],
    },
    {
      id: "memory",
      title: "Estimate RAM and VRAM carefully",
      blocks: [
        { type: "paragraph", html: "There is no single official universal hardware requirement. Weight storage is only a first approximation: BF16 is roughly two bytes per parameter before runtime overhead, while lower-bit quantization reduces weight storage but adds its own quality and implementation tradeoffs." },
        { type: "list", items: ["Exact model and quantization", "Runtime and GPU architecture", "KV cache", "Context length", "Batch size and concurrency", "CPU/GPU offload", "Reasoning and tool-output length"] },
      ],
    },
    {
      id: "context",
      title: "Context length can dominate local memory",
      blocks: [
        { type: "paragraph", html: "IBM states 128K native context across the Granite 4.2 family and a 512K long-context extension on the 30B model. Trying to use the maximum context locally can require much more memory than a short chat because KV cache grows with sequence length." },
        { type: "paragraph", html: "Start with the smallest useful context, test ordinary generation first, then increase context and concurrency only after measuring the actual deployment." },
      ],
    },
    {
      id: "sequence",
      title: "A practical setup sequence",
      blocks: [
        { type: "list", ordered: true, items: ["Start with Granite 4.2 8B unless hardware clearly favors 3B or 30B.", "Use the official checkpoint for Transformers, vLLM or SGLang.", "Use an IBM-maintained GGUF for llama.cpp-style inference when it fits the workload.", "Begin with a modest context length.", "Verify normal generation before enabling tool calls.", "Measure memory and latency on your real task before scaling model size, context or concurrency."] },
        { type: "paragraph", html: "For the family overview, model positioning and licensing context, read the <a href=\"/blog/ibm-granite-4-2\">IBM Granite 4.2 overview</a>." },
      ],
    },
  ],
  sources: [
    { label: "IBM Granite — Granite 4.2 documentation", url: "https://www.ibm.com/granite/docs/models/granite4-2" },
    { label: "IBM Granite — Granite 4.2 8B", url: "https://huggingface.co/ibm-granite/granite-4.2-8b" },
    { label: "IBM Granite — Granite 4.2 8B GGUF", url: "https://huggingface.co/ibm-granite/granite-4.2-8b-GGUF" },
    { label: "IBM Granite — Granite 4.2 30B", url: "https://huggingface.co/ibm-granite/granite-4.2-30b" },
    { label: "IBM Granite — Granite 4.2 language models GitHub", url: "https://github.com/ibm-granite/granite-4.2-language-models" },
  ],
  relatedPaths: ["/blog/ibm-granite-4-2"],
};

export const approvedArticles20260829: BlogArticle[] = [
  midjourneyV82HowTo,
  glm53Local,
  glm53License,
  granite42Main,
  granite42Local,
];
