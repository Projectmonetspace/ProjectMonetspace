import type { BlogArticle } from "./blog-types.ts";

const semblySources = [
  { label: "Sembly AI — Sembly 3.0", url: "https://www.sembly.ai/" },
  { label: "Sembly AI — Pricing", url: "https://www.sembly.ai/pricing/" },
  { label: "Sembly AI — Automations & integrations", url: "https://www.sembly.ai/product/automations/" },
  { label: "Sembly AI — About", url: "https://www.sembly.ai/about-us/" },
  { label: "PR Newswire APAC — Sembly 3.0 launch", url: "https://en.prnasia.com/releases/apac/new-agentic-ai-platform-sounds-death-knell-for-manual-presentation-tools-546855.shtml" },
];

export const sembly30Articles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Sembly 3.0",
    targetSearchIntent: "Understand the September 2026 Sembly 3.0 launch, its agentic deliverable workflow, current pricing, output formats, integrations, availability and practical limitations.",
    targetQuery: "Sembly 3.0",
    slug: "sembly-3-0-agentic-ai-deliverables",
    title: "Sembly 3.0: Agentic AI for Branded Decks, Proposals & Reports",
    metaTitle: "Sembly 3.0: Agentic AI for Decks, Proposals & Reports",
    metaDescription: "Sembly 3.0 turns meetings, documents, CRM data and client context into branded PowerPoint and Word deliverables. See features, pricing, integrations and limits.",
    h1: "Sembly 3.0: Agentic AI for Branded Decks, Proposals and Reports",
    excerpt: "Sembly 3.0 moves the product beyond meeting notes into agentic production of branded, editable client deliverables grounded in reusable client context.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Sembly 3.0 workflow turning meetings, documents and CRM context into branded editable PowerPoint and Word deliverables",
    sections: [
      { id: "what-is-sembly-3-0", title: "What is Sembly 3.0?", blocks: [
        { type: "paragraph", html: "Sembly 3.0 is Sembly AI's 2026 shift from meeting intelligence toward agentic production of client-facing business deliverables. The live product is designed to turn meetings, documents, CRM records, websites and other knowledge into branded proposals, decks, reports and related files." },
        { type: "paragraph", html: "Sembly's launch announcement says version 3.0 launched on September 8, 2026. The current first-party site exposes the Sembly 3.0 product and a live free-start path, so this is an available product rather than a future preview." },
      ]},
      { id: "workflow", title: "How the Sembly 3.0 workflow works", blocks: [
        { type: "paragraph", html: "The product organizes each client into a reusable context environment containing identity, project history, reference files, contracts, meetings and delivery standards. Reusable brand packages can store logos, colors, fonts, voice and related presentation rules." },
        { type: "paragraph", html: "A user states the deliverable goal, selects or controls the sources that should ground the work, steers structure and emphasis as it builds, then approves the finished file. Sembly explicitly says nothing ships without user approval." },
      ]},
      { id: "deliverables", title: "What Sembly 3.0 can create", blocks: [
        { type: "list", items: ["proposals", "pitch decks", "statements of work", "project plans", "status reports", "QBR decks", "creative briefs", "campaign reports"] },
        { type: "paragraph", html: "The current product page says supported deliverables export as editable PowerPoint or Word files. That matters because teams can continue editing, reviewing and storing the output in their existing document workflow instead of being locked into a hosted AI presentation." },
      ]},
      { id: "pricing", title: "Sembly 3.0 pricing", blocks: [
        { type: "paragraph", html: "The live monthly pricing page currently lists Basic at $17 per month, Pro at $29 per user per month and MAX at $39 per user per month, with Enterprise priced through sales. A free-trial tier is also shown." },
        { type: "paragraph", html: "Current plan capacity differs by clients, brand packages, credits, integrations and history. Basic includes 25 clients, 50 brand packages and 2,500 monthly credits; Pro lists 100 clients, 200 brand packages and 3,000 monthly credits; MAX lists 500 clients, 1,000 brand packages and 3,500 monthly credits per user. These are current vendor terms and can change." },
      ]},
      { id: "integrations", title: "Meetings, integrations and MCP", blocks: [
        { type: "paragraph", html: "Sembly's pricing matrix currently includes Google Meet, Teams, Zoom and Webex capture across plans. Pro and higher list workspace automations, webhooks and MCP access, while integration allowances increase by plan." },
        { type: "note", html: "A connector being listed does not mean every business workflow is automatically safe or correct. Verify the current integration directory, permissions and plan limits before depending on one specific system." },
      ]},
      { id: "best-fit", title: "Who Sembly 3.0 is for", blocks: [
        { type: "paragraph", html: "The clearest fit is a professional-services team that repeatedly turns conversations and stored business knowledge into client-ready work. Agencies, consultants, sales teams and project-delivery organizations fit that pattern particularly well." },
        { type: "paragraph", html: "For a one-off deck with little reusable client context, a lighter presentation generator may be simpler. Sembly's value increases when the same client history, brand rules and source materials need to be reused across many deliverables." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "paragraph", html: "Agentic production does not remove the need to fact-check pricing, dates, performance metrics, forecasts, contractual language or client commitments. A polished presentation can still contain an incorrect inference or stale source." },
        { type: "paragraph", html: "Automatically derived branding should also be reviewed. A client website may contain old assets, campaign-specific colors or fonts that are not the approved brand system." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Sembly 3.0 is best understood as a repeatable client-deliverable production system: persistent context, reusable branding, source control, guided generation, human approval and editable PowerPoint or Word output." },
        { type: "paragraph", html: "For a practical step-by-step workflow, continue with the Sembly 3.0 how-to guide linked below." },
      ]},
    ],
    sources: semblySources,
    relatedPaths: ["/blog/how-to-use-sembly-3-0"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Sembly 3.0",
    targetSearchIntent: "Create a branded deck or proposal with Sembly 3.0 by organizing client context, verifying branding, choosing sources, steering the draft, fact-checking and exporting an editable file.",
    targetQuery: "how to use Sembly 3.0",
    parentSlug: "sembly-3-0-agentic-ai-deliverables",
    slug: "how-to-use-sembly-3-0",
    title: "How to Use Sembly 3.0: Create a Branded Deck or Proposal",
    metaTitle: "How to Use Sembly 3.0 for Branded Decks & Proposals",
    metaDescription: "A practical Sembly 3.0 workflow: set up client context and branding, choose sources, generate a deck or proposal, review it, and export editable PPTX or DOCX.",
    h1: "How to Use Sembly 3.0 to Create a Branded Deck or Proposal",
    excerpt: "Use Sembly 3.0 as a controlled production workflow: organize client context, verify the brand package, choose authoritative sources, steer the build and approve an editable output.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    ogAlt: "Sembly 3.0 workflow from client context and brand package through source selection and human review to PPTX or DOCX export",
    sections: [
      { id: "start-with-context", title: "1. Start with the client context", blocks: [
        { type: "paragraph", html: "Begin with the client and project information that should remain useful across future deliverables: current website information, discovery calls, prior proposals, project records, approved scope, research and relevant CRM context." },
        { type: "note", html: "Do not upload everything simply because it exists. Prefer current, relevant and authorized source material." },
      ]},
      { id: "brand-package", title: "2. Build and verify the brand package", blocks: [
        { type: "paragraph", html: "Sembly documents reusable brand packages covering logo, colors, fonts, voice and visual rules. If branding is derived from a website, review it before reuse because campaign assets and legacy styling can be mistaken for permanent brand standards." },
        { type: "list", items: ["confirm the current logo", "verify colors and fonts", "check tone and voice", "compare against the latest approved brand guide"] },
      ]},
      { id: "goal", title: "3. Define one clear deliverable goal", blocks: [
        { type: "paragraph", html: "State the business outcome, audience and document type. 'Create a pitch deck for the executive team using the approved Q4 scope and latest discovery call' is easier to evaluate than 'make a presentation.'" },
        { type: "paragraph", html: "The goal should make it obvious which facts matter and what a successful first version needs to contain." },
      ]},
      { id: "sources", title: "4. Choose the sources that should ground it", blocks: [
        { type: "paragraph", html: "Sembly's live product describes fine-grained source control. Use it deliberately: current pricing, scope and discovery material should outweigh an old brainstorm or stale account note." },
        { type: "paragraph", html: "Treat source selection as editorial control. The quality of a generated file depends partly on whether the system is grounding itself in the right evidence." },
      ]},
      { id: "steer", title: "5. Generate, then steer structure before polish", blocks: [
        { type: "paragraph", html: "Let Sembly assemble the first version, then review audience, narrative order, missing sections, duplicated ideas and unsupported claims before spending time on small wording changes." },
        { type: "paragraph", html: "The current product explicitly supports steering structure and emphasis while the file is being produced, so use that control before treating the draft as final." },
      ]},
      { id: "fact-check", title: "6. Fact-check every material claim", blocks: [
        { type: "list", items: ["pricing and budgets", "dates and deadlines", "performance metrics", "scope and contractual terms", "forecasts or expected results", "externally sourced claims"] },
        { type: "paragraph", html: "Human approval is still part of Sembly's documented workflow. Preserve it especially for client-facing commercial or legal material." },
      ]},
      { id: "export", title: "7. Export the editable PowerPoint or Word file", blocks: [
        { type: "paragraph", html: "Sembly currently documents editable .pptx and .docx output. Use PowerPoint for presentation-first work such as pitch decks and QBRs, and Word for document-first artifacts such as proposals, SOWs and project plans." },
        { type: "paragraph", html: "After export, route the file through the same internal approval and version-control process you would use for manually produced client work." },
      ]},
      { id: "pricing-and-scale", title: "8. Check pricing before scaling the workflow", blocks: [
        { type: "paragraph", html: "The current monthly pricing page lists Basic at $17, Pro at $29 per user and MAX at $39 per user, plus Enterprise. Plan limits include clients, brand packages, credits and integration allowances, so high-volume teams should evaluate capacity rather than only the headline subscription price." },
        { type: "paragraph", html: "For the broader product, current plan details and integration boundaries, use the main Sembly 3.0 overview linked below." },
      ]},
    ],
    sources: semblySources,
    relatedPaths: ["/blog/sembly-3-0-agentic-ai-deliverables"],
  },
];
