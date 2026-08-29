import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-29";

const glm53: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "GLM-5.3",
  targetSearchIntent: "Broad overview of Z.ai's flagship GLM-5.3 now that its weights are downloadable, including licensing, benchmarks, deployment paths, scale and limitations",
  targetQuery: "GLM-5.3",
  slug: "glm-5-3",
  title: "GLM-5.3: Open Weights, License, Benchmarks & Local Deployment",
  metaTitle: "GLM-5.3: Open Weights, License, Benchmarks & How to Run It",
  metaDescription: "GLM-5.3 weights are downloadable. See the model's license, vendor-reported benchmarks, local deployment options, reasoning controls and practical limitations.",
  h1: "GLM-5.3 Is Now Open Weight: License, Benchmarks and Local Deployment",
  excerpt: "GLM-5.3 is Z.ai's flagship coding and agentic model with downloadable weights, a custom commercial license and official support for major serving frameworks.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a large open-weight AI model moving from a repository into multi-GPU server infrastructure beside a license document",
  sections: [
    { id: "what-changed", title: "What changed with GLM-5.3", blocks: [
      { type: "paragraph", html: "GLM-5.3 is Z.ai's flagship model for coding, agentic engineering and long-horizon tasks. Its official model card says it uses the same base model as GLM-5.2, with the gains coming from post-training." },
      { type: "paragraph", html: "The important new development is downloadable model weights. That makes self-hosting, independent evaluation, quantization and derivative work materially more relevant than when the model was primarily encountered through hosted access." },
    ]},
    { id: "license", title: "What the GLM-5.3 license allows", blocks: [
      { type: "paragraph", html: "The weights use the custom GLM-5.3 License rather than MIT. The license grants broad rights to use, copy, modify, distribute, sublicense, sell, run, deploy and fine-tune the software and model weights, subject to its conditions." },
      { type: "paragraph", html: "A special Model-as-a-Service condition applies when a licensee or its affiliates operates that kind of business and exceeds US$10 billion in aggregate revenue over any consecutive 12-month period: Z.ai requires a security review before commercial use. The license text itself is authoritative." },
    ]},
    { id: "deployment", title: "Can GLM-5.3 run locally?", blocks: [
      { type: "paragraph", html: "Yes, in the infrastructure sense. Z.ai documents local serving through SGLang, vLLM, Transformers, KTransformers, Unsloth and additional accelerator-specific stacks." },
      { type: "paragraph", html: "This is not a lightweight laptop model. Community model analyses place the published checkpoint at roughly 753B parameters, so practical deployment generally means substantial multi-GPU or accelerator infrastructure, or aggressive community quantization with its own quality tradeoffs." },
    ]},
    { id: "benchmarks", title: "Benchmarks and reasoning controls", blocks: [
      { type: "paragraph", html: "Z.ai reports 88.2 on Terminal Bench 2.1 and 28.3 on Terminal Bench 3.0 for GLM-5.3. These are model-developer results and should be treated as vendor-reported unless independently reproduced." },
      { type: "paragraph", html: "The official model card also documents a <code>reasoning_effort</code> control with <code>low</code>, <code>high</code> and <code>max</code> settings, defaulting to <code>max</code>. Serving configuration can materially affect cost and latency." },
    ]},
    { id: "flash", title: "GLM-5.3 vs GLM-5.3-Flash", blocks: [
      { type: "paragraph", html: "GLM-5.3 and GLM-5.3-Flash are separate models. Flash is positioned as a smaller, efficiency-oriented native-multimodal model, while GLM-5.3 is the much larger flagship covered here." },
      { type: "paragraph", html: "For the smaller model's architecture, access and pricing context, read the <a href=\"/blog/glm-5-3-flash\">GLM-5.3-Flash overview</a>." },
    ]},
    { id: "limitations", title: "What to keep in mind", blocks: [
      { type: "list", items: ["Benchmark claims remain vendor-reported unless independently reproduced.", "Community quantizations are third-party artifacts, not official Z.ai releases.", "Hardware needs vary with precision, context length, KV cache, runtime and parallelism.", "Hosted pricing and provider availability can change independently of weight availability."] },
      { type: "note", html: "Open weight does not mean 'easy to run locally.' GLM-5.3 is large enough that deployment planning is an infrastructure decision." },
    ]},
  ],
  sources: [
    { label: "Z.ai — GLM-5.3 model card", url: "https://huggingface.co/zai-org/GLM-5.3" },
    { label: "Z.ai — GLM-5.3 license", url: "https://huggingface.co/zai-org/GLM-5.3/blob/main/LICENSE" },
    { label: "Z.ai — GLM-5.3 BF16 model card", url: "https://huggingface.co/zai-org/GLM-5.3-BF16" },
  ],
  relatedPaths: ["/blog/glm-5-3-flash", "/blog/glm-5-3-flash-vs-glm-5-3"],
};

