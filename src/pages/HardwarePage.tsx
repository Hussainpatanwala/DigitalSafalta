import { Link } from 'react-router-dom';
import { Monitor, Laptop, Cpu, MemoryStick, HardDrive, MessageCircle, Phone, ShieldCheck, Wallet, Leaf } from 'lucide-react';
import { SEO } from '../components/SEO';
import { HomeAnchorLink } from '../components/HomeAnchorLink';
import { glass, tealBtn, PHONE_NUMBER, WHATSAPP_NUMBER } from '../lib/constants';
import type { Lang } from '../lib/constants';

const CATEGORY_ICONS = [Monitor, Cpu, Laptop, MemoryStick, HardDrive];
const WHY_ICONS = [Wallet, ShieldCheck, Leaf];

const COPY = {
  en: {
    metaTitle: 'Refurbished Desktops, Laptops, RAM & SSD in Pune | Digital Safalta',
    metaDescription: 'Buy second-hand desktops, tiny PCs, laptops, RAM and SSDs for your office or home. Sourced with our partner Raj Infotech and backed by Digital Safalta. Enquire on WhatsApp.',
    heading: 'Second-hand computers and parts, sourced for you',
    sub: 'Desktops, tiny PCs, laptops, RAM and SSDs for offices, shops, students and home use. We work with Raj Infotech, a hardware dealer we know well, and help you pick the right machine for the job.',
    cta: 'Enquire on WhatsApp',
    call: 'Call us',
    catHeading: 'What you can buy',
    categories: [
      { title: 'Desktops', text: 'Full-size office and home desktops for everyday work, billing and browsing.' },
      { title: 'Tiny PCs', text: 'Compact mini desktops that fit behind a monitor, good for reception, billing counters and light office use.' },
      { title: 'Laptops', text: 'Used business laptops for work, study and travel.' },
      { title: 'RAM', text: 'Memory upgrades to make an older computer usable again.' },
      { title: 'SSDs', text: 'Storage upgrades for faster start-up and smoother day-to-day use.' },
    ],
    whyHeading: 'Why buy second-hand',
    why: [
      { title: 'Lower cost', text: 'Used business-grade machines usually cost much less than new ones for the same everyday tasks.' },
      { title: 'Right-sized for the job', text: 'Tell us what the computer is for and we suggest a configuration, so you do not overpay for power you will not use.' },
      { title: 'Less e-waste', text: 'Giving good hardware a second life keeps it out of the scrap pile.' },
    ],
    howHeading: 'How it works',
    steps: [
      'Message us what you need: type of machine, how you will use it and your budget.',
      'We share available options from our partner Raj Infotech.',
      'You confirm your pick and we arrange the sale and delivery details.',
    ],
    howNote: 'Online payment will be added to this page later. For now, we confirm orders on WhatsApp or phone.',
    faqHeading: 'Common questions',
    faqs: [
      { question: 'Are these new or used?', answer: 'Second-hand. We tell you the condition and specification of each machine before you decide.' },
      { question: 'Who supplies the hardware?', answer: 'Raj Infotech, a hardware dealer and existing Digital Safalta client. Digital Safalta finds and assists buyers.' },
      { question: 'Is there a warranty?', answer: 'Warranty terms depend on the item. Ask us and we will confirm the terms in writing before you buy.' },
      { question: 'Can I pay online?', answer: 'Not yet. An online payment option is planned. Until then we confirm orders over WhatsApp or phone.' },
      { question: 'Can you supply in bulk for my office?', answer: 'Yes, tell us how many machines you need and what they will be used for, and we will share options.' },
    ],
    ctaHeading: 'Tell us what you need and we will find it',
    waText: 'Hi Digital Safalta, I am interested in second-hand hardware. I am looking for: ',
  },
  hi: {
    metaTitle: 'पुणे में रिफर्बिश्ड डेस्कटॉप, लैपटॉप, RAM और SSD | Digital Safalta',
    metaDescription: 'ऑफिस या घर के लिए सेकंड-हैंड डेस्कटॉप, टिनी PC, लैपटॉप, RAM और SSD खरीदें। हमारे पार्टनर Raj Infotech के साथ, Digital Safalta की मदद से। WhatsApp पर पूछें।',
    heading: 'सेकंड-हैंड कंप्यूटर और पार्ट्स, आपके लिए',
    sub: 'ऑफिस, दुकान, स्टूडेंट्स और घर के लिए डेस्कटॉप, टिनी PC, लैपटॉप, RAM और SSD। हम Raj Infotech के साथ काम करते हैं और सही मशीन चुनने में आपकी मदद करते हैं।',
    cta: 'WhatsApp पर पूछें',
    call: 'कॉल करें',
    catHeading: 'आप क्या खरीद सकते हैं',
    categories: [
      { title: 'डेस्कटॉप', text: 'रोज़ के काम, बिलिंग और ब्राउज़िंग के लिए फुल-साइज़ डेस्कटॉप।' },
      { title: 'टिनी PC', text: 'छोटे मिनी डेस्कटॉप जो मॉनिटर के पीछे फिट हो जाते हैं। रिसेप्शन और बिलिंग काउंटर के लिए अच्छे।' },
      { title: 'लैपटॉप', text: 'काम, पढ़ाई और सफ़र के लिए इस्तेमाल किए हुए बिज़नेस लैपटॉप।' },
      { title: 'RAM', text: 'पुराने कंप्यूटर को फिर से काम लायक बनाने के लिए मेमोरी अपग्रेड।' },
      { title: 'SSD', text: 'तेज़ स्टार्ट-अप और स्मूद इस्तेमाल के लिए स्टोरेज अपग्रेड।' },
    ],
    whyHeading: 'सेकंड-हैंड क्यों',
    why: [
      { title: 'कम कीमत', text: 'रोज़ के कामों के लिए इस्तेमाल की हुई बिज़नेस मशीनें नई से काफ़ी सस्ती पड़ती हैं।' },
      { title: 'काम के हिसाब से सही', text: 'बताइए कंप्यूटर किस काम के लिए है, हम सही कॉन्फ़िगरेशन सुझाएंगे ताकि आप ज़रूरत से ज़्यादा न दें।' },
      { title: 'कम e-waste', text: 'अच्छे हार्डवेयर को दूसरा जीवन देने से कचरा कम होता है।' },
    ],
    howHeading: 'यह कैसे काम करता है',
    steps: [
      'हमें बताएं आपको क्या चाहिए: मशीन का प्रकार, इस्तेमाल और बजट।',
      'हम अपने पार्टनर Raj Infotech से उपलब्ध विकल्प साझा करते हैं।',
      'आप अपनी पसंद पक्की करें और हम बिक्री और डिलीवरी की व्यवस्था करते हैं।',
    ],
    howNote: 'ऑनलाइन पेमेंट बाद में इस पेज पर जोड़ा जाएगा। अभी ऑर्डर WhatsApp या फ़ोन पर कन्फ़र्म होते हैं।',
    faqHeading: 'अक्सर पूछे जाने वाले सवाल',
    faqs: [
      { question: 'ये नए हैं या पुराने?', answer: 'सेकंड-हैंड। आप फ़ैसला लें उससे पहले हम हर मशीन की कंडीशन और स्पेसिफिकेशन बताते हैं।' },
      { question: 'हार्डवेयर कौन सप्लाई करता है?', answer: 'Raj Infotech, एक हार्डवेयर डीलर और Digital Safalta के मौजूदा क्लाइंट। Digital Safalta खरीदार ढूंढता है और मदद करता है।' },
      { question: 'क्या वारंटी मिलती है?', answer: 'वारंटी आइटम पर निर्भर करती है। खरीदने से पहले हम शर्तें लिखित में कन्फ़र्म करेंगे।' },
      { question: 'क्या ऑनलाइन पेमेंट कर सकते हैं?', answer: 'अभी नहीं। ऑनलाइन पेमेंट की योजना है। तब तक ऑर्डर WhatsApp या फ़ोन पर कन्फ़र्म होते हैं।' },
      { question: 'क्या ऑफिस के लिए थोक में मिल सकता है?', answer: 'हां, बताइए कितनी मशीनें चाहिए और किस काम के लिए, हम विकल्प भेजेंगे।' },
    ],
    ctaHeading: 'बताइए आपको क्या चाहिए, हम ढूंढ देंगे',
    waText: 'नमस्ते Digital Safalta, मुझे सेकंड-हैंड हार्डवेयर चाहिए। मैं ढूंढ रहा/रही हूं: ',
  },
  mr: {
    metaTitle: 'पुण्यात रिफर्बिश्ड डेस्कटॉप, लॅपटॉप, RAM आणि SSD | Digital Safalta',
    metaDescription: 'ऑफिस किंवा घरासाठी सेकंड-हँड डेस्कटॉप, टिनी PC, लॅपटॉप, RAM आणि SSD खरेदी करा. आमच्या पार्टनर Raj Infotech सोबत, Digital Safalta च्या मदतीने. WhatsApp वर विचारा.',
    heading: 'सेकंड-हँड कॉम्प्युटर आणि पार्ट्स, तुमच्यासाठी',
    sub: 'ऑफिस, दुकान, विद्यार्थी आणि घरासाठी डेस्कटॉप, टिनी PC, लॅपटॉप, RAM आणि SSD. आम्ही Raj Infotech सोबत काम करतो आणि योग्य मशीन निवडण्यास मदत करतो.',
    cta: 'WhatsApp वर विचारा',
    call: 'कॉल करा',
    catHeading: 'तुम्ही काय खरेदी करू शकता',
    categories: [
      { title: 'डेस्कटॉप', text: 'रोजचे काम, बिलिंग आणि ब्राउझिंगसाठी फुल-साइज डेस्कटॉप.' },
      { title: 'टिनी PC', text: 'छोटे मिनी डेस्कटॉप जे मॉनिटरच्या मागे बसतात. रिसेप्शन आणि बिलिंग काउंटरसाठी उत्तम.' },
      { title: 'लॅपटॉप', text: 'काम, अभ्यास आणि प्रवासासाठी वापरलेले बिझनेस लॅपटॉप.' },
      { title: 'RAM', text: 'जुना कॉम्प्युटर पुन्हा वापरण्यायोग्य करण्यासाठी मेमरी अपग्रेड.' },
      { title: 'SSD', text: 'जलद स्टार्ट-अप आणि स्मूद वापरासाठी स्टोरेज अपग्रेड.' },
    ],
    whyHeading: 'सेकंड-हँड का',
    why: [
      { title: 'कमी किंमत', text: 'रोजच्या कामांसाठी वापरलेली बिझनेस मशीन्स नवीनपेक्षा खूप स्वस्त पडतात.' },
      { title: 'कामाला योग्य', text: 'कॉम्प्युटर कशासाठी हवा ते सांगा, आम्ही योग्य कॉन्फिगरेशन सुचवू, म्हणजे गरजेपेक्षा जास्त खर्च होणार नाही.' },
      { title: 'कमी e-waste', text: 'चांगल्या हार्डवेअरला दुसरे आयुष्य दिल्याने कचरा कमी होतो.' },
    ],
    howHeading: 'हे कसे काम करते',
    steps: [
      'आम्हाला सांगा तुम्हाला काय हवे: मशीनचा प्रकार, वापर आणि बजेट.',
      'आम्ही आमचे पार्टनर Raj Infotech कडील उपलब्ध पर्याय शेअर करतो.',
      'तुम्ही निवड पक्की करा आणि आम्ही विक्री व डिलिव्हरीची व्यवस्था करतो.',
    ],
    howNote: 'ऑनलाइन पेमेंट नंतर या पेजवर जोडले जाईल. सध्या ऑर्डर WhatsApp किंवा फोनवर कन्फर्म होतात.',
    faqHeading: 'नेहमीचे प्रश्न',
    faqs: [
      { question: 'हे नवीन आहेत की वापरलेले?', answer: 'सेकंड-हँड. तुम्ही निर्णय घेण्यापूर्वी आम्ही प्रत्येक मशीनची कंडिशन आणि स्पेसिफिकेशन सांगतो.' },
      { question: 'हार्डवेअर कोण पुरवतो?', answer: 'Raj Infotech, एक हार्डवेअर डीलर आणि Digital Safalta चे विद्यमान क्लायंट. Digital Safalta खरेदीदार शोधते आणि मदत करते.' },
      { question: 'वॉरंटी मिळते का?', answer: 'वॉरंटी वस्तूवर अवलंबून असते. खरेदीपूर्वी आम्ही अटी लेखी कन्फर्म करू.' },
      { question: 'ऑनलाइन पेमेंट करता येईल का?', answer: 'अजून नाही. ऑनलाइन पेमेंटचे नियोजन आहे. तोपर्यंत ऑर्डर WhatsApp किंवा फोनवर कन्फर्म होतात.' },
      { question: 'ऑफिससाठी एकत्र जास्त संख्येने मिळेल का?', answer: 'हो, किती मशीन हवीत आणि कशासाठी ते सांगा, आम्ही पर्याय पाठवू.' },
    ],
    ctaHeading: 'तुम्हाला काय हवे ते सांगा, आम्ही शोधून देऊ',
    waText: 'नमस्कार Digital Safalta, मला सेकंड-हँड हार्डवेअर हवे आहे. मी शोधत आहे: ',
  },
} as const;

