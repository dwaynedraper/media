import type { CityExperience } from './_experience-types';

/**
 * Southlake hub experience. ~12 scenes, ~150s casual scroll.
 * Pulls facts from southlake.ts. Replace each MediaSlot.publicId with Dean's
 * real Southlake media when ready; until then placeholders render.
 */
export const southlakeExperience: CityExperience = {
  slug: 'southlake',
  metaTitle: `Living in Southlake, TX | Sharp Sighted Media`,
  metaDescription: `What it's like to live in Southlake, Texas — Carroll ISD's top-ranked schools, the walkable Town Square, 758 acres of nature, dining, and a calendar full of life.`,
  runtimeBudgetSec: 165,
  headline: `This isn't just a house. It's Southlake.`,
  subhead: `Top-ranked schools. A walkable town square. 758 acres of nature. Here's what it's actually like to live here.`,

  scenes: [
    {
      id: 'hero',
      type: 'hero',
      media: ['hero/reel'],
    },
    {
      id: 'stats',
      type: 'statBar',
      stats: [
        { value: '#1', label: 'school district in DFW (Carroll ISD)' },
        { value: '758', label: 'acres of preserved nature' },
        { value: '125+', label: 'shops & restaurants on the square' },
        { value: '31,265', label: 'residents — a tight-knit community' },
      ],
    },
    {
      id: 'a-day-here',
      type: 'mediaGrid',
      eyebrow: 'A day in Southlake',
      heading: 'Morning coffee to fireworks.',
      body: `Life here moves between the square, the trails, and the table. This is an ordinary Saturday.`,
      items: [
        { title: '8 AM', caption: 'Coffee on the square', media: 'day/morning' },
        { title: '10 AM', caption: 'Trail run at Bob Jones', media: 'day/trail' },
        { title: '2 PM', caption: 'Out on Grapevine Lake', media: 'day/lake' },
        { title: '7 PM', caption: `Dinner at Truluck's`, media: 'day/dinner' },
        { title: '9 PM', caption: 'The square, lit up', media: 'day/square-night' },
        { title: 'Summer', caption: 'Stars & Stripes fireworks', media: 'day/fireworks' },
      ],
    },
    {
      id: 'town-square',
      type: 'spotlight',
      eyebrow: 'The social heart',
      heading: 'One walkable downtown.',
      body: `Southlake Town Square packs 125+ shops, dozens of restaurants, the library, and a gazebo-centered park where nearly every city celebration happens — all built on what used to be open farmland.`,
      media: ['townsquare/hero'],
      items: [
        { title: 'Dine', caption: `Stone-crab nights at Truluck's to patio pizza at Taverna Rossa.`, media: 'square/dining' },
        { title: 'Shop', caption: 'Boutiques and national names along walkable, tree-lined blocks.', media: 'square/shop' },
        { title: 'Gather', caption: 'The public library and Town Hall anchor a real civic center.', media: 'square/library' },
        { title: 'Play', caption: 'The Marq: aquatics, fitness, an amphitheater, and event halls.', media: 'square/marq' },
      ],
      rotating: true,
    },
    {
      id: 'schools',
      type: 'rankBand',
      eyebrow: 'Why families move here',
      heading: 'Carroll ISD — the top district in DFW.',
      body: `Every campus rated "A" by the state. Nine UIL Lone Star Cups for all-around excellence. And Dragon football on Friday nights that the whole town shows up for.`,
      items: [
        { title: '11 campuses' },
        { title: 'Top 5% in Texas' },
        { title: '89% math · 89% reading proficiency' },
        { title: '9× Lone Star Cup' },
      ],
      seeMore: { label: 'See every school', spoke: 'schools' },
    },
    {
      id: 'outdoors',
      type: 'spotlight',
      eyebrow: 'Room to breathe',
      heading: '758 acres of wild, in the city.',
      body: `The Bob Jones preserve protects one of the last great Cross Timbers ecosystems in the Metroplex — 20+ miles of trails, 1,100+ documented species, and the legendary Northshore mountain-bike trail right on Grapevine Lake.`,
      media: ['outdoors/bobjones'],
      seeMore: { label: 'Parks & trails', spoke: 'parks' },
    },
    {
      id: 'eats',
      type: 'rail',
      eyebrow: 'Where Southlake eats',
      heading: `Tonight's hard part is choosing.`,
      items: [
        { title: `Truluck's`, caption: 'Florida stone crab flown in fresh, prime steaks, an 800-label cellar.', media: 'eats/trulucks' },
        { title: 'Taverna Rossa', caption: 'Wood-fired pizza and small plates anchoring Park Village.', media: 'eats/taverna' },
        { title: 'Mesero', caption: 'Polished Tex-Mex and the margaritas regulars come back for.', media: 'eats/mesero' },
        { title: `Milwaukee Joe's`, caption: 'Small-batch artisan ice cream and a cult local following.', media: 'eats/milwaukeejoes' },
      ],
      seeMore: { label: 'Eat & drink guide', spoke: 'eats' },
      rotating: true,
    },
    {
      id: 'events',
      type: 'marquee',
      eyebrow: `There's always something on`,
      items: [
        { title: 'Art in the Square' },
        { title: 'Oktoberfest' },
        { title: 'Stars & Stripes' },
        { title: 'DiwaliFest' },
        { title: 'Home for the Holidays' },
        { title: 'MasterWorks Concerts' },
      ],
      rotating: true,
    },
    {
      id: 'history',
      type: 'timeline',
      eyebrow: 'How it got here — the short version',
      heading: 'Farmland to a real downtown.',
      steps: [
        { year: '1846', text: 'Pioneer farm communities settle the post-oak prairie. Lonesome Dove Baptist still stands from that year.' },
        { year: '1956', text: 'Residents vote to incorporate — and name the town "Southlake" for the new Lake Grapevine just to the north.' },
        { year: '1999', text: `Southlake Town Square opens on 130 acres of old farmland, giving the city the walkable heart it's known for today.` },
      ],
    },
    {
      id: 'is-this-you',
      type: 'cards',
      eyebrow: 'Find your corner',
      heading: 'Three ways to live here.',
      items: [
        { title: 'Estate & acreage', caption: 'Gated streets and big lots in Timarron, Carillon, and Shady Oaks — space, privacy, and mature trees.' },
        { title: 'Walk-to-the-square', caption: 'Lock-and-leave living minutes from dining, the library, and every festival on the calendar.' },
        { title: 'Family cul-de-sac', caption: 'Quiet neighborhoods zoned to Carroll ISD, parks at the end of the block, kids on bikes till dusk.' },
      ],
      seeMore: { label: 'Explore neighborhoods', spoke: 'neighborhoods' },
    },
    {
      id: 'map',
      type: 'mapMoment',
      eyebrow: 'Where it sits',
      heading: 'Centered in the Metroplex.',
      media: ['map/dfw'],
    },
    {
      id: 'cta',
      type: 'cta',
      eyebrow: 'Ready when you are',
      heading: 'Fall for Southlake?',
      body: `Your agent can take it from here — listings, showings, and the neighborhood-by-neighborhood details. This page is just the spark.`,
    },
  ],

  // Shoot list — every swap slot, in scroll order. publicId empty = placeholder.
  mediaManifest: [
    { id: 'hero/reel', kind: 'video', aspect: '16:9', description: `Hero montage: Town Square at golden hour, an aerial sweep, families out. Looping, muted; a still works as poster fallback.` },
    { id: 'day/morning', kind: 'image', aspect: '3:4', description: 'Coffee/pastry on a Town Square patio, morning light.' },
    { id: 'day/trail', kind: 'image', aspect: '3:4', description: 'Runner or cyclist on a Bob Jones / Northshore trail.' },
    { id: 'day/lake', kind: 'image', aspect: '3:4', description: 'Boating, kayaking, or paddleboarding on Grapevine Lake.' },
    { id: 'day/dinner', kind: 'image', aspect: '3:4', description: 'Plated dinner / dining-out scene, warm evening mood.' },
    { id: 'day/square-night', kind: 'image', aspect: '3:4', description: 'Town Square lit up at night, people out.' },
    { id: 'day/fireworks', kind: 'image', aspect: '3:4', description: 'Stars & Stripes fireworks over the square / Bicentennial Park.' },
    { id: 'townsquare/hero', kind: 'image', aspect: '4:3', description: 'Signature wide shot of Southlake Town Square (Town Hall, gazebo, fountain).' },
    { id: 'square/dining', kind: 'image', aspect: '4:3', description: 'Restaurant patio or interior on the square.' },
    { id: 'square/shop', kind: 'image', aspect: '4:3', description: 'Walkable retail block, storefronts, tree-lined sidewalk.' },
    { id: 'square/library', kind: 'image', aspect: '4:3', description: 'Town Hall / public library exterior or civic plaza.' },
    { id: 'square/marq', kind: 'image', aspect: '4:3', description: 'The Marq — aquatics, amphitheater, or fitness facility.' },
    { id: 'outdoors/bobjones', kind: 'image', aspect: '4:3', description: 'Bob Jones preserve / Cross Timbers landscape or lakeside trail.' },
    { id: 'eats/trulucks', kind: 'image', aspect: '4:3', description: `Truluck's — dish, crab, or dining room.` },
    { id: 'eats/taverna', kind: 'image', aspect: '4:3', description: 'Taverna Rossa — wood-fired pizza / patio.' },
    { id: 'eats/mesero', kind: 'image', aspect: '4:3', description: 'Mesero — Tex-Mex plate or margarita.' },
    { id: 'eats/milwaukeejoes', kind: 'image', aspect: '4:3', description: `Milwaukee Joe's — ice cream cone / shop.` },
    { id: 'map/dfw', kind: 'image', aspect: '16:9', description: 'Stylized DFW context map (Southlake centered). Best as a designed graphic, not a photo.' },
  ],

  spokes: [
    { slug: 'schools', title: 'Schools in Southlake' },
    { slug: 'neighborhoods', title: 'Southlake Neighborhoods' },
    { slug: 'eats', title: 'Eat & Drink in Southlake' },
    { slug: 'parks', title: 'Parks & Trails in Southlake' },
  ],
};

export default southlakeExperience;
