import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { supabase } from '../../supabaseClient';
import { SEO } from '../../components/SEO';
import { glass, glassHover } from '../../lib/constants';
import type { ProductReview } from '../../lib/productReview';

export function ProductReviewsIndexPage() {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const { data, error } = await supabase
        .from('product_reviews')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (cancelled) return;
      if (error) console.error('Error loading reviews:', error);
      setReviews((data as ProductReview[]) ?? []);
      setLoading(false);
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <SEO
        title="Product Reviews — Honest Recommendations | Digital Safalta"
        description="Honest, no-fluff reviews of trending products — real pros, real cons, and whether they're actually worth buying."
      />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Honest Reviews
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Product Reviews
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Real pros, real cons, and an honest verdict — no fluff.
            </p>
          </div>

          {loading && <p className="text-center text-slate-400">Loading reviews…</p>}

          {!loading && reviews.length === 0 && (
            <p className="text-center text-slate-400">No reviews published yet — check back soon.</p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article key={r.id} className={`rounded-2xl p-6 flex flex-col ${glass} ${glassHover}`}>
                {r.category && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-slate-400 mb-4 self-start">
                    {r.category}
                  </span>
                )}
                <h2 className="text-base font-black text-white mb-3 leading-snug flex-1">{r.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">{r.meta_description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
                  {r.rating ? (
                    <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {r.rating}/5
                    </span>
                  ) : <span />}
                  <Link to={`/blog/reviews/${r.slug}`} className="text-teal-400 hover:text-teal-300 text-sm font-bold flex items-center gap-1 transition-colors">
                    Read Review <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
