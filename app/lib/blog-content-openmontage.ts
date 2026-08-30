import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-30";

const openMontageMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "OpenMontage",
  targetSearchIntent: "Broad entity/product overview: understand what OpenMontage is, how it works, what it supports, requirements, costs, licensing, use cases and limitations.",
  targetQuery: "OpenMontage",
  slug: "openmontage-agentic-video-production",
  title: "OpenMontage: Open-Source Agentic Video Production Guide",
  metaTitle: "OpenMontage: Open-Source Agentic Video Production Guide",
  metaDescription: "OpenMontage turns coding agents into video-production systems. Learn its pipelines, setup, providers, local options, license, use cases and limitations.",
  h1: "OpenMontage: How the Agentic Video Production System Works",
  excerpt: "OpenMontage is an open-source production framework where a coding agent orchestrates research, scripting, assets, editing, rendering, cost controls and quality checks.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a coding agent flowing into storyboard, footage, audio waveform and a final video timeline",
  sections: [
    { id: "what-it-is", title: "What OpenMontage is", blocks: [
      { type: "paragraph", html: "OpenMontage is an open-source, agent-first video-production framework rather than a new foundation video model. The coding assistant becomes the orchestrator while the repository provides pipeline manifests, production skills, tool wrappers, provider selection, rendering infrastructure and review rules." },
      { type: "paragraph", html: "As rechecked on August 30, the primary repository describes 12 production pipelines, 100+ tools and 700+ agent skill or production-knowledge files. Those counts change with the rolling repository and should be treated as a current snapshot rather than permanent specifications." },
    ]},
    { id: "workflow", title: "How the production workflow works", blocks: [
      { type: "paragraph", html: "A typical workflow moves through research, proposal, script, scene plan, asset creation or retrieval, editing and composition. Pipeline stages carry explicit instructions, review criteria and checkpoints instead of hiding the orchestration inside one opaque SaaS workflow." },
      { type: "paragraph", html: "OpenMontage can coordinate generated media, real or open footage, voice, subtitles, motion graphics and conventional render tools. Remotion and FFmpeg are part of the documented production stack, and post-render checks can inspect output validity, frames, audio and delivery requirements." },
    ]},
    { id: "providers", title: "Providers, local paths and cost", blocks: [
      { type: "paragraph", html: "The project can orchestrate multiple external media providers and also documents lower-cost paths using local or open components. The framework being open source therefore does not make every production free: paid generation APIs still charge according to the provider you choose." },
      { type: "paragraph", html: "OpenMontage includes provider-selection and budget-governance concepts so an agent can compare available tools and surface cost before expensive generation. Local video-model requirements vary dramatically by model, quantization and resolution, so there is no honest universal OpenMontage GPU requirement." },
    ]},
    { id: "requirements", title: "Requirements, agents and license", blocks: [
      { type: "paragraph", html: "The current quick start lists Python 3.10+, FFmpeg, Node.js 18+ and a coding assistant capable of reading files and running commands. The repository includes dedicated guidance for Claude Code, Cursor, GitHub Copilot, Codex and Windsurf." },
      { type: "paragraph", html: "The primary repository is licensed under GNU AGPLv3, a strong copyleft license rather than MIT or Apache. Teams integrating or hosting modified versions commercially should review the license obligations for their exact deployment model." },
    ]},
    { id: "use-cases", title: "Creator workflows and next steps", blocks: [
      { type: "paragraph", html: "OpenMontage is most compelling for technical creators, agencies and AI-heavy content teams that want repeatable production around coding agents. It can support explainers, social clips, screen demos, documentary montages and other structured formats by mixing generated and conventional media tools." },
      { type: "paragraph", html: "Next, read <a href=\"/blog/how-to-install-openmontage\">the installation guide</a> for a reproducible first render and <a href=\"/blog/openmontage-reference-video-reels-shorts\">the reference-video workflow</a> for turning a Reel, Short, TikTok or YouTube reference into an original production plan." },
    ]},
  ],
  sources: [
    { label: "GitHub — OpenMontage primary repository", url: "https://github.com/calesthio/OpenMontage" },
    { label: "OpenMontage — official site", url: "https://www.openmontage.video/" },
    { label: "OpenMontage — Agent Guide", url: "https://github.com/calesthio/OpenMontage/blob/main/AGENT_GUIDE.md" },
  ],
  relatedPaths: ["/blog/how-to-install-openmontage", "/blog/openmontage-reference-video-reels-shorts"],
};

