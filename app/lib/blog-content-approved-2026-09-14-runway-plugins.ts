import type { BlogArticle } from "./blog-types.ts";

export const runwayPluginArticles20260914: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Runway Plugins",
    targetSearchIntent: "Broad overview of Runway's Adobe plugin: what it is, supported creative workflows and models, installation/availability, paid-generation requirement, credits, limitations, and who should use it",
    targetQuery: "Runway plugin for Premiere Pro and After Effects",
    slug: "runway-plugin-premiere-pro-after-effects",
    title: "Runway Plugin for Premiere Pro & After Effects: Features, Setup & Pricing",
    metaTitle: "Runway Plugin for Premiere Pro & After Effects: Setup & Features",
    metaDescription: "Runway now works inside Premiere Pro and After Effects. See supported AI models, editing tools, setup, pricing, credits, availability and limitations.",
    h1: "Runway Plugin for Premiere Pro & After Effects: How It Works",
    excerpt: "Runway has moved its generative-media workflow directly into Adobe Premiere Pro and After Effects. Announced on September 8, 2026, Runway Plugins adds a dockable Runway panel where editors can generate images and video, re-render existing footage, upscale shots, remove backgrounds and place results directly into a project without exporting frames to a browser and importing the outputs again.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-14",
    dateModified: "2026-09-14",
    ogAlt: "Editorial illustration of an Adobe video-editing timeline with a docked Runway AI panel and generated media entering the edit",
    sections: [
      { id: "overview", title: "Overview", blocks: [
        { type: "paragraph", html: "Runway has moved its generative-media workflow directly into Adobe Premiere Pro and After Effects. Announced on September 8, 2026, Runway Plugins adds a dockable Runway panel where editors can generate images and video, re-render existing footage, upscale shots, remove backgrounds and place results directly into a project without exporting frames to a browser and importing the outputs again." },
        { type: "paragraph", html: "For creators and production teams, the important change is workflow rather than a single new model. Runway is turning Premiere Pro and After Effects into front ends for several generative video and image systems while keeping the resulting media inside the editing timeline." },
      ]},
      { id: "what-is-the-runway-plugin-for-adobe", title: "What is the Runway plugin for Adobe?", blocks: [
        { type: "paragraph", html: "Runway Plugins is a free installer for macOS and Windows that adds Runway to Adobe Premiere Pro and After Effects under Window → Extensions → Runway. One installer covers both Adobe apps." },
        { type: "paragraph", html: "After signing in, the panel uses the creator's existing Runway workspace and credits. Generated assets appear in the panel and can be inserted into the active Premiere sequence or After Effects composition. Runway says web generations are also accessible from the plugin, so the same workspace can move between browser-based creation and native editing." },
      ]},
      { id: "what-can-you-do-inside-premiere-pro-and-after-effects", title: "What can you do inside Premiere Pro and After Effects?", blocks: [
        { type: "paragraph", html: "Runway currently documents six main workflow categories:" },
        { type: "list", items: ["generate video from prompts and supported references", "generate still images", "re-render or restyle existing clips with Edit Studio and Aleph 2", "perform video-to-video transformations, including HDR workflows", "remove backgrounds from selected footage", "upscale clips or frames before delivery"] },
        { type: "paragraph", html: "The practical advantage is that editors can use those tools without repeatedly exporting a clip or still, opening Runway in a browser, downloading the result and finding the correct position in the Adobe timeline again." },
      ]},
      { id: "which-ai-models-are-available-in-the-plugin", title: "Which AI models are available in the plugin?", blocks: [
        { type: "paragraph", html: "Runway's current plugin page lists Gen-4.5, Seedance 2.5, Kling 3.0 Pro and Veo 3.1 for video generation. For still images it lists Gen-4 Image, Nano Banana and GPT Image 2." },
        { type: "paragraph", html: "The exact model list is time-sensitive. Runway can add or remove models, and model-specific controls such as duration, aspect ratio and resolution vary. Treat the current plugin interface and Runway documentation as the source of truth rather than assuming every model available on Runway's web product will automatically be available in Adobe." },
      ]},
      { id: "editing-existing-footage-with-aleph-2", title: "Editing existing footage with Aleph 2", blocks: [
        { type: "paragraph", html: "The plugin is not limited to generating new b-roll. In Edit Studio, an editor can select footage already in a sequence or composition and use anchor frames to define an edit. Runway says Aleph 2 can then re-render the full clip to match while preserving the source duration." },
        { type: "paragraph", html: "Runway's After Effects help page says users can restyle anchor frames or set up to five keyframes before the full clip is rendered. The panel provides a before-and-after comparison and lets the result be imported back into the project." },
        { type: "paragraph", html: "This creates a distinct workflow from a conventional text-to-video generator: the AI is operating on footage that already belongs to an edit rather than producing an isolated asset from scratch." },
      ]},
      { id: "video-to-video-hdr-background-removal-and-upscaling", title: "Video-to-video, HDR, background removal and upscaling", blocks: [
        { type: "paragraph", html: "Runway also exposes finishing-oriented tools in the Adobe panel. Current documentation includes video-to-video editing, HDR conversion with Runway Ruby, background removal and upscaling." },
        { type: "paragraph", html: "Background removal can isolate a subject without a traditional green-screen workflow. Upscaling can be used on selected clips or feed assets. HDR tools can either transform existing footage or support HDR generation where the selected model and workflow permit it." },
        { type: "paragraph", html: "These are vendor-described capabilities. Output quality will still depend on the source footage, selected model, prompt and generation settings." },
      ]},
      { id: "is-the-runway-plugin-free", title: "Is the Runway plugin free?", blocks: [
        { type: "paragraph", html: "The plugin itself is free to download. Generation is not universally free." },
        { type: "paragraph", html: "Runway's September 8 announcement says generating from the plugin is available on paid plans and uses existing plan credits. The current help-center pages phrase eligibility more specifically as Standard plan or higher. Because plan entitlements can change, users should treat the in-account plan screen and current help documentation as authoritative before assuming access." },
        { type: "paragraph", html: "There is no separate universal 'Runway Adobe plugin price' in the retrieved documentation. The cost of a generation is deducted from the same Runway credit system used by the relevant workflow and model, and the panel shows the cost before generation." },
      ]},
      { id: "how-to-install-it", title: "How to install it", blocks: [
        { type: "paragraph", html: "The basic setup is straightforward: download the Runway plugin installer, quit Premiere Pro and After Effects, run the installer, reopen the Adobe app, then choose Window → Extensions → Runway and sign in through the browser flow." },
        { type: "paragraph", html: "Runway says the macOS package supports Apple Silicon and Intel systems, while Windows uses an .exe installer. An internet connection is required because generations run on Runway's servers rather than locally on the editing machine." },
        { type: "paragraph", html: "The deeper step-by-step installation and troubleshooting workflow belongs in the separate supporting guide rather than being duplicated here." },
      ]},
      { id: "who-is-this-useful-for", title: "Who is this useful for?", blocks: [
        { type: "paragraph", html: "The plugin is most relevant to editors who already work in Premiere Pro or After Effects and regularly leave those applications to create AI assets. That includes short-form video creators, YouTube teams, agencies, social-media editors, motion designers and small production teams." },
        { type: "paragraph", html: "Its strongest use case is reducing context switching. A creator can generate an insert, transform an existing clip, remove a background or upscale a shot and then continue editing in the same project." },
      ]},
      { id: "important-limitations", title: "Important limitations", blocks: [
        { type: "paragraph", html: "The plugin still depends on cloud generation and Runway credits. It does not turn Runway's models into local Adobe models. Model availability and plan access can change. Generation quality is not guaranteed by being inside Premiere or After Effects. Existing Adobe-version support should be checked against the current Runway help article because a complete minimum-version matrix was not exposed in the retrieved public text." },
        { type: "paragraph", html: "The help-center wording also differs slightly from the launch announcement on plan eligibility: the announcement says paid plans, while the current setup guides say Standard plan or higher. That should be rechecked before publication." },
      ]},
      { id: "faq", title: "FAQ", blocks: [
        { type: "subheading", text: "When did Runway launch its Premiere Pro and After Effects plugin?" },
        { type: "paragraph", html: "Runway announced the plugins on September 8, 2026." },
        { type: "subheading", text: "Does one download work for both Adobe apps?" },
        { type: "paragraph", html: "Yes. Runway says one installer covers Premiere Pro and After Effects." },
        { type: "subheading", text: "Can the plugin generate AI video inside Premiere Pro?" },
        { type: "paragraph", html: "Yes. It can generate video and still images from the Runway panel and place completed results into the Premiere timeline." },
        { type: "subheading", text: "Can it edit footage that is already in the project?" },
        { type: "paragraph", html: "Yes. Edit Studio and Aleph 2 can re-render selected existing clips, while the plugin also exposes video-to-video, background-removal, HDR and upscaling workflows." },
        { type: "subheading", text: "Which video models does it support?" },
        { type: "paragraph", html: "Runway's current public plugin page lists Gen-4.5, Seedance 2.5, Kling 3.0 Pro and Veo 3.1. The list can change, so check the live plugin before relying on a specific model." },
        { type: "subheading", text: "Is the Runway Adobe plugin free?" },
        { type: "paragraph", html: "The installer is free. Generating uses Runway credits and currently requires an eligible paid plan; Runway's help pages specify Standard or higher." },
      ]},
    ],
    sources: [
      { label: "Runway — Runway for Adobe launch announcement", url: "https://runway.com/news/company-news/runway-for-adobe" },
      { label: "Runway — Plugins for Premiere Pro and After Effects", url: "https://runway.com/plugins" },
      { label: "Runway Help — Using Runway Plugins in Adobe Premiere Pro", url: "https://help.runwayml.com/hc/en-us/articles/55121421123987-Using-Runway-Plugins-in-Adobe-Premiere-Pro" },
      { label: "Runway Help — Using Runway Plugins in Adobe After Effects", url: "https://help.runwayml.com/hc/en-us/articles/55121465037075-Using-Runway-Plugins-in-Adobe-After-Effects" },
    ],
    relatedPaths: ["/blog/how-to-use-runway-plugin-premiere-pro-after-effects"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Runway Plugins",
    targetSearchIntent: "Step-by-step setup and practical first-use workflow for installing Runway Plugins, signing in, selecting a workspace, generating/importing media, and fixing common plugin visibility/install issues",
    targetQuery: "how to install and use Runway plugin in Premiere Pro and After Effects",
    parentSlug: "runway-plugin-premiere-pro-after-effects",
    slug: "how-to-use-runway-plugin-premiere-pro-after-effects",
    title: "How to Install and Use Runway in Premiere Pro & After Effects",
    metaTitle: "How to Use Runway in Premiere Pro & After Effects",
    metaDescription: "Install and use Runway inside Premiere Pro or After Effects: setup, sign-in, workspaces, first generation, importing results, credits and troubleshooting.",
    h1: "How to Install and Use Runway in Premiere Pro & After Effects",
    excerpt: "Runway Plugins lets you use Runway's generative-media tools directly inside Adobe Premiere Pro and After Effects. The installer is free, one download covers both Adobe apps, and generations use your existing Runway workspace and credits.",
    category: "Creator Tools",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-14",
    dateModified: "2026-09-14",
    ogAlt: "Instructional illustration of a video-editing timeline with a docked Runway AI panel, setup steps and a generated asset entering the edit",
    sections: [
      { id: "overview", title: "Overview", blocks: [
        { type: "paragraph", html: "Runway Plugins lets you use Runway's generative-media tools directly inside Adobe Premiere Pro and After Effects. The installer is free, one download covers both Adobe apps, and generations use your existing Runway workspace and credits." },
        { type: "paragraph", html: "This guide focuses on the practical setup and first workflow rather than repeating the full product overview." },
      ]},
      { id: "what-you-need-before-installing", title: "What you need before installing", blocks: [
        { type: "paragraph", html: "Runway's current help documentation lists three basic requirements: Premiere Pro or After Effects on macOS or Windows, a Runway account with eligible paid access, and an internet connection because generations run on Runway's servers." },
        { type: "paragraph", html: "The current help pages say the feature is available on a Standard plan or higher. Runway's launch announcement used the broader phrase 'all paid plans.' Because plan entitlements can change, check your live account before assuming access." },
      ]},
      { id: "1-download-the-runway-plugin", title: "1. Download the Runway plugin", blocks: [
        { type: "paragraph", html: "Go to Runway's official Plugins page and download the installer. You do not need separate installers for Premiere Pro and After Effects." },
        { type: "paragraph", html: "On macOS, Runway provides a .pkg installer and says it supports Apple Silicon and Intel. On Windows, use the .exe installer." },
      ]},
      { id: "2-quit-adobe-apps-before-installing", title: "2. Quit Adobe apps before installing", blocks: [
        { type: "paragraph", html: "Runway explicitly tells users to quit Premiere Pro and After Effects completely before running the installer. If either app is still open, the extension may not register correctly." },
      ]},
      { id: "3-run-the-installer", title: "3. Run the installer", blocks: [
        { type: "paragraph", html: "Open the downloaded package and follow the guided setup. Runway says the installer detects your Adobe apps and installs the plugin automatically." },
        { type: "paragraph", html: "If Windows blocks installation behavior, Runway's troubleshooting guidance says to rerun the installer as administrator. If macOS blocks it, go to System Settings → Privacy & Security and use Open Anyway where appropriate." },
      ]},
      { id: "4-open-runway-inside-premiere-pro-or-after-effects", title: "4. Open Runway inside Premiere Pro or After Effects", blocks: [
        { type: "paragraph", html: "Launch the Adobe app and choose Window → Extensions → Runway." },
        { type: "paragraph", html: "The Runway panel can stay docked beside the timeline or composition while you work. If the panel does not appear under Extensions, close the Adobe apps, rerun the installer and reopen them." },
      ]},
      { id: "5-sign-in-through-your-browser", title: "5. Sign in through your browser", blocks: [
        { type: "paragraph", html: "Select Sign in from the panel. Runway opens the browser for authentication; its help documentation notes that you do not type your Runway password into the Adobe panel itself." },
        { type: "paragraph", html: "Premiere Pro and After Effects maintain separate plugin sessions, so signing into one does not necessarily sign you into the other." },
      ]},
      { id: "6-choose-the-correct-workspace", title: "6. Choose the correct workspace", blocks: [
        { type: "paragraph", html: "If your account belongs to multiple Runway workspaces, use the workspace switcher in the plugin header." },
        { type: "paragraph", html: "This matters because Runway says the selected workspace determines where generations are saved and which workspace's credits are charged. The choice persists until changed." },
      ]},
      { id: "7-generate-an-image-or-video", title: "7. Generate an image or video", blocks: [
        { type: "paragraph", html: "Open the Generate area of the Runway panel, enter a prompt and choose an available model. Runway's current plugin page lists Gen-4.5, Seedance 2.5, Kling 3.0 Pro and Veo 3.1 for video, plus Gen-4 Image, Nano Banana and GPT Image 2 for still images." },
        { type: "paragraph", html: "Model-specific controls can include duration, aspect ratio, resolution and references. The exact controls depend on the model selected." },
        { type: "paragraph", html: "Runway says the panel shows generation progress while you continue editing." },
      ]},
      { id: "8-put-the-result-into-your-timeline-or-composition", title: "8. Put the result into your timeline or composition", blocks: [
        { type: "paragraph", html: "When a generation finishes, choose Import. In Premiere Pro, the result can land at the playhead in the active sequence. In After Effects, it can be added to the active composition." },
        { type: "paragraph", html: "If no After Effects composition is open, Runway says the asset still imports into the project panel and the plugin notifies you." },
      ]},
      { id: "9-edit-footage-already-in-your-project", title: "9. Edit footage already in your project", blocks: [
        { type: "paragraph", html: "For existing footage, select a clip or layer and use Edit Studio. Runway can capture anchor frames from the selected footage so you do not have to export them manually." },
        { type: "paragraph", html: "The current help documentation says you can restyle anchor frames or use up to five keyframes, then use Aleph 2 to re-render the full clip at the same duration as the source. A before/after view lets you compare the result before importing it." },
      ]},
      { id: "10-use-finishing-tools", title: "10. Use finishing tools", blocks: [
        { type: "paragraph", html: "The panel also exposes video-to-video workflows, HDR conversion, background removal and upscaling. These can operate on selected footage or compatible assets already in your Runway feed." },
        { type: "paragraph", html: "For background removal, Runway describes a prompt-based subject selection workflow rather than a green-screen requirement. Upscaling is available for clips and frames." },
      ]},
      { id: "how-credits-work", title: "How credits work", blocks: [
        { type: "paragraph", html: "The plugin does not have a separate universal generation price. It uses your existing Runway credits. The selected workspace is billed, and Runway says the cost of each generation appears in the panel before you run it." },
        { type: "paragraph", html: "Because different models and operations can consume different amounts, do not assume that one video-generation model costs the same as another." },
      ]},
      { id: "troubleshooting-runway-plugin-not-showing", title: "Troubleshooting: Runway plugin not showing", blocks: [
        { type: "paragraph", html: "If the Runway extension is missing, first quit both Premiere Pro and After Effects and rerun the official installer. On Windows, try Run as administrator. On macOS, check Privacy & Security if the installer was blocked. Then reopen the Adobe app and check Window → Extensions again." },
        { type: "paragraph", html: "Runway also recommends confirming that your Adobe version is supported. The retrieved public documentation does not expose a complete minimum-version matrix, so use Runway's current help page rather than relying on an old version number from third-party tutorials." },
      ]},
      { id: "troubleshooting-signed-into-the-wrong-workspace", title: "Troubleshooting: signed into the wrong workspace", blocks: [
        { type: "paragraph", html: "Use the workspace switcher in the panel header. Runway says the selected workspace controls both billing and where generated assets appear in your web feed." },
      ]},
      { id: "troubleshooting-generation-unavailable", title: "Troubleshooting: generation unavailable", blocks: [
        { type: "paragraph", html: "Check plan eligibility, credit balance, internet access and whether the selected model/workflow is currently available. The plugin is cloud-backed, so it is not an offline local-generation tool." },
      ]},
      { id: "a-practical-creator-workflow", title: "A practical creator workflow", blocks: [
        { type: "paragraph", html: "A simple workflow for social or YouTube editing is: cut the core footage first, identify missing b-roll or visual transitions, generate those assets from the Runway panel, drop the best result at the playhead, use Edit Studio if an existing shot needs transformation, then upscale or remove backgrounds only where needed." },
        { type: "paragraph", html: "This keeps AI generation subordinate to the edit rather than forcing the edit to be rebuilt around disconnected AI outputs." },
      ]},
      { id: "faq", title: "FAQ", blocks: [
        { type: "subheading", text: "Do I need separate Runway plugins for Premiere and After Effects?" },
        { type: "paragraph", html: "No. One installer covers both." },
        { type: "subheading", text: "Does Runway work offline inside Adobe?" },
        { type: "paragraph", html: "No. Runway says generations run on its servers and require an internet connection." },
        { type: "subheading", text: "Is the plugin itself free?" },
        { type: "paragraph", html: "Yes, the installer is free. Generation consumes Runway credits and currently requires an eligible paid plan." },
        { type: "subheading", text: "Where do generated files go?" },
        { type: "paragraph", html: "They can be imported into the active Adobe project, and Runway says they also appear in the selected Runway workspace's web feed." },
        { type: "subheading", text: "Why can I see the plugin in Premiere but not After Effects?" },
        { type: "paragraph", html: "The installer covers both apps, but Runway says each app keeps its own session. If the extension itself is missing, quit both apps and rerun the installer, then check Window → Extensions → Runway." },
      ]},
    ],
    sources: [
      { label: "Runway — Plugins for Premiere Pro and After Effects", url: "https://runway.com/plugins" },
      { label: "Runway Help — Using Runway Plugins in Adobe Premiere Pro", url: "https://help.runwayml.com/hc/en-us/articles/55121421123987-Using-Runway-Plugins-in-Adobe-Premiere-Pro" },
      { label: "Runway Help — Using Runway Plugins in Adobe After Effects", url: "https://help.runwayml.com/hc/en-us/articles/55121465037075-Using-Runway-Plugins-in-Adobe-After-Effects" },
      { label: "Runway — Runway for Adobe launch announcement", url: "https://runway.com/news/company-news/runway-for-adobe" },
    ],
    relatedPaths: ["/blog/runway-plugin-premiere-pro-after-effects"],
  },
];
