import { useState, useEffect, FormEvent, useRef } from 'react';
import { supabase } from './supabaseClient';
import type { ChangeEvent } from 'react';
import {
  Menu, X, ArrowRight, TrendingUp, Zap, Users, Settings, ChevronDown,
  Check, Lightbulb, Target, Rocket, BarChart3, Globe, Mail, MousePointer,
  Palette, Send, Loader2, Star, Phone, MessageCircle, ChevronRight,
} from 'lucide-react';

const PHONE_NUMBER    = '+919029467352';
const WHATSAPP_NUMBER = '919029467352';

import {
  brandName, navLinks, heroMetrics, philosophyTitle, philosophyPrinciples,
  servicesTitle, servicesDescription, services, resultsTitle, resultsDescription,
  caseStudies, processTitle, processDescription, processSteps, platformMetrics,
  pricingTitle, pricingDescription, pricingPlans, testimonialQuote,
  testimonialAuthor, testimonialRole, testimonialInitials, faqItems,
  contactTitle, contactDescription, contactButtonText, contactResponseTime,
  footerDescription, footerServices, footerCompany, footerContact, footerCopyright,
} from './content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, BarChart3, Users, MousePointer, Palette, Globe, Mail, Settings,
};

interface FormData {
  name: string; phone: string; email: string; company: string;
  business_type: string; existing_website: string; message: string;
}
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type Lang = 'en' | 'hi' | 'mr';

const glass      = 'backdrop-blur-md bg-white/5 border border-white/10';
const glassHover = 'hover:bg-white/8 hover:border-white/20 transition-all duration-300';
const tealBtn    = 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/35 hover:-translate-y-0.5 transition-all duration-200';
const inputCls   = 'w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed';

