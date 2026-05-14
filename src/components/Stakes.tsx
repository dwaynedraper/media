'use client';

import { useReveal } from '@/hooks/useReveal';

export default function Stakes() {
  const revealH2   = useReveal<HTMLHeadingElement>();
  const revealWin  = useReveal<HTMLDivElement>();
  const revealLose = useReveal<HTMLDivElement>();

  return (
    <section className="stakes">
      <div className="container">
        <div className="stakes-inner">
          <h2 ref={revealH2} className="reveal">What&apos;s at stake on every listing.</h2>
          <div ref={revealWin} className="stake-col stake-col-win reveal">
            <div className="stake-label win-label">When the media works</div>
            <ul className="stake-list">
              <li><span className="win-dot" />Buyers stop scrolling and come back.</li>
              <li>
                <span className="win-dot" />
                Your next listing appointment is easier because your last one spoke for itself.
              </li>
              <li><span className="win-dot" />Sellers recommend you before you ask.</li>
              <li>
                <span className="win-dot" />You look like the premium choice. Because you are.
              </li>
            </ul>
          </div>
          <div ref={revealLose} className="stake-col stake-col-lose reveal reveal-delay-1">
            <div className="stake-label lose-label">When it doesn&apos;t</div>
            <ul className="stake-list">
              <li><span className="lose-dot" />Your listing blends into the feed.</li>
              <li>
                <span className="lose-dot" />
                Buyers schedule showings for the property that looked better.
              </li>
              <li>
                <span className="lose-dot" />Sellers wonder if you take the job seriously.
              </li>
              <li>
                <span className="lose-dot" />The next listing appointment gets harder.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
