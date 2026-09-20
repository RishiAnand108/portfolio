/**
 * Skills, grouped. Deliberately no percentages or progress bars.
 * Order within a group runs from most used to least.
 */

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['Python', 'SQL', 'JavaScript'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['FastAPI', 'Django', 'REST APIs', 'Authentication', 'Automation', 'Testing'],
  },
  {
    id: 'databases',
    title: 'Databases',
    items: ['PostgreSQL', 'SQLAlchemy', 'Schema design', 'Data pipelines'],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    items: ['Scikit-learn', 'XGBoost', 'Feature engineering', 'AI/ML integrations', 'Audio AI'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    items: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'Google Cloud'],
  },
];
