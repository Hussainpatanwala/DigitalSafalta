import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { glass, glassHover, tealBtn } from '../lib/constants';
import { heroMetrics } from '../content';

export function Hero() {
  return (
    <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-28" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            Pune · Maharashtra · Digital Marketing Agency
          </div>
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.04] tracking-tight mb-6">
            Grow Your Business <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Digitally — The Right Way.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Digital Safalta helps small and growing businesses in Pune build their online presence,
            run effective ad campaigns, and turn visitors into paying customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className={`px-8 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${tealBtn}`}>
              Start the Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-2xl border border-white/12 text-slate-300 font-medium text-base hover:bg-white/5 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30">
              See What We Offer
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5" role="list" aria-label="Key metrics">
          {heroMetrics.map((metric, idx) => (
            <article key={idx} role="listitem" className={`relative rounded-2xl p-6 overflow-hidden ${glass} ${glassHover}`}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" aria-hidden="true" />
              <div className="text-3xl lg:text-4xl font-black text-white mb-1">{metric.value}</div>
              <div className="text-slate-400 text-sm font-medium">{metric.label}</div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-600 font-medium">
          <span>✦ Cloudflare Pages hosted</span>
          <span>✦ Supabase backend</span>
          <span>✦ Brevo email automation</span>
          <span>✦ Edge functions powered</span>
        </div>
      </div>
    </section>
  );
}
