import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-28";

const praxistMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Sapient Intelligence PRAXIST",
  targetSearchIntent: "Broad overview of what PRAXIST is, how its autonomous R&D loop works, current beta access, requirements, licensing, use cases, evidence and limitations",
  targetQuery: "PRAXIST",
  slug: "praxist-autonomous-ai-research-system",
  title: "PRAXIST: Sapient’s Autonomous AI R&D System Explained",
  metaTitle: "PRAXIST: Sapient’s Autonomous AI R&D System Explained",
  metaDescription: "PRAXIST is Sapient Intelligence’s beta autonomous R&D system for measurable computer-executable research. See how it works, requirements, access, licensing and limitations.",
  h1: "What Is PRAXIST? Sapient Intelligence’s Autonomous AI Research System",
  excerpt: "PRAXIST is a source-available beta research system that coordinates parallel agents, evaluation and retained evidence across repeated experimental generations.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing parallel AI research branches feeding evaluated evidence into a next-generation research loop",
  sections: [
    {
      id: "what-it-is",
      title: "What PRAXIST is",
      blocks: [
        { type: "paragraph", html: "PRAXIST is a beta autonomous research-and-development system from Sapient Intelligence for measurable research problems that can be executed on a computer. Instead of treating an AI coding agent as a one-shot assistant, it coordinates repeated research generations, evaluation and evidence retention." },
        { type: "paragraph", html: "The project you give PRAXIST still remains the source of truth for the objective, datasets, simulator, dependencies and metric. Sapient’s documentation says the baseline project should already run before PRAXIST takes over the research loop." },
      ],
    },
    {
      id: "research-loop",
      title: "How the research loop works",
      blocks: [
        { type: "paragraph", html: "Parallel research peers propose candidate changes, evaluators turn the outcomes into structured findings, and later generations use retained evidence to decide what to explore next. Sapient describes the process as persistent research rather than a chain of disconnected prompts." },
        { type: "paragraph", html: "This makes PRAXIST closer to an orchestration layer around experimentation than a replacement for a coding agent. Sapient explicitly recommends Codex as one interactive interface for operating PRAXIST, while Claude Code and direct CLI workflows are also supported." },
      ],
    },
    {
      id: "fit",
      title: "What problems fit PRAXIST",
      blocks: [
        { type: "paragraph", html: "Sapient says the strongest fit is a problem where the project already runs, the objective can be measured, and the best route to improvement is not already known." },
        { type: "paragraph", html: "Vendor examples include machine-learning optimization, simulation, quantitative work, scheduling and scientific modeling. Those examples show the intended scope; they are not proof that PRAXIST will improve every project in those categories." },
      ],
    },
    {
      id: "installation-access",
      title: "Installation and access",
      blocks: [
        { type: "paragraph", html: "The public repository currently lists CPython 3.11+ as required. Linux on Python 3.11 and 3.12 is continuously release-tested, while macOS and other Python 3.11+ environments are compatibility targets where Sapient recommends running <code>praxist doctor</code> before research." },
        { type: "paragraph", html: "For the practical setup sequence, including Codex-native authentication, Claude Code and the first project takeover step, read the <a href=\"/blog/how-to-install-use-praxist-codex-claude\">PRAXIST installation guide</a>." },
      ],
    },
    {
      id: "api-key-cost",
      title: "Do you need an API key?",
      blocks: [
        { type: "paragraph", html: "Not always. Sapient’s repository says Codex-native mode can use an existing authenticated Codex session without a separate model API key. API-backed profiles are also supported." },
        { type: "paragraph", html: "There is no single universal run price published by Sapient. Total cost varies with the model/provider, parallelism, number of generations and the compute required by the evaluator." },
      ],
    },
    {
      id: "license",
      title: "Is PRAXIST open source?",
      blocks: [
        { type: "paragraph", html: "The repository is public, but Sapient describes PRAXIST as <strong>source-available</strong> under its Fair Source License Agreement 1.0 rather than as software under a standard OSI open-source license." },
        { type: "paragraph", html: "The repository says organizations with aggregate annual revenue below US$1 million may use PRAXIST commercially without charge subject to the license terms; organizations at or above that threshold must contact Sapient for a commercial license. The license itself is authoritative over any summary." },
      ],
    },
    {
      id: "evidence",
      title: "Benchmarks and evidence",
      blocks: [
        { type: "paragraph", html: "Sapient has published strong launch results for PRAXIST, but those numbers are vendor-reported and should not be treated as independently established performance. Different Sapient-linked launch materials have also shown different gold-outcome totals for the same broad 75-task evaluation context." },
        { type: "note", html: "Until evaluation versions and independent replication are clearer, the safe conclusion is that Sapient is reporting substantial gains in its own evaluation—not that one benchmark number is universally settled." },
      ],
    },
    {
      id: "coding-agent-automl",
      title: "PRAXIST vs coding agents and AutoML",
      blocks: [
        { type: "paragraph", html: "Codex or Claude Code can edit code, run commands and reason interactively about a project. PRAXIST is designed to add a longer-lived experimental process above that interaction: multiple peers, explicit evaluation, retained evidence and a next-generation agenda." },
        { type: "paragraph", html: "AutoML usually searches within a predefined model or hyperparameter space. Sapient positions PRAXIST as broader because research agents may change methods, architectures and strategies. That does not make it automatically better; the systems target different scopes of optimization." },
      ],
    },
    {
      id: "limitations",
      title: "Main limitations",
      blocks: [
        { type: "list", items: [
          "The project and evaluation need to work before PRAXIST starts.",
          "Persistent multi-agent research can consume substantial model and compute resources.",
          "Vendor benchmark claims still need independent validation.",
          "Source-available licensing can matter for larger commercial organizations.",
        ] },
      ],
    },
    {
      id: "who-should-watch",
      title: "Who should watch PRAXIST",
      blocks: [
        { type: "paragraph", html: "The clearest potential fit is for teams already doing repetitive, measurable experimentation in machine learning, simulation, algorithm optimization, robotics, quantitative work or applied scientific computing." },
        { type: "paragraph", html: "For ordinary content generation, simple coding tasks or projects without an executable evaluation function, a normal interactive agent may remain the simpler option." },
      ],
    },
  ],
  sources: [
    { label: "Sapient Intelligence — PRAXIST GitHub repository", url: "https://github.com/sapientinc/praxist" },
    { label: "Sapient Intelligence — PRAXIST documentation", url: "https://sapientinc.github.io/PRAXIST/" },
    { label: "Sapient Intelligence — PRAXIST product overview", url: "https://praxist.sapient.inc/en/about" },
  ],
  relatedPaths: ["/blog/how-to-install-use-praxist-codex-claude"],
};

