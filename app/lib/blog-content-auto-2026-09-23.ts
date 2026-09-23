import type { BlogArticle } from "./blog-types.ts";

export const autoPublish20260923Articles: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "GPT-6 Sol and Luna",
    "targetSearchIntent": "Broad overview of GPT-6 Sol and GPT-6 Luna: release, pricing, capabilities, benchmarks, API positioning, use cases and differences from GPT-5.6 and GPT-6 Astra",
    "targetQuery": "GPT-6 Sol and Luna",
    "slug": "gpt-6-sol-luna",
    "title": "GPT-6 Sol & Luna: API Pricing, Benchmarks & Features",
    "metaTitle": "GPT-6 Sol & Luna: API Pricing, Benchmarks & Features",
    "metaDescription": "OpenAI released GPT-6 Sol and Luna on September 22, 2026. See API pricing, benchmark claims, coding and computer-use performance, and how they compare with Astra and GPT-5.6.",
    "h1": "GPT-6 Sol and Luna: Pricing, API, Benchmarks and Features",
    "excerpt": "OpenAI released GPT-6 Sol and Luna on September 22, 2026. See API pricing, benchmark claims, coding and computer-use performance, and how they compare with Astra and GPT-5.6.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for GPT-6 Sol & Luna: API Pricing, Benchmarks & Features",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI released GPT-6 Sol and GPT-6 Luna on September 22, 2026, expanding the GPT-6 family beyond the flagship GPT-6 Astra. The new models target a different part of the market: strong professional, coding and computer-use performance at substantially lower API cost. OpenAI says both models were trained using similar methods to Astra and inherit advances in factuality, coding, computer use and alignment. Those capability and benchmark statements are vendor claims unless independently reproduced."
          }
        ]
      },
      {
        "id": "gpt-6-sol-and-luna-at-a-glance",
        "title": "GPT-6 Sol and Luna at a glance",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-6 Sol is the higher-capability everyday tier. GPT-6 Luna is the faster, much cheaper tier for workloads where unit economics and throughput matter more than maximum capability. GPT-6 Astra remains OpenAI's highest-capability GPT-6 model."
          },
          {
            "type": "paragraph",
            "html": "The headline is price. OpenAI lists GPT-6 Sol at \\$2 per million input tokens and \\$10 per million output tokens. GPT-6 Luna costs \\$0.10 per million input tokens and \\$0.50 per million output tokens. OpenAI describes both as 50% cheaper than the GPT-5.6 promotional prices it uses for the comparison."
          }
        ]
      },
      {
        "id": "what-changed-from-gpt-5-6",
        "title": "What changed from GPT-5.6?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This is not simply a price cut. OpenAI says the GPT-6 training advances behind Astra have been carried into Sol and Luna, with improvements in professional work, coding, computer use and communication style. The company also emphasizes a clearer, less jargon-heavy response style with fewer low-value details."
          },
          {
            "type": "paragraph",
            "html": "For developers, the most important practical question is cost per successful task rather than token price alone. OpenAI's launch benchmarks repeatedly frame Sol and Luna around that metric, arguing that stronger results at lower token prices can materially reduce the cost of agentic workflows."
          }
        ]
      },
      {
        "id": "gpt-6-sol-pricing",
        "title": "GPT-6 Sol pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Standard API pricing is \\$2 per million input tokens and \\$10 per million output tokens according to OpenAI's launch announcement. This makes Sol one-fifth of Astra's launch input and output token prices of \\$10/M and \\$50/M respectively."
          },
          {
            "type": "paragraph",
            "html": "OpenAI's current API docs list GPT-6 Sol at $0.20 per million cached-input tokens and $2.50 per million cache-write tokens, and GPT-6 Luna at $0.01 cached input and $0.125 cache writes. Both models expose a 1.05-million-token context window and 128,000 maximum output tokens. OpenAI applies higher long-context rates once prompt input exceeds 272K tokens, so large-context workloads should use the current pricing table rather than the short-context headline alone."
          }
        ]
      },
      {
        "id": "gpt-6-luna-pricing",
        "title": "GPT-6 Luna pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-6 Luna is unusually inexpensive for a frontier-family model: \\$0.10 per million input tokens and \\$0.50 per million output tokens in OpenAI's launch pricing table. That makes it especially interesting for high-volume extraction, classification, coding assistance and agent subtasks where a more expensive model would be wasteful."
          },
          {
            "type": "paragraph",
            "html": "Low token cost does not automatically mean lowest total application cost. Tool calls, retries, long prompts, latency requirements and failure rates can matter more than nominal token pricing in production."
          }
        ]
      },
      {
        "id": "professional-work-benchmarks",
        "title": "Professional-work benchmarks",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI reports GPT-6 Sol at xhigh effort scoring 33.2% on AutomationBench at about \\$0.27 per task. In the same launch table, GPT-6 Astra at low effort scores 30.3% at 3.9 times Sol's cost per task, while Claude Opus 5 at max scores 26.9% at 11.1 times Sol's cost. These are OpenAI-presented benchmark comparisons and should not be treated as independent measurements."
          },
          {
            "type": "paragraph",
            "html": "OpenAI also says Luna at high effort improves 5.4 percentage points over its predecessor on AutomationBench while costing 58% less per task."
          }
        ]
      },
      {
        "id": "coding-performance",
        "title": "Coding performance",
        "blocks": [
          {
            "type": "paragraph",
            "html": "On FrontierCode 1.1 Main, OpenAI says GPT-6 Sol substantially improves over GPT-5.6 Sol and can match Claude Fable 5.1 at xhigh effort at much lower cost. On DeepSWE v1.1, OpenAI reports Sol at max effort scoring 68.8%, within 1.1 percentage points of Claude Fable 5's reported 69.9% xhigh result, at roughly 80% lower cost per task."
          },
          {
            "type": "paragraph",
            "html": "OpenAI reports GPT-6 Luna at max scoring 66.6% on DeepSWE v1.1, comparable in its launch comparison with Claude Opus 5 and Fable 5 at medium effort. Again, these comparisons come from OpenAI's launch materials."
          }
        ]
      },
      {
        "id": "computer-use",
        "title": "Computer use",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-6 Astra remains OpenAI's top computer-use model, but Sol and Luna are positioned as cheaper alternatives for browser and desktop agents. OpenAI reports GPT-6 Sol at xhigh scoring 60.5% on an offline OSWorld 2.0 evaluation, close to the 60.3% result it reports for Claude Opus 5 at medium effort, at about 80% lower cost per task."
          },
          {
            "type": "paragraph",
            "html": "OpenAI also says GPT-6 Luna at max can outperform GPT-5.6 Sol at medium effort on this evaluation at one tenth of the cost."
          }
        ]
      },
      {
        "id": "which-gpt-6-model-should-you-use",
        "title": "Which GPT-6 model should you use?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use Astra when maximum capability matters more than cost. Sol is the more natural default for demanding recurring coding, professional and agent workloads where Astra's price is difficult to justify. Luna is the strongest cost-first candidate for high-volume subtasks and workflows that can tolerate a lower capability ceiling."
          },
          {
            "type": "paragraph",
            "html": "A practical production architecture may route difficult cases upward rather than use Astra for every request: Luna for cheap routine work, Sol for harder work and Astra for the small fraction of tasks that genuinely need the frontier tier. Whether that architecture wins depends on your workload and should be measured rather than assumed."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's launch benchmarks are vendor-reported. Benchmark performance does not guarantee application performance. The current API model IDs are <code>gpt-6-sol</code> and <code>gpt-6-luna</code>. OpenAI documents 1.05M context windows and 128K maximum outputs for both. Pricing and regional-processing rules can still change, so production systems should continue reading the live model and pricing pages rather than treating launch-day details as permanent."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When were GPT-6 Sol and Luna released?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI announced them on September 22, 2026."
          },
          {
            "type": "subheading",
            "text": "How much does GPT-6 Sol cost?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI's launch pricing lists \\$2 per million input tokens and \\$10 per million output tokens."
          },
          {
            "type": "subheading",
            "text": "How much does GPT-6 Luna cost?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI's launch pricing lists \\$0.10 per million input tokens and \\$0.50 per million output tokens."
          },
          {
            "type": "subheading",
            "text": "Is GPT-6 Astra still the best GPT-6 model?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI says Astra remains its best model across the board. Sol and Luna are positioned around cost efficiency."
          },
          {
            "type": "subheading",
            "text": "Is GPT-6 Sol better than GPT-5.6 Sol?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI reports substantial gains in coding, professional work and computer-use evaluations, but workload-specific testing is still necessary."
          },
          {
            "type": "subheading",
            "text": "Should I use Sol or Luna?"
          },
          {
            "type": "paragraph",
            "html": "Choose Sol when capability and reliability justify a higher price. Choose Luna when high-volume economics and speed matter more and the task does not require the strongest model."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
      },
      {
        "label": "Primary source",
        "url": "https://venturebeat.com/technology/openai-releases-gpt-6-sol-and-luna-models-slashing-api-costs-50-or-more"
      },
      {
        "label": "Primary source",
        "url": "https://developers.openai.com/api/docs/models/gpt-6-sol"
      },
      {
        "label": "Primary source",
        "url": "https://developers.openai.com/api/docs/models/gpt-6-luna"
      },
      {
        "label": "Primary source",
        "url": "https://developers.openai.com/api/docs/pricing"
      },
      {
        "label": "Primary source",
        "url": "https://developers.openai.com/api/docs/changelog"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "GPT-6 Sol and Luna",
    "targetSearchIntent": "Decide whether to move from GPT-5.6 Sol to GPT-6 Sol based on price, professional/coding/computer-use performance and workload economics",
    "targetQuery": "GPT-6 Sol vs GPT-5.6 Sol",
    "parentSlug": "gpt-6-sol-luna",
    "slug": "gpt-6-sol-vs-gpt-5-6-sol",
    "title": "GPT-6 Sol vs GPT-5.6 Sol: Pricing, Benchmarks & Upgrade Guide",
    "metaTitle": "GPT-6 Sol vs GPT-5.6 Sol: Price, Benchmarks & Upgrade",
    "metaDescription": "Compare GPT-6 Sol with GPT-5.6 Sol on API price, coding, professional work and computer use. See what OpenAI reports and when upgrading makes sense.",
    "h1": "GPT-6 Sol vs GPT-5.6 Sol: Is the Upgrade Worth It?",
    "excerpt": "Compare GPT-6 Sol with GPT-5.6 Sol on API price, coding, professional work and computer use. See what OpenAI reports and when upgrading makes sense.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for GPT-6 Sol vs GPT-5.6 Sol: Pricing, Benchmarks & Upgrade Guide",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-6 Sol is not merely a renamed GPT-5.6 Sol. OpenAI's September 22, 2026 launch positions it as a cheaper and more capable successor built with advances from GPT-6 Astra. For developers already using GPT-5.6 Sol, that creates a straightforward migration question: does GPT-6 Sol deliver enough better work at a low enough price to justify switching?"
          },
          {
            "type": "paragraph",
            "html": "The short answer is that GPT-6 Sol looks compelling on OpenAI's own numbers, especially for coding and agentic workloads, but the benchmark evidence is primarily vendor-reported. Production teams should run their own task-level evaluation before replacing a stable model."
          }
        ]
      },
      {
        "id": "price-comparison",
        "title": "Price comparison",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI lists GPT-6 Sol at \\$2 per million input tokens and \\$10 per million output tokens. In its launch comparison, OpenAI shows GPT-5.6 Sol at \\$4 per million input and \\$20 per million output under the pricing baseline used for the announcement. That is a 50% reduction on both sides. OpenAI's current GPT-5.6 Sol model page confirms the $4/$20 promotional baseline and says that promotion is available at least through November 21, 2026."
          },
          {
            "type": "paragraph",
            "html": "This matters most for workloads with substantial output or repeated agent steps. A model that is both cheaper per token and more successful per attempt can reduce total cost much more than the nominal 50% token-price difference. The reverse is also possible if a new model requires more reasoning tokens or behaves worse on your specific task, which is why per-task evaluation matters."
          }
        ]
      },
      {
        "id": "professional-work-performance",
        "title": "Professional-work performance",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says GPT-6 Sol benefits from the same broad training advances introduced with GPT-6 Astra. On AutomationBench, which tests workflows across business applications, OpenAI reports GPT-6 Sol at xhigh effort scoring 33.2% at about \\$0.27 per task."
          },
          {
            "type": "paragraph",
            "html": "The launch page says GPT-6 Sol improves over the previous generation and frames the gain around cost efficiency. These numbers should be treated as OpenAI's evaluation results rather than independent proof that every business workflow improves."
          }
        ]
      },
      {
        "id": "coding",
        "title": "Coding",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Coding is one of the clearest reasons to test the upgrade. OpenAI says GPT-6 Sol improves substantially over GPT-5.6 Sol on FrontierCode, an evaluation focused on whether agent-generated code is actually mergeable rather than merely passing narrow correctness checks."
          },
          {
            "type": "paragraph",
            "html": "On DeepSWE v1.1, OpenAI reports GPT-6 Sol at max effort scoring 68.8%. The launch material also positions Sol as capable of matching substantially more expensive competitor configurations on some coding evaluations."
          },
          {
            "type": "paragraph",
            "html": "For teams using Sol inside coding agents, the relevant migration test should include repository navigation, patch quality, test behavior, scope discipline, retry rate and human cleanup time—not just one benchmark score."
          }
        ]
      },
      {
        "id": "computer-use",
        "title": "Computer use",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI reports GPT-6 Sol at xhigh effort scoring 60.5% on an offline OSWorld 2.0 evaluation. The company says the GPT-6 generation brings stronger computer-use behavior while keeping Sol much cheaper than Astra."
          },
          {
            "type": "paragraph",
            "html": "If your application uses browser or desktop control, compare successful completion rate and recovery behavior directly. Small improvements in agent reliability can dominate token-price differences because failed GUI tasks often trigger expensive retries."
          }
        ]
      },
      {
        "id": "response-style",
        "title": "Response style",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says Sol inherits GPT-6 Astra's improved collaboration style: clearer language, less jargon, fewer odd turns of phrase, fewer low-value details and slightly shorter answers without losing substance. This is difficult to reduce to a benchmark, but it can matter in coding assistants and professional workflows where humans must review the output."
          }
        ]
      },
      {
        "id": "should-existing-gpt-5-6-sol-users-upgrade",
        "title": "Should existing GPT-5.6 Sol users upgrade?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-6 Sol is worth testing immediately if GPT-5.6 Sol is already a meaningful API cost center, if you run coding or agent workflows, or if failures and retries are a significant part of your cost. The lower launch price means GPT-6 Sol does not need a dramatic quality gain to improve economics."
          },
          {
            "type": "paragraph",
            "html": "A cautious migration is better than an instant global replacement. Build a representative evaluation set from real production tasks, run both models at the reasoning levels you would actually deploy, record success rate, latency, token use, retries and human correction time, then compare cost per accepted result."
          }
        ]
      },
      {
        "id": "when-staying-on-gpt-5-6-sol-can-make-sense",
        "title": "When staying on GPT-5.6 Sol can make sense",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not migrate solely because the model number changed. Staying temporarily can be reasonable when your prompts and tools are highly tuned to GPT-5.6 behavior, when deterministic regressions would be expensive, when a third-party platform has not exposed GPT-6 Sol yet, or when your compliance/region requirements have not been confirmed for the new model."
          }
        ]
      },
      {
        "id": "gpt-6-sol-vs-astra",
        "title": "GPT-6 Sol vs Astra",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Astra remains OpenAI's highest-capability GPT-6 model. The migration from GPT-5.6 Sol to GPT-6 Sol is therefore not the same decision as moving to Astra. Sol targets the everyday capability/cost balance; Astra is the escalation tier for the hardest work."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Based on OpenAI's launch data, GPT-6 Sol offers a rare combination: lower token prices and claimed capability improvements over GPT-5.6 Sol. That makes it a high-priority model to benchmark for existing Sol workloads. But the correct production decision should come from cost per successful real task, not vendor benchmark headlines alone."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is GPT-6 Sol cheaper than GPT-5.6 Sol?"
          },
          {
            "type": "paragraph",
            "html": "Yes under OpenAI's launch comparison: \\$2/M input and \\$10/M output for GPT-6 Sol versus the \\$4/M and \\$20/M GPT-5.6 pricing baseline shown in the announcement."
          },
          {
            "type": "subheading",
            "text": "Is GPT-6 Sol better for coding?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI reports substantial improvements over GPT-5.6 Sol on FrontierCode and strong DeepSWE performance. Those are vendor-reported results and should be validated on your codebase."
          },
          {
            "type": "subheading",
            "text": "Should I replace GPT-5.6 Sol immediately?"
          },
          {
            "type": "paragraph",
            "html": "Test first. A representative production evaluation can reveal regressions that aggregate benchmarks miss."
          },
          {
            "type": "subheading",
            "text": "Is GPT-6 Sol the strongest GPT-6 model?"
          },
          {
            "type": "paragraph",
            "html": "No. OpenAI says GPT-6 Astra remains its strongest model overall. Sol is positioned as a more cost-efficient tier."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
      },
      {
        "label": "Primary source",
        "url": "https://openai.com/index/gpt-5-6/"
      },
      {
        "label": "Primary source",
        "url": "https://developers.openai.com/api/docs/models/gpt-6-sol"
      },
      {
        "label": "Primary source",
        "url": "https://developers.openai.com/api/docs/models/gpt-5.6-sol"
      },
      {
        "label": "Primary source",
        "url": "https://developers.openai.com/api/docs/pricing"
      }
    ],
    "relatedPaths": [
      "/blog/gpt-6-sol-luna"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Google Agent Executor (AX)",
    "targetSearchIntent": "Broad overview of Google Agent Executor (AX), its v0.3.0 architecture, declarative primitives, setup model, Agent Substrate relationship, security controls and limitations",
    "targetQuery": "Google Agent Executor AX",
    "slug": "google-agent-executor-ax",
    "title": "Google Agent Executor (AX): v0.3.0, Setup & Agent Orchestration",
    "metaTitle": "Google Agent Executor (AX): v0.3.0, Setup & Orchestration",
    "metaDescription": "Google Agent Executor (AX) explained: v0.3.0 architecture, Task/Workspace/Gateway/Model resources, Kubernetes setup, Agent Substrate, security and limitations.",
    "h1": "Google Agent Executor (AX): How the v0.3.0 Agent Orchestrator Works",
    "excerpt": "Google Agent Executor (AX) explained: v0.3.0 architecture, Task/Workspace/Gateway/Model resources, Kubernetes setup, Agent Substrate, security and limitations.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for Google Agent Executor (AX): v0.3.0, Setup & Agent Orchestration",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google Agent Executor (AX) is Google's open-source runtime for orchestrating autonomous agent workloads. Google originally introduced Agent Executor in May 2026 as a distributed runtime for durable, resumable agent execution. The September 20 v0.3.0 release is a more useful SEO event because the project now presents a materially redesigned, Kubernetes-shaped orchestration model."
          }
        ]
      },
      {
        "id": "what-changed-in-ax-v0-3-0",
        "title": "What changed in AX v0.3.0?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The current official repository describes AX as a high-throughput declarative orchestrator. Instead of treating an agent as a single opaque process, AX exposes four core resources through <code>ax.io/v1alpha1</code> manifests: Task, Workspace, Gateway and Model."
          },
          {
            "type": "paragraph",
            "html": "A Task is the isolated execution unit. A Workspace defines what the task needs, including Git repositories, MCP servers and skills. A Gateway controls network access, including explicit outbound hosts and ports. A Model centralizes model configuration and credentials. This makes AX closer to an infrastructure control plane for agents than to a prompt or agent-framework library."
          }
        ]
      },
      {
        "id": "kubernetes-style-workflow",
        "title": "Kubernetes-style workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The AX CLI deliberately resembles kubectl. Developers apply YAML with <code>ax apply</code>, inspect resources with <code>get</code> and <code>describe</code>, stream state with <code>watch</code>, and remove resources with <code>delete</code>. Agent-specific commands include <code>ax suspend</code>, <code>ax resume</code> and <code>ax ssh</code>."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters: AX does not replace the agent's reasoning framework. It provides the runtime and lifecycle layer around the code, model calls, tools and environment."
          }
        ]
      },
      {
        "id": "task-workspace-gateway-and-model",
        "title": "Task, Workspace, Gateway and Model",
        "blocks": [
          {
            "type": "paragraph",
            "html": "<strong>Task</strong> runs agent code in an isolated sandbox with CPU and memory limits."
          },
          {
            "type": "paragraph",
            "html": "<strong>Workspace</strong> prepares the environment before the task starts. The current project can pre-wire Git repositories, MCP servers and skills, and also supports goal-based generative workspace setup."
          },
          {
            "type": "paragraph",
            "html": "<strong>Gateway</strong> is the network-policy boundary. It can restrict outbound traffic to an allowlist, which is especially relevant when autonomous code can call external services."
          },
          {
            "type": "paragraph",
            "html": "<strong>Model</strong> centralizes the model/provider configuration and credentials used by the platform."
          }
        ]
      },
      {
        "id": "agent-substrate-relationship",
        "title": "Agent Substrate relationship",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX runs on top of Agent Substrate, a separate open-source compute runtime designed for high-density, stateful agent workloads. Google's project materials describe AX as the declarative control plane and Agent Substrate as the execution substrate underneath it."
          },
          {
            "type": "paragraph",
            "html": "The project claims it is designed to scale to billions of tasks per cluster and describes sub-second resumption. Those are project/design claims, not independently verified production benchmarks, so they should not be presented as guaranteed capacity for every deployment."
          }
        ]
      },
      {
        "id": "installation-and-requirements",
        "title": "Installation and requirements",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The current quick start installs the CLI with Go. Deploying the control plane requires a Kubernetes cluster, <code>ko</code>, a container registry the cluster can pull from, and a reachable Agent Substrate Control API. The deployment installs Redis and AX control-plane components in the <code>ax-system</code> namespace."
          },
          {
            "type": "paragraph",
            "html": "Because the project is explicitly pre-stable, exact commands and dependencies should be rechecked against the repository immediately before publication."
          }
        ]
      },
      {
        "id": "why-ax-is-interesting-for-ai-agents",
        "title": "Why AX is interesting for AI agents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Long-running agents create infrastructure problems ordinary request/response applications do not: they can wait for model calls or humans, accumulate state, execute untrusted code, need controlled network access and consume resources while idle. AX is Google's attempt to make those concerns first-class runtime primitives rather than application-specific glue."
          },
          {
            "type": "paragraph",
            "html": "Potential uses include coding agents, research agents, evaluation farms, browser-testing workers, notebook workloads and custom tool runtimes."
          }
        ]
      },
      {
        "id": "security-boundaries",
        "title": "Security boundaries",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX exposes several useful controls: isolated tasks, CPU/memory limits, Gateway egress policies and centralized model credentials. <code>ax ssh</code> also provides debugging access when a task is explicitly configured for debug mode."
          },
          {
            "type": "paragraph",
            "html": "These features are infrastructure controls, not proof that arbitrary agent code is safe. Teams still need to reason about credentials, tool permissions, supply-chain risk, model behavior and the security of the underlying Kubernetes and Agent Substrate deployment."
          }
        ]
      },
      {
        "id": "is-google-ax-open-source",
        "title": "Is Google AX open source?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Yes. The google/ax repository is public and licensed under Apache 2.0."
          }
        ]
      },
      {
        "id": "is-ax-stable",
        "title": "Is AX stable?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No. The official repository warns that core concepts, protocols and specifications are still being refined and that major breaking changes are likely before a stable release."
          }
        ]
      },
      {
        "id": "is-ax-a-hosted-google-cloud-service",
        "title": "Is AX a hosted Google Cloud service?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The reviewed sources describe AX as open-source software that developers deploy on their own infrastructure. Do not infer a standalone hosted-product price from that. Infrastructure cost depends on the chosen cluster, compute, model providers and surrounding services."
          }
        ]
      },
      {
        "id": "ax-vs-kubernetes",
        "title": "AX vs Kubernetes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX uses Kubernetes-like concepts and runs in a Kubernetes ecosystem, but it adds agent-specific abstractions for sandboxed tasks, prepared workspaces, network gateways, model configuration and suspend/resume. A dedicated comparison page is not yet necessary because this distinction can be answered well inside the main overview."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "What does AX stand for?"
          },
          {
            "type": "paragraph",
            "html": "AX is the short name for Agent Executor."
          },
          {
            "type": "subheading",
            "text": "Can AX run MCP servers?"
          },
          {
            "type": "paragraph",
            "html": "The current Workspace abstraction explicitly includes MCP servers among the resources that can be prepared for a task."
          },
          {
            "type": "subheading",
            "text": "Can AX pause an agent?"
          },
          {
            "type": "paragraph",
            "html": "The CLI documents <code>ax suspend</code> and <code>ax resume</code> for checkpointing and resuming tasks."
          },
          {
            "type": "subheading",
            "text": "Does AX replace LangGraph or other agent frameworks?"
          },
          {
            "type": "paragraph",
            "html": "Not necessarily. AX is primarily an execution/orchestration runtime. Agent logic can live in the harness or application running inside the task."
          },
          {
            "type": "subheading",
            "text": "Where is AX available?"
          },
          {
            "type": "paragraph",
            "html": "The source code and documentation are publicly available through the official google/ax repository and <a href=\"http://agentexecutor.io\">agentexecutor.io</a>."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://github.com/google/ax/releases/tag/v0.3.0"
      },
      {
        "label": "Primary source",
        "url": "https://github.com/google/ax"
      },
      {
        "label": "Primary source",
        "url": "https://agentexecutor.io/"
      },
      {
        "label": "Primary source",
        "url": "https://cloud.google.com/blog/products/ai-machine-learning/agent-executor-googles-distributed-agent-runtime"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Google Agent Executor (AX)",
    "targetSearchIntent": "Install and self-host Google AX, deploy its control plane, configure prerequisites and run/debug/suspend a first agent Task",
    "targetQuery": "how to install Google Agent Executor AX",
    "parentSlug": "google-agent-executor-ax",
    "slug": "install-google-agent-executor-ax",
    "title": "How to Install Google Agent Executor (AX): Kubernetes Setup & First Task",
    "metaTitle": "How to Install Google Agent Executor (AX): Kubernetes Guide",
    "metaDescription": "Install Google AX: CLI setup, Kubernetes and Agent Substrate prerequisites, control-plane deployment, first Task YAML, watch, SSH, suspend and resume.",
    "h1": "How to Install Google Agent Executor (AX) and Run Your First Agent Task",
    "excerpt": "Install Google AX: CLI setup, Kubernetes and Agent Substrate prerequisites, control-plane deployment, first Task YAML, watch, SSH, suspend and resume.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for How to Install Google Agent Executor (AX): Kubernetes Setup & First Task",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google Agent Executor (AX) can be self-hosted, but the current v0.3.0-era setup is infrastructure-oriented rather than a one-command desktop install. The official quick start expects a Kubernetes environment and Agent Substrate."
          }
        ]
      },
      {
        "id": "before-you-install-ax",
        "title": "Before you install AX",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The current official repository lists these deployment prerequisites: a Kubernetes cluster, Go for installing the CLI, <code>ko</code> for building/deploying images, a container registry your cluster can pull from, and a reachable Agent Substrate Control API."
          },
          {
            "type": "paragraph",
            "html": "AX is still in active early development. Treat this guide as a map of the official workflow, and verify commands against the repository before running them in production."
          }
        ]
      },
      {
        "id": "1-install-the-ax-cli",
        "title": "1. Install the AX CLI",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The official repository currently documents:"
          },
          {
            "type": "paragraph",
            "html": "`bash"
          },
          {
            "type": "paragraph",
            "html": "go install github.com/google/ax/cmd/ax@latest"
          },
          {
            "type": "paragraph",
            "html": "`"
          },
          {
            "type": "paragraph",
            "html": "The binary is installed under your Go path. Make sure <code>$(go env GOPATH)/bin</code> is on your shell PATH."
          }
        ]
      },
      {
        "id": "2-prepare-kubernetes-and-agent-substrate",
        "title": "2. Prepare Kubernetes and Agent Substrate",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX does not run its distributed control plane in isolation. Its current architecture runs on Agent Substrate. You therefore need a Kubernetes cluster plus a reachable Agent Substrate Control API."
          },
          {
            "type": "paragraph",
            "html": "The repository's in-cluster example uses an Agent Substrate endpoint in the cluster. Do not copy an endpoint blindly into a different environment; use the address appropriate to your deployment."
          }
        ]
      },
      {
        "id": "3-configure-a-registry-and-ko",
        "title": "3. Configure a registry and `ko`",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX uses <code>ko</code> in its documented deployment workflow. Your target Kubernetes cluster must be able to pull images from the registry you select."
          },
          {
            "type": "paragraph",
            "html": "The official README currently uses a deployment command shaped like:"
          },
          {
            "type": "paragraph",
            "html": "`bash"
          },
          {
            "type": "paragraph",
            "html": "make deploy AX_IMAGE_REPO=&lt;your-registry&gt;"
          },
          {
            "type": "paragraph",
            "html": "`"
          },
          {
            "type": "paragraph",
            "html": "According to the repository, this deploys Redis and builds/deploys the AX control-plane images into the <code>ax-system</code> namespace."
          }
        ]
      },
      {
        "id": "4-understand-the-manifest-before-running-a-task",
        "title": "4. Understand the manifest before running a task",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX uses Kubernetes-style <code>ax.io/v1alpha1</code> resources. A practical task can combine several resources in one multi-document YAML file."
          },
          {
            "type": "paragraph",
            "html": "The four important kinds are:"
          },
          {
            "type": "list",
            "items": [
              "<strong>Task</strong> — the isolated workload.",
              "<strong>Workspace</strong> — Git repos, MCP servers, skills and environment preparation.",
              "<strong>Gateway</strong> — allowed network destinations and network policy.",
              "<strong>Model</strong> — model/provider configuration and credentials."
            ]
          },
          {
            "type": "paragraph",
            "html": "This separation is useful because an agent's code, environment, network permissions and model settings can be managed independently."
          }
        ]
      },
      {
        "id": "5-apply-a-task",
        "title": "5. Apply a task",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The repository includes an example manifest. The documented lifecycle begins with:"
          },
          {
            "type": "paragraph",
            "html": "`bash"
          },
          {
            "type": "paragraph",
            "html": "ax apply -f examples/task.yaml"
          },
          {
            "type": "paragraph",
            "html": "ax get tasks"
          },
          {
            "type": "paragraph",
            "html": "`"
          },
          {
            "type": "paragraph",
            "html": "Use the repository's current example as your starting point rather than inventing fields from older AX versions. v0.3.0 is a substantial architectural change and the API is still v1alpha1."
          }
        ]
      },
      {
        "id": "6-watch-what-the-task-is-doing",
        "title": "6. Watch what the task is doing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX provides a watch command for task phase and condition changes:"
          },
          {
            "type": "paragraph",
            "html": "`bash"
          },
          {
            "type": "paragraph",
            "html": "ax watch task &lt;task-name&gt;"
          },
          {
            "type": "paragraph",
            "html": "`"
          },
          {
            "type": "paragraph",
            "html": "For deeper inspection, <code>ax describe task &lt;task-name&gt;</code> returns human-readable details, while <code>ax get task &lt;task-name&gt;</code> can expose the full spec and live status."
          }
        ]
      },
      {
        "id": "7-debug-with-ssh",
        "title": "7. Debug with SSH",
        "blocks": [
          {
            "type": "paragraph",
            "html": "When a Task enables debug mode, AX documents an SSH-style command into its sandbox:"
          },
          {
            "type": "paragraph",
            "html": "`bash"
          },
          {
            "type": "paragraph",
            "html": "ax ssh &lt;task-name&gt;"
          },
          {
            "type": "paragraph",
            "html": "`"
          },
          {
            "type": "paragraph",
            "html": "You can also execute a one-off command, such as listing the workspace. Debug access should be enabled deliberately rather than assumed as a production default."
          }
        ]
      },
      {
        "id": "8-suspend-and-resume-an-agent",
        "title": "8. Suspend and resume an agent",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Agent workloads often wait for model responses, tools or human approval. AX exposes agent-specific lifecycle commands:"
          },
          {
            "type": "paragraph",
            "html": "`bash"
          },
          {
            "type": "paragraph",
            "html": "ax suspend task &lt;task-name&gt;"
          },
          {
            "type": "paragraph",
            "html": "ax resume task &lt;task-name&gt;"
          },
          {
            "type": "paragraph",
            "html": "`"
          },
          {
            "type": "paragraph",
            "html": "The project positions suspend/resume as a way to checkpoint idle state and continue later. Its performance claims should remain project-attributed until independently measured in your own environment."
          }
        ]
      },
      {
        "id": "9-lock-down-network-access-with-gateway",
        "title": "9. Lock down network access with Gateway",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not give an autonomous task unrestricted egress simply because the example environment works. Gateway resources are designed to define outbound hosts and ports. Use the smallest allowlist your agent actually needs."
          },
          {
            "type": "paragraph",
            "html": "Credentials and model access deserve the same treatment. The Model resource can centralize model configuration and use Kubernetes secrets, but teams remain responsible for secret handling and least privilege."
          }
        ]
      },
      {
        "id": "10-prepare-workspaces-deliberately",
        "title": "10. Prepare workspaces deliberately",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Workspace can pre-wire Git repositories, MCP servers and skills. AX also advertises generative workspace setup from a goal description. For reproducible production systems, record and review what the generated environment installs rather than treating generated setup as inherently trusted."
          }
        ]
      },
      {
        "id": "troubleshooting-checklist",
        "title": "Troubleshooting checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If a Task does not start, verify the active Kubernetes context, AX control-plane reachability, Agent Substrate endpoint, registry pull permissions, deployed namespace/components and the validity of your current v1alpha1 manifest."
          },
          {
            "type": "paragraph",
            "html": "If <code>ax ssh</code> fails, confirm the Task was created with debugging enabled. If an agent cannot reach an external API, inspect Gateway policy before assuming the model or tool is broken."
          }
        ]
      },
      {
        "id": "what-not-to-assume",
        "title": "What not to assume",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AX is not currently a stable managed SaaS with a fixed monthly price. It is open-source infrastructure. The official project also warns that breaking changes are likely before a stable release, so pinning versions and reading release notes is safer than depending on <code>latest</code> for production automation."
          }
        ]
      },
      {
        "id": "next-step",
        "title": "Next step",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After the first Task works, move from permissive examples to explicit Workspace, Gateway and Model resources, then test suspend/resume and failure recovery under the conditions your real agent will face."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://github.com/google/ax"
      },
      {
        "label": "Primary source",
        "url": "https://github.com/google/ax/releases/tag/v0.3.0"
      },
      {
        "label": "Primary source",
        "url": "https://agentexecutor.io/"
      },
      {
        "label": "Primary source",
        "url": "https://github.com/google/ax/blob/main/docs/runner.md"
      }
    ],
    "relatedPaths": [
      "/blog/google-agent-executor-ax"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Firecrawl Alexandria",
    "targetSearchIntent": "Understand Firecrawl Alexandria, its data sources, access methods, availability, pricing status, and how it differs from ordinary Firecrawl web search/scraping",
    "targetQuery": "Firecrawl Alexandria",
    "slug": "firecrawl-alexandria",
    "title": "Firecrawl Alexandria: API, MCP, Indexes & How It Works",
    "metaTitle": "Firecrawl Alexandria: API, MCP, Indexes & How It Works",
    "metaDescription": "Firecrawl Alexandria combines the live web, official providers and specialized indexes for AI agents. See how it works, access options, limits and pricing status.",
    "h1": "Firecrawl Alexandria: What It Is, How It Works & How to Use It",
    "excerpt": "Firecrawl Alexandria combines the live web, official providers and specialized indexes for AI agents. See how it works, access options, limits and pricing status.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for Firecrawl Alexandria: API, MCP, Indexes & How It Works",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Firecrawl launched Alexandria on September 22, 2026 as a knowledge layer for AI agents. Instead of forcing an agent to choose separately between web search, scraping, a specialist API and a private index, Alexandria is designed to give it one way to discover a source, inspect what that source contains and retrieve the relevant information."
          },
          {
            "type": "paragraph",
            "html": "The launch combines four broad source types: the live web, official data providers, site-specific or custom connectors, and Firecrawl's own specialized indexes. At launch, Firecrawl highlights Research, Developer and Government indexes. Its live homepage currently reports 113M+ indexed sources, 82 providers, 471 capabilities and 28 categories; these are live catalog figures and can change."
          },
          {
            "type": "paragraph",
            "html": "What makes Alexandria different from normal Firecrawl search? Firecrawl Search finds relevant pages on the live web and can return their content. Scrape turns a known URL into clean Markdown or structured data. Alexandria expands the retrieval surface beyond ordinary webpages. An agent can reach structured provider capabilities and specialized indexes as well as the live web, while keeping them inside the Firecrawl workflow."
          }
        ]
      },
      {
        "id": "how-it-works",
        "title": "How it works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Firecrawl says its Research Index contains tens of millions of scientific-paper abstracts, its Developer Index spans tens of millions of primary sources including documentation, READMEs, issues and merged pull requests, and its Government Index covers laws, regulations and ordinances. Those descriptions come from Firecrawl's launch materials; the exact coverage will evolve as the indexes are updated."
          },
          {
            "type": "paragraph",
            "html": "How do you access Alexandria? Firecrawl says developers can connect an AI agent through Firecrawl's MCP or build with the API. Its CLI also exposes Alexandria provider/capability addresses. Current CLI documentation shows that a provider capability can be supplied where a URL would normally appear, while the explicit --alexandria form remains supported. Tool addresses are validated as Alexandria capabilities and do not silently fall back to URL scraping."
          },
          {
            "type": "paragraph",
            "html": "A practical example is technical research. An agent could use the Developer Index for primary-source documentation, READMEs, issues and merged pull requests, then use live-web search for current announcements. Scientific research can similarly combine the Research Index with live sources. This matters because a retrieval system is often limited less by the language model than by whether it can find authoritative, current material in a predictable form."
          }
        ]
      },
      {
        "id": "implementation",
        "title": "Implementation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Firecrawl reports that agents using Alexandria scored 21% higher on answer quality than agents using built-in web tools across 845 tasks, using the same model and prompts with blind AI judging. Treat this as a vendor-run benchmark, not an independent evaluation. It is evidence about Firecrawl's own test setup, not proof that Alexandria will improve every agent or workload by 21%."
          },
          {
            "type": "paragraph",
            "html": "Pricing is less settled. Firecrawl's general service uses credits and publishes pricing for Search, Scrape, Crawl, Interact and Agent, but the Alexandria launch post does not establish a simple universal standalone Alexandria price. The homepage says the Research Index paper endpoints are free across categories, while other provider capabilities can have their own pricing. Check the live catalog and billing documentation before estimating production cost."
          },
          {
            "type": "paragraph",
            "html": "Alexandria also has a provider-side ambition. Firecrawl says it already pays official data providers through individual agreements, including Wikimedia Enterprise, and plans a self-service system that could let individuals, creators and organizations earn when agents use their knowledge. That self-service system is described as coming soon, so it should not be presented as generally available today."
          }
        ]
      },
      {
        "id": "limits-and-verification",
        "title": "Limits and verification",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Who is Alexandria for? The strongest fit is teams building research agents, coding agents, RAG systems, competitive-intelligence workflows, lead research, compliance research and other products where source quality matters. It is less relevant when an application already has a known URL and only needs a single scrape; ordinary Firecrawl Scrape remains the simpler primitive for that job."
          },
          {
            "type": "paragraph",
            "html": "The early takeaway is that Alexandria is not a new foundation model. It is retrieval infrastructure: a unified source and capability layer intended to give AI agents broader access to authoritative and specialized information. Its search opportunity is therefore likely to center on how to use it, API and MCP access, providers, indexes, pricing, comparisons with web-search APIs, and whether its retrieval quality holds up outside Firecrawl's own benchmark."
          },
          {
            "type": "paragraph",
            "html": "FAQ: Is Alexandria available now? Firecrawl says Alexandria starts now. Is it the same as Firecrawl Search? No; Search focuses on the live web, while Alexandria adds official providers, connectors and specialized indexes. Can agents use it through MCP? Firecrawl explicitly says yes. Is the 21% quality improvement independently verified? No; it is a Firecrawl-run evaluation. Is provider monetization live for everyone? No; Firecrawl says the self-service provider system is planned to open soon."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://www.firecrawl.dev/blog/introducing-alexandria-series-b"
      },
      {
        "label": "Primary source",
        "url": "https://www.firecrawl.dev/changelog"
      },
      {
        "label": "Primary source",
        "url": "https://www.firecrawl.dev/"
      },
      {
        "label": "Primary source",
        "url": "https://github.com/firecrawl/cli"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Firecrawl Alexandria",
    "targetSearchIntent": "Connect an AI agent to Firecrawl Alexandria and retrieve information from Alexandria providers/indexes through the supported MCP and CLI workflow",
    "targetQuery": "how to use Firecrawl Alexandria",
    "parentSlug": "firecrawl-alexandria",
    "slug": "how-to-use-firecrawl-alexandria",
    "title": "How to Use Firecrawl Alexandria with MCP & CLI",
    "metaTitle": "How to Use Firecrawl Alexandria: MCP & CLI Guide",
    "metaDescription": "Learn how Firecrawl Alexandria fits into an AI-agent workflow, how to install Firecrawl's CLI/skills, address provider capabilities, and avoid common setup mistakes.",
    "h1": "How to Use Firecrawl Alexandria with MCP & CLI",
    "excerpt": "Learn how Firecrawl Alexandria fits into an AI-agent workflow, how to install Firecrawl's CLI/skills, address provider capabilities, and avoid common setup mistakes.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for How to Use Firecrawl Alexandria with MCP & CLI",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Firecrawl Alexandria is designed to let an AI agent retrieve information from more than ordinary webpages. It combines the live web with official data providers, specialized connectors and Firecrawl indexes, while exposing those sources through the Firecrawl agent tooling."
          },
          {
            "type": "paragraph",
            "html": "The simplest official onboarding path is Firecrawl's CLI and agent skills. Firecrawl currently tells users to run <code>npx -y firecrawl-cli@latest init --all --browser</code>, then restart the AI agent so the installed skills are loaded. The initializer installs the CLI, handles browser-based authentication and installs Firecrawl skills across detected compatible agents. If you already use Firecrawl MCP, the Alexandria launch also says agents can connect through Firecrawl's MCP."
          },
          {
            "type": "paragraph",
            "html": "Before using Alexandria, separate three concepts. A URL points to a webpage and goes through normal web scraping. An Alexandria tool address identifies a provider/capability. A Firecrawl index is a specialized retrieval source such as the Research, Developer or Government index. Alexandria is the layer that makes those non-web sources available alongside the live web."
          }
        ]
      },
      {
        "id": "install-and-connect-firecrawl",
        "title": "Install and connect Firecrawl",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The CLI's current Alexandria shorthand is important. Firecrawl documents provider/capability addresses such as <code>benzinga/news/search</code> or <code>firecrawl-research-index/read</code>. You can pass one of these addresses to <code>firecrawl scrape</code> in place of a URL. The explicit <code>--alexandria</code> form remains supported. The CLI validates a tool address as a provider/capability and does not fall back to scraping it as though it were a website."
          },
          {
            "type": "paragraph",
            "html": "For example, the documentation shows a provider-style call shaped like <code>firecrawl scrape benzinga/news/search --options '{\"pageSize\":10}'</code>. It also shows the Research Index form <code>firecrawl scrape firecrawl-research-index/read --options '{\"paperId\":\"123\",\"query\":\"methodology\",\"k\":4}'</code>. These examples illustrate the addressing pattern; use the live catalog to confirm the exact capability and required arguments for the source you actually want."
          },
          {
            "type": "paragraph",
            "html": "Do not guess bare provider names. Firecrawl says a bare value such as <code>firecrawl scrape amazon</code> fails locally and points the user toward <code>firecrawl list</code> or a suggested website URL. That guardrail matters because Alexandria tool addresses and ordinary URLs represent different operations. The CLI also rejects mixing URLs and Alexandria tools in the same scrape command."
          }
        ]
      },
      {
        "id": "use-alexandria-providers-and-indexes",
        "title": "Use Alexandria providers and indexes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A good research workflow starts by deciding which source class best matches the question. For a current announcement, use the live web. For scientific literature, inspect the Research Index. For code and developer questions, the Developer Index can surface documentation, READMEs, issues and merged pull requests. For laws or regulations, the Government Index may be more appropriate. A robust agent can combine specialized retrieval with live-web verification instead of assuming one source is sufficient."
          },
          {
            "type": "paragraph",
            "html": "For coding-agent workflows, install the Firecrawl skill, restart the agent, then ask it to use Firecrawl for source discovery and retrieval. Firecrawl's own launch instructions explicitly position MCP and the API as integration routes. Keep credentials out of prompts and source code; use the authentication mechanism and environment/configuration path supported by the client you are running."
          },
          {
            "type": "paragraph",
            "html": "Alexandria is not a reason to replace every Firecrawl primitive. If you already know the webpage URL, Scrape is usually the direct choice. If you need to discover current pages, Search is appropriate. Crawl is useful for walking a site. Alexandria becomes useful when the agent should discover or query official providers and specialized indexes in the same broader retrieval workflow."
          }
        ]
      },
      {
        "id": "choose-sources-and-control-cost",
        "title": "Choose sources and control cost",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cost handling requires caution. Firecrawl publishes a general credit system, and its homepage says Research Index paper endpoints are free across categories, but the Alexandria launch does not define one universal standalone price for every provider and capability. Provider-specific costs can differ. Production code should therefore inspect current pricing/capability metadata and set spend controls rather than assuming all Alexandria calls have the same credit cost."
          },
          {
            "type": "paragraph",
            "html": "Troubleshooting: if a tool address is rejected, list available capabilities and verify the exact provider/capability path. If the agent behaves as though Alexandria does not exist after CLI setup, restart the agent so installed skills are loaded. If a command is being interpreted as a website scrape, check that you supplied a valid Alexandria tool address rather than an unqualified name. If results are incomplete, supplement the specialized source with live-web search and verify against primary sources."
          },
          {
            "type": "paragraph",
            "html": "Finally, treat Firecrawl's quality benchmark as directional evidence. Firecrawl reports a 21% answer-quality improvement across 845 internally evaluated tasks when Alexandria was compared with built-in web tools using the same model and prompts. That does not guarantee a 21% improvement in your workload. Evaluate your own source mix, retrieval accuracy, latency and cost before making Alexandria a production dependency."
          }
        ]
      },
      {
        "id": "troubleshooting-and-evaluation",
        "title": "Troubleshooting and evaluation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The practical pattern is simple: install or connect Firecrawl, identify the right Alexandria source or capability, call it through the supported agent tooling, combine it with live-web retrieval where useful, and preserve source attribution so the model's answer can be checked."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://www.firecrawl.dev/blog/introducing-alexandria-series-b"
      },
      {
        "label": "Primary source",
        "url": "https://github.com/firecrawl/cli"
      },
      {
        "label": "Primary source",
        "url": "https://www.firecrawl.dev/"
      },
      {
        "label": "Primary source",
        "url": "https://www.firecrawl.dev/blog/introducing-firecrawl-skill-and-cli"
      }
    ],
    "relatedPaths": [
      "/blog/firecrawl-alexandria"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "ABBYY FineParser",
    "targetSearchIntent": "Understand ABBYY FineParser, what it does, how it deploys, its free-tier/pricing status, supported outputs and languages, privacy model, RAG/agent use cases, and current limitations",
    "targetQuery": "ABBYY FineParser",
    "slug": "abbyy-fineparser",
    "title": "ABBYY FineParser: Pricing, Docker, DocLang & RAG Guide",
    "metaTitle": "ABBYY FineParser: Pricing, Docker, DocLang & RAG Guide",
    "metaDescription": "ABBYY FineParser explained: CPU-only Docker deployment, 208-language support, DocLang/JSON output, free tier, privacy model, RAG use cases and limits.",
    "h1": "ABBYY FineParser: Self-Hosted Document Parsing for RAG and AI Agents",
    "excerpt": "ABBYY FineParser explained: CPU-only Docker deployment, 208-language support, DocLang/JSON output, free tier, privacy model, RAG use cases and limits.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for ABBYY FineParser: Pricing, Docker, DocLang & RAG Guide",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ABBYY launched FineParser on September 22, 2026 as a self-hosted document parser designed for RAG pipelines, LLM applications and AI agents. The product runs in a CPU-only Docker container, so teams can process documents inside their own infrastructure rather than sending files to an external parsing service."
          }
        ]
      },
      {
        "id": "what-is-abbyy-fineparser",
        "title": "What is ABBYY FineParser?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "FineParser converts business documents into structured, AI-ready representations while attempting to preserve reading order, tables, headings and hierarchy. ABBYY lists DocLang, JSON, ALTO and XML among its outputs. It is built on ABBYY FineReader Engine technology and targets ingestion problems that occur before retrieval or generation."
          }
        ]
      },
      {
        "id": "availability-and-free-tier",
        "title": "Availability and free tier",
        "blocks": [
          {
            "type": "paragraph",
            "html": "FineParser is available now. ABBYY says the self-serve free tier supports up to 1,000 pages per month for the first year. A license key is issued after signup. This article does not quote a paid-tier price because a simple verified paid price was not established from the primary sources reviewed."
          }
        ]
      },
      {
        "id": "cpu-only-and-self-hosted-deployment",
        "title": "CPU-only and self-hosted deployment",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A central differentiator is deployment: ABBYY packages FineParser as a CPU-only Docker container and says it can be deployed in under five minutes. No GPU or cloud dependency is required for the parser itself. Documents can therefore remain inside a customer's environment; ABBYY says document data is not transmitted to ABBYY or third parties. Air-gapped deployments are also addressed through FineReader Engine."
          }
        ]
      },
      {
        "id": "languages-and-document-types",
        "title": "Languages and document types",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ABBYY documents support for 208 languages and scripts, including Chinese, Japanese, Korean, Arabic, Hebrew, Indic languages, Thai, Latin and Cyrillic character sets. Its preprocessing is intended for scans, photographed documents, forms, handwriting and barcodes as well as ordinary digital documents."
          }
        ]
      },
      {
        "id": "why-doclang-matters",
        "title": "Why DocLang matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "FineParser can emit DocLang, an open document representation developed through collaboration involving ABBYY, IBM, NVIDIA, Red Hat and the Linux Foundation. The goal is to preserve document structure in a representation more suitable for AI ingestion than flattening every document into plain text. ABBYY argues this can reduce downstream reconstruction work and token load; those cost and quality benefits should be treated as vendor claims until independently measured for a specific workload."
          }
        ]
      },
      {
        "id": "fineparser-for-rag-and-agents",
        "title": "FineParser for RAG and agents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The most obvious workflow is document ingestion: parse a PDF or scan, preserve structure, then feed the structured result into chunking, indexing and retrieval. The same approach can support document-aware agents that need reliable tables, headings or field context. FineParser does not replace embeddings, a vector database, retrieval logic or the downstream language model."
          }
        ]
      },
      {
        "id": "limitations-and-unanswered-questions",
        "title": "Limitations and unanswered questions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ABBYY's launch material does not establish a universal minimum RAM/CPU specification or a simple paid-tier price. Parsing quality will also vary by document type, scan quality and layout. Claims about reducing hallucinations or token costs originate from ABBYY and should not be read as independent guarantees."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is FineParser free?"
          },
          {
            "type": "paragraph",
            "html": "A free tier is available for up to 1,000 pages per month for the first year, according to ABBYY."
          },
          {
            "type": "subheading",
            "text": "Does FineParser require a GPU?"
          },
          {
            "type": "paragraph",
            "html": "ABBYY describes the Docker deployment as CPU-only."
          },
          {
            "type": "subheading",
            "text": "Is FineParser cloud-only?"
          },
          {
            "type": "paragraph",
            "html": "No. Its main positioning is self-hosted processing inside the customer's environment."
          },
          {
            "type": "subheading",
            "text": "What formats does it output?"
          },
          {
            "type": "paragraph",
            "html": "ABBYY lists DocLang, JSON, ALTO and XML."
          },
          {
            "type": "subheading",
            "text": "Does FineParser replace an LLM or RAG stack?"
          },
          {
            "type": "paragraph",
            "html": "No. It prepares documents for downstream AI systems; retrieval, embeddings and generation remain separate layers."
          }
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Primary sources: ABBYY's September 22 launch announcement, ABBYY's FineParser introduction, and ABBYY support documentation for licensing."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://www.abbyy.com/company/news/abbyy-launches-fineparser-enterprise-document-parsing/"
      },
      {
        "label": "Primary source",
        "url": "https://www.abbyy.com/blog/introducing-fineparser-document-parser/"
      },
      {
        "label": "Primary source",
        "url": "https://support.abbyy.com/hc/en-us/articles/39029644378386-How-do-I-find-my-FineParser-license-key"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "ABBYY FineParser",
    "targetSearchIntent": "Get FineParser running locally/self-hosted with its Docker workflow, license key, input/output choices, and safe first-production evaluation steps",
    "targetQuery": "how to install ABBYY FineParser",
    "parentSlug": "abbyy-fineparser",
    "slug": "how-to-install-abbyy-fineparser-docker",
    "title": "How to Install ABBYY FineParser with Docker",
    "metaTitle": "How to Install ABBYY FineParser with Docker",
    "metaDescription": "Set up ABBYY FineParser safely: signup and license key, CPU-only Docker deployment, output choices, RAG evaluation workflow, privacy and production checks.",
    "h1": "How to Install ABBYY FineParser with Docker",
    "excerpt": "Set up ABBYY FineParser safely: signup and license key, CPU-only Docker deployment, output choices, RAG evaluation workflow, privacy and production checks.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-23",
    "dateModified": "2026-09-23",
    "ogAlt": "Project Monet editorial illustration for How to Install ABBYY FineParser with Docker",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ABBYY FineParser is delivered as a self-hosted, CPU-only Docker container for document parsing in RAG, LLM and agent workflows. This guide focuses on the verified setup path and deliberately avoids guessing Docker image names, ports or command-line flags that ABBYY may change."
          }
        ]
      },
      {
        "id": "before-you-start",
        "title": "Before you start",
        "blocks": [
          {
            "type": "paragraph",
            "html": "You need a machine capable of running Docker and a FineParser account/license. ABBYY says the product does not require a GPU. The launch material does not provide a universal minimum CPU or RAM requirement, so size the host against your own document volume and test set rather than treating an unofficial hardware estimate as a requirement."
          }
        ]
      },
      {
        "id": "1-sign-up-and-obtain-the-license-key",
        "title": "1. Sign up and obtain the license key",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start from FineParser's official signup flow. ABBYY's support documentation says the FineParser license key is sent by email after signup. If the email is unavailable, ABBYY directs users to retrieve account information through its Revenera licensing tool."
          }
        ]
      },
      {
        "id": "2-use-abbyy-s-current-docker-instructions",
        "title": "2. Use ABBYY's current Docker instructions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "FineParser is distributed as a CPU-only Docker container. Use the image reference and launch command shown in the current FineParser documentation or account onboarding material. Do not copy an old image tag or community command without checking it against ABBYY's current instructions."
          }
        ]
      },
      {
        "id": "3-keep-document-processing-inside-your-environment",
        "title": "3. Keep document processing inside your environment",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The self-hosted model is one of FineParser's main design choices. ABBYY states that document data is processed inside the customer's environment and is not transmitted to ABBYY or third-party services. For regulated workloads, still validate container networking, logs, mounted volumes, backups and your own infrastructure policies before production use."
          }
        ]
      },
      {
        "id": "4-choose-the-output-for-the-downstream-job",
        "title": "4. Choose the output for the downstream job",
        "blocks": [
          {
            "type": "paragraph",
            "html": "FineParser supports structured outputs including DocLang, JSON, ALTO and XML. JSON may fit application pipelines that already expect structured objects. ALTO/XML can be useful when existing document-processing systems depend on those formats. DocLang is specifically positioned for AI-oriented document representation and preservation of document structure."
          }
        ]
      },
      {
        "id": "5-test-difficult-documents-before-connecting-an-llm",
        "title": "5. Test difficult documents before connecting an LLM",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Build a representative evaluation set: multi-column PDFs, tables, scans, photographs, forms, multilingual pages and poor-quality inputs. Compare extracted reading order, table structure, headings and missing content against the source. A parser that works on clean PDFs can still fail on the documents that matter most to your application."
          }
        ]
      },
      {
        "id": "6-connect-parsing-to-the-rag-pipeline",
        "title": "6. Connect parsing to the RAG pipeline",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Treat FineParser as the ingestion layer. A typical architecture is document → FineParser structured output → chunking/normalization → embedding/indexing → retrieval → LLM or agent. FineParser does not replace the vector store, retriever or model."
          }
        ]
      },
      {
        "id": "7-measure-quality-and-cost-on-your-workload",
        "title": "7. Measure quality and cost on your workload",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ABBYY argues that structured parsing can reduce unnecessary downstream tokens and errors caused by flattened documents. Validate that claim with your own corpus. Track extraction correctness, retrieval quality, downstream answer quality, processing latency, host cost and token usage before and after the parser change."
          }
        ]
      },
      {
        "id": "free-tier-boundary",
        "title": "Free-tier boundary",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ABBYY says FineParser's free tier supports up to 1,000 pages per month for the first year. Paid pricing was not verified from the primary launch material reviewed for this article, so this guide does not invent a post-free-tier price."
          }
        ]
      },
      {
        "id": "troubleshooting-principles",
        "title": "Troubleshooting principles",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If output is wrong, first isolate whether the problem comes from image quality, OCR, reading order, table reconstruction or the downstream chunking step. If licensing fails, verify the key issued after signup and use ABBYY's documented Revenera recovery path. For container-level errors, use ABBYY's current product documentation because image tags and runtime instructions can change."
          }
        ]
      },
      {
        "id": "production-checklist",
        "title": "Production checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pin the documented container version, test representative documents, verify network/data residency controls, monitor resource use, keep raw source documents for regression testing, and record parser-version changes alongside retrieval-quality changes."
          }
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Primary sources: ABBYY FineParser launch announcement, ABBYY's product introduction, and ABBYY FineParser license-key support documentation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Primary source",
        "url": "https://www.abbyy.com/company/news/abbyy-launches-fineparser-enterprise-document-parsing/"
      },
      {
        "label": "Primary source",
        "url": "https://www.abbyy.com/blog/introducing-fineparser-document-parser/"
      },
      {
        "label": "Primary source",
        "url": "https://support.abbyy.com/hc/en-us/articles/39029644378386-How-do-I-find-my-FineParser-license-key"
      }
    ],
    "relatedPaths": [
      "/blog/abbyy-fineparser"
    ]
  }
];
