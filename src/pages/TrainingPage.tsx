import { Link } from 'react-router-dom';
import { GraduationCap, Code2, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { HomeAnchorLink } from '../components/HomeAnchorLink';
import { glass, tealBtn, WHATSAPP_NUMBER } from '../lib/constants';
import type { Lang } from '../lib/constants';

const ICONS = [GraduationCap, Code2];
const LINKS = ['/services/kids-digital-skills', '/services/ai-dev-mentorship'];

const COPY = {
  en: {
    metaTitle: 'Training Programs in Pune | Digital Safalta',
    metaDescription: 'Live digital skills training from Digital Safalta: a 1-month course for kids and a 1-on-1 AI-powered web and Android app development mentorship.',
    heading: 'Training programs',
    sub: 'Hands-on, live training taught by the same team that builds client websites and apps.',
    programs: [
      { title: 'Digital Skills Course for Kids', text: 'A 1-month live online program covering online safety, design basics, what a website is, and everyday productivity tools.', price: '₹15,000', meta: '8 sessions' },
      { title: 'AI-Powered Web & Android App Development Mentorship', text: 'A 1-on-1 personal program to build real websites, web apps and native Android apps using AI-assisted tools.', price: '₹1,00,000', meta: '1-on-1' },
    ],
    details: 'View details',
    ctaHeading: 'Not sure which program fits?',
    ctaText: 'Tell us who the training is for and what they want to learn.',
    cta: 'Ask on WhatsApp',
    wa: 'Hi Digital Safalta, I would like to know more about your training programs.',
  },
  hi: {
    metaTitle: 'पुणे में ट्रेनिंग प्रोग्राम | Digital Safalta',
    metaDescription: 'Digital Safalta की लाइव डिजिटल स्किल्स ट्रेनिंग: बच्चों के लिए 1 महीने का कोर्स और AI से वेब और Android ऐप डेवलपमेंट का 1-on-1 मेंटरशिप।',
    heading: 'ट्रेनिंग प्रोग्राम',
    sub: 'उसी टीम द्वारा सिखाई जाने वाली प्रैक्टिकल लाइव ट्रेनिंग जो क्लाइंट्स के लिए वेबसाइट और ऐप बनाती है।',
    programs: [
      { title: 'बच्चों के लिए डिजिटल स्किल्स कोर्स', text: '1 महीने का लाइव ऑनलाइन प्रोग्राम: ऑनलाइन सुरक्षा, डिज़ाइन की बुनियादी बातें, वेबसाइट क्या है, और रोज़ के प्रोडक्टिविटी टूल्स।', price: '₹15,000', meta: '8 सेशन' },
      { title: 'AI से वेब और Android ऐप डेवलपमेंट मेंटरशिप', text: 'AI टूल्स की मदद से असली वेबसाइट, वेब ऐप और Android ऐप बनाना सीखने का 1-on-1 पर्सनल प्रोग्राम।', price: '₹1,00,000', meta: '1-on-1' },
    ],
    details: 'विवरण देखें',
    ctaHeading: 'पक्का नहीं कि कौन सा प्रोग्राम सही है?',
    ctaText: 'बताइए ट्रेनिंग किसके लिए है और वे क्या सीखना चाहते हैं।',
    cta: 'WhatsApp पर पूछें',
    wa: 'नमस्ते Digital Safalta, मुझे आपके ट्रेनिंग प्रोग्राम के बारे में जानना है।',
  },
  mr: {
    metaTitle: 'पुण्यात ट्रेनिंग प्रोग्राम | Digital Safalta',
    metaDescription: 'Digital Safalta चे लाइव डिजिटल स्किल्स ट्रेनिंग: मुलांसाठी 1 महिन्याचा कोर्स आणि AI वापरून वेब व Android अॅप डेव्हलपमेंटचे 1-on-1 मेंटरशिप.',
    heading: 'ट्रेनिंग प्रोग्राम',
    sub: 'क्लायंट्ससाठी वेबसाइट आणि अॅप बनवणाऱ्या टीमकडून शिकवले जाणारे प्रॅक्टिकल लाइव्ह ट्रेनिंग.',
    programs: [
      { title: 'मुलांसाठी डिजिटल स्किल्स कोर्स', text: '1 महिन्याचा लाइव्ह ऑनलाइन प्रोग्राम: ऑनलाइन सुरक्षा, डिझाइनची मूलभूत माहिती, वेबसाइट म्हणजे काय, आणि रोजची प्रोडक्टिव्हिटी टूल्स.', price: '₹15,000', meta: '8 सेशन' },
      { title: 'AI वापरून वेब व Android अॅप डेव्हलपमेंट मेंटरशिप', text: 'AI टूल्सच्या मदतीने खऱ्या वेबसाइट, वेब अॅप्स आणि Android अॅप्स बनवायला शिकण्याचा 1-on-1 पर्सनल प्रोग्राम.', price: '₹1,00,000', meta: '1-on-1' },
    ],
    details: 'तपशील पहा',
    ctaHeading: 'कोणता प्रोग्राम योग्य आहे याची खात्री नाही?',
    ctaText: 'ट्रेनिंग कोणासाठी आहे आणि त्यांना काय शिकायचे आहे ते सांगा.',
    cta: 'WhatsApp वर विचारा',
    wa: 'नमस्कार Digital Safalta, मला तुमच्या ट्रेनिंग प्रोग्रामबद्दल माहिती हवी आहे.',
  },
} as const;

export function TrainingPage({ lang = 'en' }: { lang?: Lang }) {
  const t = COPY[lang];
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.wa)}`;
  return (
    <>
      <SEO title={t.metaTitle} description={t.metaDescription} lang={lang} />
      <div className="pt-20 lg:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl leading-tight">{t.heading}</h1>
          <p className="mt-5 text-slate-400 text-base lg:text-lg max-w-2xl leading-relaxed">{t.sub}</p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid md:grid-cols-2 gap-5">
            {t.programs.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <Link key={p.title} to={LINKS[i]} className={`${glass} rounded-2xl p-7 flex flex-col hover:bg-white/8 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500`}>
                  <Icon className="w-6 h-6 text-teal-400 mb-4" aria-hidden="true" />
                  <h2 className="text-xl font-bold mb-2">{p.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.text}</p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-bold text-white">{p.price} <span className="text-slate-500 font-normal">· {p.meta}</span></span>
                    <span className="text-teal-400 font-semibold">{t.details}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className={`${glass} rounded-3xl p-8 lg:p-12`}>
            <h2 className="text-2xl font-black">{t.ctaHeading}</h2>
            <p className="mt-2 text-slate-400 text-sm">{t.ctaText}</p>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm ${tealBtn}`}>
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> {t.cta}
            </a>
          </div>
        </section>
        <HomeAnchorLink lang={lang} />
      </div>
    </>
  );
}
