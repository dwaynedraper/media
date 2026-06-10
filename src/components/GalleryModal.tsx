'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { modalUrl } from '@/lib/cloudinary';
import type { GalleryPhoto } from '@/data/photos';

type Props = {
  photos: GalleryPhoto[];
  startIndex: number;
  onClose: () => void;
};

export default function GalleryModal({ photos, startIndex, onClose }: Props) {
  // Guard: startIndex clamped into range so a bad caller can't strand the
  // modal on a hole (negative or past the end → modulo math goes NaN-ish).
  const safeStart = Math.min(Math.max(startIndex, 0), Math.max(photos.length - 1, 0));
  const [index, setIndex] = useState(safeStart);
  const total = photos.length;
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const next = useCallback(() => setIndex(i => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, onClose]);

  // Body scroll lock + focus management
  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      previousFocus.current?.focus();
    };
  }, []);

  // Prefetch neighbors — one back, two ahead. Forward-biased because most
  // people page forward; by the time they land on a photo, the next one is
  // already in cache.
  useEffect(() => {
    if (total <= 1) return;
    [1, 2, -1].forEach(offset => {
      const img = new window.Image();
      img.src = modalUrl(photos[(index + offset + total) % total].publicId);
    });
  }, [index, photos, total]);

  // Click-zone nav: left third of the screen steps back, the rest advances.
  // Closing is the X button or Escape — clicks on the photo never close.
  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (total <= 1) return;
    if (e.clientX < window.innerWidth / 3) prev();
    else next();
  };

  // Touch swipe
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) prev();
      else        next();
    }
    touchStart.current = null;
  };

  // Guard: nothing to show — bail rather than render a broken
  // <img src=""> with NaN-ing nav math.
  if (total === 0) return null;

  const current = photos[index];

  return (
    <div
      className="gallery-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Real estate photo gallery"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="modal-image-wrap" onClick={handleStageClick}>
        <img
          key={index}
          src={modalUrl(current.publicId)}
          alt={current.alt}
          className="modal-image"
          draggable={false}
        />
      </div>

      <button
        ref={closeBtnRef}
        className="modal-close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {total > 1 && (
        <>
          <button className="modal-prev" onClick={prev} aria-label="Previous photo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button className="modal-next" onClick={next} aria-label="Next photo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="modal-counter" aria-live="polite">
            <span aria-label={`Photo ${index + 1} of ${total}`}>
              {index + 1} <span aria-hidden="true">/</span> {total}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
