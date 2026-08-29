import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-29";

const sparkStationMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "SparkStation",
  targetSearchIntent: "Broad overview of what SparkStation is, what it can create, supported AI-model orchestration, current access, pricing structure and who it is for",
  targetQuery: "SparkStation",
  slug: "sparkstation-ai-filmmaking-platform",
  title: "SparkStation AI Filmmaking Platform: Features, Models & Access",
  metaTitle: "SparkStation AI Filmmaking Platform: Features, Models & Access",
  metaDescription: "SparkStation is VerSe Innovation’s model-agnostic AI filmmaking platform for script, video, characters, voice, ads and post-production. Here’s what it does and what access is available.",
  h1: "What Is SparkStation? VerSe’s AI Filmmaking Platform Explained",
  excerpt: "A source-grounded look at SparkStation’s script-to-screen workflow, model orchestration, character continuity, creator tools and current access.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a cinematic workflow from script and storyboard through multiple AI models to finished video and advertising formats",
  sections: [
    { id: "what-it-is", title: "What SparkStation is", blocks: [
      { type: "paragraph", html: "SparkStation is an AI filmmaking and content-production platform operated by VerSe Innovation. Its official site presents one continuous production pipeline spanning pre-production, image and video generation, character continuity, voice and music, post-production, advertising and multi-platform distribution." },
      { type: "paragraph", html: "The key distinction is orchestration. SparkStation says it can route creative tasks across model families including Google Veo, OpenAI Sora, Kling, Seedance, GPT, Gemini and Claude rather than forcing an entire project through one generation model. That is SparkStation’s description of its architecture, not an independent performance benchmark." },
    ]},
    { id: "workflow", title: "From pre-production to distribution", blocks: [
      { type: "paragraph", html: "SparkStation groups its workflow into pre-production, production, post-production and distribution. Listed tools include Story Builder, script breakdown, storyboards, casting and character locking, shot lists, image and video generation, camera-oriented controls, voice and dialogue, music and sound effects, subtitles, quality checks, ads and multi-format exports." },
      { type: "paragraph", html: "For a practical sequence, see <a href=\"/blog/how-to-use-sparkstation-ai-filmmaking-workflow\">how to use SparkStation from script to export</a>." },
    ]},
    { id: "continuity", title: "Character continuity and quality checks", blocks: [
      { type: "paragraph", html: "SparkStation prominently advertises character locking across scenes, angles and shots, plus automatic checks for visual consistency, audio sync, timing and brand alignment. Treat these as vendor-described capabilities and review outputs rather than assuming perfect consistency in every generation." },
    ]},
    { id: "models", title: "Which AI models does SparkStation use?", blocks: [
      { type: "paragraph", html: "The official site currently names Veo, Sora, Kling, Seedance, GPT, Gemini and Claude. Its video-generation page also describes switching among multiple video models from one workflow." },
      { type: "note", html: "A model name on the product site does not guarantee that every model, version or feature is available to every account or region at all times. Check the current workspace before promising a specific engine." },
    ]},
    { id: "voice", title: "Voice, editing and creator tools", blocks: [
      { type: "paragraph", html: "SparkStation’s current voice-generation page exposes 30 named voices across four Gemini TTS models, while the broader platform describes dialogue workflows across 20+ languages. Its browser video editor offers multi-track editing, transitions, color controls, text and local rendering, showing that the product extends beyond generation alone." },
    ]},
    { id: "pricing", title: "Is SparkStation free?", blocks: [
      { type: "paragraph", html: "SparkStation currently advertises a free starting path for individuals with no credit card required to explore, followed by pay-as-you-grow token pricing. Exact token prices, quotas and model-specific generation costs are not published on the main product page, so a precise pricing table should not be invented. Studios and enterprise customers are directed to custom and volume packages." },
    ]},
    { id: "enterprise", title: "Enterprise controls", blocks: [
      { type: "paragraph", html: "SparkStation advertises per-seat permissions, project-level token and spend visibility, model-access controls, centralized assets and custom rights/licensing options for enterprise teams. It also says content indemnification and clearer IP terms are available on enterprise plans. Organizations should still review the current contract and any terms attached to underlying generation providers." },
    ]},
    { id: "who", title: "Who SparkStation is for", blocks: [
      { type: "list", items: ["Filmmakers and production studios building multi-scene projects", "Creators and influencers producing short-form video, thumbnails and UGC-style content", "Agencies and marketing teams producing campaign variants", "Ecommerce brands generating product imagery, video and advertising assets"] },
    ]},
    { id: "availability", title: "Current availability and open questions", blocks: [
      { type: "paragraph", html: "SparkStation’s product site is publicly accessible and offers a Start Free path. Launch coverage dated August 29, 2026 describes current access as beta. Reported future general-availability and enterprise-API dates were not confirmed on the official product pages checked for publication, so they are not presented here as official dates." },
      { type: "list", items: ["Exact token pricing and quotas remain unpublished on the main product page", "Model availability can vary by account or provider availability", "Final enterprise API documentation and pricing remain to be confirmed from primary documentation", "Long-project consistency and efficiency claims need broader independent evidence"] },
    ]},
    { id: "bottom-line", title: "Bottom line", blocks: [
      { type: "paragraph", html: "SparkStation is notable because it is trying to become an orchestration and production layer around multiple generative models rather than simply another model endpoint. Its strongest proposition is reducing workflow fragmentation between scripting, generation, editing and campaign adaptation. Test the free-access path against real assets and treat vendor performance claims as claims until independent usage data exists." },
    ]},
  ],
  sources: [
    { label: "SparkStation — official platform", url: "https://www.sparkstation.ai/" },
    { label: "SparkStation — AI image generation", url: "https://www.sparkstation.ai/ai-image-generation.html" },
    { label: "SparkStation — AI video generation", url: "https://www.sparkstation.ai/ai-video-generation.html" },
    { label: "SparkStation — AI voice generation", url: "https://www.sparkstation.ai/ai-voice-generation.html" },
  ],
  relatedPaths: ["/blog/how-to-use-sparkstation-ai-filmmaking-workflow"],
};

