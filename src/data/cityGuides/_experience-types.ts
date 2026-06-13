/**
 * Sharp Sighted Media — city EXPERIENCE types (the hub layer).
 *
 * The experience is the presentation layer on top of the data store
 * (e.g. southlake.ts). A city hub is a CityExperience: an ordered list of
 * typed Scenes with a runtime budget (~2-3 min). Depth beyond the budget
 * does NOT lengthen the hub — it overflows to a spoke page via Scene.seeMore.
 *
 * Growth valves:
 *   1. rotate  — mark a Scene `rotating: true` and swap its items seasonally.
 *   2. overflow — give a Scene a `seeMore` link to a spoke page.
 *
 * Media is never hard-coded. Every visual references a MediaSlot by id
 * (matching data-media in the design), so swapping placeholder imagery for
 * Dean's real Southlake media is a one-field change: set MediaSlot.publicId
 * to the Cloudinary public_id and it renders through the SSM image pipeline.
 */

export type MediaKind = 'image' | 'video';

export type MediaSlot = {
  /** Stable id, e.g. "hero/reel". */
  id: string;
  kind: MediaKind;
  /** What to capture — the shot list entry. */
  description: string;
  /** Target aspect ratio, e.g. "16:9", "3:4", "4:3". */
  aspect: string;
  /** Cloudinary public_id once shot. Empty = placeholder image is used. */
  publicId?: string;
  /** Optional poster public_id for video slots. */
  poster?: string;
};

export type SceneType =
  | 'hero'
  | 'statBar'
  | 'mediaGrid'
  | 'spotlight'
  | 'rail'
  | 'rankBand'
  | 'marquee'
  | 'timeline'
  | 'cards'
  | 'mapMoment'
  | 'cta';

export type SceneItem = {
  title: string;
  caption?: string;
  /** MediaSlot id this item displays, if any. */
  media?: string;
};

export type Stat = { value: string; label: string };

export type TimelineStep = { year: string; text: string };

export type Scene = {
  id: string;
  type: SceneType;
  eyebrow?: string;
  heading?: string;
  body?: string;
  /** MediaSlot id(s) used directly by the scene shell (hero, spotlight, map). */
  media?: string[];
  items?: SceneItem[];
  stats?: Stat[];
  steps?: TimelineStep[];
  /** Overflow valve: link to a spoke page for depth. */
  seeMore?: { label: string; spoke: string };
  /** Freshness valve: contents intended to be rotated seasonally. */
  rotating?: boolean;
};

export type CityExperience = {
  slug: string;            // matches the CityGuide slug, e.g. "southlake"
  metaTitle: string;       // SEO <title> for the hub page
  metaDescription: string; // SEO meta description
  /** Approx. casual-scroll runtime in seconds — the budget that caps the hub. */
  runtimeBudgetSec: number;
  headline: string;        // hero H1
  subhead: string;
  scenes: Scene[];
  /** Every swap slot on the page, in shoot-list order. */
  mediaManifest: MediaSlot[];
  /** Spoke pages this hub can overflow into. */
  spokes: { slug: string; title: string }[];
};
