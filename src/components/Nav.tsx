'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onContact = pathname === '/contact';

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo" aria-label="Sharp Sighted Media Home">
          Sharp Sighted <span>Media</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Link
                href="/real-estate-photos"
                className={pathname.startsWith('/real-estate-photos') ? 'active' : ''}
              >
                Real Estate Photos
              </Link>
            </li>
            <li>
              <Link
                href="/packages"
                className={pathname.startsWith('/packages') ? 'active' : ''}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link href="/contact" className={onContact ? 'active' : ''}>
                Contact
              </Link>
            </li>
            {!onContact && (
              <li>
                <Link href="/contact" className="nav-cta">
                  Book Essentials
                </Link>
              </li>
            )}
          </ul>
          <ThemeToggle />
        </div>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </nav>

      {/*
        Overlay is OUTSIDE <nav> so backdrop-filter on nav does not create
        a containing block that clips position:fixed children.
        Clicking the overlay backdrop (outside overlay-content) closes the menu.
      */}
      <div
        id="mobile-nav"
        className={`nav-overlay${open ? ' open' : ''}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="overlay-content" onClick={e => e.stopPropagation()}>
          <button
            className="overlay-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="overlay-links">
            <li>
              <Link
                href="/real-estate-photos"
                className={pathname.startsWith('/real-estate-photos') ? 'active' : ''}
              >
                Real Estate Photos
              </Link>
            </li>
            <li>
              <Link
                href="/packages"
                className={pathname.startsWith('/packages') ? 'active' : ''}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link href="/contact" className={onContact ? 'active' : ''}>
                Contact
              </Link>
            </li>
            {!onContact && (
              <li className="overlay-cta-item">
                <Link href="/contact" className="overlay-cta">
                  Book Essentials
                </Link>
              </li>
            )}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
