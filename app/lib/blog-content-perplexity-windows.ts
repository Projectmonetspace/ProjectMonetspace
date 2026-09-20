import type { BlogArticle } from "./blog-types.ts";

export const perplexityWindowsArticles: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Perplexity Portable Computer",
    "targetSearchIntent": "Install and run Perplexity Portable Computer on a compatible Windows PC and understand the RTX/VRAM requirements",
    "targetQuery": "Perplexity Portable Computer Windows",
    "parentSlug": "perplexity-portable-computer",
    "slug": "perplexity-portable-computer-windows-rtx",
    "title": "Perplexity Portable Computer on Windows RTX: Requirements & Setup",
    "metaTitle": "Perplexity Portable Computer Windows: RTX Requirements & Setup",
    "metaDescription": "Perplexity Portable Computer now runs on Windows PCs with NVIDIA GeForce RTX or RTX PRO GPUs with at least 24GB VRAM. See requirements, access, local AI behavior and setup.",
    "h1": "How to Run Perplexity Portable Computer on Windows RTX PCs",
    "excerpt": "Perplexity Portable Computer now supports compatible Windows RTX PCs with at least 24GB of VRAM, using PPLX 27B for local inference and optional cloud escalation.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration of Perplexity Portable Computer running on a Windows RTX PC",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Perplexity Portable Computer is now available on Windows PCs, expanding the local-first agent beyond its original DGX Spark and Linux launch."
          },
          {
            "type": "paragraph",
            "html": "The key hardware requirement is unusually important: Windows support is for NVIDIA GeForce RTX and RTX PRO GPUs with at least 24GB of VRAM. That makes this a high-end local AI workflow rather than something that will run on every Windows laptop."
          }
        ]
      },
      {
        "id": "what-you-need",
        "title": "What you need",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For the Windows release, current NVIDIA and launch documentation establishes these requirements:"
          },
          {
            "type": "list",
            "items": [
              "Windows PC",
              "NVIDIA GeForce RTX or NVIDIA RTX PRO GPU",
              "at least 24GB of GPU VRAM",
              "an eligible Perplexity account/subscription for Portable Computer access",
              "enough local storage for the app, local models and working data"
            ]
          },
          {
            "type": "paragraph",
            "html": "The 24GB VRAM requirement is the safest compatibility rule to use. Do not assume that a GPU is supported merely because it is newer or belongs to the RTX family."
          },
          {
            "type": "paragraph",
            "html": "Examples of desktop GPUs with 24GB or more VRAM include the RTX 3090, RTX 4090 and RTX 5090, but hardware compatibility should ultimately be checked against Perplexity's current app requirements rather than inferred from a model name alone."
          }
        ]
      },
      {
        "id": "how-to-get-portable-computer-on-windows",
        "title": "How to get Portable Computer on Windows",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Portable Computer is delivered through Perplexity's Windows experience rather than as a generic local-model package. Install or update the official Perplexity Windows app, sign in with the eligible account, and look for Portable Computer/local-compute availability."
          },
          {
            "type": "paragraph",
            "html": "Because rollout and UI labels can change, this guide does not invent a fixed sequence of buttons. If the feature is absent, first verify app version, account eligibility, GPU class and VRAM before treating it as a software failure."
          }
        ]
      },
      {
        "id": "what-runs-locally",
        "title": "What runs locally?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Portable Computer is designed to keep the agent harness and supported model execution on the PC for local work. Perplexity's local-first architecture includes planning/orchestration, tools and local data processing so workflows can operate without sending every file or prompt to a remote model."
          },
          {
            "type": "paragraph",
            "html": "NVIDIA says locally completed work does not consume cloud credits."
          },
          {
            "type": "paragraph",
            "html": "That does not make every Portable Computer task offline. When a workflow needs current web research or stronger cloud reasoning, Portable Computer can escalate that part of the task to a cloud service. Perplexity's design asks for permission before content is sent to the cloud."
          }
        ]
      },
      {
        "id": "which-model-does-it-use",
        "title": "Which model does it use?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "On supported Windows RTX PCs, Perplexity's current product page lists PPLX 27B as the available local model. Qwen 3.8 27B is not available on Windows RTX PCs, while NVIDIA Nemotron 3.5 Lightning is still listed as coming soon."
          },
          {
            "type": "paragraph",
            "html": "Perplexity says Windows users should start with Personal Computer for Windows and then enable PPLX 27B local inference in Settings on a supported PC. Only one local model runs at a time."
          }
        ]
      },
      {
        "id": "does-local-use-cost-credits",
        "title": "Does local use cost credits?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "NVIDIA says complete workflows handled locally do not consume Perplexity cloud credits. This is one of the product's main advantages for repetitive, private or long-running workloads."
          },
          {
            "type": "paragraph",
            "html": "A local workflow can still invoke paid or metered cloud capabilities when the user authorizes escalation, so 'local work uses no cloud credits' should not be misread as 'every possible Portable Computer workflow is free.'"
          }
        ]
      },
      {
        "id": "privacy-local-does-not-mean-permanently-offline",
        "title": "Privacy: local does not mean permanently offline",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest privacy benefit is control over where a task runs. Sensitive files can be processed locally, while cloud escalation is permission-gated when outside information or frontier reasoning is needed."
          },
          {
            "type": "paragraph",
            "html": "Connected services such as Google Drive, Gmail, Slack or GitHub are external systems. Using those connectors necessarily involves their own network access and permissions even when the core agent is running locally."
          }
        ]
      },
      {
        "id": "windows-vs-the-original-dgx-spark-release",
        "title": "Windows vs the original DGX Spark release",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Portable Computer originally launched around NVIDIA DGX Spark and Linux. Windows support materially broadens the addressable hardware base because users with qualifying existing RTX desktops or workstations no longer need the DGX Spark form factor."
          },
          {
            "type": "paragraph",
            "html": "The trade-off is the VRAM gate: most mainstream RTX configurations have less than 24GB and therefore do not meet the currently stated Windows requirement."
          }
        ]
      },
      {
        "id": "what-if-portable-computer-is-not-showing",
        "title": "What if Portable Computer is not showing?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Check these in order:"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Confirm the PC is running Windows and the official Perplexity app is current.",
              "Confirm the GPU is NVIDIA GeForce RTX or RTX PRO.",
              "Confirm the GPU has at least 24GB VRAM.",
              "Confirm the signed-in Perplexity account is eligible for Portable Computer.",
              "Restart the app after updating it and check the current Portable Computer product/help page for rollout changes."
            ]
          },
          {
            "type": "paragraph",
            "html": "Do not use unofficial workarounds to bypass hardware or account eligibility. A missing feature can reflect rollout or entitlement rather than a broken installation."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Windows release turns Perplexity Portable Computer from a DGX/Linux-focused product into a more accessible local AI agent for high-end PC owners. The practical dividing line is 24GB of NVIDIA GPU memory. If your Windows machine meets that requirement and your Perplexity account is eligible, Portable Computer can execute supported agent workflows locally, preserve local handling for sensitive data, and escalate to cloud services only when needed and authorized."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "blogs.nvidia.com",
        "url": "https://blogs.nvidia.com/blog/local-ai-ifa-next-gen-agents-nv-pair-rtx-spark/"
      },
      {
        "label": "tomshardware.com",
        "url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/perplexitys-local-ai-agent-comes-to-windows-but-only-for-rtx-gpus-with-at-least-24gb-of-vram-portable-computer-brings-ai-for-multistep-tasks-to-compatible-pcs"
      },
      {
        "label": "perplexity.ai",
        "url": "https://www.perplexity.ai/hub/products/portable-computer"
      },
      {
        "label": "blogs.nvidia.com",
        "url": "https://blogs.nvidia.com/blog/local-ai-perplexity-windows-pcs/"
      }
    ],
    "relatedPaths": [
      "/blog/perplexity-portable-computer",
      "/blog/how-to-use-perplexity-portable-computer-dgx-spark"
    ]
  }
];