// ─────────────────────────────────────────────────────────────────
// LANGUAGE STRINGS
// ─────────────────────────────────────────────────────────────────
const LANG_STRINGS = {
  en: {
    pickLang:    'Choose your language',
    pickSub:     'We\'ll remember your preference on this device.',
    btn:         'Continue',
    chatGreet:   'Hi! 👋 Welcome to Digital Safalta.',
    chatSub:     'Tell me what you\'re looking for and I\'ll point you in the right direction.',
    chatStart:   'What can we help you with?',
    services:    ['Website Design', 'Google / Meta Ads', 'SEO', 'Social Media Management', 'I need multiple services'],
    ws1q: 'Do you already have a website?',
    ws1a: ['Yes, I want to redesign it', 'I have a domain but no website', 'Starting completely from scratch'],
    ws2q: 'What\'s your timeline?',
    ws2a: ['As soon as possible', 'Within 1 month', 'I\'m just exploring'],
    ws3q: 'What\'s your budget for the website?',
    ws3a: ['Under ₹15,000', '₹15,000 (standard package)', '₹15,000–₹30,000', '₹30,000+'],
    ad1q: 'Which platform are you interested in?',
    ad1a: ['Google Ads', 'Meta Ads (Facebook/Instagram)', 'Both'],
    ad2q: 'What\'s your monthly ad budget (total spend)?',
    ad2a: ['Under ₹10,000/month', '₹10,000–₹25,000/month', '₹25,000+/month', 'Not sure yet'],
    ad3q: 'Are you currently running any ads?',
    ad3a: ['Yes, but not getting results', 'Never run ads before', 'Ran before, stopped'],
    seo1q: 'Do you have a website we can optimise?',
    seo1a: ['Yes', 'No — I need one first'],
    seo2q: 'Are you ranking for any keywords currently?',
    seo2a: ['Yes, but want to improve', 'No ranking at all', 'I don\'t know'],
    seo3q: 'What\'s your SEO timeline?',
    seo3a: ['Want results in 3–6 months', 'Long-term investment (6–12 months)', 'Just exploring'],
    sm1q: 'Which platforms do you want managed?',
    sm1a: ['Instagram', 'Facebook', 'Both Instagram & Facebook', 'LinkedIn'],
    sm2q: 'Do you have photos or content ready?',
    sm2a: ['Yes, I have plenty', 'Partially ready', 'No, need help with content too'],
    sm3q: 'How many posts per month are you thinking?',
    sm3a: ['12 posts/month', '20 posts/month', 'Custom — let\'s discuss'],
    multiMsg: 'Great! Combining services is the best way to grow. Let\'s talk and build a plan tailored to your business.',
    endMsg:  'Thanks! Here\'s how you can reach us — choose what works best for you:',
    form:    'Fill the Contact Form',
    wa:      'Chat on WhatsApp',
    call:    'Call Us',
    email:   'Email Us',
    restart: 'Start over',
  },
  hi: {
    pickLang:   'अपनी भाषा चुनें',
    pickSub:    'हम इस डिवाइस पर आपकी प्राथमिकता याद रखेंगे।',
    btn:        'जारी रखें',
    chatGreet:  'नमस्ते! 👋 Digital Safalta में आपका स्वागत है।',
    chatSub:    'बताइए आप क्या ढूंढ रहे हैं — हम सही दिशा में मदद करेंगे।',
    chatStart:  'हम आपकी किस तरह मदद कर सकते हैं?',
    services:   ['वेबसाइट डिज़ाइन', 'Google / Meta Ads', 'SEO', 'सोशल मीडिया मैनेजमेंट', 'मुझे कई सेवाएं चाहिए'],
    ws1q: 'क्या आपके पास पहले से वेबसाइट है?',
    ws1a: ['हां, मैं इसे redesign करना चाहता हूं', 'Domain है, वेबसाइट नहीं', 'बिल्कुल नई शुरुआत'],
    ws2q: 'आपकी समयसीमा क्या है?',
    ws2a: ['जितनी जल्दी हो सके', '1 महीने के भीतर', 'सिर्फ जानकारी ले रहा हूं'],
    ws3q: 'वेबसाइट के लिए आपका बजट क्या है?',
    ws3a: ['₹15,000 से कम', '₹15,000 (मानक पैकेज)', '₹15,000–₹30,000', '₹30,000+'],
    ad1q: 'आप किस प्लेटफॉर्म में रुचि रखते हैं?',
    ad1a: ['Google Ads', 'Meta Ads (Facebook/Instagram)', 'दोनों'],
    ad2q: 'आपका मासिक ad बजट क्या है?',
    ad2a: ['₹10,000/माह से कम', '₹10,000–₹25,000/माह', '₹25,000+/माह', 'अभी तय नहीं'],
    ad3q: 'क्या आप अभी ads चला रहे हैं?',
    ad3a: ['हां, पर परिणाम नहीं मिल रहे', 'पहले कभी ads नहीं चलाए', 'पहले चलाए थे, बंद कर दिए'],
    seo1q: 'क्या आपके पास optimize करने के लिए वेबसाइट है?',
    seo1a: ['हां', 'नहीं — पहले वेबसाइट चाहिए'],
    seo2q: 'क्या आप अभी किसी keyword पर rank कर रहे हैं?',
    seo2a: ['हां, पर सुधार चाहता हूं', 'बिल्कुल नहीं', 'मुझे नहीं पता'],
    seo3q: 'SEO के लिए आपकी समयसीमा क्या है?',
    seo3a: ['3–6 महीने में परिणाम', '6–12 महीने का दीर्घकालिक निवेश', 'सिर्फ जानकारी ले रहा हूं'],
    sm1q: 'आप कौन से प्लेटफॉर्म मैनेज करवाना चाहते हैं?',
    sm1a: ['Instagram', 'Facebook', 'Instagram & Facebook दोनों', 'LinkedIn'],
    sm2q: 'क्या आपके पास फोटो या कंटेंट तैयार है?',
    sm2a: ['हां, बहुत है', 'कुछ है', 'नहीं, कंटेंट में भी मदद चाहिए'],
    sm3q: 'प्रति माह कितने posts चाहिए?',
    sm3a: ['12 posts/माह', '20 posts/माह', 'Custom — बात करते हैं'],
    multiMsg: 'बढ़िया! कई सेवाएं मिलाकर काम करना सबसे असरदार होता है। चलिए बात करते हैं और आपके बिज़नेस के लिए एक plan बनाते हैं।',
    endMsg:  'धन्यवाद! आप इस तरह हमसे संपर्क कर सकते हैं:',
    form:    'Contact Form भरें',
    wa:      'WhatsApp पर Chat करें',
    call:    'Call करें',
    email:   'Email करें',
    restart: 'फिर से शुरू करें',
  },
  mr: {
    pickLang:   'तुमची भाषा निवडा',
    pickSub:    'आम्ही या डिव्हाइसवर तुमची प्राधान्यता लक्षात ठेवू.',
    btn:        'पुढे चला',
    chatGreet:  'नमस्कार! 👋 Digital Safalta मध्ये आपले स्वागत आहे।',
    chatSub:    'तुम्हाला काय हवे आहे ते सांगा — आम्ही योग्य दिशेने मदत करू.',
    chatStart:  'आम्ही तुम्हाला कशात मदत करू शकतो?',
    services:   ['वेबसाइट डिझाइन', 'Google / Meta Ads', 'SEO', 'सोशल मीडिया व्यवस्थापन', 'मला अनेक सेवा हव्यात'],
    ws1q: 'तुमच्याकडे आधीच वेबसाइट आहे का?',
    ws1a: ['हो, मला ती redesign करायची आहे', 'Domain आहे, वेबसाइट नाही', 'अगदी नव्याने सुरुवात'],
    ws2q: 'तुमची वेळमर्यादा काय आहे?',
    ws2a: ['शक्य तितक्या लवकर', '1 महिन्याच्या आत', 'फक्त माहिती घेत आहे'],
    ws3q: 'वेबसाइटसाठी तुमचे बजेट किती आहे?',
    ws3a: ['₹15,000 पेक्षा कमी', '₹15,000 (मानक पॅकेज)', '₹15,000–₹30,000', '₹30,000+'],
    ad1q: 'तुम्हाला कोणत्या प्लॅटफॉर्ममध्ये रस आहे?',
    ad1a: ['Google Ads', 'Meta Ads (Facebook/Instagram)', 'दोन्ही'],
    ad2q: 'तुमचे मासिक ad बजेट किती आहे?',
    ad2a: ['₹10,000/महिना पेक्षा कमी', '₹10,000–₹25,000/महिना', '₹25,000+/महिना', 'अजून ठरवले नाही'],
    ad3q: 'तुम्ही सध्या ads चालवत आहात का?',
    ad3a: ['हो, पण परिणाम मिळत नाहीत', 'आधी कधीच ads चालवले नाहीत', 'आधी चालवले होते, बंद केले'],
    seo1q: 'तुमच्याकडे optimize करण्यासाठी वेबसाइट आहे का?',
    seo1a: ['हो', 'नाही — आधी वेबसाइट हवी'],
    seo2q: 'तुम्ही सध्या कोणत्याही keyword वर rank करत आहात का?',
    seo2a: ['हो, पण सुधारणा हवी', 'अजिबात नाही', 'मला माहीत नाही'],
    seo3q: 'SEO साठी तुमची वेळमर्यादा काय आहे?',
    seo3a: ['3–6 महिन्यांत परिणाम', '6–12 महिन्यांची दीर्घकालीन गुंतवणूक', 'फक्त माहिती घेत आहे'],
    sm1q: 'तुम्हाला कोणते प्लॅटफॉर्म व्यवस्थापित करायचे आहेत?',
    sm1a: ['Instagram', 'Facebook', 'Instagram & Facebook दोन्ही', 'LinkedIn'],
    sm2q: 'तुमच्याकडे फोटो किंवा कंटेंट तयार आहे का?',
    sm2a: ['हो, भरपूर आहे', 'काही तयार आहे', 'नाही, कंटेंटमध्येही मदत हवी'],
    sm3q: 'महिन्याला किती posts हव्यात?',
    sm3a: ['12 posts/महिना', '20 posts/महिना', 'Custom — बोलूया'],
    multiMsg: 'छान! अनेक सेवा एकत्र वापरणे सर्वात प्रभावी आहे. चला बोलूया आणि तुमच्या व्यवसायासाठी एक योजना बनवूया.',
    endMsg:  'धन्यवाद! तुम्ही आम्हाला यापैकी कोणत्याही प्रकारे संपर्क करू शकता:',
    form:    'Contact Form भरा',
    wa:      'WhatsApp वर Chat करा',
    call:    'Call करा',
    email:   'Email करा',
    restart: 'पुन्हा सुरू करा',
  },
};

