/**
 * Copy for the About page. Edit freely — the page layout adapts to the content.
 * Keep statements factual; anything you can't back up doesn't belong here.
 */

export interface AboutSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export const aboutIntro = {
  title: 'I like building the parts of software that other parts depend on.',
  lead: 'I’m Rishikesh — a backend-focused developer and final-year B.Tech student in AI & Data Science. I’m interested in reliable systems, well-designed APIs, automation, and practical applications of machine learning.',
};

export const aboutSections: AboutSection[] = [
  {
    id: 'engineering-interests',
    title: 'Engineering interests',
    paragraphs: [
      'Most of what I enjoy sits behind the interface: modelling data properly, designing APIs that are predictable to use, handling authentication and errors carefully, and getting a service deployed in a way that’s repeatable.',
      'I care about software that is understandable and dependable more than software that is clever. A clear schema and a boring deployment usually beat an elaborate architecture.',
    ],
  },
  {
    id: 'ai-ml',
    title: 'Where AI/ML fits',
    paragraphs: [
      'My degree is in AI & Data Science, and I’m most interested in machine learning when it is part of a working system rather than a standalone notebook — a model behind an API, an optimizer inside a planning tool, or inference that has to run on constrained hardware.',
      'So far that has meant working with gradient-boosted models, constraint optimization, and signal processing for ECG data. The projects page covers these in more detail.',
    ],
  },
  {
    id: 'community',
    title: 'Community involvement',
    paragraphs: [
      'Alongside engineering, I spend time on developer communities and technical events — including serving as a Google Cloud Arcade Facilitator in 2026. Helping other students get started with cloud and backend tooling has made me better at explaining technical ideas simply.',
    ],
  },
  {
    id: 'learning',
    title: 'Learning direction',
    paragraphs: [
      'Right now I’m going deeper on system design, cloud infrastructure, and the engineering side of ML: packaging models, serving them reliably, and monitoring what happens after deployment.',
    ],
  },
];

/** Shown as a compact reference list on the About page. */
export const technicalFocus: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL'] },
  { group: 'Backend', items: ['FastAPI', 'Django', 'REST APIs', 'Authentication'] },
  { group: 'Data', items: ['PostgreSQL', 'Firebase', 'Schema design'] },
  { group: 'AI / ML', items: ['XGBoost', 'Constraint optimization (CP-SAT)', 'Signal processing'] },
  { group: 'Tooling', items: ['Docker', 'Git', 'Automation scripts'] },
];
