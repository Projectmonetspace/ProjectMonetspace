import type { BlogArticle } from "./blog-types.ts";

const neommeSources = [
  { label: "H Company — NeoMME launch article", url: "https://huggingface.co/blog/Hcompany/neomme" },
  { label: "H Company — NeoMME 260M model card", url: "https://huggingface.co/Hcompany/NeoMME-260M" },
  { label: "H Company — NeoMME 800M model card", url: "https://huggingface.co/Hcompany/NeoMME-800M" },
  { label: "H Company — NeoMME 260M Retriever model card", url: "https://huggingface.co/Hcompany/NeoMME-260M-Retriever" },
  { label: "H Company — NeoMME 800M Retriever model card", url: "https://huggingface.co/Hcompany/NeoMME-800M-Retriever" },
  { label: "Hugging Face Transformers — NeoMME documentation", url: "https://huggingface.co/docs/transformers/main/model_doc/neomme" },
  { label: "NeoMME technical report", url: "https://arxiv.org/abs/2609.01657" },
];

export const neommeArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "NeoMME",
    targetSearchIntent: "Broad overview of NeoMME, its architecture, 260M/800M variants, visual document retrieval use cases, released weights, Transformers support, benchmarks, licensing and limitations",
    targetQuery: "NeoMME",
    slug: "neomme-multimodal-document-retrieval-model",
    title: "NeoMME: 260M/800M Multimodal Encoder for Visual RAG",
    metaTitle: "NeoMME: 260M/800M Multimodal Encoder for Visual RAG",
    metaDescription: "NeoMME is H Company's open 260M/800M multimodal encoder family for text and visual document retrieval. See architecture, weights, benchmarks and use cases.",
    h1: "NeoMME: H Company's Efficient Multimodal Encoder for Visual Document Retrieval",
    excerpt: "NeoMME is H Company's compact multimodal-native encoder family for multilingual text and document images, with task-specific Retriever checkpoints for visual search and RAG.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "NeoMME multimodal encoder for visual document retrieval and RAG with 260M and 800M model labels",
    sections: [
      { id: "what-it-is", title: "What NeoMME is", blocks: [
        { type: "paragraph", html: "NeoMME is a family of multilingual, multimodal-native bidirectional encoders from H Company. Unlike many visual-language systems, it does not pair a separately pretrained vision tower with a causal language model. Text tokens and raw image patches travel through one shared Transformer encoder." },
        { type: "paragraph", html: "That makes NeoMME an encoder rather than a conversational generator. It produces contextual representations for downstream tasks such as retrieval, classification and extraction instead of autoregressively generating answers." },
      ]},
      { id: "sizes", title: "NeoMME 260M and 800M", blocks: [
        { type: "paragraph", html: "H Company released 260M and 800M model families under Apache 2.0. The current 260M model card lists 263M parameters, a 131,072-token vocabulary, 16,384-token context, 32×32 image patches and default image support up to 2,048 pixels on the longest side." },
        { type: "paragraph", html: "The base checkpoints are foundation encoders, not finished retrieval applications. H Company's 260M model card explicitly says the raw hidden states require task-specific fine-tuning and directs document-search users to the NeoMME-Retriever checkpoints." },
      ]},
      { id: "architecture", title: "Why the single-tower architecture matters", blocks: [
        { type: "paragraph", html: "NeoMME is pretrained from scratch with a masked discrete-diffusion text objective while image patches remain visible for multimodal examples. The goal is to learn shared visual and textual representations without carrying the parameter and compute overhead of a generative decoder that retrieval does not need." },
        { type: "paragraph", html: "For document systems, that architecture is most relevant when the task is ranking or representing pages rather than producing prose. It can preserve visual signals from tables, charts, forms, typography and layout that may be flattened by text-only extraction." },
      ]},
      { id: "retriever", title: "NeoMME-Retriever for visual document search", blocks: [
        { type: "paragraph", html: "H Company fine-tuned both model sizes into NeoMME-Retriever checkpoints for multimodal document retrieval. The current Transformers variant returns dense and multi-vector embeddings in a single forward pass." },
        { type: "paragraph", html: "The model cards document cosine similarity for dense embeddings and MeanMaxSim scoring for multi-vector late interaction. That gives teams a compact first-stage representation and a more detailed matching representation from the same checkpoint." },
      ]},
      { id: "benchmarks", title: "Benchmarks and throughput", blocks: [
        { type: "paragraph", html: "H Company reports ViDoRe v3 nDCG@10 of 0.5226 for NeoMME-Retriever 260M and 0.5560 for NeoMME-Retriever 800M using late interaction. These are vendor-authored benchmark results, not independent replication." },
        { type: "paragraph", html: "In H Company's matched throughput test at 2048×2048 input on one NVIDIA L40S, the 260M Retriever encodes about 51 pages per second versus about 26 pages per second for ColModernVBERT. Treat that as a benchmark configuration rather than a universal production speed or hardware requirement." },
      ]},
      { id: "rag", title: "How NeoMME fits into RAG", blocks: [
        { type: "paragraph", html: "NeoMME-Retriever can serve as the retrieval layer of a visual RAG pipeline: index page images, encode the user's query, retrieve the most relevant pages, then send those pages or extracted evidence to a separate LLM or VLM for the final answer." },
        { type: "note", html: "NeoMME does not replace the answering model. Keep retrieval and generation as separate responsibilities, and preserve page metadata so the final system can cite the source document and page." },
      ]},
      { id: "availability", title: "Weights, Transformers support and licensing", blocks: [
        { type: "paragraph", html: "The pretrained backbones and retrieval checkpoints are available on Hugging Face and integrated into Transformers. Current Retriever model cards use <code>NeoMMEForRetrieval</code> with the NeoMME processor interface for inference." },
        { type: "paragraph", html: "The released weights are Apache-2.0 licensed. That is permissive for many development and commercial scenarios, but teams should still verify licenses and terms for any datasets, fine-tunes, vector stores and downstream components they combine with the models." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "list", items: [
          "independent replication of the launch benchmarks is still limited",
          "the base checkpoints are not plug-and-play retrieval systems",
          "memory and throughput depend on checkpoint, resolution, batch size, precision and indexing strategy",
          "visual retrieval may add unnecessary complexity for clean text-heavy corpora",
        ]},
        { type: "paragraph", html: "Benchmark both NeoMME sizes on the actual document collection. A compact model can be attractive for indexing economics, but production relevance depends on recall, ranking quality, latency, index size and final answer quality on your own workload." },
      ]},
    ],
    sources: neommeSources,
    relatedPaths: ["/blog/how-to-use-neomme-retriever-visual-rag"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "NeoMME",
    targetSearchIntent: "Practical implementation of NeoMME-Retriever for visual document retrieval and RAG, including model choice, page-image encoding, query retrieval and downstream generation boundaries",
    targetQuery: "how to use NeoMME-Retriever",
    parentSlug: "neomme-multimodal-document-retrieval-model",
    slug: "how-to-use-neomme-retriever-visual-rag",
    title: "How to Use NeoMME-Retriever for Visual Document RAG",
    metaTitle: "How to Use NeoMME-Retriever for Visual Document RAG",
    metaDescription: "Learn how NeoMME-Retriever fits into visual RAG: choose a checkpoint, encode page images, retrieve documents and pass results to a separate LLM or VLM.",
    h1: "How to Use NeoMME-Retriever for Visual Document RAG",
    excerpt: "Use NeoMME-Retriever to index page images, encode text queries, retrieve relevant documents and hand the selected evidence to a separate generative model.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "NeoMME-Retriever visual RAG pipeline from PDF pages to vector retrieval and an LLM or VLM answer",
    sections: [
      { id: "checkpoint", title: "Choose a Retriever checkpoint", blocks: [
        { type: "paragraph", html: "Use a task-specific <code>NeoMME-*-Retriever</code> checkpoint for document search rather than the raw NeoMME backbone. H Company currently publishes 260M and 800M Retriever variants." },
        { type: "paragraph", html: "The default Transformers Retriever returns dense and multi-vector embeddings together. The 260M model is a practical efficiency-first starting point, but the correct choice should come from benchmarking both checkpoints on your own corpus." },
      ]},
      { id: "prepare", title: "Prepare document pages and metadata", blocks: [
        { type: "paragraph", html: "Visual document retrieval normally turns each PDF page into an image before indexing. Keep a stable mapping from each page image to its document ID, page number, source URL or filename, permissions and any useful section metadata." },
        { type: "paragraph", html: "That metadata remains your application's responsibility. The retriever ranks relevance; it does not automatically enforce access rules, preserve citations or recover the original source document." },
      ]},
      { id: "load", title: "Load NeoMME-Retriever with the current interface", blocks: [
        { type: "paragraph", html: "The current H Company model cards load the Retriever with <code>NeoMMEForRetrieval</code> and a NeoMME/Auto processor. The 800M card, for example, shows <code>AutoProcessor.from_pretrained()</code> and <code>NeoMMEForRetrieval.from_pretrained(..., device_map=&quot;auto&quot;)</code>." },
        { type: "paragraph", html: "H Company's full 260M example uses the processor's chat-template helper with an explicit <code>query</code> or <code>document</code> task and then runs the same retrieval model over the resulting batches. Recheck the live model card before production because library interfaces can evolve." },
      ]},
      { id: "representations", title: "Use dense and multi-vector representations correctly", blocks: [
        { type: "paragraph", html: "NeoMME-Retriever exposes a dense embedding and a multi-vector embedding in one forward pass. H Company documents cosine similarity for the dense vectors and MeanMaxSim for late-interaction scoring." },
        { type: "paragraph", html: "A scalable architecture can use dense vectors for first-stage approximate-nearest-neighbor retrieval, then rerank a smaller candidate set with late interaction. That pattern is an implementation strategy, not a mandatory NeoMME requirement." },
      ]},
      { id: "index", title: "Index page images", blocks: [
        { type: "list", items: [
          "render each source page to an image at a consistent policy",
          "encode the document with the Retriever checkpoint",
          "store the dense vector and, when needed, the multi-vector representation",
          "attach document and page metadata to the stored record",
          "retain the original page image or a durable reference to it",
        ]},
        { type: "paragraph", html: "NeoMME does not prescribe a single vector database. Choose the index based on corpus size, filtering needs, latency, cost and whether your stack can support the representation used for reranking." },
      ]},
      { id: "query", title: "Encode the query and retrieve candidates", blocks: [
        { type: "paragraph", html: "At search time, encode the user's text query with the corresponding query task of the same compatible Retriever checkpoint. Do not mix document embeddings from one NeoMME variant with query embeddings from another unless you have explicitly validated compatibility." },
        { type: "paragraph", html: "Retrieve the nearest dense vectors, optionally rerank the shortlist with MeanMaxSim over the multi-vector embeddings, and return the top pages with their stored source metadata." },
      ]},
      { id: "generator", title: "Add a separate answering model", blocks: [
        { type: "paragraph", html: "NeoMME-Retriever is not the generator. Pass the selected page images, OCR text or extracted evidence to a separate LLM or VLM and instruct that model to stay grounded in the retrieved sources." },
        { type: "paragraph", html: "For visually complex pages, a VLM that can inspect the original page image may preserve chart and layout evidence better than flattening everything back into plain text before generation." },
      ]},
      { id: "evaluate", title: "Evaluate on your own document corpus", blocks: [
        { type: "list", items: [
          "recall@k and ranking quality on known-answer queries",
          "indexing throughput and query latency",
          "dense and multi-vector index size",
          "cost at the target document volume",
          "final answer accuracy after the generator step",
        ]},
        { type: "paragraph", html: "H Company's ViDoRe and L40S numbers describe its benchmark setup. They do not establish a universal GPU minimum, batch size, shortlist depth or latency target for your application." },
      ]},
      { id: "when-to-use", title: "When visual retrieval is worth the complexity", blocks: [
        { type: "paragraph", html: "NeoMME-Retriever is most compelling when page layout, tables, charts, forms, diagrams or typography carry meaning that OCR-first chunking can lose." },
        { type: "paragraph", html: "For clean digital text, a conventional text-extraction and embedding pipeline may remain cheaper and easier to inspect. Hybrid systems can also use visual retrieval for page relevance and OCR/text extraction for downstream evidence handling." },
      ]},
    ],
    sources: neommeSources,
    relatedPaths: ["/blog/neomme-multimodal-document-retrieval-model"],
  },
];
