import type { Metadata } from 'next';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Real Estate Photography Portfolio | DFW & the 121 Corridor',
  description:
    'Recent real estate photography in Frisco, Southlake, Plano, McKinney, and across DFW. MLS stills, aerials, twilight edits, and floor plans by Sharp Sighted Media.',
  alternates: { canonical: '/real-estate-photos' },
};

export default function RealEstatePhotos() {
  return (
    <main>
      <PortfolioGrid />
    </main>
  );
}
