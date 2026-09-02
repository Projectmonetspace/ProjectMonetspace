import type { BlogArticle } from "./blog-types.ts";

const cleanShot5Sources = [
  { label: "CleanShot — Changelog 5.0", url: "https://cleanshot.com/changelog" },
  { label: "CleanShot — Screen Recording and Studio Mode", url: "https://cleanshot.com/screen-recording" },
  { label: "CleanShot — Pricing", url: "https://cleanshot.com/pricing" },
  { label: "CleanShot — Buy / system requirements", url: "https://cleanshot.com/buy" },
  { label: "CleanShot — Contact / FAQ", url: "https://cleanshot.com/contact" },
];

export const cleanShot5Articles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "CleanShot 5.0",
    targetSearchIntent: "Understand what changed in CleanShot 5.0, what Studio Mode does, current pricing, system requirements and who the update is for.",
    targetQuery: "CleanShot 5.0",
    slug: "cleanshot-5-studio-mode",
    title: "CleanShot 5.0: Studio Mode, Smart Zooms, Pricing & Features",
    metaTitle: "CleanShot 5.0: Studio Mode, Smart Zooms & Pricing",
    metaDescription: "CleanShot 5.0 adds Studio Mode, Smart Zooms and a built-in video editor. See what changed, current pricing, macOS requirements and who it is for.",
    h1: "CleanShot 5.0 Adds Studio Mode: What’s New and How It Works",
    excerpt: "CleanShot 5.0 expands the Mac capture utility with Studio Mode, Smart Zooms, trimming, cursor cleanup, motion blur and recording backgrounds.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    ogAlt: "CleanShot 5 Studio Mode editorial graphic showing a Mac screen-recording editor with zoom and cursor controls",
    sections: [
      { id: "release", title: "CleanShot 5.0 and Studio Mode", blocks: [
        { type: "paragraph", html: "CleanShot released version <strong>5.0 on September 1, 2026</strong>. The major update introduces Studio Mode, a Mac-native editor designed to turn raw screen recordings into polished product demos, tutorials, social clips and async walkthroughs without moving the recording into a separate editor." },
        { type: "paragraph", html: "The shift is meaningful because CleanShot is no longer only a screenshot and recording utility. Version 5.0 adds a focused post-production layer for screen-recording workflows while keeping the broader screenshot, annotation and sharing toolkit." },
      ]},
      { id: "features", title: "What is new in CleanShot 5.0?", blocks: [
        { type: "paragraph", html: "CleanShot's September 1 changelog confirms Studio Mode and a new video editor, Smart Zooms, advanced trimming, smooth cursor movement, cinematic motion blur, recording backgrounds and post-recording control over cursor size, keystrokes and camera presentation." },
        { type: "paragraph", html: "Its current screen-recording page also documents cursor style and click-effect adjustments, landscape/square/vertical export formats, and a native rendering engine using hardware encoding." },
        { type: "note", html: "CleanShot says its native engine can render videos up to 2x faster. That is a vendor claim from CleanShot's product page, not an independent benchmark." },
      ]},
      { id: "smart-zooms", title: "Smart Zooms and cursor cleanup", blocks: [
        { type: "paragraph", html: "Smart Zooms add animated zooms that follow the cursor and guide attention toward important parts of the recording. CleanShot pairs the effect with motion blur so movement appears smoother." },
        { type: "paragraph", html: "Studio Mode can also smooth shaky cursor movement and change cursor size, style and click effects after recording. That makes the feature especially relevant for software tutorials and product walkthroughs where pointer clarity matters." },
      ]},
      { id: "pricing", title: "CleanShot 5.0 pricing", blocks: [
        { type: "paragraph", html: "CleanShot currently lists App + Cloud Basic at <strong>$35 one time</strong>. It includes the Mac app, one year of updates and 1 GB of cloud storage. Optional update renewal is listed at <strong>$19 per year</strong>." },
        { type: "paragraph", html: "App + Cloud Pro is currently listed at <strong>$10 per user per month billed annually</strong> or <strong>$12 per user per month billed monthly</strong>. CleanShot says Pro includes the Mac app, ongoing updates, unlimited cloud storage, custom domain and branding, plus team-oriented cloud features." },
        { type: "paragraph", html: "Pricing is time-sensitive and should be checked on CleanShot's official pricing page before purchase. CleanShot also advertises a 30-day money-back guarantee." },
      ]},
      { id: "upgrade", title: "Do existing owners automatically get version 5.0?", blocks: [
        { type: "paragraph", html: "A perpetual CleanShot license includes one year of updates from purchase. After that window, the owner can keep using the last eligible version or renew updates. An older perpetual license therefore does not automatically guarantee access to CleanShot 5.0; it depends on the update entitlement or renewal status." },
      ]},
      { id: "requirements", title: "CleanShot 5.0 system requirements", blocks: [
        { type: "paragraph", html: "CleanShot's current buy and contact pages state that CleanShot requires <strong>macOS 13.0 or newer</strong>. They also identify version 4.8.10 as the final release supporting macOS Catalina 10.15." },
        { type: "paragraph", html: "Some older FAQ/pricing copy still references macOS 10.15+, but the currently maintained buy/contact pages give the newer 13.0 requirement. For CleanShot 5.0, use the current purchase/support requirement rather than assuming legacy compatibility." },
      ]},
      { id: "audience", title: "Who is Studio Mode for?", blocks: [
        { type: "list", items: ["SaaS teams creating product demos", "Creators making tutorial and social clips", "Marketers producing feature walkthroughs", "Support teams recording customer explanations", "Educators and internal teams making async walkthroughs"] },
        { type: "paragraph", html: "The strongest fit is a Mac user who already wants screenshots, recordings and sharing in one utility and now needs more recording polish without adding a separate editor for every short demo." },
      ]},
      { id: "limits", title: "What CleanShot has not established", blocks: [
        { type: "paragraph", html: "CleanShot has not published independent evidence that Studio Mode produces objectively better exports, more accurate zooms or faster end-to-end workflows than competing editors. Product-page performance statements should be treated as vendor claims." },
        { type: "paragraph", html: "CleanShot is also still a macOS product. Its current FAQ says there is no Windows version and no announced plan to release one." },
      ]},
      { id: "next", title: "How to use Studio Mode", blocks: [
        { type: "paragraph", html: "If the goal is practical execution rather than an overview, the dedicated Studio Mode guide covers recording, trimming, Smart Zooms, cursor cleanup, backgrounds and export in sequence." },
      ]},
    ],
    sources: cleanShot5Sources,
    relatedPaths: ["/blog/how-to-use-cleanshot-studio-mode"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "CleanShot 5.0",
    targetSearchIntent: "Learn the practical workflow for recording, editing and polishing a screen recording in CleanShot 5.0 Studio Mode.",
    targetQuery: "how to use CleanShot Studio Mode",
    parentSlug: "cleanshot-5-studio-mode",
    slug: "how-to-use-cleanshot-studio-mode",
    title: "How to Use CleanShot Studio Mode: Smart Zooms, Editing & Export",
    metaTitle: "How to Use CleanShot Studio Mode: Smart Zooms & Editing",
    metaDescription: "A practical CleanShot 5.0 Studio Mode guide for recording, trimming mistakes, adding Smart Zooms, smoothing the cursor, styling backgrounds and exporting.",
    h1: "How to Use CleanShot Studio Mode in CleanShot 5.0",
    excerpt: "A practical Studio Mode workflow for recording, trimming, zooming, cleaning cursor movement, styling the canvas and exporting a polished screen recording.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
    ogAlt: "CleanShot Studio Mode tutorial graphic showing a screen recording moving through trim, zoom, cursor and export stages",
    sections: [
      { id: "record", title: "1. Record the right inputs", blocks: [
        { type: "paragraph", html: "CleanShot can record the screen, camera, microphone and system audio. Choose only the inputs the viewer needs before starting. A software walkthrough may only need screen and microphone, while a founder-led demo may benefit from a camera bubble." },
        { type: "paragraph", html: "Keep the take reasonably clean, but do not restart for every small mistake. Studio Mode's editing layer is designed to remove some errors after capture." },
      ]},
      { id: "open", title: "2. Open the recording in Studio Mode", blocks: [
        { type: "paragraph", html: "After recording, open the capture in Studio Mode to enter CleanShot's built-in video editor. The key advantage is that presentation choices such as zooms, cursor treatment and backgrounds can be refined after recording." },
      ]},
      { id: "trim", title: "3. Trim mistakes and dead time first", blocks: [
        { type: "paragraph", html: "CleanShot 5.0 explicitly adds advanced video editing and trimming. Remove false starts, pauses and irrelevant navigation before adding visual polish so the final sequence has a clear structure." },
        { type: "paragraph", html: "For a tutorial, cut aggressively enough to keep the viewer moving toward the outcome. For an async explanation, preserve enough context that the recording still makes sense to someone who was not in the original conversation." },
      ]},
      { id: "zoom", title: "4. Add Smart Zooms where attention changes", blocks: [
        { type: "paragraph", html: "Smart Zooms create smooth animated zooms that follow the cursor and direct attention. Use them for meaningful attention shifts such as opening a settings panel, focusing on a field or showing an output." },
        { type: "paragraph", html: "Avoid zooming on every click. Too much motion can make a tutorial harder to follow and reduce the usefulness of the effect." },
      ]},
      { id: "cursor", title: "5. Refine the cursor and keystrokes", blocks: [
        { type: "paragraph", html: "Studio Mode can smooth shaky cursor movement and adjust cursor size, style and click effects after recording. Increase visibility enough for the final viewing size without making the pointer dominate the frame." },
        { type: "paragraph", html: "CleanShot also supports post-recording keystroke presentation. Show keystrokes when they teach something, such as a keyboard shortcut, rather than simply because the option exists." },
      ]},
      { id: "background", title: "6. Style the recording background", blocks: [
        { type: "paragraph", html: "Version 5.0 adds recording backgrounds with spacing, shadows and custom styling. Use a restrained background that supports the interface instead of competing with it." },
        { type: "paragraph", html: "If you included a camera bubble, check that it does not cover important UI during zooms or transitions. CleanShot says camera presentation can be adjusted after recording." },
      ]},
      { id: "motion", title: "7. Use motion blur as polish", blocks: [
        { type: "paragraph", html: "CleanShot adds adjustable motion blur for smoother movement. Treat it as visual polish rather than a default requirement, and reduce the effect if it makes text or UI details harder to read." },
      ]},
      { id: "export", title: "8. Preview and export for the destination", blocks: [
        { type: "paragraph", html: "CleanShot's current product page documents landscape, square and vertical export formats. Preview the video close to its intended viewing size before export, especially for mobile-first social placements." },
        { type: "list", items: ["Check text readability", "Check cursor visibility", "Confirm zooms land on the intended UI", "Verify the camera bubble does not obstruct content", "Make sure pacing gives the viewer time to understand each state"] },
      ]},
      { id: "requirements", title: "Compatibility note", blocks: [
        { type: "paragraph", html: "CleanShot's current buy and contact pages require macOS 13.0 or newer for the current app line. Version 4.8.10 is identified as the final Catalina-compatible release. Verify current requirements before installing on an older Mac." },
      ]},
      { id: "scope", title: "What Studio Mode does not replace", blocks: [
        { type: "paragraph", html: "CleanShot documents focused screen-recording tools rather than a full general-purpose editing suite. If your workflow depends on complex multi-track compositing, advanced color work or extensive motion graphics, verify those requirements separately before consolidating your editing stack." },
        { type: "paragraph", html: "For pricing, upgrade eligibility, release details and the broader feature overview, return to the main CleanShot 5.0 guide." },
      ]},
    ],
    sources: cleanShot5Sources,
    relatedPaths: ["/blog/cleanshot-5-studio-mode"],
  },
];
