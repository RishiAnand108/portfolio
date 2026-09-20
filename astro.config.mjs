import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * The site is a single page. Old URLs are kept alive as redirects so nothing
 * that already links to them breaks; they are excluded from the sitemap.
 *
 *  - the former section pages redirect to their homepage anchors
 *  - the former per-project case-study pages redirect to the Projects section
 */
const redirects = {
  '/about': '/',
  '/experience': '/#experience',
  '/projects': '/#projects',
  '/skills': '/#skills',
  '/achievements': '/#highlights',
  '/highlights': '/#highlights',
  '/contact': '/#contact',
  '/projects/crickathon-dashboard': '/#projects',
  '/projects/nagriksetu': '/#projects',
  '/projects/rail-optima': '/#projects',
  '/projects/wearable-ecg-ai': '/#projects',
  '/projects/edubook-api': '/#projects',
  '/projects/battery-inverter-calculator': '/#projects',
};

export default defineConfig({
  site: 'https://rishixcodes.me',
  base: '/',
  output: 'static',
  redirects,
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '');
        return !Object.keys(redirects).includes(path);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