const openMontageInstall: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "OpenMontage",
  targetSearchIntent: "Install and configure OpenMontage with a supported coding agent, validate prerequisites, add optional providers and produce a first working render.",
  targetQuery: "how to install OpenMontage",
  parentSlug: "openmontage-agentic-video-production",
  slug: "how-to-install-openmontage",
  title: "How to Install OpenMontage with Claude Code, Cursor or Codex",
  metaTitle: "How to Install OpenMontage with Claude Code, Cursor or Codex",
  metaDescription: "Install OpenMontage step by step with Python, FFmpeg, Node.js and a coding agent, then configure providers, validate setup and render your first video.",
  h1: "How to Install OpenMontage with Claude Code, Cursor or Codex",
  excerpt: "Set up OpenMontage from the primary repository, verify Python, Node and FFmpeg, let the coding agent read the project instructions and validate a first render before adding expensive providers.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet technical setup graphic showing a terminal, OpenMontage repository, coding agents and a rendered video timeline",
  sections: [
    { id: "prerequisites", title: "Verify the prerequisites", blocks: [
      { type: "paragraph", html: "Read the <a href=\"/blog/openmontage-agentic-video-production\">OpenMontage overview</a> first. The current quick start lists Python 3.10+, FFmpeg, Node.js 18+ and an AI coding assistant that can read project files and execute commands." },
      { type: "paragraph", html: "Confirm each runtime from the same shell the agent will use. A partial environment can fail much later when Remotion, FFmpeg and Python tools meet in one production path. Windows users in particular should ensure FFmpeg is actually on PATH." },
    ]},
    { id: "clone", title: "Clone and set up the primary repository", blocks: [
      { type: "paragraph", html: "Use the primary repository at <code>github.com/calesthio/OpenMontage</code>, enter the project and run the current documented setup path. The quick start presently uses <code>make setup</code>, with manual dependency installation documented for environments without Make." },
      { type: "paragraph", html: "Because the repository changes quickly, record the commit you validated for team use. Open it in Claude Code, Cursor, Codex, Copilot or Windsurf and ask the agent to read the repository's own agent instructions before it attempts production work." },
    ]},
    { id: "capabilities", title: "Discover the actual capability envelope", blocks: [
      { type: "paragraph", html: "OpenMontage is designed to discover which providers and tools are really available in the environment. Two installations can have very different capabilities depending on configured API keys and local components." },
      { type: "paragraph", html: "Do not add every optional provider on day one. Start with the capabilities you actually need, set conservative spend limits and ask the agent to show the chosen pipeline, external calls and estimated cost before it begins paid generation." },
    ]},
    { id: "first-render", title: "Produce a low-risk first render", blocks: [
      { type: "paragraph", html: "A short explainer using free or local tools is a better first test than a complex cinematic production. It validates whether the agent reads the pipeline, whether provider discovery works and whether Python, Node, Remotion and FFmpeg can complete the full path." },
      { type: "paragraph", html: "The repository documents <code>make test-contracts</code> for contract tests that do not require API keys and <code>make test</code> for the broader suite. Run the relevant checks before client work and treat environment-specific failures as setup problems rather than creative failures." },
    ]},
    { id: "qa", title: "Validate the output and save a baseline", blocks: [
      { type: "paragraph", html: "Do not accept an agent message saying done as proof that a video is ready. Check duration, aspect ratio, narration, music levels, subtitles, placeholders, motion quality, branding and whether the output actually satisfies the requested production mode." },
      { type: "paragraph", html: "Once the first run works, record the validated commit, Python/Node/FFmpeg versions, coding agent, enabled providers, budget thresholds, test results and a known-good sample. For a practical creator workflow after setup, continue with <a href=\"/blog/openmontage-reference-video-reels-shorts\">the reference-video guide</a>." },
    ]},
  ],
  sources: [
    { label: "GitHub — OpenMontage", url: "https://github.com/calesthio/OpenMontage" },
    { label: "OpenMontage — official site", url: "https://www.openmontage.video/" },
    { label: "OpenMontage — Agent Guide", url: "https://github.com/calesthio/OpenMontage/blob/main/AGENT_GUIDE.md" },
  ],
  relatedPaths: ["/blog/openmontage-agentic-video-production", "/blog/openmontage-reference-video-reels-shorts"],
};

