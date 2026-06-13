import type { CityGuide } from './_types';
import { frisco } from './frisco';
import { southlake } from './southlake';
import { plano } from './plano';
import { allen } from './allen';
import { mckinney } from './mckinney';

export type { CityGuide, GuideItem, Fact, Source } from './_types';

/**
 * All city guides, in display order. Import this array directly into a
 * Next.js route and pre-render every page with generateStaticParams.
 *
 *   export function generateStaticParams() {
 *     return cityGuides.map((c) => ({ city: c.slug }));
 *   }
 */
export const cityGuides: CityGuide[] = [frisco, southlake, plano, allen, mckinney];

/** Look up a single guide by slug (returns undefined if not found). */
export function getCityGuide(slug: string): CityGuide | undefined {
  return cityGuides.find((c) => c.slug === slug);
}

/** Convenience list of every slug, e.g. for sitemaps. */
export const cityGuideSlugs: string[] = cityGuides.map((c) => c.slug);

export { frisco, southlake, plano, allen, mckinney };
