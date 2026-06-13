import type { CityExperience } from './_experience-types';
import { southlakeExperience } from './southlake.experience';

/**
 * City hub experiences, keyed by slug. Add a city by building its
 * <slug>.experience.ts and registering it here — the /[city] route and
 * sitemap pick it up automatically.
 */
export const experiences: Record<string, CityExperience> = {
  southlake: southlakeExperience,
};

export function getCityExperience(slug: string): CityExperience | undefined {
  return experiences[slug];
}

export const experienceSlugs: string[] = Object.keys(experiences);
