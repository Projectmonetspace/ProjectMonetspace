import type { BlogArticle } from "./blog-types.ts";

export const lensVlm9bArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Apple LensVLM-9B",
    targetSearchIntent: "Broad overview of Apple's LensVLM-9B release, capabilities, availability, usage, licensing and benchmarks",
    targetQuery: "Apple LensVLM-9B",
    slug: "apple-lensvlm-9b",
    title: "Apple LensVLM-9B: Download, Features, Local Setup & Benchmarks",
    metaTitle: "Apple LensVLM-9B: Download, Features & Local Setup",
    metaDescription: "Apple LensVLM-9B is an open-weight 9B document VLM that compresses pages and selectively expands relevant text. See downloads, setup, licensing and limits.",
    h1: "Apple LensVLM-9B: Open-Weight Document VLM Explained",
    excerpt: "A guide to Apple's LensVLM-9B weights, selective context expansion, local serving, licensing and reported benchmarks.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Long document pages compressed and selectively expanded for Apple LensVLM-9B",
    sections: [
      { id: "model", title: "What is Apple LensVLM-9B?", blocks: [
        { type: "paragraph", html: "Apple publishes LensVLM-9B through its verified Hugging Face organization. It is a 9-billion-parameter vision-language model derived from Qwen3.5-9B and designed for question answering over long, text-heavy documents." },
        { type: "paragraph", html: "Its core technique is selective context expansion: inspect compressed page representations first, then expand only pages likely to contain the answer. Apple's reference workflow documents 5x, 10x and 15x compression settings." }
      ]},
      { id: "download-license", title: "Download, code and licensing", blocks: [
        { type: "paragraph", html: "The official model identifier is apple/LensVLM-9B on Hugging Face, with apple-aiml-research/ml-lensvlm as the reference repository. The model weights use the Apple Machine Learning Research Model License." },
        { type: "paragraph", html: "The reference source code is separately licensed under Apple's Sample Code License. Publicly downloadable weights therefore should not be described as Apache-2.0 or automatically unrestricted for every commercial use; teams should review the actual terms." }
      ]},
      { id: "serving", title: "Local serving and API options", blocks: [
        { type: "paragraph", html: "Apple's reference repository is the safest starting point when you need the full selective-expansion document workflow. Hugging Face also documents model loading or serving with Transformers, vLLM, SGLang and Docker Model Runner." },
        { type: "paragraph", html: "No Apple-hosted LensVLM API was verified, and the official Hugging Face page currently shows no Inference Provider. vLLM or SGLang can expose a self-hosted OpenAI-compatible endpoint, but that endpoint is operated by you rather than Apple." }
      ]},
      { id: "benchmarks", title: "What the reported benchmarks show", blocks: [
        { type: "paragraph", html: "The LensVLM paper reports 68.9% question-answering accuracy and 76.8% page-selection accuracy for the 9B configuration in one scale experiment, compared with 31.3% QA accuracy for the listed 9B base condition." },
        { type: "paragraph", html: "Those are author-reported research results and depend on the paper's datasets and setup. They should not be generalized into a claim that LensVLM is universally more accurate or cheaper than every OCR, parser or document-RAG system." }
      ]},
      { id: "limits", title: "Hardware, GGUF and practical limits", blocks: [
        { type: "paragraph", html: "Apple does not publish one simple official minimum-RAM or minimum-VRAM table in the reviewed model card. Runtime memory depends on precision, vision components, context, KV cache and the serving framework." },
        { type: "paragraph", html: "Community GGUF conversions exist, but they are third-party artifacts rather than Apple releases. Validate quantized output against the official BF16/reference workflow and do not turn raw file size into an unsupported hardware guarantee." }
      ]}
    ],
    sources: [
      { label: "Apple — LensVLM-9B model card", url: "https://huggingface.co/apple/LensVLM-9B" },
      { label: "Apple ML Research — LensVLM repository", url: "https://github.com/apple-aiml-research/ml-lensvlm" },
      { label: "LensVLM research paper", url: "https://arxiv.org/abs/2605.07019" },
      { label: "Apple Hugging Face organization", url: "https://huggingface.co/apple" }
    ],
    relatedPaths: ["/blog/lensvlm-9b-local-install"]
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Apple LensVLM-9B",
    targetSearchIntent: "Install and serve Apple's LensVLM-9B locally, understand the official reference workflow and distinguish official weights from community GGUF conversions",
    targetQuery: "how to run LensVLM-9B locally",
    parentSlug: "apple-lensvlm-9b",
    slug: "lensvlm-9b-local-install",
    title: "How to Run Apple LensVLM-9B Locally: vLLM, SGLang & GGUF",
    metaTitle: "Run LensVLM-9B Locally: vLLM, SGLang & GGUF Guide",
    metaDescription: "Run Apple LensVLM-9B locally with its reference code, Transformers, vLLM or SGLang. Learn what is official, what GGUFs are community-made, and hardware caveats.",
    h1: "How to Run Apple LensVLM-9B Locally",
    excerpt: "Run LensVLM-9B with Apple's reference workflow or serve it through Transformers, vLLM or SGLang.",
    category: "AI",
    author: "Mayank",
    datePublished: "2026-09-25",
    dateModified: "2026-09-25",
    ogAlt: "Local LensVLM-9B document workflow with reference code, vLLM, SGLang and community GGUF",
    sections: [
      { id: "reference", title: "Start with Apple's reference implementation", blocks: [
        { type: "paragraph", html: "The official model is apple/LensVLM-9B. When the goal is to reproduce LensVLM's selective document expansion rather than simply load the base VLM, begin with Apple's ml-lensvlm repository and its documented demo workflow." },
        { type: "paragraph", html: "The reference workflow accepts a document, question and compression setting. Apple documents 5x, 10x and 15x modes, which makes the reference implementation the right baseline before optimizing for a different serving stack." }
      ]},
      { id: "servers", title: "Transformers, vLLM and SGLang", blocks: [
        { type: "paragraph", html: "Hugging Face documents LensVLM-9B with its image-text-to-text Transformers interfaces. It also shows vLLM serving and an OpenAI-compatible chat-completions path for applications that already use that protocol." },
        { type: "paragraph", html: "SGLang is another documented serving option, and Hugging Face also exposes a Docker Model Runner path. These are self-hosted integrations; none of them creates an Apple-managed LensVLM API." }
      ]},
      { id: "gguf", title: "Community GGUF conversions are not official Apple releases", blocks: [
        { type: "paragraph", html: "Community members have published LensVLM-9B GGUF conversions at multiple quantization levels. Those files can be useful for memory-constrained experiments but are separate third-party artifacts with their own compatibility and quality considerations." },
        { type: "paragraph", html: "A GGUF file's raw size is not the full runtime requirement. Multimodal projection handling, context, KV cache and framework overhead can add memory, and some conversions may not reproduce Apple's complete selective-expansion workflow." }
      ]},
      { id: "hardware", title: "Hardware guidance without invented minimums", blocks: [
        { type: "paragraph", html: "Apple does not publish one universal minimum VRAM or RAM requirement for LensVLM-9B in the reviewed launch material. BF16 weights are substantially larger than low-bit community quantizations, but actual serving memory depends on the runtime and workload." },
        { type: "paragraph", html: "Benchmark the exact model representation, context length, image/document workload and server framework. Avoid claims such as runs on any 8 GB GPU unless a tested configuration and its limitations are documented." }
      ]},
      { id: "choice", title: "Which local route should you choose?", blocks: [
        { type: "paragraph", html: "Use Apple's repository when you need the research workflow and selective page expansion. Use vLLM or SGLang for an application server, and use Transformers for direct Python integration." },
        { type: "paragraph", html: "Consider community GGUF only when you are prepared to validate multimodal behavior and quality yourself. If a generic loader works but the document workflow behaves differently from the paper demo, compare it against Apple's reference implementation before diagnosing the model." }
      ]}
    ],
    sources: [
      { label: "Apple — LensVLM-9B model card", url: "https://huggingface.co/apple/LensVLM-9B" },
      { label: "Apple ML Research — LensVLM repository", url: "https://github.com/apple-aiml-research/ml-lensvlm" },
      { label: "Community GGUF — prithivMLmods", url: "https://huggingface.co/prithivMLmods/LensVLM-9B-GGUF" },
      { label: "Community GGUF — bartowski", url: "https://huggingface.co/bartowski/LensVLM-9B-GGUF" }
    ],
    relatedPaths: ["/blog/apple-lensvlm-9b"]
  }
];
