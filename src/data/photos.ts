export type GalleryPhoto = {
  publicId: string; // Cloudinary public_id
  alt: string;      // descriptive, location-aware — doubles as SEO copy
};

/**
 * The real-estate wall: one flat, ordered list. The grid renders these
 * top-to-bottom; the fullscreen carousel runs over the same order.
 *
 * To add/reorder photos: upload to Cloudinary under
 * sharpsighted/real-estate/<##>-<property>-<subject> (numeric prefix
 * mirrors this array's order for sanity, but THIS array is the source
 * of truth for display order), then edit the list below.
 *
 * Upload helper: scripts/upload-gallery.mjs
 */
const p = (id: string, alt: string): GalleryPhoto => ({
  publicId: `sharpsighted/real-estate/${id}`,
  alt,
});

export const photos: GalleryPhoto[] = [
  // — Inverness · Lucas, TX —
  p('01-inverness-twilight-front', 'Twilight exterior of a stone and brick luxury ranch estate in Lucas, Texas, windows glowing under a pastel sunset sky'),
  p('02-inverness-front-exterior', 'Daytime front elevation of a luxury ranch-style home in Lucas, Texas with manicured lawn and circle drive'),
  p('03-inverness-twilight-rear', 'Rear elevation at dusk in Lucas, Texas, covered patio and warmly lit interiors under a violet sky'),
  p('04-inverness-estate-aerial', 'Aerial view of a Lucas, Texas acreage estate with pond, circle driveway, and pasture'),
  p('05-inverness-foyer', 'Foyer with iron double doors and glowing hardwood floors in a Lucas, Texas estate'),
  p('06-inverness-great-room', 'Great room with vaulted beamed ceiling, stone fireplace, and open kitchen in a Lucas, Texas luxury home'),
  p('07-inverness-kitchen', 'Kitchen island beneath lantern pendants and vaulted wood beams in a Lucas, Texas estate'),
  p('08-inverness-formal-dining', 'Formal dining room with Moroccan mosaic chandelier in a Lucas, Texas luxury home'),
  p('09-inverness-sunset-patio', 'Texas sunset framed from the covered back patio of a Lucas acreage estate'),
  // — Blondy Jhune · Allen, TX —
  p('10-blondy-jhune-wine-wall-dining', 'Formal dining room with backlit wine wall and gold pendant chandelier in an Allen, Texas luxury estate'),
  p('11-blondy-jhune-kitchen', 'Designer kitchen with brass accents and white oak floors in an Allen, Texas modern luxury estate'),
  p('12-blondy-jhune-breakfast-room', 'Breakfast room flowing into an open designer kitchen, Allen, Texas luxury home'),
  p('13-blondy-jhune-butler-pantry', "Butler's pantry with backlit glass cabinetry in an Allen, Texas estate"),
  p('14-blondy-jhune-primary-bedroom', 'Primary bedroom with emerald velvet bed and designer staging in an Allen, Texas luxury estate'),
  p('15-blondy-jhune-primary-bath', 'Primary bath with glowing wood slat wall, freestanding tub, and marble floors in Allen, Texas'),
  p('16-blondy-jhune-spa-bath', 'Spa bathroom with soaking tub and gold mosaic steam shower in an Allen, Texas estate'),
  p('17-blondy-jhune-closet', 'Boutique walk-in closet with center island and staircase in an Allen, Texas luxury home'),
  p('18-blondy-jhune-poker-room', 'Moody poker room with sculpted LED ceiling and backlit stone wall in an Allen, Texas estate'),
  p('19-blondy-jhune-home-theater', 'Home theater with LED ceiling rings and movie wall in an Allen, Texas luxury estate'),
  p('20-blondy-jhune-game-room', 'Game room with arcade cabinets, chess corner, and wave-lit stone wall in an Allen, Texas estate'),
  p('21-blondy-jhune-bar-lounge', 'Two-story bar lounge with wine racks and waterfall marble island in an Allen, Texas estate'),
  // — Primrose · Aubrey, TX —
  p('22-primrose-great-room', 'Great room with vaulted ceiling, tile fireplace, and bold blue staging in an Aubrey, Texas home'),
  p('23-primrose-kitchen', 'Bright white kitchen with island seating in a new construction Aubrey, Texas home'),
  // — Jordan · Allen, TX —
  p('24-jordan-dining-room', 'Staged dining room with a wall of windows in an Allen, Texas home'),
  p('25-jordan-home-office', 'Home office with vaulted ceiling and arched window in an Allen, Texas home'),
  p('26-jordan-pergola-patio', 'Covered patio with cedar pergola and outdoor kitchen in Allen, Texas'),
  // — Outdoor + drone close —
  p('27-blondy-jhune-pool-pergola', 'Pool with swing pergola and fountain jets under a blue sky in Allen, Texas'),
  p('28-blondy-jhune-pool-fountain', 'Pool with arched stone water feature at an Allen, Texas luxury estate'),
  p('29-lakeview-lake-aerial', 'Drone aerial of a Frisco, Texas neighborhood stretching toward Lewisville Lake'),
  p('30-lakeview-pool-aerial', 'Top-down drone view of a resort-style community pool in Frisco, Texas'),
];
