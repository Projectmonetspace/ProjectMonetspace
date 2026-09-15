import type { BlogArticle } from "./blog-types.ts";

export const reviewedArticles20260915B: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "OpenRouter Zero Data Retention",
    "targetSearchIntent": "Understand what OpenRouter Zero Data Retention guarantees, how to enable it, how it differs from no-training/data-collection controls, and how it works with US/EU in-region routing",
    "targetQuery": "OpenRouter ZDR",
    "slug": "openrouter-zdr-zero-data-retention",
    "title": "OpenRouter ZDR: Zero Data Retention, API Setup & Privacy",
    "metaTitle": "OpenRouter ZDR: Zero Data Retention, API Setup & Privacy",
    "metaDescription": "OpenRouter ZDR routes requests only to zero-retention endpoints. Learn how provider.zdr works, what it does not cover, and how it differs from no-training and in-region controls.",
    "h1": "OpenRouter ZDR: How Zero Data Retention Routing Works",
    "excerpt": "OpenRouter now gives developers several ways to require Zero Data Retention, or ZDR, when routing AI requests across its model marketplace. The important part is that ZDR is not a vague privacy label: OpenRouter exposes it as an enforceable routing requirement at the account, guardrail and individual-request level.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for OpenRouter ZDR: How Zero Data Retention Routing Works",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter now gives developers several ways to require Zero Data Retention, or ZDR, when routing AI requests across its model marketplace. The important part is that ZDR is not a vague privacy label: OpenRouter exposes it as an enforceable routing requirement at the account, guardrail and individual-request level."
          },
          {
            "type": "paragraph",
            "html": "For a single API request, developers can set provider.zdr to true. OpenRouter says that request will then route only to endpoints whose policy qualifies for Zero Data Retention. That makes ZDR especially relevant for teams using multiple model providers but wanting one consistent retention control at the gateway layer."
          }
        ]
      },
      {
        "id": "what-is-openrouter-zdr",
        "title": "What is OpenRouter ZDR?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Zero Data Retention means an eligible inference provider processes a prompt and response without persisting either after the request is completed. OpenRouter explicitly distinguishes this from a broader claim that data never leaves your environment."
          },
          {
            "type": "paragraph",
            "html": "Your request still reaches the selected model provider for inference. ZDR also does not automatically control copies created elsewhere in your stack, including application logs, connected tools, plugins, caches or downstream storage."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters. A system can use a ZDR inference endpoint and still retain sensitive data in its own request logging pipeline. ZDR solves one layer of the problem: provider-side prompt and response retention."
          }
        ]
      },
      {
        "id": "how-do-you-enable-zdr-on-openrouter",
        "title": "How do you enable ZDR on OpenRouter?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter documents four practical enforcement layers:"
          },
          {
            "type": "list",
            "items": [
              "account-level privacy settings;",
              "model-group settings;",
              "guardrails;",
              "per-request routing with provider.zdr."
            ]
          },
          {
            "type": "paragraph",
            "html": "For request-level enforcement, include zdr: true inside the provider object. OpenRouter says this limits routing to endpoints with a Zero Data Retention policy."
          },
          {
            "type": "paragraph",
            "html": "A minimal request can look conceptually like this:"
          },
          {
            "type": "paragraph",
            "html": "provider: { \"zdr\": true }"
          },
          {
            "type": "paragraph",
            "html": "OpenRouter also documents a separate data_collection control. Setting data_collection to deny excludes endpoints that store user data non-transiently and may train on it."
          },
          {
            "type": "paragraph",
            "html": "These controls address different questions. ZDR asks whether prompts and responses are retained after inference. The data-collection setting addresses broader storage and training eligibility."
          }
        ]
      },
      {
        "id": "zdr-vs-no-training-what-is-the-difference",
        "title": "ZDR vs no-training: what is the difference?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A no-training policy and a zero-retention policy are not identical."
          },
          {
            "type": "paragraph",
            "html": "An endpoint can promise not to train on your data while still retaining prompts for abuse monitoring, legal requirements or operational purposes. ZDR is stricter on retention: the provider is expected not to persist the prompt or response after processing."
          },
          {
            "type": "paragraph",
            "html": "OpenRouter therefore recommends treating retention and training as separate policy dimensions. For a stricter request, developers can combine zdr: true with data_collection: \"deny\"."
          },
          {
            "type": "paragraph",
            "html": "That does not make the entire application zero-retention. It only constrains eligible provider endpoints. Your own infrastructure and any tools used during the request still need their own policies."
          }
        ]
      },
      {
        "id": "how-does-zdr-work-with-us-and-eu-in-region-routing",
        "title": "How does ZDR work with US and EU in-region routing?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter also offers region-specific API base URLs for US and EU processing. Its US in-region routing launched on September 9, 2026, joining an existing EU option."
          },
          {
            "type": "paragraph",
            "html": "Requests sent to the US endpoint are decrypted inside the United States and routed only to provider endpoints running there. The EU endpoint applies the same concept to EU-region processing."
          },
          {
            "type": "paragraph",
            "html": "Region controls and ZDR solve different problems:"
          },
          {
            "type": "list",
            "items": [
              "ZDR controls provider retention.",
              "data_collection: \"deny\" controls broader storage/training eligibility.",
              "in-region routing controls where eligible processing occurs."
            ]
          },
          {
            "type": "paragraph",
            "html": "For regulated or sensitive workloads, the useful pattern is to combine the controls that match the policy requirement instead of assuming one switch covers everything."
          }
        ]
      },
      {
        "id": "does-openrouter-itself-store-prompts",
        "title": "Does OpenRouter itself store prompts?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter's ZDR documentation focuses on provider-side inference retention and repeatedly warns developers to account for other layers. Its privacy policy and product configuration should be reviewed separately for OpenRouter-side account, billing, security and operational data."
          },
          {
            "type": "paragraph",
            "html": "The safest reading is not “ZDR means nobody stores anything.” It means a ZDR-routed inference request is restricted to eligible provider endpoints that do not retain prompt and response content after processing, subject to the exact policy OpenRouter records for that endpoint."
          }
        ]
      },
      {
        "id": "which-models-support-openrouter-zdr",
        "title": "Which models support OpenRouter ZDR?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "There is no permanent model-name rule."
          },
          {
            "type": "paragraph",
            "html": "OpenRouter explains that policies can differ by provider endpoint even for the same model. A model may have one provider endpoint with stricter retention and another with different terms. OpenRouter tracks policy at the endpoint level and uses that policy information when routing."
          },
          {
            "type": "paragraph",
            "html": "That means a static list of “ZDR models” can become stale quickly. Developers should check current endpoint eligibility in OpenRouter rather than assuming a model is always ZDR-compatible everywhere it is served."
          }
        ]
      },
      {
        "id": "what-happens-if-no-eligible-zdr-endpoint-is-available",
        "title": "What happens if no eligible ZDR endpoint is available?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The point of using ZDR as a routing requirement is that privacy requirements constrain provider selection. If the requested model has no eligible endpoint matching the configured controls, the request should not silently fall back to an endpoint that violates the restriction."
          },
          {
            "type": "paragraph",
            "html": "This may reduce provider choice, affect availability or change cost/latency compared with unrestricted routing. Those trade-offs are normal consequences of stronger routing constraints."
          }
        ]
      },
      {
        "id": "why-this-matters-for-ai-agents",
        "title": "Why this matters for AI agents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Agentic applications often generate more sensitive context than a simple chatbot. They may send source code, customer records, business documents, tool outputs and long conversation histories to models repeatedly."
          },
          {
            "type": "paragraph",
            "html": "They also use prompt caching, tools and persistent application logs more heavily. That makes a single “do not train on my data” preference insufficient for many teams."
          },
          {
            "type": "paragraph",
            "html": "OpenRouter's ZDR control is useful because it makes retention policy part of the request-routing decision. A developer can enforce a policy centrally even when switching between several model families and providers."
          },
          {
            "type": "paragraph",
            "html": "The same flexibility also increases the need to audit the rest of the stack. A ZDR model request can still be copied into a monitoring service, tool trace or database by the application itself."
          }
        ]
      },
      {
        "id": "practical-privacy-checklist",
        "title": "Practical privacy checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For a sensitive OpenRouter workload, check the following separately:"
          },
          {
            "type": "list",
            "items": [
              "Require ZDR at the account, guardrail or request level.",
              "Use data_collection: \"deny\" if provider storage/training restrictions are also required.",
              "Use US or EU in-region routing if processing location matters.",
              "Review application logs and tracing.",
              "Review tool and plugin data handling.",
              "Review caching behavior.",
              "Verify the live endpoint policy instead of relying on an old model list.",
              "Recheck policies before moving a sensitive production workload to a new provider."
            ],
            "ordered": true
          }
        ]
      },
      {
        "id": "is-openrouter-zdr-the-same-as-private-or-on-prem-inference",
        "title": "Is OpenRouter ZDR the same as private or on-prem inference?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No."
          },
          {
            "type": "paragraph",
            "html": "ZDR still sends data to an external inference provider. It controls retention after processing; it does not keep the request entirely inside your own network."
          },
          {
            "type": "paragraph",
            "html": "Organizations that require data never to leave customer-controlled infrastructure need a different architecture, such as self-hosted inference or a provider arrangement specifically designed for that requirement."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter ZDR is best understood as an enforceable provider-retention routing control rather than a universal privacy mode."
          },
          {
            "type": "paragraph",
            "html": "Its main advantage is consistency: developers can require eligible zero-retention endpoints while continuing to route across multiple model providers. Combining ZDR with data_collection: \"deny\" and region-specific routing creates a more precise policy stack for teams that care about retention, training and processing location."
          },
          {
            "type": "paragraph",
            "html": "The main limitation is equally important: ZDR only controls one part of the data path. Logs, tools, plugins, caches and application storage remain the developer's responsibility."
          },
          {
            "type": "paragraph",
            "html": "Because endpoint policies can change, any provider or model eligibility claim should be verified against OpenRouter's live policy data before deployment."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/blog/insights/zero-data-retention/"
      },
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/docs/guides/features/zdr"
      },
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/blog/announcements/us-in-region-routing/"
      },
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/privacy/"
      }
    ],
    "relatedPaths": [
      "/blog/openrouter-zdr-vs-no-training-in-region-routing",
      "/blog/openrouter-zdr-api-guide"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenRouter Zero Data Retention",
    "targetSearchIntent": "Choose the correct OpenRouter privacy controls by distinguishing prompt retention, training/data collection and geographic processing requirements",
    "targetQuery": "OpenRouter ZDR vs no training",
    "parentSlug": "openrouter-zdr-zero-data-retention",
    "slug": "openrouter-zdr-vs-no-training-in-region-routing",
    "title": "OpenRouter ZDR vs No-Training vs In-Region Routing",
    "metaTitle": "OpenRouter ZDR vs No-Training vs In-Region Routing",
    "metaDescription": "OpenRouter ZDR, data_collection deny and in-region routing solve different privacy problems. Learn which control governs retention, training/storage and processing location.",
    "h1": "OpenRouter ZDR vs No-Training vs In-Region Routing",
    "excerpt": "OpenRouter exposes several privacy and routing controls that sound similar but solve different problems. The three most important are Zero Data Retention, data-collection restrictions and in-region routing.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for OpenRouter ZDR vs No-Training vs In-Region Routing",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter exposes several privacy and routing controls that sound similar but solve different problems. The three most important are Zero Data Retention, data-collection restrictions and in-region routing."
          },
          {
            "type": "paragraph",
            "html": "Using the wrong one can create a false sense of privacy. A no-training setting does not necessarily mean zero retention, and Zero Data Retention does not mean the request stays inside your country or inside your own infrastructure."
          }
        ]
      },
      {
        "id": "quick-comparison",
        "title": "Quick comparison",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ZDR: controls whether an eligible inference provider retains prompts and responses after processing."
          },
          {
            "type": "paragraph",
            "html": "data_collection: \"deny\": excludes endpoints that store user data non-transiently and may train on it."
          },
          {
            "type": "paragraph",
            "html": "US/EU in-region routing: controls where eligible inference traffic is decrypted and processed."
          },
          {
            "type": "paragraph",
            "html": "These can be combined because they address separate policy dimensions."
          }
        ]
      },
      {
        "id": "what-zdr-actually-protects",
        "title": "What ZDR actually protects",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter defines Zero Data Retention as a provider policy under which the provider processes a request and returns the response without persisting the prompt or response afterward."
          },
          {
            "type": "paragraph",
            "html": "That is stronger than a simple “not used for training” promise on the retention dimension."
          },
          {
            "type": "paragraph",
            "html": "However, the request still reaches the provider. ZDR does not make OpenRouter an on-prem system and does not automatically govern your application's own logs, tools, caches or analytics."
          }
        ]
      },
      {
        "id": "what-no-training-data-collection-controls-protect",
        "title": "What no-training/data-collection controls protect",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A provider can retain data for reasons such as abuse monitoring or legal requirements while still promising not to use it for model training."
          },
          {
            "type": "paragraph",
            "html": "That is why OpenRouter exposes data_collection separately from ZDR."
          },
          {
            "type": "paragraph",
            "html": "When data_collection is set to deny, OpenRouter says routing excludes endpoints that store user data non-transiently and may train on it. This is useful when organizational policy is broader than prompt-retention alone."
          }
        ]
      },
      {
        "id": "what-in-region-routing-protects",
        "title": "What in-region routing protects",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Data residency is a geographic requirement."
          },
          {
            "type": "paragraph",
            "html": "OpenRouter's US in-region endpoint is designed so requests are decrypted inside the United States and routed only to US provider endpoints. Its EU endpoint applies the same idea to EU processing."
          },
          {
            "type": "paragraph",
            "html": "This does not automatically mean ZDR. A provider can process data in the required region while still having a retention policy you do not want. Region and retention must therefore be evaluated separately."
          }
        ]
      },
      {
        "id": "which-control-should-you-use",
        "title": "Which control should you use?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use ZDR when the requirement is: “The inference provider must not retain prompts or responses after processing.”"
          },
          {
            "type": "paragraph",
            "html": "Use data_collection deny when the requirement is broader: “Do not route to endpoints that collect/store user data in ways that may include training.”"
          },
          {
            "type": "paragraph",
            "html": "Use in-region routing when the requirement is: “Processing must occur in the US or EU.”"
          },
          {
            "type": "paragraph",
            "html": "Use all three when the workload needs all three guarantees simultaneously."
          }
        ]
      },
      {
        "id": "example-policy-combinations",
        "title": "Example policy combinations",
        "blocks": [
          {
            "type": "subheading",
            "text": "Internal prototype with ordinary business data"
          },
          {
            "type": "paragraph",
            "html": "You may not need strict routing controls, but should still review provider policies and avoid logging sensitive information unnecessarily."
          },
          {
            "type": "subheading",
            "text": "Customer-support agent with confidential tickets"
          },
          {
            "type": "paragraph",
            "html": "ZDR plus data_collection: \"deny\" can be appropriate if company policy prohibits retention and training use at the provider layer."
          },
          {
            "type": "subheading",
            "text": "EU customer data with residency requirements"
          },
          {
            "type": "paragraph",
            "html": "Use the EU base URL together with ZDR and data-collection controls if both geography and retention matter."
          },
          {
            "type": "subheading",
            "text": "Highly regulated workload"
          },
          {
            "type": "paragraph",
            "html": "Gateway controls may still be insufficient. If policy requires customer-controlled infrastructure or prohibits sending data to external inference providers altogether, self-hosted or contractually dedicated infrastructure may be necessary."
          }
        ]
      },
      {
        "id": "why-model-name-alone-is-not-enough",
        "title": "Why model name alone is not enough",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter routes models across provider endpoints, and endpoint policies can differ."
          },
          {
            "type": "paragraph",
            "html": "A privacy assessment should therefore ask: “Which endpoint will serve this request under these routing controls?” rather than only “Which model am I using?”"
          },
          {
            "type": "paragraph",
            "html": "This is one reason OpenRouter's policy-aware routing is useful. The gateway can enforce constraints as provider availability changes, instead of forcing the application to hard-code one vendor forever."
          }
        ]
      },
      {
        "id": "the-hidden-layer-your-own-application",
        "title": "The hidden layer: your own application",
        "blocks": [
          {
            "type": "paragraph",
            "html": "None of these controls automatically fixes data handling in your stack."
          },
          {
            "type": "paragraph",
            "html": "A request can be routed to a zero-retention provider and still be stored by:"
          },
          {
            "type": "list",
            "items": [
              "server logs;",
              "APM or observability tools;",
              "agent traces;",
              "connected tools;",
              "plugin databases;",
              "browser telemetry;",
              "caches;",
              "support systems."
            ]
          },
          {
            "type": "paragraph",
            "html": "A real privacy architecture maps the full data path from the user's input to every system that sees it."
          }
        ]
      },
      {
        "id": "is-zdr-always-more-private-than-no-training",
        "title": "Is ZDR always more private than no-training?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "On provider retention specifically, ZDR is the stricter concept because it says the prompt and response are not persisted after inference."
          },
          {
            "type": "paragraph",
            "html": "But privacy is multidimensional. A ZDR endpoint in the wrong geographic region may violate residency policy, while an in-region endpoint with weak retention rules may violate storage policy."
          },
          {
            "type": "paragraph",
            "html": "There is no single switch that replaces the policy matrix."
          }
        ]
      },
      {
        "id": "does-in-region-routing-guarantee-compliance",
        "title": "Does in-region routing guarantee compliance?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No. Geography is one compliance input, not a complete compliance program."
          },
          {
            "type": "paragraph",
            "html": "OpenRouter's routing features can help enforce technical constraints, but organizations still need to evaluate contracts, endpoint policy, application logging, access control, security posture and legal requirements relevant to their workload."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter ZDR, no-training/data-collection controls and in-region routing should be thought of as three separate axes:"
          },
          {
            "type": "list",
            "items": [
              "retention;",
              "collection/training;",
              "geography."
            ]
          },
          {
            "type": "paragraph",
            "html": "The strongest configuration is not automatically the right one for every workload. Start with the actual policy requirement, then enforce only the controls needed to satisfy it without silently weakening them when routing becomes constrained."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/blog/insights/zero-data-retention/"
      },
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/docs/guides/features/zdr"
      },
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/blog/announcements/us-in-region-routing/"
      }
    ],
    "relatedPaths": [
      "/blog/openrouter-zdr-zero-data-retention",
      "/blog/openrouter-zdr-api-guide"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenRouter Zero Data Retention",
    "targetSearchIntent": "Configure OpenRouter Zero Data Retention correctly at request, guardrail or account level and understand what happens when routing is constrained",
    "targetQuery": "how to enable OpenRouter ZDR",
    "parentSlug": "openrouter-zdr-zero-data-retention",
    "slug": "openrouter-zdr-api-guide",
    "title": "How to Enable OpenRouter ZDR Per Request",
    "metaTitle": "How to Enable OpenRouter ZDR Per Request",
    "metaDescription": "Use OpenRouter ZDR at account, guardrail or request level. See how provider.zdr works, how to combine it with data_collection deny, and what to verify before production.",
    "h1": "How to Enable OpenRouter ZDR Per Request",
    "excerpt": "OpenRouter lets developers make Zero Data Retention an explicit routing requirement instead of relying on whichever provider happens to receive a request.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for How to Enable OpenRouter ZDR Per Request",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter lets developers make Zero Data Retention an explicit routing requirement instead of relying on whichever provider happens to receive a request."
          },
          {
            "type": "paragraph",
            "html": "The fastest way to enforce it for one request is to set provider.zdr to true. OpenRouter says that request will then route only to endpoints that qualify for its Zero Data Retention policy."
          }
        ]
      },
      {
        "id": "the-simplest-request-level-setup",
        "title": "The simplest request-level setup",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Add a provider block to the request and enable ZDR:"
          },
          {
            "type": "paragraph",
            "html": "json { \"model\": \"your-model-id\", \"messages\": [{\"role\": \"user\", \"content\": \"Hello\"}], \"provider\": { \"zdr\": true } }"
          },
          {
            "type": "paragraph",
            "html": "The exact model ID is separate from the privacy rule. ZDR filters eligible provider endpoints for that request."
          }
        ]
      },
      {
        "id": "add-data-collection-deny-when-training-storage-matters-too",
        "title": "Add data_collection deny when training/storage matters too",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter documents another provider control named data_collection. Set it to deny when you want routing to exclude endpoints that store user data non-transiently and may use it for training."
          },
          {
            "type": "paragraph",
            "html": "json { \"provider\": { \"zdr\": true, \"data_collection\": \"deny\" } }"
          },
          {
            "type": "paragraph",
            "html": "These settings overlap but are not synonyms. zdr: true is about retaining prompts and responses after inference. data_collection: \"deny\" is a broader exclusion for endpoints whose policies allow non-transient storage or training-related collection."
          }
        ]
      },
      {
        "id": "account-level-zdr",
        "title": "Account-level ZDR",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If every request from an account should require ZDR, OpenRouter also exposes privacy settings that can enforce the policy without changing each request body."
          },
          {
            "type": "paragraph",
            "html": "This is useful when privacy is an organizational requirement rather than a per-feature choice. It also reduces the chance that one developer forgets to set the field in a new integration."
          }
        ]
      },
      {
        "id": "model-group-and-guardrail-enforcement",
        "title": "Model-group and guardrail enforcement",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter says ZDR can also be enforced for model groups and through guardrails. This lets teams define privacy policy centrally while still giving applications access to multiple models."
          },
          {
            "type": "paragraph",
            "html": "The important behavior is compositional: request-level ZDR does not weaken a stricter account or guardrail rule. If any applicable layer requires ZDR, the request remains constrained to ZDR-eligible endpoints."
          }
        ]
      },
      {
        "id": "add-us-or-eu-in-region-routing-when-location-matters",
        "title": "Add US or EU in-region routing when location matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ZDR does not control geography. If processing must occur in a specific region, use OpenRouter's region-specific API base URL in addition to ZDR."
          },
          {
            "type": "paragraph",
            "html": "OpenRouter documents:"
          },
          {
            "type": "list",
            "items": [
              "https://us.openrouter.ai/api/v1 for US in-region routing;",
              "https://eu.openrouter.ai/api/v1 for EU in-region routing."
            ]
          },
          {
            "type": "paragraph",
            "html": "A region requirement narrows eligible providers by processing location. ZDR narrows them by retention policy. Combining both gives a stricter route than either control alone."
          }
        ]
      },
      {
        "id": "what-should-happen-if-no-eligible-endpoint-exists",
        "title": "What should happen if no eligible endpoint exists?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Privacy filters reduce the provider pool. A model that works under unrestricted routing may have no endpoint that satisfies ZDR, no-training and region restrictions simultaneously."
          },
          {
            "type": "paragraph",
            "html": "Do not design production code under the assumption that a fallback will always exist. Handle routing failures explicitly and decide whether the application should stop, ask the user to choose another model, or use a pre-approved alternative."
          },
          {
            "type": "paragraph",
            "html": "The safe policy is never to relax privacy requirements silently just to make the request succeed."
          }
        ]
      },
      {
        "id": "do-not-hard-code-a-permanent-zdr-model-list",
        "title": "Do not hard-code a permanent ZDR model list",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter tracks policy at the endpoint level. The same model can be served by different providers with different data policies."
          },
          {
            "type": "paragraph",
            "html": "That means documentation that says “Model X is ZDR” can become wrong if provider availability changes. Check live endpoint policy data before deploying sensitive workloads and periodically revalidate long-running systems."
          }
        ]
      },
      {
        "id": "audit-the-rest-of-the-request-path",
        "title": "Audit the rest of the request path",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Even a correctly configured ZDR request can still leak sensitive information through another layer."
          },
          {
            "type": "paragraph",
            "html": "Review:"
          },
          {
            "type": "list",
            "items": [
              "application request logs;",
              "observability and tracing platforms;",
              "tool-call logs;",
              "plugin storage;",
              "prompt caches;",
              "database persistence;",
              "error-reporting systems;",
              "analytics payloads."
            ]
          },
          {
            "type": "paragraph",
            "html": "ZDR is not a replacement for application-level data governance."
          }
        ]
      },
      {
        "id": "recommended-production-pattern",
        "title": "Recommended production pattern",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For a workload containing sensitive business or customer data:"
          },
          {
            "type": "list",
            "items": [
              "enforce ZDR at account or guardrail level if it is mandatory;",
              "keep provider.zdr: true in sensitive request paths as an explicit defense-in-depth signal;",
              "add data_collection: \"deny\" where training/storage restrictions matter;",
              "use the appropriate US or EU endpoint if residency matters;",
              "define a known-good fallback model set that satisfies the same policy;",
              "log metadata rather than raw prompt content wherever possible;",
              "recheck provider eligibility periodically."
            ],
            "ordered": true
          }
        ]
      },
      {
        "id": "common-mistake-treating-zdr-as-on-prem-privacy",
        "title": "Common mistake: treating ZDR as on-prem privacy",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A ZDR request still reaches an external inference provider. It simply requires that eligible provider not retain the prompt or response after processing."
          },
          {
            "type": "paragraph",
            "html": "If policy says data must never leave customer-controlled infrastructure, use self-hosted inference or a provider arrangement explicitly designed for that requirement."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter makes ZDR practical because it can be enforced at multiple levels and can travel with a model-agnostic routing architecture."
          },
          {
            "type": "paragraph",
            "html": "For most sensitive deployments, zdr: true should be viewed as one layer in a broader policy stack that also covers training/storage, region, logs, tools and caches."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/blog/insights/zero-data-retention/"
      },
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/docs/guides/features/zdr"
      },
      {
        "label": "OpenRouter — Official source",
        "url": "https://openrouter.ai/blog/announcements/us-in-region-routing/"
      }
    ],
    "relatedPaths": [
      "/blog/openrouter-zdr-zero-data-retention",
      "/blog/openrouter-zdr-vs-no-training-in-region-routing"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Bolt Forge",
    "targetSearchIntent": "Understand what Bolt Forge is, which models it uses, how access and 50X usage work, what data is shared for training, current limitations, and whether it fits an AI app-building workflow",
    "targetQuery": "Bolt Forge",
    "slug": "bolt-forge",
    "title": "Bolt Forge: Models, 50X Usage, Pricing & Privacy",
    "metaTitle": "Bolt Forge: Models, 50X Usage, Pricing & Privacy",
    "metaDescription": "Bolt Forge is Bolt.new’s open-model research-preview agent. See its models, 50X Pro allocation, pricing context, privacy tradeoff, limits and how it works.",
    "h1": "Bolt Forge: Models, 50X Usage, Pricing and How the Research Preview Works",
    "excerpt": "Bolt Forge is a new research-preview agent inside Bolt.new that is built around open-weight AI models rather than Bolt’s usual premium model stack.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for Bolt Forge: Models, 50X Usage, Pricing and How the Research Preview Works",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt Forge is a new research-preview agent inside Bolt.new that is built around open-weight AI models rather than Bolt’s usual premium model stack."
          },
          {
            "type": "paragraph",
            "html": "Bolt launched Forge on September 14, 2026. It appears as a third agent option alongside Standard and Max for individual Pro users. The core trade is unusual: Bolt gives Forge users a much larger usage allocation during the preview, while users who enter Forge explicitly opt in to let anonymized build sessions contribute to training future open-weight models with Arcee AI."
          },
          {
            "type": "paragraph",
            "html": "That makes Forge more than a cheaper model picker. It is simultaneously an app-building agent, an open-model testing environment and a data-sharing experiment intended to improve future coding models."
          }
        ]
      },
      {
        "id": "what-is-bolt-forge",
        "title": "What is Bolt Forge?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt Forge is an agent inside Bolt.new, the AI app and website builder from StackBlitz. It is not a single model. Instead, Forge can run multiple open-weight models inside Bolt’s existing building environment."
          },
          {
            "type": "paragraph",
            "html": "At launch, Bolt lists GLM 5.3 Flash as the default model, with GLM 5.3 also available. Kimi K3 and DeepSeek v4 Pro are offered as experimental options."
          },
          {
            "type": "paragraph",
            "html": "Bolt says the lineup will change as new open models become available. That means users should treat the current model list as a launch snapshot rather than a permanent catalog."
          }
        ]
      },
      {
        "id": "when-did-bolt-forge-launch",
        "title": "When did Bolt Forge launch?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt launched the Forge research preview on September 14, 2026."
          },
          {
            "type": "paragraph",
            "html": "The first preview window runs through October 14, 2026. Bolt says Forge will continue after that date as an experimental open-model lab, but the temporary launch allocation and first Arcee AI training window are tied to the September 14–October 14 period."
          }
        ]
      },
      {
        "id": "which-models-does-bolt-forge-use",
        "title": "Which models does Bolt Forge use?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The launch lineup includes:"
          },
          {
            "type": "list",
            "items": [
              "GLM 5.3 Flash — the default Forge model at launch.",
              "GLM 5.3 — available alongside Flash.",
              "Kimi K3 — experimental inside Forge.",
              "DeepSeek v4 Pro — experimental inside Forge."
            ]
          },
          {
            "type": "paragraph",
            "html": "Bolt warns that these models do not consume the Forge allocation at exactly the same rate. Kimi K3 and DeepSeek v4 Pro use the available Forge allowance faster than the GLM options."
          },
          {
            "type": "paragraph",
            "html": "The important distinction is that Bolt Forge is an orchestration/product layer around these models. Searching for “Bolt Forge model” should not be interpreted as meaning Bolt released its own foundation model."
          }
        ]
      },
      {
        "id": "what-does-50x-more-usage-mean",
        "title": "What does “50X more usage” mean?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "During the research preview, Bolt says every individual Pro plan receives up to 50X more Forge usage at no extra cost through October 14, 2026."
          },
          {
            "type": "paragraph",
            "html": "Forge usage is kept separate from Standard and Max usage. Instead of a daily allowance, Forge uses one monthly usage bar that resets on the account’s renewal date. Bolt says there are no daily limits and no automatic overage charges. When the Forge bar reaches 100%, the user is moved back to Standard rather than billed for additional Forge usage."
          },
          {
            "type": "paragraph",
            "html": "The “50X” figure is a launch allocation claim from Bolt. It should not be interpreted as a permanent pricing promise, and Bolt has not yet published the exact post-preview allocation that will apply after October 14."
          }
        ]
      },
      {
        "id": "how-much-does-bolt-forge-cost",
        "title": "How much does Bolt Forge cost?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Forge is included for individual Pro users during the preview rather than sold as a separate add-on."
          },
          {
            "type": "paragraph",
            "html": "Bolt’s current pricing page lists Pro at $25 per month, while the Forge launch article says the temporary Forge allocation is included at no additional charge for eligible individual Pro users through October 14, 2026."
          },
          {
            "type": "paragraph",
            "html": "Bolt also announced Bolt Lite as another access path. Lite seats are distributed in waves, with the first seats expected by September 21, 2026. Bolt says users who are on Lite when sign-ups close on October 14 can keep that plan at $9 per month."
          },
          {
            "type": "paragraph",
            "html": "Those numbers are time-sensitive. Anyone evaluating Forge should check Bolt’s live pricing and access pages before buying because the research preview is explicitly temporary."
          }
        ]
      },
      {
        "id": "how-does-the-data-sharing-model-work",
        "title": "How does the data-sharing model work?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Forge requires an explicit opt-in whenever a user switches into it."
          },
          {
            "type": "paragraph",
            "html": "According to Bolt, Forge sessions can include prompts, code and the fix traces generated during builds. Bolt says it strips secrets and personal information and anonymizes the data before it leaves Bolt infrastructure. The resulting data can then be transferred to Arcee AI under a data-processing agreement and used to help train open-weight models."
          },
          {
            "type": "paragraph",
            "html": "Standard and Max are separate. Bolt says it does not use work from those agents for Forge training simply because the same account uses Bolt."
          },
          {
            "type": "paragraph",
            "html": "Teams and Enterprise workspaces are excluded from Forge and from Forge data collection at launch."
          },
          {
            "type": "paragraph",
            "html": "There is one important permanence caveat: switching back to Standard or Max stops new Forge sharing, but data already used in model training cannot be pulled back out of the models it helped create."
          }
        ]
      },
      {
        "id": "why-is-bolt-working-with-arcee-ai",
        "title": "Why is Bolt working with Arcee AI?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt says Forge sessions will help Arcee AI train future open-weight coding models using real software-building workflows."
          },
          {
            "type": "paragraph",
            "html": "The partnership is notable because the training data is not simply public code scraped from repositories. Bolt is trying to capture the sequence of how people actually build: creating a project, making edits, connecting services, encountering errors and fixing them."
          },
          {
            "type": "paragraph",
            "html": "Bolt says the first training run begins in October 2026 and that the resulting model weights will be published. That is a forward-looking vendor commitment and should be rechecked when the training run and resulting model releases actually occur."
          }
        ]
      },
      {
        "id": "how-good-is-bolt-forge",
        "title": "How good is Bolt Forge?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt reports that Forge’s open-model lineup scored 92.2 on its internal Bolt Build Index, compared with 101.0 for the top paid model in the benchmark, which Bolt identifies as Claude Opus 5. Bolt translates that to roughly 91% of the top score."
          },
          {
            "type": "paragraph",
            "html": "This is useful product information, but it is not an independent benchmark. Bolt designed the benchmark, ran the tests and published the result. It should therefore be described as a Bolt-run evaluation rather than proof that Forge is 91% as capable as a premium model across all coding tasks."
          },
          {
            "type": "paragraph",
            "html": "Real-world performance will also vary by model, project type, prompt quality and how much context a build requires."
          }
        ]
      },
      {
        "id": "is-bolt-forge-good-for-production-apps",
        "title": "Is Bolt Forge good for production apps?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt itself recommends caution."
          },
          {
            "type": "paragraph",
            "html": "The company labels Forge’s open models experimental and advises users to duplicate serious projects before switching them into Forge. Bolt also suggests keeping complex production work in Standard or Max."
          },
          {
            "type": "paragraph",
            "html": "That makes Forge especially attractive for brainstorming, prototypes, MVPs, experiments and iterative builds where high usage limits matter more than always using the most capable premium model."
          },
          {
            "type": "paragraph",
            "html": "For production-critical work, users need to evaluate model quality, privacy requirements and the cost of mistakes rather than choosing Forge only because the usage allowance is larger."
          }
        ]
      },
      {
        "id": "what-are-the-current-limitations",
        "title": "What are the current limitations?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "At launch, Forge has several important limitations."
          },
          {
            "type": "paragraph",
            "html": "First, the model lineup is experimental and may change."
          },
          {
            "type": "paragraph",
            "html": "Second, Forge does not currently support PDF uploads."
          },
          {
            "type": "paragraph",
            "html": "Third, Teams and Enterprise workspaces are not eligible for Forge."
          },
          {
            "type": "paragraph",
            "html": "Fourth, the temporary 50X allocation runs only through October 14, 2026. Bolt has not yet published a permanent post-preview usage policy."
          },
          {
            "type": "paragraph",
            "html": "Fifth, Bolt’s quality claims are based on its own Build Index rather than an independent benchmark."
          }
        ]
      },
      {
        "id": "bolt-forge-vs-standard-and-max",
        "title": "Bolt Forge vs Standard and Max",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The main difference is not simply model quality."
          },
          {
            "type": "paragraph",
            "html": "Forge uses open-weight models and requires an explicit opt-in to the Forge data-sharing/training arrangement. It is designed to provide much more experimental usage during the launch preview."
          },
          {
            "type": "paragraph",
            "html": "Standard and Max use Bolt’s regular premium-agent stack and are not part of Forge training. They remain the safer default for users who do not want to share Forge sessions or who are working on more demanding production projects."
          },
          {
            "type": "paragraph",
            "html": "That means the choice is a three-way trade between cost/usage, model capability and data-sharing preferences."
          }
        ]
      },
      {
        "id": "who-should-use-bolt-forge",
        "title": "Who should use Bolt Forge?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Forge is a strong fit for individual builders who:"
          },
          {
            "type": "list",
            "items": [
              "already use Bolt Pro;",
              "want more room for prototyping and iteration;",
              "are comfortable opting in to anonymized training-data sharing;",
              "want to experiment with open-weight coding models inside a polished app-building environment;",
              "do not need Teams or Enterprise workspace support."
            ]
          },
          {
            "type": "paragraph",
            "html": "It is a weaker fit for users handling highly sensitive code, teams that cannot accept the data-sharing model, or projects where experimental model behavior creates unacceptable production risk."
          }
        ]
      },
      {
        "id": "is-bolt-forge-free",
        "title": "Is Bolt Forge free?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Not as a standalone public free product at launch. Forge is included with individual Pro plans during the preview. Bolt Lite is a lower-cost access route, but access is being distributed in waves rather than opened universally on day one."
          }
        ]
      },
      {
        "id": "does-bolt-forge-train-on-your-code",
        "title": "Does Bolt Forge train on your code?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Only if you switch into Forge and accept the opt-in flow, according to Bolt. Forge sessions can be used for training after Bolt says it removes secrets and personal information and anonymizes the data. Standard and Max sessions are not automatically included in that training arrangement."
          }
        ]
      },
      {
        "id": "what-happens-after-october-14-2026",
        "title": "What happens after October 14, 2026?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt says Forge will continue as an experimental open-model lab. What is not yet defined is the permanent usage allocation and commercial structure after the research-preview promotion ends."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt Forge is one of the more interesting AI-builder launches because it changes both the economics and the data relationship between users and the models they build with."
          },
          {
            "type": "paragraph",
            "html": "The short-term pitch is simple: individual Pro users get a much larger experimental allocation for open-model app building. The longer-term experiment is more consequential: opted-in real-world build sessions are being turned into training data for future open-weight coding models."
          },
          {
            "type": "paragraph",
            "html": "That makes Forge worth watching even for people who do not use Bolt.new. If the approach works, other AI coding and website-building platforms may increasingly offer cheaper open-model tiers in exchange for carefully permissioned training data."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Bolt — Forge launch / documentation",
        "url": "https://bolt.new/blog/what-is-bolt-forge"
      },
      {
        "label": "Bolt — Forge launch / documentation",
        "url": "https://support.bolt.new/"
      },
      {
        "label": "Bolt — Pricing",
        "url": "https://bolt.new/pricing"
      }
    ],
    "relatedPaths": [
      "/blog/bolt-forge-privacy-data-training",
      "/blog/how-to-use-bolt-forge"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Bolt Forge",
    "targetSearchIntent": "Understand Bolt Forge's opt-in data-sharing and training model, what session data may be shared, how anonymization is described, Arcee AI's role, and how Standard/Max differ",
    "targetQuery": "does Bolt Forge train on my code",
    "parentSlug": "bolt-forge",
    "slug": "bolt-forge-privacy-data-training",
    "title": "Bolt Forge Privacy: What Data Is Shared for AI Training?",
    "metaTitle": "Bolt Forge Privacy: What Data Is Shared for AI Training?",
    "metaDescription": "Bolt Forge uses an explicit opt-in data-sharing model. Learn what Bolt says it shares, how anonymization works, Arcee AI’s role and how Standard/Max differ.",
    "h1": "Bolt Forge Privacy: What Data Is Shared, What Gets Trained and How Opt-In Works",
    "excerpt": "Bolt Forge has a different privacy model from Bolt.new’s Standard and Max agents, and that difference is central to how the research preview works.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for Bolt Forge Privacy: What Data Is Shared, What Gets Trained and How Opt-In Works",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt Forge has a different privacy model from Bolt.new’s Standard and Max agents, and that difference is central to how the research preview works."
          },
          {
            "type": "paragraph",
            "html": "Forge gives eligible users a much larger experimental usage allocation, but users who enter Forge explicitly opt in to let anonymized build-session data contribute to training future open-weight models with Arcee AI."
          },
          {
            "type": "paragraph",
            "html": "The key point is that this is not presented by Bolt as automatic training across every Bolt project. The data-sharing arrangement is tied specifically to Forge."
          }
        ]
      },
      {
        "id": "does-bolt-forge-train-on-your-code",
        "title": "Does Bolt Forge train on your code?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt says Forge sessions can be used to help train future open-weight models after the user opts in."
          },
          {
            "type": "paragraph",
            "html": "The shared session data can include prompts, code and fix traces created during the building process."
          },
          {
            "type": "paragraph",
            "html": "That does not mean every piece of code in a Bolt account is automatically used. Bolt states that Standard and Max are outside the Forge training workflow and that users enter Forge through a separate consent step."
          }
        ]
      },
      {
        "id": "is-the-training-opt-in-or-automatic",
        "title": "Is the training opt-in or automatic?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt describes Forge training as opt-in."
          },
          {
            "type": "paragraph",
            "html": "A consent screen appears when a user switches into Forge. Bolt says this happens each time rather than relying on a one-time consent buried in account terms."
          },
          {
            "type": "paragraph",
            "html": "If the user declines, they remain in Standard or Max and nothing from that switch is shared through Forge."
          },
          {
            "type": "paragraph",
            "html": "If the user accepts and builds in Forge, the session can enter the Forge data pipeline."
          }
        ]
      },
      {
        "id": "what-data-can-be-included",
        "title": "What data can be included?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "According to Bolt’s launch documentation, Forge data can include:"
          },
          {
            "type": "list",
            "items": [
              "prompts;",
              "code;",
              "fix traces generated while resolving problems during a build."
            ]
          },
          {
            "type": "paragraph",
            "html": "Those traces are potentially valuable because they show not only the final code but how a user and agent move from an error or incomplete implementation toward a working result."
          },
          {
            "type": "paragraph",
            "html": "Bolt’s rationale is that real build trajectories can teach future coding models patterns that static public repositories do not capture."
          }
        ]
      },
      {
        "id": "what-does-bolt-say-it-removes",
        "title": "What does Bolt say it removes?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt says secrets and personal information are stripped before Forge data leaves its infrastructure and that sessions are anonymized."
          },
          {
            "type": "paragraph",
            "html": "The company also says it validates the process against seeded test data."
          },
          {
            "type": "paragraph",
            "html": "Those are vendor statements about Bolt’s own pipeline. Public launch material does not provide an independent audit demonstrating the effectiveness of every anonymization step, so users with strict confidentiality requirements should evaluate the arrangement according to their own risk and compliance needs."
          }
        ]
      },
      {
        "id": "what-role-does-arcee-ai-play",
        "title": "What role does Arcee AI play?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Arcee AI is the open-model lab working with Bolt on the training side of Forge."
          },
          {
            "type": "paragraph",
            "html": "Bolt says anonymized Forge data is transferred to Arcee under a signed data-processing agreement. The goal is to use real software-building sessions to help train open-weight models."
          },
          {
            "type": "paragraph",
            "html": "Bolt specifically says the partnership is intended to contribute to a trillion-parameter-class open-weight model and that the resulting weights will be published."
          },
          {
            "type": "paragraph",
            "html": "Those future model details should be treated as a stated roadmap until the training run is complete and the weights are actually released."
          }
        ]
      },
      {
        "id": "are-standard-and-max-sessions-used-for-forge-training",
        "title": "Are Standard and Max sessions used for Forge training?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt says no."
          },
          {
            "type": "paragraph",
            "html": "Standard and Max remain separate agents with their existing privacy behavior. Simply being a Bolt customer or switching between Standard, Max and Forge does not mean all work becomes Forge training data."
          },
          {
            "type": "paragraph",
            "html": "The training arrangement begins when the user explicitly enters Forge and accepts its consent flow."
          },
          {
            "type": "paragraph",
            "html": "That separation is one of the most important facts for anyone deciding whether to experiment with Forge."
          }
        ]
      },
      {
        "id": "are-teams-and-enterprise-included",
        "title": "Are Teams and Enterprise included?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No at launch."
          },
          {
            "type": "paragraph",
            "html": "Bolt says Teams and Enterprise workspaces are excluded from Forge and from Forge data collection during the September 2026 research preview."
          },
          {
            "type": "paragraph",
            "html": "This also means Forge is not currently an enterprise privacy option simply because Bolt has enterprise products elsewhere in its platform."
          }
        ]
      },
      {
        "id": "can-you-stop-sharing-later",
        "title": "Can you stop sharing later?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Yes for new sessions: switch back to Standard or Max and you stop creating new Forge training sessions."
          },
          {
            "type": "paragraph",
            "html": "But Bolt makes an important caveat. Data that has already been used to train a model cannot be removed from that trained model after the fact."
          },
          {
            "type": "paragraph",
            "html": "That makes the decision to enter Forge different from a reversible storage preference. A user can stop future sharing, but cannot assume previously trained-on data can later be extracted from model weights."
          }
        ]
      },
      {
        "id": "does-the-50x-usage-depend-on-data-sharing",
        "title": "Does the 50X usage depend on data sharing?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Forge’s launch economics are built around the opt-in research model."
          },
          {
            "type": "paragraph",
            "html": "Bolt gives individual Pro users up to 50X more Forge usage at no extra cost through October 14, 2026 and explicitly frames the shared training data as part of the exchange that makes the research preview possible."
          },
          {
            "type": "paragraph",
            "html": "Users who do not want to participate can stay on Standard or Max rather than enter Forge."
          },
          {
            "type": "paragraph",
            "html": "The exact commercial structure after October 14 is not yet defined."
          }
        ]
      },
      {
        "id": "is-bolt-forge-safe-for-sensitive-proprietary-code",
        "title": "Is Bolt Forge safe for sensitive proprietary code?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "There is no universal answer."
          },
          {
            "type": "paragraph",
            "html": "Bolt says it strips secrets and personal information, anonymizes sessions and uses a signed data-processing agreement with Arcee AI. Those controls reduce risk, but they do not automatically satisfy every company’s confidentiality, contractual, regulatory or security requirements."
          },
          {
            "type": "paragraph",
            "html": "For highly sensitive proprietary code, regulated data or client-confidential projects, users should not rely on a marketing summary alone. Review Bolt’s current legal and privacy documentation and your own obligations before opting in."
          },
          {
            "type": "paragraph",
            "html": "The simplest operational rule is: if a project should not participate in an experimental training-data program, keep that work in Standard or Max rather than Forge."
          }
        ]
      },
      {
        "id": "does-anonymized-mean-fully-risk-free",
        "title": "Does anonymized mean fully risk-free?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No privacy system should be treated as risk-free merely because data is described as anonymized."
          },
          {
            "type": "paragraph",
            "html": "Bolt’s launch page says secrets and personal information are stripped and sessions are anonymized, but it does not publicly provide enough detail to independently measure residual re-identification or proprietary-code risk."
          },
          {
            "type": "paragraph",
            "html": "That does not mean the controls are ineffective. It means the strongest defensible statement is that Bolt says it applies these protections; independent verification is limited in the public launch material."
          }
        ]
      },
      {
        "id": "what-happens-to-the-resulting-models",
        "title": "What happens to the resulting models?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt says the data will help train open-weight models and that the resulting model weights will be published."
          },
          {
            "type": "paragraph",
            "html": "That is an important distinction from a closed internal model. Users who contribute through Forge are helping create models that Bolt says will eventually be downloadable and inspectable by the wider ecosystem."
          },
          {
            "type": "paragraph",
            "html": "The first training run is expected to begin in October 2026. Until those weights are actually released, the publication promise remains forward-looking."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt Forge’s privacy model is deliberately explicit: enter Forge, see the consent screen, opt in, and let anonymized build sessions contribute to open-model training in exchange for much larger experimental usage."
          },
          {
            "type": "paragraph",
            "html": "Standard and Max remain outside that Forge training arrangement, and switching back stops new Forge sharing."
          },
          {
            "type": "paragraph",
            "html": "For casual prototypes and non-sensitive experiments, that trade may be attractive. For proprietary or regulated work, the decision deserves a stricter review because data already incorporated into model training cannot later be pulled back out of the resulting model."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Bolt — Forge launch / documentation",
        "url": "https://bolt.new/blog/what-is-bolt-forge"
      },
      {
        "label": "Bolt — Forge launch / documentation",
        "url": "https://support.bolt.new/"
      },
      {
        "label": "Bolt — Pricing",
        "url": "https://bolt.new/pricing"
      }
    ],
    "relatedPaths": [
      "/blog/bolt-forge",
      "/blog/how-to-use-bolt-forge"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Bolt Forge",
    "targetSearchIntent": "Set up and use Bolt Forge inside Bolt.new, choose an available model, understand the opt-in flow and usage bar, and avoid launch-period limitations",
    "targetQuery": "how to use Bolt Forge",
    "parentSlug": "bolt-forge",
    "slug": "how-to-use-bolt-forge",
    "title": "How to Use Bolt Forge: Access, Models & 50X Usage",
    "metaTitle": "How to Use Bolt Forge: Access, Models & 50X Usage",
    "metaDescription": "Learn how to access Bolt Forge, opt in, choose GLM/Kimi/DeepSeek models, track the 50X usage allocation and avoid current research-preview limits.",
    "h1": "How to Use Bolt Forge: Access, Model Selection and the 50X Usage Preview",
    "excerpt": "Bolt Forge is available as a research-preview agent inside Bolt.new, but using it is different from simply choosing another premium model. Forge has its own eligibility rules, opt-in flow, model lineup, usage meter and privacy tradeoff.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for How to Use Bolt Forge: Access, Model Selection and the 50X Usage Preview",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt Forge is available as a research-preview agent inside Bolt.new, but using it is different from simply choosing another premium model. Forge has its own eligibility rules, opt-in flow, model lineup, usage meter and privacy tradeoff."
          },
          {
            "type": "paragraph",
            "html": "This guide covers the practical workflow for getting into Forge and using it without confusing the temporary launch promotion with Bolt’s normal Standard or Max agents."
          }
        ]
      },
      {
        "id": "who-can-access-bolt-forge",
        "title": "Who can access Bolt Forge?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "At launch on September 14, 2026, Forge is available to individual Bolt Pro users."
          },
          {
            "type": "paragraph",
            "html": "Bolt also announced Bolt Lite as a lower-cost access route, but Lite is being distributed in waves rather than opened to everyone immediately. Bolt says the first Lite seats are expected by September 21, 2026."
          },
          {
            "type": "paragraph",
            "html": "Teams and Enterprise workspaces are excluded from Forge at launch."
          },
          {
            "type": "paragraph",
            "html": "If Forge does not appear in your workspace, the first thing to check is whether you are on an eligible individual account rather than a Teams or Enterprise workspace."
          }
        ]
      },
      {
        "id": "step-1-open-the-agent-picker",
        "title": "Step 1: Open the agent picker",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Inside an eligible Bolt.new project, open the agent picker."
          },
          {
            "type": "paragraph",
            "html": "Forge appears as a third agent alongside Standard and Max. Bolt describes Forge as a separate agent rather than a single model because it can route work through several open-weight models."
          },
          {
            "type": "paragraph",
            "html": "If you are working on an important existing project, duplicate the project before switching. Bolt itself recommends doing this because Forge’s model lineup is experimental."
          }
        ]
      },
      {
        "id": "step-2-choose-forge-and-review-the-opt-in",
        "title": "Step 2: Choose Forge and review the opt-in",
        "blocks": [
          {
            "type": "paragraph",
            "html": "When you switch into Forge, Bolt displays a consent screen."
          },
          {
            "type": "paragraph",
            "html": "This is not a one-time account-wide setting hidden in general terms. Bolt says the consent screen appears each time you enter Forge so the data-sharing tradeoff remains visible."
          },
          {
            "type": "paragraph",
            "html": "If you decline, you stay with Standard or Max and your work is not moved into the Forge training-data workflow."
          },
          {
            "type": "paragraph",
            "html": "If you accept, Forge sessions may be anonymized and used with Arcee AI to help train open-weight models."
          },
          {
            "type": "paragraph",
            "html": "That means the opt-in is part of using Forge, not a separate optional feature after you are already inside it."
          }
        ]
      },
      {
        "id": "step-3-start-with-glm-5-3-flash",
        "title": "Step 3: Start with GLM 5.3 Flash",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt lists GLM 5.3 Flash as the default Forge model at launch."
          },
          {
            "type": "paragraph",
            "html": "For most users, starting with the default is sensible because Bolt specifically notes that some experimental alternatives consume the Forge allowance faster."
          },
          {
            "type": "paragraph",
            "html": "The launch model lineup is:"
          },
          {
            "type": "list",
            "items": [
              "GLM 5.3 Flash — default;",
              "GLM 5.3;",
              "Kimi K3 — experimental;",
              "DeepSeek v4 Pro — experimental."
            ]
          },
          {
            "type": "paragraph",
            "html": "The lineup can change during the research preview, so always check the live agent picker before assuming a model is still available."
          }
        ]
      },
      {
        "id": "step-4-build-as-normal-inside-bolt",
        "title": "Step 4: Build as normal inside Bolt",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once Forge is active, the rest of the experience remains inside Bolt’s existing app-building environment."
          },
          {
            "type": "paragraph",
            "html": "You can prompt the agent to create or modify an app, website or prototype. Bolt says Forge projects still run through WebContainers in the browser, which is part of the cost structure that allows the larger experimental allocation."
          },
          {
            "type": "paragraph",
            "html": "Forge is especially well suited to rough exploration: trying an idea, rebuilding a section, testing several approaches and iterating without consuming the same premium allocation used by Standard or Max."
          }
        ]
      },
      {
        "id": "step-5-watch-the-forge-usage-bar",
        "title": "Step 5: Watch the Forge usage bar",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Forge uses its own monthly usage bar."
          },
          {
            "type": "paragraph",
            "html": "During the preview, Bolt says individual Pro users get up to 50X more Forge usage at no extra cost through October 14, 2026. The bar resets on the user’s normal renewal date."
          },
          {
            "type": "paragraph",
            "html": "There are no daily limits inside that Forge allocation. When it reaches 100%, Bolt says the system switches the user back to Standard rather than charging an automatic Forge overage."
          },
          {
            "type": "paragraph",
            "html": "Forge usage is separate from Standard and Max usage, so experimenting in Forge does not mean the same usage pool is being consumed."
          }
        ]
      },
      {
        "id": "how-model-choice-affects-usage",
        "title": "How model choice affects usage",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Not every Forge model consumes the allowance at the same pace."
          },
          {
            "type": "paragraph",
            "html": "Bolt specifically says Kimi K3 and DeepSeek v4 Pro burn through the Forge allocation faster than the GLM options. The company does not publish a universal per-prompt conversion that lets users calculate an exact cost before every request."
          },
          {
            "type": "paragraph",
            "html": "Because of that, treat the usage bar as the source of truth for your own account rather than trying to infer a fixed token-to-Forge conversion."
          }
        ]
      },
      {
        "id": "when-should-you-use-standard-or-max-instead",
        "title": "When should you use Standard or Max instead?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt recommends keeping complex production work in Standard or Max."
          },
          {
            "type": "paragraph",
            "html": "Forge is experimental. Its strongest use cases are brainstorming, MVPs, prototypes and iterative builds where the extra usage room is valuable."
          },
          {
            "type": "paragraph",
            "html": "Switch back to Standard or Max when:"
          },
          {
            "type": "list",
            "items": [
              "the project is production-critical;",
              "reliability matters more than the larger experimental allowance;",
              "you do not want the current Forge session to enter the opt-in training workflow;",
              "you need functionality that Forge does not yet support."
            ]
          },
          {
            "type": "paragraph",
            "html": "Switching back stops new Forge data sharing for future work, although data already used for model training cannot be removed from a model after the fact."
          }
        ]
      },
      {
        "id": "can-bolt-forge-upload-pdfs",
        "title": "Can Bolt Forge upload PDFs?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Not at launch. Bolt explicitly says Forge cannot take PDF uploads yet."
          },
          {
            "type": "paragraph",
            "html": "If your workflow depends on PDF context, use another supported Bolt path until Forge adds that capability."
          }
        ]
      },
      {
        "id": "why-forge-may-not-be-showing",
        "title": "Why Forge may not be showing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "There are several launch-period reasons Forge may be missing:"
          },
          {
            "type": "list",
            "items": [
              "You are not on an eligible individual Pro account.",
              "You are working in a Teams or Enterprise workspace, which is excluded at launch.",
              "You are waiting for Bolt Lite access, which is being released in waves.",
              "The research-preview rollout or model availability has changed since launch."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "Before troubleshooting further, check Bolt’s live account and agent settings because Forge is explicitly a research preview and access conditions can change quickly."
          }
        ]
      },
      {
        "id": "should-you-duplicate-a-project-before-using-forge",
        "title": "Should you duplicate a project before using Forge?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For serious projects, yes. That recommendation comes directly from Bolt."
          },
          {
            "type": "paragraph",
            "html": "Because Forge’s open models are experimental inside Bolt, duplicating the project gives you a simple rollback path if the agent makes broad changes you do not want to keep."
          }
        ]
      },
      {
        "id": "does-forge-replace-standard-and-max",
        "title": "Does Forge replace Standard and Max?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No. Forge sits beside them."
          },
          {
            "type": "paragraph",
            "html": "You can switch between agents, and Bolt says Standard and Max retain their own allocations and privacy behavior. Forge is best understood as an additional experimental lane rather than a replacement for Bolt’s premium agents."
          }
        ]
      },
      {
        "id": "what-happens-after-october-14-2026",
        "title": "What happens after October 14, 2026?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Bolt says Forge will continue as an experimental open-model lab after the initial research-preview window."
          },
          {
            "type": "paragraph",
            "html": "What is not yet defined is the permanent allocation after the temporary up-to-50X Pro promotion ends. Recheck the live Bolt pricing and Forge documentation before relying on the launch-period allowance for future budgeting."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Using Bolt Forge is straightforward once you understand the access and consent model: choose Forge from the agent picker, review the opt-in, start with the default GLM model, build, and watch the separate Forge usage bar."
          },
          {
            "type": "paragraph",
            "html": "The most important practical rule is to treat Forge as experimental. Duplicate important projects, keep production-critical work in Standard or Max when appropriate, and remember that the large preview allocation is temporary rather than a guaranteed permanent plan feature."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Bolt — Forge launch / documentation",
        "url": "https://bolt.new/blog/what-is-bolt-forge"
      },
      {
        "label": "Bolt — Forge launch / documentation",
        "url": "https://support.bolt.new/"
      },
      {
        "label": "Bolt — Pricing",
        "url": "https://bolt.new/pricing"
      }
    ],
    "relatedPaths": [
      "/blog/bolt-forge",
      "/blog/bolt-forge-privacy-data-training"
    ]
  }
];
