import { BlogPost } from '../../components/BlogPost';
import { Link } from 'react-router-dom';

type Lang = 'en' | 'hi' | 'mr';

const COPY = {
  en: {
    title: "What is Digital Marketing? A Beginner's Guide for Indian Small Businesses",
    description:
      "Never heard of SEO, Google Ads, or social media marketing? This plain-English guide explains what digital marketing is, why it matters, and how it can bring more customers to your business.",
    date: 'June 16, 2026',
    readTime: '7 min',
    category: 'Beginner Guide',
    p1: "If you own a shop, a restaurant, a clinic, or any small business in Pune — someone right now is searching Google for exactly what you offer. The question is: are they finding <strong>you</strong>, or your competitor?",
    p2: "That gap — between being found and being invisible — is what digital marketing closes. This guide explains what digital marketing actually is, in plain language, without the jargon.",
    h2_what: 'What is Digital Marketing?',
    p3: 'Digital marketing is any activity that promotes your business online. That includes your website, your Google listing, your Instagram page, your WhatsApp messages, the ads you run on Facebook, and the position your business appears at when someone searches Google.',
    p4: "Think of it as the online version of traditional marketing — except instead of a newspaper ad or a banner outside your shop, your message reaches people on their phones and laptops, exactly when they're looking for what you offer.",
    h2_why: 'Why Does It Matter for Your Business?',
    p5: "Here's a simple fact: over <strong>700 million Indians</strong> use the internet today. In Pune alone, millions of people search Google every day for local services — a plumber, a restaurant, a CA, a digital marketing agency.",
    p6: "If your business doesn't appear online, you're invisible to all of them. Your competitor who does appear online gets the call, the walk-in, the enquiry — not you.",
    p7: 'Digital marketing is how you become visible.',
    h2_types: 'The Main Types of Digital Marketing — Simply Explained',
    h3_website: '1. Website',
    p8: "Your website is your online shop. It's open 24 hours a day, 7 days a week. When someone wants to know more about your business, they look up your website. Without one, you lose credibility immediately — most people don't trust a business that doesn't have a website in 2026.",
    h3_seo: '2. SEO (Search Engine Optimisation)',
    p9: 'SEO is the process of making your website appear higher on Google when someone searches for what you offer. If someone searches "CA near me in Pune" and you\'re a chartered accountant, good SEO means your name appears near the top — for free, every time someone searches.',
    p10: 'It takes time (usually 3-6 months to see results) but once it works, it keeps working without you paying for every click. Think of it as a long-term investment.',
    h3_gads: '3. Google Ads (Paid Search)',
    p11: "Google Ads lets you pay to appear at the top of Google search results immediately — without waiting months for SEO to kick in. You only pay when someone actually clicks on your ad. If you run a restaurant and someone searches \"best biryani in Kothrud\", your ad can appear at the top within hours of setting it up.",
    h3_meta: '4. Meta Ads (Facebook & Instagram Ads)',
    p12: "Facebook and Instagram let you show ads to very specific groups of people — for example, people aged 25-45 in Pune who are interested in home renovation. Unlike Google Ads (where people are already searching for you), Meta Ads find people who match your ideal customer profile and show them your business — even if they weren't looking for you yet.",
    h3_social: '5. Social Media Management',
    p13: 'Posting regularly on Instagram, Facebook, or LinkedIn keeps your business visible and builds trust with potential customers. People buy from brands they recognise. Consistent social media presence means when someone finally needs your service, your name is already familiar.',
    h3_gbp: '6. Google Business Profile',
    p14: 'This is the listing that appears when someone searches your business name on Google, or searches for a service "near me". It shows your address, phone number, photos, and reviews. It\'s free, and for local businesses it\'s often the single most impactful digital marketing tool available.',
    h2_start: 'Which One Should You Start With?',
    p15: "If you're just starting out, here's the order that makes the most sense:",
    li_s1: '<strong>Step 1:</strong> Get a professional website — this is your foundation. Everything else points back to it.',
    li_s2: '<strong>Step 2:</strong> Set up your Google Business Profile — free, fast, and works immediately for "near me" searches.',
    li_s3: '<strong>Step 3:</strong> Run Google or Meta Ads to get fast leads while your SEO builds up.',
    li_s4: '<strong>Step 4:</strong> Build SEO and social media presence for long-term, sustainable growth.',
    h2_cost: 'How Much Does Digital Marketing Cost?',
    p16: "It depends on what you choose. A basic website in Pune starts from ₹15,000 as a one-time cost. Running Google Ads can start with as little as ₹10,000/month in ad spend. Social media management typically costs ₹5,000-₹20,000/month for a professional to handle it.",
    p17: "The honest answer: digital marketing doesn't have to be expensive to start. But it does need to be consistent. A ₹10,000/month ad campaign run properly will outperform a ₹50,000 campaign run badly every time.",
    p18: "If you want transparent pricing without the fluff, check out our",
    p18_link: 'pricing page',
    p18_end: '— we show exactly what goes where.',
    h2_bottom: 'The Bottom Line',
    p19: "Digital marketing is not complicated. It's just promoting your business online — using tools like your website, Google, Instagram, and WhatsApp — to reach more customers than you ever could through word of mouth alone.",
    p20: "You don't need to understand every tool deeply. You need someone honest who does — and who uses those tools specifically to grow your business, not to confuse you with jargon.",
    p21: "That's exactly what we do at Digital Safalta.",
  },
  hi: {
    title: 'डिजिटल मार्केटिंग क्या है? भारतीय छोटे व्यवसायों के लिए एक शुरुआती गाइड',
    description:
      'SEO, Google Ads या सोशल मीडिया मार्केटिंग के बारे में कभी नहीं सुना? यह गाइड सरल भाषा में बताती है कि डिजिटल मार्केटिंग क्या है, क्यों ज़रूरी है, और यह आपके व्यवसाय में अधिक ग्राहक कैसे ला सकती है।',
    date: '16 जून 2026',
    readTime: '7 मिनट',
    category: 'शुरुआती गाइड',
    p1: 'अगर आपकी कोई दुकान, रेस्टोरेंट, क्लिनिक या पुणे में कोई भी छोटा व्यवसाय है — तो अभी इस वक्त कोई न कोई Google पर वही खोज रहा है जो आप ऑफर करते हैं। सवाल यह है: क्या वे <strong>आपको</strong> ढूंढ पा रहे हैं, या आपके प्रतिस्पर्धी को?',
    p2: 'मिलने और न दिखने के बीच के इस अंतर को डिजिटल मार्केटिंग पाटती है। यह गाइड सरल भाषा में, बिना जटिल शब्दावली के समझाती है कि डिजिटल मार्केटिंग असल में क्या है।',
    h2_what: 'डिजिटल मार्केटिंग क्या है?',
    p3: 'डिजिटल मार्केटिंग वह हर गतिविधि है जो आपके व्यवसाय को ऑनलाइन प्रमोट करती है — आपकी वेबसाइट, आपकी Google लिस्टिंग, आपका Instagram पेज, WhatsApp संदेश, Facebook पर चलाए जाने वाले विज्ञापन, और Google सर्च में आपका स्थान।',
    p4: 'इसे परंपरागत मार्केटिंग का ऑनलाइन रूप समझें — बस अखबार के विज्ञापन या दुकान के बाहर बैनर की जगह, आपका संदेश लोगों के फोन और लैपटॉप पर ठीक उस वक्त पहुंचता है जब वे आपकी सेवा खोज रहे होते हैं।',
    h2_why: 'यह आपके व्यवसाय के लिए क्यों मायने रखता है?',
    p5: 'एक सरल तथ्य: आज <strong>70 करोड़ से अधिक भारतीय</strong> इंटरनेट का उपयोग करते हैं। अकेले पुणे में, लाखों लोग हर रोज़ Google पर स्थानीय सेवाएं — प्लंबर, रेस्टोरेंट, CA, डिजिटल मार्केटिंग एजेंसी — खोजते हैं।',
    p6: 'अगर आपका व्यवसाय ऑनलाइन नहीं दिखता, तो आप उन सभी के लिए अदृश्य हैं। जो प्रतिस्पर्धी ऑनलाइन दिखता है, उसे कॉल, विज़िट और पूछताछ मिलती है — आपको नहीं।',
    p7: 'डिजिटल मार्केटिंग से आप दिखाई देते हैं।',
    h2_types: 'डिजिटल मार्केटिंग के मुख्य प्रकार — सरल भाषा में',
    h3_website: '1. वेबसाइट',
    p8: 'आपकी वेबसाइट आपकी ऑनलाइन दुकान है। यह दिन के 24 घंटे, सप्ताह के 7 दिन खुली रहती है। जब कोई आपके व्यवसाय के बारे में अधिक जानना चाहता है, वे आपकी वेबसाइट देखते हैं। बिना वेबसाइट के, 2026 में आपकी विश्वसनीयता तुरंत कम हो जाती है।',
    h3_seo: '2. SEO (सर्च इंजन ऑप्टिमाइज़ेशन)',
    p9: 'SEO वह प्रक्रिया है जिससे आपकी वेबसाइट Google पर ऊपर आती है जब कोई आपकी सेवा खोजता है। अगर कोई "पुणे में CA" खोजे और आप चार्टर्ड अकाउंटेंट हैं, तो अच्छे SEO से आपका नाम शीर्ष पर दिखता है — बिना पैसे दिए, हर बार।',
    p10: 'इसमें समय लगता है (आमतौर पर 3-6 महीने) लेकिन एक बार काम करना शुरू हो जाए, तो हर क्लिक के लिए भुगतान किए बिना काम करता रहता है। इसे दीर्घकालिक निवेश समझें।',
    h3_gads: '3. Google Ads (पेड सर्च)',
    p11: 'Google Ads से आप तुरंत Google सर्च परिणामों में शीर्ष पर आ सकते हैं — SEO के लिए महीनों इंतज़ार किए बिना। आप केवल तब भुगतान करते हैं जब कोई वास्तव में आपके विज्ञापन पर क्लिक करे। रेस्टोरेंट है तो कोई "कोथरूड में बेस्ट बिरयानी" खोजे और आपका विज्ञापन घंटों में शीर्ष पर आ सकता है।',
    h3_meta: '4. Meta Ads (Facebook और Instagram Ads)',
    p12: 'Facebook और Instagram से आप बहुत विशिष्ट लोगों को विज्ञापन दिखा सकते हैं — जैसे पुणे के 25-45 वर्ष के लोग जो होम रिनोवेशन में रुचि रखते हैं। Google Ads के विपरीत, Meta Ads उन लोगों को ढूंढता है जो आपके आदर्श ग्राहक से मेल खाते हैं — भले ही वे अभी आपको खोज नहीं रहे।',
    h3_social: '5. सोशल मीडिया मैनेजमेंट',
    p13: 'Instagram, Facebook या LinkedIn पर नियमित पोस्ट करने से आपका व्यवसाय दिखाई देता है और संभावित ग्राहकों में विश्वास बनता है। लोग जाने-पहचाने ब्रांड से खरीदते हैं। नियमित सोशल मीडिया उपस्थिति से जब किसी को आपकी सेवा चाहिए, तब आपका नाम पहले से परिचित होता है।',
    h3_gbp: '6. Google Business Profile',
    p14: 'यह वह लिस्टिंग है जो Google पर आपके व्यवसाय का नाम सर्च करने पर या "near me" सर्च करने पर दिखती है। इसमें आपका पता, फोन नंबर, फ़ोटो और समीक्षाएं होती हैं। यह मुफ़्त है और स्थानीय व्यवसायों के लिए अक्सर सबसे प्रभावशाली डिजिटल मार्केटिंग टूल है।',
    h2_start: 'शुरुआत कहां से करें?',
    p15: 'अगर आप अभी शुरू कर रहे हैं, तो यह क्रम सबसे सही है:',
    li_s1: '<strong>चरण 1:</strong> एक पेशेवर वेबसाइट बनाएं — यह आपकी नींव है। बाकी सब यहीं से जुड़ता है।',
    li_s2: '<strong>चरण 2:</strong> Google Business Profile सेट करें — मुफ़्त, तेज़, और "near me" सर्च के लिए तुरंत काम करता है।',
    li_s3: '<strong>चरण 3:</strong> Google या Meta Ads चलाएं ताकि SEO बनने के दौरान तेज़ी से लीड मिलें।',
    li_s4: '<strong>चरण 4:</strong> दीर्घकालिक, स्थायी विकास के लिए SEO और सोशल मीडिया बनाएं।',
    h2_cost: 'डिजिटल मार्केटिंग में कितना खर्च होता है?',
    p16: 'यह इस पर निर्भर करता है कि आप क्या चुनते हैं। पुणे में एक बेसिक वेबसाइट ₹15,000 एकमुश्त से शुरू होती है। Google Ads ₹10,000/महीने के ad spend से शुरू हो सकता है। सोशल मीडिया मैनेजमेंट आमतौर पर ₹5,000-₹20,000/महीने में मिलता है।',
    p17: 'सच यह है: डिजिटल मार्केटिंग शुरू करने के लिए महंगी नहीं होनी चाहिए। लेकिन यह निरंतर होनी चाहिए। सही तरीके से चलाया गया ₹10,000/महीने का अभियान हमेशा गलत तरीके से चलाए गए ₹50,000 अभियान से बेहतर प्रदर्शन करेगा।',
    p18: 'पारदर्शी मूल्य निर्धारण के लिए हमारा',
    p18_link: 'मूल्य निर्धारण पृष्ठ',
    p18_end: 'देखें — हम बताते हैं कि कहां क्या जाता है।',
    h2_bottom: 'सारांश',
    p19: 'डिजिटल मार्केटिंग जटिल नहीं है। यह बस आपके व्यवसाय को ऑनलाइन प्रमोट करना है — वेबसाइट, Google, Instagram और WhatsApp जैसे टूल्स का उपयोग करके — जितने ग्राहक आप कभी केवल मुंह-ज़बानी नहीं पा सकते।',
    p20: 'आपको हर टूल को गहराई से समझने की ज़रूरत नहीं। आपको एक ईमानदार व्यक्ति चाहिए जो समझे — और उन टूल्स का उपयोग आपके व्यवसाय को बढ़ाने के लिए करे, आपको भ्रमित करने के लिए नहीं।',
    p21: 'Digital Safalta में हम यही करते हैं।',
  },
  mr: {
    title: 'डिजिटल मार्केटिंग म्हणजे काय? भारतीय लहान व्यवसायांसाठी एक सुरुवातीचे मार्गदर्शन',
    description:
      'SEO, Google Ads किंवा सोशल मीडिया मार्केटिंग बद्दल कधी ऐकले नाही? हे मार्गदर्शन सोप्या भाषेत सांगते की डिजिटल मार्केटिंग म्हणजे काय, ते का महत्त्वाचे आहे, आणि ते तुमच्या व्यवसायात अधिक ग्राहक कसे आणू शकते।',
    date: '16 जून 2026',
    readTime: '7 मिनिटे',
    category: 'सुरुवातीचे मार्गदर्शन',
    p1: 'जर तुमचं पुण्यात एखादं दुकान, रेस्टॉरंट, दवाखाना किंवा कोणताही लहान व्यवसाय असेल — तर आत्ता या क्षणी कोणीतरी Google वर तुम्ही देत असलेल्या गोष्टीच शोधत आहे. प्रश्न हा आहे: ते <strong>तुम्हाला</strong> सापडत आहेत का, की तुमच्या स्पर्धकाला?',
    p2: 'सापडणे आणि अदृश्य राहणे यातील हे अंतर डिजिटल मार्केटिंग भरून काढते. हे मार्गदर्शन सोप्या भाषेत, कोणत्याही तांत्रिक शब्दांशिवाय डिजिटल मार्केटिंग म्हणजे नक्की काय हे सांगते.',
    h2_what: 'डिजिटल मार्केटिंग म्हणजे काय?',
    p3: 'डिजिटल मार्केटिंग म्हणजे तुमचा व्यवसाय ऑनलाइन प्रचार करणारी प्रत्येक क्रिया — तुमची वेबसाइट, तुमची Google लिस्टिंग, तुमचं Instagram पेज, WhatsApp संदेश, Facebook वरील जाहिराती आणि Google शोधात तुमचं स्थान.',
    p4: 'हे पारंपरिक मार्केटिंगचं ऑनलाइन रूप समजा — फक्त वर्तमानपत्रातील जाहिरात किंवा दुकानाबाहेरील फलकाऐवजी, तुमचा संदेश लोकांच्या फोन आणि लॅपटॉपवर नेमक्या त्या वेळी पोहोचतो जेव्हा ते तुमची सेवा शोधत असतात.',
    h2_why: 'तुमच्या व्यवसायासाठी हे का महत्त्वाचे आहे?',
    p5: 'एक साधी गोष्ट: आज <strong>70 कोटींपेक्षा जास्त भारतीय</strong> इंटरनेट वापरतात. एकट्या पुण्यात, लाखो लोक रोज Google वर स्थानिक सेवा शोधतात — प्लंबर, रेस्टॉरंट, CA, डिजिटल मार्केटिंग एजन्सी.',
    p6: 'जर तुमचा व्यवसाय ऑनलाइन दिसत नसेल, तर तुम्ही त्या सर्वांसाठी अदृश्य आहात. जो स्पर्धक ऑनलाइन दिसतो, त्याला फोन, भेट आणि चौकशी मिळते — तुम्हाला नाही.',
    p7: 'डिजिटल मार्केटिंगमुळे तुम्ही दिसता.',
    h2_types: 'डिजिटल मार्केटिंगचे मुख्य प्रकार — सोप्या भाषेत',
    h3_website: '1. वेबसाइट',
    p8: 'तुमची वेबसाइट म्हणजे तुमचं ऑनलाइन दुकान. ती दिवसाचे 24 तास, आठवड्याचे 7 दिवस उघडी असते. कोणाला तुमच्या व्यवसायाबद्दल अधिक जाणून घ्यायचं असेल, ते तुमची वेबसाइट पाहतात. वेबसाइटशिवाय 2026 मध्ये तुमची विश्वासार्हता लगेच कमी होते.',
    h3_seo: '2. SEO (सर्च इंजिन ऑप्टिमायझेशन)',
    p9: 'SEO म्हणजे कोणी तुमची सेवा शोधली तर Google वर तुमची वेबसाइट वर दिसेल असे करणे. "पुण्यात CA" असे कोणी शोधले आणि तुम्ही चार्टर्ड अकाउंटंट असाल, तर चांगल्या SEO मुळे तुमचं नाव वरती येते — विनामूल्य, प्रत्येक वेळी.',
    p10: 'याला वेळ लागतो (साधारणपणे 3-6 महिने) पण एकदा काम सुरू झाले की प्रत्येक क्लिकसाठी पैसे न देता काम करत राहते. हे दीर्घकालीन गुंतवणूक म्हणून पहा.',
    h3_gads: '3. Google Ads (पेड सर्च)',
    p11: 'Google Ads मुळे तुम्ही लगेच Google शोध परिणामांमध्ये वरती येऊ शकता — SEO साठी महिने थांबण्याची गरज नाही. कोणी तुमच्या जाहिरातीवर क्लिक केल्यावरच तुम्ही पैसे द्याल. रेस्टॉरंट असेल तर कोणी "कोथरुडमध्ये बेस्ट बिर्याणी" शोधले तर तुमची जाहिरात काही तासांतच वर येऊ शकते.',
    h3_meta: '4. Meta Ads (Facebook आणि Instagram Ads)',
    p12: 'Facebook आणि Instagram मुळे तुम्ही अगदी विशिष्ट लोकांना जाहिरात दाखवू शकता — उदाहरणार्थ पुण्यातील 25-45 वयोगटातील घर सजावटीत रस असलेले लोक. Google Ads च्या विपरीत, Meta Ads तुमच्या आदर्श ग्राहकाशी जुळणाऱ्या लोकांना शोधते — जरी ते अजून तुम्हाला शोधत नसले तरी.',
    h3_social: '5. सोशल मीडिया व्यवस्थापन',
    p13: 'Instagram, Facebook किंवा LinkedIn वर नियमित पोस्ट केल्याने तुमचा व्यवसाय दिसत राहतो आणि संभाव्य ग्राहकांमध्ये विश्वास निर्माण होतो. लोक ओळखीच्या ब्रँडकडून खरेदी करतात. सातत्यपूर्ण सोशल मीडिया उपस्थितीमुळे जेव्हा कोणाला तुमची सेवा लागते, तेव्हा तुमचं नाव आधीच परिचित असते.',
    h3_gbp: '6. Google Business Profile',
    p14: 'Google वर तुमच्या व्यवसायाचं नाव शोधले किंवा "जवळपास" शोधले तेव्हा जी लिस्टिंग दिसते ती हीच. यात तुमचा पत्ता, फोन नंबर, फोटो आणि समीक्षा असतात. हे विनामूल्य आहे आणि स्थानिक व्यवसायांसाठी अनेकदा सर्वात प्रभावी डिजिटल मार्केटिंग साधन असते.',
    h2_start: 'सुरुवात कुठून करायची?',
    p15: 'जर तुम्ही आत्ता सुरुवात करत असाल, तर हा क्रम सर्वात योग्य आहे:',
    li_s1: '<strong>पाऊल 1:</strong> व्यावसायिक वेबसाइट बनवा — हा तुमचा पाया आहे. इतर सर्व गोष्टी इकडेच येतात.',
    li_s2: '<strong>पाऊल 2:</strong> Google Business Profile सेट करा — विनामूल्य, जलद, आणि "जवळपास" शोधासाठी लगेच काम करते.',
    li_s3: '<strong>पाऊल 3:</strong> SEO तयार होत असताना जलद लीड्ससाठी Google किंवा Meta Ads चालवा.',
    li_s4: '<strong>पाऊल 4:</strong> दीर्घकालीन, शाश्वत वाढीसाठी SEO आणि सोशल मीडिया तयार करा.',
    h2_cost: 'डिजिटल मार्केटिंगला किती खर्च येतो?',
    p16: 'हे तुम्ही काय निवडता यावर अवलंबून आहे. पुण्यात एक बेसिक वेबसाइट ₹15,000 एकरकमी पासून सुरू होते. Google Ads ₹10,000/महिन्यापासून सुरू होऊ शकतो. सोशल मीडिया व्यवस्थापनासाठी सामान्यतः ₹5,000-₹20,000/महिना खर्च होतो.',
    p17: 'खरे उत्तर: डिजिटल मार्केटिंग सुरू करायला महाग असण्याची गरज नाही. पण ते सातत्यपूर्ण असणे आवश्यक आहे. योग्य प्रकारे चालवलेली ₹10,000/महिन्याची मोहीम नेहमी चुकीच्या पद्धतीने चालवलेल्या ₹50,000 मोहिमेपेक्षा चांगली कामगिरी करेल.',
    p18: 'पारदर्शक किंमतींसाठी आमचे',
    p18_link: 'किंमत पृष्ठ',
    p18_end: 'पाहा — आम्ही नेमके काय कुठे जाते ते दाखवतो.',
    h2_bottom: 'सारांश',
    p19: 'डिजिटल मार्केटिंग गुंतागुंतीचे नाही. हे फक्त तुमच्या व्यवसायाचा ऑनलाइन प्रचार करणे आहे — वेबसाइट, Google, Instagram आणि WhatsApp सारख्या साधनांचा वापर करून — तोंडी प्रचाराने कधीही मिळणार नाहीत एवढे ग्राहक मिळवण्यासाठी.',
    p20: 'तुम्हाला प्रत्येक साधन खोलवर समजण्याची गरज नाही. तुम्हाला एक प्रामाणिक व्यक्ती हवी आहे जो समजतो — आणि ती साधने तुमचा व्यवसाय वाढवण्यासाठी वापरतो, तुम्हाला गोंधळात टाकण्यासाठी नाही.',
    p21: 'Digital Safalta मध्ये आम्ही हेच करतो.',
  },
};

