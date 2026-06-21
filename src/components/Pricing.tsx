import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { glass, glassHover, tealBtn } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function Pricing({ lang = 'en' }: { lang?: Lang }) {
  const content = getContent(lang);
  const t = content.pricing;
  const { mostPopular, getStarted } = content.ui;

  return (
    <section id="pricing" className="py-16 lg:py-24" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t.title}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{t.description}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {t.plans.map((plan, idx) => (
            <article
              key={idx}
              className={`rounded-2xl p-7 relative overflow-hidden transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-teal-500/20 to-cyan-500/10 border border-teal-500/40 shadow-xl shadow-teal-500/10 scale-[1.02]'
                  : `${glass} ${glassHover}`
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" aria-hidden="true" />
                  <div className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-500/30 text-teal-300 px-3 py-1 rounded-full text-xs font-bold mb-5">
                    <Star className="w-3 h-3" aria-hidden="true" /> {mostPopular}
                  </div>
                </>
              )}
              <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-7">
                <span className="text-4xl font-black text-white">{plan.currency}{plan.price}</span>
                {plan.period && <span className="text-slate-400 text-sm ml-1">/{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-6 flex-1" aria-label="Plan features">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="text-xs text-slate-400 leading-relaxed bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-6">
                  {plan.note}
                </p>
              )}
              <Link
                to="/contact"
                className={`block w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                  plan.highlighted ? tealBtn : 'border border-white/15 text-white hover:bg-white/8 hover:border-white/25'
                }`}
              >
                {getStarted}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
