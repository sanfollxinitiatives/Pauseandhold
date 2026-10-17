import type { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Pause & Hold',
  legalName: 'Pause & Hold Photography & Films',
  tagline: 'Your story. Beautifully remembered.',
  description:
    'Pause & Hold captures authentic, emotional, and timeless wedding stories, pre-wedding memories, and cinematic films with an editorial, natural aesthetic.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://pauseandhold.com',
  developerName: 'Sanfollx Initiatives',
  developerUrl: 'https://sanfollxinitiatives.com/',
  socials: {
    instagram: 'https://instagram.com/pauseandhold', // Placeholder format, easily customizable
    pinterest: 'https://pinterest.com/pauseandhold',
    youtube: 'https://youtube.com/@pauseandhold',
  },
  defaultOgImage: '/images/og-image.jpg',
  keywords: [
    'Wedding photography',
    'Wedding photographer',
    'Wedding films',
    'Pre-wedding photography',
    'Editorial wedding photography',
    'Cinematic wedding videography',
    'Fine art wedding storytelling',
    'Wedding portfolio',
  ],
};

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  path = '',
  image = SITE_CONFIG.defaultOgImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = `${SITE_CONFIG.siteUrl}${path}`;
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | Premium Wedding Photography & Films`;

  return {
    title: fullTitle,
    description,
    keywords: SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl }],
    creator: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@pauseandhold',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
