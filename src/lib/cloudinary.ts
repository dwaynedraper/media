const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';

type Variant = 'thumb' | 'fit' | 'raw';

const transforms: Record<Variant, string> = {
  // Grid thumbnails — 3:2 fill at 1800x1200, browser/network-aware format and quality
  thumb: 'c_fill,g_auto,w_1800,h_1200,q_auto,f_auto',
  // Modal fit — capped to 4K, contained
  fit:   'c_limit,w_3840,h_2160,q_auto,f_auto',
  // Pixel-perfect zoom — original size, best quality
  raw:   'q_auto:best,f_auto',
};

export function cloudinaryUrl(publicId: string, variant: Variant): string {
  if (!CLOUD_NAME || !publicId) return '';
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms[variant]}/${publicId}`;
}