const openMontageReference: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "OpenMontage",
  targetSearchIntent: "Use an existing YouTube video, Short, Reel, TikTok or local clip as structural inspiration for an original short-form video workflow.",
  targetQuery: "OpenMontage reference video",
  parentSlug: "openmontage-agentic-video-production",
  slug: "openmontage-reference-video-reels-shorts",
  title: "How to Use OpenMontage with Reference Videos for Reels & Shorts",
  metaTitle: "OpenMontage Reference Video Workflow for Reels & Shorts",
  metaDescription: "Use OpenMontage to analyze a reference Reel, Short, TikTok or YouTube video and turn its pacing and structure into an original production workflow.",
  h1: "How to Use OpenMontage with Reference Videos for Reels & Shorts",
  excerpt: "Use a reference video's hook, pacing and scene rhythm as analytical input, then turn those mechanics into an original Reel, Short or TikTok production plan instead of cloning the source.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet concept board showing a reference vertical video becoming abstract hook and pacing notes, then an original storyboard",
  sections: [
    { id: "reference", title: "Use reference video as analysis, not a template", blocks: [
      { type: "paragraph", html: "OpenMontage's primary repository explicitly supports starting from a YouTube video, Short, Reel, TikTok or local clip. The reference workflow can analyze transcript, pacing, scenes, keyframes and style before proposing a production path." },
      { type: "paragraph", html: "The strongest use is abstraction: preserve transferable mechanics such as hook timing, information density and scene rhythm while changing the script, subject, visuals, branding and distinctive creative expression. Do not use the workflow to reproduce another creator's protected work." },
    ]},
    { id: "brief", title: "Tell the agent what you actually like", blocks: [
      { type: "paragraph", html: "Instead of pasting a link and asking for a copy, identify the quality you want to study: a strong first two seconds, rapid visual pacing, concise captions, a particular narrative shape or a useful mix of talking-head footage and B-roll." },
      { type: "paragraph", html: "Ask the agent to separate what can be preserved at an abstract level from what must change. A useful analysis covers hook, pacing, structure, visual grammar, audio, caption density and ending pattern before any assets are generated." },
    ]},
    { id: "concepts", title: "Generate multiple original concepts", blocks: [
      { type: "paragraph", html: "Ask for two or three genuinely different concepts that apply the useful mechanics to the new topic. A reference using a rapid myth-versus-reality pattern might inspire an original misconception correction, transformation story or old-versus-new workflow rather than a line-for-line remake." },
      { type: "paragraph", html: "Choose the production pipeline based on the new concept, not the reference's exact visual technique. A software product may suit screen demo; a founder ad may suit talking head; a technical explainer may use motion graphics or a hybrid asset mix." },
    ]},
    { id: "production", title: "Plan assets, format and budget before generation", blocks: [
      { type: "paragraph", html: "For Reels, Shorts and TikTok, set vertical aspect ratio and safe-area expectations before the scene plan is finalized. Decide which scenes should use original footage, screen captures, open footage, graphics, generated images or generated motion rather than routing every scene through the most expensive provider." },
      { type: "paragraph", html: "OpenMontage documents provider scoring and cost controls. Review the storyboard and estimated spend before paid media generation, and keep source transcripts as structural evidence rather than source text for the new script." },
    ]},
    { id: "qa", title: "Judge the result against the new brief", blocks: [
      { type: "paragraph", html: "Success is not similarity to the reference. Check whether the new hook works, whether the message makes sense without seeing the source, whether captions are readable, whether scenes support the objective and whether the work is visually and verbally original." },
      { type: "paragraph", html: "For environment setup first, see <a href=\"/blog/how-to-install-openmontage\">How to Install OpenMontage</a>. For the broader architecture, providers, costs and licensing, return to the <a href=\"/blog/openmontage-agentic-video-production\">OpenMontage main guide</a>." },
    ]},
  ],
  sources: [
    { label: "GitHub — OpenMontage primary repository", url: "https://github.com/calesthio/OpenMontage" },
    { label: "OpenMontage — official site", url: "https://www.openmontage.video/" },
    { label: "OpenMontage — Agent Guide", url: "https://github.com/calesthio/OpenMontage/blob/main/AGENT_GUIDE.md" },
  ],
  relatedPaths: ["/blog/openmontage-agentic-video-production", "/blog/how-to-install-openmontage"],
};

export const openMontageArticles: BlogArticle[] = [openMontageMain, openMontageInstall, openMontageReference];
