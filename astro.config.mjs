// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL  – the public origin of the deployed site (used for canonical URLs, sitemap, OG tags).
// BASE_PATH – only needed when the site is served from a sub-path, e.g. GitHub Pages
//             project sites: BASE_PATH=/portfolio
const site = process.env.SITE_URL || 'https://rishixcodes.me';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: false,
    },
  },
});
