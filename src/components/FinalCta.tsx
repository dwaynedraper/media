'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function FinalCta() {
  const revealH2  = useReveal<HTMLHeadingElement>();
  const revealP   = useReveal<HTMLParagraphElement>();
  const revealBtn = useReveal<HTMLAnchorElement>();
  const revealSub = useReveal<HTMLParagraphElement>();

  return (
    <section className="final-cta">
      <div className="container">
        <h2 ref={revealH2} className="reveal">
          Your next listing deserves <em>better.</em>
        </h2>
        <p ref={revealP} className="reveal reveal-delay-1">
          Book online in two minutes. No phone tag. Shoot day confirmed instantly.
        </p>
        <Link ref={revealBtn} href="/contact" className="btn-primary reveal reveal-delay-2">
          Book the Essentials Package
          <span className="price-tag">$400</span>
        </Link>
        <p ref={revealSub} className="final-cta-sub reveal reveal-delay-3">
          Questions first?{' '}
          <Link href="/contact">Reach out directly.</Link>{' '}
          We&apos;ll respond same day.
        </p>
      </div>
    </section>
  );
}
