# Cloudflare Pages migration

Status: application prepared and Node 22 CI passed; production remains on Vercel until the Pages preview and staged DNS gates pass.

## Source and deployment authority

- Repository: `Projectmonetspace/ProjectMonetspace`.
- Canonical origin: `https://www.projectmonet.space` in production and previews.
- Cloudflare account: Project Monet Space, `6d16e9821bf33137f510075623d38c7f`.
- Target: Pages native Git integration with this existing repository; no competing Wrangler/Actions deployment.
- Build command: `npm run build:cloudflare`; output: `out`; root: repository root; Node: `.node-version` (22.16.0).
- GitHub Actions validates the normal Next build and the static export. Pages builds its own exact Git commit.
- `deployment.json` identifies the artifact commit. Production certification requires `EXPECTED_COMMIT` to match it.

## Static application contract

The static build sets `PM_STATIC_EXPORT=1`; the normal build command remains available for Vercel rollback compatibility. The existing article OG component is rendered by Next during the build using `force-static` and published-only `generateStaticParams`. The deployment contains real PNG files at `/blog/[slug]/og`, with explicit `image/png` headers and 1200 × 630 dimensions. It contains no request-time OG function.

All three sitemap handlers export once per build. Their existing registry logic, parent sitemap index, child grouping and content modification dates remain unchanged. The baseline has 190 published articles and 240 canonical sitemap URLs (44 pages and 196 blog/project URLs); validators derive counts from the registry rather than freezing those totals.

Local public images receive lossless WebP responsive variants; original media remains byte-for-byte unchanged. The existing unoptimized blog image uses its stable PNG endpoint. `_headers` preserves the shared security policy, immutable hero/static assets, and sitemap cache directives. `404.html` is retained to prevent Pages SPA fallback.

Forms, Web3Forms identifiers, consent, attribution and GA4 `G-5QS7ECZJGD` are unchanged. No editorial content or unpublished records are added by this migration.

## Validation

Run `npm ci --ignore-scripts`, `npm run audit:production`, `npm test`, `npm run lint`, `npm run build`, `npm run build:cloudflare` and `npm run typecheck`.

The static build verifies every sitemap route, canonical, OG PNG, date, cluster link, source asset, and Pages file/size limit. Run `PRODUCTION_BASE_URL=<preview-origin> EXPECTED_COMMIT=<commit> npm run verify:production` against the Pages preview, then against the real www domain after cutover. Preview canonicals must still use the production origin.

## Rollback baseline

Captured 11 September 2026:

- Main and Vercel production commit: `9b37901b1408c88937cc14e33dd7a97b291001d8`.
- Vercel project: `projectmonet-space`, `prj_aRGk6X5M6xl7DZo7SkEaXNhi5ynG`.
- Ready production deployment: `dpl_CZ3kE8y1Zp96HtpznbuekkdX32JY`.
- Immutable deployment: `https://projectmonet-space-2gez69fx3-projectmonetspace-5001s-projects.vercel.app`.
- Hostinger domain ID: `27996158`.
- www CNAME: `eb352c15703a72ef.vercel-dns-017.com`, TTL 300.
- Apex A: `216.198.79.1`, TTL 14400.
- DNS inventory: 12 records across 10 groups, including Hostinger MX/SPF, three DKIM CNAMEs, DMARC, Google verification, autodiscover and autoconfig.

Do not delete Vercel. After Cloudflare becomes authoritative, an emergency web rollback can restore the recorded www Vercel CNAME as DNS-only while preserving all mail records. Inspect current deployment/domain state before making that change. Registrar nameserver rollback is a separate manual checkpoint.

## Cutover and automation gates

Preview verification precedes zone creation. Then independently verify the zone, take fresh Hostinger DNS, compare/copy every record, verify mail and DNSSEC/parent DS, and pause for the nameserver change. Verify authoritative DNS and zone activation before custom-domain routing. Require an active Pages custom-domain certificate before testing production routing; retain immediate DNS rollback capability.

Work Publisher remains paused until the Cloudflare production path is certified and its instructions are updated. SEO Radar remains enabled. Intended publisher path: Approved → focused branch/PR → CI and Pages preview → merge → Pages deployment for exact merge commit → real-domain production smoke → Notion Published + Verified. Search crawl and analytics ingestion delays are observation items, not automatic rollback triggers.

## Pages resource checkpoint — 12 September 2026

The user connected GitHub and created the existing-repository Pages project `projectmonetspace`, ID `9ce7258a-caf2-4e01-ab0c-90ca7355587a`, in the verified Project Monet Space account. Its preview origin is `https://projectmonetspace.pages.dev`; production branch is `main` with preview branches enabled. The build configuration is now `npm run build:cloudflare` → `out`. The initial blank-build deployment is not migration evidence. This branch push triggers the first configured native Git preview. CI passed at `0cedce34613fd711387bbd4c5e192618ce162f1a` (run 34686873788). Node 22 scripts explicitly enable native TypeScript stripping; `tsc --noEmit` remains a separate required check. No custom domain or zone has been added.
