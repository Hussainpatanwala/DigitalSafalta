import { BlogPost } from '../../components/BlogPost';
import { Link } from 'react-router-dom';

type Lang = 'en' | 'hi' | 'mr';

const COPY = {
  en: {
    title: 'How Much Does a Website Cost in Pune? (Honest Answer for 2026)',
    description:
      "Prices range from ₹3,000 to ₹3,00,000 — and that range means nothing. Here's what actually determines website cost, what you get at each price point, and how to avoid getting ripped off.",
    date: 'June 16, 2026',
    readTime: '6 min',
    category: 'Pricing Guide',
    p1: "If you've asked \"how much does a website cost in Pune?\" and got wildly different answers from different people, you're not alone. One freelancer quotes ₹5,000. An agency quotes ₹1,50,000. Someone on Fiverr says ₹2,000. What's going on?",
    p2: "The honest answer is: website pricing in India is all over the place, and most quotes you receive don't tell you what you're actually getting. This article breaks it down clearly so you can make a smart decision.",
    h2_why: 'Why the Price Range Is So Wide',
    p3: "A website can be anything from a single page with your name and phone number, to a full e-commerce store that processes thousands of orders a day. Of course those cost different amounts. The problem is that most people asking \"how much does a website cost\" actually want something in between — and don't know how to evaluate what they're being quoted.",
    h2_price: 'What You Get at Each Price Point',
    h3_low: '₹2,000 – ₹8,000',
    p4: "At this price, you're typically getting a template-based website built by a student or very junior freelancer with no customisation, no SEO setup, no professional email, no SSL certificate (the padlock in the browser), and no support after delivery. It may look okay for a week, then break. You'll own something you can't update and nobody to call when it stops working.",
    p4v: '<strong>Verdict:</strong> Not recommended for a real business. You\'ll pay more to fix it later than if you\'d done it right the first time.',
    h3_mid: '₹10,000 – ₹25,000',
    p5: "This is the range where genuine, professional websites for small businesses live. At this price point from a reliable provider, you should expect: a mobile-responsive design, up to 5 pages, SSL certificate, professional email (yourname@yourbusiness.in), basic SEO setup, Google Analytics, contact form, and Google Maps integration.",
    p5v: "This is what most Pune small businesses actually need — and it's the range we work in at Digital Safalta. Our standard package is <strong>₹15,000 one-time</strong> for the first year, with everything included.",
    h3_high: '₹30,000 – ₹80,000',
    p6: "At this level you're getting a custom-designed website (not a template), advanced features, possibly a content management system (CMS) so you can update the site yourself, e-commerce capability, or custom integrations. Suitable for businesses with specific functional requirements or a larger brand presence.",
    h3_enterprise: '₹1,00,000+',
    p7: "Enterprise-level websites, large e-commerce stores, custom web applications, or multi-language platforms. Not relevant for most Pune small businesses starting out.",
    h2_included: 'What Should Always Be Included (Red Flags If Missing)',
    p8: 'Regardless of price, any professional website quote should include:',
    li_ssl: '<strong>SSL certificate</strong> (the padlock — HTTPS) — free with most hosts, no excuse to not include it',
    li_mobile: '<strong>Mobile responsive design</strong> — over 80% of Indian users browse on mobile',
    li_seo: '<strong>Basic SEO setup</strong> — page titles, meta descriptions, Google submission',
    li_contact: '<strong>Contact form</strong> — so visitors can reach you directly from the site',
    li_analytics: '<strong>Google Analytics</strong> — so you can see who\'s visiting',
    li_ownership: '<strong>Clear ownership</strong> — you should own the domain, hosting account, and all files',
    h2_questions: 'Questions to Ask Before Paying Anyone',
    li_q1: 'Who will own the domain after you build it — me or you?',
    li_q2: 'What happens if I want changes after launch — is there a charge?',
    li_q3: 'Will the website work on mobile?',
    li_q4: 'Is hosting included, and for how long?',
    li_q5: 'Will you set up Google Analytics and Search Console?',
    li_q6: "What's the timeline from payment to going live?",
    p9: 'Any professional provider should answer all of these without hesitation. Vague answers ("depends", "we\'ll see", "that\'s extra") are red flags.',
    h2_hidden: 'Hidden Costs to Watch For',
    p10: "Some providers quote a low upfront price and then charge separately for things that should be included:",
    li_h1: "Domain registration (should cost ₹800-₹1,500/year — not ₹5,000)",
    li_h2: "Hosting fees (should be transparent — roughly ₹3,000-₹8,000/year for good hosting)",
    li_h3: "SSL certificate (should be free — Let's Encrypt is free for everyone)",
    li_h4: "Email setup (professional email at your domain should be included or very low cost)",
    li_h5: "Maintenance fees that lock you in and charge for every small update",
    h2_rec: 'Our Honest Recommendation',
    p11_pre: "For most Pune small businesses, a well-built website in the <strong>₹12,000–₹20,000 range</strong> covers everything you need to launch professionally and start getting found online. Don't underspend (the ₹3,000 website will cost you more in the long run) and don't overspend until you have revenue to justify it.",
    p12_pre: "At Digital Safalta, our website package is <strong>₹15,000 one-time for the first year</strong> — and that includes everything listed above, delivered in 7 working days. No hidden fees, no maintenance lock-in, no surprises. See exactly what's included on our",
    p12_link: 'pricing page',
    p12_end: '.',
    h2_bottom: 'Bottom Line',
    p13: "A good website for a Pune small business costs between ₹12,000 and ₹25,000 done properly. Anything below ₹8,000 should raise serious questions. Anything above ₹50,000 needs a very clear justification based on your specific functional needs.",
    p14: "The most important thing isn't the cheapest or most expensive option — it's a website that actually works, loads fast on mobile, appears on Google, and converts visitors into customers. That's what matters for your business.",
  },
  hi: {
    title: 'पुणे में वेबसाइट बनाने में कितना खर्च आता है? (2026 के लिए ईमानदार जवाब)',
    description:
      'कीमतें ₹3,000 से ₹3,00,000 तक हैं — और यह सीमा कुछ नहीं बताती। यह लेख बताता है कि वेबसाइट की लागत असल में क्या तय करती है, हर कीमत पर क्या मिलता है, और ठगे जाने से कैसे बचें।',
    date: '16 जून 2026',
    readTime: '6 मिनट',
    category: 'मूल्य निर्धारण गाइड',
    p1: 'अगर आपने "पुणे में वेबसाइट बनाने में कितना खर्च आता है?" पूछा है और अलग-अलग लोगों से बिल्कुल अलग जवाब मिले हैं, तो आप अकेले नहीं हैं। एक फ्रीलांसर ₹5,000 कोट करता है। एक एजेंसी ₹1,50,000। Fiverr पर कोई ₹2,000 कहता है। यह क्यों?',
    p2: 'ईमानदार जवाब यह है: भारत में वेबसाइट की कीमतें बिल्कुल अनिश्चित हैं, और अधिकांश कोटेशन आपको यह नहीं बताते कि आप वास्तव में क्या पा रहे हैं। यह लेख इसे स्पष्ट रूप से समझाता है ताकि आप एक समझदार निर्णय ले सकें।',
    h2_why: 'कीमतों में इतना अंतर क्यों है',
    p3: 'एक वेबसाइट आपके नाम और फोन नंबर वाले एक पेज से लेकर हजारों ऑर्डर प्रतिदिन प्रोसेस करने वाले पूर्ण ई-कॉमर्स स्टोर तक कुछ भी हो सकती है। निश्चित रूप से इनकी कीमत अलग होगी। समस्या यह है कि "वेबसाइट में कितना खर्च आता है" पूछने वाले अधिकांश लोग वास्तव में इन दोनों के बीच कुछ चाहते हैं — और यह नहीं जानते कि कोटेशन का मूल्यांकन कैसे करें।',
    h2_price: 'हर कीमत पर आपको क्या मिलता है',
    h3_low: '₹2,000 – ₹8,000',
    p4: 'इस कीमत पर, आपको आमतौर पर एक टेम्पलेट-आधारित वेबसाइट मिलती है जो किसी छात्र या बहुत जूनियर फ्रीलांसर ने बनाई हो — बिना कस्टमाइज़ेशन, बिना SEO सेटअप, बिना प्रोफेशनल ईमेल, बिना SSL सर्टिफिकेट (ब्राउज़र में लॉक) और डिलीवरी के बाद कोई सपोर्ट नहीं। शायद एक हफ्ते ठीक लगे, फिर टूट जाए।',
    p4v: '<strong>निष्कर्ष:</strong> एक वास्तविक व्यवसाय के लिए अनुशंसित नहीं। बाद में ठीक करने में उतना खर्च आएगा जितना पहली बार सही तरीके से करने में आता।',
    h3_mid: '₹10,000 – ₹25,000',
    p5: 'यही वह श्रेणी है जहां छोटे व्यवसायों के लिए असली, पेशेवर वेबसाइट बनती हैं। एक विश्वसनीय प्रदाता से इस कीमत पर आपको मिलना चाहिए: मोबाइल-रिस्पॉन्सिव डिज़ाइन, 5 तक पेज, SSL सर्टिफिकेट, प्रोफेशनल ईमेल, बेसिक SEO सेटअप, Google Analytics, कॉन्टैक्ट फॉर्म और Google Maps।',
    p5v: 'अधिकांश पुणे के छोटे व्यवसायों को वास्तव में यही चाहिए — और Digital Safalta में हम इसी श्रेणी में काम करते हैं। हमारा मानक पैकेज पहले वर्ष के लिए <strong>₹15,000 एकमुश्त</strong> है, सब कुछ शामिल।',
    h3_high: '₹30,000 – ₹80,000',
    p6: 'इस स्तर पर आपको कस्टम-डिज़ाइन वेबसाइट (टेम्पलेट नहीं), उन्नत सुविधाएं, कंटेंट मैनेजमेंट सिस्टम (CMS), ई-कॉमर्स क्षमता, या कस्टम इंटीग्रेशन मिलते हैं। विशिष्ट कार्यात्मक आवश्यकताओं वाले व्यवसायों के लिए उपयुक्त।',
    h3_enterprise: '₹1,00,000+',
    p7: 'एंटरप्राइज़-स्तरीय वेबसाइट, बड़े ई-कॉमर्स स्टोर, कस्टम वेब एप्लिकेशन। शुरुआत कर रहे अधिकांश पुणे के छोटे व्यवसायों के लिए प्रासंगिक नहीं।',
    h2_included: 'क्या हमेशा शामिल होना चाहिए (अनुपस्थिति खतरे का संकेत है)',
    p8: 'कीमत चाहे जो हो, किसी भी पेशेवर वेबसाइट कोटेशन में शामिल होना चाहिए:',
    li_ssl: '<strong>SSL सर्टिफिकेट</strong> (लॉक — HTTPS) — अधिकांश होस्ट के साथ मुफ़्त, न शामिल करने का कोई बहाना नहीं',
    li_mobile: '<strong>मोबाइल रिस्पॉन्सिव डिज़ाइन</strong> — 80% से अधिक भारतीय उपयोगकर्ता मोबाइल पर ब्राउज़ करते हैं',
    li_seo: '<strong>बेसिक SEO सेटअप</strong> — पेज टाइटल, मेटा विवरण, Google सबमिशन',
    li_contact: '<strong>कॉन्टैक्ट फॉर्म</strong> — ताकि विज़िटर सीधे साइट से आपसे संपर्क कर सकें',
    li_analytics: '<strong>Google Analytics</strong> — ताकि आप देख सकें कि कौन विज़िट कर रहा है',
    li_ownership: '<strong>स्पष्ट स्वामित्व</strong> — डोमेन, होस्टिंग खाता और सभी फाइलें आपकी होनी चाहिए',
    h2_questions: 'भुगतान से पहले पूछे जाने वाले सवाल',
    li_q1: 'बनाने के बाद डोमेन किसका होगा — मेरा या आपका?',
    li_q2: 'लॉन्च के बाद बदलाव चाहिए तो क्या चार्ज लगेगा?',
    li_q3: 'क्या वेबसाइट मोबाइल पर काम करेगी?',
    li_q4: 'होस्टिंग शामिल है, और कितने समय के लिए?',
    li_q5: 'क्या आप Google Analytics और Search Console सेट करेंगे?',
    li_q6: 'भुगतान से लाइव होने तक कितना समय लगेगा?',
    p9: 'किसी भी पेशेवर प्रदाता को इन सभी का जवाब बिना झिझक देना चाहिए। अस्पष्ट जवाब ("निर्भर करता है", "देखते हैं", "यह अलग होगा") खतरे के संकेत हैं।',
    h2_hidden: 'छिपी हुई लागतें जिन पर नज़र रखें',
    p10: 'कुछ प्रदाता कम अग्रिम कीमत कोट करते हैं और फिर उन चीज़ों के लिए अलग से चार्ज करते हैं जो शामिल होनी चाहिए:',
    li_h1: 'डोमेन पंजीकरण (₹800-₹1,500/वर्ष होना चाहिए — ₹5,000 नहीं)',
    li_h2: 'होस्टिंग शुल्क (पारदर्शी होना चाहिए — अच्छी होस्टिंग के लिए लगभग ₹3,000-₹8,000/वर्ष)',
    li_h3: "SSL सर्टिफिकेट (मुफ़्त होना चाहिए — Let's Encrypt सभी के लिए मुफ़्त है)",
    li_h4: 'ईमेल सेटअप (आपके डोमेन पर प्रोफेशनल ईमेल शामिल होना चाहिए या बहुत कम खर्च)',
    li_h5: 'रखरखाव शुल्क जो आपको बंधे रखें और हर छोटे बदलाव के लिए चार्ज करें',
    h2_rec: 'हमारी ईमानदार सिफारिश',
    p11_pre: 'अधिकांश पुणे के छोटे व्यवसायों के लिए, <strong>₹12,000-₹20,000 की श्रेणी</strong> में अच्छी तरह बनाई गई वेबसाइट वह सब कवर करती है जो आपको पेशेवर रूप से लॉन्च करने और ऑनलाइन मिलने के लिए चाहिए।',
    p12_pre: 'Digital Safalta में, हमारा वेबसाइट पैकेज <strong>पहले वर्ष के लिए ₹15,000 एकमुश्त</strong> है — और इसमें ऊपर सूचीबद्ध सब कुछ शामिल है, 7 कार्यदिवसों में डिलीवरी। कोई छिपी हुई फीस नहीं। हमारा',
    p12_link: 'मूल्य निर्धारण पृष्ठ',
    p12_end: 'देखें।',
    h2_bottom: 'सारांश',
    p13: 'पुणे के एक छोटे व्यवसाय के लिए एक अच्छी वेबसाइट सही तरीके से बनाने पर ₹12,000 से ₹25,000 के बीच खर्च होती है। ₹8,000 से कम कुछ भी गंभीर सवाल उठाना चाहिए। ₹50,000 से ऊपर कुछ भी आपकी विशिष्ट कार्यात्मक आवश्यकताओं पर आधारित बहुत स्पष्ट औचित्य की ज़रूरत है।',
    p14: 'सबसे महत्वपूर्ण बात सबसे सस्ता या सबसे महंगा विकल्प नहीं है — बल्कि एक वेबसाइट है जो वास्तव में काम करती है, मोबाइल पर तेज़ी से लोड होती है, Google पर दिखाई देती है और विज़िटर को ग्राहक बनाती है। यही आपके व्यवसाय के लिए मायने रखता है।',
  },
  mr: {
    title: 'पुण्यात वेबसाइट बनवण्यासाठी किती खर्च येतो? (2026 साठी प्रामाणिक उत्तर)',
    description:
      'किंमती ₹3,000 ते ₹3,00,000 पर्यंत आहेत — आणि त्या श्रेणीचा काही अर्थ नाही. वेबसाइटची किंमत खरोखर काय ठरवते, प्रत्येक किंमतीला काय मिळते आणि फसवणूक कशी टाळावी हे हे लेख सांगतो.',
    date: '16 जून 2026',
    readTime: '6 मिनिटे',
    category: 'किंमत मार्गदर्शन',
    p1: '"पुण्यात वेबसाइट बनवण्यासाठी किती खर्च येतो?" असे विचारले आणि वेगवेगळ्या लोकांकडून पूर्णपणे वेगळी उत्तरे मिळाली, तर तुम्ही एकटे नाही. एक फ्रीलान्सर ₹5,000 सांगतो. एजन्सी ₹1,50,000. Fiverr वर कोणी ₹2,000 म्हणतो. हे का?',
    p2: 'प्रामाणिक उत्तर हे आहे: भारतात वेबसाइट किंमती पूर्णपणे अनिश्चित आहेत, आणि बहुतेक कोटेशन तुम्हाला नक्की काय मिळते हे सांगत नाहीत. हे लेख ते स्पष्टपणे समजावतो जेणेकरून तुम्ही योग्य निर्णय घेऊ शकाल.',
    h2_why: 'किंमतींमध्ये एवढा फरक का आहे',
    p3: 'वेबसाइट म्हणजे तुमचे नाव आणि फोन नंबर असलेल्या एका पानापासून ते दिवसाला हजारो ऑर्डर प्रक्रिया करणाऱ्या पूर्ण ई-कॉमर्स स्टोरपर्यंत काहीही असू शकते. नक्कीच त्यांच्या किंमती वेगळ्या असतील. समस्या ही आहे की "वेबसाइटला किती खर्च येतो" विचारणाऱ्या बहुतेकांना या दोघांमधले काहीतरी हवे असते — आणि त्यांना कोटेशनचे मूल्यांकन कसे करावे हे माहित नसते.',
    h2_price: 'प्रत्येक किंमतीला काय मिळते',
    h3_low: '₹2,000 – ₹8,000',
    p4: 'या किंमतीला साधारणपणे एखाद्या विद्यार्थ्याने किंवा अतिशय नवशिक्या फ्रीलान्सरने बनवलेली टेम्प्लेट-आधारित वेबसाइट मिळते — कोणतेही सानुकूलन नाही, SEO सेटअप नाही, व्यावसायिक ईमेल नाही, SSL प्रमाणपत्र नाही (ब्राउझरमधील कुलूप) आणि डिलिव्हरीनंतर कोणताही आधार नाही.',
    p4v: '<strong>निष्कर्ष:</strong> खऱ्या व्यवसायासाठी शिफारस केलेले नाही. नंतर दुरुस्त करण्यात पहिल्यांदा योग्यरित्या केल्यापेक्षा जास्त खर्च होईल.',
    h3_mid: '₹10,000 – ₹25,000',
    p5: 'लहान व्यवसायांसाठी खऱ्या, व्यावसायिक वेबसाइट याच श्रेणीत असतात. विश्वासार्ह प्रदात्याकडून या किंमतीत मिळायला हवे: मोबाइल-रिस्पॉन्सिव्ह डिझाइन, 5 पर्यंत पाने, SSL प्रमाणपत्र, व्यावसायिक ईमेल, मूलभूत SEO सेटअप, Google Analytics, संपर्क फॉर्म आणि Google Maps.',
    p5v: 'बहुतेक पुण्यातील लहान व्यवसायांना नक्की हेच हवे असते — आणि Digital Safalta मध्ये आम्ही याच श्रेणीत काम करतो. आमचे मानक पॅकेज पहिल्या वर्षासाठी <strong>₹15,000 एकरकमी</strong> आहे, सर्व काही समाविष्ट.',
    h3_high: '₹30,000 – ₹80,000',
    p6: 'या स्तरावर सानुकूल-डिझाइन वेबसाइट (टेम्प्लेट नाही), प्रगत वैशिष्ट्ये, कंटेंट मॅनेजमेंट सिस्टम (CMS), ई-कॉमर्स क्षमता किंवा सानुकूल एकत्रीकरण मिळते. विशिष्ट कार्यात्मक गरजा असलेल्या व्यवसायांसाठी योग्य.',
    h3_enterprise: '₹1,00,000+',
    p7: 'एंटरप्राइझ-स्तरीय वेबसाइट, मोठे ई-कॉमर्स स्टोर, सानुकूल वेब अनुप्रयोग. सुरुवात करणाऱ्या बहुतेक पुण्यातील लहान व्यवसायांसाठी संबंधित नाही.',
    h2_included: 'नेहमी काय समाविष्ट असावे (नसल्यास धोक्याचे चिन्ह)',
    p8: 'किंमत काहीही असो, कोणत्याही व्यावसायिक वेबसाइट कोटेशनमध्ये समाविष्ट असावे:',
    li_ssl: '<strong>SSL प्रमाणपत्र</strong> (कुलूप — HTTPS) — बहुतेक होस्टसह विनामूल्य, न समाविष्ट करण्याचे कोणतेही कारण नाही',
    li_mobile: '<strong>मोबाइल रिस्पॉन्सिव्ह डिझाइन</strong> — 80% पेक्षा जास्त भारतीय वापरकर्ते मोबाइलवर ब्राउझ करतात',
    li_seo: '<strong>मूलभूत SEO सेटअप</strong> — पान शीर्षके, मेटा विवरणे, Google सादरीकरण',
    li_contact: '<strong>संपर्क फॉर्म</strong> — जेणेकरून अभ्यागत साइटवरून थेट तुमच्याशी संपर्क करू शकतील',
    li_analytics: '<strong>Google Analytics</strong> — जेणेकरून तुम्ही पाहू शकता कोण भेट देत आहे',
    li_ownership: '<strong>स्पष्ट मालकी</strong> — डोमेन, होस्टिंग खाते आणि सर्व फाइल्स तुमच्या असाव्यात',
    h2_questions: 'कोणाला पैसे देण्यापूर्वी विचारायचे प्रश्न',
    li_q1: 'बनवल्यानंतर डोमेन कोणाचे होईल — माझे की तुमचे?',
    li_q2: 'लॉन्चनंतर बदल हवे असल्यास शुल्क आहे का?',
    li_q3: 'वेबसाइट मोबाइलवर काम करेल का?',
    li_q4: 'होस्टिंग समाविष्ट आहे का, आणि किती काळासाठी?',
    li_q5: 'तुम्ही Google Analytics आणि Search Console सेट कराल का?',
    li_q6: 'पैसे दिल्यापासून लाइव्ह होण्यापर्यंत किती वेळ लागेल?',
    p9: 'कोणत्याही व्यावसायिक प्रदात्याने या सर्वांची उत्तरे संकोच न करता द्यायला हवीत. अस्पष्ट उत्तरे ("अवलंबून आहे", "बघू", "ते अतिरिक्त आहे") धोक्याची चिन्हे आहेत.',
    h2_hidden: 'लपलेल्या खर्चांवर लक्ष ठेवा',
    p10: 'काही प्रदाते कमी आगाऊ किंमत सांगतात आणि नंतर समाविष्ट असायला हव्या त्या गोष्टींसाठी स्वतंत्र आकारतात:',
    li_h1: 'डोमेन नोंदणी (₹800-₹1,500/वर्ष असायला हवे — ₹5,000 नाही)',
    li_h2: 'होस्टिंग शुल्क (पारदर्शक असावे — चांगल्या होस्टिंगसाठी साधारण ₹3,000-₹8,000/वर्ष)',
    li_h3: "SSL प्रमाणपत्र (विनामूल्य असावे — Let's Encrypt सर्वांसाठी विनामूल्य आहे)",
    li_h4: 'ईमेल सेटअप (तुमच्या डोमेनवर व्यावसायिक ईमेल समाविष्ट असावे किंवा खूप कमी खर्च)',
    li_h5: 'देखभाल शुल्क जे तुम्हाला बांधतात आणि प्रत्येक छोट्या बदलासाठी आकारतात',
    h2_rec: 'आमची प्रामाणिक शिफारस',
    p11_pre: 'बहुतेक पुण्यातील लहान व्यवसायांसाठी, <strong>₹12,000-₹20,000 श्रेणीत</strong> चांगल्या प्रकारे बनवलेली वेबसाइट व्यावसायिकरित्या लॉन्च करण्यासाठी आणि ऑनलाइन सापडण्यासाठी आवश्यक ते सर्व कव्हर करते.',
    p12_pre: 'Digital Safalta मध्ये, आमचे वेबसाइट पॅकेज <strong>पहिल्या वर्षासाठी ₹15,000 एकरकमी</strong> आहे — वर सूचीबद्ध सर्व काही समाविष्ट, 7 कामाच्या दिवसांत डिलिव्हरी. कोणतेही लपलेले शुल्क नाही. आमचे',
    p12_link: 'किंमत पृष्ठ',
    p12_end: 'पाहा.',
    h2_bottom: 'सारांश',
    p13: 'पुण्यातील लहान व्यवसायासाठी योग्यरित्या बनवलेली चांगली वेबसाइट ₹12,000 ते ₹25,000 दरम्यान खर्च येते. ₹8,000 पेक्षा कमी कशाबद्दलही गंभीर प्रश्न विचारायला हवेत. ₹50,000 पेक्षा जास्त कशाला तुमच्या विशिष्ट कार्यात्मक गरजांवर आधारित अतिशय स्पष्ट औचित्य लागते.',
    p14: 'सर्वात महत्त्वाची गोष्ट सर्वात स्वस्त किंवा सर्वात महाग पर्याय नाही — ती एक वेबसाइट आहे जी खरोखरच काम करते, मोबाइलवर जलद लोड होते, Google वर दिसते आणि अभ्यागतांना ग्राहकांमध्ये रूपांतरित करते. तुमच्या व्यवसायासाठी हेच महत्त्वाचे आहे.',
  },
};

