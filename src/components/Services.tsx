import {
  Zap, BarChart3, Users, MousePointer, Palette, Globe, Mail, Settings, ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { glass } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, BarChart3, Users, MousePointer, Palette, Globe, Mail, Settings,
};

export function Services({ lang = 'en' }: { lang?: Lang }) {
  const content = getContent(lang);
  const t = content.services;
  const learnMore = content.ui.learnMore;

  return (
    <section id="services" className="py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t.title}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{t.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.items.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Zap;
            const cardClass = `group rounded-2xl p-6 ${glass} hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300 flex flex-col`;

            const inner = (
              <>
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-teal-400" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.description}</p>
                {'href' in service && service.href && (
                  <div className="mt-4 flex items-center gap-1 text-teal-400 text-xs font-bold group-hover:gap-2 transition-all">
                    {learnMore} <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </>
            );

            return 'href' in service && service.href ? (
              <Link key={idx} to={service.href} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <article key={idx} className={cardClass}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
