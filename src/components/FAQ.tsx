import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../content';

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl lg:text-4xl font-black text-center tracking-tight mb-3">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-center mb-12 text-base">Everything you need to know about partnering with us.</p>
        <div className="space-y-3">
          {faqItems.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === idx ? 'border-teal-500/30 bg-teal-500/5' : 'border-white/8 bg-white/3 hover:border-white/15'}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                aria-expanded={openFaq === idx} aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-bold text-white pr-4 text-sm leading-relaxed">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <div id={`faq-answer-${idx}`} className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-64' : 'max-h-0'}`} aria-hidden={openFaq !== idx}>
                <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
