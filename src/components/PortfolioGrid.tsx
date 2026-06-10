'use client';

import { useRef, useState } from 'react';
import { cloudinaryUrl, modalUrl } from '@/lib/cloudinary';
import { photos } from '@/data/photos';
import GalleryModal from './GalleryModal';

/**
 * The wall: one continuous scroll of individual photos. Clicking any
 * photo opens a single fullscreen carousel over the entire set,
 * starting at the photo that was clicked.
 */
export default function PortfolioGrid() {
  const [startIndex, setStartIndex] = useState<number | null>(null);

  // Start fetching the fullscreen version the moment intent shows (hover,
  // keyboard focus, or first touch) — by the time the modal opens, the
  // image is usually already sitting in the browser cache.
  const prefetched = useRef<Set<string>>(new Set());
  const prefetch = (publicId: string) => {
    if (prefetched.current.has(publicId)) return;
    prefetched.current.add(publicId);
    const img = new window.Image();
    img.src = modalUrl(publicId);
  };

  if (photos.length === 0) {
    return <p className="portfolio-empty">Recent work coming soon.</p>;
  }

  return (
    <>
      <div className="portfolio-grid">
        {photos.map((photo, i) => (
          <button
            key={photo.publicId}
            type="button"
            className="portfolio-card"
            onClick={() => setStartIndex(i)}
            onMouseEnter={() => prefetch(photo.publicId)}
            onFocus={() => prefetch(photo.publicId)}
            onTouchStart={() => prefetch(photo.publicId)}
          >
            <img
              className="card-cover"
              src={cloudinaryUrl(photo.publicId, 'thumb')}
              alt={photo.alt}
              loading={i < 4 ? 'eager' : 'lazy'}
              draggable={false}
            />
          </button>
        ))}
      </div>

      {startIndex !== null && (
        <GalleryModal
          photos={photos}
          startIndex={startIndex}
          onClose={() => setStartIndex(null)}
        />
      )}
    </>
  );
}
