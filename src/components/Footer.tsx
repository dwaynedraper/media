'use client';

import Link from 'next/link';
import { useState } from 'react';

const PROPERTIES = [
  { label: 'Photos', domain: 'sharpsighted.photos', href: 'https://sharpsighted.photos', color: '#38bdf8', active: false },
  { label: 'Media', domain: 'sharpsighted.media', href: 'https://sharpsighted.media', color: '#c9922a', active: true },
  { label: 'Studio', domain: 'sharpsighted.studio', href: 'https://sharpsighted.studio', color: '#a0462a', active: false },
  { label: 'Hub', domain: 'sharpsightedstudio.com', href: 'https://sharpsightedstudio.com', color: '#38bdf8', active: false },
];

function PropertyRow({ prop }: { prop: typeof PROPERTIES[number] }) {
  const [hovered, setHovered] = useState(false);
  const color = hovered ? prop.color : undefined;

  const inner = (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', letterSpacing: '0.05em' }}>
      {prop.active ? (
        <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: prop.color, flexShrink: 0 }} />
      ) : (
        <span style={{ display: 'inline-block', width: '6px', height: '6px', flexShrink: 0 }} />
      )}
      <span style={{ color: color ?? 'var(--text)', transition: 'color 0.2s' }}>{prop.label}</span>
      <span style={{ color: color ?? 'var(--text-muted)', transition: 'color 0.2s' }}>{prop.domain}</span>
      {!prop.active && <span style={{ color: color ?? 'var(--text-muted)', transition: 'color 0.2s' }}>→</span>}
    </span>
  );

  if (prop.active) {
    return <div>{inner}</div>;
  }

  return (
    <a
      href={prop.href}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </a>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
      {/* Brand block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#38bdf8',
          }}
        >
          Sharp Sighted
        </div>
        <div className="footer-tagline">Stay Sharp. Stay Seen. Stay Human.</div>
        <a
          href="https://sharpsightedstudio.com/?reset=true"
          className="footer-links"
          style={{ display: 'inline-block', marginTop: '0.25rem' }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
          >
            Switch site →
          </span>
        </a>
      </div>

      {/* Property list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {PROPERTIES.map((prop) => (
          <PropertyRow key={prop.label} prop={prop} />
        ))}
      </div>

      {/* Site nav + copyright */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
        <ul className="footer-links">
          <li><Link href="/real-estate-photos">Portfolio</Link></li>
          <li><Link href="/packages">Packages</Link></li>
          <li><Link href="/service-areas">Service Areas</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 300 }}>
          &copy; {new Date().getFullYear()} Sharp Sighted Media
        </div>
      </div>
      </div>
    </footer>
  );
}
