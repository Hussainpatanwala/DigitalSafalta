import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Sets the document title and meta description for the current page.
 * Lightweight alternative to react-helmet for a small multi-page SPA.
 */
export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);

  return null;
}
