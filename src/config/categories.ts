/** Project categories. The key is used in content frontmatter, the label is shown in the UI. */
export const projectCategories = {
  backend: 'Backend Engineering',
  'ai-ml': 'AI / ML',
  research: 'Research',
  tools: 'Tools & Other',
} as const;

export type ProjectCategory = keyof typeof projectCategories;

export const categoryKeys = Object.keys(projectCategories) as [
  ProjectCategory,
  ...ProjectCategory[],
];
