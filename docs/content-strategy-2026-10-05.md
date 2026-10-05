# ProjectMonet.space: website, search and conversion pivot

Effective 5 October 2026. Scope: ProjectMonetspace/ProjectMonetspace and projectmonet.space only. All external account access uses Composio. This strategy supersedes general AI/model/creator-news discovery and publish-all instructions in the earlier SEO OS.

## Decision and limits

Make the site useful to people planning, improving or buying a business website. Prioritise existing commercial intent owners, practical website/search workflows and clearly labelled concept/build reasoning. Keep historical search value accessible without allowing the archive to define the homepage or blog positioning.

Inventory: 367 published blog URLs, 14 resource guides, existing services, industries and six work concepts. Blog decisions: **244 KEEP, 8 IMPROVE, 13 MERGE and 102 PURGE**. Four existing resources also receive improvements. After implementation: **252 live blog URLs and 302 total canonical sitemap URLs**. No new articles are published in this cleanup.

The 252 retained articles comprise 29 website/search/business-workflow guides and 223 legacy holds: 19 with observed search/organic activity, five necessary parents and 199 newer articles with an incomplete observation window. KEEP does not mean every article is a proven winner. The newer archive needs a later review after a useful measurement window, with backlink checks when available.

The full URL ledger is [content-url-decisions-2026-10-05.csv](content-url-decisions-2026-10-05.csv). No deletion is justified by low clicks alone. Purges combine topical mismatch, publication by 5 September, at least 28 finalized observation days and no observed row in either GSC or organic landing data. Missing rows mean no activity was observed in these reports, not that Google never indexed a page or that it has no backlinks. Five potential deletions were preserved to avoid orphaning retained supporting articles.

**Material risk:** Ahrefs/backlink access was unavailable. Referring domains and backlinks are UNKNOWN, not zero. The purge is therefore a bounded first pass with recoverable source history, not a complete proof of absence of off-site value. GA4 consent and instrumentation can also undercount activity. The dataset is young and small. No article generated a recorded key event in the retrieved organic landing report; founder/test traffic has not been established as customer proof. Do not claim an SEO or conversion win from this cleanup before subsequent evidence exists.

## Evidence

GSC finalized window: 5 July–2 October 2026; recent 28 days: 5 September–2 October; preceding 28 days: 8 August–4 September. GA4: the same 90-day dates, organic landing pages, property 550411590. Property timezone is Asia/Calcutta. URL-level clicks/impressions and organic sessions are recorded in the ledger; rankings are averages, not a tracked fixed keyword rank.

| Retained article | 90-day GSC clicks | Impressions | Average position | Organic landing sessions | Key events |
| --- | ---: | ---: | ---: | ---: | ---: |
| ClaudeForce | 43 | 2,005 | 9.09 | 22 | 0 |
| Qwen local setup | 27 | 3,392 | 8.24 | 6 | 0 |
| Photoshop prompt-to-edit | 18 | 1,054 | 7.60 | 4 | 0 |
| Gemini Transcribe | 5 | 1,064 | 8.27 | 1 | 0 |
| Gemini Omni vs Veo | 3 | 2,164 | 5.23 | 2 | 0 |

Qwen local setup rose from four to 23 clicks across the compared 28-day windows. ClaudeForce decreased from 30 to 13 clicks, while its average position improved from 9.55 to 8.37. These pages retain observed value despite topical mismatch. Neither movement proves a business outcome. The homepage's 66 GSC clicks and GA4 activity are not being counted as content leads.

Existing website intent signals are small: one-page vs multi-page has six impressions (average position 11.17); Google Business Profile vs website has 17 (59.76); website cost India has four (22.5); local website sections has four (26.5). These are reasons to strengthen existing owners, not manufacture new competing URLs. The “monett web design” query is an ambiguous brand/typo signal, not validated demand for our service.

## URL and implementation rules

