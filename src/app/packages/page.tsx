'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { upgradePackages, addonGroups } from '@/data/offerings';

export default function Packages() {
  const revealEssentials = useReveal<HTMLDivElement>();
  const revealDivider    = useReveal<HTMLDivElement>();
  const revealRetainer   = useReveal<HTMLDivElement>();
  const revealSteps      = useReveal<HTMLDivElement>();
  const revealIncludes   = useReveal<HTMLDivElement>();
  const revealCallout    = useReveal<HTMLDivElement>();
  const revealAddons     = useReveal<HTMLDivElement>();
  const revealFinalCta   = useReveal<HTMLDivElement>();

  const packagesFaq = [
    {
      q: 'How much does real estate photography cost in the DFW 121 corridor?',
      a: 'The Essentials Package is $400 per property — MLS-optimized stills, aerial photography, a measured floor plan, a twilight hero edit, a 20-second vertical reel, and a branded property website. Bundled packages run to $550 (Zillow) and $1,000 (Premium).',
    },
    {
      q: 'How fast is turnaround?',
      a: 'Edited, MLS-ready files are in your inbox within 24 hours of every shoot. Guaranteed.',
    },
    {
      q: 'Which cities do you serve?',
      a: 'The DFW 121 corridor and surrounding North Texas — Allen, Plano, Frisco, McKinney, Southlake, Grapevine, Colleyville, and neighboring communities across Collin, Denton, and Tarrant counties.',
    },
    {
      q: 'Do you offer drone and aerial photography?',
      a: 'Yes. Sharp Sighted Media is FAA Part 107 certified, and aerial stills are included in every Essentials Package. A cinematic aerial video (MasterShots) is available as a $250 add-on.',
    },
    {
      q: 'What is the difference between the Zillow and Premium packages?',
      a: 'The Zillow Package ($550) adds a Zillow 3D interactive tour and interactive floor plan, making a listing Zillow-Showcase-eligible. The Premium Package ($1,000) adds a cinematic video walkthrough and a cinematic aerial film.',
    },
    {
      q: 'When are shoot days?',
      a: 'Wednesdays and Thursdays. Booking is online and confirmed instantly.',
    },
  ];

  const packagesFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://sharpsighted.media/packages#faq',
    mainEntity: packagesFaq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const catalogItems = [
    {
      name: 'The Essentials Package',
      price: '400',
      description:
        'MLS-optimized stills, aerial photography, a measured floor plan, a twilight hero edit, a 20-second vertical reel, and a branded property website. 24-hour turnaround.',
    },
    ...upgradePackages.map((p) => ({
      name: p.name,
      price: String(Number(p.price.replace(/[^0-9.]/g, ''))),
      description: p.tagline,
    })),
  ];

  const packagesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': 'https://sharpsighted.media/packages#catalog',
    name: 'Real estate media packages — Sharp Sighted Media',
    provider: { '@id': 'https://sharpsighted.media/#business' },
    itemListElement: catalogItems.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: p.price,
      priceCurrency: 'USD',
      description: p.description,
      url: 'https://sharpsighted.media/packages',
      availability: 'https://schema.org/InStock',
    })),
  };

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
                  <div className="include-detail">A shareable single-property site, plus an MLS-safe unbranded version.</div>
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

      {/* Upgrade Packages */}
      <section className="pkg-upgrades">
        <div className="container">
          <div className="section-label">Build On It</div>
          <h2 className="pkg-section-h2">Two ways to go bigger.</h2>
          <div className="pkg-cards">
            {upgradePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`pkg-card reveal${pkg.featured ? ' pkg-card-featured' : ''}`}
              >
                {pkg.featured && <div className="pkg-badge">Best value</div>}
                <div className="pkg-card-name">{pkg.name}</div>
                <div className="pkg-card-tagline">{pkg.tagline}</div>
                <div className="pkg-card-price">
                  {pkg.price}
                  <span className="pkg-card-cadence">{pkg.cadence}</span>
                </div>
                <ul className="pkg-card-includes">
                  {pkg.includes.map((inc) => (
                    <li key={inc}>
                      <span className="win-dot" aria-hidden="true" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {pkg.note && <p className="pkg-card-note">{pkg.note}</p>}
                <Link href="/contact" className="btn-primary">
                  Book {pkg.name.replace('The ', '')}
                </Link>
              </div>
            ))}
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
            <div className="section-label">Add-Ons</div>
            <h2 className="pkg-section-h2">Build the listing it deserves.</h2>
            <p className="addons-body">
              Every add-on stacks onto any Essentials booking. Mix and match for a specific listing —
              or grab one of the packages above.
            </p>
          </div>

          <div className="addon-groups">
            {addonGroups.map((group) => (
              <div key={group.label} className="addon-group reveal">
                <div className="addon-group-label">{group.label}</div>
                <ul className="addon-rows">
                  {group.items.map((item) => (
                    <li key={item.name} className="addon-row">
                      <div className="addon-row-head">
                        <span className="addon-name">{item.name}</span>
                        <span className="addon-price">{item.price}</span>
                      </div>
                      {item.note && <p className="addon-note">{item.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="reveal">
            <p className="addons-footer">
              Not sure what fits?{' '}
              <Link href="/contact" className="addons-link">
                Tell us about the listing
              </Link>{' '}
              and we&apos;ll put together the right combination.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="addons">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Questions, answered</div>
            <h2 className="pkg-section-h2">The quick answers.</h2>
            <div className="city-faq">
              {packagesFaq.map((item) => (
                <details key={item.q} className="city-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesFaqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesJsonLd) }}
        />
      </section>

      {/* Final CTA */}
      <section ref={revealFinalCta} className="final-cta reveal">
        <h2>
          Ready to make your listings <em>impossible to ignore?</em>
        </h2>
        <p>Start with the Essentials. Everything else follows from there.</p>
        <Link href="/contact" className="btn-primary">
          Book the Essentials Package
        </Link>
        <p className="final-cta-sub">
          Already working with us?{' '}
          <Link href="/contact">Ask about the Visibility Retainer</Link> on your next delivery.
        </p>
      </section>

    </>
  );
}
