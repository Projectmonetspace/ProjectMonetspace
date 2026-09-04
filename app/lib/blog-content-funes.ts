import type { BlogArticle } from "./blog-types.ts";

const funesSources = [
  { label: "Hugging Face — Give Your Coding Agents a Memory You Own", url: "https://huggingface.co/blog/funes" },
  { label: "Hugging Face — funes GitHub repository", url: "https://github.com/huggingface/funes" },
  { label: "Hugging Face — Funes indexing documentation", url: "https://github.com/huggingface/funes/blob/main/docs/index.md" },
  { label: "Hugging Face — Agent traces as memory", url: "https://huggingface.co/blog/huggingface/agent-traces-as-memory" },
];

const published = "2026-09-04";

export const funesArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Hugging Face Funes",
    targetSearchIntent: "Broad overview of what Funes is, supported agents, local and shared memory architecture, privacy boundaries, setup path, benchmark claims and limitations",
    targetQuery: "Hugging Face Funes",
    slug: "hugging-face-funes",
    title: "Hugging Face Funes: Local Memory for Claude Code & Codex",
    metaTitle: "Hugging Face Funes: Local Memory for Claude Code & Codex",
    metaDescription: "Hugging Face Funes gives Claude Code, Codex, pi and Hermes durable searchable memory. See how local indexing, Hub sharing, privacy and recall work.",
    h1: "Hugging Face Funes: Durable Memory for Coding Agents",
    excerpt: "Funes is an Apache-2.0 local-first memory layer that indexes prior coding-agent sessions and makes their original evidence searchable across Claude Code, Codex, pi and Hermes.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: published,
    dateModified: published,
    ogAlt: "Funes connecting multiple coding-agent sessions to a durable local memory index",
    sections: [
      {
        id: "what-it-is",
        title: "What Hugging Face Funes is",
        blocks: [
          { type: "paragraph", html: "Hugging Face released <strong>Funes</strong> on September 3, 2026 as a durable memory layer for coding agents. It is not a new model or agent: it indexes session traces already on your machine and lets supported agents retrieve past decisions, rationale and findings later." },
          { type: "paragraph", html: "The live repository lists Claude Code, Codex, pi and Hermes. All four normalize into one memory shape, so recall can cross agent boundaries while preserving the source agent, session, timestamp and turn." },
        ],
      },
      {
        id: "architecture",
        title: "How local recall works",
        blocks: [
          { type: "paragraph", html: "Funes parses supported traces into a common turn-and-block format, chunks them, embeds them with a pinned local model and stores them in a local Lance dataset. Retrieval combines vector and BM25 search, reranking and recency weighting." },
          { type: "paragraph", html: "The agent gets <code>recall</code> and <code>get</code> tools. Recall returns original passages rather than only a distilled fact, while get opens the full turn and surrounding context. That keeps provenance available instead of making a lossy summary the only surviving record." },
          { type: "paragraph", html: "For the exact install and integration flow, continue to the <a href=\"/blog/how-to-use-funes-claude-code-codex\">Funes setup guide for Claude Code and Codex</a>." },
        ],
      },
      {
        id: "sharing",
        title: "Local memory, Hub sharing and privacy",
        blocks: [
          { type: "paragraph", html: "Local recall does not require a Hugging Face account. Embedding and reranking run on the user's machine, while the connected coding agent still performs the reasoning." },
          { type: "paragraph", html: "A memory can optionally be bound to a Hugging Face dataset repository. The current project documentation says repositories created by Funes are private by default; existing dataset repositories keep their current visibility." },
          { type: "note", html: "Agent traces can contain credentials, customer data, proprietary code or internal decisions. Funes says it redacts credentials during indexing and runs an always-on secret gate before push, but teams should still review what they publish and treat automated detection as defense in depth rather than a guarantee." },
        ],
      },
      {
        id: "platforms",
        title: "Installation and current platform support",
        blocks: [
          { type: "paragraph", html: "The current README lists prebuilt binaries for Linux x86_64, Linux aarch64 and macOS Apple Silicon. It does not list a Windows prebuilt binary, so native Windows support should not be assumed." },
          { type: "paragraph", html: "The default Linux build requires glibc 2.35 or newer according to the repository's build notes. Building from source requires Rust and <code>protoc</code>." },
        ],
      },
      {
        id: "benchmark",
        title: "What the Funes benchmark does and does not prove",
        blocks: [
          { type: "paragraph", html: "Hugging Face published a small project-authored handoff-versus-recall test and reports recall was eight times cheaper than a written handoff on one task and four times cheaper on another." },
          { type: "paragraph", html: "Those numbers are vendor/project-reported results from two narrow tasks, not an independent general benchmark of coding-agent memory systems. They are useful evidence about the intended design, not a universal cost-savings guarantee." },
        ],
      },
      {
        id: "use-cases",
        title: "Where Funes is useful",
        blocks: [
          { type: "list", items: ["Recovering why an architecture choice was rejected", "Finding the root cause of a bug investigated in an older session", "Moving work from Claude Code to Codex without losing investigation history", "Sharing project memory across machines through a private dataset", "Preserving technical dead ends and intermediate reasoning that never made it into stable docs"] },
          { type: "paragraph", html: "Funes complements READMEs, ADRs and project instructions rather than replacing them. Curated docs are better for stable rules; searchable traces are better for recovering the path that led to a decision." },
        ],
      },
      {
        id: "faq",
        title: "Funes FAQ",
        blocks: [
          { type: "paragraph", html: "<strong>Is Funes open source?</strong> Yes. The official repository is licensed under Apache License 2.0." },
          { type: "paragraph", html: "<strong>Does Funes replace Claude Code or Codex?</strong> No. It adds searchable memory; the connected agent's own model still performs the reasoning." },
          { type: "paragraph", html: "<strong>Does Funes support Windows?</strong> The current prebuilt-binary table does not list Windows. Recheck the live repository for later additions." },
        ],
      },
    ],
    sources: funesSources,
    relatedPaths: ["/blog/how-to-use-funes-claude-code-codex"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Hugging Face Funes",
    targetSearchIntent: "Install Funes, connect it to Claude Code or Codex, build the first index, use recall/get/ask, optionally share memory through Hugging Face, and troubleshoot setup boundaries",
    targetQuery: "how to use Funes with Claude Code and Codex",
    parentSlug: "hugging-face-funes",
    slug: "how-to-use-funes-claude-code-codex",
    title: "How to Install and Use Funes with Claude Code & Codex",
    metaTitle: "How to Use Funes with Claude Code & Codex",
    metaDescription: "Install Hugging Face Funes, connect Claude Code or Codex, index past sessions, use recall/get, share memory safely and troubleshoot the current setup.",
    h1: "How to Install and Use Funes with Claude Code & Codex",
    excerpt: "A practical guide to installing Funes, connecting Claude Code or Codex, indexing old sessions, recalling prior evidence and sharing memory safely.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: published,
    dateModified: published,
    ogAlt: "Terminal workflow installing Funes and connecting Claude Code and Codex to shared coding-agent memory",
    sections: [
      {
        id: "install",
        title: "1. Install Funes on a supported platform",
        blocks: [
          { type: "paragraph", html: "The live repository currently publishes prebuilt binaries for Linux x86_64, Linux aarch64 and macOS Apple Silicon. Windows is not in the current prebuilt table." },
          { type: "code", language: "bash", code: "curl -fsSL https://huggingface.co/buckets/huggingface/funes/resolve/install.sh | sh\nfunes status" },
          { type: "paragraph", html: "The installer detects the platform, downloads the matching binary and verifies the tagged release checksum and version before placing it in <code>~/.local/bin</code> by default." },
        ],
      },
      {
        id: "connect",
        title: "2. Connect Claude Code or Codex",
        blocks: [
          { type: "code", language: "bash", code: "funes add claude\nfunes add codex" },
          { type: "paragraph", html: "The add command builds the first index and gives the agent <code>recall</code> and <code>get</code> tools. The current documentation says Claude, Codex and Hermes also receive automation that keeps the index current as work continues." },
          { type: "paragraph", html: "Claude Code and Codex can write into the same Funes memory, which is what enables cross-agent recall." },
        ],
      },
      {
        id: "index",
        title: "3. Index existing sessions",
        blocks: [
          { type: "code", language: "bash", code: "funes index\nfunes index --harness codex" },
          { type: "paragraph", html: "With no path, Funes sweeps the supported session directories it finds. The current docs list Claude Code projects, Codex sessions, pi sessions and Hermes state as known sources." },
          { type: "paragraph", html: "A manual index is useful when seeding old project history or diagnosing why expected sessions are missing." },
        ],
      },
      {
        id: "recall",
        title: "4. Recall and inspect prior evidence",
        blocks: [
          { type: "code", language: "bash", code: "funes recall \"why did we change the streaming parser\"" },
          { type: "paragraph", html: "Recall returns ranked original passages with provenance. Use the get command or tool identifiers from a live recall result to reopen the full turn and nearby context." },
          { type: "paragraph", html: "For the broader architecture, release context and benchmark limitations, read the <a href=\"/blog/hugging-face-funes\">main Hugging Face Funes overview</a>." },
        ],
      },
      {
        id: "ask-share",
        title: "5. Ask a memory or share it across machines",
        blocks: [
          { type: "code", language: "bash", code: "funes ask claude \"why is funes append-only\" --memory huggingface/funes-memory\nfunes push your-name/funes-memory\nfunes recall \"question\" --memory your-name/funes-memory" },
          { type: "paragraph", html: "Funes-created dataset repositories are private by default. Existing repositories retain their current visibility, so always verify the destination before pushing sensitive traces." },
          { type: "note", html: "Funes redacts credentials during indexing and has a separate secret gate before publishing, but coding-agent traces can contain more kinds of sensitive information than a secret scanner can reliably classify." },
        ],
      },
      {
        id: "troubleshoot",
        title: "6. Troubleshooting and update checks",
        blocks: [
          { type: "code", language: "bash", code: "funes status\nfunes update" },
          { type: "list", items: ["Confirm the expected agent traces exist locally", "Run a manual or harness-scoped index if recall misses old work", "Verify the integration created by funes add is still present", "Check dataset identity, credentials and visibility for shared memory", "Confirm your platform is listed in the current release table", "On Linux, note the documented glibc 2.35+ requirement for the default build"] },
          { type: "paragraph", html: "Because Funes is new, recheck the repository and release notes before deploying it across production developer machines." },
        ],
      },
      {
        id: "workflow",
        title: "A practical Claude Code to Codex workflow",
        blocks: [
          { type: "paragraph", html: "Use Claude Code to investigate a difficult bug, let Funes index the session, then open Codex later and ask about the prior decision. The second agent can retrieve the original Claude Code evidence instead of re-running the same investigation from scratch." },
          { type: "paragraph", html: "Keep durable project rules in normal documentation. Use Funes for the messy historical context—failed experiments, intermediate reasoning and conversations—that is otherwise easy to lose." },
        ],
      },
    ],
    sources: funesSources,
    relatedPaths: ["/blog/hugging-face-funes"],
  },
];
