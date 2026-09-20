/**
 * Experience entries, most recent first. One object per role.
 *
 * Use the string 'TODO' for anything you have not confirmed yet — it is
 * rendered as a visible placeholder rather than hidden, so nothing is
 * silently invented. Metrics are optional and must be verifiable.
 */
import { TODO } from './site';

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  /** Free text, e.g. 'Jun 2025 – Present'. */
  dates: string;
  /** e.g. 'Remote', 'Hybrid · Pune', 'On-site'. */
  arrangement: string;
  bullets: string[];
  tech: string[];
  metrics?: { label: string; value: string }[];
  /** URL, 'TODO' or omitted. */
  link?: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'market-research-startup',
    // TODO (Rishikesh): replace with the company name.
    organization: 'Market research startup',
    // TODO (Rishikesh): replace with the exact title on your contract if it differs.
    role: 'Backend Engineer',
    // TODO (Rishikesh): add the dates, e.g. 'Jun 2025 – Present'.
    dates: TODO,
    // TODO (Rishikesh): 'Remote', 'Hybrid' or 'On-site', plus the city if you like.
    arrangement: TODO,
    bullets: [
      'Build and maintain backend services and APIs for the product.',
      'Design database structures and the data pipelines that feed them.',
      'Build automation systems that remove repetitive manual work.',
      'Integrate AI capabilities and communication platforms into the product.',
      'Take part in testing, debugging, code reviews and deployments.',
    ],
    tech: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Git'],
    // TODO (Rishikesh): add the company website if it is public.
    link: TODO,
  },
];
