/**
 * Shared JSON-LD schema (structured data) building blocks.
 * Pass these into the `schema` prop of <SEO />.
 *
 * Docs: https://developers.google.com/search/docs/appearance/structured-data
 */

const SITE_URL = 'https://digitalsafalta.in';

/**
 * Identifies Digital Safalta itself as a business. Used on the homepage.
 * Because the business is fully remote (no walk-in address), this uses
 * areaServed instead of a street address — the correct pattern for
 * online/service-area businesses.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Digital Safalta',
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  image: `${SITE_URL}/apple-touch-icon.png`,
  email: 'hello@digitalsafalta.in',
  description:
    'Digital Safalta helps small and growing businesses in Pune build their online presence, run effective ad campaigns, and turn visitors into paying customers.',
  areaServed: {
    '@type': 'City',
    name: 'Pune',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
};

/** Builds FAQPage schema from an array of { question, answer } pairs. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** Builds Service schema for a service page (e.g. /services/seo). */
export function serviceSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Digital Safalta',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Pune',
    },
  };
}

/** Builds BreadcrumbList schema. Pass the path from Home down to the current page. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  /** A display date like "June 16, 2026" — converted to ISO format automatically. */
  datePublished: string;
}) {
  const parsed = new Date(opts.datePublished);
  const isoDate = !isNaN(parsed.getTime()) ? parsed.toISOString().split('T')[0] : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    ...(isoDate ? { datePublished: isoDate } : {}),
    author: {
      '@type': 'Organization',
      name: 'Digital Safalta',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Digital Safalta',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/apple-touch-icon.png`,
      },
    },
  };
}