- The 13 overlapping guides consolidate into eight owners: MentionOS, Rankly, Fimo, Staats, Olostep, Marketing Skills, StackScope and Optimizely Virtual Teammates. Product setup, permissions, business workflow and limits now live in the owner guide. The owner retains its original publication date and has a substantive 5 October modification date.
- Exact old canonical paths and their .html variants receive 301 redirects to the corresponding live owner. There are no redirect chains and no homepage catch-all. Old OG routes cease to be generated.
- The 102 no-replacement purges return genuine 404 responses. A scoped Pages handler resolves retired paths before requesting assets, embeds the existing branded 404.html and sends no-store for clean paths, .html aliases and descendants including old OG URLs. Some data centers continued serving old articles after whole-zone and URL purges, so relying on asset absence alone was insufficient. They leave the blog registry, blog listing, sitemap, OG inventory and retained internal links. A redirect is appropriate only when the replacement answers the old intent.
- Registry processing maps merged links and unwraps purged links to readable text. Supporting relationships are generated from the surviving inventory. Retired source modules remain recoverable in the repository but cannot render or be restored by an old import alone.
- The blog leads with existing website planning resources, honest concepts and relevant workflows. Every retained legacy article still has a crawlable server-rendered archive link. Archive traffic is not presented as paid client proof.
- Existing website cost, page-count, GBP comparison and website-section resource URLs gain clearer answers, decision criteria and relevant concept/service links. Pricing scope is preserved. Work concepts remain speculative; no lead, revenue or ranking outcomes are invented.
- Current vendor documentation is linked. Consolidated guides avoid frozen vendor price claims and unsupported performance promises. Staats installation guidance uses the documented data-staats attribute. Google AI search guidance does not require a special AI schema or an additional AI file.
- Next.js, related packages and the vulnerable baseline mapping dependency are patched; Inter retains 400/600 weights and is bundled through next/font/local. No original image or video media is altered.

## Qualification and production workflow

Each new published slug must include a typed editorial brief: website-search-conversion focus, named business purpose and audience, original contribution, evidence URLs, relevant /services/ path and CTA. A frozen legacy allowlist prevents backdating a new model-news slug to bypass this gate. Web, SEO and directly relevant Marketing/Automation workflows may qualify; pure model/creator news does not. The code gate checks the brief's presence and category; substantive relevance still requires editorial review. Do not treat a filled-in field as proof.

1. Read this strategy and the current Notion authority section. Retrieve GSC/GA4 and inspect actual enquiries using Composio. Do not infer leads from clicks.
2. Deduplicate against the live registry and 14 resource guides. Improve an existing intent owner whenever appropriate.
3. Research primary facts; document unknowns. Distinguish business evidence, vendor claims and inference. Use real build/concept reasoning without pretending it is a paid case study.
4. Draft around the actual customer decision. Link to a useful service, proof and next step. Do not impose a fixed pillar/cluster quota or add a sales pitch unrelated to the reader's task.
5. Run publication eligibility, content/relationship/link tests, lint, dependency audit, typecheck, standard build and static export verification.
6. Create a PR via Composio, wait for green exact-head checks, merge the checked SHA and verify Cloudflare production for the exact merge commit. Verify every retained article and OG image, canonical, sitemap, removed URL and redirect. Only then set live records Published + Verified and retired records Archived.
7. Review later performance and enquiry quality. Update claims and decisions when evidence changes; never declare causation from a small uncontrolled before/after sample.

Unpublished queue: 75 unrelated model/tool/creator-news records are Archived; 30 website-adjacent records return to Research. Research is not publishing eligible: these must be reframed and qualify against the new brief. Prior research and notes are retained.

**Scheduler limitation:** Composio exposes no action to edit the ChatGPT SEO Radar/Publisher task schedule or prompt. Notion operating steps, authority and queue have been changed, and the repository blocks new unqualified publication. This does not establish that the old scheduler itself was disabled. Scheduled runners must read the new authority before doing work; scheduler administration remains a specific outstanding external capability. Do not disable unrelated GitHub security or production-verification schedules.

## Ten new article priorities

These are ranked editorial recommendations, not verified keyword-volume opportunities or publish-ready drafts. Search volume, KD and backlink competition remain unverified. Broad SERP searches established that redesign/migration and outbound measurement are covered topics; a per-query SERP/intent and overlap review is required before approving each new URL. Prioritise the four existing resource improvements before creating these.

