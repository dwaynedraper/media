'use client';

import { useReveal } from '@/hooks/useReveal';
import GuideDiagram from './GuideDiagram';

export default function Guide() {
  const revealLeft  = useReveal<HTMLDivElement>();
  const revealQuote = useReveal<HTMLDivElement>();
  const revealBody  = useReveal<HTMLDivElement>();

  return (
    <section className="guide">
      <div className="container">
        <div className="guide-inner">
          <div ref={revealLeft} className="guide-left reveal">
            <div className="section-label">Your Guide</div>
            <h2>
              You need a media partner who understands{' '}
              <em>how buyers actually behave.</em>
            </h2>
            <ul className="cred-list">
              <li>FAA Part 107 Certified Drone Operations</li>
              <li>Research-Driven Production Framework</li>
              <li>Built for $500K to $2M Listings</li>
              <li>Automated Booking and Scheduling</li>
            </ul>
          </div>
          <div className="guide-right">
            <div ref={revealQuote} className="guide-quote reveal">
              <p>
                &ldquo;Most real estate media documents space. It doesn&apos;t persuade a buyer to picture
                themselves inside it. Those are two completely different jobs.&rdquo;
              </p>
            </div>
            <div ref={revealBody} className="guide-body reveal reveal-delay-1">
              <p>
                Every Sharp Sighted Media package is built on buyer behavior research from Zillow,
                Redfin, Realtor.com, NAR, and Matterport.
              </p>
              <p>
                We design around the metrics that matter. Saves, shares, virtual tour preference,
                dwell time, and the attention patterns that influence how fast a property sells and
                what buyers believe it&apos;s worth.
              </p>
              <p>
                If it doesn&apos;t improve attention, clarity, or perceived value, it doesn&apos;t make
                the cut.
              </p>
            </div>
          </div>
          <GuideDiagram />
        </div>
      </div>
    </section>
  );
}
