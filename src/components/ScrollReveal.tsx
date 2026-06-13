'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll reveal. Mounted once in the root layout, it observes every
 * `.reveal` element and adds `visible` as it scrolls into view — so any element
 * can opt in with `className="reveal"` (no per-component hook needed), and it
 * re-scans on client-side navigation. Existing useReveal hooks keep working;
 * adding `visible` twice is harmless. Honors prefers-reduced-motion.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cleanup = () => {};

    // Wait for the new route's DOM to paint before scanning.
    const id = window.requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>('.reveal:not(.visible)'),
      );
      if (els.length === 0) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        els.forEach((el) => el.classList.add('visible'));
        return;
      }

      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              io.unobserve(entry.target);
            }
          }),
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );
      els.forEach((el) => io.observe(el));
      cleanup = () => io.disconnect();
    });

    return () => {
      window.cancelAnimationFrame(id);
      cleanup();
    };
  }, [pathname]);

  return null;
}
