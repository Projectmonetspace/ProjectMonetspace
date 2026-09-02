import type { BlogArticle } from "./blog-types.ts";

const googlePicsSources = [
  { label: "Google Workspace — Google Pics brings pro-level AI image creation and editing to Google Workspace", url: "https://workspace.google.com/blog/product-announcements/google-pics-brings-pro-level-ai-image-creation-and-editing-to-google-workspace" },
  { label: "Google — Try Google Pics: Easy image creation and editing in Google Workspace", url: "https://blog.google/products-and-platforms/products/workspace/google-pics/" },
  { label: "Google Docs Editors Help — Edit your Docs images with Google Pics", url: "https://support.google.com/docs/answer/17499836" },
  { label: "Google Docs Editors Help — Learn about Google Pics availability", url: "https://support.google.com/docs/answer/17256710" },
];

export const googlePicsArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Google Pics",
    targetSearchIntent: "Broad overview of Google Pics: what it is, release status, features, access, plans, integrations, use cases and limitations.",
    targetQuery: "Google Pics",
    slug: "google-pics",
    title: "Google Pics: Features, Availability, Plans & How It Works",
    metaTitle: "Google Pics: Features, Availability, Plans & How It Works",
    metaDescription: "Google Pics is Google Workspace’s new AI image generator and precision editor. See its features, access, supported plans, integrations and limits.",
    h1: "Google Pics: Google’s New AI Image Generator and Editor Explained",
    excerpt: "Google Pics is rolling out as an AI-native Workspace app for generating, refining and collaboratively editing images with object-level controls.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    ogAlt: "Google Pics editorial graphic showing prompt-to-image generation and precise object editing inside a Workspace-style creative workflow",
    sections: [
      { id: "what-is-google-pics", title: "What is Google Pics?", blocks: [
        { type: "paragraph", html: "Google Pics is Google's new image creation and editing app built for Google Workspace. Google began rolling it out on <strong>September 1, 2026</strong>, moving the product beyond its earlier preview period into broader customer availability." },
        { type: "paragraph", html: "The app combines prompt-based generation with precision editing, collaboration and Workspace integrations. Google positions it for practical work such as campaign graphics, social posts, product concepts, presentations and other visual assets." },
      ]},
      { id: "features", title: "What Google Pics can do", blocks: [
        { type: "paragraph", html: "Google says Pics can generate several image options from one prompt, isolate individual objects, move or transform them, edit selected regions, modify text inside an image and translate that text while preserving the surrounding design." },
        { type: "paragraph", html: "Google's launch materials also describe cropping for web, social, print or digital output, upscaling to 2K or 4K, applying multiple edits and reverting unwanted changes." },
        { type: "paragraph", html: "Pics is built on Google's Nano Banana image-generation and editing technology. Pics is the Workspace application and workflow layer; Nano Banana is the underlying model family powering generation and editing experiences." },
      ]},
      { id: "availability", title: "Who can use Google Pics?", blocks: [
        { type: "paragraph", html: "Google's September 1 Workspace announcement names Business Standard, Business Plus, Enterprise Standard, Enterprise Plus, Google AI Pro, Google AI Ultra and Google AI Pro for Education among the eligible plans. Google's consumer announcement describes rollout over the coming weeks to all Google AI Pro and Ultra subscribers and most Workspace business customers." },
        { type: "paragraph", html: "Google Help currently documents Pics as a desktop experience. Availability can still depend on account entitlement, organizational settings, language and rollout timing, so two otherwise eligible accounts may not receive every surface at exactly the same moment." },
      ]},
      { id: "workspace-integrations", title: "Docs, Slides and Drive integrations", blocks: [
        { type: "paragraph", html: "Google says Docs and Slides integrations started with the September 1 rollout. Eligible users can select an image and open Pics editing tools without leaving the document or presentation." },
        { type: "paragraph", html: "Drive support is expanding after launch. Google says Pics can already work with Drive files and that one-click opening and editing of images saved in Drive will roll out more broadly in the coming weeks." },
      ]},
      { id: "pricing-limits", title: "Pricing and usage limits", blocks: [
        { type: "paragraph", html: "Google has not announced a standalone Google Pics subscription in the primary sources reviewed. Access is tied to eligible Workspace or Google AI plans, so describing Pics simply as a free app would be misleading." },
        { type: "paragraph", html: "Google Help states that generative-AI features in Pics are subject to usage limits. It currently says users will have higher access through at least <strong>February 28, 2027</strong>, after which limits may change. That is a time-sensitive policy detail rather than a permanent quota promise." },
      ]},
      { id: "use-cases", title: "Where Google Pics is useful for creators and marketers", blocks: [
        { type: "list", items: ["Campaign and social-media concepting", "Product mockups and contextual product imagery", "Presentation and pitch-deck visuals", "Localized graphics with text editing or translation", "Fast creative variations that preserve an existing composition"] },
        { type: "paragraph", html: "The workflow advantage is not only model quality. For teams already using Workspace, image generation and revision can happen closer to briefs, presentations, comments, approvals and shared source files." },
      ]},
      { id: "limitations", title: "Important limitations", blocks: [
        { type: "paragraph", html: "Generative output still needs human review. Text, logos, products, people and other details can be wrong or inconsistent, and public-facing marketing assets should be checked before release." },
        { type: "paragraph", html: "Rollout details can change by plan, language and account. For a practical walkthrough rather than a product overview, use the dedicated Google Pics guide below." },
      ]},
    ],
    sources: googlePicsSources,
    relatedPaths: ["/blog/how-to-use-google-pics"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Google Pics",
    targetSearchIntent: "Practical step-by-step workflow for generating, editing, refining, collaborating on and inserting images with Google Pics.",
    targetQuery: "how to use Google Pics",
    parentSlug: "google-pics",
    slug: "how-to-use-google-pics",
    title: "How to Use Google Pics: Generate, Edit and Refine Images",
    metaTitle: "How to Use Google Pics: Generate, Edit & Refine Images",
    metaDescription: "A practical Google Pics guide: generate images, edit objects and text, refine selected areas, collaborate, and use Pics inside Docs and Slides.",
    h1: "How to Use Google Pics: A Practical Guide to Generating and Editing Images",
    excerpt: "A practical workflow for generating, selecting and refining images in Google Pics, then using them inside Workspace apps.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    ogAlt: "Google Pics tutorial graphic showing a prompt, targeted image edit and finished visual asset",
    sections: [
      { id: "access", title: "1. Check access and open Google Pics", blocks: [
        { type: "paragraph", html: "Google Pics is rolling out to eligible Workspace and Google AI accounts and is currently documented as a desktop experience. Access can depend on plan, organization settings, language and rollout timing." },
        { type: "paragraph", html: "Where enabled, go to <strong>pics.new</strong> in a desktop browser. Google has not announced a separate Pics subscription, so an eligible account entitlement is the relevant access check." },
      ]},
      { id: "generate", title: "2. Generate several directions before editing", blocks: [
        { type: "paragraph", html: "Start with a prompt that describes the job the image needs to do: intended format, subject, mood, composition, background, lighting and any required negative space for copy." },
        { type: "paragraph", html: "Google says Pics returns multiple options from a prompt. Compare those directions and choose the composition with the strongest structure before spending time on detail edits." },
      ]},
      { id: "object-edits", title: "3. Edit objects and selected regions", blocks: [
        { type: "paragraph", html: "Pics can detect and isolate image elements so you can select an object and request a targeted change. Google's Help Center documents moving from the detected element to a prompt and then applying the change." },
        { type: "paragraph", html: "You can also drag-select a region and describe only what should change there. Narrow prompts are usually safer than regenerating the whole image when the surrounding composition is already working." },
        { type: "note", html: "Google Help currently documents up to five simultaneous changes across individual elements, regional edits and text edits." },
      ]},
      { id: "text", title: "4. Edit or translate text inside the image", blocks: [
        { type: "paragraph", html: "Pics automatically detects text and lets you replace the wording or request style changes. Google's launch materials also highlight in-image translation." },
        { type: "paragraph", html: "Always review spelling, prices, dates, brand names and regulated or legal copy manually before using an AI-edited image publicly." },
      ]},
      { id: "docs-slides", title: "5. Use Pics inside Docs and Slides", blocks: [
        { type: "paragraph", html: "In Docs, select an image and choose the image-editing action. If your account has the new workflow, Pics opens inside Docs and the finished edit can replace the existing image." },
        { type: "paragraph", html: "Google says the same integration is rolling out in Slides. If the older editing UI opens instead, Google's Help Center notes that the account may not have access yet." },
      ]},
      { id: "collaboration", title: "6. Collaborate and review the finished asset", blocks: [
        { type: "paragraph", html: "Google says Pics files can be shared and collaboratively edited. For team workflows, use that for review and iteration but keep a clear final approver for brand consistency." },
        { type: "list", items: ["Check text accuracy and line breaks", "Inspect logos, products, hands, faces and small objects", "Verify crop safety for the destination format", "Check colors, hierarchy, shadows and reflections", "Confirm any factual or legal claim shown inside the image"] },
      ]},
      { id: "limits", title: "7. Account for rollout and usage limits", blocks: [
        { type: "paragraph", html: "Generative-AI features in Pics are subject to usage limits. Google currently promises higher access through at least February 28, 2027, with limits potentially changing afterward." },
        { type: "paragraph", html: "For broader questions about eligible plans, rollout, product positioning and integrations, use the main Google Pics overview." },
      ]},
    ],
    sources: googlePicsSources,
    relatedPaths: ["/blog/google-pics"],
  },
];
