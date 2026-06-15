import { glass } from '../lib/constants';
import { testimonialQuote, testimonialAuthor, testimonialRole, testimonialInitials } from '../content';

export function Testimonial() {
  return (
    <section className="py-16 lg:py-24 relative" aria-label="Founder message">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden ${glass}`}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" aria-hidden="true" />
          <div className="text-6xl text-teal-500/30 font-serif leading-none mb-4 select-none" aria-hidden="true">"</div>
          <blockquote>
            <p className="text-xl lg:text-2xl font-medium text-white leading-relaxed mb-8">{testimonialQuote}</p>
            <footer className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500/15 border border-teal-500/25 flex items-center justify-center" aria-hidden="true">
                <span className="text-teal-300 font-black text-base">{testimonialInitials}</span>
              </div>
              <div className="text-left">
                <cite className="font-black text-white not-italic block text-sm">{testimonialAuthor}</cite>
                <span className="text-slate-400 text-xs">{testimonialRole}</span>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
