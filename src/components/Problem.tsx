'use client';

import { useReveal } from '@/hooks/useReveal';
import { cloudinaryUrl } from '@/lib/cloudinary';

export default function Problem() {
  const revealInner = useReveal<HTMLDivElement>();
  const revealItem1 = useReveal<HTMLLIElement>();
  const revealItem2 = useReveal<HTMLLIElement>();
  const revealItem3 = useReveal<HTMLLIElement>();

  return (
    <section className="problem">
      <div className="container">
        <div ref={revealInner} className="problem-inner reveal">
          <div className="problem-header">
            <div className="section-label">The Problem</div>
            <h2>When the media underperforms, the client blames you.</h2>
          </div>
          <figure className="section-photo problem-photo">
            <img
              src={cloudinaryUrl('sharpsighted/home/problem-wine-wall-dining', 'thumb')}
              alt="Formal dining room with backlit wine wall and gold pendant chandelier in an Allen, Texas luxury estate"
              loading="lazy"
              draggable={false}
            />
          </figure>
          <ul className="problem-list">
            <li ref={revealItem1} className="problem-item reveal reveal-delay-1">
              <span className="problem-num">01</span>
              <div className="problem-item-text">
                <strong>Your photos look like everyone else&apos;s.</strong>
                Average media signals average standards. Sellers notice. Buyers move on.
              </div>
            </li>
            <li ref={revealItem2} className="problem-item reveal reveal-delay-2">
              <span className="problem-num">02</span>
              <div className="problem-item-text">
                <strong>Buyers decide in seconds. They don&apos;t come back.</strong>
                If the scroll stops somewhere else, your listing loses.
              </div>
            </li>
            <li ref={revealItem3} className="problem-item reveal reveal-delay-3">
              <span className="problem-num">03</span>
              <div className="problem-item-text">
                <strong>Your next listing appointment depends on this one.</strong>
                Every property you represent is a public statement about your standards.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