const midjourneyV82Edit: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Midjourney V8.2 Edit Model",
  targetSearchIntent: "Broad overview of Midjourney's first V8.2-native image-edit model, its testing status, editing capabilities, access methods and limitations",
  targetQuery: "Midjourney V8.2 Edit Model",
  slug: "midjourney-v8-2-edit-model",
  title: "Midjourney V8.2 Edit Model: Image Editing, Inpainting & How It Works",
  metaTitle: "Midjourney V8.2 Edit Model: Image Editing, Inpainting & How It Works",
  metaDescription: "Midjourney is testing its first V8.2 image-edit model with instruction editing, up to four image references, inpainting and outpainting. See what changed.",
  h1: "Midjourney V8.2 Edit Model: What It Can Do and How to Use It",
  excerpt: "Midjourney's first V8.2-native edit model adds instruction-driven editing, multi-image references, inpainting and outpainting in a broad public test.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing four image references feeding into a before-and-after generative edit with inpaint and outpaint boundaries",
  sections: [
    { id: "what-it-is", title: "What the V8.2 Edit Model is", blocks: [
      { type: "paragraph", html: "Midjourney began broad testing of its first V8.2 image-edit model on August 27, 2026. Midjourney explicitly describes the release as a test with fast-follow updates, not a finished stable rollout." },
      { type: "paragraph", html: "The model can edit existing images from natural-language instructions and can also generate with multiple image references instead of treating editing as only a legacy side workflow." },
    ]},
    { id: "capabilities", title: "Instruction editing and image references", blocks: [
      { type: "paragraph", html: "Midjourney says the model supports instruction-based editing and up to four image references at once. The company positions the multi-reference workflow as a replacement for omni-reference in this editing path." },
      { type: "paragraph", html: "It also supports personalization, moodboards and style references. Midjourney cautions that moodboards and srefs may benefit from extra prompt direction in the current test version." },
    ]},
    { id: "inpaint-outpaint", title: "Inpainting and outpainting", blocks: [
      { type: "paragraph", html: "Inpainting targets a selected region for change while attempting to preserve the surrounding composition. Outpainting expands the canvas and asks the model to generate plausible content beyond the original frame." },
      { type: "paragraph", html: "For creators and marketers, that can support campaign variants, product-image restyling, social aspect-ratio changes, wardrobe or environment changes and extra negative space for copy. Generative edits still need human review for logos, typography, faces and product geometry." },
    ]},
    { id: "access", title: "How to access the test", blocks: [
      { type: "paragraph", html: "Midjourney lists several access paths: attach images in the prompt bar, use Edit from the lightbox, upload through the Edit tab, or use <code>--edit</code> with an image URL in Discord." },
      { type: "paragraph", html: "The company says both its main and alpha web interfaces are being updated around the test, with the alpha interface expected to change rapidly while new interaction patterns are tried." },
    ]},
    { id: "editor-distinction", title: "How this differs from the older Editor", blocks: [
      { type: "paragraph", html: "Midjourney already had an Editor interface for repainting, reframing, pan, zoom and vary-region workflows. The August 27 announcement is specifically about the first V8.2-native image-edit model." },
      { type: "paragraph", html: "Do not assume every older Editor control has already migrated to the new model or behaves identically. Midjourney's own documentation should be rechecked while the test evolves." },
    ]},
    { id: "limitations", title: "Current limitations", blocks: [
      { type: "paragraph", html: "The biggest limitation is maturity: Midjourney says there will be edge cases and rapid interface/model updates. A successful edit may also change nearby style, composition or identity beyond the intended instruction." },
      { type: "note", html: "Midjourney did not announce separate edit-model pricing in the launch note. Normal subscription and plan rules should be checked before assuming that broad testing means unrestricted free usage." },
    ]},
  ],
  sources: [
    { label: "Midjourney — Edit Model for V8 announcement", url: "https://updates.midjourney.com/edit-model-for-v8/" },
    { label: "Midjourney Docs — Version", url: "https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version" },
    { label: "Midjourney Docs — Editor", url: "https://docs.midjourney.com/hc/en-us/articles/32764383466893-Editor" },
    { label: "Midjourney Docs — Comparing plans", url: "https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans" },
  ],
  relatedPaths: [],
};

export const glm53MidjourneyArticles: BlogArticle[] = [glm53, midjourneyV82Edit];
