'use client';

import { useState } from 'react';
import { cloudinaryUrl } from '@/lib/cloudinary';
import { properties } from '@/data/properties';
import GalleryModal from './GalleryModal';

export default function PortfolioGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (properties.length === 0) {
    return <p className="portfolio-empty">Recent work coming soon.</p>;
  }

  return (
    <>
      <div className="portfolio-grid">
        {properties.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            className="portfolio-card"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open ${p.name} gallery`}
          >
            <img
              className="card-cover"
              src={cloudinaryUrl(p.cover, 'thumb')}
              alt={p.name}
              loading="lazy"
              draggable={false}
            />
            <img
              className="card-hover"
              src={cloudinaryUrl(p.hover, 'thumb')}
              alt=""
              aria-hidden="true"
              loading="lazy"
              draggable={false}
            />
            <div className="card-overlay">
              <div className="card-name">{p.name}</div>
              <div className="card-date">{p.date}</div>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryModal
          property={properties[activeIndex]}
          startIndex={0}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
