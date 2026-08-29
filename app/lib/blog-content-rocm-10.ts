import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-29";

const rocm10Main: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "AMD ROCm 10",
  targetSearchIntent:
    "Broad overview of AMD ROCm 10, ROCm.AI, AMD Skills, ROCm CLI, Hyperloom, availability, compatibility and the major developer changes",
  targetQuery: "ROCm 10",
  slug: "amd-rocm-10-rocm-ai",
  title: "AMD ROCm 10: ROCm.AI, AMD Skills, Hyperloom & What Changed",
  metaTitle: "AMD ROCm 10: ROCm.AI, AMD Skills, Hyperloom & What Changed",
  metaDescription:
    "AMD ROCm 10 adds ROCm.AI, AMD Skills, a tech-preview ROCm CLI, Hyperloom agentic optimization and a more modular stack. Here’s what changed and what developers should verify.",
  h1: "AMD ROCm 10 Adds ROCm.AI, Agent Skills and Autonomous AI Optimization",
  excerpt:
    "ROCm 10 makes ROCm.AI generally available, combining AMD Skills, a tech-preview ROCm CLI and Hyperloom with a more modular software foundation.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt:
    "Project Monet editorial diagram showing ROCm 10 at the center with AMD Skills, ROCm CLI and Hyperloom connected around an AMD GPU software stack",
  sections: [
    {
      id: "release",
      title: "What changed in ROCm 10",
      blocks: [
        {
          type: "paragraph",
          html: "AMD released ROCm 10 on August 27, 2026. The release makes ROCm.AI generally available and continues a broader move toward a modular ROCm Core SDK, validated frameworks and containers, and more AI-assisted development workflows.",
        },
        {
          type: "paragraph",
          html: "ROCm remains AMD’s open software stack for GPU programming, AI training, inference and high-performance computing. ROCm 10 matters because AMD is now treating agent-assisted setup, serving and optimization as part of the developer experience rather than as a separate experiment.",
        },
      ],
    },
    {
      id: "rocm-ai",
      title: "ROCm.AI is generally available",
      blocks: [
        {
          type: "paragraph",
          html: "AMD says ROCm.AI is generally available with ROCm 10 and brings together three core experiences: AMD Skills, ROCm CLI and ROCm Hyperloom. The goal is to help developers build, run and optimize AI workloads with AMD-specific guidance inside familiar tools.",
        },
        {
          type: "note",
          html: "The ROCm.AI umbrella is GA, but not every component has the same maturity. AMD explicitly labels ROCm CLI a Technology Preview, so component-level status should be checked separately.",
        },
      ],
    },
    {
      id: "skills",
      title: "AMD Skills brings AMD workflows into coding agents",
      blocks: [
        {
          type: "paragraph",
          html: "AMD Skills is the official AMD catalog of agent skills for workflows such as local AI, model serving, diagnostics and performance work. AMD names Claude Code, Cursor and Codex among supported coding-agent environments, while the public catalog itself is labeled Tech Preview and can change frequently.",
        },
        {
          type: "paragraph",
          html: "For the practical setup, see <a href=\"/blog/amd-skills-claude-code-cursor-codex\">how to use AMD Skills with Claude Code, Cursor and Codex</a>.",
        },
      ],
    },
    {
      id: "cli",
      title: "ROCm CLI remains a Technology Preview",
      blocks: [
        {
          type: "paragraph",
          html: "ROCm CLI is AMD’s unified command-line layer for inspecting systems, managing ROCm environments, serving models, running diagnostics, updating components and controlling runtimes. AMD says the prebuilt CLI is available for Windows and Linux and does not require an existing ROCm installation.",
        },
        {
          type: "note",
          html: "AMD’s August 27 release notes say ROCm CLI begins with ROCm 7.13 software and that official ROCm 10 support is coming soon. Do not treat the CLI as the only or universally supported way to install a ROCm 10 environment today.",
        },
      ],
    },
    {
      id: "hyperloom",
      title: "Hyperloom automates inference optimization",
      blocks: [
        {
          type: "paragraph",
          html: "ROCm Hyperloom is an autonomous optimization system for end-to-end LLM inference. AMD says it profiles workloads, finds bottlenecks, proposes or implements targeted changes, benchmarks results and validates performance and correctness across host code and GPU kernels.",
        },
        {
          type: "paragraph",
          html: "AMD says ROCm 10 expands Hyperloom support across AMD Instinct GPUs with vLLM and SGLang workflows and optimization paths that can include HIP, Triton and FlyDSL. Treat hardware and framework support as version-specific and verify it against current Hyperloom documentation before deployment.",
        },
      ],
    },
    {
      id: "performance",
      title: "AMD’s performance numbers need their test context",
      blocks: [
        {
          type: "paragraph",
          html: "AMD reports an average 3.3× inference-throughput improvement and 2.4× training-throughput improvement for a preview ROCm.AI configuration versus ROCm 7.0 on 8× Instinct MI355X systems across specific model sets. These are AMD Performance Labs results from defined workloads, not universal ROCm 10 speedups.",
        },
        {
          type: "paragraph",
          html: "AMD’s disclosures note that results can vary with hardware, drivers, serving framework, model and optimization choices. Use workload-specific benchmarks for capacity planning rather than applying the headline average to an unrelated system.",
        },
      ],
    },
    {
      id: "compatibility",
      title: "Compatibility is still hardware and OS specific",
      blocks: [
        {
          type: "paragraph",
          html: "ROCm support varies by GPU, operating system, driver, kernel and framework combination. Do not infer that every Radeon, Radeon Pro or Instinct system supports the same ROCm 10 features merely because it uses an AMD GPU.",
        },
        {
          type: "paragraph",
          html: "Before upgrading, use the current compatibility matrix and installation documentation. The <a href=\"/blog/how-to-install-rocm-10-supported-gpus\">ROCm 10 installation and compatibility guide</a> focuses on that validation path.",
        },
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      blocks: [
        {
          type: "paragraph",
          html: "ROCm 10 is more than a version bump: AMD is combining a modular software foundation with agent-oriented developer tooling and autonomous optimization. The important caveat is maturity by component—ROCm.AI is GA, AMD Skills is actively shipped through a tech-preview catalog, and ROCm CLI remains a Technology Preview with ROCm 10 support still being completed.",
        },
      ],
    },
  ],
  sources: [
    {
      label: "AMD Newsroom — ROCm 10 and ROCm.AI",
      url: "https://newsroom.amd.com/news/rocm-10-software-ai-native-developer-experiences/",
    },
    {
      label: "AMD — ROCm 10 production AI guidance",
      url: "https://www.amd.com/en/blogs/2026/amd-rocm-10-a-simpler-path-to-production-ai-on-amd.html",
    },
    { label: "AMD Skills — official catalog", url: "https://github.com/amd/skills" },
    { label: "ROCm — official repository", url: "https://github.com/ROCm/ROCm" },
  ],
  relatedPaths: [
    "/blog/how-to-install-rocm-10-supported-gpus",
    "/blog/amd-skills-claude-code-cursor-codex",
  ],
};

