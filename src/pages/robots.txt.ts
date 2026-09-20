import type { APIRoute } from 'astro';
import { href } from '@/utils/url';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(href('/sitemap-index.xml'), site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
