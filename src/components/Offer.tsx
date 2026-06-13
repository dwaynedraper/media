'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function Offer() {
  const revealHeader = useReveal<HTMLDivElement>();
  const revealCard   = useReveal<HTMLDivElement>();

  return (
    <section className="offer">
      <div className="container">
        <div ref={revealHeader} className="offer-header reveal">
          <div className="section-label">The Offer</div>
          <h2>The Essentials Package</h2>
          <p>Not just MLS photos. This is the minimum effective media system required to compete today.</p>
        </div>
        <div ref={revealCard} className="offer-card reveal">
          <div className="offer-top">
            <div>
              <div className="offer-name">Sharp Sighted Media</div>
              <div className="offer-title">Essentials Package</div>
              <p className="offer-desc">
                A complete, research-driven media package designed to make a property feel cohesive,
                intentional, and premium. Every element chosen because the data says it works.
              </p>
            </div>
            <div className="offer-price-block">
              <div className="offer-price">
                <sup>$</sup>400
              </div>
              <div className="offer-price-note">Per property</div>
            </div>
          </div>
          <div className="offer-includes">
            <div className="include-item">
              <div className="include-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <div>
                <div className="include-name">Story-Driven Stills</div>
                <div className="include-detail">
                  MLS-optimized. Show flow and presence, not just square footage.
                </div>
              </div>
            </div>
            <div className="include-item">
              <div className="include-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="include-name">Aerial Photography</div>
                <div className="include-detail">FAA certified. Context and scale. Never novelty.</div>
              </div>
            </div>
            <div className="include-item">
              <div className="include-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <div className="include-name">Floor Plan</div>
                <div className="include-detail">
                  Clean, accurate spatial layout that supports the listing narrative.
                </div>
              </div>
            </div>
            <div className="include-item">
              <div className="include-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <div className="include-name">20-Second Social Reel</div>
                <div className="include-detail">
                  Engineered for watch time and replays. Platform-ready on delivery.
                </div>
              </div>
            </div>

            <div className="include-item">
              <div className="include-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="include-name">Branded Property Website</div>
                <div className="include-detail">
                  A shareable single-property site, plus an MLS-safe unbranded version.
                </div>
              </div>
            </div>
          </div>
          <div className="offer-bottom">
            <div className="offer-guarantee">
              <strong>24-Hour Turnaround Guarantee</strong>
              Real estate moves fast. Edited files in your inbox within 24 hours of every shoot.
            </div>
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
