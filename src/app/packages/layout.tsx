import type { Metadata } from 'next';

// packages/page.tsx is a client component and can't export metadata,
// so this route-level layout carries it instead.
export const metadata: Metadata = {
  title: 'Real Estate Media Packages & Pricing',
  description:
    'The Essentials Package — stills, aerial, floor plan, twilight, and a vertical reel for $400 with 24-hour turnaround. Plus the Visibility Retainer for agents in the DFW 121 corridor.',
  alternates: { canonical: '/packages' },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
