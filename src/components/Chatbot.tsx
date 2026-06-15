import { useState, useEffect, useRef } from 'react';
import { X, TrendingUp, MessageCircle } from 'lucide-react';
import { tealBtn, WHATSAPP_NUMBER, PHONE_NUMBER } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { LANG_STRINGS } from '../lib/langStrings';
import { footerContact } from '../content';

type ChatStep =
  | 'start'
  | 'ws1' | 'ws2' | 'ws3'
  | 'ad1' | 'ad2' | 'ad3'
  | 'seo1' | 'seo2' | 'seo3'
  | 'sm1' | 'sm2' | 'sm3'
  | 'multi'
  | 'end';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

export function Chatbot({ lang }: { lang: Lang }) {
  const t = LANG_STRINGS[lang];
  const [open, setOpen]   = useState(false);
  const [step, setStep]   = useState<ChatStep>('start');
  const [msgs, setMsgs]   = useState<ChatMessage[]>([
    { from: 'bot', text: t.chatGreet },
    { from: 'bot', text: t.chatSub  },
    { from: 'bot', text: t.chatStart },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  useEffect(() => {
    setStep('start');
    setMsgs([
      { from: 'bot', text: t.chatGreet },
      { from: 'bot', text: t.chatSub  },
      { from: 'bot', text: t.chatStart },
    ]);
  }, [lang]);

  const addMsgs = (userText: string, botTexts: string[], nextStep: ChatStep) => {
    setMsgs(prev => [
      ...prev,
      { from: 'user', text: userText },
      ...botTexts.map(text => ({ from: 'bot' as const, text })),
    ]);
    setStep(nextStep);
  };

  const handleService = (svc: string, idx: number) => {
    if (idx === 4) {
      addMsgs(svc, [t.multiMsg], 'multi');
      setTimeout(() => setStep('end'), 600);
      setTimeout(() => setMsgs(prev => [...prev, { from: 'bot', text: t.endMsg }]), 700);
    } else if (idx === 0) addMsgs(svc, [t.ws1q], 'ws1');
    else if (idx === 1)   addMsgs(svc, [t.ad1q], 'ad1');
    else if (idx === 2)   addMsgs(svc, [t.seo1q], 'seo1');
    else if (idx === 3)   addMsgs(svc, [t.sm1q], 'sm1');
  };

  const getOptions = (): { texts: string[]; next: (i: number, txt: string) => void } | null => {
    switch (step) {
      case 'start': return { texts: t.services, next: (i, txt) => handleService(txt, i) };
      case 'ws1':   return { texts: t.ws1a, next: (_, txt) => addMsgs(txt, [t.ws2q], 'ws2') };
      case 'ws2':   return { texts: t.ws2a, next: (_, txt) => addMsgs(txt, [t.ws3q], 'ws3') };
      case 'ws3':   return { texts: t.ws3a, next: (_, txt) => addMsgs(txt, [t.endMsg], 'end') };
      case 'ad1':   return { texts: t.ad1a, next: (_, txt) => addMsgs(txt, [t.ad2q], 'ad2') };
      case 'ad2':   return { texts: t.ad2a, next: (_, txt) => addMsgs(txt, [t.ad3q], 'ad3') };
      case 'ad3':   return { texts: t.ad3a, next: (_, txt) => addMsgs(txt, [t.endMsg], 'end') };
      case 'seo1':  return { texts: t.seo1a, next: (_, txt) => addMsgs(txt, [t.seo2q], 'seo2') };
      case 'seo2':  return { texts: t.seo2a, next: (_, txt) => addMsgs(txt, [t.seo3q], 'seo3') };
      case 'seo3':  return { texts: t.seo3a, next: (_, txt) => addMsgs(txt, [t.endMsg], 'end') };
      case 'sm1':   return { texts: t.sm1a, next: (_, txt) => addMsgs(txt, [t.sm2q], 'sm2') };
      case 'sm2':   return { texts: t.sm2a, next: (_, txt) => addMsgs(txt, [t.sm3q], 'sm3') };
      case 'sm3':   return { texts: t.sm3a, next: (_, txt) => addMsgs(txt, [t.endMsg], 'end') };
      default:      return null;
    }
  };

  const opts = getOptions();

  const restart = () => {
    setStep('start');
    setMsgs([
      { from: 'bot', text: t.chatGreet },
      { from: 'bot', text: t.chatSub  },
      { from: 'bot', text: t.chatStart },
    ]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-20 right-4 lg:bottom-6 z-[9997] w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #14b8a6, #06b6d4)' }}
        aria-label="Open chat"
      >
        {open
          ? <X className="w-6 h-6 text-slate-950" />
          : <MessageCircle className="w-6 h-6 text-slate-950" />}
      </button>

      {open && (
        <div
          className="fixed bottom-36 right-4 lg:bottom-24 z-[9996] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          style={{ height: '480px', background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10" style={{ background: 'rgba(20,184,166,0.15)' }}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <div className="text-white text-sm font-bold">Digital Safalta</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs">Online</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-teal-500 text-slate-950 font-medium rounded-br-sm'
                    : 'bg-white/8 text-slate-200 rounded-bl-sm border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {opts && (
              <div className="flex flex-col gap-2 mt-2">
                {opts.texts.map((txt, i) => (
                  <button
                    key={i}
                    onClick={() => opts.next(i, txt)}
                    className="text-left px-3.5 py-2.5 rounded-xl text-sm text-teal-300 border border-teal-500/30 bg-teal-500/8 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  >
                    {txt}
                  </button>
                ))}
              </div>
            )}

            {step === 'end' && (
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={`block text-center px-4 py-2.5 rounded-xl text-sm font-bold ${tealBtn}`}
                >
                  {t.form}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-2.5 rounded-xl text-sm font-bold border transition-all duration-200"
                  style={{ borderColor: 'rgba(37,211,102,0.4)', color: '#25D366', background: 'rgba(37,211,102,0.1)' }}
                >
                  {t.wa}
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="block text-center px-4 py-2.5 rounded-xl text-sm font-medium border border-white/15 text-slate-300 hover:bg-white/8 transition-all duration-200"
                >
                  {t.call}
                </a>
                <a
                  href={`mailto:${footerContact.email}`}
                  className="block text-center px-4 py-2.5 rounded-xl text-sm font-medium border border-white/15 text-slate-300 hover:bg-white/8 transition-all duration-200"
                >
                  {t.email}
                </a>
                <button
                  onClick={restart}
                  className="text-center text-xs text-slate-500 hover:text-slate-300 transition-colors mt-1"
                >
                  ↩ {t.restart}
                </button>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>
      )}
    </>
  );
}
