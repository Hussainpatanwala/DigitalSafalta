import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { SEO } from './SEO';
import { glass, tealBtn, WHATSAPP_NUMBER } from '../lib/constants';
import type { Lang } from '../lib/constants';

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  lang?: Lang;
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

const STRINGS: Record<Lang, {
  allServices: string; getConsultation: string; whatsapp: string;
  whatIsIt: string; whyMatters: string; whatsIncluded: string; whatToExpect: string;
  startingFrom: string; getQuote: string; faqHeading: string;
  ctaSubtext: string; startConversation: string; whatsappCta: string;
}> = {
  en: {
    allServices: 'All Services', getConsultation: 'Get a Free Consultation', whatsapp: 'WhatsApp Us',
    whatIsIt: 'What Is It?', whyMatters: 'Why Does It Matter?', whatsIncluded: "What's Included", whatToExpect: 'What You Can Expect',
    startingFrom: 'Starting from', getQuote: 'Get a Quote', faqHeading: 'Frequently Asked Questions',
    ctaSubtext: 'Free consultation. No obligation. Honest advice — whether or not we end up working together.',
    startConversation: 'Start the Conversation', whatsappCta: 'WhatsApp Us',
  },
  hi: {
    allServices: 'सभी सेवाएं', getConsultation: 'मुफ़्त परामर्श पाएं', whatsapp: 'WhatsApp करें',
    whatIsIt: 'यह क्या है?', whyMatters: 'यह क्यों मायने रखता है?', whatsIncluded: 'इसमें क्या शामिल है', whatToExpect: 'आप क्या उम्मीद कर सकते हैं',
    startingFrom: 'शुरुआती कीमत', getQuote: 'कोटेशन पाएं', faqHeading: 'अक्सर पूछे जाने वाले सवाल',
    ctaSubtext: 'मुफ़्त परामर्श। कोई बाध्यता नहीं। ईमानदार सलाह — चाहे हम साथ काम करें या नहीं।',
    startConversation: 'बातचीत शुरू करें', whatsappCta: 'WhatsApp करें',
  },
  mr: {
    allServices: 'सर्व सेवा', getConsultation: 'मोफत सल्ला मिळवा', whatsapp: 'WhatsApp करा',
    whatIsIt: 'हे काय आहे?', whyMatters: 'हे का महत्त्वाचे आहे?', whatsIncluded: 'यामध्ये काय समाविष्ट आहे', whatToExpect: 'तुम्ही काय अपेक्षा करू शकता',
    startingFrom: 'सुरुवातीची किंमत', getQuote: 'कोट मिळवा', faqHeading: 'वारंवार विचारले जाणारे प्रश्न',
    ctaSubtext: 'मोफत सल्ला. कोणतीही बांधिलकी नाही. प्रामाणिक सल्ला — आम्ही एकत्र काम करू किंवा नाही.',
    startConversation: 'संभाषण सुरू करा', whatsappCta: 'WhatsApp करा',
  },
};

export function ServicePage({
  lang = 'en',
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
  const s = STRINGS[lang];
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(category)}`;

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} lang={lang} />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> {s.allServices}
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
                {s.getConsultation}
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> {s.whatsapp}
              </a>
            </div>
          </div>

          <div className="h-px bg-white/8 mb-12" />

          {/* Two-col: What it is + Why it matters */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className={`rounded-2xl p-6 ${glass}`}>
              <h2 className="text-lg font-black text-white mb-3">{s.whatIsIt}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{whatItIs}</p>
            </div>
            <div className={`rounded-2xl p-6 ${glass}`}>
              <h2 className="text-lg font-black text-white mb-3">{s.whyMatters}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{whyItMatters}</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-white mb-6">{s.whatsIncluded}</h2>
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
            <h2 className="text-2xl font-black text-white mb-6">{s.whatToExpect}</h2>
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
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">{s.startingFrom}</p>
                  <p className="text-3xl font-black text-white">{price}</p>
                  {priceNote && <p className="text-slate-400 text-sm mt-1">{priceNote}</p>}
                </div>
                <Link to="/contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold ${tealBtn}`}>
                  {s.getQuote}
                </Link>
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-black text-white mb-6">{s.faqHeading}</h2>
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
            <p className="text-slate-400 text-sm mb-6">{s.ctaSubtext}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold ${tealBtn}`}>
                {s.startConversation}
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> {s.whatsappCta}
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
