/**
 * Achievements and community involvement. Keep every entry verifiable —
 * if you cannot point to a page, a certificate or a person who can confirm it,
 * it does not belong here. Use `detail` for context rather than praise.
 */

export interface Achievement {
  title: string;
  organization?: string;
  period?: string;
  detail: string;
  url?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Google Cloud Arcade Facilitator',
    organization: 'Google Cloud',
    period: '2026',
    detail:
      'Selected as a facilitator for the 2026 cohort, supporting participants through hands-on Google Cloud labs and helping them work past the points where they get stuck.',
    // TODO (Rishikesh): add the program or profile URL if you have a public one.
  },
  {
    title: 'Hustler Hive — Leadership',
    organization: 'Hustler Hive',
    // TODO (Rishikesh): add the period you have held this role, e.g. '2025 – Present'.
    detail:
      'Leadership role in the community: coordinating members, planning activities and keeping things running between events.',
    // TODO (Rishikesh): add the community link (site, LinkedIn page or Instagram) if it is public.
  },
  {
    title: 'Technical community building',
    detail:
      'Ongoing involvement in developer communities — bringing students into backend and cloud tooling, and answering the questions that usually stop beginners early.',
  },
  {
    title: 'Event organization',
    detail:
      'Organising technical sessions and events end to end: planning, logistics, speakers and follow-up.',
    // TODO (Rishikesh): name one or two specific events here — a named event is far more credible than the category.
  },
];
