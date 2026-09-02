import type { BlogArticle } from "./blog-types.ts";

export const optimizelyMarkBenchArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Optimizely Marketing AI Models / Mark-Bench",
    targetSearchIntent: "Broad overview of Optimizely's purpose-built marketing AI models and Mark-Bench launch, including features, benchmark claims, availability, cost positioning, Mark-IQ context, and limitations.",
    targetQuery: "Optimizely marketing AI models",
    slug: "optimizely-marketing-ai-models-mark-bench",
    title: "Optimizely Marketing AI Models & Mark-Bench: What We Know",
    metaTitle: "Optimizely Marketing AI Models & Mark-Bench Explained",
    metaDescription: "Optimizely announced purpose-built AI models for marketing and Mark-Bench. Here is what launched, the benchmark claims, availability, and what remains unverified.",
    h1: "Optimizely Marketing AI Models and Mark-Bench Explained",
    excerpt: "Optimizely has announced a family of post-trained AI models for marketing plus Mark-Bench, a marketing-specific benchmark. Here is what is confirmed, what the company claims, and what is still unknown.",
    category: "Marketing",
    author: "Mayank Harsh",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    ogAlt: "Abstract marketing model-routing diagram representing Optimizely purpose-built AI models and the Mark-Bench marketing benchmark.",
    sections: [
      {
        id: "what-optimizely-announced",
        title: "What Optimizely announced",
        blocks: [
          { type: "paragraph", html: "Optimizely announced a new family of purpose-built, post-trained AI models for marketing on September 1, 2026. The company says its Agent Platform can route work to specialized models instead of relying on one general-purpose frontier model for every task." },
          { type: "paragraph", html: "Optimizely has not published individual model names, model IDs, parameter counts, architecture details, standalone pricing, or a public API reference for this model family. Its launch announcement says the models are <strong>coming soon</strong> to all Agent Platform customers, so they should be treated as announced rather than generally available." },
          { type: "note", html: "Availability and product details are current as of September 2, 2026. The launch announcement does not provide a precise general-availability date." },
        ],
      },
      {
        id: "mark-bench",
        title: "What Mark-Bench measures",
        blocks: [
          { type: "paragraph", html: "Alongside the model family, Optimizely introduced Mark-Bench, which it describes as an open-source benchmark for evaluating AI systems on marketing work. The company says it spans 285 tasks across 15 marketing functions and more than 6,000 evaluation criteria." },
          { type: "list", items: ["Writing a press release", "Creating a social post", "Writing email copy", "Evaluating both cost and task performance"], ordered: false },
          { type: "paragraph", html: "Optimizely says the benchmark is intended to let marketers, researchers, and AI providers compare models and agentic harnesses on domain-specific work. A verified public repository or install guide was not located during this publication check, so this article does not claim that readers can already clone or run Mark-Bench." },
        ],
      },
      {
        id: "benchmark-claims",
        title: "How to interpret Optimizely's benchmark claims",
        blocks: [
          { type: "paragraph", html: "Optimizely reports that its purpose-built models achieved 10x greater cost efficiency than state-of-the-art LLMs in early testing. It also reports that, under Mark-Bench default configurations, Optimizely Agent Platform achieved a 67% all-pass rate versus 60% for Claude Code at 2x lower cost." },
          { type: "note", html: "These are vendor-reported results on a benchmark introduced by Optimizely itself. They are launch evidence, not independent validation, and should not be treated as proof of universal superiority across marketing workloads." },
          { type: "paragraph", html: "The narrower takeaway is that Optimizely is betting specialized post-training and task-level model routing can reduce unnecessary model size, context use, and token spend for recurring marketing jobs while maintaining useful quality." },
        ],
      },
      {
        id: "mark-iq-and-agent-platform",
        title: "How Mark-IQ and Agent Platform fit in",
        blocks: [
          { type: "paragraph", html: "Optimizely says the new models draw on Mark-IQ, the Agent Platform's organizational context layer. That layer can incorporate information such as experimentation history and web analytics so agents work with brand and business context without rebuilding it in every prompt." },
          { type: "paragraph", html: "This model layer is separate from Optimizely Virtual Teammates. Virtual Teammates are persistent role-specific AI coworkers; the new model family is the specialized model layer intended to perform particular marketing tasks efficiently." },
          { type: "paragraph", html: "Optimizely's current Agent Platform documentation also describes a multi-model architecture that matches tasks to models and supports organizational context, agent workflows, connectors, and governance controls." },
        ],
      },
      {
        id: "pricing-availability-limitations",
        title: "Pricing, availability, and important limitations",
        blocks: [
          { type: "paragraph", html: "Optimizely has not announced standalone per-token or per-model pricing for this family. The 10x efficiency figure is therefore not a public price list and should not be converted into a customer price estimate." },
          { type: "paragraph", html: "Several important details remain undisclosed: individual model names, architecture, parameter counts, training data, licensing, API identifiers, standalone pricing, and an exact rollout date. Independent Mark-Bench results were also not identified during this review." },
          { type: "paragraph", html: "Until those details are published, the most accurate description is that Optimizely has announced a specialized marketing-model family and benchmark, with broader Agent Platform availability promised soon and performance claims still attributable to the vendor." },
        ],
      },
    ],
    sources: [
      { label: "Optimizely — Purpose-Built AI Models for Marketing announcement (Sep 1, 2026)", url: "https://www.optimizely.com/de/company/press/optimizely-models" },
      { label: "Optimizely newsroom", url: "https://www.optimizely.com/company/press" },
      { label: "Optimizely Agent Platform technical overview", url: "https://www.optimizely.com/no/products/ai/technical" },
    ],
    relatedPaths: [
      "/blog/optimizely-virtual-teammates",
      "/blog/optimizely-seo-ai-search-analyst",
    ],
  },
];
