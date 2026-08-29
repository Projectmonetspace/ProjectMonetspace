import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-29";

const portableComputerMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Perplexity Portable Computer",
  targetSearchIntent:
    "Broad overview of Perplexity Portable Computer, what runs locally, launch hardware/OS, supported local models, connectors, cloud escalation, privacy and availability",
  targetQuery: "Perplexity Portable Computer",
  slug: "perplexity-portable-computer",
  title: "Perplexity Portable Computer: Local AI, DGX Spark, Models & Availability",
  metaTitle: "Perplexity Portable Computer: Local AI, DGX Spark & Availability",
  metaDescription:
    "Perplexity Portable Computer runs its agent stack locally on NVIDIA DGX Spark with Qwen 3.8 27B or PPLX 27B, optional cloud escalation and private on-device workflows.",
  h1: "Perplexity Portable Computer Runs Its AI Agent Locally on NVIDIA DGX Spark",
  excerpt:
    "Perplexity’s Portable Computer moves its agent orchestration onto DGX Spark at launch, keeping many files and tasks local while allowing permissioned cloud escalation when needed.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt:
    "Project Monet editorial diagram showing a local AI workstation processing private files with an optional permission-controlled path to cloud search, models and connectors",
  sections: [
    {
      id: "launch",
      title: "What Perplexity Portable Computer is",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity announced Portable Computer on August 25, 2026 as a local-first version of its Computer agent. The launch puts the orchestrator, planner, tool router, scheduler, durable task queue and local search index on NVIDIA hardware instead of requiring every workflow step to run remotely.",
        },
        {
          type: "paragraph",
          html: "Perplexity describes the system as hybrid rather than universally offline: local work can stay on the device, while tasks that need current web information, connected apps or stronger remote reasoning can escalate to cloud capabilities with user permission.",
        },
      ],
    },
    {
      id: "hardware",
      title: "Launch hardware and operating system",
      blocks: [
        {
          type: "paragraph",
          html: "The first release targets NVIDIA DGX Spark on Linux and is available to eligible Perplexity Pro and Max subscribers. DGX Spark is built around NVIDIA’s GB10 Grace Blackwell platform with a 20-core Arm CPU, NVIDIA GPU and 128 GB of unified memory.",
        },
        {
          type: "note",
          html: "Perplexity says Windows plus broader GeForce RTX and RTX PRO PC support are coming later. The launch material does not provide a universal future RTX VRAM requirement or a guaranteed rollout date, so those should not be invented.",
        },
      ],
    },
    {
      id: "models",
      title: "Which local models does it use?",
      blocks: [
        {
          type: "paragraph",
          html: "At launch, Portable Computer can use Qwen 3.8 27B or PPLX 27B. Perplexity describes PPLX 27B as a post-trained model designed for local knowledge work and for deciding when an authorized remote capability is useful.",
        },
        {
          type: "paragraph",
          html: "Perplexity also announced NVIDIA Nemotron 3.5 Lightning as coming to the model picker. Treat that as announced future support until it is actually exposed in the released product.",
        },
      ],
    },
    {
      id: "local",
      title: "What stays local",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity says local models can read and search local files, work across documents and code, take actions on the device and keep jobs running. Dictation can also run locally using NVIDIA’s Nemotron 3.5 ASR model.",
        },
        {
          type: "paragraph",
          html: "Code and tool execution are described as running inside isolated sandboxes with controlled access to files and connected apps. That is an important security boundary, but users should still review destructive actions and external writes.",
        },
      ],
    },
    {
      id: "cloud",
      title: "When Portable Computer uses the cloud",
      blocks: [
        {
          type: "paragraph",
          html: "A task can escalate to Perplexity search, research modes, browser tools, connected apps or more than 15 frontier models when the local system needs outside information or stronger remote reasoning. Perplexity says the user is asked for permission before device content is sent to a cloud service.",
        },
        {
          type: "note",
          html: "Local-first does not mean every workflow is fully offline. Once a user authorizes web access or a connected cloud app, that part of the task crosses the device boundary.",
        },
      ],
    },
    {
      id: "connectors",
      title: "Connectors and external apps",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity lists integrations including Google Drive, Gmail, Slack and GitHub. These connectors let a workflow combine local context with app data, subject to the permissions and authorization required by each service.",
        },
        {
          type: "paragraph",
          html: "Use the minimum permissions needed for a workflow, especially when the local files contain confidential business material or private code.",
        },
      ],
    },
    {
      id: "credits",
      title: "Does local work consume Perplexity credits?",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity says work handled locally does not consume credits. That can make repetitive or context-heavy workloads more practical on owned hardware, but it does not mean the product has no cost: launch access requires eligible Pro or Max membership and supported NVIDIA hardware.",
        },
        {
          type: "paragraph",
          html: "Perplexity’s launch material does not publish a separate standalone Portable Computer price or a universal quota schedule, so a precise additional pricing table should not be fabricated.",
        },
      ],
    },
    {
      id: "setup",
      title: "How to get started on DGX Spark",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity says eligible DGX Spark users can use a one-click installation flow through the Perplexity app. For the practical validation sequence, see <a href=\"/blog/how-to-use-perplexity-portable-computer-dgx-spark\">how to install and use Portable Computer on DGX Spark</a>.",
        },
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      blocks: [
        {
          type: "paragraph",
          html: "Portable Computer is a hybrid local/cloud agent architecture: it keeps orchestration and many private-data tasks on DGX Spark at launch while allowing explicit escalation to current web information, connected applications and remote models. Windows, broader RTX support and Nemotron 3.5 Lightning in the picker remain announced future expansion rather than launch availability.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Perplexity — Introducing Portable Computer for local-first AI",
      url: "https://www.perplexity.ai/uk/hub/blog/introducing-portable-computer-for-local-first-ai",
    },
    {
      label: "Perplexity — A Local-First Agent for Private and Cost-Effective Knowledge Work",
      url: "https://www.perplexity.ai/hub/blog/a-local-first-agent-for-private-and-cost-effective-knowledge-work",
    },
    {
      label: "NVIDIA — local AI, open models and agents",
      url: "https://blogs.nvidia.com/blog/local-ai-open-source-models-agents-nemotron/",
    },
  ],
  relatedPaths: ["/blog/how-to-use-perplexity-portable-computer-dgx-spark"],
};

