import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * The site is a single page plus one case study per project.
 * The old multi-page URLs are kept alive as redirects so nothing that already
 * links to them breaks; they are excluded from the sitemap below.
 */
const sectionRedirects = {
  '/about': '/#about',
  '/experience': '/#experience',
  '/projects': '/#projects',
  '/skills': '/#skills',
  '/achievements': '/#achievements',
  '/contact': '/#contact',
};

export default defineConfig({
  site: 'https://rishixcodes.me',
  base: '/',
  output: 'static',
  redirects: sectionRedirects,
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return !Object.keys(sectionRedirects).includes(path);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
