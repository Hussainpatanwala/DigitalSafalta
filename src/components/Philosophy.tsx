import { glass, glassHover } from '../lib/constants';
import { philosophyTitle, philosophyPrinciples } from '../content';

export function Philosophy() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="philosophy-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="philosophy-heading" className="text-3xl lg:text-4xl font-black text-center mb-14 tracking-tight">{philosophyTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {philosophyPrinciples.map((p, idx) => (
            <article key={idx} className={`rounded-2xl p-7 relative overflow-hidden ${glass} ${glassHover}`}>
              <div className="absolute top-4 right-5 text-7xl font-black text-white/4 leading-none select-none" aria-hidden="true">{p.number}</div>
              <div className="relative z-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-teal-400 mb-3">{p.number}</span>
                <h3 className="text-lg font-black text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
