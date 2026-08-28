import type { BlogArticle } from "./blog-types.ts";

const published = "2026-08-28";

const photoshopMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Adobe Photoshop 27.10",
  targetSearchIntent: "Broad overview of Photoshop 27.10 AI editing features, release status, workflow changes and availability",
  targetQuery: "Photoshop 27.10",
  slug: "photoshop-27-10-ai-assisted-editor-prompt-to-edit",
  title: "Photoshop 27.10: AI Assisted Editor, Prompt to Edit & Markup",
  metaTitle: "Photoshop 27.10: AI Assisted Editor, Prompt to Edit & Markup",
  metaDescription: "Photoshop 27.10 adds AI Assisted Editor, Prompt to Edit, Markup, mask-guided Firefly editing and a new Light Adjustment Layer. Here’s what changed.",
  h1: "Photoshop 27.10 Adds AI Assisted Editor, Prompt to Edit and More Precise AI Editing",
  excerpt: "Adobe’s August release expands prompt-based and visually guided editing while adding a non-destructive Light Adjustment Layer and workflow improvements.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic for Photoshop 27.10 with a prompt bar, markup arrow, mask and layered editing workflow",
  sections: [
    {
      id: "in-brief",
      title: "Photoshop 27.10 in brief",
      blocks: [
        { type: "paragraph", html: "Adobe announced Photoshop 27.10 on <strong>August 27, 2026</strong>, bringing a larger set of prompt-based and visually guided AI editing controls into the desktop workflow alongside a new non-destructive lighting adjustment and improvements to text, paths and stock access." },
        { type: "paragraph", html: "The headline change is not simply more generative AI. Photoshop now gives users several ways to describe a change, point to where it belongs, protect areas with masks and keep generated results organized in the layer stack." },
        { type: "note", html: "Adobe describes AI Assisted Editor as <strong>beta</strong>. Feature availability can vary by build, platform, account and rollout state." },
      ],
    },
    {
      id: "ai-assisted-editor",
      title: "AI Assisted Editor enters beta",
      blocks: [
        { type: "paragraph", html: "AI Assisted Editor is an optional prompt-first Photoshop space with access to tools including Prompt to Edit, Remove Background, Generative Expand, Remove Tool, Generative Fill, Generative Upscale and Markup." },
        { type: "paragraph", html: "The interface is designed for people who want to describe an outcome rather than assemble every edit manually. Adobe had already tested related AI Assistant and Markup ideas on other Photoshop surfaces earlier in 2026, so 27.10 should be understood as an expansion and consolidation rather than the first appearance of every underlying concept." },
      ],
    },
    {
      id: "prompt-to-edit",
      title: "What is Prompt to Edit?",
      blocks: [
        { type: "paragraph", html: "Prompt to Edit lets users request broad image transformations with natural language. Adobe also brings it into the standard Pro Editor through the Contextual Task Bar, so an image-wide change can be requested without first making a selection." },
        { type: "paragraph", html: "Adobe says Prompt to Edit results are added as generative layers. That keeps the AI result reversible and easier to compare, reorder or hide instead of flattening it into the original image." },
        { type: "paragraph", html: "For a practical decision tree covering Prompt to Edit, Markup, masks and Generative Fill, read the <a href=\"/blog/how-to-use-photoshop-prompt-to-edit-ai-assisted-editor\">Photoshop AI editing workflow guide</a>." },
      ],
    },
    {
      id: "markup-masks",
      title: "Markup and Instruct Edit with Masks",
      blocks: [
        { type: "paragraph", html: "Markup adds visual direction to a prompt. A user can draw on an image, indicate a location or sketch a rough shape so the model receives spatial guidance instead of relying only on text." },
        { type: "paragraph", html: "For tighter control, Instruct Edit with Masks is powered by Firefly Image 5. Adobe says it uses the context of the full image while constraining the requested edit to the masked region, making it useful when faces, logos, labels or other critical areas need protection." },
      ],
    },
    {
      id: "light-adjustment-layer",
      title: "New Light Adjustment Layer",
      blocks: [
        { type: "paragraph", html: "Photoshop 27.10 also adds a Light Adjustment Layer with <strong>Exposure, Contrast, Highlights, Shadows, Whites and Blacks</strong>. Because it is an adjustment layer, the lighting correction remains non-destructive in the normal layer workflow." },
        { type: "paragraph", html: "Adobe first previewed the redesigned Light control in Photoshop Beta in June 2026. Its inclusion in 27.10 is therefore a release milestone, not the first public test of the idea. The dedicated <a href=\"/blog/photoshop-light-adjustment-layer\">Light Adjustment Layer guide</a> covers controls, compatibility and practical use." },
      ],
    },
    {
      id: "other-workflow-updates",
      title: "Dynamic Text and Adobe Stock integration",
      blocks: [
        { type: "paragraph", html: "Dynamic Text now works with custom shapes and paths, allowing text to adapt along curves and freeform layouts while preserving formatting as the path changes." },
        { type: "paragraph", html: "Adobe also adds a dockable Stock Panel Integration with access to more than 900 million Adobe Stock assets, letting users search and preview assets without leaving Photoshop." },
      ],
    },
    {
      id: "availability",
      title: "Availability and who benefits",
      blocks: [
        { type: "paragraph", html: "Adobe says Photoshop 27.10 can be installed through the Creative Cloud desktop app. AI Assisted Editor is explicitly beta, so a missing control should not automatically be treated as a bug or proof that the announcement is inaccurate." },
        { type: "paragraph", html: "The release is particularly relevant to social designers, marketers, photographers, ecommerce teams and creators who need rapid variations but still care about layers, protected regions and brand-sensitive edits." },
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      blocks: [
        { type: "paragraph", html: "Photoshop 27.10 expands the range of editing interfaces inside one application: natural language for broad changes, visual annotations when location matters, masks when boundaries matter, and traditional layer controls when precision matters most." },
        { type: "paragraph", html: "The important next signals are broader beta availability, real-world quality on difficult brand-sensitive edits and whether Prompt to Edit materially reduces time compared with existing Generative Fill workflows." },
      ],
    },
  ],
  sources: [
    { label: "Adobe — Photoshop 27.10 launch announcement", url: "https://blog.adobe.com/en/publish/2026/08/27/new-photoshop-innovations-bring-you-more-choice-control-at-every-stage-of-your-creative-process" },
    { label: "Adobe Community — Photoshop 27.10 release notes", url: "https://community.adobe.com/announcements-710/photoshop-27-10-new-ai-editing-tools-light-adjustment-layer-and-more-1639062" },
    { label: "Adobe Help — AI Assisted Editor", url: "https://helpx.adobe.com/photoshop/desktop/get-started/set-up-toolbars-panels/edit-images-with-ai-assistant.html" },
  ],
  relatedPaths: [
    "/blog/how-to-use-photoshop-prompt-to-edit-ai-assisted-editor",
    "/blog/photoshop-light-adjustment-layer",
  ],
};

