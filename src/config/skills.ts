/**
 * Skills, grouped. Deliberately no percentages or progress bars.
 * Order within a group runs from most used to least.
 */

import type { BrandIconName } from '@/components/ui/BrandIcon.astro';

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

/**
 * Small mark shown before a skill badge. Keys are skill names from the groups
 * above; values are names from src/components/ui/BrandIcon.astro. Skills
 * without an accurate mark (concepts, or brands with no icon) are left out and
 * render as text only.
 */
export const skillIcons: Partial<Record<string, BrandIconName>> = {
  Python: 'python',
  SQL: 'database',
  JavaScript: 'javascript',
  FastAPI: 'fastapi',
  Django: 'django',
  PostgreSQL: 'postgresql',
  SQLAlchemy: 'sqlalchemy',
  'Scikit-learn': 'scikit-learn',
  React: 'react',
  'Next.js': 'nextjs',
  HTML: 'html',
  CSS: 'css',
  Docker: 'docker',
  Git: 'git',
  GitHub: 'github',
  'GitHub Actions': 'github-actions',
  'Google Cloud': 'google-cloud',
};
