import type { BlogArticle } from "./blog-types.ts";

export const antigravityLocalArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Google Antigravity SDK",
    targetSearchIntent: "Understand Google's new local and offline Antigravity SDK execution, supported runtimes, requirements and practical use",
    targetQuery: "Google Antigravity SDK local models",
    slug: "google-antigravity-sdk-local-models",
    title: "Google Antigravity SDK Local Models: Gemma 4, LiteRT & Ollama",
    metaTitle: "Google Antigravity SDK Local Models: Gemma 4, LiteRT & Ollama",
    metaDescription: "Google Antigravity SDK now runs AI agents locally and offline. See Gemma 4 + LiteRT setup, Ollama/LM Studio/vLLM support, hardware guidance and limits.",
    h1: "Google Antigravity SDK Local Models: Run AI Agents Offline",
    excerpt: "How Antigravity SDK runs agents locally with Gemma 4 + LiteRT or external OpenAI-compatible servers.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Google Antigravity SDK local agent connected to Gemma 4, LiteRT and external local model servers",
    sections: [
      { id: "change", title: "What changed in Antigravity SDK", blocks: [
        { type: "paragraph", html: "Google added local-model execution to the Antigravity Python SDK, allowing model inference to stay on-device while the SDK continues to manage agents, tools, policies, hooks, workspaces, MCP integration and subagents." },
        { type: "paragraph", html: "There are two distinct local routes: an SDK-managed LiteRT-LM path optimized around Gemma 4 26B A4B, and LocalOpenAIAgentConfig for separately managed OpenAI-compatible servers such as Ollama, LM Studio and vLLM." }
      ]},
      { id: "litert", title: "LiteRT + Gemma 4 is the documented optimized path", blocks: [
        { type: "paragraph", html: "Google's repository says the LiteRT workflow currently works best with the documented Gemma 4 26B A4B GPU LiteRT checkpoint and cautions that other .litertlm files may not work well or may fail." },
        { type: "paragraph", html: "The current repository recommends at least 24 GB of VRAM or shared/unified memory and recommends a 64K context size for this path. That is Google's guidance for the documented workflow, not a universal minimum for every local model or backend." }
      ]},
      { id: "external", title: "Ollama, LM Studio and vLLM use an external server", blocks: [
        { type: "paragraph", html: "LocalOpenAIAgentConfig connects Antigravity to an OpenAI-compatible inference server that you start and manage separately. Google's repository names Ollama and LM Studio, while the launch post also names vLLM." },
        { type: "paragraph", html: "Hardware requirements then belong primarily to the selected model and runtime. Antigravity preserves the agent orchestration layer, but different local models can vary substantially in tool use, context, multimodal support and instruction-following." }
      ]},
      { id: "privacy", title: "Offline and privacy boundaries", blocks: [
        { type: "paragraph", html: "The documented LiteRT path can run model inference without a cloud model API key once the model and dependencies are available locally. That can reduce per-request API exposure and keep code or prompts on the machine." },
        { type: "paragraph", html: "An agent is only fully offline when its tools are also local. Remote APIs, web tools or remote MCP servers can still transmit data, so local inference should not be marketed as a blanket guarantee that the entire workflow has no network activity." }
      ]},
      { id: "hybrid", title: "Hybrid architecture and practical limits", blocks: [
        { type: "paragraph", html: "Google demonstrates a hybrid Architect-Builder pattern in which a cloud model plans while local Gemma instances perform much of the execution. Google reports 97.2% of tokens ran locally in that recorded example; this is a vendor demo result, not a general benchmark." },
        { type: "paragraph", html: "Local execution avoids model API charges for local inference but still consumes hardware, electricity and any external service costs. Choose local, cloud or hybrid architecture based on privacy, model quality, latency, hardware capacity and workload economics." }
      ]}
    ],
    sources: [
      { label: "Google Developers Blog — Local AI models in Antigravity SDK", url: "https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/" },
      { label: "Google Antigravity SDK repository", url: "https://github.com/google-antigravity/antigravity-sdk-python" },
      { label: "Antigravity SDK — local model reference", url: "https://github.com/google-antigravity/antigravity-sdk-python/blob/main/skills/google-antigravity-sdk/references/local_models.md" }
    ],
    relatedPaths: ["/blog/run-google-antigravity-sdk-locally-gemma-4-litert", "/blog/google-antigravity-sdk-ollama-lm-studio-vllm"]
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Google Antigravity SDK",
    targetSearchIntent: "Install and run an Antigravity agent fully locally with Gemma 4 26B A4B and LiteRT-LM",
    targetQuery: "how to run Google Antigravity SDK locally",
    parentSlug: "google-antigravity-sdk-local-models",
    slug: "run-google-antigravity-sdk-locally-gemma-4-litert",
    title: "How to Run Google Antigravity SDK Locally with Gemma 4 + LiteRT",
    metaTitle: "Run Google Antigravity SDK Locally: Gemma 4 + LiteRT Guide",
    metaDescription: "Set up Google Antigravity SDK for offline local agents with Gemma 4 26B and LiteRT-LM, including install steps, memory guidance and key limitations.",
    h1: "How to Run Google Antigravity SDK Locally with Gemma 4 + LiteRT",
    excerpt: "A practical setup guide for Antigravity's SDK-managed Gemma 4 + LiteRT local-model path.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Local Antigravity agent using Gemma 4 26B A4B and LiteRT-LM on a workstation",
    sections: [
      { id: "requirements", title: "Requirements and the documented model path", blocks: [
        { type: "paragraph", html: "Google's current local-model documentation recommends at least 24 GB of VRAM or shared/unified memory and a 64K context size for the documented Gemma 4 26B A4B LiteRT workflow." },
        { type: "paragraph", html: "The repository says the path currently works best with the specific Gemma 4 26B A4B GPU LiteRT checkpoint. Do not assume every .litertlm file is supported just because it uses the same container format." }
      ]},
      { id: "install", title: "Install Antigravity SDK and LiteRT-LM", blocks: [
        { type: "paragraph", html: "Use an isolated Python environment, install the current google-antigravity and litert-lm packages from Google's documented workflow, then import the supported Gemma 4 LiteRT checkpoint locally." },
        { type: "paragraph", html: "Package names and SDK interfaces can evolve, so copy current commands from the repository at installation time rather than relying on an old snippet. The model and dependencies must already be present before testing truly offline inference." }
      ]},
      { id: "config", title: "Use LiteRTAgentConfig for the SDK-managed server", blocks: [
        { type: "paragraph", html: "Point LiteRTAgentConfig at the local model path and run it through the Agent lifecycle. The SDK manages the local loopback serving path, so the documented LiteRT configuration does not require a cloud model API key." },
        { type: "paragraph", html: "Google specifically warns not to point LocalOpenAIAgentConfig at litert-lm serve. Use LiteRTAgentConfig when you want Antigravity to own the LiteRT server lifecycle and use LocalOpenAIAgentConfig for independently managed servers." }
      ]},
      { id: "offline", title: "Test offline behavior and tool boundaries", blocks: [
        { type: "paragraph", html: "After the model and dependencies are local, verify inference without cloud model connectivity. If the agent uses remote APIs, web tools or remote MCP servers, those tools can still access the network even though the model itself is local." },
        { type: "paragraph", html: "Grant workspaces and tool permissions only where the task needs them. A permissive sample policy is not automatically appropriate for a real coding or business environment." }
      ]},
      { id: "performance", title: "Context, performance and common mistakes", blocks: [
        { type: "paragraph", html: "The repository documents a 64K LiteRT KV-cache capacity and related context-compaction behavior, plus optional optimizations such as speculative decoding and compilation caching. These controls do not guarantee a particular tokens-per-second rate." },
        { type: "paragraph", html: "Do not convert Google's memory recommendation into a claim that every 24 GB system behaves identically, and do not describe the workflow as fully private if attached tools transmit data. Benchmark the exact device, model and agent workload." }
      ]}
    ],
    sources: [
      { label: "Google Developers Blog — Local AI models in Antigravity SDK", url: "https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/" },
      { label: "Google Antigravity SDK repository", url: "https://github.com/google-antigravity/antigravity-sdk-python" },
      { label: "Antigravity SDK — local model reference", url: "https://github.com/google-antigravity/antigravity-sdk-python/blob/main/skills/google-antigravity-sdk/references/local_models.md" }
    ],
    relatedPaths: ["/blog/google-antigravity-sdk-local-models", "/blog/google-antigravity-sdk-ollama-lm-studio-vllm"]
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Google Antigravity SDK",
    targetSearchIntent: "Connect Antigravity SDK to an existing OpenAI-compatible local inference server such as Ollama, LM Studio or vLLM",
    targetQuery: "Google Antigravity SDK Ollama",
    parentSlug: "google-antigravity-sdk-local-models",
    slug: "google-antigravity-sdk-ollama-lm-studio-vllm",
    title: "Google Antigravity SDK with Ollama, LM Studio & vLLM",
    metaTitle: "Google Antigravity SDK with Ollama, LM Studio & vLLM",
    metaDescription: "Connect Google Antigravity SDK to Ollama, LM Studio or vLLM using its OpenAI-compatible local-server configuration, with setup concepts and limits.",
    h1: "How to Use Google Antigravity SDK with Ollama, LM Studio & vLLM",
    excerpt: "Connect Antigravity's agent layer to an external local OpenAI-compatible inference server.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Antigravity SDK branching to Ollama, LM Studio and vLLM local inference endpoints",
    sections: [
      { id: "config", title: "When to use LocalOpenAIAgentConfig", blocks: [
        { type: "paragraph", html: "Use LocalOpenAIAgentConfig when you already run a model behind a local OpenAI-compatible endpoint or want backend flexibility outside the SDK-managed LiteRT workflow. You operate the inference server; Antigravity connects to it." },
        { type: "paragraph", html: "The surrounding agent layer can continue to manage tools, workspaces, policies, hooks and triggers, but model behavior remains backend-dependent. API-shape compatibility does not make all local models equally capable." }
      ]},
      { id: "ollama", title: "Connect Antigravity to Ollama", blocks: [
        { type: "paragraph", html: "Google's repository documents Ollama as an external OpenAI-compatible option and provides localhost:11434/v1 as an example base URL. The model identifier must match the model exposed by your Ollama installation." },
        { type: "paragraph", html: "No OpenAI-hosted API key is required merely because the local server uses an OpenAI-compatible protocol. Authentication, model availability and hardware requirements are properties of your local server configuration." }
      ]},
      { id: "lm-vllm", title: "LM Studio and vLLM", blocks: [
        { type: "paragraph", html: "LM Studio can expose a local OpenAI-compatible server. Start the server, load the intended model and point Antigravity at the endpoint and model identifier actually shown by LM Studio instead of assuming an unrelated port." },
        { type: "paragraph", html: "Google's launch post also names vLLM. Run vLLM's OpenAI-compatible server with a model it supports, then configure Antigravity against that endpoint. GPU requirements come from the chosen model and vLLM, not from Antigravity alone." }
      ]},
      { id: "litert", title: "External server versus LiteRTAgentConfig", blocks: [
        { type: "paragraph", html: "Use LiteRTAgentConfig for Google's SDK-managed LiteRT route, currently best documented with Gemma 4 26B A4B. Use LocalOpenAIAgentConfig when the inference server has its own lifecycle outside Antigravity." },
        { type: "paragraph", html: "Google warns against using LocalOpenAIAgentConfig to connect to litert-lm serve because LiteRTAgentConfig is designed to manage the LiteRT server itself." }
      ]},
      { id: "limits", title: "Privacy, compatibility and performance limits", blocks: [
        { type: "paragraph", html: "A localhost inference endpoint can keep model requests on the machine, but remote MCP servers, web APIs and cloud services attached to the same agent can still transmit data. Verify the full tool graph before claiming an offline workflow." },
        { type: "paragraph", html: "There is no justified universal fastest backend. Performance depends on the model, quantization, runtime, hardware, context and task. Test tool calling and instruction following as carefully as raw tokens-per-second." }
      ]}
    ],
    sources: [
      { label: "Google Developers Blog — Local AI models in Antigravity SDK", url: "https://developers.googleblog.com/introducing-support-for-local-ai-models-in-the-antigravity-sdk/" },
      { label: "Google Antigravity SDK repository", url: "https://github.com/google-antigravity/antigravity-sdk-python" },
      { label: "Antigravity SDK — local model reference", url: "https://github.com/google-antigravity/antigravity-sdk-python/blob/main/skills/google-antigravity-sdk/references/local_models.md" }
    ],
    relatedPaths: ["/blog/google-antigravity-sdk-local-models", "/blog/run-google-antigravity-sdk-locally-gemma-4-litert"]
  }
];