const photoshopWorkflow: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Adobe Photoshop 27.10",
  targetSearchIntent: "Practical workflow guide for creators using Photoshop 27.10 AI Assisted Editor, Prompt to Edit, Markup and mask-guided editing without losing non-destructive control",
  targetQuery: "how to use Photoshop Prompt to Edit",
  parentSlug: "photoshop-27-10-ai-assisted-editor-prompt-to-edit",
  slug: "how-to-use-photoshop-prompt-to-edit-ai-assisted-editor",
  title: "How to Use Photoshop Prompt to Edit, AI Assisted Editor & Markup",
  metaTitle: "How to Use Photoshop Prompt to Edit & AI Assisted Editor",
  metaDescription: "Learn how Photoshop Prompt to Edit, AI Assisted Editor, Markup and mask-guided AI editing fit together, and when to use each workflow for faster controlled edits.",
  h1: "How to Use Photoshop Prompt to Edit, AI Assisted Editor and Markup",
  excerpt: "A practical decision guide for choosing whole-image prompts, visual markup, protected masks and selected-region generation in Photoshop 27.10.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a Photoshop workflow from prompt to markup to mask to layered result",
  sections: [
    {
      id: "choose-mode",
      title: "Choose the right editing mode first",
      blocks: [
        { type: "paragraph", html: "The <a href=\"/blog/photoshop-27-10-ai-assisted-editor-prompt-to-edit\">Photoshop 27.10 release</a> gives creators several AI editing paths instead of forcing every task through one prompt box. The useful skill is choosing the mode that matches the job." },
        { type: "paragraph", html: "Use AI Assisted Editor when you want a dedicated prompt-first space. Stay in the Pro Editor when you need the normal layer workflow and want to call Prompt to Edit through the Contextual Task Bar." },
      ],
    },
    {
      id: "prompt-to-edit-workflow",
      title: "Use Prompt to Edit for broad image changes",
      blocks: [
        { type: "paragraph", html: "Prompt to Edit is strongest when the requested change applies broadly to the image: changing the environment, shifting the overall visual mood or replacing a scene without manually selecting every region." },
        { type: "paragraph", html: "Write prompts around the visible outcome. A useful structure is subject + requested change + visual condition + constraint. For example: <em>Keep the product and logo unchanged, replace the background with a warm studio gradient, and add a subtle floor shadow.</em>" },
        { type: "note", html: "Adobe says Prompt to Edit outputs are generative layers, so keep the original layer stack and compare variations instead of treating the first result as final." },
      ],
    },
    {
      id: "markup",
      title: "Use Markup when words are spatially ambiguous",
      blocks: [
        { type: "paragraph", html: "Markup is designed for instructions where location matters. Draw or annotate where an object should move, where a generated element should appear, or which region needs a visual change, then combine that spatial cue with a written instruction." },
        { type: "paragraph", html: "This reduces ambiguity in prompts such as “put it over there” because the model receives a visual pointer as well as text." },
      ],
    },
    {
      id: "masks",
      title: "Use Instruct Edit with Masks when protected areas matter",
      blocks: [
        { type: "paragraph", html: "Instruct Edit with Masks is powered by Firefly Image 5. Adobe says it uses full-image context while limiting the requested edit to the masked region." },
        { type: "paragraph", html: "For brand-sensitive work, keep logos, faces, product labels and other critical details outside the editable mask whenever possible. Then describe only the change needed inside the selected area." },
      ],
    },
    {
      id: "generative-fill",
      title: "When to use Generative Fill instead",
      blocks: [
        { type: "list", items: [
          "Broad whole-image transformation: Prompt to Edit",
          "Rough spatial direction: Markup",
          "Tightly protected regional change: Instruct Edit with Masks",
          "Selected-region add/remove/replace task: Generative Fill",
        ] },
        { type: "paragraph", html: "The tools overlap, so there is no universal winner. The practical difference is how much spatial or selection control the edit needs before generation begins." },
      ],
    },
    {
      id: "social-workflow",
      title: "A practical social-content workflow",
      blocks: [
        { type: "list", ordered: true, items: [
          "Preserve the approved original layer group.",
          "Use Prompt to Edit for the broad creative direction.",
          "Use Markup to correct placement or composition.",
          "Use masks near logos, faces and products.",
          "Use the Light Adjustment Layer for final reversible exposure and contrast tuning.",
          "Inspect text, hands, faces, product geometry and edges at full size before export.",
        ] },
        { type: "paragraph", html: "The <a href=\"/blog/photoshop-light-adjustment-layer\">Light Adjustment Layer guide</a> explains the lighting step in more detail." },
      ],
    },
    {
      id: "not-showing",
      title: "What if the tools are not showing?",
      blocks: [
        { type: "paragraph", html: "Confirm that Photoshop is updated to the relevant current build. Adobe describes AI Assisted Editor as beta, so availability can differ by platform, account and rollout state." },
        { type: "paragraph", html: "Do not assume a missing control is a bug solely because it appears in the release announcement. Beta and staged feature availability can differ." },
      ],
    },
  ],
  sources: [
    { label: "Adobe — Photoshop 27.10 launch announcement", url: "https://blog.adobe.com/en/publish/2026/08/27/new-photoshop-innovations-bring-you-more-choice-control-at-every-stage-of-your-creative-process" },
    { label: "Adobe Community — Photoshop 27.10 release notes", url: "https://community.adobe.com/announcements-710/photoshop-27-10-new-ai-editing-tools-light-adjustment-layer-and-more-1639062" },
    { label: "Adobe Help — AI Assisted Editor", url: "https://helpx.adobe.com/photoshop/desktop/get-started/set-up-toolbars-panels/edit-images-with-ai-assistant.html" },
  ],
  relatedPaths: [
    "/blog/photoshop-27-10-ai-assisted-editor-prompt-to-edit",
    "/blog/photoshop-light-adjustment-layer",
  ],
};

