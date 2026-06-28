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

## Deploy

1. Push to GitHub.
2. Import the repo in Vercel (framework auto-detected as Astro).
3. Vercel runs the build in `vercel.json`, which installs Chromium and regenerates
   the PDF on every deploy, so `/resume.pdf` always matches the live site.
