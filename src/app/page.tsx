import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Guide from '@/components/Guide';
import Plan from '@/components/Plan';
import Offer from '@/components/Offer';
import Stakes from '@/components/Stakes';
import RetainerTease from '@/components/RetainerTease';
import FinalCta from '@/components/FinalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Guide />
      <Plan />
      <Offer />
      <Stakes />
      <RetainerTease />
      <FinalCta />
    </main>
  );
}
