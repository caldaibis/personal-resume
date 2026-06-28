# CLAUDE.md

Personal resume site. The resume is structured data rendered to both a web page and a PDF.

## Architecture
- **Single source of truth:** `src/data/resume.ts` (content) validated by `src/data/schema.ts` (Zod). Invalid data fails the build.
- `src/pages/index.astro` renders the resume; `src/components/Section.astro` is the section wrapper.
- `scripts/generate-pdf.mjs` boots an Astro `preview` server and uses Playwright (`emulateMedia('print')`) to write `public/resume.pdf`.
- Print styling lives in the `@media print` block of `src/styles/global.css`; `.no-print` hides elements from the PDF.

## Conventions
- Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js`); design tokens in the `@theme` block of `global.css`.
- Astro v7, static output. Node 22 in CI.

## Commands
- `npm run dev` — local dev
- `npm run build:pdf` — build site + regenerate PDF (run after editing resume content)

## Deploy
- Vercel runs `npm run build` only (per `vercel.json`). It does NOT generate the PDF — the Vercel build image lacks Chromium's system libs.
- `public/resume.pdf` is generated locally via `npm run build:pdf` and committed; Astro copies it into `dist`, so Vercel serves it as a static asset. Regenerate + commit it whenever resume content changes.
- `.github/workflows/deploy.yml` validates the build + PDF generation on every PR (Actions supports `playwright install --with-deps`).
