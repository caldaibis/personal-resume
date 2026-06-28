# Personal Resume

A modern, dev-oriented personal resume. The resume is **structured, typed data** —
the website and a pixel-matching **PDF** are both generated from one source.

## Stack

- **[Astro](https://astro.build)** — zero-JS static output, fast by default
- **TypeScript + [Zod](https://zod.dev)** — resume content is schema-validated at build time
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling via the Vite plugin
- **[Playwright](https://playwright.dev)** — prints the live page to `public/resume.pdf`
- **Vercel** — hosting with preview deploys; **GitHub Actions** validates each PR

## Edit your resume

Everything you write lives in one file:

```
src/data/resume.ts      ← your content (validated against the schema)
src/data/schema.ts      ← the shape of a resume (rarely needs changing)
```

If a required field is missing or malformed, the build fails — not the page.

## Commands

| Command             | Action                                            |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Start the dev server at `localhost:4321`          |
| `npm run build`     | Build the static site to `./dist`                 |
| `npm run pdf`       | Generate `public/resume.pdf` from the built site  |
| `npm run build:pdf` | Build the site **and** generate the PDF           |
| `npm run preview`   | Preview the production build locally              |

## Customize the look

- Colors / fonts: `src/styles/global.css` (`@theme` block)
- Print/PDF behavior: the `@media print` rules in the same file
- Layout: `src/pages/index.astro`

## The PDF

`public/resume.pdf` is generated from the live page (`npm run build:pdf`) and
**committed to the repo**. Regenerate and commit it whenever you change the
resume — `git` then tracks the PDF alongside the source.

> Why committed instead of built on deploy? Vercel's build image lacks the system
> libraries headless Chromium needs, so the PDF is generated locally (or in CI,
> see `.github/workflows/deploy.yml`) and served as a static asset.

## Deploy

1. Push to GitHub.
2. Import the repo in Vercel (framework auto-detected as Astro; `vercel.json`
   runs `npm run build`).
3. Vercel serves the site and the committed `/resume.pdf`. Every push redeploys.
