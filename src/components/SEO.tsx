import { useEffect } from 'react';
import type { Lang } from '../lib/constants';

interface SEOProps {
  title: string;
  description: string;
  lang?: Lang; // optional — defaults to 'en' if a page hasn't been updated yet
}

const SUPPORTED_LANGS: Lang[] = ['en', 'hi', 'mr'];

/**
 * Sets the document title, meta description, <html lang>, and hreflang
 * alternate tags for the current page. Lightweight alternative to
 * react-helmet for a small multi-page SPA.
 *
 * lang is passed as a prop (not context) so this component never crashes
 * if used outside a provider — safe by default.
 */
export function SEO({ title, description, lang = 'en' }: SEOProps) {
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
  }, [title, description, lang]);

  return null;
}
