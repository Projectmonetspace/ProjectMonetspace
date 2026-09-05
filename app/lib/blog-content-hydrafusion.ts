import type { BlogArticle } from "./blog-types.ts";

const hydraFusionSources = [
  { label: "GitHub Blog — Project HydraFusion", url: "https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/" },
  { label: "GitHub Docs — Copilot model selection", url: "https://docs.github.com/en/copilot/concepts/auto-model-selection-and-model-picker" },
  { label: "GitHub — Copilot CLI", url: "https://github.com/github/copilot-cli" },
];

export const hydraFusionArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Project HydraFusion",
    targetSearchIntent: "Broad overview of GitHub Copilot Project HydraFusion, how its multi-model orchestration works, availability, setup, billing, benchmark claims, limitations, and who should use the research preview",
    targetQuery: "GitHub HydraFusion",
    slug: "github-copilot-hydrafusion",
    title: "GitHub HydraFusion: Multi-Model Copilot, Setup & Benchmarks",
    metaTitle: "GitHub HydraFusion: Multi-Model Copilot, Setup & Benchmarks",
    metaDescription: "GitHub Project HydraFusion is a Copilot research preview that orchestrates multiple AI models at runtime. Learn how it works, setup, billing and benchmark limits.",
    h1: "GitHub Project HydraFusion: How Copilot’s Multi-Model Orchestration Works",
    excerpt: "Project HydraFusion is a GitHub Copilot CLI research preview that can route one coding request through Single, Cascade or Critique workflows across multiple models.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "GitHub Project HydraFusion multi-model orchestration in Copilot CLI",
    sections: [
      { id: "what-is-hydrafusion", title: "What GitHub Project HydraFusion is", blocks: [
        { type: "paragraph", html: "GitHub introduced Project HydraFusion on September 4, 2026 as a research preview inside GitHub Copilot CLI. Rather than binding a request to one model, HydraFusion can choose a compound execution plan using models from multiple providers." },
        { type: "paragraph", html: "GitHub frames the system as runtime orchestration: the developer selects HydraFusion, while the service decides which workflow is most likely to meet a quality target while balancing cost and latency. It is not a new foundation model." },
      ]},
      { id: "workflows", title: "Single, Cascade and Critique workflows", blocks: [
        { type: "paragraph", html: "HydraFusion currently chooses among three patterns. Single uses one selected model. Cascade starts with a more efficient model and escalates only when a quality gate rejects the first result. Critique has one model draft, another model family review in an isolated read-only context, and the original drafting model revise once." },
        { type: "paragraph", html: "The preview automatically selects the workflow for each request. Developers are not choosing Single, Cascade or Critique manually for every prompt in the launch implementation." },
      ]},
      { id: "availability-setup", title: "Availability and launch setup", blocks: [
        { type: "paragraph", html: "As of September 5, 2026, GitHub says HydraFusion is available to users on all GitHub Copilot plans through the experimental feature path in Copilot CLI." },
        { type: "list", ordered: true, items: ["Run <code>/update</code> in Copilot CLI.", "Run <code>/experimental on</code>.", "Run <code>/model</code> and select <code>HydraFusion (Research Preview)</code>."] },
      ]},
      { id: "billing", title: "How HydraFusion billing works", blocks: [
        { type: "paragraph", html: "GitHub says usage is based on the tokens consumed by the underlying models HydraFusion invokes, with those tokens priced at each model's standard rate. There is no published separate HydraFusion orchestration surcharge in the launch announcement." },
        { type: "paragraph", html: "A Critique or Cascade workflow can contain multiple inference legs, so a single request can consume usage across drafting, review, revision, escalation, retries or fallbacks. The system is designed to reduce expensive calls where possible, not to guarantee that every request is cheaper than one direct model call." },
      ]},
      { id: "benchmarks", title: "GitHub's benchmark claims and what they mean", blocks: [
        { type: "paragraph", html: "GitHub reports controlled offline evaluations on TerminalBench 2.1, DeepSWE and CheckpointBench. Relative to Claude Opus 5, GitHub reports 4.9 percentage points higher verified quality at 67% lower estimated cost on TerminalBench 2.1, 1.5 points lower quality at 36% lower cost on DeepSWE, and 0.1 points lower quality at 65% lower cost on CheckpointBench." },
        { type: "note", html: "These are GitHub-run benchmark results using specific benchmark revisions, model pools, routing policies and pricing assumptions. They should not be treated as independent evidence that every repository or developer will see the same savings." },
      ]},
      { id: "safety-controls", title: "Repository-state and execution controls", blocks: [
        { type: "paragraph", html: "GitHub describes complete accounting, bounded execution, isolated review, fail-safe patch application and validated routing as core operating principles. Critic steps are tool-less, while solver steps remain in the normal permission-aware agent loop." },
        { type: "paragraph", html: "HydraFusion also withholds intermediate drafts and returns one coherent result because some intermediate work may later be revised, escalated or discarded. That improves final-state clarity but can make long compound workflows feel less transparent while they run." },
      ]},
      { id: "limitations", title: "Who should try it and current limitations", blocks: [
        { type: "paragraph", html: "The preview is most relevant to developers already using Copilot CLI who want to test cost-aware routing, model-independent critique and compound coding workflows. GitHub currently recommends substantial, well-scoped first-turn coding tasks as a good starting point." },
        { type: "paragraph", html: "HydraFusion remains a research preview. Models, commands, routing behavior, latency, availability and billing details can change, and teams with strict production guarantees should validate it on their own repositories before making it a default path." },
      ]},
    ],
    sources: hydraFusionSources,
    relatedPaths: ["/blog/how-to-use-github-hydrafusion"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Project HydraFusion",
    targetSearchIntent: "Enable Project HydraFusion in GitHub Copilot CLI, understand the preview workflow, choose suitable tasks, interpret runtime stages and control cost and expectations during testing",
    targetQuery: "how to use GitHub HydraFusion",
    parentSlug: "github-copilot-hydrafusion",
    slug: "how-to-use-github-hydrafusion",
    title: "How to Use GitHub HydraFusion in Copilot CLI",
    metaTitle: "How to Use GitHub HydraFusion in Copilot CLI",
    metaDescription: "Learn how to enable GitHub Project HydraFusion in Copilot CLI, what Single/Cascade/Critique do, how billing works, and what to test in the research preview.",
    h1: "How to Enable and Use GitHub HydraFusion in Copilot CLI",
    excerpt: "Enable HydraFusion from Copilot CLI's experimental features, then test it on focused repository tasks while comparing quality, latency and usage against your normal model choice.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Enabling GitHub HydraFusion research preview in Copilot CLI",
    sections: [
      { id: "before-you-start", title: "Before you start", blocks: [
        { type: "paragraph", html: "You need GitHub Copilot access and GitHub Copilot CLI. GitHub's September 4 launch announcement says the HydraFusion research preview is available on all Copilot plans through the CLI experimental path." },
        { type: "paragraph", html: "Because this is experimental functionality, update the CLI and recheck the current model picker before assuming launch-day commands or labels will remain unchanged." },
      ]},
      { id: "enable", title: "1. Enable HydraFusion in Copilot CLI", blocks: [
        { type: "list", ordered: true, items: ["Run <code>/update</code> to install the latest Copilot CLI version.", "Run <code>/experimental on</code>.", "Run <code>/model</code>.", "Select <code>HydraFusion (Research Preview)</code>."] },
        { type: "paragraph", html: "You do not install HydraFusion as a separate package or model. Once selected, you continue using Copilot CLI normally while HydraFusion decides which internal workflow to run." },
      ]},
      { id: "workflow", title: "2. Understand what happens after selection", blocks: [
        { type: "paragraph", html: "Single sends the task to one model. Cascade starts with an efficient model and may escalate to a stronger model. Critique has one model draft, an isolated model family review it without tools, and the drafting model revise once." },
        { type: "paragraph", html: "HydraFusion chooses the route automatically. A longer response time can therefore mean additional review or escalation rather than a stalled CLI session." },
      ]},
      { id: "test-tasks", title: "3. Start with focused repository tasks", blocks: [
        { type: "list", items: ["a focused bug fix", "a code-generation task with clear acceptance criteria", "debugging a failing test", "a repository-level change that benefits from independent review"] },
        { type: "paragraph", html: "GitHub currently recommends substantial, well-scoped first-turn tasks for the preview. Avoid judging the router from one prompt because different tasks can take different execution paths." },
      ]},
      { id: "cost", title: "4. Track quality, latency and usage together", blocks: [
        { type: "paragraph", html: "GitHub bills HydraFusion according to tokens consumed by the underlying models at their standard rates. Compound workflows can invoke more than one model, so evaluate total usage rather than assuming one visible request equals one inference call." },
        { type: "paragraph", html: "A practical comparison is to run similar tasks with HydraFusion and a manually chosen baseline, then record correctness, manual intervention, latency and usage. Benchmark savings are useful launch evidence but are not a guarantee for your codebase." },
      ]},
      { id: "troubleshooting", title: "5. If HydraFusion is not showing", blocks: [
        { type: "list", ordered: true, items: ["Run <code>/update</code> again.", "Confirm <code>/experimental on</code> is enabled.", "Reopen <code>/model</code>.", "Verify you are in GitHub Copilot CLI rather than another Copilot surface.", "Check whether GitHub has changed the preview since the launch announcement."] },
        { type: "paragraph", html: "Research-preview interfaces can move quickly. Missing menu entries should be treated first as a version or rollout question, not as proof that the product has been discontinued." },
      ]},
      { id: "production", title: "6. Keep normal engineering controls", blocks: [
        { type: "paragraph", html: "HydraFusion's critic is isolated and tool-less, and GitHub describes fail-safe patch application when a workflow is cancelled or fails validation. Those controls do not replace code review or repository safeguards." },
        { type: "note", html: "For important repositories, review the diff, run tests, use protected branches and keep rollback paths just as you would with any other coding agent." },
      ]},
    ],
    sources: hydraFusionSources,
    relatedPaths: ["/blog/github-copilot-hydrafusion"],
  },
];
