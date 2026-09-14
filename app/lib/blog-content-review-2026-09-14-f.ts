import type { BlogArticle } from "./blog-types.ts";

export const reviewArticles20260914F: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "ElevenLabs Music v2.5",
    "targetSearchIntent": "Integrate ElevenLabs Music v2.5 in an application, understand paid access and pricing, and avoid model-ID/version mistakes",
    "targetQuery": "ElevenLabs Music v2.5 API",
    "parentSlug": "elevenlabs-music-v2-5",
    "slug": "elevenlabs-music-v2-5-api",
    "title": "ElevenLabs Music v2.5 API Guide: Setup, Pricing & Model ID",
    "metaTitle": "ElevenLabs Music v2.5 API: Setup, Pricing & Model ID",
    "metaDescription": "A practical guide to the ElevenLabs Music v2.5 API: access requirements, current pricing, SDKs, endpoints, streaming and the important model-ID transition caveat.",
    "h1": "ElevenLabs Music v2.5 API Guide: Setup, Pricing and Model ID",
    "excerpt": "ElevenLabs says Music v2.5 is live in the ElevenLabs API, making the September 2026 model update relevant not only to creators using the web interface but also to developers building music generation into products.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "ElevenLabs Music v2.5 API Guide: Setup, Pricing and Model ID — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs says Music v2.5 is live in the ElevenLabs API, making the September 2026 model update relevant not only to creators using the web interface but also to developers building music generation into products."
          },
          {
            "type": "paragraph",
            "html": "There is one important implementation detail to understand before copying code: ElevenLabs now lists music_v2_5 as the model ID for Music v2.5. Older examples can still show music_v2, so production integrations should explicitly select music_v2_5 when v2.5 behavior is required."
          }
        ]
      },
      {
        "id": "who-can-use-the-music-api",
        "title": "Who can use the Music API?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs documents Music API access for paid subscribers. Free users can generate in ElevenMusic on the website, but API access is a separate entitlement."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters when estimating product cost: a creator experimenting in the web UI and a developer shipping an API-backed feature are not using the same access path."
          }
        ]
      },
      {
        "id": "current-api-pricing",
        "title": "Current API pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs' current API pricing page lists Eleven Music at $0.15 per minute, excluding taxes. Pricing can change, so production systems should treat the live pricing page as the source of truth."
          },
          {
            "type": "paragraph",
            "html": "The ElevenCreative subscription product uses a different credit model. ElevenLabs currently lists Music at roughly 900 credits per minute inside the shared monthly credit pool. Do not mix the web-product credit system with API dollar pricing when modeling costs."
          }
        ]
      },
      {
        "id": "basic-integration-path",
        "title": "Basic integration path",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs provides official SDKs for Python and JavaScript/TypeScript, plus direct HTTP access. The public Music API page shows generation through the ElevenLabs client and documents the endpoint under the v1 Music API."
          },
          {
            "type": "paragraph",
            "html": "A typical integration flow is:"
          },
          {
            "type": "list",
            "items": [
              "create an ElevenLabs account on a paid plan that includes API access;",
              "create and securely store an API key;",
              "install the official SDK or call the HTTP API directly;",
              "send a prompt plus generation parameters;",
              "receive or stream the generated audio;",
              "store or deliver the result according to the Music terms that apply to the project."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "Never embed a secret API key in client-side browser code. Route requests through a trusted backend or other secure server-side environment."
          }
        ]
      },
      {
        "id": "model-id-the-v2-5-transition-caveat",
        "title": "Model ID: the v2.5 transition caveat",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This is the most important documentation gap around the launch. ElevenLabs' September 11 announcement says Music v2.5 is live in the API, while current public code examples still show modelId: \"music_v2\" or model_id=\"music_v2\"."
          },
          {
            "type": "paragraph",
            "html": "That can mean the service is updating behavior behind an existing identifier, documentation is in transition, or a newer identifier is available in a reference not surfaced by older examples. The public material reviewed here is not enough to safely assert which interpretation is correct."
          },
          {
            "type": "paragraph",
            "html": "For production code, inspect the live API/model reference and available model list at deployment time. Do not hard-code a guessed music_v2_5 identifier."
          }
        ]
      },
      {
        "id": "python-and-javascript-support",
        "title": "Python and JavaScript support",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs provides official Python and JavaScript/TypeScript SDKs. The public Music API examples show composing tracks from a prompt and setting a requested duration."
          },
          {
            "type": "paragraph",
            "html": "The practical benefit of using an official SDK is simpler authentication and typed request handling. Direct HTTP can be preferable when integrating from another language or infrastructure that already has a generic API client."
          }
        ]
      },
      {
        "id": "streaming",
        "title": "Streaming",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs documents Music streaming. Its guide shows a stream call that returns audio chunks as they are generated. This is useful for interactive products where playback should begin before an entire track is complete."
          },
          {
            "type": "paragraph",
            "html": "Streaming does not make music generation equivalent to low-latency speech synthesis. ElevenLabs describes Music as a generation workload with processing time proportional to content length, so teams should test end-to-end latency for their actual use case."
          }
        ]
      },
      {
        "id": "prompt-and-reference-workflows",
        "title": "Prompt and reference workflows",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Music supports text-prompt generation and, in the broader ElevenMusic product, reference-audio workflows. ElevenLabs says Music v2.5 is the default for prompted and reference generation in ElevenMusic."
          },
          {
            "type": "paragraph",
            "html": "Reference inputs introduce additional rights considerations. ElevenLabs screens uploaded reference material for copyright compliance in supported workflows, and tracks built on another artist's song can be subject to download restrictions."
          }
        ]
      },
      {
        "id": "cost-example",
        "title": "Cost example",
        "blocks": [
          {
            "type": "paragraph",
            "html": "At the currently listed API rate of $0.15 per generated minute, ten generated minutes would cost $1.50 before taxes. This is simple arithmetic from the published per-minute rate, not a separate ElevenLabs pricing tier."
          },
          {
            "type": "paragraph",
            "html": "Real product cost can be higher because users may regenerate several attempts before keeping one track. A product should budget against generated minutes, not only final downloaded minutes."
          }
        ]
      },
      {
        "id": "commercial-use-considerations",
        "title": "Commercial-use considerations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "API availability does not automatically grant every commercial use. ElevenLabs maintains Music-specific terms and notes that some advertising, film, TV, games and enterprise distribution scenarios can require additional rights or plan coverage."
          },
          {
            "type": "paragraph",
            "html": "Developers building customer-facing products should verify both the API subscription and the Music licensing terms that match the end use."
          }
        ]
      },
      {
        "id": "production-checklist",
        "title": "Production checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before launch, verify the live model identifier, current per-minute price, generation limits, rate limits, output format, rights for the intended use case and how failed/retried generations are billed. Also add usage logging so your application can reconcile generation volume with ElevenLabs billing analytics."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is Music v2.5 available in the API?"
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs says yes in its September 11, 2026 launch announcement."
          },
          {
            "type": "subheading",
            "text": "What is the Music v2.5 API model ID?"
          },
          {
            "type": "paragraph",
            "html": "The launch announcement does not provide a distinct identifier, while current public examples still show music_v2. Check the live API reference rather than guessing."
          },
          {
            "type": "subheading",
            "text": "How much does the Music API cost?"
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs currently lists Music at $0.15 per generated minute, excluding taxes."
          },
          {
            "type": "subheading",
            "text": "Can Free users use the API?"
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs documents Music API access for paid subscribers."
          },
          {
            "type": "subheading",
            "text": "Does the API support streaming?"
          },
          {
            "type": "paragraph",
            "html": "Yes. ElevenLabs publishes an official Music streaming guide."
          },
          {
            "type": "subheading",
            "text": "Can I commercially use API-generated music?"
          },
          {
            "type": "paragraph",
            "html": "Possibly, but rights depend on subscription tier and use case. Check the current Music terms before shipping a commercial product."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "elevenlabs.io — music v2 5 model",
        "url": "https://elevenlabs.io/blog/music-v2-5-model"
      },
      {
        "label": "elevenlabs.io — what is eleven music",
        "url": "https://elevenlabs.io/docs/help-center/product/core-capabilities/music/what-is-eleven-music"
      },
      {
        "label": "elevenlabs.io — eleven music api",
        "url": "https://elevenlabs.io/eleven-music-api"
      },
      {
        "label": "elevenlabs.io — api",
        "url": "https://elevenlabs.io/pricing/api"
      },
      {
        "label": "elevenlabs.io — pricing",
        "url": "https://elevenlabs.io/pricing"
      },
      {
        "label": "elevenlabs.io — music",
        "url": "https://elevenlabs.io/docs/overview/capabilities/music"
      },
      {
        "label": "elevenlabs.io — streaming",
        "url": "https://elevenlabs.io/docs/eleven-api/guides/how-to/music/streaming"
      },
      {
        "label": "elevenlabs.io — music",
        "url": "https://elevenlabs.io/music"
      }
    ],
    "relatedPaths": [
      "/blog/elevenlabs-music-v2-5"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "ElevenLabs Music v2.5",
    "targetSearchIntent": "Understand whether and how Music v2.5 output can be used commercially, including ownership, plan differences, attribution and reference/download restrictions",
    "targetQuery": "ElevenLabs Music v2.5 commercial use",
    "parentSlug": "elevenlabs-music-v2-5",
    "slug": "elevenlabs-music-v2-5-commercial-use",
    "title": "ElevenLabs Music v2.5 Commercial Use: Rights, Free Plan & Downloads",
    "metaTitle": "ElevenLabs Music v2.5 Commercial Use & Rights Explained",
    "metaDescription": "Can you use ElevenLabs Music v2.5 commercially? Here is what ElevenLabs says about ownership, Free-plan attribution, lossless downloads and licensing limits.",
    "h1": "ElevenLabs Music v2.5 Commercial Use: Ownership, Rights and Download Rules",
    "excerpt": "ElevenLabs' Music v2.5 launch makes an unusually direct promise to creators: the company says the tracks you make in ElevenMusic are yours. But that headline should not be read as 'every plan permits every commercial use with no conditions.'",
    "category": "Creator Tools",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "ElevenLabs Music v2.5 Commercial Use: Ownership, Rights and Download Rules — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs' Music v2.5 launch makes an unusually direct promise to creators: the company says the tracks you make in ElevenMusic are yours. But that headline should not be read as 'every plan permits every commercial use with no conditions.'"
          },
          {
            "type": "paragraph",
            "html": "The practical answer depends on the plan, the intended use and whether your generation references protected material."
          }
        ]
      },
      {
        "id": "what-elevenlabs-says-you-own",
        "title": "What ElevenLabs says you own",
        "blocks": [
          {
            "type": "paragraph",
            "html": "In the September 11, 2026 Music v2.5 announcement, ElevenLabs says every track created in ElevenMusic belongs to the user, including tracks made on Free. It also says the permissions attached to a track when it is created remain with that track if the account later downgrades or cancels."
          },
          {
            "type": "paragraph",
            "html": "That is creator-friendly, but ownership language and commercial licensing are not identical concepts. ElevenLabs separately maintains Music-specific terms and plan-specific commercial permissions."
          }
        ]
      },
      {
        "id": "can-free-users-use-music-v2-5-commercially",
        "title": "Can Free users use Music v2.5 commercially?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs' v2.5 launch says Free users can use what they make commercially as long as they credit ElevenMusic. That makes the Free plan more permissive than a simple personal-use-only tier."
          },
          {
            "type": "paragraph",
            "html": "However, creators should verify the current Music terms for the exact end use. A social video, a paid advertisement, a film soundtrack and enterprise product distribution can fall under different licensing conditions."
          }
        ]
      },
      {
        "id": "paid-plans-and-commercial-rights",
        "title": "Paid plans and commercial rights",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs' pricing and Music product pages distinguish commercial rights by plan. The Starter plan explicitly lists Music commercial use. Higher tiers add capacity and additional platform features."
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs' Music product material also says self-serve commercial use has limitations for certain categories, while Enterprise can cover broader uses. Because those boundaries can change, a client campaign or large distribution deal should be checked against the current Music terms rather than inferred from an old pricing screenshot."
          }
        ]
      },
      {
        "id": "lossless-downloads-in-music-v2-5",
        "title": "Lossless downloads in Music v2.5",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Music v2.5 expanded lossless downloads across plans. ElevenLabs says Free gets five lossless downloads per day and Pro gets 400 per month."
          },
          {
            "type": "paragraph",
            "html": "This is a download allowance, not a blanket licensing statement. A file being downloadable does not by itself determine whether every commercial distribution method is permitted."
          }
        ]
      },
      {
        "id": "the-artist-reference-restriction",
        "title": "The artist-reference restriction",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs makes one restriction especially clear in the v2.5 launch: if a track is built on another artist's song, you cannot download it."
          },
          {
            "type": "paragraph",
            "html": "That matters because Music supports reference-driven generation. Reference tools are intended to guide characteristics such as production style, instrumentation, tempo or mood, but ElevenLabs screens uploads for copyright compliance in supported workflows."
          },
          {
            "type": "paragraph",
            "html": "Creators should not treat reference generation as a shortcut for cloning or republishing copyrighted songs."
          }
        ]
      },
      {
        "id": "what-happens-if-terms-change-later",
        "title": "What happens if terms change later?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs says permissions that apply when a track is created stay with that track. According to the launch announcement, future term changes apply to new tracks from the point of change rather than retroactively changing the permissions of existing tracks."
          },
          {
            "type": "paragraph",
            "html": "For professional work, keep records of the account tier, applicable terms and generation date for important assets. That provides a better audit trail than relying on memory months later."
          }
        ]
      },
      {
        "id": "social-media-and-creator-use-cases",
        "title": "Social media and creator use cases",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For creators, likely uses include background music for Reels and short-form videos, branded social content, podcasts, YouTube videos and campaign concepts. Whether a specific sponsored post or advertisement is covered depends on the current license terms attached to the account and use case."
          },
          {
            "type": "paragraph",
            "html": "If content is being delivered to a client, document who generated the track, under which subscription, and what rights are being transferred or licensed to the client."
          }
        ]
      },
      {
        "id": "advertising-film-tv-and-games",
        "title": "Advertising, film, TV and games",
        "blocks": [
          {
            "type": "paragraph",
            "html": "ElevenLabs' API/product pages note additional licensing considerations for advertising, film, television, games and enterprise distribution. These are exactly the scenarios where a simple 'commercial use allowed' summary becomes risky."
          },
          {
            "type": "paragraph",
            "html": "For high-value campaigns or media distribution, check the current Music terms or obtain written clarification from ElevenLabs if the rights boundary is material to the project."
          }
        ]
      },
      {
        "id": "api-generated-music",
        "title": "API-generated music",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Music generated through the API is still subject to Music-specific licensing. A paid API subscription grants technical access; it should not be treated as proof that every downstream distribution use is automatically included."
          },
          {
            "type": "paragraph",
            "html": "Software platforms using Eleven Music should incorporate rights constraints into their own user terms and workflows rather than exposing generation without explaining downstream restrictions."
          }
        ]
      },
      {
        "id": "practical-rights-checklist",
        "title": "Practical rights checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before publishing or delivering a Music v2.5 track, verify: the plan used to generate it; whether attribution is required; whether the intended use is social/editorial, advertising, film/TV, games or enterprise distribution; whether any reference material was used; whether the track can be downloaded; and the Music terms in force on the generation date."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Do I own music generated with ElevenLabs Music v2.5?"
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs says tracks you create in ElevenMusic are yours, subject to the applicable Music terms."
          },
          {
            "type": "subheading",
            "text": "Can Free users use generated music commercially?"
          },
          {
            "type": "paragraph",
            "html": "The v2.5 launch says Free users can use creations commercially with credit to ElevenMusic. Verify current terms for the exact use case."
          },
          {
            "type": "subheading",
            "text": "Do paid plans remove all restrictions?"
          },
          {
            "type": "paragraph",
            "html": "No blanket statement should be made. Commercial permissions vary by plan and use case, and some categories can require broader licensing."
          },
          {
            "type": "subheading",
            "text": "Can I download a track based on another artist's song?"
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs says no; such tracks are blocked from download."
          },
          {
            "type": "subheading",
            "text": "If I cancel my subscription, do I lose rights to old tracks?"
          },
          {
            "type": "paragraph",
            "html": "ElevenLabs says the permissions attached to tracks when created remain with them after cancellation or downgrade."
          },
          {
            "type": "subheading",
            "text": "Should a brand use Music v2.5 for paid ads?"
          },
          {
            "type": "paragraph",
            "html": "Potentially, but brands should confirm the current plan/terms cover advertising before launch."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "elevenlabs.io — music v2 5 model",
        "url": "https://elevenlabs.io/blog/music-v2-5-model"
      },
      {
        "label": "elevenlabs.io — what is eleven music",
        "url": "https://elevenlabs.io/docs/help-center/product/core-capabilities/music/what-is-eleven-music"
      },
      {
        "label": "elevenlabs.io — eleven music api",
        "url": "https://elevenlabs.io/eleven-music-api"
      },
      {
        "label": "elevenlabs.io — api",
        "url": "https://elevenlabs.io/pricing/api"
      },
      {
        "label": "elevenlabs.io — pricing",
        "url": "https://elevenlabs.io/pricing"
      },
      {
        "label": "elevenlabs.io — music",
        "url": "https://elevenlabs.io/docs/overview/capabilities/music"
      },
      {
        "label": "elevenlabs.io — streaming",
        "url": "https://elevenlabs.io/docs/eleven-api/guides/how-to/music/streaming"
      },
      {
        "label": "elevenlabs.io — music",
        "url": "https://elevenlabs.io/music"
      }
    ],
    "relatedPaths": [
      "/blog/elevenlabs-music-v2-5"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Gemini app for Windows",
    "targetSearchIntent": "Understand the new Gemini Windows desktop app, its availability, core features, access path and how it differs from simply using Gemini in a browser",
    "targetQuery": "Gemini app for Windows",
    "slug": "gemini-windows-app",
    "title": "Gemini for Windows: Download, Features & How to Use It",
    "metaTitle": "Gemini for Windows: Download, Features & How to Use It",
    "metaDescription": "Google's Gemini app is now available globally on Windows 10 and 11. Learn what it does, how Alt + Space works, Spark, Google app connections, image/video creation and current limitations.",
    "h1": "Gemini for Windows: Features, Availability and How It Works",
    "excerpt": "Google launched a native Gemini app for Windows on September 10, 2026, bringing Gemini out of the browser and into a desktop interface designed to stay available while you work in other applications.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Gemini for Windows: Features, Availability and How It Works — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google launched a native Gemini app for Windows on September 10, 2026, bringing Gemini out of the browser and into a desktop interface designed to stay available while you work in other applications."
          },
          {
            "type": "paragraph",
            "html": "The app is available globally for Windows 10 and Windows 11. Google positions it as a lightweight desktop layer: press Alt + Space to open Gemini over your current work, or switch into the full app when you want a dedicated workspace."
          }
        ]
      },
      {
        "id": "what-is-the-gemini-app-for-windows",
        "title": "What is the Gemini app for Windows?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Windows app is a native desktop access point for Google's Gemini assistant. It combines quick overlay access with the broader Gemini workspace, so you can move between short questions and longer, multi-step work without keeping a browser tab in the foreground."
          },
          {
            "type": "paragraph",
            "html": "Google's launch announcement highlights three main jobs: instant help from anywhere on the desktop, deeper agentic work in the dedicated app, and creative generation for images and video."
          }
        ]
      },
      {
        "id": "alt-space-quick-access",
        "title": "Alt + Space quick access",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The most visible Windows-specific feature is the Alt + Space shortcut. Google says you can press it at any time to open Gemini over your active work."
          },
          {
            "type": "paragraph",
            "html": "That can be useful for jobs such as checking a fact in a document, brainstorming presentation titles, rewriting text or asking a question without switching away from the application already on screen."
          },
          {
            "type": "paragraph",
            "html": "The shortcut is a convenience layer, not evidence that Gemini can automatically inspect every app or every item on your screen. Use only the context and permissions the product explicitly exposes."
          }
        ]
      },
      {
        "id": "gemini-spark-inside-the-windows-app",
        "title": "Gemini Spark inside the Windows app",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The full app includes access to Gemini Spark, Google's agentic workflow for multi-step tasks. Google describes Spark as a 24/7 personal AI agent that can take on more involved work than a single prompt-response interaction."
          },
          {
            "type": "paragraph",
            "html": "Feature access can depend on account and plan. Google does not say in the launch post that every Windows user receives every Spark capability, so availability should be checked in the live app before relying on it for a workflow."
          }
        ]
      },
      {
        "id": "gmail-and-google-drive-context",
        "title": "Gmail and Google Drive context",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google says the Windows app can pull information from Google apps such as Gmail and Google Drive when you ask it to create summaries or complete other tasks."
          },
          {
            "type": "paragraph",
            "html": "That makes the desktop client potentially useful for knowledge work where the source material already lives in Google's ecosystem. Access still depends on your account, permissions and the connections available to Gemini. The announcement does not imply unrestricted access to all files or mail."
          }
        ]
      },
      {
        "id": "image-generation-with-nano-banana",
        "title": "Image generation with Nano Banana",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The app also provides image generation using Nano Banana. That means creators and marketers can generate visual concepts from the desktop without opening a separate image-generation product."
          },
          {
            "type": "paragraph",
            "html": "Useful workflows could include presentation concepts, campaign mockups, social graphics and early creative exploration. The actual output rights, limits and generation entitlements remain governed by the Gemini plan and product terms that apply to your account."
          }
        ]
      },
      {
        "id": "video-creation-with-gemini-omni",
        "title": "Video creation with Gemini Omni",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google says users can direct high-quality video with Gemini Omni from the Windows app. This makes the desktop client a single surface for text, images, agent tasks and video creation."
          },
          {
            "type": "paragraph",
            "html": "Do not assume universal video access simply because the desktop app is globally available: advanced media-generation features can have separate plan, quota or rollout requirements."
          }
        ]
      },
      {
        "id": "windows-10-and-windows-11-availability",
        "title": "Windows 10 and Windows 11 availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google explicitly states that the app is available globally for Windows 10 and Windows 11 and directs users to gemini.google/desktop for installation."
          },
          {
            "type": "paragraph",
            "html": "The launch post does not publish a detailed minimum RAM, CPU, GPU or free-storage requirement. Until Google exposes a current official requirements page, avoid relying on unofficial system-requirement lists."
          }
        ]
      },
      {
        "id": "is-the-gemini-windows-app-free",
        "title": "Is the Gemini Windows app free?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google's announcement does not introduce a separate standalone purchase price for the Windows application. That does not mean every feature inside it is free. Gemini's advanced models, agent features and media-generation tools can depend on account tier and usage limits."
          },
          {
            "type": "paragraph",
            "html": "The safest interpretation is that the desktop app is an access surface for Gemini; feature entitlements should be verified against the current Gemini plan tied to the user's account."
          }
        ]
      },
      {
        "id": "gemini-windows-app-vs-gemini-in-a-browser",
        "title": "Gemini Windows app vs Gemini in a browser",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The biggest confirmed difference is desktop convenience. The Windows app can be opened with Alt + Space and run alongside other applications instead of living only in a browser tab."
          },
          {
            "type": "paragraph",
            "html": "The dedicated app also brings Gemini's broader workspace, Spark and creative features into a native desktop surface. Google says additional native desktop capabilities will roll out over time, which means the gap between the Windows app and web experience may change."
          },
          {
            "type": "paragraph",
            "html": "A separate comparison page is not yet warranted because Google has not published enough stable, Windows-specific capability differences to support a deep standalone article without repetition."
          }
        ]
      },
      {
        "id": "what-google-has-not-confirmed-yet",
        "title": "What Google has not confirmed yet",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The launch leaves several details open: detailed hardware requirements, installer size, enterprise deployment controls, a Windows-specific pricing structure, and dates for future native capabilities."
          },
          {
            "type": "paragraph",
            "html": "Those gaps matter. They should be updated when Google publishes durable documentation rather than filled with estimates."
          }
        ]
      },
      {
        "id": "who-should-care",
        "title": "Who should care?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For creators, marketers and knowledge workers, the main value is reduced context switching. Quick access can help with copy, research and ideation; the full workspace can support longer tasks; and Nano Banana plus Gemini Omni can move visual work into the same desktop environment."
          },
          {
            "type": "paragraph",
            "html": "For businesses already using Gmail and Drive, the connected-workflow angle may be more important than the shortcut itself."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When did Gemini for Windows launch?"
          },
          {
            "type": "paragraph",
            "html": "Google announced the global Windows release on September 10, 2026."
          },
          {
            "type": "subheading",
            "text": "Which Windows versions are supported?"
          },
          {
            "type": "paragraph",
            "html": "Google says the app is available for Windows 10 and Windows 11."
          },
          {
            "type": "subheading",
            "text": "What is the Gemini Windows shortcut?"
          },
          {
            "type": "paragraph",
            "html": "Press Alt + Space to open Gemini over your current work."
          },
          {
            "type": "subheading",
            "text": "Can Gemini for Windows use Gmail and Google Drive?"
          },
          {
            "type": "paragraph",
            "html": "Google says the app can pull information from Google apps such as Gmail and Google Drive for supported tasks, subject to account permissions and available connections."
          },
          {
            "type": "subheading",
            "text": "Can it create images and videos?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Google highlights image generation with Nano Banana and video creation with Gemini Omni, although access to advanced generation features can vary by plan and entitlement."
          },
          {
            "type": "subheading",
            "text": "Does it include Gemini Spark?"
          },
          {
            "type": "paragraph",
            "html": "Google says the dedicated Windows workspace can access Gemini Spark for multi-step tasks. Check your account for current availability."
          },
          {
            "type": "subheading",
            "text": "What are the minimum hardware requirements?"
          },
          {
            "type": "paragraph",
            "html": "Google's launch article confirms Windows 10 and 11 but does not provide a detailed public hardware minimum. Use Google's live download/help pages rather than unofficial requirement lists."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "blog.google — gemini app now on windows",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-app-now-on-windows/"
      },
      {
        "label": "gemini.google — desktop",
        "url": "https://gemini.google/desktop"
      },
      {
        "label": "gemini.google — release notes",
        "url": "https://gemini.google/release-notes/"
      }
    ],
    "relatedPaths": [
      "/blog/how-to-use-gemini-windows"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Gemini app for Windows",
    "targetSearchIntent": "Install and use the Gemini Windows desktop app for quick access, agentic work, connected Google-app context and creative generation",
    "targetQuery": "how to use Gemini on Windows",
    "parentSlug": "gemini-windows-app",
    "slug": "how-to-use-gemini-windows",
    "title": "How to Use Gemini on Windows: Install, Alt + Space, Spark & Google Apps",
    "metaTitle": "How to Use Gemini on Windows: Install, Shortcut & Spark",
    "metaDescription": "A practical guide to using the Gemini Windows app: download it, open Gemini with Alt + Space, use the full workspace, connect Google context and create images or video.",
    "h1": "How to Use Gemini on Windows: Install, Alt + Space, Spark and Google Apps",
    "excerpt": "Google's Gemini app is now available globally for Windows 10 and Windows 11. The desktop release is built around two modes of use: a quick Alt + Space overlay for immediate help and a full Gemini workspace for longer tasks.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Use Gemini on Windows: Install, Alt + Space, Spark and Google Apps — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google's Gemini app is now available globally for Windows 10 and Windows 11. The desktop release is built around two modes of use: a quick Alt + Space overlay for immediate help and a full Gemini workspace for longer tasks."
          },
          {
            "type": "paragraph",
            "html": "This guide focuses on the practical workflow Google has actually documented and avoids guessing at hardware requirements or plan entitlements that have not been published for the Windows app."
          }
        ]
      },
      {
        "id": "1-download-gemini-for-windows",
        "title": "1. Download Gemini for Windows",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start at Google's official Gemini desktop page: gemini.google/desktop."
          },
          {
            "type": "paragraph",
            "html": "Google says the Windows app is available globally for Windows 10 and Windows 11. Use the official download path rather than third-party installers, mirrors or repackaged executables."
          },
          {
            "type": "paragraph",
            "html": "Google's launch announcement does not list a detailed RAM, CPU, GPU or storage minimum. If the installer reports a device requirement, treat the current Google installer/help text as the source of truth."
          }
        ]
      },
      {
        "id": "2-sign-in-with-the-google-account-you-use-for-gemini",
        "title": "2. Sign in with the Google account you use for Gemini",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After installation, sign in with the Google account you want tied to Gemini."
          },
          {
            "type": "paragraph",
            "html": "Your account matters because model access, Gemini Spark, media-generation tools and Google-app connections can depend on subscription, administrator policy, region and product entitlement. The desktop app's global availability does not guarantee that every feature is enabled for every account."
          }
        ]
      },
      {
        "id": "3-use-alt-space-for-quick-help",
        "title": "3. Use Alt + Space for quick help",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Press Alt + Space while working in another app to open Gemini over the active workspace."
          },
          {
            "type": "paragraph",
            "html": "Google gives examples such as checking a fact in a document or brainstorming presentation titles. The main benefit is avoiding a browser-tab switch when you need a short piece of assistance."
          },
          {
            "type": "paragraph",
            "html": "A good quick-access workflow is:"
          },
          {
            "type": "list",
            "items": [
              "keep your source material open in the application where you are working;",
              "press Alt + Space;",
              "ask a focused question or request a rewrite/idea;",
              "verify the result against the source material;",
              "return immediately to the original task."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "Do not assume Gemini automatically reads everything on screen. Provide or connect the context that the product explicitly supports."
          }
        ]
      },
      {
        "id": "4-move-to-the-full-gemini-workspace-for-deeper-work",
        "title": "4. Move to the full Gemini workspace for deeper work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For longer tasks, open the full app instead of relying on the overlay."
          },
          {
            "type": "paragraph",
            "html": "Google says the dedicated workspace provides the broader Gemini experience and can handle more involved work. This is the better surface for multi-step research, drafting, project summaries and creative tasks where you need an ongoing conversation."
          }
        ]
      },
      {
        "id": "5-use-gemini-spark-for-multi-step-tasks",
        "title": "5. Use Gemini Spark for multi-step tasks",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Windows app can access Gemini Spark, which Google describes as a personal AI agent for multi-step work."
          },
          {
            "type": "paragraph",
            "html": "Instead of asking for one small answer, structure a Spark task around an outcome: summarize a project, gather the relevant information, organize it and create a usable deliverable."
          },
          {
            "type": "paragraph",
            "html": "Keep sensitive or business-critical work within the permissions and data-handling policies your organization has approved. Spark availability may also vary by account."
          }
        ]
      },
      {
        "id": "6-pull-context-from-gmail-and-google-drive",
        "title": "6. Pull context from Gmail and Google Drive",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google specifically highlights Gmail and Google Drive as sources Gemini can use for supported tasks."
          },
          {
            "type": "paragraph",
            "html": "A practical example is a project summary: ask Gemini to pull together relevant information from connected Google apps, then review the result for missing or outdated context before sharing it."
          },
          {
            "type": "paragraph",
            "html": "This does not mean the Windows app bypasses Google permissions. It can only use data your signed-in account and enabled Gemini connections are allowed to access."
          }
        ]
      },
      {
        "id": "7-generate-images-with-nano-banana",
        "title": "7. Generate images with Nano Banana",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For visual work, the Windows app can generate images using Nano Banana."
          },
          {
            "type": "paragraph",
            "html": "Creators and marketers can use this for early concepts, presentation visuals, social ideas or campaign mockups. Write prompts around the intended output, audience, composition and constraints rather than asking only for a broad style."
          },
          {
            "type": "paragraph",
            "html": "For production use, verify the current generation limits, commercial terms and any brand/content policies tied to your Gemini plan."
          }
        ]
      },
      {
        "id": "8-create-video-with-gemini-omni",
        "title": "8. Create video with Gemini Omni",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Google also highlights video creation with Gemini Omni inside the desktop experience."
          },
          {
            "type": "paragraph",
            "html": "Use the full workspace when developing video concepts because iterative direction usually benefits from more context than the quick overlay. Specify the scene, subject, action, framing and desired output rather than treating video generation as a one-line prompt exercise."
          },
          {
            "type": "paragraph",
            "html": "Advanced video access may be plan- or quota-dependent. If Omni is not visible in your account, that is not evidence that the Windows app itself failed to install."
          }
        ]
      },
      {
        "id": "9-build-a-low-friction-desktop-workflow",
        "title": "9. Build a low-friction desktop workflow",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest use of the app is not simply 'Gemini, but in another window.' The Windows release is designed to reduce the friction between the task you are doing and the AI assistance you need."
          },
          {
            "type": "paragraph",
            "html": "Use Alt + Space for fast interventions; use the full workspace for agentic or creative work; use connected Google data only when it meaningfully improves the task; and keep final verification in the workflow for research, factual summaries and business decisions."
          }
        ]
      },
      {
        "id": "troubleshooting-availability",
        "title": "Troubleshooting availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If the official installer works but a specific feature is missing, separate app availability from feature entitlement. Google has confirmed the app globally on Windows 10 and 11, while individual capabilities can depend on the signed-in account and current Gemini plan."
          },
          {
            "type": "paragraph",
            "html": "Before assuming a bug, check whether the missing feature is available to your account on the web Gemini experience and review Google's current plan/help documentation."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Where do I download Gemini for Windows?"
          },
          {
            "type": "paragraph",
            "html": "Use Google's official desktop page at gemini.google/desktop."
          },
          {
            "type": "subheading",
            "text": "What keyboard shortcut opens Gemini?"
          },
          {
            "type": "paragraph",
            "html": "Google documents Alt + Space for opening Gemini over your active work."
          },
          {
            "type": "subheading",
            "text": "Can I use Gemini on Windows 10?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Google says the app is globally available for both Windows 10 and Windows 11."
          },
          {
            "type": "subheading",
            "text": "Can the Windows app use Gmail or Drive?"
          },
          {
            "type": "paragraph",
            "html": "Google says supported workflows can pull information from Google apps such as Gmail and Google Drive, subject to permissions and account availability."
          },
          {
            "type": "subheading",
            "text": "Can I generate images from the Windows app?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Google highlights Nano Banana image generation."
          },
          {
            "type": "subheading",
            "text": "Can I generate video?"
          },
          {
            "type": "paragraph",
            "html": "Google highlights Gemini Omni video creation, but advanced feature access can depend on your account or plan."
          },
          {
            "type": "subheading",
            "text": "Is Spark included?"
          },
          {
            "type": "paragraph",
            "html": "The app can access Gemini Spark for multi-step tasks. Confirm current availability in your account."
          },
          {
            "type": "subheading",
            "text": "Do I need a powerful GPU?"
          },
          {
            "type": "paragraph",
            "html": "Google's launch post does not publish a Windows-specific GPU requirement. Do not rely on guessed hardware lists; use the live official installer and documentation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "blog.google — gemini app now on windows",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-app-now-on-windows/"
      },
      {
        "label": "gemini.google — desktop",
        "url": "https://gemini.google/desktop"
      },
      {
        "label": "gemini.google — release notes",
        "url": "https://gemini.google/release-notes/"
      }
    ],
    "relatedPaths": [
      "/blog/gemini-windows-app"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Sakana Fugu Max & Fugu Ultra v2",
    "targetSearchIntent": "Broad overview of Sakana Fugu Max and Fugu Ultra v2 covering release, orchestration approach, API access, pricing, benchmarks, use cases and limitations",
    "targetQuery": "Sakana Fugu Max",
    "slug": "sakana-fugu-max-ultra-v2",
    "title": "Sakana Fugu Max & Fugu Ultra v2: Pricing, API & How They Work",
    "metaTitle": "Sakana Fugu Max & Fugu Ultra v2: Pricing, API & How They Work",
    "metaDescription": "Sakana AI's Fugu Max and Fugu Ultra v2 orchestrate multiple expert models behind one OpenAI-compatible API. See pricing, model IDs, features and limits.",
    "h1": "Sakana Fugu Max & Fugu Ultra v2: Features, Pricing and API",
    "excerpt": "Sakana AI released Fugu Max v1.0 and Fugu Ultra v2.0 on September 11, 2026, expanding its Fugu product from a single orchestration concept into clearer cost- and capability-focused options. Unlike a conventional foundation model that answers with one fixed model, Sakana Fugu i…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Sakana Fugu Max & Fugu Ultra v2: Features, Pricing and API — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana AI released Fugu Max v1.0 and Fugu Ultra v2.0 on September 11, 2026, expanding its Fugu product from a single orchestration concept into clearer cost- and capability-focused options. Unlike a conventional foundation model that answers with one fixed model, Sakana Fugu is an orchestration system: it coordinates a pool of expert models and decides how to route and combine work for each request."
          }
        ]
      },
      {
        "id": "what-launched",
        "title": "What launched?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fugu Max is the cost-performance-focused option. Sakana says it expands the available pool of open-weight and specialist models, including NVIDIA Nemotron models, and dynamically selects combinations intended to solve a task efficiently. Fugu Ultra v2 is the higher-capability option for difficult multi-step reasoning, autonomous research, visual/structured-data analysis and software engineering."
          },
          {
            "type": "paragraph",
            "html": "Both are available through Sakana's standard OpenAI-compatible API. Existing Fugu users can switch by changing the model parameter rather than rewriting their integration."
          }
        ]
      },
      {
        "id": "api-model-ids",
        "title": "API model IDs",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana's current pricing documentation lists fugu-max-v1.0 for Fugu Max and fugu-ultra-v2.0 for Fugu Ultra v2. Because the API is OpenAI-compatible, developers can point an existing compatible client or coding harness at Sakana's endpoint and select the desired model."
          },
          {
            "type": "paragraph",
            "html": "That compatibility reduces migration work, but it does not mean behavior is identical to an OpenAI model. Fugu may invoke multiple agents internally, so latency, cost structure and output characteristics can differ substantially from a single-model request."
          }
        ]
      },
      {
        "id": "fugu-max-pricing",
        "title": "Fugu Max pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana currently prices Fugu Max at $2 per million input tokens, $6 per million output tokens and $0.25 per million cached-input tokens. The price is fixed regardless of context length according to the current pricing page. Built-in web_search and web_fetch calls are billed separately at $0.007 per call."
          },
          {
            "type": "paragraph",
            "html": "These are first-party prices and can change, so production budgeting should always recheck Sakana's live pricing page."
          }
        ]
      },
      {
        "id": "fugu-ultra-v2-pricing",
        "title": "Fugu Ultra v2 pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fugu Ultra v2 costs $5 per million input tokens, $30 per million output tokens and $0.50 per million cached-input tokens at standard context lengths. For context above 272K tokens, Sakana lists $10 per million input tokens, $45 per million output tokens and $1 per million cached-input token."
          },
          {
            "type": "paragraph",
            "html": "The large jump in output cost reflects the product's positioning: Ultra v2 is intended for harder workloads where quality is prioritized over minimum token spend."
          }
        ]
      },
      {
        "id": "how-sakana-fugu-works",
        "title": "How Sakana Fugu works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana Fugu is based on model orchestration rather than a monolithic model. Sakana says its approach builds on its TRINITY and Conductor research, where a coordinator learns how to assemble, route and coordinate expert agents instead of relying on a manually designed fixed workflow."
          },
          {
            "type": "paragraph",
            "html": "The practical implication is that a request can be decomposed and delegated to different models. The system then combines the work into one result. Fugu Max emphasizes efficient combinations of models; Fugu Ultra uses a deeper fixed pool to maximize answer quality."
          },
          {
            "type": "paragraph",
            "html": "Sakana also says users of the standard Fugu product can opt specific models out of the pool for privacy and compliance reasons, while Fugu Max and Fugu Ultra use fixed pools. Enterprises needing custom provider restrictions are directed to contact Sakana."
          }
        ]
      },
      {
        "id": "fugu-max-vs-fugu-ultra-v2",
        "title": "Fugu Max vs Fugu Ultra v2",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Choose Fugu Max when cost-performance efficiency matters most and you still want orchestration across specialist models. Choose Fugu Ultra v2 when the task is difficult enough that higher output quality is worth a substantially higher token price."
          },
          {
            "type": "paragraph",
            "html": "That makes Max more natural for recurring coding, analysis, automation and agent workloads where usage can scale quickly. Ultra v2 is better positioned for complex research, difficult engineering tasks, long multi-step reasoning and high-value work where a weaker answer is more expensive than additional inference cost."
          },
          {
            "type": "paragraph",
            "html": "Neither option should be treated as universally superior. The right choice depends on the workload, acceptable latency, model-provider constraints, and how much value additional orchestration creates for that specific task."
          }
        ]
      },
      {
        "id": "benchmarks-what-sakana-claims",
        "title": "Benchmarks: what Sakana claims",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana reports that Fugu Max achieved the best overall score in its comparison on six benchmarks, including Terminal Bench 2.1, GPQAD, AA-LCR, GDP.pdf, AutomationBench and SWEFish. It also says Max expands the cost-performance Pareto frontier on seven of ten evaluated benchmarks."
          },
          {
            "type": "paragraph",
            "html": "For Fugu Ultra v2, Sakana highlights a 48.3 score on Chartography and 74.3 on DeepSWE, along with strong results on its SWEFish benchmark."
          },
          {
            "type": "paragraph",
            "html": "These results are useful evidence for how Sakana positions the products, but they are vendor-run evaluations. They should not be treated as independent proof that Fugu Max or Ultra v2 is universally better than Claude, GPT, Gemini, Kimi or another system. Real-world evaluation on representative workloads remains necessary."
          }
        ]
      },
      {
        "id": "why-the-release-matters",
        "title": "Why the release matters",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The interesting part of Fugu is not simply another model name. It is a different abstraction for buying AI capability. Instead of selecting one model and building orchestration yourself, developers can call one API model that decides which expert systems to involve internally."
          },
          {
            "type": "paragraph",
            "html": "If that approach works reliably, it creates a middle layer between model providers and applications: applications buy an outcome-oriented orchestration service while the provider changes the underlying model pool over time. That could reduce single-vendor dependency, but it also means developers give the orchestrator more control over which systems handle a request."
          }
        ]
      },
      {
        "id": "availability",
        "title": "Availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fugu Max and Fugu Ultra v2 are available now through Sakana's OpenAI-compatible API. Sakana also offers monthly subscription plans for lighter or interactive usage, while its token-based pay-as-you-go pricing is positioned for heavier production workloads."
          },
          {
            "type": "paragraph",
            "html": "The current product page lists Standard at $20/month, Pro at $100/month and Max at $200/month. Those subscription tiers are usage allowances for the Fugu service, not the same thing as the Fugu Max model name. The naming can be confusing, so users should distinguish the $200/month Max subscription tier from fugu-max-v1.0, the orchestration model billed by tokens in pay-as-you-go usage."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The exact model pool can evolve. Sakana publicly names some families, but developers should not assume every request uses a particular underlying model unless Sakana documents it. Fugu Max and Ultra use fixed pools, which may matter for regulated workloads. Sakana does not publish one universal latency figure, request-rate limit or guaranteed cost per completed task because internal orchestration can vary by prompt."
          },
          {
            "type": "paragraph",
            "html": "The benchmark results are first-party. Cost comparisons against competitor models also depend on the workload, number of generated tokens, tool usage and whether orchestration improves first-pass success enough to offset extra internal work."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is Sakana Fugu Max a single LLM?"
          },
          {
            "type": "paragraph",
            "html": "No. Sakana presents Fugu as a multi-agent orchestration system exposed as a model-like API. It coordinates other expert models behind one endpoint."
          },
          {
            "type": "subheading",
            "text": "What is the Fugu Max model ID?"
          },
          {
            "type": "paragraph",
            "html": "The current pricing page lists fugu-max-v1.0."
          },
          {
            "type": "subheading",
            "text": "What is the Fugu Ultra v2 model ID?"
          },
          {
            "type": "paragraph",
            "html": "The current pricing page lists fugu-ultra-v2.0."
          },
          {
            "type": "subheading",
            "text": "Is the API OpenAI-compatible?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Sakana says Fugu is available through an OpenAI-compatible API so existing compatible clients and coding harnesses can migrate with minimal integration changes."
          },
          {
            "type": "subheading",
            "text": "How much does Fugu Max cost?"
          },
          {
            "type": "paragraph",
            "html": "Current pay-as-you-go pricing is $2/M input tokens, $6/M output tokens and $0.25/M cached-input tokens. Web search and fetch tools cost extra."
          },
          {
            "type": "subheading",
            "text": "How much does Fugu Ultra v2 cost?"
          },
          {
            "type": "paragraph",
            "html": "Current standard pricing is $5/M input, $30/M output and $0.50/M cached input. Rates increase above 272K context."
          },
          {
            "type": "subheading",
            "text": "Which should I use?"
          },
          {
            "type": "paragraph",
            "html": "Fugu Max is the lower-cost, efficiency-focused choice; Fugu Ultra v2 prioritizes maximum quality on difficult work. Benchmark both on your own tasks before standardizing."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "sakana.ai — fugu max release",
        "url": "https://sakana.ai/fugu-max-release/"
      },
      {
        "label": "sakana.ai — fugu",
        "url": "https://sakana.ai/fugu/"
      },
      {
        "label": "console.sakana.ai — pricing",
        "url": "https://console.sakana.ai/pricing"
      },
      {
        "label": "console.sakana.ai — models",
        "url": "https://console.sakana.ai/models"
      },
      {
        "label": "sakana.ai — fugu release",
        "url": "https://sakana.ai/fugu-release/"
      }
    ],
    "relatedPaths": [
      "/blog/fugu-max-vs-fugu-ultra-v2",
      "/blog/sakana-fugu-max-api-pricing"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Sakana Fugu Max & Fugu Ultra v2",
    "targetSearchIntent": "Choose between Sakana Fugu Max and Fugu Ultra v2 using verified positioning, token prices, context pricing, model-pool constraints and workload fit without claiming a universal winner",
    "targetQuery": "Fugu Max vs Fugu Ultra v2",
    "parentSlug": "sakana-fugu-max-ultra-v2",
    "slug": "fugu-max-vs-fugu-ultra-v2",
    "title": "Fugu Max vs Fugu Ultra v2: Which Should You Use?",
    "metaTitle": "Fugu Max vs Fugu Ultra v2: Pricing, Features & Which to Use",
    "metaDescription": "Compare Sakana Fugu Max and Fugu Ultra v2 by pricing, workload fit, context costs and model-pool constraints. See which one to test for your use case.",
    "h1": "Fugu Max vs Fugu Ultra v2: Which Should You Use?",
    "excerpt": "Sakana AI now offers two clearly differentiated orchestration options for developers: Fugu Max and Fugu Ultra v2. Both sit behind Sakana's OpenAI-compatible API, but they target different optimization goals.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Fugu Max vs Fugu Ultra v2: Which Should You Use? — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana AI now offers two clearly differentiated orchestration options for developers: Fugu Max and Fugu Ultra v2. Both sit behind Sakana's OpenAI-compatible API, but they target different optimization goals."
          },
          {
            "type": "paragraph",
            "html": "The short answer is simple: Fugu Max is the better starting point when cost-performance matters; Fugu Ultra v2 is the better test when maximum result quality on difficult work matters more than token price. That is a product-positioning distinction, not a universal benchmark verdict."
          }
        ]
      },
      {
        "id": "fugu-max-vs-fugu-ultra-v2-at-a-glance",
        "title": "Fugu Max vs Fugu Ultra v2 at a glance",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fugu Max is designed around efficient orchestration across a larger pool of open-weight and specialist models. Fugu Ultra v2 is designed for harder multi-step reasoning, autonomous research, visual and structured-data analysis, and software-engineering work where Sakana prioritizes peak output quality."
          },
          {
            "type": "paragraph",
            "html": "Both use fixed model pools in their current form. Both are available through the same OpenAI-compatible Fugu API family. The biggest practical differences are price, orchestration objective and the kinds of workloads Sakana is optimizing for."
          }
        ]
      },
      {
        "id": "pricing-comparison",
        "title": "Pricing comparison",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana currently lists Fugu Max at:"
          },
          {
            "type": "list",
            "items": [
              "$2/M input tokens.",
              "$6/M output tokens.",
              "$0.25/M cached-input tokens."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Fugu Ultra v2 is currently:"
          },
          {
            "type": "list",
            "items": [
              "$5/M input tokens.",
              "$30/M output tokens.",
              "$0.50/M cached-input tokens."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "For context above 272K tokens, Ultra pricing increases to $10/M input, $45/M output and $1/M cached input. Sakana's pricing page says Fugu Max's listed rates remain fixed regardless of context length."
          },
          {
            "type": "paragraph",
            "html": "Both can also incur separate web_search or web_fetch charges, currently $0.007 per call."
          }
        ]
      },
      {
        "id": "what-those-rates-mean-in-practice",
        "title": "What those rates mean in practice",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The output-price gap is the most important difference for long-form and agentic workloads. Ultra v2's standard output price is five times Max's current output rate."
          },
          {
            "type": "paragraph",
            "html": "For illustration, a request using one million uncached input tokens and generating 250,000 output tokens would cost about $3.50 at Max's listed rates and $12.50 at Ultra's standard listed rates, before tool calls. The numbers are simple arithmetic from Sakana's published rates; they are not a guarantee of total cost per task."
          },
          {
            "type": "paragraph",
            "html": "If Ultra's stronger orchestration solves a difficult task in one pass that would otherwise require multiple failed attempts, the higher token rate could still be economically sensible. Conversely, if Max already clears your quality bar, paying Ultra's premium adds little value."
          }
        ]
      },
      {
        "id": "when-fugu-max-makes-more-sense",
        "title": "When Fugu Max makes more sense",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start with Fugu Max when your application has recurring or high-volume work and you need a strong quality-to-cost ratio. Natural candidates include coding assistance, routine analysis, content transformation, automation, back-office agents and research tasks where a slightly more expensive result is not automatically more valuable."
          },
          {
            "type": "paragraph",
            "html": "Sakana says Max expands its pool with open-weight and specialist models, including NVIDIA Nemotron models, and dynamically selects efficient combinations. That architecture is relevant to teams that want the benefits of model routing without operating the routing layer themselves."
          }
        ]
      },
      {
        "id": "when-fugu-ultra-v2-makes-more-sense",
        "title": "When Fugu Ultra v2 makes more sense",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Ultra v2 is more compelling when the cost of a weak result is high: difficult software tasks, deep autonomous research, complicated multi-step analysis, charts/structured-data reasoning or high-value strategic work."
          },
          {
            "type": "paragraph",
            "html": "Sakana positions Ultra v2 as the quality-first tier and reports strong results on benchmarks such as Chartography, DeepSWE and its SWEFish evaluation. Those are Sakana's own evaluations. They support the product positioning but do not prove Ultra wins every real-world workload."
          }
        ]
      },
      {
        "id": "benchmark-claims-need-context",
        "title": "Benchmark claims need context",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana reports that Fugu Max achieved the best overall score in its comparison on six benchmarks and improved the cost-performance Pareto frontier on seven of ten. It also highlights Ultra v2 scores including 48.3 on Chartography and 74.3 on DeepSWE."
          },
          {
            "type": "paragraph",
            "html": "These are vendor-run benchmark results. A buyer should not translate them into a blanket conclusion such as 'Ultra is better than Claude' or 'Max beats GPT.' Benchmark methodology, underlying model pools, task distributions and future model updates all matter."
          },
          {
            "type": "paragraph",
            "html": "The more useful question is whether Max or Ultra performs better on the exact tasks your application runs repeatedly."
          }
        ]
      },
      {
        "id": "context-length-pricing",
        "title": "Context-length pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One practical advantage of Max is pricing simplicity: the current page lists the same Max token rates regardless of context length. Ultra v2 introduces a higher price tier above 272K context."
          },
          {
            "type": "paragraph",
            "html": "Do not interpret 272K as Ultra's maximum context. It is a pricing threshold disclosed by Sakana, not a published hard context ceiling in the sources used here."
          },
          {
            "type": "paragraph",
            "html": "If your application regularly sends very large codebases, document collections or long agent histories, this surcharge can materially change the cost comparison and should be included in benchmarks."
          }
        ]
      },
      {
        "id": "privacy-and-model-provider-constraints",
        "title": "Privacy and model-provider constraints",
        "blocks": [
          {
            "type": "paragraph",
            "html": "There is an important operational tradeoff. Sakana says regular Fugu can let customers opt out of specific models in its pool, while Fugu Max and Fugu Ultra use fixed pools. Enterprise customers that need a custom configuration can contact Sakana."
          },
          {
            "type": "paragraph",
            "html": "That means teams in regulated environments should not choose Max or Ultra solely on quality and price. The acceptable set of underlying providers and data-handling terms may determine whether the product fits at all."
          }
        ]
      },
      {
        "id": "latency-do-not-assume-the-cheaper-tier-is-faster",
        "title": "Latency: do not assume the cheaper tier is faster",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana does not publish one universal latency figure that applies to every Fugu Max or Ultra request. Multi-agent orchestration can take different paths depending on a prompt."
          },
          {
            "type": "paragraph",
            "html": "Do not assume Max is automatically faster because it is cheaper, or that Ultra is always slower because it does more work. Measure end-to-end latency on representative requests and include retries, tools and time-to-acceptable-answer in the comparison."
          }
        ]
      },
      {
        "id": "a-practical-selection-framework",
        "title": "A practical selection framework",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use a simple evaluation instead of choosing from benchmark headlines:"
          },
          {
            "type": "list",
            "items": [
              "Collect 30–100 real tasks representative of production.",
              "Run the same tasks through Max and Ultra with the same application-level instructions.",
              "Record answer acceptance rate, human correction needed, latency, token use and tool calls.",
              "Separate easy/routine work from high-complexity work.",
              "Compare cost per accepted result, not only cost per token.",
              "Check provider/privacy requirements before deciding.",
              "Route only the tasks that genuinely benefit from Ultra to the higher-cost tier if a mixed strategy works better."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "This approach also avoids a false either/or decision. Some applications may use Max by default and escalate only the hardest tasks to Ultra."
          }
        ]
      },
      {
        "id": "which-should-creators-marketers-and-automation-teams-test-first",
        "title": "Which should creators, marketers and automation teams test first?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For most ProjectMonet.space-style workflows—marketing research, content systems, SEO analysis, automation and general business agents—Max is the more sensible first benchmark because its token rates are substantially lower and its goal is explicitly cost-performance."
          },
          {
            "type": "paragraph",
            "html": "Ultra becomes interesting when those workflows include difficult code generation, deep autonomous investigation, large structured datasets or tasks where a materially better answer has high business value."
          },
          {
            "type": "paragraph",
            "html": "That recommendation is based on the products' current positioning and pricing, not on a claim that Max or Ultra universally wins those categories."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is Fugu Max cheaper than Fugu Ultra v2?"
          },
          {
            "type": "paragraph",
            "html": "Yes under Sakana's current published token prices. Max is $2/M input and $6/M output; Ultra v2 is $5/M input and $30/M output at standard context lengths."
          },
          {
            "type": "subheading",
            "text": "Does Ultra v2 always produce better answers?"
          },
          {
            "type": "paragraph",
            "html": "No universal claim can be made. Sakana positions Ultra as quality-first and publishes vendor benchmark results, but workload-specific testing is still necessary."
          },
          {
            "type": "subheading",
            "text": "Does Max support long context without a surcharge?"
          },
          {
            "type": "paragraph",
            "html": "Sakana's current pricing page lists Max at fixed token rates regardless of context length. That is a pricing statement, not a claim about an unlimited context window."
          },
          {
            "type": "subheading",
            "text": "Can I exclude specific models from Max or Ultra?"
          },
          {
            "type": "paragraph",
            "html": "Sakana says Max and Ultra currently use fixed pools. Custom provider configurations are an enterprise discussion."
          },
          {
            "type": "subheading",
            "text": "Can one application use both?"
          },
          {
            "type": "paragraph",
            "html": "Yes in principle: both are exposed in the Fugu API family with separate model IDs. A team can benchmark or route workloads between them at the application level."
          },
          {
            "type": "subheading",
            "text": "Which one should I test first?"
          },
          {
            "type": "paragraph",
            "html": "Start with Max if you are cost-sensitive. Test Ultra on the subset of tasks where a quality improvement would justify the higher output price."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "sakana.ai — fugu max release",
        "url": "https://sakana.ai/fugu-max-release/"
      },
      {
        "label": "sakana.ai — fugu",
        "url": "https://sakana.ai/fugu/"
      },
      {
        "label": "console.sakana.ai — pricing",
        "url": "https://console.sakana.ai/pricing"
      },
      {
        "label": "console.sakana.ai — models",
        "url": "https://console.sakana.ai/models"
      },
      {
        "label": "sakana.ai — fugu release",
        "url": "https://sakana.ai/fugu-release/"
      }
    ],
    "relatedPaths": [
      "/blog/sakana-fugu-max-ultra-v2"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Sakana Fugu Max & Fugu Ultra v2",
    "targetSearchIntent": "Implement Sakana Fugu Max through its OpenAI-compatible API, understand model IDs and current token/tool pricing, and choose between Max and Ultra without inventing quotas or limits",
    "targetQuery": "Fugu Max API",
    "parentSlug": "sakana-fugu-max-ultra-v2",
    "slug": "sakana-fugu-max-api-pricing",
    "title": "Sakana Fugu Max API & Pricing Guide",
    "metaTitle": "Sakana Fugu Max API & Pricing: Model IDs, Costs & Setup",
    "metaDescription": "Use Sakana Fugu Max through its OpenAI-compatible API. See current model IDs, token pricing, tool charges, Ultra v2 costs and deployment caveats.",
    "h1": "Sakana Fugu Max API & Pricing Guide",
    "excerpt": "Sakana AI's Fugu Max can be used through the same OpenAI-compatible API surface as the rest of the Fugu family. That matters because teams already using an OpenAI-style client or coding harness can test Sakana's orchestration layer without rebuilding the entire application aro…",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Sakana Fugu Max API & Pricing Guide — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana AI's Fugu Max can be used through the same OpenAI-compatible API surface as the rest of the Fugu family. That matters because teams already using an OpenAI-style client or coding harness can test Sakana's orchestration layer without rebuilding the entire application around a proprietary SDK."
          },
          {
            "type": "paragraph",
            "html": "This guide focuses on the practical developer questions: which model IDs to use, what the current token prices are, how Fugu Max differs from Fugu Ultra v2, what extra tool charges exist, and what still needs to be verified before production deployment."
          }
        ]
      },
      {
        "id": "current-fugu-model-ids",
        "title": "Current Fugu model IDs",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana's live pricing documentation currently lists:"
          },
          {
            "type": "list",
            "items": [
              "fugu-max-v1.0 — the cost-performance-focused Fugu Max model.",
              "fugu-ultra-v2.0 — the higher-cost Fugu Ultra v2 model aimed at difficult reasoning, research and software-engineering workloads."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Sakana says the API is OpenAI-compatible. Existing Fugu users can move between compatible Fugu models by changing the model parameter rather than redesigning the integration. That is useful for A/B testing because the application layer can stay mostly constant while the orchestration mode changes."
          },
          {
            "type": "paragraph",
            "html": "OpenAI compatibility should not be read as behavioral equivalence. Fugu can coordinate multiple expert agents behind the endpoint, so response time, cost and answer structure may differ from a request handled by one foundation model."
          }
        ]
      },
      {
        "id": "fugu-max-api-pricing",
        "title": "Fugu Max API pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana currently lists Fugu Max at:"
          },
          {
            "type": "list",
            "items": [
              "Input: $2 per million tokens.",
              "Output: $6 per million tokens.",
              "Cached input: $0.25 per million tokens."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "The pricing page says those Fugu Max rates remain fixed regardless of context length. Built-in web_search and web_fetch are separate charges at $0.007 per call."
          },
          {
            "type": "paragraph",
            "html": "For a simple example, one million uncached input tokens plus 250,000 output tokens would cost $3.50 at those published rates before any tool calls: $2 for input plus $1.50 for output. That is an arithmetic illustration, not a promise about the total cost of completing a real task. Agentic systems can generate different amounts of output and invoke tools differently depending on the request."
          }
        ]
      },
      {
        "id": "fugu-ultra-v2-pricing",
        "title": "Fugu Ultra v2 pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fugu Ultra v2 currently has higher rates:"
          },
          {
            "type": "list",
            "items": [
              "Input: $5 per million tokens.",
              "Output: $30 per million tokens.",
              "Cached input: $0.50 per million tokens."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "For contexts above 272K tokens, Sakana currently lists higher Ultra rates:"
          },
          {
            "type": "list",
            "items": [
              "Input: $10 per million tokens.",
              "Output: $45 per million tokens.",
              "Cached input: $1 per million tokens."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Using the same one-million-input plus 250,000-output example at standard Ultra pricing produces $12.50 before tools: $5 input plus $7.50 output. Again, that is only a rate calculation; actual request cost depends on the real token mix, caching and tools."
          }
        ]
      },
      {
        "id": "why-the-pricing-difference-exists",
        "title": "Why the pricing difference exists",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fugu Max and Fugu Ultra v2 are not simply two quality settings on one LLM. Sakana describes them as different orchestration products with different model pools and objectives."
          },
          {
            "type": "paragraph",
            "html": "Fugu Max is designed to expand the cost-performance frontier by routing work across open-weight and specialist models. Fugu Ultra v2 is aimed at maximizing result quality on harder multi-step tasks. That makes the output-token price difference especially important for long-form research, coding or agent workflows that can generate large responses."
          }
        ]
      },
      {
        "id": "openai-compatible-integration-path",
        "title": "OpenAI-compatible integration path",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana states that Fugu is exposed through an OpenAI-compatible API and that existing Fugu users can switch models with a one-line model change. In practice, the safe migration process is:"
          },
          {
            "type": "list",
            "items": [
              "Keep your existing application logic unchanged where possible.",
              "Select the exact current Sakana model ID.",
              "Run representative test prompts against both your current model and Fugu.",
              "Compare answer quality, total token use, tool calls, latency and failure rate rather than only comparing list prices.",
              "Test long-context behavior separately if you intend to use Ultra above the 272K pricing threshold.",
              "Verify provider/privacy requirements before production because Fugu Max and Ultra use fixed model pools."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "The exact base URL, authentication details, request fields and any rate limits should be checked against Sakana's current API documentation at implementation time. They are operational details that can change and should not be reconstructed from old examples."
          }
        ]
      },
      {
        "id": "web-search-and-fetch-charges",
        "title": "Web search and fetch charges",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana's current pricing page lists both web_search and web_fetch at $0.007 per call. Those charges sit on top of model token usage."
          },
          {
            "type": "paragraph",
            "html": "This means two requests with identical input/output token counts can have different totals if one invokes search or fetch repeatedly. For research-heavy agents, tool calls therefore belong in the cost model rather than being treated as free functionality."
          }
        ]
      },
      {
        "id": "subscription-plans-vs-api-token-pricing",
        "title": "Subscription plans vs API token pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana's Fugu product page also advertises monthly plans: Standard at $20/month, Pro at $100/month and Max at $200/month. Those product plans should not be confused with the Fugu Max API model itself."
          },
          {
            "type": "paragraph",
            "html": "fugu-max-v1.0 is a model identifier with pay-as-you-go token pricing. The $200/month 'Max' plan is a service subscription tier. The shared use of the word Max can be confusing, so production documentation should name the model ID explicitly."
          }
        ]
      },
      {
        "id": "privacy-and-model-pool-caveat",
        "title": "Privacy and model-pool caveat",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Sakana says the standard Fugu product can let users opt out of specific models in the pool for privacy and compliance reasons. Fugu Max and Fugu Ultra use fixed pools. Teams with provider restrictions or regulated data therefore should not assume they can exclude an underlying provider on their own."
          },
          {
            "type": "paragraph",
            "html": "Sakana directs organizations that need custom provider configurations toward enterprise arrangements. Before using Fugu for sensitive workloads, verify the current model-pool, data-handling and contractual controls directly with Sakana."
          }
        ]
      },
      {
        "id": "what-is-not-publicly-fixed",
        "title": "What is not publicly fixed",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not build production assumptions around numbers Sakana has not published as universal guarantees. The current public material does not establish one universal latency number, request-per-minute quota, minimum monthly API spend or cost per completed task."
          },
          {
            "type": "paragraph",
            "html": "Those values can vary with account, prompt, orchestration path and future product changes. The reliable public numbers today are the token and tool-call rates listed in Sakana's live pricing documentation."
          }
        ]
      },
      {
        "id": "fugu-max-or-ultra-v2-for-api-workloads",
        "title": "Fugu Max or Ultra v2 for API workloads?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Fugu Max is the natural first test when you care about throughput economics and want orchestration without paying Ultra's higher output rate. Ultra v2 makes more sense when the value of a stronger result on difficult work outweighs the higher token price."
          },
          {
            "type": "paragraph",
            "html": "The best production choice is empirical: run the same representative workload through both, record total cost and success quality, and use the cheaper option only when it meets your quality threshold."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "What is the Fugu Max API model ID?"
          },
          {
            "type": "paragraph",
            "html": "fugu-max-v1.0 according to Sakana's current pricing page."
          },
          {
            "type": "subheading",
            "text": "What is the Fugu Ultra v2 model ID?"
          },
          {
            "type": "paragraph",
            "html": "fugu-ultra-v2.0."
          },
          {
            "type": "subheading",
            "text": "Is Fugu compatible with OpenAI clients?"
          },
          {
            "type": "paragraph",
            "html": "Sakana describes Fugu as OpenAI-compatible. Verify the current endpoint and request schema in Sakana's live docs before deployment."
          },
          {
            "type": "subheading",
            "text": "Does Fugu Max have long-context surcharges?"
          },
          {
            "type": "paragraph",
            "html": "Sakana's current pricing page says Fugu Max uses fixed rates regardless of context length. Ultra v2 has a higher pricing tier above 272K context."
          },
          {
            "type": "subheading",
            "text": "Are web search calls free?"
          },
          {
            "type": "paragraph",
            "html": "No. Sakana currently lists web_search and web_fetch at $0.007 per call."
          },
          {
            "type": "subheading",
            "text": "Is the $200/month Max plan the same as Fugu Max API pricing?"
          },
          {
            "type": "paragraph",
            "html": "No. The monthly Max subscription tier and the fugu-max-v1.0 API model are different concepts."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "sakana.ai — fugu max release",
        "url": "https://sakana.ai/fugu-max-release/"
      },
      {
        "label": "sakana.ai — fugu",
        "url": "https://sakana.ai/fugu/"
      },
      {
        "label": "console.sakana.ai — pricing",
        "url": "https://console.sakana.ai/pricing"
      },
      {
        "label": "console.sakana.ai — models",
        "url": "https://console.sakana.ai/models"
      },
      {
        "label": "sakana.ai — fugu release",
        "url": "https://sakana.ai/fugu-release/"
      }
    ],
    "relatedPaths": [
      "/blog/sakana-fugu-max-ultra-v2"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Widgo",
    "targetSearchIntent": "Understand what Widgo is, what its AI sales agent does on a website, how it qualifies and books visitors, what it costs, which integrations it supports, and whether it fits an inbound sales workflow",
    "targetQuery": "Widgo AI sales rep",
    "slug": "widgo-ai-sales-rep",
    "title": "Widgo AI Sales Rep: Pricing, Features & How It Works",
    "metaTitle": "Widgo AI Sales Rep: Pricing, Features & How It Works",
    "metaDescription": "Widgo is an AI sales rep for websites that answers from approved content, identifies and scores visitors, books demos and syncs CRM records. See pricing, features and limits.",
    "h1": "Widgo AI Sales Rep: Pricing, Features and How It Works",
    "excerpt": "Widgo is a website-based AI sales rep designed to engage inbound visitors while they are still on a company’s site. Instead of acting only as a support chatbot, Widgo combines four jobs: answering product questions from approved source material, identifying visitors and compan…",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Widgo AI Sales Rep: Pricing, Features and How It Works — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo is a website-based AI sales rep designed to engage inbound visitors while they are still on a company’s site. Instead of acting only as a support chatbot, Widgo combines four jobs: answering product questions from approved source material, identifying visitors and companies, qualifying intent, and offering real calendar slots inside the conversation."
          },
          {
            "type": "paragraph",
            "html": "The current Widgo product launched on Product Hunt on September 8, 2026, where it ranked #2 for the day. That launch is recent, but the underlying company/product lineage is older, including earlier Product Hunt launches under Paillor. This article covers the current Widgo sales-agent product rather than treating the company itself as newly created."
          }
        ]
      },
      {
        "id": "what-widgo-actually-does",
        "title": "What Widgo actually does",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo starts by reading a company’s website and building a knowledge base. Teams can add additional sources such as documentation, help-center pages and PDFs. Widgo says answers are generated only from approved company content and can include the source behind the response."
          },
          {
            "type": "paragraph",
            "html": "A typical flow is: a visitor asks a question; Widgo answers from the approved knowledge base; the session is enriched with company/person context where available; Widgo scores fit and intent from 0 to 100; and qualified visitors can be offered live calendar availability without leaving the chat."
          },
          {
            "type": "paragraph",
            "html": "That makes Widgo closer to an inbound AI SDR or conversational-sales layer than a generic support bot."
          }
        ]
      },
      {
        "id": "visitor-identification-and-qualification",
        "title": "Visitor identification and qualification",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo says it can turn anonymous sessions into identified company/person records, including company, role and intent signals. It then scores leads from 0 to 100 and exposes the reasoning behind that score."
          },
          {
            "type": "paragraph",
            "html": "The practical value is prioritization: a sales team can focus on the visitors who appear closest to buying instead of treating every chat as equivalent. The system can also route hot leads to Slack or Microsoft Teams."
          },
          {
            "type": "paragraph",
            "html": "These are vendor-described capabilities. Exact identification coverage will depend on geography, available enrichment data, browser/privacy controls and the information a visitor provides. Do not assume every anonymous visitor can be personally identified."
          }
        ]
      },
      {
        "id": "calendar-booking-inside-the-conversation",
        "title": "Calendar booking inside the conversation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo can surface real calendar slots while a visitor is chatting, book a meeting and send the invite. The transcript and session context can then follow the lead into the sales workflow."
          },
          {
            "type": "paragraph",
            "html": "This is a meaningful difference from a chatbot that only hands out a Calendly-style link. The user can move from question to qualification to scheduled meeting without leaving the page."
          }
        ]
      },
      {
        "id": "crm-and-workflow-integrations",
        "title": "CRM and workflow integrations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s current site lists CRM sync with HubSpot, Attio and Close, plus Slack and Teams notifications. It also describes automated routing workflows and two-way CRM synchronization."
          },
          {
            "type": "paragraph",
            "html": "Integration availability and feature gating can change quickly in a newly launched product, so teams should confirm the exact connector they need before buying."
          }
        ]
      },
      {
        "id": "languages-and-knowledge-base-behavior",
        "title": "Languages and knowledge-base behavior",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo says it can respond in more than 100 languages and automatically detect the visitor’s language. It also says the product periodically re-crawls websites so published changes can be reflected in the knowledge base, while manually uploaded sources need to be maintained by the account owner."
          },
          {
            "type": "paragraph",
            "html": "The strongest trust feature is the product’s source-grounded answer model. Widgo explicitly says that if it does not know an answer, it should say so and hand the visitor to a human instead of inventing an answer. That behavior should still be tested against a company’s real documentation before deployment."
          }
        ]
      },
      {
        "id": "widgo-pricing",
        "title": "Widgo pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo publicly lists a free-forever entry point and says no credit card is required to start. Its own comparison pages list three price points: $0, $249 and $833 per month. The free plan is described as supporting 500 visitors per month."
          },
          {
            "type": "paragraph",
            "html": "Widgo’s terms explain that usage is counted by unique visitors per calendar month. A returning person counts as one visitor for that month, while bots and crawlers that Widgo identifies are excluded. Staging and test installations do count."
          },
          {
            "type": "paragraph",
            "html": "When an account reaches its allowance, the widget can keep answering visitors, but conversations and leads beyond the allowance may be held and blurred in the dashboard until the plan resets or the account upgrades."
          },
          {
            "type": "paragraph",
            "html": "Because launch-stage pricing can change, recheck Widgo’s live pricing immediately before purchasing."
          }
        ]
      },
      {
        "id": "security-and-privacy-claims",
        "title": "Security and privacy claims",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s site currently advertises SOC 2 Type II, GDPR support, HIPAA BAA availability, TLS 1.3 in transit, AES-256 at rest, SSO/SAML, optional EU data residency and a claim that customer conversations are not used to train its models."
          },
          {
            "type": "paragraph",
            "html": "These are vendor claims and contractual/security-review details matter. Regulated businesses should review the current DPA, BAA, subprocessor list and plan-specific controls rather than relying on homepage badges alone."
          }
        ]
      },
      {
        "id": "free-plan-restrictions",
        "title": "Free-plan restrictions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s terms place specific limits on the free plan. It is intended for ordinary business websites and is not permitted for sites directed at children or sites that provide regulated medical, legal, financial or insurance advice where the agent’s responses could affect health, safety, legal rights or finances."
          },
          {
            "type": "paragraph",
            "html": "The free plan can also display a “Built by Widgo” badge and may show a one-time human-verification step before chat."
          }
        ]
      },
      {
        "id": "how-widgo-differs-from-an-ordinary-chatbot",
        "title": "How Widgo differs from an ordinary chatbot",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A standard website chatbot usually focuses on support or FAQ deflection. Widgo’s positioning is broader: it combines knowledge-base answering with visitor identification, lead qualification, meeting booking and CRM handoff."
          },
          {
            "type": "paragraph",
            "html": "That makes the most sense for B2B companies where website traffic already has meaningful commercial intent. For a low-ticket consumer site, a content-heavy publication or a site with very little qualified traffic, the sales workflow may be less valuable."
          }
        ]
      },
      {
        "id": "limitations-to-keep-in-mind",
        "title": "Limitations to keep in mind",
        "blocks": [
          {
            "type": "paragraph",
            "html": "First, many headline numbers on Widgo’s website are marketing claims, not independent benchmarks. Claims around visitor conversion, follow-up delays or customer outcomes should not be treated as universal performance data."
          },
          {
            "type": "paragraph",
            "html": "Second, visitor identification is inherently probabilistic and privacy-sensitive. Teams should test actual match rates in their target geography."
          },
          {
            "type": "paragraph",
            "html": "Third, page-level display controls were still being discussed by the makers around launch week, so teams wanting highly granular rules for /pricing, /docs or /blog paths should verify whether those controls have shipped."
          },
          {
            "type": "paragraph",
            "html": "Finally, the product is still early. Connector coverage, limits and pricing may move quickly."
          }
        ]
      },
      {
        "id": "who-should-test-widgo",
        "title": "Who should test Widgo",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo is most relevant to B2B SaaS, agencies, software companies and other businesses where visitors often have questions before booking a call. It is especially interesting for small teams that want an inbound sales agent without an enterprise implementation process."
          },
          {
            "type": "paragraph",
            "html": "A sensible test is to install it on a limited set of high-intent pages, feed it only approved content, define strict qualification criteria, connect a test calendar and CRM, then review transcripts and false-positive qualification before expanding site-wide."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is Widgo free?"
          },
          {
            "type": "paragraph",
            "html": "Widgo currently offers a free-forever plan. Its own pages describe that tier as 500 visitors per month, with paid plans above it."
          },
          {
            "type": "subheading",
            "text": "Does Widgo identify anonymous website visitors?"
          },
          {
            "type": "paragraph",
            "html": "Widgo says it can identify company/person context behind sessions and score them. Coverage is not guaranteed for every visitor and should be tested on real traffic."
          },
          {
            "type": "subheading",
            "text": "Can Widgo book meetings?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Widgo says it can show live calendar slots and book meetings inside the website conversation."
          },
          {
            "type": "subheading",
            "text": "Which CRMs does Widgo support?"
          },
          {
            "type": "paragraph",
            "html": "The current product site lists HubSpot, Attio and Close, plus Slack and Teams notifications."
          },
          {
            "type": "subheading",
            "text": "Does Widgo hallucinate answers?"
          },
          {
            "type": "paragraph",
            "html": "Widgo says it answers from approved company content and should admit when it does not know an answer. Teams should still test this behavior before production use."
          },
          {
            "type": "subheading",
            "text": "Is Widgo HIPAA compliant?"
          },
          {
            "type": "paragraph",
            "html": "Widgo advertises HIPAA BAA availability, but regulated organizations should confirm the exact contract, plan, data flow and BAA before use."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "widgo.ai — official source",
        "url": "https://www.widgo.ai/"
      },
      {
        "label": "producthunt.com — widgo",
        "url": "https://www.producthunt.com/products/widgo"
      },
      {
        "label": "widgo.ai — terms of use",
        "url": "https://www.widgo.ai/legal/terms-of-use"
      },
      {
        "label": "widgo.ai — vs qualified",
        "url": "https://www.widgo.ai/compare/vs-qualified"
      },
      {
        "label": "widgo.ai — vs warmly",
        "url": "https://www.widgo.ai/compare/vs-warmly"
      }
    ],
    "relatedPaths": [
      "/blog/widgo-pricing",
      "/blog/how-to-use-widgo"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Widgo",
    "targetSearchIntent": "Understand Widgo's current free and paid pricing structure, how visitor usage is counted, what happens at the plan limit, and which cost details require live verification before purchase",
    "targetQuery": "Widgo pricing",
    "parentSlug": "widgo-ai-sales-rep",
    "slug": "widgo-pricing",
    "title": "Widgo Pricing: Free Plan, Visitor Limits & Paid Tiers",
    "metaTitle": "Widgo Pricing: Free Plan, Visitor Limits & Paid Tiers",
    "metaDescription": "Widgo currently advertises $0, $249 and $833 monthly tiers, with 500 visitors on Free. See how usage is counted, what happens at limits and what to verify.",
    "h1": "Widgo Pricing: Free Plan, Visitor Limits and Paid Tiers",
    "excerpt": "Widgo’s biggest pricing differentiator is that it is not demo-gated. The company currently offers a free-forever starting tier and publishes paid price points on its own comparison pages.",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Widgo Pricing: Free Plan, Visitor Limits and Paid Tiers — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s biggest pricing differentiator is that it is not demo-gated. The company currently offers a free-forever starting tier and publishes paid price points on its own comparison pages."
          },
          {
            "type": "paragraph",
            "html": "As of September 2026, Widgo publicly lists three monthly prices: $0, $249 and $833. Its comparison pages identify the $249 tier as Growth in examples and say the annual cost of Growth is $2,988, which is simply 12 months at $249."
          },
          {
            "type": "paragraph",
            "html": "Because the product is newly launched in its current form and pricing pages can change, treat these figures as time-sensitive and verify them on Widgo before purchase."
          }
        ]
      },
      {
        "id": "widgo-free",
        "title": "Widgo Free",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s current product pages say the Free plan costs $0, requires no credit card and can remain free rather than expiring as a trial. Widgo’s own materials describe a 500-visitors-per-month allowance."
          },
          {
            "type": "paragraph",
            "html": "The terms of service clarify that usage is metered in unique Visitors per calendar month. A visitor who returns multiple times in the same month counts once. Bots and crawlers that Widgo identifies are not counted."
          },
          {
            "type": "paragraph",
            "html": "Staging and test installations do count, which matters during implementation if a team sends a lot of QA traffic through the widget."
          }
        ]
      },
      {
        "id": "what-happens-when-you-exceed-the-allowance",
        "title": "What happens when you exceed the allowance",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s terms say the website widget can keep working and answering visitors after the allowance is reached. However, conversations and leads beyond the allowance may be held and shown blurred in the dashboard."
          },
          {
            "type": "paragraph",
            "html": "Nothing is deleted. When the next month begins, the new allowance becomes visible, but previously blurred records remain blurred unless the account upgrades. An upgrade can unlock those held records retroactively."
          },
          {
            "type": "paragraph",
            "html": "That is an unusual model: the visitor-facing experience does not necessarily stop at the quota, but the business loses access to over-limit lead data until it pays."
          }
        ]
      },
      {
        "id": "paid-tiers",
        "title": "Paid tiers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s own comparison pages currently show published monthly price points of $249 and $833 above Free. The public snippets used for this article do not provide a fully verified, current feature-by-feature matrix for both paid tiers, so this page should not invent which exact allowance or feature belongs to the $833 plan."
          },
          {
            "type": "paragraph",
            "html": "Before choosing a paid tier, confirm: monthly visitor allowance; number of websites/workspaces; CRM integrations; SSO/SAML; data residency; badge removal; API access; knowledge-base limits; support level; and whether any usage overage is billed or simply gated."
          }
        ]
      },
      {
        "id": "how-visitor-billing-works",
        "title": "How visitor billing works",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo uses unique monthly visitors rather than charging per AI answer or per qualified meeting, according to its terms."
          },
          {
            "type": "paragraph",
            "html": "This means the cost curve is tied more closely to site traffic than conversation depth. A visitor asking twenty questions does not necessarily represent twenty billable visitor units. Conversely, a high-traffic site can consume the allowance even if only a small share of visitors talk to the agent."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters when comparing Widgo with products priced per resolution, conversation, seat, credit or booked meeting."
          }
        ]
      },
      {
        "id": "does-widgo-charge-for-bots",
        "title": "Does Widgo charge for bots?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s terms say bots and crawlers that it identifies do not count toward visitor usage. Product Hunt comments from the makers also say bot/datacenter traffic is filtered before free-plan quota is counted and that the free tier may place a human-verification step in front of chat."
          },
          {
            "type": "paragraph",
            "html": "Bot filtering is still vendor-controlled. Teams running paid acquisition or high bot traffic should watch their own usage dashboard rather than assume every crawler will be excluded."
          }
        ]
      },
      {
        "id": "billing-renewals-and-refunds",
        "title": "Billing, renewals and refunds",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s terms say paid plans are billed in advance through Stripe on a monthly or annual basis depending on the selected plan. Subscriptions automatically renew until cancelled."
          },
          {
            "type": "paragraph",
            "html": "Fees are generally non-refundable except where required by law. Cancellation stops future charges but does not refund the current term. Widgo says pricing changes for a renewal term require at least 30 days’ notice."
          },
          {
            "type": "paragraph",
            "html": "Taxes are excluded from listed prices and remain the customer’s responsibility where applicable."
          }
        ]
      },
      {
        "id": "free-plan-trade-offs",
        "title": "Free-plan trade-offs",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Free plan can display a “Built by Widgo” badge and may present a one-time human-verification step before a visitor begins a conversation. Removing the badge requires a paid plan under the current terms."
          },
          {
            "type": "paragraph",
            "html": "The free plan is also restricted from certain higher-risk uses. Widgo says it may not be used on sites directed at children or for regulated medical, legal, financial or insurance advice where the agent’s answers could materially affect users."
          }
        ]
      },
      {
        "id": "is-249-month-expensive",
        "title": "Is $249/month expensive?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "That depends on the site and sales motion. The relevant comparison is not only chatbot pricing; it is the value of answering high-intent questions, qualifying visitors and booking sales meetings without a human immediately present."
          },
          {
            "type": "paragraph",
            "html": "For a B2B site that produces valuable opportunities, $249 can be small relative to one qualified deal. For a low-traffic site with little commercial intent, the free tier may be enough—or the product may not be necessary at all."
          },
          {
            "type": "paragraph",
            "html": "Do not use Widgo’s own competitor cost claims as neutral market benchmarks. Its comparison pages cite much higher all-in estimates for enterprise competitors, but those claims should be independently verified before publication in any comparison article."
          }
        ]
      },
      {
        "id": "how-to-estimate-your-widgo-cost",
        "title": "How to estimate your Widgo cost",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Start with monthly unique website visitors rather than pageviews. Then identify the share of traffic on pages where the widget will actually load. If page-level targeting is available, limiting Widgo to pricing, enterprise and product pages may reduce usage and increase signal quality."
          },
          {
            "type": "paragraph",
            "html": "Next, estimate how many qualified meetings would need to be created for the plan to pay for itself. Use your actual opportunity value and close rate rather than Widgo’s marketing claims."
          },
          {
            "type": "paragraph",
            "html": "Finally, include operational costs: CRM cleanup, knowledge-base maintenance, transcript review and any compliance/security work."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Does Widgo have a free plan?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Widgo currently advertises a free-forever plan with no card required and describes it as including 500 visitors per month."
          },
          {
            "type": "subheading",
            "text": "How does Widgo count visitors?"
          },
          {
            "type": "paragraph",
            "html": "Its terms say usage is based on unique visitors per calendar month. Repeat visits by the same visitor in the month count once, while detected bots/crawlers are excluded."
          },
          {
            "type": "subheading",
            "text": "What happens if I exceed the free limit?"
          },
          {
            "type": "paragraph",
            "html": "The widget can continue answering, but excess conversations/leads may be held and blurred in the dashboard until reset or upgrade."
          },
          {
            "type": "subheading",
            "text": "How much is Widgo Growth?"
          },
          {
            "type": "paragraph",
            "html": "Widgo’s current comparison pages list Growth at $249 per month and $2,988 per year at monthly-equivalent arithmetic."
          },
          {
            "type": "subheading",
            "text": "Is there an $833 plan?"
          },
          {
            "type": "paragraph",
            "html": "Widgo’s own comparison pages currently list $0, $249 and $833 monthly price points. The exact current name, allowance and feature set for the $833 tier should be verified on the live pricing page before purchase."
          },
          {
            "type": "subheading",
            "text": "Does Widgo charge per conversation?"
          },
          {
            "type": "paragraph",
            "html": "The terms describe billing usage in unique monthly visitors, not per individual message or conversation."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "widgo.ai — official source",
        "url": "https://www.widgo.ai/"
      },
      {
        "label": "producthunt.com — widgo",
        "url": "https://www.producthunt.com/products/widgo"
      },
      {
        "label": "widgo.ai — terms of use",
        "url": "https://www.widgo.ai/legal/terms-of-use"
      },
      {
        "label": "widgo.ai — vs qualified",
        "url": "https://www.widgo.ai/compare/vs-qualified"
      },
      {
        "label": "widgo.ai — vs warmly",
        "url": "https://www.widgo.ai/compare/vs-warmly"
      }
    ],
    "relatedPaths": [
      "/blog/widgo-ai-sales-rep"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Widgo",
    "targetSearchIntent": "Install Widgo on a website, configure its knowledge base and qualification logic, connect calendar/CRM tools, and safely test the AI sales workflow before wider rollout",
    "targetQuery": "how to use Widgo",
    "parentSlug": "widgo-ai-sales-rep",
    "slug": "how-to-use-widgo",
    "title": "How to Use Widgo: Install, Qualify Leads & Book Demos",
    "metaTitle": "How to Use Widgo: Install, Qualify Leads & Book Demos",
    "metaDescription": "Learn how to install Widgo, build its knowledge base, set qualification rules, connect calendar and CRM tools, and test the AI sales rep safely before rollout.",
    "h1": "How to Use Widgo: Install, Qualify Leads and Book Demos",
    "excerpt": "Widgo is designed to go live quickly, but a fast install is not the same thing as a good sales setup. The useful workflow is to treat the first deployment as a controlled experiment: give the agent clean source material, define who counts as qualified, connect only the systems…",
    "category": "Marketing",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Use Widgo: Install, Qualify Leads and Book Demos — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo is designed to go live quickly, but a fast install is not the same thing as a good sales setup. The useful workflow is to treat the first deployment as a controlled experiment: give the agent clean source material, define who counts as qualified, connect only the systems it needs, then inspect real conversations before expanding it across the site."
          }
        ]
      },
      {
        "id": "1-create-the-workspace-and-let-widgo-scan-the-site",
        "title": "1. Create the workspace and let Widgo scan the site",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s current onboarding starts with a company website. The product scans the site and drafts a knowledge base from the content it finds. The company says setup can be completed in minutes and that installation ultimately requires adding a single script to the site."
          },
          {
            "type": "paragraph",
            "html": "Before accepting the generated knowledge base, review it. Pricing pages, outdated docs, legal disclaimers and old product pages can all create bad answers if they remain in the source set."
          }
        ]
      },
      {
        "id": "2-add-approved-knowledge-sources",
        "title": "2. Add approved knowledge sources",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo can use the website plus additional material such as documentation pages, help-center content and PDFs. The product is positioned around source-grounded answers: it should respond from approved material and surface the source behind a response."
          },
          {
            "type": "paragraph",
            "html": "A good initial source set is narrower rather than broader. Start with current pricing, product documentation, security/compliance FAQs, onboarding material and the specific pages prospects regularly ask about."
          },
          {
            "type": "paragraph",
            "html": "Avoid uploading internal material that the visitor should never see. A retrieval system can only be as safe as the source boundaries you give it."
          }
        ]
      },
      {
        "id": "3-test-unsupported-questions",
        "title": "3. Test unsupported questions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s makers say the agent should admit when it does not know something rather than invent an answer, then hand the conversation to a human."
          },
          {
            "type": "paragraph",
            "html": "Test this explicitly before launch. Ask about nonexistent features, unsupported integrations, made-up prices and edge-case legal/security questions. Confirm that the response is cautious and that the handoff carries the conversation context."
          }
        ]
      },
      {
        "id": "4-define-qualification-criteria",
        "title": "4. Define qualification criteria",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo scores visitors from 0 to 100 based on fit and intent. The score is only useful if the team has a clear definition of a qualified lead."
          },
          {
            "type": "paragraph",
            "html": "Define attributes such as company type, company size, geography, budget fit, use case, urgency and decision-maker status. Also define disqualifiers. Widgo’s makers have said the product is intended to back off rather than push a meeting when the visitor is clearly not a fit."
          },
          {
            "type": "paragraph",
            "html": "Review early lead-score explanations manually. A 90/100 score that sales would reject is more useful feedback than a high conversion count because it tells you the qualification logic needs work."
          }
        ]
      },
      {
        "id": "5-connect-the-calendar",
        "title": "5. Connect the calendar",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo can offer real calendar slots inside the chat and book a meeting without sending the visitor to another page."
          },
          {
            "type": "paragraph",
            "html": "For the first test, connect a calendar with limited availability rather than the entire sales team. Confirm timezone behavior, buffer rules, invite details and what happens if two people try to book the same slot."
          },
          {
            "type": "paragraph",
            "html": "The goal is to make the booking experience easier without creating calendar chaos."
          }
        ]
      },
      {
        "id": "6-connect-the-crm-and-notifications",
        "title": "6. Connect the CRM and notifications",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s site currently lists HubSpot, Attio and Close CRM support, along with Slack and Microsoft Teams notifications."
          },
          {
            "type": "paragraph",
            "html": "Start with one CRM and one internal alert channel. Check that the record contains the information your sales team actually needs: visitor/company context, lead score, reason, transcript, booked time and source page."
          },
          {
            "type": "paragraph",
            "html": "Do not assume every integration field is mapped the way your existing pipeline expects. Test duplicate handling and whether an existing contact is updated or a new record is created."
          }
        ]
      },
      {
        "id": "7-install-the-website-script",
        "title": "7. Install the website script",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo describes installation as one line of code. In practice, teams should still control where it loads and verify performance impact."
          },
          {
            "type": "paragraph",
            "html": "Use a tag manager or site integration method that can be rolled back quickly. Test desktop and mobile behavior, consent/cookie interactions, content-security-policy compatibility and whether the widget affects Core Web Vitals."
          },
          {
            "type": "paragraph",
            "html": "Around launch week, users specifically asked for better page-level allow/block rules. If you only want the agent on /pricing, /enterprise or high-intent solution pages, verify whether those controls are available in the current dashboard. Otherwise implement page-path logic in your own tag manager or site code."
          }
        ]
      },
      {
        "id": "8-launch-on-high-intent-pages-first",
        "title": "8. Launch on high-intent pages first",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not put a sales agent everywhere on day one. Start where visitor intent is already commercial: pricing, enterprise, product, integrations and comparison pages."
          },
          {
            "type": "paragraph",
            "html": "Keep it off documentation or editorial pages if the widget would distract from the user’s job. This also gives cleaner early data because you are testing against visitors who are more likely to have buying questions."
          }
        ]
      },
      {
        "id": "9-review-conversations-and-unanswered-questions",
        "title": "9. Review conversations and unanswered questions",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo logs conversations and, according to its makers, unanswered questions can expose gaps in the website itself."
          },
          {
            "type": "paragraph",
            "html": "Review the first 50–100 sessions. Look for incorrect answers, weak qualification, repeated objections, common integration questions and visitors who should have been handed to a human sooner."
          },
          {
            "type": "paragraph",
            "html": "Use those findings to improve both the knowledge base and the website copy. If ten prospects ask the same security question, the website probably needs that answer in a visible place."
          }
        ]
      },
      {
        "id": "10-measure-the-right-outcomes",
        "title": "10. Measure the right outcomes",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not evaluate Widgo only by the number of chats. Track qualified meetings, show rate, sales acceptance, opportunity creation and revenue influence. Also track bad outcomes: false-positive qualification, duplicate CRM records, inaccurate answers and unnecessary human escalations."
          },
          {
            "type": "paragraph",
            "html": "Widgo’s own website includes marketing claims about conversion and response speed, but those are not independent benchmarks. Your own funnel is the useful benchmark."
          }
        ]
      },
      {
        "id": "free-plan-testing",
        "title": "Free-plan testing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Widgo’s terms say the free plan is metered by unique visitors per calendar month, with bots/crawlers it identifies excluded. Its public pages describe 500 visitors per month on Free."
          },
          {
            "type": "paragraph",
            "html": "The terms also say that when the allowance is exceeded the widget can continue answering, while conversations/leads beyond the limit may appear blurred in the dashboard until reset or upgrade. Staging/test installations count toward usage."
          },
          {
            "type": "paragraph",
            "html": "That makes it worth keeping QA traffic controlled during setup."
          }
        ]
      },
      {
        "id": "safety-and-regulated-use-caveat",
        "title": "Safety and regulated-use caveat",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The free plan is not intended for sites directed at children or for regulated medical, legal, financial or insurance advice where answers could affect health, safety, legal rights or finances."
          },
          {
            "type": "paragraph",
            "html": "If your business is regulated, confirm the paid-plan contract, data-processing terms and any required BAA/DPA before deployment."
          }
        ]
      },
      {
        "id": "a-practical-launch-checklist",
        "title": "A practical launch checklist",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before expanding site-wide, confirm: approved source set is current; hallucination/unknown-answer tests pass; qualification rules match sales judgment; calendar booking works across timezones; CRM mappings do not create duplicates; Slack/Teams alerts are actionable; page placement is intentional; consent/security controls are compatible; and early transcripts have been manually reviewed."
          },
          {
            "type": "paragraph",
            "html": "Widgo is easiest to understand as a sales workflow, not a widget. The script is the last step. The real setup is defining what the agent is allowed to know, who it should qualify, and what should happen when a visitor is ready to buy."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "widgo.ai — official source",
        "url": "https://www.widgo.ai/"
      },
      {
        "label": "producthunt.com — widgo",
        "url": "https://www.producthunt.com/products/widgo"
      },
      {
        "label": "widgo.ai — terms of use",
        "url": "https://www.widgo.ai/legal/terms-of-use"
      },
      {
        "label": "widgo.ai — vs qualified",
        "url": "https://www.widgo.ai/compare/vs-qualified"
      },
      {
        "label": "widgo.ai — vs warmly",
        "url": "https://www.widgo.ai/compare/vs-warmly"
      }
    ],
    "relatedPaths": [
      "/blog/widgo-ai-sales-rep"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Instagram Tagged Posts on Profile Grid",
    "targetSearchIntent": "Understand Instagram’s Add to Grid feature for tagged posts, availability, controls, and creator/brand use cases",
    "targetQuery": "Instagram tagged posts profile grid",
    "slug": "instagram-add-tagged-post-to-grid",
    "title": "Instagram Add to Grid: How Tagged Posts Work on Your Profile",
    "metaTitle": "Instagram Add to Grid: Tagged Posts on Your Profile",
    "metaDescription": "Instagram now lets you add tagged posts to your main profile grid. Learn how Add to Grid works, how to remove posts, and what it means for creators and brands.",
    "h1": "Instagram Add to Grid: How Tagged Posts Work on Your Profile",
    "excerpt": "Instagram is rolling out a new Add to grid option that lets you place posts you are tagged in directly on your main profile grid. The feature started rolling out on September 10, 2026, according to TechCrunch and Social Media Today.",
    "category": "Social Media",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Instagram Add to Grid: How Tagged Posts Work on Your Profile — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram is rolling out a new Add to grid option that lets you place posts you are tagged in directly on your main profile grid. The feature started rolling out on September 10, 2026, according to TechCrunch and Social Media Today."
          },
          {
            "type": "paragraph",
            "html": "Previously, tagged content mainly lived in the separate Tagged tab unless you reposted it yourself or the original creator used Instagram’s Collab feature. Add to Grid creates a third option: you can surface an existing tagged post on your profile without creating a new upload."
          }
        ]
      },
      {
        "id": "what-is-instagram-add-to-grid-for-tagged-posts",
        "title": "What is Instagram Add to Grid for tagged posts?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Add to Grid is a profile-curation feature for posts in which another account has tagged you. When eligible, Instagram gives the tagged account an option to display that existing post on its main profile grid."
          },
          {
            "type": "paragraph",
            "html": "The original post remains the source post. TechCrunch reports that adding it to your grid does not delete or duplicate the original. You can also remove it from your main grid later without removing it from your Tagged tab."
          },
          {
            "type": "paragraph",
            "html": "This matters because a creator, brand, employee, partner, customer, or collaborator can now make relevant third-party content more visible on their profile without downloading and re-uploading the media."
          }
        ]
      },
      {
        "id": "when-did-instagram-launch-it",
        "title": "When did Instagram launch it?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram began rolling out the feature on September 10, 2026. Reporting from TechCrunch says the rollout started that day, while Social Media Today documented the new Add to grid option and the tag icon shown on grid thumbnails."
          },
          {
            "type": "paragraph",
            "html": "A direct public Meta help-page announcement was not retrievable during this review, so rollout geography, exact account eligibility, and completion timing should not be assumed beyond what Instagram has confirmed through current reporting."
          }
        ]
      },
      {
        "id": "how-to-add-a-tagged-post-to-your-instagram-grid",
        "title": "How to add a tagged post to your Instagram grid",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram currently provides three documented entry points."
          },
          {
            "type": "subheading",
            "text": "1. From the tag notification in DMs"
          },
          {
            "type": "paragraph",
            "html": "When someone tags you in a post, Instagram can send a notification through DMs. Open the notification, view the post, and use the option to add it to your profile grid if the feature is available on your account."
          },
          {
            "type": "subheading",
            "text": "2. From the tagged post itself"
          },
          {
            "type": "paragraph",
            "html": "Open a post in which you are tagged. Eligible accounts should see an Add to grid option. Selecting it places the post on the main profile grid."
          },
          {
            "type": "subheading",
            "text": "3. From your Tagged tab"
          },
          {
            "type": "paragraph",
            "html": "Open your profile, go to the Tagged tab, select the post you want to feature, and choose Add to grid if the control is available."
          },
          {
            "type": "paragraph",
            "html": "Instagram may be rolling the feature out gradually. If the option is missing, that does not by itself prove that your account is ineligible."
          }
        ]
      },
      {
        "id": "what-happens-to-the-original-post",
        "title": "What happens to the original post?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The important distinction is that Add to Grid is not a normal repost."
          },
          {
            "type": "paragraph",
            "html": "The original post stays on the publishing account. You are not creating a second upload of the same photo or video. The tagged post is being displayed on your profile as an existing piece of content rather than being re-published as your own new post."
          },
          {
            "type": "paragraph",
            "html": "That makes the feature particularly useful when you want to highlight someone else’s post while preserving the original creator as the source."
          }
        ]
      },
      {
        "id": "can-you-remove-a-tagged-post-from-your-grid",
        "title": "Can you remove a tagged post from your grid?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Yes. TechCrunch reports that you can remove the post from your main profile grid later without deleting the original post and without necessarily removing it from your Tagged tab."
          },
          {
            "type": "paragraph",
            "html": "That gives creators and brands more control over how long collaboration content remains part of their visible profile presentation."
          }
        ]
      },
      {
        "id": "tagged-tab-vs-main-profile-grid",
        "title": "Tagged tab vs main profile grid",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram’s Tagged tab has long collected posts in which other accounts tag you. The new feature does not eliminate that tab."
          },
          {
            "type": "paragraph",
            "html": "The difference is visibility and curation:"
          },
          {
            "type": "list",
            "items": [
              "Tagged tab: a separate section containing posts where your account is tagged.",
              "Main grid with Add to Grid: selected tagged posts can become part of the primary profile presentation visitors see alongside your own posts."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "This changes tagged content from a passive archive into something you can selectively feature."
          }
        ]
      },
      {
        "id": "add-to-grid-vs-instagram-collab-posts",
        "title": "Add to Grid vs Instagram Collab posts",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The two features solve related but different problems."
          },
          {
            "type": "paragraph",
            "html": "A Collab post is set up as a shared post between participating accounts and is designed for joint publishing and distribution."
          },
          {
            "type": "paragraph",
            "html": "Add to Grid works after you have been tagged in someone else’s post. It lets you display that tagged post on your profile without requiring the original post to have been created as a Collab post."
          },
          {
            "type": "paragraph",
            "html": "That distinction can be useful when a collaboration was not planned in advance, when multiple people were tagged, or when a brand wants several participants to showcase the same campaign post without turning every participant into a formal co-author."
          }
        ]
      },
      {
        "id": "why-this-matters-for-creators",
        "title": "Why this matters for creators",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram specifically told TechCrunch that the feature can help creator collaborations. A creator may be tagged in a photographer’s post, a brand campaign, an event recap, a podcast clip, or another creator’s content and now surface that post on the main grid without re-uploading it."
          },
          {
            "type": "paragraph",
            "html": "Potential creator uses include:"
          },
          {
            "type": "list",
            "items": [
              "displaying campaign deliverables posted by a brand,",
              "highlighting event or press coverage,",
              "surfacing photographer or videographer work,",
              "showing appearances on another creator’s account,",
              "featuring community or fan content selectively,",
              "adding social proof to the main profile presentation."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "The strategic benefit is not simply “more content.” It is the ability to curate external proof and collaborations alongside first-party posts."
          }
        ]
      },
      {
        "id": "why-this-matters-for-brands-and-social-teams",
        "title": "Why this matters for brands and social teams",
        "blocks": [
          {
            "type": "paragraph",
            "html": "For brand campaigns involving multiple creators, one central post can potentially be featured across several tagged participants’ grids without requiring each creator to download and publish a duplicate."
          },
          {
            "type": "paragraph",
            "html": "That can simplify campaign presentation and keep the original source intact. It may also reduce the visual awkwardness of repeatedly uploading identical creative across several accounts."
          },
          {
            "type": "paragraph",
            "html": "Brands should still define tagging, usage rights, disclosures, and campaign expectations separately. Add to Grid is a display feature; it does not replace contractual permission, advertising disclosure requirements, or a proper collaboration workflow."
          }
        ]
      },
      {
        "id": "does-add-to-grid-affect-ownership-or-attribution",
        "title": "Does Add to Grid affect ownership or attribution?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The feature does not turn the tagged account into the original publisher. Current reporting consistently describes the original post as remaining in place while the tagged user displays it on their grid."
          },
          {
            "type": "paragraph",
            "html": "That is important for attribution: creators should not describe a tagged post as their own original upload merely because it appears in their grid."
          }
        ]
      },
      {
        "id": "can-you-reorder-a-tagged-post-after-adding-it",
        "title": "Can you reorder a tagged post after adding it?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram has a separate profile-grid reordering feature, but current public reporting about Add to Grid does not establish every interaction between the two controls for every account. Avoid assuming that all tagged posts can always be positioned exactly like self-published posts until Instagram documents the behavior more clearly."
          },
          {
            "type": "paragraph",
            "html": "If grid order matters to a campaign, verify the behavior on the specific account before planning the layout."
          }
        ]
      },
      {
        "id": "what-if-add-to-grid-is-not-showing",
        "title": "What if Add to Grid is not showing?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If you are tagged in a post but cannot see the new option, several explanations are possible:"
          },
          {
            "type": "list",
            "items": [
              "The rollout has not reached your account yet. Instagram frequently releases features gradually.",
              "Your app may need an update. Check the latest Instagram version available for your device.",
              "You may be viewing a post or account combination with different privacy or eligibility constraints. Instagram has not published a complete public matrix of every edge case.",
              "The post may not be tagged to the account you are currently using. Confirm that the tag is attached to the correct profile."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "Do not rely on unofficial workarounds that require downloading and re-uploading someone else’s content unless you have permission to do so."
          }
        ]
      },
      {
        "id": "should-creators-add-every-tagged-post-to-the-grid",
        "title": "Should creators add every tagged post to the grid?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Probably not. The feature is most valuable as a curation tool."
          },
          {
            "type": "paragraph",
            "html": "A strong profile grid still needs a clear identity. Adding every tagged post can make the profile inconsistent or dilute the visual and strategic direction. A better approach is to choose posts that strengthen one of a few goals: authority, collaboration proof, campaign visibility, portfolio quality, community trust, or a current launch."
          },
          {
            "type": "paragraph",
            "html": "For brands, the same principle applies. Use Add to Grid when the external post strengthens the story the profile is trying to tell."
          }
        ]
      },
      {
        "id": "frequently-asked-questions",
        "title": "Frequently asked questions",
        "blocks": [
          {
            "type": "subheading",
            "text": "Can I add a post I’m tagged in to my Instagram grid?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Instagram began rolling out an Add to grid option on September 10, 2026 for tagged posts."
          },
          {
            "type": "subheading",
            "text": "Does adding a tagged post create a duplicate?"
          },
          {
            "type": "paragraph",
            "html": "No. Current reporting says the original post remains where it was published and is displayed on your grid without being re-uploaded as a new post."
          },
          {
            "type": "subheading",
            "text": "Can I remove it later?"
          },
          {
            "type": "paragraph",
            "html": "Yes. You can remove a tagged post from the main grid later without deleting the original post. Reporting also indicates it can remain in your Tagged tab."
          },
          {
            "type": "subheading",
            "text": "Is Add to Grid the same as a Collab post?"
          },
          {
            "type": "paragraph",
            "html": "No. A Collab post is jointly published. Add to Grid lets a tagged account display an existing post after being tagged."
          },
          {
            "type": "subheading",
            "text": "Why can’t I see Add to Grid?"
          },
          {
            "type": "paragraph",
            "html": "The feature may still be rolling out, your app may need updating, or the specific post/account combination may not expose the option. Instagram has not published a universal rollout-completion date."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram’s Add to Grid feature turns tagged posts into a more useful profile-curation tool. Instead of leaving collaboration content in a separate tab or publishing a duplicate, creators and brands can selectively bring useful tagged posts into their main profile presentation."
          },
          {
            "type": "paragraph",
            "html": "The biggest opportunity is not volume. It is curated social proof: making collaborations, campaign work, press, community content, and external validation visible where profile visitors are most likely to see it."
          },
          {
            "type": "paragraph",
            "html": "Last factual review: September 14, 2026. Recheck Instagram’s official support documentation and rollout status before publication."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "techcrunch.com — instagrams latest feature lets you add tagged posts to your profile grid",
        "url": "https://techcrunch.com/2026/09/10/instagrams-latest-feature-lets-you-add-tagged-posts-to-your-profile-grid/"
      },
      {
        "label": "socialmediatoday.com — 830126",
        "url": "https://www.socialmediatoday.com/news/instagram-lets-users-add-tagged-posts-to-profile-grids/830126/"
      },
      {
        "label": "metricool.com — add tagged posts to your grid",
        "url": "https://metricool.com/add-tagged-posts-to-your-grid/"
      }
    ],
    "relatedPaths": [
      "/blog/how-to-add-tagged-post-instagram-grid"
    ]
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Instagram Tagged Posts on Profile Grid",
    "targetSearchIntent": "Add, remove, and troubleshoot tagged posts on the main Instagram profile grid",
    "targetQuery": "how to add tagged post to Instagram grid",
    "parentSlug": "instagram-add-tagged-post-to-grid",
    "slug": "how-to-add-tagged-post-instagram-grid",
    "title": "How to Add Tagged Posts to Your Instagram Profile Grid",
    "metaTitle": "How to Add Tagged Posts to Your Instagram Grid",
    "metaDescription": "Learn how to add a tagged post to your Instagram profile grid from DMs, the post, or your Tagged tab, plus how to remove it and troubleshoot missing access.",
    "h1": "How to Add Tagged Posts to Your Instagram Profile Grid",
    "excerpt": "Instagram’s new Add to grid control lets you move selected posts you are tagged in from the Tagged section into your main profile presentation without downloading and re-uploading the content.",
    "category": "Social Media",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "How to Add Tagged Posts to Your Instagram Profile Grid — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram’s new Add to grid control lets you move selected posts you are tagged in from the Tagged section into your main profile presentation without downloading and re-uploading the content."
          },
          {
            "type": "paragraph",
            "html": "The feature began rolling out on September 10, 2026. This guide focuses on the practical job: how to add a tagged post, how to remove it later, what happens to the original post, and what to check if the option is missing."
          },
          {
            "type": "paragraph",
            "html": "For the broader feature overview, creator/brand implications, and differences from Collab posts, see the main guide: Instagram Add to Grid: How Tagged Posts Work on Your Profile."
          }
        ]
      },
      {
        "id": "before-you-start",
        "title": "Before you start",
        "blocks": [
          {
            "type": "paragraph",
            "html": "You need to be tagged in the post you want to add. Add to Grid does not let you place any arbitrary Instagram post on your profile."
          },
          {
            "type": "paragraph",
            "html": "Instagram is still rolling the feature out, so the option may not appear on every account at the same time. Current reporting does not provide a universal rollout-completion date or a complete eligibility matrix."
          }
        ]
      },
      {
        "id": "method-1-add-a-tagged-post-from-the-dm-notification",
        "title": "Method 1: Add a tagged post from the DM notification",
        "blocks": [
          {
            "type": "paragraph",
            "html": "When someone tags you in a post, Instagram can notify you in DMs."
          },
          {
            "type": "list",
            "items": [
              "Open Instagram and go to Messages.",
              "Open the notification telling you that you were tagged.",
              "Tap through to the tagged post.",
              "Look for Add to grid.",
              "Select the option to place the post on your main profile grid.",
              "Open your profile and confirm that the post appears where expected."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "This is often the fastest route when the tag is new because you can act directly from the notification."
          }
        ]
      },
      {
        "id": "method-2-add-it-directly-from-the-post",
        "title": "Method 2: Add it directly from the post",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If you already know which tagged post you want to feature:"
          },
          {
            "type": "list",
            "items": [
              "Open the post in which your account is tagged.",
              "Find the Add to grid option available to the tagged account.",
              "Tap it.",
              "Return to your profile to verify the post appears on the main grid."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "Social Media Today’s September 10 report shows the new Add to grid option in the tagged-post interface and notes that tagged posts display with a tag icon on the profile-grid thumbnail."
          }
        ]
      },
      {
        "id": "method-3-add-it-from-your-tagged-tab",
        "title": "Method 3: Add it from your Tagged tab",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This is useful when you want to curate older tagged content rather than react to a new notification."
          },
          {
            "type": "list",
            "items": [
              "Open your Instagram profile.",
              "Switch to the Tagged tab.",
              "Open the tagged post you want to feature.",
              "Choose Add to grid if the control is available.",
              "Return to the main grid and check the result."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "A practical workflow for creators is to review the Tagged tab periodically and promote only the strongest collaboration, press, event, portfolio, or community posts to the main grid."
          }
        ]
      },
      {
        "id": "does-instagram-create-a-duplicate-post",
        "title": "Does Instagram create a duplicate post?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No. TechCrunch reports that the original post stays where it was published and adding it to your grid does not delete or duplicate the original."
          },
          {
            "type": "paragraph",
            "html": "That means you are displaying an existing tagged post on your profile rather than uploading a second copy. This preserves the original post as the source."
          }
        ]
      },
      {
        "id": "how-to-remove-a-tagged-post-from-your-main-grid",
        "title": "How to remove a tagged post from your main grid",
        "blocks": [
          {
            "type": "paragraph",
            "html": "If you no longer want the post in your primary profile presentation, Instagram lets you remove it again."
          },
          {
            "type": "list",
            "items": [
              "Open the tagged post from your profile grid.",
              "Use the available profile/grid control to remove it from your main grid.",
              "Confirm that it no longer appears among your main posts."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "Current reporting says removing it from the main grid does not delete the original post. It can also remain in your Tagged tab, so removing it from the main presentation is different from removing the tag itself."
          }
        ]
      },
      {
        "id": "add-to-grid-vs-removing-a-tag",
        "title": "Add to Grid vs removing a tag",
        "blocks": [
          {
            "type": "paragraph",
            "html": "These are separate actions."
          },
          {
            "type": "list",
            "items": [
              "Remove from main grid: changes profile presentation while leaving the original post and tag relationship intact where supported.",
              "Remove tag: changes whether your account remains tagged in the post."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "If your only goal is to clean up the main grid, you usually do not need to remove the tag itself."
          }
        ]
      },
      {
        "id": "what-if-add-to-grid-is-not-showing",
        "title": "What if “Add to grid” is not showing?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Because this is a new rollout, missing access is likely to become a common search and support question. Check the following before assuming the feature is broken."
          },
          {
            "type": "subheading",
            "text": "1. Confirm the post actually tags your account"
          },
          {
            "type": "paragraph",
            "html": "Open the post and verify that your current account is tagged. If you manage multiple accounts, make sure you are signed into the same account that received the tag."
          },
          {
            "type": "subheading",
            "text": "2. Update the Instagram app"
          },
          {
            "type": "paragraph",
            "html": "Install the latest Instagram version available through your device’s app store. New interface controls may not appear correctly on older app versions."
          },
          {
            "type": "subheading",
            "text": "3. Check whether the rollout has reached your account"
          },
          {
            "type": "paragraph",
            "html": "Instagram often releases features gradually. A friend or collaborator having Add to Grid does not guarantee that your account receives it at exactly the same time."
          },
          {
            "type": "subheading",
            "text": "4. Try another entry point"
          },
          {
            "type": "paragraph",
            "html": "If the control is not obvious from the post, check the DM tag notification and your Tagged tab as well. Current reporting documents all three paths."
          },
          {
            "type": "subheading",
            "text": "5. Consider account and post privacy"
          },
          {
            "type": "paragraph",
            "html": "Instagram has not published a complete public matrix covering every privacy/account combination for this feature. If a tagged post involves private accounts or unusual visibility settings, verify the behavior directly rather than assuming it matches public-account behavior."
          },
          {
            "type": "subheading",
            "text": "6. Avoid fake “unlock” workarounds"
          },
          {
            "type": "paragraph",
            "html": "Do not give third-party apps your Instagram password or download/re-upload another person’s post just to imitate the feature. If Add to Grid has not reached your account, the safest option is to wait for the official rollout or use Instagram’s established collaboration/reposting tools with proper permission."
          }
        ]
      },
      {
        "id": "how-should-creators-choose-which-tagged-posts-to-add",
        "title": "How should creators choose which tagged posts to add?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The new feature is more useful when treated as profile curation rather than an automatic feed of every tag."
          },
          {
            "type": "paragraph",
            "html": "Prioritize posts that strengthen the profile’s purpose. Examples include:"
          },
          {
            "type": "list",
            "items": [
              "a brand campaign where you are a featured creator,",
              "a photographer’s strongest image of your work,",
              "an event or conference appearance,",
              "a podcast or interview clip,",
              "media or press coverage,",
              "a meaningful customer/community post,",
              "a high-quality collaboration that supports your positioning."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Skip posts that are off-brand, visually weak, outdated, misleading, or unlikely to help a new profile visitor understand who you are."
          }
        ]
      },
      {
        "id": "how-brands-can-use-add-to-grid-in-creator-campaigns",
        "title": "How brands can use Add to Grid in creator campaigns",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram told TechCrunch that Add to Grid can be useful for creator collaborations and multi-creator brand campaigns."
          },
          {
            "type": "paragraph",
            "html": "One practical setup is:"
          },
          {
            "type": "list",
            "items": [
              "A brand or lead creator publishes the source post.",
              "Relevant participants are tagged.",
              "Each participant can decide whether that post deserves a place on their main grid.",
              "The original post remains the source instead of every participant uploading another copy."
            ],
            "ordered": true
          },
          {
            "type": "paragraph",
            "html": "This is not a replacement for formal Collab posts, usage rights, paid-partnership labels, or contractual deliverables. It is a profile-display option that can make an existing tagged campaign asset more visible."
          }
        ]
      },
      {
        "id": "can-you-reorder-the-tagged-post-after-adding-it",
        "title": "Can you reorder the tagged post after adding it?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Instagram separately offers profile-grid reordering, but public documentation reviewed for this article does not establish every interaction between grid reordering and newly added tagged posts for every account."
          },
          {
            "type": "paragraph",
            "html": "If the exact grid position matters, test it on the account before promising a specific layout to a client or campaign partner."
          }
        ]
      },
      {
        "id": "does-the-post-stay-in-the-tagged-tab",
        "title": "Does the post stay in the Tagged tab?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Current reporting says a post can be removed from the main grid without removing it from the Tagged tab. That makes the two surfaces useful for different levels of curation: the Tagged tab can hold the wider set, while the main grid can feature a smaller selection."
          }
        ]
      },
      {
        "id": "quick-checklist-for-social-media-managers",
        "title": "Quick checklist for social media managers",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Before adding a tagged post to a client or brand grid:"
          },
          {
            "type": "list",
            "items": [
              "confirm the account was intentionally tagged,",
              "verify the creative fits the current profile strategy,",
              "check that the post is factually and visually appropriate,",
              "confirm any paid-campaign disclosure requirements,",
              "make sure usage/approval expectations are clear,",
              "preview how it fits with surrounding grid content,",
              "verify the post after adding it,",
              "document when it should be removed if the campaign is temporary."
            ],
            "ordered": false
          }
        ]
      },
      {
        "id": "frequently-asked-questions",
        "title": "Frequently asked questions",
        "blocks": [
          {
            "type": "subheading",
            "text": "Where is the Instagram Add to Grid button?"
          },
          {
            "type": "paragraph",
            "html": "It can appear from the DM tag notification, directly on the tagged post, or through your Tagged tab."
          },
          {
            "type": "subheading",
            "text": "Why don’t I have Add to Grid yet?"
          },
          {
            "type": "paragraph",
            "html": "The feature began rolling out September 10, 2026 and may not reach every account simultaneously. Update your app and verify that the post actually tags your account."
          },
          {
            "type": "subheading",
            "text": "Does Add to Grid repost the photo or Reel?"
          },
          {
            "type": "paragraph",
            "html": "No. Current reporting says the original post remains the source and is not duplicated as a new upload."
          },
          {
            "type": "subheading",
            "text": "Can I remove the post from my grid later?"
          },
          {
            "type": "paragraph",
            "html": "Yes. You can remove it from your main grid without deleting the original post. It may remain in your Tagged tab."
          },
          {
            "type": "subheading",
            "text": "Do I need to be a collaborator on the post?"
          },
          {
            "type": "paragraph",
            "html": "No formal Collab setup is required for the new feature as described. It is specifically designed around posts in which your account is tagged."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "To use Instagram Add to Grid, open a post you are tagged in through the DM notification, the post itself, or your Tagged tab and select Add to grid when the option is available. The post can then become part of your main profile presentation without creating a duplicate upload."
          },
          {
            "type": "paragraph",
            "html": "For creators and social teams, the best use is selective: promote the tagged posts that add real proof, collaboration value, or portfolio context, and leave the rest in the Tagged tab."
          },
          {
            "type": "paragraph",
            "html": "Last factual review: September 14, 2026. Recheck Instagram’s official support documentation and rollout status before publication."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "techcrunch.com — instagrams latest feature lets you add tagged posts to your profile grid",
        "url": "https://techcrunch.com/2026/09/10/instagrams-latest-feature-lets-you-add-tagged-posts-to-your-profile-grid/"
      },
      {
        "label": "socialmediatoday.com — 830126",
        "url": "https://www.socialmediatoday.com/news/instagram-lets-users-add-tagged-posts-to-profile-grids/830126/"
      },
      {
        "label": "metricool.com — add tagged posts to your grid",
        "url": "https://metricool.com/add-tagged-posts-to-your-grid/"
      }
    ],
    "relatedPaths": [
      "/blog/instagram-add-tagged-post-to-grid"
    ]
  },
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Socialive Catalyst",
    "targetSearchIntent": "Understand what Socialive Catalyst is, what it can create, how early access works, which capabilities are available now, and when broader availability is planned",
    "targetQuery": "Socialive Catalyst",
    "slug": "socialive-catalyst",
    "title": "Socialive Catalyst: AI Video Creation, Features & Availability",
    "metaTitle": "Socialive Catalyst: AI Video Creation, Features & Availability",
    "metaDescription": "Socialive Catalyst is an AI-first enterprise video engine that turns prompts, documents and recordings into branded video. See features and availability.",
    "h1": "Socialive Catalyst: AI Video Creation, Features and Availability",
    "excerpt": "Socialive has introduced Catalyst, a new AI-first, prompt-based video creation engine designed to simplify enterprise video production from the initial idea through creation and, increasingly, downstream review and publishing workflows.",
    "category": "Creator Tools",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-14",
    "dateModified": "2026-09-14",
    "ogAlt": "Socialive Catalyst: AI Video Creation, Features and Availability — Project Monet editorial graphic",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Socialive has introduced Catalyst, a new AI-first, prompt-based video creation engine designed to simplify enterprise video production from the initial idea through creation and, increasingly, downstream review and publishing workflows."
          },
          {
            "type": "paragraph",
            "html": "The company announced early access on September 14, 2026. A select group of existing Socialive customers is expected to receive early access during September, while Socialive says general availability is planned for October 2026. The public product page is already live, but several governance features are explicitly marked as coming soon."
          }
        ]
      },
      {
        "id": "what-is-socialive-catalyst",
        "title": "What is Socialive Catalyst?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Catalyst is an AI-first orchestration layer built on top of Socialive's existing enterprise video platform. Instead of asking a user to move manually between recording, editing, templates, brand assets and production workflows, Catalyst starts with a conversational prompt."
          },
          {
            "type": "paragraph",
            "html": "A user describes the video they want to create. Catalyst then develops a project plan through a conversational exchange, gathering information such as the goal, source assets, brand requirements and creative direction before content generation begins."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters. Catalyst is not presented simply as a text-to-video model. Socialive positions it as an interface that coordinates the company's broader recording, production, post-production, branding and governance capabilities around the user's intent."
          }
        ]
      },
      {
        "id": "what-can-catalyst-create-from",
        "title": "What can Catalyst create from?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Socialive's current product materials describe four main starting points."
          },
          {
            "type": "subheading",
            "text": "A plain-language prompt"
          },
          {
            "type": "paragraph",
            "html": "Users can describe the video they need in natural language. Catalyst is designed to interpret the request, collect missing context and orchestrate the work needed to produce the video."
          },
          {
            "type": "subheading",
            "text": "Documents"
          },
          {
            "type": "paragraph",
            "html": "Socialive says decks, PDFs, blog posts and reports can be turned into scripts. That makes Catalyst relevant to marketing and business teams that already have written material but need to repurpose it into video."
          },
          {
            "type": "subheading",
            "text": "Recordings"
          },
          {
            "type": "paragraph",
            "html": "Existing webinars, interviews and company updates can be transformed into new clips. Socialive also describes long-form-to-short-form repurposing as a central use case, including turning webinars into social-ready video assets."
          },
          {
            "type": "subheading",
            "text": "Existing media assets"
          },
          {
            "type": "paragraph",
            "html": "Teams can reuse footage, images and graphics already stored in their library rather than generating every component from scratch."
          }
        ]
      },
      {
        "id": "what-does-catalyst-actually-generate",
        "title": "What does Catalyst actually generate?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "According to Socialive, Catalyst can help generate ideas, topics, scripts, visuals and clips. It can turn static content into video, automate branded templates and creative requirements, and transform existing long-form media into new video assets."
          },
          {
            "type": "paragraph",
            "html": "The public materials do not establish that every step in the broader enterprise workflow is fully available during early access. That is important because Socialive also describes a longer-term vision in which Catalyst handles more of the complete journey, including scheduling productions, compliance review, approval routing and publishing across enterprise systems."
          },
          {
            "type": "paragraph",
            "html": "Those future capabilities should not be confused with what is confirmed as available today."
          }
        ]
      },
      {
        "id": "project-planning-before-generation",
        "title": "Project planning before generation",
        "blocks": [
          {
            "type": "paragraph",
            "html": "One of the more distinctive parts of Catalyst is its project-plan-first approach."
          },
          {
            "type": "paragraph",
            "html": "Generative video systems can become expensive and frustrating when teams repeatedly generate outputs that do not match the intended brief. Socialive says Catalyst tries to reduce that problem by gathering the required context before generation begins."
          },
          {
            "type": "paragraph",
            "html": "The system is designed to ask for the relevant information, assets, brand requirements and creative direction, then let the user refine the plan before compute is spent on generating the final content."
          },
          {
            "type": "paragraph",
            "html": "Socialive says this can improve predictability and reduce unnecessary rounds of generation and revision. That is a vendor claim rather than an independently verified efficiency benchmark, but it explains the product's intended workflow."
          }
        ]
      },
      {
        "id": "brand-controls-and-enterprise-governance",
        "title": "Brand controls and enterprise governance",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Catalyst runs inside Socialive's existing enterprise platform rather than as a separate consumer-style generator."
          },
          {
            "type": "paragraph",
            "html": "The current product page describes lockable brand kits and templates. Administrators can control the approved design system, while other users can use those assets without modifying the underlying brand kit."
          },
          {
            "type": "paragraph",
            "html": "Socialive also documents role-based permissions for admins, editors and viewers."
          },
          {
            "type": "paragraph",
            "html": "Two additional governance features are currently marked as coming soon:"
          },
          {
            "type": "list",
            "items": [
              "approval workflow, for routing finished video through existing review and compliance processes;",
              "full audit trail, for tracking who created, edited and approved a video."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Because these are labelled coming soon, they should not be described as fully available early-access capabilities yet."
          }
        ]
      },
      {
        "id": "how-catalyst-differs-from-a-general-ai-assistant",
        "title": "How Catalyst differs from a general AI assistant",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A general-purpose model such as ChatGPT or Claude can help brainstorm an idea, outline a script or rewrite marketing copy. Catalyst's proposed value is what happens after that intelligence is produced."
          },
          {
            "type": "paragraph",
            "html": "Socialive says Catalyst connects the prompt to the infrastructure needed to create an enterprise-ready video: existing recordings, static content, brand rules, templates, production tools, permissions and, over time, approval and publishing systems."
          },
          {
            "type": "paragraph",
            "html": "In other words, the product is positioned less as a standalone foundation model and more as an AI-native control layer for the video production stack Socialive has already built."
          }
        ]
      },
      {
        "id": "who-is-catalyst-for",
        "title": "Who is Catalyst for?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Socialive primarily positions its platform for organizations creating video at scale, including marketing teams and field sellers."
          },
          {
            "type": "paragraph",
            "html": "Potential use cases described or directly implied by the company's materials include:"
          },
          {
            "type": "list",
            "items": [
              "converting webinars into short-form social clips;",
              "turning a market report or PDF into a promotional video;",
              "converting an executive recording into a polished company update;",
              "creating branded thought-leadership content without requiring every employee to learn professional editing software;",
              "repurposing existing footage, images and graphics into new campaign assets;",
              "applying brand templates consistently across a larger team."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "The strongest fit is therefore likely to be organizations where video creation is not just a creative task but also a workflow involving brand consistency, permissions and approvals."
          }
        ]
      },
      {
        "id": "socialive-catalyst-availability",
        "title": "Socialive Catalyst availability",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Socialive says early access begins in September 2026 for a select group of its customers. General availability is planned for October 2026."
          },
          {
            "type": "paragraph",
            "html": "A planned date is not the same as a guaranteed release date. Teams evaluating Catalyst should check the current Socialive product page before assuming that general availability has occurred."
          },
          {
            "type": "paragraph",
            "html": "The official announcement page itself contains a small date inconsistency: the page header shows September 11, 2026, while the press-release body is explicitly dated September 14, 2026. This article treats September 14 as the announcement event date because that is the date stated in the release body."
          }
        ]
      },
      {
        "id": "socialive-catalyst-pricing",
        "title": "Socialive Catalyst pricing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Socialive has not published a Catalyst-specific self-serve price in the primary materials reviewed for this article. The product page currently directs prospective customers to request a demo."
          },
          {
            "type": "paragraph",
            "html": "That means any specific Catalyst price, seat fee, usage allowance or generation quota would be speculative unless Socialive publishes it or provides it directly to a customer."
          }
        ]
      },
      {
        "id": "is-there-a-catalyst-api",
        "title": "Is there a Catalyst API?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "No public Catalyst-specific API was verified in the launch materials reviewed here. Catalyst is currently presented as a product experience within the Socialive platform."
          },
          {
            "type": "paragraph",
            "html": "Developers should not assume API availability, model identifiers or programmatic pricing until Socialive publishes documentation."
          }
        ]
      },
      {
        "id": "what-is-confirmed-now-versus-coming-later",
        "title": "What is confirmed now versus coming later?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Confirmed in current official materials:"
          },
          {
            "type": "list",
            "items": [
              "natural-language prompt-based video creation;",
              "a conversational project-planning workflow;",
              "generation of ideas, topics, scripts, visuals and clips;",
              "input from documents, recordings and existing assets;",
              "long-form content repurposing;",
              "branded templates and themes;",
              "role-based permissions;",
              "September early access for selected customers;",
              "planned October 2026 general availability."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "Explicitly marked coming soon or described as future vision:"
          },
          {
            "type": "list",
            "items": [
              "approval workflow;",
              "full audit trail;",
              "broader compliance-review orchestration;",
              "end-to-end publishing orchestration across enterprise systems."
            ],
            "ordered": false
          },
          {
            "type": "paragraph",
            "html": "This distinction may change quickly as the beta progresses, so it should be reverified immediately before publication or any later update."
          }
        ]
      },
      {
        "id": "why-catalyst-could-matter-for-creator-and-marketing-workflows",
        "title": "Why Catalyst could matter for creator and marketing workflows",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The broader trend behind Catalyst is the move from isolated generative features toward AI systems that coordinate complete creative workflows."
          },
          {
            "type": "paragraph",
            "html": "For marketing teams, the bottleneck is often not writing one script or generating one clip. It is turning an idea into something that follows brand rules, uses approved assets, survives review and can be distributed repeatedly across campaigns."
          },
          {
            "type": "paragraph",
            "html": "Catalyst is an early example of a video platform trying to make that orchestration conversational. If the general-availability product delivers the workflow described in Socialive's launch materials, the relevant comparison will not only be with AI video generators. It will also be with the collection of editing, repurposing, brand-management and workflow tools a team would otherwise use separately."
          }
        ]
      },
      {
        "id": "faq",
        "title": "FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "When did Socialive announce Catalyst?"
          },
          {
            "type": "paragraph",
            "html": "The press-release body is dated September 14, 2026. The same web page displays a September 11 header date, so the page contains a date inconsistency that should be kept in mind."
          },
          {
            "type": "subheading",
            "text": "Is Socialive Catalyst available now?"
          },
          {
            "type": "paragraph",
            "html": "Socialive says selected customers are receiving early access during September 2026. General availability is planned for October 2026."
          },
          {
            "type": "subheading",
            "text": "Can Catalyst turn a PDF into video?"
          },
          {
            "type": "paragraph",
            "html": "Socialive's product page says documents including decks, PDFs, blog posts and reports can become scripts that feed the video workflow."
          },
          {
            "type": "subheading",
            "text": "Can Catalyst turn a webinar into clips?"
          },
          {
            "type": "paragraph",
            "html": "Yes. Socialive explicitly describes recordings such as webinars and interviews as inputs and highlights long-form-to-short-form repurposing as a use case."
          },
          {
            "type": "subheading",
            "text": "Does Catalyst keep videos on-brand?"
          },
          {
            "type": "paragraph",
            "html": "Socialive says Catalyst uses lockable brand kits, templates and themes within the organization's existing platform controls. This is a first-party product claim and should be validated in a team's own implementation."
          },
          {
            "type": "subheading",
            "text": "Does Catalyst include approval and compliance workflows?"
          },
          {
            "type": "paragraph",
            "html": "The public product page marks approval workflow and full audit trail as coming soon. Socialive describes deeper compliance and publishing orchestration as part of the longer-term vision, so those capabilities should not be assumed to be fully available in early access."
          },
          {
            "type": "subheading",
            "text": "How much does Catalyst cost?"
          },
          {
            "type": "paragraph",
            "html": "No Catalyst-specific public price was verified from the current primary sources. The product page asks prospective customers to request a demo."
          },
          {
            "type": "subheading",
            "text": "Is there a public Catalyst API?"
          },
          {
            "type": "paragraph",
            "html": "No public Catalyst-specific API documentation was verified in the launch materials reviewed for this article."
          }
        ]
      },
      {
        "id": "sources",
        "title": "Sources",
        "blocks": [
          {
            "type": "paragraph",
            "html": "This article is based primarily on Socialive's September 2026 Catalyst announcement, the official Catalyst product page and Socialive's current resource center. Product capabilities and availability should be rechecked as the beta progresses toward planned general availability."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "socialive.us — socialive catalyst announcement",
        "url": "https://socialive.us/resources/socialive-catalyst-announcement"
      },
      {
        "label": "socialive.us — catalyst",
        "url": "https://socialive.us/catalyst"
      },
      {
        "label": "socialive.us — resources",
        "url": "https://socialive.us/resources"
      }
    ],
    "relatedPaths": []
  }
];
