/**
 * Highlights: achievements and community involvement. Keep every entry
 * verifiable — if you cannot point to a page, a certificate or a person who
 * can confirm it, it does not belong here.
 *
 * `link` may be a URL, the string 'TODO' (shows a disabled placeholder) or
 * omitted (no link rendered).
 */
import { TODO } from './site';

export interface Highlight {
  id: string;
  /** Short label shown as a badge, e.g. the programme or organisation. */
  badge: string;
  title: string;
  detail: string;
  period?: string;
  link?: string;
}

export const highlights: Highlight[] = [
  {
    id: 'gc-arcade-2026',
    badge: 'Google Cloud',
    title: 'Google Cloud Arcade Facilitator 2026',
    period: '2026',
    detail:
      'Selected as a facilitator for the 2026 cohort, supporting participants through hands-on Google Cloud labs and helping them get past the points where they get stuck.',
    // TODO (Rishikesh): add the programme or profile URL if you have a public one.
    link: TODO,
  },
  {
    id: 'hustler-hive',
    badge: 'Hustler Hive',
    title: 'Leadership at Hustler Hive',
    // TODO (Rishikesh): add the period you have held this role, e.g. '2025 – Present'.
    detail:
      'Leadership role in the community: coordinating members, planning activities and keeping things running between events.',
    // TODO (Rishikesh): add the community link (site, LinkedIn page or Instagram) if it is public.
    link: TODO,
  },
  {
    id: 'community',
    badge: 'Community',
    title: 'Technical community building',
    detail:
      'Ongoing involvement in developer communities — bringing students into backend and cloud tooling, and answering the questions that usually stop beginners early.',
  },
  {
    id: 'events',
    badge: 'Events',
    title: 'Event organisation',
    detail:
      'Organising technical sessions and events end to end: planning, logistics, speakers and follow-up.',
    // TODO (Rishikesh): name one or two specific events here — a named event is far more credible.
  },
];