// ─────────────────────────────────────────────────────────────────
// LANGUAGE PICKER MODAL
// ─────────────────────────────────────────────────────────────────
function LanguagePicker({ onSelect }: { onSelect: (l: Lang) => void }) {
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

// ─────────────────────────────────────────────────────────────────
// CHATBOT
// ─────────────────────────────────────────────────────────────────
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

function Chatbot({ lang }: { lang: Lang }) {
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

// ════════════════════════════════════════════════════════════════════════════
// APP
// ════════════════════════════════════════════════════════════════════════════
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const faqRefs                     = useRef<(HTMLDivElement | null)[]>([]);

  const [lang, setLang]             = useState<Lang | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ds_lang') as Lang | null;
    if (saved && ['en', 'hi', 'mr'].includes(saved)) {
      setLang(saved);
    } else {
      setShowPicker(true);
    }
  }, []);

  const handleLangSelect = (l: Lang) => {
    localStorage.setItem('ds_lang', l);
    setLang(l);
    setShowPicker(false);
    // Trigger Google Translate for full page translation
    if (l !== 'en') (window as any).switchLang?.(l);
  };

  const formInit: FormData = { name: '', phone: '', email: '', company: '', business_type: '', existing_website: '', message: '' };
  const [formData, setFormData]     = useState<FormData>(formInit);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (openFaq !== null) faqRefs.current[openFaq]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [openFaq]);

  const handleNavClick = () => setIsMenuOpen(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert([{ ...formData, source: 'website' }]);
      if (dbError) throw new Error(dbError.message);
      const { error: fnError } = await supabase.functions.invoke('notify-form-submission', { body: { ...formData, source: 'website' } });
      if (fnError) throw new Error(fnError.message);
      setFormStatus('success');
      setFormData(formInit);
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setFormStatus('error');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const activeLang = lang ?? 'en';

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased overflow-x-hidden pb-[72px] lg:pb-0">
      {showPicker && <LanguagePicker onSelect={handleLangSelect} />}

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-teal-500 focus:text-slate-950 focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>

      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-teal-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-violet-500/7 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        onNavClick={handleNavClick}
      />

      <main id="main-content">
        <Hero />
        <Philosophy />
        <Services />
        <Results />
        <Process />
        <PlatformMetrics />
        <Pricing />
        <Testimonial />
        <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} faqRefs={faqRefs} />
        <Contact formData={formData} formStatus={formStatus} onInputChange={handleInputChange} onSubmit={handleFormSubmit} />
      </main>

      <Footer />
      <Chatbot lang={activeLang} />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════════════════════════════════════
