/**
 * Copy for the About section. Edit freely — the layout adapts to the content.
 * Keep statements factual; anything you can't back up doesn't belong here.
 */

export interface AboutSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export const aboutIntro = {
  title: 'I like building the parts of software that everything else depends on.',
  lead: 'I’m Rishikesh — a backend engineer and AI/ML developer, and a B.Tech student in Artificial Intelligence and Data Science. I work on APIs, databases, automation and machine learning, and I care most about systems that keep working after the demo is over.',
};

export const aboutSections: AboutSection[] = [
  {
    id: 'about-engineering',
    title: 'Backend engineering',
    paragraphs: [
      'Most of what I enjoy sits behind the interface: modelling data properly, designing APIs that behave predictably, handling authentication and errors carefully, and shipping a service in a way that can be repeated tomorrow.',
      'I use Python with FastAPI and Django, PostgreSQL with SQLAlchemy, and Docker to package the result. I would rather write something understandable and dependable than something clever — a clear schema and a boring deployment usually beat an elaborate architecture.',
    ],
  },
  {
    id: 'about-ai',
    title: 'Where AI/ML fits',
    paragraphs: [
      'My degree is in AI and Data Science, and I am most interested in machine learning when it is part of a working system rather than a standalone notebook — a model behind an API, a prediction that feeds a decision, or an LLM integration that removes a genuinely repetitive task.',
      'In practice that has meant supervised learning with scikit-learn and XGBoost, the feature engineering that comes before it, and wiring LLMs into products where they earn their place. I am also drawn to audio AI and signal-based problems.',
    ],
  },
  {
    id: 'about-education',
    title: 'Education and interests',
    paragraphs: [
      'B.Tech in Artificial Intelligence and Data Science. Outside coursework I spend my time on scalable backend systems, API design, automation, and the engineering side of ML — packaging models, serving them, and knowing what happened after deployment.',
      'I also work with HTML, CSS, JavaScript, React and Next.js when a project needs an interface to go with the service behind it.',
    ],
  },
  {
    id: 'about-community',
    title: 'Community',
    paragraphs: [
      'Alongside engineering I spend time on developer communities and technical events — leadership at Hustler Hive and serving as a Google Cloud Arcade Facilitator in 2026. Helping other students get started with cloud and backend tooling has made me noticeably better at explaining technical ideas simply.',
    ],
  },
];

/** Compact reference list shown beside the About copy. */
export const technicalFocus: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript'] },
  { group: 'Backend', items: ['FastAPI', 'Django', 'REST APIs'] },
  { group: 'Data', items: ['PostgreSQL', 'SQLAlchemy'] },
  { group: 'AI / ML', items: ['Scikit-learn', 'XGBoost', 'LLM integrations'] },
  { group: 'Tooling', items: ['Docker', 'Git', 'GitHub'] },
];
