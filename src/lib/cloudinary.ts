const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';

type Variant = 'thumb' | 'fit' | 'bg';

const transforms: Record<Variant, string> = {
  // Grid thumbnails — 3:2 fill at 1800x1200, browser/network-aware format and quality
  thumb: 'c_fill,g_auto,w_1800,h_1200,q_auto,f_auto',
  // Fullscreen fallback — capped to 4K, contained. Only used when the
  // viewport is unknown (SSR); browsers get the right-sized modalUrl below.
  fit:   'c_limit,w_3840,h_2160,q_auto,f_auto',
  // Wide, soft-capped — decorative section backgrounds
  bg:    'c_limit,w_2400,q_auto,f_auto',
};

function buildUrl(transform: string, publicId: string): string {
  if (!CLOUD_NAME) {
    // Silent blank images are miserable to debug — say why, once per load.
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        'cloudinaryUrl: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set — images will not render. Set it in .env.local (and on the production host).',
      );
    }
    return '';
  }
  if (!publicId) return '';
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
}

export function cloudinaryUrl(publicId: string, variant: Variant): string {
  return buildUrl(transforms[variant], publicId);
}

/**
 * Fullscreen-modal URL sized to the visitor's actual screen instead of a
 * blanket 4K — on a typical laptop that's roughly a quarter of the bytes,
 * which is most of what "instant" feels like.
 *
 * Dimensions are bucketed to 320px steps so visitors with similar screens
 * share the same cached CDN asset, and DPR is capped at 2 (beyond that the
 * extra pixels are invisible in photographs but triple the payload).
 *
 * The wall's hover-prefetch and the modal both build URLs through THIS
 * function, so a prefetched image is always a cache hit when the modal
 * asks for it. Don't mix it with cloudinaryUrl('fit') for the same image.
 */
export function modalUrl(publicId: string): string {
  if (typeof window === 'undefined') return cloudinaryUrl(publicId, 'fit');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.min(3840, Math.ceil((window.innerWidth * dpr) / 320) * 320);
  const h = Math.min(2160, Math.ceil((window.innerHeight * dpr) / 320) * 320);
  return buildUrl(`c_limit,w_${w},h_${h},q_auto,f_auto`, publicId);
}
