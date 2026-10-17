import { SITE_CONFIG } from './seo';

export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    alternateName: 'Pause & Hold Photography',
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.description,
  };
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/images/logo.webp`,
    description: SITE_CONFIG.description,
    knowsAbout: [
      'Wedding Photography',
      'Wedding Cinematography',
      'Pre-Wedding Sessions',
      'Editorial Storytelling',
    ],
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.siteUrl}${item.url}`,
    })),
  };
}

export function getStoryJsonLd(story: {
  title: string;
  description: string;
  coverImage: string;
  url: string;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: story.title,
    headline: story.title,
    description: story.description,
    image: story.coverImage,
    url: story.url,
    datePublished: story.datePublished,
    creator: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  };
}
