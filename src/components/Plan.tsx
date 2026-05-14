'use client';

import { useReveal } from '@/hooks/useReveal';

export default function Plan() {
  const revealH2   = useReveal<HTMLHeadingElement>();
  const revealSub  = useReveal<HTMLParagraphElement>();
  const revealSt1  = useReveal<HTMLDivElement>();
  const revealSt2  = useReveal<HTMLDivElement>();
  const revealSt3  = useReveal<HTMLDivElement>();

  return (
    <section className="plan">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          How It Works
        </div>
        <h2 ref={revealH2} className="reveal">Three steps to media that works.</h2>
        <p ref={revealSub} className="plan-sub reveal">
          Booking is automated and synced. No phone tag. No waiting.
        </p>
        <div className="plan-steps">
          <div ref={revealSt1} className="plan-step reveal">
            <div className="step-num">01</div>
            <div className="step-title">Book the Essentials Package</div>
            <div className="step-body">
              Click book, choose your shoot day, and confirm. Wednesday and Thursday availability.
              Calendar synced and confirmed instantly.
            </div>
          </div>
          <div ref={revealSt2} className="plan-step reveal reveal-delay-1">
            <div className="step-num">02</div>
            <div className="step-title">We handle everything on shoot day</div>
            <div className="step-body">
              Stills, aerials, floor plan, and reel captured in one session. Edited and delivered
              within 24 hours.
            </div>
          </div>
          <div ref={revealSt3} className="plan-step reveal reveal-delay-2">
            <div className="step-num">03</div>
            <div className="step-title">Post with confidence</div>
            <div className="step-body">
              MLS-compliant files, social-ready assets, and a reel designed for replays. Ready the
              moment it lands in your inbox.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
