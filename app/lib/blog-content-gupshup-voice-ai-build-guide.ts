import type { BlogArticle } from "./blog-types.ts";

const gupshupVoiceAiBuildGuideSources = [
  { label: "Gupshup Voice AI Platform", url: "https://www.gupshup.ai/voice-ai-agents" },
  { label: "Gupshup Voice AI launch announcement", url: "https://www.prnewswire.com/news-releases/gupshup-launches-self-serve-voice-ai-platform-extending-conversational-engagement-into-phone-calls-302869131.html" },
  { label: "Gupshup Voice AI", url: "https://www.gupshup.ai/voice-ai" },
];

export const gupshupVoiceAiBuildGuideArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    parentSlug: "gupshup-voice-ai",
    cluster: "Gupshup Voice AI Platform",
    targetSearchIntent: "Build, configure, test and deploy a Gupshup Voice AI agent for a concrete business workflow while understanding channels, model choices, guardrails and monitoring.",
    targetQuery: "how to build a Gupshup Voice AI agent",
    slug: "how-to-build-gupshup-voice-ai-agent",
    title: "How to Build a Gupshup Voice AI Agent",
    metaTitle: "How to Build a Gupshup Voice AI Agent: Setup Guide",
    metaDescription: "A practical guide to configuring a Gupshup Voice AI agent: workflow, prompt, knowledge base, models, phone/WhatsApp channels, tests and monitoring.",
    h1: "How to Build and Test a Gupshup Voice AI Agent",
    excerpt: "A practical, evidence-based setup workflow for creating a Gupshup Voice AI agent, from prompt and knowledge through testing, deployment and post-call review.",
    category: "AI",
    author: "Project Monet",
    datePublished: "2026-09-05",
    dateModified: "2026-09-05",
    ogAlt: "Seven-step Gupshup Voice AI setup workflow from goal and knowledge to models, channels, testing, deployment and review",
    sections: [
      { id: "choose-one-job", title: "Before you build: choose one job", blocks: [
        { type: "paragraph", html: "A useful voice agent starts with a narrow outcome, not with the technology. Pick a workflow that can be clearly completed or escalated: qualify a lead, book an appointment, answer a known support question, send a payment reminder or route a caller." },
        { type: "paragraph", html: "Write down what information the agent needs, what counts as success and when it must hand the conversation to a human before you configure the builder." },
      ]},
      { id: "configure-agent", title: "1. Configure the agent experience", blocks: [
        { type: "paragraph", html: "Gupshup says its self-serve Voice AI Platform lets teams configure an agent's voice, language, knowledge base, system prompt and workflows from one place." },
        { type: "paragraph", html: "Start with the system prompt. Define the agent's role, the business it represents, the job it is allowed to perform and the actions it must never take. Keep instructions concrete and tied to measurable outcomes." },
      ]},
      { id: "knowledge-models", title: "2. Connect knowledge and choose the model stack", blocks: [
        { type: "paragraph", html: "Connect a current source of truth such as a knowledge base, catalog or policy set. Remove stale prices, duplicate documents and contradictory instructions before they become agent context." },
        { type: "paragraph", html: "Gupshup's launch materials say businesses can choose speech-to-text, text-to-speech and LLM providers instead of accepting one fixed stack. Test transcription accuracy, response latency, voice quality and cost together rather than judging one layer in isolation." },
        { type: "note", html: "Gupshup has not published a complete public provider-by-provider matrix for every self-serve account. Verify which providers are available in your actual deployment before designing around a specific model." },
      ]},
      { id: "channels-workflows", title: "3. Pick the call channel and connect the workflow", blocks: [
        { type: "paragraph", html: "Confirmed launch material lists PSTN and WhatsApp voice, with cloud or on-premise telephony and the option to bring existing PSTN infrastructure. Gupshup's broader Voice AI page also advertises direct click-to-call from a website or app." },
        { type: "paragraph", html: "Choose the channel that matches the customer journey, then connect only the business tools the first workflow actually needs. A booking agent may need caller identification, availability lookup, confirmation and one write-back action—not broad access across CRM, billing and support systems." },
        { type: "note", html: "Country, number provisioning, carrier and compliance requirements vary by deployment. Verify the exact route you need before promising a launch date." },
      ]},
      { id: "guardrails-testing", title: "4. Define guardrails and test before going live", blocks: [
        { type: "paragraph", html: "Gupshup emphasizes user-defined guardrails, scenario simulation, automated tests and model comparisons before live calls. Define what the agent may say, what data it may collect, what actions need confirmation and when it must escalate." },
        { type: "list", items: ["normal successful conversation", "interruptions and corrections", "unclear audio or names", "missing information", "questions outside the knowledge base", "requests the agent is not allowed to perform", "human escalation"] },
        { type: "paragraph", html: "Gupshup also says recurring test runs can be scheduled so prompt or knowledge changes do not silently alter behavior over time." },
      ]},
      { id: "controlled-rollout", title: "5. Start with a controlled rollout", blocks: [
        { type: "paragraph", html: "Do not judge the agent from a polished demo. Put it into a limited real workflow first, with a clear human fallback and enough volume to expose edge cases without creating unnecessary operational risk." },
        { type: "paragraph", html: "Track whether it completes the business job—not merely whether the conversation sounds natural. Measure successful outcomes, transfers, failed tool actions, repeated calls, latency and user corrections." },
      ]},
      { id: "review-failures", title: "6. Review every kind of failure", blocks: [
        { type: "paragraph", html: "Gupshup's Voice AI Platform provides transcripts, conversation history and debug logs, with analytics for outcomes such as success, satisfaction and language usage." },
        { type: "paragraph", html: "Use those records to separate failure types. A bad call may come from transcription, prompt design, missing knowledge, tool failure, workflow logic, voice latency or the language model. The fix depends on which layer failed." },
      ]},
      { id: "cost-quality", title: "7. Optimize cost and quality together", blocks: [
        { type: "paragraph", html: "Gupshup's September 3, 2026 launch announcement says users receive <strong>100 minutes of test credits</strong> and pricing <strong>starts at $0.035 per minute</strong>, also stated as <strong>₹3.50 per minute</strong>." },
        { type: "paragraph", html: "Because the platform allows different STT, TTS, LLM and telephony choices, the headline starting rate is not a guarantee of the final cost for every configuration. Measure completed outcomes per dollar, not only cost per minute." },
      ]},
      { id: "first-project", title: "A simple first project", blocks: [
        { type: "paragraph", html: "For a local service business, a sensible pilot is an inbound qualification and booking agent. Give it a limited knowledge base, a defined question sequence, one booking action and a human-transfer rule. Test accents, interruptions and noisy calls, then roll it out to a small call segment." },
        { type: "paragraph", html: "Before production, confirm language and accent support, country and phone-number availability, provider pricing, data retention, compliance obligations, human-transfer behavior, integration access and which capabilities are available in the specific account or plan." },
      ]},
    ],
    sources: gupshupVoiceAiBuildGuideSources,
    relatedPaths: ["/blog/gupshup-voice-ai", "/blog/gupshup-voice-ai-pricing"],
  },
];
