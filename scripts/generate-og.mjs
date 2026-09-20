// Generates the social preview image and PNG favicons into /public.
// Run with: npm run og   (re-run after changing your name or role below)
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const NAME = 'Rishikesh';
const ROLE = 'Backend Engineer · AI/ML Developer';
const LINE_1 = 'Building reliable backend systems';
const LINE_2 = 'and practical AI solutions.';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#141312"/>
  <rect x="0.5" y="0.5" width="1199" height="629" fill="none" stroke="#2e2c28"/>
  <text x="80" y="120" font-family="Consolas, 'Courier New', monospace" font-size="26" letter-spacing="7" fill="#ece9e2">${NAME.toUpperCase()}</text>
  <circle cx="1112" cy="111" r="8" fill="#f0935a"/>
  <text font-family="Georgia, 'Times New Roman', serif" font-size="74" fill="#ece9e2">
    <tspan x="80" y="330">${LINE_1}</tspan>
    <tspan x="80" y="420">${LINE_2}</tspan>
  </text>
  <line x1="80" y1="500" x2="1120" y2="500" stroke="#2e2c28"/>
  <text x="80" y="553" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="#a39e93">${ROLE}</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');

const favicon = await readFile('public/favicon.svg');
await sharp(favicon, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(favicon, { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

console.log('Generated public/og.png, public/favicon-32.png, public/apple-touch-icon.png');
