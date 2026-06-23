import { BlogPost } from '../../components/BlogPost';
import { Link } from 'react-router-dom';

type Lang = 'en' | 'hi' | 'mr';

const COPY = {
  en: {
    title: 'What is a Website and Why Does Your Pune Business Need One in 2026?',
    description:
      "Your business exists. Your customers are online. But without a website, they can't find you. Here's a plain-English explanation of what a website is and why it's the foundation of every digital marketing effort.",
    date: 'June 16, 2026',
    readTime: '5 min',
    category: 'Beginner Guide',
    p1: "If someone hears about your business today and wants to know more — what do they do? They Google you. If nothing comes up, or if what comes up looks unprofessional, you've likely lost that potential customer before they ever contacted you.",
    p2: "A website is how you control what people find when they search for your business. This guide explains what a website actually is and why it matters for your Pune business in 2026.",
    h2_what: 'What is a Website, Simply Explained?',
    p3: "A website is a collection of pages on the internet that belong to your business. It has its own address (called a domain — like digitalsafalta.in), and anyone in the world can visit it by typing that address into their browser or finding it through Google.",
    p4: "Think of it as your business's permanent home on the internet — open 24 hours a day, 7 days a week, visible to anyone searching for what you offer.",
    h2_contains: 'What Does a Business Website Typically Contain?',
    p5: 'For a Pune small business, a professional website usually has:',
    li_home: '<strong>Home page</strong> — who you are, what you do, and why someone should choose you',
    li_services: '<strong>Services page</strong> — what you offer in detail, with pricing if relevant',
    li_about: '<strong>About page</strong> — your story, your team, why you started the business',
    li_contact: '<strong>Contact page</strong> — phone number, email, WhatsApp link, enquiry form, map',
    li_testimonials: "<strong>Testimonials or reviews</strong> — what past customers say about you",
    p6: "That's the foundation — 4 to 5 pages is enough for most small businesses to start with.",
    h2_why: 'Why Does Your Business Need a Website in 2026?',
    h3_google: '1. People Google Everything Before Buying',
    p7: "Before visiting a shop, booking a service, or hiring a professional, most people search Google first. If you don't appear in that search — or if your result looks unprofessional — they go to whoever does appear. A website is how you show up.",
    h3_cred: '2. Credibility and Trust',
    p8: "A business without a website in 2026 raises an immediate question: is this real? Customers, especially younger ones, expect a website. It's a trust signal — it tells people you're established, serious, and worth their time and money.",
    h3_sleep: '3. It Works While You Sleep',
    p9: "Your shop closes at 9pm. Your website doesn't. Someone researching options at midnight can read about your business, see your pricing, and fill out an enquiry form — all without you being available. You wake up to a lead.",
    h3_foundation: '4. Foundation for All Digital Marketing',
    p10: "Every other form of digital marketing points back to your website. When you run Google Ads, the click lands on your website. When someone sees your Instagram post and wants to know more, they visit your website. When someone searches your business name, your website appears. Without a website, every other marketing effort has nowhere to send people.",
    h3_own: "5. Your Own Space — Not Rented",
    p11: "Many business owners rely entirely on an Instagram page or a JustDial listing. But you don't own those platforms. Instagram can change its algorithm tomorrow and your visibility disappears. JustDial can remove your listing. Your website — your domain, your hosting, your content — belongs to you permanently.",
    h2_whatsapp: 'What About a WhatsApp Business Account — Is That Enough?',
    p12: "WhatsApp Business is a great tool for communicating with existing customers and responding to enquiries. But it doesn't help new customers discover you. Someone searching Google for your service can't find your WhatsApp number — they can only find your website (or your Google Business Profile, which also links to your website).",
    p13: "Use WhatsApp Business and a website together — they serve different purposes.",
    h2_cost: 'How Much Does a Website Cost?',
    p14: "For a professional business website in Pune, expect ₹12,000–₹25,000 as a one-time cost done properly. We've written a detailed guide on this — read our article on",
    p14_link: 'how much a website costs in Pune',
    p14_end: 'for a full breakdown.',
    p15_pre: 'At Digital Safalta, our standard website package is',
    p15_link: '₹15,000 one-time for the first year',
    p15_end: '— mobile-responsive, fast, with professional email, SSL, Google Analytics, and Google Maps, live in 7 working days.',
    h2_bottom: 'Bottom Line',
    p16: "A website is not optional for a business in 2026 — it's the minimum entry point for being taken seriously online. It's your 24/7 salesperson, your credibility signal, and the foundation that every other marketing effort builds on.",
    p17: "If you don't have one yet, or if your current website looks outdated or unprofessional, that's the first thing to fix — before ads, before SEO, before social media. Everything else works better once the foundation is solid.",
  },
  hi: {
    title: '2026 में पुणे के आपके व्यवसाय को वेबसाइट की ज़रूरत क्यों है?',
    description:
      'आपका व्यवसाय है। आपके ग्राहक ऑनलाइन हैं। लेकिन बिना वेबसाइट के वे आपको नहीं ढूंढ सकते। यह गाइड सरल भाषा में बताती है कि वेबसाइट क्या है और यह डिजिटल मार्केटिंग की नींव क्यों है।',
    date: '16 जून 2026',
    readTime: '5 मिनट',
    category: 'शुरुआती गाइड',
    p1: 'अगर आज कोई आपके व्यवसाय के बारे में सुने और अधिक जानना चाहे — वह क्या करेगा? वह Google पर आपको खोजेगा। अगर कुछ नहीं आया, या जो आया वह अव्यावसायिक लगा, तो संभवतः आपने वह संभावित ग्राहक संपर्क करने से पहले ही खो दिया।',
    p2: 'वेबसाइट से आप नियंत्रित करते हैं कि जब लोग आपका व्यवसाय खोजें तो उन्हें क्या मिले। यह गाइड बताती है कि वेबसाइट असल में क्या है और 2026 में पुणे के आपके व्यवसाय के लिए यह क्यों ज़रूरी है।',
    h2_what: 'वेबसाइट क्या है — सरल भाषा में',
    p3: 'वेबसाइट इंटरनेट पर पृष्ठों का एक संग्रह है जो आपके व्यवसाय का है। इसका अपना पता होता है (जिसे डोमेन कहते हैं — जैसे digitalsafalta.in), और दुनिया का कोई भी व्यक्ति उस पते को ब्राउज़र में टाइप करके या Google से ढूंढकर इसे देख सकता है।',
    p4: 'इसे इंटरनेट पर अपने व्यवसाय का स्थायी घर समझें — दिन के 24 घंटे, सप्ताह के 7 दिन खुला, जो भी आप ऑफर करते हैं उसे खोजने वाले किसी भी व्यक्ति को दिखाई देता है।',
    h2_contains: 'एक व्यावसायिक वेबसाइट में आमतौर पर क्या होता है?',
    p5: 'पुणे के एक छोटे व्यवसाय के लिए, एक पेशेवर वेबसाइट में आमतौर पर होता है:',
    li_home: '<strong>होम पेज</strong> — आप कौन हैं, क्या करते हैं, और कोई आपको क्यों चुने',
    li_services: '<strong>सेवाएं पेज</strong> — आप क्या ऑफर करते हैं, ज़रूरत पड़ने पर मूल्य के साथ',
    li_about: '<strong>परिचय पेज</strong> — आपकी कहानी, आपकी टीम, आपने व्यवसाय क्यों शुरू किया',
    li_contact: '<strong>संपर्क पेज</strong> — फोन नंबर, ईमेल, WhatsApp लिंक, पूछताछ फॉर्म, नक्शा',
    li_testimonials: '<strong>प्रशंसापत्र या समीक्षाएं</strong> — पिछले ग्राहक आपके बारे में क्या कहते हैं',
    p6: 'यही नींव है — 4 से 5 पेज अधिकांश छोटे व्यवसायों के लिए शुरुआत के लिए पर्याप्त हैं।',
    h2_why: '2026 में आपके व्यवसाय को वेबसाइट की ज़रूरत क्यों है?',
    h3_google: '1. लोग खरीदने से पहले हर चीज़ Google पर खोजते हैं',
    p7: 'दुकान जाने, सेवा बुक करने या किसी पेशेवर को नियुक्त करने से पहले, अधिकांश लोग पहले Google पर खोजते हैं। अगर आप उस खोज में नहीं आते — या अगर आपका परिणाम अव्यावसायिक लगे — तो वे किसी और के पास जाते हैं। वेबसाइट से आप दिखाई देते हैं।',
    h3_cred: '2. विश्वसनीयता और भरोसा',
    p8: '2026 में बिना वेबसाइट वाला व्यवसाय एक तत्काल सवाल उठाता है: क्या यह असली है? ग्राहक, विशेष रूप से युवा, वेबसाइट की उम्मीद रखते हैं। यह विश्वास का संकेत है — यह लोगों को बताता है कि आप स्थापित हैं, गंभीर हैं और उनके समय और पैसे के लायक हैं।',
    h3_sleep: '3. यह सोते हुए भी काम करती है',
    p9: 'आपकी दुकान रात 9 बजे बंद हो जाती है। आपकी वेबसाइट नहीं होती। कोई रात को 12 बजे विकल्प तलाशते हुए आपके व्यवसाय के बारे में पढ़ सकता है, आपकी कीमतें देख सकता है और पूछताछ फॉर्म भर सकता है — आपकी उपस्थिति के बिना। आप एक लीड के साथ उठते हैं।',
    h3_foundation: '4. सभी डिजिटल मार्केटिंग की नींव',
    p10: 'डिजिटल मार्केटिंग का हर अन्य रूप आपकी वेबसाइट पर वापस आता है। Google Ads चलाएं तो क्लिक आपकी वेबसाइट पर आता है। कोई Instagram पोस्ट देखे और अधिक जानना चाहे, वे आपकी वेबसाइट पर आते हैं। बिना वेबसाइट के, हर मार्केटिंग प्रयास के पास भेजने के लिए कोई जगह नहीं है।',
    h3_own: '5. आपका अपना स्थान — किराए का नहीं',
    p11: 'कई व्यवसाय मालिक पूरी तरह से Instagram पेज या JustDial लिस्टिंग पर निर्भर हैं। लेकिन आप उन प्लेटफार्मों के मालिक नहीं हैं। Instagram कल अपना एल्गोरिदम बदल सकता है और आपकी दृश्यता खत्म हो सकती है। आपकी वेबसाइट — आपका डोमेन, होस्टिंग, सामग्री — हमेशा के लिए आपकी है।',
    h2_whatsapp: 'WhatsApp Business अकाउंट — क्या यह पर्याप्त है?',
    p12: 'WhatsApp Business मौजूदा ग्राहकों से संपर्क और पूछताछ का जवाब देने के लिए एक बेहतरीन टूल है। लेकिन यह नए ग्राहकों को आपको ढूंढने में मदद नहीं करता। Google पर आपकी सेवा खोज रहा कोई व्यक्ति आपका WhatsApp नंबर नहीं ढूंढ सकता — वे केवल आपकी वेबसाइट ढूंढ सकते हैं।',
    p13: 'WhatsApp Business और वेबसाइट दोनों का एक साथ उपयोग करें — वे अलग-अलग उद्देश्यों की पूर्ति करते हैं।',
    h2_cost: 'वेबसाइट में कितना खर्च आता है?',
    p14: 'पुणे में एक पेशेवर व्यावसायिक वेबसाइट के लिए ₹12,000-₹25,000 एकमुश्त खर्च की उम्मीद रखें। हमने इस पर एक विस्तृत गाइड लिखी है — पूरी जानकारी के लिए हमारा लेख पढ़ें',
    p14_link: 'पुणे में वेबसाइट की लागत कितनी है',
    p14_end: '',
    p15_pre: 'Digital Safalta में, हमारा मानक वेबसाइट पैकेज है',
    p15_link: 'पहले वर्ष के लिए ₹15,000 एकमुश्त',
    p15_end: '— मोबाइल-रिस्पॉन्सिव, तेज़, पेशेवर ईमेल, SSL, Google Analytics और Google Maps के साथ, 7 कार्यदिवसों में लाइव।',
    h2_bottom: 'सारांश',
    p16: '2026 में किसी व्यवसाय के लिए वेबसाइट वैकल्पिक नहीं है — यह ऑनलाइन गंभीरता से लिए जाने का न्यूनतम प्रवेश बिंदु है। यह आपका 24/7 विक्रेता, आपकी विश्वसनीयता का संकेत, और वह नींव है जिस पर हर अन्य मार्केटिंग प्रयास बनता है।',
    p17: 'अगर अभी तक नहीं बनाई है, या आपकी मौजूदा वेबसाइट पुरानी या अव्यावसायिक लगती है, तो यही पहली चीज़ है जो ठीक करनी है — विज्ञापनों से पहले, SEO से पहले, सोशल मीडिया से पहले। एक बार नींव मज़बूत हो जाए तो बाकी सब बेहतर काम करता है।',
  },
  mr: {
    title: '2026 मध्ये पुण्यातील तुमच्या व्यवसायाला वेबसाइटची गरज का आहे?',
    description:
      'तुमचा व्यवसाय आहे. तुमचे ग्राहक ऑनलाइन आहेत. पण वेबसाइटशिवाय ते तुम्हाला सापडू शकत नाहीत. वेबसाइट म्हणजे काय आणि ती डिजिटल मार्केटिंगचा पाया का आहे हे सोप्या भाषेत सांगणारे हे मार्गदर्शन.',
    date: '16 जून 2026',
    readTime: '5 मिनिटे',
    category: 'सुरुवातीचे मार्गदर्शन',
    p1: 'आज कोणाला तुमच्या व्यवसायाबद्दल कळले आणि अधिक जाणून घ्यायचे असेल — ते काय करतील? ते Google वर तुम्हाला शोधतील. काही आले नाही, किंवा जे आले ते अव्यावसायिक वाटले, तर तो संभाव्य ग्राहक संपर्क करण्याआधीच तुम्ही गमावला आहे.',
    p2: 'लोक तुमचा व्यवसाय शोधतात तेव्हा त्यांना काय मिळते यावर नियंत्रण ठेवण्याचे साधन म्हणजे वेबसाइट. हे मार्गदर्शन सांगते की वेबसाइट नक्की काय आहे आणि 2026 मध्ये पुण्यातील तुमच्या व्यवसायासाठी ती का महत्त्वाची आहे.',
    h2_what: 'वेबसाइट म्हणजे काय — सोप्या भाषेत',
    p3: 'वेबसाइट म्हणजे इंटरनेटवरील पानांचा एक संग्रह जो तुमच्या व्यवसायाचा आहे. त्याचा स्वतःचा पत्ता असतो (याला डोमेन म्हणतात — जसे digitalsafalta.in), आणि जगातील कोणीही तो पत्ता ब्राउझरमध्ये टाकून किंवा Google वरून शोधून ते पाहू शकतो.',
    p4: 'हे तुमच्या व्यवसायाचे इंटरनेटवरील कायमचे घर समजा — दिवसाचे 24 तास, आठवड्याचे 7 दिवस उघडे, तुम्ही जे देता ते शोधणाऱ्या कोणालाही दिसते.',
    h2_contains: 'व्यावसायिक वेबसाइटमध्ये साधारणपणे काय असते?',
    p5: 'पुण्यातील लहान व्यवसायासाठी, व्यावसायिक वेबसाइटमध्ये साधारणपणे असते:',
    li_home: '<strong>होम पेज</strong> — तुम्ही कोण आहात, काय करता, आणि कोणी तुम्हाला का निवडावे',
    li_services: '<strong>सेवा पेज</strong> — तुम्ही काय देता याचा तपशील, आवश्यक असल्यास किंमतींसह',
    li_about: '<strong>परिचय पेज</strong> — तुमची कथा, तुमची टीम, तुम्ही व्यवसाय का सुरू केला',
    li_contact: '<strong>संपर्क पेज</strong> — फोन नंबर, ईमेल, WhatsApp लिंक, चौकशी फॉर्म, नकाशा',
    li_testimonials: '<strong>अभिप्राय किंवा समीक्षा</strong> — मागील ग्राहक तुमच्याबद्दल काय म्हणतात',
    p6: 'हाच पाया आहे — बहुतेक लहान व्यवसायांसाठी सुरुवातीला 4 ते 5 पाने पुरेसे आहेत.',
    h2_why: '2026 मध्ये तुमच्या व्यवसायाला वेबसाइटची गरज का आहे?',
    h3_google: '1. लोक खरेदी करण्यापूर्वी सर्व काही Google वर शोधतात',
    p7: 'दुकानात जाण्यापूर्वी, सेवा बुक करण्यापूर्वी किंवा एखाद्या तज्ञाला बोलावण्यापूर्वी बहुतेक लोक प्रथम Google वर शोधतात. त्या शोधात तुम्ही न दिसल्यास — किंवा दिसले तरी अव्यावसायिक वाटल्यास — ते जे दिसते त्याकडे जातात. वेबसाइटमुळे तुम्ही दिसता.',
    h3_cred: '2. विश्वासार्हता आणि भरवसा',
    p8: '2026 मध्ये वेबसाइट नसलेला व्यवसाय एक तत्काळ प्रश्न उपस्थित करतो: हे खरे आहे का? ग्राहक, विशेषत: तरुण, वेबसाइटची अपेक्षा करतात. ती विश्वासाचे चिन्ह आहे — ती लोकांना सांगते की तुम्ही स्थापित आहात, गंभीर आहात आणि त्यांच्या वेळ आणि पैशाच्या लायक आहात.',
    h3_sleep: '3. झोपेतही काम करते',
    p9: 'तुमचे दुकान रात्री 9 वाजता बंद होते. तुमची वेबसाइट होत नाही. मध्यरात्री पर्याय शोधणारा कोणी तुमच्या व्यवसायाबद्दल वाचू शकतो, किंमती पाहू शकतो आणि चौकशी फॉर्म भरू शकतो — तुम्ही उपलब्ध नसतानाही. तुम्ही एका लीडसह उठता.',
    h3_foundation: '4. सर्व डिजिटल मार्केटिंगचा पाया',
    p10: 'डिजिटल मार्केटिंगचा प्रत्येक दुसरा प्रकार तुमच्या वेबसाइटकडे परत येतो. Google Ads चालवल्यास क्लिक तुमच्या वेबसाइटवर येतो. कोणी Instagram पोस्ट पाहून अधिक जाणून घ्यायचे असेल तर ते वेबसाइटवर येतात. वेबसाइटशिवाय, प्रत्येक मार्केटिंग प्रयासाला लोकांना पाठवायला कुठेच नाही.',
    h3_own: '5. तुमची स्वतःची जागा — भाड्याची नाही',
    p11: 'अनेक व्यावसायिक Instagram पेज किंवा JustDial लिस्टिंगवर पूर्णपणे अवलंबून असतात. पण ते प्लॅटफॉर्म तुमचे नाहीत. Instagram उद्या अल्गोरिदम बदलू शकते आणि तुमची दृश्यमानता नाहीशी होऊ शकते. तुमची वेबसाइट — तुमचे डोमेन, होस्टिंग, सामग्री — कायमची तुमची आहे.',
    h2_whatsapp: 'WhatsApp Business अकाउंट — ते पुरेसे आहे का?',
    p12: 'WhatsApp Business हे विद्यमान ग्राहकांशी संवाद आणि चौकशींना उत्तर देण्यासाठी उत्कृष्ट साधन आहे. पण ते नवीन ग्राहकांना तुम्हाला शोधण्यात मदत करत नाही. Google वर तुमची सेवा शोधणारा कोणी तुमचा WhatsApp नंबर सापडवू शकत नाही — ते फक्त तुमची वेबसाइट शोधू शकतात.',
    p13: 'WhatsApp Business आणि वेबसाइट दोन्ही एकत्र वापरा — ते वेगवेगळ्या उद्देशांसाठी आहेत.',
    h2_cost: 'वेबसाइटला किती खर्च येतो?',
    p14: 'पुण्यात एका व्यावसायिक व्यवसाय वेबसाइटसाठी ₹12,000-₹25,000 एकरकमी खर्चाची अपेक्षा ठेवा. आम्ही यावर एक तपशीलवार मार्गदर्शन लिहिले आहे — संपूर्ण माहितीसाठी आमचा लेख वाचा',
    p14_link: 'पुण्यात वेबसाइटची किंमत किती आहे',
    p14_end: '',
    p15_pre: 'Digital Safalta मध्ये, आमचे मानक वेबसाइट पॅकेज आहे',
    p15_link: 'पहिल्या वर्षासाठी ₹15,000 एकरकमी',
    p15_end: '— मोबाइल-रिस्पॉन्सिव्ह, जलद, व्यावसायिक ईमेल, SSL, Google Analytics आणि Google Maps सह, 7 कामाच्या दिवसांत लाइव्ह.',
    h2_bottom: 'सारांश',
    p16: '2026 मध्ये व्यवसायासाठी वेबसाइट पर्यायी नाही — ऑनलाइन गांभीर्याने घेतले जाण्यासाठी हे किमान प्रवेश बिंदू आहे. ती तुमची 24/7 विक्रेती, विश्वासार्हतेचे चिन्ह आणि इतर सर्व मार्केटिंग प्रयासांचा पाया आहे.',
    p17: 'अजून नसेल तर, किंवा सध्याची वेबसाइट जुनी किंवा अव्यावसायिक वाटत असेल, तर हे आधी सुधारा — जाहिरातींपूर्वी, SEO पूर्वी, सोशल मीडियापूर्वी. पाया भक्कम झाला की इतर सर्व गोष्टी चांगल्या काम करतात.',
  },
};

