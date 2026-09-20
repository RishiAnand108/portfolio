/** Up to two uppercase initials, splitting on whitespace, '&' and '-'. */
export function initials(text: string): string {
  return text
    .split(/[\s&-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}
