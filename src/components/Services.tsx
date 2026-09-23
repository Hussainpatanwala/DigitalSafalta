import {
  Zap, BarChart3, Users, MousePointer, Palette, Globe, Mail, Settings, Table, ArrowRight,
  Code, GraduationCap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { glass } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, BarChart3, Users, MousePointer, Palette, Globe, Mail, Settings, Table, Code, GraduationCap,
};

// English-only for now (same convention as Excel & VBA Automation) — these
// are newly added training/mentorship offerings, kept in a visually
// separate section below the core marketing services rather than mixed
// into that grid, so the primary "digital marketing agency" positioning
// isn't diluted. Translations can follow later.
const TRAINING_ITEMS = [
  {
    title: 'AI-Powered Web & Android App Development Mentorship',
    description: '1-on-1 personal training with Hussain — learn end-to-end website, web app, and native Android app development using modern AI-assisted tools.',
    icon: 'Code',
    href: '/services/ai-dev-mentorship',
  },
  {
    title: 'Digital Skills Course for Kids',
    description: '1-month live online program (8 sessions, weekends) covering internet safety, design basics, digital identity, website basics, and productivity tools.',
    icon: 'GraduationCap',
    href: '/services/kids-digital-skills',
  },
];

export function Services({ lang = 'en', as = 'h2' }: { lang?: Lang; as?: 'h1' | 'h2' }) {
  const content = getContent(lang);
  const t = content.services;
  const learnMore = content.ui.learnMore;
  const Heading = as;

  const renderCard = (service: typeof t.items[number] | typeof TRAINING_ITEMS[number], idx: number) => {
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
  };

  return (
    <section id="services" className="py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Heading id="services-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t.title}</Heading>
          <p className="text-slate-400 text-base leading-relaxed">{t.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.items.map((service, idx) => renderCard(service, idx))}
        </div>

        {lang === 'en' && TRAINING_ITEMS.length > 0 && (
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl lg:text-3xl font-black tracking-tight mb-3">Training & Mentorship</h2>
              <p className="text-slate-400 text-base leading-relaxed">Separate from our core marketing services — live, hands-on learning for individuals and kids.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {TRAINING_ITEMS.map((service, idx) => renderCard(service, idx))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
