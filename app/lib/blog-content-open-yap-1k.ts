import type { BlogArticle } from "./blog-types.ts";

const openYap1kSources = [
  { label: "The Agentic Data Company — Open Yap 1K", url: "https://theagenticdatacompany.com/open-yap-1k" },
  { label: "Open Yap 1K Data Use Agreement", url: "https://theagenticdatacompany.com/open-yap-1k/license" },
  { label: "Hugging Face — Open Yap 1K release", url: "https://huggingface.co/blog/TheAgenticDataCompany/open-yap-1k" },
  { label: "Hugging Face — Open Yap 1K sample", url: "https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k" },
];

export const openYap1kArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Open Yap 1K",
    targetSearchIntent: "Understand what Open Yap 1K is, what the sample and full corpus contain, how access and licensing work, and where the dataset fits in full-duplex voice AI.",
    targetQuery: "Open Yap 1K",
    slug: "open-yap-1k",
    title: "Open Yap 1K: 1,000-Hour Full-Duplex Speech Dataset Explained",
    metaTitle: "Open Yap 1K: 1,000-Hour Full-Duplex Speech Dataset",
    metaDescription: "Open Yap 1K is a 1,000-hour dual-channel English conversation dataset for full-duplex voice AI. See specs, access, licensing, use cases and limits.",
    h1: "Open Yap 1K: The 1,000-Hour Full-Duplex Speech Dataset Explained",
    excerpt: "Open Yap 1K is a newly released 1,000-hour English conversational speech corpus built around separate synchronized speaker channels, natural overlap and real turn-taking behavior.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Two synchronized conversational audio waveforms representing Open Yap 1K's dual-channel full-duplex speech dataset",
    sections: [
      { id: "what-is-open-yap-1k", title: "What is Open Yap 1K?", blocks: [
        { type: "paragraph", html: "Open Yap 1K is a dual-channel dataset of natural English two-speaker conversations released by The Agentic Data Company. The full release contains 1,000 hours across 1,602 conversations and 239 speakers." },
        { type: "paragraph", html: "Each speaker is recorded on a separate channel aligned to the same timeline. That preserves interruptions, overlap, backchannels, laughter and short turn-taking gaps instead of collapsing both sides into one mixed track." },
      ]},
      { id: "specs", title: "Open Yap 1K specs", blocks: [
        { type: "list", items: ["1,000 hours in the full corpus", "1,602 conversations", "239 unique speakers", "English two-speaker natural conversation", "channel-separated audio on a shared timeline", "word-level machine-generated transcripts"] },
        { type: "paragraph", html: "The publisher documents 48 kHz audio for the release. The full corpus is described as 16-bit PCM, while the public Hugging Face sample uses 48 kHz, 16-bit FLAC. The transcripts are generated with Deepgram Nova-3 and are not human-verified." },
      ]},
      { id: "why-full-duplex-matters", title: "Why the dual-channel format matters", blocks: [
        { type: "paragraph", html: "Full-duplex voice systems need to handle more than clean alternating turns. They must decide when to speak, when to wait, how to react to backchannels and what to do when a user interrupts." },
        { type: "paragraph", html: "Separate synchronized tracks make those behaviors directly observable. The publisher reports a median turn-taking gap of 580 milliseconds, median overlap equal to 8.3% of voiced time and a median 11.9 turns per minute; these remain vendor-reported corpus statistics." },
      ]},
      { id: "access", title: "Sample versus full-corpus access", blocks: [
        { type: "paragraph", html: "Hugging Face hosts an 8.9-hour sample from 16 conversations and eight speakers. The sample is hand-picked rather than a random statistical draw from the full corpus and is listed under CC BY 4.0." },
        { type: "paragraph", html: "The complete 1,000-hour corpus is a separate request-based release. The Agentic Data Company says anyone may request access and that approved recipients receive either a direct download or delivery into their own S3 bucket under the Open Yap 1K Data Use Agreement." },
      ]},
      { id: "license", title: "Commercial use and licensing", blocks: [
        { type: "paragraph", html: "The current full-corpus agreement permits commercial and research use, model training, fine-tuning, evaluation and deployment of trained models. The agreement is separate from the sample's CC BY 4.0 license." },
        { type: "note", html: "The agreement prohibits redistributing, resharing, sublicensing or reselling the dataset, attempting to identify speakers, and creating voice clones or other generative reproductions identifiable as a corpus speaker. Read the live agreement before production use." },
      ]},
      { id: "uses-and-limits", title: "Use cases and important limits", blocks: [
        { type: "paragraph", html: "The release is relevant to full-duplex speech-to-speech systems, expressive text-to-speech, turn-taking research, endpointing and long-form audio understanding. The data format can help teams study overlapping speech without first reconstructing who spoke when from a mixed signal." },
        { type: "paragraph", html: "Open Yap 1K is English-only, its transcripts are machine-generated, the public sample is intentionally hand-picked and full-corpus access is request-gated. The dataset does not provide one universal model-training recipe, hardware requirement or benchmark guarantee." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Open Yap 1K is notable because its 1,000 hours preserve the conversational timing that full-duplex voice systems must learn: overlap, interruptions, backchannels and rapid turn-taking on separate aligned channels." },
        { type: "paragraph", html: "For the exact download paths, sample/full license split and current commercial-use restrictions, use the dedicated access guide linked below." },
      ]},
    ],
    sources: openYap1kSources,
    relatedPaths: ["/blog/open-yap-1k-download-license"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Open Yap 1K",
    targetSearchIntent: "Obtain the Open Yap 1K sample or full corpus and understand the license, commercial-use permissions, delivery model, and restrictions before using it.",
    targetQuery: "Open Yap 1K download",
    parentSlug: "open-yap-1k",
    slug: "open-yap-1k-download-license",
    title: "How to Access Open Yap 1K: Download, License & Commercial Use",
    metaTitle: "Open Yap 1K Download, License & Commercial Use Guide",
    metaDescription: "How to get Open Yap 1K, what is downloadable on Hugging Face, how full-corpus access works, and what the commercial-use agreement permits and forbids.",
    h1: "How to Access Open Yap 1K: Download, License and Commercial Use",
    excerpt: "Open Yap 1K has two access paths: a public 8.9-hour Hugging Face sample under CC BY 4.0 and a request-gated 1,000-hour corpus under a separate Data Use Agreement.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-07",
    dateModified: "2026-09-07",
    ogAlt: "Open Yap 1K access comparison showing an 8.9-hour Hugging Face sample and a request-based 1,000-hour full corpus",
    sections: [
      { id: "two-access-paths", title: "There are two Open Yap 1K access paths", blocks: [
        { type: "paragraph", html: "The public Hugging Face repository contains an 8.9-hour sample under CC BY 4.0. The full 1,000-hour corpus is available separately by request under the Open Yap 1K Data Use Agreement." },
        { type: "paragraph", html: "Do not treat the Hugging Face license badge as the license for all 1,000 hours. The sample and full corpus have different access and licensing terms." },
      ]},
      { id: "download-sample", title: "1. Download the Hugging Face sample", blocks: [
        { type: "paragraph", html: "The sample contains 16 conversations, 8.9 hours and eight speakers. The repository includes both synchronized speaker tracks, transcripts and metadata and is listed under CC BY 4.0." },
        { type: "paragraph", html: "The publisher documents downloading the WebDataset shards with the Hugging Face CLI using the dataset repository TheAgenticDataCompany/open-yap-1k. Recheck the live repository before automating around exact file names because repository structure can change." },
      ]},
      { id: "request-full-corpus", title: "2. Request the full 1,000-hour corpus", blocks: [
        { type: "paragraph", html: "For the complete corpus, submit an access request explaining who you are, what you are building and how the audio will be used. The publisher reviews requests and says approved recipients receive portal access." },
        { type: "paragraph", html: "Delivery is currently described as either a direct download or transfer into the recipient's own S3 bucket. The publisher says replies are usually sent within a few hours, which should be treated as a vendor-stated expectation rather than a guaranteed SLA." },
      ]},
      { id: "license-split", title: "3. Keep the sample and full-corpus licenses separate", blocks: [
        { type: "paragraph", html: "The Hugging Face sample is listed under CC BY 4.0. The full corpus uses the Open Yap 1K Data Use Agreement and is currently offered at no charge for commercial and research use." },
        { type: "paragraph", html: "The full agreement permits training, fine-tuning, evaluation, benchmarking, deployment and commercialization of models and outputs, subject to its restrictions." },
      ]},
      { id: "restrictions", title: "4. Understand the restrictions", blocks: [
        { type: "list", items: ["do not redistribute, reshare, sublicense or resell the full dataset", "do not attempt to identify a speaker or link a recording to external records", "do not create voice clones or generative reproductions identifiable as a corpus speaker", "protect the dataset at least as strongly as your own confidential material"] },
        { type: "note", html: "This article summarizes current publisher terms and is not legal advice. The live agreement governs, so review it before using the corpus in a commercial or regulated system." },
      ]},
      { id: "team-access", title: "5. Handle team and contractor access carefully", blocks: [
        { type: "paragraph", html: "The agreement permits internal copies and access for staff and contractors operating under the same terms. A practical deployment should keep the raw corpus in controlled storage and grant access only to people who need it." },
        { type: "paragraph", html: "Avoid mirroring the raw corpus into public buckets, model repositories or broadly shared drives. Keep the applicable agreement version alongside the data so the licensing boundary survives internal handoffs." },
      ]},
      { id: "data-quality", title: "6. Account for data-quality boundaries", blocks: [
        { type: "paragraph", html: "The transcripts are machine-generated with Deepgram Nova-3 and are not human-verified. The public sample is hand-picked, so its distributions should not be assumed to represent the full corpus." },
        { type: "paragraph", html: "The publisher also notes that some sample tracks are stored in 48 kHz containers even when Bluetooth recording hardware does not preserve usable energy across the full theoretical bandwidth. Inspect effective-bandwidth metadata before making signal-quality assumptions." },
      ]},
      { id: "bottom-line", title: "Bottom line", blocks: [
        { type: "paragraph", html: "Use the Hugging Face sample for quick inspection and prototyping. Request the full corpus when you need the 1,000-hour release and are prepared to operate under the separate Data Use Agreement." },
        { type: "paragraph", html: "For the broader dataset structure, conversational statistics, use cases and limitations, return to the main Open Yap 1K overview." },
      ]},
    ],
    sources: openYap1kSources,
    relatedPaths: ["/blog/open-yap-1k"],
  },
];
