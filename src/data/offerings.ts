/**
 * Sharp Sighted Media — packages and add-on menu.
 * Single source of truth for the /packages breakdown and the homepage teaser.
 * Prices are plain strings so they render exactly as written.
 */

export type Pkg = {
  name: string;
  price: string;
  cadence: string;        // "Per property", etc.
  tagline: string;
  includes: string[];
  note?: string;          // e.g. savings or eligibility line
  featured?: boolean;
};

export type Addon = {
  name: string;
  price: string;
  note?: string;
};

export type AddonGroup = {
  label: string;
  items: Addon[];
};

/** The two upgrade packages that build on Essentials. */
export const upgradePackages: Pkg[] = [
  {
    name: 'The Zillow Package',
    price: '$550',
    cadence: 'Per property',
    tagline: 'Showcase-eligible media, built for Zillow.',
    includes: [
      'Everything in the Essentials Package',
      'Zillow 3D interactive tour + interactive floor plan',
      'Full-resolution images hosted and delivered through Aryeo',
    ],
    note: 'Meets Zillow Showcase media requirements: 10+ pro photos, a 3D tour, and an interactive floor plan.',
  },
  {
    name: 'The Premium Package',
    price: '$1,000',
    cadence: 'Per property',
    tagline: 'The full cinematic treatment.',
    includes: [
      'Everything in the Essentials Package',
      'Cinematic video walkthrough (90–120s, 4K, color-graded)',
      'Cinematic aerial film from the drone (MasterShots)',
    ],
    note: 'Save $150 versus booking these à la carte.',
    featured: true,
  },
];

/** À la carte add-ons, grouped for the /packages breakdown. */
export const addonGroups: AddonGroup[] = [
  {
    label: 'Interactive & 3D',
    items: [
      {
        name: 'Zillow 3D Interactive',
        price: '$175',
        note: 'Walkable 3D tour plus an interactive, Zillow-Showcase-ready floor plan.',
      },
    ],
  },
  {
    label: 'Video',
    items: [
      {
        name: 'Cinematic Walkthrough',
        price: '$500',
        note: '90–120 seconds, 4K, color-graded — beyond the social reel in Essentials.',
      },
      {
        name: 'Agent or Pro Voiceover',
        price: '+$150',
        note: 'Real lav-mic agent narration, or a cinematic voiceover recorded by Dean. Pairs with the walkthrough.',
      },
      {
        name: 'Neighborhood B-roll',
        price: '$100',
        note: 'About 20 seconds of nearby community footage, cut into your walkthrough.',
      },
      {
        name: 'Additional Social Reel',
        price: '$150',
        note: 'An extra vertical reel beyond the one included in Essentials.',
      },
    ],
  },
  {
    label: 'Aerial',
    items: [
      {
        name: 'Cinematic Aerial (MasterShots)',
        price: '$250',
        note: '60–90 second color-graded aerial film — Essentials includes aerial stills only.',
      },
    ],
  },
  {
    label: 'Photography & Editing',
    items: [
      {
        name: 'Virtual Staging',
        price: '$18 / image',
        note: 'Furnish empty rooms digitally so buyers can picture the space.',
      },
      {
        name: 'Signature Edit',
        price: '$85',
        note: 'Grass replacement, object removal, fire in fireplaces, and TV screens — across all exteriors.',
      },
      {
        name: 'Real Twilight Session',
        price: '$175',
        note: 'An on-site golden-hour shoot, not just a sky edit.',
      },
    ],
  },
  {
    label: 'Logistics',
    items: [
      {
        name: 'Large Home',
        price: '+$100 / 1,000 sq ft',
        note: 'For homes over 4,000 square feet.',
      },
    ],
  },
];

/** Three highlights for the homepage "Need more?" teaser. */
export const teaserHighlights: string[] = [
  'Zillow 3D Interactive',
  'Cinematic walkthrough with agent voiceover',
  'Cinematic aerial from the drone',
];
