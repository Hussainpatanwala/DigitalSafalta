import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { SEO } from './SEO';
import { glass, tealBtn, WHATSAPP_NUMBER } from '../lib/constants';

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  metaTitle: string;
  metaDescription: string;
  category: string;
  heroHeadline: string;
  heroSubheading: string;
  whatItIs: string;
  whyItMatters: string;
  includes: string[];
  benefits: { title: string; description: string }[];
  faqs: ServiceFAQ[];
  ctaHeadline: string;
  price?: string;
  priceNote?: string;
}

export function ServicePage({
  metaTitle,
  metaDescription,
  category,
  heroHeadline,
  heroSubheading,
  whatItIs,
  whyItMatters,
  includes,
  benefits,
  faqs,
  ctaHeadline,
  price,
  priceNote,
}: ServicePageProps) {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(category)}`;

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-5">
              {category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              {heroHeadline}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
              {heroSubheading}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold ${tealBtn}`}>
                Get a Free Consultation
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="h-px bg-white/8 mb-12" />

          {/* Two-col: What it is + Why it matters */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className={`rounded-2xl p-6 ${glass}`}>
              <h2 className="text-lg font-black text-white mb-3">What Is It?</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{whatItIs}</p>
            </div>
            <div className={`rounded-2xl p-6 ${glass}`}>
              <h2 className="text-lg font-black text-white mb-3">Why Does It Matter?</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{whyItMatters}</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-white mb-6">What's Included</h2>
            <div className={`rounded-2xl p-6 ${glass}`}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-white mb-6">What You Can Expect</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <div key={i} className={`rounded-2xl p-6 ${glass} hover:border-teal-500/30 hover:bg-teal-500/5 transition-all`}>
                  <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing callout */}
          {price && (
            <div className="mb-12 rounded-2xl p-6 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border border-teal-500/20">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">Starting from</p>
                  <p className="text-3xl font-black text-white">{price}</p>
                  {priceNote && <p className="text-slate-400 text-sm mt-1">{priceNote}</p>}
                </div>
                <Link to="/contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold ${tealBtn}`}>
                  Get a Quote
                </Link>
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className={`rounded-2xl p-6 ${glass}`}>
                    <h3 className="text-base font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="h-px bg-white/8 mb-10" />

          {/* CTA */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/25 text-center">
            <h3 className="text-xl font-black text-white mb-3">{ctaHeadline}</h3>
            <p className="text-slate-400 text-sm mb-6">Free consultation. No obligation. Honest advice — whether or not we end up working together.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold ${tealBtn}`}>
                Start the Conversation
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
