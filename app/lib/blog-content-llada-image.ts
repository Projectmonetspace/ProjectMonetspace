import type { BlogArticle } from "./blog-types.ts";

const lladaImageSources = [
  { label: "inclusionAI — LLaDA-Image GitHub repository", url: "https://github.com/inclusionAI/LLaDA-Image" },
  { label: "inclusionAI — LLaDA-Image model card", url: "https://huggingface.co/inclusionAI/LLaDA-Image" },
  { label: "inclusionAI — LLaDA-Image-Turbo model card", url: "https://huggingface.co/inclusionAI/LLaDA-Image-Turbo" },
  { label: "LLaDA-Image paper", url: "https://arxiv.org/abs/2609.03796" },
];

export const lladaImageArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "LLaDA-Image",
    targetSearchIntent: "Understand what LLaDA-Image is, what was released, its capabilities, model variants, availability, setup path, benchmarks, limitations and current open-source status.",
    targetQuery: "LLaDA-Image",
    slug: "llada-image",
    title: "LLaDA-Image: Open Image Generator, Editing, Models & Setup",
    metaTitle: "LLaDA-Image: Open Image Generator, Editing, Models & Setup",
    metaDescription: "LLaDA-Image is inclusionAI’s new unified image generation and editing model family. See Base vs Turbo, checkpoints, setup, modes, benchmarks and current limitations.",
    h1: "LLaDA-Image: Open Image Generation and Editing Model Explained",
    excerpt: "LLaDA-Image is inclusionAI’s newly released 6B-parameter image generation and editing family, with a 50-step Base model, a distilled 4-step Turbo model, BF16/FP8 checkpoints and Diffusers-based inference code.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    ogAlt: "LLaDA-Image Base and Turbo image generation and editing pipeline",
    sections: [
      { id: "release", title: "What inclusionAI released", blocks: [
        { type: "paragraph", html: "On September 4, 2026, inclusionAI released runnable LLaDA-Image Base and LLaDA-Image-Turbo checkpoints together with Diffusers-based inference code. The official model zoo includes BF16 and FP8 checkpoints for both variants." },
        { type: "paragraph", html: "The release is best described as open weights plus inference code today. The project repository still marks training code as <strong>coming soon</strong>, so the live artifact release is not yet the same thing as a complete training-code release even though the paper publishes detailed training recipes." },
      ]},
      { id: "capabilities", title: "What LLaDA-Image can do", blocks: [
        { type: "paragraph", html: "The official repository says both Base and Turbo support text-to-image generation, VQ-conditioned generation, instruction-guided reference-image editing and Chinese-English text rendering. A single checkpoint family handles both generation and editing rather than requiring a separate editing model." },
        { type: "paragraph", html: "The paper and repository describe the family around a roughly 6B-parameter diffusion transformer with a frozen vision-language understanding module based on the LLaDA2.0-Mini backbone. For most users, the practical distinction is simpler: Base targets quality while Turbo targets low-step inference." },
      ]},
      { id: "base-vs-turbo", title: "LLaDA-Image Base vs Turbo", blocks: [
        { type: "paragraph", html: "The Base checkpoint is the quality-focused option and the official quick start recommends 50 sampling steps with guidance scale 5.0. LLaDA-Image-Turbo is a distilled variant using Twin-DMD and the official quick start recommends 4 steps with guidance scale 1.0." },
        { type: "note", html: "Those values are official starting configurations, not universal best settings. Resolution, prompt structure, editing workload and hardware can change the quality-speed trade-off." },
      ]},
      { id: "setup", title: "Setup, software and hardware boundaries", blocks: [
        { type: "paragraph", html: "The repository says its implementation has been used with Python 3.11, PyTorch 2.8, Transformers 4.57.6 and Diffusers 0.39.0. The documented path clones the repository, installs its requirements and runs the custom LLaDAImagePipeline on CUDA." },
        { type: "paragraph", html: "Text and VQ-conditioned generation dimensions must be divisible by 16, while editing dimensions must be divisible by 32. inclusionAI does not currently publish one universal minimum-VRAM figure that applies across Base, Turbo, BF16, FP8, resolution and generation mode, so fixed GPU-memory requirements should be treated as workload-specific measurements unless the project documents them directly." },
      ]},
      { id: "benchmarks", title: "Benchmarks and current limitations", blocks: [
        { type: "paragraph", html: "inclusionAI reports overall Qwen-Image-Bench scores of 53.53 on the English track and 53.38 on the Chinese track and describes them as state of the art among open-source models on that benchmark. These are author-reported launch results, not independent validation or proof of universal superiority." },
        { type: "list", items: ["Training code is still marked coming soon in the checked repository.", "No universal official VRAM minimum is published.", "Benchmark results are project-authored.", "A sufficiently clear commercial-use license was not exposed on the checked official release surfaces, so commercial deployment should wait for verified license terms."] },
      ]},
      { id: "who-should-care", title: "Who should care about LLaDA-Image", blocks: [
        { type: "paragraph", html: "Creators and developers now have a directly runnable generation-and-editing family with fast Turbo inference, Base quality mode and lower-precision checkpoint options. Agencies may find Turbo useful for concept iteration, but production use should be gated by license verification, measured hardware economics and workflow-specific quality testing." },
        { type: "paragraph", html: "For the practical install path, continue with the local-running guide covering Base, Turbo, BF16/FP8 choices, generation modes and editing without turning undocumented hardware estimates into official requirements." },
      ]},
    ],
    sources: lladaImageSources,
    relatedPaths: ["/blog/how-to-run-llada-image-locally"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "LLaDA-Image",
    targetSearchIntent: "Install LLaDA-Image locally and run official Base/Turbo generation and image-editing inference using the released checkpoints and code.",
    targetQuery: "how to run LLaDA-Image locally",
    parentSlug: "llada-image",
    slug: "how-to-run-llada-image-locally",
    title: "How to Run LLaDA-Image Locally: Install, Base, Turbo & Editing",
    metaTitle: "How to Run LLaDA-Image Locally: Base, Turbo & Editing",
    metaDescription: "Install and run LLaDA-Image locally with the official Base or Turbo checkpoints. Covers setup, BF16/FP8 choices, generation, editing and hardware caveats.",
    h1: "How to Run LLaDA-Image Locally",
    excerpt: "A practical setup guide for running LLaDA-Image Base or Turbo locally with the released Diffusers-based pipeline, including generation modes, editing, precision choices and hardware caveats.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    ogAlt: "Local LLaDA-Image Base and Turbo setup workflow with generation and editing modes",
    sections: [
      { id: "choose-model", title: "1. Choose Base or Turbo", blocks: [
        { type: "paragraph", html: "Start with LLaDA-Image Base when fidelity matters more than inference time. Start with LLaDA-Image-Turbo when you need faster iteration. The official examples use 50 steps for Base and 4 steps for Turbo." },
        { type: "paragraph", html: "Both variants have BF16 and FP8 checkpoint repositories. FP8 can be relevant for lower-precision deployments on compatible hardware, but the existence of FP8 weights does not establish a guaranteed VRAM requirement." },
      ]},
      { id: "environment", title: "2. Reproduce the official environment", blocks: [
        { type: "paragraph", html: "The repository documents Python 3.11, PyTorch 2.8, Transformers 4.57.6 and Diffusers 0.39.0 as its used stack. Clone inclusionAI/LLaDA-Image, create a Python 3.11 environment and install the repository requirements before debugging with newer dependency combinations." },
        { type: "paragraph", html: "The released examples run on CUDA. That confirms the documented execution path, but it is not a universal statement about one required GPU model or memory capacity." },
      ]},
      { id: "generation", title: "3. Run Base or Turbo text generation", blocks: [
        { type: "paragraph", html: "Load the desired checkpoint with LLaDAImagePipeline.from_pretrained. Base uses the inclusionAI/LLaDA-Image checkpoint with the repository’s 50-step starting configuration; Turbo uses inclusionAI/LLaDA-Image-Turbo with the 4-step starting configuration." },
        { type: "note", html: "For text generation, target height and width must be divisible by 16. Treat the repository’s step counts and guidance scales as reference settings rather than universal optimums." },
      ]},
      { id: "vq-editing", title: "4. Use VQ generation or image editing", blocks: [
        { type: "paragraph", html: "For VQ-conditioned generation, set generation_mode='vq' and do not pass an input image. The official docs say LLaDA2 produces image VQ tokens from the prompt and SigVQ embeds them before diffusion. VQ dimensions must be divisible by 16." },
        { type: "paragraph", html: "For instruction-guided editing, load a reference image and use generation_mode='editing'. Editing dimensions must be divisible by 32. The same checkpoint family supports both creation and reference-image edits." },
      ]},
      { id: "hardware", title: "5. Measure hardware instead of guessing", blocks: [
        { type: "paragraph", html: "inclusionAI does not currently publish one minimum VRAM figure covering every model, precision, resolution and mode. Measure peak memory on the actual GPU and settings you plan to use, then test Turbo or FP8 if speed or capacity is limiting." },
        { type: "list", items: ["Record model variant and precision.", "Record resolution and generation mode.", "Record sampling steps and guidance scale.", "Measure runtime and peak memory.", "Treat third-party VRAM numbers as hardware-specific evidence, not official requirements."] },
      ]},
      { id: "mistakes", title: "6. Avoid common setup mistakes", blocks: [
        { type: "list", items: ["Do not use arbitrary dimension sizes: text/VQ require multiples of 16 and editing requires multiples of 32.", "Do not run Turbo with Base-style 50-step settings when the goal is fast distilled inference.", "Do not pass an input image in VQ mode.", "Do not assume public weights automatically grant commercial-use rights.", "Do not describe training code as released while the repository still marks it coming soon."] },
        { type: "paragraph", html: "For creators, a sensible workflow is to validate Turbo first for prompt iteration, test editing on representative assets, then compare Base only where the quality difference matters enough to justify the extra inference cost." },
      ]},
    ],
    sources: lladaImageSources,
    relatedPaths: ["/blog/llada-image"],
  },
];
