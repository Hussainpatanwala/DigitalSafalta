import { BlogPost } from '../../components/BlogPost';
import { Link } from 'react-router-dom';

type Lang = 'en' | 'hi' | 'mr';

const COPY = {
  en: {
    title: 'Google Ads vs Meta Ads — Which is Better for Your Business?',
    description:
      "Facebook, Instagram, or Google? The honest answer depends on what you're selling and who your customer is. Here's a practical comparison to help you decide where to spend your ad budget.",
    date: 'June 16, 2026',
    readTime: '7 min',
    category: 'Ads & Paid Marketing',
    p1: "One of the most common questions from Pune business owners exploring digital marketing: \"Should I advertise on Google or Facebook/Instagram?\" It's a great question — and the honest answer is that it depends on your business, your customer, and what you're trying to achieve.",
    p2: "This guide breaks down both platforms plainly so you can make the right call for your situation.",
    h2_diff: 'The Fundamental Difference',
    p3: 'Before comparing features, understand this core difference:',
    li_google: '<strong>Google Ads</strong> — shows your ad to people who are <em>actively searching</em> for what you offer right now.',
    li_meta: '<strong>Meta Ads (Facebook/Instagram)</strong> — shows your ad to people who <em>match your ideal customer profile</em>, even if they weren\'t searching for you.',
    p4: 'Google captures <strong>existing demand</strong>. Meta <strong>creates demand</strong>. This distinction determines which platform is right for you.',
    h2_google: 'When Google Ads Works Better',
    p5: 'Google Ads is the right choice when your customers are actively searching for your product or service. Examples:',
    li_g1: 'A plumber, electrician, or AC repair service — people search "AC repair near me" when they need it urgently',
    li_g2: 'A CA or lawyer — people search "CA in Pune for GST filing" when they need to file',
    li_g3: 'A hospital or clinic — people search "dermatologist in Pune" when they have a problem',
    li_g4: 'A moving company — people search "packers and movers Pune" when they\'re relocating',
    p6: 'In these cases, Google Ads puts you in front of someone with <strong>high buying intent</strong> — they need your service right now and are looking for a provider. Conversion rates are typically higher because you\'re not interrupting someone, you\'re answering their search.',
    h2_meta: 'When Meta Ads Works Better',
    p7: 'Meta Ads (Facebook + Instagram) works best when you need to reach people who match your ideal customer but aren\'t actively searching — or when your product needs visual appeal to sell. Examples:',
    li_m1: 'A clothing boutique or fashion brand — scrolling Instagram, your ad stops someone with an eye-catching outfit',
    li_m2: 'A restaurant or café — someone isn\'t searching for a new dining experience, but a beautiful food photo makes them want to visit',
    li_m3: 'A gym or fitness studio — target people aged 20-40 in Pune who are interested in fitness',
    li_m4: 'A real estate developer — target people in a specific income bracket in Pune who might be looking to buy',
    li_m5: 'An online course or coaching business — build awareness among a specific professional group',
    p8: "Meta's targeting is extraordinarily precise — you can reach people based on age, location, income level, interests, behaviours, and even life events (recently engaged, new parents, etc.).",
    h2_cost: 'Cost Comparison',
    p9: 'Both platforms charge in different ways, and costs vary widely by industry and competition:',
    li_c1: '<strong>Google Ads</strong> — you pay per click (PPC). In India, clicks can range from ₹5 for low-competition terms to ₹200+ for competitive industries like legal, medical, or finance. You only pay when someone clicks.',
    li_c2: '<strong>Meta Ads</strong> — you pay per impression (how many people see your ad) or per result (click, lead, purchase). Typically lower cost-per-click than Google, but lower intent means more clicks before a conversion.',
    p10: 'A rough guide: for the same ₹10,000/month budget, Google Ads will bring fewer but more intent-heavy visitors. Meta will bring more visitors who need more convincing before they convert.',
    h2_credit: "A Special Opportunity: Google's Free ₹20,000 Ad Credit",
    p11_pre: "If you've never run Google Ads before, Google currently offers ₹20,000 in free ad credit when you spend your first ₹20,000. That's ₹40,000 worth of advertising for ₹20,000 in spend — effectively doubling your budget from day one. Read our detailed guide on",
    p11_link: 'how to claim this offer',
    p11_end: '.',
    h2_verdict: 'The Verdict — Which Should You Choose?',
    p12: "Here's a simple framework:",
    li_v1: '<strong>People search for your service when they need it</strong> → Start with Google Ads',
    li_v2: '<strong>Your product/service is visual or lifestyle-driven</strong> → Start with Meta Ads',
    li_v3: '<strong>You want fast leads with high buying intent</strong> → Google Ads',
    li_v4: '<strong>You want to build brand awareness and reach a specific audience</strong> → Meta Ads',
    li_v5: '<strong>You have budget for both</strong> → Run both; they complement each other perfectly',
    p13: 'For most Pune small businesses starting out, <strong>Google Ads is the safer first choice</strong> — the intent is higher, the results are easier to measure, and you\'re reaching people at the exact moment they\'re ready to buy.',
    h2_both: 'What About Running Both?',
    p14: 'The best digital marketing strategies use both platforms together. Google captures people who are already searching. Meta keeps your brand visible to your target audience so that when they eventually need your service, your name is familiar — and they search for you specifically.',
    p15_pre: "This is what our Growth plan at Digital Safalta covers — a tailored multi-channel approach. See our",
    p15_link: 'pricing page',
    p15_mid: "for details, or",
    p15_link2: 'get in touch',
    p15_end: "and we'll tell you honestly which platform makes more sense for your specific business before recommending anything.",
    h2_bottom: 'Bottom Line',
    p16: 'Neither Google Ads nor Meta Ads is universally "better." The right choice depends entirely on what you sell, who your customer is, and what stage your business is at. The wrong choice is running ads on either platform without a clear strategy — spending money and seeing no results.',
    p17_pre: "That's why we always start with a conversation before recommending anything. If you're not sure which platform is right for you,",
    p17_link: 'talk to us',
    p17_end: "— it's free, and we'll give you a straight answer.",
  },
  hi: {
    title: 'Google Ads बनाम Meta Ads — आपके व्यवसाय के लिए कौन बेहतर है?',
    description:
      'Facebook, Instagram या Google? ईमानदार जवाब इस पर निर्भर करता है कि आप क्या बेच रहे हैं और आपका ग्राहक कौन है। अपना विज्ञापन बजट कहां लगाएं यह तय करने के लिए एक व्यावहारिक तुलना।',
    date: '16 जून 2026',
    readTime: '7 मिनट',
    category: 'विज्ञापन और पेड मार्केटिंग',
    p1: 'डिजिटल मार्केटिंग में कदम रख रहे पुणे के व्यवसाय मालिकों का सबसे आम सवाल: "क्या मुझे Google पर विज्ञापन देना चाहिए या Facebook/Instagram पर?" यह एक अच्छा सवाल है — और ईमानदार जवाब यह है कि यह आपके व्यवसाय, आपके ग्राहक और आप क्या हासिल करना चाहते हैं इस पर निर्भर करता है।',
    p2: 'यह गाइड दोनों प्लेटफार्मों को सरल भाषा में समझाती है ताकि आप अपनी स्थिति के लिए सही निर्णय ले सकें।',
    h2_diff: 'मूलभूत अंतर',
    p3: 'सुविधाओं की तुलना से पहले, यह मूल अंतर समझें:',
    li_google: '<strong>Google Ads</strong> — आपका विज्ञापन उन लोगों को दिखाता है जो अभी <em>सक्रिय रूप से खोज</em> कर रहे हैं।',
    li_meta: '<strong>Meta Ads (Facebook/Instagram)</strong> — आपका विज्ञापन उन लोगों को दिखाता है जो <em>आपके आदर्श ग्राहक प्रोफ़ाइल से मेल खाते हैं</em>, भले ही वे आपको खोज नहीं रहे थे।',
    p4: 'Google <strong>मौजूदा मांग</strong> को पकड़ता है। Meta <strong>मांग बनाता है</strong>। यही अंतर तय करता है कि आपके लिए कौन सा प्लेटफॉर्म सही है।',
    h2_google: 'Google Ads कब बेहतर काम करता है',
    p5: 'Google Ads सही विकल्प है जब आपके ग्राहक आपके उत्पाद या सेवा को सक्रिय रूप से खोज रहे हों। उदाहरण:',
    li_g1: 'प्लंबर, इलेक्ट्रीशियन या AC रिपेयर — जब ज़रूरत हो तो लोग "AC repair near me" खोजते हैं',
    li_g2: 'CA या वकील — जब फाइल करना हो तो लोग "पुणे में CA GST फाइलिंग के लिए" खोजते हैं',
    li_g3: 'अस्पताल या क्लिनिक — समस्या होने पर लोग "पुणे में त्वचा रोग विशेषज्ञ" खोजते हैं',
    li_g4: 'शिफ्टिंग कंपनी — स्थानांतरण पर लोग "packers and movers Pune" खोजते हैं',
    p6: 'इन मामलों में, Google Ads आपको <strong>उच्च खरीद इरादे</strong> वाले किसी व्यक्ति के सामने रखता है — उन्हें अभी आपकी सेवा चाहिए। रूपांतरण दर आमतौर पर अधिक होती है क्योंकि आप किसी को बाधित नहीं कर रहे, बल्कि उनकी खोज का जवाब दे रहे हैं।',
    h2_meta: 'Meta Ads कब बेहतर काम करता है',
    p7: 'Meta Ads (Facebook + Instagram) तब सबसे अच्छा काम करता है जब आपको ऐसे लोगों तक पहुंचना हो जो आपके आदर्श ग्राहक से मेल खाते हों लेकिन सक्रिय रूप से नहीं खोज रहे — या जब आपके उत्पाद को बेचने के लिए दृश्य आकर्षण की ज़रूरत हो। उदाहरण:',
    li_m1: 'कपड़े की बुटीक या फैशन ब्रांड — Instagram स्क्रॉल करते हुए आपका विज्ञापन किसी को रोकता है',
    li_m2: 'रेस्टोरेंट या कैफे — कोई नया डाइनिंग अनुभव नहीं खोज रहा, लेकिन एक सुंदर फोटो उन्हें आने पर मजबूर करती है',
    li_m3: 'जिम या फिटनेस स्टूडियो — पुणे के 20-40 वर्ष के फिटनेस में रुचि रखने वाले लोगों को लक्षित करें',
    li_m4: 'रियल एस्टेट डेवलपर — पुणे में एक विशिष्ट आय वर्ग के लोगों को लक्षित करें',
    li_m5: 'ऑनलाइन कोर्स या कोचिंग — एक विशिष्ट पेशेवर समूह में जागरूकता बनाएं',
    p8: "Meta की टार्गेटिंग असाधारण रूप से सटीक है — आप उम्र, स्थान, आय स्तर, रुचियों, व्यवहारों और जीवन की घटनाओं (हाल ही में सगाई, नए माता-पिता) के आधार पर लोगों तक पहुंच सकते हैं।",
    h2_cost: 'लागत तुलना',
    p9: 'दोनों प्लेटफॉर्म अलग-अलग तरीकों से चार्ज करते हैं, और उद्योग और प्रतिस्पर्धा के अनुसार लागत बहुत अलग होती है:',
    li_c1: '<strong>Google Ads</strong> — आप प्रति क्लिक भुगतान करते हैं (PPC)। भारत में, क्लिक कम प्रतिस्पर्धी शब्दों के लिए ₹5 से लेकर कानूनी, चिकित्सा जैसे प्रतिस्पर्धी उद्योगों के लिए ₹200+ तक हो सकते हैं।',
    li_c2: '<strong>Meta Ads</strong> — आप प्रति इम्प्रेशन या प्रति परिणाम (क्लिक, लीड, खरीद) भुगतान करते हैं। Google की तुलना में आमतौर पर कम प्रति-क्लिक लागत, लेकिन कम इरादे का मतलब रूपांतरण से पहले अधिक क्लिक।',
    p10: 'एक मोटा गाइड: समान ₹10,000/महीने के बजट के लिए, Google Ads कम लेकिन अधिक इरादे-भारी विज़िटर लाएगा। Meta अधिक विज़िटर लाएगा जिन्हें रूपांतरित होने से पहले अधिक समझाने की ज़रूरत है।',
    h2_credit: 'एक विशेष अवसर: Google का मुफ़्त ₹20,000 विज्ञापन क्रेडिट',
    p11_pre: 'अगर आपने कभी Google Ads नहीं चलाया है, तो Google वर्तमान में पहले ₹20,000 खर्च करने पर ₹20,000 मुफ़्त विज्ञापन क्रेडिट देता है — ₹20,000 के खर्च में ₹40,000 का विज्ञापन। हमारी विस्तृत गाइड पढ़ें:',
    p11_link: 'यह ऑफर कैसे क्लेम करें',
    p11_end: '।',
    h2_verdict: 'निर्णय — आपको कौन चुनना चाहिए?',
    p12: 'एक सरल ढांचा:',
    li_v1: '<strong>जब लोग ज़रूरत पड़ने पर आपकी सेवा खोजते हैं</strong> → Google Ads से शुरू करें',
    li_v2: '<strong>आपका उत्पाद/सेवा दृश्य या जीवनशैली-आधारित है</strong> → Meta Ads से शुरू करें',
    li_v3: '<strong>उच्च खरीद इरादे के साथ तेज़ लीड चाहते हैं</strong> → Google Ads',
    li_v4: '<strong>ब्रांड जागरूकता बनाना और एक विशिष्ट दर्शक तक पहुंचना चाहते हैं</strong> → Meta Ads',
    li_v5: '<strong>दोनों के लिए बजट है</strong> → दोनों चलाएं; वे एक-दूसरे के पूरक हैं',
    p13: 'शुरू कर रहे अधिकांश पुणे के छोटे व्यवसायों के लिए, <strong>Google Ads पहला सुरक्षित विकल्प है</strong> — इरादा अधिक है, परिणाम मापना आसान है, और आप लोगों तक ठीक उस क्षण पहुंच रहे हैं जब वे खरीदने के लिए तैयार हैं।',
    h2_both: 'दोनों एक साथ चलाने के बारे में क्या?',
    p14: 'सर्वोत्तम डिजिटल मार्केटिंग रणनीतियां दोनों प्लेटफार्मों का एक साथ उपयोग करती हैं। Google उन लोगों को पकड़ता है जो पहले से खोज रहे हैं। Meta आपके ब्रांड को आपके लक्षित दर्शकों के सामने दृश्यमान रखता है ताकि जब उन्हें अंततः आपकी सेवा की ज़रूरत हो, तो आपका नाम परिचित हो।',
    p15_pre: 'Digital Safalta की Growth योजना यही कवर करती है — एक अनुकूलित मल्टी-चैनल दृष्टिकोण। विवरण के लिए हमारा',
    p15_link: 'मूल्य निर्धारण पृष्ठ',
    p15_mid: 'देखें, या',
    p15_link2: 'हमसे संपर्क करें',
    p15_end: 'और हम ईमानदारी से बताएंगे कि कुछ सुझाने से पहले आपके विशिष्ट व्यवसाय के लिए कौन सा प्लेटफॉर्म अधिक समझ में आता है।',
    h2_bottom: 'सारांश',
    p16: 'न तो Google Ads और न ही Meta Ads सार्वभौमिक रूप से "बेहतर" है। सही विकल्प पूरी तरह से इस पर निर्भर करता है कि आप क्या बेचते हैं, आपका ग्राहक कौन है और आपका व्यवसाय किस चरण में है।',
    p17_pre: 'इसीलिए हम कुछ भी सुझाने से पहले हमेशा बातचीत से शुरू करते हैं। अगर आप निश्चित नहीं हैं कि आपके लिए कौन सा प्लेटफॉर्म सही है,',
    p17_link: 'हमसे बात करें',
    p17_end: '— यह मुफ़्त है और हम एक सीधा जवाब देंगे।',
  },
  mr: {
    title: 'Google Ads विरुद्ध Meta Ads — तुमच्या व्यवसायासाठी कोणते चांगले?',
    description:
      'Facebook, Instagram की Google? प्रामाणिक उत्तर हे अवलंबून आहे तुम्ही काय विकता आणि तुमचा ग्राहक कोण आहे यावर. तुमचे जाहिरात बजट कुठे खर्च करायचे हे ठरवण्यासाठी एक व्यावहारिक तुलना.',
    date: '16 जून 2026',
    readTime: '7 मिनिटे',
    category: 'जाहिराती आणि पेड मार्केटिंग',
    p1: 'डिजिटल मार्केटिंग एक्सप्लोर करणाऱ्या पुण्यातील व्यावसायिकांचा सर्वात सामान्य प्रश्न: "मी Google वर जाहिरात द्यावी की Facebook/Instagram वर?" हा एक उत्तम प्रश्न आहे — आणि प्रामाणिक उत्तर म्हणजे हे तुमचा व्यवसाय, तुमचा ग्राहक आणि तुम्हाला काय साध्य करायचे आहे यावर अवलंबून आहे.',
    p2: 'हे मार्गदर्शन दोन्ही प्लॅटफॉर्म सोप्या भाषेत समजावते जेणेकरून तुम्ही तुमच्या परिस्थितीसाठी योग्य निर्णय घेऊ शकाल.',
    h2_diff: 'मूलभूत फरक',
    p3: 'वैशिष्ट्यांची तुलना करण्यापूर्वी, हा मूळ फरक समजून घ्या:',
    li_google: '<strong>Google Ads</strong> — तुमची जाहिरात त्यांना दाखवतो जे आत्ता <em>सक्रियपणे शोधत</em> आहेत.',
    li_meta: '<strong>Meta Ads (Facebook/Instagram)</strong> — तुमची जाहिरात त्यांना दाखवतो जे <em>तुमच्या आदर्श ग्राहक प्रोफाइलशी जुळतात</em>, जरी ते तुम्हाला शोधत नसले तरी.',
    p4: 'Google <strong>विद्यमान मागणी</strong> पकडतो. Meta <strong>मागणी निर्माण करतो</strong>. हाच फरक ठरवतो की तुमच्यासाठी कोणता प्लॅटफॉर्म योग्य आहे.',
    h2_google: 'Google Ads कधी चांगले काम करते',
    p5: 'तुमचे ग्राहक तुमचे उत्पादन किंवा सेवा सक्रियपणे शोधत असताना Google Ads योग्य निवड आहे. उदाहरणे:',
    li_g1: 'प्लंबर, इलेक्ट्रिशियन किंवा AC दुरुस्ती — तातडीने गरज असताना लोक "AC repair near me" शोधतात',
    li_g2: 'CA किंवा वकील — फाइल करायचे असताना लोक "पुण्यात GST फाइलिंगसाठी CA" शोधतात',
    li_g3: 'रुग्णालय किंवा दवाखाना — समस्या असताना लोक "पुण्यात त्वचारोगतज्ज्ञ" शोधतात',
    li_g4: 'शिफ्टिंग कंपनी — स्थलांतर करताना लोक "packers and movers Pune" शोधतात',
    p6: 'या प्रकरणांमध्ये, Google Ads तुम्हाला <strong>उच्च खरेदी हेतू</strong> असलेल्या कोणासमोर ठेवते — त्यांना आत्ता तुमची सेवा हवी आहे. रूपांतरण दर साधारणपणे जास्त असते कारण तुम्ही कोणाला व्यत्यय आणत नाही, तुम्ही त्यांच्या शोधाचे उत्तर देत आहात.',
    h2_meta: 'Meta Ads कधी चांगले काम करते',
    p7: 'Meta Ads (Facebook + Instagram) तेव्हा सर्वोत्तम काम करते जेव्हा तुम्हाला तुमच्या आदर्श ग्राहकाशी जुळणाऱ्या पण सक्रियपणे न शोधणाऱ्या लोकांपर्यंत पोहोचायचे असते — किंवा जेव्हा तुमच्या उत्पादाला विकण्यासाठी दृश्य आकर्षण आवश्यक असते. उदाहरणे:',
    li_m1: 'कपड्यांचे बुटीक किंवा फॅशन ब्रँड — Instagram स्क्रोल करताना तुमची जाहिरात कोणाला थांबवते',
    li_m2: 'रेस्टॉरंट किंवा कॅफे — कोणी नवीन जेवणाचा अनुभव शोधत नाही, पण एक सुंदर फोटो त्यांना यायला लावतो',
    li_m3: 'जिम किंवा फिटनेस स्टुडिओ — पुण्यातील 20-40 वयोगटातील फिटनेसमध्ये रस असलेल्या लोकांना लक्ष्य करा',
    li_m4: 'रिअल इस्टेट डेव्हलपर — पुण्यातील एखाद्या विशिष्ट उत्पन्न गटातील लोकांना लक्ष्य करा',
    li_m5: 'ऑनलाइन कोर्स किंवा कोचिंग व्यवसाय — एखाद्या विशिष्ट व्यावसायिक गटात जागरूकता निर्माण करा',
    p8: "Meta चे लक्ष्यीकरण अत्यंत अचूक आहे — तुम्ही वय, स्थान, उत्पन्न पातळी, आवडी, वर्तन आणि जीवनातील घटनांवर (नुकतीच सगाई, नवीन पालक) आधारित लोकांपर्यंत पोहोचू शकता.",
    h2_cost: 'खर्चाची तुलना',
    p9: 'दोन्ही प्लॅटफॉर्म वेगवेगळ्या प्रकारे शुल्क आकारतात आणि उद्योग आणि स्पर्धेनुसार खर्च मोठ्या प्रमाणात बदलतो:',
    li_c1: '<strong>Google Ads</strong> — तुम्ही प्रति क्लिक पैसे द्याल (PPC). भारतात, कमी स्पर्धेच्या शब्दांसाठी ₹5 ते कायदेशीर, वैद्यकीय यांसारख्या स्पर्धात्मक उद्योगांसाठी ₹200+ पर्यंत क्लिक असू शकतात.',
    li_c2: '<strong>Meta Ads</strong> — तुम्ही प्रति इम्प्रेशन किंवा प्रति निकाल (क्लिक, लीड, खरेदी) पैसे द्याल. साधारणपणे Google पेक्षा कमी प्रति-क्लिक खर्च, पण कमी हेतू म्हणजे रूपांतरणापूर्वी जास्त क्लिक.',
    p10: 'एक साधा अंदाज: समान ₹10,000/महिन्याच्या बजेटसाठी, Google Ads कमी पण जास्त हेतू-जड अभ्यागत आणेल. Meta जास्त अभ्यागत आणेल ज्यांना रूपांतरित होण्यापूर्वी अधिक पटवणे आवश्यक आहे.',
    h2_credit: 'एक विशेष संधी: Google चे विनामूल्य ₹20,000 जाहिरात क्रेडिट',
    p11_pre: 'जर तुम्ही कधीच Google Ads चालवले नसेल, तर Google सध्या पहिले ₹20,000 खर्च केल्यावर ₹20,000 विनामूल्य जाहिरात क्रेडिट देते. आमचे तपशीलवार मार्गदर्शन वाचा:',
    p11_link: 'हा ऑफर कसा मिळवायचा',
    p11_end: '.',
    h2_verdict: 'निर्णय — तुम्ही काय निवडावे?',
    p12: 'एक साधी चौकट:',
    li_v1: '<strong>लोक गरज पडल्यावर तुमची सेवा शोधतात</strong> → Google Ads ने सुरुवात करा',
    li_v2: '<strong>तुमचे उत्पादन/सेवा दृश्य किंवा जीवनशैली-चालित आहे</strong> → Meta Ads ने सुरुवात करा',
    li_v3: '<strong>उच्च खरेदी हेतूसह जलद लीड्स हव्या आहेत</strong> → Google Ads',
    li_v4: '<strong>ब्रँड जागरूकता निर्माण करायची आणि विशिष्ट प्रेक्षकांपर्यंत पोहोचायचे आहे</strong> → Meta Ads',
    li_v5: '<strong>दोन्हींसाठी बजेट आहे</strong> → दोन्ही चालवा; ते एकमेकांना पूरक आहेत',
    p13: 'सुरुवात करणाऱ्या बहुतेक पुण्यातील लहान व्यवसायांसाठी, <strong>Google Ads हा पहिला सुरक्षित पर्याय आहे</strong> — हेतू जास्त आहे, निकाल मोजणे सोपे आहे, आणि तुम्ही लोकांपर्यंत नेमक्या त्या क्षणी पोहोचत आहात जेव्हा ते खरेदी करण्यास तयार आहेत.',
    h2_both: 'दोन्ही एकत्र चालवण्याबद्दल काय?',
    p14: 'सर्वोत्तम डिजिटल मार्केटिंग धोरणे दोन्ही प्लॅटफॉर्म एकत्र वापरतात. Google आधीच शोधणाऱ्या लोकांना पकडतो. Meta तुमच्या लक्ष्य प्रेक्षकांसमोर तुमचा ब्रँड दृश्यमान ठेवतो जेणेकरून जेव्हा त्यांना शेवटी तुमची सेवा लागते, तेव्हा तुमचे नाव परिचित असते.',
    p15_pre: 'Digital Safalta च्या Growth योजनेत हेच समाविष्ट आहे — एक अनुकूलित मल्टी-चॅनल दृष्टिकोण. तपशीलांसाठी आमचे',
    p15_link: 'किंमत पृष्ठ',
    p15_mid: 'पाहा, किंवा',
    p15_link2: 'आमच्याशी संपर्क करा',
    p15_end: 'आणि काहीही शिफारस करण्यापूर्वी आम्ही तुमच्या विशिष्ट व्यवसायासाठी कोणता प्लॅटफॉर्म अधिक योग्य आहे हे प्रामाणिकपणे सांगू.',
    h2_bottom: 'सारांश',
    p16: 'Google Ads किंवा Meta Ads यापैकी कोणतेही सार्वत्रिकदृष्ट्या "चांगले" नाही. योग्य निवड पूर्णपणे तुम्ही काय विकता, तुमचा ग्राहक कोण आहे आणि तुमचा व्यवसाय कोणत्या टप्प्यावर आहे यावर अवलंबून आहे.',
    p17_pre: 'म्हणूनच आम्ही काहीही शिफारस करण्यापूर्वी नेहमी संभाषणाने सुरुवात करतो. तुम्हाला खात्री नसेल की तुमच्यासाठी कोणता प्लॅटफॉर्म योग्य आहे,',
    p17_link: 'आमच्याशी बोला',
    p17_end: '— हे विनामूल्य आहे आणि आम्ही एक थेट उत्तर देऊ.',
  },
};

