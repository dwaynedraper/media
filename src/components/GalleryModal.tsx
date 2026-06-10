'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { cloudinaryUrl } from '@/lib/cloudinary';
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
  const [zoomed, setZoomed] = useState(false);
  const total = photos.length;
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const next = useCallback(() => {
    setZoomed(false);
    setIndex(i => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setZoomed(false);
    setIndex(i => (i - 1 + total) % total);
  }, [total]);

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

  // Preload neighbors for snappy nav
  useEffect(() => {
    if (total <= 1) return;
    const nextIdx = (index + 1) % total;
    const prevIdx = (index - 1 + total) % total;
    [nextIdx, prevIdx].forEach(i => {
      const img = new window.Image();
      img.src = cloudinaryUrl(photos[i].publicId, 'fit');
    });
  }, [index, photos, total]);

  // Center scroll position when entering zoom mode
  useEffect(() => {
    if (!zoomed) return;
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    const center = () => {
      wrap.scrollLeft = (img.scrollWidth - wrap.clientWidth) / 2;
      wrap.scrollTop  = (img.scrollHeight - wrap.clientHeight) / 2;
    };
    if (img.complete) center();
    else img.addEventListener('load', center, { once: true });
  }, [zoomed]);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const img = imgRef.current;
    if (!img) return;
    const fits =
      img.naturalWidth  <= window.innerWidth &&
      img.naturalHeight <= window.innerHeight;
    if (fits) return;
    setZoomed(z => !z);
  };

  const handleWrapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Touch swipe (disabled when zoomed — pan takes priority)
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomed) return;
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current || zoomed) return;
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
  const currentSrc = cloudinaryUrl(current.publicId, zoomed ? 'raw' : 'fit');

  return (
    <div
      className="gallery-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Real estate photo gallery"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={wrapRef}
        className={`modal-image-wrap${zoomed ? ' zoomed' : ''}`}
        onClick={handleWrapClick}
      >
        <img
          key={`${index}-${zoomed ? 'r' : 'f'}`}
          ref={imgRef}
          src={currentSrc}
          alt={current.alt}
          className="modal-image"
          onClick={handleImageClick}
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
