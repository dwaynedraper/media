import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityHub from '@/components/city/CityHub';
import { getCityExperience, experienceSlugs } from '@/data/cityGuides/experiences';
import { getCityGuide } from '@/data/cityGuides';

const SITE = 'https://sharpsighted.media';

// Only the cities with a built experience render; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return experienceSlugs.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const exp = getCityExperience(city);
  if (!exp) return { title: 'City guide not found' };
  return {
    title: exp.metaTitle,
    description: exp.metaDescription,
    alternates: { canonical: `/${exp.slug}` },
    openGraph: {
      title: exp.metaTitle,
      description: exp.metaDescription,
      url: `${SITE}/${exp.slug}`,
      type: 'article',
    },
  };
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const exp = getCityExperience(city);
  const guide = getCityGuide(city);
  if (!exp || !guide) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Place',
        '@id': `${SITE}/${exp.slug}#place`,
        name: guide.fullName,
        address: {
          '@type': 'PostalAddress',
          addressLocality: guide.name,
          addressRegion: 'TX',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE}/${exp.slug}#webpage`,
        url: `${SITE}/${exp.slug}`,
        name: exp.metaTitle,
        description: exp.metaDescription,
        about: { '@id': `${SITE}/${exp.slug}#place` },
        breadcrumb: { '@id': `${SITE}/${exp.slug}#breadcrumb` },
        publisher: { '@id': `${SITE}/#business` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}/${exp.slug}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: guide.name, item: `${SITE}/${exp.slug}` },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityHub experience={exp} />
    </main>
  );
}
