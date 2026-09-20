import type { BlogArticle } from "./blog-types.ts";

export const koalaAiMcpArticles: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Koala AI MCP",
    "targetSearchIntent": "Understand Koala AI MCP, its tools, beta access, pricing, supported clients and use cases",
    "targetQuery": "Koala AI MCP",
    "slug": "koala-ai-mcp",
    "title": "Koala AI MCP: 62 SEO Tools, Pricing & Setup Guide",
    "metaTitle": "Koala AI MCP: 62 SEO Tools, Pricing & Setup Guide",
    "metaDescription": "Koala AI MCP gives Claude, ChatGPT, Codex and other MCP clients 62 SEO, research and content tools. See beta access, pricing, credits, permissions and setup.",
    "h1": "Koala AI MCP: 62 SEO and Content Tools for AI Agents",
    "excerpt": "Koala AI MCP gives Claude, ChatGPT, Codex and other MCP clients 62 SEO, research and content tools. See beta access, pricing, credits, permissions and setup.",
    "category": "SEO",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for Koala AI MCP: 62 SEO Tools, Pricing & Setup Guide",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koala AI MCP is a remote Model Context Protocol server that lets compatible AI assistants call Koala AI's SEO, research, analytics and content tools without forcing the user to work inside a separate SEO dashboard. Koala launched the MCP beta on September 16, 2026. The dedicated launch page says it exposes 62 tools and works with Claude, ChatGPT, Codex, Claude Code, Cursor and other MCP clients that support remote HTTP MCP with OAuth."
          },
          {
            "type": "paragraph",
            "html": "The core SEO layer includes keyword research, live SERPs, competitor rankings, backlink data and AI-search visibility. Koala also exposes Brand DNA context and, when the user has linked them, Google Search Console and Google Analytics data. This means an agent can combine external research with first-party search and traffic evidence instead of treating keyword data in isolation."
          },
          {
            "type": "paragraph",
            "html": "Koala says 23 of the 62 MCP tools use no platform credits. Its own Search Console and Analytics tools are among the no-credit tools because they query the user's connected data. Paid data tools use a per-call credit rate: the current MCP page says a raw page fetch starts at 0.1 credits, most keyword and competitor lookups cost 1 credit, backlink lookups cost 2, and historical traffic can cost 4. Keyword ideas and variations cost 1 credit per seed keyword. Writing uses the account's word allowance rather than the same data-call rate."
          },
          {
            "type": "paragraph",
            "html": "At launch, the dedicated MCP page and September 16 changelog describe the beta as available to Professional plans and above for accounts that join the beta. Koala's current pricing page lists Professional at $49/month, including 100,000 KoalaWriter words and 1,000 platform credits per month. Higher tiers increase words, credits and Brand DNA capacity. Because Koala has other API and plan pages with broader wording, eligibility should be rechecked against the MCP page before purchase."
          }
        ]
      },
      {
        "id": "capabilities-and-workflow",
        "title": "Capabilities and workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Connection uses one remote endpoint and OAuth. Koala's documented MCP URL is <a href=\"https://koala.sh/api/mcp\">https://koala.sh/api/mcp</a>. Users authorize in the browser and can choose which tools and brands a connected app may access. Koala says an API key is not required for the normal MCP sign-in flow, although its API documentation also notes existing API-key authentication as an option."
          },
          {
            "type": "paragraph",
            "html": "The MCP is more than read-only research. Koala's September 16 changelog says connected assistants can create KoalaWriter articles, check article status, read articles back, edit them and generate images through KoalaImages. This makes it possible to move from research to a draft while remaining in an AI client."
          },
          {
            "type": "paragraph",
            "html": "A particularly useful workflow is first-party SEO diagnosis. An agent can inspect Search Console queries and pages, compare them with keyword and SERP data, check whether a target topic is already covered, and then decide whether an existing page should be strengthened or a new article is justified. This is potentially more useful than simply asking a general chatbot for keywords because the agent can work from actual site performance when the integrations are authorized."
          },
          {
            "type": "paragraph",
            "html": "There are important boundaries. MCP access does not make every tool free. Data calls can spend platform credits and content generation can spend the word allowance. The product is still in beta, so tool availability, eligibility and setup can change. Users should also treat per-app permissions seriously because connecting Search Console, Analytics and Brand DNA gives an assistant access to meaningful business data."
          }
        ]
      },
      {
        "id": "access-pricing-and-requirements",
        "title": "Access, pricing and requirements",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koala AI already has a conventional API. The MCP serves a different interface: it lets an MCP-capable assistant discover and invoke tools conversationally, while the API is better suited to code that needs explicit programmatic requests. Which one is appropriate depends on whether the workflow is agent-driven or application-driven."
          },
          {
            "type": "paragraph",
            "html": "Is Koala AI MCP available now? Yes, as a beta. The dedicated launch page says Professional+ accounts must join the beta."
          },
          {
            "type": "paragraph",
            "html": "Does Koala MCP work with ChatGPT? Koala explicitly lists ChatGPT browser Developer mode among its setup options, alongside Claude, Codex, Claude Code and Cursor."
          },
          {
            "type": "paragraph",
            "html": "Does it require an API key? The standard MCP flow uses browser sign-in/OAuth and does not require copying an API key."
          }
        ]
      },
      {
        "id": "practical-guidance-and-limitations",
        "title": "Practical guidance and limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Can it read Google Search Console and Analytics? Yes, when those properties are linked through Brand DNA and the user authorizes access."
          },
          {
            "type": "paragraph",
            "html": "Is Koala MCP free? Not as a standalone free product. Koala says 23 of 62 tools use no platform credits, but beta connection currently requires an eligible paid plan and other tools can consume credits or word allowance."
          },
          {
            "type": "paragraph",
            "html": "Can it create articles? Yes. Koala says MCP clients can create and edit KoalaWriter articles and generate KoalaImages."
          },
          {
            "type": "paragraph",
            "html": "Sources: Koala AI MCP launch page, September 16 changelog, pricing page and API documentation. All pricing and beta eligibility should be reverified before publication because they are time-sensitive."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "koala.sh",
        "url": "https://koala.sh/mcp"
      },
      {
        "label": "koala.sh",
        "url": "https://koala.sh/changelog"
      },
      {
        "label": "koala.sh",
        "url": "https://koala.sh/pricing"
      },
      {
        "label": "koala.sh",
        "url": "https://koala.sh/pages/api-docs"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Koala AI MCP",
    "targetSearchIntent": "Understand the plan requirement and how Koala MCP tools consume credits, word allowance and image credits",
    "targetQuery": "Koala AI MCP pricing",
    "parentSlug": "koala-ai-mcp",
    "slug": "koala-ai-mcp-pricing-credits",
    "title": "Koala AI MCP Pricing & Credits: What the 62 Tools Cost",
    "metaTitle": "Koala AI MCP Pricing & Credits: 62-Tool Cost Guide",
    "metaDescription": "See Koala AI MCP beta pricing: plan eligibility, 23 no-credit tools, keyword/SERP/backlink call costs, image credits and how writing uses your word allowance.",
    "h1": "Koala AI MCP Pricing and Credits: What the 62 Tools Cost",
    "excerpt": "See Koala AI MCP beta pricing: plan eligibility, 23 no-credit tools, keyword/SERP/backlink call costs, image credits and how writing uses your word allowance.",
    "category": "SEO",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for Koala AI MCP Pricing & Credits: What the 62 Tools Cost",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koala AI MCP does not have a simple per-month standalone MCP price. Access and usage are split across the underlying Koala subscription, platform credits, KoalaWriter word allowance and some image-generation costs. This guide separates those layers using Koala's September 2026 first-party pricing and MCP documentation."
          },
          {
            "type": "paragraph",
            "html": "At launch, Koala's dedicated MCP page says the beta requires a Professional plan or higher and enrollment in the beta. The current monthly Professional plan is listed at $49/month. It includes 100,000 KoalaWriter words and 1,000 platform credits per month, along with Professional features such as Brand DNA preview, Search Console/Analytics dashboard access, KoalaLinks and Deep Research."
          },
          {
            "type": "paragraph",
            "html": "Koala says 23 of the MCP's 62 tools cost no platform credits. Importantly for SEO teams, the eleven tools that read the user's linked Google Search Console and Google Analytics data are described as no-credit because they operate on the user's own data."
          },
          {
            "type": "paragraph",
            "html": "Other data tools have per-call rates. Koala's MCP page currently says a raw page fetch starts at 0.1 credits. Most keyword and competitor lookups cost 1 credit. Backlink lookups cost 2 credits. Historical traffic can cost 4 credits. Keyword ideas and variations cost 1 credit per seed keyword. These are per-call rates, so an autonomous research workflow can make several billable calls during one conversational request."
          }
        ]
      },
      {
        "id": "capabilities-and-workflow",
        "title": "Capabilities and workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Article writing is accounted for differently. Koala says writing uses the subscription's word allowance. That means asking an agent to research a topic can consume platform credits for data calls, while asking it to create a KoalaWriter article can also consume the plan's writing allowance. Do not treat '23 tools free' as meaning a complete research-and-writing workflow is free."
          },
          {
            "type": "paragraph",
            "html": "Image generation has its own documented rates on the MCP page. Koala currently lists standalone images at 1 credit for fast generation or 8 credits for quality generation. Because model options and image pricing can change, verify the live rate card before estimating a production budget."
          },
          {
            "type": "paragraph",
            "html": "The current Koala pricing page lists higher monthly tiers for teams with larger workloads: Boost at $99/month with 250,000 KoalaWriter words and 2,500 credits; Growth at $179/month with 500,000 words and 5,000 credits; Elite at $350/month with 1,000,000 words and 10,000 credits; and Advanced at $500/month with 1,500,000 words and 12,500 credits. Annual billing is advertised at a 20% saving on the current pricing page. These are general Koala plan prices, not a separate MCP surcharge."
          },
          {
            "type": "paragraph",
            "html": "There is a launch-state documentation wrinkle worth knowing. Koala's dedicated MCP page and September 16 changelog say beta access is for Professional plans and above. A broader API feature page currently contains wording that the MCP is included on every paid plan. For anyone buying specifically for MCP access, the dedicated MCP page should be treated as the controlling beta eligibility source and rechecked immediately before purchase."
          }
        ]
      },
      {
        "id": "access-pricing-and-requirements",
        "title": "Access, pricing and requirements",
        "blocks": [
          {
            "type": "paragraph",
            "html": "How quickly can credits disappear? There is no universal answer because an agent chooses tools based on the request. A single keyword lookup may be one billable call, while a competitive research task can involve multiple keyword, SERP, backlink and traffic requests. Any cost estimate that assumes one prompt equals one tool call would be misleading."
          },
          {
            "type": "paragraph",
            "html": "A practical way to control cost is to scope the request. Ask the agent to use first-party Search Console/Analytics evidence first where appropriate, set a narrow competitor set, avoid broad historical-traffic sweeps unless needed, and request confirmation before expensive or large batches of external data calls. Per-app permissions help control access, but they are not themselves a spending cap."
          },
          {
            "type": "paragraph",
            "html": "Is there a free MCP plan? The launch documentation does not establish a standalone free MCP tier. Koala offers a general free account/trial for parts of its product, but the dedicated MCP beta currently states Professional+ eligibility. Twenty-three MCP tools being no-credit means those tools do not consume platform credits after access is established; it does not remove the subscription gate."
          },
          {
            "type": "paragraph",
            "html": "Does API access pricing equal MCP pricing? Not exactly. Koala's conventional API and MCP share underlying account resources in places, but they are different interfaces. The MCP rate card should be used for MCP tool calls, while API integrations should follow current API documentation and plan terms."
          }
        ]
      },
      {
        "id": "practical-guidance-and-limitations",
        "title": "Practical guidance and limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before approving or publishing this page, recheck Koala's live MCP and pricing pages because beta eligibility, plan prices and credit rates are inherently time-sensitive."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "koala.sh",
        "url": "https://koala.sh/mcp"
      },
      {
        "label": "koala.sh",
        "url": "https://koala.sh/pricing"
      },
      {
        "label": "koala.sh",
        "url": "https://koala.sh/changelog"
      }
    ],
    "relatedPaths": [
      "/blog/koala-ai-mcp",
      "/blog/koala-ai-mcp-setup"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Koala AI MCP",
    "targetSearchIntent": "Connect and authorize Koala AI MCP in a compatible AI client and verify access safely",
    "targetQuery": "Koala AI MCP setup",
    "parentSlug": "koala-ai-mcp",
    "slug": "koala-ai-mcp-setup",
    "title": "How to Set Up Koala AI MCP With Claude, ChatGPT, Codex & Cursor",
    "metaTitle": "Koala AI MCP Setup: Claude, ChatGPT, Codex & Cursor",
    "metaDescription": "Connect Koala AI MCP to Claude, ChatGPT, Codex, Claude Code or Cursor using OAuth, then configure permissions and verify SEO, Search Console and Analytics tools.",
    "h1": "How to Set Up Koala AI MCP With Claude, ChatGPT, Codex and Cursor",
    "excerpt": "Connect Koala AI MCP to Claude, ChatGPT, Codex, Claude Code or Cursor using OAuth, then configure permissions and verify SEO, Search Console and Analytics tools.",
    "category": "SEO",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for How to Set Up Koala AI MCP With Claude, ChatGPT, Codex & Cursor",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koala AI MCP lets a compatible AI assistant call Koala's SEO, research, analytics and content tools through one remote MCP endpoint. The beta launched September 16, 2026. This guide focuses on the setup job rather than repeating the full product overview."
          },
          {
            "type": "paragraph",
            "html": "Before connecting, check eligibility. Koala's dedicated MCP page says the beta is available to Professional plans and above for accounts that have joined the beta. Sign in to Koala, join from the Beta page when eligible, and keep the account session available for browser authorization."
          },
          {
            "type": "paragraph",
            "html": "The remote MCP endpoint documented by Koala is <a href=\"https://koala.sh/api/mcp\">https://koala.sh/api/mcp</a>. For clients that support remote HTTP MCP with OAuth, add that URL as the server and complete the browser sign-in. Koala says the standard flow does not require copying an API key."
          },
          {
            "type": "paragraph",
            "html": "For Claude Code, Koala documents the terminal command: claude mcp add --transport http koala-ai <a href=\"https://koala.sh/api/mcp\">https://koala.sh/api/mcp</a>. After adding it, run /mcp in a Claude Code session and approve the connection in the browser. Treat this command as launch-state documentation and recheck Koala's page if the client syntax changes."
          }
        ]
      },
      {
        "id": "capabilities-and-workflow",
        "title": "Capabilities and workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For ChatGPT, Koala lists a browser Developer mode setup. For Codex and Cursor, the MCP page provides client-specific setup tabs. The durable part of the workflow is the same: add Koala's remote MCP endpoint, authenticate in the browser, and approve the capabilities the app should receive. Avoid copying UI labels from older screenshots because these clients change quickly."
          },
          {
            "type": "paragraph",
            "html": "Permissions matter. Koala added per-app permissions at launch, letting users choose the tools and brands each connected application can access and change those permissions later from the account page. Start with the narrowest access needed for the task. If an assistant only needs public keyword/SERP research, do not automatically expose every brand or first-party analytics property."
          },
          {
            "type": "paragraph",
            "html": "If you want the assistant to use your own Search Console or Google Analytics evidence, first link those properties in Brand DNA, then authorize them for the MCP connection. Koala says the assistant can retrieve Search Console clicks, impressions and average position by query/page as well as Analytics traffic, audience and indexing information. Its MCP page says those eleven first-party-data tools use no platform credits."
          },
          {
            "type": "paragraph",
            "html": "After authorization, verify read access before asking the agent to create or edit content. A sensible test sequence is: ask it to identify available Koala capabilities; perform one low-cost/public keyword or SERP lookup; if first-party data was authorized, request a narrow Search Console query; then confirm the returned property/site is the one you intended."
          }
        ]
      },
      {
        "id": "access-pricing-and-requirements",
        "title": "Access, pricing and requirements",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Only after the connection is verified should you test write-capable workflows. Koala's September 16 changelog says MCP assistants can create KoalaWriter articles, check status, read them back, edit them and generate images. Use a disposable or clearly identified test draft first so an incorrect brand selection does not affect a real content queue."
          },
          {
            "type": "paragraph",
            "html": "If the MCP does not appear, check four things before assuming the server is down: the Koala account is on an eligible beta plan; the beta has been joined; the client supports remote HTTP MCP and OAuth; and browser authorization completed for the correct account. If a specific tool is unavailable, inspect the app's Koala permissions because launch-day per-app scoping can intentionally hide tools or brands."
          },
          {
            "type": "paragraph",
            "html": "The normal OAuth flow is preferable to pasting a long-lived API credential into configuration when the client supports it. Koala's conventional API still uses API keys for programmatic integration, but the MCP's advertised setup is browser sign-in with per-app authorization."
          },
          {
            "type": "paragraph",
            "html": "Finally, watch usage. Some MCP tools use no platform credits, while external data lookups and image/content operations can consume credits or word allowance. A successful connection does not mean every agent action is free."
          }
        ]
      },
      {
        "id": "practical-guidance-and-limitations",
        "title": "Practical guidance and limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Quick checklist: eligible Professional+ beta account; join beta; add <a href=\"https://koala.sh/api/mcp\">https://koala.sh/api/mcp</a>; authorize in browser; scope tools and brands; link Search Console/Analytics only if needed; test read-only data; verify the correct site/brand; then test a draft creation workflow."
          },
          {
            "type": "paragraph",
            "html": "This setup information is based on Koala's live MCP page and September 16 changelog and should be rechecked while the feature remains in beta."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "koala.sh",
        "url": "https://koala.sh/mcp"
      },
      {
        "label": "koala.sh",
        "url": "https://koala.sh/changelog"
      },
      {
        "label": "koala.sh",
        "url": "https://koala.sh/pages/api-docs"
      }
    ],
    "relatedPaths": [
      "/blog/koala-ai-mcp",
      "/blog/koala-ai-mcp-pricing-credits"
    ]
  }
];