const praxistInstall: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Sapient Intelligence PRAXIST",
  targetSearchIntent: "Install PRAXIST, understand runtime requirements, choose Codex, Claude Code or API-backed operation, complete setup and prepare a first measurable research task",
  targetQuery: "how to install PRAXIST",
  parentSlug: "praxist-autonomous-ai-research-system",
  slug: "how-to-install-use-praxist-codex-claude",
  title: "How to Install and Use PRAXIST with Codex or Claude Code",
  metaTitle: "How to Install PRAXIST with Codex or Claude Code",
  metaDescription: "Install PRAXIST, choose Codex-native or API-backed operation, run setup checks, prepare a measurable project and start your first autonomous research workflow.",
  h1: "How to Install and Use PRAXIST with Codex or Claude Code",
  excerpt: "A practical setup guide for PRAXIST beta, from Python requirements and Codex-native authentication to project takeover and first-run safeguards.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a terminal setup flow from Python to Codex or Claude Code to a measurable project and evaluation loop",
  sections: [
    {
      id: "before-install",
      title: "Before you install PRAXIST",
      blocks: [
        { type: "paragraph", html: "PRAXIST is not a general chatbot for an empty folder. Sapient’s documentation says it needs an already runnable project, a measurable objective and an environment that can evaluate whether one candidate is better than another." },
        { type: "paragraph", html: "The public repository currently lists CPython 3.11+ as required. Linux on Python 3.11 and 3.12 is continuously release-tested; macOS and other Python 3.11+ environments are compatibility targets." },
      ],
    },
    {
      id: "layers",
      title: "PRAXIST and Codex are different layers",
      blocks: [
        { type: "paragraph", html: "Sapient recommends Codex as one interface for operating PRAXIST. Codex remains the interactive coding agent that understands the project and communicates with you; PRAXIST supplies the persistent research loop, parallel peers, evidence protocols and lifecycle control." },
        { type: "paragraph", html: "Claude Code can also be used as the host interface, and direct CLI operation remains available without either host agent." },
      ],
    },
    {
      id: "install-codex",
      title: "Install PRAXIST for Codex",
      blocks: [
        { type: "paragraph", html: "Sapient’s repository currently publishes this Codex-oriented setup command: <code>python3 -m pip install --index-url https://pypi.org/simple \"praxist[agents,codex]\" &amp;&amp; praxist setup --interactive --install-skills codex</code>." },
        { type: "paragraph", html: "The setup wizard covers the Fair Source license, user agreement, privacy, runtime profile, credentials, Codex skills, examples and readiness checks. It does not choose a research project or launch a run." },
        { type: "note", html: "Review the current repository and package source before running vendor installation commands, especially while PRAXIST remains beta." },
      ],
    },
    {
      id: "authentication",
      title: "Can PRAXIST use your Codex login without an API key?",
      blocks: [
        { type: "paragraph", html: "Yes, according to Sapient’s current repository. Codex-native mode can use an existing authenticated Codex session, so a separate model API key is not mandatory for that path." },
        { type: "paragraph", html: "API-backed profiles are also supported. Their cost depends on the provider, model, parallel peers, generations and evaluation runtime rather than on one fixed PRAXIST usage price." },
      ],
    },
    {
      id: "claude-code",
      title: "Using Claude Code",
      blocks: [
        { type: "paragraph", html: "Sapient documents Claude Code as another supported host interface. Because host-specific beta commands can change quickly, use the current repository or official documentation for the exact Claude Code installation command at the time you install." },
        { type: "paragraph", html: "The architecture remains the same: Claude Code is the interactive agent layer, while PRAXIST supplies the persistent autonomous research process." },
      ],
    },
    {
      id: "readiness",
      title: "Run the readiness checks first",
      blocks: [
        { type: "paragraph", html: "On compatibility-target systems, Sapient explicitly recommends running <code>praxist doctor</code> before research. A successful package installation does not mean the research task itself is ready." },
        { type: "paragraph", html: "The baseline project, data and evaluator should still run correctly outside PRAXIST before you hand the task over." },
      ],
    },
    {
      id: "first-task",
      title: "Prepare a good first task",
      blocks: [
        { type: "paragraph", html: "A useful first task needs a metric with a clear optimization direction, such as lower error, higher accuracy, faster runtime, lower cost or a simulation success rate." },
        { type: "list", items: [
          "A reproducible runnable baseline",
          "The command or harness that evaluates a candidate",
          "The metric and optimization direction",
          "Constraints that cannot be violated",
          "The files or components agents may change",
          "A reasonable compute or generation budget",
        ] },
      ],
    },
    {
      id: "takeover",
      title: "Take over the project from Codex",
      blocks: [
        { type: "paragraph", html: "After setup, Sapient says to open Codex in the root of an already runnable research project and invoke the packaged PRAXIST takeover skill. The takeover step creates the project contract used by the research process." },
        { type: "paragraph", html: "Installation and takeover are separate: setup prepares the runtime; takeover prepares a particular project for autonomous research." },
      ],
    },
    {
      id: "operate-run",
      title: "Monitor, stop and resume runs",
      blocks: [
        { type: "paragraph", html: "The repository exposes lifecycle commands including <code>praxist status --json</code>, <code>praxist --monitor --latest</code>, <code>praxist stop &lt;run_id&gt;</code> and <code>praxist resume &lt;run_dir&gt;</code>." },
        { type: "note", html: "Sapient notes that closing the monitor with Ctrl-C does not necessarily stop the underlying research run. Use the explicit stop command when you intend to end it." },
      ],
    },
    {
      id: "start-small",
      title: "Start small before spending heavily",
      blocks: [
        { type: "paragraph", html: "Persistent multi-agent research can use far more compute than a normal coding session. Sapient recommends beginning with a small representative workload before scaling." },
      ],
    },
    {
      id: "license-check",
      title: "Check the license before commercial use",
      blocks: [
        { type: "paragraph", html: "PRAXIST is source-available under Sapient’s Fair Source License Agreement 1.0. The current repository says organizations below US$1 million in aggregate annual revenue may use it commercially without charge under the stated conditions, while larger organizations must contact Sapient for a commercial license." },
        { type: "paragraph", html: "Read the current license itself before business deployment because the license text, not a tutorial summary, controls your rights." },
      ],
    },
    {
      id: "overview",
      title: "Keep the broader product questions on the main page",
      blocks: [
        { type: "paragraph", html: "For broader product status, benchmark caveats, use cases and limitations, return to the <a href=\"/blog/praxist-autonomous-ai-research-system\">main PRAXIST overview</a>. This guide stays focused on installation and first-run workflow." },
      ],
    },
  ],
  sources: [
    { label: "Sapient Intelligence — PRAXIST GitHub repository", url: "https://github.com/sapientinc/praxist" },
    { label: "Sapient Intelligence — PRAXIST documentation", url: "https://sapientinc.github.io/PRAXIST/" },
    { label: "Sapient Intelligence — PRAXIST product overview", url: "https://praxist.sapient.inc/en/about" },
  ],
  relatedPaths: ["/blog/praxist-autonomous-ai-research-system"],
};

export const praxistArticles: BlogArticle[] = [praxistMain, praxistInstall];
