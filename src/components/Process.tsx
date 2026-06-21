import { Lightbulb, Target, Rocket, BarChart3 } from 'lucide-react';
import { glass, glassHover } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function Process({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).process;
  const icons = [Lightbulb, Target, Rocket, BarChart3];
  return (
    <section id="process" className="py-16 lg:py-24" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="process-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t.title}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{t.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => {
            const IconComponent = icons[idx] || Lightbulb;
            return (
              <article key={idx} className={`rounded-2xl p-7 relative ${glass} ${glassHover}`}>
                <div className="text-5xl font-black text-white/5 mb-4 leading-none select-none" aria-hidden="true">{step.number}</div>
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-teal-400" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