const portableComputerGuide: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Perplexity Portable Computer",
  targetSearchIntent:
    "Practical setup and first-use guide for eligible Pro/Max users running Perplexity Portable Computer on NVIDIA DGX Spark Linux, including local model choice, permissions, connectors and validation",
  targetQuery: "how to install Perplexity Portable Computer",
  parentSlug: "perplexity-portable-computer",
  slug: "how-to-use-perplexity-portable-computer-dgx-spark",
  title: "How to Install and Use Perplexity Portable Computer on NVIDIA DGX Spark",
  metaTitle: "How to Use Perplexity Portable Computer on NVIDIA DGX Spark",
  metaDescription:
    "Set up Perplexity Portable Computer on NVIDIA DGX Spark, choose Qwen 3.8 27B or PPLX 27B, understand local vs cloud execution, and validate connectors safely.",
  h1: "How to Install and Use Perplexity Portable Computer on NVIDIA DGX Spark",
  excerpt:
    "A launch-configuration guide for eligible Pro and Max users setting up Portable Computer on DGX Spark Linux and validating local work before adding cloud tools and connectors.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt:
    "Project Monet setup flow showing a DGX Spark-style workstation, local model selection, private files, a permission prompt and optional cloud connectors",
  sections: [
    {
      id: "requirements",
      title: "Step 1: confirm the launch requirements",
      blocks: [
        {
          type: "paragraph",
          html: "At launch, Portable Computer is for eligible Perplexity Pro or Max users on NVIDIA DGX Spark running Linux. For the product-level context, see the <a href=\"/blog/perplexity-portable-computer\">Perplexity Portable Computer overview</a>.",
        },
        {
          type: "note",
          html: "Do not use this launch guide as a Windows or generic RTX setup guide. Perplexity says those paths are coming later and has not published universal future RTX minimum-VRAM requirements.",
        },
      ],
    },
    {
      id: "install",
      title: "Step 2: install through the Perplexity app",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity says DGX Spark users can set up Portable Computer through the Perplexity app with a one-click installation flow. Use the current product-provided installer rather than copying unofficial shell commands.",
        },
        {
          type: "paragraph",
          html: "The launch material does not publish a universal daemon name, port layout or manual package sequence, so those details should not be invented in a setup guide.",
        },
      ],
    },
    {
      id: "model",
      title: "Step 3: choose the local model",
      blocks: [
        {
          type: "paragraph",
          html: "The launch model choices are Qwen 3.8 27B and PPLX 27B. Perplexity positions PPLX 27B as a post-trained local-work model that can complete tasks on-device and decide when an authorized cloud capability may be useful.",
        },
        {
          type: "note",
          html: "NVIDIA Nemotron 3.5 Lightning is announced as coming to the picker; do not describe it as a launch model until Perplexity exposes it in the released product.",
        },
      ],
    },
    {
      id: "local-test",
      title: "Step 4: begin with a local-only task",
      blocks: [
        {
          type: "paragraph",
          html: "Before connecting external services, give Portable Computer a task that can be completed from local files—for example summarizing a folder, searching a private document set or classifying local material. Confirm that the task can complete without a remote step.",
        },
        {
          type: "paragraph",
          html: "Perplexity says local work does not consume credits, so this is also a useful baseline for understanding which workloads remain on-device.",
        },
      ],
    },
    {
      id: "cloud-test",
      title: "Step 5: test cloud escalation deliberately",
      blocks: [
        {
          type: "paragraph",
          html: "Next, ask for something that genuinely requires current web information or a remote model. Portable Computer can escalate selected steps to Perplexity search, research, browser tools or frontier models, and Perplexity says the user is asked for permission before device content is sent to the cloud.",
        },
        {
          type: "paragraph",
          html: "Read that authorization step carefully when the local task contains confidential documents, private code or sensitive business material.",
        },
      ],
    },
    {
      id: "connectors",
      title: "Step 6: add connectors only when needed",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity lists Google Drive, Gmail, Slack and GitHub among supported integrations. Connecting one creates an intentional boundary between local processing and an external service, so start with the minimum access needed for the workflow.",
        },
        {
          type: "paragraph",
          html: "A workflow that reads or writes through Gmail, Drive, Slack or GitHub should not be described as fully on-device simply because its orchestration began locally.",
        },
      ],
    },
    {
      id: "validation",
      title: "Step 7: validate the hybrid workflow",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Process one local document without cloud escalation",
            "Request current web information and confirm the authorization step",
            "Connect one external app and test a limited read action",
            "Identify which steps stayed local and which crossed to a remote service",
            "Repeat with the other launch local model if you want to compare behavior",
          ],
        },
        {
          type: "paragraph",
          html: "This tests Portable Computer’s defining local/cloud boundary rather than only confirming that the application launches.",
        },
      ],
    },
    {
      id: "security",
      title: "Step 8: keep sandboxing and human review in the loop",
      blocks: [
        {
          type: "paragraph",
          html: "Perplexity says code and tool execution uses isolated sandboxes with controlled file and app access. Continue reviewing destructive file operations, repository changes, messages and external writes, and use backups or version control where appropriate.",
        },
      ],
    },
    {
      id: "rollout",
      title: "Do not assume future Windows and RTX behavior",
      blocks: [
        {
          type: "paragraph",
          html: "Windows plus broader GeForce RTX and RTX PRO support are announced as coming later. Until those builds ship, third-party claims about exact supported cards, VRAM minimums, installer commands or rollout dates should not be treated as official Perplexity requirements.",
        },
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      blocks: [
        {
          type: "paragraph",
          html: "The launch setup is intentionally product-driven: eligible account, DGX Spark Linux, current Perplexity app, local-model choice, a local-only validation task, then permissioned cloud capabilities and connectors. Add each external boundary only after the local baseline works.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "Perplexity — Introducing Portable Computer for local-first AI",
      url: "https://www.perplexity.ai/uk/hub/blog/introducing-portable-computer-for-local-first-ai",
    },
    {
      label: "Perplexity — A Local-First Agent for Private and Cost-Effective Knowledge Work",
      url: "https://www.perplexity.ai/hub/blog/a-local-first-agent-for-private-and-cost-effective-knowledge-work",
    },
    {
      label: "NVIDIA — local AI, open models and agents",
      url: "https://blogs.nvidia.com/blog/local-ai-open-source-models-agents-nemotron/",
    },
  ],
  relatedPaths: ["/blog/perplexity-portable-computer"],
};

export const perplexityPortableArticles: BlogArticle[] = [portableComputerMain, portableComputerGuide];
