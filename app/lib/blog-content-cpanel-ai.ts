import type { BlogArticle } from "./blog-types.ts";

export const cpanelAiArticles: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "cPanel AI / Meridian",
    "targetSearchIntent": "Understand cPanel AI, Meridian, its AI Assistant, website/app building, MCP connectivity, availability, licensing boundaries and hosting workflows.",
    "targetQuery": "cPanel AI",
    "slug": "cpanel-ai-meridian-mcp",
    "title": "cPanel AI: Meridian, MCP, AI Builder & App Hosting Guide",
    "metaTitle": "cPanel AI: Meridian, MCP, AI Builder & App Hosting Guide",
    "metaDescription": "cPanel AI brings Meridian, an AI Assistant, AI site and app workflows, Node.js deployment and MCP agent connectivity to cPanel & WHM v138. Here’s what shipped.",
    "h1": "cPanel AI: Meridian, MCP, AI Builder & App Hosting Explained",
    "excerpt": "cPanel AI brings Meridian, an AI Assistant, AI site and app workflows, Node.js deployment and MCP agent connectivity to cPanel & WHM v138. Here’s what shipped.",
    "category": "Web",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for cPanel AI: Meridian, MCP, AI Builder & App Hosting Guide",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "cPanel is moving beyond the traditional hosting-control-panel model with cPanel AI and Meridian, the goal-based interface shipping with cPanel & WHM v138. The launch combines an embedded AI Assistant, AI-assisted site and app creation, Node.js application deployment and Model Context Protocol connectivity that lets compatible AI agents work with a cPanel account."
          }
        ]
      },
      {
        "id": "what-is-cpanel-ai-nncpanel-ai-is-the-umbrella-for-ai-native-",
        "title": "What is cPanel AI?nncPanel AI is the umbrella for AI-native capabilities integrated into the cPanel hosting experience. The September 16, 2026 public launch positions Meridian as the interface where these workflows meet: users can create a site from a description, deploy an AI-built application, ask account questions in natural language and connect approved external AI clients.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The pieces should not be treated as one monolithic model. Meridian is the interface layer; the AI Assistant is an embedded account-aware helper; Nova and Nova for WordPress are AI creation paths; AI App Hosting and Node.js workflows handle deployment; and WebPros MCP provides a protocol connection for external AI agents."
          }
        ]
      },
      {
        "id": "meridian-cpanel-s-goal-based-interfacennmeridian-reorganizes",
        "title": "Meridian: cPanel's goal-based interfacennMeridian reorganizes cPanel around six hubs: Websites, Email, Files, Databases, Security and Performance. Guided Setup can take a user through domain, website and email configuration in one flow. Website choices documented by cPanel include Sitejet Builder, WordPress, Nova, Nova for WordPress and Node.js deployment.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meridian ships alongside Jupiter rather than eliminating it. Eligibility to switch themes can depend on how the account was created and what the hosting provider enables."
          }
        ]
      },
      {
        "id": "cpanel-ai-assistantnnthe-ai-assistant-is-an-embedded-convers",
        "title": "cPanel AI AssistantnnThe AI Assistant is an embedded conversational panel. cPanel documents it as context-aware: it can recognize the current interface and selected domain, explain hosting concepts, guide tasks and diagnose issues using read-only account information such as domains, quotas, databases, SSL status and AutoSSL logs.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Where a hosting provider enables supported actions, the assistant can perform some changes only after user approval. This distinction matters: conversational access is not blanket permission for autonomous server changes."
          }
        ]
      },
      {
        "id": "nova-and-ai-website-creationnnmeridian-s-guided-setup-includ",
        "title": "Nova and AI website creationnnMeridian's Guided Setup includes Nova, where a user describes a site or web app and AI builds it, plus Nova for WordPress for WordPress-specific creation. cPanel's current Feature Manager documentation says Nova and Nova for WordPress may require a Nova license on the server.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "That is different from Meridian itself: cPanel says Meridian is included with the standard cPanel license with no separate Meridian license fee. Do not interpret that as every AI builder being universally free."
          }
        ]
      },
      {
        "id": "ai-app-hosting-and-node-js-deploymentnnmeridian-can-deploy-n",
        "title": "AI app hosting and Node.js deploymentnnMeridian can deploy Node.js applications from a public/private Git repository, an uploaded ZIP, or an MCP connection. Official documentation says Meridian installs dependencies, deploys the application, starts its process and exposes app logs and environment-variable controls.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "At launch, provider configuration matters. Node.js only appears when enabled by the hosting provider, and cPanel documents a four-app-per-account limit for this workflow."
          }
        ]
      },
      {
        "id": "cpanel-mcp-and-webpros-mcpnnmeridian-can-connect-a-cpanel-ac",
        "title": "cPanel MCP and WebPros MCPnnMeridian can connect a cPanel account to a WebPros MCP server. The user links a WebPros account, obtains MCP configuration and adds it to a compatible AI client. cPanel's official setup documentation specifically demonstrates Claude Code.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once connected and authenticated, an AI agent can automate supported website deployment and account-maintenance tasks. For Node.js deployment, cPanel gives an example where the user asks an agent to deploy the project through the <code>webpros-mcp</code> connector and return the live HTTPS URL."
          },
          {
            "type": "paragraph",
            "html": "MCP support does not mean every AI client can perform every cPanel action. Client support, server configuration, permissions and provider enablement remain separate gates."
          }
        ]
      },
      {
        "id": "availability-and-pricingnnmeridian-is-part-of-cpanel-whm-v13",
        "title": "Availability and pricingnnMeridian is part of cPanel & WHM v138 and cPanel says there is no separate Meridian license fee. However, AI-feature availability varies by hosting provider, enabled features and release tier. Nova products can require their own server licensing.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "There is therefore no defensible universal statement that all cPanel AI functionality is free for every hosting account. Users should check their hosting provider and server feature configuration."
          }
        ]
      },
      {
        "id": "why-this-launch-mattersnncpanel-is-widely-used-as-the-layer-",
        "title": "Why this launch mattersnncPanel is widely used as the layer between website owners and hosting infrastructure. Adding MCP and agent-driven deployment moves AI coding assistants closer to production hosting: instead of generating code and leaving deployment as a separate manual job, an authorized agent can participate in the hosting workflow itself.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For agencies and small businesses, Meridian also reduces the need to understand cPanel's historical tool taxonomy before completing common tasks. The trade-off is that availability is partly controlled by the hosting provider, so two cPanel users can see different AI capabilities."
          }
        ]
      },
      {
        "id": "important-limitationsnndo-not-assume-meridian-replaces-jupit",
        "title": "Important limitationsnnDo not assume Meridian replaces Jupiter, that Nova is included with every cPanel license, that MCP grants unrestricted server control, or that Node.js deployment is available on every account. Official documentation repeatedly ties availability to provider enablement and feature configuration.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Likewise, cPanel's launch claims describe its own product capabilities; they are not evidence that AI-generated sites will automatically be secure, performant or production-ready without review."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "What version adds cPanel AI?ncPanel's public launch centers on cPanel & WHM v138 and the Meridian experience."
          },
          {
            "type": "subheading",
            "text": "Is Meridian free with cPanel?ncPanel says Meridian is included with a standard cPanel license and has no separate Meridian license fee. Other AI features, including Nova, can have different licensing requirements."
          },
          {
            "type": "subheading",
            "text": "Can Claude Code connect to cPanel?"
          },
          {
            "type": "paragraph",
            "html": "Yes. cPanel's official MCP documentation provides a Claude Code connection workflow through WebPros MCP."
          },
          {
            "type": "subheading",
            "text": "Can an AI agent deploy a Node.js app to cPanel?"
          },
          {
            "type": "paragraph",
            "html": "Yes, when the relevant Meridian/Node.js/MCP features are enabled. Official docs describe deployment through WebPros MCP as well as Git and ZIP sources."
          },
          {
            "type": "subheading",
            "text": "Does cPanel AI work on every host?"
          },
          {
            "type": "paragraph",
            "html": "Not necessarily. cPanel says availability varies by hosting provider, enabled features and release tier."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "cpanel.net",
        "url": "https://www.cpanel.net/blog/products/introducing-cpanel-ai-in-cpanel-whm-v138/"
      },
      {
        "label": "cpanel.net",
        "url": "https://www.cpanel.net/cpanel-ai/"
      },
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/release-notes/release-notes/"
      },
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/cpanel/meridian/getting-started/welcome-to-meridian/"
      },
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/cpanel/meridian/getting-started/connect-to-mcp/"
      },
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/cpanel/meridian/websites/deploy-a-website-with-nodejs/"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "cPanel AI / Meridian",
    "targetSearchIntent": "Connect an MCP-capable AI coding agent, especially Claude Code, to a cPanel Meridian account through WebPros MCP and authenticate it safely.",
    "targetQuery": "cPanel MCP setup",
    "parentSlug": "cpanel-ai-meridian-mcp",
    "slug": "cpanel-mcp-claude-code-setup",
    "title": "How to Connect Claude Code to cPanel With MCP",
    "metaTitle": "cPanel MCP Setup: Connect Claude Code With WebPros MCP",
    "metaDescription": "Connect Claude Code to cPanel Meridian using WebPros MCP. Learn the account-linking, mcp.json, authentication, testing and disconnect workflow.",
    "h1": "How to Connect Claude Code to cPanel With MCP",
    "excerpt": "Connect Claude Code to cPanel Meridian using WebPros MCP. Learn the account-linking, mcp.json, authentication, testing and disconnect workflow.",
    "category": "Automation",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for How to Connect Claude Code to cPanel With MCP",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "cPanel Meridian can connect an MCP-capable AI client to a hosting account through the WebPros MCP server. cPanel's official documentation uses Claude Code as the concrete setup example, making this one of the clearest new workflows in cPanel AI."
          }
        ]
      },
      {
        "id": "before-you-startnnyou-need-access-to-the-meridian-interface-",
        "title": "Before you startnnYou need access to the Meridian interface with MCP enabled by your hosting provider, a WebPros account, and a compatible MCP client. cPanel notes that AI feature availability varies by hosting provider, enabled features and release tier.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If the MCP Connection section is absent, do not assume your local client is broken; first confirm that your provider/account has the feature."
          }
        ]
      },
      {
        "id": "step-2-get-the-mcp-configurationnnafter-linking-cpanel-lets-",
        "title": "Step 2: Get the MCP configurationnnAfter linking, cPanel lets you download an `mcp.json` file or copy the connection configuration. Treat this as connection configuration rather than content to publish publicly.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For Claude Code, cPanel documents two locations: <code>~/.claude.json</code> for single-user access or <code>.mcp.json</code> in a repository root for a configuration shared with that project's users. Choose the scope deliberately."
          }
        ]
      },
      {
        "id": "step-3-add-the-webpros-mcp-server-to-claude-codennadd-the-su",
        "title": "Step 3: Add the WebPros MCP server to Claude CodennAdd the supplied server configuration to the appropriate `mcpServers` section. Use the configuration cPanel generated rather than inventing a server endpoint or credentials from examples.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Restart Claude Code after changing the configuration so the client loads the server."
          }
        ]
      },
      {
        "id": "step-4-authenticatennrun-claude-code-s-mcp-command-select-th",
        "title": "Step 4: AuthenticatennRun Claude Code's `/mcp` command, select the WebPros/cPanel connection and choose authentication. cPanel says a browser window opens to complete authorization.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Authentication is a meaningful permission boundary. Review which account you are authorizing instead of treating the browser step as a routine confirmation."
          }
        ]
      },
      {
        "id": "step-5-test-discovery-before-deploymentnnstart-with-a-low-ri",
        "title": "Step 5: Test discovery before deploymentnnStart with a low-risk request that confirms the connector is available and that the agent is addressing the intended cPanel account. Avoid making production changes as your first connectivity test.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once the connection is confirmed, move to a narrowly scoped task such as inspecting the deployment prerequisites for a project."
          }
        ]
      },
      {
        "id": "step-6-deploy-only-after-reviewing-the-targetnncpanel-s-node",
        "title": "Step 6: Deploy only after reviewing the targetnncPanel's Node.js documentation supports a WebPros MCP deployment flow where an agent can deploy the current project and return a live HTTPS URL. Before issuing that request, verify the target account, domain/subdomain, environment variables and project source.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The fact that an agent can deploy does not remove the need to review application security, secrets, dependencies and production configuration."
          }
        ]
      },
      {
        "id": "disconnecting-mcpnncpanel-documents-an-unlink-webpros-accoun",
        "title": "Disconnecting MCPnncPanel documents an Unlink WebPros Account control in the MCP Connection section. Disconnecting means you will need to sign in again before using the WebPros MCP connection with that cPanel account.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Know the revocation path before giving an agent recurring operational work."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Does cPanel officially support Claude Code with MCP?"
          },
          {
            "type": "paragraph",
            "html": "Yes. cPanel's current Connect to MCP documentation explicitly walks through Claude Code."
          },
          {
            "type": "subheading",
            "text": "Do I need SSH or a manually created API token?ncPanel positions WebPros MCP as a way for supported AI clients to automate deployment without requiring the user to manually manage API tokens or use SSH for that workflow."
          },
          {
            "type": "subheading",
            "text": "Can I share the MCP configuration with a project?"
          },
          {
            "type": "paragraph",
            "html": "The official docs describe <code>.mcp.json</code> in a repository root for shared project access, while <code>~/.claude.json</code> is the single-user path. Consider the security implications before sharing configuration."
          },
          {
            "type": "subheading",
            "text": "How do I remove access?"
          },
          {
            "type": "paragraph",
            "html": "Use Unlink WebPros Account in Meridian's MCP Connection section, according to cPanel's documentation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/cpanel/meridian/getting-started/connect-to-mcp/"
      },
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/release-notes/release-notes/"
      },
      {
        "label": "cpanel.net",
        "url": "https://www.cpanel.net/cpanel-ai/"
      }
    ],
    "relatedPaths": [
      "/blog/cpanel-ai-meridian-mcp",
      "/blog/cpanel-ai-nodejs-mcp-deployment"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "cPanel AI / Meridian",
    "targetSearchIntent": "Deploy an AI-built or conventional Node.js application to cPanel Meridian through WebPros MCP and manage the resulting app safely.",
    "targetQuery": "deploy AI app to cPanel with MCP",
    "parentSlug": "cpanel-ai-meridian-mcp",
    "slug": "cpanel-ai-nodejs-mcp-deployment",
    "title": "How to Deploy a Node.js AI App to cPanel With MCP",
    "metaTitle": "Deploy a Node.js AI App to cPanel With MCP: Step-by-Step",
    "metaDescription": "Deploy a Node.js or AI-built app to cPanel Meridian using WebPros MCP. Understand source options, subdomains, environment variables, logs and redeployment.",
    "h1": "How to Deploy a Node.js AI App to cPanel With MCP",
    "excerpt": "Deploy a Node.js or AI-built app to cPanel Meridian using WebPros MCP. Understand source options, subdomains, environment variables, logs and redeployment.",
    "category": "Web",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for How to Deploy a Node.js AI App to cPanel With MCP",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "cPanel Meridian can deploy Node.js applications from Git, a ZIP archive or an authenticated WebPros MCP connection. The MCP path is especially relevant to AI-built applications because a coding agent can move from working on the repository to initiating the hosting deployment without a separate SSH workflow."
          }
        ]
      },
      {
        "id": "step-1-choose-the-website-subdomainnnin-meridian-s-websites-",
        "title": "Step 1: Choose the website/subdomainnnIn Meridian's Websites hub, add a website and create the subdomain the application will use. cPanel warns that after deployment the app's subdomain cannot be renamed, so choose the production target deliberately.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The initial v138 Node.js deployment workflow is subdomain-oriented. Do not promise arbitrary apex-domain behavior without checking the current release."
          }
        ]
      },
      {
        "id": "step-2-choose-node-jsnnselect-node-js-as-the-website-type-me",
        "title": "Step 2: Choose Node.jsnnSelect Node.js as the website type. Meridian then lets you choose the source: a Git repository, ZIP upload or WebPros MCP.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Git is useful when you want normal redeploy/rollback behavior; ZIP fits a relatively static package; MCP fits an agent-driven workflow."
          }
        ]
      },
      {
        "id": "step-3-connect-webpros-mcpnnchoose-the-mcp-deployment-option",
        "title": "Step 3: Connect WebPros MCPnnChoose the MCP deployment option. If the WebPros account is not already linked, complete that connection first. Download the generated `mcp.json`, add it to your AI client and authenticate.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use cPanel's generated configuration rather than copying endpoints or credentials from third-party tutorials."
          }
        ]
      },
      {
        "id": "step-4-ask-the-agent-to-deploy-the-projectnncpanel-s-officia",
        "title": "Step 4: Ask the agent to deploy the projectnncPanel's official documentation gives a prompt pattern that asks the agent to use the `webpros-mcp` connector, deploy the Node.js app in the current project and return the live HTTPS URL when reachable.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before running a production deployment, review the repository, build scripts, package manager and any secret requirements. An agent executing the deployment does not validate the business logic or security of the application for you."
          }
        ]
      },
      {
        "id": "step-5-review-runtime-settingsnnmeridian-can-detect-the-pack",
        "title": "Step 5: Review runtime settingsnnMeridian can detect the package manager and lets you choose a Node.js version and configure environment variables. Store secrets as environment variables rather than hard-coding them into the repository or prompt.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Changing runtime versions can affect dependency compatibility, so use the version the application actually supports."
          }
        ]
      },
      {
        "id": "step-6-deploy-and-verify-httpsnnmeridian-installs-dependenci",
        "title": "Step 6: Deploy and verify HTTPSnnMeridian installs dependencies, deploys the application and starts its process. Verify the returned URL yourself: check that HTTPS loads, the expected application is running and critical routes work.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not equate a successful deployment command with a successful production application."
          }
        ]
      },
      {
        "id": "managing-the-app-after-deploymentnnthe-websites-hub-exposes-",
        "title": "Managing the app after deploymentnnThe Websites hub exposes Start, Stop, Restart and Redeploy controls for apps that run a server process. It also exposes recent app logs and environment-variable management.",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For Git-backed apps, Redeploy rebuilds and restarts after code changes. If a deployment fails, inspect the app logs before repeatedly asking an agent to retry."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Can Claude Code deploy directly to cPanel?"
          },
          {
            "type": "paragraph",
            "html": "With Meridian and WebPros MCP enabled, cPanel documents an agent-driven deployment workflow and uses Claude Code in its MCP setup documentation."
          },
          {
            "type": "subheading",
            "text": "Can I deploy from Git instead of MCP?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Meridian also supports public/private Git repositories and ZIP uploads."
          },
          {
            "type": "subheading",
            "text": "Does cPanel manage the Node.js process?"
          },
          {
            "type": "paragraph",
            "html": "Yes. The current docs say Meridian installs dependencies, starts the app and provides process controls, logs and environment-variable management."
          },
          {
            "type": "subheading",
            "text": "Is every cPanel account eligible?"
          },
          {
            "type": "paragraph",
            "html": "No universal availability should be assumed. Node.js and AI/MCP capabilities depend on hosting-provider configuration and feature enablement."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/cpanel/meridian/websites/deploy-a-website-with-nodejs/"
      },
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/cpanel/meridian/getting-started/connect-to-mcp/"
      },
      {
        "label": "docs.cpanel.net",
        "url": "https://docs.cpanel.net/release-notes/release-notes/"
      }
    ],
    "relatedPaths": [
      "/blog/cpanel-ai-meridian-mcp",
      "/blog/cpanel-mcp-claude-code-setup"
    ]
  }
];
