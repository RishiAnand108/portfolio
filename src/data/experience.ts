/**
 * Experience entries, most recent first. One object per role. Each renders as
 * a compact expandable row; details stay collapsed until opened.
 *
 * This is the only place experience details live — the components under
 * src/components/experience/ just render this array.
 *
 * Use the string 'TODO' for anything you have not confirmed yet — it is
 * rendered as a visible placeholder rather than hidden, so nothing is
 * silently invented. Metrics are optional and must be verifiable.
 */
export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface ExperienceEntry {
  id: string;
  /** Company or organisation name — the row's heading. */
  title: string;
  role: string;
  /** e.g. 'Internship', 'Full-time'. Shown after the role. */
  employmentType?: string;
  /** e.g. 'Jun 2025'. */
  start: string;
  /** e.g. 'Aug 2025' or 'Present'. Same as `start` for a single-month role. */
  end: string;
  /** e.g. 'Remote', 'Hybrid · Pune', 'On-site · Bengaluru'. */
  location: string;
  /** Path inside /public to a logo image; initials are shown when omitted. */
  logo?: string;
  /** Path inside /public to a small second logo shown next to the title (a programme, parent company or client). */
  secondaryLogo?: string;
  /** Alt text for the secondary logo, e.g. the programme name. */
  secondaryLogoAlt?: string;
  /** One or two sentences on the role. Shown when the row is expanded. */
  description?: string;
  /** Description bullets, shown when the row is expanded. */
  bullets: string[];
  technologies: string[];
  /** Verifiable numbers only, e.g. { label: 'Services', value: '4' }. */
  metrics?: ExperienceMetric[];
  /** URL, 'TODO' or omitted. */
  link?: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'concave-insights',
    title: 'Concave Insights',
    role: 'Software Developer Intern',
    employmentType: 'Internship',
    start: 'Jul 2026',
    end: 'Present',
    location: 'Mumbai, Maharashtra, India · Hybrid',
    logo: '/images/logos/concave-insights.png',
    description:
      'I work at a startup in the market research space, on the backend side of the product: the services and APIs, the data structures underneath them, and the automation that keeps repetitive work from being done by hand. A good share of the work is integration — connecting AI capabilities and communication platforms into the product so they behave like part of the system rather than a bolted-on feature.',
    bullets: [
      'Build and maintain backend services and APIs for the product.',
      'Design database structures and the data pipelines that feed them.',
      'Build automation systems that remove repetitive manual work.',
      'Integrate AI capabilities and communication platforms into the product.',
      'Take part in testing, debugging, code reviews and deployments.',
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Git'],
    // TODO (Rishikesh): add `link` with the company website if it is public. It is
    // omitted for now, so no Website button is rendered for this role.
  },
  {
    id: 'rpd-group',
    title: 'RPD Group',
    role: 'AI Implementation and Operations Intern',
    employmentType: 'Internship',
    start: 'Jun 2026',
    end: 'Jun 2026',
    location: 'Nashik, Maharashtra, India · On-site',
    logo: '/images/logos/rpd-group.png',
    bullets: [
      'Assisted in the implementation of a call analysis tool tailored for the sales team, enhancing their operational efficiency.',
      'Developed a unique live-fetch calculator that streamlined data calculations, setting it apart from traditional tools.',
      'Created and published engaging videos for developer relations on YouTube, showcasing the tools and their functionalities.',
    ],
    technologies: ['React', 'Python', 'Google Sheets API'],
  },
  {
    id: 'ysm-info-solution',
    title: 'YSM Info Solution',
    role: 'AI/ML Intern',
    employmentType: 'Internship',
    start: 'Dec 2025',
    end: 'Feb 2026',
    location: 'Nashik, Maharashtra, India · Hybrid',
    logo: '/images/logos/ysm-info-solution.png',
    bullets: [
      'Collaborated on the implementation of backend systems utilizing AI/ML models for cost optimization.',
      'Developed a dynamic website using the FastAPI framework to enhance user experience.',
      'Engaged in problem-solving to streamline processes and improve operational efficiency.',
    ],
    technologies: ['React', 'Python', 'Flask', 'FastAPI', 'Twilio', 'Google Gemini', 'Voice AI'],
  },
];
