import type { BlogArticle } from "./blog-types.ts";

export const browserSkillArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "BrowserSkill",
    targetSearchIntent: "Understand Tencent BrowserSkill, its logged-in browser architecture, supported agents, installation and security boundaries.",
    targetQuery: "BrowserSkill",
    slug: "browserskill",
    title: "BrowserSkill: Tencent's Logged-In Browser Tool for AI Agents",
    metaTitle: "BrowserSkill: Tencent's Logged-In Browser Tool for AI Agents",
    metaDescription: "BrowserSkill lets Claude Code, Codex, Cursor and other shell-capable agents use a logged-in Chromium browser through a local CLI and extension.",
    h1: "BrowserSkill: Let AI Agents Use Your Logged-In Browser",
    excerpt: "Tencent's BrowserSkill bridges shell-capable AI agents into a real logged-in Chromium profile through a local CLI, daemon and extension.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "AI agent connected through the BrowserSkill CLI and local daemon to a logged-in Chromium Agent Window.",
    sections: [
      {
        id: "what",
        title: "What BrowserSkill is",
        blocks: [
          { type: "paragraph", html: "BrowserSkill is an MIT-licensed open-source bridge from Tencent that lets shell-capable AI agents operate a real Chromium browser using existing login state. Its repository explicitly names Cursor, Claude Code, OpenAI Codex and several other agent harnesses." },
          { type: "list", items: ["The agent calls the bsk CLI.", "A local daemon relays commands over localhost.", "A Chromium extension performs actions in a separate Agent Window."] },
        ],
      },
      {
        id: "logged-in",
        title: "Why logged-in browser access matters",
        blocks: [
          { type: "paragraph", html: "Many useful browser workflows depend on cookies, account permissions, MFA state or a real application profile. BrowserSkill targets that gap instead of always starting a fresh automation browser." },
          { type: "list", items: ["Existing user tabs must be explicitly borrowed when needed.", "Human takeover is supported for captchas, logins and confirmation steps.", "Chrome and Edge are the documented browser targets; Firefox is not currently presented as supported."] },
        ],
      },
      {
        id: "uses",
        title: "Useful and unsafe use cases",
        blocks: [
          { type: "paragraph", html: "The documented skill covers browsing, page reading, form interaction, screenshots and web-app validation. Logged-in access can also make internal dashboards and authenticated admin tools reachable to an agent." },
          { type: "list", items: ["Start with read-only tasks.", "Keep financial, publishing, access-control and destructive actions behind human confirmation.", "Do not treat logged-in access as permission to bypass site rules or human-verification mechanisms."] },
        ],
      },
      {
        id: "security",
        title: "Security and privacy boundaries",
        blocks: [
          { type: "paragraph", html: "The feature that makes BrowserSkill useful also increases the consequences of a bad instruction. Review extension permissions and source code, use least-privilege accounts where possible, and keep the agent's scope narrow." },
          { type: "list", items: ["The bridge is designed to run locally.", "Developer privacy disclosures are not an independent security audit.", "An isolated automation browser remains preferable when deterministic testing or strong separation from production sessions matters most."] },
        ],
      },
    ],
    sources: [
      { label: "Tencent BrowserSkill repository", url: "https://github.com/Tencent/BrowserSkill" },
      { label: "BrowserSkill agent skill", url: "https://github.com/Tencent/BrowserSkill/blob/main/skill/SKILL.md" },
      { label: "BrowserSkill Chrome Web Store listing", url: "https://chromewebstore.google.com/detail/browserskill/hhcmgoofomhgciiibhipgmgkgnoenaoi" },
    ],
    relatedPaths: ["/blog/browserskill-install"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "BrowserSkill",
    targetSearchIntent: "Install the bsk CLI, browser extension and agent skill, then validate a safe first BrowserSkill task.",
    targetQuery: "BrowserSkill install",
    parentSlug: "browserskill",
    slug: "browserskill-install",
    title: "How to Install BrowserSkill with Claude Code, Codex or Cursor",
    metaTitle: "How to Install BrowserSkill with Claude Code, Codex or Cursor",
    metaDescription: "Install Tencent BrowserSkill's bsk CLI, Chrome or Edge extension and agent skill, then connect Claude Code, Codex or Cursor and run a safe first test.",
    h1: "How to Install BrowserSkill with Claude Code, Codex or Cursor",
    excerpt: "BrowserSkill setup has three pieces: the bsk CLI and daemon, the Chromium extension, and the skill installed into your agent harness.",
    category: "Automation",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    ogAlt: "BrowserSkill setup flow from bsk CLI to Chromium extension, agent skill and safe first browser test.",
    sections: [
      {
        id: "requirements",
        title: "Check requirements before installation",
        blocks: [
          { type: "paragraph", html: "Use Tencent's current repository as the installation source. BrowserSkill currently documents macOS, Linux and Windows targets plus Chrome and Microsoft Edge. Because it can reach authenticated sessions, decide which browser profile is appropriate before you connect an agent." },
          { type: "list", items: ["Use a low-privilege test profile when possible.", "Review shell commands before running an agent-led installer in a sensitive environment.", "Confirm the browser and operating system are currently supported."] },
        ],
      },
      {
        id: "install",
        title: "Install the three components",
        blocks: [
          { type: "paragraph", html: "Install the bsk CLI using the current operating-system instructions, install the BrowserSkill extension, then run bsk install-skill so the supported agent harness can discover the BrowserSkill instructions." },
          { type: "list", items: ["Verify the CLI with bsk --version.", "Enable the extension in the profile you intend to automate.", "Start a fresh Claude Code, Codex or Cursor session after installing the skill."] },
        ],
      },
      {
        id: "test",
        title: "Run a safe first test",
        blocks: [
          { type: "paragraph", html: "Begin with a harmless public-page reading task. That proves the CLI, daemon, extension and skill can communicate before you involve authenticated accounts." },
          { type: "list", items: ["Next, test a non-destructive page inside a logged-in session.", "Use human takeover rather than trying to bypass a captcha or confirmation.", "Avoid payments, publishing, deletion or account-setting changes as a first test."] },
        ],
      },
      {
        id: "troubleshoot",
        title: "Troubleshooting the connection",
        blocks: [
          { type: "paragraph", html: "If the agent cannot see the skill, verify the install destination and restart the agent session. If the extension and CLI cannot connect, check the browser profile, extension state, local security software and localhost communication." },
          { type: "list", items: ["Separate CLI failures from agent skill-discovery failures.", "Keep the CLI and extension current from official sources.", "Return borrowed tabs when the task is complete and keep irreversible actions human-reviewed."] },
        ],
      },
    ],
    sources: [
      { label: "Tencent BrowserSkill repository", url: "https://github.com/Tencent/BrowserSkill" },
      { label: "BrowserSkill agent skill", url: "https://github.com/Tencent/BrowserSkill/blob/main/skill/SKILL.md" },
      { label: "BrowserSkill Chrome Web Store listing", url: "https://chromewebstore.google.com/detail/browserskill/hhcmgoofomhgciiibhipgmgkgnoenaoi" },
    ],
    relatedPaths: ["/blog/browserskill"],
  },
];
