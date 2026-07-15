import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ChevronDown } from 'lucide-react';
import { glass, glassHover, tealBtn } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function Hero({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).hero;
  const [openHook, setOpenHook] = useState<number | null>(0);

  return (
    <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-28" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            {t.eyebrow}
          </div>
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.04] tracking-tight mb-6">
            {t.headlineLine1} <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              {t.headlineLine2}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/contact" className={`px-8 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${tealBtn}`}>
              {t.ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-2xl border border-white/12 text-slate-300 font-medium text-base hover:bg-white/5 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30">
              {t.secondaryCtaText}
            </Link>
          </div>

          {/* Free Audit Tool CTA */}
          <Link
            to="/tools/marketing-audit"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-teal-500/30 bg-teal-500/8 hover:bg-teal-500/15 hover:border-teal-500/50 transition-all duration-200"
          >
            <div className="w-7 h-7 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0">
              <Search className="w-3.5 h-3.5 text-teal-400" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-white">{t.auditCtaTitle}</span>
              <span className="block text-xs text-slate-400">{t.auditCtaSubtitle}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform ml-1" />
          </Link>
        </div>

        <div className="max-w-3xl mx-auto" aria-labelledby="growth-hooks-heading">
          <h2 id="growth-hooks-heading" className="text-2xl lg:text-3xl font-black text-center tracking-tight mb-2">
            {t.growthHooksHeading}
          </h2>
          <p className="text-slate-400 text-center mb-8 text-sm max-w-xl mx-auto">
            {t.growthHooksSubheading}
          </p>
          <div className="space-y-3">
            {t.growthHooks.map((hook, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openHook === idx ? 'border-teal-500/30 bg-teal-500/5' : `border-white/8 ${glass} ${glassHover}`}`}
              >
                <button
                  onClick={() => setOpenHook(openHook === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                  aria-expanded={openHook === idx}
                  aria-controls={`growth-hook-answer-${idx}`}
                >
                  <span className="font-bold text-white pr-4 text-sm lg:text-base leading-relaxed">{hook.question}</span>
                  <ChevronDown className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform duration-300 ${openHook === idx ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div
                  id={`growth-hook-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${openHook === idx ? 'max-h-96' : 'max-h-0'}`}
                  aria-hidden={openHook !== idx}
                >
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{hook.answer}</p>
                    <Link
                      to="/services/social-media"
                      className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold ${tealBtn}`}
                    >
                      {t.growthHooksCtaText}
                      <span className="font-normal opacity-85">— {t.growthHooksCtaSubtext}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
