'use client';

import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';

export default function RetainerTease() {
  const revealEl = useReveal<HTMLDivElement>();

  return (
    <div ref={revealEl} className="retainer-tease reveal">
      <p>
        Ready to stay visible between listings?{' '}
        <strong>The Visibility Retainer turns one session into 90 days of authority.</strong>
      </p>
      <Link href="/packages" className="btn-ghost">
        See how it works
      </Link>
    </div>
  );
}
