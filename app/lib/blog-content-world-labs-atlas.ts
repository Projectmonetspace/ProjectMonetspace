import type { BlogArticle } from "./blog-types.ts";

const worldLabsAtlasSources = [
  { label: "World Labs — Atlas: A World Model for Spatial Intelligence", url: "https://www.worldlabs.ai/blog/atlas" },
  { label: "World Labs — Marble pricing", url: "https://marble.worldlabs.ai/pricing" },
  { label: "World Labs — Announcing the World API", url: "https://www.worldlabs.ai/blog/announcing-the-world-api" },
  { label: "World Labs — Marble: A Multimodal World Model", url: "https://www.worldlabs.ai/blog/marble-world-model" },
];

export const worldLabsAtlasArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "World Labs Atlas",
    targetSearchIntent: "Understand what World Labs Atlas is, what it can do, its current release and availability status, and how it differs from ordinary video and 3D generation tools.",
    targetQuery: "World Labs Atlas",
    slug: "world-labs-atlas-world-model",
    title: "World Labs Atlas: World Model, Features, Video & Early Access",
    metaTitle: "World Labs Atlas: World Model, Features, Video & Early Access",
    metaDescription: "World Labs Atlas is an omni world model for camera-controlled 1440p video, spatial reconstruction, 3D outputs and simulation. Here’s what is confirmed.",
    h1: "World Labs Atlas: The Omni World Model for Video, 3D and Spatial AI",
    excerpt: "World Labs introduced Atlas as an omni world model for spatial intelligence, combining native camera control, long-form visual generation, reconstruction, explicit 3D outputs and simulation in one system.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    ogAlt: "World Labs Atlas spatial AI workflow showing camera-controlled video, 3D reconstruction and simulation",
    sections: [
      { id: "what-is-atlas", title: "What is World Labs Atlas?", blocks: [
        { type: "paragraph", html: "World Labs announced Atlas on September 1, 2026 as its next-generation omni world model for spatial intelligence. The company says Atlas was pretrained from scratch to operate across text, images, video and 3D, combining those inputs into a shared spatial context." },
        { type: "paragraph", html: "World Labs describes the architecture as a multimodal autoregressive diffusion transformer. The practical idea is more important than the label: Atlas is designed to reason about where visual observations belong in space, then generate new views, worlds and time-varying scenes from that context." },
      ]},
      { id: "camera-video", title: "Camera-controlled video up to one minute at 1440p", blocks: [
        { type: "paragraph", html: "The most creator-facing capability is native camera control. Atlas accepts one or more reference images together with precise camera geometry and can generate views along a designed camera path. World Labs says its launch examples include videos up to one minute long at 1440p." },
        { type: "paragraph", html: "That is meaningfully different from prompting a conventional video model with a phrase such as ‘orbit left.’ Atlas treats camera geometry as a native input, so framing and movement can be specified spatially rather than left entirely to natural-language interpretation." },
      ]},
      { id: "reconstruction-simulation", title: "Spatial reconstruction, 3D outputs and simulation", blocks: [
        { type: "paragraph", html: "Atlas can reconstruct real scenes from one or more input images and generate novel views from positions that were not directly observed. World Labs says the model can also produce explicit 3D outputs including point clouds and Gaussian splats." },
        { type: "paragraph", html: "The model also targets space-time simulation. World Labs demonstrates video reframing from new camera positions and Real-to-Sim workflows for robotics, where recorded environments are reconstructed and used to generate RGB and depth observations from simulated viewpoints." },
      ]},
      { id: "availability-pricing", title: "Atlas availability, pricing and API status", blocks: [
        { type: "paragraph", html: "Atlas is not broadly self-serve as of the checked September 2026 launch material. World Labs says Atlas is entering early access with select partners and provides a request-access path." },
        { type: "paragraph", html: "A standalone public Atlas pricing table and a generally available Atlas-specific API were not verified. World Labs already offers Marble and a public World API, but those products should not be treated as proof of Atlas pricing, Atlas billing or general Atlas API access." },
        { type: "note", html: "Existing Marble plan prices belong to Marble. Do not copy them onto Atlas unless World Labs explicitly publishes Atlas commercial terms." },
      ]},
      { id: "benchmarks-limitations", title: "Benchmarks and current limitations", blocks: [
        { type: "paragraph", html: "World Labs reports strong launch results on camera-conditioned generation and sparse-view reconstruction, but those evaluations are vendor-run. They are useful technical signals, not independent proof that Atlas is universally better than every specialist image, video or 3D model." },
        { type: "list", items: ["Access is currently limited to select partners.", "No public Atlas-specific pricing was verified.", "No generally available Atlas-specific API was verified.", "Reconstruction can plausibly fill unseen regions, so generated geometry is not automatically ground-truth geometry.", "The strongest benchmark claims come from World Labs’ own launch evaluation."] },
      ]},
      { id: "atlas-vs-marble", title: "Atlas vs Marble: the important distinction", blocks: [
        { type: "paragraph", html: "Atlas is the newly announced underlying omni world model. Marble is World Labs’ existing creator-facing product for generating, editing, exploring and exporting persistent 3D worlds. World Labs says Atlas will power future versions of Marble and other products." },
        { type: "paragraph", html: "For most creators today, Marble is the accessible product while Atlas is the technology to watch or request access to. The dedicated Atlas vs Marble guide explains the pricing, API and workflow boundaries without mixing the two products." },
      ]},
    ],
    sources: worldLabsAtlasSources,
    relatedPaths: ["/blog/world-labs-atlas-vs-marble"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "World Labs Atlas",
    targetSearchIntent: "Understand the difference between World Labs Atlas and Marble, which one is accessible today, and which fits creator, 3D, video or developer workflows.",
    targetQuery: "World Labs Atlas vs Marble",
    parentSlug: "world-labs-atlas-world-model",
    slug: "world-labs-atlas-vs-marble",
    title: "World Labs Atlas vs Marble: Model vs Product, Access & Use Cases",
    metaTitle: "World Labs Atlas vs Marble: What’s the Difference?",
    metaDescription: "Atlas is World Labs’ new omni world model; Marble is the creator product available today. Compare access, capabilities, pricing boundaries and use cases.",
    h1: "World Labs Atlas vs Marble: Model vs Product Explained",
    excerpt: "Atlas and Marble belong to the same World Labs ecosystem, but they occupy different layers: Atlas is the next-generation model while Marble is the generally available creator product.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    ogAlt: "World Labs Atlas model layer compared with the Marble creator product and World API",
    sections: [
      { id: "short-answer", title: "Atlas vs Marble: the short answer", blocks: [
        { type: "paragraph", html: "Atlas is World Labs’ next-generation omni world model for spatial intelligence. Marble is the company’s creator-facing product for generating, editing, exploring and exporting persistent 3D worlds." },
        { type: "paragraph", html: "As of the September 2026 source check, Marble is generally available while Atlas is entering early access with select partners. That availability gap is the most important practical difference for anyone deciding what they can use today." },
      ]},
      { id: "availability", title: "Availability: Atlas is early access, Marble is a product you can use", blocks: [
        { type: "paragraph", html: "World Labs asks interested Atlas builders to request access. It does not present Atlas as an open self-serve product in the launch post." },
        { type: "paragraph", html: "Marble, by contrast, has a public product, sign-in flow and published plan structure. It supports creation from text, images, multi-image inputs, panoramas and — on eligible tiers — video, together with world editing and exports." },
      ]},
      { id: "pricing", title: "Pricing: Marble has public plans; Atlas pricing is not public", blocks: [
        { type: "paragraph", html: "World Labs currently lists Marble Free at $0/month, Standard at $20/month, Pro at $35/month and Max at $95/month. The plans differ by included credits, generation allowances and export or commercial-rights features." },
        { type: "paragraph", html: "Those are Marble prices, not Atlas prices. A standalone public Atlas pricing table was not verified in the checked Atlas launch material, so Atlas cost should be treated as unknown outside partner-specific terms." },
        { type: "note", html: "Marble top-up credits and API credits are also distinct in the current pricing interface. Avoid treating either one as an Atlas billing model." },
      ]},
      { id: "capabilities", title: "Capabilities: product workflow vs underlying model", blocks: [
        { type: "paragraph", html: "Marble is built around creating persistent navigable 3D worlds that can be edited, expanded, rendered and exported. Depending on plan, users can export splats, meshes, panoramas and enhanced video outputs." },
        { type: "paragraph", html: "Atlas goes deeper at the model layer. World Labs shows native camera-geometry control, up-to-one-minute 1440p video generation, sparse-view reconstruction, explicit point-cloud and Gaussian-splat outputs, video reframing and Real-to-Sim workflows." },
      ]},
      { id: "api", title: "API access: the current World API is a Marble API", blocks: [
        { type: "paragraph", html: "World Labs launched the public World API in January 2026 for generating explorable 3D worlds with Marble. Current documentation uses Marble model identifiers and describes Marble-based world generation." },
        { type: "paragraph", html: "A generally available Atlas-specific API was not verified in the September 1 Atlas announcement. Searching for ‘Atlas API’ should therefore not be answered by relabeling the existing World API as Atlas." },
      ]},
      { id: "which-to-use", title: "Which should you use?", blocks: [
        { type: "paragraph", html: "Choose Marble today if you need a supported creator product for world generation, editing, exploration, export or the current developer API. It is the practical path for most individual creators and product teams." },
        { type: "paragraph", html: "Atlas matters more if you are evaluating World Labs’ next-generation camera-controlled generation, reconstruction or simulation capabilities and can obtain early-access or partner-level access. World Labs says Atlas will power future versions of Marble, so the two should be understood as connected rather than competing standalone products." },
      ]},
    ],
    sources: worldLabsAtlasSources,
    relatedPaths: ["/blog/world-labs-atlas-world-model"],
  },
];
