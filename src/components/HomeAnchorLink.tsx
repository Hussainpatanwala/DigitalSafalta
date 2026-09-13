import { Link } from 'react-router-dom';
import type { Lang } from '../lib/constants';

// Small, unobtrusive internal link used on secondary pages (About, Contact,
// Pricing) to point back to the homepage using "Digital Marketing Agency in
// Pune" as the anchor text. English-only by design — the site's language
// toggle is global-per-route and only English pages are indexed by Google,
// so this SEO tactic doesn't need hi/mr variants.
export function HomeAnchorLink({ lang = 'en' }: { lang?: Lang }) {
  if (lang !== 'en') return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-center">
      <Link
        to="/"
        className="text-sm text-slate-500 hover:text-teal-400 transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-teal-400"
      >
        ← Back to our Digital Marketing Agency in Pune homepage
      </Link>
    </div>
  );
}