function Navigation({
  isMenuOpen, setIsMenuOpen, scrolled, onNavClick,
}: {
  isMenuOpen: boolean; setIsMenuOpen: (v: boolean) => void;
  scrolled: boolean; onNavClick: () => void;
}) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-white/8 shadow-lg shadow-black/30' : 'bg-transparent'}`}
      role="navigation" aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5" aria-label={`${brandName} - Home`}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30" aria-hidden="true">
              <TrendingUp className="w-4 h-4 text-slate-950" />
            </div>
            <span className="text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Digital</span>
              <span className="text-white"> Safalta</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
                {link.label}
              </a>
            ))}
            <a href="#contact" className={`px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${tealBtn}`}>
              Start a Project <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-expanded={isMenuOpen} aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} aria-hidden={!isMenuOpen}>
        <div className="bg-slate-950/95 backdrop-blur-lg border-t border-white/8 px-4 py-5 space-y-3">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={onNavClick} className="block text-slate-400 hover:text-white transition-colors py-2 text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={onNavClick} className={`block text-center px-5 py-3 rounded-xl text-sm font-bold mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${tealBtn}`}>
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-28" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            Pune · Maharashtra · Digital Growth Agency
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
            <a href="#contact" className={`px-8 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${tealBtn}`}>
              Start the Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a href="#services" className="px-8 py-4 rounded-2xl border border-white/12 text-slate-300 font-medium text-base hover:bg-white/5 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30">
              See What We Offer
            </a>
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

