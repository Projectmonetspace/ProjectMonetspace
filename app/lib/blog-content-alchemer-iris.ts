import type { BlogArticle } from "./blog-types.ts";

const sources = [
  { label: "Alchemer Iris launch announcement", url: "https://www.alchemer.com/resources/blog/alchemer-launches-iris-ai-native-cx-platform/" },
  { label: "Alchemer Iris product page", url: "https://www.alchemer.com/iris/" },
  { label: "Alchemer platform overview", url: "https://www.alchemer.com/" },
];

export const alchemerIrisArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Alchemer Iris",
    targetSearchIntent: "Understand what Alchemer Iris is, which AI and feedback workflows are confirmed, when access begins, what pricing information exists, and which launch-stage details remain unknown.",
    targetQuery: "Alchemer Iris",
    slug: "alchemer-iris",
    title: "Alchemer Iris: Features, Availability & AI Customer Feedback",
    metaTitle: "Alchemer Iris: Features, Availability & AI Customer Feedback",
    metaDescription: "Alchemer Iris is a new AI-native customer feedback platform for surveys, reviews, reputation management and workflow automation. Here’s what’s confirmed, when access starts and what remains unknown.",
    h1: "Alchemer Iris: What It Is, Features, Availability and How It Works",
    excerpt: "Alchemer Iris is a newly announced AI-native customer feedback and intelligence platform combining surveys, reviews, reputation workflows, cross-channel analysis and operational automation.",
    category: "Marketing",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    ogAlt: "Alchemer Iris customer feedback, survey, review and AI workflow platform overview",
    sections: [
      {
        id: "what-is-alchemer-iris",
        title: "What is Alchemer Iris?",
        blocks: [
          { type: "paragraph", html: "Alchemer announced Iris on September 2, 2026 as an AI-native customer feedback and intelligence platform built to connect feedback collection, analysis and operational follow-up across surveys, reviews, reputation management and other customer-listening channels." },
          { type: "paragraph", html: "The important distinction is architectural rather than simply adding a chatbot to survey software. Alchemer says Iris combines purpose-built AI, conversational interaction and workflow automation so teams can move from a business question to feedback, insight and action inside one platform." },
        ],
      },
      {
        id: "availability",
        title: "When is Alchemer Iris available?",
        blocks: [
          { type: "paragraph", html: "Alchemer says general availability begins in Q4 2026 and expands across customer segments. Its Iris product page is still collecting waitlist signups and says select customers will receive access starting in Q4 2026." },
          { type: "paragraph", html: "No exact general-availability day, rollout calendar, region-by-region schedule or plan-level entitlement matrix was verified at publication time. Treat access as staged rather than universally available." },
          { type: "note", html: "A waitlist and a Q4 availability window are confirmed. A specific launch day or universal account eligibility is not." },
        ],
      },
      {
        id: "features",
        title: "What can Alchemer Iris do?",
        blocks: [
          { type: "paragraph", html: "Prompt-First Navigation lets users describe what they want to accomplish in natural language and routes them toward the relevant capability or next step. The AI Survey Builder can generate a survey from a stated research objective using Alchemer's survey-design patterns." },
          { type: "paragraph", html: "Alchemer also describes AI-assisted survey follow-ups that dynamically probe a respondent for more detail, review-response generation with optional human approval, plain-language analysis of review and feedback data, and automatic surfacing of trends, anomalies and risks." },
          { type: "paragraph", html: "Its AI Removal Assistant identifies reviews that may violate Google content policies and helps prepare removal requests. That is assistance with the request process, not a guarantee that Google will remove a review." },
        ],
      },
      {
        id: "workflow-automation",
        title: "From feedback to workflow automation",
        blocks: [
          { type: "paragraph", html: "Iris is positioned beyond reporting. Alchemer says it can connect insights to actions such as responding to reviews, initiating customer follow-ups and moving work into other business systems while organizations decide where automation is allowed and where human review is required." },
          { type: "paragraph", html: "Alchemer's broader platform advertises more than 400 pre-built integrations, but a definitive Iris-specific launch matrix was not published. Do not assume every existing integration or automation action will be available to every Iris customer on day one." },
        ],
      },
      {
        id: "ai-and-security",
        title: "How Iris uses AI and what Alchemer says about data",
        blocks: [
          { type: "paragraph", html: "Alchemer describes a mix of natural-language processing, aspect-based sentiment analysis, statistical and machine-learning models, fine-tuned or proprietary models and generative AI rather than one general-purpose model for every task." },
          { type: "paragraph", html: "The Iris page says customer data is not used to train public AI models and describes secure processing, guardrails, role-based permissions and controls over when AI assists versus automates. These are vendor-described product and security claims; regulated organizations should still validate contractual, retention and data-processing terms for their own deployment." },
        ],
      },
      {
        id: "pricing",
        title: "How much does Alchemer Iris cost?",
        blocks: [
          { type: "paragraph", html: "Alchemer has not published standalone Iris pricing in the September 2 announcement or on the public Iris product page. The product page uses the phrase straightforward pricing, but that is positioning language rather than a public Iris price list." },
          { type: "paragraph", html: "Alchemer publishes pricing for some existing survey plans, but those prices should not be presented as Iris pricing. Iris-specific included usage, AI quotas, add-ons, rate limits and plan restrictions remain unverified and should be rechecked as Q4 access begins." },
        ],
      },
      {
        id: "who-it-is-for",
        title: "Who is Alchemer Iris for?",
        blocks: [
          { type: "paragraph", html: "The clearest audience is teams already handling significant customer or stakeholder feedback: customer-experience teams, researchers, reputation managers, multi-location brands, support organizations, product teams and marketers." },
          { type: "paragraph", html: "For agencies and growth teams, the most relevant announced use cases are survey creation, customer-language research, review monitoring, reputation workflows, feedback analysis and routing important findings into existing systems." },
        ],
      },
      {
        id: "limitations",
        title: "What remains unknown at launch",
        blocks: [
          { type: "paragraph", html: "The major unanswered questions are the precise GA date, standalone Iris pricing, account and plan entitlements, AI quotas or rate limits, Iris-specific API documentation, rollout regions and the final integration matrix." },
          { type: "paragraph", html: "Alchemer also cites results from customers using AI and feedback capabilities that form the foundation for Iris. Those outcomes predate the Iris platform launch and should not be treated as independent performance benchmarks for Iris itself." },
          { type: "note", html: "As Q4 2026 rollout documentation appears, this canonical page should be updated rather than creating thin duplicates for every newly published commercial detail." },
        ],
      },
    ],
    sources,
    relatedPaths: [],
  },
];