const rocm10Install: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "AMD ROCm 10",
  targetSearchIntent:
    "Practical setup guide for checking ROCm 10 hardware/OS compatibility, installing the supported stack and validating a working AI environment without assuming universal GPU support",
  targetQuery: "how to install ROCm 10",
  parentSlug: "amd-rocm-10-rocm-ai",
  slug: "how-to-install-rocm-10-supported-gpus",
  title: "How to Install ROCm 10: Supported GPUs, Linux/Windows Checks & Validation",
  metaTitle: "How to Install ROCm 10: Supported GPUs, OS Checks & Validation",
  metaDescription:
    "Install ROCm 10 safely by checking AMD’s compatibility matrix first, choosing the correct supported OS path, then validating ROCm and your AI framework.",
  h1: "How to Install ROCm 10 and Check Whether Your AMD GPU Is Supported",
  excerpt:
    "A compatibility-first ROCm 10 setup guide for checking GPU and OS support, installing from AMD’s current documentation and validating the runtime before adding frameworks.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt:
    "Project Monet compatibility checklist showing AMD GPU, operating system, ROCm 10 installation, runtime validation and AI framework validation",
  sections: [
    {
      id: "context",
      title: "Start with compatibility, not a copied command",
      blocks: [
        {
          type: "paragraph",
          html: "ROCm 10 support depends on the exact GPU, operating system, driver, kernel and software combination. For the release context, see the <a href=\"/blog/amd-rocm-10-rocm-ai\">ROCm 10 and ROCm.AI overview</a>.",
        },
        {
          type: "paragraph",
          html: "The safest installation sequence is compatibility matrix → platform-specific install → base runtime validation → framework validation → model test. An AMD GPU alone does not prove that a particular ROCm 10 configuration is officially supported.",
        },
      ],
    },
    {
      id: "compatibility",
      title: "Step 1: check AMD’s current compatibility matrix",
      blocks: [
        {
          type: "paragraph",
          html: "Verify your exact GPU and OS against AMD’s live compatibility documentation before changing drivers or packages. Support differs across Instinct, Radeon and Radeon Pro hardware as well as Linux distributions and Windows configurations.",
        },
        {
          type: "note",
          html: "If your combination is absent from AMD’s supported matrix, an unofficial workaround is not equivalent to an AMD-supported production configuration.",
        },
      ],
    },
    {
      id: "platform",
      title: "Step 2: choose the documented platform path",
      blocks: [
        {
          type: "paragraph",
          html: "Use AMD’s ROCm 10 installation documentation for the exact platform and deployment type. Linux remains the primary path for many server and development workflows, while Windows support is selective and should not be assumed to have feature parity with every Linux configuration.",
        },
        {
          type: "paragraph",
          html: "Avoid following an older ROCm 7 tutorial without checking whether package names, repository setup, kernel requirements or framework compatibility changed for ROCm 10.",
        },
      ],
    },
    {
      id: "driver",
      title: "Step 3: confirm driver and kernel requirements",
      blocks: [
        {
          type: "paragraph",
          html: "Check the documented AMD GPU driver, kernel and package requirements for your operating system before upgrading. On a production machine, record the known-working driver, ROCm and framework versions so you have a rollback reference.",
        },
      ],
    },
    {
      id: "install",
      title: "Step 4: install through AMD’s current documented method",
      blocks: [
        {
          type: "paragraph",
          html: "Follow AMD’s live installer documentation rather than publishing one universal shell command. The exact package path varies by distribution and can change as ROCm releases evolve.",
        },
        {
          type: "note",
          html: "ROCm CLI is a separate Technology Preview. AMD’s ROCm 10 announcement says official ROCm 10 CLI support is coming soon, so use the documented ROCm 10 installation path rather than assuming the preview CLI is the canonical installer for every system.",
        },
      ],
    },
    {
      id: "validate-runtime",
      title: "Step 5: validate the base ROCm runtime",
      blocks: [
        {
          type: "paragraph",
          html: "After installation and any required restart or driver reload, confirm that ROCm can see the expected GPU and runtime. AMD’s ecosystem includes tools such as rocminfo and AMD SMI for system inspection.",
        },
        {
          type: "paragraph",
          html: "A successful package installation is not enough if the runtime cannot enumerate the intended device or reports a mismatched software stack.",
        },
      ],
    },
    {
      id: "validate-framework",
      title: "Step 6: validate the framework you actually need",
      blocks: [
        {
          type: "paragraph",
          html: "Once the base runtime works, validate PyTorch, vLLM, SGLang or the other framework you plan to use. Match container tags, wheels and framework versions to AMD’s current validated guidance rather than assuming every runtime supports every ROCm 10 configuration.",
        },
        {
          type: "paragraph",
          html: "Model memory requirements are a separate question from ROCm compatibility. A GPU can support ROCm while still lacking enough memory for a particular model, precision, KV cache or workload.",
        },
      ],
    },
    {
      id: "agents",
      title: "Step 7: use agent assistance without giving up verification",
      blocks: [
        {
          type: "paragraph",
          html: "AMD Skills can give coding agents AMD-specific workflows for local AI, serving and diagnostics. See the <a href=\"/blog/amd-skills-claude-code-cursor-codex\">AMD Skills guide</a>, but review commands that modify drivers, kernels or production services against AMD documentation before execution.",
        },
      ],
    },
    {
      id: "mistakes",
      title: "Common ROCm 10 setup mistakes",
      blocks: [
        {
          type: "list",
          items: [
            "Assuming every Radeon GPU is officially supported",
            "Treating Windows support as identical to Linux",
            "Mixing unsupported driver, kernel and package combinations",
            "Installing a framework before verifying the base ROCm runtime",
            "Confusing model VRAM needs with ROCm platform compatibility",
          ],
        },
      ],
    },
  ],
  sources: [
    { label: "AMD ROCm — installation documentation", url: "https://rocm.docs.amd.com/en/latest/install/rocm.html" },
    { label: "ROCm — official repository", url: "https://github.com/ROCm/ROCm" },
    {
      label: "AMD Newsroom — ROCm 10 and ROCm.AI",
      url: "https://newsroom.amd.com/news/rocm-10-software-ai-native-developer-experiences/",
    },
    {
      label: "AMD — ROCm 10 production AI guidance",
      url: "https://www.amd.com/en/blogs/2026/amd-rocm-10-a-simpler-path-to-production-ai-on-amd.html",
    },
  ],
  relatedPaths: ["/blog/amd-rocm-10-rocm-ai", "/blog/amd-skills-claude-code-cursor-codex"],
};

