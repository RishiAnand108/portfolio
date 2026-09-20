import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '@/config/site';

export type Project = CollectionEntry<'projects'>;
export type Experience = CollectionEntry<'experience'>;

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

/** Projects are always listed; `draft` only adds a visible note to the case study. */
export async function getProjects(): Promise<Project[]> {
  return (await getCollection('projects')).sort(byOrder);
}

export async function getExperience(): Promise<Experience[]> {
  const entries = await getCollection('experience');
  return entries.filter((e) => site.showDraftContent || !e.data.draft).sort(byOrder);
}
