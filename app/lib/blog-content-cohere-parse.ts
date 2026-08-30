import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-30";

const cohereParseMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Cohere Parse",
  targetSearchIntent: "Broad overview of Cohere Parse / parse-v5.0, including release status, document-parsing capabilities, API, pricing, availability, limitations and attributed benchmark evidence.",
  targetQuery: "Cohere Parse",
  slug: "cohere-parse-v5-document-parsing",
  title: "Cohere Parse 5: API, Pricing, Features & Benchmarks",
  metaTitle: "Cohere Parse 5: API, Pricing, Features & Benchmarks",
  metaDescription: "Cohere Parse 5 turns complex documents into structured Markdown for RAG and agents. See its API, $1.50/1,000-page pricing, features, limits and benchmarks.",
  h1: "Cohere Parse 5: What the New Document Parsing Model Does",
  excerpt: "Cohere Parse 5 is a specialist vision-language model for turning complex enterprise documents into structured Markdown and blocks for retrieval and agent workflows.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing enterprise documents becoming structured Markdown, tables and RAG nodes",
  sections: [
    { id: "what-it-is", title: "What Cohere Parse 5 is", blocks: [
      { type: "paragraph", html: "Cohere introduced Parse on August 27, 2026 as a specialist vision-language model for document ingestion. The current model ID is <code>parse-v5.0</code>. Cohere documents a 2.3B-parameter model, an 8,192-token context window and an approximate 4.6GB model size." },
      { type: "paragraph", html: "The product focuses on preserving reading order and document structure for search, RAG and agent workflows. It extracts text, tables, lists, forms, key-value pairs, images and captions, with Markdown as the default output and an optional ordered blocks format." },
    ]},
    { id: "api", title: "API availability and the current input contract", blocks: [
      { type: "paragraph", html: "Cohere lists Parse availability through its API, Microsoft Foundry, AWS SageMaker and Model Vault. The public endpoint is <code>/v2/parse</code>. Cohere's current rate-limit table lists Parse at 500 requests per minute for both trial and production API keys." },
      { type: "paragraph", html: "There is an important documentation nuance: the product overview lists PDF, PPT and JPEG support through Base64-encoded document representations, while the live API reference currently says the request accepts <code>document.type = image_url</code>. Developers should follow the live endpoint contract for implementation rather than assume arbitrary PDF or file URLs can be submitted directly." },
    ]},
    { id: "pricing", title: "Cohere Parse pricing", blocks: [
      { type: "paragraph", html: "Cohere's August 27 launch post states that the public Parse API costs <strong>$1.50 per 1,000 pages</strong>, or $0.0015 per page before storage, retrieval, embedding, reranking and downstream generation costs." },
      { type: "paragraph", html: "Cohere also promotes Model Vault for single-tenant inference and says it can reduce effective cost at sustained utilization, but the launch article does not give one universal Model Vault price. Deployment-specific commercial terms should be obtained rather than extrapolated from the public API rate." },
    ]},
    { id: "benchmarks", title: "Benchmarks and limits", blocks: [
      { type: "paragraph", html: "Cohere reports a 79.2 average across the ParseBench dimensions it treats as aligned with the product: tables, content faithfulness and semantic formatting. Those results, as well as Cohere's throughput claims, are vendor-published and should not be presented as an independent Project Monet benchmark." },
      { type: "paragraph", html: "Cohere says Parse does not provide extraction confidence scores and does not target chart-to-table numerical extraction in the current product scope. High-stakes amounts, dates, account numbers and legal clauses therefore still need deterministic or human validation." },
    ]},
    { id: "workflow", title: "Where Parse fits in an AI stack", blocks: [
      { type: "paragraph", html: "A common workflow is document input → Parse → structured chunks → embeddings → retrieval → reranking → answering model or agent. Parse handles document understanding; it does not replace the retrieval or reasoning stages that come afterward." },
      { type: "paragraph", html: "For an implementation walkthrough covering Python, data-URI input, Markdown versus blocks and production safeguards, read <a href=\"/blog/how-to-use-cohere-parse-api\">the Cohere Parse API guide</a>. Cohere's public material does not establish that parse-v5.0 is an unrestricted open-weight download, so private deployment should not be confused with open weights." },
    ]},
  ],
  sources: [
    { label: "Cohere — Introducing Parse", url: "https://cohere.com/blog/parse" },
    { label: "Cohere Docs — Parse", url: "https://docs.cohere.com/v2/docs/parse" },
    { label: "Cohere API Reference — Parse", url: "https://docs.cohere.com/v2/reference/parse" },
    { label: "Cohere Docs — Parse Quickstart", url: "https://docs.cohere.com/v2/docs/parse-quickstart" },
    { label: "Cohere Docs — Rate Limits", url: "https://docs.cohere.com/v2/docs/rate-limits" },
    { label: "ParseBench", url: "https://www.parsebench.ai/" },
  ],
  relatedPaths: ["/blog/how-to-use-cohere-parse-api"],
};

