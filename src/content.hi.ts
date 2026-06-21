/**
 * ===================================================================
 * DIGITAL SAFALTA — हिंदी कंटेंट (HINDI CONTENT)
 * ===================================================================
 * This file MUST have the exact same shape as content.en.ts.
 * Edit the values below to update HINDI site content only.
 * ===================================================================
 */
import type { SiteContent } from './content.en';

export const content: SiteContent = {
  brand: {
    name: "Digital Safalta",
    tagline: "सफलता का विज्ञान।",
  },

  ui: {
    navHome: "होम",
    navServices: "सेवाएं",
    navPricing: "मूल्य",
    navAbout: "हमारे बारे में",
    navContact: "संपर्क करें",
    navBlog: "ब्लॉग",
    navCtaButton: "प्रोजेक्ट शुरू करें",
    learnMore: "और जानें",
    mostPopular: "सबसे लोकप्रिय",
    getStarted: "शुरू करें",
    openMenu: "मेनू खोलें",
    closeMenu: "मेनू बंद करें",
    skipToContent: "मुख्य सामग्री पर जाएं",
  },

  hero: {
    eyebrow: "पुणे · महाराष्ट्र · डिजिटल मार्केटिंग एजेंसी",
    headlineLine1: "अपना बिज़नेस डिजिटली बढ़ाएं",
    headlineLine2: "सही तरीके से।",
    subheading: "Digital Safalta पुणे के छोटे और बढ़ते बिज़नेस को ऑनलाइन पहचान बनाने, असरदार ad campaigns चलाने, और visitors को paying customers में बदलने में मदद करता है।",
    ctaText: "बातचीत शुरू करें",
    secondaryCtaText: "हमारी सेवाएं देखें",
    auditCtaTitle: "मुफ़्त मार्केटिंग ऑडिट",
    auditCtaSubtitle: "अपना URL डालें → 30 सेकंड में पूरा ऑडिट पाएं",
    metrics: [
      { value: "8+", label: "वर्षों का इंडस्ट्री अनुभव" },
      { value: "₹5k", label: "शुरुआत के लिए एजेंसी फीस" },
      { value: "24hr", label: "रिस्पॉन्स गारंटी" },
      { value: "100%", label: "पारदर्शिता का वादा" },
    ],
    techBadges: ["✦ Cloudflare Pages पर होस्टेड", "✦ Supabase बैकएंड", "✦ Brevo ईमेल ऑटोमेशन", "✦ Edge functions संचालित"],
  },

  philosophy: {
    title: "हमारा दृष्टिकोण",
    principles: [
      {
        number: "01",
        title: "ईमानदारी पहले",
        description: "हम आपको बताते हैं कि क्या काम करेगा और क्या नहीं — भले ही वह आप सुनना न चाहें। कोई overselling नहीं, कोई झूठा वादा नहीं। बस आपके पुणे बिज़नेस के लिए ईमानदार डिजिटल मार्केटिंग सलाह।"
      },
      {
        number: "02",
        title: "Vanity नहीं, परिणाम",
        description: "Likes और impressions बिल नहीं चुकाते। हम leads, conversions, और revenue पर फोकस करते हैं — वे metrics जो वाकई आपके पुणे और उससे आगे के बिज़नेस ग्रोथ के लिए मायने रखते हैं।"
      },
      {
        number: "03",
        title: "फाउंडर-लेड सेवा",
        description: "आप सीधे फाउंडर के साथ काम करते हैं — किसी जूनियर एग्जीक्यूटिव के साथ नहीं जो 50 accounts संभाल रहा हो। आपके बिज़नेस को असली ध्यान, असली रणनीति, और कोई व्यक्तिगत रूप से आपकी ग्रोथ में निवेशित मिलता है।"
      },
    ],
  },

  services: {
    title: "पुणे में डिजिटल मार्केटिंग सेवाएं",
    description: "पुणे, महाराष्ट्र और पूरे भारत के छोटे और बढ़ते बिज़नेस के लिए end-to-end डिजिटल मार्केटिंग सेवाएं।",
    items: [
      {
        title: "वेबसाइट डिज़ाइन",
        description: "तेज़, mobile-friendly वेबसाइटें जो आपके बिज़नेस को 24/7 represent करती हैं। Custom email, SSL, Google Analytics, leads database, और Google Maps शामिल — 7 working days में लाइव।",
        icon: "Globe",
        href: "/services/website-design"
      },
      {
        title: "परफॉर्मेंस ऐड्स",
        description: "Facebook, Instagram, और Google Ads को मैनेज किया जाता है ताकि आपको असली leads और sales मिलें। Ad budget आप control करते हैं — हर रुपये को बेहतर काम पर लगाते हैं हम।",
        icon: "Zap",
        href: "/services/google-ads"
      },
      {
        title: "SEO",
        description: "पुणे और पूरे भारत में उन लोगों तक Google पर पहुंचें जो सक्रिय रूप से वही खोज रहे हैं जो आप ऑफर करते हैं।",
        icon: "BarChart3",
        href: "/services/seo"
      },
      {
        title: "सोशल मीडिया मैनेजमेंट",
        description: "लगातार, आकर्षक कंटेंट जो आपके brand को बनाता है और audience को वापस लाता रहता है।",
        icon: "Users",
        href: "/services/social-media"
      },
      {
        title: "लैंडिंग पेज और फनल्स",
        description: "High-converting landing pages जो आपके ad traffic को paying customers में बदलने के लिए डिज़ाइन किए गए हैं।",
        icon: "MousePointer"
      },
      {
        title: "ब्रांड आइडेंटिटी",
        description: "Logo, colors, और visual identity जो आपके बिज़नेस को professional और trustworthy दिखाती है।",
        icon: "Palette"
      },
      {
        title: "ईमेल मार्केटिंग",
        description: "स्मार्ट, automated email marketing campaigns के ज़रिए अपने customers के दिमाग में बने रहें।",
        icon: "Mail"
      },
      {
        title: "एनालिटिक्स और रिपोर्टिंग",
        description: "साफ, सरल रिपोर्ट्स ताकि आपको हमेशा पता रहे कि आपका पैसा कहां जा रहा है और क्या return मिल रहा है।",
        icon: "Settings"
      },
    ],
  },

  results: {
    title: "आप क्या उम्मीद कर सकते हैं",
    description: "हम पुणे की एक नई डिजिटल मार्केटिंग एजेंसी हैं — इसलिए बनावटी case studies के बजाय, यहां है जो हम देने का वादा करते हैं।",
    caseStudies: [
      {
        category: "पारदर्शिता",
        result: "कोई छिपी फीस नहीं",
        description: "Ad budget और agency fee हमेशा अलग-अलग दिखाई जाती है। आपको पता रहता है कि platform को क्या जाता है और हमें क्या मिलता है। कोई blended billing नहीं, कोई surprise नहीं।",
        metrics: ["अलग बिलिंग", "स्पष्ट डैशबोर्ड", "खुला संवाद"]
      },
      {
        category: "स्पीड",
        result: "7 दिनों में लाइव",
        description: "आपकी वेबसाइट 7 working days में लाइव हो जाती है। Onboarding के कुछ दिनों के भीतर ad campaigns सेट और चालू हो जाते हैं। आपके बिज़नेस की ग्रोथ इंतज़ार नहीं कर सकती।",
        metrics: ["7-दिन वेबसाइट लॉन्च", "तेज़ ad सेटअप", "साप्ताहिक चेक-इन"]
      },
      {
        category: "प्रतिबद्धता",
        result: "हमेशा फाउंडर-लेड",
        description: "आप सीधे फाउंडर से डील करते हैं — कोई ऐसा जो आपके बिज़नेस को अपना समझे। कोई account managers नहीं, कोई hand-offs नहीं, कोई जानकारी अनुवाद में नहीं खोती।",
        metrics: ["सीधी फाउंडर पहुंच", "व्यक्तिगत रणनीति", "24hr रिस्पॉन्स टाइम"]
      },
    ],
  },

  process: {
    title: "हम कैसे काम करते हैं",
    description: "आपके पुणे बिज़नेस को ऑनलाइन बढ़ाने के लिए एक सरल, सिद्ध डिजिटल मार्केटिंग प्रक्रिया।",
    steps: [
      {
        number: "01",
        title: "डिस्कवरी कॉल",
        description: "हम आपका बिज़नेस, लक्ष्य, target customers, और मौजूदा चुनौतियों को समझते हैं — पूरी तरह से मुफ़्त, कोई बाध्यता नहीं।"
      },
      {
        number: "02",
        title: "कस्टम रणनीति",
        description: "हम पुणे मार्केट और उससे आगे आपके बिज़नेस, बजट, और लक्ष्यों के लिए खास तौर पर एक डिजिटल मार्केटिंग प्लान बनाते हैं।"
      },
      {
        number: "03",
        title: "एक्सीक्यूट और लॉन्च",
        description: "हम सब कुछ सेट करते हैं और लाइव करते हैं — वेबसाइट, ads, SEO, content, tracking, और reporting सब एक जगह।"
      },
      {
        number: "04",
        title: "ऑप्टिमाइज़ और ग्रो",
        description: "हम हर हफ्ते monitor, test, और improve करते हैं ताकि आपके परिणाम समय के साथ बेहतर होते रहें।"
      },
    ],
  },

  platformMetrics: [
    { value: "8+", label: "वर्षों का मार्केटिंग अनुभव" },
    { value: "₹5k", label: "Ads शुरू करने के लिए एजेंसी फीस" },
    { value: "Zero", label: "छिपी फीस — कभी नहीं" },
    { value: "24hr", label: "सपोर्ट रिस्पॉन्स टाइम" },
  ],

  pricing: {
    title: "सरल, पारदर्शी मूल्य निर्धारण",
    description: "Ad budget और agency fee हमेशा अलग-अलग दिखाई जाती है। Ads पर कितना खर्च करना है यह आप तय करते हैं — हम सिर्फ अपने काम के लिए चार्ज करते हैं।",
    plans: [
      {
        name: "वेबसाइट पैकेज",
        price: "15,000",
        currency: "₹",
        period: "one-time",
        description: "आपके बिज़नेस को professionally लाइव होने के लिए जो भी चाहिए — 7 working days में",
        features: [
          "5 पेज तक (Home, About, Services, Contact + 1 और)",
          "Mobile responsive डिज़ाइन",
          "आपके email से जुड़ा contact form",
          "Professional custom email (hello@yourbusiness.in)",
          "Google Business Profile सेटअप + Google Maps",
          "SSL certificate (HTTPS) — हमेशा के लिए मुफ़्त",
          "बेसिक SEO सेटअप",
          "Google Analytics जुड़ा हुआ",
          "Leads database — हर enquiry date व details के साथ stored",
          "7 working days में लाइव",
        ],
        note: "इससे आगे कुछ चाहिए? Custom builds आपकी ज़रूरतों के अनुसार बनाए जाते हैं।",
        highlighted: false
      },
      {
        name: "स्टार्टर ऐड्स",
        price: "15,000",
        currency: "₹",
        period: "month",
        description: "Meta या Google पर पूरी मैनेजमेंट के साथ असली ads चलाना शुरू करें — कोई अंदाज़ा नहीं",
        features: [
          "₹10,000 सीधे आपके ad platform (Meta या Google) को जाता है",
          "₹5,000 एजेंसी फीस — हमारी मैनेजमेंट व रणनीति",
          "आपकी पसंद का 1 active ad channel",
          "Ad creative + copywriting शामिल",
          "Audience research व targeting सेटअप",
          "मासिक performance रिपोर्ट",
          "आपके account manager से सीधा WhatsApp एक्सेस",
        ],
        note: "💡 Google Ads में नए हैं? Google पर ₹20,000 खर्च करें और ₹20,000 का मुफ़्त ad credit पाएं — पहले दिन से अपनी reach दोगुनी करें। हमसे पूछें कैसे।",
        highlighted: true
      },
      {
        name: "ग्रोथ",
        price: "35,000",
        currency: "₹",
        period: "month",
        description: "गंभीरता से scale करने के लिए तैयार बिज़नेस के लिए एक कस्टम multi-channel प्लान",
        features: [
          "Meta + Google में बंटा custom ad budget",
          "SEO — on-page ऑप्टिमाइज़ेशन + keyword targeting",
          "सोशल मीडिया मैनेजमेंट (20 posts/month तक)",
          "Campaigns के लिए landing page निर्माण",
          "साप्ताहिक रिपोर्टिंग + मासिक रणनीति कॉल",
          "Retargeting campaigns सेटअप",
          "प्राथमिकता सपोर्ट — तेज़ turnaround",
        ],
        note: "हर Growth प्लान आपके बिज़नेस के अनुसार scope किया जाता है। अंतिम breakdown discovery call पर साझा किया जाता है।",
        highlighted: false
      },
    ],
  },

  testimonial: {
    quote: "हमने अभी-अभी Digital Safalta लॉन्च किया है ताकि आपके जैसे बिज़नेस को ऑनलाइन बढ़ने में मदद मिल सके। हम चाहेंगे कि आप हमारी पहली success stories में से एक बनें — संपर्क करें और चलिए मिलकर कुछ बेहतरीन बनाते हैं।",
    author: "Hussain Patanwala",
    role: "फाउंडर, Digital Safalta — डिजिटल मार्केटिंग एजेंसी, पुणे",
    initials: "HP",
  },

  faqItems: [
    {
      question: "क्या ₹15,000/महीना ad प्लान all-in price है या ad budget अलग से आता है?",
      answer: "₹15,000/महीना Starter प्लान में आपका ad budget पहले से शामिल है। ₹10,000 सीधे आपके चुने हुए ad platform (Meta या Google) को जाता है और ₹5,000 हमारी agency fee है आपके campaigns मैनेज करने के लिए। आप हमेशा दोनों numbers अलग-अलग देखेंगे — हम उन्हें कभी मिलाते नहीं।"
    },
    {
      question: "आपने जो Google Ads free credit offer बताया वह क्या है?",
      answer: "जब आप Google Ads पर अपने पहले ₹20,000 खर्च करते हैं तो Google ₹20,000 का मुफ़्त ad credit देता है। मतलब आपको ₹20,000 खर्च में ₹40,000 की ad reach मिलती है — पहले दिन से आपकी visibility दोगुनी। यह एक सीमित Google promotion है। संपर्क करें और हम आपको बताएंगे इसे कैसे claim करें।"
    },
    {
      question: "क्या ₹15,000 वेबसाइट पैकेज वाकई one-time है? Maintenance का क्या?",
      answer: "हां, ₹15,000 पहले साल के लिए one-time फीस है — जो पैकेज में सब कुछ कवर करती है जैसे custom email, SSL, leads database, और Google सेटअप। पहले साल के बाद, hosting और maintenance costs बहुत कम होती हैं और हम renewal से पहले पारदर्शी रूप से चर्चा करेंगे।"
    },
    {
      question: "मैं किसके साथ काम करूंगा — क्या मैं हमेशा आप तक सीधे पहुंच सकूंगा?",
      answer: "अभी आप सीधे फाउंडर के साथ काम करते हैं। कोई account managers नहीं, कोई hand-offs नहीं। जैसे-जैसे हम बढ़ेंगे, आपका account संभालने वाला कोई भी team member व्यक्तिगत रूप से trained और supervised होगा ताकि वही standard बना रहे। आपके पास हमेशा किसी ऐसे व्यक्ति तक सीधी पहुंच होगी जो आपके बिज़नेस को जानता हो।"
    },
    {
      question: "क्या आप पुणे की एक नई डिजिटल मार्केटिंग एजेंसी हैं? मुझे आप पर भरोसा क्यों करना चाहिए?",
      answer: "हां, हम नए हैं — और यह दरअसल एक ताकत है। आपको एक ऐसा फाउंडर मिलता है जिसके पास 8+ साल का मार्केटिंग अनुभव है और जो व्यक्तिगत रूप से आपके परिणामों में निवेशित है, न कि कोई जूनियर एग्जीक्यूटिव जो 50 clients संभाल रहा हो। हम एक समय में एक पुणे बिज़नेस के साथ अपनी प्रतिष्ठा बना रहे हैं, और आपकी सफलता हमारी सबसे अच्छी मार्केटिंग है।"
    },
    {
      question: "डिजिटल मार्केटिंग से परिणाम दिखने में कितना समय लगता है?",
      answer: "Paid ads पहले 2-4 हफ्तों के भीतर परिणाम दिखा सकते हैं। SEO आमतौर पर Google पर परिणाम दिखाने में 3-6 महीने लेता है। हम शुरू से ही ईमानदार उम्मीदें सेट करते हैं और आपको नियमित updates देते हैं ताकि आपको हमेशा पता रहे कि आपके बजट के साथ क्या हो रहा है।"
    },
    {
      question: "क्या कोई minimum contract period है?",
      answer: "हम 3-महीने के minimum से शुरू करते हैं ताकि हमारे पास असली परिणाम दिखाने का पर्याप्त समय हो। उसके बाद, यह month-to-month है। हम मानते हैं कि हमें हर महीने आपका बिज़नेस कमाना चाहिए, आपको बांधना नहीं।"
    },
    {
      question: "आप पुणे में किस तरह के बिज़नेस के साथ काम करते हैं?",
      answer: "हम पुणे और महाराष्ट्र भर के छोटे और बढ़ते बिज़नेस के साथ काम करते हैं — local services, e-commerce, coaching, real estate, hospitality, restaurants, और भी बहुत कुछ। अगर आपके पास कोई product या service है और आप ऑनलाइन और customers चाहते हैं, तो हम मदद कर सकते हैं।"
    },
  ],

  contact: {
    title: "चलिए आपके बिज़नेस के बारे में बात करते हैं",
    description: "हमें अपने बिज़नेस और लक्ष्यों के बारे में बताएं। हम 24 घंटों के भीतर ईमानदार सलाह के साथ वापस आएंगे — चाहे हम साथ काम करें या नहीं।",
    formPlaceholder: {
      name: "आपका नाम",
      email: "आपका ईमेल",
      company: "बिज़नेस का नाम",
      message: "अपने बिज़नेस के बारे में बताएं और आप क्या हासिल करना चाहते हैं..."
    },
    buttonText: "बातचीत शुरू करें",
    responseTime: "हम 24 घंटों के भीतर जवाब देते हैं — आमतौर पर बहुत जल्दी।",
  },

  footer: {
    description: "पुणे की डिजिटल मार्केटिंग एजेंसी जो बढ़ते बिज़नेस को ऑनलाइन सफल होने में मदद करती है — ईमानदारी और प्रभावी ढंग से।",
    servicesList: ["परफॉर्मेंस ऐड्स", "SEO", "सोशल मीडिया", "वेबसाइट डिज़ाइन"],
    companyList: ["हमारे बारे में", "हमारी प्रक्रिया", "मूल्य", "संपर्क करें"],
    contact: {
      email: "hello@digitalsafalta.in",
      location: "पुणे, महाराष्ट्र · पूरे भारत में क्लाइंट्स को सेवा"
    },
    copyright: "© 2026 Digital Safalta. सर्वाधिकार सुरक्षित।",
  },

  heroImageId: "3184291",

  seo: {
    home: {
      title: "Digital Safalta - पुणे में डिजिटल मार्केटिंग एजेंसी",
      description: "Digital Safalta पुणे के छोटे और बढ़ते बिज़नेस को ऑनलाइन पहचान बनाने, असरदार ad campaigns चलाने, और visitors को paying customers में बदलने में मदद करता है। वेबसाइट डिज़ाइन, SEO, Google व Meta Ads।",
    },
    about: {
      title: "हमारे बारे में - हमारा दृष्टिकोण और प्रक्रिया | Digital Safalta",
      description: "जानें कि Digital Safalta पुणे के बिज़नेस के साथ कैसे काम करता है — ईमानदार, फाउंडर-लेड डिजिटल मार्केटिंग जो असली परिणामों पर केंद्रित है, vanity metrics पर नहीं। हमारा दृष्टिकोण और प्रक्रिया समझाई गई।",
    },
    services: {
      title: "हमारी सेवाएं - वेबसाइट डिज़ाइन, SEO व Ads | Digital Safalta",
      description: "पुणे के बिज़नेस के लिए Digital Safalta की डिजिटल मार्केटिंग सेवाएं देखें: वेबसाइट डिज़ाइन, Google व Meta ads, SEO, सोशल मीडिया मैनेजमेंट, लैंडिंग पेजेस, ब्रांडिंग और बहुत कुछ।",
    },
    pricing: {
      title: "मूल्य - वेबसाइट व डिजिटल मार्केटिंग प्लान | Digital Safalta",
      description: "पुणे में वेबसाइट डिज़ाइन और डिजिटल मार्केटिंग के लिए पारदर्शी मूल्य निर्धारण। ₹15,000 का one-time वेबसाइट पैकेज, ₹15,000/महीना से शुरू होने वाले ad management प्लान, कोई छिपी फीस नहीं।",
    },
    contact: {
      title: "संपर्क करें - मुफ़्त परामर्श पाएं | Digital Safalta",
      description: "मुफ़्त, बिना किसी बाध्यता के डिजिटल मार्केटिंग परामर्श के लिए Digital Safalta से संपर्क करें। हम 24 घंटों के भीतर जवाब देते हैं। पुणे, महाराष्ट्र — पूरे भारत में क्लाइंट्स को सेवा।",
    },
  },
};