const photoshopLight: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Adobe Photoshop 27.10",
  targetSearchIntent: "Practical guide to using Photoshop 27.10’s non-destructive Light Adjustment Layer and understanding compatibility and workflow fit",
  targetQuery: "Photoshop Light Adjustment Layer",
  parentSlug: "photoshop-27-10-ai-assisted-editor-prompt-to-edit",
  slug: "photoshop-light-adjustment-layer",
  title: "Photoshop Light Adjustment Layer: How to Use the New Lighting Controls",
  metaTitle: "Photoshop Light Adjustment Layer: How to Use It",
  metaDescription: "Learn how Photoshop’s new Light Adjustment Layer controls exposure, contrast, highlights, shadows, whites and blacks non-destructively—and when to use it.",
  h1: "How to Use Photoshop’s New Light Adjustment Layer",
  excerpt: "Photoshop 27.10 brings six common lighting controls into a reversible adjustment layer, with legacy Brightness/Contrast compatibility preserved.",
  category: "Creator Tools",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic for Photoshop Light Adjustment Layer with tonal bands and a layered image workflow",
  sections: [
    {
      id: "what-it-is",
      title: "What the Light Adjustment Layer is",
      blocks: [
        { type: "paragraph", html: "Photoshop 27.10 includes a dedicated Light Adjustment Layer for non-destructive tonal work. Adobe says it brings Exposure, Contrast, Highlights, Shadows, Whites and Blacks directly into the normal layer workflow." },
        { type: "paragraph", html: "Adobe first tested the redesigned Light control publicly in Photoshop Beta in June 2026. Its appearance in the <a href=\"/blog/photoshop-27-10-ai-assisted-editor-prompt-to-edit\">Photoshop 27.10 release</a> is therefore a release milestone rather than the first public preview." },
      ],
    },
    {
      id: "controls",
      title: "The six lighting controls",
      blocks: [
        { type: "list", items: [
          "Exposure — broad exposure adjustment",
          "Contrast — separation between lighter and darker tones",
          "Highlights — control over brighter tonal regions",
          "Shadows — control over darker tonal regions",
          "Whites — adjustment of the upper white-point region",
          "Blacks — adjustment of the lower black-point region",
        ] },
        { type: "paragraph", html: "Those labels are Adobe’s published control set. There is no universal correct slider value; the useful setting depends on the source image and the surrounding adjustments." },
      ],
    },
    {
      id: "workflow",
      title: "A practical Light Adjustment workflow",
      blocks: [
        { type: "list", ordered: true, items: [
          "Update to Photoshop 27.10 if the adjustment is not present.",
          "Add Light through the adjustment-layer workflow available in your build.",
          "Use Exposure first only when the entire image needs a broad shift.",
          "Shape bright and dark regions with Highlights and Shadows.",
          "Refine Whites and Blacks for the tonal endpoints.",
          "Reduce layer opacity or use the layer mask when the change should be localized.",
          "Keep the adjustment editable until export.",
        ] },
        { type: "note", html: "Adobe does not prescribe one mandatory slider order. This sequence is a practical editing workflow, not an official required procedure." },
      ],
    },
    {
      id: "brightness-contrast",
      title: "Light vs Brightness/Contrast",
      blocks: [
        { type: "paragraph", html: "Adobe says Brightness/Contrast has not disappeared. In its June beta announcement, Adobe said the older behavior remains available through legacy controls and that existing actions and plugins using Brightness/Contrast should continue to work." },
        { type: "paragraph", html: "The Light layer is broader because it exposes six tonal controls, making it easier to shape highlights and shadows separately instead of relying on a basic brightness/contrast pair." },
      ],
    },
    {
      id: "camera-raw",
      title: "Light Adjustment Layer vs Camera Raw",
      blocks: [
        { type: "paragraph", html: "Camera Raw remains a deeper environment for raw development and broader photographic controls. The Light layer is useful when the task is narrower and the correction needs to stay directly in the Photoshop layer stack." },
        { type: "paragraph", html: "Treat Light as a convenient layer-based lighting tool, not a replacement for every Camera Raw workflow." },
      ],
    },
    {
      id: "compatibility",
      title: "Compatibility to know",
      blocks: [
        { type: "paragraph", html: "Adobe’s June beta documentation says the redesigned Light adjustment is available for <strong>8-bit and 16-bit RGB images</strong>. For other color modes, Adobe said the legacy Brightness/Contrast behavior continues to work." },
        { type: "paragraph", html: "Because that compatibility note originated during beta, check the current 27.10 build when working in a different document mode rather than assuming later behavior is identical." },
      ],
    },
    {
      id: "creator-use",
      title: "Where it fits for creators",
      blocks: [
        { type: "paragraph", html: "The layer is useful for product photos, thumbnails, campaign visuals and social graphics where a designer may need several reversible lighting versions from one approved base image." },
        { type: "paragraph", html: "For a broader AI-editing workflow that combines prompts, visual markup and masks, continue with the <a href=\"/blog/how-to-use-photoshop-prompt-to-edit-ai-assisted-editor\">Prompt to Edit guide</a>." },
      ],
    },
  ],
  sources: [
    { label: "Adobe — Photoshop 27.10 launch announcement", url: "https://blog.adobe.com/en/publish/2026/08/27/new-photoshop-innovations-bring-you-more-choice-control-at-every-stage-of-your-creative-process" },
    { label: "Adobe Community — Photoshop 27.10 release notes", url: "https://community.adobe.com/announcements-710/photoshop-27-10-new-ai-editing-tools-light-adjustment-layer-and-more-1639062" },
    { label: "Adobe Community — Light Adjustment Layer beta announcement", url: "https://community.adobe.com/announcements-698/new-light-adjustment-layer-in-photoshop-beta-1628698" },
  ],
  relatedPaths: [
    "/blog/photoshop-27-10-ai-assisted-editor-prompt-to-edit",
    "/blog/how-to-use-photoshop-prompt-to-edit-ai-assisted-editor",
  ],
};

