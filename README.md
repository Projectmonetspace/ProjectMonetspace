# Project Monet

Production website for [Project Monet](https://www.projectmonet.space/), a website studio for local businesses.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm test
npm run build
npm run audit:production
```

The site is deployed to Vercel from the `main` branch. Do not commit credentials or environment files. The Web3Forms access key rendered in the browser is a public form identifier; abuse protection must be configured in Web3Forms and enforced by the form controls.

Security issues should be reported privately according to [SECURITY.md](SECURITY.md).
