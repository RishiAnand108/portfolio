// Generates the social preview image and PNG/ICO favicons into /public.
// Run with: npm run og   (re-run after changing your name, role, or avatar)
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const NAME = 'Rishikesh';
const ROLE = 'Backend Engineer  |  AI/ML Builder';
const LINE_1 = 'I build the APIs, data and automation';
const LINE_2 = 'that products run on.';
const AVATAR = 'public/avatar.webp';

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
  <text x="80" y="330" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="46" font-weight="700" letter-spacing="-1" fill="#fafafa">${NAME}</text>
  <text x="80" y="374" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="24" fill="#a1a1aa">${ROLE}</text>
  <text font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" fill="#d4d4d8">
    <tspan x="80" y="460">${LINE_1}</tspan>
    <tspan x="80" y="502">${LINE_2}</tspan>
  </text>
  <line x1="0" y1="560" x2="1200" y2="560" stroke="#27272a" stroke-dasharray="1 5"/>
  <text x="80" y="596" font-family="Consolas, 'Courier New', monospace" font-size="18" letter-spacing="4" fill="#71717a">RISHIXCODES.ME</text>
</svg>`;

/** Head-focused square so 16×16/32×32 favicons still show the face. */
async function faceCrop(size, ratio = 0.5) {
  const { width = 0, height = 0 } = await sharp(AVATAR).metadata();
  const crop = Math.round(Math.min(width, height) * ratio);
  const left = Math.round((width - crop) / 2);
  const top = Math.max(0, Math.round(height * 0.03));
  return sharp(AVATAR)
    .extract({ left, top, width: crop, height: Math.min(crop, height - top) })
    .resize(size, size)
    .png()
    .toBuffer();
}

/** Wrap PNG buffers in a multi-size ICO. */
function pngsToIco(images) {
  const count = images.length;
  const header = 6 + 16 * count;
  let offset = header;
  const out = Buffer.alloc(header + images.reduce((sum, img) => sum + img.buffer.length, 0));
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  let entry = 6;
  for (const img of images) {
    out.writeUInt8(img.width >= 256 ? 0 : img.width, entry);
    out.writeUInt8(img.height >= 256 ? 0 : img.height, entry + 1);
    out.writeUInt8(0, entry + 2);
    out.writeUInt8(0, entry + 3);
    out.writeUInt16LE(1, entry + 4);
    out.writeUInt16LE(32, entry + 6);
    out.writeUInt32LE(img.buffer.length, entry + 8);
    out.writeUInt32LE(offset, entry + 12);
    entry += 16;
    offset += img.buffer.length;
  }
  offset = header;
  for (const img of images) {
    img.buffer.copy(out, offset);
    offset += img.buffer.length;
  }
  return out;
}

async function roundedAvatar(size, radius) {
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#fff"/></svg>`,
  );
  return sharp(AVATAR)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

const ogBase = await sharp(Buffer.from(og)).png().toBuffer();
const ogAvatar = await roundedAvatar(74, 8);
await sharp(ogBase)
  .composite([{ input: ogAvatar, top: 183, left: 83 }])
  .png()
  .toFile('public/og.png');

const favicon16 = await faceCrop(16, 0.46);
const favicon32 = await faceCrop(32, 0.46);
await writeFile('public/favicon-16.png', favicon16);
await writeFile('public/favicon-32.png', favicon32);
await writeFile('public/apple-touch-icon.png', await faceCrop(180, 0.58));
await writeFile(
  'public/favicon.ico',
  pngsToIco([
    { width: 16, height: 16, buffer: favicon16 },
    { width: 32, height: 32, buffer: favicon32 },
  ]),
);

console.log(
  'Generated public/og.png, public/favicon-16.png, public/favicon-32.png, public/favicon.ico, public/apple-touch-icon.png',
);
