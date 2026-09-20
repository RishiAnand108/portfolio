const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the configured base path (needed for GitHub Pages sub-paths). */
export function href(path: string): string {
  if (/^([a-z]+:|#|\/\/)/i.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Current pathname without the base path and without a trailing slash ("/" for home). */
export function normalizePath(pathname: string): string {
  let p = pathname;
  if (base && p.startsWith(base)) p = p.slice(base.length);
  p = p.replace(/\/$/, '');
  return p === '' ? '/' : p;
}

export function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
