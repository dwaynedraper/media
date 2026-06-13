import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PortfolioGrid from '@/components/PortfolioGrid';
import { cities, getCity, cityPhotos } from '@/data/cities';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: 'Service area not found' };
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title: `${city.metaTitle} | Sharp Sighted Media`,
      description: city.metaDescription,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const gallery = cityPhotos(city);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://sharpsighted.media/service-areas/${city.slug}#service`,
    name: `Real Estate Photography in ${city.fullName}`,
    serviceType: 'Real estate photography',
    description: city.metaDescription,
    areaServed: { '@type': 'City', name: city.fullName },
    provider: { '@id': 'https://sharpsighted.media/#business' },
    offers: {
      '@type': 'Offer',
      name: 'The Essentials Package',
      price: '400',
      priceCurrency: 'USD',
      description:
        'MLS-optimized stills, aerial photography, LiDAR-measured floor plan, twilight hero edit, and a 20-second vertical reel. 24-hour turnaround.',
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-inner fade-in">
          <div className="page-eyebrow">Service Area · {city.fullName}</div>
          <h1>
            Real estate photography in <em>{city.h1Em}</em>.
          </h1>
          <p className="page-header-sub">
            Stills, aerials, floor plan, twilight, and a social reel — one shoot,
            delivered within 24 hours.
          </p>
        </div>
      </header>

      <section className="city-section">
        <div className="container">
          {city.intro.map((para) => (
            <p key={para.slice(0, 32)} className="city-intro">
              {para}
            </p>
          ))}

          <div className="city-neighborhoods">
            <div className="section-label">Where we shoot in {city.name}</div>
            <div className="area-tags">
              {city.neighborhoods.map((n) => (
                <span key={n} className="area-tag">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="city-section">
        <div className="container">
          <div className="section-label">Recent work</div>
          {city.galleryNote && <p className="city-gallery-note">{city.galleryNote}</p>}
        </div>
        <PortfolioGrid photos={gallery} />
        <div className="container city-gallery-more">
          <Link href="/real-estate-photos">View the full portfolio →</Link>
        </div>
      </section>

      <section className="city-section">
        <div className="container">
          <div className="section-label">Questions, answered</div>
          <div className="city-faq">
            {city.faq.map((item) => (
              <details key={item.q} className="city-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="city-cta">
        <div className="container">
          <h2>
            Listing in {city.name}? <em>Book the shoot.</em>
          </h2>
          <p className="city-cta-sub">
            The Essentials Package — five deliverables, one shoot, 24-hour
            turnaround. $400 per property.
          </p>
          <Link href="/contact" className="btn-primary">
            Book the Essentials Package
          </Link>
        </div>
      </section>
    </main>
  );
}