const googleMain: BlogArticle = {
  status: "published",
  articleType: "main",
  cluster: "Google Site Reputation Policy",
  targetSearchIntent: "Broad overview of Google’s 2026 Site Reputation Policy enforcement change, EEA treatment, manual actions and implications for site owners",
  targetQuery: "Google site reputation policy",
  slug: "google-site-reputation-policy-eea-2026",
  title: "Google Site Reputation Policy 2026: What Changes in the EEA",
  metaTitle: "Google Site Reputation Policy 2026: What Changes in the EEA",
  metaDescription: "Google changes Site Reputation Policy enforcement in the EEA from August 30, 2026. See what manual actions mean, what changes, and what site owners should do.",
  h1: "Google’s Site Reputation Policy Changes in the EEA: What Site Owners Need to Know",
  excerpt: "From August 30, Site Reputation Policy manual-action impact changes for EEA searchers while Google can separately evaluate affected sections.",
  category: "SEO",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing EEA and non-EEA search paths for Google Site Reputation Policy enforcement",
  sections: [
    {
      id: "what-changed",
      title: "What Google changed",
      blocks: [
        { type: "paragraph", html: "Google announced on <strong>August 28, 2026</strong> that its Site Reputation Policy manual-action treatment will change for searchers in the European Economic Area beginning <strong>August 30, 2026</strong>." },
        { type: "paragraph", html: "For searchers outside the EEA, a manual action under this policy can continue to directly affect the relevant part of a site. For EEA searchers, Google says the manual-action impact will not apply; instead, the affected section may be separated in Google’s systems and ranked independently over time." },
        { type: "note", html: "The underlying Site Reputation Policy still exists. The update changes enforcement treatment by searcher location; it does not repeal the policy in Europe." },
      ],
    },
    {
      id: "policy-definition",
      title: "What Site Reputation Policy targets",
      blocks: [
        { type: "paragraph", html: "Google’s policy targets third-party content published primarily to exploit ranking signals the host site has already earned. The issue is therefore more specific than affiliate content, sponsored pages or outside contributors in general." },
        { type: "paragraph", html: "The useful test is whether the third-party section exists for the host site’s audience and can stand on its own value, rather than depending mainly on the host domain’s reputation to capture search rankings." },
      ],
    },
    {
      id: "rank-independently",
      title: "What “rank independently” means",
      blocks: [
        { type: "paragraph", html: "Google says an affected section may be categorized separately from the main domain for EEA searchers. In practical terms, that means the section may no longer benefit from the host site’s ranking signals in the same way." },
        { type: "paragraph", html: "Google has not published a universal timetable for that separation, so publishers should not assume the effect is immediate or identical for every site." },
      ],
    },
    {
      id: "outside-eea",
      title: "What happens outside the EEA",
      blocks: [
        { type: "paragraph", html: "Outside the EEA, the existing manual-action model remains. If human review finds a section inconsistent with the policy, the relevant pages can be directly affected in results shown to users outside the EEA." },
        { type: "paragraph", html: "The rest of the site is not automatically affected, according to Google. A global publisher can therefore see geography-dependent treatment of the same affected section." },
      ],
    },
    {
      id: "existing-actions",
      title: "Existing manual actions and Search Console",
      blocks: [
        { type: "paragraph", html: "Google says previous manual-action effects under this policy will be lifted for EEA searchers, but that does not guarantee that affected pages regain the full ranking benefit of the host domain." },
        { type: "paragraph", html: "Site owners will continue to receive notifications in Search Console. If you need remediation steps, use the <a href=\"/blog/fix-google-site-reputation-manual-action\">Site Reputation Policy manual-action recovery guide</a>." },
      ],
    },
    {
      id: "noindex",
      title: "Do affected pages need noindex?",
      blocks: [
        { type: "paragraph", html: "No. Google’s current documentation says there is no obligation to add a noindex tag merely because content is subject to a Site Reputation Policy manual action outside the EEA." },
        { type: "paragraph", html: "Noindex can still be appropriate when a page should not appear in search, but it is not a universal cure for the underlying third-party relationship or content structure." },
      ],
    },
    {
      id: "parasite-seo",
      title: "Does this make parasite SEO safe in Europe?",
      blocks: [
        { type: "paragraph", html: "No verified evidence supports that conclusion. “Parasite SEO” is industry terminology, and Google’s announcement does not say host-domain reputation abuse is now acceptable inside the EEA." },
        { type: "paragraph", html: "The separate <a href=\"/blog/parasite-seo-google-site-reputation-policy-eea\">parasite SEO implications guide</a> explains why the August 30 change should not be treated as a demonstrated loophole." },
      ],
    },
    {
      id: "what-to-watch",
      title: "What to watch after August 30",
      blocks: [
        { type: "paragraph", html: "The strongest evidence will be real Search Console and ranking behavior after rollout. Until then, claims about traffic recovery, ranking gains or the speed of section separation are predictions rather than verified outcomes." },
        { type: "paragraph", html: "Publishers should review coupon areas, sponsored commercial sections, white-label content, comparison hubs and other third-party sections that may depend heavily on the parent domain’s reputation." },
      ],
    },
  ],
  sources: [
    { label: "Google Search Central — Site Reputation Policy EEA update", url: "https://developers.google.com/search/blog/2026/08/update-site-reputation-policy" },
    { label: "Google Search Central — spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { label: "Google Search Console Help — manual actions", url: "https://support.google.com/webmasters/answer/9044175" },
  ],
  relatedPaths: [
    "/blog/fix-google-site-reputation-manual-action",
    "/blog/parasite-seo-google-site-reputation-policy-eea",
  ],
};

const googleFix: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Google Site Reputation Policy",
  targetSearchIntent: "Practical recovery guide for site owners who receive a Google Site Reputation Policy manual action and need to remediate the section and submit a reconsideration request",
  targetQuery: "how to fix site reputation abuse manual action",
  parentSlug: "google-site-reputation-policy-eea-2026",
  slug: "fix-google-site-reputation-manual-action",
  title: "How to Fix a Google Site Reputation Policy Manual Action",
  metaTitle: "How to Fix a Google Site Reputation Policy Manual Action",
  metaDescription: "Got a Google Site Reputation Policy manual action? Learn how to audit the affected section, fix the issue, submit a reconsideration request and avoid common mistakes.",
  h1: "How to Fix a Google Site Reputation Policy Manual Action",
  excerpt: "A source-grounded recovery process for auditing an affected third-party section, fixing the underlying arrangement and preparing a reconsideration request.",
  category: "SEO",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet editorial graphic showing a Search Console manual-action recovery checklist",
  sections: [
    {
      id: "confirm-action",
      title: "1. Confirm exactly what Google flagged",
      blocks: [
        { type: "paragraph", html: "Open Search Console and check the Manual Actions report and message center. Read the affected scope carefully: a manual action may apply to a section rather than the entire site." },
        { type: "paragraph", html: "Do not assume every ranking drop is a manual action. If Search Console shows no manual action, this recovery workflow may not apply." },
      ],
    },
    {
      id: "understand-problem",
      title: "2. Understand the policy problem",
      blocks: [
        { type: "paragraph", html: "Google’s Site Reputation Policy targets third-party content published mainly to exploit the host site’s ranking signals. The problem is not simply that content is sponsored, affiliate-funded or written by someone else." },
        { type: "paragraph", html: "Review who controls the section, why it exists, how it is edited and whether it would still deserve to rank if evaluated independently from the host domain. The <a href=\"/blog/google-site-reputation-policy-eea-2026\">2026 EEA policy overview</a> explains the current enforcement split." },
      ],
    },
    {
      id: "audit",
      title: "3. Audit the affected section URL by URL",
      blocks: [
        { type: "list", items: [
          "Who created or controls each page?",
          "Is it genuinely useful to the host site’s normal audience?",
          "Is there independent editorial oversight?",
          "Was it created mainly to capture rankings through the host domain?",
          "Are commercial relationships clearly disclosed?",
          "Are large numbers of near-template pages being generated for search traffic?",
        ] },
        { type: "paragraph", html: "A reconsideration request is stronger when remediation can be shown concretely rather than described as a vague quality improvement." },
      ],
    },
    {
      id: "fix-arrangement",
      title: "4. Fix the underlying arrangement",
      blocks: [
        { type: "paragraph", html: "Possible actions can include removing low-value third-party sections, bringing pages under genuine editorial control, changing the commercial relationship, reducing templated coverage or moving a section into a structure where it can stand on its own merits." },
        { type: "note", html: "Do not make cosmetic changes solely to hide the section from reviewers while preserving the same underlying arrangement." },
      ],
    },
    {
      id: "noindex",
      title: "5. Do you need to noindex the pages?",
      blocks: [
        { type: "paragraph", html: "Not automatically. Google’s current documentation explicitly says there is no obligation to add noindex simply because content is subject to a Site Reputation Policy manual action outside the EEA." },
        { type: "paragraph", html: "Noindex can still be appropriate when a page should not appear in search, but it is not a universal fix for the policy problem." },
      ],
    },
    {
      id: "document-submit",
      title: "6. Document changes and request review",
      blocks: [
        { type: "paragraph", html: "Prepare a concise change log covering the affected sections, what was removed or materially changed, how editorial control now works and what safeguards prevent recurrence." },
        { type: "paragraph", html: "Use the Request Review option when available and keep the reconsideration request factual. Explain the cause, completed remediation, affected URLs or sections and the process now in place. Do not promise work that has not been done." },
      ],
    },
    {
      id: "eea-change",
      title: "7. How the August 30 EEA change affects recovery",
      blocks: [
        { type: "paragraph", html: "Beginning August 30, Google says the manual-action impact will not apply to EEA searchers, while outside the EEA it can continue to affect the relevant pages. Affected sections may instead be ranked independently inside the EEA." },
        { type: "paragraph", html: "That does not make remediation irrelevant for global sites. Nor does it prove a section will regain host-domain ranking strength. The <a href=\"/blog/parasite-seo-google-site-reputation-policy-eea\">EEA parasite SEO guide</a> covers the strategic implications without assuming post-rollout recovery." },
      ],
    },
    {
      id: "checklist",
      title: "Recovery checklist",
      blocks: [
        { type: "list", items: [
          "Verify the manual action in Search Console.",
          "Map all affected URLs.",
          "Identify the underlying third-party/reputation relationship.",
          "Remove or materially remediate the problematic structure.",
          "Document each meaningful change.",
          "Submit a factual reconsideration request.",
          "Monitor Search Console and ranking behavior by market.",
        ] },
        { type: "paragraph", html: "The goal is not merely to make a penalty disappear. It is to remove the reason Google treated the section as reputation abuse in the first place." },
      ],
    },
  ],
  sources: [
    { label: "Google Search Central — spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { label: "Google Search Central — Site Reputation Policy EEA update", url: "https://developers.google.com/search/blog/2026/08/update-site-reputation-policy" },
    { label: "Google Search Console Help — manual actions", url: "https://support.google.com/webmasters/answer/9044175" },
  ],
  relatedPaths: [
    "/blog/google-site-reputation-policy-eea-2026",
    "/blog/parasite-seo-google-site-reputation-policy-eea",
  ],
};

const googleParasite: BlogArticle = {
  status: "published",
  articleType: "supporting",
  cluster: "Google Site Reputation Policy",
  targetSearchIntent: "Understand whether Google’s August 30 EEA enforcement change makes parasite SEO safer or more effective and how publishers should evaluate third-party sections before post-rollout evidence exists",
  targetQuery: "parasite SEO Google site reputation policy EEA",
  parentSlug: "google-site-reputation-policy-eea-2026",
  slug: "parasite-seo-google-site-reputation-policy-eea",
  title: "Parasite SEO After Google’s 2026 EEA Site Reputation Policy Change",
  metaTitle: "Parasite SEO After Google’s EEA Site Reputation Policy Change",
  metaDescription: "Google changes Site Reputation Policy enforcement in the EEA from Aug. 30. See what this means for parasite SEO, what still applies, and what publishers should audit.",
  h1: "What Google’s 2026 EEA Site Reputation Policy Change Means for Parasite SEO",
  excerpt: "The EEA manual-action treatment changes on August 30, but Google can still separate affected sections from a host domain’s ranking signals.",
  category: "SEO",
  author: "Project Monet Editorial Team",
  datePublished: published,
  dateModified: published,
  ogAlt: "Project Monet SEO diagram showing a host domain and third-party section splitting into EEA and non-EEA search paths",
  sections: [
    {
      id: "short-answer",
      title: "The short answer",
      blocks: [
        { type: "paragraph", html: "Google’s August 28 update does <strong>not</strong> make “parasite SEO” safe in Europe and does not repeal the Site Reputation Policy. Beginning August 30, the direct impact of manual actions under this policy will no longer apply to EEA searchers." },
        { type: "paragraph", html: "At the same time, Google says an affected section may be separated from the rest of the host domain and ranked independently. That distinction is why the policy change should not be treated as a demonstrated loophole." },
      ],
    },
    {
      id: "meaning",
      title: "What people mean by parasite SEO",
      blocks: [
        { type: "paragraph", html: "“Parasite SEO” is industry terminology, not Google’s official policy name. Google’s <a href=\"/blog/google-site-reputation-policy-eea-2026\">Site Reputation Policy</a> covers third-party content published primarily to exploit ranking signals the host site has already earned." },
        { type: "paragraph", html: "The policy is more specific than a ban on affiliate links, sponsored pages or third-party writers. The central issue is whether the arrangement primarily relies on host-domain reputation rather than independent usefulness." },
      ],
    },
    {
      id: "eea-change",
      title: "What changes inside the EEA",
      blocks: [
        { type: "paragraph", html: "Google says the manual-action impact will not apply to EEA searchers beginning August 30 and that previous EEA effects under this policy will be lifted." },
        { type: "paragraph", html: "But an affected section can be categorized separately and evaluated on its own. “The manual action no longer suppresses this result in the EEA” is therefore not the same claim as “this page gets the host site’s full authority.”" },
      ],
    },
    {
      id: "what-stays",
      title: "What does not change",
      blocks: [
        { type: "paragraph", html: "Outside the EEA, manual actions can continue to directly affect the relevant section. The underlying policy remains part of Google’s spam policies, and Search Console notices and reconsideration requests remain relevant." },
        { type: "paragraph", html: "A globally visible publisher cannot treat the EEA change as a universal exemption." },
      ],
    },
    {
      id: "evidence",
      title: "Does this make parasite SEO work again?",
      blocks: [
        { type: "paragraph", html: "There is no verified post-rollout evidence yet. The change was announced August 28 and begins August 30, so any claim today that traffic has recovered because of the new EEA treatment would be premature." },
        { type: "paragraph", html: "After rollout, useful evidence will include market-segmented Search Console data, country-level rank tracking and stable before/after comparisons. Normal algorithm volatility still needs to be separated from the policy change." },
      ],
    },
    {
      id: "publisher-test",
      title: "The strategic test for publishers",
      blocks: [
        { type: "list", items: [
          "Would the section still be useful to the host site’s normal audience?",
          "Is there real editorial control and accountability?",
          "Would the pages deserve discovery if they lived on a less authoritative domain?",
          "Is the commercial relationship transparent?",
          "Is the section distinguishable from templated search-first lead-gen, coupon or affiliate coverage?",
        ] },
        { type: "paragraph", html: "If the business case depends mainly on the host domain being powerful, the EEA change does not remove the underlying strategic risk." },
      ],
    },
    {
      id: "affected-sites",
      title: "What affected sites should do",
      blocks: [
        { type: "paragraph", html: "If Search Console shows a Site Reputation Policy manual action, map the affected URLs and remediate the underlying relationship or content structure. The <a href=\"/blog/fix-google-site-reputation-manual-action\">manual-action recovery guide</a> covers the process in detail." },
        { type: "paragraph", html: "Do not assume noindex is universally required. Google explicitly says there is no obligation to add noindex solely because content is subject to this manual action outside the EEA." },
      ],
    },
    {
      id: "what-to-measure",
      title: "What SEO teams should measure after August 30",
      blocks: [
        { type: "list", ordered: true, items: [
          "EEA versus non-EEA impressions and clicks for affected sections.",
          "Whether affected pages begin ranking independently for narrower queries.",
          "Host-domain pages outside the affected section.",
          "Search Console manual-action and reconsideration messages.",
          "Branded versus non-branded discovery changes.",
          "Ranking movement over enough time to avoid over-attributing ordinary volatility.",
        ] },
        { type: "paragraph", html: "Treat those observations as evidence, not proof of one mechanism unless Google confirms it." },
      ],
    },
  ],
  sources: [
    { label: "Google Search Central — Site Reputation Policy EEA update", url: "https://developers.google.com/search/blog/2026/08/update-site-reputation-policy" },
    { label: "Google Search Central — spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
    { label: "Google Search Console Help — manual actions", url: "https://support.google.com/webmasters/answer/9044175" },
  ],
  relatedPaths: [
    "/blog/google-site-reputation-policy-eea-2026",
    "/blog/fix-google-site-reputation-manual-action",
  ],
};

export const photoshopGoogleArticles: BlogArticle[] = [
  photoshopMain,
  photoshopWorkflow,
  photoshopLight,
  googleMain,
  googleFix,
  googleParasite,
];
