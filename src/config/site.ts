/**
 * Single source of truth for personal details, links and page copy.
 * Edit this file to update the site — no component changes required.
 *
 * Links left as an empty string are hidden everywhere on the site,
 * so nothing unverified or broken is ever rendered.
 */

export interface NavItem {
  label: string;
  /** Anchor on the single page, or a real path. */
  path: string;
  /** Section id used by the scroll-spy. Omit for plain links. */
  section?: string;
}

export interface FocusItem {
  area: string;
  detail: string;
}

export const site = {
  name: 'Rishikesh',
  /** Full name, used where the longer form reads better (e.g. the footer). */
  fullName: 'Rishikesh Prasad',
  title: 'Rishikesh — Backend Engineer · AI/ML Developer',
  role: 'Backend Engineer · AI/ML Developer',
  description:
    'Rishikesh is a backend engineer and AI/ML developer working with Python, FastAPI, Django, PostgreSQL and machine learning to build reliable APIs, data pipelines and automation.',
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
  email: 'risanand108@gmail.com',
  github: 'https://github.com/RishiAnand108',
  // TODO (Rishikesh): add your LinkedIn profile URL, e.g. https://www.linkedin.com/in/your-handle
  linkedin: '',
  // TODO (Rishikesh): put resume.pdf in /public and set this to '/resume.pdf' (or any external URL).
  resume: '',
} as const;

/** Single-page anchors. `section` must match the id rendered by each section component. */
export const nav: NavItem[] = [
  { label: 'Home', path: '/#home', section: 'home' },
  { label: 'About', path: '/#about', section: 'about' },
  { label: 'Experience', path: '/#experience', section: 'experience' },
  { label: 'Projects', path: '/#projects', section: 'projects' },
  { label: 'Skills', path: '/#skills', section: 'skills' },
  { label: 'Achievements', path: '/#achievements', section: 'achievements' },
  { label: 'Contact', path: '/#contact', section: 'contact' },
];

export const hero = {
  headline: 'Building reliable backend systems and practical AI solutions.',
  supporting:
    'I’m a backend engineer and AI/ML developer working with Python, FastAPI, Django and PostgreSQL. I build APIs, data pipelines and automation, and I use machine learning where it genuinely solves the problem.',
};

/**
 * The small "API response" card in the hero. Keys and values are rendered as JSON,
 * so keep them short and factual.
 */
export const profile: Record<string, string | string[]> = {
  role: 'Backend Engineer',
  also: 'AI/ML Developer',
  education: 'B.Tech, AI & Data Science',
  stack: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Docker'],
  interests: ['APIs', 'automation', 'scalable systems', 'audio AI'],
};

/** "Currently focused on" list, shown inside the About section. */
export const currentFocus: FocusItem[] = [
  {
    area: 'Backend engineering',
    detail: 'Designing APIs, data models and services with FastAPI, Django and PostgreSQL.',
  },
  {
    area: 'AI / ML',
    detail:
      'Supervised learning with scikit-learn and XGBoost, plus LLM integrations inside real products.',
  },
  {
    area: 'Automation',
    detail: 'Replacing repetitive manual work with scripts, scheduled jobs and internal tooling.',
  },
  {
    area: 'Learning',
    detail: 'Going deeper on system design, scalable architecture and deploying models reliably.',
  },
];
