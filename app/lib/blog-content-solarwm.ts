import type { BlogArticle } from "./blog-types.ts";

const sources = [
  { label: "SolarWM GitHub repository", url: "https://github.com/Junchao-cs/SolarWM" },
  { label: "SolarWM arXiv paper", url: "https://arxiv.org/abs/2609.02886" },
  { label: "SolarWM Hugging Face model repository", url: "https://huggingface.co/junchaoh-cs/SolarWM" },
  { label: "SolarWM-Data Hugging Face dataset", url: "https://huggingface.co/datasets/junchaoh-cs/SolarWM-Data" },
];

export const solarWmArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "SolarWM",
    targetSearchIntent: "Understand what SolarWM is, what was released, which model stages are available, how the long-horizon claims should be interpreted, and what developers need to verify before local use.",
    targetQuery: "SolarWM",
    slug: "solarwm-video-world-model",
    title: "SolarWM: Open Video World Model, Weights, Setup & Features",
    metaTitle: "SolarWM: Open Video World Model, Weights & Setup",
    metaDescription: "SolarWM is an open long-horizon video world-model framework with code, weights, data and 5B–33B variants. Here’s what was released, how it works and what to verify.",
    h1: "SolarWM: Open Video World Models for Long-Horizon Generation",
    excerpt: "SolarWM is an open research framework for camera-conditioned long-horizon video generation, with a shared data engine, training stack and model family spanning Wan2.2, LTX-2.5 and MiniMax-H3 backbones.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "SolarWM open long-horizon video world-model framework across Wan2.2, LTX-2.5 and MiniMax-H3 backbones",
    sections: [
      {
        id: "what-is-solarwm",
        title: "What SolarWM is",
        blocks: [
          { type: "paragraph", html: "SolarWM is an open research foundation for building interactive video world models from data preparation through training and long-horizon inference. Its authors combine a reusable data engine with backbone-native model adapters rather than presenting one isolated video checkpoint." },
          { type: "paragraph", html: "The paper describes 1.43 million canonical clips normalized into a frame-aligned contract covering observations, metric camera geometry, captions, quality metadata, selection decisions and provenance. The framework then instantiates four models from roughly 5B to 33B parameters across Wan2.2, LTX-2.5 and MiniMax-H3." },
        ],
      },
      {
        id: "release-status",
        title: "What was released on September 3, 2026",
        blocks: [
          { type: "paragraph", html: "The official repository says the September 3 release includes training and inference code, the data pipeline, dataset artifacts, model weights for all SolarWM-5B training stages, and bidirectional weights for SolarWM-14B, SolarWM-LTX and SolarWM-H3." },
          { type: "paragraph", html: "The currently documented progression is complete for the Wan2.2 TI2V-5B route: Stage 0.5 bidirectional camera conditioning, Stage 1 teacher forcing plus AnyFlow, and Stage 2 self-gradient-forcing distillation. For the larger Wan2.2-14B, LTX-2.5 and MiniMax-H3 routes, Stage 0.5 is released while Stage 1 and Stage 2 remain marked as coming soon." },
          { type: "note", html: "Do not assume every model family named in the paper has a released causal Stage 2 checkpoint. Check the repository and model card for the exact backbone and stage you intend to use." },
        ],
      },
      {
        id: "long-horizon",
        title: "What the minutes-to-hours result means",
        blocks: [
          { type: "paragraph", html: "The authors report that causal models trained on 5-second sequences can support real-time interactive rollouts spanning minutes to hours. This is an author-reported research result about continued autoregressive generation, not a guarantee of hour-long physical accuracy or production stability." },
          { type: "paragraph", html: "Long autoregressive video can accumulate geometry drift, repeated events, identity changes and semantic inconsistencies. A system continuing to generate for an hour is different from accurately predicting a real environment one hour into the future." },
        ],
      },
      {
        id: "training-recipe",
        title: "How the three-stage training recipe works",
        blocks: [
          { type: "paragraph", html: "Stage 0.5 performs bidirectional flow-matching adaptation for camera-conditioned full-clip generation. Stage 1 adds teacher forcing and AnyFlow-style training so clean history conditions future chunks while the model learns denoising and finite-step flow maps." },
          { type: "paragraph", html: "Stage 2 uses distribution-matching distillation with self-gradient forcing, training a causal student on its own autoregressive rollout with a frozen teacher and trainable critic. The practical goal is to turn a strong video backbone into a camera-controlled few-step autoregressive model." },
        ],
      },
      {
        id: "access-license-api",
        title: "Weights, access, licenses and API status",
        blocks: [
          { type: "paragraph", html: "The official Hugging Face model repository is publicly visible but requires users to accept access conditions and share contact information before accessing files. The 5B release includes base, Stage 0.5, Stage 1 and Stage 2 checkpoint directories." },
          { type: "paragraph", html: "SolarWM code is Apache-2.0, but model weights and bundled upstream backbone assets retain their own license terms. The repository specifically notes separate LTX-2.x and MiniMax-H3 community-license obligations, so commercial users should review the exact package rather than treating the code license as a blanket grant." },
          { type: "paragraph", html: "No official hosted SolarWM API or API pricing was verified at publication time. Hugging Face also shows the model as not deployed by an Inference Provider, so the documented path is local or research infrastructure rather than a managed API product." },
        ],
      },
      {
        id: "local-use",
        title: "Can you run SolarWM locally?",
        blocks: [
          { type: "paragraph", html: "Yes. The repository provides backbone-specific runtime environments, an environment probe, configuration resolution, training commands and inference commands. The Wan2.2 5B route is the clearest starting point because it has the most complete released progression." },
          { type: "paragraph", html: "SolarWM does not publish one universal minimum-VRAM number for every backbone, precision, resolution and workload. Treat hardware requirements as configuration-specific and avoid promoting community estimates as official requirements." },
          { type: "note", html: "For the practical installation, checkpoint and inference workflow, continue to <a href=\"/blog/how-to-run-solarwm-locally\">How to Run SolarWM Locally</a>." },
        ],
      },
      {
        id: "practical-relevance",
        title: "Why developers and creators may care",
        blocks: [
          { type: "paragraph", html: "SolarWM's immediate value is as an open foundation for teams experimenting with controllable video world models. Potential downstream uses include virtual production, previsualization, game prototyping, simulation and synthetic training environments." },
          { type: "paragraph", html: "Those are plausible applications of interactive world models, not confirmed SolarWM product integrations. Today the project should be evaluated as research infrastructure with unusually broad release coverage rather than as a polished creator application." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/how-to-run-solarwm-locally"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "SolarWM",
    targetSearchIntent: "Install SolarWM, choose an actually released checkpoint, validate the runtime environment and run local inference using the project's documented workflow without inventing hardware requirements.",
    targetQuery: "how to run SolarWM locally",
    parentSlug: "solarwm-video-world-model",
    slug: "how-to-run-solarwm-locally",
    title: "How to Run SolarWM Locally: Install, Weights & Inference",
    metaTitle: "How to Run SolarWM Locally: Setup & Inference Guide",
    metaDescription: "A practical SolarWM local setup guide using the official repository: environments, weights, runtime checks, inference commands, data paths and hardware caveats.",
    h1: "How to Run SolarWM Locally",
    excerpt: "A source-checked local workflow for SolarWM using the official repository, backend-specific environments, released 5B checkpoints, configuration resolution and short inference tests.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "Local SolarWM setup workflow using official code, model weights and inference configuration",
    sections: [
      {
        id: "start-official",
        title: "1. Start with the official SolarWM repository",
        blocks: [
          { type: "paragraph", html: "Clone the official repository with <code>git clone https://github.com/Junchao-cs/SolarWM.git</code>, enter the directory and use the backend documentation for the model family you intend to run." },
          { type: "paragraph", html: "Wan2.2, LTX-2.5 and MiniMax-H3 use separate runtime environments. Do not assume one dependency set is valid across all backbones." },
        ],
      },
      {
        id: "environment",
        title: "2. Create the correct environment and probe it",
        blocks: [
          { type: "paragraph", html: "After activating the documented backbone-specific environment, install the shared SolarWM source in editable mode with <code>python -m pip install -e .</code>." },
          { type: "paragraph", html: "Then run <code>solarwm environment probe</code>. The probe is important because a Python installation can succeed even when CUDA, backend packages or runtime dependencies are not usable together." },
        ],
      },
      {
        id: "checkpoint",
        title: "3. Choose a checkpoint that is actually released",
        blocks: [
          { type: "paragraph", html: "At publication time, the Wan2.2 TI2V-5B family has the complete public progression: base, Stage 0.5, Stage 1 and Stage 2. The official model repository lists <code>SolarWM-5B-sgf-stage2-81f</code> as the released few-step causal SGF checkpoint." },
          { type: "paragraph", html: "The larger Wan2.2-14B, LTX-2.5 and MiniMax-H3 routes currently have bidirectional Stage 0.5 support while later causal stages remain marked as coming soon. Recheck the repository before assuming that status is unchanged." },
          { type: "note", html: "The Hugging Face model repository requires accepting access conditions before downloading files. Keep the release directory layout unchanged because the example configurations resolve paths from those directories." },
        ],
      },
      {
        id: "config",
        title: "4. Resolve configuration before allocating the model",
        blocks: [
          { type: "paragraph", html: "SolarWM uses explicit configuration files and command-line overrides. Resolve the final configuration first so model paths, checkpoint paths, data roots and output locations can be checked before expensive model allocation." },
          { type: "paragraph", html: "Use the exact example configuration for the backbone and training stage you downloaded. Placeholder paths such as <code>/path/to/...</code> are examples, not official installation locations." },
        ],
      },
      {
        id: "inference",
        title: "5. Run a short Stage 2 inference test first",
        blocks: [
          { type: "paragraph", html: "For the released 5B Stage 2 route, the official documentation uses the SolarWM inference module under <code>torchrun</code> with the matching Stage 2 config, base-model directory, SGF checkpoint, data roots and output directory." },
          { type: "paragraph", html: "Before exploring long horizons, confirm that the environment loads, the checkpoint matches the config, camera-control input is accepted, frames are produced and output is written correctly. Increase sequence length only after that baseline succeeds." },
        ],
      },
      {
        id: "data-layout",
        title: "6. Keep the data layout consistent",
        blocks: [
          { type: "paragraph", html: "SolarWM data indexes store shard keys relative to a release root. For local storage, the documented pattern points both <code>index_root</code> and the local transport root at the SolarWM-Data release directory." },
          { type: "paragraph", html: "Inference users may not need the entire raw training corpus. The project separates annotations, pre-encoded artifacts and larger raw payloads, so obtain only the artifacts required by the recipe you are running." },
        ],
      },
      {
        id: "hardware",
        title: "7. Do not guess a universal GPU requirement",
        blocks: [
          { type: "paragraph", html: "SolarWM does not publish one universal minimum VRAM figure that covers every model and mode. Memory needs vary with backbone, parameter count, precision, resolution, sequence length and whether you are training or running inference." },
          { type: "paragraph", html: "The 5B route is the most complete official local path, but that does not make any specific community VRAM estimate an official minimum. Treat community quantizations, repacks and offloading recipes as separate artifacts unless SolarWM explicitly publishes them." },
        ],
      },
      {
        id: "troubleshooting",
        title: "8. Common setup failures",
        blocks: [
          { type: "list", items: ["Environment probe fails: confirm the correct backbone environment is active before installing the shared package.", "Checkpoint download fails: verify that Hugging Face access conditions were accepted and that the requested stage is released.", "Config resolves but inference fails: verify base model, checkpoint, data root and config belong to the same backbone/stage.", "A larger causal checkpoint is missing: Stage 1 and Stage 2 for several larger backbones are still marked as coming soon at publication time."] },
          { type: "note", html: "For the broad release, model family, licensing and long-horizon research claims, return to the <a href=\"/blog/solarwm-video-world-model\">main SolarWM overview</a>." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/solarwm-video-world-model"],
  },
];
