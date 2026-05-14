import type { Metadata } from 'next';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Real Estate Photos | Sharp Sighted Media',
  description:
    'Recent real estate work by Sharp Sighted Media in the Dallas-Fort Worth area.',
};

export default function RealEstatePhotos() {
  return (
    <main>
      <PortfolioGrid />
    </main>
  );
}
