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
- Vercel uses `vercel.json` `buildCommand` (installs chromium, builds, makes PDF, rebuilds so the PDF lands in `dist`).
- `.github/workflows/deploy.yml` validates the build + PDF generation on every PR.
