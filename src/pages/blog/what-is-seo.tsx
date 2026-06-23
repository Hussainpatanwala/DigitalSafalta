import { BlogPost } from '../../components/BlogPost';
import { Link } from 'react-router-dom';

type Lang = 'en' | 'hi' | 'mr';

const COPY = {
  en: {
    title: 'What is SEO? A Simple Guide for Pune Business Owners',
    description:
      "SEO stands for Search Engine Optimisation — but what does that actually mean for your business? Learn how Google decides which websites to show first, and what you can do about it.",
    date: 'June 16, 2026',
    readTime: '6 min',
    category: 'Beginner Guide',
    p1: 'Every day, thousands of people in Pune type things like "dentist near me", "best restaurant in Koregaon Park", or "website designer Pune" into Google. SEO is what determines whether your business appears when they do — or whether your competitor does instead.',
    p2: "This guide explains SEO in plain language, without the technical jargon that most agencies use to confuse you.",
    h2_stand: 'What Does SEO Stand For?',
    p3: "SEO stands for <strong>Search Engine Optimisation</strong>. It's the process of improving your website so that Google (and other search engines like Bing) rank it higher when someone searches for something relevant to your business.",
    p4: 'Higher ranking = more people see your website = more enquiries and customers. Simple.',
    h2_google: 'How Does Google Decide Who Appears First?',
    p5: "Google has one job: give users the most relevant, trustworthy result for what they searched. To decide this, Google looks at hundreds of factors. The main ones you need to know:",
    li_rel: '<strong>Relevance</strong> — does your website actually talk about what the person searched for?',
    li_auth: '<strong>Authority</strong> — do other reputable websites link to yours? (This tells Google you\'re trustworthy)',
    li_tech: '<strong>Technical quality</strong> — does your site load fast, work on mobile, and have no errors?',
    li_content: '<strong>Content quality</strong> — is your content genuinely useful and detailed?',
    li_local: '<strong>Local signals</strong> — for "near me" searches, does Google know where your business is located?',
    h2_types: 'Two Types of SEO Results',
    p6: 'When you search Google, you see two types of results:',
    li_paid: '<strong>Paid results</strong> (Google Ads) — appear at the very top with a small "Sponsored" label. You pay every time someone clicks.',
    li_organic: '<strong>Organic results</strong> — appear below the ads. These are free — Google shows them because it thinks they\'re the best answer. SEO is about getting into these organic results.',
    p7: "Most people click on organic results over ads — which is why good SEO has long-term value that paid ads don't.",
    h2_local: 'Local SEO — Especially Important for Pune Businesses',
    p8: 'When someone searches "digital marketing agency near me" or "plumber in Wakad", Google shows a map with 3 local businesses highlighted — called the <strong>Local Pack</strong>. This is driven by your <strong>Google Business Profile</strong>, not your website alone.',
    p9: "Local SEO is a combination of your Google Business Profile, the consistency of your name/address/phone across the web, and reviews from real customers. For a local Pune business, appearing in the Local Pack is often more valuable than ranking #1 in regular search results.",
    h2_time: 'How Long Does SEO Take?',
    p10: "This is the most important question — and the one most agencies avoid answering honestly.",
    p11: "<strong>Honest answer:</strong> typically 3-6 months to see meaningful results, sometimes longer for competitive search terms. SEO is not instant. Anyone who promises \"page 1 in 2 weeks\" is either lying or planning to use tactics that will eventually get your site penalised by Google.",
    p12: "The reason it takes time: Google needs to discover your website, crawl and index it, observe how users interact with it, and compare it to thousands of competing sites before deciding to rank it higher. This process is slow — but once it works, the results compound over time.",
    h2_now: 'What Can You Do Right Now?',
    p13: "Here's where to start if you're a Pune business owner with zero SEO currently:",
    li_site: '<strong>Get a proper website</strong> — you can\'t rank on Google without one. This is the foundation of everything.',
    li_gbp: '<strong>Set up Google Business Profile</strong> — free, fast, and the single biggest win for local searches. See our guide on this.',
    li_gsc: '<strong>Add your business to Google Search Console</strong> — tells Google your site exists and which pages to index.',
    li_mobile: '<strong>Make sure your site loads fast on mobile</strong> — Google heavily prioritises mobile-friendly sites.',
    li_content2: '<strong>Write content that answers questions your customers ask</strong> — articles like this one help you rank for informational searches and build trust.',
    h2_hire: 'Do You Need to Hire Someone for SEO?',
    p14: "For the basics above — no, you can do them yourself with some time and patience. For competitive search terms (\"digital marketing agency Pune\"), ongoing SEO work including content, link building, and technical improvements — yes, professional help will get you there significantly faster and with better results.",
    p15_pre: "At Digital Safalta, basic SEO setup is included with every website we build. For ongoing SEO, check our",
    p15_link: 'pricing page',
    p15_end: 'for current plans.',
    h2_bottom: 'The Bottom Line',
    p16: "SEO is the process of making your website appear higher on Google — for free, for every relevant search, indefinitely. It takes time to build, but once it works, it's one of the most cost-effective ways to grow a business. Think of it as planting a tree: slow at first, but eventually it gives shade (and customers) for years.",
  },
  hi: {
    title: 'SEO क्या है? पुणे के व्यवसाय मालिकों के लिए एक सरल गाइड',
    description:
      'SEO का मतलब है सर्च इंजन ऑप्टिमाइज़ेशन — लेकिन आपके व्यवसाय के लिए इसका वास्तव में क्या अर्थ है? जानें कि Google कैसे तय करता है कि कौन सी वेबसाइट पहले दिखाई दे, और आप इस बारे में क्या कर सकते हैं।',
    date: '16 जून 2026',
    readTime: '6 मिनट',
    category: 'शुरुआती गाइड',
    p1: 'हर रोज़ पुणे में हज़ारों लोग Google पर "dentist near me", "Koregaon Park में बेस्ट रेस्टोरेंट" या "website designer Pune" जैसी चीज़ें टाइप करते हैं। SEO यह तय करता है कि जब वे खोजते हैं तो आपका व्यवसाय दिखाई दे — या आपके प्रतिस्पर्धी का।',
    p2: 'यह गाइड SEO को सरल भाषा में समझाती है, बिना उस तकनीकी शब्दावली के जिससे अधिकांश एजेंसियां आपको भ्रमित करती हैं।',
    h2_stand: 'SEO का पूरा नाम क्या है?',
    p3: 'SEO का मतलब है <strong>सर्च इंजन ऑप्टिमाइज़ेशन</strong>। यह आपकी वेबसाइट को बेहतर बनाने की प्रक्रिया है ताकि Google (और Bing जैसे अन्य सर्च इंजन) इसे तब ऊंचा रैंक करें जब कोई आपके व्यवसाय से संबंधित कुछ खोजे।',
    p4: 'ऊंची रैंकिंग = अधिक लोग आपकी वेबसाइट देखते हैं = अधिक पूछताछ और ग्राहक। सरल।',
    h2_google: 'Google कैसे तय करता है कि पहले कौन दिखाई दे?',
    p5: "Google का एक काम है: उपयोगकर्ताओं को उनकी खोज के लिए सबसे प्रासंगिक, विश्वसनीय परिणाम देना। इसके लिए Google सैकड़ों कारकों को देखता है। मुख्य जो आपको जानने चाहिए:",
    li_rel: '<strong>प्रासंगिकता</strong> — क्या आपकी वेबसाइट वास्तव में उसी बारे में बात करती है जो व्यक्ति खोज रहा है?',
    li_auth: '<strong>प्राधिकार</strong> — क्या अन्य प्रतिष्ठित वेबसाइट आपसे लिंक करती हैं? (यह Google को बताता है कि आप विश्वसनीय हैं)',
    li_tech: '<strong>तकनीकी गुणवत्ता</strong> — क्या आपकी साइट तेज़ी से लोड होती है, मोबाइल पर काम करती है और बिना त्रुटियों के?',
    li_content: '<strong>सामग्री की गुणवत्ता</strong> — क्या आपकी सामग्री वास्तव में उपयोगी और विस्तृत है?',
    li_local: '<strong>स्थानीय संकेत</strong> — "near me" खोजों के लिए, क्या Google जानता है कि आपका व्यवसाय कहां है?',
    h2_types: 'SEO परिणामों के दो प्रकार',
    p6: 'जब आप Google पर खोजते हैं, तो आप दो प्रकार के परिणाम देखते हैं:',
    li_paid: '<strong>पेड परिणाम</strong> (Google Ads) — बिल्कुल शीर्ष पर "Sponsored" लेबल के साथ दिखते हैं। हर क्लिक पर आप भुगतान करते हैं।',
    li_organic: '<strong>ऑर्गेनिक परिणाम</strong> — विज्ञापनों के नीचे दिखते हैं। ये मुफ़्त हैं — Google इन्हें इसलिए दिखाता है क्योंकि वह सोचता है कि ये सबसे अच्छा जवाब हैं। SEO इन्हीं ऑर्गेनिक परिणामों में आने के बारे में है।',
    p7: 'अधिकांश लोग विज्ञापनों की तुलना में ऑर्गेनिक परिणामों पर क्लिक करते हैं — यही कारण है कि अच्छे SEO का दीर्घकालिक मूल्य पेड विज्ञापनों से अधिक होता है।',
    h2_local: 'लोकल SEO — पुणे के व्यवसायों के लिए विशेष रूप से महत्वपूर्ण',
    p8: 'जब कोई "digital marketing agency near me" या "Wakad में plumber" खोजता है, Google एक नक्शा दिखाता है जिसमें 3 स्थानीय व्यवसाय हाइलाइट होते हैं — इसे <strong>Local Pack</strong> कहते हैं। यह आपकी <strong>Google Business Profile</strong> से चलता है, केवल आपकी वेबसाइट से नहीं।',
    p9: 'लोकल SEO आपकी Google Business Profile, वेब पर आपके नाम/पते/फोन की एकरूपता, और वास्तविक ग्राहकों की समीक्षाओं का संयोजन है। एक स्थानीय पुणे व्यवसाय के लिए, Local Pack में दिखना अक्सर नियमित खोज परिणामों में #1 रैंकिंग से अधिक मूल्यवान है।',
    h2_time: 'SEO में कितना समय लगता है?',
    p10: 'यह सबसे महत्वपूर्ण प्रश्न है — और वह जिसका उत्तर अधिकांश एजेंसियां ईमानदारी से देने से बचती हैं।',
    p11: '<strong>ईमानदार उत्तर:</strong> आमतौर पर 3-6 महीने में सार्थक परिणाम, प्रतिस्पर्धी खोज शब्दों के लिए कभी-कभी अधिक समय। SEO तत्काल नहीं है। जो कोई "2 हफ्तों में पेज 1" का वादा करे, वह या तो झूठ बोल रहा है या ऐसी तकनीक उपयोग करने की योजना बना रहा है जो अंततः Google से आपकी साइट को दंडित करवाएगी।',
    p12: 'इसमें समय लगने का कारण: Google को आपकी वेबसाइट खोजनी, उसे क्रॉल और इंडेक्स करना, उपयोगकर्ता उससे कैसे इंटरैक्ट करते हैं यह देखना, और इसे ऊंचा रैंक करने का निर्णय लेने से पहले हजारों प्रतिस्पर्धी साइटों से तुलना करनी होती है। यह प्रक्रिया धीमी है — लेकिन एक बार काम करना शुरू हो जाए, परिणाम समय के साथ बढ़ते हैं।',
    h2_now: 'अभी आप क्या कर सकते हैं?',
    p13: 'अगर आप शून्य SEO वाले पुणे के व्यवसाय मालिक हैं तो शुरुआत यहां से करें:',
    li_site: '<strong>एक उचित वेबसाइट बनाएं</strong> — इसके बिना आप Google पर रैंक नहीं कर सकते। यह सब कुछ की नींव है।',
    li_gbp: '<strong>Google Business Profile सेट करें</strong> — मुफ़्त, तेज़, और स्थानीय खोजों के लिए सबसे बड़ी जीत।',
    li_gsc: '<strong>अपने व्यवसाय को Google Search Console में जोड़ें</strong> — Google को बताता है कि आपकी साइट मौजूद है और कौन से पृष्ठ इंडेक्स करने हैं।',
    li_mobile: '<strong>सुनिश्चित करें कि आपकी साइट मोबाइल पर तेज़ लोड हो</strong> — Google मोबाइल-अनुकूल साइटों को बहुत प्राथमिकता देता है।',
    li_content2: '<strong>ऐसी सामग्री लिखें जो आपके ग्राहकों के सवालों का जवाब दे</strong> — इस तरह के लेख आपको सूचनात्मक खोजों में रैंक करने और विश्वास बनाने में मदद करते हैं।',
    h2_hire: 'क्या आपको SEO के लिए किसी को नियुक्त करने की ज़रूरत है?',
    p14: 'ऊपर बताई गई बुनियादी बातों के लिए — नहीं, आप इन्हें कुछ समय और धैर्य के साथ खुद कर सकते हैं। प्रतिस्पर्धी खोज शब्दों के लिए ("digital marketing agency Pune"), सामग्री, लिंक बिल्डिंग और तकनीकी सुधारों सहित निरंतर SEO कार्य — हां, पेशेवर मदद आपको काफी तेज़ी से और बेहतर परिणामों के साथ वहां पहुंचाएगी।',
    p15_pre: 'Digital Safalta में, बेसिक SEO सेटअप हमारे द्वारा बनाई गई हर वेबसाइट के साथ शामिल है। चल रहे SEO के लिए, हमारा',
    p15_link: 'मूल्य निर्धारण पृष्ठ',
    p15_end: 'देखें।',
    h2_bottom: 'सारांश',
    p16: 'SEO आपकी वेबसाइट को Google पर ऊंचा दिखाने की प्रक्रिया है — मुफ़्त में, हर प्रासंगिक खोज के लिए, अनिश्चित काल तक। इसे बनने में समय लगता है, लेकिन एक बार काम करना शुरू हो जाए, तो यह व्यवसाय बढ़ाने के सबसे किफायती तरीकों में से एक है। इसे एक पेड़ लगाने की तरह समझें: पहले धीमा, लेकिन अंततः वर्षों तक छाया (और ग्राहक) देता है।',
  },
  mr: {
    title: 'SEO म्हणजे काय? पुण्यातील व्यावसायिकांसाठी एक सोपे मार्गदर्शन',
    description:
      'SEO म्हणजे सर्च इंजिन ऑप्टिमायझेशन — पण तुमच्या व्यवसायासाठी याचा नक्की अर्थ काय? Google कोणती वेबसाइट आधी दाखवायचे हे कसे ठरवते आणि तुम्ही याबद्दल काय करू शकता हे जाणून घ्या.',
    date: '16 जून 2026',
    readTime: '6 मिनिटे',
    category: 'सुरुवातीचे मार्गदर्शन',
    p1: 'रोज पुण्यात हजारो लोक Google वर "dentist near me", "कोरेगाव पार्कमधील बेस्ट रेस्टॉरंट" किंवा "website designer Pune" असे टाइप करतात. SEO हेच ठरवते की ते शोधतात तेव्हा तुमचा व्यवसाय दिसतो — की तुमच्या स्पर्धकाचा.',
    p2: 'हे मार्गदर्शन SEO सोप्या भाषेत समजावते — बहुतेक एजन्सी वापरतात तसे तांत्रिक शब्द नाहीत.',
    h2_stand: 'SEO चे पूर्ण नाव काय?',
    p3: 'SEO म्हणजे <strong>सर्च इंजिन ऑप्टिमायझेशन</strong>. कोणी तुमच्या व्यवसायाशी संबंधित काही शोधले तर Google (आणि Bing सारखे इतर शोध इंजिन) तुमची वेबसाइट वरती दाखवेल अशी ती सुधारण्याची प्रक्रिया आहे.',
    p4: 'उच्च रँकिंग = अधिक लोक तुमची वेबसाइट पाहतात = अधिक चौकश्या आणि ग्राहक. सोपे.',
    h2_google: 'Google कोण आधी दिसेल हे कसे ठरवते?',
    p5: 'Google चे एक काम आहे: वापरकर्त्यांना त्यांच्या शोधासाठी सर्वात संबंधित, विश्वासार्ह निकाल द्यायचा. यासाठी Google शेकडो घटक पाहतो. तुम्हाला माहित असणे आवश्यक असलेले मुख्य घटक:',
    li_rel: '<strong>प्रासंगिकता</strong> — तुमची वेबसाइट खरोखरच त्याबद्दल बोलते का जे ती व्यक्ती शोधत आहे?',
    li_auth: '<strong>अधिकार</strong> — इतर प्रतिष्ठित वेबसाइट तुमच्याशी लिंक करतात का? (हे Google ला सांगते की तुम्ही विश्वासार्ह आहात)',
    li_tech: '<strong>तांत्रिक गुणवत्ता</strong> — तुमची साइट जलद लोड होते का, मोबाइलवर काम करते का आणि कोणत्याही चुका नाहीत का?',
    li_content: '<strong>सामग्रीची गुणवत्ता</strong> — तुमची सामग्री खरोखरच उपयुक्त आणि तपशीलवार आहे का?',
    li_local: '<strong>स्थानिक संकेत</strong> — "जवळपास" शोधांसाठी, Google ला माहित आहे का की तुमचा व्यवसाय कुठे आहे?',
    h2_types: 'SEO निकालांचे दोन प्रकार',
    p6: 'Google वर शोधल्यावर तुम्हाला दोन प्रकारचे निकाल दिसतात:',
    li_paid: '<strong>सशुल्क निकाल</strong> (Google Ads) — अगदी वरती "Sponsored" लेबलसह दिसतात. कोणी क्लिक केल्यावर तुम्ही पैसे द्याल.',
    li_organic: '<strong>सेंद्रिय निकाल</strong> — जाहिरातींच्या खाली दिसतात. हे विनामूल्य आहेत — Google त्यांना दाखवतो कारण ते सर्वोत्तम उत्तर आहेत असे त्याला वाटते. SEO म्हणजे या सेंद्रिय निकालांमध्ये येणे.',
    p7: 'बहुतेक लोक जाहिरातींपेक्षा सेंद्रिय निकालांवर क्लिक करतात — म्हणूनच चांगल्या SEO ला सशुल्क जाहिरातींपेक्षा दीर्घकालीन मूल्य आहे.',
    h2_local: 'लोकल SEO — पुण्यातील व्यवसायांसाठी विशेषतः महत्त्वाचे',
    p8: 'कोणी "digital marketing agency near me" किंवा "वाकडमधील plumber" शोधले तर Google नकाशा दाखवतो ज्यात 3 स्थानिक व्यवसाय अधोरेखित असतात — याला <strong>Local Pack</strong> म्हणतात. हे तुमच्या <strong>Google Business Profile</strong> मुळे होते, केवळ वेबसाइटमुळे नाही.',
    p9: 'लोकल SEO म्हणजे तुमची Google Business Profile, वेबवर तुमच्या नाव/पत्ता/फोनची एकसूत्रता आणि खऱ्या ग्राहकांच्या समीक्षा यांचे संयोजन. स्थानिक पुणे व्यवसायासाठी, Local Pack मध्ये येणे अनेकदा नियमित शोध निकालांमध्ये #1 रँकिंगपेक्षा अधिक मौल्यवान असते.',
    h2_time: 'SEO ला किती वेळ लागतो?',
    p10: 'हा सर्वात महत्त्वाचा प्रश्न आहे — आणि तो जो बहुतेक एजन्सी प्रामाणिकपणे उत्तर देणे टाळतात.',
    p11: '<strong>प्रामाणिक उत्तर:</strong> साधारणपणे 3-6 महिन्यांत अर्थपूर्ण निकाल, स्पर्धात्मक शोध शब्दांसाठी कधीकधी जास्त वेळ. SEO त्वरित नाही. "2 आठवड्यांत पेज 1" असे वचन देणारा एकतर खोटे बोलतो किंवा अशा युक्त्या वापरण्याची योजना करतो ज्यामुळे अखेरीस Google तुमच्या साइटला शिक्षा करेल.',
    p12: 'वेळ लागण्याचे कारण: Google ला तुमची वेबसाइट सापडायला, ती क्रॉल आणि इंडेक्स करायला, वापरकर्ते तिच्याशी कसे संवाद साधतात ते पाहायला, आणि ती वरती रँक करण्याचा निर्णय घेण्यापूर्वी हजारो स्पर्धक साइटशी तुलना करायला वेळ लागतो. ही प्रक्रिया संथ आहे — पण एकदा काम सुरू झाले की निकाल वेळाबरोबर वाढत जातात.',
    h2_now: 'तुम्ही आत्ता काय करू शकता?',
    p13: 'जर तुम्ही सध्या शून्य SEO असलेले पुणे व्यावसायिक असाल तर इथून सुरुवात करा:',
    li_site: '<strong>योग्य वेबसाइट बनवा</strong> — तिच्याशिवाय तुम्ही Google वर रँक करू शकत नाही. हा सर्व गोष्टींचा पाया आहे.',
    li_gbp: '<strong>Google Business Profile सेट करा</strong> — विनामूल्य, जलद, आणि स्थानिक शोधांसाठी सर्वात मोठा फायदा.',
    li_gsc: '<strong>तुमचा व्यवसाय Google Search Console मध्ये जोडा</strong> — Google ला सांगते की तुमची साइट अस्तित्वात आहे आणि कोणती पाने इंडेक्स करायची.',
    li_mobile: '<strong>तुमची साइट मोबाइलवर जलद लोड होते याची खात्री करा</strong> — Google मोबाइल-अनुकूल साइटना खूप प्राधान्य देतो.',
    li_content2: '<strong>तुमचे ग्राहक विचारतात त्या प्रश्नांची उत्तरे देणारी सामग्री लिहा</strong> — असे लेख माहितीपर शोधांमध्ये रँक करण्यास आणि विश्वास निर्माण करण्यास मदत करतात.',
    h2_hire: 'SEO साठी कोणाला नियुक्त करण्याची गरज आहे का?',
    p14: 'वरील मूलभूत गोष्टींसाठी — नाही, तुम्ही स्वतः थोडा वेळ आणि संयमाने करू शकता. स्पर्धात्मक शोध शब्दांसाठी ("digital marketing agency Pune"), सामग्री, लिंक बिल्डिंग आणि तांत्रिक सुधारणांसह सतत SEO काम — हो, व्यावसायिक मदत तुम्हाला खूप जलद आणि चांगल्या निकालांसह तिथे पोहोचवेल.',
    p15_pre: 'Digital Safalta मध्ये, आम्ही बांधतो त्या प्रत्येक वेबसाइटमध्ये मूलभूत SEO सेटअप समाविष्ट आहे. सतत SEO साठी, आमचे',
    p15_link: 'किंमत पृष्ठ',
    p15_end: 'पाहा.',
    h2_bottom: 'सारांश',
    p16: 'SEO म्हणजे तुमची वेबसाइट Google वर वरती दाखवणे — विनामूल्य, प्रत्येक संबंधित शोधासाठी, अनिश्चित काळासाठी. बनवायला वेळ लागतो, पण एकदा काम सुरू झाले की व्यवसाय वाढवण्याचा हा सर्वात किफायतशीर मार्गांपैकी एक आहे. हे एक झाड लावण्यासारखे समजा: सुरुवातीला संथ, पण अखेरीस वर्षानुवर्षे सावली (आणि ग्राहक) देते.',
  },
};