export function HardwarePage({ lang = 'en' }: { lang?: Lang }) {
  const t = COPY[lang];
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.waText)}`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  const Cta = ({ className = '' }: { className?: string }) => (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={waHref} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-full text-sm flex items-center gap-2 ${tealBtn}`}>
        <MessageCircle className="w-4 h-4" aria-hidden="true" /> {t.cta}
      </a>
      <a href={`tel:${PHONE_NUMBER}`} className="px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 border border-white/15 text-slate-200 hover:bg-white/5 transition-colors">
        <Phone className="w-4 h-4" aria-hidden="true" /> {t.call}
      </a>
    </div>
  );

  return (
    <>
      <SEO title={t.metaTitle} description={t.metaDescription} lang={lang} schema={schema} />
      <div className="pt-20 lg:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl leading-tight">{t.heading}</h1>
          <p className="mt-5 text-slate-400 text-base lg:text-lg max-w-2xl leading-relaxed">{t.sub}</p>
          <Cta className="mt-8" />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold mb-6">{t.catHeading}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.categories.map((c, i) => {
              const Icon = CATEGORY_ICONS[i];
              return (
                <div key={c.title} className={`${glass} rounded-2xl p-6`}>
                  <Icon className="w-6 h-6 text-teal-400 mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-1.5">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold mb-6">{t.whyHeading}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {t.why.map((w, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div key={w.title} className="border-l-2 border-teal-500/60 pl-5">
                  <Icon className="w-5 h-5 text-teal-400 mb-2" aria-hidden="true" />
                  <h3 className="font-bold mb-1">{w.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{w.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold mb-6">{t.howHeading}</h2>
          <ol className="space-y-3 max-w-2xl">
            {t.steps.map((s, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500/15 text-teal-400 text-sm font-bold flex items-center justify-center" aria-hidden="true">{i + 1}</span>
                <span className="text-slate-300 text-sm leading-relaxed pt-0.5">{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-slate-500 text-sm max-w-2xl">{t.howNote}</p>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold mb-6">{t.faqHeading}</h2>
          <div className="space-y-3">
            {t.faqs.map(f => (
              <details key={f.question} className={`${glass} rounded-xl p-5 group`}>
                <summary className="font-semibold cursor-pointer list-none flex justify-between gap-4">
                  {f.question}
                  <span className="text-teal-400 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className={`${glass} rounded-3xl p-8 lg:p-12`}>
            <h2 className="text-2xl lg:text-3xl font-black max-w-xl">{t.ctaHeading}</h2>
            <Cta className="mt-6" />
            <p className="mt-6 text-sm text-slate-500">
              <Link to="/contact" className="hover:text-teal-400 transition-colors underline underline-offset-4">
                {lang === 'en' ? 'Or use the contact form' : lang === 'hi' ? 'या कॉन्टैक्ट फ़ॉर्म इस्तेमाल करें' : 'किंवा कॉन्टॅक्ट फॉर्म वापरा'}
              </Link>
            </p>
          </div>
        </section>

        <HomeAnchorLink lang={lang} />
      </div>
    </>
  );
}
