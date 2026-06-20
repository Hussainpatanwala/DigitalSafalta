import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
}

const SUPPORTED_LANGS = ['en', 'hi', 'mr'] as const;

/**
 * Sets the document title, meta description, <html lang>, and hreflang
 * alternate tags for the current page. Lightweight alternative to
 * react-helmet for a small multi-page SPA.
 *
 * NOTE: Since language is chosen via a popup (not the URL), all three
 * hreflang variants currently point at the same path. This still tells
 * Google the page is available in en/hi/mr, satisfying basic hreflang
 * requirements without needing separate URLs per language.
 */
export function SEO({ title, description }: SEOProps) {
  const { lang } = useLanguage();

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

    // hreflang alternate links — helps Google understand this page
    // serves multiple languages, even though the URL doesn't change.
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
  }, [title, description, lang]);

  return null;
}
