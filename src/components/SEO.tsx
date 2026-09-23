import { useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import type { Lang } from '../lib/constants';

interface SEOProps {
  title: string;
  description: string;
  lang?: Lang; // optional — defaults to 'en' if a page hasn't been updated yet
  /** Path to a social-preview image, e.g. "/og-image.png". Falls back to the site logo. */
  image?: string;
  /** Set to "article" on blog posts, defaults to "website" everywhere else. */
  type?: 'website' | 'article';
  /** One or more JSON-LD schema objects (Organization, Service, FAQPage, etc). */
  schema?: object | object[];
}

const SUPPORTED_LANGS: Lang[] = ['en', 'hi', 'mr'];
const SITE_NAME = 'Digital Safalta';
const DEFAULT_IMAGE = '/apple-touch-icon.png';
// Single fixed canonical origin — every canonical/OG/Twitter/hreflang URL is
// built from this, never from window.location.origin. That's what makes the
// canonical tag actually normalize www vs non-www, http vs https, etc.
// instead of just echoing back whatever host/protocol was requested.
const CANONICAL_ORIGIN = 'https://digitalsafalta.in';

/**
 * Sets the document title, meta description, canonical URL, Open Graph and
 * Twitter Card tags, <html lang>, hreflang alternates, and JSON-LD schema
 * for the current page — declaratively, via vite-react-ssg's <Head>
 * (a Helmet wrapper). This runs during both the SSG build pass (so the tags
 * exist in the static HTML crawlers actually receive) and on the client.
 *
 * Uses react-router's useLocation() rather than window.location so it works
 * identically during server-side/static generation, where window isn't
 * available, and on the client.
 */
export function SEO({ title, description, lang = 'en', image, type = 'website', schema }: SEOProps) {
  const location = useLocation();

  const normalizedPath =
    location.pathname.length > 1 ? location.pathname.replace(/\/+$/, '') : location.pathname;
  const canonicalUrl = CANONICAL_ORIGIN + normalizedPath;
  const imageUrl = CANONICAL_ORIGIN + (image || DEFAULT_IMAGE);
  const currentFullPath = normalizedPath + location.search;
  const schemaItems = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Head>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph — controls how the page looks when shared on WhatsApp,
          Facebook, LinkedIn, etc. */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* hreflang alternates */}
      {SUPPORTED_LANGS.map(code => (
        <link key={code} rel="alternate" hrefLang={code} href={CANONICAL_ORIGIN + currentFullPath} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={CANONICAL_ORIGIN + currentFullPath} />

      {/* Schema markup (JSON-LD) — structured data Google uses for rich
          results (FAQ dropdowns, business info panels, article cards). */}
      {schemaItems.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Head>
  );
}