const cohereParseApi: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Cohere Parse",
  targetSearchIntent: "Practical developer guide to integrating Cohere Parse / parse-v5.0, preparing supported inputs, requesting Markdown or blocks output, understanding limits and safely using the result in RAG or agent workflows.",
  targetQuery: "how to use Cohere Parse API",
  parentSlug: "cohere-parse-v5-document-parsing",
  slug: "how-to-use-cohere-parse-api",
  title: "How to Use the Cohere Parse API: Python, Markdown & Blocks",
  metaTitle: "How to Use Cohere Parse API: Python, Markdown & Blocks",
  metaDescription: "Learn how to call Cohere Parse 5 with Python, prepare document images, choose Markdown or blocks output, handle limits and feed parsed content into RAG or agents.",
  h1: "How to Use the Cohere Parse API with Python",
  excerpt: "A practical Parse 5 workflow from SDK setup and supported page input through Markdown or blocks output, validation, rate limiting and RAG ingestion.",
  category: "AI",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet developer diagram showing Python API input, a document page, Markdown, structured blocks and RAG nodes",
  sections: [
    { id: "setup", title: "Set up the Cohere Parse client", blocks: [
      { type: "paragraph", html: "This implementation guide complements the <a href=\"/blog/cohere-parse-v5-document-parsing\">Cohere Parse overview</a>. Install the current Python SDK with <code>pip install -U cohere</code>, then create a <code>cohere.ClientV2</code> using an API key stored outside committed source." },
      { type: "paragraph", html: "For production work, follow the live API reference. It currently supports <code>document.type = image_url</code>, including remote image URLs and data URIs. Cohere's quickstart demonstrates converting an image into a Base64 data URI before calling <code>parse-v5.0</code>." },
    ]},
    { id: "outputs", title: "Choose Markdown or blocks", blocks: [
      { type: "paragraph", html: "Markdown is the default and is usually simplest for text chunking and retrieval. It can preserve text, lists and HTML-formatted tables, with image references and descriptions where available." },
      { type: "paragraph", html: "Use <code>output_format=\"blocks\"</code> when the application needs ordered typed regions such as text, tables and images with location information. Blocks are useful for layout-aware retrieval, separate table handling and review interfaces that map content back to source regions." },
    ]},
    { id: "validate", title: "Validate critical fields and preserve metadata", blocks: [
      { type: "paragraph", html: "Store the original document ID, filename, page number, parse timestamp, model ID and output format alongside every result. That makes future re-parsing reproducible and prevents old and new extraction outputs from being mixed silently." },
      { type: "paragraph", html: "Cohere says Parse does not return confidence scores. Validate business-critical amounts, dates, account numbers, percentages, legal clauses and dense table rows before downstream automation acts on them." },
    ]},
    { id: "rag", title: "Prepare Parse output for RAG", blocks: [
      { type: "paragraph", html: "Do not destroy document structure immediately after extracting it. Prefer chunks that preserve natural boundaries such as a heading with its paragraphs, a complete table with nearby explanation, a form section or a page-specific image description." },
      { type: "paragraph", html: "A Cohere-centered retrieval path can use Parse for structure, Embed for retrieval representation and Rerank for ordering candidate evidence. Those products solve different stages; Parse is the ingestion layer rather than the final decision-maker." },
    ]},
    { id: "limits-cost", title: "Rate limits, cost and production checks", blocks: [
      { type: "paragraph", html: "Cohere currently lists Parse at 500 requests per minute for both trial and production keys. Add concurrency control, retry handling, backoff for 429 responses, idempotent page IDs and monitoring instead of firing an uncontrolled batch at the documented ceiling." },
      { type: "paragraph", html: "The August 27 launch rate is $1.50 per 1,000 pages: 10,000 pages is $15 and 100,000 pages is $150 for Parse API page charges alone. Keep downstream storage, embeddings, reranking and LLM costs separate, and test the hardest real documents before production." },
    ]},
  ],
  sources: [
    { label: "Cohere Docs — Parse Quickstart", url: "https://docs.cohere.com/v2/docs/parse-quickstart" },
    { label: "Cohere API Reference — Parse", url: "https://docs.cohere.com/v2/reference/parse" },
    { label: "Cohere Docs — Parse", url: "https://docs.cohere.com/v2/docs/parse" },
    { label: "Cohere Docs — Rate Limits", url: "https://docs.cohere.com/v2/docs/rate-limits" },
    { label: "Cohere — Introducing Parse", url: "https://cohere.com/blog/parse" },
  ],
  relatedPaths: ["/blog/cohere-parse-v5-document-parsing"],
};

export const cohereParseArticles: BlogArticle[] = [cohereParseMain, cohereParseApi];
