import type { BlogArticle } from "./blog-types.ts";

export const reviewArticles20260914C: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Abacus.AI Smaug (2026)",
    "targetSearchIntent": "Use Smaug Flash through Abacus RouteLLM, understand the verified hosted token price, and distinguish API access from open-weight/self-hosted deployment",
    "targetQuery": "Smaug Flash API",
    "parentSlug": "abacus-ai-smaug-agentic-models",
    "slug": "smaug-flash-api-pricing",
    "title": "Smaug Flash API & Pricing: RouteLLM Setup and Current Costs",
    "metaTitle": "Smaug Flash API & Pricing: RouteLLM Setup and Current Costs",
    "metaDescription": "Smaug Flash is available through Abacus RouteLLM. See the current token pricing, model positioning, API pattern, limits and what is not yet verified.",
    "h1": "Smaug Flash API & Pricing: What Abacus RouteLLM Currently Offers",
    "excerpt": "Smaug Flash is the lower-cost, frequently running agent model in Abacus.AI’s refreshed 2026 Smaug family. It is based on DeepSeek V4 Flash and is currently listed in Abacus RouteLLM with hosted token pricing. This guide focuses on the practical API-access question rather than…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Smaug Flash API & Pricing: What Abacus RouteLLM Currently Offers — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Smaug Flash is the lower-cost, frequently running agent model in Abacus.AI’s refreshed 2026 Smaug family. It is based on DeepSeek V4 Flash and is currently listed in Abacus RouteLLM with hosted token pricing. This guide focuses on the practical API-access question rather than repeating the full Smaug family overview."
          }
        ]
      },
      {
        "id": "is-smaug-flash-available-through-an-api",
        "title": "Is Smaug Flash available through an API?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Yes. Abacus RouteLLM currently lists Smaug Flash in its model catalog. RouteLLM exposes an OpenAI-compatible API pattern, so developers can use an OpenAI SDK pointed at Abacus’s base URL and select an available model from the catalog."
          },
          {
            "type": "paragraph",
            "html": "The key distinction is that hosted API availability and open-weight availability are separate things. The September 10 launch says the refreshed Smaug models are open-weight and will be available on Hugging Face. RouteLLM is a managed hosted path. A self-hosted copy of the weights has its own infrastructure and license considerations and does not use RouteLLM token pricing."
          }
        ]
      },
      {
        "id": "current-smaug-flash-pricing",
        "title": "Current Smaug Flash pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "At the time of this scan, Abacus RouteLLM lists Smaug Flash at:"
          },
          {
            "type": "list",
            "items": [
              "$0.14 per million input tokens",
              "$0.28 per million output tokens"
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Those figures are point-in-time prices for the Abacus-hosted RouteLLM catalog. They should be reverified before publication and should not be presented as a universal price for Smaug Flash on every provider or for self-hosting."
          },
          {
            "type": "paragraph",
            "html": "Abacus’s RouteLLM page also describes access as part of its ChatLLM Teams subscription flow. The page currently advertises a first-month promotional price followed by a monthly subscription. That subscription information can change independently of per-token model pricing, so the article should link to the current RouteLLM page rather than freeze promotional terms into a long-lived claim."
          }
        ]
      },
      {
        "id": "what-is-smaug-flash-based-on",
        "title": "What is Smaug Flash based on?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Smaug Flash is an Abacus.AI agentic fine-tune of DeepSeek V4 Flash. Abacus positions it for continuously running agents that spend much of their time outside code: reading and writing documents, querying data, calling APIs and driving automations."
          },
          {
            "type": "paragraph",
            "html": "The company says the fine-tune changes attention-factor matrices through merged LoRA-derived deltas while keeping the underlying serving compatibility of DeepSeek V4 Flash. Abacus’s open-source page also says the model retains the base model’s 1M-token context."
          }
        ]
      },
      {
        "id": "why-the-api-angle-matters",
        "title": "Why the API angle matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Smaug Agentic, the Kimi K3-derived flagship, is extremely large and is primarily realistic for substantial self-hosted infrastructure or managed deployments. Smaug Flash is the more immediately accessible path for developers who want to test the Smaug agentic tuning idea without operating a frontier-scale cluster."
          },
          {
            "type": "paragraph",
            "html": "That makes the hosted endpoint relevant for workflows such as long-running business agents, document processing, API orchestration, coding assistants and automation systems where token cost accumulates across many agent steps."
          }
        ]
      },
      {
        "id": "openai-compatible-request-pattern",
        "title": "OpenAI-compatible request pattern",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Abacus RouteLLM documents an OpenAI-compatible client pattern. The general setup is to initialize an OpenAI client with the Abacus RouteLLM base URL and an Abacus API key, then send chat-completions requests using a model identifier supported by the catalog."
          },
          {
            "type": "paragraph",
            "html": "Because the public catalog presentation can change, developers should copy the exact current model ID from their authenticated RouteLLM model list or current documentation rather than assuming the display name “Smaug Flash” is always the literal request string. This article should not invent an API model ID that the public page does not explicitly expose."
          }
        ]
      },
      {
        "id": "does-the-0-14-0-28-price-include-everything",
        "title": "Does the $0.14 / $0.28 price include everything?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No universal total-cost claim is justified. Token pricing covers model inference through the hosted offering. A production agent can also incur costs from external APIs, databases, storage, search, messaging services and orchestration infrastructure. Long-running agents may perform dozens or hundreds of turns, so total workflow cost depends heavily on context size, tool results and retry behavior."
          }
        ]
      },
      {
        "id": "how-does-smaug-flash-differ-from-deepseek-v4-flash",
        "title": "How does Smaug Flash differ from DeepSeek V4 Flash?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Abacus says Smaug Flash keeps the base model’s serving architecture while fine-tuning behavior for agent loops. The company reports gains over DeepSeek V4 Flash on LiveBench agentic coding, AutomationBench and NL2Repo-Bench and says the tuning reduces spins and stalls in long-context tool use."
          },
          {
            "type": "paragraph",
            "html": "Those are first-party results. They are evidence of Abacus’s design goal, not independent proof that Smaug Flash will outperform its base model on every workflow. Anyone making a deployment decision should test the models on representative tasks with the same agent scaffold and cost constraints."
          }
        ]
      },
      {
        "id": "is-smaug-flash-open-weight",
        "title": "Is Smaug Flash open-weight?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Abacus’s launch announcement describes all three refreshed Smaug models as open-weight and says they will be downloadable. At the time of this scan, a dedicated indexed Hugging Face model card for Smaug Flash was not independently surfaced in search, while Smaug-Agentic’s card was. Until the final Smaug Flash card is verified, avoid inventing the exact license, quantization options, file formats or self-host hardware requirements."
          }
        ]
      },
      {
        "id": "who-should-test-the-hosted-api-first",
        "title": "Who should test the hosted API first?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest fit is a team evaluating agentic automation but unwilling to provision the infrastructure required by Smaug-Agentic. Smaug Flash is specifically positioned for frequently running loops and has a clear hosted price, making it suitable for controlled comparisons against its DeepSeek base or other inexpensive agent models."
          },
          {
            "type": "paragraph",
            "html": "A sensible evaluation should measure task completion, number of tool calls, retry rate, wall-clock time and total tokens—not only a benchmark score."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "What does Smaug Flash cost?"
          },
          {
            "type": "paragraph",
            "html": "At scan time, Abacus RouteLLM lists $0.14 per million input tokens and $0.28 per million output tokens. Reverify before publication."
          },
          {
            "type": "subheading",
            "text": "Is Smaug Flash the same as DeepSeek V4 Flash?"
          },
          {
            "type": "paragraph",
            "html": "No. Abacus describes it as an agentic fine-tune of DeepSeek V4 Flash, designed to improve long-running tool and automation behavior while preserving base-model serving compatibility."
          },
          {
            "type": "subheading",
            "text": "Is there a public Smaug Flash model ID?"
          },
          {
            "type": "paragraph",
            "html": "The public RouteLLM catalog confirms the hosted model, but this draft does not invent a literal request ID. Use the exact identifier shown by the current authenticated catalog or API docs."
          },
          {
            "type": "subheading",
            "text": "Can I self-host Smaug Flash?"
          },
          {
            "type": "paragraph",
            "html": "Abacus says the refreshed Smaug line is open-weight and describes Smaug Flash as compatible with DeepSeek V4 Flash serving stacks. Exact downloadable artifacts, license and hardware guidance should be confirmed from the final model card before production use."
          },
          {
            "type": "subheading",
            "text": "Are the benchmark gains independently verified?"
          },
          {
            "type": "paragraph",
            "html": "Not yet in the evidence used for this draft. The cited improvements are Abacus-reported results."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "realityengines.ai — open source",
        "url": "https://www.realityengines.ai/open-source"
      },
      {
        "label": "prnewswire.com — abacusai launches the smaug line of open weight models optimized for ent",
        "url": "https://www.prnewswire.com/news-releases/abacusai-launches-the-smaug-line-of-open-weight-models-optimized-for-enterprise-agentic-ai-use-cases-302875524.html"
      },
      {
        "label": "huggingface.co — Smaug Agentic",
        "url": "https://huggingface.co/abacusai/Smaug-Agentic"
      },
      {
        "label": "routellm-apis.abacus.ai — official source",
        "url": "https://routellm-apis.abacus.ai/"
      }
    ],
    "relatedPaths": [
      "/blog/abacus-ai-smaug-agentic-models"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Fairing Advanced Attribution",
    "targetSearchIntent": "Broad overview of Fairing Advanced Attribution, including beta status, adaptive follow-up surveys, creator/podcast/TV/AI attribution, integrations, pricing, setup and limitations",
    "targetQuery": "Fairing Advanced Attribution",
    "slug": "fairing-advanced-attribution",
    "title": "Fairing Advanced Attribution: Pricing, Features & How It Works",
    "metaTitle": "Fairing Advanced Attribution: Pricing, Features & How It Works",
    "metaDescription": "Fairing Advanced Attribution identifies the specific creators, podcasts, TV placements and AI sources behind purchases. See pricing, features, setup and limits.",
    "h1": "Fairing Advanced Attribution Tracks Creators, Podcasts, TV and AI Discovery",
    "excerpt": "Fairing launched Advanced Attribution in beta on September 10, 2026, expanding its post-purchase attribution surveys beyond broad channel labels such as Instagram, YouTube, podcast or AI recommendation. The new product is designed to identify the specific source behind a sale:…",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Fairing Advanced Attribution Tracks Creators, Podcasts, TV and AI Discovery — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing launched Advanced Attribution in beta on September 10, 2026, expanding its post-purchase attribution surveys beyond broad channel labels such as Instagram, YouTube, podcast or AI recommendation. The new product is designed to identify the specific source behind a sale: which creator, which podcast show, which TV placement, or which AI platform or recommendation influenced the purchase."
          }
        ]
      },
      {
        "id": "what-is-fairing-advanced-attribution",
        "title": "What is Fairing Advanced Attribution?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing is best known for asking customers a post-purchase question such as “How did you hear about us?” Advanced Attribution adds adaptive follow-up logic so a broad answer can become a more specific structured attribution record."
          },
          {
            "type": "paragraph",
            "html": "If a customer answers YouTube, the survey can ask where on YouTube and then which creator. If the answer is Podcast, it can ask for the show. If the answer is an influencer or creator, the survey can capture that person rather than leaving the marketing team with only the platform name. Fairing also positions the product for AI-driven discovery, where a customer may have found a brand through ChatGPT or another assistant even though no trackable ad click occurred."
          },
          {
            "type": "paragraph",
            "html": "This is zero-party attribution: the evidence comes from what the customer reports directly. It complements, rather than replaces, click-based analytics, UTMs, platform attribution and modeled measurement."
          }
        ]
      },
      {
        "id": "what-changed-in-the-september-2026-launch",
        "title": "What changed in the September 2026 launch?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The beta introduces three core ideas: adaptive follow-up questions, response-option lists that stay current, and structured records that resolve a vague channel answer into a source marketers can act on."
          },
          {
            "type": "paragraph",
            "html": "Fairing’s documentation describes Managed Auto Suggest Lists for Podcast, YouTube, Influencer and TV. Teams can maintain these centrally and reuse them across questions. Partner data can populate or refresh some lists automatically. Fairing currently documents Podscribe and Agentio as supported sources and says Vibe support is coming soon, so that availability should be rechecked before publication."
          },
          {
            "type": "paragraph",
            "html": "Smart Suggestions for Other also helps turn free-text responses into structured answers by surfacing likely matches as customers type."
          }
        ]
      },
      {
        "id": "why-creator-and-influencer-attribution-matters",
        "title": "Why creator and influencer attribution matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Creator campaigns are difficult to measure when discovery and conversion happen in different places. A person may see an Instagram creator, later search the brand on Google, and finally buy through a direct visit. Conventional last-touch reporting may credit search or direct traffic even though the creator generated the demand."
          },
          {
            "type": "paragraph",
            "html": "Advanced Attribution does not mathematically prove causality, but it can give marketers a direct customer-reported signal about who or what influenced the purchase. That makes it useful for creator, influencer, podcast, TV and other channels where exposure often happens without a trackable click."
          }
        ]
      },
      {
        "id": "how-ai-attribution-works",
        "title": "How AI attribution works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing includes AI recommendation as a discoverable source category. The launch announcement says customers who cite ChatGPT or another AI assistant can be asked what they searched or asked. That creates a potentially useful first-party record for brands trying to understand whether AI assistants are contributing to discovery."
          },
          {
            "type": "paragraph",
            "html": "This should not be confused with server-side referral logs or deterministic AI referral tracking. It is customer-reported attribution and should be interpreted accordingly."
          }
        ]
      },
      {
        "id": "pricing",
        "title": "Pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing’s current pricing page lists Advanced Attribution as a $99/month add-on. Its core Fairing plans remain separate, including a free tier for very low transaction volume and paid plans that scale with monthly transaction volume."
          },
          {
            "type": "paragraph",
            "html": "Because pricing can change and the product is still in beta, the current add-on price should be reverified immediately before publication."
          }
        ]
      },
      {
        "id": "availability",
        "title": "Availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Advanced Attribution launched in beta on September 10, 2026. Fairing’s launch announcement says general availability is planned for January 2027. That date is a company roadmap statement, not a guaranteed release date, so it should be rechecked before the article goes live."
          }
        ]
      },
      {
        "id": "how-setup-works",
        "title": "How setup works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing’s setup documentation currently describes a roughly 10–15 minute configuration process after upgrading. Teams create or populate managed lists, connect those lists to relevant survey questions, enable Smart Suggestions where useful, preview the survey, and then review collected data after responses begin arriving."
          },
          {
            "type": "paragraph",
            "html": "The exact UI can change during beta, so the setup article in this cluster should be reverified against the current product documentation before publication."
          }
        ]
      },
      {
        "id": "what-marketers-get-from-the-structured-record",
        "title": "What marketers get from the structured record",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The goal is to move from an answer like “YouTube” to a record that can include channel, format and creator. For example, a response could resolve into YouTube → creator video → a named creator. That is much more actionable for media buying than a platform-level label alone."
          },
          {
            "type": "paragraph",
            "html": "Fairing also says media lists can stay synchronized with campaign-source partners so active shows and creators can appear in survey suggestions without constant manual editing."
          }
        ]
      },
      {
        "id": "limits-and-caveats",
        "title": "Limits and caveats",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Survey attribution still depends on human memory and self-reporting. Customers can misremember, simplify or omit touchpoints. Response rates may vary. A named source does not prove that the source alone caused the sale. Multi-touch journeys still require broader analytics and judgment."
          },
          {
            "type": "paragraph",
            "html": "Fairing has reported early-rollout improvements in usable attribution signal, but those figures are vendor-reported and should not be presented as independent performance evidence."
          }
        ]
      },
      {
        "id": "who-should-care",
        "title": "Who should care?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest fit is brands and agencies spending meaningful money on creators, podcasts, YouTube, TV or other channels where clicks do not capture the full journey. It is also relevant to teams trying to measure AI-assisted discovery without pretending that every ChatGPT-influenced purchase will arrive with a referral parameter."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When did Fairing Advanced Attribution launch?"
          },
          {
            "type": "paragraph",
            "html": "It launched in beta on September 10, 2026."
          },
          {
            "type": "subheading",
            "text": "How much does it cost?"
          },
          {
            "type": "paragraph",
            "html": "Fairing currently lists Advanced Attribution as a $99/month add-on. Verify the current price before buying because beta pricing can change."
          },
          {
            "type": "subheading",
            "text": "Can it identify individual creators?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Fairing’s adaptive follow-ups and managed lists are designed to resolve broad creator/influencer answers into specific named creators or handles."
          },
          {
            "type": "subheading",
            "text": "Can it track ChatGPT or AI recommendations?"
          },
          {
            "type": "paragraph",
            "html": "It can collect customer-reported AI discovery signals and follow-up detail. That is different from deterministic referral tracking."
          },
          {
            "type": "subheading",
            "text": "Does it replace GA4 or ad-platform attribution?"
          },
          {
            "type": "paragraph",
            "html": "No. It provides a direct customer-reported layer that can be compared with click-based and modeled attribution systems."
          },
          {
            "type": "subheading",
            "text": "Is it generally available?"
          },
          {
            "type": "paragraph",
            "html": "It is currently in beta. Fairing says general availability is planned for January 2027, which should be reverified before publication."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "fairing.co — advanced attribution",
        "url": "https://fairing.co/product/advanced-attribution"
      },
      {
        "label": "docs.fairing.co — about advanced attribution",
        "url": "https://docs.fairing.co/docs/about-advanced-attribution"
      },
      {
        "label": "docs.fairing.co — set up advanced attribution",
        "url": "https://docs.fairing.co/docs/set-up-advanced-attribution"
      },
      {
        "label": "docs.fairing.co — managed auto suggest lists",
        "url": "https://docs.fairing.co/docs/managed-auto-suggest-lists"
      },
      {
        "label": "docs.fairing.co — smart suggestions for other",
        "url": "https://docs.fairing.co/docs/smart-suggestions-for-other"
      },
      {
        "label": "fairing.co — pricing",
        "url": "https://fairing.co/pricing"
      },
      {
        "label": "businesswire.com — en",
        "url": "https://www.businesswire.com/news/home/20260910626022/en/"
      }
    ],
    "relatedPaths": [
      "/blog/fairing-creator-influencer-attribution",
      "/blog/fairing-advanced-attribution-setup"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Fairing Advanced Attribution",
    "targetSearchIntent": "Understand how Fairing Advanced Attribution can identify specific creators and influencer placements behind purchases across non-click customer journeys",
    "targetQuery": "Fairing creator attribution",
    "parentSlug": "fairing-advanced-attribution",
    "slug": "fairing-creator-influencer-attribution",
    "title": "Fairing Creator & Influencer Attribution: Measure Who Drives Sales",
    "metaTitle": "Fairing Creator Attribution: Measure Influencer-Driven Sales",
    "metaDescription": "See how Fairing Advanced Attribution identifies specific creators behind purchases across Instagram, YouTube and other non-click journeys, plus key limitations.",
    "h1": "How Fairing Measures Creator and Influencer Attribution",
    "excerpt": "Creator attribution is one of the hardest parts of influencer marketing because the content that creates demand and the event that records the conversion often happen in different places. Fairing’s Advanced Attribution beta, launched September 10, 2026, is designed to add a di…",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How Fairing Measures Creator and Influencer Attribution — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Creator attribution is one of the hardest parts of influencer marketing because the content that creates demand and the event that records the conversion often happen in different places. Fairing’s Advanced Attribution beta, launched September 10, 2026, is designed to add a direct customer-reported layer to that problem."
          }
        ]
      },
      {
        "id": "the-creator-attribution-gap",
        "title": "The creator attribution gap",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A customer can discover a brand through an Instagram Reel, watch a YouTube creator review, hear a recommendation on a podcast, then return days later through Google or a direct visit. Last-click analytics may credit the final visit while losing the original creator touchpoint."
          },
          {
            "type": "paragraph",
            "html": "Promo codes and affiliate links help, but not every customer clicks or uses the code. Platform lift studies and modeled attribution can add evidence, but they are not always available to smaller brands."
          },
          {
            "type": "paragraph",
            "html": "Fairing approaches the problem differently: ask the customer what influenced them, then go one level deeper than the platform name."
          }
        ]
      },
      {
        "id": "what-advanced-attribution-changes",
        "title": "What Advanced Attribution changes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A standard post-purchase survey might tell you “YouTube” or “Instagram.” Advanced Attribution can use adaptive follow-ups to identify the format and specific creator or source."
          },
          {
            "type": "paragraph",
            "html": "Fairing’s product examples show the survey resolving a broad YouTube response into a creator video and then a creator identity. Its managed source lists are designed to keep creator names and handles available as suggestions so customers do not have to remember exact spelling."
          }
        ]
      },
      {
        "id": "instagram-and-influencer-measurement",
        "title": "Instagram and influencer measurement",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing’s Influencer managed list can cover creator identities across Instagram, TikTok and Facebook. That makes it possible to maintain one centralized creator list rather than duplicating the same names across several channel-specific questions."
          },
          {
            "type": "paragraph",
            "html": "For a brand running both paid ads and creators on Instagram, the follow-up logic can distinguish the broad source and then capture a creator when relevant. This can help separate “I saw a Meta ad” from “I saw this creator’s post,” even though both happened on the same platform."
          }
        ]
      },
      {
        "id": "youtube-creator-attribution",
        "title": "YouTube creator attribution",
        "blocks": [
          {
            "type": "paragraph",
            "html": "YouTube can contain paid ads, organic creator videos, sponsorships and branded content. Fairing’s adaptive survey can ask where on YouTube the customer discovered the brand, then identify the creator when the creator path is selected."
          },
          {
            "type": "paragraph",
            "html": "That is more useful than a single “YouTube” bucket when the actual business decision is whether to renew or expand a relationship with a specific creator."
          }
        ]
      },
      {
        "id": "how-the-data-should-be-used",
        "title": "How the data should be used",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Treat the customer-reported creator as evidence, not proof of sole causality. Compare it with affiliate links, codes, UTMs, creator posting dates, branded-search movement, platform analytics and revenue trends."
          },
          {
            "type": "paragraph",
            "html": "The strongest use is often budget allocation: if named-creator responses repeatedly appear alongside healthy conversion and revenue outcomes, the marketing team has another signal supporting the creator’s contribution."
          }
        ]
      },
      {
        "id": "where-managed-lists-help",
        "title": "Where managed lists help",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Creator rosters change quickly. Managed Auto Suggest Lists let teams maintain creator names and handles centrally. Fairing documents partner-driven syncing with Agentio for creators, while other campaign-source integrations cover additional media types."
          },
          {
            "type": "paragraph",
            "html": "This reduces the risk that a new creator campaign launches while the survey still shows last month’s roster."
          }
        ]
      },
      {
        "id": "what-fairing-cannot-prove",
        "title": "What Fairing cannot prove",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A survey cannot reconstruct every touchpoint with certainty. Customers may remember the most distinctive creator rather than the first one. They may have been exposed to several creators. They may incorrectly attribute discovery. And a named creator response does not automatically measure incrementality."
          },
          {
            "type": "paragraph",
            "html": "For that reason, Advanced Attribution should sit beside—not replace—platform reporting, experimentation and broader analytics."
          }
        ]
      },
      {
        "id": "ai-discovery-creates-a-similar-problem",
        "title": "AI discovery creates a similar problem",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The same measurement gap is appearing with AI assistants. A customer can ask ChatGPT for a recommendation, later search a brand and purchase without a conventional referral click. Fairing’s new product can collect customer-reported AI discovery in a similar way."
          },
          {
            "type": "paragraph",
            "html": "That parallel makes Advanced Attribution especially relevant as discovery fragments across creators and AI surfaces that do not always send clean clickstream data."
          }
        ]
      },
      {
        "id": "who-should-use-it",
        "title": "Who should use it?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The clearest fit is brands and agencies making meaningful creator spend decisions and needing more granular evidence than a platform-level post-purchase answer. It is less compelling when creator marketing is tiny, every conversion already uses deterministic affiliate links, or there is not enough purchase volume to interpret survey patterns responsibly."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Can Fairing identify a specific influencer?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Advanced Attribution is designed to collect the creator name or handle through adaptive follow-ups and managed lists."
          },
          {
            "type": "subheading",
            "text": "Does it work for Instagram creators?"
          },
          {
            "type": "paragraph",
            "html": "Fairing’s Influencer list is designed to span platforms including Instagram, TikTok and Facebook."
          },
          {
            "type": "subheading",
            "text": "Does Fairing prove a creator caused the sale?"
          },
          {
            "type": "paragraph",
            "html": "No. It captures the customer’s reported influence. That should be compared with other measurement evidence."
          },
          {
            "type": "subheading",
            "text": "Is this only for influencers?"
          },
          {
            "type": "paragraph",
            "html": "No. Advanced Attribution also targets podcasts, YouTube, TV and AI-assisted discovery."
          },
          {
            "type": "subheading",
            "text": "Is creator attribution included in standard Fairing pricing?"
          },
          {
            "type": "paragraph",
            "html": "Advanced Attribution is currently listed as a separate $99/month add-on, so verify the latest pricing before purchase."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "fairing.co — advanced attribution",
        "url": "https://fairing.co/product/advanced-attribution"
      },
      {
        "label": "docs.fairing.co — about advanced attribution",
        "url": "https://docs.fairing.co/docs/about-advanced-attribution"
      },
      {
        "label": "docs.fairing.co — set up advanced attribution",
        "url": "https://docs.fairing.co/docs/set-up-advanced-attribution"
      },
      {
        "label": "docs.fairing.co — managed auto suggest lists",
        "url": "https://docs.fairing.co/docs/managed-auto-suggest-lists"
      },
      {
        "label": "docs.fairing.co — smart suggestions for other",
        "url": "https://docs.fairing.co/docs/smart-suggestions-for-other"
      },
      {
        "label": "fairing.co — pricing",
        "url": "https://fairing.co/pricing"
      },
      {
        "label": "businesswire.com — en",
        "url": "https://www.businesswire.com/news/home/20260910626022/en/"
      }
    ],
    "relatedPaths": [
      "/blog/fairing-advanced-attribution"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Fairing Advanced Attribution",
    "targetSearchIntent": "Practical setup guide for configuring Fairing Advanced Attribution, including managed auto-suggest lists, adaptive follow-ups, Smart Suggestions, partner source syncs and validation",
    "targetQuery": "how to set up Fairing Advanced Attribution",
    "parentSlug": "fairing-advanced-attribution",
    "slug": "fairing-advanced-attribution-setup",
    "title": "How to Set Up Fairing Advanced Attribution",
    "metaTitle": "How to Set Up Fairing Advanced Attribution",
    "metaDescription": "Set up Fairing Advanced Attribution with managed source lists, adaptive follow-ups, Smart Suggestions and campaign-source syncing. Practical beta guide.",
    "h1": "How to Set Up Fairing Advanced Attribution",
    "excerpt": "Fairing Advanced Attribution is designed to turn broad post-purchase answers such as YouTube, Podcast, Influencer or AI recommendation into more specific, structured attribution records. The beta launched September 10, 2026, and Fairing currently documents a setup process cent…",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Set Up Fairing Advanced Attribution — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing Advanced Attribution is designed to turn broad post-purchase answers such as YouTube, Podcast, Influencer or AI recommendation into more specific, structured attribution records. The beta launched September 10, 2026, and Fairing currently documents a setup process centered on managed source lists, adaptive follow-ups and Smart Suggestions."
          }
        ]
      },
      {
        "id": "before-you-start",
        "title": "Before you start",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Advanced Attribution is an add-on to Fairing rather than a standalone analytics product. Fairing currently lists it at $99/month. You need an eligible Fairing account and the feature enabled before the Advanced Attribution controls appear."
          },
          {
            "type": "paragraph",
            "html": "Because the product is in beta, names, integrations and UI details can change. Use this workflow as a current guide and verify the latest Fairing documentation before rollout."
          }
        ]
      },
      {
        "id": "step-1-decide-which-hard-to-measure-sources-matter",
        "title": "Step 1: Decide which hard-to-measure sources matter",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start with channels where platform analytics and UTMs routinely miss the original demand source. Fairing’s current managed-list categories include Podcast, YouTube, Influencer and TV. Creator-led teams should usually prioritize YouTube and Influencer lists first."
          },
          {
            "type": "paragraph",
            "html": "The objective is not to add more survey questions everywhere. It is to ask a useful follow-up only when the customer’s first answer is too broad to support a spending decision."
          }
        ]
      },
      {
        "id": "step-2-populate-managed-auto-suggest-lists",
        "title": "Step 2: Populate Managed Auto Suggest Lists",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing provides centralized Managed Auto Suggest Lists. Instead of manually maintaining the same creator or show names in multiple questions, the list can be updated once and reused."
          },
          {
            "type": "paragraph",
            "html": "Fairing documents Podcast, YouTube, Influencer and TV lists. The Influencer list can cover creators across channels such as Instagram, TikTok and Facebook. Teams can add entries manually or, for supported sources, connect campaign-source partners."
          }
        ]
      },
      {
        "id": "step-3-connect-campaign-source-partners-where-available",
        "title": "Step 3: Connect campaign-source partners where available",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing currently documents Podscribe and Agentio as sources that can populate relevant managed lists. Its documentation describes Vibe as coming soon, so do not assume Vibe syncing is live for every account yet."
          },
          {
            "type": "paragraph",
            "html": "Automatic syncing matters because creator rosters and media plans change. If a new creator is added to a campaign, the survey response list should ideally reflect that without someone remembering to edit multiple questions."
          }
        ]
      },
      {
        "id": "step-4-attach-lists-to-the-right-follow-up-questions",
        "title": "Step 4: Attach lists to the right follow-up questions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Open the relevant auto-suggest question and connect one or more managed lists. A list can feed multiple questions, and a question can draw from multiple lists."
          },
          {
            "type": "paragraph",
            "html": "For example, a YouTube response can trigger a follow-up that asks whether the customer saw a creator video, ad or other source, followed by the creator name where appropriate."
          },
          {
            "type": "paragraph",
            "html": "Keep the flow short. Every additional question adds friction, so only collect detail that will change a reporting or media-buying decision."
          }
        ]
      },
      {
        "id": "step-5-enable-smart-suggestions-for-other",
        "title": "Step 5: Enable Smart Suggestions for Other",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing’s Smart Suggestions feature helps convert free-text “Other” answers into structured responses."
          },
          {
            "type": "paragraph",
            "html": "At the top-level question, suggestions can surface existing response options as the customer types. On a follow-up question, a managed list can be attached to the Other field so a creator or show name can be suggested without forcing the customer through another separate question."
          },
          {
            "type": "paragraph",
            "html": "Customers can still submit free text if no suggestion fits."
          }
        ]
      },
      {
        "id": "step-6-preview-the-survey",
        "title": "Step 6: Preview the survey",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before sending traffic through the new flow, preview it and test several realistic journeys: creator discovery, paid ad, podcast, direct recommendation and AI assistant discovery."
          },
          {
            "type": "paragraph",
            "html": "Check that the follow-up sequence makes sense, the correct source list appears, and the customer can finish without unnecessary steps."
          }
        ]
      },
      {
        "id": "step-7-validate-the-structured-output",
        "title": "Step 7: Validate the structured output",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The point of Advanced Attribution is not merely prettier survey responses. It is to produce records you can use in reporting and decisions."
          },
          {
            "type": "paragraph",
            "html": "Check whether responses resolve into useful fields such as channel, format and specific creator/show/source. Compare that data with UTMs, promo codes, platform reports and GA4 rather than treating any one measurement source as perfect truth."
          }
        ]
      },
      {
        "id": "step-8-review-the-data-after-launch",
        "title": "Step 8: Review the data after launch",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fairing’s setup guide recommends checking Analytics after responses begin accumulating. Look for whether fewer useful responses are falling into an unstructured Other bucket and whether named creators or shows are being captured consistently."
          },
          {
            "type": "paragraph",
            "html": "Do not optimize on tiny samples. Post-purchase survey data is directional and self-reported; it becomes more useful when compared over time and against other attribution systems."
          }
        ]
      },
      {
        "id": "common-setup-mistakes",
        "title": "Common setup mistakes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Avoid creating huge stale creator lists, asking unnecessary follow-ups, treating AI recommendation as deterministic referral tracking, or assuming every customer remembers the full journey accurately. Also verify integration status during beta rather than relying on launch-day screenshots."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "How long does setup take?"
          },
          {
            "type": "paragraph",
            "html": "Fairing’s current documentation says setup can take about 10–15 minutes, though real implementation time depends on your questions, source lists and integrations."
          },
          {
            "type": "subheading",
            "text": "Can one creator list work across multiple channels?"
          },
          {
            "type": "paragraph",
            "html": "Fairing’s Influencer list is designed to cover creator identities across channels such as Instagram, TikTok and Facebook."
          },
          {
            "type": "subheading",
            "text": "Can lists update automatically?"
          },
          {
            "type": "paragraph",
            "html": "Some can. Fairing documents campaign-source syncing with partners such as Podscribe and Agentio. Recheck Vibe and other integrations because availability is evolving."
          },
          {
            "type": "subheading",
            "text": "Should Advanced Attribution replace UTMs?"
          },
          {
            "type": "paragraph",
            "html": "No. It should be compared with UTMs, platform attribution and analytics as an additional customer-reported layer."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "fairing.co — advanced attribution",
        "url": "https://fairing.co/product/advanced-attribution"
      },
      {
        "label": "docs.fairing.co — about advanced attribution",
        "url": "https://docs.fairing.co/docs/about-advanced-attribution"
      },
      {
        "label": "docs.fairing.co — set up advanced attribution",
        "url": "https://docs.fairing.co/docs/set-up-advanced-attribution"
      },
      {
        "label": "docs.fairing.co — managed auto suggest lists",
        "url": "https://docs.fairing.co/docs/managed-auto-suggest-lists"
      },
      {
        "label": "docs.fairing.co — smart suggestions for other",
        "url": "https://docs.fairing.co/docs/smart-suggestions-for-other"
      },
      {
        "label": "fairing.co — pricing",
        "url": "https://fairing.co/pricing"
      },
      {
        "label": "businesswire.com — en",
        "url": "https://www.businesswire.com/news/home/20260910626022/en/"
      }
    ],
    "relatedPaths": [
      "/blog/fairing-advanced-attribution"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "GPT-Live-1",
    "targetSearchIntent": "Understand GPT-Live-1, its API launch, capabilities, pricing, availability and practical use cases",
    "targetQuery": "GPT-Live-1",
    "slug": "gpt-live-1",
    "title": "GPT-Live-1 API: Pricing, Features & How It Works",
    "metaTitle": "GPT-Live-1 API: Pricing, Features & How It Works",
    "metaDescription": "GPT-Live-1 is OpenAI's full-duplex voice model for the API. See current pricing, features, telephony support, delegation, availability and limitations.",
    "h1": "GPT-Live-1 API: Pricing, Features and How It Works",
    "excerpt": "OpenAI released GPT-Live-1 in the API on September 10, 2026, turning the full-duplex voice technology already used in ChatGPT Voice into a developer-facing building block for apps, phone agents and business workflows.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "GPT-Live-1 API: Pricing, Features and How It Works — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI released GPT-Live-1 in the API on September 10, 2026, turning the full-duplex voice technology already used in ChatGPT Voice into a developer-facing building block for apps, phone agents and business workflows."
          }
        ]
      },
      {
        "id": "what-is-gpt-live-1",
        "title": "What is GPT-Live-1?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-Live-1 is a voice model designed for continuous conversation. It can listen while it speaks instead of forcing every interaction into strict user-turn/assistant-turn boundaries. That matters for interruptions, short acknowledgements, hesitation, background speech and other behavior that makes real conversations difficult for conventional voice-agent pipelines."
          },
          {
            "type": "paragraph",
            "html": "OpenAI separates the live conversation layer from deeper reasoning. GPT-Live-1 can handle the spoken interaction while delegating reasoning or tool calls to a backend text model selected by the developer. This means GPT-Live-1 should not be understood as a replacement for every model behind an agent. It is the real-time voice layer that can work with a reasoning model, tools and an agent harness."
          }
        ]
      },
      {
        "id": "what-changed-with-the-september-api-launch",
        "title": "What changed with the September API launch?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-Live itself debuted in ChatGPT Voice on July 8, 2026. The September 10 announcement is a separate material event because GPT-Live-1 is now available directly through the OpenAI API for developers."
          },
          {
            "type": "paragraph",
            "html": "OpenAI highlights several capabilities for the API release: simultaneous listening and speaking, smoother interruption handling, prompt-controlled tone and pace, better handling of silence and background noise, improved long-session reliability, native ASR transcripts and response text, keyword biasing, turn detection, and telephony support."
          }
        ]
      },
      {
        "id": "gpt-live-1-pricing",
        "title": "GPT-Live-1 pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI currently lists GPT-Live-1 at $0.05 per minute for the front-end voice layer."
          },
          {
            "type": "paragraph",
            "html": "That is not necessarily the full cost of a production voice agent. A developer may also pay for the backend reasoning model, tools or external APIs, agent infrastructure and any telephony provider used to place or receive phone calls. A useful cost estimate therefore needs to separate the GPT-Live-1 voice-layer charge from the rest of the stack."
          },
          {
            "type": "paragraph",
            "html": "Custom voice access is not presented as a self-serve feature in the launch announcement; OpenAI directs interested customers to contact sales."
          }
        ]
      },
      {
        "id": "how-gpt-live-1-works",
        "title": "How GPT-Live-1 works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Traditional voice agents often chain speech-to-text, a language model and text-to-speech. GPT-Live-1 handles listening and speaking inside one continuous voice layer. It can respond to an interruption or acknowledgement while deeper work is delegated to another model."
          },
          {
            "type": "paragraph",
            "html": "OpenAI says developers can choose the backend model and tools that fit a task. A high-volume scheduling workflow might prioritize speed and cost, while a difficult support request could delegate to a stronger reasoning model. OpenAI also published an example in which conversation context is passed to Codex and its answer is returned to GPT-Live-1; the example intentionally omits connection setup and delegation handling, so it should not be treated as a complete integration tutorial."
          }
        ]
      },
      {
        "id": "connection-and-telephony-options",
        "title": "Connection and telephony options",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Live documentation organizes implementation around real-time connections including WebRTC, WebSockets and telephony/SIP. The right transport depends on where the agent runs: browser and client experiences often favor WebRTC, server-side applications can use WebSockets, and phone-agent workflows can use the telephony/SIP path."
          }
        ]
      },
      {
        "id": "where-gpt-live-1-may-be-useful",
        "title": "Where GPT-Live-1 may be useful",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The clearest use cases are experiences where conversational timing matters: customer support, restaurant reservations and ordering, appointment workflows, tutoring and language practice, hands-free assistants, and voice interfaces for agentic or coding systems."
          },
          {
            "type": "paragraph",
            "html": "For agencies and business teams, the important change is that a natural voice interface can sit in front of existing tools and reasoning systems instead of requiring the entire business workflow to live inside one voice model."
          }
        ]
      },
      {
        "id": "benchmarks-what-openai-claims",
        "title": "Benchmarks: what OpenAI claims",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI reports that GPT-Live-1 improves Full Duplex Bench performance by 30 percentage points over GPT-Realtime-2.1. It also says a GPT-Live-1 system paired with GPT-6 Astra at medium reasoning effort ranks first on its cited Tau3 evaluation."
          },
          {
            "type": "paragraph",
            "html": "These are first-party OpenAI evaluation claims. They are useful evidence about what the company optimized for, but they should not be treated as independent benchmark validation until third parties reproduce comparable tests."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The $0.05/minute figure covers the front-end voice layer, not every component in an agent. Exact GPT-Live-1 rate limits were not established from the launch announcement. Custom voice access is gated through sales. OpenAI says voice and language options will continue expanding, which means availability details can change. Production teams should also validate latency, transcription accuracy, interruption behavior, tool-call reliability, privacy requirements and total operating cost in their own environment."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is GPT-Live-1 available in the API?"
          },
          {
            "type": "paragraph",
            "html": "Yes. OpenAI announced API availability on September 10, 2026."
          },
          {
            "type": "subheading",
            "text": "How much does GPT-Live-1 cost?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI lists the front-end voice layer at $0.05 per minute. Backend models, tools, infrastructure and telephony can add separate costs."
          },
          {
            "type": "subheading",
            "text": "Can GPT-Live-1 handle interruptions?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Full-duplex interruption handling is one of the central capabilities highlighted by OpenAI."
          },
          {
            "type": "subheading",
            "text": "Can GPT-Live-1 call tools?"
          },
          {
            "type": "paragraph",
            "html": "GPT-Live-1 can delegate deeper reasoning and tool use to a paired backend model and agent system. The exact architecture is controlled by the developer."
          },
          {
            "type": "subheading",
            "text": "Does GPT-Live-1 work for phone agents?"
          },
          {
            "type": "paragraph",
            "html": "OpenAI explicitly documents telephony support, and its Live documentation includes telephony/SIP connection paths."
          },
          {
            "type": "subheading",
            "text": "Is GPT-Live-1 the same launch as GPT-Live in ChatGPT?"
          },
          {
            "type": "paragraph",
            "html": "No. GPT-Live was introduced in ChatGPT Voice in July 2026. September 10 marks the materially new developer/API availability event."
          }
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's September 10 GPT-Live-1 API announcement, OpenAI Live developer documentation, and the July GPT-Live launch announcement are the primary sources for this article."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — introducing gpt live 1 in the api",
        "url": "https://openai.com/index/introducing-gpt-live-1-in-the-api/"
      },
      {
        "label": "developers.openai.com — live",
        "url": "https://developers.openai.com/api/docs/guides/live"
      },
      {
        "label": "openai.com — introducing gpt live",
        "url": "https://openai.com/index/introducing-gpt-live/"
      }
    ],
    "relatedPaths": [
      "/blog/gpt-live-1-api-guide",
      "/blog/gpt-live-1-telephony-voice-agents"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "GPT-Live-1",
    "targetSearchIntent": "Implement GPT-Live-1 as a real-time voice layer and connect it to backend reasoning and tools",
    "targetQuery": "GPT-Live-1 API",
    "parentSlug": "gpt-live-1",
    "slug": "gpt-live-1-api-guide",
    "title": "How to Use GPT-Live-1 API: WebRTC, WebSocket & Delegation",
    "metaTitle": "How to Use GPT-Live-1 API: WebRTC, WebSocket & Delegation",
    "metaDescription": "A practical GPT-Live-1 API guide covering connection choices, prompts, transcripts, turn handling, backend delegation, testing and production cost.",
    "h1": "How to Use GPT-Live-1 API: WebRTC, WebSocket and Delegation",
    "excerpt": "GPT-Live-1 is designed to be the real-time conversation layer of a voice application. A production implementation is easier to reason about when you separate three jobs: carrying live audio, managing conversation behavior, and delegating deeper work to models and tools.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Use GPT-Live-1 API: WebRTC, WebSocket and Delegation — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-Live-1 is designed to be the real-time conversation layer of a voice application. A production implementation is easier to reason about when you separate three jobs: carrying live audio, managing conversation behavior, and delegating deeper work to models and tools."
          }
        ]
      },
      {
        "id": "1-start-with-the-architecture",
        "title": "1. Start with the architecture",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A useful mental model is:"
          },
          {
            "type": "paragraph",
            "html": "User audio &lt;-&gt; GPT-Live-1 &lt;-&gt; backend reasoning model/tools &lt;-&gt; business systems."
          },
          {
            "type": "paragraph",
            "html": "GPT-Live-1 handles the continuous spoken interaction. The backend can handle search, difficult reasoning, database actions or other tool calls. This separation is central to OpenAI's API positioning and prevents a common mistake: assuming every business decision must happen inside the voice layer itself."
          }
        ]
      },
      {
        "id": "2-choose-the-connection-path",
        "title": "2. Choose the connection path",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's Live documentation exposes real-time connection paths including WebRTC, WebSockets and telephony/SIP."
          },
          {
            "type": "paragraph",
            "html": "Use the transport that fits the application rather than choosing based on novelty. WebRTC is a natural fit for interactive client/browser experiences. WebSockets are useful for server-controlled real-time sessions. Telephony/SIP is the relevant path for phone-call agents."
          },
          {
            "type": "paragraph",
            "html": "Implementation details can evolve, so developers should use the current OpenAI Live documentation as the authoritative reference for authentication, session creation and event schemas rather than copying old Realtime examples unchanged."
          }
        ]
      },
      {
        "id": "3-define-the-conversational-behavior",
        "title": "3. Define the conversational behavior",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI says GPT-Live-1's tone, pace and conversational style can be shaped through the system prompt. A good voice-agent prompt should define the role, speaking style, what the agent is allowed to do, when it should ask for clarification, when it should stay quiet, and when it must escalate to a human or backend process."
          },
          {
            "type": "paragraph",
            "html": "Voice prompts should also be designed for spoken output. Long paragraphs, excessive caveats and visually structured responses may work in text but sound unnatural when read aloud."
          }
        ]
      },
      {
        "id": "4-use-native-transcript-and-response-text",
        "title": "4. Use native transcript and response text",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-Live-1 natively provides ASR transcripts and response text. That is useful for logging, downstream reasoning, quality review and passing context into other systems. OpenAI also documents keyword biasing, which can help applications emphasize domain terms, names or alphanumeric strings."
          },
          {
            "type": "paragraph",
            "html": "Do not treat a transcript as guaranteed ground truth. Production systems should still test names, numbers, addresses and domain-specific terms that carry operational risk."
          }
        ]
      },
      {
        "id": "5-decide-how-turns-and-interruptions-work",
        "title": "5. Decide how turns and interruptions work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-Live-1 is full duplex rather than fundamentally turn-based, but OpenAI says it still supports turn detection. This gives developers flexibility: a user can interrupt naturally while the application can still reason about explicit boundaries when workflows require them."
          },
          {
            "type": "paragraph",
            "html": "Test pauses, acknowledgements, people talking in the background, self-corrections and mid-sentence interruptions. These situations are exactly where a real-time voice system can behave differently from a conventional chatbot."
          }
        ]
      },
      {
        "id": "6-delegate-deeper-work",
        "title": "6. Delegate deeper work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "When a task needs deeper reasoning or an action, GPT-Live-1 can delegate to a backend text model or tool system. The backend might check an order, search a knowledge base, update a CRM, calculate something, or perform a multi-step agent task while the voice layer keeps the interaction coherent."
          },
          {
            "type": "paragraph",
            "html": "OpenAI's launch page includes an example that sends conversational context to Codex and returns a short spoken answer to GPT-Live-1. OpenAI explicitly notes that connection setup and delegation handling are omitted, so use it as an architecture example rather than a complete copy-paste integration."
          }
        ]
      },
      {
        "id": "7-design-for-cost-explicitly",
        "title": "7. Design for cost explicitly",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI currently prices the GPT-Live-1 front-end voice layer at $0.05 per minute. A production cost model should separately account for backend model usage, external tools/APIs, infrastructure and telephony where relevant."
          },
          {
            "type": "paragraph",
            "html": "A simple budgeting formula is therefore: voice-layer minutes + backend reasoning usage + tools/services + communications infrastructure. Do not multiply $0.05 by call minutes and label the result the total agent cost unless those other components are genuinely zero."
          }
        ]
      },
      {
        "id": "8-test-the-conditions-that-matter-in-production",
        "title": "8. Test the conditions that matter in production",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before launch, test interruption recovery, silence, noisy environments, long sessions, domain vocabulary, tool failures, user corrections, latency, escalation, and what happens when the backend takes longer than expected."
          },
          {
            "type": "paragraph",
            "html": "OpenAI emphasizes background-noise handling and long-session reliability, but those are vendor claims about the product. Your own traffic and acoustic environment remain the meaningful production benchmark."
          }
        ]
      },
      {
        "id": "production-checklist",
        "title": "Production checklist",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Use the current Live API documentation for the transport and event model.",
              "Keep API credentials on the appropriate trusted side of the application.",
              "Define explicit agent permissions and escalation rules.",
              "Test domain terminology and alphanumeric data.",
              "Log enough transcript/tool information for debugging while respecting privacy requirements.",
              "Budget the voice layer and backend separately.",
              "Re-test interruption and latency behavior on real devices/networks.",
              "Reverify current pricing and limits before a public launch."
            ],
            "ordered": false
          }
        ]
      },
      {
        "id": "when-to-use-a-different-approach",
        "title": "When to use a different approach",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-Live-1 is compelling when natural two-way interaction is important. A simpler transcription -&gt; text model -&gt; speech pipeline may still make sense when strict turn-taking is acceptable, when you need independent control over every speech component, or when your economics and latency targets favor a different architecture."
          },
          {
            "type": "paragraph",
            "html": "The API release makes full-duplex voice a practical developer option, but architecture should still follow the job rather than the model name."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — introducing gpt live 1 in the api",
        "url": "https://openai.com/index/introducing-gpt-live-1-in-the-api/"
      },
      {
        "label": "developers.openai.com — live",
        "url": "https://developers.openai.com/api/docs/guides/live"
      },
      {
        "label": "openai.com — introducing gpt live",
        "url": "https://openai.com/index/introducing-gpt-live/"
      }
    ],
    "relatedPaths": [
      "/blog/gpt-live-1"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "GPT-Live-1",
    "targetSearchIntent": "Design and evaluate a phone-call voice agent using GPT-Live-1 telephony/SIP support",
    "targetQuery": "GPT-Live-1 telephony",
    "parentSlug": "gpt-live-1",
    "slug": "gpt-live-1-telephony-voice-agents",
    "title": "GPT-Live-1 Telephony & SIP Voice Agents: Architecture Guide",
    "metaTitle": "GPT-Live-1 Telephony & SIP Voice Agents: Architecture Guide",
    "metaDescription": "How GPT-Live-1 fits into phone agents: telephony/SIP architecture, backend delegation, interruption handling, costs, testing and production caveats.",
    "h1": "GPT-Live-1 Telephony and SIP Voice Agents: Architecture Guide",
    "excerpt": "OpenAI's GPT-Live-1 API launch makes telephony one of the clearest business uses for its full-duplex voice model. OpenAI explicitly cites phone workflows such as restaurant reservations and customer support and exposes telephony/SIP as part of its Live developer surface.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "GPT-Live-1 Telephony and SIP Voice Agents: Architecture Guide — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI's GPT-Live-1 API launch makes telephony one of the clearest business uses for its full-duplex voice model. OpenAI explicitly cites phone workflows such as restaurant reservations and customer support and exposes telephony/SIP as part of its Live developer surface."
          },
          {
            "type": "paragraph",
            "html": "That does not mean GPT-Live-1 is a complete call-center product by itself. It is best understood as the live conversational layer inside a larger phone-agent system."
          }
        ]
      },
      {
        "id": "reference-architecture",
        "title": "Reference architecture",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A practical architecture is:"
          },
          {
            "type": "paragraph",
            "html": "Caller &lt;-&gt; phone/SIP connection &lt;-&gt; GPT-Live-1 &lt;-&gt; backend reasoning + tools &lt;-&gt; business systems."
          },
          {
            "type": "paragraph",
            "html": "The phone layer gets audio into and out of the application. GPT-Live-1 manages the continuous conversation. A backend model and tools handle jobs such as checking availability, retrieving customer information, creating a booking, updating an order, or deciding that a human should take over."
          },
          {
            "type": "paragraph",
            "html": "This separation is useful because the model that produces a natural spoken interaction does not have to be the same component performing every high-stakes action."
          }
        ]
      },
      {
        "id": "why-full-duplex-matters-on-a-phone-call",
        "title": "Why full duplex matters on a phone call",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Phone conversations are full of interruptions, pauses and acknowledgements. A caller may say 'actually, make that Friday' while an agent is speaking, pause to check information, or respond with a short 'yeah' without intending to take over the entire turn."
          },
          {
            "type": "paragraph",
            "html": "OpenAI says GPT-Live-1 continuously reasons over incoming and outgoing audio, improving interruption handling compared with chained speech-to-text, language-model and text-to-speech systems. That is a vendor claim, but it identifies the key behavior teams should test in a phone deployment."
          }
        ]
      },
      {
        "id": "delegate-business-actions-instead-of-stuffing-them-into-the-prompt",
        "title": "Delegate business actions instead of stuffing them into the prompt",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A phone agent usually needs more than conversation. It may need to query inventory, search a knowledge base, book an appointment, update a CRM, create a ticket or issue a handoff."
          },
          {
            "type": "paragraph",
            "html": "GPT-Live-1 can delegate reasoning and tool calls to a backend model or agent harness. Keep permissions explicit. The voice layer can gather intent and maintain the conversation while the backend checks the real system of record and returns the result."
          },
          {
            "type": "paragraph",
            "html": "For irreversible or sensitive actions, add confirmation and authorization rules rather than assuming conversational fluency equals operational correctness."
          }
        ]
      },
      {
        "id": "prompt-for-spoken-behavior",
        "title": "Prompt for spoken behavior",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Define the agent's role and boundaries in the system prompt. Include the desired pace and tone, how to react to silence, what information must be confirmed, when not to interrupt, what actions require confirmation, and when to escalate."
          },
          {
            "type": "paragraph",
            "html": "Keep spoken answers concise. A phone agent that reads long blocks of policy text can technically be correct while delivering a poor user experience."
          }
        ]
      },
      {
        "id": "use-transcripts-carefully",
        "title": "Use transcripts carefully",
        "blocks": [
          {
            "type": "paragraph",
            "html": "GPT-Live-1 provides native ASR transcripts and response text and supports keyword biasing. This can help with names, codes and business vocabulary, but critical information should still be confirmed when an error would matter."
          },
          {
            "type": "paragraph",
            "html": "Phone workflows should explicitly test addresses, account identifiers, dates, times, prices and unusual proper nouns rather than relying on average transcription quality."
          }
        ]
      },
      {
        "id": "pricing-a-gpt-live-1-phone-agent",
        "title": "Pricing a GPT-Live-1 phone agent",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenAI lists the GPT-Live-1 front-end voice layer at $0.05 per minute. That is only one line in the cost model."
          },
          {
            "type": "paragraph",
            "html": "A deployed phone agent may also incur backend model charges, tool/API charges, telephony/SIP charges, phone-number costs, infrastructure and observability expenses. OpenAI's launch page does not provide one universal all-in price for a phone agent."
          },
          {
            "type": "paragraph",
            "html": "This is why comparisons should use end-to-end cost per successful call or task rather than the voice-layer rate alone."
          }
        ]
      },
      {
        "id": "good-initial-use-cases",
        "title": "Good initial use cases",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Lower-risk, repetitive workflows are sensible places to evaluate the system: reservation intake, appointment scheduling, order-status questions, FAQ/support triage and lead qualification. More sensitive workflows should add stronger identity, approval and human-escalation controls."
          }
        ]
      },
      {
        "id": "production-testing-checklist",
        "title": "Production testing checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Test callers interrupting the agent; long pauses; noisy streets and speakerphone audio; simultaneous background speech; corrections to dates/numbers; backend timeouts; unavailable tools; transfers/escalations; long calls; and hang-up/reconnection behavior."
          },
          {
            "type": "paragraph",
            "html": "Measure task completion, incorrect actions, escalation rate, latency, caller abandonment and total cost—not merely how human the voice sounds."
          }
        ]
      },
      {
        "id": "what-is-confirmed-vs-still-variable",
        "title": "What is confirmed vs still variable",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Confirmed by OpenAI: GPT-Live-1 is available in the API; it supports full-duplex interaction and telephony; it can delegate reasoning/tool calls; and the front-end voice layer is listed at $0.05/minute."
          },
          {
            "type": "paragraph",
            "html": "Implementation-dependent: the telephony provider, phone-number pricing, backend model, tool stack, exact workflow permissions, total cost and production reliability in a specific business environment."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters. GPT-Live-1 supplies a new voice primitive; the quality and safety of the complete phone agent still depend on the surrounding system."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openai.com — introducing gpt live 1 in the api",
        "url": "https://openai.com/index/introducing-gpt-live-1-in-the-api/"
      },
      {
        "label": "developers.openai.com — live",
        "url": "https://developers.openai.com/api/docs/guides/live"
      },
      {
        "label": "openai.com — introducing gpt live",
        "url": "https://openai.com/index/introducing-gpt-live/"
      }
    ],
    "relatedPaths": [
      "/blog/gpt-live-1"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Adobe Acrobat Productivity Agent",
    "targetSearchIntent": "Broad overview of Adobe Acrobat's September 2026 Productivity Agent expansion, including AI presentations, interactive visual reports, document audio, plan availability, enterprise capabilities and limitations",
    "targetQuery": "Adobe Acrobat Productivity Agent",
    "slug": "adobe-acrobat-productivity-agent",
    "title": "Adobe Acrobat Productivity Agent: AI Presentations, Reports & Audio",
    "metaTitle": "Adobe Acrobat Productivity Agent: AI Presentations, Reports & Audio",
    "metaDescription": "Adobe Acrobat’s Productivity Agent can turn documents into AI presentations, interactive visual reports and audio. Here’s what launched, availability and limits.",
    "h1": "Adobe Acrobat Productivity Agent Turns Documents Into Presentations, Visual Reports and Audio",
    "excerpt": "Adobe expanded Acrobat's Productivity Agent on September 9, 2026 with a more ambitious document-to-output workflow: source files can now be turned into interactive visual reports, polished presentations and audio experiences without requiring users to rebuild the information m…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Adobe Acrobat Productivity Agent Turns Documents Into Presentations, Visual Reports and Audio — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe expanded Acrobat's Productivity Agent on September 9, 2026 with a more ambitious document-to-output workflow: source files can now be turned into interactive visual reports, polished presentations and audio experiences without requiring users to rebuild the information manually in separate tools."
          },
          {
            "type": "paragraph",
            "html": "The important change is not simply another PDF summarizer. Adobe is positioning Acrobat as a workspace that can understand source documents, ask about the user's intent, reorganize information and produce a new presentation layer while keeping the original files as the factual source."
          }
        ]
      },
      {
        "id": "what-launched-in-september-2026",
        "title": "What launched in September 2026?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's September 9 announcement highlights three connected workflows."
          },
          {
            "type": "paragraph",
            "html": "First, Acrobat can generate interactive visual reports from dense documents. Adobe says the system analyzes files, asks clarifying questions to understand the user's goal, and produces reports that can include charts, images and built-in navigation."
          },
          {
            "type": "paragraph",
            "html": "Second, the new Stylize workflow can turn plain source material into polished deliverables such as presentations, reports, resumes and invoices. Users can choose from Adobe Express templates, and Adobe says the system reflows information into the selected design while preserving the source content."
          },
          {
            "type": "paragraph",
            "html": "Third, Acrobat's broader AI document experience includes audio summaries, podcasts and read-aloud workflows. Podcast generation existed before this September announcement, so it should be understood as an existing capability that now sits alongside the newly emphasized visual and presentation outputs rather than as a brand-new September invention."
          }
        ]
      },
      {
        "id": "what-is-the-adobe-productivity-agent",
        "title": "What is the Adobe Productivity Agent?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe describes the Productivity Agent as an agentic layer for understanding, creating and sharing information from documents. Earlier 2026 material introduced the broader concept around PDF Spaces: users provide source material and a goal, and the agent can generate summaries, answer questions, suggest presentation formats and coordinate output creation."
          },
          {
            "type": "paragraph",
            "html": "The September update makes that idea more concrete inside Acrobat. Instead of stopping at answers or summaries, the product can create new artifacts from the information it has analyzed."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters for marketers, agencies, founders and creators. A research packet can become a visual report. A strategy document can become a presentation. Competitive research can become a navigable summary. A long report can become an audio overview for review on the move."
          }
        ]
      },
      {
        "id": "ai-presentations-from-source-documents",
        "title": "AI presentations from source documents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe says Acrobat can create professional presentations directly from source documents. The workflow uses Adobe Express templates, with AI reflowing the source information into the selected layout."
          },
          {
            "type": "paragraph",
            "html": "The strongest use cases are likely to be situations where the content already exists but the user needs to transform it into a presentation quickly: client reports, internal strategy documents, research summaries, proposals, meeting briefs or educational material."
          },
          {
            "type": "paragraph",
            "html": "This is different from a blank-canvas AI slide generator. The value proposition is source-grounded transformation: the presentation is built from documents the user has already supplied."
          },
          {
            "type": "paragraph",
            "html": "Adobe says source content is preserved during the reflow process. That is a first-party product claim and should not be interpreted as a guarantee that every generated slide will be perfectly structured or free from errors. Important numbers, quotations and conclusions should still be checked against the original document before external use."
          }
        ]
      },
      {
        "id": "interactive-visual-reports",
        "title": "Interactive visual reports",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The interactive-report workflow is aimed at making dense information easier to scan and explore. Adobe says Acrobat can build reports containing charts, images and navigation, after first analyzing the source and asking clarifying questions about the intended outcome."
          },
          {
            "type": "paragraph",
            "html": "Adobe gives examples including business reports, growth plans, financial statements, customer feedback, competitor research and HR data."
          },
          {
            "type": "paragraph",
            "html": "For ProjectMonet.space's audience, the marketing use case is especially relevant. A team could use the workflow to turn multiple research documents into a visual competitor or customer-insight report for internal review or client presentation."
          },
          {
            "type": "paragraph",
            "html": "However, Adobe has not published an independent accuracy benchmark for automatically generated visual reports. Generated charts and summaries should be treated as AI-produced interpretations of source information and verified when decisions depend on them."
          }
        ]
      },
      {
        "id": "audio-summaries-and-podcasts",
        "title": "Audio summaries and podcasts",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Acrobat also supports document-to-audio workflows. Adobe's help documentation says Generate podcast can turn long documents or PDF Spaces into conversational audio summaries."
          },
          {
            "type": "paragraph",
            "html": "Users can choose different formats such as highlights or deeper explorations, and Adobe documents controls for length, expertise level and playback speed. Podcasts can be used across web, desktop and mobile in supported regions and languages."
          },
          {
            "type": "paragraph",
            "html": "Adobe says a podcast generated from a PDF Space can update when files are added or removed, allowing the audio overview to reflect the current source set."
          },
          {
            "type": "paragraph",
            "html": "This is useful for reports, research, manuals, client briefs and other material users may want to review while commuting or multitasking."
          }
        ]
      },
      {
        "id": "acrobat-studio-acrobat-express-and-ai-assistant-plus-availability",
        "title": "Acrobat Studio, Acrobat Express and AI Assistant Plus availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's September 9 announcement states that the new audio and visual capabilities are available in Acrobat Studio, Acrobat Express and Acrobat AI Assistant Plus plans. For enterprise customers, Adobe says Knowledge Base, Analyzer and the audio/visual capabilities are available through Acrobat Studio for enterprise."
          },
          {
            "type": "paragraph",
            "html": "Adobe does not provide one universal global price in the launch announcement because pricing varies by plan, market and customer type. Readers should verify the current regional plan page before buying specifically for one of these features."
          },
          {
            "type": "paragraph",
            "html": "Feature availability can also depend on plan and phased rollout. Adobe's current Acrobat release notes explicitly warn that some features are rolled out in phases and may not be available to everyone at the same time."
          }
        ]
      },
      {
        "id": "enterprise-knowledge-base-and-analyzer",
        "title": "Enterprise Knowledge Base and Analyzer",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The September announcement also expands the enterprise side of Acrobat. Adobe says Knowledge Base can connect employees to shared document repositories, while Analyzer can surface structured information from agreements and other document sets."
          },
          {
            "type": "paragraph",
            "html": "The company gives examples such as identifying contract terms, renewal dates, SLAs, inflation adjustments and reporting requirements across a vendor portfolio."
          },
          {
            "type": "paragraph",
            "html": "This moves the Productivity Agent beyond individual file summarization toward organization-level document intelligence. The practical value will depend heavily on source quality, access controls and verification processes, especially where contracts or financial decisions are involved."
          }
        ]
      },
      {
        "id": "who-is-this-useful-for",
        "title": "Who is this useful for?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The clearest audiences are marketers, agencies, sales teams, founders, researchers, students and operations teams that repeatedly transform source documents into something easier to consume or present."
          },
          {
            "type": "paragraph",
            "html": "For marketers and agencies, possible workflows include converting campaign reports into client-ready presentations, turning competitor research into visual summaries, creating audio versions of strategy documents and transforming research into internal briefings."
          },
          {
            "type": "paragraph",
            "html": "For small businesses, a dense report or growth plan could become a visual report for a team meeting without requiring manual slide reconstruction."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Several caveats matter before relying on these workflows."
          },
          {
            "type": "paragraph",
            "html": "Adobe's claims about productivity, comprehension and time savings are vendor claims rather than independently benchmarked results. Plan availability differs by market. Some Acrobat capabilities roll out gradually. Generated charts, summaries and presentations can still require factual and editorial review. Podcast generation is not itself a September-new capability even though it is part of the current Productivity Agent story."
          },
          {
            "type": "paragraph",
            "html": "Users should also distinguish document transformation from autonomous business decision-making. Acrobat can reorganize and present information, but high-stakes conclusions should still be validated against original sources."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When did Adobe announce the new Acrobat Productivity Agent features?"
          },
          {
            "type": "paragraph",
            "html": "Adobe announced the expanded visual, audio and presentation capabilities on September 9, 2026."
          },
          {
            "type": "subheading",
            "text": "Can Acrobat turn a PDF into a presentation?"
          },
          {
            "type": "paragraph",
            "html": "Adobe says Acrobat can create presentations directly from source documents using Adobe Express templates and AI-assisted reflow."
          },
          {
            "type": "subheading",
            "text": "Can Acrobat generate visual reports?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Adobe says the Productivity Agent can analyze source files and produce interactive reports containing charts, images and navigation."
          },
          {
            "type": "subheading",
            "text": "Can Acrobat turn documents into podcasts?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Acrobat's Generate podcast feature can create conversational audio summaries from documents and PDF Spaces. This feature existed before the September 9 announcement and is part of the broader Acrobat AI toolset."
          },
          {
            "type": "subheading",
            "text": "Which plans include the new capabilities?"
          },
          {
            "type": "paragraph",
            "html": "Adobe's September announcement says audio and visual capabilities are available through Acrobat Studio, Acrobat Express and Acrobat AI Assistant Plus. Enterprise Knowledge Base and Analyzer are available with Acrobat Studio for enterprise."
          },
          {
            "type": "subheading",
            "text": "Are the generated presentations guaranteed to be accurate?"
          },
          {
            "type": "paragraph",
            "html": "No AI-generated transformation should be treated as automatically error-free. Adobe says the workflow preserves source content, but users should verify important claims, figures and conclusions against the original files."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "news.adobe.com — adobe productivity agent in acrobat now transforms complex documents",
        "url": "https://news.adobe.com/news/2026/09/adobe-productivity-agent-in-acrobat-now-transforms-complex-documents"
      },
      {
        "label": "helpx.adobe.com — about podcasts.html",
        "url": "https://helpx.adobe.com/acrobat/desktop/use-acrobat-ai/podcasts/about-podcasts.html"
      },
      {
        "label": "helpx.adobe.com — release notes.html",
        "url": "https://helpx.adobe.com/acrobat/desktop/whats-new/release-notes.html"
      },
      {
        "label": "blog.adobe.com — adobes new productivity agent redefining how we understand create share",
        "url": "https://blog.adobe.com/en/publish/2026/05/06/adobes-new-productivity-agent-redefining-how-we-understand-create-share"
      },
      {
        "label": "helpx.adobe.com — create presentations with generative ai.html",
        "url": "https://helpx.adobe.com/express/web/documents-and-presentations/create-presentations-with-generative-ai.html"
      },
      {
        "label": "helpx.adobe.com — stylize pdfs templates.html",
        "url": "https://helpx.adobe.com/acrobat/web/edit-pdfs/enhance-pdfs-adobe-express/stylize-pdfs-templates.html"
      },
      {
        "label": "helpx.adobe.com — stylize pdfs express.html",
        "url": "https://helpx.adobe.com/acrobat/web/edit-pdfs/enhance-pdfs-adobe-express/stylize-pdfs-express.html"
      },
      {
        "label": "helpx.adobe.com — interactive reports.html",
        "url": "https://helpx.adobe.com/acrobat/web/use-acrobat-ai/read-pdfs/interactive-reports.html"
      },
      {
        "label": "helpx.adobe.com — pdf spaces overview.html",
        "url": "https://helpx.adobe.com/in/acrobat/desktop/explore-pdf-spaces/pdf-spaces-overview.html"
      }
    ],
    "relatedPaths": [
      "/blog/acrobat-ai-pdf-to-presentation",
      "/blog/adobe-acrobat-interactive-reports"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Adobe Acrobat Productivity Agent",
    "targetSearchIntent": "Create an editable presentation from existing PDF or document content using Acrobat AI and Adobe Express, while understanding eligibility, workflow and verification limits",
    "targetQuery": "how to turn a PDF into a presentation with Adobe Acrobat AI",
    "parentSlug": "adobe-acrobat-productivity-agent",
    "slug": "acrobat-ai-pdf-to-presentation",
    "title": "How to Turn a PDF Into a Presentation With Adobe Acrobat AI",
    "metaTitle": "How to Turn a PDF Into a Presentation With Adobe Acrobat AI",
    "metaDescription": "Learn how Adobe Acrobat AI turns document content into presentations with Adobe Express, what the workflow supports, and what you should verify before sharing.",
    "h1": "How to Turn a PDF Into a Presentation With Adobe Acrobat AI",
    "excerpt": "Adobe Acrobat can now sit at the start of a presentation workflow instead of merely being the place where a finished deck is exported to PDF. Adobe's current Acrobat and Adobe Express documentation describes AI-assisted presentation creation from source documents, with the Sep…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Turn a PDF Into a Presentation With Adobe Acrobat AI — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe Acrobat can now sit at the start of a presentation workflow instead of merely being the place where a finished deck is exported to PDF. Adobe's current Acrobat and Adobe Express documentation describes AI-assisted presentation creation from source documents, with the September 9, 2026 Productivity Agent update emphasizing the ability to turn existing material into polished presentations."
          },
          {
            "type": "paragraph",
            "html": "The useful distinction is that this workflow starts from content you already have. Rather than asking an AI slide generator to invent a deck from a blank prompt, you can use a document as the source and then refine the result in Adobe Express."
          }
        ]
      },
      {
        "id": "what-you-need-before-starting",
        "title": "What you need before starting",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's exact access depends on plan, market and rollout. The September 9 launch announcement says the new visual capabilities are available in Acrobat Studio, Acrobat Express and Acrobat AI Assistant Plus plans."
          },
          {
            "type": "paragraph",
            "html": "Adobe Express also documents a Generate presentation workflow that can use content from Acrobat AI and then continue editing or presenting inside Express. Supported languages and account eligibility can change, so check the current in-product availability before depending on the workflow for a deadline."
          }
        ]
      },
      {
        "id": "step-1-start-with-a-source-document",
        "title": "Step 1: Start with a source document",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Choose the document that contains the facts, structure or argument you want the presentation to communicate. Strong source material might be a strategy document, campaign report, research brief, proposal, meeting memo or analysis."
          },
          {
            "type": "paragraph",
            "html": "The quality of the deck will still depend on the quality and organization of that source. AI reformatting cannot fix missing evidence or unclear thinking automatically."
          }
        ]
      },
      {
        "id": "step-2-use-acrobat-ai-to-understand-the-material",
        "title": "Step 2: Use Acrobat AI to understand the material",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before generating slides, use Acrobat's AI capabilities to summarize the source, identify the main themes and clarify the intended audience or goal."
          },
          {
            "type": "paragraph",
            "html": "Adobe says its Productivity Agent can analyze files and ask clarifying questions about intent. This is useful because a board presentation, client pitch and internal working deck should not emphasize the same information even if they start from the same report."
          },
          {
            "type": "paragraph",
            "html": "A practical instruction should specify the audience, desired outcome and the information that must not be omitted. For example: create an executive presentation from this campaign report, emphasize performance changes and recommendations, and preserve all cited figures from the source."
          }
        ]
      },
      {
        "id": "step-3-generate-or-style-the-presentation",
        "title": "Step 3: Generate or style the presentation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's current product documentation connects Acrobat AI with Adobe Express presentation generation. Once the source content is understood, the presentation can be generated and then edited in Express."
          },
          {
            "type": "paragraph",
            "html": "Adobe also documents a Stylize workflow for eligible PDFs. In that workflow, users select a recommended Adobe Express template and Acrobat applies the design to the document content."
          },
          {
            "type": "paragraph",
            "html": "Do not treat these as identical workflows. Generate presentation is aimed at building presentation slides, while Stylize applies Express design templates to eligible PDFs and other document outputs."
          }
        ]
      },
      {
        "id": "step-4-choose-the-presentation-structure-deliberately",
        "title": "Step 4: Choose the presentation structure deliberately",
        "blocks": [
          {
            "type": "paragraph",
            "html": "AI can create the first structure, but the user should still evaluate whether the slide sequence communicates the argument clearly."
          },
          {
            "type": "paragraph",
            "html": "For a marketing report, a useful structure might be context, objective, key findings, performance, interpretation, recommendations and next steps. A client proposal may instead need problem, opportunity, approach, proof, scope and decision."
          },
          {
            "type": "paragraph",
            "html": "The purpose of using source-grounded AI is not to remove editorial judgment. It is to reduce the manual work of reconstructing information from a document into slides."
          }
        ]
      },
      {
        "id": "step-5-refine-the-design-in-adobe-express",
        "title": "Step 5: Refine the design in Adobe Express",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe says presentations generated from Acrobat content can be edited or presented in Adobe Express. That means the AI output should be treated as an editable first pass rather than a locked final artifact."
          },
          {
            "type": "paragraph",
            "html": "Check hierarchy, density, typography, chart labeling, image relevance and whether the chosen template fits the audience. If the deck is customer-facing, apply the correct brand system before sharing it."
          }
        ]
      },
      {
        "id": "step-6-verify-every-important-fact",
        "title": "Step 6: Verify every important fact",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This is the most important quality step."
          },
          {
            "type": "paragraph",
            "html": "Adobe says its workflows preserve source content, but that is a first-party product claim rather than a guarantee that the generated deck will never misstate, omit or visually distort information."
          },
          {
            "type": "paragraph",
            "html": "Verify numerical claims, dates, quotations, chart values and recommendations against the original document. If the source itself contains uncertainty, preserve that uncertainty rather than allowing the generated deck to turn it into a stronger claim."
          }
        ]
      },
      {
        "id": "current-stylize-eligibility-limits",
        "title": "Current Stylize eligibility limits",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's September 9 help documentation places specific restrictions on AI template styling for PDFs. The document needs selectable text, fewer than 15 pages, English language content, no password protection, no signatures or certification, no form fields, and it cannot be a PDF Portfolio or contain embedded files."
          },
          {
            "type": "paragraph",
            "html": "These limits apply to the documented Stylize-with-templates workflow and should not automatically be assumed to define every Acrobat-to-presentation workflow."
          }
        ]
      },
      {
        "id": "best-use-cases",
        "title": "Best use cases",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This workflow is strongest when the source document is already authoritative and the time-consuming job is turning that information into a presentation."
          },
          {
            "type": "paragraph",
            "html": "Examples include campaign performance reports, competitor research, customer-insight documents, sales briefs, meeting reports, internal strategy documents, educational material and proposals."
          },
          {
            "type": "paragraph",
            "html": "For agencies and marketers, the biggest potential advantage is reducing the repetitive formatting stage between analysis and client communication."
          }
        ]
      },
      {
        "id": "what-not-to-assume",
        "title": "What not to assume",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not assume every Acrobat account has the same features, every region has identical plan packaging, every PDF is eligible for Stylize, or AI-generated slides are automatically presentation-ready."
          },
          {
            "type": "paragraph",
            "html": "Adobe's feature rollout is phased, and its help documentation says availability can depend on plan and account. Generative-credit consumption may also change over time."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Can Adobe Acrobat turn a PDF into slides?"
          },
          {
            "type": "paragraph",
            "html": "Adobe documents AI presentation creation using content from Acrobat AI in partnership with Adobe Express. The resulting presentation can be edited or presented in Express."
          },
          {
            "type": "subheading",
            "text": "Is Acrobat's presentation generator the same as Stylize?"
          },
          {
            "type": "paragraph",
            "html": "No. Stylize applies Adobe Express design templates to eligible PDFs. Presentation generation is a separate workflow for creating presentation slides from content."
          },
          {
            "type": "subheading",
            "text": "Can I edit the result?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Adobe documents continued editing in Adobe Express."
          },
          {
            "type": "subheading",
            "text": "Does the PDF have to be under 15 pages?"
          },
          {
            "type": "paragraph",
            "html": "Adobe's current under-15-page rule applies specifically to the documented AI template-styling workflow. Do not assume it is a universal limit for every Acrobat presentation-generation path."
          },
          {
            "type": "subheading",
            "text": "Should I verify the generated deck?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Check important figures, quotations, conclusions and charts against the original source before sharing the presentation externally."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "news.adobe.com — adobe productivity agent in acrobat now transforms complex documents",
        "url": "https://news.adobe.com/news/2026/09/adobe-productivity-agent-in-acrobat-now-transforms-complex-documents"
      },
      {
        "label": "helpx.adobe.com — about podcasts.html",
        "url": "https://helpx.adobe.com/acrobat/desktop/use-acrobat-ai/podcasts/about-podcasts.html"
      },
      {
        "label": "helpx.adobe.com — release notes.html",
        "url": "https://helpx.adobe.com/acrobat/desktop/whats-new/release-notes.html"
      },
      {
        "label": "blog.adobe.com — adobes new productivity agent redefining how we understand create share",
        "url": "https://blog.adobe.com/en/publish/2026/05/06/adobes-new-productivity-agent-redefining-how-we-understand-create-share"
      },
      {
        "label": "helpx.adobe.com — create presentations with generative ai.html",
        "url": "https://helpx.adobe.com/express/web/documents-and-presentations/create-presentations-with-generative-ai.html"
      },
      {
        "label": "helpx.adobe.com — stylize pdfs templates.html",
        "url": "https://helpx.adobe.com/acrobat/web/edit-pdfs/enhance-pdfs-adobe-express/stylize-pdfs-templates.html"
      },
      {
        "label": "helpx.adobe.com — stylize pdfs express.html",
        "url": "https://helpx.adobe.com/acrobat/web/edit-pdfs/enhance-pdfs-adobe-express/stylize-pdfs-express.html"
      },
      {
        "label": "helpx.adobe.com — interactive reports.html",
        "url": "https://helpx.adobe.com/acrobat/web/use-acrobat-ai/read-pdfs/interactive-reports.html"
      },
      {
        "label": "helpx.adobe.com — pdf spaces overview.html",
        "url": "https://helpx.adobe.com/in/acrobat/desktop/explore-pdf-spaces/pdf-spaces-overview.html"
      }
    ],
    "relatedPaths": [
      "/blog/adobe-acrobat-productivity-agent"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Adobe Acrobat Productivity Agent",
    "targetSearchIntent": "Understand and use Acrobat's new AI-generated interactive visual report workflow for turning long or complex documents into navigable reports with charts, images and refinements",
    "targetQuery": "Adobe Acrobat interactive reports",
    "parentSlug": "adobe-acrobat-productivity-agent",
    "slug": "adobe-acrobat-interactive-reports",
    "title": "Adobe Acrobat Interactive Visual Reports: How the AI Workflow Works",
    "metaTitle": "Adobe Acrobat Interactive Reports: How the AI Workflow Works",
    "metaDescription": "Adobe Acrobat can turn complex documents into interactive visual reports with charts, images and navigation. Here’s how the new AI workflow works and its limits.",
    "h1": "Adobe Acrobat Interactive Visual Reports: How the AI Workflow Works",
    "excerpt": "Adobe Acrobat's September 2026 Productivity Agent expansion adds a new way to work with dense source material: generate an interactive visual report instead of reading the documents line by line or stopping at a text summary.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Adobe Acrobat Interactive Visual Reports: How the AI Workflow Works — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe Acrobat's September 2026 Productivity Agent expansion adds a new way to work with dense source material: generate an interactive visual report instead of reading the documents line by line or stopping at a text summary."
          },
          {
            "type": "paragraph",
            "html": "Adobe's documentation says AI Assistant can analyze long or complex documents, interpret the user's intent, surface key insights and build a report that may contain navigation, charts and images. Users can then ask the assistant to refine the report around the information they need."
          }
        ]
      },
      {
        "id": "what-is-an-acrobat-interactive-report",
        "title": "What is an Acrobat interactive report?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "An interactive report is an AI-generated presentation layer over source documents. Rather than returning only a paragraph summary, Acrobat can organize the material into a navigable visual experience."
          },
          {
            "type": "paragraph",
            "html": "Adobe says the output may include charts and images that emphasize important information. The exact output depends on the source material and the user's request."
          },
          {
            "type": "paragraph",
            "html": "The feature is best understood as a document-analysis and communication tool, not a replacement for the underlying files. The source documents remain the evidence that important claims should be checked against."
          }
        ]
      },
      {
        "id": "how-the-workflow-works",
        "title": "How the workflow works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's current help documentation describes a simple flow: sign in to Acrobat on the web, open or provide the relevant material, and ask the AI Assistant to generate an interactive report."
          },
          {
            "type": "paragraph",
            "html": "The AI analyzes the files and the requested objective. Adobe's launch announcement says the system may ask clarifying questions to better understand intent before producing the report."
          },
          {
            "type": "paragraph",
            "html": "Once generated, the report can be refined through follow-up requests. For example, a marketer might ask it to emphasize customer complaints, compare competitor positioning or focus on the metrics most relevant to an executive audience."
          }
        ]
      },
      {
        "id": "what-can-appear-in-the-report",
        "title": "What can appear in the report?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe explicitly documents built-in navigation, charts and images as possible components."
          },
          {
            "type": "paragraph",
            "html": "This makes the format useful when the source information is too dense for a normal summary. A long document may contain several themes, quantitative sections and supporting evidence that are easier to understand through a structured report than a single block of generated prose."
          },
          {
            "type": "paragraph",
            "html": "However, the presence of a chart does not make the chart automatically trustworthy. Users should inspect the underlying data and verify that the visual encoding has not changed the meaning of the source."
          }
        ]
      },
      {
        "id": "marketing-and-agency-use-cases",
        "title": "Marketing and agency use cases",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest ProjectMonet.space use cases involve transforming research into something easier to review or present."
          },
          {
            "type": "paragraph",
            "html": "A marketing team could combine competitor information and customer feedback into a visual research report. An agency could turn campaign analysis into a structured client-review artifact. A founder could convert a growth plan or financial report into an easier team briefing."
          },
          {
            "type": "paragraph",
            "html": "Adobe itself highlights competitor information, customer feedback, business reports, growth plans and financial statements as examples."
          }
        ]
      },
      {
        "id": "interactive-reports-vs-ordinary-ai-summaries",
        "title": "Interactive reports vs ordinary AI summaries",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A normal summary compresses source material into text. An interactive report is designed to preserve more structure and provide multiple ways to navigate the findings."
          },
          {
            "type": "paragraph",
            "html": "That can make it more useful for complex information, but it also introduces additional layers that need review. A generated summary can misstate a source; a generated chart can misstate it visually. The more transformation the AI performs, the more important source verification becomes."
          }
        ]
      },
      {
        "id": "relationship-with-pdf-spaces",
        "title": "Relationship with PDF Spaces",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's PDF Spaces already provides a multi-document workspace where users can bring together files, links and notes, chat across sources, create personalized AI Assistants and generate visual insights such as charts and graphs."
          },
          {
            "type": "paragraph",
            "html": "Interactive reports extend this broader document-intelligence direction by packaging insights into a more deliberate visual output."
          },
          {
            "type": "paragraph",
            "html": "PDF Spaces can also be shared as guided experiences with summaries, audio, an AI Assistant and engagement tracking. That makes the broader Acrobat environment relevant not only to analysis but also to how the information is delivered to another person."
          }
        ]
      },
      {
        "id": "access-and-availability",
        "title": "Access and availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe's September 9 help documentation says interactive-report generation is available in Acrobat on the web when accessed from a desktop or laptop computer."
          },
          {
            "type": "paragraph",
            "html": "Individual and Teams subscribers need a plan that includes Acrobat Studio, AI Assistant Plus or Acrobat Express."
          },
          {
            "type": "paragraph",
            "html": "Adobe says it reserves the right to introduce generative-credit consumption for this feature in the future and may change usage limits. That means current access should not be interpreted as a permanent unlimited entitlement."
          }
        ]
      },
      {
        "id": "accuracy-and-evidence",
        "title": "Accuracy and evidence",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Adobe has not published an independent benchmark demonstrating that its interactive reports are always more accurate, more comprehensible or faster than manual analysis."
          },
          {
            "type": "paragraph",
            "html": "Those benefits should be treated as product positioning and workflow hypotheses rather than guaranteed outcomes."
          },
          {
            "type": "paragraph",
            "html": "For low-risk material, users may be comfortable using a generated report as a first-pass briefing. For contracts, financial statements, compliance documents or other consequential information, every important conclusion should be checked against the original source."
          }
        ]
      },
      {
        "id": "a-practical-review-checklist",
        "title": "A practical review checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before sharing a generated report, verify that the source set is complete, all critical figures match the source, charts use the right units and labels, images do not imply unsupported conclusions, uncertainty has not been removed, and the report's emphasis matches the intended audience."
          },
          {
            "type": "paragraph",
            "html": "Then ask whether the interactive format is actually better than a simpler summary or presentation. The strongest format is the one that helps the audience understand the information with the least distortion."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When did Adobe add interactive report generation to Acrobat?"
          },
          {
            "type": "paragraph",
            "html": "Adobe announced the new Productivity Agent visual-report capabilities on September 9, 2026, and its interactive-report help documentation was updated the same day."
          },
          {
            "type": "subheading",
            "text": "What does an Acrobat interactive report contain?"
          },
          {
            "type": "paragraph",
            "html": "Adobe says reports may contain built-in navigation, charts and images, depending on the source and requested intent."
          },
          {
            "type": "subheading",
            "text": "Can I refine the report after generation?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Adobe says users can ask AI Assistant to refine and edit the report to focus on the information they need."
          },
          {
            "type": "subheading",
            "text": "Is it available on mobile?"
          },
          {
            "type": "paragraph",
            "html": "Adobe's current help page says interactive-report generation is available in Acrobat on the web from a desktop or laptop computer."
          },
          {
            "type": "subheading",
            "text": "Which plans include it?"
          },
          {
            "type": "paragraph",
            "html": "Adobe currently lists Acrobat Studio, AI Assistant Plus and Acrobat Express for eligible Individual and Teams subscribers."
          },
          {
            "type": "subheading",
            "text": "Does it use generative credits?"
          },
          {
            "type": "paragraph",
            "html": "Adobe's current documentation says it reserves the right to introduce generative-credit consumption in the future and may change usage limits. Check the current product before assuming the entitlement is unlimited."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "news.adobe.com — adobe productivity agent in acrobat now transforms complex documents",
        "url": "https://news.adobe.com/news/2026/09/adobe-productivity-agent-in-acrobat-now-transforms-complex-documents"
      },
      {
        "label": "helpx.adobe.com — about podcasts.html",
        "url": "https://helpx.adobe.com/acrobat/desktop/use-acrobat-ai/podcasts/about-podcasts.html"
      },
      {
        "label": "helpx.adobe.com — release notes.html",
        "url": "https://helpx.adobe.com/acrobat/desktop/whats-new/release-notes.html"
      },
      {
        "label": "blog.adobe.com — adobes new productivity agent redefining how we understand create share",
        "url": "https://blog.adobe.com/en/publish/2026/05/06/adobes-new-productivity-agent-redefining-how-we-understand-create-share"
      },
      {
        "label": "helpx.adobe.com — create presentations with generative ai.html",
        "url": "https://helpx.adobe.com/express/web/documents-and-presentations/create-presentations-with-generative-ai.html"
      },
      {
        "label": "helpx.adobe.com — stylize pdfs templates.html",
        "url": "https://helpx.adobe.com/acrobat/web/edit-pdfs/enhance-pdfs-adobe-express/stylize-pdfs-templates.html"
      },
      {
        "label": "helpx.adobe.com — stylize pdfs express.html",
        "url": "https://helpx.adobe.com/acrobat/web/edit-pdfs/enhance-pdfs-adobe-express/stylize-pdfs-express.html"
      },
      {
        "label": "helpx.adobe.com — interactive reports.html",
        "url": "https://helpx.adobe.com/acrobat/web/use-acrobat-ai/read-pdfs/interactive-reports.html"
      },
      {
        "label": "helpx.adobe.com — pdf spaces overview.html",
        "url": "https://helpx.adobe.com/in/acrobat/desktop/explore-pdf-spaces/pdf-spaces-overview.html"
      }
    ],
    "relatedPaths": [
      "/blog/adobe-acrobat-productivity-agent"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "OpenRouter Shell & Files API",
    "targetSearchIntent": "Broad overview of OpenRouter's hosted shell, Files API, containers, pricing, availability and core use cases",
    "targetQuery": "OpenRouter shell tool",
    "slug": "openrouter-shell-files-api",
    "title": "OpenRouter Shell Tool & Files API: Pricing, Containers & How It Works",
    "metaTitle": "OpenRouter Shell Tool & Files API: Pricing, Containers & How It Works",
    "metaDescription": "OpenRouter's new Shell tool, Files API and hosted containers let AI models run code server-side. Here's how they work, current pricing, limits and use cases.",
    "h1": "OpenRouter Shell Tool and Files API: Hosted Containers for AI Agents",
    "excerpt": "OpenRouter added a new execution layer to its model-routing platform on September 8, 2026: a hosted Shell tool, Bash tool, Files API and reusable Linux containers. The practical change is simple: a model can now inspect files, write scripts, execute commands, read stdout and s…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "OpenRouter Shell Tool and Files API: Hosted Containers for AI Agents — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter added a new execution layer to its model-routing platform on September 8, 2026: a hosted Shell tool, Bash tool, Files API and reusable Linux containers. The practical change is simple: a model can now inspect files, write scripts, execute commands, read stdout and stderr, fix failures, and return generated files without the developer standing up a separate sandbox service."
          }
        ]
      },
      {
        "id": "what-launched",
        "title": "What launched",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter's beta release includes <code>openrouter:shell</code>, <code>openrouter:bash</code>, workspace file storage and containers. The Shell tool follows the OpenAI-compatible shell pattern and works through OpenRouter's Responses and Messages APIs. The Bash tool follows Anthropic's Bash pattern and is available through Messages. Setting <code>engine: \"openrouter\"</code> forces commands to run inside OpenRouter's hosted environment rather than in the calling application."
          }
        ]
      },
      {
        "id": "how-the-runtime-works",
        "title": "How the runtime works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "When a model invokes Shell, it emits a batch of commands. OpenRouter executes them in a Linux container and sends stdout, stderr and exit codes back to the model. The model can then react to the result. That matters for agent loops: a failed parser can be fixed, a generated script can be rerun, and a file can be produced without another external execution service. Containers are scoped to the workspace. Outbound networking is disabled by default. Developers can supply an allowlist of domains, including a wildcard when unrestricted egress is intentionally required. OpenRouter says the network policy cannot be changed after a container starts, so the egress decision should be made at creation time."
          }
        ]
      },
      {
        "id": "files-api",
        "title": "Files API",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Files API provides workspace-level storage under <code>/api/v1/files</code>. Inputs can be uploaded, attached to a container by file ID and used by the model during execution. Container-generated files receive their own IDs and can be downloaded. A generated file can also be promoted into workspace storage for reuse in later runs. OpenRouter currently limits a container to 20 attached files. Files written in the container are captured from <code>/workspace/home</code>. Container files are retained for 30 days unless promoted into workspace storage."
          }
        ]
      },
      {
        "id": "container-reuse",
        "title": "Container reuse",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A fresh conversation normally gets a fresh container. OpenRouter can reuse a container when the request includes a session ID or a prior shell result that identifies that container. Developers can also explicitly reference a container ID. Reuse can matter for multi-step jobs because state and files can survive across successive requests."
          }
        ]
      },
      {
        "id": "pricing",
        "title": "Pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter bills Shell and Bash by active sandbox time at \\$0.0001 per second. A request that starts a cold container has a minimum charge equivalent to 30 seconds of sandbox time. If several requests reuse the same active container in succession, only the first pays that cold-start minimum. Token charges for the selected model remain separate. Files API usage has no separate charge in the current beta, while total workspace storage is capped at 10 GiB. OpenRouter says idle time after a request is not billed."
          }
        ]
      },
      {
        "id": "what-can-you-build-with-it",
        "title": "What can you build with it?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest use cases are tasks where a model needs both reasoning and an execution environment: analyzing CSVs, running Python, transforming media or documents, validating generated code, producing charts or artifacts, packaging files, and chaining web research into programmatic processing. The feature is model-agnostic at the routing layer. That means teams can switch between compatible tool-calling models while keeping the same execution primitive, instead of rebuilding their sandbox integration around one model vendor."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This is a beta. API details, limits and pricing can change. OpenRouter's isolation and networking behavior are documented by OpenRouter; they should not be interpreted as an independent security certification. Teams handling sensitive data should still apply their own security review, provider policy controls and least-privilege network rules."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is OpenRouter Shell available now?"
          },
          {
            "type": "paragraph",
            "html": "Yes. OpenRouter announced Shell, Bash, Files API and containers as available in beta on September 8, 2026."
          },
          {
            "type": "subheading",
            "text": "Does every model work with Shell?"
          },
          {
            "type": "paragraph",
            "html": "OpenRouter says the server-side Shell tool can be used with models that support tool calling. Model behavior and reliability will still vary."
          },
          {
            "type": "subheading",
            "text": "How much does OpenRouter Shell cost?"
          },
          {
            "type": "paragraph",
            "html": "Current sandbox pricing is \\$0.0001 per active second, with a 30-second minimum when a request starts a cold container. Model-token charges are additional."
          },
          {
            "type": "subheading",
            "text": "Does the container have internet access?"
          },
          {
            "type": "paragraph",
            "html": "Not by default. Outbound access starts disabled and can be enabled through an allowlist policy."
          },
          {
            "type": "subheading",
            "text": "Can files persist between requests?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Container state can be reused across requests, and generated files can be promoted into workspace storage for longer-lived reuse."
          }
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Primary source: OpenRouter, “Give any model a terminal and files,” September 8, 2026. Supporting technical details come from OpenRouter's Shell, Containers and Files API documentation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openrouter.ai — shell tool",
        "url": "https://openrouter.ai/blog/announcements/shell-tool/"
      },
      {
        "label": "openrouter.ai — containers",
        "url": "https://openrouter.ai/docs/features/containers"
      },
      {
        "label": "openrouter.ai — files",
        "url": "https://openrouter.ai/docs/api-reference/files"
      },
      {
        "label": "openrouter.ai — shell",
        "url": "https://openrouter.ai/docs/features/tool-calling/shell"
      }
    ],
    "relatedPaths": [
      "/blog/openrouter-shell-pricing-limits",
      "/blog/how-to-use-openrouter-shell-tool"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenRouter Shell & Files API",
    "targetSearchIntent": "Understand the exact current sandbox billing model, storage limits, file/container limits and retention before adopting OpenRouter Shell",
    "targetQuery": "OpenRouter shell pricing",
    "parentSlug": "openrouter-shell-files-api",
    "slug": "openrouter-shell-pricing-limits",
    "title": "OpenRouter Shell Pricing & Limits: Sandbox Cost, Storage and Containers",
    "metaTitle": "OpenRouter Shell Pricing & Limits: Sandbox Cost and Storage",
    "metaDescription": "OpenRouter Shell costs $0.0001 per active sandbox second. See the cold-container minimum, Files API storage limit, attachment limits and retention rules.",
    "h1": "OpenRouter Shell Pricing and Limits Explained",
    "excerpt": "OpenRouter's new hosted Shell runtime introduces a second cost component beside model tokens: sandbox execution time. For teams evaluating agentic code execution, understanding that billing model matters more than the headline per-second number.\n## Current sandbox price\nOpenRo…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "OpenRouter Shell Pricing and Limits Explained — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter's new hosted Shell runtime introduces a second cost component beside model tokens: sandbox execution time. For teams evaluating agentic code execution, understanding that billing model matters more than the headline per-second number."
          }
        ]
      },
      {
        "id": "current-sandbox-price",
        "title": "Current sandbox price",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter documents Shell and Bash at <strong>\\$0.0001 per active second</strong> of sandbox time. That metering starts when a request first runs a sandbox command and ends after the last sandbox command for that request. Model-token charges are separate. The total request cost is therefore the selected model's usage plus sandbox time."
          }
        ]
      },
      {
        "id": "cold-container-minimum",
        "title": "Cold-container minimum",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A request that starts a new container, or one that has gone idle, is billed for a minimum of 30 seconds of sandbox time. At the current \\$0.0001-per-second rate, that works out to <strong>\\$0.003 of sandbox cost</strong> before model tokens. That \\$0.003 figure is simple arithmetic from OpenRouter's published rate and minimum; it is not a separate fee named by OpenRouter. If an agent sends several requests to the same active container in succession, OpenRouter says only the first request pays the cold-container minimum."
          }
        ]
      },
      {
        "id": "is-idle-time-billed",
        "title": "Is idle time billed?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter says time spent idle after the request ends is not billed. Containers themselves sleep after five minutes of inactivity."
          }
        ]
      },
      {
        "id": "files-api-pricing",
        "title": "Files API pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Files API usage currently has <strong>no separate charge</strong>. Workspace storage is included with Shell usage, subject to a total storage limit of <strong>10 GiB</strong> during the beta."
          }
        ]
      },
      {
        "id": "file-and-retention-limits",
        "title": "File and retention limits",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter currently allows up to <strong>20 attached files per container</strong>. Files generated in a container are retained for <strong>30 days</strong>. If a generated file needs to be kept longer or reused in future jobs, it can be promoted into workspace storage."
          }
        ]
      },
      {
        "id": "what-does-a-real-request-cost",
        "title": "What does a real request cost?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A simple cold-start job that completes in under 30 seconds still pays the 30-second sandbox minimum, currently \\$0.003, plus its model-token charges. A longer 120-second sandbox job would contribute \\$0.012 in sandbox time, again before model usage. For repeated multi-step work, reusing a live container can reduce the number of cold-start minimums. But cost optimization should not override isolation requirements: separate workloads when security or tenant boundaries require it."
          }
        ]
      },
      {
        "id": "what-is-not-included-in-these-numbers",
        "title": "What is not included in these numbers?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The published sandbox rate does not replace model pricing. You still pay for the model tokens used by the request. External services reached through allowed networking may also have their own costs. The beta announcement does not establish a universal all-in price for an agent run because the model, token count, execution duration and external services all vary."
          }
        ]
      },
      {
        "id": "beta-warning",
        "title": "Beta warning",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Shell, Bash, Files API and containers are beta features. Pricing, limits, storage policy and API behavior can change. Recheck OpenRouter's current documentation before approving a production budget or publishing hard cost comparisons."
          }
        ]
      },
      {
        "id": "source",
        "title": "Source",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter's September 8, 2026 Shell/Files announcement and linked product documentation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openrouter.ai — shell tool",
        "url": "https://openrouter.ai/blog/announcements/shell-tool/"
      },
      {
        "label": "openrouter.ai — containers",
        "url": "https://openrouter.ai/docs/features/containers"
      },
      {
        "label": "openrouter.ai — files",
        "url": "https://openrouter.ai/docs/api-reference/files"
      },
      {
        "label": "openrouter.ai — shell",
        "url": "https://openrouter.ai/docs/features/tool-calling/shell"
      }
    ],
    "relatedPaths": [
      "/blog/openrouter-shell-files-api"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "OpenRouter Shell & Files API",
    "targetSearchIntent": "Implement OpenRouter's hosted shell in an agent, attach files, reuse containers and control network access",
    "targetQuery": "how to use OpenRouter shell tool",
    "parentSlug": "openrouter-shell-files-api",
    "slug": "how-to-use-openrouter-shell-tool",
    "title": "How to Use OpenRouter Shell Tool: Responses API, Files & Containers",
    "metaTitle": "How to Use OpenRouter Shell Tool: Files, Containers & API Setup",
    "metaDescription": "A practical guide to OpenRouter's new hosted Shell tool: add openrouter:shell, upload files, reuse containers, control network access and retrieve outputs.",
    "h1": "How to Use OpenRouter Shell Tool With Files and Containers",
    "excerpt": "OpenRouter's hosted Shell tool lets a tool-calling model run commands in a Linux container through the same OpenRouter request that produces the model response. The beta is useful when an agent needs to execute code, inspect a file, generate an artifact or validate its own wor…",
    "category": "AI",
    "author": "Mayank",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Use OpenRouter Shell Tool With Files and Containers — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter's hosted Shell tool lets a tool-calling model run commands in a Linux container through the same OpenRouter request that produces the model response. The beta is useful when an agent needs to execute code, inspect a file, generate an artifact or validate its own work."
          }
        ]
      },
      {
        "id": "1-add-the-shell-tool",
        "title": "1. Add the Shell tool",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Choose a model that supports tool calling. In a Responses API request, include a tool with type <code>openrouter:shell</code> and set its engine to <code>openrouter</code>. That engine value is important: it explicitly tells OpenRouter to execute commands in its hosted sandbox. The model decides when to invoke the tool. A shell result returns command output, errors and exit status, giving the model enough information to retry or repair a failed step."
          }
        ]
      },
      {
        "id": "2-decide-whether-the-container-needs-network-access",
        "title": "2. Decide whether the container needs network access",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter containers begin with outbound networking disabled. Keep that default when the job only needs local computation. If the agent must install a package or call a remote service, supply an allowlist when the container is created. For example, a Python job that needs PyPI may allow <code>pypi.org</code> and <code>files.pythonhosted.org</code>. Avoid wildcard egress unless the workload genuinely requires it. OpenRouter says the policy cannot be changed after the container starts."
          }
        ]
      },
      {
        "id": "3-upload-an-input-file",
        "title": "3. Upload an input file",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Upload an input with <code>POST /api/v1/files</code>. OpenRouter returns a workspace file ID beginning with <code>or_file_</code>. Add that ID to the shell environment's file list when you start the container. The attached file appears inside the container as a writable copy. Editing it in the container does not alter the original workspace upload."
          }
        ]
      },
      {
        "id": "4-let-the-model-process-the-file",
        "title": "4. Let the model process the file",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once attached, the model can use shell commands or write a script to inspect and transform the file. A CSV workflow could ask the model to identify columns, write Python to clean the data, execute the script and save a summary or chart. This is where Shell is more useful than plain text generation: the model can verify that its script actually ran and react to stderr when it did not."
          }
        ]
      },
      {
        "id": "5-retrieve-the-output",
        "title": "5. Retrieve the output",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Shell results include IDs for files created or modified during execution. Those container-file IDs can be downloaded through the container file-content endpoint. If an output should survive beyond the container's normal retention window, promote it into workspace storage and reuse the returned <code>or_file_</code> ID later."
          }
        ]
      },
      {
        "id": "6-reuse-a-container-for-multi-step-work",
        "title": "6. Reuse a container for multi-step work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter can reuse a container when requests share a session ID or carry forward a previous shell result. You can also explicitly reference a known container. Reuse preserves useful state and can avoid repeatedly starting cold containers. That also affects cost: a cold container has a 30-second minimum sandbox charge, while successive requests against the same active container do not each pay the minimum."
          }
        ]
      },
      {
        "id": "practical-pattern-research-to-artifact",
        "title": "Practical pattern: research to artifact",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One useful agent workflow is to combine OpenRouter's web-search server tool with Shell. Let web search retrieve current sources, pass the material to the model, then use Shell to structure the data or write a report file. Because web search runs outside the container, the container itself can remain without direct internet access."
          }
        ]
      },
      {
        "id": "safety-and-reliability-checklist",
        "title": "Safety and reliability checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Keep network egress restricted. Do not put secrets in shell prompts unless the architecture requires them and your security review permits it. Validate generated commands before giving an agent access to sensitive files or external systems. Treat tool output as untrusted input when it came from external data. Log execution results and costs. And remember that Shell is still a beta API."
          }
        ]
      },
      {
        "id": "source",
        "title": "Source",
        "blocks": [
          {
            "type": "paragraph",
            "html": "OpenRouter's September 8, 2026 launch announcement and its current Shell, Containers and Files API documentation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "openrouter.ai — shell tool",
        "url": "https://openrouter.ai/blog/announcements/shell-tool/"
      },
      {
        "label": "openrouter.ai — containers",
        "url": "https://openrouter.ai/docs/features/containers"
      },
      {
        "label": "openrouter.ai — files",
        "url": "https://openrouter.ai/docs/api-reference/files"
      },
      {
        "label": "openrouter.ai — shell",
        "url": "https://openrouter.ai/docs/features/tool-calling/shell"
      }
    ],
    "relatedPaths": [
      "/blog/openrouter-shell-files-api"
    ]
  }
];
