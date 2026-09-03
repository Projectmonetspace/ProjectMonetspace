import type { BlogArticle } from "./blog-types.ts";

const sources = [
  { label: "Hugging Face WebGPU kernels announcement", url: "https://huggingface.co/blog/webgpu-kernels" },
  { label: "Hugging Face WebGPU kernel catalog", url: "https://huggingface.co/kernels?platform=webgpu" },
  { label: "Hugging Face GemmFastGelu WebGPU kernel card", url: "https://huggingface.co/kernels/webgpu-kernels/com.microsoft.GemmFastGelu" },
  { label: "@huggingface/kernels npm package", url: "https://www.npmjs.com/package/@huggingface/kernels" },
];

export const huggingFaceWebgpuKernelArticles: BlogArticle[] = [
  {
    status: "published",
    articleType: "main",
    cluster: "Hugging Face WebGPU Kernels",
    targetSearchIntent: "Understand Hugging Face's new WebGPU kernel system, what it does, how it works, availability, performance claims and practical use cases for local browser AI.",
    targetQuery: "Hugging Face WebGPU kernels",
    slug: "hugging-face-webgpu-kernels",
    title: "Hugging Face WebGPU Kernels: Local Browser AI Explained",
    metaTitle: "Hugging Face WebGPU Kernels: Local Browser AI Explained",
    metaDescription: "Hugging Face released 207 WebGPU kernels, a JavaScript loader and Fleet benchmarking. Here’s how the new browser-AI stack works and what its speed claims mean.",
    h1: "Hugging Face WebGPU Kernels: What @huggingface/kernels Means for Local AI",
    excerpt: "Hugging Face's new WebGPU kernel layer packages optimized browser GPU operations as versioned Hub artifacts, with a JavaScript loader and Fleet testing across real hardware.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "Browser window connected to modular WebGPU kernel blocks for local AI inference",
    sections: [
      {
        id: "what-launched",
        title: "What Hugging Face released",
        blocks: [
          { type: "paragraph", html: "Hugging Face announced a new low-level browser-AI stack on September 1, 2026: the preview <code>@huggingface/kernels</code> JavaScript package, an initial collection of 207 WebGPU kernels on the Hub and Fleet, an in-browser correctness and performance testing system." },
          { type: "paragraph", html: "This is infrastructure rather than a new model. The package gives JavaScript applications a way to load optimized GPU operations from versioned kernel repositories; a higher-level model runtime still has to integrate and dispatch those operations correctly." },
          { type: "note", html: "The launch should not be read as a claim that installing one package makes arbitrary LLM, image or video models browser-ready. Model support, memory use, preprocessing and runtime integration remain separate concerns." },
        ],
      },
      {
        id: "kernel-system",
        title: "How the WebGPU kernel system works",
        blocks: [
          { type: "paragraph", html: "A browser AI workload is ultimately composed of many smaller operations such as matrix multiplication, normalization, attention-related transforms and data-layout changes. WebGPU supplies a portable browser GPU API, while WGSL is the shader language used for those GPU operations." },
          { type: "paragraph", html: "Hugging Face packages each operation as a reusable Hub artifact instead of hiding every shader inside one runtime. A kernel repository can include a manifest describing inputs, outputs, attributes, type constraints and shape rules, plus correctness cases, benchmark cases, metadata and WGSL shader templates." },
          { type: "list", items: ["Versioned operation contracts", "Inspectible correctness and benchmark cases", "Kernel-specific type and device requirements", "WGSL implementations that runtimes can select without changing the application-facing contract"] },
        ],
      },
      {
        id: "javascript-api",
        title: "The @huggingface/kernels JavaScript API",
        blocks: [
          { type: "paragraph", html: "Hugging Face currently documents installation with <code>npm install @huggingface/kernels@preview</code>. The preview tag matters: teams should pin and test a specific version instead of assuming the interface is stable." },
          { type: "paragraph", html: "The documented loader calls <code>getKernel</code> with a Hub repository ID and a kernel contract version. Hugging Face's minimal example loads <code>webgpu-kernels/ai.onnx.Add</code> with <code>{ version: 1 }</code>; that version identifies the published kernel contract rather than an ONNX opset or model revision." },
          { type: "note", html: "For the current install command, support check, typed-tensor call pattern and production fallback guidance, continue to <a href=\"/blog/how-to-use-huggingface-webgpu-kernels\">How to Use @huggingface/kernels for WebGPU AI in JavaScript</a>." },
        ],
      },
      {
        id: "performance",
        title: "What the performance claims actually show",
        blocks: [
          { type: "paragraph", html: "Hugging Face reports that it compared the new collection with ONNX Runtime Web WebGPU on an Apple M4 GPU. From 1,756 original cases across 207 operations, it retained 809 where both implementations produced matching outputs and reliable timings." },
          { type: "paragraph", html: "Across those operation-level comparisons, Hugging Face reports a 2.57× geometric-mean speedup and 1.90× median speedup, with 629 wins, 176 losses and four ties." },
          { type: "note", html: "These are vendor-reported operation benchmarks, not end-to-end model guarantees. Hugging Face says the measurements exclude setup costs such as loading kernels, session creation, input uploads, shader compilation and result readback, and that exact performance varies across GPUs and browsers." },
        ],
      },
      {
        id: "fleet-webgpu",
        title: "Why Fleet and WebGPU variability matter",
        blocks: [
          { type: "paragraph", html: "WebGPU behavior depends on the browser, operating system, GPU and driver. Hugging Face explicitly recommends checking availability in JavaScript with <code>\"gpu\" in navigator</code> rather than assuming universal support." },
          { type: "paragraph", html: "Fleet runs correctness and performance checks directly in the browser. With user consent, those runs contribute private evidence that Hugging Face can use to identify device-specific failures, slow paths and better kernel variants across a wider hardware set than one benchmark machine can represent." },
          { type: "paragraph", html: "That makes Fleet important to the architecture: a kernel can be portable and correct yet still perform very differently across hardware, browsers and driver stacks." },
        ],
      },
      {
        id: "practical-use",
        title: "What this means for local browser AI",
        blocks: [
          { type: "paragraph", html: "The practical opportunity is a more inspectable and replaceable low-level layer for client-side inference. Better kernels can reduce GPU bottlenecks for supported workloads without forcing every application to carry its own bespoke shader set." },
          { type: "paragraph", html: "For creator and web-product teams, that could help make browser-side embeddings, classification, vision utilities, media analysis and other supported inference tasks more practical while reducing server dependence for some workflows." },
          { type: "paragraph", html: "The important caveat is scope: local GPU execution can improve privacy and infrastructure economics only when the rest of the application is also designed accordingly. Models, prompts, analytics, assets or fallback services may still use the network." },
        ],
      },
      {
        id: "open-source-status",
        title: "License, maturity and production readiness",
        blocks: [
          { type: "paragraph", html: "The WebGPU kernel cards identify the released kernels as Apache-2.0 licensed. Their contracts, test cases, benchmark cases and WGSL implementations are exposed on the Hub for inspection." },
          { type: "paragraph", html: "The JavaScript package is still documented with the preview npm tag, so production teams should treat the ecosystem as early-stage: pin versions, test target devices, profile complete model workloads and maintain fallbacks where WebGPU is unavailable or underperforms." },
          { type: "paragraph", html: "Hugging Face describes the 207-kernel collection as a starting point and says it intends to connect the low-level layer to higher-level model tooling over time." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/how-to-use-huggingface-webgpu-kernels"],
  },
  {
    status: "published",
    articleType: "supporting",
    cluster: "Hugging Face WebGPU Kernels",
    targetSearchIntent: "Install and use Hugging Face's WebGPU kernel loader in a JavaScript browser application, check compatibility, load a kernel and validate performance safely.",
    targetQuery: "how to use @huggingface/kernels",
    parentSlug: "hugging-face-webgpu-kernels",
    slug: "how-to-use-huggingface-webgpu-kernels",
    title: "How to Use @huggingface/kernels for WebGPU AI in JavaScript",
    metaTitle: "How to Use @huggingface/kernels for WebGPU AI",
    metaDescription: "Install Hugging Face's new WebGPU kernel loader, check browser support, load a versioned kernel and benchmark it safely in a JavaScript app.",
    h1: "How to Use @huggingface/kernels for WebGPU AI in JavaScript",
    excerpt: "A source-checked implementation guide to the current preview package, WebGPU capability checks, getKernel, typed tensors, kernel cards, benchmarking and fallbacks.",
    category: "AI",
    author: "Project Monet Editorial Team",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    ogAlt: "JavaScript getKernel code connected to a browser GPU for Hugging Face WebGPU AI",
    sections: [
      {
        id: "requirements",
        title: "1. Check that WebGPU is available",
        blocks: [
          { type: "paragraph", html: "The kernels require WebGPU. Hugging Face warns that support varies by browser, operating system, GPU and driver, so capability detection belongs in the application rather than in a compatibility assumption." },
          { type: "paragraph", html: "The documented JavaScript check is <code>\"gpu\" in navigator</code>. If WebGPU is unavailable, disable the client-side feature gracefully or route the workload to a tested fallback." },
          { type: "note", html: "WebGPU existing on a device does not guarantee that every kernel, dtype or performance target will work the same way across hardware." },
        ],
      },
      {
        id: "install-load",
        title: "2. Install the preview package and load a kernel",
        blocks: [
          { type: "paragraph", html: "Hugging Face currently documents <code>npm install @huggingface/kernels@preview</code>. Because the package is preview-stage, pin the exact version you validate before shipping production code." },
          { type: "paragraph", html: "Import <code>getKernel</code> from <code>@huggingface/kernels</code>, then request a Hub kernel by repository ID. The launch example uses <code>webgpu-kernels/ai.onnx.Add</code> with <code>{ version: 1 }</code>." },
          { type: "paragraph", html: "The contract version is independent of ONNX opsets, operator since_version values and model revisions. Treat the exact kernel repository and contract version as part of your dependency surface." },
        ],
      },
      {
        id: "typed-tensors",
        title: "3. Pass typed tensors and read the kernel card",
        blocks: [
          { type: "paragraph", html: "Kernel calls receive typed arrays plus tensor shapes. For the Add example, Hugging Face passes Float32Array inputs with shapes, then the loader uses the manifest contract to derive the output shape and logical dtype and allocate the result." },
          { type: "paragraph", html: "Read the card for the exact kernel before integrating it. Kernel cards document semantics, inputs, outputs, supported data types, attributes, device requirements and a ready-to-run usage pattern." },
          { type: "note", html: "Do not assume that every operator supports every dtype or device feature. Individual cards can explicitly omit types such as bfloat16 even when the broader operator family supports them elsewhere." },
        ],
      },
      {
        id: "package-artifacts",
        title: "4. Understand the versioned kernel package",
        blocks: [
          { type: "paragraph", html: "A published WebGPU kernel repository can contain <code>manifest.json</code> for the operation contract, <code>metadata.json</code> for identifiers and provenance, <code>test.json</code> for correctness cases, <code>bench.json</code> for benchmark cases and parameterized WGSL shader templates." },
          { type: "paragraph", html: "That packaging makes the implementation inspectable and gives runtimes a stable application-facing contract while optimized variants evolve behind it." },
          { type: "paragraph", html: "Use the exact repository artifacts as the source of truth when behavior differs from a general framework assumption." },
        ],
      },
      {
        id: "benchmark",
        title: "5. Benchmark the actual application",
        blocks: [
          { type: "paragraph", html: "Hugging Face reports a 2.57× geometric-mean and 1.90× median speedup over ONNX Runtime Web WebGPU across 809 comparable operation cases on an Apple M4 GPU." },
          { type: "paragraph", html: "Do not turn that into a full-model promise. Hugging Face excludes several end-to-end costs from the benchmark and says performance varies across operations, devices and browsers." },
          { type: "paragraph", html: "Use Fleet and your own profiling to measure loading, shader compilation, data transfer, execution and result readback on the devices your users actually have." },
        ],
      },
      {
        id: "fallback-privacy",
        title: "6. Design fallbacks and privacy claims carefully",
        blocks: [
          { type: "list", items: ["WebGPU available and the kernel performs well", "WebGPU available but a device/browser combination has a compatibility problem", "WebGPU unavailable", "Client-side execution is slower or more memory-intensive than a server or alternate-runtime fallback"] },
          { type: "paragraph", html: "Possible fallbacks include CPU/WASM paths, another runtime, a server-side path or disabling the feature with a clear explanation. The right choice depends on latency, privacy, cost and device coverage." },
          { type: "paragraph", html: "Local GPU operations can reduce the need to send inference data to a server, but <code>@huggingface/kernels</code> alone does not make an application private or offline. Audit model downloads, prompts, analytics and other network services before making privacy claims." },
        ],
      },
      {
        id: "stack",
        title: "7. Know where the package fits in the stack",
        blocks: [
          { type: "paragraph", html: "A useful mental model is: web application → model/runtime → @huggingface/kernels → versioned Hub kernel → WebGPU → local GPU." },
          { type: "paragraph", html: "The package sits near the bottom of the browser-AI stack. It provides optimized operations; it does not replace tokenization, preprocessing, model orchestration or application logic." },
          { type: "note", html: "For the broader release, architecture, benchmark interpretation and ecosystem context, return to the <a href=\"/blog/hugging-face-webgpu-kernels\">main Hugging Face WebGPU Kernels overview</a>." },
        ],
      },
    ],
    sources,
    relatedPaths: ["/blog/hugging-face-webgpu-kernels"],
  },
];