interface Props {
  lang?: Lang;
}

export function WhatIsDigitalMarketing({ lang = 'en' }: Props) {
  const c = COPY[lang];
  return (
    <BlogPost
      title={c.title}
      description={c.description}
      date={c.date}
      readTime={c.readTime}
      category={c.category}
    >
      <p dangerouslySetInnerHTML={{ __html: c.p1 }} />
      <p>{c.p2}</p>

      <h2>{c.h2_what}</h2>
      <p>{c.p3}</p>
      <p>{c.p4}</p>

      <h2>{c.h2_why}</h2>
      <p dangerouslySetInnerHTML={{ __html: c.p5 }} />
      <p>{c.p6}</p>
      <p>{c.p7}</p>

      <h2>{c.h2_types}</h2>
      <h3>{c.h3_website}</h3>
      <p>{c.p8}</p>
      <h3>{c.h3_seo}</h3>
      <p>{c.p9}</p>
      <p>{c.p10}</p>
      <h3>{c.h3_gads}</h3>
      <p>{c.p11}</p>
      <h3>{c.h3_meta}</h3>
      <p>{c.p12}</p>
      <h3>{c.h3_social}</h3>
      <p>{c.p13}</p>
      <h3>{c.h3_gbp}</h3>
      <p>{c.p14}</p>

      <h2>{c.h2_start}</h2>
      <p>{c.p15}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_s1 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_s2 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_s3 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_s4 }} />
      </ul>

      <h2>{c.h2_cost}</h2>
      <p>{c.p16}</p>
      <p>{c.p17}</p>
      <p>
        {c.p18} <Link to="/pricing">{c.p18_link}</Link> {c.p18_end}
      </p>

      <h2>{c.h2_bottom}</h2>
      <p>{c.p19}</p>
      <p>{c.p20}</p>
      <p>{c.p21}</p>
    </BlogPost>
  );
}
