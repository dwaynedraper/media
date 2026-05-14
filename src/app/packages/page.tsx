'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function Packages() {
  const revealEssentials = useReveal<HTMLDivElement>();
  const revealDivider    = useReveal<HTMLDivElement>();
  const revealRetainer   = useReveal<HTMLDivElement>();
  const revealSteps      = useReveal<HTMLDivElement>();
  const revealIncludes   = useReveal<HTMLDivElement>();
  const revealCallout    = useReveal<HTMLDivElement>();
  const revealAddons     = useReveal<HTMLDivElement>();
  const revealFinalCta   = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-inner fade-in">
          <div className="page-eyebrow">Sharp Sighted Media</div>
          <h1>
            Two ways to work <em>together.</em>
          </h1>
          <p className="page-header-sub">
            Start with one listing. Stay for the system.
          </p>
        </div>
      </header>

      {/* Essentials Package */}
      <section className="offer">
        <div className="container">
          <div className="section-label">The Starting Point</div>
          <div ref={revealEssentials} className="offer-card reveal">
            <div className="offer-top">
              <div>
                <div className="offer-name">Sharp Sighted Media</div>
                <div className="offer-title">Everything a listing needs to compete today.</div>
                <p className="offer-desc">
                  Not just photos. A complete media system built around how buyers actually behave.
                  Every element is chosen because the data says it works.
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
                  <div className="include-detail">MLS-optimized. Show flow and presence, not just square footage.</div>
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
                  <div className="include-detail">FAA Part 107 certified. Context and scale. Never novelty.</div>
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
                  <div className="include-detail">Clean, accurate spatial layout that supports the listing narrative.</div>
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
                  <div className="include-detail">Engineered for watch time and replays. Platform-ready on delivery.</div>
                </div>
              </div>

              <div className="include-item include-item-full">
                <div className="include-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div>
                  <div className="include-name">White-Glove MLS Delivery</div>
                  <div className="include-detail">Compliant, organized, and ready the moment it lands in your inbox.</div>
                </div>
              </div>
            </div>

            <div className="offer-bottom">
              <div className="offer-guarantee">
                <strong>24-Hour Turnaround</strong>
                Delivered within 24 hours of every shoot.
              </div>
              <div>
                <Link href="/contact" className="btn-primary">
                  Book the Essentials Package
                </Link>
                <p className="offer-note">Wednesday and Thursday shoot days. Serving the 121 Corridor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div ref={revealDivider} className="packages-divider reveal">
        <p>
          Listings create moments of attention.<br />
          The Visibility Retainer makes sure people remember who was behind them.
        </p>
      </div>

      {/* Visibility Retainer */}
      <section className="retainer">
        <div className="container">
          <div className="section-label">For Agents Who Want More</div>

          <div ref={revealRetainer} className="reveal">
            <h2 className="pkg-section-h2">
              One session. Ninety days of content. <em>Zero extra work.</em>
            </h2>
            <p className="retainer-intro">
              Most agents disappear between listings. The Visibility Retainer keeps you in the feed
              without adding anything to your schedule. One focused session per quarter. Your editors
              handle the rest. You show up, stay visible, and let the content do the selling.
            </p>
          </div>

          <div ref={revealSteps} className="plan-steps reveal" style={{ marginTop: '3rem' }}>
            <div className="plan-step">
              <div className="step-num">01</div>
              <div className="step-title">One session per quarter</div>
              <div className="step-body">
                We meet for one 1-2 hour session. No prep required beyond showing up.
              </div>
            </div>
            <div className="plan-step">
              <div className="step-num">02</div>
              <div className="step-title">Your editors handle the rest</div>
              <div className="step-body">
                Our editors cut 12 short-form clips. You receive a branded version of each, ready to post.
              </div>
            </div>
            <div className="plan-step">
              <div className="step-num">03</div>
              <div className="step-title">Two audiences, zero extra effort</div>
              <div className="step-body">
                We co-post 12 educational versions through Sharp Sighted Studio. Your content reaches
                two audiences without any extra work from you.
              </div>
            </div>
          </div>

          <div ref={revealIncludes} className="retainer-content reveal">
            <div className="retainer-includes-col">
              <div className="card-label">What&apos;s Included</div>
              <ul className="stake-list">
                <li>
                  <span className="win-dot" aria-hidden="true" />
                  <span>12 branded clips per quarter, delivered and ready to post</span>
                </li>
                <li>
                  <span className="win-dot" aria-hidden="true" />
                  <span>12 educational co-posts through Sharp Sighted Studio</span>
                </li>
                <li>
                  <span className="win-dot" aria-hidden="true" />
                  <span>Monthly 15-minute alignment call to keep content intentional</span>
                </li>
                <li>
                  <span className="win-dot" aria-hidden="true" />
                  <span>15% off every Essentials booking while on retainer</span>
                </li>
                <li>
                  <span className="win-dot" aria-hidden="true" />
                  <span>Priority scheduling on all shoot days</span>
                </li>
              </ul>
            </div>

            <div className="retainer-price-col">
              <div className="card-label">Investment</div>
              <div>
                <div className="offer-price">
                  <sup>$</sup>1,500
                </div>
                <div className="offer-price-note">Per quarter</div>
              </div>
              <ul className="retainer-price-meta">
                <li>Billed at the start of each session.</li>
                <li>6-month minimum.</li>
              </ul>
              <p className="retainer-price-why">
                Algorithms take time to learn. Audiences take time to trust. Six months is where the
                compounding starts.
              </p>
              <Link href="/contact" className="btn-primary" style={{ marginTop: '0.5rem', display: 'inline-flex' }}>
                Let&apos;s Talk About It
              </Link>
              <p className="retainer-urgency">
                Retainer spots are limited. We cap client volume to protect quality.
              </p>
            </div>
          </div>

          <div ref={revealCallout} className="guide-quote reveal" style={{ marginTop: '2.5rem' }}>
            <p>
              This is not a marketing agency. It is not a social media manager. It is a production
              system. You own the content. We handle the creation.
            </p>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="addons">
        <div className="container">
          <div ref={revealAddons} className="reveal">
            <div className="section-label">Need More for a Specific Listing</div>
            <h2 className="pkg-section-h2">Some listings call for more.</h2>
            <p className="addons-body">
              These options are available as standalone additions to any Essentials booking. Designed
              for properties where depth and narrative affect perceived value.
            </p>
            <ul className="addons-list">
              <li>
                <span className="win-dot" aria-hidden="true" />
                <span>Zillow 3D interactive tour</span>
              </li>
              <li>
                <span className="win-dot" aria-hidden="true" />
                <span>Cinematic walkthrough with agent voiceover</span>
              </li>
              <li>
                <span className="win-dot" aria-hidden="true" />
                <span>Extended aerial storytelling</span>
              </li>
              <li>
                <span className="win-dot" aria-hidden="true" />
                <span>SEO-driven listing copy and area research</span>
              </li>
              <li>
                <span className="win-dot" aria-hidden="true" />
                <span>Neighborhood and city highlight video</span>
              </li>
            </ul>
            <p className="addons-footer">
              Pricing varies by scope.{' '}
              <Link href="/contact" className="addons-link">
                Contact us to discuss
              </Link>{' '}
              and we&apos;ll put together the right combination.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={revealFinalCta} className="final-cta reveal">
        <h2>
          Ready to make your listings <em>impossible to ignore?</em>
        </h2>
        <p>Start with the Essentials. Everything else follows from there.</p>
        <Link href="/contact" className="btn-primary">
          Book the Essentials Package
          <span className="price-tag">$400</span>
        </Link>
        <p className="final-cta-sub">
          Already working with us?{' '}
          <Link href="/contact">Ask about the Visibility Retainer</Link> on your next delivery.
        </p>
      </section>

    </>
  );
}
