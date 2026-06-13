/**
 * Show My House — city guide content types.
 *
 * Site-agnostic content store for branded city pages (showmy.house),
 * reusable on sharpsighted.media. Designed to drop straight into a
 * Next.js data layer for static generation (generateStaticParams),
 * so traffic spikes hit pre-rendered, CDN-cached HTML — no runtime
 * data fetching, no database.
 *
 * SOURCING RULE: every fact carries a Source for internal reference.
 * Sources are intentionally NOT rendered on public pages. All copy is
 * original (synthesized, never pasted) to protect SEO and avoid
 * duplicate-content / copyright problems.
 */

export type Source = {
  /** Human-readable title of the source. */
  title: string;
  /** Canonical URL. Prefer official (.gov), the Chamber, school districts (.edu), or established outlets. */
  url: string;
  /** ISO date (YYYY-MM-DD) the source was last verified. */
  accessed: string;
};

export type GuideItem = {
  /** Name of the place, business, school, event, etc. */
  name: string;
  /** Original 1–2 sentence description. Never copied verbatim from the source. */
  description: string;
  /** Optional public website for the place/business. */
  url?: string;
  /** Where the underlying facts were verified. Internal only. */
  source: Source;
};

export type Fact = {
  /** e.g. "Founded", "Population", "County", "School district". */
  label: string;
  value: string;
  source?: Source;
};

export type CityGuide = {
  /** URL slug, e.g. "frisco". */
  slug: string;
  /** Display name, e.g. "Frisco". */
  name: string;
  /** Full name, e.g. "Frisco, Texas". */
  fullName: string;
  /** Primary county. */
  county: string;
  /** One-line identity used as a subhead. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;

  /** Quick stats row. */
  atAGlance: Fact[];

  /** Short, original origin narrative (a few paragraphs). */
  history: {
    body: string;
    sources: Source[];
  };

  historicalSites: GuideItem[];
  pointsOfInterest: GuideItem[];
  outdoors: GuideItem[];
  localBusinesses: GuideItem[];
  schools: GuideItem[];
  communityCulture: GuideItem[];
};