// ════════════════════════════════════════════════════════════════════════════
// PHILOSOPHY
// ════════════════════════════════════════════════════════════════════════════
function Philosophy() {
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

// ════════════════════════════════════════════════════════════════════════════
// SERVICES
// ════════════════════════════════════════════════════════════════════════════
function Services() {
  return (
    <section id="services" className="py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{servicesTitle}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{servicesDescription}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <article key={idx} className={`group rounded-2xl p-6 ${glass} hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300`}>
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-teal-400" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// RESULTS
// ════════════════════════════════════════════════════════════════════════════
function Results() {
  return (
    <section id="results" className="py-16 lg:py-24 relative" aria-labelledby="results-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="results-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{resultsTitle}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{resultsDescription}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <article key={idx} className={`rounded-2xl p-7 ${glass} hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300`}>
              <div className="text-xs text-teal-400 font-bold tracking-widest uppercase mb-3">{study.category}</div>
              <div className="text-3xl font-black text-white mb-4">{study.result}</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.metrics.map((metric, midx) => (
                  <span key={midx} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">{metric}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PROCESS
// ════════════════════════════════════════════════════════════════════════════
function Process() {
  const icons = [Lightbulb, Target, Rocket, BarChart3];
  return (
    <section id="process" className="py-16 lg:py-24" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="process-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{processTitle}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{processDescription}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const IconComponent = icons[idx] || Lightbulb;
            return (
              <article key={idx} className={`rounded-2xl p-7 relative ${glass} ${glassHover}`}>
                <div className="text-5xl font-black text-white/5 mb-4 leading-none select-none" aria-hidden="true">{step.number}</div>
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-teal-400" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PLATFORM METRICS
// ════════════════════════════════════════════════════════════════════════════
function PlatformMetrics() {
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

// ════════════════════════════════════════════════════════════════════════════
// PRICING
// ════════════════════════════════════════════════════════════════════════════
function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{pricingTitle}</h2>
          <p className="text-slate-400 text-base leading-relaxed">{pricingDescription}</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {pricingPlans.map((plan, idx) => (
            <article
              key={idx}
              className={`rounded-2xl p-7 relative overflow-hidden transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-teal-500/20 to-cyan-500/10 border border-teal-500/40 shadow-xl shadow-teal-500/10 scale-[1.02]'
                  : `${glass} ${glassHover}`
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" aria-hidden="true" />
                  <div className="inline-flex items-center gap-1.5 bg-teal-500/20 border border-teal-500/30 text-teal-300 px-3 py-1 rounded-full text-xs font-bold mb-5">
                    <Star className="w-3 h-3" aria-hidden="true" /> Most Popular
                  </div>
                </>
              )}
              <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-7">
                <span className="text-4xl font-black text-white">{plan.currency}{plan.price}</span>
                {plan.period && <span className="text-slate-400 text-sm ml-1">/{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-6 flex-1" aria-label="Plan features">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="text-xs text-slate-400 leading-relaxed bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-6">
                  {plan.note}
                </p>
              )}
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                  plan.highlighted ? tealBtn : 'border border-white/15 text-white hover:bg-white/8 hover:border-white/25'
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// TESTIMONIAL
// ════════════════════════════════════════════════════════════════════════════
function Testimonial() {
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

// ════════════════════════════════════════════════════════════════════════════
// FAQ
// ════════════════════════════════════════════════════════════════════════════
function FAQ({ openFaq, setOpenFaq, faqRefs }: {
  openFaq: number | null; setOpenFaq: (v: number | null) => void;
  faqRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <section id="faq" className="py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl lg:text-4xl font-black text-center tracking-tight mb-3">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-center mb-12 text-base">Everything you need to know about partnering with us.</p>
        <div className="space-y-3">
          {faqItems.map((faq, idx) => (
            <div
              key={idx}
              ref={el => { faqRefs.current[idx] = el; }}
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

// ════════════════════════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════════════════════════
function Contact({ formData, formStatus, onInputChange, onSubmit }: {
  formData: FormData; formStatus: FormStatus;
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="contact" className="py-16 lg:py-28 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[700px] h-72 bg-teal-500/8 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            Free consultation · No obligation
          </div>
          <h2 id="contact-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{contactTitle}</h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto">{contactDescription}</p>
        </div>
        <div className={`rounded-3xl p-8 lg:p-10 relative overflow-hidden ${glass} shadow-2xl shadow-black/40`}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" aria-hidden="true" />
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Your Name</label>
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={onInputChange} placeholder="e.g. Priya Sharma" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Phone Number</label>
              <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={onInputChange} placeholder="+91 98765 43210" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Email Address</label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={onInputChange} placeholder="you@example.com" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Business Name</label>
              <input id="contact-company" type="text" name="company" value={formData.company} onChange={onInputChange} placeholder="Your Business Name" disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-business-type" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Type of Business</label>
              <select id="contact-business-type" name="business_type" value={formData.business_type} onChange={onInputChange} disabled={formStatus === 'submitting'} className={`${inputCls} bg-slate-900`}>
                <option value="">Type of Business (optional)</option>
                <option>Restaurant / Food Business</option>
                <option>Retail / Shop</option>
                <option>Professional Services (CA, Doctor, Lawyer)</option>
                <option>Real Estate</option>
                <option>Education / Coaching</option>
                <option>E-commerce</option>
                <option>Manufacturing / B2B</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-existing-website" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Do You Have a Website?</label>
              <select id="contact-existing-website" name="existing_website" value={formData.existing_website} onChange={onInputChange} disabled={formStatus === 'submitting'} className={`${inputCls} bg-slate-900`}>
                <option value="">Do you have a website? (optional)</option>
                <option>No, I need everything from scratch</option>
                <option>I have a domain but no website</option>
                <option>I have a website but want to redesign it</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Tell Us About Your Goals</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={onInputChange} placeholder="Tell us about your business and what you are looking to achieve..." rows={4} required disabled={formStatus === 'submitting'} className={`${inputCls} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                formStatus === 'submitting' ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : formStatus === 'success'  ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 cursor-default'
                : tealBtn
              }`}
            >
              {formStatus === 'submitting' ? (<><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />Sending…</>)
               : formStatus === 'success'  ? (<><Check className="w-5 h-5" aria-hidden="true" />Message Sent!</>)
               : (<>{contactButtonText}<Send className="w-5 h-5" aria-hidden="true" /></>)}
            </button>
          </form>
          {formStatus === 'success' && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-sm text-center" role="status">
              🎉 Thank you! We'll be in touch within 24 hours.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-sm text-center" role="alert">
              Something went wrong. Please try again or email us directly.
            </div>
          )}
          <p className="text-center text-xs text-slate-500 mt-5">{contactResponseTime}</p>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="border-t border-white/8 py-12 lg:py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center" aria-hidden="true">
                <TrendingUp className="w-4 h-4 text-slate-950" />
              </div>
              <span className="text-lg font-black">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Digital</span>
                <span className="text-white"> Safalta</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">{footerDescription}</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((item, idx) => (
                <li key={idx}><a href="#services" className="text-slate-500 hover:text-teal-400 transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2">
              {footerCompany.map((item, idx) => (
                <li key={idx}><a href="#" className="text-slate-500 hover:text-teal-400 transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href={`mailto:${footerContact.email}`} className="hover:text-teal-400 transition-colors">{footerContact.email}</a></li>
              <li>{footerContact.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">{footerCopyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <MobileActionBar />
    </footer>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// MOBILE ACTION BAR
// ════════════════════════════════════════════════════════════════════════════
function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] flex justify-center items-center gap-6 px-6 py-3 bg-slate-950/95 backdrop-blur-lg border-t border-white/10 shadow-2xl shadow-black/50 lg:hidden" role="toolbar" aria-label="Quick contact">
      <a href={`tel:${PHONE_NUMBER}`} aria-label="Call us" className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 hover:bg-teal-500/25 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950">
        <Phone className="w-5 h-5" aria-hidden="true" />
      </a>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="flex items-center justify-center w-12 h-12 rounded-full border hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none" style={{ background: 'rgba(37,211,102,0.15)', borderColor: 'rgba(37,211,102,0.35)', color: '#25D366' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
