import type { BlogArticle } from "./blog-types.ts";

const comparisonSources = [
  { label: "CleanShot — 5.0 changelog", url: "https://cleanshot.com/changelog" },
  { label: "CleanShot — Pricing", url: "https://cleanshot.com/pricing" },
  { label: "CleanShot — Contact / current requirements", url: "https://cleanshot.com/contact" },
  { label: "Screen Studio — Product and current pricing", url: "https://screen.studio/" },
  { label: "Screen Studio — Zoom guide", url: "https://screen.studio/guide/adding-editing-zooms" },
];

export const cleanShotComparisonArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "supporting",
    cluster: "CleanShot 5.0",
    targetSearchIntent: "Compare CleanShot 5.0 and Screen Studio for polished Mac screen recordings and decide which workflow better fits screenshots, demos, tutorials and social video.",
    targetQuery: "CleanShot vs Screen Studio",
    parentSlug: "cleanshot-5-studio-mode",
    slug: "cleanshot-vs-screen-studio",
    title: "CleanShot 5.0 vs Screen Studio: Which Mac Screen Recorder Fits Your Workflow?",
    metaTitle: "CleanShot 5.0 vs Screen Studio: Which Should You Use?",
    metaDescription: "CleanShot 5.0 now overlaps with Screen Studio on zooms, cursor smoothing, backgrounds and editing. Compare features, pricing and workflow fit.",
    h1: "CleanShot 5.0 vs Screen Studio: Which Mac Screen Recorder Fits Your Workflow?",
    excerpt: "CleanShot 5.0 adds serious video polish to a broad capture toolkit, while Screen Studio remains a recording-first workflow. Here is how the documented features and pricing compare.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "CleanShot 5.0 versus Screen Studio editorial comparison graphic for Mac screen-recording workflows",
    sections: [
      { id: "short-version", title: "The short version", blocks: [
        { type: "paragraph", html: "Choose <strong>CleanShot 5.0</strong> if you want one Mac tool spanning screenshots, annotated captures, scrolling capture, screen recording, sharing and increasingly polished video editing. Studio Mode adds Smart Zooms, cursor smoothing, motion blur and recording backgrounds to that broader capture workflow." },
        { type: "paragraph", html: "Choose <strong>Screen Studio</strong> if polished screen-recording video is the main job. Its current product documentation is centered on automatic and manual zooms, cursor presentation, vertical output, recording-specific editing, transcripts and iPhone/iPad capture." },
        { type: "note", html: "Neither vendor provides independent evidence that one app is universally faster or produces objectively better video. This comparison uses documented capabilities, current first-party pricing and workflow fit rather than a fabricated winner score." },
      ]},
      { id: "zooms", title: "Smart Zooms vs automatic and manual zooms", blocks: [
        { type: "paragraph", html: "CleanShot 5.0 introduces Smart Zooms inside Studio Mode. CleanShot says they create smooth animated zooms that follow the cursor and direct attention to important areas." },
        { type: "paragraph", html: "Screen Studio documents automatic zooms on actions plus manual zooms, editable zoom duration and level, and automatic zoom adjustment when exporting vertically. If zoom-specific control is the deciding feature, Screen Studio currently documents the deeper zoom workflow; that is a feature-surface observation, not a quality benchmark." },
      ]},
      { id: "cursor", title: "Cursor smoothing and presentation", blocks: [
        { type: "paragraph", html: "Both products document cursor smoothing and post-recording cursor presentation. CleanShot 5.0 can smooth shaky movement and adjust cursor size, style and click effects after recording." },
        { type: "paragraph", html: "Screen Studio documents smoothing, post-recording cursor-size changes, automatic hiding of a static cursor, cursor looping and high-resolution replacements for known system cursors. Its public documentation currently exposes more cursor-specific behaviors." },
      ]},
      { id: "editing", title: "Backgrounds, trimming and editing", blocks: [
        { type: "paragraph", html: "CleanShot 5.0 adds recording backgrounds, advanced trimming and fine-tuning in its new video editor. The point is consolidation: a CleanShot user can move from capture to a more polished recording without immediately opening a separate editor." },
        { type: "paragraph", html: "Screen Studio documents customizable backgrounds, spacing, shadow and inset controls plus trim, cut and speed controls. It also adapts presentation when switching between horizontal and vertical output." },
      ]},
      { id: "capture", title: "Screenshots favor CleanShot; recording specialization favors Screen Studio", blocks: [
        { type: "paragraph", html: "The structural difference is broader than video effects. CleanShot is built around screenshots and recordings together, with scrolling capture, OCR, capture history, pinned screenshots, annotation and sharing workflows alongside video." },
        { type: "paragraph", html: "Screen Studio's product is screen-recording-first. Its current site emphasizes polished demos, courses, tutorials and social videos. If screenshots are a large part of daily work, CleanShot can consolidate more capture tasks; if polished recordings dominate, Screen Studio's specialization may be more valuable." },
      ]},
      { id: "social", title: "Social video and recording inputs", blocks: [
        { type: "paragraph", html: "Screen Studio explicitly documents horizontal and vertical output and says zooms automatically adjust for vertical exports. It can record webcam, microphone, system audio and iOS devices, and it generates transcripts locally for subtitles." },
        { type: "paragraph", html: "CleanShot documents screen, camera, microphone and system-audio recording and supports landscape, square and vertical export formats. Do not assume undocumented parity on iOS-device recording or built-in transcripts; Screen Studio currently documents those capabilities directly." },
      ]},
      { id: "pricing", title: "CleanShot vs Screen Studio pricing", blocks: [
        { type: "paragraph", html: "As rechecked on September 3, 2026, CleanShot lists App + Cloud Basic at <strong>$35 one time</strong>, including the Mac app, one year of updates and 1 GB of cloud storage. Optional update renewal is <strong>$19 per year</strong>. Cloud Pro is <strong>$10 per user/month billed annually</strong> or <strong>$12 monthly</strong>." },
        { type: "paragraph", html: "Screen Studio's official site currently lists its subscription at <strong>$29 per month billed monthly</strong> or <strong>$9 per month billed yearly</strong>. Its terms describe monthly or annual prepaid subscriptions, while legacy one-time licenses remain a separate activation path for earlier purchasers." },
        { type: "paragraph", html: "These prices are time-sensitive. Check each vendor's current purchase page before buying; this comparison does not use third-party pricing." },
      ]},
      { id: "founders", title: "Which is better for SaaS founders and creators?", blocks: [
        { type: "paragraph", html: "A founder who needs launch screenshots, annotated bug reports, landing-page visuals and occasional polished demos may get more consolidation from CleanShot 5.0. A founder producing polished product walkthroughs constantly may prefer Screen Studio's recording-specific automation." },
        { type: "paragraph", html: "Creators publishing a mix of screenshots, visual explainers and screen recordings should look closely at CleanShot because Studio Mode reduces handoffs. Creators focused primarily on screen-recorded tutorials should compare Screen Studio's vertical-output, zoom, transcript and iOS-capture features against their actual needs." },
      ]},
      { id: "teams", title: "Which is better for teams?", blocks: [
        { type: "paragraph", html: "CleanShot Cloud Pro documents unlimited cloud storage subject to its fair-use policy, custom domain and branding, SSO and team-management features. Screen Studio documents shareable links and presets, but team administration is a separate decision from video-editing capability." },
        { type: "paragraph", html: "For a team purchase, verify current collaboration, security and billing requirements directly with each vendor rather than assuming product-level recording features imply equivalent administration." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "CleanShot 5.0 is now a credible option for workflows that previously combined a screenshot utility with a dedicated polished screen recorder. Its advantage is breadth: screenshots, captures, recordings, sharing and stronger post-production in one Mac app." },
        { type: "paragraph", html: "Screen Studio's advantage remains specialization. Its product and documentation are organized around making screen recordings look polished automatically, with detailed zoom, cursor, vertical-output and recording workflows. The useful question is not which app merely has zooms—both do—but whether you want a broad capture toolkit with serious video editing or a dedicated video-first recorder." },
      ]},
      { id: "faq", title: "FAQs", blocks: [
        { type: "paragraph", html: "<strong>Does CleanShot 5.0 replace Screen Studio?</strong> For some users, potentially. CleanShot now covers several overlapping jobs, but Screen Studio still documents specialized recording capabilities CleanShot does not publicly claim." },
        { type: "paragraph", html: "<strong>Do both support zooms?</strong> Yes. CleanShot 5.0 introduces Smart Zooms; Screen Studio documents automatic and manual zooms with editable controls." },
        { type: "paragraph", html: "<strong>Which is better for screenshots?</strong> CleanShot has the broader screenshot toolkit because screenshots are a core part of the product." },
        { type: "paragraph", html: "<strong>Which is better for vertical social videos?</strong> Both document vertical output, but Screen Studio additionally documents automatic zoom adaptation for vertical exports." },
      ]},
    ],
    sources: comparisonSources,
    relatedPaths: ["/blog/cleanshot-5-studio-mode", "/blog/how-to-use-cleanshot-studio-mode"],
  },
];
