import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Suspense } from 'react';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/context/ThemeContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HubReturnToast from '@/components/HubReturnToast';
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

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  title: {
    template: '%s | Sharp Sighted Media',
    default: 'Sharp Sighted Media | Luxury Real Estate Photography | Dallas-Fort Worth',
  },
  description:
    'Luxury real estate media for top-producing agents in the DFW area. Research-driven photography, aerials, and video that protects your reputation and sells faster.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jost.variable}`}>
        {PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={`${PLAUSIBLE_DOMAIN},sharp-sighted-network`}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        <ThemeProvider>
          <Nav />
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