const sparkStationWorkflow: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "SparkStation",
  targetSearchIntent: "Practical end-to-end workflow for creators using SparkStation to plan, generate, keep characters consistent, review and export an AI video project",
  targetQuery: "how to use SparkStation",
  parentSlug: "sparkstation-ai-filmmaking-platform",
  slug: "how-to-use-sparkstation-ai-filmmaking-workflow",
  title: "How to Use SparkStation: AI Filmmaking Workflow from Script to Export",
  metaTitle: "How to Use SparkStation: AI Filmmaking Workflow Guide",
  metaDescription: "Learn a practical SparkStation workflow from script and storyboard to character locking, AI video generation, quality checks and multi-platform export.",
  h1: "How to Use SparkStation for an End-to-End AI Filmmaking Workflow",
  excerpt: "A practical, source-grounded workflow for planning, generating, reviewing and exporting a SparkStation AI video project.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial workflow showing script, storyboard, locked character, model-routed video shots, quality review and vertical and horizontal exports",
  sections: [
    { id: "context", title: "Use SparkStation as a production system", blocks: [
      { type: "paragraph", html: "SparkStation is designed around a continuous production workflow rather than a single prompt box. The useful approach is to separate planning, continuity, generation, review and distribution. For the product-level context, start with the <a href=\"/blog/sparkstation-ai-filmmaking-platform\">SparkStation platform overview</a>." },
    ]},
    { id: "deliverable", title: "Step 1: define the final deliverable", blocks: [
      { type: "paragraph", html: "Decide whether you need a 9:16 Reel, 16:9 brand film, product ad, trailer, recurring-character series or another output before generating. That choice affects pacing, shot count, references, camera direction and the amount of source material you need." },
    ]},
    { id: "plan", title: "Step 2: build the story before generating", blocks: [
      { type: "paragraph", html: "SparkStation lists Story Builder, script breakdown, storyboards, shot lists and a budget estimator in its pre-production layer. Structure the idea, split it into scenes and shots, define each shot’s purpose and decide which moments require video rather than still-image or graphic treatment." },
    ]},
    { id: "characters", title: "Step 3: lock recurring characters and references", blocks: [
      { type: "paragraph", html: "If a person or fictional character must recur, establish the identity before producing the full sequence. SparkStation’s Casting Director and Character Continuity features are designed to carry a locked identity through images and video. Build a useful reference set and visually review continuity instead of treating the vendor’s consistency claims as a guarantee." },
    ]},
    { id: "models", title: "Step 4: choose tools by shot", blocks: [
      { type: "paragraph", html: "SparkStation says it orchestrates multiple model families, and its video page exposes switching among leading video models. Pick the tool that fits the shot rather than assuming one engine should handle the entire production. Verify which models are actually available in your account before promising one to a client." },
    ]},
    { id: "stills", title: "Step 5: establish still frames when composition matters", blocks: [
      { type: "paragraph", html: "For product or character shots where composition matters more than motion, approve a still foundation first. SparkStation’s image suite includes generation, upscaling, relighting, editing, inpainting and multi-angle work. A still-first pass can catch framing and identity problems before additional video generations." },
    ]},
    { id: "motion", title: "Step 6: direct motion deliberately", blocks: [
      { type: "paragraph", html: "SparkStation documents camera-oriented controls and a movement library including dolly, orbit, crane and push. Define subject action, camera position, movement, duration, lighting and continuity requirements for each shot. Keep changes focused enough that you can identify what caused a failed result." },
    ]},
    { id: "review", title: "Step 7: review before moving to the next scene", blocks: [
      { type: "paragraph", html: "SparkStation advertises automatic quality checks for consistency, audio sync, timing and brand alignment. Use them as an additional review layer, not a replacement for human approval." },
      { type: "list", items: ["Identity or wardrobe drift", "Product-shape changes", "Corrupted text or logos", "Continuity errors", "Unexpected location or prop changes", "Unsupported claims in advertising content"] },
    ]},
    { id: "finish", title: "Step 8: add voice, music and finishing work", blocks: [
      { type: "paragraph", html: "Stabilize the rough visual sequence before investing heavily in voice and music revisions. SparkStation’s current voice page exposes 30 named voices across four Gemini TTS models, while its wider platform covers dialogue, music, sound effects, subtitles, grading and relighting." },
    ]},
    { id: "formats", title: "Step 9: adapt the approved master", blocks: [
      { type: "paragraph", html: "Use one approved master as the basis for vertical, horizontal and platform-specific variants. SparkStation lists object-aware reframing, teasers, trailers, highlights, posters and thumbnails. Manually inspect text-safe areas, captions and subject framing after automated adaptation." },
    ]},
    { id: "cost", title: "Cost and rollout caveats", blocks: [
      { type: "paragraph", html: "SparkStation currently advertises a free starting path and pay-as-you-grow token pricing but does not publish a precise token table on its main product page. Use the current in-product budget and account pricing rather than a third-party number. If a named model or workflow is absent, verify current product access before treating the absence as a bug." },
    ]},
    { id: "bottom-line", title: "Bottom line", blocks: [
      { type: "paragraph", html: "Plan first, lock continuity, choose the right tool for each shot, review every generation, finish the approved sequence and only then adapt it into campaign formats. That is more controllable than asking one giant prompt to solve script, casting, camera, editing and distribution at once." },
    ]},
  ],
  sources: [
    { label: "SparkStation — official platform", url: "https://www.sparkstation.ai/" },
    { label: "SparkStation — AI image generation", url: "https://www.sparkstation.ai/ai-image-generation.html" },
    { label: "SparkStation — AI video generation", url: "https://www.sparkstation.ai/ai-video-generation.html" },
    { label: "SparkStation — Casting Director", url: "https://www.sparkstation.ai/ai-casting-director.html" },
    { label: "SparkStation — AI voice generation", url: "https://www.sparkstation.ai/ai-voice-generation.html" },
  ],
  relatedPaths: ["/blog/sparkstation-ai-filmmaking-platform"],
};

export const sparkStationArticles: BlogArticle[] = [sparkStationMain, sparkStationWorkflow];
