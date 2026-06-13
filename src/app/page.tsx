import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Guide from '@/components/Guide';
import Plan from '@/components/Plan';
import Offer from '@/components/Offer';
import MoreOptions from '@/components/MoreOptions';
import Stakes from '@/components/Stakes';
import RetainerTease from '@/components/RetainerTease';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Guide />
      <Plan />
      <Offer />
      <MoreOptions />
      <Stakes />
      <RetainerTease />
      <FinalCta />
    </main>
  );
}
