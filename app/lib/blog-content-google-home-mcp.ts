import type { BlogArticle } from "./blog-types.ts";

export const googleHomeMcpArticles: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Google Home MCP",
    "targetSearchIntent": "Understand Google's official Home MCP server, what AI agents can do with it, requirements, availability, supported smart-home capabilities and safety boundaries.",
    "targetQuery": "Google Home MCP",
    "slug": "google-home-mcp",
    "title": "Google Home MCP: Setup, Requirements, Agents & Availability",
    "metaTitle": "Google Home MCP: Setup, Requirements, Agents & Availability",
    "metaDescription": "Google Home MCP lets compatible AI agents inspect and control supported smart-home devices. Learn its capabilities, setup requirements, availability and safety limits.",
    "h1": "Google Home MCP: How AI Agents Can Control Your Smart Home",
    "excerpt": "Google Home MCP lets compatible AI agents inspect and control supported smart-home devices. Learn its capabilities, setup requirements, availability and safety limits.",
    "category": "Automation",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for Google Home MCP: Setup, Requirements, Agents & Availability",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google has opened Early Access to Google Home MCP, an official Model Context Protocol server that lets compatible AI agents interact with a real smart-home environment. Instead of limiting home automation to Google's own app or assistant, Home MCP exposes structured tools that an authenticated agent can use to discover devices, inspect current states, execute supported actions and analyze historical events."
          }
        ]
      },
      {
        "id": "what-is-google-home-mcp",
        "title": "What is Google Home MCP?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google Home MCP is an agent-facing bridge to the Google Home ecosystem. Google's developer documentation describes it as an MCP server exposing standard tools and RPC interfaces so LLM-powered assistants and development tools can work with smart-home structures and devices."
          },
          {
            "type": "paragraph",
            "html": "This is different from Gemini for Home. Gemini is Google's own assistant experience. Home MCP is infrastructure that can connect other MCP-capable agents after the user configures access and authorizes permissions."
          }
        ]
      },
      {
        "id": "what-can-an-ai-agent-do-with-google-home-mcp",
        "title": "What can an AI agent do with Google Home MCP?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google documents five core capability groups. <code>list_homes</code> retrieves accessible homes and structures. <code>list_home_resources</code> exposes devices, rooms/areas, traits, attributes and command schemas. <code>list_home_states</code> checks live connectivity and trait states. <code>run_home_actions</code> executes supported device commands. <code>list_home_history</code> queries past state changes and events over a chosen time range."
          },
          {
            "type": "paragraph",
            "html": "That makes workflows possible such as checking whether lights are still on, reviewing device activity, investigating camera or sensor history where permitted, controlling supported devices, or building a custom dashboard around home state."
          }
        ]
      },
      {
        "id": "which-devices-are-supported",
        "title": "Which devices are supported?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Launch reporting says Home MCP works across the Google Home ecosystem, including Google Nest devices and compatible Works with Google Home or Matter devices. Exact actions depend on each device's available traits and Google's safety restrictions; connection to the ecosystem does not mean every device exposes every action."
          }
        ]
      },
      {
        "id": "requirements-and-availability",
        "title": "Requirements and availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Early Access began September 16, 2026. Google and launch reporting describe the initial rollout as U.S.-only for Google Home Premium Advanced subscribers, continuing over the following weeks. Setup requires a functioning Google Home environment, a Google Cloud project, Home API access, OAuth configuration and an MCP-capable client."
          },
          {
            "type": "paragraph",
            "html": "TechCrunch reports the U.S. Premium Advanced tier at $20 per month. That is the subscription gate for the initial U.S. rollout, not a verified standalone price for the MCP server itself, and it should not be generalized to other markets."
          },
          {
            "type": "paragraph",
            "html": "Google has not announced a broader international or lower-tier rollout date."
          }
        ]
      },
      {
        "id": "which-ai-agents-can-use-it",
        "title": "Which AI agents can use it?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google's launch materials and reporting use MCP-capable agent environments as examples, including Google's Antigravity, Claude Cowork and OpenClaw. Other clients may be technically capable of calling MCP tools, but compatibility and setup should be verified against the current client rather than assumed from protocol support alone."
          }
        ]
      },
      {
        "id": "how-setup-works",
        "title": "How setup works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "At a high level, the user creates/configures a Google Cloud project for Home MCP, prepares OAuth credentials and provides the MCP configuration to a compatible agent. The user then signs in, chooses the relevant home and grants permissions. Access can later be revoked from Google Home or Google Account controls."
          },
          {
            "type": "paragraph",
            "html": "The separate supporting setup guide covers this workflow in more depth without assuming unstable beta UI labels."
          }
        ]
      },
      {
        "id": "safety-and-privacy-boundaries",
        "title": "Safety and privacy boundaries",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Giving an AI agent access to a physical environment carries higher consequences than letting it read a document. Google explicitly warns that an agent can produce unexpected or undesired behavior."
          },
          {
            "type": "paragraph",
            "html": "Home MCP therefore applies rate limits and safety protections. Google's documentation specifically says sensitive actions such as unlocking doors are prohibited. Users should review granted permissions, tell other household members when an agent can access a shared home, and revoke the connection if it is no longer needed."
          },
          {
            "type": "paragraph",
            "html": "Some sensitive data can require additional consent. The exact permissions and device capabilities should be checked against current Google documentation before connecting a production household."
          }
        ]
      },
      {
        "id": "why-this-launch-matters",
        "title": "Why this launch matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Home MCP is an important step in agentic computing because the protocol is moving beyond files, codebases and SaaS tools into the physical environment. A general-purpose agent can now, with explicit authorization, reason over device state and history and then take supported actions through a standardized interface."
          },
          {
            "type": "paragraph",
            "html": "For developers, it creates a new surface for smart-home dashboards, monitoring tools and personal automation. For users, it creates more choice over which agent sits above their home infrastructure. The trade-off is that permission design and agent reliability matter more when an incorrect tool call can affect a real device."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is Google Home MCP available now?"
          },
          {
            "type": "paragraph",
            "html": "Yes, in Early Access. The initial rollout is for Google Home Premium Advanced subscribers in the United States and is expanding over several weeks."
          },
          {
            "type": "subheading",
            "text": "Is Google Home MCP free?"
          },
          {
            "type": "paragraph",
            "html": "Google has not established a standalone Home MCP price in the sources reviewed. Initial access requires Google Home Premium Advanced; TechCrunch reports the U.S. plan at $20/month."
          },
          {
            "type": "subheading",
            "text": "Can Claude Cowork use Google Home MCP?"
          },
          {
            "type": "paragraph",
            "html": "Claude Cowork is among the example agent environments named in launch coverage. Exact client setup should be verified against current documentation."
          },
          {
            "type": "subheading",
            "text": "Can Google Home MCP unlock my door?"
          },
          {
            "type": "paragraph",
            "html": "Google's official documentation says sensitive actions such as unlocking doors are prohibited."
          },
          {
            "type": "subheading",
            "text": "Does it work with Matter devices?"
          },
          {
            "type": "paragraph",
            "html": "Launch reporting says devices in the Google Home ecosystem include compatible Matter and Works with Google Home devices. Available actions depend on the individual device and exposed traits."
          },
          {
            "type": "subheading",
            "text": "Is it available outside the U.S.?"
          },
          {
            "type": "paragraph",
            "html": "No broader-market rollout date was verified. The initial Early Access is U.S.-only."
          }
        ]
      },
      {
        "id": "sources-and-verification-note",
        "title": "Sources and verification note",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Core capability and safety claims come from Google's official Home MCP developer documentation. Rollout and U.S. subscription details are corroborated by TechCrunch and 9to5Google. Before publication, recheck Google's Early Access requirements, supported clients, regional eligibility and subscription terms because these are likely to change during rollout."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "developers.home.google.com",
        "url": "https://developers.home.google.com/mcp/home"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices/"
      },
      {
        "label": "9to5google.com",
        "url": "https://9to5google.com/2026/09/16/google-home-mcp/"
      },
      {
        "label": "developers.home.google.com",
        "url": "https://developers.home.google.com/reference/home/mcp"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Google Home MCP",
    "targetSearchIntent": "Set up Google's Home MCP server with a compatible AI agent using the required Google Cloud, Home API, OAuth and permission workflow.",
    "targetQuery": "Google Home MCP setup",
    "parentSlug": "google-home-mcp",
    "slug": "google-home-mcp-setup",
    "title": "How to Set Up Google Home MCP With an AI Agent",
    "metaTitle": "Google Home MCP Setup: Connect an AI Agent Safely",
    "metaDescription": "Set up Google Home MCP with a compatible AI agent. Understand the Google Cloud project, Home API, OAuth, permissions, testing and revocation workflow.",
    "h1": "How to Set Up Google Home MCP With an AI Agent",
    "excerpt": "Set up Google Home MCP with a compatible AI agent. Understand the Google Cloud project, Home API, OAuth, permissions, testing and revocation workflow.",
    "category": "Automation",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for How to Set Up Google Home MCP With an AI Agent",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google Home MCP gives compatible AI agents permissioned access to Google Home devices, states and history. Because those tools can affect a physical environment, setup is more than copying a server URL into an AI client: it involves a Google Cloud project, Home API configuration, OAuth authorization, selecting the home and reviewing what the agent can access."
          },
          {
            "type": "paragraph",
            "html": "This guide describes the launch-state setup architecture without inventing beta UI labels that may change during Early Access."
          }
        ]
      },
      {
        "id": "before-you-start",
        "title": "Before you start",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google Home MCP entered Early Access on September 16, 2026. The initial rollout is for Google Home Premium Advanced subscribers in the United States and continues over several weeks. You also need an existing Google Home environment and an MCP-capable agent/client."
          },
          {
            "type": "paragraph",
            "html": "If Home MCP is not available to your account yet, rollout eligibility may be the reason even if every other prerequisite is satisfied."
          }
        ]
      },
      {
        "id": "step-1-prepare-your-google-home-environment",
        "title": "Step 1: Prepare your Google Home environment",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Confirm that the devices you want the agent to work with are already visible and functioning in Google Home. Home MCP works through the Google Home ecosystem; it does not independently pair or replace the underlying device platform."
          },
          {
            "type": "paragraph",
            "html": "Google's launch coverage includes Nest and compatible Works with Google Home or Matter devices. The commands available to the agent depend on the device traits exposed through Google Home and Google's safety rules."
          }
        ]
      },
      {
        "id": "step-2-create-or-choose-a-google-cloud-project",
        "title": "Step 2: Create or choose a Google Cloud project",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google's setup flow requires a Google Cloud project configured for Home MCP. Treat this project as the administrative boundary for the integration rather than casually reusing unrelated production credentials."
          },
          {
            "type": "paragraph",
            "html": "Follow the current Google Home Developer Center instructions for enabling the required Home API access because Early Access configuration details can change."
          }
        ]
      },
      {
        "id": "step-3-configure-oauth",
        "title": "Step 3: Configure OAuth",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Home MCP uses user authorization rather than handing an agent permanent unrestricted household access. Configure the OAuth client/redirect details required by your chosen MCP client and Google's current documentation."
          },
          {
            "type": "paragraph",
            "html": "Do not paste secrets into public prompts, repositories or screenshots. Store client credentials using the secret/configuration mechanism recommended by the client you are using."
          }
        ]
      },
      {
        "id": "step-4-add-the-mcp-configuration-to-your-agent",
        "title": "Step 4: Add the MCP configuration to your agent",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Provide the Home MCP configuration to a compatible client. Google and launch reporting name environments such as Antigravity, Claude Cowork and OpenClaw as examples."
          },
          {
            "type": "paragraph",
            "html": "Protocol support alone is not proof that a particular client version supports Google's complete authorization flow, so verify the client's current MCP documentation before troubleshooting the Google side."
          }
        ]
      },
      {
        "id": "step-5-sign-in-select-a-home-and-grant-permissions",
        "title": "Step 5: Sign in, select a home and grant permissions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The authorization flow asks the user to authenticate and choose the home the agent may access. Review the permissions instead of treating the OAuth screen as a routine click-through."
          },
          {
            "type": "paragraph",
            "html": "If other people share the home, Google recommends informing them that the connected agent may control devices and access home data. For development, a separate test home can reduce the consequences of an incorrect tool call."
          }
        ]
      },
      {
        "id": "step-6-test-read-only-discovery-first",
        "title": "Step 6: Test read-only discovery first",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before asking the agent to control anything, test discovery. Google's MCP exposes tools such as <code>list_homes</code>, <code>list_home_resources</code> and <code>list_home_states</code> for discovering structures/resources and inspecting live states."
          },
          {
            "type": "paragraph",
            "html": "A safe first validation is to ask the agent to list the accessible home, rooms and a non-sensitive device state. Confirm that the returned environment is the one you intended to authorize."
          }
        ]
      },
      {
        "id": "step-7-test-a-low-risk-supported-action",
        "title": "Step 7: Test a low-risk supported action",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After discovery works, test <code>run_home_actions</code> with a low-consequence device such as a light rather than starting with security-sensitive hardware."
          },
          {
            "type": "paragraph",
            "html": "Google applies rate limits and safety protections. Its documentation specifically says Home MCP prohibits sensitive actions such as unlocking doors. Do not try to route around those restrictions through another automation layer."
          }
        ]
      },
      {
        "id": "step-8-test-history-only-where-needed",
        "title": "Step 8: Test history only where needed",
        "blocks": [
          {
            "type": "paragraph",
            "html": "<code>list_home_history</code> lets an agent query past state changes and event logs. Historical access can reveal more about household routines than a single current-state query, so grant and use it only where it serves the workflow."
          },
          {
            "type": "paragraph",
            "html": "Camera and identity-related data can carry additional privacy considerations and consent requirements. Recheck Google's current policies before building workflows around sensitive history."
          }
        ]
      },
      {
        "id": "step-9-know-how-to-revoke-access",
        "title": "Step 9: Know how to revoke access",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google says the agent's Home MCP access can be revoked through the Google Home app or Google Account controls. Test that operational path before relying on the integration long-term."
          },
          {
            "type": "paragraph",
            "html": "Revocation should be part of the deployment plan, not something discovered after an agent behaves unexpectedly."
          }
        ]
      },
      {
        "id": "troubleshooting-home-mcp-is-not-showing",
        "title": "Troubleshooting: Home MCP is not showing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "First check eligibility: the initial Early Access is limited to U.S. Google Home Premium Advanced subscribers and is rolling out over several weeks. Then verify that the required Google Cloud/Home API setup is complete, your OAuth redirect/configuration matches the current client, and the client actually supports the required MCP authorization flow."
          },
          {
            "type": "paragraph",
            "html": "Do not assume an absent feature means a configuration error while staged rollout is still active."
          }
        ]
      },
      {
        "id": "safety-checklist",
        "title": "Safety checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use a separate test home when practical. Start with read-only discovery. Test low-risk devices before broader actions. Keep OAuth credentials out of prompts and repositories. Review permissions carefully. Inform household members. Do not attempt to bypass blocked sensitive actions. Know how to revoke access before giving the agent recurring tasks."
          }
        ]
      },
      {
        "id": "what-home-mcp-does-not-guarantee",
        "title": "What Home MCP does not guarantee",
        "blocks": [
          {
            "type": "paragraph",
            "html": "MCP standardizes tool discovery and invocation; it does not guarantee that an AI agent will interpret every instruction correctly. Google explicitly warns that connecting an agent can result in unexpected or undesired behavior."
          },
          {
            "type": "paragraph",
            "html": "Likewise, the Home MCP launch does not mean every MCP client, every Google Home device, every country or every subscription tier is supported. Treat current eligibility and capabilities as Early Access state."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Do I need Google Cloud to use Home MCP?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Google's launch setup requires creating/configuring a Google Cloud project for Home MCP."
          },
          {
            "type": "subheading",
            "text": "Do I need Google Home Premium Advanced?"
          },
          {
            "type": "paragraph",
            "html": "For the initial U.S. Early Access, yes according to Google's rollout and launch reporting."
          },
          {
            "type": "subheading",
            "text": "Can I connect Claude Cowork to Google Home?"
          },
          {
            "type": "paragraph",
            "html": "Claude Cowork is one of the example MCP-capable environments named in launch coverage. Follow current Claude Cowork and Google Home MCP documentation for the exact connection flow."
          },
          {
            "type": "subheading",
            "text": "Why can't my agent unlock a smart lock?"
          },
          {
            "type": "paragraph",
            "html": "Google explicitly prohibits sensitive Home MCP actions such as unlocking doors as a safety protection."
          },
          {
            "type": "subheading",
            "text": "Can I remove the agent later?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Google says Home MCP access can be revoked through Google Home or Google Account controls."
          }
        ]
      },
      {
        "id": "verification-note",
        "title": "Verification note",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The workflow above follows Google's official Home MCP capability and safety documentation plus launch reporting about eligibility and setup. Exact Cloud Console screens, OAuth fields and client configuration syntax can change during Early Access, so those details should be reverified immediately before publication rather than frozen into an inaccurate click-by-click tutorial."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "developers.home.google.com",
        "url": "https://developers.home.google.com/mcp/home"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2026/09/16/your-ai-agents-can-now-control-your-google-home-devices/"
      },
      {
        "label": "9to5google.com",
        "url": "https://9to5google.com/2026/09/16/google-home-mcp/"
      },
      {
        "label": "developers.home.google.com",
        "url": "https://developers.home.google.com/reference/home/mcp"
      }
    ],
    "relatedPaths": [
      "/blog/google-home-mcp"
    ]
  }
];