interface Props {
  lang?: Lang;
}

export function WebsiteCostPune({ lang = 'en' }: Props) {
  const c = COPY[lang];
  return (
    <BlogPost
      title={c.title}
      description={c.description}
      date={c.date}
      readTime={c.readTime}
      category={c.category}
    >
      <p>{c.p1}</p>
      <p>{c.p2}</p>

      <h2>{c.h2_why}</h2>
      <p>{c.p3}</p>

      <h2>{c.h2_price}</h2>
      <h3>{c.h3_low}</h3>
      <p>{c.p4}</p>
      <p dangerouslySetInnerHTML={{ __html: c.p4v }} />
      <h3>{c.h3_mid}</h3>
      <p>{c.p5}</p>
      <p dangerouslySetInnerHTML={{ __html: c.p5v }} />
      <h3>{c.h3_high}</h3>
      <p>{c.p6}</p>
      <h3>{c.h3_enterprise}</h3>
      <p>{c.p7}</p>

      <h2>{c.h2_included}</h2>
      <p>{c.p8}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_ssl }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_mobile }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_seo }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_contact }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_analytics }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_ownership }} />
      </ul>

      <h2>{c.h2_questions}</h2>
      <ul>
        <li>{c.li_q1}</li>
        <li>{c.li_q2}</li>
        <li>{c.li_q3}</li>
        <li>{c.li_q4}</li>
        <li>{c.li_q5}</li>
        <li>{c.li_q6}</li>
      </ul>
      <p>{c.p9}</p>

      <h2>{c.h2_hidden}</h2>
      <p>{c.p10}</p>
      <ul>
        <li>{c.li_h1}</li>
        <li>{c.li_h2}</li>
        <li>{c.li_h3}</li>
        <li>{c.li_h4}</li>
        <li>{c.li_h5}</li>
      </ul>

      <h2>{c.h2_rec}</h2>
      <p dangerouslySetInnerHTML={{ __html: c.p11_pre }} />
      <p>
        <span dangerouslySetInnerHTML={{ __html: c.p12_pre }} />{' '}
        <Link to="/pricing">{c.p12_link}</Link>
        {c.p12_end}
      </p>

      <h2>{c.h2_bottom}</h2>
      <p>{c.p13}</p>
      <p>{c.p14}</p>
    </BlogPost>
  );
}
