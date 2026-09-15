import type { BlogArticle } from "./blog-types.ts";

export const reviewedArticles20260915A: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Cloudflare AI crawler controls",
    "targetSearchIntent": "Understand Cloudflare's September 15 AI crawler defaults, behavior categories, configuration choices and SEO/discovery implications",
    "targetQuery": "Cloudflare AI crawler settings",
    "slug": "cloudflare-ai-crawler-settings-september-15",
    "title": "Cloudflare AI Crawler Settings: New Defaults & SEO Impact",
    "metaTitle": "Cloudflare AI Crawler Settings: New Defaults & SEO Impact",
    "metaDescription": "Cloudflare’s September 15 AI crawler defaults explained: Search, Agent and Training bots, mixed-purpose crawlers, ad-page blocking and SEO risks.",
    "h1": "Cloudflare’s New AI Crawler Defaults: Search, Agent & Training Explained",
    "excerpt": "Cloudflare’s new AI crawler defaults take effect on September 15, 2026, changing how new domains—and some existing free customers that did not choose different settings—handle bots used for AI search, agents and model training.",
    "category": "SEO",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for Cloudflare’s New AI Crawler Defaults: Search, Agent & Training Explained",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare’s new AI crawler defaults take effect on September 15, 2026, changing how new domains—and some existing free customers that did not choose different settings—handle bots used for AI search, agents and model training."
          },
          {
            "type": "paragraph",
            "html": "The important change is not simply that Cloudflare can block AI bots. It is that Cloudflare now separates AI-related crawling into three behaviors: Search, Agent and Training. Site owners can treat those behaviors differently, which creates a more precise choice between discoverability and reuse."
          }
        ]
      },
      {
        "id": "what-changed-on-september-15-2026",
        "title": "What changed on September 15, 2026",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare says new domains onboarding to its network now default to allowing Search bots while blocking Training and Agent bots on pages that display ads. Its July announcement also says the changes apply to existing free customers that had not changed their settings before September 15. Customers can change these policies in the dashboard."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare’s documentation defines the categories this way:"
          },
          {
            "type": "list",
            "items": [
              "Search crawlers collect or index content so it can later be used to answer searches or questions.",
              "Agent traffic acts in real time on behalf of a person, including chat-fetch bots and browser-use agents.",
              "Training crawlers collect content to train or fine-tune models."
            ]
          },
          {
            "type": "paragraph",
            "html": "Each behavior can be allowed, blocked across a zone, or blocked only on pages where Cloudflare detects ads, depending on the available policy configuration."
          }
        ]
      },
      {
        "id": "the-mixed-purpose-crawler-change-matters-for-seo",
        "title": "The mixed-purpose crawler change matters for SEO",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The most consequential detail is how Cloudflare handles crawlers with more than one purpose."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare says multi-purpose crawlers that combine Search and Training are now evaluated according to all applicable behaviors. Because the most restrictive applicable rule wins, Cloudflare specifically warns that Googlebot, Applebot and BingBot can be blocked for customers that choose to block Training under configurations affected by this policy."
          },
          {
            "type": "paragraph",
            "html": "That does not mean blocking AI training automatically destroys Google rankings. Cloudflare does not make that claim, and search-ranking impact depends on which crawler is blocked, what behavior classification applies, and how a search provider uses that crawler."
          },
          {
            "type": "paragraph",
            "html": "It does mean site owners should no longer assume that a generic “block AI training” choice is isolated from search discovery when the same crawler performs multiple functions."
          }
        ]
      },
      {
        "id": "cloudflare-search-vs-agent-vs-training",
        "title": "Cloudflare Search vs Agent vs Training",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The three-category model is useful because these activities represent different exchanges for a publisher or business."
          },
          {
            "type": "paragraph",
            "html": "Search generally exists to make content discoverable later and can send people back to the source. Agent traffic may retrieve or interact with a site in real time for a user. Training uses content to improve a model and may not produce a direct visit at all."
          },
          {
            "type": "paragraph",
            "html": "A site can therefore want Search access while rejecting Training access. Cloudflare’s newer controls are designed around that distinction, although mixed-purpose crawlers complicate it when an operator does not separate its behaviors cleanly."
          }
        ]
      },
      {
        "id": "what-happened-to-block-ai-bots",
        "title": "What happened to “Block AI bots”?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare’s current bot documentation marks the legacy Block AI bots setting as deprecating on September 15, 2026. The newer configuration uses behavior-based AI bot policies instead."
          },
          {
            "type": "paragraph",
            "html": "This is worth checking even if a site previously configured the old toggle. A legacy rule may not express the same intent as separate Search, Agent and Training choices."
          }
        ]
      },
      {
        "id": "how-to-review-your-cloudflare-ai-crawler-policy",
        "title": "How to review your Cloudflare AI crawler policy",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare’s current documentation points users to Security Settings and the AI bot policy configuration. Review Search, Agent and Training separately rather than treating every automated crawler as one category."
          },
          {
            "type": "paragraph",
            "html": "For a site that depends on organic discovery, the safest conceptual order is:"
          },
          {
            "type": "list",
            "items": [
              "Decide whether search discovery should remain available.",
              "Decide whether real-time agents should be able to fetch or act on the site.",
              "Decide whether model-training crawlers may use the content.",
              "Check how Cloudflare classifies mixed-purpose crawlers relevant to the site.",
              "Recheck robots.txt and edge-level behavior after changing a policy."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "Do not copy another publisher’s settings blindly. An ad-supported publication, ecommerce site, documentation site and private application can have very different incentives."
          }
        ]
      },
      {
        "id": "bot-preference-sync-and-robots-txt",
        "title": "Bot Preference Sync and robots.txt",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare has also announced Bot Preference Sync, which reflects AI bot configuration in robots.txt. Cloudflare says it can prepend generated preferences while preserving existing Disallow directives."
          },
          {
            "type": "paragraph",
            "html": "There is an important distinction between preference and enforcement. robots.txt communicates instructions to cooperating crawlers; Cloudflare’s edge controls can enforce blocks against traffic it identifies. Site owners with complex custom crawler rules may prefer to manage those policies manually."
          },
          {
            "type": "paragraph",
            "html": "Because Bot Preference Sync has had its own rollout path, verify its current availability in your Cloudflare account before assuming that a dashboard policy has rewritten robots.txt."
          }
        ]
      },
      {
        "id": "does-this-affect-google-indexing",
        "title": "Does this affect Google indexing?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Potentially, but not in one universal way."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare explicitly names Googlebot among mixed-purpose crawlers that can be affected when Training is blocked under the new policy logic. That makes crawler configuration an SEO-sensitive setting."
          },
          {
            "type": "paragraph",
            "html": "However, Cloudflare does not document a guaranteed ranking or indexing outcome from any particular policy. Search engines also operate multiple crawlers and product surfaces. The correct response is to verify actual crawl access and Search Console behavior rather than infer a ranking penalty from the setting alone."
          }
        ]
      },
      {
        "id": "why-this-matters-beyond-cloudflare",
        "title": "Why this matters beyond Cloudflare",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The change reflects a broader shift in web infrastructure: “AI crawler” is no longer a useful single category."
          },
          {
            "type": "paragraph",
            "html": "Search indexing, model training and user-directed agents have different purposes. Cloudflare is turning those distinctions into infrastructure-level controls, which means SEO and content-distribution decisions increasingly overlap with AI data policy."
          },
          {
            "type": "paragraph",
            "html": "For publishers, marketers and site owners, the practical lesson is simple: decide which forms of machine access create value for you, then configure them deliberately."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When did Cloudflare’s new AI crawler defaults take effect?"
          },
          {
            "type": "paragraph",
            "html": "September 15, 2026."
          },
          {
            "type": "subheading",
            "text": "What are Cloudflare’s three AI crawler categories?"
          },
          {
            "type": "paragraph",
            "html": "Search, Agent and Training."
          },
          {
            "type": "subheading",
            "text": "Are Training and Agent bots blocked everywhere by default?"
          },
          {
            "type": "paragraph",
            "html": "No. Cloudflare’s stated new-domain default is to block Training and Agent on pages that display ads while allowing Search. Existing-account behavior can depend on plan and prior configuration."
          },
          {
            "type": "subheading",
            "text": "Can blocking AI training affect Googlebot?"
          },
          {
            "type": "paragraph",
            "html": "Cloudflare says mixed-purpose crawlers including Googlebot can be blocked when Training is blocked under applicable configurations. That is why site owners should review the exact policy rather than assume training and search are always separable."
          },
          {
            "type": "subheading",
            "text": "Is robots.txt enough to block an AI crawler?"
          },
          {
            "type": "paragraph",
            "html": "robots.txt is a preference that cooperating crawlers can honor. Edge enforcement is a separate mechanism."
          },
          {
            "type": "subheading",
            "text": "Should every website allow Search and block Training?"
          },
          {
            "type": "paragraph",
            "html": "Not necessarily. The right policy depends on how the site values discoverability, agent access, content licensing, privacy and machine reuse."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Cloudflare — Official source",
        "url": "https://blog.cloudflare.com/content-independence-day-ai-options/"
      },
      {
        "label": "Cloudflare — Official source",
        "url": "https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/"
      },
      {
        "label": "Cloudflare — Official source",
        "url": "https://www.cloudflare.com/press/press-releases/2026/cloudflare-allows-the-agentic-internet-to-flourish-with-a-simple-philosophy-your-content-your-rules/"
      },
      {
        "label": "Cloudflare — Official source",
        "url": "https://blog.cloudflare.com/bot-preference-sync/"
      }
    ],
    "relatedPaths": [
      "/blog/configure-cloudflare-ai-crawler-settings",
      "/blog/cloudflare-ai-crawler-googlebot-seo"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Cloudflare AI crawler controls",
    "targetSearchIntent": "Configure Search, Agent and Training crawler policies without unintentionally changing desired discovery",
    "targetQuery": "how to configure Cloudflare AI crawler settings",
    "parentSlug": "cloudflare-ai-crawler-settings-september-15",
    "slug": "configure-cloudflare-ai-crawler-settings",
    "title": "How to Configure Cloudflare AI Crawler Settings",
    "metaTitle": "How to Configure Cloudflare AI Crawler Settings",
    "metaDescription": "Configure Cloudflare Search, Agent and Training crawler policies safely, understand ad-page blocking, mixed-purpose bots and robots.txt verification.",
    "h1": "How to Configure Cloudflare AI Crawler Settings",
    "excerpt": "Cloudflare now lets site owners manage AI-related crawlers by behavior instead of relying on one broad AI-bot switch. The three categories are Search, Agent and Training, and the right configuration depends on whether you want discovery, real-time agent access, model-training access, or some combination of them.",
    "category": "SEO",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for How to Configure Cloudflare AI Crawler Settings",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare now lets site owners manage AI-related crawlers by behavior instead of relying on one broad AI-bot switch. The three categories are Search, Agent and Training, and the right configuration depends on whether you want discovery, real-time agent access, model-training access, or some combination of them."
          }
        ]
      },
      {
        "id": "before-changing-anything",
        "title": "Before changing anything",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Write down the outcome you actually want. For many public sites, “block AI” is too vague."
          },
          {
            "type": "paragraph",
            "html": "You may want search engines and answer engines to discover your pages while preventing model-training crawlers from ingesting them. You may want AI agents to fetch public documentation but not interact with sensitive routes. An ad-supported publisher may have different priorities from a SaaS documentation site."
          }
        ]
      },
      {
        "id": "where-cloudflare-puts-the-controls",
        "title": "Where Cloudflare puts the controls",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare’s current documentation directs customers to Security Settings and Configure AI bot policies. The available behavior groups are Search, Agent and Training."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare documents three mitigation choices for each behavior: block across the zone, block only on pages that display ads, or allow."
          }
        ]
      },
      {
        "id": "step-1-review-search",
        "title": "Step 1: Review Search",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Search covers crawlers that collect or index content so it can answer questions later. If organic and AI-search discovery matter to your site, understand what will be blocked before changing this category."
          }
        ]
      },
      {
        "id": "step-2-review-agent",
        "title": "Step 2: Review Agent",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Agent covers automated activity acting in real time on a person’s behalf, including chat-fetch and browser-use agents. Decide whether those systems should be able to access the public site and whether ad-page-specific blocking matches your business model."
          }
        ]
      },
      {
        "id": "step-3-review-training",
        "title": "Step 3: Review Training",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Training covers crawlers that use content to train or fine-tune models. Cloudflare’s September 15 defaults block this category on ad-displaying pages for new domains while Search remains allowed."
          },
          {
            "type": "paragraph",
            "html": "The complication is mixed-purpose crawling. A crawler can perform both Search and Training, so a Training block can affect it under Cloudflare’s most-restrictive-rule logic."
          }
        ]
      },
      {
        "id": "step-4-check-mixed-purpose-crawlers",
        "title": "Step 4: Check mixed-purpose crawlers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not skip this step if search visibility matters."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare specifically says Googlebot, Applebot and BingBot are examples of multi-purpose crawlers that can be blocked when a customer chooses to block Training under applicable configurations."
          },
          {
            "type": "paragraph",
            "html": "That does not prove a ranking loss. It means the configuration can affect crawler access, which should be tested rather than assumed."
          }
        ]
      },
      {
        "id": "step-5-verify-robots-txt-separately",
        "title": "Step 5: Verify robots.txt separately",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare’s Bot Preference Sync is designed to reflect AI bot policy choices in robots.txt. robots.txt is still a declared preference for cooperating crawlers, while edge blocking is enforcement."
          },
          {
            "type": "paragraph",
            "html": "If you use custom crawler rules or have special agreements with a bot operator, inspect the resulting robots.txt rather than assuming category-wide sync expresses every exception correctly."
          }
        ]
      },
      {
        "id": "step-6-test-the-result",
        "title": "Step 6: Test the result",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After a policy change:"
          },
          {
            "type": "list",
            "items": [
              "Load your public robots.txt and review relevant directives.",
              "Check Cloudflare bot/security analytics for blocked crawler activity where available.",
              "Test important public routes as appropriate.",
              "Monitor Google Search Console crawl and indexing signals if Google discovery matters.",
              "Revisit the policy if desired Search traffic is being caught by a Training rule."
            ],
            "ordered": true
          }
        ]
      },
      {
        "id": "a-practical-policy-framework",
        "title": "A practical policy framework",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For a public content site, ask three separate questions: Do I want this content discoverable? Do I want an agent to retrieve it for a user right now? Do I want it used for model training?"
          },
          {
            "type": "paragraph",
            "html": "Answering those separately is more useful than asking whether you “allow AI bots.”"
          }
        ]
      },
      {
        "id": "what-not-to-assume",
        "title": "What not to assume",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not assume every existing Cloudflare account received the same September 15 defaults. Do not assume blocking Training is always isolated from Search. Do not assume robots.txt itself enforces a block. And do not assume a crawler’s classification will never change."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare’s model is useful precisely because these policies are becoming more granular. Treat them as distribution settings, not merely security toggles."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Cloudflare — Official source",
        "url": "https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/"
      },
      {
        "label": "Cloudflare — Official source",
        "url": "https://blog.cloudflare.com/content-independence-day-ai-options/"
      },
      {
        "label": "Cloudflare — Official source",
        "url": "https://blog.cloudflare.com/bot-preference-sync/"
      }
    ],
    "relatedPaths": [
      "/blog/cloudflare-ai-crawler-settings-september-15",
      "/blog/cloudflare-ai-crawler-googlebot-seo"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Cloudflare AI crawler controls",
    "targetSearchIntent": "Understand whether Cloudflare AI-training policies can block mixed-purpose search crawlers and how to assess SEO risk",
    "targetQuery": "Cloudflare AI crawler settings Googlebot SEO",
    "parentSlug": "cloudflare-ai-crawler-settings-september-15",
    "slug": "cloudflare-ai-crawler-googlebot-seo",
    "title": "Cloudflare AI Crawler Settings, Googlebot & SEO: What Can Get Blocked",
    "metaTitle": "Cloudflare AI Crawler Settings, Googlebot & SEO",
    "metaDescription": "Cloudflare says mixed Search+Training crawlers can be blocked by Training rules. Here’s what that means for Googlebot, indexing and SEO verification.",
    "h1": "Cloudflare AI Crawler Settings, Googlebot & SEO: What Can Get Blocked",
    "excerpt": "Cloudflare’s September 15, 2026 AI crawler policy change creates an SEO-sensitive edge case: a crawler that performs both Search and Training can be affected by a rule intended to block Training.",
    "category": "SEO",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for Cloudflare AI Crawler Settings, Googlebot & SEO: What Can Get Blocked",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare’s September 15, 2026 AI crawler policy change creates an SEO-sensitive edge case: a crawler that performs both Search and Training can be affected by a rule intended to block Training."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare explicitly names Googlebot, Applebot and BingBot as examples of multi-purpose crawlers in its announcement. That makes it important to understand what Cloudflare actually says—and what it does not say—before changing AI crawler settings on a site that depends on organic discovery."
          }
        ]
      },
      {
        "id": "why-mixed-purpose-crawlers-are-different",
        "title": "Why mixed-purpose crawlers are different",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Cloudflare now classifies AI-related crawler behavior as Search, Agent or Training. A single crawler can have more than one behavior."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare says the most restrictive applicable rule is enforced for multi-purpose crawlers. Therefore, if a crawler is classified for both Search and Training and the site blocks Training, that crawler can be blocked even if Search is otherwise allowed."
          }
        ]
      },
      {
        "id": "does-blocking-training-block-googlebot",
        "title": "Does blocking Training block Googlebot?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "It can under the policy conditions Cloudflare describes."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare’s July announcement specifically says multi-purpose crawlers such as Googlebot, Applebot and BingBot will be blocked for customers who selected to block Training through affected new AI-traffic options or the legacy Block AI bots service."
          },
          {
            "type": "paragraph",
            "html": "This is a crawler-access statement from Cloudflare. It is not a statement that a site will automatically lose rankings."
          }
        ]
      },
      {
        "id": "why-googlebot-does-not-equal-one-seo-outcome",
        "title": "Why “Googlebot” does not equal one SEO outcome",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Search platforms operate multiple crawlers, services and indexing systems. A blocked request only tells you that a particular request did not reach the content through that path."
          },
          {
            "type": "paragraph",
            "html": "Ranking and indexing consequences depend on which crawler was blocked, how often, which URLs were affected, whether another crawler can access them, and how the search engine uses that content."
          },
          {
            "type": "paragraph",
            "html": "That is why a configuration change should be followed by measurement rather than a prediction of guaranteed traffic loss."
          }
        ]
      },
      {
        "id": "what-to-check-after-changing-cloudflare-ai-bot-policies",
        "title": "What to check after changing Cloudflare AI bot policies",
        "blocks": [
          {
            "type": "paragraph",
            "html": "First, inspect robots.txt. If Bot Preference Sync is active, policy preferences may be reflected there. Remember that robots.txt and Cloudflare edge enforcement are different layers."
          },
          {
            "type": "paragraph",
            "html": "Second, inspect Cloudflare analytics/security events for relevant crawler blocks where your plan exposes them."
          },
          {
            "type": "paragraph",
            "html": "Third, monitor Search Console. Watch for changes in crawl behavior, indexing, discovered URLs and search performance. A short-term fluctuation alone does not prove causation, but a crawler-policy change gives you a concrete event to correlate against."
          },
          {
            "type": "paragraph",
            "html": "Fourth, test important templates separately. Cloudflare supports blocking on pages displaying ads, so behavior may differ across sections of the same site."
          }
        ]
      },
      {
        "id": "search-visibility-versus-training-control",
        "title": "Search visibility versus training control",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The policy problem exists because some crawler operators combine purposes. A publisher may want Search indexing but not model training. Cloudflare’s controls can express that preference, but a mixed-purpose crawler can force a stricter result."
          },
          {
            "type": "paragraph",
            "html": "Cloudflare has argued that bot operators should separate behaviors more transparently so site owners do not have to choose between discoverability and training access."
          }
        ]
      },
      {
        "id": "what-should-seo-teams-do",
        "title": "What should SEO teams do?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Treat AI crawler settings as part of technical SEO governance."
          },
          {
            "type": "paragraph",
            "html": "Before changing Training rules, identify which search and answer-engine crawlers matter to the business. After the change, verify access and first-party search data. If a desired crawler is being blocked because it is classified as mixed-purpose, decide whether the training restriction or the discovery benefit matters more for that site."
          },
          {
            "type": "paragraph",
            "html": "There is no universal correct answer. A publisher with valuable licensed content may choose differently from a product site whose priority is maximum discovery."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Did Cloudflare start blocking Googlebot globally on September 15?"
          },
          {
            "type": "paragraph",
            "html": "No. Cloudflare describes specific policy conditions under which mixed-purpose crawlers can be blocked. It does not say Googlebot is globally blocked for every Cloudflare site."
          },
          {
            "type": "subheading",
            "text": "Does blocking AI training guarantee an SEO penalty?"
          },
          {
            "type": "paragraph",
            "html": "No. Cloudflare does not document a guaranteed ranking penalty. The immediate technical question is crawler access; SEO impact must be measured."
          },
          {
            "type": "subheading",
            "text": "Why can Search be allowed while Googlebot is blocked?"
          },
          {
            "type": "paragraph",
            "html": "Because Cloudflare can classify one crawler as serving multiple purposes. When Search is allowed but Training is blocked, the most restrictive applicable behavior can win for a mixed-purpose crawler."
          },
          {
            "type": "subheading",
            "text": "What data should I monitor?"
          },
          {
            "type": "paragraph",
            "html": "Cloudflare crawler/security data where available, robots.txt, crawl tests, and Google Search Console indexing and performance evidence."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Cloudflare — Official source",
        "url": "https://blog.cloudflare.com/content-independence-day-ai-options/"
      },
      {
        "label": "Cloudflare — Official source",
        "url": "https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/"
      },
      {
        "label": "Cloudflare — Official source",
        "url": "https://www.cloudflare.com/press/press-releases/2026/cloudflare-allows-the-agentic-internet-to-flourish-with-a-simple-philosophy-your-content-your-rules/"
      }
    ],
    "relatedPaths": [
      "/blog/cloudflare-ai-crawler-settings-september-15",
      "/blog/configure-cloudflare-ai-crawler-settings"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Siri AI",
    "targetSearchIntent": "Broad overview of Siri AI launch, features, availability, supported devices, languages, limits and rollout status",
    "targetQuery": "Siri AI",
    "slug": "siri-ai",
    "title": "Siri AI: Release Date, Features, Supported Devices & Availability",
    "metaTitle": "Siri AI: Release Date, Features, Devices & Availability",
    "metaDescription": "Siri AI is rolling out in beta with iOS 27. See what shipped, supported devices and languages, regional availability, daily limits, and what comes next.",
    "h1": "Siri AI Is Here: Features, Devices, Availability & Limits",
    "excerpt": "Apple released Siri AI into beta on September 14, 2026 with iOS 27, iPadOS 27, macOS 27, watchOS 27 and visionOS 27. It is the most substantial Siri redesign in Apple’s current software cycle, combining conversational responses with personal-context understanding, onscreen awareness, web/world knowledge and broader actions across apps.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for Siri AI Is Here: Features, Devices, Availability & Limits",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Apple released Siri AI into beta on September 14, 2026 with iOS 27, iPadOS 27, macOS 27, watchOS 27 and visionOS 27. It is the most substantial Siri redesign in Apple’s current software cycle, combining conversational responses with personal-context understanding, onscreen awareness, web/world knowledge and broader actions across apps."
          }
        ]
      },
      {
        "id": "what-is-siri-ai",
        "title": "What is Siri AI?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI is Apple’s new Apple Intelligence-powered version of Siri. Apple says it can use context from a user’s messages, email, photos and other personal information to answer questions and complete tasks. It can also reason about what is currently on screen and use current web information when needed."
          },
          {
            "type": "paragraph",
            "html": "A practical example Apple gives is finding a suggestion buried in Messages, locating related instructions in Mail and then adding ingredients to Reminders. Apple also demonstrates actions such as drafting email and editing or sharing photos."
          }
        ]
      },
      {
        "id": "release-date-and-rollout",
        "title": "Release date and rollout",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI began rolling out September 14, 2026 as a beta in English. Apple says French, Japanese, Korean, Portuguese and Spanish support is planned for October 2026."
          },
          {
            "type": "paragraph",
            "html": "The beta ships through iOS 27, iPadOS 27, macOS 27, watchOS 27 and visionOS 27. Availability still depends on having an Apple Intelligence-capable device and supported settings."
          }
        ]
      },
      {
        "id": "main-features",
        "title": "Main features",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The launch version centers on four capabilities: personal-context understanding; onscreen awareness; broad world knowledge and current web information; and expanded systemwide app actions."
          },
          {
            "type": "paragraph",
            "html": "Not every demonstrated third-party integration is live on day one. Apple says additional actions in apps including Microsoft Outlook, Notability and Tripsy are coming soon, so those should not be treated as currently universal."
          }
        ]
      },
      {
        "id": "supported-devices",
        "title": "Supported devices",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Apple lists support across recent Apple Intelligence-capable hardware, including iPhone 15 Pro and Pro Max, iPhone 16 models or later, iPhone Air and iPhone Duo; iPad mini with A17 Pro and iPads with M1 or later; Macs with M1 or later plus MacBook Neo; Apple Vision Pro; and supported recent Apple Watch models when paired with a compatible iPhone. Check Apple’s live requirements before buying hardware specifically for Siri AI because the list can change."
          }
        ]
      },
      {
        "id": "where-is-siri-ai-available",
        "title": "Where is Siri AI available?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The first Siri AI beta is English-first. It is initially unavailable on iPhone, iPad and Apple Watch in the EU, although Apple says Mac and Vision Pro users in the EU can access it when configured to a supported language. Siri AI and the other new Apple Intelligence features are not available in China while Apple works through regulatory requirements."
          }
        ]
      },
      {
        "id": "does-siri-ai-have-a-usage-limit",
        "title": "Does Siri AI have a usage limit?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Yes, for some requests. Apple states that certain Apple Intelligence features relying on server-side models — including Siri AI — are subject to daily usage limits. Apple does not publish one fixed numeric Siri AI quota: limits can vary by feature, request complexity, system demand and policy."
          },
          {
            "type": "paragraph",
            "html": "Apple also says expanded access to these server-side features will be available for a fee in the future. It has not announced the price or exact paid quota, so any specific figure would currently be speculation."
          }
        ]
      },
      {
        "id": "is-siri-ai-free",
        "title": "Is Siri AI free?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI is included with supported Apple products during the current rollout, subject to the stated server-side usage limits. Apple has announced future paid expanded access but has not disclosed pricing."
          }
        ]
      },
      {
        "id": "what-to-watch-next",
        "title": "What to watch next",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The most important near-term developments are the October language expansion, broader third-party app actions, regional availability changes, and Apple’s eventual details for paid expanded usage. Those are material enough to update this canonical article when confirmed."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is Siri AI available now?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Apple began the beta rollout on September 14, 2026, subject to device, language and regional eligibility."
          },
          {
            "type": "subheading",
            "text": "Is Siri AI available in the EU?"
          },
          {
            "type": "paragraph",
            "html": "Not initially on iPhone, iPad or Apple Watch. Apple says eligible Mac and Vision Pro users in the EU can access it with supported language settings."
          },
          {
            "type": "subheading",
            "text": "Is Siri AI available in China?"
          },
          {
            "type": "paragraph",
            "html": "No. Apple says Siri AI and the other new Apple Intelligence features are not currently available in China while it works through regulatory requirements."
          },
          {
            "type": "subheading",
            "text": "Does Siri AI cost money?"
          },
          {
            "type": "paragraph",
            "html": "Apple has not announced a standalone Siri AI subscription. It has said expanded access to server-side Apple Intelligence features will be available for a fee in the future."
          },
          {
            "type": "subheading",
            "text": "Does Siri AI replace the old Siri?"
          },
          {
            "type": "paragraph",
            "html": "On eligible devices and software, Siri AI is Apple’s new generation of Siri, but rollout and capabilities vary by device, region and language."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/"
      },
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/"
      },
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/"
      }
    ],
    "relatedPaths": [
      "/blog/how-to-use-siri-ai",
      "/blog/siri-ai-supported-devices-countries-languages"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Siri AI",
    "targetSearchIntent": "Enable Siri AI on an eligible device and understand how to use personal context, onscreen awareness and app actions",
    "targetQuery": "how to use Siri AI",
    "parentSlug": "siri-ai",
    "slug": "how-to-use-siri-ai",
    "title": "How to Use Siri AI: Enable It, Ask Questions & Use App Actions",
    "metaTitle": "How to Use Siri AI: Setup, Prompts & App Actions",
    "metaDescription": "Learn how to access Siri AI in iOS 27, check eligibility, use personal context and onscreen awareness, and understand which app actions are available.",
    "h1": "How to Use Siri AI on iOS 27 and Apple’s New Software",
    "excerpt": "Siri AI began rolling out in beta on September 14, 2026. Using it starts with eligibility: you need a supported Apple Intelligence-capable device, current software, a supported language and a region where Siri AI is available.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for How to Use Siri AI on iOS 27 and Apple’s New Software",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI began rolling out in beta on September 14, 2026. Using it starts with eligibility: you need a supported Apple Intelligence-capable device, current software, a supported language and a region where Siri AI is available."
          }
        ]
      },
      {
        "id": "1-update-your-device",
        "title": "1. Update your device",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Install iOS 27, iPadOS 27, macOS 27, watchOS 27 or visionOS 27 on eligible hardware. Siri AI is part of Apple’s new software rollout rather than a separate app download."
          }
        ]
      },
      {
        "id": "2-check-apple-intelligence-eligibility",
        "title": "2. Check Apple Intelligence eligibility",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI requires an Apple Intelligence-enabled device. On iPhone, Apple’s current list includes iPhone 15 Pro/Pro Max and newer supported families. Macs with M1 or later are broadly supported, alongside eligible iPads, Vision Pro and recent Apple Watch models under Apple’s stated pairing requirements."
          }
        ]
      },
      {
        "id": "3-check-language-and-region",
        "title": "3. Check language and region",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The initial Siri AI beta is rolling out in English. Apple says French, Japanese, Korean, Portuguese and Spanish are coming in October 2026. It is initially unavailable on iPhone, iPad and Apple Watch in the EU and unavailable in China. This means a fully updated device can still legitimately lack Siri AI."
          }
        ]
      },
      {
        "id": "4-use-normal-siri-requests-but-with-more-context",
        "title": "4. Use normal Siri requests — but with more context",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Apple designed Siri AI to support natural multi-turn conversation. You can ask ordinary knowledge questions, request current information, or ask it to act on personal context."
          },
          {
            "type": "paragraph",
            "html": "Examples of useful intent patterns include: finding a detail someone sent you; locating information across messages and email; asking about something visible on screen; or combining information retrieval with an action such as adding an item to Reminders."
          }
        ]
      },
      {
        "id": "5-use-onscreen-awareness",
        "title": "5. Use onscreen awareness",
        "blocks": [
          {
            "type": "paragraph",
            "html": "When relevant content is visible, ask Siri about what you are viewing. Apple demonstrates Siri identifying information from websites and adding useful results to other apps. Visual Intelligence also extends the idea to camera and visual contexts on supported devices."
          }
        ]
      },
      {
        "id": "6-use-app-actions-carefully",
        "title": "6. Use app actions carefully",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI can perform broader systemwide actions, but app support is not uniform. Existing Siri integrations continue to work, while Apple says some deeper third-party actions — including examples involving Outlook, Notability and Tripsy — are coming soon. If an advertised action does not work yet, it may not have rolled out rather than being a configuration failure."
          }
        ]
      },
      {
        "id": "7-understand-server-side-limits",
        "title": "7. Understand server-side limits",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Some Siri AI requests rely on server-side Apple Intelligence models and are subject to daily usage limits. Apple does not publish one numeric quota. Limits may vary with request complexity, demand and policy. Apple says expanded access will eventually be available for a fee, but no price has been announced."
          }
        ]
      },
      {
        "id": "if-siri-ai-is-not-showing",
        "title": "If Siri AI is not showing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Check these in order: supported device; current OS version; Apple Intelligence enabled; supported language; region eligibility; and whether the feature is still rolling out to your device. Do not rely on unofficial workarounds that claim to bypass regional restrictions."
          }
        ]
      },
      {
        "id": "what-siri-ai-is-best-at-right-now",
        "title": "What Siri AI is best at right now",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The most distinctive launch workflows are questions grounded in personal context, questions/actions related to the current screen, current-information requests, and multi-app tasks. Because Siri AI is still a beta, expect capabilities and third-party actions to change."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/"
      },
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/"
      },
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/"
      }
    ],
    "relatedPaths": [
      "/blog/siri-ai",
      "/blog/siri-ai-supported-devices-countries-languages"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Siri AI",
    "targetSearchIntent": "Determine whether Siri AI is available on a specific Apple device, language and region",
    "targetQuery": "Siri AI supported devices",
    "parentSlug": "siri-ai",
    "slug": "siri-ai-supported-devices-countries-languages",
    "title": "Siri AI Supported Devices, Countries & Languages: Full Availability Guide",
    "metaTitle": "Siri AI Supported Devices, Countries & Languages",
    "metaDescription": "Check Siri AI device support, English beta rollout, October language expansion, EU and China restrictions, and Apple Intelligence requirements.",
    "h1": "Siri AI Supported Devices, Countries & Languages",
    "excerpt": "Siri AI availability depends on three things at once: hardware, software/language settings and region. Apple began the beta rollout on September 14, 2026, but not every Apple Intelligence device receives the same availability everywhere.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15",
    "ogAlt": "Editorial illustration for Siri AI Supported Devices, Countries & Languages",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI availability depends on three things at once: hardware, software/language settings and region. Apple began the beta rollout on September 14, 2026, but not every Apple Intelligence device receives the same availability everywhere."
          }
        ]
      },
      {
        "id": "supported-software",
        "title": "Supported software",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI rolls out through iOS 27, iPadOS 27, macOS 27, watchOS 27 and visionOS 27. A supported device still needs the current software and Apple Intelligence enabled."
          }
        ]
      },
      {
        "id": "supported-iphones",
        "title": "Supported iPhones",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Apple’s September release notes list iPhone Duo, iPhone Air, iPhone 16 models or later, iPhone 15 Pro and iPhone 15 Pro Max among Siri AI/Apple Intelligence-supported iPhones."
          }
        ]
      },
      {
        "id": "supported-ipads",
        "title": "Supported iPads",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Apple lists iPad mini with A17 Pro and iPad models with M1 or later."
          }
        ]
      },
      {
        "id": "supported-macs",
        "title": "Supported Macs",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Macs with M1 or later are supported, along with MacBook Neo with A18 Pro according to Apple’s current requirements."
          }
        ]
      },
      {
        "id": "apple-vision-pro-and-apple-watch",
        "title": "Apple Vision Pro and Apple Watch",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Apple Vision Pro is supported. Apple lists Apple Watch Series 9 or later, Apple Watch Ultra 2 or later and Apple Watch SE 3 when paired with an Apple Intelligence-enabled iPhone; some Watch features require the iPhone nearby."
          }
        ]
      },
      {
        "id": "languages",
        "title": "Languages",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Siri AI beta begins in English. Apple says French, Japanese, Korean, Portuguese and Spanish support is coming in October 2026. Broader Apple Intelligence language support should not be confused with Siri AI language availability: Siri AI itself has the narrower launch-language schedule."
          }
        ]
      },
      {
        "id": "european-union-availability",
        "title": "European Union availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Siri AI is not initially available in the EU on iOS, iPadOS and watchOS. Apple says Mac and Vision Pro users in the EU can access Siri AI when set to a supported language. Apple says it is working on a path forward for the restricted platforms but has not supplied a release date."
          }
        ]
      },
      {
        "id": "china-availability",
        "title": "China availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Apple says Siri AI and the other new Apple Intelligence features are not available in China while it works through regulatory requirements. No launch date has been announced."
          }
        ]
      },
      {
        "id": "why-siri-ai-may-not-appear-even-on-a-supported-device",
        "title": "Why Siri AI may not appear even on a supported device",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A device can meet the hardware requirement and still lack Siri AI because of OS version, language, region, Apple Intelligence settings or staged beta rollout. Check all of these before assuming the device is unsupported."
          }
        ]
      },
      {
        "id": "availability-checklist",
        "title": "Availability checklist",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Confirm the device is on Apple’s supported hardware list.",
              "Install the relevant 27-series OS release.",
              "Enable Apple Intelligence.",
              "Use a currently supported Siri AI language.",
              "Confirm the region is eligible.",
              "Account for the fact that Siri AI is a beta rollout."
            ],
            "ordered": true
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Does iPhone 15 support Siri AI?"
          },
          {
            "type": "paragraph",
            "html": "Apple specifically lists iPhone 15 Pro and iPhone 15 Pro Max, not the standard iPhone 15 models, in its current Siri AI/Apple Intelligence compatibility notes."
          },
          {
            "type": "subheading",
            "text": "Is Siri AI available in Europe?"
          },
          {
            "type": "paragraph",
            "html": "Availability is split by platform. It is initially unavailable in the EU on iPhone, iPad and Apple Watch, while eligible Mac and Vision Pro users can access it with supported language settings."
          },
          {
            "type": "subheading",
            "text": "When does Siri AI get more languages?"
          },
          {
            "type": "paragraph",
            "html": "Apple says French, Japanese, Korean, Portuguese and Spanish are coming in October 2026. Treat that as Apple’s announced plan rather than a guarantee for every country on the same day."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/09/siri-ai-a-profoundly-more-capable-and-personal-assistant-is-here/"
      },
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/"
      },
      {
        "label": "Apple — Siri AI / platform update",
        "url": "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/"
      }
    ],
    "relatedPaths": [
      "/blog/siri-ai",
      "/blog/how-to-use-siri-ai"
    ]
  }
];
