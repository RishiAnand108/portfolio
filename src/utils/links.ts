import { TODO } from '@/config/site';

/** True when a link value is the 'TODO' placeholder. */
export function isTodo(value: string | undefined): value is typeof TODO {
  return value === TODO;
}

/** True when a link should be rendered at all (as a link or a placeholder). */
export function isShown(value: string | undefined): value is string {
  return typeof value === 'string' && value !== '';
}
