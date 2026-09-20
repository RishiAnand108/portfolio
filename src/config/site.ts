/**
 * Single source of truth for personal details, links and homepage copy.
 * Edit this file to update the site — no component changes required.
 *
 * Links left as an empty string are hidden everywhere on the site,
 * so nothing unverified or broken is ever rendered.
 */

export interface NavItem {
  label: string;
  path: string;
}

export interface FocusItem {
  area: string;
  detail: string;
}

export const site = {
  name: 'Rishikesh',
  /** Full name, used where the longer form reads better (e.g. the footer). */
  fullName: 'Rishikesh Prasad',
  title: 'Rishikesh — Backend Engineer · AI/ML Builder',
  role: 'Backend Engineer · AI/ML Builder',
  description:
    'Rishikesh is a backend engineer and AI/ML builder working with Python, APIs, databases, automation and machine learning.',
  locale: 'en',

  /** Shown in the hero. Set `show: false` to hide it. */
  availability: {
    show: true,
    label: 'Open to backend & AI/ML opportunities',
  },

  /**
   * When true, content marked `draft: true` (unverified experience entries,
   * in-progress case studies) is shown with a visible "Draft" label.
   * Set to false to hide all draft content from the built site.
   */
  showDraftContent: true,
} as const;

export const links = {
  // TODO: replace with your real address before deploying.
  email: 'hello@example.com',
  // Taken from the local git user name — change it if your profile differs.
  github: 'https://github.com/RishiAnand108',
  // TODO: add your LinkedIn profile URL, e.g. https://www.linkedin.com/in/your-handle
  linkedin: '',
  // TODO: put resume.pdf in /public and set this to '/resume.pdf' (or use any external URL).
  resume: '',
} as const;

export const nav: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects/' },
  { label: 'About', path: '/about/' },
  { label: 'Experience', path: '/experience/' },
  { label: 'Contact', path: '/contact/' },
];

export const hero = {
  headline: 'Building reliable backend systems and practical AI solutions.',
  supporting:
    'I work with Python, APIs, databases, automation and machine learning to turn ideas into useful, dependable products.',
};

/**
 * The small "API response" card in the hero. Keys and values are rendered as JSON,
 * so keep them short and factual.
 */
export const profile: Record<string, string | string[]> = {
  role: 'Backend Engineer',
  also: 'AI/ML Builder',
  education: 'B.Tech, AI & DS',
  stack: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Docker'],
  interests: ['APIs', 'databases', 'automation', 'machine learning'],
};

/** Homepage "Currently building" section. */
export const currentFocus: FocusItem[] = [
  {
    area: 'Backend engineering',
    detail: 'Designing APIs, data models and services with FastAPI, Django and PostgreSQL.',
  },
  {
    area: 'AI / ML',
    detail:
      'Applying machine learning and optimization to practical planning and health-signal problems.',
  },
  {
    area: 'Developer tools',
    detail: 'Automating repetitive work with scripts, containers and small internal tools.',
  },
  {
    area: 'Learning',
    detail: 'Going deeper on system design, cloud infrastructure and deploying models reliably.',
  },
];

export const aboutPreview =
  'I’m a final-year B.Tech student in AI & Data Science who enjoys the unglamorous parts of software: clean APIs, sensible schemas, and systems that keep working. I like pairing that foundation with machine learning when it genuinely solves the problem.';