interface Props {
  lang?: Lang;
}

export function GoogleAdsVsMetaAds({ lang = 'en' }: Props) {
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

      <h2>{c.h2_diff}</h2>
      <p>{c.p3}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_google }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_meta }} />
      </ul>
      <p dangerouslySetInnerHTML={{ __html: c.p4 }} />

      <h2>{c.h2_google}</h2>
      <p>{c.p5}</p>
      <ul>
        <li>{c.li_g1}</li>
        <li>{c.li_g2}</li>
        <li>{c.li_g3}</li>
        <li>{c.li_g4}</li>
      </ul>
      <p dangerouslySetInnerHTML={{ __html: c.p6 }} />

      <h2>{c.h2_meta}</h2>
      <p>{c.p7}</p>
      <ul>
        <li>{c.li_m1}</li>
        <li>{c.li_m2}</li>
        <li>{c.li_m3}</li>
        <li>{c.li_m4}</li>
        <li>{c.li_m5}</li>
      </ul>
      <p>{c.p8}</p>

      <h2>{c.h2_cost}</h2>
      <p>{c.p9}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_c1 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_c2 }} />
      </ul>
      <p>{c.p10}</p>

      <h2>{c.h2_credit}</h2>
      <p>
        {c.p11_pre}{' '}
        <Link to="/blog/google-free-ad-credit">{c.p11_link}</Link>
        {c.p11_end}
      </p>

      <h2>{c.h2_verdict}</h2>
      <p>{c.p12}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_v1 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_v2 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_v3 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_v4 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_v5 }} />
      </ul>
      <p dangerouslySetInnerHTML={{ __html: c.p13 }} />

      <h2>{c.h2_both}</h2>
      <p>{c.p14}</p>
      <p>
        {c.p15_pre} <Link to="/pricing">{c.p15_link}</Link> {c.p15_mid}{' '}
        <Link to="/contact">{c.p15_link2}</Link> {c.p15_end}
      </p>

      <h2>{c.h2_bottom}</h2>
      <p>{c.p16}</p>
      <p>
        {c.p17_pre} <Link to="/contact">{c.p17_link}</Link>
        {c.p17_end}
      </p>
    </BlogPost>
  );
}
