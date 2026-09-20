// Prepares the hero banner from any source image (PNG, JPG, WebP …).
//
//   npm run banner -- path/to/your-image.png
//
// Writes two WebP files into public/images/ — a 1600px version for desktop and
// high-DPI screens, and an 800px version for phones. Both are cropped to the
// banner's 8:3 aspect ratio, centred. Re-run whenever you change the image.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const source = process.argv[2];
if (!source) {
  console.error('Usage: npm run banner -- <path-to-image>');
  process.exit(1);
}

const OUT_DIR = 'public/images';
const variants = [
  { file: 'hero-banner.webp', width: 1600, height: 600, quality: 82 },
  { file: 'hero-banner-800.webp', width: 800, height: 300, quality: 80 },
];

await mkdir(OUT_DIR, { recursive: true });

const meta = await sharp(source).metadata();
console.log(`Source: ${source} (${meta.width}×${meta.height}, ${meta.format})`);

for (const v of variants) {
  const out = `${OUT_DIR}/${v.file}`;
  const info = await sharp(source)
    .resize({ width: v.width, height: v.height, fit: 'cover', position: 'centre' })
    .webp({ quality: v.quality })
    .toFile(out);
  console.log(`  → ${out}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
