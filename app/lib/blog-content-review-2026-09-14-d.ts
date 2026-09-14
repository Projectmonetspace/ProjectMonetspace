import type { BlogArticle } from "./blog-types.ts";

export const reviewArticles20260914D: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "OpenAI Agents API",
    "targetSearchIntent": "Understand the OpenAI Agents API, what it does, availability, pricing model, environments, tools, subagents and when to use it",
    "targetQuery": "OpenAI Agents API",
    "slug": "openai-agents-api",
    "title": "OpenAI Agents API: Pricing, Sandboxes, Subagents & How It Works",
    "metaTitle": "OpenAI Agents API: Pricing, Sandboxes, Subagents & How It Works",
    "metaDescription": "OpenAI Agents API is now in public beta. Learn how its Codex harness, hosted sandboxes, MCP tools, long sessions, subagents and usage-based pricing work.",
    "h1": "OpenAI Agents API: Features, Pricing, Sandboxes and How It Works",
    "excerpt": "OpenAI launched the Agents API in public beta on September 10, 2026, giving developers managed access to the same evolving agent harness that powers Codex. The important change is not simply another endpoint: OpenAI is packaging orchestration, long-running session management,…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "OpenAI Agents API: Features, Pricing, Sandboxes and How It Works — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI launched the Agents API in public beta on September 10, 2026, giving developers managed access to the same evolving agent harness that powers Codex. The important change is not simply another endpoint: OpenAI is packaging orchestration, long-running session management, context compaction, tool discovery, programmatic tool calling and multi-agent coordination behind an API while letting developers choose where agent code runs."
          }
        ]
      },
      {
        "id": "what-is-the-openai-agents-api",
        "title": "What is the OpenAI Agents API?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Agents API is a managed cloud-agent API. A developer defines the task, model, tools and environment, and OpenAI runs the agent loop. OpenAI says the harness is based on the open-source Codex harness, while the hosted service maintains the orchestration layer for developers."
          },
          {
            "type": "paragraph",
            "html": "The API is in public beta and available to all developers. OpenAI says there is no separate fee just for using the Agents API; usage is billed through the models and tools the agent consumes. Hosted sandbox/container usage can add infrastructure charges under OpenAI's container pricing, so 'no Agents API fee' should not be read as 'agents are free to run.'"
          }
        ]
      },
      {
        "id": "why-this-launch-matters",
        "title": "Why this launch matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Agent applications usually need more than a model call. They need a loop that can keep state, select tools, recover from partial work, manage long context and coordinate work across multiple steps. OpenAI is moving those responsibilities into a maintained harness rather than requiring each developer to rebuild them."
          },
          {
            "type": "paragraph",
            "html": "That makes the Agents API especially relevant for coding, research, operations, data analysis and business workflows that can run for minutes, hours or potentially days."
          }
        ]
      },
      {
        "id": "long-running-sessions-and-automatic-context-compaction",
        "title": "Long-running sessions and automatic context compaction",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says the API can support workflows spanning multiple context windows. As a session approaches a model's context limit, the harness can automatically compact earlier context while preserving information needed to continue."
          },
          {
            "type": "paragraph",
            "html": "This is important for long tasks because it reduces the amount of custom memory and summarization logic developers need to implement themselves. It does not remove the need to design durable application state, audit logs or domain-specific memory when those are required."
          }
        ]
      },
      {
        "id": "tools-mcp-functions-and-built-in-capabilities",
        "title": "Tools: MCP, functions and built-in capabilities",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Agents API supports MCP servers, custom functions and built-in tools such as web search. OpenAI also describes tool search, which loads relevant tool definitions when needed instead of forcing the full tool catalog into every model turn."
          },
          {
            "type": "paragraph",
            "html": "Programmatic tool calling can run operations in parallel, chain calls and filter or combine tool output in code before returning only relevant information to model context. For tool-heavy agents, that can reduce unnecessary context usage."
          }
        ]
      },
      {
        "id": "multi-agent-and-subagent-support",
        "title": "Multi-agent and subagent support",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The API supports a multi-agent mode in which a main agent can delegate independent pieces of a task to subagents. Each subagent has its own context and the main agent coordinates the results."
          },
          {
            "type": "paragraph",
            "html": "This is useful when a task can be decomposed cleanly: for example, one subagent investigates deployment state, another analyzes logs and another checks dependencies. It is not automatically better for every workflow; parallelism adds cost and coordination overhead when subtasks are tightly coupled."
          }
        ]
      },
      {
        "id": "choose-where-the-agent-works",
        "title": "Choose where the agent works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI separates the harness from the execution environment. Developers can use an OpenAI-hosted sandbox, their own infrastructure, or supported sandbox providers."
          },
          {
            "type": "paragraph",
            "html": "OpenAI lists ecosystem integrations with Blaxel, Cloudflare, Daytona, DigitalOcean, E2B, Modal, Oracle, Runloop and Vercel. These options can differ in CPU/GPU resources, storage, networking, cold-start behavior, VPC deployment and cost."
          }
        ]
      },
      {
        "id": "openai-hosted-sandboxes",
        "title": "OpenAI-hosted sandboxes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's hosted sandbox gives agents an environment to run code, work with files and generate artifacts. Developers can provide files, packages, skills and plugins. OpenAI provisions and manages the environment using infrastructure related to what powers Codex and ChatGPT."
          },
          {
            "type": "paragraph",
            "html": "Hosted sandbox use should be budgeted separately from model tokens. Exact container rates, resource classes and limits should be checked against the current OpenAI pricing and developer documentation before production deployment."
          }
        ]
      },
      {
        "id": "pricing",
        "title": "Pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI states that the Agents API itself adds no separate API fee. Developers pay for the model tokens and tools their agents use. Any hosted sandbox/container costs, external MCP services, third-party APIs, storage or network services can add to the total cost."
          },
          {
            "type": "paragraph",
            "html": "A practical total-cost model is therefore: model usage + OpenAI tool usage + sandbox/container usage + external APIs/services + your own infrastructure."
          }
        ]
      },
      {
        "id": "what-the-agents-api-does-not-remove",
        "title": "What the Agents API does not remove",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The service can reduce orchestration work, but developers still need to define permissions, credentials, environment boundaries, task design, evaluation, observability, failure handling and user experience."
          },
          {
            "type": "paragraph",
            "html": "The public beta designation also matters: request formats, supported models, rate limits, integrations and behavior can change. Production teams should pin supported versions where possible and reverify documentation before deployment."
          }
        ]
      },
      {
        "id": "agents-api-vs-agents-sdk",
        "title": "Agents API vs Agents SDK",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Agents SDK is a developer library for building agent logic. The new Agents API is a managed service that runs the agent harness for you. They overlap conceptually, but the key distinction is operational responsibility: the API moves more of the durable orchestration and harness operation to OpenAI."
          },
          {
            "type": "paragraph",
            "html": "Developers who need deep control or a fully self-operated stack may still prefer SDK-based or custom orchestration. Teams that want to ship long-running cloud agents without maintaining the full loop themselves are the clearest initial fit for the Agents API."
          }
        ]
      },
      {
        "id": "likely-use-cases",
        "title": "Likely use cases",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Long-running coding and repository tasks",
              "Research agents that split work across sources",
              "Operations and incident investigation",
              "Data analysis pipelines with files and code execution",
              "Business workflows combining MCP tools and internal systems",
              "Multi-step automation requiring durable sessions",
              "Agent applications that need generated artifacts"
            ],
            "ordered": false
          }
        ]
      },
      {
        "id": "availability",
        "title": "Availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says the Agents API is available in public beta to all developers as of September 10, 2026. General availability timing has not been announced."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is the OpenAI Agents API free?"
          },
          {
            "type": "paragraph",
            "html": "There is no separate Agents API fee according to OpenAI, but you still pay for model tokens and tools, and hosted sandbox/container usage can add cost."
          },
          {
            "type": "subheading",
            "text": "Does it support MCP?"
          },
          {
            "type": "paragraph",
            "html": "Yes. OpenAI documents MCP support alongside custom functions and built-in tools such as web search."
          },
          {
            "type": "subheading",
            "text": "Can it run multiple agents?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Multi-agent support allows a main agent to delegate work to parallel subagents."
          },
          {
            "type": "subheading",
            "text": "Can I use my own infrastructure?"
          },
          {
            "type": "paragraph",
            "html": "Yes. OpenAI says developers can use OpenAI-hosted sandboxes, their own infrastructure, or supported environment providers."
          },
          {
            "type": "subheading",
            "text": "Is it production-ready?"
          },
          {
            "type": "paragraph",
            "html": "It is publicly accessible, but OpenAI labels it public beta. Treat interfaces and limits as subject to change until GA."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Agents API turns the Codex-style harness into a managed developer primitive. Its strongest value proposition is not a new model but reduced orchestration burden for long-running, tool-using and multi-agent workflows. The biggest questions to monitor next are real-world costs, rate limits, environment constraints, reliability at scale and how quickly the public beta stabilizes."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — introducing the agents api",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "developers.openai.com — agents api",
        "url": "https://developers.openai.com/agents-api/"
      },
      {
        "label": "community.openai.com — 1396481",
        "url": "https://community.openai.com/t/introducing-the-agents-api-and-hosted-sandboxes/1396481"
      }
    ],
    "relatedPaths": [
      "/blog/openai-agents-api-quickstart",
      "/blog/openai-agents-api-sandboxes",
      "/blog/openai-agents-api-multi-agent"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenAI Agents API",
    "targetSearchIntent": "Implement a working Agents API session with a model, tools, MCP and an execution environment",
    "targetQuery": "OpenAI Agents API quickstart",
    "parentSlug": "openai-agents-api",
    "slug": "openai-agents-api-quickstart",
    "title": "OpenAI Agents API Quickstart: Build a Cloud Agent With Tools and MCP",
    "metaTitle": "OpenAI Agents API Quickstart: Tools, MCP & Sessions",
    "metaDescription": "Build a cloud agent with OpenAI Agents API. Learn the session structure, tools, MCP, environment choices, long-running context and production checks.",
    "h1": "OpenAI Agents API Quickstart: Build a Cloud Agent With Tools and MCP",
    "excerpt": "The fastest way to understand OpenAI's Agents API is to treat a session as four decisions: what task the agent owns, which model it uses, which tools it can access, and where it is allowed to work.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "OpenAI Agents API Quickstart: Build a Cloud Agent With Tools and MCP — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The fastest way to understand OpenAI's Agents API is to treat a session as four decisions: what task the agent owns, which model it uses, which tools it can access, and where it is allowed to work."
          }
        ]
      },
      {
        "id": "1-define-the-task-before-the-agent",
        "title": "1. Define the task before the agent",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start with a concrete job. Good agent tasks have a clear outcome, bounded permissions and identifiable evidence of completion. 'Investigate the elevated 5xx rate and save findings' is better than 'look at production.'"
          }
        ]
      },
      {
        "id": "2-create-a-session",
        "title": "2. Create a session",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's launch example creates a beta agent session and supplies an agent configuration, environment and input. The exact SDK surface is beta, so use the current developer docs rather than copying stale examples."
          },
          {
            "type": "paragraph",
            "html": "The basic structure is: choose a model, attach tools, optionally enable multi-agent behavior, choose an environment, then provide the task input."
          }
        ]
      },
      {
        "id": "3-add-tools-deliberately",
        "title": "3. Add tools deliberately",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Agents API supports MCP, custom functions and built-in tools such as web search. For an MCP server, configure the server label and transport to the current documented endpoint."
          },
          {
            "type": "paragraph",
            "html": "Avoid attaching every possible tool by default. OpenAI's tool-search mechanism exists partly to reduce the context and token cost of large tool catalogs by loading relevant definitions when needed."
          }
        ]
      },
      {
        "id": "4-choose-the-execution-environment",
        "title": "4. Choose the execution environment",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Your agent can work in an OpenAI-hosted sandbox, your own infrastructure or a supported provider environment. This choice affects secrets, files, networking, resource sizes, cold starts and cost."
          },
          {
            "type": "paragraph",
            "html": "For prototypes, the OpenAI-hosted sandbox reduces setup work. For regulated or infrastructure-specific workloads, your own VPC or a provider integration may be a better fit."
          }
        ]
      },
      {
        "id": "5-use-files-skills-and-plugins-only-where-needed",
        "title": "5. Use files, skills and plugins only where needed",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI-hosted sandboxes can be configured with files, packages, skills and plugins. Give the agent the minimum environment it needs rather than an unrestricted workspace."
          }
        ]
      },
      {
        "id": "6-let-long-sessions-use-context-compaction",
        "title": "6. Let long sessions use context compaction",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says the harness automatically compacts earlier context as sessions approach context limits. That helps long-running workflows continue across multiple context windows without custom compaction logic."
          },
          {
            "type": "paragraph",
            "html": "Application state still matters. Important business records, approvals and audit data should not exist only inside model context."
          }
        ]
      },
      {
        "id": "7-use-subagents-for-separable-work",
        "title": "7. Use subagents for separable work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Multi-agent mode can help when independent work streams can run in parallel. Keep the main agent responsible for decomposition, constraints and synthesis."
          },
          {
            "type": "paragraph",
            "html": "Avoid subagents when the task is mostly sequential or when every branch depends on the same evolving state; parallelism can increase cost without improving throughput."
          }
        ]
      },
      {
        "id": "8-handle-outputs-as-artifacts-not-just-text",
        "title": "8. Handle outputs as artifacts, not just text",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Agents may create files, code or other artifacts inside their environment. Design your application around the final deliverable: where artifacts are stored, how they are reviewed and which system receives them."
          }
        ]
      },
      {
        "id": "9-budget-every-layer",
        "title": "9. Budget every layer",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says the Agents API itself has no additional fee, but model tokens, tools and hosted environment usage still cost money. Third-party MCP services or sandbox providers may add separate charges."
          },
          {
            "type": "paragraph",
            "html": "Track cost per completed job, not only token price. Long-running agents can use more tools and compute even when the orchestration layer itself is free."
          }
        ]
      },
      {
        "id": "10-production-checklist",
        "title": "10. Production checklist",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Reverify the beta API schema and supported models.",
              "Scope credentials and MCP permissions narrowly.",
              "Define task success and failure states.",
              "Keep durable application state outside transient model context.",
              "Log tool actions and important outputs.",
              "Set cost and runtime guardrails.",
              "Test tool failure, partial completion and retry behavior.",
              "Review files/artifacts before downstream execution when risk is meaningful."
            ],
            "ordered": false
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Agents API quickstart is conceptually simple: task + model + tools + environment. The harder production work remains permissions, evaluation, failure handling and cost control. OpenAI's managed harness reduces orchestration code, but it does not replace application engineering."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — introducing the agents api",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "developers.openai.com — agents api",
        "url": "https://developers.openai.com/agents-api/"
      },
      {
        "label": "community.openai.com — 1396481",
        "url": "https://community.openai.com/t/introducing-the-agents-api-and-hosted-sandboxes/1396481"
      }
    ],
    "relatedPaths": [
      "/blog/openai-agents-api"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenAI Agents API",
    "targetSearchIntent": "Choose the right execution environment for Agents API based on control, files, secrets, networking, compute and cost",
    "targetQuery": "OpenAI Agents API sandbox",
    "parentSlug": "openai-agents-api",
    "slug": "openai-agents-api-sandboxes",
    "title": "OpenAI Agents API Sandboxes: Hosted vs Self-Hosted vs Provider Environments",
    "metaTitle": "OpenAI Agents API Sandboxes: Hosted vs Self-Hosted",
    "metaDescription": "Compare OpenAI-hosted, self-hosted and provider environments for Agents API, including files, secrets, VPC options, compute tradeoffs and cost.",
    "h1": "OpenAI Agents API Sandboxes: Hosted vs Self-Hosted vs Provider Environments",
    "excerpt": "OpenAI designed the Agents API so the managed agent harness and the execution environment are separate choices. That matters because an agent's reasoning layer and the machine where it runs code do not have to come from the same provider.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "OpenAI Agents API Sandboxes: Hosted vs Self-Hosted vs Provider Environments — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI designed the Agents API so the managed agent harness and the execution environment are separate choices. That matters because an agent's reasoning layer and the machine where it runs code do not have to come from the same provider."
          }
        ]
      },
      {
        "id": "the-three-environment-paths",
        "title": "The three environment paths",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI describes three broad options: OpenAI-hosted sandboxes, your own infrastructure, and integrated sandbox providers."
          },
          {
            "type": "paragraph",
            "html": "The best option depends on security, networking, data location, resource requirements, startup latency and cost rather than on the model alone."
          }
        ]
      },
      {
        "id": "openai-hosted-sandbox",
        "title": "OpenAI-hosted sandbox",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's hosted sandbox is the lowest-friction path. It can run code, work with files and produce artifacts, and can be configured with files, packages, skills and plugins."
          },
          {
            "type": "paragraph",
            "html": "Advantages: minimal infrastructure setup, close integration with the Agents API and a straightforward starting point for prototypes or standard workloads."
          },
          {
            "type": "paragraph",
            "html": "Tradeoffs: less infrastructure control than a self-operated environment, separate container/sandbox costs, and beta-era limits that need rechecking before production."
          }
        ]
      },
      {
        "id": "your-own-infrastructure",
        "title": "Your own infrastructure",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A self-managed environment gives the most control over network topology, secrets, storage, observability and compliance boundaries. It can make sense when the agent must access private systems, run inside an existing VPC or use custom hardware and security controls."
          },
          {
            "type": "paragraph",
            "html": "The tradeoff is operational responsibility. You own provisioning, lifecycle management, patching, resource limits, isolation and incident handling."
          }
        ]
      },
      {
        "id": "provider-environments",
        "title": "Provider environments",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI lists first-class ecosystem integrations with Blaxel, Cloudflare, Daytona, DigitalOcean, E2B, Modal, Oracle, Runloop and Vercel."
          },
          {
            "type": "paragraph",
            "html": "Provider environments can sit between the two extremes: more deployment choice than the OpenAI-hosted sandbox with less custom orchestration than building everything yourself. Capabilities vary, so compare the provider's current networking, secrets, region, CPU/GPU, storage, persistence, cold-start and pricing details directly."
          }
        ]
      },
      {
        "id": "how-to-choose",
        "title": "How to choose",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use OpenAI-hosted when speed of setup matters most and its documented limits fit the job."
          },
          {
            "type": "paragraph",
            "html": "Use your own infrastructure when compliance, private networking or deep environment control dominates the decision."
          },
          {
            "type": "paragraph",
            "html": "Use an integrated provider when you need a specific compute/storage/network profile or already operate on that platform."
          }
        ]
      },
      {
        "id": "files-and-artifacts",
        "title": "Files and artifacts",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Agents often need more than ephemeral text. Decide where input files originate, where intermediate files live and how final artifacts are persisted. OpenAI's hosted environment can work with files and artifacts, but long-term storage and business-system records should follow your application's durability requirements."
          }
        ]
      },
      {
        "id": "secrets-and-permissions",
        "title": "Secrets and permissions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Whichever environment you choose, give agents the minimum privileges necessary. Separate read-only investigation tools from mutation-capable tools where possible. Rotate credentials and avoid embedding long-lived secrets directly in prompts or source files."
          }
        ]
      },
      {
        "id": "networking",
        "title": "Networking",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Network access is one of the biggest environment differences. Self-hosted/VPC deployments can offer precise private connectivity, while provider options expose their own egress, allowlist and private-network features. Verify the current behavior rather than assuming all integrations expose the same network model."
          }
        ]
      },
      {
        "id": "cost-model",
        "title": "Cost model",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Environment cost is separate from model usage. A fair comparison includes model tokens, OpenAI tools, sandbox/container time, storage, network/egress, external APIs and engineering/operations overhead."
          }
        ]
      },
      {
        "id": "decision-table",
        "title": "Decision table",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Prototype or standard cloud workflow: start with OpenAI-hosted. Private VPC or strict infrastructure policy: evaluate self-hosted. Specific GPU/CPU profile or existing platform preference: evaluate an integrated provider. High-volume bursty workloads: compare startup behavior and idle economics. Artifact-heavy tasks: compare storage persistence and transfer costs."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Agents API does not force one compute platform. Its architecture deliberately separates harness from sandbox. That flexibility is valuable, but it also means environment choice becomes part of agent design rather than an implementation detail."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — introducing the agents api",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "developers.openai.com — agents api",
        "url": "https://developers.openai.com/agents-api/"
      },
      {
        "label": "community.openai.com — 1396481",
        "url": "https://community.openai.com/t/introducing-the-agents-api-and-hosted-sandboxes/1396481"
      }
    ],
    "relatedPaths": [
      "/blog/openai-agents-api"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenAI Agents API",
    "targetSearchIntent": "Use subagents safely and efficiently for parallel research, coding, analysis and operational workflows",
    "targetQuery": "OpenAI Agents API multi agent",
    "parentSlug": "openai-agents-api",
    "slug": "openai-agents-api-multi-agent",
    "title": "OpenAI Agents API Multi-Agent Guide: Subagents, Parallel Work & Costs",
    "metaTitle": "OpenAI Agents API Multi-Agent Guide: Subagents & Parallel Work",
    "metaDescription": "Learn how Agents API subagents work, when parallel delegation helps, how context is separated, and what to watch for in cost, coordination and reliability.",
    "h1": "OpenAI Agents API Multi-Agent Guide: Subagents, Parallel Work and Costs",
    "excerpt": "OpenAI's Agents API includes native multi-agent support, allowing a main agent to break a complex task into independent pieces and delegate them to subagents that can work in parallel.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "OpenAI Agents API Multi-Agent Guide: Subagents, Parallel Work and Costs — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Agents API includes native multi-agent support, allowing a main agent to break a complex task into independent pieces and delegate them to subagents that can work in parallel."
          }
        ]
      },
      {
        "id": "how-subagents-work",
        "title": "How subagents work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says each subagent maintains its own context while the main agent coordinates assignments and combines results. This is useful because one branch's working notes do not have to crowd every other branch's context."
          },
          {
            "type": "paragraph",
            "html": "The launch example shows multi-agent mode enabled with a maximum number of concurrent subagents. Exact defaults and limits are beta details, so verify the current docs before shipping."
          }
        ]
      },
      {
        "id": "when-parallel-agents-help",
        "title": "When parallel agents help",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Parallel agents are strongest when subtasks are independent and can be evaluated separately. Examples include investigating multiple services during an incident, researching several markets, reviewing separate modules in a repository, or gathering evidence from different data sources."
          },
          {
            "type": "paragraph",
            "html": "If tasks are tightly sequential, parallelism may create more coordination work than value."
          }
        ]
      },
      {
        "id": "design-the-parent-agent-as-a-coordinator",
        "title": "Design the parent agent as a coordinator",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The parent agent should define the objective, split work into bounded assignments, specify evidence requirements, enforce permissions and synthesize results."
          },
          {
            "type": "paragraph",
            "html": "A good delegation gives each subagent a narrow job and a concrete output. 'Check deployment changes in the last hour and return evidence' is better than 'investigate everything.'"
          }
        ]
      },
      {
        "id": "keep-contexts-intentionally-separate",
        "title": "Keep contexts intentionally separate",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Separate contexts help focus, but important shared constraints must be explicitly included in each assignment. Do not assume every subagent automatically knows every decision made elsewhere."
          },
          {
            "type": "paragraph",
            "html": "Use durable files or application state when multiple branches need shared facts that must remain consistent."
          }
        ]
      },
      {
        "id": "tool-permissions",
        "title": "Tool permissions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Not every subagent needs every tool. A research subagent may only require web/search access, while a deployment subagent might need infrastructure APIs. Narrow tool access reduces both risk and context complexity."
          }
        ]
      },
      {
        "id": "cost-and-latency",
        "title": "Cost and latency",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Parallel work can reduce elapsed time while increasing simultaneous model and tool usage. Measure cost per completed task rather than assuming parallel means cheaper."
          },
          {
            "type": "paragraph",
            "html": "Subagents may also duplicate work if decomposition is poor. Add clear scopes and stop conditions."
          }
        ]
      },
      {
        "id": "failure-handling",
        "title": "Failure handling",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Plan for partial success. One subagent can fail while others complete. The coordinator should know whether to retry, continue with missing evidence, request human review or stop the workflow."
          }
        ]
      },
      {
        "id": "good-multi-agent-patterns",
        "title": "Good multi-agent patterns",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Research fan-out: several agents gather evidence, one synthesizes. Code review split: agents inspect different modules, one consolidates findings. Incident investigation: separate agents inspect deployments, errors and dependencies. Data workflow: agents process independent partitions, one validates aggregate results."
          }
        ]
      },
      {
        "id": "bad-multi-agent-patterns",
        "title": "Bad multi-agent patterns",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sequential tasks disguised as parallel work. Multiple agents mutating the same resource without coordination. Broad duplicated assignments with no ownership boundaries. High-risk actions delegated without approval or rollback rules."
          }
        ]
      },
      {
        "id": "production-checklist",
        "title": "Production checklist",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Verify current concurrency limits.",
              "Set narrow subagent scopes.",
              "Give only required tools.",
              "Define shared facts explicitly.",
              "Persist critical state outside model context.",
              "Track cost per branch and total job.",
              "Handle partial failures and retries.",
              "Require approval for high-impact mutations."
            ],
            "ordered": false
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Native subagents make the Agents API more than a single long-running agent loop. The feature can shorten workflows that naturally decompose, but the gain comes from good task architecture, not from multiplying agents by default."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — introducing the agents api",
        "url": "https://openai.com/index/introducing-the-agents-api/"
      },
      {
        "label": "developers.openai.com — agents api",
        "url": "https://developers.openai.com/agents-api/"
      },
      {
        "label": "community.openai.com — 1396481",
        "url": "https://community.openai.com/t/introducing-the-agents-api-and-hosted-sandboxes/1396481"
      }
    ],
    "relatedPaths": [
      "/blog/openai-agents-api"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "North Small Translate 1.0",
    "targetSearchIntent": "Broad model overview covering release, architecture, languages, API access, open weights, licensing, deployment, benchmarks and limitations",
    "targetQuery": "North Small Translate",
    "slug": "north-small-translate",
    "title": "North Small Translate: API, Open Weights, Hardware & Benchmarks",
    "metaTitle": "North Small Translate: API, Open Weights, Hardware & Benchmarks",
    "metaDescription": "Cohere North Small Translate is a 218B MoE translation model for 50 languages. See API access, open weights, hardware, licensing and benchmark claims.",
    "h1": "North Small Translate: Cohere’s Open-Weight Translation Model Explained",
    "excerpt": "Cohere released North Small Translate 1.0 on September 10, 2026 as its first translation-specialized model in the North family. It is an open-weight sparse Mixture-of-Experts model built specifically for machine translation across 50 languages, with multiple deployment paths f…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "North Small Translate: Cohere’s Open-Weight Translation Model Explained — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere released North Small Translate 1.0 on September 10, 2026 as its first translation-specialized model in the North family. It is an open-weight sparse Mixture-of-Experts model built specifically for machine translation across 50 languages, with multiple deployment paths for research, API use and licensed enterprise hosting."
          }
        ]
      },
      {
        "id": "what-is-north-small-translate",
        "title": "What is North Small Translate?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "North Small Translate is a decoder-only sparse MoE model with 218 billion total parameters and 25 billion active parameters per token. Cohere documents 128 experts, eight selected per token, plus shared experts. It supports 16K input tokens and up to 16K output tokens."
          },
          {
            "type": "paragraph",
            "html": "The model is text-in/text-out and is optimized for translation rather than general chat. Cohere says it covers 50 languages including English, Arabic, Hindi, Bengali, Punjabi, Tamil, Telugu, Japanese, Korean, Vietnamese, Indonesian, Thai, Traditional Chinese and Simplified Chinese, plus major European languages."
          }
        ]
      },
      {
        "id": "release-and-availability",
        "title": "Release and availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The model launched publicly on September 10, 2026. Cohere provides several ways to use it:"
          },
          {
            "type": "list",
            "items": [
              "Download official weights from Hugging Face for research and non-commercial use.",
              "Use Cohere's hosted Chat API with model ID north-small-translate-1-0.",
              "Deploy it commercially through Cohere Model Vault.",
              "Access an enterprise localization path through RWS Language Weaver."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Cohere's current model documentation says API usage is free until rate limits are reached. That should not be interpreted as a permanent unlimited free tier; rate limits and commercial terms can change."
          }
        ]
      },
      {
        "id": "open-weights-and-license",
        "title": "Open weights and license",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The official weights are released under CC BY-NC 4.0 with Cohere Labs' Acceptable Use Policy. That makes the public checkpoint suitable for research and non-commercial use, but not a blanket commercial-use license."
          },
          {
            "type": "paragraph",
            "html": "Teams that need commercial deployment should use Cohere's commercial licensing options rather than assuming the Hugging Face license covers production use."
          }
        ]
      },
      {
        "id": "model-architecture",
        "title": "Model architecture",
        "blocks": [
          {
            "type": "paragraph",
            "html": "North Small Translate uses a 218B-parameter sparse MoE design with 25B parameters active per token. The attention stack mixes sliding-window attention with global attention in a 3:1 ratio. Cohere's model card lists a 4,096-token sliding window and 16K total context."
          },
          {
            "type": "paragraph",
            "html": "The important practical point is that active-parameter compute is much smaller than the total model size, but self-hosting still requires enough memory to hold the full checkpoint or an appropriate quantized form."
          }
        ]
      },
      {
        "id": "hardware-and-quantization",
        "title": "Hardware and quantization",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere publishes multiple official weight formats, including BF16, FP8 and NVFP4-style quantized variants. Its launch post lists minimum configurations as low as one B200 or two H100 GPUs for its W4A4 configuration. Cohere's current model documentation separately lists suggested hardware of two H100s or one B200."
          },
          {
            "type": "paragraph",
            "html": "Those numbers are official deployment references, not universal guarantees for every runtime, batch size, concurrency level or context length. Memory and throughput depend heavily on precision, framework and workload."
          }
        ]
      },
      {
        "id": "api-model-id",
        "title": "API model ID",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The hosted model identifier is north-small-translate-1-0. Cohere documents support through its Chat API and Playground. Developers should confirm current endpoint behavior and rate limits before production deployment."
          }
        ]
      },
      {
        "id": "benchmark-results",
        "title": "Benchmark results",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere reports a WMT26 All Languages score of 83.60 for the standard model and 84.36 for an agentic multi-pass translation workflow that attempts to identify and correct translation errors. Cohere's launch material compares those results with systems including DeepL NextGen, Google Translate, Gemma 4 31B and other open models."
          },
          {
            "type": "paragraph",
            "html": "These numbers are Cohere-run evaluations. They are useful evidence about how Cohere positions the model, but they should not be presented as independent proof that North Small Translate is universally better for every language pair or domain."
          },
          {
            "type": "paragraph",
            "html": "Cohere also reports stronger long-document translation performance and up to 1.4× higher output throughput than Gemma 4 31B in its internal tests. Again, these are vendor-reported figures and should be labeled accordingly."
          }
        ]
      },
      {
        "id": "agentic-translation",
        "title": "Agentic translation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere also describes an agentic translation mode that performs an additional pass to find and correct translation errors. In Cohere's own WMT26 evaluation, this increases the score from 83.60 to 84.36."
          },
          {
            "type": "paragraph",
            "html": "This does not mean the base model independently runs an autonomous agent. It is better understood as a multi-pass workflow around the translation model."
          }
        ]
      },
      {
        "id": "pricing",
        "title": "Pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Hosted API documentation currently says North Small Translate is free until rate limits are reached. For commercial dedicated deployment, Cohere's Model Vault pricing is instance-based rather than a simple token price. Its current standard pricing table lists North Small Translate at $57.50 for the relevant flex instance tier, with broader commitment pricing available through Cohere."
          },
          {
            "type": "paragraph",
            "html": "Because the hosted API, Model Vault and RWS paths use different commercial models, there is no single universal 'North Small Translate price.'"
          }
        ]
      },
      {
        "id": "who-is-it-for",
        "title": "Who is it for?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The model is most relevant to teams that need multilingual translation at scale, want sovereign or self-controlled deployment, need open weights for research, or want to integrate translation into developer and enterprise workflows without relying entirely on a closed translation API."
          },
          {
            "type": "paragraph",
            "html": "It is especially interesting for localization, multilingual content operations, customer-support translation, international documentation and high-volume business translation workflows."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The public weights are non-commercial by default. Cohere's strongest benchmark claims are vendor-run. The model is large even though only 25B parameters are active per token. Exact hardware requirements vary by checkpoint and runtime. Hosted API rate limits can change. Translation quality will differ by language pair, domain, terminology and input length."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is North Small Translate open source?"
          },
          {
            "type": "paragraph",
            "html": "The more precise description is open-weight. Cohere publishes model weights under CC BY-NC 4.0 plus its acceptable-use terms, which restrict commercial use."
          },
          {
            "type": "subheading",
            "text": "How many languages does it support?"
          },
          {
            "type": "paragraph",
            "html": "Cohere documents 50 languages."
          },
          {
            "type": "subheading",
            "text": "What is the model size?"
          },
          {
            "type": "paragraph",
            "html": "218B total parameters with 25B active per token."
          },
          {
            "type": "subheading",
            "text": "What is the context window?"
          },
          {
            "type": "paragraph",
            "html": "16K input and 16K maximum output tokens."
          },
          {
            "type": "subheading",
            "text": "Is there an API?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Cohere documents model ID north-small-translate-1-0 in its Chat API."
          },
          {
            "type": "subheading",
            "text": "Is the API free?"
          },
          {
            "type": "paragraph",
            "html": "Cohere currently says the model is free until rate limits are reached. Recheck the official documentation before budgeting production use."
          },
          {
            "type": "subheading",
            "text": "Can I run it locally?"
          },
          {
            "type": "paragraph",
            "html": "Yes, official weights and quantized checkpoints are available, but this is still a very large model. Cohere documents configurations using B200 or H100 GPUs rather than consumer-grade hardware as the baseline deployment target."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "docs.cohere.com — north small translate 1.0",
        "url": "https://docs.cohere.com/docs/north-small-translate-1.0"
      },
      {
        "label": "docs.cohere.com — changelog",
        "url": "https://docs.cohere.com/v2/changelog"
      },
      {
        "label": "cohere.com — north small translate",
        "url": "https://cohere.com/blog/north-small-translate"
      }
    ],
    "relatedPaths": [
      "/blog/run-north-small-translate-locally",
      "/blog/north-small-translate-api"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "North Small Translate 1.0",
    "targetSearchIntent": "Self-hosting/deployment intent: understand official checkpoints, license, quantization choices and realistic Cohere-documented hardware configurations",
    "targetQuery": "how to run North Small Translate locally",
    "parentSlug": "north-small-translate",
    "slug": "run-north-small-translate-locally",
    "title": "How to Run North Small Translate Locally: Weights, Hardware & Quantization",
    "metaTitle": "Run North Small Translate Locally: Hardware & Quantization",
    "metaDescription": "Learn how to self-host North Small Translate using Cohere's official weights, FP8/NVFP4 checkpoints and documented H100/B200 hardware guidance.",
    "h1": "How to Run North Small Translate Locally: Weights, Hardware & Quantization",
    "excerpt": "North Small Translate can be self-hosted because Cohere publishes official weights, but it is not a lightweight local model. The base checkpoint contains 218 billion total parameters, even though only 25 billion are active per token.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Run North Small Translate Locally: Weights, Hardware & Quantization — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "North Small Translate can be self-hosted because Cohere publishes official weights, but it is not a lightweight local model. The base checkpoint contains 218 billion total parameters, even though only 25 billion are active per token."
          }
        ]
      },
      {
        "id": "start-with-the-license",
        "title": "Start with the license",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The official public weights are governed by CC BY-NC 4.0 plus Cohere Labs' Acceptable Use Policy. That means research and non-commercial deployment are the default public-weight use case. Commercial deployment requires a separate Cohere commercial path."
          },
          {
            "type": "paragraph",
            "html": "Do not build a commercial product around the downloaded checkpoint without checking those terms."
          }
        ]
      },
      {
        "id": "official-checkpoints",
        "title": "Official checkpoints",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere publishes the base model plus quantized variants on Hugging Face. The official FP8 checkpoint is W8A8. Cohere's launch material also references lower-precision deployment options including W4A4/NVFP4-style configurations."
          },
          {
            "type": "paragraph",
            "html": "Prefer Cohere-published checkpoints when you need the clearest provenance. Community conversions can be useful, but they should be labeled as community artifacts rather than official Cohere releases."
          }
        ]
      },
      {
        "id": "hardware-guidance",
        "title": "Hardware guidance",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere's launch post lists minimum hardware for its W4A4 deployment path as one B200 or two H100 GPUs. Its model documentation lists suggested hardware of one B200 or two H100s."
          },
          {
            "type": "paragraph",
            "html": "Those are official reference configurations, not a promise that every workload will fit with the same headroom. Batch size, framework overhead, context length, concurrency and KV cache can materially change memory use."
          }
        ]
      },
      {
        "id": "why-active-parameters-do-not-equal-memory-footprint",
        "title": "Why active parameters do not equal memory footprint",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The model activates about 25B parameters per token, but the full sparse expert set still has to be stored somewhere. MoE therefore reduces compute per token more directly than it reduces total model-storage requirements."
          },
          {
            "type": "paragraph",
            "html": "This is why a 218B-total MoE can have lower per-token compute than a dense 218B model while still requiring substantial accelerator memory."
          }
        ]
      },
      {
        "id": "choosing-a-precision",
        "title": "Choosing a precision",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use higher precision when fidelity and reproducibility matter most and you have the hardware. Use FP8 or lower-precision official checkpoints when memory and serving efficiency matter more."
          },
          {
            "type": "paragraph",
            "html": "Quantization can reduce memory and improve throughput, but may change translation quality. Benchmark your actual language pairs rather than assuming near-lossless behavior across every domain."
          }
        ]
      },
      {
        "id": "deployment-workflow",
        "title": "Deployment workflow",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Choose an official checkpoint and verify its license.",
              "Confirm your runtime supports the checkpoint's precision and architecture.",
              "Provision the documented GPU class with enough headroom for your target context and concurrency.",
              "Load the model and run simple source→target translation tests.",
              "Benchmark representative long documents and high-value language pairs.",
              "Compare quality with your current translation system before migration.",
              "Add observability for latency, throughput, errors and quality-review feedback."
            ],
            "ordered": true
          }
        ]
      },
      {
        "id": "long-context-considerations",
        "title": "Long-context considerations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The model supports 16K input and 16K output tokens. Translating long documents in fewer chunks can preserve context, but it also increases memory pressure and may complicate retries or quality review."
          },
          {
            "type": "paragraph",
            "html": "For production localization, chunk boundaries should follow semantic structure—such as sections or paragraphs—rather than arbitrary token counts whenever possible."
          }
        ]
      },
      {
        "id": "commercial-self-hosting",
        "title": "Commercial self-hosting",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Hugging Face weights are non-commercial by default. Organizations that need licensed commercial deployment should evaluate Cohere Model Vault or another Cohere-approved commercial path instead of assuming public weights can be used in revenue-generating production."
          }
        ]
      },
      {
        "id": "what-not-to-claim",
        "title": "What not to claim",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not state that North Small Translate runs on a typical consumer GPU. Do not publish a universal VRAM number unless Cohere documents one for the exact checkpoint/runtime combination. Do not present a community GGUF or conversion as an official Cohere model. Do not treat Cohere's benchmark tables as independent validation."
          }
        ]
      },
      {
        "id": "when-self-hosting-makes-sense",
        "title": "When self-hosting makes sense",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Self-hosting is most attractive when data sovereignty, network isolation, predictable infrastructure, research access or custom serving controls matter. If operational simplicity is the priority, Cohere's hosted API is likely the easier starting point."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "docs.cohere.com — north small translate 1.0",
        "url": "https://docs.cohere.com/docs/north-small-translate-1.0"
      },
      {
        "label": "docs.cohere.com — changelog",
        "url": "https://docs.cohere.com/v2/changelog"
      },
      {
        "label": "cohere.com — north small translate",
        "url": "https://cohere.com/blog/north-small-translate"
      }
    ],
    "relatedPaths": [
      "/blog/north-small-translate"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "North Small Translate 1.0",
    "targetSearchIntent": "Developer implementation intent: use Cohere's hosted North Small Translate API correctly, understand model ID, request path, current free-until-rate-limits status and commercial deployment options",
    "targetQuery": "North Small Translate API",
    "parentSlug": "north-small-translate",
    "slug": "north-small-translate-api",
    "title": "North Small Translate API Guide: Model ID, Setup & Pricing",
    "metaTitle": "North Small Translate API Guide: Model ID, Setup & Pricing",
    "metaDescription": "Use Cohere North Small Translate through the Chat API. See the model ID, setup flow, current pricing status, limits and commercial deployment options.",
    "h1": "North Small Translate API Guide: Model ID, Setup & Pricing",
    "excerpt": "North Small Translate is available through Cohere's hosted API under the model ID north-small-translate-1-0. The API route is the simplest way to evaluate the model without provisioning the large GPU footprint required for self-hosting.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "North Small Translate API Guide: Model ID, Setup & Pricing — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "North Small Translate is available through Cohere's hosted API under the model ID north-small-translate-1-0. The API route is the simplest way to evaluate the model without provisioning the large GPU footprint required for self-hosting."
          }
        ]
      },
      {
        "id": "current-api-status",
        "title": "Current API status",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere's documentation currently says North Small Translate is free for both trial and production keys until rate limits are reached. That wording matters: it does not establish an unlimited permanent free tier, and it does not mean every account has identical throughput."
          },
          {
            "type": "paragraph",
            "html": "Before production use, check the live rate-limit documentation and your account limits."
          }
        ]
      },
      {
        "id": "model-id",
        "title": "Model ID",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use north-small-translate-1-0."
          },
          {
            "type": "paragraph",
            "html": "Cohere lists support through Chat V2, Chat V1 and Chat Completions. For a new integration, use the current recommended API version from Cohere's documentation rather than copying an older example blindly."
          }
        ]
      },
      {
        "id": "basic-workflow",
        "title": "Basic workflow",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Create or use a Cohere API key.",
              "Send the source text to the Chat API with model north-small-translate-1-0.",
              "Tell the model the source and destination language explicitly.",
              "Include terminology or style constraints when they matter.",
              "Validate output on representative domain content before scaling."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "For localization systems, keep stable terminology rules outside the prompt when possible so they can be versioned and tested."
          }
        ]
      },
      {
        "id": "context-and-output-limits",
        "title": "Context and output limits",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The model supports up to 16K input tokens and 16K output tokens. That makes it suitable for long passages and some document-scale workflows, but very large documents may still need chunking or staged processing."
          }
        ]
      },
      {
        "id": "agentic-multi-pass-workflow",
        "title": "Agentic multi-pass workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere reports a stronger WMT26 score when the model is used in an agentic translation flow that identifies and corrects errors in an additional pass. A practical implementation can therefore use two stages: first translation, then targeted review/correction."
          },
          {
            "type": "paragraph",
            "html": "Do not describe this as proof that every double-pass translation is better. The improvement is based on Cohere's own evaluation."
          }
        ]
      },
      {
        "id": "pricing",
        "title": "Pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The hosted model is currently documented as free until rate limits are reached. Cohere does not present that as a permanent universal token price."
          },
          {
            "type": "paragraph",
            "html": "For dedicated commercial deployment, Model Vault uses instance-based pricing. The current standard pricing table lists North Small Translate at $57.50 for its flex performance tier, while commitment and customized pricing require Cohere contact."
          },
          {
            "type": "paragraph",
            "html": "RWS Language Weaver is another enterprise route for organizations that want a full translation/localization platform rather than a raw model API."
          }
        ]
      },
      {
        "id": "when-the-api-is-the-better-choice",
        "title": "When the API is the better choice",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use the hosted API when you want fast evaluation, do not want to operate large GPU infrastructure, or need to integrate translation into an application with minimal deployment overhead."
          },
          {
            "type": "paragraph",
            "html": "Use self-hosting or Model Vault when data control, sovereignty, predictable dedicated capacity or infrastructure isolation matter more than operational simplicity."
          }
        ]
      },
      {
        "id": "production-checklist",
        "title": "Production checklist",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Verify the live model ID and endpoint.",
              "Check current rate limits for your key type.",
              "Test your highest-value language pairs.",
              "Evaluate domain terminology, names and formatting preservation.",
              "Decide whether one-pass or review/correction workflows are appropriate.",
              "Recheck license/commercial terms if moving away from hosted API into downloaded weights.",
              "Track quality regressions when prompts, model versions or chunking logic change."
            ],
            "ordered": false
          }
        ]
      },
      {
        "id": "important-limitation",
        "title": "Important limitation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cohere's public launch benchmarks are not a substitute for evaluating your own language pairs and domain. Machine translation can look strong on aggregate metrics while still failing on terminology, legal language, brand names or low-resource edge cases."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "docs.cohere.com — north small translate 1.0",
        "url": "https://docs.cohere.com/docs/north-small-translate-1.0"
      },
      {
        "label": "docs.cohere.com — changelog",
        "url": "https://docs.cohere.com/v2/changelog"
      },
      {
        "label": "cohere.com — north small translate",
        "url": "https://cohere.com/blog/north-small-translate"
      }
    ],
    "relatedPaths": [
      "/blog/north-small-translate"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Meridian GeoX",
    "targetSearchIntent": "Broad overview intent: understand what Meridian GeoX is, global availability, supported experiment designs, installation, measurement outputs, limits and Meridian MMM integration",
    "targetQuery": "Meridian GeoX",
    "slug": "meridian-geox",
    "title": "Meridian GeoX: Google’s Open-Source Incrementality Tool Explained",
    "metaTitle": "Meridian GeoX: Google’s Open-Source Incrementality Tool",
    "metaDescription": "Learn what Meridian GeoX is, how Google's open-source geo experiments measure incremental marketing lift, supported designs, setup, analysis and MMM calibration.",
    "h1": "Meridian GeoX: How Google’s Open-Source Geo Experiments Work",
    "excerpt": "Google made Meridian GeoX generally available globally on September 10, 2026, turning its previously beta geo-experimentation library into a production-ready part of the broader Meridian measurement stack.",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Meridian GeoX: How Google’s Open-Source Geo Experiments Work — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google made Meridian GeoX generally available globally on September 10, 2026, turning its previously beta geo-experimentation library into a production-ready part of the broader Meridian measurement stack."
          },
          {
            "type": "paragraph",
            "html": "Meridian GeoX is an open-source framework for measuring the incremental impact of marketing by comparing geographically separated treatment and control groups. Unlike click attribution, it is designed to estimate causal lift: what happened because marketing changed, rather than simply which touchpoint received credit."
          }
        ]
      },
      {
        "id": "what-meridian-geox-does",
        "title": "What Meridian GeoX does",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GeoX helps marketers design, run and analyze geographic incrementality experiments. Google documents support for holdback, go-dark, heavy-up and multi-cell experiment designs. The library is publisher-agnostic, so the same methodology can be used to evaluate campaigns across different advertising platforms rather than only Google media."
          }
        ]
      },
      {
        "id": "why-the-global-ga-matters",
        "title": "Why the global GA matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GeoX existed earlier in beta, so the September 10 event is not the first appearance of the product. The material change is general global availability inside Meridian. Google now positions GeoX as a direct way to generate causal evidence that can be used independently or fed back into Meridian Marketing Mix Models."
          }
        ]
      },
      {
        "id": "how-a-geox-experiment-works",
        "title": "How a GeoX experiment works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A typical workflow has several stages:"
          },
          {
            "type": "list",
            "items": [
              "Gather historical geo-level response and spend data.",
              "Choose an experiment type and define operational constraints.",
              "Generate candidate treatment/control assignments and inspect statistical power and minimum detectable effect.",
              "Run the campaign intervention across the selected geographies.",
              "Collect test-period outcomes.",
              "Analyze the result with counterfactual modeling and design-aware inference.",
              "Use the estimated incremental effect for decision-making or Meridian MMM calibration."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "GeoX primarily uses time-based regression for counterfactual analysis and reports metrics such as incremental conversions, percentage lift, confidence intervals, p-values and incremental conversion per dollar. If revenue is used as the response, the resulting measure can be interpreted similarly to incremental ROAS."
          }
        ]
      },
      {
        "id": "supported-experiment-designs",
        "title": "Supported experiment designs",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Holdback tests withhold incremental media from selected geographies. Go-dark tests reduce or stop existing media in treatment regions. Heavy-up tests increase media pressure. Multi-cell designs let teams compare more than one treatment against a common control, reducing the time and cost required for separate experiments."
          },
          {
            "type": "paragraph",
            "html": "The best design depends on business objectives, existing spend and operational constraints. A design that is technically available is not automatically statistically valid for every advertiser."
          }
        ]
      },
      {
        "id": "data-and-feasibility-requirements",
        "title": "Data and feasibility requirements",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Geo experimentation requires sufficient geographic variation, historical data and a test large enough to detect a plausible effect. GeoX calculates minimum detectable effect during the design process and includes validation and quality checks for issues such as missing data, sparse conversions, duplicate rows and unstable geo relationships."
          },
          {
            "type": "paragraph",
            "html": "Google's documentation requires daily data. The library also applies constraints around available geographies and pre-test duration. This means small advertisers or businesses with very limited regional volume may not have enough statistical power for a useful test."
          }
        ]
      },
      {
        "id": "open-source-installation",
        "title": "Open-source installation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meridian GeoX is published under Apache 2.0 and is available on GitHub and PyPI. The standalone package can be installed with pip install --upgrade meridian-geox. Teams using it alongside Meridian can install the combined package through the documented Meridian extras path."
          },
          {
            "type": "paragraph",
            "html": "Python 3.10 or later is required for GeoX alone; Google documents Python 3.11 or later when using GeoX together with Meridian MMM. CPU-based JAX installs automatically, while GPU-backed JAX can be used for heavier simulations."
          }
        ]
      },
      {
        "id": "meridian-mmm-integration",
        "title": "Meridian MMM integration",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest strategic use case is calibration. Marketing mix models estimate channel contribution over time, but they can still contain uncertainty or biased priors. GeoX provides experimental evidence that can be converted into priors for Meridian, grounding the model in observed causal lift."
          },
          {
            "type": "paragraph",
            "html": "Meridian 2.0 can also recommend channels that would benefit from a new incrementality experiment when the model shows high uncertainty, potential bias or implausible ROI behavior."
          }
        ]
      },
      {
        "id": "pricing",
        "title": "Pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GeoX itself is open-source software and Google does not publish a standalone license fee for the library. That does not make geo experiments free. Real cost can include campaign budget changes, analyst time, infrastructure and the opportunity cost of withholding or redistributing media."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Geo experiments measure the effect of a controlled intervention under specific conditions. They do not automatically explain every customer journey, identify individual users or replace all attribution and MMM workflows."
          },
          {
            "type": "paragraph",
            "html": "Results also depend on design quality, geographic isolation, seasonality, sufficient statistical power and accurate conversion/spend data. A poorly powered test can produce an inconclusive answer even when the software works exactly as intended."
          }
        ]
      },
      {
        "id": "meridian-2-0-context",
        "title": "Meridian 2.0 context",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google's September measurement announcement also highlights Meridian 2.0 improvements such as native GeoX calibration, brand-equity signals, agentic skills and a JAX backend. Google's speed and efficiency figures for the new backend are vendor-reported and should not be treated as universal independent benchmarks."
          }
        ]
      },
      {
        "id": "who-should-use-meridian-geox",
        "title": "Who should use Meridian GeoX",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GeoX is most relevant for growth teams, performance marketers, marketing scientists and agencies that spend enough across regions to run controlled geographic tests and want causal evidence beyond platform attribution. Smaller businesses may get more value from simpler conversion measurement until they have enough scale for geo experimentation."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meridian GeoX gives marketers an open-source way to design and analyze cross-platform incrementality tests and then use those results to improve Meridian MMM calibration. Its move to global general availability makes it substantially more important as a practical measurement tool, but successful use still depends on experiment design, statistical power and clean data—not just installing the library."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "blog.google — data strength updates",
        "url": "https://blog.google/products/ads-commerce/data-strength-updates/"
      },
      {
        "label": "developers.google.com — geox",
        "url": "https://developers.google.com/meridian/geox"
      },
      {
        "label": "developers.google.com — intro to geox",
        "url": "https://developers.google.com/meridian/geox/intro-to-geox"
      },
      {
        "label": "github.com — meridian geox",
        "url": "https://github.com/google/meridian-geox"
      },
      {
        "label": "developers.google.com — mmm",
        "url": "https://developers.google.com/meridian/mmm"
      },
      {
        "label": "developers.google.com — notebook",
        "url": "https://developers.google.com/meridian/geox/notebook"
      },
      {
        "label": "developers.google.com — meridian",
        "url": "https://developers.google.com/meridian"
      },
      {
        "label": "developers.google.com — intro to analysis",
        "url": "https://developers.google.com/meridian/geox/intro-to-analysis"
      },
      {
        "label": "developers.google.com — channel recommendation",
        "url": "https://developers.google.com/meridian/docs/post-modeling/channel-recommendation"
      },
      {
        "label": "developers.google.com — intro to design",
        "url": "https://developers.google.com/meridian/geox/intro-to-design"
      },
      {
        "label": "developers.google.com — prepare your analysis data",
        "url": "https://developers.google.com/meridian/geox/prepare-your-analysis-data"
      },
      {
        "label": "developers.google.com — data validation and quality checks",
        "url": "https://developers.google.com/meridian/geox/data-validation-and-quality-checks"
      },
      {
        "label": "developers.google.com — troubleshooting",
        "url": "https://developers.google.com/meridian/geox/troubleshooting"
      }
    ],
    "relatedPaths": [
      "/blog/meridian-geox-mmm-calibration",
      "/blog/how-to-use-meridian-geox"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Meridian GeoX",
    "targetSearchIntent": "Model-calibration intent: understand how GeoX incrementality results become causal priors for Meridian MMM and how Meridian identifies channels that benefit from experiments",
    "targetQuery": "Meridian GeoX MMM calibration",
    "parentSlug": "meridian-geox",
    "slug": "meridian-geox-mmm-calibration",
    "title": "How to Calibrate Google Meridian MMM With GeoX Experiments",
    "metaTitle": "Meridian GeoX MMM Calibration: Use Experiments as Priors",
    "metaDescription": "Learn how Meridian GeoX experiment results can calibrate Google Meridian MMM ROI priors, how channel recommendations work, and what to verify before using lift results.",
    "h1": "How to Calibrate Google Meridian MMM With GeoX Experiments",
    "excerpt": "One of the most important uses of Meridian GeoX is not the geo test itself. It is using experimental lift as evidence to calibrate Google Meridian's Marketing Mix Model.",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Calibrate Google Meridian MMM With GeoX Experiments — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One of the most important uses of Meridian GeoX is not the geo test itself. It is using experimental lift as evidence to calibrate Google Meridian's Marketing Mix Model."
          },
          {
            "type": "paragraph",
            "html": "MMM and incrementality experiments answer related but different questions. MMM estimates how channels contribute over time using historical data and a statistical model. A randomized or well-designed geo experiment creates direct causal evidence for a specific intervention. Meridian 2.0 now connects those workflows more tightly."
          }
        ]
      },
      {
        "id": "why-calibration-matters",
        "title": "Why calibration matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A marketing mix model depends partly on prior assumptions and the information contained in historical data. When a channel has high uncertainty, potential bias or implausible ROI estimates, an incrementality experiment can provide stronger evidence about its true causal effect."
          },
          {
            "type": "paragraph",
            "html": "GeoX produces lift estimates that can be converted into priors for Meridian. Instead of relying only on the model's default or weakly informed ROI assumptions, the calibrated model can incorporate evidence from a controlled campaign intervention."
          }
        ]
      },
      {
        "id": "step-1-identify-channels-worth-testing",
        "title": "Step 1: identify channels worth testing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meridian's model-health workflow can generate a channel calibration recommendation and score. Google says this recommendation combines signals such as implausible ROI, high ROI variance and potential bias to identify channels that would benefit most from experimental calibration."
          },
          {
            "type": "paragraph",
            "html": "This is useful because running incrementality tests on every channel is expensive and operationally difficult. The goal is to prioritize tests where new evidence can materially improve the model."
          }
        ]
      },
      {
        "id": "step-2-design-the-geox-experiment",
        "title": "Step 2: design the GeoX experiment",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use Meridian GeoX to create a test that isolates the target channel or media intervention across geographic treatment and control groups. The experiment must be feasible, sufficiently powered and aligned with the channel question Meridian surfaced."
          },
          {
            "type": "paragraph",
            "html": "The MMM recommendation is not proof that a valid geo experiment is possible. You still need adequate geographic data, spend, volume and a realistic MDE."
          }
        ]
      },
      {
        "id": "step-3-run-and-analyze-the-test",
        "title": "Step 3: run and analyze the test",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After the experiment, GeoX estimates incremental conversions or revenue and quantifies uncertainty. The analysis uses the original design plus test-period time series and returns lift estimates, confidence intervals, significance measures and economic metrics such as incremental conversion per dollar."
          },
          {
            "type": "paragraph",
            "html": "Only high-quality experimental results should be used for calibration. A noisy, underpowered or operationally contaminated experiment can inject poor information into the MMM rather than improve it."
          }
        ]
      },
      {
        "id": "step-4-convert-the-result-into-a-meridian-prior",
        "title": "Step 4: convert the result into a Meridian prior",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google provides a dedicated GeoX calibration workflow and Colab example that transforms experiment results into priors suitable for Meridian. This lets the Bayesian model use the experimental evidence when estimating channel ROI."
          },
          {
            "type": "paragraph",
            "html": "Conceptually, the experiment narrows the plausible range for the channel's true effect. The strength of that evidence should reflect the experiment's uncertainty rather than treating a single lift estimate as perfectly known."
          }
        ]
      },
      {
        "id": "step-5-refit-and-compare-the-model",
        "title": "Step 5: refit and compare the model",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After calibration, rerun Meridian and compare model health, ROI distributions and downstream budget recommendations. Calibration should improve the model's grounding, but it can also reveal tension between historical patterns and experimental evidence."
          },
          {
            "type": "paragraph",
            "html": "That disagreement is useful. It can indicate that earlier priors were unrealistic, historical data contains confounding, the experiment covered a different operating regime, or the channel effect changes over time."
          }
        ]
      },
      {
        "id": "do-not-overgeneralize-one-experiment",
        "title": "Do not overgeneralize one experiment",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A GeoX test estimates effect under specific geographies, dates, campaign settings and budget levels. It does not prove the same ROI at every future spend level or in every market."
          },
          {
            "type": "paragraph",
            "html": "If the campaign environment changes materially, a later experiment may be needed. Calibration is evidence-based model improvement, not a permanent truth certificate."
          }
        ]
      },
      {
        "id": "where-full-funnel-signals-fit",
        "title": "Where full-funnel signals fit",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meridian 2.0 also supports brand-equity signals such as branded Google Query Volume to help model indirect upper-funnel effects. That is complementary to GeoX, not a replacement for experimentation. Brand signals help explain historical pathways; GeoX can provide causal evidence about what actually changed when media exposure changed."
          }
        ]
      },
      {
        "id": "a-practical-decision-rule",
        "title": "A practical decision rule",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use MMM to identify where uncertainty matters most. Use GeoX to generate causal evidence for one of those high-value questions. Feed that evidence back into Meridian as a calibrated prior. Then inspect whether the model becomes more credible and decision-useful."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Meridian + GeoX workflow creates a feedback loop between observational modeling and controlled experimentation. MMM tells you where the model is uncertain; GeoX can test a high-value channel; the experiment then improves the next version of the MMM. That loop is more useful than treating either methodology as a standalone source of truth."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "blog.google — data strength updates",
        "url": "https://blog.google/products/ads-commerce/data-strength-updates/"
      },
      {
        "label": "developers.google.com — geox",
        "url": "https://developers.google.com/meridian/geox"
      },
      {
        "label": "developers.google.com — intro to geox",
        "url": "https://developers.google.com/meridian/geox/intro-to-geox"
      },
      {
        "label": "github.com — meridian geox",
        "url": "https://github.com/google/meridian-geox"
      },
      {
        "label": "developers.google.com — mmm",
        "url": "https://developers.google.com/meridian/mmm"
      },
      {
        "label": "developers.google.com — notebook",
        "url": "https://developers.google.com/meridian/geox/notebook"
      },
      {
        "label": "developers.google.com — meridian",
        "url": "https://developers.google.com/meridian"
      },
      {
        "label": "developers.google.com — intro to analysis",
        "url": "https://developers.google.com/meridian/geox/intro-to-analysis"
      },
      {
        "label": "developers.google.com — channel recommendation",
        "url": "https://developers.google.com/meridian/docs/post-modeling/channel-recommendation"
      },
      {
        "label": "developers.google.com — intro to design",
        "url": "https://developers.google.com/meridian/geox/intro-to-design"
      },
      {
        "label": "developers.google.com — prepare your analysis data",
        "url": "https://developers.google.com/meridian/geox/prepare-your-analysis-data"
      },
      {
        "label": "developers.google.com — data validation and quality checks",
        "url": "https://developers.google.com/meridian/geox/data-validation-and-quality-checks"
      },
      {
        "label": "developers.google.com — troubleshooting",
        "url": "https://developers.google.com/meridian/geox/troubleshooting"
      }
    ],
    "relatedPaths": [
      "/blog/meridian-geox"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Meridian GeoX",
    "targetSearchIntent": "Implementation intent: install GeoX, prepare pretest data, choose an experiment type, generate a powered design, run the test and analyze incremental lift",
    "targetQuery": "how to use Meridian GeoX",
    "parentSlug": "meridian-geox",
    "slug": "how-to-use-meridian-geox",
    "title": "How to Run a Meridian GeoX Experiment: Setup, Design & Analysis",
    "metaTitle": "How to Use Meridian GeoX: Setup, Design & Analysis",
    "metaDescription": "A practical guide to installing Meridian GeoX, preparing geo-level data, choosing holdback/go-dark/heavy-up tests, checking MDE and analyzing incremental lift.",
    "h1": "How to Run a Meridian GeoX Experiment",
    "excerpt": "Meridian GeoX is designed to take a marketing incrementality test from experiment design through post-test analysis. The library is open source, but a valid test still requires enough historical data, geographic volume and statistical power.",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Run a Meridian GeoX Experiment — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meridian GeoX is designed to take a marketing incrementality test from experiment design through post-test analysis. The library is open source, but a valid test still requires enough historical data, geographic volume and statistical power."
          }
        ]
      },
      {
        "id": "1-install-the-library",
        "title": "1. Install the library",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google publishes Meridian GeoX on PyPI and GitHub. For GeoX alone, use Python 3.10 or later and install the latest package with pip install --upgrade meridian-geox. If you are combining it with Meridian MMM, Google documents Python 3.11 or later and a combined Meridian installation path."
          },
          {
            "type": "paragraph",
            "html": "GeoX uses JAX. CPU-based JAX installs automatically; GPU-backed JAX is optional for heavier simulations."
          }
        ]
      },
      {
        "id": "2-decide-what-you-are-testing",
        "title": "2. Decide what you are testing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before touching code, define the marketing intervention and the causal question. GeoX supports several designs:"
          },
          {
            "type": "list",
            "items": [
              "Holdback: withhold incremental media from selected geographies.",
              "Go-dark: reduce or stop an existing campaign in treatment geographies.",
              "Heavy-up: increase spend or media pressure in treatment geographies.",
              "Multi-cell: compare multiple treatments against a common control."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Choose the design based on the business decision you need to make, not whichever option sounds easiest to implement."
          }
        ]
      },
      {
        "id": "3-prepare-pretest-data",
        "title": "3. Prepare pretest data",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GeoX expects daily geo-level time-series data. Core fields include date, location and conversions; spend can be included for media tests. The framework validates schema and data quality before generating a design."
          },
          {
            "type": "paragraph",
            "html": "Google's documentation requires enough pretest history relative to the planned experiment duration. Sparse data, missing days, duplicate rows, zero-response geographies and very high geo cardinality can weaken or invalidate a design."
          }
        ]
      },
      {
        "id": "4-define-constraints",
        "title": "4. Define constraints",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Real campaigns cannot always randomize every region freely. GeoX lets you exclude locations and define operational or statistical constraints so the design reflects what the business can actually execute."
          },
          {
            "type": "paragraph",
            "html": "This is important because a mathematically attractive assignment is useless if the media team cannot implement it without disrupting critical markets."
          }
        ]
      },
      {
        "id": "5-generate-candidate-designs",
        "title": "5. Generate candidate designs",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The design stage assigns geographies to treatment and control groups and estimates how sensitive the test will be. One of the most important outputs is minimum detectable effect, or MDE: the smallest lift the experiment is powered to detect."
          },
          {
            "type": "paragraph",
            "html": "A large MDE means the test may only detect very large effects. If your realistic expected lift is smaller than the design's MDE, the test is underpowered for the question you care about."
          }
        ]
      },
      {
        "id": "6-validate-the-design",
        "title": "6. Validate the design",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not treat the first valid split as production-ready. Inspect fit, historical stability, budget requirements and placebo/A-A behavior where appropriate. Google specifically warns that seasonality and unstable treatment/control relationships can undermine a geo test."
          },
          {
            "type": "paragraph",
            "html": "For highly seasonal businesses, use more historical data and validate against comparable peak periods rather than relying only on the minimum history requirement."
          }
        ]
      },
      {
        "id": "7-implement-the-campaign-change",
        "title": "7. Implement the campaign change",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once treatment and control assignments are finalized, apply the planned budget or campaign intervention in the ad platform. Keep the assignment stable for the full test window and avoid unrelated changes that affect only one group."
          },
          {
            "type": "paragraph",
            "html": "GeoX is publisher-agnostic, so implementation may happen in Google Ads, another ad platform or across channels. The library does not automate every media-buying step for you."
          }
        ]
      },
      {
        "id": "8-collect-analysis-data",
        "title": "8. Collect analysis data",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After the test, prepare geo-level response and spend data covering both the pretest and test periods. The analysis dataset needs to match the original design's treatment/control geography set."
          },
          {
            "type": "paragraph",
            "html": "GeoX can include a cooldown period when the campaign effect is expected to persist after the intervention ends."
          }
        ]
      },
      {
        "id": "9-run-the-analysis",
        "title": "9. Run the analysis",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Load the saved design, define AnalysisConfig with the test dates and run the documented analysis workflow. GeoX uses counterfactual modeling, primarily time-based regression, to estimate what likely would have happened without the intervention."
          },
          {
            "type": "paragraph",
            "html": "The framework then applies design-aware inference to estimate statistical significance while respecting the optimized geo-assignment process."
          }
        ]
      },
      {
        "id": "10-interpret-the-outputs",
        "title": "10. Interpret the outputs",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Useful outputs include incremental conversions, percentage lift, confidence intervals, p-values and incremental conversions per dollar. If the response metric is revenue, the economic output can be interpreted in an incremental-ROAS style."
          },
          {
            "type": "paragraph",
            "html": "A non-significant result is not automatically a failed campaign. It can also mean the test lacked power, the intervention was too small, the geo relationship was unstable or the true effect is close to zero."
          }
        ]
      },
      {
        "id": "common-mistakes",
        "title": "Common mistakes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not run a geo test with an MDE much larger than the effect you realistically expect. Do not mix weekly and daily input granularity. Do not change geo assignments after the experiment begins. Do not ignore seasonality or major local events. And do not treat observational lift as causal if the actual intervention was not controlled."
          }
        ]
      },
      {
        "id": "when-to-connect-geox-to-meridian-mmm",
        "title": "When to connect GeoX to Meridian MMM",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If you also use Meridian, a well-designed GeoX result can be converted into a prior that calibrates channel ROI estimates. That is a separate modeling step, not required to use GeoX itself."
          }
        ]
      },
      {
        "id": "practical-takeaway",
        "title": "Practical takeaway",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The code is the easy part. The hardest work in GeoX is choosing a test that the business can execute, has enough statistical power, and stays clean long enough to produce interpretable causal evidence."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "blog.google — data strength updates",
        "url": "https://blog.google/products/ads-commerce/data-strength-updates/"
      },
      {
        "label": "developers.google.com — geox",
        "url": "https://developers.google.com/meridian/geox"
      },
      {
        "label": "developers.google.com — intro to geox",
        "url": "https://developers.google.com/meridian/geox/intro-to-geox"
      },
      {
        "label": "github.com — meridian geox",
        "url": "https://github.com/google/meridian-geox"
      },
      {
        "label": "developers.google.com — mmm",
        "url": "https://developers.google.com/meridian/mmm"
      },
      {
        "label": "developers.google.com — notebook",
        "url": "https://developers.google.com/meridian/geox/notebook"
      },
      {
        "label": "developers.google.com — meridian",
        "url": "https://developers.google.com/meridian"
      },
      {
        "label": "developers.google.com — intro to analysis",
        "url": "https://developers.google.com/meridian/geox/intro-to-analysis"
      },
      {
        "label": "developers.google.com — channel recommendation",
        "url": "https://developers.google.com/meridian/docs/post-modeling/channel-recommendation"
      },
      {
        "label": "developers.google.com — intro to design",
        "url": "https://developers.google.com/meridian/geox/intro-to-design"
      },
      {
        "label": "developers.google.com — prepare your analysis data",
        "url": "https://developers.google.com/meridian/geox/prepare-your-analysis-data"
      },
      {
        "label": "developers.google.com — data validation and quality checks",
        "url": "https://developers.google.com/meridian/geox/data-validation-and-quality-checks"
      },
      {
        "label": "developers.google.com — troubleshooting",
        "url": "https://developers.google.com/meridian/geox/troubleshooting"
      }
    ],
    "relatedPaths": [
      "/blog/meridian-geox"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Cursor Projects",
    "targetSearchIntent": "Broad overview of Cursor Projects, including coordinator agents, subagent delegation, persistent shared context, cloud execution, subscriptions, beta availability, use cases and limitations",
    "targetQuery": "Cursor Projects",
    "slug": "cursor-projects",
    "title": "Cursor Projects: Thousands of AI Coding Agents, Shared Context & Automation",
    "metaTitle": "Cursor Projects: Thousands of AI Coding Agents & Automation",
    "metaDescription": "Cursor Projects coordinates long-running software work across cloud agents, shared context, Slack, GitHub and schedules. Here’s how it works and what the beta changes.",
    "h1": "Cursor Projects Coordinates Thousands of AI Coding Agents for Long-Running Software Work",
    "excerpt": "Cursor launched Projects on September 10, 2026 as a new way to manage software work that is too large or too persistent for a single agent conversation. Instead of asking one coding agent to complete one task, a Project gives you a coordinator agent that plans a larger body of…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Cursor Projects Coordinates Thousands of AI Coding Agents for Long-Running Software Work — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor launched Projects on September 10, 2026 as a new way to manage software work that is too large or too persistent for a single agent conversation. Instead of asking one coding agent to complete one task, a Project gives you a coordinator agent that plans a larger body of work, delegates implementation to other agents, keeps shared context over time and can react to new events without waiting for another prompt."
          },
          {
            "type": "paragraph",
            "html": "The simplest way to think about Cursor Projects is as an orchestration layer above Cursor’s existing Cloud Agents. The coordinator does not primarily write the code itself. Cursor says it plans the work, creates and manages agents, sends them out to implement or investigate pieces of the project, and brings the results back for review."
          }
        ]
      },
      {
        "id": "what-launched-with-cursor-projects",
        "title": "What launched with Cursor Projects?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects entered beta on September 10, with Cursor saying rollout to all users started that day. The feature appears in the left-hand navigation and is designed for work that can span many tasks, pull requests or weeks of iteration."
          },
          {
            "type": "paragraph",
            "html": "Cursor highlights four core ideas: coordinator-led delegation, cloud execution, shared project context and subscriptions."
          },
          {
            "type": "paragraph",
            "html": "The most attention-grabbing claim is scale. Cursor says a Project can delegate work to thousands of subagents and run as many in parallel as the work requires. That should be read as a first-party product capability claim, not as proof that ordinary projects will use thousands of agents or that more parallel agents automatically produce better software."
          }
        ]
      },
      {
        "id": "the-coordinator-agent-does-the-planning",
        "title": "The coordinator agent does the planning",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The coordinator is the control layer. According to Cursor, it does not simply behave like another coding chat. Its job is to break down the work, decide what can be delegated, create agents for those tasks and assemble the results for the user to inspect."
          },
          {
            "type": "paragraph",
            "html": "That changes the interaction model. Instead of manually opening several agent sessions and keeping their context synchronized yourself, you describe a larger outcome — for example a feature, migration or application — and let the Project coordinate the execution."
          },
          {
            "type": "paragraph",
            "html": "For teams already using coding agents, this is an important shift from agent assistance toward agent management."
          }
        ]
      },
      {
        "id": "projects-run-on-cloud-agents",
        "title": "Projects run on cloud agents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A Project runs on its own cloud computer, so closing your laptop does not stop the work. Cursor says the coordinator can continue operating remotely and, when something specifically needs to run on your machine, start a local agent there."
          },
          {
            "type": "paragraph",
            "html": "This split matters for long-running development. Research, code changes and parallel work can continue in cloud environments, while local-only tests or access can be handed to an agent operating on the developer’s machine when needed."
          },
          {
            "type": "paragraph",
            "html": "Cursor had already been expanding Cloud Agents before Projects. The September launch packages those capabilities into a persistent project-level workflow rather than requiring users to orchestrate individual cloud-agent conversations manually."
          }
        ]
      },
      {
        "id": "shared-context-persists-across-agents",
        "title": "Shared context persists across agents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One of the more practical parts of Projects is its shared context. Cursor says each Project maintains a set of files synchronized across the cloud and local machines used by its agents."
          },
          {
            "type": "paragraph",
            "html": "Agents can add research, artifacts, codebase knowledge, testing instructions and information about how the user prefers work to be done. Future agents can then reuse that material instead of rediscovering it from scratch."
          },
          {
            "type": "paragraph",
            "html": "Cursor gives a simple example: if one agent figures out how to test a service, later agents can use those instructions. Over time, the Project’s shared context becomes a reusable operating memory for that body of work."
          },
          {
            "type": "paragraph",
            "html": "This is different from assuming the model has perfect memory. The useful part is the explicit shared project material that can be reused by future agents. Teams should still treat important architectural decisions, credentials and production procedures with the same review and access-control discipline they would apply to any developer tooling."
          }
        ]
      },
      {
        "id": "subscriptions-make-projects-reactive",
        "title": "Subscriptions make Projects reactive",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects can also act when something changes rather than only when a person types a new prompt."
          },
          {
            "type": "paragraph",
            "html": "Cursor’s documentation calls these event-driven waits Subscriptions. A cloud agent can subscribe to events, end its turn and wake when a matching event arrives. Supported event sources documented by Cursor include GitHub, Slack, Linear and timers."
          },
          {
            "type": "paragraph",
            "html": "Examples include opening a pull request and continuing when CI fails or a reviewer comments, waiting for someone to answer a question in Slack, responding when a Linear issue changes, or waking on a one-off or recurring timer."
          },
          {
            "type": "paragraph",
            "html": "For Projects, Cursor gives examples such as watching a Slack bug-report channel, following pull requests or running on a schedule. That makes a Project useful for recurring engineering work as well as one-time feature development."
          }
        ]
      },
      {
        "id": "how-cursor-says-it-uses-projects-internally",
        "title": "How Cursor says it uses Projects internally",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor describes three major internal patterns: feature work, migrations and what it calls gardening."
          },
          {
            "type": "paragraph",
            "html": "For feature work, agents research the system, record shared context and implement different parts of the plan in parallel. When a feature is ready to test, a local agent can be started on the developer’s computer. After release, the Project can continue monitoring for bug reports."
          },
          {
            "type": "paragraph",
            "html": "For migrations, Cursor says it has used Projects to carry changes across hundreds of pull requests. The coordinator applies a chosen approach incrementally, with humans reviewing closely at first and reducing oversight as the pattern proves reliable."
          },
          {
            "type": "paragraph",
            "html": "Gardening is the category for work that never fully ends: maintaining code quality, watching regressions or enforcing a design system. Cursor describes an internal Project that scans new pull requests and is expected to touch 20 to 100 PRs per day. That is a vendor example, not an independent productivity benchmark."
          }
        ]
      },
      {
        "id": "cursor-projects-vs-cursor-automations",
        "title": "Cursor Projects vs Cursor Automations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects overlap with Cursor Automations, but they are not exactly the same concept."
          },
          {
            "type": "paragraph",
            "html": "Automations are trigger-driven Cloud Agent jobs configured around schedules or external events. Projects are broader persistent workspaces coordinated around a long-lived body of work, with shared context and a coordinator that can delegate many tasks."
          },
          {
            "type": "paragraph",
            "html": "A Project can itself use subscription-style behavior, which means the boundaries can look similar in practice. The useful distinction is that an Automation starts from a trigger-and-instruction workflow, while a Project is organized around an enduring software objective and the context accumulated around it."
          },
          {
            "type": "paragraph",
            "html": "Cursor’s product may continue evolving during beta, so teams should verify current documentation before designing important production workflows around this distinction."
          }
        ]
      },
      {
        "id": "what-can-you-use-cursor-projects-for",
        "title": "What can you use Cursor Projects for?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest use cases are jobs that outlive a normal coding chat: multi-PR features, framework migrations, recurring maintenance, bug triage, code-quality programs, design-system cleanup and software work that depends on repeated feedback from CI, GitHub or Slack."
          },
          {
            "type": "paragraph",
            "html": "For small teams, the practical value may be coordination rather than raw scale. Even if a Project uses only a handful of agents, persistent context and event-driven continuation can reduce the repeated setup involved in long-running tasks."
          },
          {
            "type": "paragraph",
            "html": "For larger engineering organizations, the potential value is broader orchestration: different agents can research, implement and test separate slices of work while the coordinator maintains the overall plan."
          }
        ]
      },
      {
        "id": "availability-and-pricing",
        "title": "Availability and pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor says Projects are in beta and began rolling out to all users on September 10, 2026."
          },
          {
            "type": "paragraph",
            "html": "The launch post does not provide a separate Projects price or a universal hard limit on the number of subagents a user can consume. Cursor already sells multiple plans with different agent access and usage economics, so the actual cost of a large Project can depend on the user’s plan, model usage and Cloud Agent consumption."
          },
          {
            "type": "paragraph",
            "html": "Do not interpret “rolling out to all users” as a guarantee that every account has immediate access at the same moment. Beta releases can be phased."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects are new and beta-stage. Cursor’s claims about thousands of agents, internal migrations and recurring work come from Cursor itself. Independent evidence about reliability, cost efficiency and quality at very large agent counts is still limited."
          },
          {
            "type": "paragraph",
            "html": "More agents also create more coordination surfaces. Parallel work can conflict, tests can fail, and generated changes still require review. A coordinator reduces manual orchestration but does not eliminate the need for engineering judgment."
          },
          {
            "type": "paragraph",
            "html": "The shared-context system should also not be treated as magical or infallible memory. Teams should keep important documentation explicit and review what agents record and reuse."
          },
          {
            "type": "paragraph",
            "html": "Finally, Projects-specific pricing and hard resource limits were not clearly published in the launch materials reviewed for this article. Those details should be rechecked as the beta evolves."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "What is Cursor Projects?"
          },
          {
            "type": "paragraph",
            "html": "Cursor Projects is a beta feature that gives users a coordinator agent for larger, long-running software work. It can plan work, delegate tasks to other agents, maintain shared context and react to external events."
          },
          {
            "type": "subheading",
            "text": "When did Cursor Projects launch?"
          },
          {
            "type": "paragraph",
            "html": "Cursor announced Projects on September 10, 2026 and said the beta was beginning to roll out to all users that day."
          },
          {
            "type": "subheading",
            "text": "Can Cursor Projects use multiple AI agents?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Cursor says the coordinator can create and manage many agents in parallel and can delegate to thousands of subagents when needed. That scale statement is a vendor capability claim rather than an independent benchmark."
          },
          {
            "type": "subheading",
            "text": "Does a Cursor Project keep running when I close my laptop?"
          },
          {
            "type": "paragraph",
            "html": "Cursor says Projects run on cloud computers, so cloud work can continue after the local machine is closed. The coordinator can also start a local agent when a task needs to run on the user’s machine."
          },
          {
            "type": "subheading",
            "text": "Can Cursor Projects watch Slack or GitHub?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Cursor documents subscriptions that can react to Slack messages, GitHub pull-request activity, Linear events and timers. Projects can use these patterns to continue work without waiting for a fresh manual prompt."
          },
          {
            "type": "subheading",
            "text": "Does Cursor Projects have a separate price?"
          },
          {
            "type": "paragraph",
            "html": "Cursor did not publish a standalone Projects price in the launch materials reviewed here. Cost depends on the applicable Cursor plan and agent usage, so current pricing should be checked before running large workflows."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "cursor.com — projects",
        "url": "https://cursor.com/blog/projects"
      },
      {
        "label": "cursor.com — projects",
        "url": "https://cursor.com/changelog/projects"
      },
      {
        "label": "cursor.com — capabilities",
        "url": "https://cursor.com/docs/cloud-agent/capabilities"
      },
      {
        "label": "cursor.com — 08 19 26",
        "url": "https://cursor.com/changelog/08-19-26"
      }
    ],
    "relatedPaths": [
      "/blog/cursor-projects-subscriptions",
      "/blog/how-to-use-cursor-projects"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Cursor Projects",
    "targetSearchIntent": "Event-driven and recurring workflow guide for using Cursor subscriptions with GitHub, Slack, Linear and timers so a Project or Cloud Agent can pause and resume with the same context",
    "targetQuery": "Cursor Projects subscriptions",
    "parentSlug": "cursor-projects",
    "slug": "cursor-projects-subscriptions",
    "title": "Cursor Projects Subscriptions: Slack, GitHub & Scheduled Workflows",
    "metaTitle": "Cursor Projects Subscriptions: Slack, GitHub & Schedules",
    "metaDescription": "Cursor subscriptions let cloud agents pause and resume on GitHub, Slack, Linear or timer events. Here’s how event-driven Cursor Projects workflows work and what to watch.",
    "h1": "Cursor Projects Subscriptions: Slack, GitHub, Linear and Scheduled Agent Workflows",
    "excerpt": "Cursor Projects can do more than run a long sequence of coding tasks. Through Cursor’s subscription system, a cloud agent can pause, wait for something to happen and then continue in the same conversation with the context it already built.",
    "category": "Automation",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Cursor Projects Subscriptions: Slack, GitHub, Linear and Scheduled Agent Workflows — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor Projects can do more than run a long sequence of coding tasks. Through Cursor’s subscription system, a cloud agent can pause, wait for something to happen and then continue in the same conversation with the context it already built."
          },
          {
            "type": "paragraph",
            "html": "That event-driven behavior is what makes a Project useful for recurring engineering work such as following pull requests, reacting to CI failures, waiting for a teammate in Slack or running maintenance on a schedule."
          },
          {
            "type": "paragraph",
            "html": "Subscriptions existed as a Cloud Agent capability before the September 10, 2026 Projects launch. Projects makes them more useful by placing them inside a persistent project-level workflow with shared context and a coordinator."
          }
        ]
      },
      {
        "id": "what-is-a-cursor-subscription",
        "title": "What is a Cursor subscription?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor’s documentation describes a subscription as an event-driven wait. A cloud agent subscribes to a supported event, ends its current turn and wakes when a matching event arrives."
          },
          {
            "type": "paragraph",
            "html": "The important detail is continuity: Cursor says the agent resumes the same conversation with its existing context. That is different from starting a brand-new automation run that has to reconstruct the task from scratch."
          },
          {
            "type": "paragraph",
            "html": "Cursor currently documents subscription sources for GitHub, Slack, Linear and timers."
          }
        ]
      },
      {
        "id": "github-subscriptions",
        "title": "GitHub subscriptions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GitHub subscriptions are useful when agent work depends on what happens after code is pushed."
          },
          {
            "type": "paragraph",
            "html": "Cursor documents pull-request activity such as reviews, comments, status changes and CI events. A cloud agent can create a pull request, wait for feedback, and continue when a review or failure appears."
          },
          {
            "type": "paragraph",
            "html": "Cursor also documents automatic attempts to fix CI failures on pull requests created by Cloud Agents. The exact behavior and supported CI surface should be checked against current documentation; the capability is not a guarantee that every test failure can be diagnosed or repaired automatically."
          },
          {
            "type": "paragraph",
            "html": "A practical Project workflow can look like this:"
          },
          {
            "type": "list",
            "items": [
              "the coordinator delegates an implementation;",
              "an agent opens a pull request;",
              "the agent subscribes to relevant PR or CI activity;",
              "the conversation pauses;",
              "CI fails or a reviewer comments;",
              "the agent wakes with the same context, investigates and proposes a fix;",
              "a human still reviews the resulting changes."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "This can remove the need for a developer to repeatedly prompt the agent to “check the PR again.”"
          }
        ]
      },
      {
        "id": "slack-subscriptions",
        "title": "Slack subscriptions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Slack subscriptions let an agent wait for human input or react to messages."
          },
          {
            "type": "paragraph",
            "html": "Cursor documents patterns including waiting for a reply in a Slack thread and watching channel messages. Projects gives this a clear use case: a long-running engineering project can watch a bug-report or support channel and use relevant messages as triggers for investigation."
          },
          {
            "type": "paragraph",
            "html": "For example, a Project responsible for a feature could monitor a designated bug-report channel after release. When a relevant message appears, the coordinator or delegated agent can investigate the codebase and prepare a proposed change."
          },
          {
            "type": "paragraph",
            "html": "This should not be treated as permission to let an agent act on every Slack message indiscriminately. Use narrow channels, clear trigger criteria and review requirements so normal conversation does not become production work by accident."
          }
        ]
      },
      {
        "id": "linear-subscriptions",
        "title": "Linear subscriptions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor’s Cloud Agent documentation also lists Linear issue events. An agent can wait for issue-state changes or comments and continue when the relevant event occurs."
          },
          {
            "type": "paragraph",
            "html": "That enables workflows where engineering work is coordinated around an issue tracker rather than only GitHub. A Project could pause until an issue is moved into a particular state, until a product manager adds clarification or until an acceptance decision is recorded."
          },
          {
            "type": "paragraph",
            "html": "The same principle applies: use the external system as a signal, not as unquestioned truth. The agent should interpret the event within the Project’s existing plan and constraints."
          }
        ]
      },
      {
        "id": "timer-subscriptions-and-recurring-schedules",
        "title": "Timer subscriptions and recurring schedules",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor also supports timers. Documentation includes one-off waits and recurring scheduled behavior, including a /loop workflow for repeated tasks."
          },
          {
            "type": "paragraph",
            "html": "This is useful for maintenance that should happen on a cadence: periodic dependency checks, repeated repository hygiene, regression scans or other “gardening” work."
          },
          {
            "type": "paragraph",
            "html": "Cursor’s Projects announcement describes recurring work as one of the major use cases. Its internal examples include ongoing code-quality and design-system maintenance."
          },
          {
            "type": "paragraph",
            "html": "A schedule does not make the output safe to merge automatically. Recurring agent jobs should still have bounded scope, predictable outputs and review rules."
          }
        ]
      },
      {
        "id": "subscription-duration-and-event-behavior",
        "title": "Subscription duration and event behavior",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor’s Cloud Agent capability documentation states that subscriptions can last for up to 180 days. That is a current documented limit and should be rechecked before publication because beta infrastructure can change."
          },
          {
            "type": "paragraph",
            "html": "The documentation also describes event handling intended to avoid unnecessary repeated wake-ups when events arrive in bursts. Exact behavior should be verified from the current docs when designing a workflow that depends on event ordering."
          },
          {
            "type": "paragraph",
            "html": "Do not assume that a subscription is an unlimited permanent daemon. It is a managed wait inside Cursor’s agent system with documented limits."
          }
        ]
      },
      {
        "id": "example-keep-a-pull-request-moving",
        "title": "Example: keep a pull request moving",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A useful GitHub workflow is to let an agent continue through the normal review cycle instead of stopping as soon as it opens a PR."
          },
          {
            "type": "paragraph",
            "html": "The agent implements a bounded task, opens the pull request and subscribes to relevant activity. If CI fails, it can investigate. If a reviewer asks for a change, it can respond to the new information in the same conversation."
          },
          {
            "type": "paragraph",
            "html": "The developer still owns approval. The advantage is continuity: the agent remains attached to the work while external systems and people provide feedback."
          }
        ]
      },
      {
        "id": "example-slack-bug-triage",
        "title": "Example: Slack bug triage",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A Project can watch a dedicated Slack bug channel. When a new report matches the intended scope, the Project can inspect the relevant code, look for related changes and prepare a diagnosis or pull request."
          },
          {
            "type": "paragraph",
            "html": "This is especially useful after a feature launch, when feedback arrives outside the code editor."
          },
          {
            "type": "paragraph",
            "html": "Use clear boundaries. A general company chat channel is usually a poor trigger surface because context is noisy and messages may not represent actionable engineering requests."
          }
        ]
      },
      {
        "id": "example-recurring-repository-gardening",
        "title": "Example: recurring repository gardening",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For ongoing maintenance, a Project can use a timer subscription to wake on a schedule, inspect a defined part of the repository and propose bounded improvements."
          },
          {
            "type": "paragraph",
            "html": "Cursor uses “gardening” to describe recurring work such as maintaining code quality or enforcing a design system. The company says one internal Project is expected to touch 20 to 100 pull requests per day. That is a vendor-reported internal example, not an independent benchmark or recommended workload."
          }
        ]
      },
      {
        "id": "projects-subscriptions-vs-cursor-automations",
        "title": "Projects subscriptions vs Cursor Automations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor Automations are also trigger-driven Cloud Agent workflows, so there is overlap."
          },
          {
            "type": "paragraph",
            "html": "The useful distinction is context and scope. An Automation is configured around a trigger and instruction. A Project is a persistent body of software work with a coordinator and shared context, and it can use subscriptions to wait for events while pursuing that broader objective."
          },
          {
            "type": "paragraph",
            "html": "Because both products are evolving, do not build a rigid taxonomy around current beta wording. Choose the mechanism that best preserves the context and control your workflow needs."
          }
        ]
      },
      {
        "id": "safety-and-review-considerations",
        "title": "Safety and review considerations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Event-driven agents can act while the user is not actively sitting in the editor, which makes permissions and review more important."
          },
          {
            "type": "paragraph",
            "html": "Use least-privilege access for Slack, GitHub and other integrations. Keep production secrets out of unnecessary contexts. Limit the repositories, channels and issue sources that can trigger work. Require human review before merging changes with meaningful production impact."
          },
          {
            "type": "paragraph",
            "html": "Also distinguish “wake when an event happens” from “correctly understand every event.” The subscription delivers a signal; the model still has to interpret it."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "What can trigger a Cursor subscription?"
          },
          {
            "type": "paragraph",
            "html": "Cursor currently documents GitHub activity, Slack events, Linear events and timers as subscription sources for Cloud Agents."
          },
          {
            "type": "subheading",
            "text": "Does the agent lose its context while waiting?"
          },
          {
            "type": "paragraph",
            "html": "Cursor says a subscribed cloud agent wakes in the same conversation with its existing context."
          },
          {
            "type": "subheading",
            "text": "Can Cursor Projects run on a schedule?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Cursor documents timer-based waits and recurring scheduled behavior, and the Projects announcement explicitly highlights scheduled recurring work."
          },
          {
            "type": "subheading",
            "text": "Can a Project react to GitHub CI failures?"
          },
          {
            "type": "paragraph",
            "html": "Cursor documents GitHub and CI-related agent workflows, including attempts to fix CI failures on pull requests created by Cloud Agents. Human review remains important."
          },
          {
            "type": "subheading",
            "text": "How long can a Cursor subscription wait?"
          },
          {
            "type": "paragraph",
            "html": "Cursor’s current Cloud Agent documentation says subscriptions can last up to 180 days. Recheck the live documentation before depending on that limit for a long-running production workflow."
          },
          {
            "type": "subheading",
            "text": "Are subscriptions the same as Cursor Automations?"
          },
          {
            "type": "paragraph",
            "html": "Not exactly. Automations are trigger-and-instruction workflows; Projects are persistent project-level workspaces that can use subscriptions as part of a larger coordinated objective. The products overlap and may continue evolving."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "cursor.com — projects",
        "url": "https://cursor.com/blog/projects"
      },
      {
        "label": "cursor.com — projects",
        "url": "https://cursor.com/changelog/projects"
      },
      {
        "label": "cursor.com — capabilities",
        "url": "https://cursor.com/docs/cloud-agent/capabilities"
      },
      {
        "label": "cursor.com — 08 19 26",
        "url": "https://cursor.com/changelog/08-19-26"
      }
    ],
    "relatedPaths": [
      "/blog/cursor-projects"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Cursor Projects",
    "targetSearchIntent": "Practical setup and operating workflow for using a Cursor Project to define a durable software objective, let the coordinator research and delegate, maintain shared context, combine cloud and local agents, and review results",
    "targetQuery": "how to use Cursor Projects",
    "parentSlug": "cursor-projects",
    "slug": "how-to-use-cursor-projects",
    "title": "How to Use Cursor Projects: Coordinator, Subagents & Shared Context",
    "metaTitle": "How to Use Cursor Projects: Coordinator, Subagents & Context",
    "metaDescription": "Learn how to use Cursor Projects for long-running software work: define the outcome, let the coordinator delegate agents, build shared context and review cloud or local execution.",
    "h1": "How to Use Cursor Projects With a Coordinator, Subagents and Shared Context",
    "excerpt": "Cursor Projects is built for software work that is larger than a normal one-off agent request. Instead of manually opening several coding-agent conversations and keeping each one aligned, you give a Project a durable objective and work through a coordinator that plans, delegat…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Use Cursor Projects With a Coordinator, Subagents and Shared Context — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor Projects is built for software work that is larger than a normal one-off agent request. Instead of manually opening several coding-agent conversations and keeping each one aligned, you give a Project a durable objective and work through a coordinator that plans, delegates and retains shared context over time."
          },
          {
            "type": "paragraph",
            "html": "This guide focuses on the practical operating pattern rather than repeating the broad product overview. Cursor Projects entered beta on September 10, 2026, so exact controls and packaging can still change as the product evolves."
          }
        ]
      },
      {
        "id": "1-confirm-projects-is-available-on-your-account",
        "title": "1. Confirm Projects is available on your account",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor says the beta began rolling out to all users on September 10. Projects appears in the left-hand navigation when access is available."
          },
          {
            "type": "paragraph",
            "html": "Because this is a beta rollout, do not assume that every account sees the feature at exactly the same moment. If it is not visible, check current Cursor release notes before trying to reproduce old screenshots or workarounds."
          }
        ]
      },
      {
        "id": "2-create-a-project-around-a-durable-outcome",
        "title": "2. Create a Project around a durable outcome",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A Project works best when the goal is bigger than a single code edit. Good examples include shipping a feature across multiple services, completing a framework migration, reducing a recurring class of regressions, cleaning up a design system or maintaining a long-running engineering program."
          },
          {
            "type": "paragraph",
            "html": "Give the coordinator a clear outcome, relevant repositories or systems, important constraints and the definition of done. Avoid treating the first prompt as a request to immediately rewrite everything. The coordinator is designed to research, plan and delegate."
          },
          {
            "type": "paragraph",
            "html": "A useful brief normally includes:"
          },
          {
            "type": "list",
            "items": [
              "the business or technical outcome;",
              "repositories or services in scope;",
              "boundaries that must not be crossed;",
              "testing expectations;",
              "review or approval requirements;",
              "any known dependencies or risky areas."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "The stronger the boundaries are, the easier it is to review parallel agent work later."
          }
        ]
      },
      {
        "id": "3-let-the-coordinator-research-before-delegating",
        "title": "3. Let the coordinator research before delegating",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor describes the coordinator as the planning layer. It is not simply another coding agent that writes every change itself. It can investigate the codebase, build a plan and create subagents for pieces of work that can be separated."
          },
          {
            "type": "paragraph",
            "html": "For a feature, that might mean one agent researches the data model, another studies the frontend integration and another maps the test surface. For a migration, the coordinator can identify recurring patterns before applying them across many pull requests."
          },
          {
            "type": "paragraph",
            "html": "Review the plan before accepting a large amount of parallel work. Cursor says Projects can use very large numbers of subagents, but “thousands of subagents” is a vendor capability claim, not a recommendation to maximize agent count on every project."
          }
        ]
      },
      {
        "id": "4-build-useful-shared-context",
        "title": "4. Build useful shared context",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects maintain shared files that Cursor says can synchronize across the cloud and local machines used by agents. This is one of the most important parts of the workflow because future agents can reuse what earlier agents discovered."
          },
          {
            "type": "paragraph",
            "html": "Useful shared material can include:"
          },
          {
            "type": "list",
            "items": [
              "how a service is tested;",
              "architecture notes;",
              "research findings;",
              "migration rules;",
              "naming or design-system conventions;",
              "known failure modes;",
              "project-specific review expectations."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Treat this as explicit project memory rather than magical model memory. Important facts should be written clearly enough that another engineer could inspect them. Review what agents save, especially when it affects production behavior or security-sensitive systems."
          }
        ]
      },
      {
        "id": "5-let-the-coordinator-delegate-bounded-tasks",
        "title": "5. Let the coordinator delegate bounded tasks",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once the plan and context are strong enough, the coordinator can create agents for separate tasks. The best candidates for parallelism are pieces of work that have clear boundaries and limited overlap."
          },
          {
            "type": "paragraph",
            "html": "Examples include independent package migrations, separate UI components, research tasks, tests for different services or repetitive code-quality fixes."
          },
          {
            "type": "paragraph",
            "html": "Work that touches the same files or architectural decision at the same time may be better sequenced. More parallel agents can increase merge conflicts and coordination cost, so use agent count as a means to complete the project rather than a score to maximize."
          }
        ]
      },
      {
        "id": "6-use-cloud-agents-for-persistent-work",
        "title": "6. Use cloud agents for persistent work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor says a Project runs on a cloud computer and can keep working after your laptop is closed. This is useful for research, multi-file implementation, long test runs and tasks that do not require a developer’s local-only environment."
          },
          {
            "type": "paragraph",
            "html": "Cloud execution also makes it possible for a Project to continue after an external event, such as a pull-request review or a scheduled timer."
          },
          {
            "type": "paragraph",
            "html": "That does not mean a Project should be left completely unsupervised. Review generated changes, test important behavior and preserve normal code-review controls."
          }
        ]
      },
      {
        "id": "7-use-a-local-agent-when-the-work-needs-your-machine",
        "title": "7. Use a local agent when the work needs your machine",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cursor says the coordinator can start a local agent when a task specifically needs to run on the user’s machine."
          },
          {
            "type": "paragraph",
            "html": "This is useful when the required environment, credentials, hardware or development setup is not available in the cloud. A common pattern is to let cloud agents research and implement, then use a local agent for a test or validation step that depends on local resources."
          },
          {
            "type": "paragraph",
            "html": "Be deliberate about what local access an agent receives. A local agent may be able to interact with resources that are not available in a cloud sandbox, so normal credential and environment hygiene still matters."
          }
        ]
      },
      {
        "id": "8-review-pull-requests-and-intermediate-results",
        "title": "8. Review pull requests and intermediate results",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For large Projects, review should happen throughout the work rather than only at the end. Cursor’s own migration examples describe close human review early in a repeated pattern, followed by reduced oversight after the approach proves stable."
          },
          {
            "type": "paragraph",
            "html": "A practical review rhythm is:"
          },
          {
            "type": "list",
            "items": [
              "inspect the initial research and plan;",
              "review the first implementation of a repeated pattern;",
              "confirm tests and CI behavior;",
              "approve broader repetition only after the pattern is sound;",
              "sample later changes and investigate exceptions."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "This is especially important in migrations, where one incorrect assumption can otherwise be copied across many pull requests."
          }
        ]
      },
      {
        "id": "9-add-subscriptions-when-the-project-should-react-to-events",
        "title": "9. Add subscriptions when the Project should react to events",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A Project can become more persistent by waiting for external events through Cursor’s subscription system. Cursor documents event sources including GitHub, Slack, Linear and timers."
          },
          {
            "type": "paragraph",
            "html": "You might use this after the core workflow is working reliably: continue after CI fails, react to review feedback, watch a Slack bug-report channel or run a recurring maintenance routine."
          },
          {
            "type": "paragraph",
            "html": "Subscriptions deserve their own configuration discipline because they can turn a Project from a manually supervised workflow into a recurring one. The separate Cursor Projects Subscriptions guide covers those event sources and limits in more detail."
          }
        ]
      },
      {
        "id": "example-using-projects-for-a-framework-migration",
        "title": "Example: using Projects for a framework migration",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Suppose a repository needs a dependency or framework migration across dozens of packages."
          },
          {
            "type": "paragraph",
            "html": "Start by asking the coordinator to inventory the affected code, find the recurring migration patterns and document the rules. Review that research. Then let one or a small number of agents implement representative cases."
          },
          {
            "type": "paragraph",
            "html": "After those examples pass review and CI, the coordinator can delegate the same pattern across more packages. Keep exceptions visible rather than forcing every case through the same transformation."
          },
          {
            "type": "paragraph",
            "html": "Cursor says it has used Projects internally for migrations spanning hundreds of pull requests. That is a first-party usage example, not an independent guarantee that the same scale will be efficient in another codebase."
          }
        ]
      },
      {
        "id": "example-using-projects-for-a-feature",
        "title": "Example: using Projects for a feature",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For a feature spanning backend, frontend and tests, the coordinator can first map dependencies and record shared context. It can then delegate independent portions while preserving the overall plan."
          },
          {
            "type": "paragraph",
            "html": "When the feature is ready for environment-specific validation, a local agent can handle tasks that need the developer’s machine. After release, a subscription can watch for bug reports or pull-request activity if continued monitoring is useful."
          }
        ]
      },
      {
        "id": "what-not-to-do",
        "title": "What not to do",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not begin by asking the coordinator to unleash the maximum possible number of agents. Do not assume shared context is automatically correct. Do not merge large batches of AI-generated pull requests without review. Do not invent a Projects-specific quota or price from general Cursor plan information."
          },
          {
            "type": "paragraph",
            "html": "Projects reduces orchestration overhead; it does not remove the engineering work of setting boundaries, reviewing decisions and validating software."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Do I need to manage every Cursor subagent manually?"
          },
          {
            "type": "paragraph",
            "html": "The purpose of the coordinator is to plan and manage delegated work for you. You still review the plan and results, but you do not have to manually coordinate every agent conversation."
          },
          {
            "type": "subheading",
            "text": "Can a Cursor Project keep running when my laptop is closed?"
          },
          {
            "type": "paragraph",
            "html": "Cursor says the Project runs on a cloud computer, so cloud work can continue after the laptop is closed."
          },
          {
            "type": "subheading",
            "text": "Can Cursor Projects run something locally?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Cursor says the coordinator can start a local agent when a task needs to run on the user’s machine."
          },
          {
            "type": "subheading",
            "text": "Does Cursor Projects remember previous agent work?"
          },
          {
            "type": "paragraph",
            "html": "Projects maintain shared files that agents can add to and reuse. Treat that as explicit shared project context, not as a guarantee of perfect hidden memory."
          },
          {
            "type": "subheading",
            "text": "How many agents should I use?"
          },
          {
            "type": "paragraph",
            "html": "Cursor says Projects can delegate to very large numbers of subagents, but it does not publish one optimal number. Use only as much parallelism as the work can safely support."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "cursor.com — projects",
        "url": "https://cursor.com/blog/projects"
      },
      {
        "label": "cursor.com — projects",
        "url": "https://cursor.com/changelog/projects"
      },
      {
        "label": "cursor.com — capabilities",
        "url": "https://cursor.com/docs/cloud-agent/capabilities"
      },
      {
        "label": "cursor.com — 08 19 26",
        "url": "https://cursor.com/changelog/08-19-26"
      }
    ],
    "relatedPaths": [
      "/blog/cursor-projects"
    ]
  }
];
