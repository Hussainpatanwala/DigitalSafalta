import { glass } from '../lib/constants';
import { platformMetrics } from '../content';

export function PlatformMetrics() {
  return (
    <section className="py-14" aria-label="Platform metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl py-10 px-8 ${glass}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {platformMetrics.map((metric, idx) => (
              <div key={idx} className="text-center" role="listitem">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">{metric.value}</div>
                <div className="text-slate-400 text-sm font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
