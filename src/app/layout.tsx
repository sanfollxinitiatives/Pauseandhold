import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { InteractiveCursor } from '@/components/ui/InteractiveCursor';
import { constructMetadata } from '@/lib/seo';
import { getOrganizationJsonLd, getWebSiteJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: '#F8F6EF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = getWebSiteJsonLd();
  const organizationSchema = getOrganizationJsonLd();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F6EF] text-[#292C25] font-sans antialiased selection:bg-[#53664B] selection:text-[#F8F6EF]">
        {/* Modern hairline scroll progress bar */}
        <ScrollProgress />

        {/* Custom follower cursor & magnetic physics */}
        <InteractiveCursor />

        {/* Lenis inertial smooth scrolling container */}
        <SmoothScroll>
          {/* Accessible skip link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-5 py-2.5 bg-[#53664B] text-[#F8F6EF] rounded-full font-medium shadow-lg transition-transform"
          >
            Skip to main content
          </a>

          {/* Global floating rounded header */}
          <Header />

          {/* Main page content landmark */}
          <main id="main-content" className="flex-1 w-full focus:outline-none">
            {children}
          </main>

          {/* Global matching footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
