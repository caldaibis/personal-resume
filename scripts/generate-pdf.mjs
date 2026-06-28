/**
 * Generates public/resume.pdf from the built site using a headless browser,
 * so the PDF and the web page always come from the same source.
 *
 * Usage:
 *   npm run build        # produces ./dist
 *   npm run pdf          # serves ./dist and prints to PDF
 * Or in one step:
 *   npm run build:pdf
 */
import { chromium } from 'playwright';
import { preview } from 'astro';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outFile = resolve(root, 'public/resume.pdf');

const server = await preview({ root, server: { host: '127.0.0.1', port: 0 } });
const url = `http://127.0.0.1:${server.port}/`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: outFile,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', bottom: '14mm', left: '14mm', right: '14mm' },
  });
  console.log(`✓ PDF written to ${outFile}`);
} finally {
  await browser.close();
  await server.stop();
}
