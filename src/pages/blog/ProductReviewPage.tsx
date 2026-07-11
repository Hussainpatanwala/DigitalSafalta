import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, X, Star } from 'lucide-react';
import { supabase } from '../../supabaseClient';
import { SEO } from '../../components/SEO';
import { glass, tealBtn } from '../../lib/constants';
import type { ProductReview } from '../../lib/productReview';

type LoadState = 'loading' | 'found' | 'not-found' | 'error';

export function ProductReviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const [review, setReview] = useState<ProductReview | null>(null);
  const [state, setState] = useState<LoadState>('loading');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setState('loading');
      const { data, error } = await supabase
        .from('product_reviews')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (cancelled) return;

      if (error) {
        console.error('Error loading review:', error);
        setState('error');
        return;
      }
      if (!data) {
        setState('not-found');
        return;
      }
      setReview(data as ProductReview);
      setState('found');
    }

    load();
    return () => { cancelled = true; };
  }, [slug]);

  if (state === 'loading') {
    return (
      <div className="pt-28 lg:pt-36 pb-20 text-center text-slate-400">
        Loading review…
      </div>
    );
  }

  if (state === 'not-found' || state === 'error') {
    return (
      <div className="pt-28 lg:pt-36 pb-20 text-center">
        <p className="text-slate-400 mb-6">
          {state === 'not-found' ? "This review doesn't exist or isn't published yet." : 'Something went wrong loading this review.'}
        </p>
        <Link to="/blog/reviews" className="text-teal-400 hover:text-teal-300 font-bold">
          ← Back to all reviews
        </Link>
      </div>
    );
  }

  const r = review!;

  return (
    <>
      <SEO title={`${r.title} | Digital Safalta`} description={r.meta_description} />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link to="/blog/reviews" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Reviews
          </Link>

          {/* Header */}
          <div className="mb-10">
            {r.category && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-4">
                {r.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              {r.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">{r.meta_description}</p>

            {(r.price_inr || r.rating) && (
              <div className="flex items-center gap-6 text-slate-300 text-sm flex-wrap">
                {r.price_inr && (
                  <span className="font-bold text-white text-xl">
                    ₹{r.price_inr.toLocaleString('en-IN')}
                    {r.mrp_inr && (
                      <span className="text-slate-500 line-through font-normal text-sm ml-2">
                        ₹{r.mrp_inr.toLocaleString('en-IN')}
                      </span>
                    )}
                  </span>
                )}
                {r.rating && (
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {r.rating}/5 {r.review_count && `(${r.review_count.toLocaleString('en-IN')} ratings)`}
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="h-px bg-white/8 mb-10" />

          {/* Pros / Cons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {r.pros.length > 0 && (
              <div className={`rounded-2xl p-6 ${glass}`}>
                <h3 className="text-sm font-black text-teal-300 uppercase tracking-wide mb-4">Pros</h3>
                <ul className="space-y-3">
                  {r.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /> {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {r.cons.length > 0 && (
              <div className={`rounded-2xl p-6 ${glass}`}>
                <h3 className="text-sm font-black text-rose-300 uppercase tracking-wide mb-4">Cons</h3>
                <ul className="space-y-3">
                  {r.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" /> {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Who for / not for */}
          {(r.who_for || r.who_not_for) && (
            <div className="space-y-6 mb-10">
              {r.who_for && (
                <div>
                  <h3 className="text-white font-black mb-2">Good fit for</h3>
                  <p className="text-slate-400 leading-relaxed">{r.who_for}</p>
                </div>
              )}
              {r.who_not_for && (
                <div>
                  <h3 className="text-white font-black mb-2">Skip if</h3>
                  <p className="text-slate-400 leading-relaxed">{r.who_not_for}</p>
                </div>
              )}
            </div>
          )}

          {/* Verdict */}
          {r.verdict && (
            <div className="mb-10">
              <h3 className="text-white font-black mb-2">The Verdict</h3>
              <p className="text-slate-400 leading-relaxed">{r.verdict}</p>
            </div>
          )}

          {/* Affiliate CTA */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/25 text-center mb-6">
            <h3 className="text-xl font-black text-white mb-4">Check current price on Amazon</h3>
            
              href={r.affiliate_url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold ${tealBtn}`}
            >
              View on Amazon →
            </a>
          </div>

          <p className="text-slate-500 text-xs text-center italic">
            Disclosure: This post contains affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you.
          </p>

        </div>
      </div>
    </>
  );
}
