import type { BlogArticle } from "./blog-types.ts";

const licenseSources = [
  { label: "OpenVDN — VDN-H3 model card", url: "https://huggingface.co/OpenVDN/vdn-minimax-h3" },
  { label: "OpenVDN — code repository", url: "https://github.com/OpenVDN/vdn-minimax-h3" },
  { label: "OpenVDN — NOTICE", url: "https://github.com/OpenVDN/vdn-minimax-h3/blob/main/NOTICE" },
  { label: "MiniMax — H3 Community License", url: "https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE" },
];

const comfySources = [
  { label: "Saganaki22 — ComfyUI-VDN-H3", url: "https://github.com/Saganaki22/ComfyUI-VDN-H3" },
  { label: "OpenVDN — VDN-H3 model card", url: "https://huggingface.co/OpenVDN/vdn-minimax-h3" },
  { label: "OpenVDN — official VDN-H3 repository", url: "https://github.com/OpenVDN/vdn-minimax-h3" },
  { label: "OpenVDN — Video DeltaNet project", url: "https://openvdn.github.io/" },
];

export const vdnH3SupportingArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    cluster: "VDN-H3 (Video DeltaNet on MiniMax H3)",
    targetSearchIntent: "Understand the different licenses covering VDN-H3 code and weights, territorial limits, redistribution requirements and what must be checked before commercial deployment.",
    targetQuery: "VDN-H3 license",
    parentSlug: "vdn-h3-videodeltanet",
    slug: "vdn-h3-license-commercial-use",
    title: "VDN-H3 License & Commercial Use: Code, Weights and Territory Explained",
    metaTitle: "VDN-H3 License & Commercial Use: Code, Weights and Territory",
    metaDescription: "VDN-H3 uses two licensing layers: Apache-2.0 code and MiniMax H3 Community License weights. Understand territory, redistribution and deployment cautions.",
    h1: "VDN-H3 License and Commercial Use Explained",
    excerpt: "VDN-H3 combines Apache-2.0 training and inference code with derivative model weights governed by the separate MiniMax H3 Community License Agreement.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "VDN-H3 licensing diagram separating Apache-2.0 code from MiniMax H3 Community License model weights with a territory caution",
    sections: [
      { id: "license-split", title: "VDN-H3 has two licensing layers", blocks: [
        { type: "paragraph", html: "VDN-H3 has a licensing split that is easy to miss. OpenVDN's training and inference code is Apache-2.0, while the released VDN-H3 weights are a derivative of MiniMax H3 and remain governed by the MiniMax H3 Community License Agreement." },
        { type: "note", html: "This is a summary of the public documents checked on September 8, 2026, not legal advice. Read the live agreement before making a commercial, redistribution or deployment decision." },
      ]},
      { id: "code", title: "Code license: Apache 2.0", blocks: [
        { type: "paragraph", html: "The OpenVDN repository licenses its training and inference code under Apache License 2.0. Its NOTICE explicitly separates that repository code from the model weights and says the Apache license does not replace the license governing MiniMax H3 or derivative weights." },
        { type: "paragraph", html: "The same distinction applies to wrappers and interfaces. An Apache-licensed launcher or ComfyUI custom node can be permissively licensed code while the model files loaded by it remain subject to a different agreement." },
      ]},
      { id: "weights", title: "Weight license: MiniMax H3 Community License", blocks: [
        { type: "paragraph", html: "The OpenVDN model card identifies VDN-H3 as a MiniMax H3 derivative and distributes the weights under the MiniMax H3 Community License Agreement. Download availability does not turn those weights into Apache-licensed artifacts." },
        { type: "paragraph", html: "The current agreement defines an Applicable Territory that excludes the European Union, United Kingdom, Republic of Korea and United States of America. The model materials direct users outside the applicable territory to contact MiniMax about licensing. Recheck this language because model licenses can change." },
      ]},
      { id: "redistribution", title: "Redistribution and deployment need a separate review", blocks: [
        { type: "paragraph", html: "The current release documents redistribution conditions, modification notices, NOTICE handling and an incorporated Acceptable Use Policy. A downloadable model bundle, desktop package, customer deployment and hosted backend can raise different obligations, so do not reduce the agreement to a blanket yes-or-no commercial-use answer." },
        { type: "paragraph", html: "Before deployment, record the exact checkpoint, repository revision, license version, deployment territory, whether weights are redistributed or only used on a hosted backend, and any modifications that trigger notice requirements." },
      ]},
      { id: "commercial", title: "So, is commercial use allowed?", blocks: [
        { type: "paragraph", html: "A safer answer is that VDN-H3 is not an unrestricted Apache-licensed model. Commercial teams need to evaluate the MiniMax H3 Community License governing the weights and confirm that their territory, use and distribution model are authorized." },
        { type: "paragraph", html: "Technical access through Hugging Face does not override license terms. If your deployment is in an excluded territory or involves redistribution, use the current agreement rather than relying on a summary or an old model-card snapshot." },
      ]},
      { id: "faq", title: "VDN-H3 license FAQ", blocks: [
        { type: "list", items: ["Is VDN-H3 Apache 2.0? The OpenVDN code is; the derivative model weights are not.", "Does an Apache-licensed ComfyUI node change the model license? No. Interface code and model weights are separate layers.", "Can download availability be treated as permission to use the weights anywhere? No; the agreement's territorial and use conditions still apply.", "Should commercial teams rely on this article alone? No. Check the live license and obtain legal guidance where appropriate."] },
      ]},
    ],
    sources: licenseSources,
    relatedPaths: ["/blog/vdn-h3-videodeltanet", "/blog/run-vdn-h3-locally", "/blog/vdn-h3-comfyui"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "VDN-H3 (Video DeltaNet on MiniMax H3)",
    targetSearchIntent: "Install and use the community VDN-H3 native ComfyUI node while understanding checkpoint placement, modes, VRAM behavior and differences from the official OpenVDN stack.",
    targetQuery: "VDN-H3 ComfyUI",
    parentSlug: "vdn-h3-videodeltanet",
    slug: "vdn-h3-comfyui",
    title: "VDN-H3 ComfyUI Guide: Install the Video DeltaNet Node & Checkpoints",
    metaTitle: "VDN-H3 ComfyUI Guide: Install Video DeltaNet & 8-Step Checkpoint",
    metaDescription: "Install the community VDN-H3 ComfyUI node, place the 8-step checkpoint correctly, choose memory modes and understand consumer-GPU limits vs official OpenVDN.",
    h1: "How to Run VDN-H3 in ComfyUI",
    excerpt: "Saganaki22's community ComfyUI port adapts the released VDN-H3 checkpoints for visual workflows without claiming parity with OpenVDN's eight-B200 benchmark stack.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Community VDN-H3 ComfyUI workflow showing MiniMax H3 feeding an Apply VDN-H3 node, an 8-step checkpoint and stream-versus-GPU-cache memory choices",
    sections: [
      { id: "community-port", title: "What the ComfyUI port is", blocks: [
        { type: "paragraph", html: "Saganaki22's ComfyUI-VDN-H3 is a community port, not an official OpenVDN or MiniMax product. It adapts the released Video DeltaNet checkpoints to ComfyUI and substitutes portable PyTorch implementations for parts of the datacenter-oriented reference stack." },
        { type: "note", html: "Treat Windows/RTX support, VRAM guidance and performance numbers as maintainer evidence. They are not official OpenVDN hardware requirements or guarantees." },
      ]},
      { id: "install", title: "1. Install the custom node", blocks: [
        { type: "paragraph", html: "From the ComfyUI `custom_nodes` directory, clone `https://github.com/Saganaki22/ComfyUI-VDN-H3`, then restart ComfyUI. The current repository documents Windows with NVIDIA as its primary tested target, says Linux NVIDIA should work, and describes the port as single-GPU." },
        { type: "paragraph", html: "The maintainer currently says this path adds no new Python dependencies beyond the ComfyUI environment it expects. AMD, Intel and CPU-only execution are not documented as tested targets." },
      ]},
      { id: "checkpoint", title: "2. Put the VDN checkpoint in the expected folder", blocks: [
        { type: "paragraph", html: "For the released distilled path, download `stage-dmd-step-250/*` from `OpenVDN/vdn-minimax-h3` and place the stage under `ComfyUI/models/vdn/`. Keep the stage metadata, linear branch and adapters together rather than converting the files on disk." },
        { type: "paragraph", html: "The released 8-step stage is about 5.1 GB and the 50-step stage about 4.3 GB, in addition to the MiniMax H3 base components. The branch itself is therefore not a complete-system VRAM estimate." },
      ]},
      { id: "apply", title: "3. Apply VDN-H3 and choose the memory mode", blocks: [
        { type: "paragraph", html: "Add the port's VDN-H3 apply node to a MiniMax H3 workflow. For the DMD stage, use its matching turbo adapter and eight sampling steps as documented by the port; stacking unrelated attention replacements or turbo adapters can create an invalid combination." },
        { type: "paragraph", html: "The port can keep branch weights resident on the GPU when memory permits or stream branch blocks when memory is tighter. The maintainer describes the full branch at roughly 4.3 GB and a much smaller block-at-a-time streaming working set, trading speed for lower persistent memory." },
      ]},
      { id: "performance", title: "What performance and VRAM claims mean", blocks: [
        { type: "paragraph", html: "In one documented RTX 5090 workload at 1280×736 and 145 frames, the maintainer reports about 17 seconds per iteration and roughly 2 minutes 15 seconds of sampling across eight evaluations. That is a community measurement tied to its workflow, quantization and backend choices, not a reproduction of OpenVDN's eight-B200 result." },
        { type: "paragraph", html: "The repository also describes specific INT8-oriented configurations that can fit 736p work on some 12–16 GB cards. Treat that as configuration-specific community guidance rather than an official VDN-H3 minimum specification." },
      ]},
      { id: "memory", title: "VAE decode can still be the memory spike", blocks: [
        { type: "paragraph", html: "Sampling can fit while untiled VAE decoding still runs out of memory at higher resolutions or longer clips. The community documentation recommends tiled VAE decoding when decode memory becomes the bottleneck." },
        { type: "paragraph", html: "Conditioning variants exposed by the ComfyUI integration should also be described as integration behavior. OpenVDN's documented training and benchmark evidence does not establish that every community conditioning layout was independently trained or benchmarked." },
      ]},
      { id: "official-vs-comfy", title: "Official OpenVDN vs the ComfyUI port", blocks: [
        { type: "paragraph", html: "Use the official OpenVDN stack when you need reference-code parity, training code or its H200/B200 distributed paths. Use the ComfyUI port when a visual single-GPU workflow is more useful and you can accept community-maintained kernels, platform boundaries and benchmark evidence." },
        { type: "note", html: "The custom-node code is Apache-2.0, but VDN-H3/MiniMax H3 weights remain under the MiniMax H3 Community License. Installing the node does not change the model-weight license or its territorial restrictions." },
      ]},
    ],
    sources: comfySources,
    relatedPaths: ["/blog/vdn-h3-videodeltanet", "/blog/run-vdn-h3-locally", "/blog/vdn-h3-license-commercial-use"],
  },
];
