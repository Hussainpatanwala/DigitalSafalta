import { useEffect } from 'react';
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

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Sets the document title, meta description, canonical URL, Open Graph and
 * Twitter Card tags, <html lang>, and hreflang alternate tags for the
 * current page. Lightweight alternative to react-helmet for a small
 * multi-page SPA.
 *
 * lang is passed as a prop (not context) so this component never crashes
 * if used outside a provider — safe by default.
 */
export function SEO({ title, description, lang = 'en', image, type = 'website', schema }: SEOProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    // Canonical tag — tells Google the "official" URL for this page,
    // even if it can be reached with a trailing slash, query params, etc.
    const canonicalUrl = window.location.origin + window.location.pathname;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph tags — control how the page looks when shared on
    // WhatsApp, Facebook, LinkedIn, etc.
    const imageUrl = window.location.origin + (image || DEFAULT_IMAGE);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:type', type);

    // Twitter Card tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);

    // hreflang alternate links
    document.querySelectorAll('link[data-hreflang]').forEach(el => el.remove());
    const currentPath = window.location.pathname + window.location.search;
    SUPPORTED_LANGS.forEach(code => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = code;
      link.href = window.location.origin + currentPath;
      link.setAttribute('data-hreflang', 'true');
      document.head.appendChild(link);
    });
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = window.location.origin + currentPath;
    xDefault.setAttribute('data-hreflang', 'true');
    document.head.appendChild(xDefault);

    // Schema markup (JSON-LD) — the structured data Google uses for
    // rich results (FAQ dropdowns, business info panels, article cards).
    document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    if (schema) {
      const items = Array.isArray(schema) ? schema : [schema];
      items.forEach(item => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'true');
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, [title, description, lang, image, type, schema]);

  return null;
}