const amdSkillsGuide: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "AMD ROCm 10",
  targetSearchIntent:
    "Practical guide to using AMD’s official agent-skill catalog with supported coding assistants for ROCm, local AI, model serving and diagnostics while distinguishing shipped skills from an evolving tech-preview catalog",
  targetQuery: "AMD Skills Claude Code",
  parentSlug: "amd-rocm-10-rocm-ai",
  slug: "amd-skills-claude-code-cursor-codex",
  title: "How to Use AMD Skills with Claude Code, Cursor & Codex for ROCm",
  metaTitle: "AMD Skills: How to Use Them with Claude Code, Cursor & Codex",
  metaDescription:
    "AMD Skills brings official ROCm and local-AI workflows into Claude Code, Cursor and Codex. See the current install flow, catalog status and safety checks.",
  h1: "How to Use AMD Skills with Claude Code, Cursor and Codex",
  excerpt:
    "AMD’s official skills catalog gives coding agents focused ROCm and local-AI workflows. Here is how the current tech-preview catalog is installed and how to use it safely.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt:
    "Project Monet editorial graphic showing an AMD Skills card connecting to Claude Code, Cursor and Codex with local AI, serving and diagnostics workflows",
  sections: [
    {
      id: "what",
      title: "What AMD Skills is",
      blocks: [
        {
          type: "paragraph",
          html: "AMD Skills is AMD’s official catalog of focused agent workflows. Each skill centers on a SKILL.md file and can include instructions, scripts, templates and references that tell an agent how to perform an AMD-specific task.",
        },
        {
          type: "paragraph",
          html: "AMD positions Skills as one part of ROCm.AI alongside ROCm CLI and Hyperloom. For the broader release context, see <a href=\"/blog/amd-rocm-10-rocm-ai\">what changed in ROCm 10</a>.",
        },
      ],
    },
    {
      id: "status",
      title: "The catalog is live, but it is still a Tech Preview",
      blocks: [
        {
          type: "paragraph",
          html: "AMD’s August 27 release says shipped skills are available through the open GitHub catalog and supported agent marketplaces. The repository itself is explicitly labeled Tech Preview and warns that skills, categories and descriptions can change frequently.",
        },
        {
          type: "note",
          html: "Check the current catalog before relying on a skill name from an older article. AMD is actively adding, federating and revising skills.",
        },
      ],
    },
    {
      id: "agents",
      title: "Which coding agents are supported?",
      blocks: [
        {
          type: "paragraph",
          html: "The official AMD Skills repository names Cursor, Claude Code, OpenAI Codex and Gemini CLI as interoperable coding-agent environments. AMD’s ROCm 10 launch specifically highlights Claude Code, Cursor and Codex for AMD-specific guidance.",
        },
        {
          type: "paragraph",
          html: "Agent-specific install destinations differ, so follow the live repository instructions instead of assuming one plugin directory works everywhere.",
        },
      ],
    },
    {
      id: "install",
      title: "Install from AMD’s current catalog",
      blocks: [
        {
          type: "paragraph",
          html: "AMD currently documents installation with the skills CLI: <code>npx skills add amd/skills</code>. The command lets you select a skill and destination, and the repository also documents flags for installing a chosen skill into agents such as Claude Code, Cursor or Codex.",
        },
        {
          type: "note",
          html: "This is the repository’s current Tech Preview installation flow. Recheck the official README before automating it in a production bootstrap script because marketplace and plugin integration can evolve.",
        },
      ],
    },
    {
      id: "use",
      title: "Use skills for outcomes, then inspect the actions",
      blocks: [
        {
          type: "paragraph",
          html: "A skill can help an agent carry out an outcome-oriented task such as setting up local AI, serving a model or diagnosing an AMD environment without requiring the user to remember every underlying command.",
        },
        {
          type: "paragraph",
          html: "The skill does not override the ROCm compatibility matrix. Before an agent changes drivers, system packages or production services, verify the target GPU and operating-system path and review the generated commands.",
        },
      ],
    },
    {
      id: "relationship",
      title: "How Skills relates to ROCm CLI and Hyperloom",
      blocks: [
        {
          type: "paragraph",
          html: "Skills provides higher-level task knowledge for agents. ROCm CLI is AMD’s Technology Preview execution layer for environment and runtime operations. Hyperloom is a narrower agentic optimization system for end-to-end LLM inference. A workflow can combine them, but each component has its own maturity and compatibility constraints.",
        },
      ],
    },
    {
      id: "workflow",
      title: "A safe practical workflow",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Confirm the hardware and ROCm path are supported",
            "Browse the current AMD Skills catalog",
            "Install the specific skill into the intended coding agent",
            "Ask for the outcome you want in plain language",
            "Review commands that modify system or production state",
            "Validate the result with ROCm and framework health checks",
            "Record the skill and source revision for reproducible production workflows",
          ],
        },
        {
          type: "paragraph",
          html: "For the underlying platform setup, use the <a href=\"/blog/how-to-install-rocm-10-supported-gpus\">ROCm 10 compatibility and installation guide</a> rather than assuming an agent skill can make unsupported hardware work.",
        },
      ],
    },
  ],
  sources: [
    { label: "AMD Skills — official catalog", url: "https://github.com/amd/skills" },
    {
      label: "AMD Newsroom — ROCm 10 and ROCm.AI",
      url: "https://newsroom.amd.com/news/rocm-10-software-ai-native-developer-experiences/",
    },
    {
      label: "AMD — ROCm 10 production AI guidance",
      url: "https://www.amd.com/en/blogs/2026/amd-rocm-10-a-simpler-path-to-production-ai-on-amd.html",
    },
    { label: "ROCm — official repository", url: "https://github.com/ROCm/ROCm" },
  ],
  relatedPaths: ["/blog/amd-rocm-10-rocm-ai", "/blog/how-to-install-rocm-10-supported-gpus"],
};

export const rocm10Articles: BlogArticle[] = [rocm10Main, rocm10Install, amdSkillsGuide];
