/**
 * Skills, grouped. Deliberately no percentages or progress bars — a number
 * like "Python 85%" is not measurable and not credible. Order within a group
 * runs from most used to least.
 */

export interface SkillGroup {
  id: string;
  title: string;
  /** One line explaining how the group is actually used. */
  note: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    note: 'Day-to-day languages for services, scripts and data work.',
    items: ['Python', 'SQL', 'JavaScript'],
  },
  {
    id: 'backend',
    title: 'Backend',
    note: 'Building and maintaining APIs, business logic and integrations.',
    items: ['FastAPI', 'Django', 'REST APIs', 'Authentication', 'Automation', 'Testing'],
  },
  {
    id: 'databases',
    title: 'Databases',
    note: 'Modelling data and keeping queries and migrations predictable.',
    items: ['PostgreSQL', 'SQLAlchemy', 'Schema design', 'Data pipelines'],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    note: 'Supervised learning and LLM features that ship inside real products.',
    items: [
      'Scikit-learn',
      'XGBoost',
      'Supervised learning',
      'Feature engineering',
      'LLM integrations',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    note: 'Enough to build and wire up an interface for the services I write.',
    items: ['HTML', 'CSS', 'React', 'Next.js'],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    note: 'Packaging, versioning and getting work reviewed and deployed.',
    items: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'Google Cloud'],
  },
];
