/**
 * Single source of truth for personal details, links, navigation and hero copy.
 * Edit this file to update the site — no component changes required.
 *
 * Link values:
 *   - a URL            → rendered as a normal link
 *   - the string 'TODO' → rendered as a visible, disabled placeholder
 *   - an empty string   → hidden everywhere
 */

export const TODO = 'TODO';

export interface NavItem {
  label: string;
  /** Anchor on the single page. */
  path: string;
  /** Section id used by the scroll-spy. Must match the section's `id`. */
  section: string;
}

export const site = {
  name: 'Rishikesh',
  /** Short name used in the hero heading. */
  shortName: 'Rishi',
  /** Full name, used in the footer and metadata. */
  fullName: 'Rishikesh Prasad',
  title: 'Rishikesh — Backend Engineer | AI/ML Builder',
  role: 'Backend Engineer | AI/ML Builder',
  description:
    'Rishikesh is a backend engineer and AI/ML builder working with Python, FastAPI, Django, PostgreSQL and machine learning to build reliable APIs, data pipelines and automation.',
  locale: 'en',

  /**
   * Profile photo shown in the hero, as a path inside /public (e.g. '/avatar.webp').
   * Leave empty to show a monogram fallback.
   */
  avatar: '/avatar.webp',

  /** Shown in the hero. Set `show: false` to hide it. */
  availability: {
    show: true,
    label: 'Open to backend & AI/ML roles',
  },

  /**
   * Cinematic banner above the profile row. Paths are inside /public.
   * Generate both files from any image with:  npm run banner -- path/to/image.png
   * Set `src` to '' to show a plain dot-grid strip instead.
   */
  banner: {
    src: '/images/hero-banner.webp',
    srcSmall: '/images/hero-banner-800.webp',
    width: 1600,
    height: 600,
    alt: 'Illustration of a student coding at a desk by a window at night, with a lamp, a stack of books, a sleeping cat and a city skyline under a crescent moon.',
  },

  /** Live clock in the banner corner. Any IANA time zone id works. */
  clock: {
    show: true,
    timeZone: 'Asia/Kolkata',
    label: 'IST',
  },
} as const;

export const links = {
  email: 'risanand108@gmail.com',
  github: 'https://github.com/RishiAnand108',
  linkedin: 'https://www.linkedin.com/in/rishianand108/',
  // TODO (Rishikesh): put resume.pdf in /public and set this to '/resume.pdf' (or any external URL).
  resume: TODO,
} as const;

/**
 * Desktop side index — the site's only navigation. Every entry is a section
 * on the home page, in page order.
 */
export const sideIndex: NavItem[] = [
  { label: 'Experience', path: '/#experience', section: 'experience' },
  { label: 'Projects', path: '/#projects', section: 'projects' },
  { label: 'Skills', path: '/#skills', section: 'skills' },
  { label: 'Highlights', path: '/#highlights', section: 'highlights' },
];

export const hero = {
  tagline: 'Backend engineer. I build the APIs, data and automation that products run on.',
  bullets: [
    'Currently at a market research startup: backend services, data pipelines, automation and AI integrations.',
    'Python, FastAPI, Django and PostgreSQL are my daily tools; Docker and Git package and ship the result.',
    'I bring AI/ML into products where it solves a real problem — models behind APIs, not notebooks.',
    'B.Tech in Artificial Intelligence and Data Science, with an eye on scalable systems and audio AI.',
  ],
};
