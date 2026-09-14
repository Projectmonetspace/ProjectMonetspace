import type { BlogArticle } from "./blog-types.ts";

export const reviewArticles20260914E: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Pinecone Full-Text Search",
    "targetSearchIntent": "Understand Pinecone Full-Text Search GA, what it adds, how it works with vector search, availability, pricing model, limits, and when to use it",
    "targetQuery": "Pinecone full-text search",
    "slug": "pinecone-full-text-search",
    "title": "Pinecone Full-Text Search: BM25, Hybrid RAG, Pricing & How It Works",
    "metaTitle": "Pinecone Full-Text Search: BM25, Hybrid RAG & Pricing",
    "metaDescription": "Pinecone Full-Text Search is now GA. Learn how BM25, Lucene syntax, fuzzy matching and text filters work alongside vectors for RAG and AI agents.",
    "h1": "Pinecone Full-Text Search: BM25, Hybrid Search & How It Works",
    "excerpt": "Pinecone Full-Text Search is now generally available in Pinecone Database, giving developers a native way to combine exact keyword retrieval with the semantic search Pinecone is known for. The GA release adds BM25 ranking across multiple text fields, Lucene query syntax, fuzzy…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Pinecone Full-Text Search: BM25, Hybrid Search & How It Works — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone Full-Text Search is now generally available in Pinecone Database, giving developers a native way to combine exact keyword retrieval with the semantic search Pinecone is known for. The GA release adds BM25 ranking across multiple text fields, Lucene query syntax, fuzzy matching, text-match filters, and language-aware tokenization and stemming for 18 languages. The important change is architectural: text fields, dense vectors, sparse vectors and metadata can live in the same document schema and index, so a RAG system or agent does not need a separate lexical-search cluster just to handle exact identifiers."
          }
        ]
      },
      {
        "id": "why-pinecone-added-full-text-search",
        "title": "Why Pinecone added full-text search",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Embedding search is strong when wording differs but meaning is similar. It is weaker when the query itself is the answer key: a SKU, order number, legal citation, error code or exact phrase. Pinecone gives the example of a product identifier such as PROD-001. A vector search may rank visually or semantically similar identifiers nearby even when the user needs an exact match. That failure can be silent because nearest-neighbor search will still return something."
          },
          {
            "type": "paragraph",
            "html": "Full-text search addresses that class of query with lexical retrieval. BM25 scores actual terms, while text-match filters can require a phrase or token condition before semantic ranking runs. For agentic systems, this matters because a wrong lookup early in a tool chain can contaminate every step that follows."
          }
        ]
      },
      {
        "id": "what-is-included-in-the-ga-release",
        "title": "What is included in the GA release",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone says Full-Text Search now supports BM25 keyword ranking across multiple text fields, Lucene query syntax, boolean and phrase queries, fuzzy matching with the tilde operator, tokenization and stemming in 18 languages, and text-match filters that can restrict a semantic search to records meeting a lexical condition. A single index can contain text fields alongside dense vectors, sparse vectors and metadata."
          },
          {
            "type": "paragraph",
            "html": "That allows several retrieval patterns. A pure keyword query can rank documents by BM25. A semantic query can first be constrained by a text-match filter and then rank the remaining candidates by vector similarity. A system can also keep structured metadata filters in the same query path."
          }
        ]
      },
      {
        "id": "full-text-search-vs-semantic-search",
        "title": "Full-text search vs semantic search",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The two methods solve different jobs. Semantic search is best when a user asks for concepts, paraphrases or broad meaning. Full-text search is best when literal wording matters. In many production RAG systems, the right architecture is not to choose one permanently but to route or combine them according to the query."
          },
          {
            "type": "paragraph",
            "html": "Use full-text search when the user supplies exact identifiers, quoted phrases, names, codes or other literal strings. Use dense retrieval when the user describes an idea in different language from the source material. Use a text-match filter plus dense ranking when a hard lexical constraint must be satisfied before semantic relevance decides the order."
          }
        ]
      },
      {
        "id": "why-this-matters-for-rag-and-agents",
        "title": "Why this matters for RAG and agents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "RAG systems often fail in retrieval rather than generation. If the retriever returns the wrong policy, order or error-code documentation, even a strong language model can answer confidently from bad context. Pinecone's GA release targets this precision gap without forcing teams to operate a second search engine solely for lexical matching."
          },
          {
            "type": "paragraph",
            "html": "For agents, exact lookup is even more important. An agent may extract an order ID in one step and use it in the next. Full-text retrieval can enforce that literal value rather than returning a similar-looking record. This makes the retrieval layer more useful for support workflows, product catalogs, legal research and structured operational tools."
          }
        ]
      },
      {
        "id": "pricing-and-availability",
        "title": "Pricing and availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone lists dense, sparse and full-text indexes on its Starter plan and above. The Starter tier is free and includes limited monthly storage and read/write usage. The Builder tier is currently $20 per month. Standard has a $50 monthly minimum applied to usage, while Enterprise starts with a $500 monthly minimum. Exact database costs depend on storage, read units, write units, cloud, region and deployment model."
          },
          {
            "type": "paragraph",
            "html": "Pinecone says full-text indexes use the same usage-based capacity model as its vector indexes. That means there is not a single universal 'price per full-text query' that applies to every workload. For on-demand deployments, read cost is metered in read units; sustained high-throughput workloads can use Dedicated Read Nodes instead. Treat the pricing page and calculator as the current source of truth because plan allowances and regional rates can change."
          }
        ]
      },
      {
        "id": "important-limitations-and-cautions",
        "title": "Important limitations and cautions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not interpret GA as proof that BM25 is universally better than embeddings. Full-text search improves a different class of query. Also, Pinecone's product announcement is a vendor source; claims about operational simplicity or accuracy benefits should not be treated as independent benchmark results."
          },
          {
            "type": "paragraph",
            "html": "Some older Pinecone examples were written during public preview and may show preview namespaces or API versions. Developers implementing the feature should check the current GA documentation and SDK examples before copying preview code directly."
          }
        ]
      },
      {
        "id": "who-should-care",
        "title": "Who should care",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The release is most relevant to teams building RAG, support agents, catalog search, recommendations, enterprise document search and workflow agents that need exact values. It is less important for applications whose queries are purely conceptual and whose corpus does not contain identifiers or literal constraints."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone Full-Text Search closes a practical gap in vector-first retrieval. Instead of maintaining one system for semantic similarity and another for exact keyword matching, developers can now keep lexical and vector search capabilities inside the same Pinecone database. For modern RAG and agent systems, the biggest benefit is not 'BM25 versus vectors' but the ability to use each retrieval method for the query type it actually handles well."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "pinecone.io — full text search generally available",
        "url": "https://www.pinecone.io/blog/full-text-search-generally-available/"
      },
      {
        "label": "pinecone.io — full text search",
        "url": "https://www.pinecone.io/blog/full-text-search/"
      },
      {
        "label": "pinecone.io — full text search architecture",
        "url": "https://www.pinecone.io/blog/full-text-search-architecture/"
      },
      {
        "label": "pinecone.io — pricing",
        "url": "https://www.pinecone.io/pricing/"
      }
    ],
    "relatedPaths": [
      "/blog/pinecone-full-text-search-tutorial",
      "/blog/pinecone-full-text-search-pricing"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Pinecone Full-Text Search",
    "targetSearchIntent": "Implement Pinecone Full-Text Search for exact keyword retrieval and combine lexical constraints with semantic/vector ranking in RAG and agent workflows",
    "targetQuery": "Pinecone full-text search tutorial",
    "parentSlug": "pinecone-full-text-search",
    "slug": "pinecone-full-text-search-tutorial",
    "title": "Pinecone Full-Text Search Tutorial: BM25, Text Filters & Hybrid RAG",
    "metaTitle": "Pinecone Full-Text Search Tutorial: BM25 + Hybrid RAG",
    "metaDescription": "Learn how Pinecone Full-Text Search fits BM25, Lucene queries and text-match filters into RAG and agent retrieval alongside semantic vector search.",
    "h1": "How to Use Pinecone Full-Text Search for BM25 and Hybrid RAG",
    "excerpt": "Pinecone Full-Text Search is useful when a RAG system or agent needs to retrieve literal strings such as SKUs, order IDs, error codes, legal clauses or quoted phrases instead of merely retrieving something semantically similar. Since the September 2026 GA release, Pinecone can…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Use Pinecone Full-Text Search for BM25 and Hybrid RAG — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone Full-Text Search is useful when a RAG system or agent needs to retrieve literal strings such as SKUs, order IDs, error codes, legal clauses or quoted phrases instead of merely retrieving something semantically similar. Since the September 2026 GA release, Pinecone can keep full-text fields, dense vectors, sparse vectors and metadata in one document schema and expose them through the Documents API."
          },
          {
            "type": "paragraph",
            "html": "This guide focuses on the retrieval design rather than copying preview-era SDK code that may change. Before implementing, check Pinecone's current GA documentation for the exact SDK/API surface."
          }
        ]
      },
      {
        "id": "1-decide-which-fields-are-lexical-and-which-are-semantic",
        "title": "1. Decide which fields are lexical and which are semantic",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start by separating the kinds of information your application needs to search. Product names, identifiers, ticket IDs, error strings and exact clauses are good candidates for full-text fields. Descriptions, summaries and long passages are often better suited to dense-vector retrieval. Structured attributes such as category, account or date remain metadata/filter fields."
          },
          {
            "type": "paragraph",
            "html": "The point of the GA architecture is that these do not have to live in separate databases. Pinecone says one index can hold text fields, dense vectors, sparse vectors and metadata under one document schema."
          }
        ]
      },
      {
        "id": "2-use-bm25-when-literal-terms-should-drive-ranking",
        "title": "2. Use BM25 when literal terms should drive ranking",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For a query such as PROD-001, semantic similarity can return neighboring IDs that look almost identical. BM25 instead scores the literal terms present in the indexed text. This makes it appropriate for exact identifiers, quoted text and terminology-heavy searches."
          },
          {
            "type": "paragraph",
            "html": "Pinecone's GA announcement says full-text queries support Lucene syntax, including boolean operators and phrase queries. It also supports fuzzy matching with the ~ operator for typo tolerance. Tokenization and stemming are available for 18 languages, with language-agnostic n-gram tokenization for substring and prefix matching."
          }
        ]
      },
      {
        "id": "3-use-text-match-filters-when-a-lexical-condition-must-be-true",
        "title": "3. Use text-match filters when a lexical condition must be true",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A second pattern is to treat the exact text as a hard constraint rather than the final ranking signal. Pinecone documents text-match filters that restrict the candidate set before another search mode ranks the results."
          },
          {
            "type": "paragraph",
            "html": "Example use case: a customer asks for accessories compatible with PROD-001. The lexical filter can require records associated with that identifier; a dense-vector query can then rank the remaining candidates by meaning or relevance. This prevents semantic similarity from overriding a literal condition the user explicitly supplied."
          },
          {
            "type": "paragraph",
            "html": "During public preview, Pinecone showed operators such as phrase matching in document filters. Because preview examples may use older namespaces or API versions, verify the exact GA operator names and SDK syntax before shipping copied code."
          }
        ]
      },
      {
        "id": "4-route-different-query-types-instead-of-forcing-one-retrieval-method",
        "title": "4. Route different query types instead of forcing one retrieval method",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A practical production RAG system can classify queries into three broad patterns."
          },
          {
            "type": "paragraph",
            "html": "Exact/literal: IDs, names, error strings, citations and quoted phrases. Prefer full-text/BM25 or text-match filtering."
          },
          {
            "type": "paragraph",
            "html": "Conceptual: questions where the wording may differ substantially from the source. Prefer dense semantic retrieval."
          },
          {
            "type": "paragraph",
            "html": "Mixed: a hard literal constraint plus a conceptual request. Apply the text constraint first, then rank within the allowed set semantically."
          },
          {
            "type": "paragraph",
            "html": "This routing approach is often safer than treating BM25 and vectors as rivals. They solve different retrieval jobs."
          }
        ]
      },
      {
        "id": "5-design-for-failure-not-only-successful-matches",
        "title": "5. Design for failure, not only successful matches",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One reason exact lookup matters for agents is failure behavior. A vector index will normally return nearest neighbors even when none is literally correct. For an identifier lookup, that can turn a miss into a plausible but wrong record."
          },
          {
            "type": "paragraph",
            "html": "With a lexical constraint, a missing ID can return no valid match. Your application can then handle the miss explicitly instead of passing a lookalike record into an LLM or downstream tool."
          },
          {
            "type": "paragraph",
            "html": "Test this deliberately. Build cases where the corpus contains PROD-001, PROD-002 and PROD-003, then query for both real and nonexistent IDs. Also test misspellings separately so fuzzy matching does not accidentally become a substitute for strict identifier lookup."
          }
        ]
      },
      {
        "id": "6-evaluate-retrieval-before-evaluating-generation",
        "title": "6. Evaluate retrieval before evaluating generation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For RAG, measure whether the correct document enters the context window before judging the model's prose. A useful test set should contain exact-ID queries, paraphrased conceptual questions, mixed queries, misspellings and queries with no valid result."
          },
          {
            "type": "paragraph",
            "html": "Record retrieval precision and the reason each query used lexical, semantic or mixed retrieval. Pinecone's announcement describes the product capabilities, but it does not establish a universal independent benchmark showing that one mode is always best."
          }
        ]
      },
      {
        "id": "7-watch-usage-and-cost-as-the-workload-grows",
        "title": "7. Watch usage and cost as the workload grows",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Full-text indexes use Pinecone's existing usage-based database model. On-Demand usage is metered through storage, read units and write units; Dedicated Read Nodes are available for more predictable high-throughput workloads. If your RAG pipeline also uses Pinecone-hosted embedding or reranking models, those inference charges are separate from database usage."
          },
          {
            "type": "paragraph",
            "html": "This matters when testing hybrid architectures: two separate retrieval calls and client-side merging can cost differently from a single filtered search. Measure the actual production query pattern rather than assuming a fixed cost per BM25 query."
          }
        ]
      },
      {
        "id": "a-practical-retrieval-checklist",
        "title": "A practical retrieval checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before deploying, confirm that exact identifiers cannot silently resolve to lookalikes; phrase/boolean behavior matches your corpus; fuzzy matching is only enabled where typo tolerance is desirable; semantic queries still retrieve paraphrases well; hard constraints are applied before dense ranking where required; no-match behavior is handled explicitly; and the current GA SDK/docs match the code you are using."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest use of Pinecone Full-Text Search is not replacing vector search. It is giving RAG and agents a lexical path for the queries where meaning is not enough. Keep literal constraints literal, keep conceptual retrieval semantic, and combine the two when a user needs both."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "pinecone.io — full text search generally available",
        "url": "https://www.pinecone.io/blog/full-text-search-generally-available/"
      },
      {
        "label": "pinecone.io — full text search",
        "url": "https://www.pinecone.io/blog/full-text-search/"
      },
      {
        "label": "pinecone.io — full text search architecture",
        "url": "https://www.pinecone.io/blog/full-text-search-architecture/"
      },
      {
        "label": "pinecone.io — pricing",
        "url": "https://www.pinecone.io/pricing/"
      }
    ],
    "relatedPaths": [
      "/blog/pinecone-full-text-search"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Pinecone Full-Text Search",
    "targetSearchIntent": "Evaluate Pinecone Full-Text Search plan availability, current pricing model, included usage, read/write units and deployment options before adopting it",
    "targetQuery": "Pinecone full-text search pricing",
    "parentSlug": "pinecone-full-text-search",
    "slug": "pinecone-full-text-search-pricing",
    "title": "Pinecone Full-Text Search Pricing & Limits: Plans, Read Units and GA Details",
    "metaTitle": "Pinecone Full-Text Search Pricing & Limits (2026)",
    "metaDescription": "Pinecone Full-Text Search pricing explained: Starter, Builder, Standard and Enterprise plans, read/write units, DRNs and important cost caveats.",
    "h1": "Pinecone Full-Text Search Pricing, Plans & Limits",
    "excerpt": "Pinecone Full-Text Search is generally available and is included as an index type across Pinecone's current product plans. The important pricing detail is that Pinecone does not publish one universal fee called a 'full-text search query price.' Full-text indexes use the same d…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Pinecone Full-Text Search Pricing, Plans & Limits — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone Full-Text Search is generally available and is included as an index type across Pinecone's current product plans. The important pricing detail is that Pinecone does not publish one universal fee called a 'full-text search query price.' Full-text indexes use the same database capacity model as vector indexes, so cost depends on storage, reads, writes, cloud/region and the deployment model you choose."
          },
          {
            "type": "paragraph",
            "html": "The figures below are current public list pricing as of September 12, 2026 and should be rechecked before purchase because Pinecone can change allowances and regional rates."
          }
        ]
      },
      {
        "id": "current-pinecone-plans",
        "title": "Current Pinecone plans",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Starter — Free. Pinecone lists Dense, Sparse and Full-Text indexes on the Starter plan. The current pricing page shows up to 2 GB of database storage, up to 2 million write units per month and up to 1 million read units per month, plus other product-specific allowances. Starter is intended for evaluation and small applications."
          },
          {
            "type": "paragraph",
            "html": "Builder — $20/month flat. Builder adds higher limits, cloud/region choice, multiple projects/users and monitoring options on top of Starter capabilities."
          },
          {
            "type": "paragraph",
            "html": "Standard — $50/month minimum usage. The monthly minimum is applied to usage. Pinecone currently advertises pay-as-you-go Database On-Demand, Inference and Assistant usage, plus Dedicated Read Nodes, import, backup/restore and enterprise-oriented controls such as RBAC/SSO options."
          },
          {
            "type": "paragraph",
            "html": "Enterprise — $500/month minimum usage. Enterprise adds features such as a 99.95% uptime SLA, BYOC, private endpoints, customer-managed encryption keys, audit logs, service accounts and other controls. The minimum is applied to usage; actual spend can exceed it."
          }
        ]
      },
      {
        "id": "how-full-text-database-usage-is-metered",
        "title": "How full-text database usage is metered",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone's GA announcement says Full-Text Search uses the same capacity model as vector indexes. For On-Demand deployments, database usage is driven by storage, read units and write units. Pinecone's pricing page currently lists paid write-unit rates that vary by cloud and region rather than a single global number."
          },
          {
            "type": "paragraph",
            "html": "A read unit is a metering abstraction for database reads, not a promise that every query costs exactly one RU. Query shape, result size and workload characteristics affect usage. That is why a fixed 'cost per BM25 query' would be misleading without a specific workload and region."
          }
        ]
      },
      {
        "id": "dedicated-read-nodes",
        "title": "Dedicated Read Nodes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For sustained production traffic, Pinecone offers Dedicated Read Nodes (DRNs), which use provisioned read capacity instead of purely request-based On-Demand reads. Pinecone markets DRNs for predictable throughput and potentially lower cost at sustained query volume. Any cost-reduction percentages published in Pinecone case studies are workload-specific vendor results, not a guarantee for a new deployment."
          }
        ]
      },
      {
        "id": "full-text-search-does-not-include-every-ai-cost",
        "title": "Full-text search does not include every AI cost",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Database usage is only one part of a RAG stack. If you generate dense embeddings, sparse embeddings or rerank results using Pinecone Inference or another provider, those inference costs are separate. LLM generation is also separate unless it is part of another billed Pinecone product."
          },
          {
            "type": "paragraph",
            "html": "A hybrid retrieval workflow can therefore include database reads plus embedding/reranking plus model-generation charges. Budget the complete request path rather than comparing only index storage."
          }
        ]
      },
      {
        "id": "what-limits-matter-on-starter",
        "title": "What limits matter on Starter",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The current Starter plan publishes database allowances including up to 2 GB storage, 2 million write units per month and 1 million read units per month. Pinecone also gives illustrative workload examples on its pricing page, but explicitly says those examples are illustrative rather than binding quotes."
          },
          {
            "type": "paragraph",
            "html": "Because Full-Text Search is a relatively new GA feature, do not extrapolate those semantic-search examples into guaranteed BM25 throughput. Measure your own document sizes, query patterns and result sizes."
          }
        ]
      },
      {
        "id": "how-to-estimate-your-actual-bill",
        "title": "How to estimate your actual bill",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start with four inputs: corpus size, monthly writes/updates, monthly searches and expected query pattern. Then decide whether On-Demand or sustained provisioned reads fit the workload. Add any inference costs for embeddings/reranking and model-provider costs for generation."
          },
          {
            "type": "paragraph",
            "html": "Pinecone provides a pricing calculator for workload estimates. Use it with the actual cloud/region and deployment choice because regional rates can differ."
          }
        ]
      },
      {
        "id": "is-pinecone-full-text-search-free",
        "title": "Is Pinecone Full-Text Search free?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "It can be used within the free Starter plan's included allowances. That does not mean unlimited Full-Text Search is free. Once a workload requires paid-plan capabilities or exceeds relevant allowances, the applicable plan and usage model determine cost."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Pinecone Full-Text Search does not introduce a simple standalone BM25 fee. It inherits Pinecone's database economics: free limited usage for Starter, a $20 Builder tier, usage-based Standard with a $50 monthly minimum, and Enterprise beginning with a $500 monthly minimum. For production RAG and agent systems, estimate the complete retrieval and inference path rather than asking for one universal full-text query price."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "pinecone.io — full text search generally available",
        "url": "https://www.pinecone.io/blog/full-text-search-generally-available/"
      },
      {
        "label": "pinecone.io — full text search",
        "url": "https://www.pinecone.io/blog/full-text-search/"
      },
      {
        "label": "pinecone.io — full text search architecture",
        "url": "https://www.pinecone.io/blog/full-text-search-architecture/"
      },
      {
        "label": "pinecone.io — pricing",
        "url": "https://www.pinecone.io/pricing/"
      }
    ],
    "relatedPaths": [
      "/blog/pinecone-full-text-search"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Canva AI 2.0",
    "targetSearchIntent": "Understand what Canva AI 2.0 is, what changed, which new AI and automation features are included, current preview availability, and what is not yet confirmed",
    "targetQuery": "Canva AI 2.0",
    "slug": "canva-ai-2-0",
    "title": "Canva AI 2.0: Features, Availability, Connectors & Canva Code 2.0",
    "metaTitle": "Canva AI 2.0: Features, Availability & Canva Code 2.0",
    "metaDescription": "Canva AI 2.0 adds agentic design, editable layered output, memory, connectors, scheduling, web research, Sheets AI and Canva Code 2.0. Here’s what is confirmed.",
    "h1": "Canva AI 2.0: Agentic Design, Automation & What’s New",
    "excerpt": "Canva AI 2.0 is Canva’s new conversational and agentic creative layer, introduced as a research preview at Canva Create 2026. Instead of treating AI as a collection of one-off generators, Canva is positioning AI 2.0 as a persistent creative partner that can understand a goal,…",
    "category": "Creator Tools",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Canva AI 2.0: Agentic Design, Automation & What’s New — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva AI 2.0 is Canva’s new conversational and agentic creative layer, introduced as a research preview at Canva Create 2026. Instead of treating AI as a collection of one-off generators, Canva is positioning AI 2.0 as a persistent creative partner that can understand a goal, assemble editable designs, make targeted changes, pull context from connected apps, run scheduled tasks, research the web and produce interactive experiences."
          }
        ]
      },
      {
        "id": "what-is-canva-ai-2-0",
        "title": "What is Canva AI 2.0?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva describes AI 2.0 as its biggest product evolution since launching in 2013. The core idea is that creation starts with an intent rather than a template. A user can describe a campaign, presentation, social series, document or interactive experience, and Canva AI can coordinate the relevant design capabilities to build the result."
          },
          {
            "type": "paragraph",
            "html": "The important distinction is editability. Canva says AI-generated designs are assembled from individual objects with layout, hierarchy and brand information preserved. That means the output is intended to remain layered and editable rather than becoming a single flattened image. Users can ask for a headline change, image swap or font adjustment without regenerating the entire design."
          }
        ]
      },
      {
        "id": "the-four-core-capabilities",
        "title": "The four core capabilities",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva highlights four architectural ideas. Conversational design keeps the AI in the editing flow so users can create and refine by dialogue. Agentic orchestration allows Canva AI to call different parts of Canva’s design engine depending on the task. Layered object intelligence keeps generated elements individually editable. Memory Library gives the system persistent context about how a person or team works, with the goal of making future suggestions more consistent with prior projects and brand style."
          },
          {
            "type": "paragraph",
            "html": "These are vendor-described capabilities. The public launch material does not provide an independent benchmark for design quality, agent reliability or memory accuracy."
          }
        ]
      },
      {
        "id": "connectors-bring-workplace-context-into-canva",
        "title": "Connectors bring workplace context into Canva",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva AI 2.0 introduces connectors for services including Slack, Gmail, Google Drive, Google Calendar, Notion, Zoom and HubSpot. Canva’s examples include generating meeting summaries from Zoom transcripts, turning customer emails into personalized sales material and creating a company newsletter from Slack activity."
          },
          {
            "type": "paragraph",
            "html": "This moves Canva closer to a workflow layer rather than a standalone design editor. For marketers and small teams, the useful question is no longer only “can Canva generate a design?” but “can Canva generate the right design using context already stored in the tools the team works in?”"
          },
          {
            "type": "paragraph",
            "html": "The launch announcement does not provide a complete connector-by-connector permission matrix, plan requirement or rollout schedule, so those details should be checked in the live product before relying on them in a production workflow."
          }
        ]
      },
      {
        "id": "scheduling-and-background-work",
        "title": "Scheduling and background work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Scheduling allows users to define recurring tasks that Canva AI can execute in the background. Canva gives examples such as generating a batch of social content every Friday or scanning emails each morning to prepare briefing documents for upcoming meetings."
          },
          {
            "type": "paragraph",
            "html": "This is one of the strongest changes for creator and marketing workflows because it changes Canva from a tool that waits for a prompt into a system that can perform recurring creative work. The launch material says scheduled tasks can run while the user is offline, but it does not publish hard execution quotas, reliability guarantees or detailed pricing for this capability."
          }
        ]
      },
      {
        "id": "web-research-inside-the-creative-workflow",
        "title": "Web research inside the creative workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva AI 2.0 can also research the public web on demand or as part of a scheduled task, then structure the findings into editable Canva output. Canva positions this for work such as business proposals and market research."
          },
          {
            "type": "paragraph",
            "html": "That potentially reduces the handoff between research, writing and design. A marketer could research a category, structure findings and turn them into a deck or campaign asset without manually copying information across tools. Source transparency, citation behavior and research quality should still be evaluated for each use case rather than assumed from the launch description."
          }
        ]
      },
      {
        "id": "brand-intelligence-and-memory-library",
        "title": "Brand Intelligence and Memory Library",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Brand Intelligence applies connected brand information to new and existing work. Canva says users can connect a brand template or describe their requirements, then have AI apply fonts, colors and style from the first output. It can also update existing work when the brand changes."
          },
          {
            "type": "paragraph",
            "html": "Memory Library is broader. Canva says persistent memory helps AI learn how the user works and apply that context across projects. This could be useful for recurring social content, sales decks and campaign systems where consistency matters, but teams should review what is stored, who can access it and what controls are available before treating memory as an automatic source of truth."
          }
        ]
      },
      {
        "id": "canva-code-2-0",
        "title": "Canva Code 2.0",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva Code 2.0 expands Canva’s interactive creation tools. Canva says users can describe an experience conversationally and generate a responsive interactive result. New capabilities include importing HTML into Canva, adding forms whose responses can flow into Canva Sheets, embedding interactive elements inside presentations, and publishing to a custom domain with SSO protection."
          },
          {
            "type": "paragraph",
            "html": "This deserves separate treatment because the search intent is closer to no-code/AI website and interactive-experience building than general Canva AI design. A dedicated supporting guide is justified for users specifically searching for Canva Code 2.0, HTML import and interactive publishing."
          }
        ]
      },
      {
        "id": "sheets-ai",
        "title": "Sheets AI",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sheets AI can generate a structured spreadsheet from a natural-language request. Canva’s examples include budget trackers, timelines and content calendars. The launch announcement says generated sheets can be populated with real data, but it does not define every data source, refresh behavior or automation boundary. Treat those as implementation details to verify in the live product."
          }
        ]
      },
      {
        "id": "availability",
        "title": "Availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva says AI 2.0 is available as a research preview and that general availability will roll out over the coming weeks. The public Canva AI page also indicates that 2.0 updates are coming soon, suggesting access may not be uniform for every account or region at the same time."
          },
          {
            "type": "paragraph",
            "html": "The launch material does not provide a single global GA date, universal entitlement list or dedicated AI 2.0 price. Do not assume every Canva Free, Pro, Business or Enterprise user has identical access. Check the live Canva account and plan documentation before making a purchasing decision."
          }
        ]
      },
      {
        "id": "what-canva-has-not-confirmed-publicly",
        "title": "What Canva has not confirmed publicly",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No dedicated Canva AI 2.0 pricing table, fixed usage quota, universal connector availability list, exact GA date or independent quality benchmark was verified in the primary sources used here. Those gaps matter because research-preview features can change quickly."
          }
        ]
      },
      {
        "id": "why-this-matters-for-creators-and-marketers",
        "title": "Why this matters for creators and marketers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The launch combines three previously separate categories: creative generation, business-context retrieval and workflow automation. If Canva can execute that combination reliably, a social or marketing team could move from brief to research to branded output to scheduled recurring production without leaving the platform."
          },
          {
            "type": "paragraph",
            "html": "That does not eliminate the need for human review. Research can be wrong, brand memory can be incomplete, generated creative can miss strategic context and automated publishing workflows can amplify mistakes. The strongest use is likely human-supervised production where Canva AI handles assembly and repetition while a person owns strategy, verification and final approval."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva AI 2.0 is not just another image-generation update. Canva is trying to turn its design suite into an agentic workspace that can remember context, connect to business tools, research, schedule recurring work and produce layered, editable output. The research preview is already significant enough to watch closely, but pricing, quotas and exact rollout details should be treated as unresolved until Canva publishes more specific documentation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "canva.com — canva create 2026 ai",
        "url": "https://www.canva.com/newsroom/news/canva-create-2026-ai/"
      },
      {
        "label": "canva.com — canva ai",
        "url": "https://www.canva.com/canva-ai/"
      },
      {
        "label": "canva.com — canva claude design",
        "url": "https://www.canva.com/newsroom/news/canva-claude-design/"
      },
      {
        "label": "canva.com — canva create",
        "url": "https://www.canva.com/canva-create/"
      }
    ],
    "relatedPaths": [
      "/blog/canva-code-2-0",
      "/blog/canva-ai-2-0-connectors-scheduling"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Canva AI 2.0",
    "targetSearchIntent": "Understand what Canva Code 2.0 can build, how HTML import works, and which interactive publishing workflows Canva has publicly confirmed",
    "targetQuery": "Canva Code 2.0",
    "parentSlug": "canva-ai-2-0",
    "slug": "canva-code-2-0",
    "title": "Canva Code 2.0: HTML Import, Interactive Forms & Publishing",
    "metaTitle": "Canva Code 2.0: HTML Import, Forms & Interactive Publishing",
    "metaDescription": "Canva Code 2.0 can generate responsive interactive experiences, import HTML, collect form responses in Canva Sheets and publish with custom-domain and SSO options.",
    "h1": "Canva Code 2.0: HTML Import, Interactive Forms & Publishing Explained",
    "excerpt": "Canva Code 2.0 is the interactive-creation component of Canva AI 2.0. Canva says users can describe an interactive experience conversationally and have the system build a responsive result that works across devices.",
    "category": "Web",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Canva Code 2.0: HTML Import, Interactive Forms & Publishing Explained — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva Code 2.0 is the interactive-creation component of Canva AI 2.0. Canva says users can describe an interactive experience conversationally and have the system build a responsive result that works across devices."
          },
          {
            "type": "paragraph",
            "html": "The 2.0 update matters because it adds workflows that go beyond generating a one-off interactive element: HTML import, form collection into Canva Sheets, interactive presentation components and publishing options that can include a custom domain and SSO protection."
          }
        ]
      },
      {
        "id": "what-canva-code-2-0-can-create",
        "title": "What Canva Code 2.0 can create",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva positions Code 2.0 for responsive interactive experiences generated from a prompt. The company’s broader Canva Code examples have included calculators, quizzes, mini-games and other dynamic components. In AI 2.0, Canva describes the workflow as conversational, so users can explain what they want and iterate without rebuilding everything manually."
          },
          {
            "type": "paragraph",
            "html": "This does not mean Canva has become a full replacement for every web-development stack. The public announcement does not claim arbitrary backend support, unrestricted server-side code, database hosting or a general-purpose deployment runtime. Evaluate it as an AI-assisted interactive design and publishing environment based on the features Canva actually documents."
          }
        ]
      },
      {
        "id": "html-import",
        "title": "HTML import",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One of the clearest new capabilities is HTML import. Canva says users can bring an HTML file or an AI-generated experience into Canva and edit it rather than recreating it from scratch."
          },
          {
            "type": "paragraph",
            "html": "That potentially creates a bridge between external AI coding tools and Canva’s visual editing environment. A user could generate an HTML prototype elsewhere, import it into Canva and continue refining the experience visually. The announcement does not publish a complete compatibility specification for JavaScript frameworks, external assets, scripts or complex application state, so those details should be tested rather than assumed."
          }
        ]
      },
      {
        "id": "forms-connected-to-canva-sheets",
        "title": "Forms connected to Canva Sheets",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva says Code 2.0 can add forms that collect responses in Canva Sheets. This is useful for interactive lead forms, quizzes, internal tools, event registration and lightweight data collection where the same workspace is used to design both the experience and the resulting data view."
          },
          {
            "type": "paragraph",
            "html": "The announcement does not define every validation rule, submission limit, anti-spam control or data-retention behavior. Those operational details matter for public production forms and should be checked in current documentation before launch."
          }
        ]
      },
      {
        "id": "interactive-elements-in-presentations",
        "title": "Interactive elements in presentations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva also says Code 2.0 experiences can be placed inside presentations. That creates a different search intent from a normal website builder: presenters can embed calculators, interactive demos or other dynamic components directly inside a deck."
          },
          {
            "type": "paragraph",
            "html": "For sales, education and product demos, this could reduce the need to switch from a presentation to a separate web page. As with other preview capabilities, reliability and supported interactions should be tested on the target device and presentation environment."
          }
        ]
      },
      {
        "id": "publishing-to-a-custom-domain-and-sso",
        "title": "Publishing to a custom domain and SSO",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva’s launch page says Code 2.0 experiences can be published to a user’s own domain with SSO protection. That makes the feature relevant for internal portals, client experiences and branded tools, not just shareable Canva links."
          },
          {
            "type": "paragraph",
            "html": "The public launch material does not provide a detailed pricing table or entitlement matrix for custom-domain and SSO features. Do not assume those capabilities are included in every plan or available identically in every region."
          }
        ]
      },
      {
        "id": "how-this-differs-from-ordinary-canva-ai-design",
        "title": "How this differs from ordinary Canva AI design",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva AI 2.0 can generate and edit layered visual assets, while Canva Code 2.0 targets behavior and interactivity. A static campaign graphic belongs in the broader Canva AI workflow. A pricing calculator, quiz, interactive presentation component or HTML-based microsite experience belongs more naturally in Canva Code."
          },
          {
            "type": "paragraph",
            "html": "The two systems can still work together. Brand Intelligence and design generation can define the look, while Code 2.0 adds interaction. Connectors and scheduling may provide source context for recurring workflows, though Canva has not documented every possible automation path between those features."
          }
        ]
      },
      {
        "id": "important-limitations-to-verify",
        "title": "Important limitations to verify",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before using Canva Code 2.0 for a production website or tool, verify HTML/JavaScript compatibility, data storage, form limits, authentication behavior, accessibility, SEO output, performance, analytics support and export/portability. The launch announcement confirms the existence of the core features but does not answer every production-engineering question."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva Code 2.0 pushes Canva deeper into the AI website-builder and interactive-tool market. HTML import is especially notable because it allows existing AI-generated experiences to enter Canva’s editor instead of forcing users to rebuild them. Forms, presentations, custom-domain publishing and SSO make the feature useful beyond simple prototypes, but its exact production limits should be verified while the broader Canva AI 2.0 platform remains in research preview."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "canva.com — canva create 2026 ai",
        "url": "https://www.canva.com/newsroom/news/canva-create-2026-ai/"
      },
      {
        "label": "canva.com — canva ai",
        "url": "https://www.canva.com/canva-ai/"
      },
      {
        "label": "canva.com — canva claude design",
        "url": "https://www.canva.com/newsroom/news/canva-claude-design/"
      },
      {
        "label": "canva.com — canva create",
        "url": "https://www.canva.com/canva-create/"
      }
    ],
    "relatedPaths": [
      "/blog/canva-ai-2-0"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Canva AI 2.0",
    "targetSearchIntent": "Learn how Canva AI 2.0 connectors, scheduling and web research can be combined for recurring marketing and business workflows",
    "targetQuery": "Canva AI 2.0 connectors scheduling",
    "parentSlug": "canva-ai-2-0",
    "slug": "canva-ai-2-0-connectors-scheduling",
    "title": "Canva AI 2.0 Connectors & Scheduling: Automate Creative Workflows",
    "metaTitle": "Canva AI 2.0 Connectors & Scheduling: Automation Guide",
    "metaDescription": "Canva AI 2.0 connects to Slack, Gmail, Drive, Calendar, Notion, Zoom and HubSpot, and can run scheduled background tasks. Here’s how the workflow fits together.",
    "h1": "Canva AI 2.0 Connectors & Scheduling: How the Automation Works",
    "excerpt": "Canva AI 2.0 adds two capabilities that move Canva beyond on-demand design generation: connectors that pull context from workplace apps and scheduling that can run recurring work in the background.",
    "category": "Automation",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Canva AI 2.0 Connectors & Scheduling: How the Automation Works — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva AI 2.0 adds two capabilities that move Canva beyond on-demand design generation: connectors that pull context from workplace apps and scheduling that can run recurring work in the background."
          }
        ]
      },
      {
        "id": "what-canva-ai-2-0-connects-to",
        "title": "What Canva AI 2.0 connects to",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva’s launch announcement names Slack, Gmail, Google Drive, Google Calendar, Notion, Zoom and HubSpot among the services Canva AI can connect to. The purpose is contextual creation: instead of manually copying source material into a prompt, the AI can use information already stored in connected tools to produce a finished visual output."
          },
          {
            "type": "paragraph",
            "html": "Canva’s examples include turning Zoom transcripts into meeting summaries, customer emails into personalized sales pitches, and Slack activity into a company newsletter. These are examples from Canva, not proof that every connector exposes every object or supports every action."
          }
        ]
      },
      {
        "id": "how-scheduling-changes-the-workflow",
        "title": "How scheduling changes the workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Scheduling lets users define a task once and have Canva AI run it automatically in the background. Canva says these jobs can run while the user is offline. Example workflows include producing a batch of social content every Friday or checking email each morning to create briefing documents for upcoming meetings."
          },
          {
            "type": "paragraph",
            "html": "The practical pattern is straightforward: choose the source context, define the recurring job, specify the intended output, apply brand rules and review the result before publishing or distributing it."
          }
        ]
      },
      {
        "id": "example-recurring-social-content-production",
        "title": "Example: recurring social-content production",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A marketing team could connect a source such as Notion or Google Drive containing campaign priorities, then schedule Canva AI to generate a weekly set of social assets. Brand Intelligence can help apply the team’s visual system, while the generated output remains editable rather than locked as a single image."
          },
          {
            "type": "paragraph",
            "html": "Human review still matters. A recurring workflow can repeat stale messaging or amplify incorrect source material just as easily as it can save time. Treat scheduled generation as production assistance, not an autonomous marketing strategy."
          }
        ]
      },
      {
        "id": "example-meeting-to-deck-workflow",
        "title": "Example: meeting-to-deck workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "With a Zoom connector, Canva’s own example is to use meeting transcripts as source material. A useful workflow could summarize decisions, convert them into a client update or internal deck, then keep the result editable for a human to refine."
          },
          {
            "type": "paragraph",
            "html": "This is materially different from simply pasting a transcript into a chatbot because the output can be created directly inside Canva’s visual system. However, the launch announcement does not specify transcript retention rules, connector scopes or enterprise permission behavior, so teams handling sensitive material should verify those controls in the live product."
          }
        ]
      },
      {
        "id": "web-research-as-another-input-source",
        "title": "Web research as another input source",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva AI 2.0 also includes web research. Canva says users can run research on demand or schedule it in the background, with results structured into editable output. That creates a three-part automation pattern: gather information, transform it into a branded artifact, and repeat the process on a schedule."
          },
          {
            "type": "paragraph",
            "html": "Potential uses include competitor briefings, market scans, proposal preparation and recurring content research. The quality of the research still needs human verification. The primary launch material does not publish a detailed citation-quality benchmark or guarantee that every generated claim will include a source."
          }
        ]
      },
      {
        "id": "what-is-not-yet-clear",
        "title": "What is not yet clear",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Canva has not published, in the sources reviewed here, a stable connector-by-connector capability matrix, universal plan entitlement list, hard scheduling quota or dedicated price for these AI 2.0 workflows. Because the product is in research preview, access and behavior may change during rollout."
          },
          {
            "type": "paragraph",
            "html": "Do not assume that a connector supports write actions just because it can provide context. Do not assume every account has all connectors. Do not assume recurring tasks are unlimited."
          }
        ]
      },
      {
        "id": "best-practices-for-marketers",
        "title": "Best practices for marketers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use connectors to reduce manual context transfer, but keep source systems clean. Give scheduled tasks narrow jobs rather than broad goals. Build a human approval step before external publishing. Keep sensitive customer data out of creative workflows unless the relevant permissions and data-handling rules are understood. Recheck brand settings periodically so an automated workflow does not reproduce outdated design rules."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The combination of connectors, web research and scheduling is one of the most consequential parts of Canva AI 2.0. It turns Canva from a tool that responds to individual prompts into a system that can repeatedly gather context and prepare branded creative work. The opportunity is substantial for social, sales and marketing teams, but the research-preview status means quotas, permissions and exact connector behavior should be verified before relying on it for mission-critical automation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "canva.com — canva create 2026 ai",
        "url": "https://www.canva.com/newsroom/news/canva-create-2026-ai/"
      },
      {
        "label": "canva.com — canva ai",
        "url": "https://www.canva.com/canva-ai/"
      },
      {
        "label": "canva.com — canva claude design",
        "url": "https://www.canva.com/newsroom/news/canva-claude-design/"
      },
      {
        "label": "canva.com — canva create",
        "url": "https://www.canva.com/canva-create/"
      }
    ],
    "relatedPaths": [
      "/blog/canva-ai-2-0"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "OpenAI Data agent",
    "targetSearchIntent": "Understand what OpenAI's Data agent is, how it connects business data and semantic context, what dashboards and actions it supports, current availability, permissions and limitations",
    "targetQuery": "OpenAI Data agent",
    "slug": "openai-data-agent",
    "title": "OpenAI Data Agent: Connectors, Dashboards & How It Works",
    "metaTitle": "OpenAI Data Agent: Connectors, Dashboards & How It Works",
    "metaDescription": "OpenAI's Data agent connects ChatGPT Work and Codex to warehouses, semantic layers and BI tools to answer business questions and build dashboards.",
    "h1": "OpenAI Data Agent: How It Works, Connectors, Dashboards & Availability",
    "excerpt": "OpenAI's Data agent is a business-data agent for ChatGPT Work and Codex that can connect approved company data, investigate business questions, explain changes and turn findings into interactive reports and dashboards. OpenAI launched it on September 10, 2026 as an OpenAI-buil…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "OpenAI Data Agent: How It Works, Connectors, Dashboards & Availability — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Data agent is a business-data agent for ChatGPT Work and Codex that can connect approved company data, investigate business questions, explain changes and turn findings into interactive reports and dashboards. OpenAI launched it on September 10, 2026 as an OpenAI-built plugin rather than as a new foundation model."
          }
        ]
      },
      {
        "id": "what-is-openai-data-agent",
        "title": "What is OpenAI Data agent?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Data is designed to sit between a user's business question and the systems where the underlying evidence lives. Instead of manually exporting warehouse tables into a spreadsheet or pasting dashboard screenshots into ChatGPT, a permitted user can ask a question in natural language and let the agent work across connected data sources, business definitions and supported BI tools."
          },
          {
            "type": "paragraph",
            "html": "OpenAI's launch material positions Data for jobs such as understanding why a metric moved, investigating a funnel problem, comparing cohorts, finding patterns across structured and unstructured sources, and building a dashboard from the analysis. These are vendor-described capabilities. They should not be read as a guarantee that every query will be correct or that Data replaces a company's analytics review process."
          }
        ]
      },
      {
        "id": "where-data-works",
        "title": "Where Data works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI currently documents the Data plugin for ChatGPT Work and Codex. A workspace administrator may need to make the plugin and the required underlying source plugins available before a user can install and use it."
          },
          {
            "type": "paragraph",
            "html": "Access can therefore depend on the workspace, role, source configuration and individual permissions. OpenAI's launch pages do not provide one universal entitlement table or standalone Data-agent price, so availability should be checked in the live workspace rather than inferred from a generic ChatGPT plan name."
          }
        ]
      },
      {
        "id": "which-data-sources-can-it-connect-to",
        "title": "Which data sources can it connect to?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's current documentation lists Amazon Redshift, ClickHouse, Databricks, Google BigQuery, MongoDB and Snowflake among the supported structured data sources. Documents and files can also come from Google Drive and SharePoint when those sources are connected and permitted."
          },
          {
            "type": "paragraph",
            "html": "The important boundary is that Data does not bypass the original system's permissions. OpenAI says existing table, row and column restrictions continue to apply. If a user cannot access a source record through the connected system, the Data agent should not be treated as a way around that restriction."
          }
        ]
      },
      {
        "id": "business-context-and-semantic-layers",
        "title": "Business context and semantic layers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A warehouse contains data, but it does not automatically explain what a company's metrics mean. OpenAI therefore emphasizes business context: metric definitions, custom calculations, trusted dimensions, data relationships and semantic layers."
          },
          {
            "type": "paragraph",
            "html": "Its documentation cites sources such as Databricks Genie Ontology, dbt, GitHub, Snowflake Horizon and existing BI dashboards as possible places from which Data can obtain that context. This matters because a request like “why did conversion fall?” is only useful if the agent understands which conversion definition, time window, segment and source of truth the company actually uses."
          },
          {
            "type": "paragraph",
            "html": "Users should still verify the source, time period, filters and metric definition behind important conclusions. Natural-language access reduces friction; it does not remove the need for measurement discipline."
          }
        ]
      },
      {
        "id": "how-the-analysis-workflow-works",
        "title": "How the analysis workflow works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A typical Data-agent workflow has four parts. First, the user asks a business question. Second, Data determines which approved source or sources are relevant and investigates the evidence. Third, it explains the result and can iterate when the user asks follow-up questions. Fourth, the findings can be turned into an interactive report or dashboard when that format is useful."
          },
          {
            "type": "paragraph",
            "html": "For a marketing team, that could mean investigating an acquisition drop by channel, comparing landing-page cohorts, examining customer-retention patterns or reconciling campaign data with a business-defined metric. For sales or operations, the same pattern could apply to pipeline movement, account health or recurring operational metrics."
          }
        ]
      },
      {
        "id": "interactive-dashboards-and-bi-tools",
        "title": "Interactive dashboards and BI tools",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says Data can create and interact with dashboards and can work with existing BI systems. Its current documentation names tools including Omni, Oracle BI, Microsoft Power BI, Sigma, Tableau and ThoughtSpot."
          },
          {
            "type": "paragraph",
            "html": "This makes Data different from a one-off chat with a CSV. The intended workflow can continue into a reusable reporting surface: build a dashboard, refine it conversationally, share it through supported tools and return to it as the underlying question evolves."
          },
          {
            "type": "paragraph",
            "html": "The exact actions available depend on the connected BI product, workspace configuration and user permissions. A supported integration name should not be interpreted as universal permission to create, publish or modify every artifact in that product."
          }
        ]
      },
      {
        "id": "publishing-and-keeping-dashboards-updated",
        "title": "Publishing and keeping dashboards updated",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Help Center says Data can work with OpenAI Sites when that plugin is installed. A dashboard can be published and shared there, and cloud automation can be used to keep a dashboard up to date."
          },
          {
            "type": "paragraph",
            "html": "There is an important data-governance implication: OpenAI warns that data used in an analysis is copied into a published Site. Teams should therefore review the audience, source permissions and sensitivity of the included data before publishing an internal dashboard more broadly."
          }
        ]
      },
      {
        "id": "can-data-take-actions",
        "title": "Can Data take actions?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Data can be part of workflows that lead to actions through connected tools. OpenAI gives examples involving communication and business systems, but action capability depends on the specific tool, permissions and any approval requirements. A report that recommends contacting an account is not the same as an agent having unrestricted authority to message that account."
          },
          {
            "type": "paragraph",
            "html": "For production business workflows, the safer design is to separate analysis from consequential action unless the downstream tool provides appropriate permissions and review controls."
          }
        ]
      },
      {
        "id": "permissions-and-security-boundaries",
        "title": "Permissions and security boundaries",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's documentation says Data respects existing source permissions, including table-, row- and column-level restrictions. Workspace administrators control plugin availability and users connect sources through the approved integration flow."
          },
          {
            "type": "paragraph",
            "html": "That does not eliminate governance work. Teams should still define which systems may be connected, which semantic definitions are authoritative, what kinds of reports may be shared and which actions require human approval. Published Sites deserve particular review because source data used in the analysis may become part of the published artifact."
          }
        ]
      },
      {
        "id": "pricing-and-availability",
        "title": "Pricing and availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No standalone Data-agent price was verified in the primary sources reviewed for this article, and OpenAI does not present one universal access matrix for every workspace and source combination. Do not treat the feature as universally included or free."
          },
          {
            "type": "paragraph",
            "html": "Before adopting it, verify three things in the live product: whether the Data plugin is available to the workspace, whether the required source plugins are available and permitted, and whether the connected systems introduce their own licensing or usage costs."
          }
        ]
      },
      {
        "id": "what-data-does-not-prove-on-its-own",
        "title": "What Data does not prove on its own",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's launch includes customer examples and descriptions of faster analysis workflows, but those examples are not independent performance benchmarks. The presence of an AI agent also does not make an ambiguous metric definition correct, fix poor warehouse modeling or guarantee causal explanations for a change in a business metric."
          },
          {
            "type": "paragraph",
            "html": "A useful operating rule is to use Data to accelerate investigation and synthesis while keeping the underlying data model, metric definitions and high-impact conclusions reviewable by people who own the business context."
          }
        ]
      },
      {
        "id": "who-is-it-most-useful-for",
        "title": "Who is it most useful for?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Data is most relevant to teams that already have meaningful business data but lose time moving between a warehouse, documents, BI dashboards and manual analysis. Marketing, growth, finance, product and operations teams are obvious fits because their questions often require evidence from several systems and business-specific definitions."
          },
          {
            "type": "paragraph",
            "html": "Smaller businesses without a warehouse or structured analytics setup may get less value from the full workflow. The agent can reduce the interface cost of analytics, but it cannot create high-quality underlying data that does not exist."
          }
        ]
      },
      {
        "id": "frequently-asked-questions",
        "title": "Frequently asked questions",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is OpenAI Data agent the same as uploading a spreadsheet to ChatGPT?"
          },
          {
            "type": "paragraph",
            "html": "No. File analysis can answer questions about uploaded data, while Data is designed to work across approved company sources, semantic context and supported business tools as a reusable workflow."
          },
          {
            "type": "subheading",
            "text": "Does it work with Snowflake and BigQuery?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI currently lists Snowflake and Google BigQuery among supported data sources, alongside Databricks, Redshift, ClickHouse and MongoDB."
          },
          {
            "type": "subheading",
            "text": "Can it build Power BI or Tableau dashboards?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI documents interoperability with Power BI, Tableau and several other BI tools. The exact create, edit, publish and sharing actions depend on each integration and the user's permissions."
          },
          {
            "type": "subheading",
            "text": "Does it ignore row-level permissions?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI says existing source permissions, including row- and column-level controls, continue to apply."
          },
          {
            "type": "subheading",
            "text": "Is there a separate price for Data?"
          },
          {
            "type": "paragraph",
            "html": "No standalone Data-agent price was verified in the primary launch documentation used here. Workspace access and connected-tool costs should be checked directly before purchasing or deploying."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI Data agent is an attempt to turn business analytics from a sequence of tool handoffs into an agentic workflow: ask a question, retrieve approved evidence, apply company-specific metric context, investigate the result and turn it into a reusable dashboard or action-ready report. The strongest opportunity is not that it makes analytics automatic, but that it can reduce the distance between a business question and the systems needed to answer it while preserving source permissions and human review."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — put data to work",
        "url": "https://openai.com/index/put-data-to-work/"
      },
      {
        "label": "help.openai.com — 20001518",
        "url": "https://help.openai.com/en/articles/20001518"
      },
      {
        "label": "openai.com — data",
        "url": "https://openai.com/business/solutions/data/"
      },
      {
        "label": "help.openai.com — 6825453 chatgpt release notes",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "relatedPaths": [
      "/blog/chatgpt-data-agent-dashboards",
      "/blog/chatgpt-data-agent-setup"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenAI Data agent",
    "targetSearchIntent": "Build, refine, publish, share and refresh interactive dashboards from Data-agent analyses using supported BI tools, OpenAI Sites and cloud automation",
    "targetQuery": "ChatGPT Data agent dashboard",
    "parentSlug": "openai-data-agent",
    "slug": "chatgpt-data-agent-dashboards",
    "title": "ChatGPT Data Agent Dashboards: Publish, Share & Keep Them Updated",
    "metaTitle": "ChatGPT Data Agent Dashboards: Publish & Automate",
    "metaDescription": "Learn how OpenAI's Data agent can turn analyses into interactive dashboards, work with BI tools, publish through Sites and keep reports updated safely.",
    "h1": "ChatGPT Data Agent Dashboards: Publish, Share & Keep Them Updated",
    "excerpt": "OpenAI's Data agent can go beyond answering a one-time analytics question. Its current documentation describes workflows for creating interactive dashboards, working with existing BI tools, publishing through OpenAI Sites and using cloud automation to keep reporting updated.",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "ChatGPT Data Agent Dashboards: Publish, Share & Keep Them Updated — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Data agent can go beyond answering a one-time analytics question. Its current documentation describes workflows for creating interactive dashboards, working with existing BI tools, publishing through OpenAI Sites and using cloud automation to keep reporting updated."
          },
          {
            "type": "paragraph",
            "html": "This guide focuses specifically on that dashboard job rather than the broader Data-agent overview or initial connector setup."
          }
        ]
      },
      {
        "id": "start-with-a-verified-analysis",
        "title": "Start with a verified analysis",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A dashboard should be the output of a stable question, not the first step. Before turning an analysis into a reusable report, confirm the source, metric definition, time range, filters and important assumptions."
          },
          {
            "type": "paragraph",
            "html": "This matters because a dashboard gives recurring visibility to whatever logic it contains. If the original conversion definition or cohort filter is wrong, automation will repeat the error more efficiently."
          }
        ]
      },
      {
        "id": "ask-data-to-structure-the-report-around-decisions",
        "title": "Ask Data to structure the report around decisions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Good dashboards are easier to use when each section answers a concrete question. For a growth team, a useful structure might be:"
          },
          {
            "type": "list",
            "items": [
              "What changed?",
              "Where did the change happen?",
              "Which segment or campaign contributed most?",
              "Is the movement outside the normal range?",
              "What evidence should the team inspect next?"
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Ask Data to keep the underlying metric definition and comparison period explicit. Avoid filling the page with every available chart merely because the agent can generate them."
          }
        ]
      },
      {
        "id": "interactive-dashboards-inside-the-data-workflow",
        "title": "Interactive dashboards inside the Data workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says the Data plugin can create interactive dashboards and reports that can be refined conversationally. That means a user can investigate a business question, ask for a different breakdown or visualization and continue working from the same analytical context."
          },
          {
            "type": "paragraph",
            "html": "The exact dashboard controls and editing experience can evolve as the product changes, so rely on the live interface for current UI details rather than treating launch screenshots as permanent documentation."
          }
        ]
      },
      {
        "id": "working-with-existing-bi-tools",
        "title": "Working with existing BI tools",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI currently documents interoperability with BI products including Omni, Oracle BI, Microsoft Power BI, Sigma, Tableau and ThoughtSpot."
          },
          {
            "type": "paragraph",
            "html": "This is useful for teams that do not want a new AI-generated report to become a disconnected analytics island. Depending on the integration and permissions, Data can work with the reporting systems the company already uses."
          },
          {
            "type": "paragraph",
            "html": "Do not assume every named integration exposes identical create, edit, publish or refresh capabilities. Those actions depend on the individual connector, the underlying account and workspace policy."
          }
        ]
      },
      {
        "id": "publishing-with-openai-sites",
        "title": "Publishing with OpenAI Sites",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Help Center says that when the Sites plugin is available, Data can publish and share dashboards through OpenAI Sites."
          },
          {
            "type": "paragraph",
            "html": "There is a critical governance note: OpenAI says data used in the analysis is copied into the published Site. Before publishing, review who will be able to access the Site and whether the underlying data is appropriate for that audience."
          },
          {
            "type": "paragraph",
            "html": "A dashboard that was safe inside a restricted warehouse conversation may become inappropriate if its results are copied into a more broadly shared artifact."
          }
        ]
      },
      {
        "id": "sharing-safely",
        "title": "Sharing safely",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before sharing a dashboard, verify:"
          },
          {
            "type": "list",
            "items": [
              "The audience is correct.",
              "The dashboard contains no sensitive dimensions the audience should not see.",
              "The metric definitions and date range are visible or documented.",
              "The source analysis has been checked against a trusted report where practical.",
              "The publication method does not unintentionally widen access beyond the original data permissions."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "This last point deserves special attention with published Sites because publication creates a new artifact containing analysis data."
          }
        ]
      },
      {
        "id": "keeping-a-dashboard-updated-with-cloud-automation",
        "title": "Keeping a dashboard updated with cloud automation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI documents cloud automation as a way to keep a Data-created dashboard up to date. That creates a useful recurring-reporting pattern: connect approved sources, define a stable analysis, publish a dashboard and refresh it on a schedule or supported workflow."
          },
          {
            "type": "paragraph",
            "html": "Examples could include weekly acquisition performance, daily sales-pipeline summaries or recurring product-health reporting. The value comes from removing repetitive assembly work, not from eliminating review of exceptional or high-stakes changes."
          },
          {
            "type": "paragraph",
            "html": "OpenAI's launch material does not publish a universal refresh quota, service-level guarantee or standalone price for Data automation. Treat execution limits and entitlements as product details to verify in the live workspace."
          }
        ]
      },
      {
        "id": "add-actions-carefully",
        "title": "Add actions carefully",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Data can participate in workflows that connect analysis with downstream tools. OpenAI notes that sharing or actions through services such as communication tools depend on the capabilities, permissions and approval model of the connected tool."
          },
          {
            "type": "paragraph",
            "html": "A practical approach is to automate low-risk reporting first. For actions that message customers, modify records or trigger spend, require the downstream tool's normal safeguards and human approval where appropriate."
          }
        ]
      },
      {
        "id": "dashboard-use-cases-for-marketers-and-growth-teams",
        "title": "Dashboard use cases for marketers and growth teams",
        "blocks": [
          {
            "type": "subheading",
            "text": "Acquisition monitoring"
          },
          {
            "type": "paragraph",
            "html": "Track channel and campaign movement against a consistent company definition, then investigate unusual changes without manually rebuilding the report each time."
          },
          {
            "type": "subheading",
            "text": "Funnel analysis"
          },
          {
            "type": "paragraph",
            "html": "Keep a reusable view of conversion across important stages and ask follow-up questions when one step changes unexpectedly."
          },
          {
            "type": "subheading",
            "text": "Retention and cohort reporting"
          },
          {
            "type": "paragraph",
            "html": "Compare cohorts using a defined retention metric and create a recurring dashboard for changes that deserve investigation."
          },
          {
            "type": "subheading",
            "text": "Sales and marketing alignment"
          },
          {
            "type": "paragraph",
            "html": "Combine approved business definitions with pipeline or campaign evidence to reduce arguments caused by two teams using different versions of the same metric."
          }
        ]
      },
      {
        "id": "what-a-dashboard-does-not-solve",
        "title": "What a dashboard does not solve",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A generated dashboard does not fix missing data, inconsistent event tracking, ambiguous definitions or causal inference. If a campaign and conversion both move at the same time, that correlation alone does not prove the campaign caused the change."
          },
          {
            "type": "paragraph",
            "html": "Use Data to accelerate retrieval, calculation, synthesis and presentation. Keep experimental design, measurement assumptions and consequential business conclusions subject to appropriate review."
          }
        ]
      },
      {
        "id": "common-dashboard-problems",
        "title": "Common dashboard problems",
        "blocks": [
          {
            "type": "subheading",
            "text": "Numbers changed after refresh"
          },
          {
            "type": "paragraph",
            "html": "Check whether source data was backfilled, the date window moved, the metric definition changed or a connector returned different data. Do not assume the refresh itself is the cause."
          },
          {
            "type": "subheading",
            "text": "A viewer can see information they should not"
          },
          {
            "type": "paragraph",
            "html": "Review the published artifact's sharing settings immediately. Remember that data used in a published Site may be copied into that Site and should be governed as a separate artifact."
          },
          {
            "type": "subheading",
            "text": "Power BI or Tableau actions are different from another documented BI tool"
          },
          {
            "type": "paragraph",
            "html": "Integration capabilities are tool-specific. Confirm what the connector actually exposes for the current user's permissions rather than assuming parity across products."
          },
          {
            "type": "subheading",
            "text": "The dashboard looks polished but the underlying metric is wrong"
          },
          {
            "type": "paragraph",
            "html": "Return to the source analysis and semantic definition. Presentation quality is not evidence of analytical correctness."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest Data-agent dashboard workflow is: verify the question and definitions, create a focused report, publish only to the correct audience, and automate refresh only after the logic is stable. OpenAI's combination of Data, BI integrations, Sites and cloud automation can make recurring business reporting much less manual, but permissions and analytical review still determine whether the result is trustworthy."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — put data to work",
        "url": "https://openai.com/index/put-data-to-work/"
      },
      {
        "label": "help.openai.com — 20001518",
        "url": "https://help.openai.com/en/articles/20001518"
      },
      {
        "label": "openai.com — data",
        "url": "https://openai.com/business/solutions/data/"
      },
      {
        "label": "help.openai.com — 6825453 chatgpt release notes",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "relatedPaths": [
      "/blog/openai-data-agent"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenAI Data agent",
    "targetSearchIntent": "Install and configure the Data plugin, connect approved data sources, add semantic/business context, validate analyses and troubleshoot access safely",
    "targetQuery": "how to use ChatGPT Data agent",
    "parentSlug": "openai-data-agent",
    "slug": "chatgpt-data-agent-setup",
    "title": "How to Use ChatGPT Data Agent: Setup, Connectors & Semantic Layers",
    "metaTitle": "How to Use ChatGPT Data Agent: Setup & Connectors",
    "metaDescription": "Set up ChatGPT's Data agent, connect supported warehouses and semantic context, validate results, and understand permissions and common access limits.",
    "h1": "How to Use ChatGPT Data Agent: Setup, Connectors & Semantic Layers",
    "excerpt": "OpenAI's Data agent is useful only when it has the right approved sources, business context and permissions. This guide focuses on the practical setup job: making the plugin available, connecting data systems, giving it reliable metric context and checking its answers before u…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Use ChatGPT Data Agent: Setup, Connectors & Semantic Layers — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Data agent is useful only when it has the right approved sources, business context and permissions. This guide focuses on the practical setup job: making the plugin available, connecting data systems, giving it reliable metric context and checking its answers before using them for decisions."
          }
        ]
      },
      {
        "id": "before-you-start",
        "title": "Before you start",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI currently documents Data for ChatGPT Work and Codex. Availability can depend on the workspace and administrator configuration. The Data plugin itself must be available, and the underlying data-source plugins or apps you want it to use must also be available and connected."
          },
          {
            "type": "paragraph",
            "html": "OpenAI recommends having at least a data warehouse source, a semantic/business-context source and the appropriate sharing or publishing tools for the workflow you want. Not every workspace will expose the same connectors, and a connector being listed in documentation does not mean every user automatically has access to it."
          }
        ]
      },
      {
        "id": "step-1-ask-the-workspace-admin-to-enable-the-required-plugins",
        "title": "Step 1: Ask the workspace admin to enable the required plugins",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For managed workspaces, the first dependency is administrative. OpenAI's Help Center directs admins to Workspace settings and the Plugins controls to make approved plugins available."
          },
          {
            "type": "paragraph",
            "html": "Before enabling a broad set of sources, decide which systems should be exposed to the agent, who is allowed to connect them and which roles should be able to create or publish reports. The Data agent is not a reason to weaken an existing data-governance policy."
          }
        ]
      },
      {
        "id": "step-2-connect-the-data-source",
        "title": "Step 2: Connect the data source",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI currently lists Amazon Redshift, ClickHouse, Databricks, Google BigQuery, MongoDB and Snowflake among supported structured sources. Google Drive and SharePoint can provide documents and files when those integrations are approved and connected."
          },
          {
            "type": "paragraph",
            "html": "Complete the source-specific connection flow using the user's real account and permissions. OpenAI says source restrictions continue to apply, including table-, row- and column-level access controls. If an analyst has access to only a subset of a warehouse, Data should be expected to work within that subset rather than across the entire system."
          }
        ]
      },
      {
        "id": "step-3-add-semantic-and-business-context",
        "title": "Step 3: Add semantic and business context",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Connecting a warehouse is not enough for many business questions. A database may contain a column called revenue, but a company can still have several accepted definitions of revenue depending on refunds, tax, subscription timing or booked versus recognized value."
          },
          {
            "type": "paragraph",
            "html": "OpenAI therefore emphasizes semantic layers and trusted business context. Its documentation mentions metric definitions, custom calculations, data relationships and systems such as Databricks Genie Ontology, dbt, GitHub, Snowflake Horizon and existing BI dashboards as possible context sources."
          },
          {
            "type": "paragraph",
            "html": "The practical goal is to make the authoritative definition easier for the agent to find than an outdated or informal one. If two sources disagree, resolve the conflict before relying on a generated analysis."
          }
        ]
      },
      {
        "id": "step-4-install-and-invoke-data",
        "title": "Step 4: Install and invoke Data",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once the plugin and required sources are available, install Data through the plugin directory or workspace-supported installation flow. OpenAI's current Help Center documents starting a conversation with the Data plugin and invoking it with @Data where that interaction is supported."
          },
          {
            "type": "paragraph",
            "html": "A good first task is narrow and verifiable. Instead of asking “why is growth bad?”, try a request that defines the metric, date range, comparison period and relevant segment."
          },
          {
            "type": "paragraph",
            "html": "For example: “Using our approved conversion definition, compare paid-social conversion rate this week with the previous four-week average, break the change down by campaign and landing page, and cite which source and filters you used.”"
          },
          {
            "type": "paragraph",
            "html": "This gives you several things to check: whether the correct source was selected, whether the date range was interpreted correctly, whether the expected metric definition was applied and whether the output can be reconciled with an existing report."
          }
        ]
      },
      {
        "id": "step-5-validate-the-analysis",
        "title": "Step 5: Validate the analysis",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Natural-language analytics should still be auditable. OpenAI explicitly advises users to verify source, time period, filters and metric context when reviewing an analysis."
          },
          {
            "type": "paragraph",
            "html": "A useful validation checklist is:"
          },
          {
            "type": "list",
            "items": [
              "Confirm the source system and table or dashboard used.",
              "Confirm the metric definition.",
              "Confirm the date range and timezone.",
              "Confirm filters and excluded segments.",
              "Compare at least one key number with an existing trusted report or direct query.",
              "Ask the agent to explain any assumptions or joins that materially affect the result."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "If the answer changes dramatically after a small clarification, investigate why before acting on it."
          }
        ]
      },
      {
        "id": "step-6-move-from-analysis-to-a-dashboard-only-when-the-question-is-stable",
        "title": "Step 6: Move from analysis to a dashboard only when the question is stable",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Data can turn findings into interactive reports and dashboards, but it is usually better to validate the underlying question first. A polished dashboard can make a wrong definition look authoritative."
          },
          {
            "type": "paragraph",
            "html": "Once the numbers and definitions are stable, a reusable dashboard can be valuable for recurring questions such as weekly acquisition performance, customer retention, sales-pipeline health or operational KPIs. OpenAI also documents working with BI tools and OpenAI Sites for supported publishing workflows."
          }
        ]
      },
      {
        "id": "supported-source-does-not-mean-unrestricted-access",
        "title": "Supported source does not mean unrestricted access",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says existing permissions apply. This is especially important with shared warehouses and BI systems. A Data-agent conversation inherits the practical boundaries of the connected user's access rather than creating a new superuser layer."
          },
          {
            "type": "paragraph",
            "html": "If the agent cannot answer a question, check whether the relevant source is connected, whether the user can access the required tables or records, whether the semantic definition exists and whether the workspace allows that plugin."
          }
        ]
      },
      {
        "id": "common-setup-problems",
        "title": "Common setup problems",
        "blocks": [
          {
            "type": "subheading",
            "text": "Data plugin is not visible"
          },
          {
            "type": "paragraph",
            "html": "The workspace may not have the plugin enabled or the user's account may not be eligible for it. Check workspace plugin settings and current product availability."
          },
          {
            "type": "subheading",
            "text": "The correct warehouse is connected but the answer is incomplete"
          },
          {
            "type": "paragraph",
            "html": "The user may lack access to a table, row set or column required for the analysis. Check permissions in the source system rather than assuming the agent failed to search."
          },
          {
            "type": "subheading",
            "text": "The numbers disagree with the BI dashboard"
          },
          {
            "type": "paragraph",
            "html": "Compare metric definitions, timezones, filters, joins and the exact source used. A semantic layer or trusted business definition may be missing or ambiguous."
          },
          {
            "type": "subheading",
            "text": "The agent picked the wrong meaning for a company term"
          },
          {
            "type": "paragraph",
            "html": "Add or improve the business-context source instead of repeatedly correcting the wording in individual chats. The strongest setup makes authoritative definitions reusable."
          },
          {
            "type": "subheading",
            "text": "A connector exists in OpenAI's documentation but is not available in the workspace"
          },
          {
            "type": "paragraph",
            "html": "Connector and plugin availability can vary by workspace, role and rollout state. Treat the live workspace as the final source for access."
          }
        ]
      },
      {
        "id": "security-and-governance-checklist",
        "title": "Security and governance checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use the minimum source access required for the job. Keep authoritative metric definitions in controlled systems. Review who can publish dashboards and Sites. Separate analysis from consequential actions when a downstream system would send messages or change records. Re-check permissions when a user's role changes."
          },
          {
            "type": "paragraph",
            "html": "OpenAI's permission inheritance is an important control, but teams remain responsible for how they configure source access and where generated reports are shared."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The best Data-agent setup is not the one with the most connectors. It is the one with the right approved sources, clear metric definitions, least-necessary permissions and an easy path to validate important results. Configure those foundations first; then use Data to reduce the manual work of moving among warehouses, documents and dashboards."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — put data to work",
        "url": "https://openai.com/index/put-data-to-work/"
      },
      {
        "label": "help.openai.com — 20001518",
        "url": "https://help.openai.com/en/articles/20001518"
      },
      {
        "label": "openai.com — data",
        "url": "https://openai.com/business/solutions/data/"
      },
      {
        "label": "help.openai.com — 6825453 chatgpt release notes",
        "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
      }
    ],
    "relatedPaths": [
      "/blog/openai-data-agent"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Runway Model Licensing",
    "targetSearchIntent": "Understand Runway's enterprise model-weight licensing, what customers receive, how self-hosting/fine-tuning work, and how the license differs from API access",
    "targetQuery": "Runway model licensing",
    "slug": "runway-model-licensing",
    "title": "Runway Model Licensing: Weights, Self-Hosting & Fine-Tuning",
    "metaTitle": "Runway Model Licensing: Weights, Self-Hosting & Fine-Tuning",
    "metaDescription": "Runway now licenses its model weights to enterprises. Learn what the license includes, how fine-tuning and self-hosting work, pricing limits, and how it differs from Runway Dev.",
    "h1": "Runway Model Licensing: How Its Enterprise Model Weights Work",
    "excerpt": "Runway has opened a model-licensing path for enterprises that want more control than a normal generative-AI API provides. Instead of only sending requests to Runway-hosted models, qualified customers can license complete Runway model weights, fine-tune them on proprietary data…",
    "category": "Creator Tools",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Runway Model Licensing: How Its Enterprise Model Weights Work — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway has opened a model-licensing path for enterprises that want more control than a normal generative-AI API provides. Instead of only sending requests to Runway-hosted models, qualified customers can license complete Runway model weights, fine-tune them on proprietary data, deploy them inside their own infrastructure and commercialize what they build."
          }
        ]
      },
      {
        "id": "what-is-runway-model-licensing",
        "title": "What is Runway Model Licensing?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway Model Licensing is an enterprise offering for organizations that want direct access to Runway model weights. Runway's primary licensing page says the package can include complete model weights, checkpoints, a training script, delivery into the customer's codebase and hands-on support from the researchers who built the model."
          },
          {
            "type": "paragraph",
            "html": "The core idea is control. With API access, Runway operates the inference infrastructure and charges according to usage. With the licensing route, the customer can host the model in its own cloud, data center or on-premises environment and can fine-tune it using its own data."
          }
        ]
      },
      {
        "id": "what-does-the-license-include",
        "title": "What does the license include?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway currently describes five parts of the licensing package: complete model weights as the starting point; checkpoints so teams can validate model versions; a training script for adding proprietary data and running fine-tunes; delivery packaged into the customer's codebase; and access to Runway researchers for implementation and tuning support."
          },
          {
            "type": "paragraph",
            "html": "That is materially different from an open-weight download. Runway is selling a commercial package around closed frontier-model weights plus implementation support, not publishing the weights for unrestricted public use."
          }
        ]
      },
      {
        "id": "can-you-fine-tune-runway-models-on-your-own-data",
        "title": "Can you fine-tune Runway models on your own data?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Yes, according to Runway. The company explicitly says licensed customers can fine-tune the models on proprietary data so outputs can better reflect a brand, franchise canon, visual language or specialized workflow."
          },
          {
            "type": "paragraph",
            "html": "This is likely to matter most when consistency is more valuable than generic model flexibility. Runway highlights film and studios, enterprise brands and marketing, software platforms, gaming and 3D, robotics and physical AI as example sectors."
          }
        ]
      },
      {
        "id": "can-runway-models-be-self-hosted",
        "title": "Can Runway models be self-hosted?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway says licensed models can run in the customer's own cloud, data center or fully on-premises. The company also says customer data and generations can remain inside the customer's infrastructure."
          },
          {
            "type": "paragraph",
            "html": "This creates a distinct search and procurement category from Runway's hosted creative platform and Runway Dev API. Enterprises with strict data-control, latency, customization or internal-infrastructure requirements can evaluate a deployment model that does not require every generation to pass through Runway-hosted inference."
          }
        ]
      },
      {
        "id": "runway-model-licensing-vs-runway-dev",
        "title": "Runway Model Licensing vs Runway Dev",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway itself frames the choice as 'own it, or access it.' Runway Dev provides API access to Runway and third-party models with usage-based pricing and no infrastructure to operate. Model Licensing instead provides weights, customization rights, self-hosting and an annual commercial license."
          },
          {
            "type": "paragraph",
            "html": "Neither route is universally better. The API is simpler when a team wants to ship quickly and does not want to manage GPU infrastructure. Licensing becomes more interesting when proprietary fine-tuning, version control, private deployment, predictable high-volume economics or deeper model ownership matter enough to justify infrastructure and enterprise-contract complexity."
          }
        ]
      },
      {
        "id": "how-much-does-runway-model-licensing-cost",
        "title": "How much does Runway Model Licensing cost?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway does not publish a standard public price for the weight license. The enterprise page labels model-weight licensing as custom pricing, while the licensing page describes the commercial structure as an annual license with predictable economics."
          },
          {
            "type": "paragraph",
            "html": "That means there is no verified universal annual fee, minimum contract value, GPU requirement or break-even usage level to quote. Any article or calculator claiming a standard public license price should be treated cautiously unless Runway publishes one."
          }
        ]
      },
      {
        "id": "what-can-companies-build-with-licensed-weights",
        "title": "What can companies build with licensed weights?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway's examples include brand-specific video generation, franchise-consistent studio content, embedding customized models in software products, improving rendered graphics for games and 3D workflows, and using its World Action Model as a foundation for physical-AI systems."
          },
          {
            "type": "paragraph",
            "html": "These are vendor-described use cases, not guarantees of production results. A serious evaluation still needs to test output quality, training-data readiness, compute cost, inference throughput, governance, security and integration effort for the customer's own workload."
          }
        ]
      },
      {
        "id": "what-is-not-yet-publicly-documented",
        "title": "What is not yet publicly documented?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway does not currently publish a universal list of which model generations every licensee can obtain, minimum contract value, required GPU configuration, fine-tuning dataset requirements, standard SLA or a public annual price. The company also does not expose a visible launch date on the primary licensing page itself. Contemporary launch coverage dates the program to September 11, 2026."
          }
        ]
      },
      {
        "id": "why-this-launch-matters",
        "title": "Why this launch matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Most frontier media-model companies monetize through hosted applications or APIs. Runway's licensing offer creates another route: enterprises can buy access to closed model weights and operate them inside their own environment while receiving direct help from the model maker."
          },
          {
            "type": "paragraph",
            "html": "For brands and studios, that potentially changes the question from 'Which generator should we subscribe to?' to 'Do we need a model that can be customized around our own visual data and infrastructure?' For AI developers, it also creates a new comparison between usage-based APIs, open-weight models and commercially licensed closed weights."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Does Runway now sell its model weights?"
          },
          {
            "type": "paragraph",
            "html": "Runway says enterprises can license complete model weights through its Model Licensing program. This is a commercial enterprise license, not a public open-weight release."
          },
          {
            "type": "subheading",
            "text": "Can I run a licensed Runway model on-premises?"
          },
          {
            "type": "paragraph",
            "html": "Runway says deployment can be in the customer's cloud, data center or fully on-premises."
          },
          {
            "type": "subheading",
            "text": "Can companies fine-tune the model themselves?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Runway says it supplies a training script and supports customer fine-tuning on proprietary data."
          },
          {
            "type": "subheading",
            "text": "Is there public pricing?"
          },
          {
            "type": "paragraph",
            "html": "No standard public license price is currently disclosed. Runway describes the arrangement as an annual license and lists model-weight licensing as custom pricing."
          },
          {
            "type": "subheading",
            "text": "Is model licensing the same as Runway Dev?"
          },
          {
            "type": "paragraph",
            "html": "No. Runway Dev is hosted, usage-based API access. Model Licensing gives an enterprise customer model weights, customization and self-hosting rights under a commercial agreement."
          }
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The primary source is Runway's Model Licensing page and current enterprise page. September 11 launch timing is supported by contemporaneous secondary coverage. Reverify pricing, model availability and contract language immediately before publication."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "runway.com — model licensing",
        "url": "https://runway.com/model-licensing"
      },
      {
        "label": "runway.com — enterprise",
        "url": "https://runway.com/enterprise"
      },
      {
        "label": "jls42.org — ia actualites 11 sep 2026",
        "url": "https://www.jls42.org/en/news/ia-actualites-11-sep-2026"
      },
      {
        "label": "docs.dev.runwayml.com — official source",
        "url": "https://docs.dev.runwayml.com/"
      }
    ],
    "relatedPaths": [
      "/blog/runway-model-licensing-vs-api",
      "/blog/runway-self-hosted-fine-tuning"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Runway Model Licensing",
    "targetSearchIntent": "Compare Runway's annual model-weight licensing route with hosted Runway Dev API access and choose the better fit for a business workload",
    "targetQuery": "Runway license vs API",
    "parentSlug": "runway-model-licensing",
    "slug": "runway-model-licensing-vs-api",
    "title": "Runway Model Licensing vs Runway Dev API: Which Should You Use?",
    "metaTitle": "Runway Model Licensing vs Runway Dev API",
    "metaDescription": "Compare Runway's model-weight license with Runway Dev API access across control, fine-tuning, hosting, pricing structure, infrastructure and best-fit use cases.",
    "h1": "Runway Model Licensing vs Runway Dev API: Which Should You Use?",
    "excerpt": "Runway now offers two fundamentally different ways for businesses to build on its models: use Runway Dev as a hosted API, or negotiate an enterprise Model License that provides the underlying weights and lets the customer operate them inside its own infrastructure.",
    "category": "Creator Tools",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Runway Model Licensing vs Runway Dev API: Which Should You Use? — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway now offers two fundamentally different ways for businesses to build on its models: use Runway Dev as a hosted API, or negotiate an enterprise Model License that provides the underlying weights and lets the customer operate them inside its own infrastructure."
          },
          {
            "type": "paragraph",
            "html": "The right choice is less about which option is 'better' and more about what a team wants to own."
          }
        ]
      },
      {
        "id": "the-short-version",
        "title": "The short version",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Choose Runway Dev when you want to integrate models quickly, pay based on usage and avoid operating model infrastructure. Evaluate Model Licensing when you need proprietary fine-tuning, private self-hosting, tighter model-version control or enough strategic/high-volume usage to justify an annual enterprise agreement plus your own infrastructure."
          }
        ]
      },
      {
        "id": "hosting-and-infrastructure",
        "title": "Hosting and infrastructure",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway Dev is hosted. Your application calls Runway's API and Runway handles the model-serving infrastructure."
          },
          {
            "type": "paragraph",
            "html": "Model Licensing moves that responsibility toward the customer. Runway says licensed weights can run in the customer's cloud, data center or on-premises environment. That gives more control over data location and infrastructure, but it also means the customer must operate or procure the compute stack."
          }
        ]
      },
      {
        "id": "model-access",
        "title": "Model access",
        "blocks": [
          {
            "type": "paragraph",
            "html": "With Runway Dev, developers access models through API endpoints rather than receiving weights."
          },
          {
            "type": "paragraph",
            "html": "With Model Licensing, Runway says customers receive complete model weights, checkpoints and a training script as part of the package. This is commercial licensed access, not an open-weight public release."
          }
        ]
      },
      {
        "id": "fine-tuning",
        "title": "Fine-tuning",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The licensing program is explicitly designed for proprietary fine-tuning. Runway highlights cases where a company wants the model to learn its brand language, franchise canon, proprietary visual data or specialized workflow."
          },
          {
            "type": "paragraph",
            "html": "Runway Dev is better understood as hosted model access. Developers should not assume the API provides the same ownership or fine-tuning rights as the model-weight agreement unless current API documentation explicitly says so for a specific model or feature."
          }
        ]
      },
      {
        "id": "pricing-structure",
        "title": "Pricing structure",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway describes Runway Dev as usage-based pricing. Current API model pricing varies by model and generation settings and should be checked in Runway's live developer documentation."
          },
          {
            "type": "paragraph",
            "html": "For Model Licensing, Runway describes an annual license with predictable economics and labels the enterprise offer as custom pricing. No universal public annual fee or minimum contract value is published."
          },
          {
            "type": "paragraph",
            "html": "This makes a precise break-even calculation impossible from public information alone. A buyer has to compare a negotiated license plus GPU/infrastructure/operations cost against expected hosted API usage and the value of customization/control."
          }
        ]
      },
      {
        "id": "data-and-privacy",
        "title": "Data and privacy",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway's licensing page says licensed deployments can keep customer data and generations inside the customer's environment. That can be important for enterprises with strict security, data-residency or proprietary-asset requirements."
          },
          {
            "type": "paragraph",
            "html": "Hosted API use can still be appropriate for many businesses, but privacy and data-handling decisions should be based on the current Runway Dev terms and enterprise agreement rather than assuming all products have identical policies."
          }
        ]
      },
      {
        "id": "version-control",
        "title": "Version control",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway highlights full control over versions, behavior and output as a benefit of licensing. A customer operating its own weights can decide when to promote a new fine-tune or model generation after validation."
          },
          {
            "type": "paragraph",
            "html": "API users benefit from less operational burden, but they do not own the serving stack. Teams with strict reproducibility requirements should verify how model versioning is exposed in the current API."
          }
        ]
      },
      {
        "id": "time-to-launch",
        "title": "Time to launch",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For most developers, the API should be faster to adopt because there is no model-serving infrastructure to design."
          },
          {
            "type": "paragraph",
            "html": "Licensing requires a larger technical and procurement commitment. Runway says the process includes scoping, validation and deployment with direct technical support. That makes it closer to an enterprise implementation project than signing up for an API key."
          }
        ]
      },
      {
        "id": "which-is-better-for-creators-and-small-teams",
        "title": "Which is better for creators and small teams?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Usually the hosted products/API. Weight licensing is positioned at enterprises that can justify custom infrastructure and negotiated commercial terms. Individual creators who simply need generation capability gain little from owning the deployment burden."
          }
        ]
      },
      {
        "id": "which-is-better-for-brands-and-studios",
        "title": "Which is better for brands and studios?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "It depends on scale and the need for proprietary customization. A studio or brand that needs outputs trained around its own canon, catalog or visual language may have a stronger reason to evaluate licensing. A team producing normal campaign assets without deep customization may prefer the simpler hosted path."
          }
        ]
      },
      {
        "id": "which-is-better-for-software-platforms",
        "title": "Which is better for software platforms?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Software companies should compare product economics carefully. Hosted API access reduces engineering overhead and can scale with usage. Licensing may become attractive when the model is core to the product, workloads are large or predictable, proprietary tuning creates defensibility, or the company needs more control over cost and deployment."
          }
        ]
      },
      {
        "id": "decision-checklist",
        "title": "Decision checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use Runway Dev if speed of integration, variable usage and minimal infrastructure are priorities. Evaluate Model Licensing if you need weights, private deployment, proprietary fine-tuning, internal version control or a negotiated annual commercial structure. In either case, model quality should be tested on the real workload before a long-term commitment."
          }
        ]
      },
      {
        "id": "what-public-information-cannot-answer-yet",
        "title": "What public information cannot answer yet",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway does not disclose a universal license price, minimum contract, standard hardware requirement or public break-even point between API and self-hosting. Any categorical claim that one route is cheaper requires workload-specific evidence."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Does the Runway license include model weights?"
          },
          {
            "type": "paragraph",
            "html": "Runway says yes."
          },
          {
            "type": "subheading",
            "text": "Does Runway Dev include weights?"
          },
          {
            "type": "paragraph",
            "html": "No; Runway Dev is the hosted developer/API route."
          },
          {
            "type": "subheading",
            "text": "Is the license cheaper than the API?"
          },
          {
            "type": "paragraph",
            "html": "There is not enough public pricing information to say universally. The answer depends on negotiated licensing terms, infrastructure cost and workload."
          },
          {
            "type": "subheading",
            "text": "Can licensed models run on-premises?"
          },
          {
            "type": "paragraph",
            "html": "Runway says yes."
          },
          {
            "type": "subheading",
            "text": "Which option is easiest to start with?"
          },
          {
            "type": "paragraph",
            "html": "Runway Dev is designed for immediate hosted access, while the licensing route involves enterprise evaluation and deployment."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "runway.com — model licensing",
        "url": "https://runway.com/model-licensing"
      },
      {
        "label": "runway.com — enterprise",
        "url": "https://runway.com/enterprise"
      },
      {
        "label": "jls42.org — ia actualites 11 sep 2026",
        "url": "https://www.jls42.org/en/news/ia-actualites-11-sep-2026"
      },
      {
        "label": "docs.dev.runwayml.com — official source",
        "url": "https://docs.dev.runwayml.com/"
      }
    ],
    "relatedPaths": [
      "/blog/runway-model-licensing"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Runway Model Licensing",
    "targetSearchIntent": "Understand how Runway's licensed model-weight deployment and fine-tuning process works, what Runway supplies, and what remains the enterprise's responsibility",
    "targetQuery": "Runway self hosted",
    "parentSlug": "runway-model-licensing",
    "slug": "runway-self-hosted-fine-tuning",
    "title": "How to Self-Host and Fine-Tune Licensed Runway Models",
    "metaTitle": "How to Self-Host & Fine-Tune Licensed Runway Models",
    "metaDescription": "Runway's enterprise license includes model weights, checkpoints and a training script. Here's what the self-hosting and fine-tuning workflow involves—and what remains undocumented.",
    "h1": "How to Self-Host and Fine-Tune Licensed Runway Models",
    "excerpt": "Runway's new Model Licensing program gives enterprise customers a path to operate Runway models inside their own infrastructure instead of relying only on hosted API inference. The important distinction is that this is not a public open-weight download: access is commercial, n…",
    "category": "Creator Tools",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Self-Host and Fine-Tune Licensed Runway Models — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway's new Model Licensing program gives enterprise customers a path to operate Runway models inside their own infrastructure instead of relying only on hosted API inference. The important distinction is that this is not a public open-weight download: access is commercial, negotiated and delivered with implementation support."
          }
        ]
      },
      {
        "id": "what-runway-says-it-delivers",
        "title": "What Runway says it delivers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway lists five core pieces in the licensing package: complete model weights, model checkpoints, a training script, delivery packaged into the customer's codebase, and access to Runway researchers for hands-on implementation help."
          },
          {
            "type": "paragraph",
            "html": "That means an enterprise is not expected to begin from a bare checkpoint with no tooling. At the same time, Runway does not publish a universal turnkey deployment recipe, GPU bill of materials or one-size-fits-all infrastructure stack. The exact environment will depend on the licensed model and negotiated implementation."
          }
        ]
      },
      {
        "id": "step-1-scope-the-use-case",
        "title": "Step 1: Scope the use case",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway describes an evaluation process that starts by mapping the use case and involving both technical and business teams. This matters because a licensed model only makes sense when the organization has a reason to own more of the model lifecycle: private deployment, proprietary fine-tuning, version control, high-volume economics or integration into a product."
          },
          {
            "type": "paragraph",
            "html": "For a brand, the goal might be consistent output tuned to an internal visual language. For a studio, it could be franchise or catalog consistency. For a software company, the goal may be embedding a custom model into its own product while controlling infrastructure and costs."
          }
        ]
      },
      {
        "id": "step-2-validate-the-workflow-before-licensing",
        "title": "Step 2: Validate the workflow before licensing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway says its teams work with customers through a structured validation process before commercial deployment. A sensible evaluation should test the exact workflow that motivates the license rather than generic demo prompts. Measure output quality, consistency, latency, throughput, review burden and failure cases on representative data."
          },
          {
            "type": "paragraph",
            "html": "Do not assume that access to weights automatically creates a cheaper or better system. Self-hosting shifts more responsibility to the enterprise: GPU capacity, inference serving, observability, security, model-version management and operational support all become part of the total cost."
          }
        ]
      },
      {
        "id": "step-3-prepare-proprietary-training-data",
        "title": "Step 3: Prepare proprietary training data",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway explicitly supports fine-tuning on customer data, but it does not publish a universal dataset size or format requirement on the public licensing page. Teams should therefore avoid treating any unofficial minimum as a Runway requirement."
          },
          {
            "type": "paragraph",
            "html": "The practical preparation work will usually include rights review, deduplication, quality filtering, taxonomy/label decisions where relevant, train-validation separation and governance around material that should not enter training. For brands and studios, provenance and licensing of visual assets can be as important as model performance."
          }
        ]
      },
      {
        "id": "step-4-use-the-supplied-training-script-and-checkpoints",
        "title": "Step 4: Use the supplied training script and checkpoints",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway says licensed customers receive a training script and checkpoints. Checkpoints let teams compare model versions and validate which base performs best for the intended workload before committing to a production path."
          },
          {
            "type": "paragraph",
            "html": "The training script is the bridge between the customer's proprietary data and the licensed base model. The public page does not specify optimizer settings, supported fine-tuning methods, required GPU counts or standard training durations, so those should be treated as implementation-specific rather than published facts."
          }
        ]
      },
      {
        "id": "step-5-deploy-in-your-own-environment",
        "title": "Step 5: Deploy in your own environment",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Runway says licensed models can run in the customer's cloud, data center or fully on-premises. Its core privacy/control claim is that data and generations can stay inside the customer's environment."
          },
          {
            "type": "paragraph",
            "html": "For production, the enterprise still needs to design serving infrastructure around availability, batching, concurrency, storage, monitoring, access controls and rollback strategy. Exact compute requirements are not publicly standardized, so hardware recommendations should come from the specific licensed model and workload—not generic estimates copied from unrelated open models."
          }
        ]
      },
      {
        "id": "step-6-operate-versions-deliberately",
        "title": "Step 6: Operate versions deliberately",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One advantage Runway emphasizes is control over model versions and behavior. That can be valuable for production systems where silent upstream model changes would be undesirable."
          },
          {
            "type": "paragraph",
            "html": "Version control also creates responsibility. Teams should maintain evaluation sets, regression checks and a promotion process for new fine-tunes. A newer model should not automatically replace a validated production version without testing the business-critical behaviors that matter."
          }
        ]
      },
      {
        "id": "what-is-confirmed-vs-not-confirmed",
        "title": "What is confirmed vs not confirmed",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Confirmed by Runway: customers can license model weights, receive checkpoints and a training script, fine-tune on proprietary data, deploy in their own cloud/data center/on-premises, and commercialize what they build under the enterprise agreement."
          },
          {
            "type": "paragraph",
            "html": "Not publicly confirmed as universal: exact hardware requirements, supported GPU families, minimum dataset size, training duration, standard annual price, minimum contract value, standard SLA or a complete public model catalog for licensing."
          }
        ]
      },
      {
        "id": "when-self-hosting-makes-sense",
        "title": "When self-hosting makes sense",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Self-hosting is most compelling when the value of control outweighs the operating burden. Common reasons include sensitive data, proprietary fine-tuning, predictable high-volume workloads, strict version governance, internal infrastructure requirements or embedding a customized model deeply into a product."
          },
          {
            "type": "paragraph",
            "html": "If a team mainly needs quick access to high-quality generation without operating infrastructure, Runway Dev remains the simpler route."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Does Runway provide the actual weights?"
          },
          {
            "type": "paragraph",
            "html": "Yes, the licensing page says complete model weights are part of the package."
          },
          {
            "type": "subheading",
            "text": "Can the model run on-premises?"
          },
          {
            "type": "paragraph",
            "html": "Runway says yes, including deployment in the customer's own cloud, data center or fully on-premises."
          },
          {
            "type": "subheading",
            "text": "Does Runway publish GPU requirements?"
          },
          {
            "type": "paragraph",
            "html": "Not as a universal public specification for the licensing program. Hardware should be confirmed for the specific model and deployment."
          },
          {
            "type": "subheading",
            "text": "Can customers fine-tune on proprietary data?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Runway explicitly positions proprietary fine-tuning as a core benefit."
          },
          {
            "type": "subheading",
            "text": "Is this an open-source release?"
          },
          {
            "type": "paragraph",
            "html": "No. It is a commercial enterprise licensing program for closed model weights."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "runway.com — model licensing",
        "url": "https://runway.com/model-licensing"
      },
      {
        "label": "runway.com — enterprise",
        "url": "https://runway.com/enterprise"
      },
      {
        "label": "jls42.org — ia actualites 11 sep 2026",
        "url": "https://www.jls42.org/en/news/ia-actualites-11-sep-2026"
      },
      {
        "label": "docs.dev.runwayml.com — official source",
        "url": "https://docs.dev.runwayml.com/"
      }
    ],
    "relatedPaths": [
      "/blog/runway-model-licensing"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "ElevenLabs Music v2.5",
    "targetSearchIntent": "Understand what ElevenLabs Music v2.5 is, what changed, when it launched, how to access it, current pricing/API status, rights and important limitations",
    "targetQuery": "ElevenLabs Music v2.5",
    "slug": "elevenlabs-music-v2-5",
    "title": "ElevenLabs Music v2.5: Features, API, Pricing & Rights",
    "metaTitle": "ElevenLabs Music v2.5: Features, API, Pricing & Rights",
    "metaDescription": "ElevenLabs released Music v2.5 with improved music generation, lossless downloads, API access and updated creator rights. Here is what changed and what it costs.",
    "h1": "ElevenLabs Music v2.5: What Changed, API Access, Pricing and Rights",
    "excerpt": "ElevenLabs released Music v2.5 on September 11, 2026, making it the new default model for prompted and reference generation inside ElevenMusic. The update is aimed at better musical coherence and more natural instrumentation while also changing something practical for creators…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "ElevenLabs Music v2.5: What Changed, API Access, Pricing and Rights — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs released Music v2.5 on September 11, 2026, making it the new default model for prompted and reference generation inside ElevenMusic. The update is aimed at better musical coherence and more natural instrumentation while also changing something practical for creators: lossless downloads are now available across plans, including Free."
          }
        ]
      },
      {
        "id": "what-is-elevenlabs-music-v2-5",
        "title": "What is ElevenLabs Music v2.5?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Music v2.5 is ElevenLabs' latest music-generation model for creating songs and instrumental tracks from text prompts and references. ElevenLabs says tracks generated with v2.5 have more layers, more movement and more natural-sounding instruments while holding together better across the full composition."
          },
          {
            "type": "paragraph",
            "html": "The company says v2.5 is now the default for prompted and reference generation in ElevenMusic. The earlier Music v2 remains available, so this is not an immediate forced migration away from v2."
          }
        ]
      },
      {
        "id": "release-date-and-availability",
        "title": "Release date and availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs published Music v2.5 on September 11, 2026. It is available in ElevenMusic and ElevenCreative, and ElevenLabs says it is also live in the ElevenLabs API. The launch post also points to Music use inside Studio and as a node in Flows."
          },
          {
            "type": "paragraph",
            "html": "Free users can access ElevenMusic on the website. API access to Eleven Music is documented for paid subscribers."
          }
        ]
      },
      {
        "id": "what-changed-in-music-v2-5",
        "title": "What changed in Music v2.5?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs highlights three broad improvements: more realistic-sounding instruments, denser/more complex arrangements and stronger coherence across a complete song."
          },
          {
            "type": "paragraph",
            "html": "The company ran a blind internal test using the same prompt against two generated takes across 47,885 pairs. ElevenLabs says listeners preferred v2.5 the majority of the time. It reports the widest gap in vocal-led and acoustic-heavy genres including R&amp;B, soul, hip hop, rock, metal, orchestral and cinematic music."
          },
          {
            "type": "paragraph",
            "html": "That is useful evidence, but it is still a vendor-run evaluation rather than an independent benchmark. It should be treated as an ElevenLabs claim, not proof that v2.5 is universally better for every genre or workflow."
          }
        ]
      },
      {
        "id": "lossless-downloads-are-now-available-on-every-plan",
        "title": "Lossless downloads are now available on every plan",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One of the clearest changes is access to lossless downloads. ElevenLabs says Free users receive five lossless downloads per day and Pro users receive 400 per month."
          },
          {
            "type": "paragraph",
            "html": "There is an important restriction: tracks created by referencing another artist's song cannot be downloaded. ElevenLabs says this limitation exists to protect rights around referenced material."
          }
        ]
      },
      {
        "id": "do-you-own-music-made-with-music-v2-5",
        "title": "Do you own music made with Music v2.5?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs says every track you make in ElevenMusic is yours, subject to the Music terms that apply to your plan and use case. The company also says permissions attached to a track when it is created remain with that track if you later cancel or downgrade."
          },
          {
            "type": "paragraph",
            "html": "That does not mean every use is unrestricted. Commercial rights vary by subscription tier and use case, and ElevenLabs maintains separate Music terms. Free-plan use can carry attribution requirements, while some advertising, film, television, games or enterprise distribution scenarios can require broader licensing."
          },
          {
            "type": "paragraph",
            "html": "For a commercial campaign, client project or product integration, check the current Music terms rather than relying on a generic 'you own it' summary."
          }
        ]
      },
      {
        "id": "is-music-v2-5-available-through-the-api",
        "title": "Is Music v2.5 available through the API?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Yes. ElevenLabs' launch announcement says Music v2.5 is live in the ElevenLabs API."
          },
          {
            "type": "paragraph",
            "html": "The live ElevenLabs model reference now lists the Music v2.5 API model ID as music_v2_5 alongside music_v2. Use music_v2_5 when you explicitly want the v2.5 model, and recheck the live model reference when deploying production integrations."
          },
          {
            "type": "paragraph",
            "html": "The Music API supports text-prompt generation and official Python and JavaScript/TypeScript SDKs. ElevenLabs also documents direct HTTP access. Music generation is available to paid subscribers."
          }
        ]
      },
      {
        "id": "elevenlabs-music-api-pricing",
        "title": "ElevenLabs Music API pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs' current API pricing page lists Eleven Music at $0.15 per minute. Prices exclude applicable taxes. Product/API pricing can change, so developers should verify the live pricing page before shipping cost calculations."
          },
          {
            "type": "paragraph",
            "html": "For the ElevenCreative subscription product, credits are shared across products. ElevenLabs currently lists Music at approximately 900 credits per minute, with plan-specific monthly credit pools and download limits."
          }
        ]
      },
      {
        "id": "free-vs-paid-access",
        "title": "Free vs paid access",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Free ElevenCreative tier includes Music and now receives five lossless downloads per day according to the v2.5 launch announcement. Paid plans add broader commercial rights and more credits/download capacity."
          },
          {
            "type": "paragraph",
            "html": "API access is documented for paid subscribers. Teams building applications should therefore separate two questions: whether a user can generate in the ElevenMusic web product and whether a developer can call Music from an application through ElevenAPI."
          }
        ]
      },
      {
        "id": "what-can-creators-use-it-for",
        "title": "What can creators use it for?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs positions Eleven Music for songs with vocals, instrumentals, video and advertisement soundtracks, games, podcasts and other media workflows. Current documentation describes controls for genre, mood, style, structure and instrumentation, plus reference-audio workflows and post-generation editing."
          },
          {
            "type": "paragraph",
            "html": "For ProjectMonet.space's creator and marketing audience, the practical appeal is custom music for short-form videos, branded content, campaign concepts, demos and product experiences without starting from a stock-music library."
          }
        ]
      },
      {
        "id": "important-limitations-and-open-questions",
        "title": "Important limitations and open questions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The v2.5 launch does not settle every implementation detail. First, older examples can still reference Music v2, while the current model reference lists music_v2_5 for v2.5. Second, commercial permissions depend on plan and use case. Third, current ElevenLabs documentation contains inconsistent maximum-duration references across pages, so a precise duration limit should be taken from the live endpoint/API reference rather than inferred from older help pages."
          },
          {
            "type": "paragraph",
            "html": "Finally, ElevenLabs' quality result is an internal preference test. Independent comparisons against Suno, Udio or other music models would require equivalent prompts, rights assumptions and evaluation criteria."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When did ElevenLabs Music v2.5 launch?"
          },
          {
            "type": "paragraph",
            "html": "September 11, 2026."
          },
          {
            "type": "subheading",
            "text": "Is Music v2.5 free?"
          },
          {
            "type": "paragraph",
            "html": "ElevenMusic is available on the Free plan, and ElevenLabs says Free users receive five lossless downloads per day. API access is for paid subscribers."
          },
          {
            "type": "subheading",
            "text": "How much does the ElevenLabs Music API cost?"
          },
          {
            "type": "paragraph",
            "html": "The current ElevenAPI pricing page lists Music at $0.15 per generated minute, excluding taxes."
          },
          {
            "type": "subheading",
            "text": "Can I use Music v2.5 commercially?"
          },
          {
            "type": "paragraph",
            "html": "Potentially yes, but rights vary by tier and use case. Check the current ElevenLabs Music terms before advertising, film/TV, games, enterprise distribution or client work."
          },
          {
            "type": "subheading",
            "text": "Is there a Music v2.5 API model ID?"
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs says v2.5 is live in the API, but current public examples still show music_v2. Verify the live API model reference rather than inventing a model ID."
          },
          {
            "type": "subheading",
            "text": "Is Music v2 gone?"
          },
          {
            "type": "paragraph",
            "html": "No. ElevenLabs says Music v2 remains available while v2.5 becomes the new default for prompted and reference generation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "elevenlabs.io — music v2 5 model",
        "url": "https://elevenlabs.io/blog/music-v2-5-model"
      },
      {
        "label": "elevenlabs.io — what is eleven music",
        "url": "https://elevenlabs.io/docs/help-center/product/core-capabilities/music/what-is-eleven-music"
      },
      {
        "label": "elevenlabs.io — eleven music api",
        "url": "https://elevenlabs.io/eleven-music-api"
      },
      {
        "label": "elevenlabs.io — api",
        "url": "https://elevenlabs.io/pricing/api"
      },
      {
        "label": "elevenlabs.io — pricing",
        "url": "https://elevenlabs.io/pricing"
      },
      {
        "label": "elevenlabs.io — music",
        "url": "https://elevenlabs.io/docs/overview/capabilities/music"
      },
      {
        "label": "elevenlabs.io — streaming",
        "url": "https://elevenlabs.io/docs/eleven-api/guides/how-to/music/streaming"
      },
      {
        "label": "elevenlabs.io — music",
        "url": "https://elevenlabs.io/music"
      }
    ],
    "relatedPaths": [
      "/blog/elevenlabs-music-v2-5-api",
      "/blog/elevenlabs-music-v2-5-commercial-use"
    ]
  }
];
