import Link from 'next/link';
import { teaserHighlights } from '@/data/offerings';

/**
 * Homepage teaser. Keeps the main CTA on Essentials, but hints there's more
 * without listing the whole menu. Links to /packages for the full breakdown.
 */
export default function MoreOptions() {
  return (
    <section className="more-options">
      <div className="container">
        <div className="more-options-inner reveal">
          <div className="section-label">Need more?</div>
          <h2 className="more-options-h2">We&apos;ve got you covered.</h2>
          <ul className="more-options-list">
            {teaserHighlights.map((item) => (
              <li key={item}>
                <span className="win-dot" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
            <li className="more-options-and">
              <span className="win-dot" aria-hidden="true" />
              <span>And more…</span>
            </li>
          </ul>
          <Link href="/packages" className="more-options-link">
            See all packages &amp; add-ons →
          </Link>
        </div>
      </div>
    </section>
  );
}