interface Props {
  lang?: Lang;
}

export function WhatIsSEO({ lang = 'en' }: Props) {
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

      <h2>{c.h2_stand}</h2>
      <p dangerouslySetInnerHTML={{ __html: c.p3 }} />
      <p>{c.p4}</p>

      <h2>{c.h2_google}</h2>
      <p>{c.p5}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_rel }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_auth }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_tech }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_content }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_local }} />
      </ul>

      <h2>{c.h2_types}</h2>
      <p>{c.p6}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_paid }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_organic }} />
      </ul>
      <p>{c.p7}</p>

      <h2>{c.h2_local}</h2>
      <p dangerouslySetInnerHTML={{ __html: c.p8 }} />
      <p>{c.p9}</p>

      <h2>{c.h2_time}</h2>
      <p>{c.p10}</p>
      <p dangerouslySetInnerHTML={{ __html: c.p11 }} />
      <p>{c.p12}</p>

      <h2>{c.h2_now}</h2>
      <p>{c.p13}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_site }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_gbp }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_gsc }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_mobile }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_content2 }} />
      </ul>

      <h2>{c.h2_hire}</h2>
      <p>{c.p14}</p>
      <p>
        {c.p15_pre} <Link to="/pricing">{c.p15_link}</Link> {c.p15_end}
      </p>

      <h2>{c.h2_bottom}</h2>
      <p>{c.p16}</p>
    </BlogPost>
  );
}
