import type { BlogArticle } from "./blog-types.ts";

const vdnH3Sources = [
  { label: "OpenVDN — VideoDeltaNet on MiniMax H3", url: "https://openvdn.github.io/" },
  { label: "OpenVDN — VDN-H3 code and setup", url: "https://github.com/OpenVDN/vdn-minimax-h3" },
  { label: "Hugging Face — OpenVDN/vdn-minimax-h3", url: "https://huggingface.co/OpenVDN/vdn-minimax-h3" },
  { label: "MiniMax — MiniMax H3 model and license", url: "https://huggingface.co/MiniMaxAI/MiniMax-H3" },
];

export const vdnH3Articles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "VDN-H3 (Video DeltaNet on MiniMax H3)",
    targetSearchIntent: "Broad overview of VDN-H3 / Video DeltaNet: what it is, release status, architecture, performance, download, local deployment, licensing, limitations and availability.",
    targetQuery: "VDN-H3",
    slug: "vdn-h3-videodeltanet",
    title: "VDN-H3 / Video DeltaNet: Download, Speed, License & How to Run",
    metaTitle: "VDN-H3 / Video DeltaNet: Download, Speed, License & How to Run",
    metaDescription: "VDN-H3 explained: Video DeltaNet architecture, 8-step and 50-step weights, author-reported speed, local setup, licensing and limitations.",
    h1: "VDN-H3: Video DeltaNet Makes MiniMax H3 Faster Than Playback",
    excerpt: "VDN-H3 is an OpenVDN derivative of MiniMax H3 that combines local softmax attention with frame-wise linear Video Delta Attention to reduce long-range video-attention cost.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "VDN-H3 Video DeltaNet diagram showing nearby-frame softmax attention and long-range linear memory converging into a generated video timeline",
    sections: [
      { id: "what-is-vdn-h3", title: "What is VDN-H3?", blocks: [
        { type: "paragraph", html: "VDN-H3, short for Video DeltaNet on MiniMax H3, is an independent OpenVDN research release built from MiniMax H3. The project adds a hybrid-attention path rather than replacing the whole backbone: nearby temporal context stays on softmax attention while distant context is handled by frame-wise linear Video Delta Attention." },
        { type: "paragraph", html: "OpenVDN released the project page, model weights, optimized inference stack and training code on September 6, 2026. On September 8, the project README added image-to-video and first/last-frame-to-video support using the same checkpoints; the multi-GPU Ulysses scripts remain documented as text-to-video only." },
      ]},
      { id: "release", title: "What OpenVDN released", blocks: [
        { type: "paragraph", html: "The official Hugging Face bundle is about 82 GB: roughly 72 GB of released MiniMax H3 base components, a 4.3 GB 50-step VDN stage and a 5.1 GB distilled 8-step stage." },
        { type: "list", items: ["50-step checkpoint: stage-b-step-2000, containing the learned linear branch and default LoRA adapters", "8-step checkpoint: stage-dmd-step-250, adding the matching turbo adapter used for the few-step path", "training and inference code in the OpenVDN GitHub repository", "single-GPU and dedicated eight-GPU H200/B200 inference scripts"] },
      ]},
      { id: "speed", title: "How fast is VDN-H3?", blocks: [
        { type: "paragraph", html: "OpenVDN reports 11.23 seconds of steady-state denoising for a 14.4-second, 768p clip using the 8-step checkpoint on eight NVIDIA B200 GPUs. That is faster than playback for the denoising stage." },
        { type: "note", html: "The headline timing excludes model loading, warm-up, VAE decoding and MP4 encoding. It is an author-reported pipeline benchmark, not a universal end-to-end latency guarantee." },
        { type: "paragraph", html: "The same official table reports about 5.3 minutes at 50 steps and 51 seconds at 8 steps on one B200; about 1.2 minutes and 11.23 seconds respectively on eight B200s; about 9.4 minutes and 90.5 seconds on one H200; and about 1.9 minutes and 18.3 seconds on eight H200s." },
      ]},
      { id: "quality", title: "What does “near-lossless quality” mean here?", blocks: [
        { type: "paragraph", html: "OpenVDN describes VDN-H3 as maintaining near-lossless visual quality relative to dense H3 and publishes qualitative comparisons. We did not find an independent standardized quality benchmark that numerically proves that phrase, so it should remain an author claim rather than a third-party finding." },
      ]},
      { id: "eight-vs-fifty", title: "8-step vs 50-step VDN-H3", blocks: [
        { type: "paragraph", html: "The 50-step stage is useful when you want to evaluate the hybrid-attention architecture with a higher-step generation path. The 8-step DMD stage adds few-step distillation and is the checkpoint behind OpenVDN's fastest published numbers." },
        { type: "paragraph", html: "If practical generation speed is the goal, the 8-step checkpoint is the obvious starting point. If you are studying the architecture itself, the 50-step route better separates the attention change from the additional speed gained through distillation." },
      ]},
      { id: "local", title: "Can you run VDN-H3 locally?", blocks: [
        { type: "paragraph", html: "Yes. The current official setup uses Python 3.12, recommends PyTorch 2.13 with CUDA 12.9, requires the FlashAttention 4 path and installs a patched Diffusers build through the project setup script. The first render compiles kernels and can take several minutes before later runs reuse the cache." },
        { type: "paragraph", html: "OpenVDN provides a generic single-GPU script plus dedicated eight-GPU scripts for H200 and B200 hardware. It does not publish one universal consumer-GPU minimum-VRAM requirement, so community RTX results should not be presented as official hardware requirements." },
      ]},
      { id: "conditioning", title: "Text, image and keyframe conditioning", blocks: [
        { type: "paragraph", html: "The quick-start text-to-video path encodes a prompt with Qwen3-VL-32B before rendering through the diffusion model. The September 8 update also documents image-to-video and first/last-keyframe conditioning with the same released checkpoints." },
        { type: "paragraph", html: "For first/last-frame generation, the official encoder places the images on a 768-short-edge canvas, processes them with Qwen3-VL and VAE-encodes the conditioning latents into the prompt file. OpenVDN currently documents that keyframe-conditioning route on the single-GPU entrypoint, not the multi-GPU Ulysses scripts." },
      ]},
      { id: "license", title: "Code and model weights use different licenses", blocks: [
        { type: "paragraph", html: "OpenVDN's training and inference code is licensed under Apache 2.0. The VDN-H3 weights are a MiniMax H3 derivative and are distributed separately under the MiniMax H3 Community License Agreement." },
        { type: "note", html: "The current model card says the agreement's applicable territory excludes the European Union, United Kingdom, Republic of Korea and United States, and it includes redistribution and acceptable-use requirements. Read the live agreement before downloading, deploying or redistributing the weights. This article is not legal advice." },
      ]},
      { id: "api", title: "Is there a hosted VDN-H3 API?", blocks: [
        { type: "paragraph", html: "The official OpenVDN release is primarily weights plus code. A Hugging Face Space exists for demonstration, but we did not verify a generally available official hosted API with published VDN-H3 pricing or quotas. Do not infer API availability from a demo Space." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "list", items: ["the fastest published result needs eight B200 GPUs", "headline timing excludes several end-to-end pipeline stages", "near-lossless quality is an OpenVDN claim supported mainly by qualitative comparisons", "the official stack is datacenter-oriented and does not define a universal consumer minimum VRAM", "weight licensing has territorial and redistribution restrictions", "hosted API pricing and quotas were not verified"] },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "VDN-H3 is notable because it combines a hybrid attention change with an 8-step distilled path and publishes both the model artifacts and the training/inference stack. The most useful next step for developers is the official local-running guide below, which keeps the H200/B200 benchmark claims separate from unverified consumer-hardware assumptions." },
      ]},
    ],
    sources: vdnH3Sources,
    relatedPaths: ["/blog/run-vdn-h3-locally"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "VDN-H3 (Video DeltaNet on MiniMax H3)",
    targetSearchIntent: "Install and run the official VDN-H3 release locally or on self-hosted NVIDIA hardware while choosing the right checkpoint and understanding hardware/performance limits.",
    targetQuery: "how to run VDN-H3 locally",
    parentSlug: "vdn-h3-videodeltanet",
    slug: "run-vdn-h3-locally",
    title: "How to Run VDN-H3 Locally: Install, Weights, GPUs & 8-Step Setup",
    metaTitle: "How to Run VDN-H3 Locally: Install, Weights, GPUs & 8-Step Setup",
    metaDescription: "Run VDN-H3 locally with the official OpenVDN stack: environment, 82 GB weights, 8-step vs 50-step checkpoints, single-/multi-GPU scripts and caveats.",
    h1: "How to Run VDN-H3 Locally",
    excerpt: "The official VDN-H3 stack supports single-GPU inference and dedicated eight-GPU H200/B200 paths, but its fastest published numbers come from datacenter hardware.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Official VDN-H3 local setup flow showing an 82 GB model download, 8-step or 50-step checkpoint choice and single-GPU or H200/B200 paths",
    sections: [
      { id: "before-install", title: "Before you install", blocks: [
        { type: "paragraph", html: "Read the MiniMax H3 Community License that governs the VDN-H3 weights before downloading them. The OpenVDN code is Apache 2.0, but the derivative weights are not; the model agreement has territorial and redistribution restrictions." },
        { type: "paragraph", html: "The current official README recommends Python 3.12 and PyTorch 2.13 (`2.13.0+cu129`) and installs FlashAttention 4 because the code relies on FlexAttention's Flash backend. OpenVDN also uses a patched Diffusers setup." },
      ]},
      { id: "clone", title: "1. Clone the official repository", blocks: [
        { type: "paragraph", html: "Clone `OpenVDN/vdn-minimax-h3`, enter the repository and create the documented Conda environment. The current setup installs `uv`, then PyTorch 2.13 from the CUDA 12.9 wheel index." },
        { type: "paragraph", html: "Install the remaining project dependencies with prereleases enabled, then run `bash scripts/setup_diffusers.sh`. OpenVDN says the prerelease flag is needed for the current FlashAttention 4 dependency chain." },
      ]},
      { id: "download", title: "2. Download the official weights", blocks: [
        { type: "paragraph", html: "The documented command is `hf download OpenVDN/vdn-minimax-h3 --local-dir ckpts`. The complete bundle is about 82 GB, so plan disk space before starting." },
        { type: "list", items: ["`ckpts/h3-base/` — about 72 GB of released MiniMax H3 base components", "`ckpts/stage-b-step-2000/` — about 4.3 GB for the 50-step VDN stage", "`ckpts/stage-dmd-step-250/` — about 5.1 GB for the distilled 8-step stage"] },
      ]},
      { id: "checkpoint", title: "3. Choose 8 steps or 50 steps", blocks: [
        { type: "paragraph", html: "Use the 8-step DMD stage when generation speed is the priority; it is the checkpoint behind OpenVDN's fastest published result. Use the 50-step stage when you want a higher-step path for evaluating the hybrid-attention model without relying as heavily on the distillation speedup." },
        { type: "note", html: "The released 8-step package already contains its matching turbo adapter. Do not stack an unrelated turbo LoRA on top unless you have verified that combination." },
      ]},
      { id: "single-gpu", title: "4. Start with the single-GPU script", blocks: [
        { type: "paragraph", html: "OpenVDN's simplest documented first render is `bash scripts/inference/8nfe_tuned_fp8.sh`. The first run compiles kernels and may take several minutes; later runs can reuse the compile cache." },
        { type: "paragraph", html: "For a custom text prompt, first run `src/inference/encode_prompt.py` to create the prompt representation, then pass it into `src/inference/infer.py` with `configs/inference/8nfe_tuned_fp8.yaml` and the `stage-dmd-step-250` checkpoint." },
      ]},
      { id: "keyframes", title: "5. Use image or first/last-frame conditioning when needed", blocks: [
        { type: "paragraph", html: "As of September 8, OpenVDN documents image-to-video and first/last-frame-to-video support with the same checkpoints. The first/last-frame workflow uses `src/inference/encode_keyframes.py` before the normal inference command." },
        { type: "paragraph", html: "OpenVDN currently says keyframe conditioning is supported on the single-GPU entrypoint while the multi-GPU Ulysses scripts are text-to-video only. Recheck this boundary if you automate around it because it is a newly added capability." },
      ]},
      { id: "multi-gpu", title: "6. Use the hardware-specific multi-GPU script for H200 or B200", blocks: [
        { type: "paragraph", html: "OpenVDN provides dedicated eight-GPU scripts for H200 and B200 systems using Ulysses sequence parallelism. Choose the script matching the hardware rather than assuming one distributed configuration is portable across GPU families." },
        { type: "list", items: ["single GPU: `8nfe_tuned_fp8.sh`", "eight H200s: `8nfe_tuned_fp8_ulysses_h200.sh`", "eight B200s: `8nfe_tuned_fp8_ulysses_b200.sh`"] },
      ]},
      { id: "performance", title: "What performance should you expect?", blocks: [
        { type: "paragraph", html: "For the official 768p, 14.4-second workload, OpenVDN reports about 5.3 minutes at 50 steps or 51 seconds at 8 steps on one B200; about 1.2 minutes or 11.23 seconds on eight B200s; about 9.4 minutes or 90.5 seconds on one H200; and about 1.9 minutes or 18.3 seconds on eight H200s." },
        { type: "note", html: "Those figures are steady-state denoising measurements. They exclude model loading, warm-up, VAE decoding and MP4 encoding." },
      ]},
      { id: "consumer-gpus", title: "What about RTX and other consumer GPUs?", blocks: [
        { type: "paragraph", html: "The official release does not publish a universal consumer-GPU minimum-VRAM table. The single-GPU script auto-detects the best available kernels, but memory needs still depend on precision, checkpoint stage, resolution, video length and loading strategy." },
        { type: "paragraph", html: "Do not turn community RTX results into official requirements. If you use a community ComfyUI port, keep its kernels, benchmarks and memory behavior clearly separated from OpenVDN's reference implementation." },
      ]},
      { id: "troubleshooting", title: "Troubleshooting checklist", blocks: [
        { type: "list", items: ["if the first run is slow, distinguish kernel compilation from normal generation", "if imports fail, verify the documented PyTorch/CUDA/FlashAttention combination", "confirm `scripts/setup_diffusers.sh` completed successfully", "use the H200 or B200 distributed script that matches your hardware", "if wall-clock time exceeds a benchmark, remember the published table excludes decode and file encoding"] },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Start with the official single-GPU 8-step path to validate your environment and checkpoint layout. Move to the H200/B200 distributed scripts only when your hardware matches those documented routes, and avoid inventing a universal VRAM floor that OpenVDN itself does not publish." },
        { type: "paragraph", html: "For the architecture, licensing split, broader release context and the exact boundaries of OpenVDN's speed claims, return to the main VDN-H3 overview." },
      ]},
    ],
    sources: vdnH3Sources,
    relatedPaths: ["/blog/vdn-h3-videodeltanet"],
  },
];
