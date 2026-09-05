import type { BlogArticle } from "./blog-types.ts";

const vlmRunSources = [
  { label: "VLM Run — Gateway", url: "https://www.vlm.run/gateway" },
  { label: "VLM Run — Introducing the Gateway", url: "https://www.vlm.run/blog/introducing-gateway" },
  { label: "VLM Run — Gateway product page", url: "https://www.vlm.run/product/gateway" },
  { label: "VLM Run — Pricing", url: "https://www.vlm.run/pricing" },
  { label: "VLM Run — Hugging Face launch article", url: "https://huggingface.co/blog/vlm-run/introducing-gateway" },
];

export const vlmRunGatewayArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "VLM Run Gateway",
    targetSearchIntent: "Broad overview of VLM Run Gateway, its open-weight visual model API, OCR/document/video support, OpenAI-compatible interface, MCP support, model catalog, current alpha availability and pricing caveats",
    targetQuery: "VLM Run Gateway",
    slug: "vlm-run-gateway",
    title: "VLM Run Gateway: Open-Weight Vision API, Models & Pricing",
    metaTitle: "VLM Run Gateway: Open-Weight Vision API, Models & Pricing",
    metaDescription: "VLM Run Gateway puts OCR, open-weight VLMs and visual AI models behind one OpenAI-compatible API with MCP support. See models, setup, pricing and caveats.",
    h1: "VLM Run Gateway: One API for OCR, VLMs and Visual AI Models",
    excerpt: "VLM Run Gateway is a vision-specific API for open-weight OCR, multimodal and classical computer-vision models, with OpenAI-compatible chat completions and MCP access.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "VLM Run Gateway unifying OCR, VLM and visual AI models behind one API",
    sections: [
      { id: "what-it-is", title: "What VLM Run Gateway is", blocks: [
        { type: "paragraph", html: "VLM Run Gateway is a unified API for visual AI workloads including OCR, multimodal chat, document extraction, detection, segmentation and other vision tasks. VLM Run positions it as a vision-specific alternative to general LLM routers." },
        { type: "paragraph", html: "The public catalog is dynamic. Model names, modalities and prices can change, so production integrations should validate the current catalog instead of treating launch-day examples as permanent." },
      ]},
      { id: "why-vision-gateway", title: "Why VLM Run built a vision-specific gateway", blocks: [
        { type: "paragraph", html: "VLM Run says its internal testing exposed vision-specific serving problems around quantization, small-text OCR quality, video inputs, FPS controls and document orchestration. Those observations are vendor-reported product rationale rather than independent industry benchmarks." },
        { type: "paragraph", html: "The Gateway attempts to absorb document rasterization, page batching, retries and reassembly so callers can focus on choosing a model and validating output instead of rebuilding the serving pipeline for every provider." },
      ]},
      { id: "api", title: "OpenAI-compatible API and CLI", blocks: [
        { type: "paragraph", html: "VLM Run documents an OpenAI-compatible base URL at <code>https://gateway.vlm.run/v1/openai/</code>. Its examples use the OpenAI SDK, a VLM Run API key when authenticated access is used, and a model ID selected from the current catalog." },
        { type: "paragraph", html: "The launch docs also show a CLI workflow using <code>uvx vlmrun gw models</code> to inspect the catalog and <code>uvx vlmrun gw chat</code> for document, image and video tests." },
      ]},
      { id: "documents", title: "Documents, OCR and Markdown extraction", blocks: [
        { type: "paragraph", html: "Document workflows can send a PDF or document input to a compatible OCR or multimodal model and request structured text or Markdown. VLM Run says the Gateway can chunk, batch and reassemble large document jobs internally." },
        { type: "paragraph", html: "That can simplify invoice extraction, contract ingestion and RAG pipelines, but output quality still depends on the selected model and the source material. Teams should test tables, small text, scans and multilingual pages on their own corpus." },
      ]},
      { id: "video-mcp", title: "Video support and MCP for agents", blocks: [
        { type: "paragraph", html: "VLM Run also targets image and video understanding, but capability varies by model. A model that accepts images should not automatically be assumed to support native video or the same sampling controls." },
        { type: "paragraph", html: "The Gateway is exposed through MCP so compatible agents can access visual models without a separate integration for each model family. MCP support is part of the product positioning, while exact setup details should be checked in the current docs." },
      ]},
      { id: "pricing", title: "Current alpha access and pricing", blocks: [
        { type: "paragraph", html: "VLM Run's September 2026 Gateway launch page says anonymous access is available with IP-based rate limits and that the Gateway is free during alpha. The same page says published prices are already live as cost signals for production." },
        { type: "paragraph", html: "Separately, VLM Run's current pricing page lists a Starter plan at $0 per month with pay-as-you-go usage and a $10 signup balance, plus paid Pro and Enterprise tiers. These are distinct states: alpha access should not be described as permanently free, and account billing should be checked before production use." },
      ]},
      { id: "enterprise", title: "Enterprise deployment and limitations", blocks: [
        { type: "paragraph", html: "VLM Run advertises private VPC or on-premises deployment, SSO, RBAC, audit-log export and regulated-data options. Organizations should verify the exact contract, retention policy and compliance scope for their own deployment rather than relying on marketing labels alone." },
        { type: "list", items: ["model availability and pricing can change during alpha", "not every model supports every modality", "vendor quality, latency and savings claims require independent validation", "underlying open-weight models can carry different licenses"] },
      ]},
      { id: "who-should-use", title: "Who should consider VLM Run Gateway", blocks: [
        { type: "paragraph", html: "The Gateway is most relevant to teams building document ingestion, OCR-heavy automation, multimodal agents, visual search, asset tagging or video-understanding systems that need to compare multiple visual models behind one interface." },
        { type: "note", html: "If a workload only needs text LLM routing, a vision-specific gateway may add little value. The strongest fit is where document, image or video inputs are central to the application." },
      ]},
    ],
    sources: vlmRunSources,
    relatedPaths: ["/blog/how-to-use-vlm-run-gateway-api"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "VLM Run Gateway",
    targetSearchIntent: "Connect to VLM Run Gateway, discover supported visual models, call OCR/document/image/video models through the OpenAI-compatible API or CLI, and avoid modality/pricing mistakes",
    targetQuery: "how to use VLM Run Gateway API",
    parentSlug: "vlm-run-gateway",
    slug: "how-to-use-vlm-run-gateway-api",
    title: "How to Use VLM Run Gateway API for OCR and Visual Models",
    metaTitle: "How to Use VLM Run Gateway API for OCR & Visual Models",
    metaDescription: "Set up VLM Run Gateway for OCR, PDFs, images and video using its OpenAI-compatible API and CLI. Learn model selection, capability checks and alpha caveats.",
    h1: "How to Use VLM Run Gateway for OCR, Documents, Images and Video",
    excerpt: "Use VLM Run Gateway by checking the live catalog, testing with the CLI, then connecting through its OpenAI-compatible API while validating modality and billing assumptions.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Using VLM Run Gateway API for OCR, documents, images and video",
    sections: [
      { id: "catalog", title: "1. Start with the live model catalog", blocks: [
        { type: "paragraph", html: "Choose a model by task and modality, not name recognition. Confirm whether the current catalog entry supports OCR, document Markdown, image chat, video or another visual capability before writing integration code." },
        { type: "paragraph", html: "Also record the current model ID and displayed pricing. The Gateway is in alpha and the catalog can change, so stale examples should not become hard-coded assumptions." },
      ]},
      { id: "cli", title: "2. Test with the VLM Run CLI", blocks: [
        { type: "paragraph", html: "The launch documentation shows <code>uvx vlmrun gw models</code> to list models and <code>uvx vlmrun gw chat -m &lt;model-id&gt; &lt;file&gt;</code> as the basic pattern for document, image and video testing." },
        { type: "paragraph", html: "Use CLI tests on representative files before application integration. OCR quality can vary on scans, forms, tables, tiny text and multilingual material even when a model performs well on cleaner inputs." },
      ]},
      { id: "openai-api", title: "3. Connect through the OpenAI-compatible API", blocks: [
        { type: "paragraph", html: "VLM Run's current example points the OpenAI client at <code>https://gateway.vlm.run/v1/openai/</code>. Document examples use chat completions with a <code>document_url</code> content item and a Markdown method for compatible models." },
        { type: "paragraph", html: "Treat request fields as model-specific. Do not assume every catalog model accepts <code>document_url</code>, video, the same context limits or the same output method." },
      ]},
      { id: "ocr", title: "4. Evaluate OCR on your own documents", blocks: [
        { type: "list", items: ["clean digital PDFs", "scanned pages", "tables and multi-column layouts", "forms and invoices", "small or rotated text", "multilingual documents"] },
        { type: "paragraph", html: "Measure extraction accuracy before optimizing only for token or page price. A cheaper model that creates more cleanup work can be more expensive operationally." },
      ]},
      { id: "rag", title: "5. Use Markdown extraction carefully in RAG", blocks: [
        { type: "paragraph", html: "Document-to-Markdown can be a useful preprocessing step for retrieval systems because it can retain headings and structural cues better than plain OCR text, depending on the model and document." },
        { type: "paragraph", html: "Validate page order, table fidelity and failure handling before treating extracted Markdown as authoritative. Keep source-page metadata so downstream answers can cite the original document." },
      ]},
      { id: "video-mcp", title: "6. Check video and MCP support separately", blocks: [
        { type: "paragraph", html: "Do not infer video support from image support. Check the live capability matrix and test duration limits, sampling behavior, latency and upload constraints on the exact model you plan to use." },
        { type: "paragraph", html: "VLM Run also exposes the catalog through MCP for agents. Use the current MCP documentation for setup because the public alpha can evolve faster than copied configuration snippets." },
      ]},
      { id: "billing", title: "7. Confirm the current billing state", blocks: [
        { type: "paragraph", html: "The September 2026 Gateway launch page says anonymous access remains available with IP-based rate limits and the Gateway is free during alpha, while published prices are already live as production cost signals." },
        { type: "paragraph", html: "VLM Run's broader pricing page lists Starter at $0 per month with pay-as-you-go usage and a $10 signup balance. Before scaling, confirm whether your workflow is anonymous alpha traffic, authenticated account usage or a paid tier, and verify the current model rate." },
      ]},
      { id: "production", title: "8. Production checklist", blocks: [
        { type: "list", items: ["pin the intended model ID", "test representative media", "confirm current billing and rate limits", "log model and request metadata", "handle unsupported modality errors", "verify retention and deployment terms", "keep a fallback if a model changes or disappears"] },
        { type: "note", html: "Open-weight does not mean one universal license. Check the license and commercial terms of the underlying model as well as VLM Run's service terms for your use case." },
      ]},
    ],
    sources: vlmRunSources,
    relatedPaths: ["/blog/vlm-run-gateway"],
  },
];
