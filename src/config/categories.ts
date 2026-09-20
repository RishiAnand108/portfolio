/** Project categories. The key is used in the project config, the label is shown on the card. */
export const projectCategories = {
  'ai-ml-full-stack': 'AI/ML | Full-Stack',
  'ai-ml-healthcare': 'AI/ML | Healthcare',
} as const;

export type ProjectCategory = keyof typeof projectCategories;