| Rank | Distinct proposed query / article | Buyer purpose and original contribution | Service / CTA and internal links | Why this order |
| --- | --- | --- | --- | --- |
| 1 | Small-business website redesign checklist without losing search visibility | Owners replacing a site; use this site's actual migration, URL ledger and verification workflow as a clearly labelled build example, without promising ranking preservation | Website services; request a scoped review. Link website brief, ownership and work concepts | Strong commercial trigger plus evidence we can supply |
| 2 | Track call and WhatsApp clicks in GA4 without counting every click as a lead | Businesses measuring enquiries; document this repository's consent-aware events and confirmed form-success logic with test-labelled examples | Website services; discuss an enquiry measurement plan. Link broad calls/WhatsApp guide and privacy | Specific implementation gap; distinct from advice about getting more enquiries |
| 3 | Why is my business website not indexed by Google? | Diagnose status, robots, canonical, sitemap and content eligibility using a reproducible decision tree and genuine examples | Website services; request a technical review. Link GBP vs website and website-section guide | Clear pain and bounded technical proof |
| 4 | SEO vs AEO vs GEO for a small-business website | Explain terminology, shared technical foundations, evidence and measurement limits using Google's AI-feature guidance and examples from our guides | Website services; plan the site around buyer questions. Link Rankly audit and GBP guide | Broad education that supports the service without unsupported AI promises |
| 5 | Service pages vs location pages for a local-business website | Decide when a URL has a genuinely different service/area purpose; contrast useful content with near-duplicate pages | Website services; agree page architecture. Link one-page vs multi-page and industry pages | Prevents thin expansion and informs scope |
| 6 | Interior-design portfolio pages that help customers compare studios | Studios organising real project proof; annotate the interior concept and provide a project-context template. Label speculative assets and require permission for client images | Website services; request an interior website concept. Link industry and interior concept pages | Strong visual contribution and buyer fit |
| 7 | Restaurant website SEO checklist: menus, hours and visit decisions | Restaurants with hard-to-read menus or scattered facts; annotate the restaurant concept and show crawlable menu/contact decisions | Website services; review restaurant site scope. Link restaurant industry/concept and GBP guide | Practical industry depth, distinct from the commercial landing page |
| 8 | Improve mobile website speed without ruining images or video | Businesses balancing performance and brand; show this build's responsive image delivery and untouched original media. Obtain real lab/field measurements before citing gains | Website services; discuss a performance review. Link website brief and work concepts | Demonstrable engineering detail; avoid invented PageSpeed results |
| 9 | Ecommerce product-page checklist for a small online store | Owners needing product, shipping, returns, trust and checkout clarity; annotate the Shop.co concept with explicit concept status | Website services; define store scope. Link ecommerce concept, cost and brief | Commercial relevance with a concrete design example |
| 10 | What happens during a Cloudflare Pages website launch? | Explain ownership, previews, build, redirects, 404s and verification using this site's actual release. Keep provider-plan claims current | Website services; discuss launch/handover scope. Link ownership, maintenance and redesign guide when published | Strong original proof, narrower buyer demand and more technical intent |

Do not create fresh cost, GBP-vs-website, one-page-vs-multi-page or generic website-section URLs: those intents already have owners.

## Primary guidance and vendor checks

- [Google: redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google: HTTP/network errors](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [GA4: outbound-click measurement](https://support.google.com/analytics/answer/13566436)
- [MentionOS terms](https://mentionos.ai/terms), [Rankly](https://rankly.nyxen.in/), [Fimo agents](https://fimo.ai/features/agents)
- [Staats agent workflows](https://www.staats.ai/docs/agent-workflows.html), [Olostep documentation](https://docs.olostep.com/get-started/welcome)
- [Marketing Skills repository](https://github.com/coreyhaines31/marketingskills), [StackScope data](https://stackscope.dev/data)
- [Optimizely Virtual Teammates overview](https://support.optimizely.com/hc/en-us/articles/47211851973261-Virtual-Teammates-overview)
- [Next.js ImageResponse advisory](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j)

## Validation and release acceptance

Local: 35 tests, lint, typecheck, standard build and Cloudflare static export pass; original media byte equality verified; all 252 OG PNGs are 1200×630; all 302 canonicals and sitemap entries align; retired routes/assets absent and all 13 replacement mappings verified. npm production audit reports zero vulnerabilities after patches. Blog paths now invoke a Pages Function; consolidations are excluded so their static redirects remain in force. Other site paths and static media do not invoke this handler. This uses the existing Functions allowance and does not change the plan. PR CI and exact-commit live acceptance are recorded separately in the release outcome in Notion and GitHub.
