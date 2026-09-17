import type { BlogArticle } from "./blog-types.ts";

export const publishAll20260917A: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "WhatsApp Business Tools MCP",
    "targetSearchIntent": "Connect an MCP-capable AI coding agent to WhatsApp Business and use it safely for account onboarding, phone setup, templates, messages and webhook testing.",
    "targetQuery": "how to use WhatsApp Business Tools MCP",
    "parentSlug": "whatsapp-business-tools-mcp",
    "slug": "how-to-use-whatsapp-business-tools-mcp",
    "title": "How to Use WhatsApp Business Tools MCP: Setup & Testing Guide",
    "metaTitle": "How to Use WhatsApp Business Tools MCP: Setup Guide",
    "metaDescription": "A practical guide to using Meta's WhatsApp Business Tools MCP with AI coding agents for account setup, phone verification, templates, test messages and webhooks.",
    "h1": "How to Use WhatsApp Business Tools MCP",
    "excerpt": "WhatsApp Business Tools MCP lets an MCP-capable AI coding agent perform supported WhatsApp Business Platform setup and testing tasks on your behalf. The safest way to use it is to treat the agent as an authenticated configuration assistant: give it a specific job, review the account and permissions it is acting on, and verify each…",
    "category": "Automation",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-17",
    "dateModified": "2026-09-17",
    "ogAlt": "Project Monet editorial illustration for How to Use WhatsApp Business Tools MCP",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "WhatsApp Business Tools MCP lets an MCP-capable AI coding agent perform supported WhatsApp Business Platform setup and testing tasks on your behalf. The safest way to use it is to treat the agent as an authenticated configuration assistant: give it a specific job, review the account and permissions it is acting on, and verify each state-changing result."
          },
          {
            "type": "paragraph",
            "html": "This guide covers the launch-state workflow without relying on UI labels that may change during Meta's gradual rollout."
          }
        ]
      },
      {
        "id": "before-you-start",
        "title": "Before you start",
        "blocks": [
          {
            "type": "paragraph",
            "html": "You need access to the relevant Meta developer/business assets and an AI coding environment that supports the WhatsApp Business Tools MCP connection. Meta's launch material names Claude, Cursor, Codex and ChatGPT among supported or discoverable environments."
          },
          {
            "type": "paragraph",
            "html": "You should also know which business, app and phone number you intend to configure. The MCP does not bypass WhatsApp Terms, phone verification, payment requirements, Business Verification or other platform policies."
          }
        ]
      },
      {
        "id": "1-connect-the-whatsapp-business-tools-mcp",
        "title": "1. Connect the WhatsApp Business Tools MCP",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Add or discover the WhatsApp Business Tools MCP from your MCP-capable agent environment, then authenticate with the Meta account that has access to the relevant developer app/business."
          },
          {
            "type": "paragraph",
            "html": "Launch reporting based on Meta's documentation says the connection uses Facebook Login for Business and specific permissions. Select only the business assets the workflow actually needs. Do not assume that connecting an agent gives it unrestricted access to every Meta account you administer."
          },
          {
            "type": "paragraph",
            "html": "Because availability is rolling out gradually, the MCP may not yet appear for every developer or in every client. If it is missing, first verify rollout availability and the agent client's current MCP support."
          }
        ]
      },
      {
        "id": "2-ask-the-agent-to-inspect-prerequisites",
        "title": "2. Ask the agent to inspect prerequisites",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before creating or changing resources, ask the agent to check the current setup state. Useful checks include whether the required WhatsApp Terms have been accepted, whether the correct business is selected, whether a payment method or Business Verification requirement is blocking setup, and whether a WhatsApp Business Account already exists."
          },
          {
            "type": "paragraph",
            "html": "This inspection-first approach reduces the chance of creating duplicate or unnecessary resources."
          }
        ]
      },
      {
        "id": "3-create-or-select-a-whatsapp-business-account",
        "title": "3. Create or select a WhatsApp Business Account",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If the business does not yet have the required account, the MCP can help create a WhatsApp Business Account as part of onboarding. If an account already exists, direct the agent to use the existing resource rather than creating another one."
          },
          {
            "type": "paragraph",
            "html": "Always verify the business/account identity before approving a state-changing action."
          }
        ]
      },
      {
        "id": "4-add-and-verify-the-phone-number",
        "title": "4. Add and verify the phone number",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The launch workflow supports adding a phone number and guiding verification. Phone ownership verification still requires the underlying Meta/WhatsApp verification process; the agent does not bypass it."
          },
          {
            "type": "paragraph",
            "html": "After verification, the agent can help register the number for Cloud API access. Confirm that the resulting phone number and WhatsApp Business Account are the intended resources before moving on."
          }
        ]
      },
      {
        "id": "5-create-or-edit-message-templates",
        "title": "5. Create or edit message templates",
        "blocks": [
          {
            "type": "paragraph",
            "html": "You can describe the message template you need in natural language and ask the agent to create it, or ask it to modify an existing template. Meta's launch material also describes checking template approval status."
          },
          {
            "type": "paragraph",
            "html": "Template approval remains governed by WhatsApp's rules. An AI-generated template is not automatically approved simply because the MCP created it."
          },
          {
            "type": "paragraph",
            "html": "For production use, review the final copy, variables, language and business purpose yourself before relying on it."
          }
        ]
      },
      {
        "id": "6-send-a-test-message",
        "title": "6. Send a test message",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Once the test environment is ready, ask the agent to send a test message from the registered number. Keep this stage focused on development/testing and verify the destination and content before approving the action."
          },
          {
            "type": "paragraph",
            "html": "Meta currently positions WhatsApp Business Tools MCP as development and testing tooling rather than a replacement for production messaging infrastructure at scale."
          }
        ]
      },
      {
        "id": "7-configure-and-test-webhooks",
        "title": "7. Configure and test webhooks",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The MCP can help configure webhook callback URLs and subscriptions and test whether events are reaching your integration. This is useful because webhook setup commonly requires work across Meta configuration screens and application code."
          },
          {
            "type": "paragraph",
            "html": "A sensible workflow is: ask the agent to inspect the current webhook configuration; specify the callback URL and events you need; review the proposed changes; apply them; trigger a test event; and verify that your application actually receives and processes it."
          },
          {
            "type": "paragraph",
            "html": "Do not treat an agent's statement that a webhook is configured as sufficient proof. Check the receiving application's logs or event handling as well."
          }
        ]
      },
      {
        "id": "8-use-meta-social-technologies-mcp-for-docs-and-troubleshooting",
        "title": "8. Use Meta Social Technologies MCP for docs and troubleshooting",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meta describes WhatsApp Business Tools MCP and Meta Social Technologies MCP as complementary. If the agent needs to discover a Graph API endpoint, search Meta's developer documentation, inspect app configuration or troubleshoot an API error, the Social Technologies MCP can provide that developer context while the WhatsApp-specific MCP handles supported WhatsApp resources and tests."
          },
          {
            "type": "paragraph",
            "html": "This division is useful: one MCP is primarily about understanding Meta's developer surface, while the other performs WhatsApp Business setup and configuration actions."
          }
        ]
      },
      {
        "id": "9-review-permissions-and-state-changing-actions",
        "title": "9. Review permissions and state-changing actions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "MCP makes operational work conversational, but it does not make it consequence-free. Before approving changes, confirm which business/app/account is in scope, which phone number is being changed, what template or webhook will be created, and whether the action is reversible."
          },
          {
            "type": "paragraph",
            "html": "Reporting based on Meta's launch documentation says reads run in the user's access context, tool invocations are logged, and state-changing actions require an authenticated user context. Those controls help, but human review remains appropriate for business messaging infrastructure."
          }
        ]
      },
      {
        "id": "what-to-do-if-whatsapp-business-tools-mcp-is-not-showing",
        "title": "What to do if WhatsApp Business Tools MCP is not showing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Because the release is gradual, absence does not necessarily mean a configuration error. Check whether your chosen agent client currently supports/discovers the server, whether your Meta account is in the rollout, whether you are signed into the correct developer/business account, and whether the required permissions and business prerequisites are satisfied."
          },
          {
            "type": "paragraph",
            "html": "There is not yet enough stable first-party rollout documentation to promise a universal country, account tier or date for access."
          }
        ]
      },
      {
        "id": "what-the-mcp-does-not-replace",
        "title": "What the MCP does not replace",
        "blocks": [
          {
            "type": "paragraph",
            "html": "It does not replace the WhatsApp Business Platform or Cloud API for production messaging. It does not bypass phone verification, Business Verification, payment requirements, template review or WhatsApp policies. It also does not guarantee that an integration works simply because configuration calls succeeded; your application still needs to handle API responses, webhook events, errors and production operational requirements correctly."
          }
        ]
      },
      {
        "id": "practical-prompts",
        "title": "Practical prompts",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Rather than asking an agent to 'set up everything,' use bounded instructions such as: inspect my current WhatsApp Business setup and list missing prerequisites without changing anything; use the existing WhatsApp Business Account and tell me which phone-number verification step is required next; draft a utility message template for this stated purpose but do not submit it until I approve the copy; inspect my webhook subscriptions and explain what would change before applying anything; or send one test message to the approved test destination and report the API result."
          },
          {
            "type": "paragraph",
            "html": "The principle is simple: inspect first, scope the action, review the proposed change, execute, then verify independently."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Can I use WhatsApp Business Tools MCP with ChatGPT or Claude?"
          },
          {
            "type": "paragraph",
            "html": "Meta's launch material names ChatGPT and Claude, along with Cursor and Codex, among supported/discoverable agent environments. Availability can vary during rollout."
          },
          {
            "type": "subheading",
            "text": "Can the agent verify my phone number automatically?"
          },
          {
            "type": "paragraph",
            "html": "The MCP supports the phone onboarding/verification workflow, but it does not bypass proof-of-ownership requirements such as verification codes."
          },
          {
            "type": "subheading",
            "text": "Can it create WhatsApp templates?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Meta says the agent can create or edit templates and surface approval status. WhatsApp's template rules and approval process still apply."
          },
          {
            "type": "subheading",
            "text": "Can it set up webhooks?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Webhook callback and subscription setup/testing are among the announced workflows. Verify the receiving application separately."
          },
          {
            "type": "subheading",
            "text": "Should I use it to send production campaigns?"
          },
          {
            "type": "paragraph",
            "html": "Not as a replacement for production messaging infrastructure. Meta currently describes the MCP as development/testing tooling; production messaging remains on the WhatsApp Business Platform/Cloud API and subject to its normal rules."
          }
        ]
      },
      {
        "id": "verification-note",
        "title": "Verification note",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This guide reflects the September 15, 2026 launch state reported from Meta's developer announcement. The dedicated Meta documentation, current agent-client support, rollout eligibility and permission scopes should be rechecked before publication because those details can change quickly during an initial rollout."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Meta for Developers — whatsapp business tools mcp",
        "url": "https://developers.facebook.com/blog/post/2026/09/15/whatsapp-business-tools-mcp/"
      },
      {
        "label": "TechCrunch — meta now lets ai agents handle the boring parts of whatsapp business setup",
        "url": "https://techcrunch.com/2026/09/15/meta-now-lets-ai-agents-handle-the-boring-parts-of-whatsapp-business-setup/"
      },
      {
        "label": "Mint — meta launches whatsapp business mcp to let ai agents handle setup and testing 117895308341",
        "url": "https://www.livemint.com/ai/meta-launches-whatsapp-business-mcp-to-let-ai-agents-handle-setup-and-testing-11789530834136.html"
      }
    ],
    "relatedPaths": [
      "/blog/whatsapp-business-tools-mcp"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "WhatsApp Business Tools MCP",
    "targetSearchIntent": "Understand Meta's WhatsApp Business MCP, what it can do, who can access it, supported agents, setup boundaries and practical use cases.",
    "targetQuery": "WhatsApp Business Tools MCP",
    "slug": "whatsapp-business-tools-mcp",
    "title": "WhatsApp Business Tools MCP: Setup, Features & AI Agents",
    "metaTitle": "WhatsApp Business Tools MCP: Setup, Features & AI Agents",
    "metaDescription": "Meta's WhatsApp Business Tools MCP lets AI coding agents configure WhatsApp Business accounts, phone numbers, templates and webhooks. Here's what it does, availability and limits.",
    "h1": "WhatsApp Business Tools MCP: What It Does and How AI Agents Use It",
    "excerpt": "Meta has launched WhatsApp Business Tools MCP, a first-party Model Context Protocol server designed to let AI coding agents help set up and manage parts of the WhatsApp Business Platform. Instead of moving repeatedly between Meta's Developer Console, Business Manager, API documentation and a code editor, a developer can describe…",
    "category": "Automation",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-17",
    "dateModified": "2026-09-17",
    "ogAlt": "Project Monet editorial illustration for WhatsApp Business Tools MCP: What It Does and How AI Agents Use It",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meta has launched WhatsApp Business Tools MCP, a first-party Model Context Protocol server designed to let AI coding agents help set up and manage parts of the WhatsApp Business Platform. Instead of moving repeatedly between Meta's Developer Console, Business Manager, API documentation and a code editor, a developer can describe supported setup tasks to an agent and let that agent carry them out through the MCP connection."
          }
        ]
      },
      {
        "id": "what-is-whatsapp-business-tools-mcp",
        "title": "What is WhatsApp Business Tools MCP?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "WhatsApp Business Tools MCP is an official agent-facing interface for WhatsApp Business Platform setup and testing. Launch reporting based on Meta's developer announcement names Claude, Cursor, Codex and ChatGPT among the compatible coding-agent environments."
          },
          {
            "type": "paragraph",
            "html": "The important distinction is that this is not a new consumer WhatsApp chatbot and it is not a replacement for the WhatsApp Business Platform. It is a tool layer that lets an authenticated AI agent perform supported configuration work against the platform."
          }
        ]
      },
      {
        "id": "what-can-it-do",
        "title": "What can it do?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "At launch, Meta says the MCP can assist with several common onboarding and development jobs: creating a WhatsApp Business Account; adding and verifying a business phone number; registering the number for Cloud API access; checking required Terms of Service state; creating or editing message templates; checking template approval state; sending test messages; configuring and testing webhooks; and identifying setup blockers involving items such as payment methods or Business Verification."
          },
          {
            "type": "paragraph",
            "html": "Those capabilities make the release especially relevant to developers who configure WhatsApp integrations infrequently. The MCP changes the interface for the work—from navigating several consoles and documents to directing an agent conversationally—but it does not remove Meta's underlying account, verification, permission or policy requirements."
          }
        ]
      },
      {
        "id": "which-ai-agents-work-with-it",
        "title": "Which AI agents work with it?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Launch material and reporting identify Claude, Cursor, Codex and ChatGPT as discovery or usage surfaces. Availability can change as agent clients add or modify MCP support, so this should be treated as a launch-state list rather than a permanent compatibility guarantee."
          }
        ]
      },
      {
        "id": "authentication-and-permissions",
        "title": "Authentication and permissions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The agent does not receive unrestricted access to every Meta asset a developer can reach. Reporting based on Meta's documentation says the connection uses Facebook Login for Business and specific permissions. State-changing operations remain tied to an authenticated human/admin context, reads operate within the user's access context, and tool calls are logged."
          },
          {
            "type": "paragraph",
            "html": "This matters because MCP makes actions easier to request, not permissionless. A business should still review which account and business assets are selected during connection and which permissions the agent receives."
          }
        ]
      },
      {
        "id": "whatsapp-business-tools-mcp-vs-meta-social-technologies-mcp",
        "title": "WhatsApp Business Tools MCP vs Meta Social Technologies MCP",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meta positions the two MCP servers as complementary. WhatsApp Business Tools MCP focuses on operational WhatsApp Business onboarding and configuration: accounts, numbers, templates, test messages and webhooks. Meta Social Technologies MCP is broader developer tooling for tasks such as finding Graph API endpoints, searching documentation, inspecting app configuration and troubleshooting API errors."
          },
          {
            "type": "paragraph",
            "html": "A developer building a WhatsApp integration may therefore use both: one to understand the API and diagnose issues, and the WhatsApp-specific MCP to configure supported business resources."
          }
        ]
      },
      {
        "id": "is-it-available-to-everyone",
        "title": "Is it available to everyone?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No universal-access claim should be made yet. Meta is rolling the tool out gradually, and launch reporting says it may not be available to every developer immediately. If it is not visible in an agent or account, rollout status, account eligibility and client-side MCP support are all possible factors to check before assuming the product is broken."
          }
        ]
      },
      {
        "id": "is-it-for-production-messaging",
        "title": "Is it for production messaging?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Meta's launch positioning describes the current tool as intended for development and testing rather than as a production messaging-at-scale system. Businesses still use the underlying WhatsApp Business Platform and Cloud API for production messaging. The MCP helps configure and test that environment."
          }
        ]
      },
      {
        "id": "pricing",
        "title": "Pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No standalone price for WhatsApp Business Tools MCP was verified at launch. That should not be interpreted as proof that every related WhatsApp Business Platform action is free; existing platform pricing and account requirements remain separate questions."
          }
        ]
      },
      {
        "id": "why-this-launch-matters",
        "title": "Why this launch matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The larger shift is that a major business-messaging platform is exposing operational setup to general-purpose coding agents through a standard protocol. MCP started as a way for models to discover context and tools, but releases like this increasingly let agents perform real administrative work after authentication."
          },
          {
            "type": "paragraph",
            "html": "For businesses, that can shorten the path from 'we want WhatsApp messaging' to a testable integration. For developers, it can reduce the amount of one-off console work involved in onboarding. The trade-off is that permission review, human oversight and verification become more important because the agent can now request state-changing actions rather than merely explain documentation."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Can ChatGPT configure WhatsApp Business with MCP?"
          },
          {
            "type": "paragraph",
            "html": "Meta's launch material lists ChatGPT among the agent environments where WhatsApp Business Tools MCP can be discovered or used. Exact availability may vary during rollout."
          },
          {
            "type": "subheading",
            "text": "Can Claude or Codex use WhatsApp Business Tools MCP?"
          },
          {
            "type": "paragraph",
            "html": "Yes, Claude and Codex are named among supported/discoverable coding-agent environments in launch reporting based on Meta's announcement."
          },
          {
            "type": "subheading",
            "text": "Can the MCP create WhatsApp message templates?"
          },
          {
            "type": "paragraph",
            "html": "Meta says supported workflows include creating and editing messaging templates and checking their approval status."
          },
          {
            "type": "subheading",
            "text": "Can it configure webhooks?"
          },
          {
            "type": "paragraph",
            "html": "Yes. The launch includes webhook setup/testing workflows, alongside test messages and setup checks."
          },
          {
            "type": "subheading",
            "text": "Does it bypass Business Verification?"
          },
          {
            "type": "paragraph",
            "html": "No. The MCP can help identify verification or configuration blockers; it does not eliminate Meta's verification and policy requirements."
          },
          {
            "type": "subheading",
            "text": "Is WhatsApp Business Tools MCP a production messaging API?"
          },
          {
            "type": "paragraph",
            "html": "No. It is an agent-facing setup and management tool around the WhatsApp Business Platform. Meta currently positions it for development and testing rather than production messaging at scale."
          }
        ]
      },
      {
        "id": "sources-and-verification-note",
        "title": "Sources and verification note",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Material capabilities above are based on Meta's September 15, 2026 developer announcement as described by TechCrunch, Mint and other launch reporting. The dedicated first-party Meta page should be rechecked immediately before publication because its indexed URL did not surface directly in this radar run. Volatile rollout, compatibility and permission details should be verified again before approval."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Meta for Developers — whatsapp business tools mcp",
        "url": "https://developers.facebook.com/blog/post/2026/09/15/whatsapp-business-tools-mcp/"
      },
      {
        "label": "TechCrunch — meta now lets ai agents handle the boring parts of whatsapp business setup",
        "url": "https://techcrunch.com/2026/09/15/meta-now-lets-ai-agents-handle-the-boring-parts-of-whatsapp-business-setup/"
      },
      {
        "label": "Mint — meta launches whatsapp business mcp to let ai agents handle setup and testing 117895308341",
        "url": "https://www.livemint.com/ai/meta-launches-whatsapp-business-mcp-to-let-ai-agents-handle-setup-and-testing-11789530834136.html"
      }
    ],
    "relatedPaths": [
      "/blog/how-to-use-whatsapp-business-tools-mcp"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Salesforce Koa",
    "targetSearchIntent": "Evaluate Salesforce's reported Koa CRM benchmark results, what they measure, and what the numbers do and do not prove",
    "targetQuery": "Salesforce Koa benchmarks",
    "parentSlug": "salesforce-koa",
    "slug": "salesforce-koa-benchmarks",
    "title": "Salesforce Koa Benchmarks: CRM Bench Results Explained",
    "metaTitle": "Salesforce Koa Benchmarks: CRM Results Explained",
    "metaDescription": "Salesforce says Koa delivers 3x fewer CRM errors, 11% better action precision and 2.1x reliability. Here is what the vendor-reported benchmarks actually mean.",
    "h1": "Salesforce Koa Benchmarks: What the CRM Results Actually Show",
    "excerpt": "Salesforce is making unusually specific performance claims for Koa, its new CRM reasoning model for Agentforce. The headline is that Koa matches or exceeds leading model performance on CRM actions with three times fewer errors.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-17",
    "dateModified": "2026-09-17",
    "ogAlt": "Project Monet editorial illustration for Salesforce Koa Benchmarks: What the CRM Results Actually Show",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce is making unusually specific performance claims for Koa, its new CRM reasoning model for Agentforce. The headline is that Koa matches or exceeds leading model performance on CRM actions with three times fewer errors."
          },
          {
            "type": "paragraph",
            "html": "That sounds impressive, but the useful question is what Salesforce actually measured — and what the launch-day evidence cannot yet tell us."
          }
        ]
      },
      {
        "id": "the-headline-koa-benchmark-claim",
        "title": "The headline Koa benchmark claim",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce says its CRM Benchmark includes real-world-style tasks such as updating an opportunity, routing a case and scheduling a follow-up. On that benchmark, Salesforce reports that Koa matches or exceeds leading model performance while producing three times fewer errors."
          },
          {
            "type": "paragraph",
            "html": "The benchmark is focused on CRM actions and tool use, not general knowledge, coding, mathematics or creative tasks. Koa is a domain-specific reasoning model, so its most relevant evaluation is whether it chooses and executes the correct actions inside enterprise workflows."
          }
        ]
      },
      {
        "id": "salesforce-s-additional-koa-performance-numbers",
        "title": "Salesforce's additional Koa performance numbers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce's Koa product page reports three additional comparisons against what it calls today's default general-intelligence models:"
          },
          {
            "type": "list",
            "items": [
              "11% more precise at calling the right action.",
              "2.1 times greater reliability.",
              "15% better at remembering context in long back-and-forth conversations."
            ]
          },
          {
            "type": "paragraph",
            "html": "Salesforce connects these metrics to practical agent behavior: fewer incorrect tool calls, more reliable answers and less need for users to repeat context during longer conversations."
          }
        ]
      },
      {
        "id": "what-does-3x-fewer-errors-mean",
        "title": "What does '3x fewer errors' mean?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce frames the result around CRM action errors. The launch material says the benchmark includes tasks such as updating opportunities, routing cases and scheduling follow-ups."
          },
          {
            "type": "paragraph",
            "html": "It should not be interpreted as 'Koa makes one-third as many errors on every AI task.' The result belongs to Salesforce's CRM evaluation environment and the exact comparison depends on the benchmark design and reference models."
          }
        ]
      },
      {
        "id": "why-action-precision-matters-for-ai-agents",
        "title": "Why action precision matters for AI agents",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A conversational model can give a plausible answer and still choose the wrong tool or business action. In CRM workflows, that difference is important: routing a case incorrectly or updating the wrong field can create an operational failure even when the generated explanation sounds convincing."
          },
          {
            "type": "paragraph",
            "html": "Koa was post-trained on synthetic workflows that explicitly map tasks to sequences of actions and tool calls. Salesforce says this training included supervised fine-tuning and reinforcement learning using Group Relative Policy Optimization, with NVIDIA NeMo tooling."
          },
          {
            "type": "paragraph",
            "html": "That architecture helps explain why Salesforce is emphasizing action selection rather than conventional language-model leaderboards."
          }
        ]
      },
      {
        "id": "is-koa-better-than-claude-gpt-or-gemini",
        "title": "Is Koa better than Claude, GPT or Gemini?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The available evidence does not justify that conclusion in general."
          },
          {
            "type": "paragraph",
            "html": "Salesforce says Koa matches or exceeds leading models on its CRM Benchmark, but the launch materials do not establish a universal ranking across coding, reasoning, research, writing or other workloads. Nor should a CRM-specialized benchmark be used to declare a general winner."
          },
          {
            "type": "paragraph",
            "html": "A fair comparison would need the same models, prompts, tools, Salesforce environment, success criteria and cost/latency measurements evaluated under transparent conditions."
          },
          {
            "type": "paragraph",
            "html": "Until independent or reproducible evaluations appear, the strongest defensible statement is narrower: Salesforce reports that Koa performs very well on its own CRM-focused action benchmark."
          }
        ]
      },
      {
        "id": "who-produced-the-benchmark",
        "title": "Who produced the benchmark?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The launch performance figures come from Salesforce. They are vendor-reported claims, not an independent third-party certification."
          },
          {
            "type": "paragraph",
            "html": "That does not make them useless. They provide an early view of what Salesforce optimized Koa for and which metrics the company considers important. But buyers should distinguish a vendor benchmark from independent production evidence."
          }
        ]
      },
      {
        "id": "what-is-missing-from-the-launch-day-benchmark-picture",
        "title": "What is missing from the launch-day benchmark picture?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Several details would make Koa easier to evaluate independently:"
          },
          {
            "type": "list",
            "items": [
              "complete results for every comparison model;",
              "cost and token usage under identical workloads;",
              "latency measurements;",
              "failure categories and severity;",
              "reproducible evaluation instructions;",
              "performance outside CRM workflows;",
              "production-scale customer results after general availability."
            ]
          },
          {
            "type": "paragraph",
            "html": "Those gaps are especially important because Koa remains in select customer pilots."
          }
        ]
      },
      {
        "id": "why-the-benchmark-still-matters",
        "title": "Why the benchmark still matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa's evaluation strategy is notable even before independent results arrive. Salesforce is measuring the model around business actions rather than only abstract reasoning tests."
          },
          {
            "type": "paragraph",
            "html": "That reflects a larger shift in agent evaluation: an enterprise agent needs to select the correct tool, follow policy, maintain context and complete a workflow reliably. A model can score well on general benchmarks and still fail at those operational jobs."
          },
          {
            "type": "paragraph",
            "html": "For teams considering Agentforce, Koa's real test will therefore be production task completion, error rates, latency and cost after broader access becomes available."
          }
        ]
      },
      {
        "id": "faqs",
        "title": "FAQs",
        "blocks": [
          {
            "type": "subheading",
            "text": "What is Salesforce's Koa CRM Benchmark?"
          },
          {
            "type": "paragraph",
            "html": "Salesforce describes it as a suite of real-world CRM tasks including actions such as updating opportunities, routing cases and scheduling follow-ups."
          },
          {
            "type": "subheading",
            "text": "Does Koa have three times better accuracy?"
          },
          {
            "type": "paragraph",
            "html": "That is not Salesforce's wording. Salesforce says Koa produces three times fewer errors while matching or exceeding leading model performance on CRM actions."
          },
          {
            "type": "subheading",
            "text": "Is the Koa benchmark independent?"
          },
          {
            "type": "paragraph",
            "html": "No. The launch figures discussed here are Salesforce-reported."
          },
          {
            "type": "subheading",
            "text": "Does the benchmark prove Koa is better than GPT, Claude or Gemini?"
          },
          {
            "type": "paragraph",
            "html": "No. It supports a narrower claim about Salesforce's CRM-focused evaluation. A general comparison would require broader and preferably independent testing."
          },
          {
            "type": "subheading",
            "text": "Is Koa generally available?"
          },
          {
            "type": "paragraph",
            "html": "Not yet. Salesforce says Koa is in select Agentforce customer pilots, with U.S. general availability expected in winter 2026."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa's early benchmark story is promising for CRM agents, particularly around tool selection and workflow reliability. But the numbers should be read as vendor-reported CRM-specific evidence, not a universal AI leaderboard. The most valuable next evidence will come from reproducible evaluations and real production deployments after Koa expands beyond its pilot."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Salesforce — koa",
        "url": "https://www.salesforce.com/agentforce/koa/"
      },
      {
        "label": "Salesforce — koa reasoning model",
        "url": "https://www.salesforce.com/news/press-releases/2026/09/15/koa-reasoning-model/"
      },
      {
        "label": "NVIDIA Blog — jensen huang dreamforce",
        "url": "https://blogs.nvidia.com/blog/jensen-huang-dreamforce/"
      },
      {
        "label": "TechCrunch — salesforce and nvidias new reasoning model is everything the ai labs should fear",
        "url": "https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/"
      },
      {
        "label": "Salesforce — why we post trained our own reasoning model",
        "url": "https://www.salesforce.com/news/stories/why-we-post-trained-our-own-reasoning-model/"
      }
    ],
    "relatedPaths": [
      "/blog/salesforce-koa"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Salesforce Koa",
    "targetSearchIntent": "Understand Salesforce Koa, what it is, how it works in Agentforce, its benchmark claims, availability, security model and current limitations",
    "targetQuery": "Salesforce Koa",
    "slug": "salesforce-koa",
    "title": "Salesforce Koa: CRM Reasoning Model, Benchmarks & Availability",
    "metaTitle": "Salesforce Koa: CRM Model, Benchmarks & Availability",
    "metaDescription": "Salesforce Koa is a CRM reasoning model built on NVIDIA Nemotron for Agentforce. See how it works, benchmark claims, pilot access, security and availability.",
    "h1": "Salesforce Koa: What the New CRM Reasoning Model Does",
    "excerpt": "Salesforce has introduced Koa, its first reasoning model built specifically for customer relationship management work. Announced with NVIDIA on September 15, 2026, Koa is designed for Agentforce agents that need to reason through multistep sales, service and other CRM workflows rather than simply generate text.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-17",
    "dateModified": "2026-09-17",
    "ogAlt": "Project Monet editorial illustration for Salesforce Koa: What the New CRM Reasoning Model Does",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce has introduced Koa, its first reasoning model built specifically for customer relationship management work. Announced with NVIDIA on September 15, 2026, Koa is designed for Agentforce agents that need to reason through multistep sales, service and other CRM workflows rather than simply generate text."
          }
        ]
      },
      {
        "id": "what-is-salesforce-koa",
        "title": "What is Salesforce Koa?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa is a Salesforce-hosted reasoning model for Agentforce. Salesforce built it by post-training NVIDIA Nemotron 3 Super on a proprietary synthetic dataset modeled on knowledge accumulated from nearly three decades of CRM deployments."
          },
          {
            "type": "paragraph",
            "html": "Salesforce says the synthetic scenarios cover more than 14 industries, including manufacturing, financial services, healthcare and travel. They simulate jobs such as generating and qualifying leads, updating opportunities, routing service cases and resolving customer issues. Each scenario maps the actions and tool calls needed to complete a task."
          },
          {
            "type": "paragraph",
            "html": "The important distinction is that Salesforce says it did not use customer data to train Koa. The company controls the model weights and says post-training and inference run inside Salesforce's own trust boundary."
          }
        ]
      },
      {
        "id": "how-koa-was-trained",
        "title": "How Koa was trained",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce says Koa uses supervised fine-tuning plus reinforcement learning with Group Relative Policy Optimization. The training stack includes NVIDIA NeMo RL, NeMo Gym and NeMo AutoModel."
          },
          {
            "type": "paragraph",
            "html": "Rather than trying to make Koa a general-purpose frontier model, Salesforce has optimized it for CRM reasoning and tool use. That makes Koa an example of a broader trend toward domain-specific reasoning models built on open-model foundations."
          }
        ]
      },
      {
        "id": "koa-benchmarks",
        "title": "Koa benchmarks",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce reports that Koa matches or exceeds leading models on its CRM Benchmark while producing three times fewer errors. The benchmark includes real-world-style CRM actions such as updating an opportunity, routing a case and scheduling a follow-up."
          },
          {
            "type": "paragraph",
            "html": "On its Koa product page, Salesforce also reports that Koa is 11% more precise at calling the right action, delivers 2.1 times greater reliability and is 15% better at retaining context in long conversations compared with what Salesforce calls today's default general-intelligence models."
          },
          {
            "type": "paragraph",
            "html": "These are Salesforce-reported results. They should not be treated as independent proof that Koa is generally better than Claude, GPT, Gemini or other models. Performance outside Salesforce's CRM benchmark may be different, and Salesforce has not published enough launch-day evidence to make a universal model ranking."
          }
        ]
      },
      {
        "id": "where-koa-fits-in-agentforce",
        "title": "Where Koa fits in Agentforce",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa is a model option for Agentforce. Salesforce says customers will be able to select it at the organization level and for individual agents and sub-agents."
          },
          {
            "type": "paragraph",
            "html": "The model is intended for workflows where an agent must understand business context, decide what action should happen next and call the correct tools. Examples include lead qualification, opportunity management, service-case routing, follow-ups and longer processes that cross several CRM actions."
          },
          {
            "type": "paragraph",
            "html": "Salesforce is already using Koa internally, including in a Slack agent that helps employees find information and complete everyday tasks."
          }
        ]
      },
      {
        "id": "koa-availability",
        "title": "Koa availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa is not generally available yet. As of September 16, 2026, Salesforce says it is available to select pilot customers in Agentforce. Named pilot participants include 1-800Accountant, Baxter Credit Union, Engine, Formula 1, UChicago Medicine and Xero."
          },
          {
            "type": "paragraph",
            "html": "Salesforce says general availability is expected in winter 2026 in U.S. regions. That is a target rather than a guaranteed launch date, so buyers should recheck Salesforce documentation before planning a production deployment."
          }
        ]
      },
      {
        "id": "is-salesforce-koa-open-source",
        "title": "Is Salesforce Koa open source?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa is built on NVIDIA Nemotron 3 Super, an open-model foundation, but Salesforce's launch materials do not establish Koa itself as a downloadable open-weight release. Salesforce says it controls Koa's weights and hosts the model within its infrastructure."
          },
          {
            "type": "paragraph",
            "html": "Do not confuse the openness of the Nemotron foundation with the distribution terms of Salesforce's post-trained Koa model."
          }
        ]
      },
      {
        "id": "does-koa-use-salesforce-customer-data-for-training",
        "title": "Does Koa use Salesforce customer data for training?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce says no customer data was used to train Koa. Its training corpus was built from synthetic enterprise scenarios."
          },
          {
            "type": "paragraph",
            "html": "For inference, Salesforce says Koa runs within its trust boundary and only receives context a customer chooses to provide. Those are vendor-described architecture and privacy claims; organizations with regulatory requirements should still evaluate Salesforce's contractual, security and compliance documentation for their own deployment."
          }
        ]
      },
      {
        "id": "koa-pricing",
        "title": "Koa pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Salesforce has not announced a standalone universal price for Koa. Because it is currently a select Agentforce pilot, any article claiming a fixed Koa subscription or per-token price would be premature."
          }
        ]
      },
      {
        "id": "koa-vs-general-purpose-models",
        "title": "Koa vs general-purpose models",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa's pitch is specialization rather than general intelligence. Salesforce already supports external frontier models in its broader AI stack. Koa gives it a model it controls and can optimize specifically for CRM reasoning, tool selection and enterprise workflows."
          },
          {
            "type": "paragraph",
            "html": "That does not mean Koa is automatically better for coding, creative writing, research, mathematics or other general tasks. A useful comparison will need workload-specific evidence after broader availability."
          }
        ]
      },
      {
        "id": "why-koa-matters",
        "title": "Why Koa matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Koa shows how enterprise software companies may increasingly build specialized reasoning layers on top of open model foundations instead of routing every difficult task to a general-purpose frontier API."
          },
          {
            "type": "paragraph",
            "html": "For Salesforce, that could mean tighter control over model behavior, data boundaries and the economics of Agentforce workflows. For users, the practical question will be whether that specialization produces more reliable actions on real CRM tasks once Koa reaches broader production use."
          }
        ]
      },
      {
        "id": "faqs",
        "title": "FAQs",
        "blocks": [
          {
            "type": "subheading",
            "text": "When was Salesforce Koa announced?"
          },
          {
            "type": "paragraph",
            "html": "Salesforce and NVIDIA announced Koa on September 15, 2026."
          },
          {
            "type": "subheading",
            "text": "What model is Koa based on?"
          },
          {
            "type": "paragraph",
            "html": "Salesforce says Koa was created by post-training NVIDIA Nemotron 3 Super."
          },
          {
            "type": "subheading",
            "text": "Can I use Koa now?"
          },
          {
            "type": "paragraph",
            "html": "Only select Agentforce pilot customers currently have access. Salesforce expects U.S. general availability in winter 2026."
          },
          {
            "type": "subheading",
            "text": "Did Salesforce train Koa on customer data?"
          },
          {
            "type": "paragraph",
            "html": "Salesforce says no. It says Koa was trained using synthetic scenarios modeled on CRM workflows."
          },
          {
            "type": "subheading",
            "text": "Is there a Koa API?"
          },
          {
            "type": "paragraph",
            "html": "Salesforce's launch announcement does not establish a standalone public Koa API. Its documented launch surface is Agentforce."
          },
          {
            "type": "subheading",
            "text": "How much does Koa cost?"
          },
          {
            "type": "paragraph",
            "html": "Salesforce has not published a standalone universal Koa price."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "Salesforce — koa reasoning model",
        "url": "https://www.salesforce.com/news/press-releases/2026/09/15/koa-reasoning-model/"
      },
      {
        "label": "Salesforce — koa",
        "url": "https://www.salesforce.com/agentforce/koa/"
      },
      {
        "label": "NVIDIA Blog — jensen huang dreamforce",
        "url": "https://blogs.nvidia.com/blog/jensen-huang-dreamforce/"
      },
      {
        "label": "TechCrunch — salesforce and nvidias new reasoning model is everything the ai labs should fear",
        "url": "https://techcrunch.com/2026/09/15/salesforce-and-nvidias-new-reasoning-model-is-everything-the-ai-labs-should-fear/"
      }
    ],
    "relatedPaths": [
      "/blog/salesforce-koa-benchmarks"
    ]
  }
];
