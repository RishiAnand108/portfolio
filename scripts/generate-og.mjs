// Generates the social preview image and PNG favicons into /public.
// Run with: npm run og   (re-run after changing your name or role below)
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const NAME = 'Rishikesh';
const ROLE = 'Backend Engineer  |  AI/ML Builder';
const LINE_1 = 'I build the APIs, data and automation';
const LINE_2 = 'that products run on.';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#3f3f46"/>
    </pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#000000"/>
  <rect width="1200" height="220" fill="url(#dots)"/>
  <rect width="1200" height="220" fill="url(#fade)"/>
  <line x1="0" y1="220" x2="1200" y2="220" stroke="#27272a" stroke-dasharray="1 5"/>
  <rect x="80" y="180" width="80" height="80" rx="10" fill="#09090b" stroke="#3f3f46" stroke-width="1.5"/>
  <text x="120" y="238" text-anchor="middle" font-family="Consolas, 'Courier New', monospace" font-size="38" font-weight="600" fill="#a1a1aa">${NAME.charAt(0)}</text>
  <text x="80" y="330" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="46" font-weight="700" letter-spacing="-1" fill="#fafafa">${NAME}</text>
  <text x="80" y="374" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="24" fill="#a1a1aa">${ROLE}</text>
  <text font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" fill="#d4d4d8">
    <tspan x="80" y="460">${LINE_1}</tspan>
    <tspan x="80" y="502">${LINE_2}</tspan>
  </text>
  <line x1="0" y1="560" x2="1200" y2="560" stroke="#27272a" stroke-dasharray="1 5"/>
  <text x="80" y="596" font-family="Consolas, 'Courier New', monospace" font-size="18" letter-spacing="4" fill="#71717a">RISHIXCODES.ME</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');

const favicon = await readFile('public/favicon.svg');
await sharp(favicon, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(favicon, { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

console.log('Generated public/og.png, public/favicon-32.png, public/apple-touch-icon.png');
