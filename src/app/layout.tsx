import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/context/ThemeContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HubReturnToast from '@/components/HubReturnToast';
import ScrollReveal from '@/components/ScrollReveal';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
});

const PLAUSIBLE_SCRIPT = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT;

const SITE_URL = 'https://sharpsighted.media';
const OG_IMAGE =
  'https://res.cloudinary.com/dyijp1zno/image/upload/c_fill,w_1200,h_630,q_auto,f_jpg/sharpsighted/home/hero-living-room';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sharpsightedstudio.com/#organization',
      name: 'Sharp Sighted Studio',
      legalName: 'Sharp Sighted Studio',
      url: 'https://sharpsightedstudio.com',
      telephone: '+12142335338',
      email: 'dean@sharpsightedstudio.com',
      founder: { '@type': 'Person', name: 'Dean Draper' },
      foundingDate: '2022-07',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sharpsighted.media/#business',
      name: 'Sharp Sighted Media',
      legalName: 'Sharp Sighted Studio',
      description: 'Real estate media for top-producing agents in the DFW 121 corridor. MLS photography, aerials, walkthrough video, floor plans, and twilight edits by Dean Draper.',
      url: 'https://sharpsighted.media',
      image: OG_IMAGE,
      telephone: '+12142335338',
      email: 'dean@sharpsightedstudio.com',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      parentOrganization: { '@id': 'https://sharpsightedstudio.com/#organization' },
      areaServed: [
        'Allen, TX', 'Plano, TX', 'Frisco, TX', 'McKinney, TX',
        'Lewisville, TX', 'The Colony, TX', 'Coppell, TX', 'Roanoke, TX',
        'Denton, TX', 'Grapevine, TX', 'Southlake, TX', 'Colleyville, TX',
        'Westlake, TX',
      ],
      sameAs: [
        'https://sharpsightedstudio.com',
        'https://sharpsighted.photos',
        'https://sharpsighted.studio',
        'https://www.instagram.com/sharp_sighted_studio',
        'https://www.facebook.com/sharpsightedstudio',
        'https://www.linkedin.com/in/dean-draper',
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Sharp Sighted Media',
    default: 'Sharp Sighted Media | Luxury Real Estate Photography | Dallas-Fort Worth',
  },
  description:
    'Luxury real estate media for top-producing agents in the DFW area. Research-driven photography, aerials, and video that protects your reputation and sells faster.',
  openGraph: {
    type: 'website',
    siteName: 'Sharp Sighted Media',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Sharp Sighted Media | Luxury Real Estate Photography | Dallas-Fort Worth',
    description:
      'Research-driven real estate photography, aerials, floor plans, and video for top-producing agents in the DFW 121 corridor. 24-hour turnaround.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Luxury living room photographed by Sharp Sighted Media' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Warm up the image CDN connection before the first photo request —
            saves a DNS + TLS round trip on the gallery's first paint. */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        {/* No-FOUC theme script — sets data-theme before first paint from the
            saved preference, or the OS setting when none (system default). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=localStorage.getItem('ssm-theme');var sys=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var r=(p==='light'||p==='dark')?p:sys;document.documentElement.setAttribute('data-theme',r);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {PLAUSIBLE_SCRIPT && <script async src={PLAUSIBLE_SCRIPT} />}
        {PLAUSIBLE_SCRIPT && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
            }}
          />
        )}
      </head>
      <body className={`${cormorant.variable} ${jost.variable}`}>
        <ThemeProvider>
          <Nav />
          <ScrollReveal />
          {children}
          <Footer />
          <Suspense>
            <HubReturnToast />
          </Suspense>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
