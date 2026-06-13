import { photos, type GalleryPhoto } from './photos';

export type CityFaq = { q: string; a: string };

export type City = {
  slug: string;
  name: string;            // "Frisco"
  fullName: string;        // "Frisco, Texas"
  metaTitle: string;
  metaDescription: string;
  /** The italicized phrase in the H1. */
  h1Em: string;
  intro: string[];         // paragraphs of unique copy
  neighborhoods: string[];
  /** Substring matched against photo alt text to build the city gallery. */
  galleryMatch?: string;
  /** Shown above the gallery when the photos are from nearby, not this city. */
  galleryNote?: string;
  faq: CityFaq[];
};

/** FAQ answers shared in spirit across cities, written once per city so each page stays unique. */

export const cities: City[] = [
  {
    slug: 'frisco',
    name: 'Frisco',
    fullName: 'Frisco, Texas',
    metaTitle: 'Real Estate Photography in Frisco, TX',
    metaDescription:
      'Real estate photography, aerials, floor plans, and listing video in Frisco, TX. The Essentials Package — five deliverables, one shoot, 24-hour turnaround — for $400.',
    h1Em: 'Frisco',
    intro: [
      'Frisco moves fast. New construction in Edgestone and The Grove, established luxury in Starwood and Newman Village, and a buyer pool that scrolls past anything that looks like a builder snapshot. Your media has to stop that scroll.',
      'Sharp Sighted Media photographs Frisco listings with the same system used on every property: stills built around how buyers actually look at homes, aerials that place the lot in its neighborhood, a LiDAR-measured floor plan, a twilight hero frame, and a vertical reel ready for social. Edited and delivered within 24 hours of the shoot.',
    ],
    neighborhoods: [
      'Starwood', 'Newman Village', 'Phillips Creek Ranch', 'Edgestone',
      'The Grove', 'Richwoods', 'Chapel Creek', 'Stonebriar',
    ],
    galleryMatch: 'Frisco',
    galleryNote: 'Aerial work over Frisco, alongside recent interiors from neighboring 121-corridor listings.',
    faq: [
      {
        q: 'How much does real estate photography cost in Frisco?',
        a: 'The Essentials Package is $400 per property: MLS-optimized stills, aerial photography, a LiDAR-measured floor plan, a twilight hero edit, and a 20-second vertical reel. One shoot, five deliverables, no per-square-foot games.',
      },
      {
        q: 'How fast is turnaround?',
        a: 'Edited files are in your inbox within 24 hours of the shoot. Guaranteed.',
      },
      {
        q: 'Can you fly a drone over my Frisco listing?',
        a: 'Yes. Sharp Sighted Media is FAA Part 107 certified, and aerial photography is included in the Essentials Package — context and scale, never novelty.',
      },
      {
        q: 'When can you shoot?',
        a: 'Shoot days are Wednesday and Thursday. Booking is online and calendar-synced — pick a slot and it is confirmed instantly.',
      },
    ],
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    fullName: 'Southlake, Texas',
    metaTitle: 'Real Estate Photography in Southlake, TX',
    metaDescription:
      'Luxury real estate photography in Southlake, TX. Stills, aerials, floor plans, twilight edits, and social reels in one $400 package with 24-hour turnaround.',
    h1Em: 'Southlake',
    intro: [
      'Southlake sellers have seen good marketing. Estate lots in Timarron and Carillon, custom builds off Shady Oaks, buyers who compare every listing against the last one that impressed them. Average photos read as a verdict on the agent.',
      'Sharp Sighted Media builds listing media for exactly this market: stills that sell the feel of a home rather than its far corners, aerials that show the lot and the trees, a measured floor plan, a twilight hero frame, and a vertical reel for the platforms where Southlake buyers actually spend their evenings. Delivered within 24 hours.',
    ],
    neighborhoods: [
      'Timarron', 'Carillon', 'Shady Oaks', 'Westwyck Hills',
      'Coventry Manor', 'Clariden Ranch', 'Town Square area', 'Monticello',
    ],
    galleryNote: 'Recent work from luxury listings across the DFW corridor Sharp Sighted serves — Southlake sessions are shot to the same standard.',
    faq: [
      {
        q: 'How much does real estate photography cost in Southlake?',
        a: 'The Essentials Package is $400 per property and includes stills, aerial photography, a LiDAR-measured floor plan, a twilight hero edit, and a 20-second vertical reel. Built for $500K–$2M listings.',
      },
      {
        q: 'Do you photograph luxury and estate properties?',
        a: 'That is the core of the work. The portfolio runs from acreage estates to designer interiors, and every package is built on buyer-behavior research, not guesswork.',
      },
      {
        q: 'Is drone photography allowed over Southlake homes?',
        a: 'Yes, flown legally. Sharp Sighted Media is FAA Part 107 certified and handles airspace authorization where DFW-area approach paths require it.',
      },
      {
        q: 'How fast will I have my files?',
        a: 'Within 24 hours of the shoot, edited and MLS-compliant. Real estate moves fast; the media keeps up.',
      },
    ],
  },
  {
    slug: 'plano',
    name: 'Plano',
    fullName: 'Plano, Texas',
    metaTitle: 'Real Estate Photography in Plano, TX',
    metaDescription:
      'Real estate photography in Plano, TX — stills, aerials, floor plans, twilight edits, and vertical reels. $400 per property, 24-hour turnaround.',
    h1Em: 'Plano',
    intro: [
      'Plano is established luxury: mature trees over Willow Bend, gated streets in Kings Gate and Normandy Estates, renovated interiors that deserve better than flat, over-flashed photos. The houses have character. The media should find it.',
      'Sharp Sighted Media photographs Plano listings to show flow and presence — how the light moves through a renovated kitchen, how the lot sits under its canopy. Stills, aerials, a measured floor plan, a twilight hero, and a social-ready reel, all from one shoot, all delivered within 24 hours.',
    ],
    neighborhoods: [
      'Willow Bend', 'Kings Gate', 'Normandy Estates', 'Lakeside on Preston',
      'Whiffletree', 'Hunters Glen', 'Deerfield', 'Legacy West area',
    ],
    galleryNote: 'Recent listings from across the 121 corridor — Plano sessions follow the same research-driven system.',
    faq: [
      {
        q: 'How much does real estate photography cost in Plano?',
        a: 'The Essentials Package is $400 per property: stills, aerial photography, a LiDAR-measured floor plan, a twilight hero edit, and a 20-second vertical reel. Five deliverables from one shoot.',
      },
      {
        q: 'Do older or renovated homes photograph well?',
        a: 'Plano’s mature homes are some of the best subjects in DFW. The job is showing the renovation and the light honestly — no overcooked HDR, no fake skies. The twilight hero is always a real edit, never a fabrication.',
      },
      {
        q: 'What does the floor plan include?',
        a: 'A clean, LiDAR-measured spatial layout. 57% of buyers rate floor plans very useful, and 86% are more likely to view a home whose listing has one they like.',
      },
      {
        q: 'How do I book?',
        a: 'Online, in about two minutes. Wednesday and Thursday shoot days, calendar-synced, confirmed instantly. Files arrive within 24 hours of the shoot.',
      },
    ],
  },
  {
    slug: 'allen',
    name: 'Allen',
    fullName: 'Allen, Texas',
    metaTitle: 'Real Estate Photography in Allen, TX',
    metaDescription:
      'Real estate photography in Allen, TX — see recent Allen luxury listings shot by Sharp Sighted Media. Stills, aerials, floor plans, and reels for $400 per property.',
    h1Em: 'Allen',
    intro: [
      'Some of Sharp Sighted Media’s strongest recent work is in Allen — designer estates with backlit wine walls, two-story bar lounges, home theaters, resort pools. The gallery below is Allen, photographed the way Allen builds deserve.',
      'From Twin Creeks to StarCreek to the estate corridors east of 75, the system is the same: stills built on buyer-behavior research, aerials with context, a measured floor plan, a twilight hero frame, and a vertical reel — delivered within 24 hours of the shoot.',
    ],
    neighborhoods: [
      'Twin Creeks', 'StarCreek', 'Montgomery Farm', 'Watters Creek area',
      'The Trails', 'Waterford Parks', 'Lost Creek Ranch', 'Custer Meadows',
    ],
    galleryMatch: 'Allen',
    faq: [
      {
        q: 'How much does real estate photography cost in Allen?',
        a: 'The Essentials Package is $400 per property and includes MLS-optimized stills, aerial photography, a LiDAR-measured floor plan, a twilight hero edit, and a 20-second vertical reel.',
      },
      {
        q: 'Have you shot in Allen before?',
        a: 'Extensively — the gallery on this page is recent Allen work, from designer kitchens and spa baths to poker rooms, theaters, and resort-style pools.',
      },
      {
        q: 'Is aerial photography included?',
        a: 'Yes. FAA Part 107 certified, included in every Essentials Package. Lot, orientation, and surroundings — the context buyers want and most listings skip.',
      },
      {
        q: 'How fast is delivery?',
        a: 'Edited, MLS-compliant files within 24 hours of the shoot. Guaranteed.',
      },
    ],
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    fullName: 'McKinney, Texas',
    metaTitle: 'Real Estate Photography in McKinney, TX',
    metaDescription:
      'Real estate photography in McKinney, TX — stills, aerials, floor plans, twilight edits, and social reels. $400 per property with 24-hour turnaround.',
    h1Em: 'McKinney',
    intro: [
      'McKinney runs from Stonebridge Ranch fairway lots to Craig Ranch new builds to acreage estates out east — plus a historic downtown that gives the whole market its character. One city, several very different kinds of listing. The media has to fit the property, not a template.',
      'Sharp Sighted Media shoots McKinney and its acreage neighbors with the full system: research-driven stills, aerials that show the land, a LiDAR-measured floor plan, a real twilight edit, and a vertical reel built for the scroll. Edited and delivered within 24 hours.',
    ],
    neighborhoods: [
      'Stonebridge Ranch', 'Craig Ranch', 'Tucker Hill', 'Adriatica',
      'Historic Downtown', 'Trinity Falls', 'Hardin Estates', 'Inwood Hills',
    ],
    galleryMatch: 'Lucas',
    galleryNote: 'This acreage estate sits in Lucas, minutes from McKinney — the kind of property the eastern side of the city is known for.',
    faq: [
      {
        q: 'How much does real estate photography cost in McKinney?',
        a: 'The Essentials Package is $400 per property: stills, aerials, a LiDAR-measured floor plan, a twilight hero edit, and a 20-second vertical reel. One shoot, five deliverables.',
      },
      {
        q: 'Do you shoot acreage and estate properties?',
        a: 'Yes — see the Lucas estate on this page, minutes from McKinney. Aerials earn their keep on acreage: pond, pasture, and lot lines that ground-level photos cannot show.',
      },
      {
        q: 'Can you photograph historic homes downtown?',
        a: 'Gladly. Older architecture rewards patient, honest photography — real light, real color, no overcooked processing.',
      },
      {
        q: 'When are shoot days?',
        a: 'Wednesday and Thursday, booked online with instant confirmation. Edited files arrive within 24 hours of the shoot.',
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

// Curated best-of: strongest frames across the portfolio, used when a city
// has little or no local work yet.
const CURATED_PICKS = [
  '01-inverness-twilight-front',
  '10-blondy-jhune-wine-wall-dining',
  '11-blondy-jhune-kitchen',
  '06-inverness-great-room',
  '15-blondy-jhune-primary-bath',
  '27-blondy-jhune-pool-pergola',
  '04-inverness-estate-aerial',
  '29-lakeview-lake-aerial',
];

/**
 * Photos for a city page. City-matched photos lead; if there are fewer
 * than 6, the curated best-of fills in behind them (no duplicates).
 */
export function cityPhotos(city: City): GalleryPhoto[] {
  const matched = city.galleryMatch
    ? photos.filter((p) => p.alt.includes(city.galleryMatch!))
    : [];
  if (matched.length >= 6) return matched;

  const curated = CURATED_PICKS
    .map((id) => photos.find((p) => p.publicId.endsWith(id)))
    .filter((p): p is GalleryPhoto => Boolean(p))
    .filter((p) => !matched.includes(p));

  return [...matched, ...curated].slice(0, 8);
}
