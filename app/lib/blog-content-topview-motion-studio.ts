import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-31";

const topviewMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Topview Motion Studio",
  targetSearchIntent: "Broad entity/product overview for users evaluating what Topview Motion Studio is, how it works, supported formats, cost claims, use cases and limitations",
  targetQuery: "Topview Motion Studio",
  slug: "topview-motion-studio",
  title: "Topview Motion Studio: AI Product Launch Videos, Features & How It Works",
  metaTitle: "Topview Motion Studio: AI Product Launch Videos & Features",
  metaDescription: "Topview Motion Studio turns product briefs, UI screenshots and brand assets into connected AI motion videos. See how it works, formats, use cases, limitations and current cost claims.",
  h1: "Topview Motion Studio: AI Motion Graphics for Product Launch Videos",
  excerpt: "Topview Motion Studio is a guided AI workflow for turning a product brief and real visual references into connected launch and feature-announcement motion videos.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet storyboard showing product UI references, motion direction and a connected launch-video sequence",
  sections: [
    {
      id: "what-it-is",
      title: "What Topview Motion Studio is",
      blocks: [
        { type: "paragraph", html: "Topview Motion Studio is a guided workflow for product-launch and feature-announcement motion videos. Instead of beginning with a traditional motion-design timeline, the user starts with the product story, real visual references, a motion direction, duration and target format." },
        { type: "paragraph", html: "Topview positions Motion Studio around connected scenes and product storytelling rather than isolated text-to-video shots. The documented use cases include AI tools, SaaS products, mobile apps, fintech products, enterprise software and feature launches." },
      ],
    },
    {
      id: "workflow",
      title: "Brief, references, motion style and Canvas",
      blocks: [
        { type: "paragraph", html: "The workflow accepts a written product brief plus multiple product photos, UI screenshots, dashboards, logos or other brand assets. Topview currently supports JPG, JPEG, PNG and WEBP references up to 15MB per image." },
        { type: "paragraph", html: "Users select a curated motion direction, choose a duration from 4 to 60 seconds and set one of six aspect ratios before continuing into Canvas. Topview says an AI Agent and dedicated motion-design skill then organize the inputs into a connected launch-video workflow." },
      ],
    },
    {
      id: "formats-cost",
      title: "Supported formats and current cost claims",
      blocks: [
        { type: "paragraph", html: "The six documented aspect ratios are 21:9, 16:9, 4:3, 1:1, 3:4 and 9:16. That covers product pages, presentations, feeds and vertical placements without forcing one master composition into every channel." },
        { type: "paragraph", html: "Topview currently markets a product-focused motion video as costing around $3 and a first result as taking around 10 minutes. Treat both as vendor positioning, not guaranteed production economics or render time. Plan/credit requirements can change and should be checked inside the live product before budgeting." },
      ],
    },
    {
      id: "references-accuracy",
      title: "Real product references help, but do not guarantee accuracy",
      blocks: [
        { type: "paragraph", html: "UI screenshots, dashboards, logos and product images can keep the actual product central to the creative direction. That is useful for launch content where pure prompt generation could invent the very interface the video is supposed to explain." },
        { type: "paragraph", html: "Topview explicitly says references do not guarantee perfect product consistency and that AI-generated results can vary. Generated UI, text, metrics, controls and logos therefore need human review before publication." },
      ],
    },
    {
      id: "limitations",
      title: "Where Motion Studio fits and where it does not",
      blocks: [
        { type: "paragraph", html: "Motion Studio can be attractive for founders, marketers, creators and product teams that need frequent product stories without rebuilding every concept as a bespoke motion project. It is especially useful for first-pass launch directions and short feature announcements." },
        { type: "paragraph", html: "Topview says Motion Studio does not provide a complete editable After Effects project and is not a replacement for every studio process. Teams needing frame-level keyframe control, complex compositing or deterministic handoff may still move to conventional motion tools after concepting. For practical setup and QA, read <a href=\"/blog/how-to-use-topview-motion-studio\">the Motion Studio tutorial</a>." },
      ],
    },
  ],
  sources: [
    { label: "Topview — Motion Studio", url: "https://www.topview.ai/motion-studio?source=home_quick_start" },
    { label: "Topview — official homepage", url: "https://www.topview.ai/" },
    { label: "Product Hunt — August 30, 2026 daily launch board", url: "https://www.producthunt.com/leaderboard/daily/2026/8/30" },
  ],
  relatedPaths: ["/blog/how-to-use-topview-motion-studio"],
};

