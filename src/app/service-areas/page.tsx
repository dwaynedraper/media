import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Service Areas | Real Estate Photography Across DFW',
  description:
    'Sharp Sighted Media photographs listings across the DFW 121 corridor — Frisco, Southlake, Plano, Allen, McKinney, and neighboring cities. $400 Essentials Package, 24-hour turnaround.',
  alternates: { canonical: '/service-areas' },
};

const ALSO_SERVED = [
  'Lewisville', 'The Colony', 'Coppell', 'Roanoke',
  'Denton', 'Grapevine', 'Colleyville', 'Westlake', 'Lucas', 'Aubrey',
];

export default function ServiceAreasPage() {
  return (
    <main>
      <header className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-inner fade-in">
          <div className="page-eyebrow">Sharp Sighted Media</div>
          <h1>
            Serving the <em>121 corridor</em> and the cities around it.
          </h1>
          <p className="page-header-sub">
            Same system everywhere: research-driven stills, aerials, floor plan,
            twilight, and a social reel — delivered within 24 hours.
          </p>
        </div>
      </header>

      <section className="city-section">
        <div className="container">
          <div className="section-label">Cities</div>
          <div className="city-index">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="city-index-card"
              >
                <span className="city-index-name">{c.name}</span>
                <span className="city-index-sub">
                  Real estate photography in {c.fullName} →
                </span>
              </Link>
            ))}
          </div>

          <div className="city-neighborhoods">
            <div className="section-label">Also serving</div>
            <div className="area-tags">
              {ALSO_SERVED.map((n) => (
                <span key={n} className="area-tag">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="city-cta">
        <div className="container">
          <h2>
            Don&apos;t see your city? <em>Ask.</em>
          </h2>
          <p className="city-cta-sub">
            If the property is in DFW, it&apos;s probably in range. Reach out and
            you&apos;ll hear back the same day.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
