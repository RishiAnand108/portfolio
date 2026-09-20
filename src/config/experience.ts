/**
 * Experience entries, most recent first. One object per role. Each renders as
 * a compact expandable row; details stay collapsed until opened.
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
  /** e.g. 'Jun 2025'. */
  start: string;
  /** e.g. 'Aug 2025' or 'Present'. */
  end: string;
  /** e.g. 'Remote', 'Hybrid · Pune', 'On-site · Bengaluru'. */
  location: string;
  /** One or two sentences on the role. Shown when the row is expanded. */
  description?: string;
  responsibilities: string[];
  tech: string[];
  /** Verifiable numbers only, e.g. { label: 'Services', value: '4' }. */
  metrics?: { label: string; value: string }[];
  /** Path inside /public to a logo image; initials are shown when omitted. */
  logo?: string;
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
    // TODO (Rishikesh): add the start date, e.g. 'Jun 2025'.
    start: TODO,
    // TODO (Rishikesh): add the end date, or 'Present'.
    end: TODO,
    // TODO (Rishikesh): 'Remote', 'Hybrid' or 'On-site', plus the city if you like.
    location: TODO,
    description:
      'I work at a startup in the market research space, on the backend side of the product: the services and APIs, the data structures underneath them, and the automation that keeps repetitive work from being done by hand. A good share of the work is integration — connecting AI capabilities and communication platforms into the product so they behave like part of the system rather than a bolted-on feature.',
    responsibilities: [
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