interface Props {
  lang?: Lang;
}

export function WhatIsAWebsite({ lang = 'en' }: Props) {
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

      <h2>{c.h2_what}</h2>
      <p>{c.p3}</p>
      <p>{c.p4}</p>

      <h2>{c.h2_contains}</h2>
      <p>{c.p5}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_home }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_services }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_about }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_contact }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_testimonials }} />
      </ul>
      <p>{c.p6}</p>

      <h2>{c.h2_why}</h2>
      <h3>{c.h3_google}</h3>
      <p>{c.p7}</p>
      <h3>{c.h3_cred}</h3>
      <p>{c.p8}</p>
      <h3>{c.h3_sleep}</h3>
      <p>{c.p9}</p>
      <h3>{c.h3_foundation}</h3>
      <p>{c.p10}</p>
      <h3>{c.h3_own}</h3>
      <p>{c.p11}</p>

      <h2>{c.h2_whatsapp}</h2>
      <p>{c.p12}</p>
      <p>{c.p13}</p>

      <h2>{c.h2_cost}</h2>
      <p>
        {c.p14} <Link to="/blog/website-cost-pune">{c.p14_link}</Link>
        {c.p14_end}
      </p>
      <p>
        {c.p15_pre} <Link to="/pricing">{c.p15_link}</Link> {c.p15_end}
      </p>

      <h2>{c.h2_bottom}</h2>
      <p>{c.p16}</p>
      <p>{c.p17}</p>
    </BlogPost>
  );
}
