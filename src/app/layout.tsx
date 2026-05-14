import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Suspense } from 'react';
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

const PLAUSIBLE_SCRIPT = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT;

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
      <head>
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
