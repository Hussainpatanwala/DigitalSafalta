import { TrendingUp, ChevronRight } from 'lucide-react';
import { glass } from '../lib/constants';
import type { Lang } from '../lib/constants';

export function LanguagePicker({ onSelect }: { onSelect: (l: Lang) => void }) {
  const langs: { code: Lang; label: string; sub: string }[] = [
    { code: 'en', label: 'English', sub: 'Continue in English'    },
    { code: 'hi', label: 'हिंदी',  sub: 'हिंदी में जारी रखें'    },
    { code: 'mr', label: 'मराठी',  sub: 'मराठीत पुढे चला'        },
  ];
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-lg px-4">
      <div className={`w-full max-w-sm rounded-3xl p-8 ${glass} shadow-2xl shadow-black/60 relative`}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent rounded-t-3xl" />
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-teal-500/30">
            <TrendingUp className="w-7 h-7 text-slate-950" />
          </div>
          <h2 className="text-2xl font-black text-white mb-2">Digital Safalta</h2>
          <p className="text-slate-400 text-sm">Choose your language · भाषा चुनें · भाषा निवडा</p>
        </div>
        <div className="space-y-3">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => onSelect(l.code)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-teal-500/10 hover:border-teal-500/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <div className="text-left">
                <div className="text-white font-bold text-base">{l.label}</div>
                <div className="text-slate-400 text-xs mt-0.5">{l.sub}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
