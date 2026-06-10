import Link from 'next/link';
import { cloudinaryUrl } from '@/lib/cloudinary';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-line" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-eyebrow">Sharp Sighted Media · Dallas-Fort Worth</div>
        <h1>
          Your listings should be <em>impossible</em> to ignore.
        </h1>
        <p className="hero-sub">
          Buyers decide in seconds. Your media is the first impression. Make it the one that brings them back.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn-primary">
            Book the Essentials Package
            <span className="price-tag">$400</span>
          </Link>
          <Link href="/real-estate-photos" className="btn-ghost">
            View the work
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-photo">
          <img
            src={cloudinaryUrl('sharpsighted/home/hero-living-room', 'thumb')}
            alt="Double-height formal living room with sculptural fireplace and ring chandeliers in an Allen, Texas luxury estate"
            fetchPriority="high"
            draggable={false}
          />
        </div>
        <div className="hero-badges" aria-label="Credentials">
          <div className="badge">FAA Part 107 Certified</div>
          <div className="badge">MLS and AI Compliant</div>
          <div className="badge">24-Hour Delivery</div>
          <div className="badge">Serving the 121 Corridor</div>
        </div>
      </div>
    </section>
  );
}
