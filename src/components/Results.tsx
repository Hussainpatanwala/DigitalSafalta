import { glass } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function Results({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).results;

  return (
    <section id="results" className="py-16 lg:py-24 relative" aria-labelledby="results-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="results-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t.title}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{t.description}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {t.caseStudies.map((study, idx) => (
            <article key={idx} className={`rounded-2xl p-7 ${glass} hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300`}>
              <div className="text-xs text-teal-400 font-bold tracking-widest uppercase mb-3">{study.category}</div>
              <div className="text-3xl font-black text-white mb-4">{study.result}</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.metrics.map((metric, midx) => (
                  <span key={midx} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
