/**
 * Projects shown as cards on the homepage. One object per project.
 *
 * Links:
 *   - a URL            → rendered as a link
 *   - the string 'TODO' → rendered as a visible, disabled placeholder
 *   - omit the key      → nothing rendered (e.g. a library with no live demo)
 *
 * Status is optional. Leave it out until you know it: 'live' (deployed and
 * usable), 'building' (in progress) or 'planned' (not started).
 *
 * Descriptions are one or two lines. There are no case-study pages, so keep
 * anything longer for the repository itself.
 */
import type { ProjectCategory } from './categories';
import { TODO } from './site';

export type ProjectStatus = 'live' | 'building' | 'planned';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  status?: ProjectStatus;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'crickathon-dashboard',
    title: 'Crickathon Dashboard',
    description:
      'Dashboard platform with a FastAPI backend, user authentication, PostgreSQL storage and a containerised deployment.',
    category: 'backend',
    tech: ['FastAPI', 'PostgreSQL', 'Firebase', 'Next.js', 'Docker'],
    // TODO (Rishikesh): set status once known ('live' | 'building' | 'planned').
    github: TODO,
    demo: TODO,
  },
  {
    id: 'nagriksetu',
    title: 'NagrikSetu',
    description:
      'Django platform where citizens file municipal complaints and track their status through to resolution.',
    category: 'backend',
    tech: ['Django', 'Python', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/RishiAnand108/Nagriksetu',
    demo: TODO,
  },
  {
    id: 'rail-optima',
    title: 'Rail Optima',
    description:
      'Railway planning that pairs an XGBoost model for the predictive half of the problem with a CP-SAT solver for the hard constraints.',
    category: 'ai-ml',
    tech: ['Python', 'XGBoost', 'CP-SAT', 'Optimisation'],
    github: 'https://github.com/RishiAnand108/Rail-optima',
    demo: TODO,
  },
  {
    id: 'cardiorhythm-ai',
    // TODO (Rishikesh): the earlier content called this "Wearable ECG AI". Confirm the title
    // and add the repository link if github.com/RishiAnand108/CardioRhythm-AI is the same project.
    title: 'CardioRhythm-AI',
    description:
      'Research work on continuous ECG analysis with models light enough to run on wearable hardware.',
    category: 'research',
    tech: ['Python', 'Machine Learning', 'Signal Processing', 'Edge AI'],
    github: TODO,
  },
  {
    id: 'edubook-api',
    title: 'Edubook API',
    description:
      'Backend API built with Django and Python over a relational database, with data models and business logic kept in one place.',
    category: 'backend',
    tech: ['Django', 'Python', 'REST APIs'],
    github: 'https://github.com/RishiAnand108/Edubook-Api',
    demo: TODO,
  },
  {
    id: 'battery-inverter-calculator',
    title: 'Battery & Inverter Calculator',
    description:
      'Sizing tool that works out the battery capacity and inverter rating a given load and backup duration actually need.',
    category: 'tools',
    // TODO (Rishikesh): add the technologies used.
    tech: [],
    github: TODO,
    demo: TODO,
  },
];
