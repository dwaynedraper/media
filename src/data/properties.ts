export type Property = {
  slug: string;       // unique key, lowercase, hyphenated (e.g. 'primrose')
  name: string;       // display name (e.g. 'Primrose')
  date: string;       // short label (e.g. '2026' or 'May 2026')
  cover: string;      // Cloudinary public_id — default thumbnail
  hover: string;      // Cloudinary public_id — shown on hover
  photos: string[];   // Cloudinary public_ids in modal display order
};

/**
 * To add a property:
 *   1. Upload photos to Cloudinary. Suggested folder: sharpsighted/<slug>/
 *      Suggested naming: 01-exterior-front, 02-aerial-front, 03-living-room, etc.
 *      The numeric prefix preserves order and matches photos[] below.
 *   2. Add an entry to the array below.
 *   3. cover and hover are typically also included in photos[] so they
 *      appear in the modal carousel.
 *
 * Example:
 *   {
 *     slug: 'primrose',
 *     name: 'Primrose',
 *     date: '2026',
 *     cover:  'sharpsighted/primrose/01-exterior-front',
 *     hover:  'sharpsighted/primrose/02-aerial-front',
 *     photos: [
 *       'sharpsighted/primrose/01-exterior-front',
 *       'sharpsighted/primrose/02-aerial-front',
 *       'sharpsighted/primrose/03-living-room',
 *       'sharpsighted/primrose/04-kitchen',
 *     ],
 *   },
 */
export const properties: Property[] = [];
