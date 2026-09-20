// Static audit of the built site. Run after `npm run build`:  npm run audit
// Checks every HTML page for: one <h1>, no skipped heading levels, landmarks, lang attribute,
// image alt attributes, SEO meta tags, safe target="_blank" links and broken internal links.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)],
  );

const resolves = (link) => {
  const local = join(DIST, base && link.startsWith(base) ? link.slice(base.length) : link);
  if (!existsSync(local)) return false;
  return statSync(local).isFile() || existsSync(join(local, 'index.html'));
};

const requiredMeta = [
  '<title>',
  'name="description"',
  'rel="canonical"',
  'property="og:title"',
  'property="og:image"',
  'name="twitter:card"',
];

let failures = 0;

for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const issues = [];

  const headings = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  if (headings.filter((h) => h === 1).length !== 1) issues.push('expected exactly one <h1>');
  if (headings.some((h, i) => i > 0 && h - headings[i - 1] > 1))
    issues.push(`skipped heading level (${headings.join(' ')})`);

  if (!/<html lang=/.test(html)) issues.push('missing lang attribute');
  for (const landmark of ['<header', '<main', '<footer', '<nav'])
    if (!html.includes(landmark)) issues.push(`missing ${landmark}> landmark`);

  const imagesWithoutAlt = [...html.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\balt=/.test(m[0]));
  if (imagesWithoutAlt.length) issues.push(`${imagesWithoutAlt.length} <img> without alt`);

  const unsafeBlank = [...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].filter(
    (m) => !/noopener/.test(m[0]),
  );
  if (unsafeBlank.length) issues.push(`${unsafeBlank.length} target="_blank" without noopener`);

  const missingMeta = requiredMeta.filter((tag) => !html.includes(tag));
  if (missingMeta.length) issues.push(`missing meta: ${missingMeta.join(', ')}`);

  const internal = [...html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)]
    .map((m) => m[1])
    .filter((link) => !link.startsWith('//'));
  const broken = [...new Set(internal)].filter((link) => !resolves(link));
  if (broken.length) issues.push(`broken internal links: ${broken.join(', ')}`);

  const name = file.replaceAll('\\', '/');
  if (issues.length) {
    failures += 1;
    console.log(`FAIL  ${name}`);
    issues.forEach((issue) => console.log(`        - ${issue}`));
  } else {
    console.log(`ok    ${name}  (headings: ${headings.join(' ')})`);
  }
}

console.log(failures ? `\n${failures} page(s) with problems` : '\nAll pages pass');
process.exit(failures ? 1 : 0);