const topviewHowTo: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Topview Motion Studio",
  targetSearchIntent: "Practical setup and production workflow for creating a product-launch, SaaS, app or feature-announcement video with Topview Motion Studio",
  targetQuery: "how to use Topview Motion Studio",
  parentSlug: "topview-motion-studio",
  slug: "how-to-use-topview-motion-studio",
  title: "How to Use Topview Motion Studio for Product Launch Videos",
  metaTitle: "How to Use Topview Motion Studio: Product Launch Video Guide",
  metaDescription: "A practical Topview Motion Studio tutorial: write the product brief, upload UI and brand references, choose motion style, duration and format, generate in Canvas, then QA the result.",
  h1: "How to Use Topview Motion Studio for Product Launch Videos",
  excerpt: "Prepare the product story, references and delivery format before generation, then QA product accuracy, pacing, branding and platform fit in the final Motion Studio output.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet five-step diagram showing brief, product references, motion style, Canvas generation and a finished launch video",
  sections: [
    {
      id: "brief",
      title: "Define the one message and write the product brief",
      blocks: [
        { type: "paragraph", html: "Motion Studio works best when it is treated like a product-launch production brief rather than a generic prompt box. Decide the single idea the viewer should remember, then describe the product, audience, problem, core value, must-show product moments and CTA." },
        { type: "paragraph", html: "Give the system product logic instead of only visual adjectives. A focused 20-second feature story will usually be clearer than compressing an entire product tour into the same duration." },
      ],
    },
    {
      id: "references-style",
      title: "Upload real references and choose the motion direction",
      blocks: [
        { type: "paragraph", html: "Topview currently accepts multiple JPG, JPEG, PNG or WEBP references up to 15MB each. For software, use a small deliberate set such as the hero dashboard, one or two key feature screens, a result screen, the logo and essential brand references." },
        { type: "paragraph", html: "Choose a curated motion style that matches the product positioning. The selected direction guides animation, pacing, typography, transitions, texture, lighting and atmosphere. Maximum motion is not the goal; clarity and product comprehension are." },
      ],
    },
    {
      id: "duration-format",
      title: "Set duration and aspect ratio for the real destination",
      blocks: [
        { type: "paragraph", html: "Motion Studio currently supports 4 to 60 seconds. Use the shortest duration that can tell the story clearly: a few seconds for a reveal, roughly 10–20 seconds for one feature, and longer only when the narrative truly needs more connected product moments." },
        { type: "paragraph", html: "Choose from 21:9, 16:9, 4:3, 1:1, 3:4 or 9:16 based on where the final video will live. Do not assume one composition can simply be cropped everywhere; UI, typography and safe areas often need channel-specific framing." },
      ],
    },
    {
      id: "canvas-qa",
      title: "Generate in Canvas, then review product accuracy first",
      blocks: [
        { type: "paragraph", html: "After submission, Topview says the workflow continues in Canvas, where an AI Agent and motion-design skill organize the brief, references and creative direction into a connected sequence. This is the point where the product story becomes a multi-scene video rather than an isolated generated shot." },
        { type: "paragraph", html: "The first QA pass should verify the product: check UI text, controls, logos, metrics, feature claims and visual hierarchy before judging polish. Topview itself warns that AI-generated consistency can vary." },
      ],
    },
    {
      id: "final-review",
      title: "Check pacing, branding and platform fit",
      blocks: [
        { type: "paragraph", html: "Watch the result without pausing. Confirm text stays readable, the main product moment gets enough time, transitions support continuity, the CTA is stable and the brand layer matches approved colors, typography and claims." },
        { type: "paragraph", html: "Test the actual output in context before broad publication. For websites, check load/autoplay behavior and first-frame clarity; for social, check safe areas and mobile text size. For the broader product, current cost claim and limitations, return to <a href=\"/blog/topview-motion-studio\">the Topview Motion Studio overview</a>." },
      ],
    },
  ],
  sources: [
    { label: "Topview — Motion Studio", url: "https://www.topview.ai/motion-studio?source=home_quick_start" },
    { label: "Topview — official homepage", url: "https://www.topview.ai/" },
    { label: "Product Hunt — August 30, 2026 daily launch board", url: "https://www.producthunt.com/leaderboard/daily/2026/8/30" },
  ],
  relatedPaths: ["/blog/topview-motion-studio"],
};

export const topviewMotionStudioArticles: BlogArticle[] = [topviewMain, topviewHowTo];
