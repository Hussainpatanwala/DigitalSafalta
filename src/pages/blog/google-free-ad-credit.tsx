import { BlogPost } from '../../components/BlogPost';
import { Link } from 'react-router-dom';

type Lang = 'en' | 'hi' | 'mr';

const COPY = {
  en: {
    title: "Google's Free ₹20,000 Ad Credit — How to Claim It for Your Business",
    description:
      "Google offers ₹20,000 in free ad credit when you spend your first ₹20,000 on Google Ads. That's effectively ₹40,000 worth of reach. Here's exactly how to claim it.",
    date: 'June 16, 2026',
    readTime: '5 min',
    category: 'Ads & Paid Marketing',
    p1: "If you've never run Google Ads before, there's a promotion currently running that's worth knowing about: <strong>spend ₹20,000 on Google Ads, and Google gives you an additional ₹20,000 in free ad credit</strong>. That's ₹40,000 worth of advertising for the price of ₹20,000 — effectively doubling your reach from day one.",
    p2: "This is a genuine Google offer (not a third-party promotion) and it's available to new Google Ads accounts. Here's everything you need to know.",
    h2_what: 'What Exactly Is the Offer?',
    p3: 'Google periodically runs a "spend X, get X free" promotion for first-time advertisers. The current offer for India: when you spend ₹20,000 on Google Ads within 60 days of creating your account and adding a payment method, Google credits your account with ₹20,000 in free ad spend.',
    p4: "The free credit appears automatically in your account once you've met the spending threshold — you don't need to apply for it separately.",
    h2_eligible: 'Who Is Eligible?',
    li_e1: 'You must be a <strong>new Google Ads advertiser</strong> — meaning you\'ve never run Google Ads before under this Google account',
    li_e2: 'You must <strong>add a valid payment method</strong> to your account',
    li_e3: 'You must <strong>spend ₹20,000 within 60 days</strong> of activating your account',
    li_e4: 'The offer is available to businesses, not personal use',
    p5: "Note: the exact terms of this promotion can change. Always verify current terms at <strong>ads.google.com</strong> when you create your account — the offer details are shown during the signup process.",
    h2_steps: 'How to Claim It — Step by Step',
    h3_s1: 'Step 1: Create a Google Ads Account',
    p6: 'Go to <strong>ads.google.com</strong> and sign in with your Google account. Click "Start now." If you\'re eligible for the promotional credit, you\'ll see it mentioned during the setup process.',
    h3_s2: 'Step 2: Set Up Your First Campaign',
    p7: 'Google will walk you through setting up your first campaign. For most Pune small businesses, a "Search" campaign targeting people searching for your service in Pune is the right starting point.',
    p8: "Important: don't rush through the setup. The targeting, keywords, and ad copy you set up now determine whether your ₹20,000 (and the free ₹20,000) gets spent effectively or wasted.",
    h3_s3: 'Step 3: Add a Payment Method',
    p9: 'Add your credit card, debit card, or UPI/net banking. Google Ads in India supports most major payment methods. The promotional credit offer is linked to adding a valid payment method for the first time.',
    h3_s4: 'Step 4: Spend ₹20,000 Within 60 Days',
    p10: 'This is the qualifying spend. You have 60 days from account activation to spend ₹20,000 in ad spend. This averages out to roughly ₹333/day — very manageable for most small businesses.',
    h3_s5: 'Step 5: Receive Your Free ₹20,000 Credit',
    p11: "Once you've hit the ₹20,000 spend threshold, the free credit is automatically applied to your account within a few days. You'll see it in your account balance and it will be used for your next campaigns.",
    h2_spend: 'How to Make Sure the ₹20,000 Is Well Spent',
    p12: "This is the critical part. Many businesses claim this offer, spend ₹20,000 poorly (wrong keywords, weak ads, no targeting), see no results, and conclude \"Google Ads doesn't work.\" The problem wasn't Google Ads — it was the setup.",
    p13: "Here's what good spending looks like:",
    li_s1: '<strong>Target specific, relevant keywords</strong> — "website designer Pune" converts better than "website" (too broad)',
    li_s2: '<strong>Set geographic targeting to Pune</strong> (or wherever your customers are) — don\'t pay for clicks from Mumbai or Delhi if you serve Pune',
    li_s3: '<strong>Write a clear ad with a specific offer</strong> — "Professional Website in 7 Days from ₹15,000 — Get a Free Quote" will outperform "We build websites — contact us"',
    li_s4: '<strong>Send clicks to a relevant landing page</strong> — if your ad is about website design, send the click to your website design service page, not your homepage',
    li_s5: '<strong>Track conversions</strong> — set up conversion tracking so you know which clicks turned into enquiries or calls',
    h2_help: 'Should You Manage This Yourself or Get Help?',
    p14: "If you're comfortable with technology and have time to learn, you can set up Google Ads yourself — Google has good tutorials, and the ₹20,000 credit gives you room to learn from mistakes without it costing extra.",
    p15_pre: "If you'd rather have it set up properly from day one — maximising the value of both your ₹20,000 spend and the free ₹20,000 credit — that's exactly what we do at Digital Safalta. Our Starter Ads plan at ₹15,000/month includes full Google Ads management. See our",
    p15_link: 'pricing page',
    p15_mid: 'or',
    p15_link2: 'get in touch',
    p15_end: 'to discuss how we can help you get the most from this offer.',
    h2_bottom: 'Bottom Line',
    p16: "Google's ₹20,000 free credit offer is real, straightforward to claim, and genuinely valuable — especially for a first-time advertiser who's cautious about spending money on ads. The key is making sure the ₹20,000 you spend to qualify is spent well, so both your money and Google's free credit actually bring in customers.",
    p17_pre: "If you have questions about whether Google Ads is right for your business, or how to claim this offer,",
    p17_link: 'talk to us',
    p17_end: "— it's a free conversation and we'll give you an honest answer.",
  },
  hi: {
    title: "Google का मुफ़्त ₹20,000 विज्ञापन क्रेडिट — अपने व्यवसाय के लिए इसे कैसे क्लेम करें",
    description:
      "Google पहले ₹20,000 खर्च करने पर ₹20,000 मुफ़्त विज्ञापन क्रेडिट देता है। यह प्रभावी रूप से ₹40,000 की पहुंच है। इसे कैसे क्लेम करें यहां बताया गया है।",
    date: '16 जून 2026',
    readTime: '5 मिनट',
    category: 'विज्ञापन और पेड मार्केटिंग',
    p1: "अगर आपने कभी Google Ads नहीं चलाया है, तो एक प्रमोशन चल रहा है जो जानने लायक है: <strong>Google Ads पर ₹20,000 खर्च करें, और Google आपको अतिरिक्त ₹20,000 मुफ़्त विज्ञापन क्रेडिट देता है</strong>। यह ₹20,000 के खर्च में ₹40,000 का विज्ञापन है — पहले दिन से आपकी पहुंच दोगुनी।",
    p2: "यह एक वास्तविक Google ऑफर है (तृतीय-पक्ष प्रमोशन नहीं) और यह नए Google Ads खातों के लिए उपलब्ध है। आपको जो जानना चाहिए वह यहां है।",
    h2_what: 'ऑफर वास्तव में क्या है?',
    p3: 'Google पहली बार विज्ञापन देने वालों के लिए समय-समय पर "X खर्च करें, X मुफ़्त पाएं" प्रमोशन चलाता है। भारत के लिए वर्तमान ऑफर: जब आप खाता बनाने और भुगतान विधि जोड़ने के 60 दिनों के भीतर Google Ads पर ₹20,000 खर्च करते हैं, तो Google आपके खाते में ₹20,000 मुफ़्त विज्ञापन क्रेडिट जमा करता है।',
    p4: "एक बार खर्च सीमा पूरी हो जाने पर मुफ़्त क्रेडिट आपके खाते में स्वचालित रूप से दिखाई देता है — आपको इसके लिए अलग से आवेदन नहीं करना है।",
    h2_eligible: 'कौन पात्र है?',
    li_e1: 'आप <strong>नए Google Ads विज्ञापनदाता</strong> होने चाहिए — यानी इस Google खाते से पहले कभी Google Ads नहीं चलाए',
    li_e2: 'आपको खाते में <strong>एक वैध भुगतान विधि जोड़नी</strong> होगी',
    li_e3: 'आपको खाता सक्रिय करने के <strong>60 दिनों के भीतर ₹20,000 खर्च</strong> करने होंगे',
    li_e4: 'यह ऑफर व्यवसायों के लिए है, व्यक्तिगत उपयोग के लिए नहीं',
    p5: "ध्यान दें: इस प्रमोशन की सटीक शर्तें बदल सकती हैं। खाता बनाते समय हमेशा <strong>ads.google.com</strong> पर वर्तमान शर्तें सत्यापित करें।",
    h2_steps: 'इसे क्लेम कैसे करें — चरण दर चरण',
    h3_s1: 'चरण 1: Google Ads खाता बनाएं',
    p6: '<strong>ads.google.com</strong> पर जाएं और अपने Google खाते से साइन इन करें। "अभी शुरू करें" पर क्लिक करें। यदि आप प्रमोशनल क्रेडिट के लिए पात्र हैं, तो सेटअप प्रक्रिया के दौरान यह उल्लेख दिखाई देगा।',
    h3_s2: 'चरण 2: अपना पहला अभियान सेट करें',
    p7: 'Google आपको पहला अभियान सेट करने में मार्गदर्शन करेगा। अधिकांश पुणे के छोटे व्यवसायों के लिए, पुणे में आपकी सेवा खोज रहे लोगों को लक्षित करने वाला "Search" अभियान सही शुरुआती बिंदु है।',
    p8: "महत्वपूर्ण: सेटअप में जल्दबाजी न करें। आप अभी जो टार्गेटिंग, कीवर्ड और विज्ञापन कॉपी सेट करते हैं वह तय करती है कि आपके ₹20,000 (और मुफ़्त ₹20,000) प्रभावी ढंग से खर्च होंगे या बर्बाद।",
    h3_s3: 'चरण 3: भुगतान विधि जोड़ें',
    p9: 'अपना क्रेडिट कार्ड, डेबिट कार्ड, या UPI/नेट बैंकिंग जोड़ें। भारत में Google Ads अधिकांश प्रमुख भुगतान विधियों का समर्थन करता है।',
    h3_s4: 'चरण 4: 60 दिनों के भीतर ₹20,000 खर्च करें',
    p10: 'यह योग्यता खर्च है। खाता सक्रिय होने के 60 दिनों के भीतर आपको ₹20,000 विज्ञापन खर्च करने हैं। यह लगभग ₹333/दिन है — अधिकांश छोटे व्यवसायों के लिए बहुत प्रबंधनीय।',
    h3_s5: 'चरण 5: अपना मुफ़्त ₹20,000 क्रेडिट प्राप्त करें',
    p11: "₹20,000 की खर्च सीमा पूरी होने के बाद, मुफ़्त क्रेडिट कुछ दिनों के भीतर आपके खाते में स्वचालित रूप से लागू हो जाता है।",
    h2_spend: '₹20,000 सही तरीके से खर्च हो यह कैसे सुनिश्चित करें',
    p12: "यह महत्वपूर्ण हिस्सा है। कई व्यवसाय यह ऑफर क्लेम करते हैं, ₹20,000 गलत तरीके से खर्च करते हैं (गलत कीवर्ड, कमज़ोर विज्ञापन, कोई टार्गेटिंग नहीं), कोई परिणाम नहीं देखते और निष्कर्ष निकालते हैं कि \"Google Ads काम नहीं करता।\" समस्या Google Ads नहीं थी — सेटअप थी।",
    p13: "अच्छे खर्च का तरीका:",
    li_s1: '<strong>विशिष्ट, प्रासंगिक कीवर्ड टार्गेट करें</strong> — "website designer Pune" "website" (बहुत व्यापक) से बेहतर रूपांतरित होता है',
    li_s2: '<strong>जियोग्राफिक टार्गेटिंग पुणे पर सेट करें</strong> — अगर आप पुणे में सेवा देते हैं तो मुंबई या दिल्ली के क्लिक के लिए भुगतान न करें',
    li_s3: '<strong>एक विशिष्ट ऑफर के साथ स्पष्ट विज्ञापन लिखें</strong> — "₹15,000 से 7 दिनों में प्रोफेशनल वेबसाइट — मुफ़्त कोटेशन पाएं" बेहतर काम करेगा',
    li_s4: '<strong>क्लिक एक प्रासंगिक लैंडिंग पेज पर भेजें</strong> — विज्ञापन वेबसाइट डिज़ाइन के बारे में है तो क्लिक वेबसाइट डिज़ाइन सेवा पेज पर जाना चाहिए, होमपेज पर नहीं',
    li_s5: '<strong>कन्वर्जन ट्रैक करें</strong> — कन्वर्जन ट्रैकिंग सेट करें ताकि आप जानें कि कौन से क्लिक पूछताछ या कॉल में बदले',
    h2_help: 'क्या आपको इसे खुद मैनेज करना चाहिए या मदद लेनी चाहिए?',
    p14: "अगर आप तकनीक से सहज हैं और सीखने का समय है, तो आप Google Ads खुद सेट कर सकते हैं — Google के पास अच्छे ट्यूटोरियल हैं, और ₹20,000 क्रेडिट आपको गलतियों से सीखने की जगह देता है।",
    p15_pre: "अगर आप पहले दिन से सही तरीके से सेटअप चाहते हैं — अपने ₹20,000 खर्च और मुफ़्त ₹20,000 क्रेडिट दोनों का अधिकतम उपयोग — हम Digital Safalta में यही करते हैं। हमारी Starter Ads योजना ₹15,000/महीने में पूर्ण Google Ads प्रबंधन शामिल है। हमारा",
    p15_link: 'मूल्य निर्धारण पृष्ठ',
    p15_mid: 'देखें या',
    p15_link2: 'संपर्क करें',
    p15_end: 'यह जानने के लिए कि हम इस ऑफर से अधिकतम कैसे दिला सकते हैं।',
    h2_bottom: 'सारांश',
    p16: "Google का ₹20,000 मुफ़्त क्रेडिट ऑफर वास्तविक है, क्लेम करना सीधा है और वास्तव में मूल्यवान है — खासकर उस पहली बार विज्ञापनदाता के लिए जो विज्ञापन पर पैसे खर्च करने को लेकर सतर्क है। मुख्य बात यह सुनिश्चित करना है कि पात्रता के लिए खर्च किए गए ₹20,000 सही तरीके से खर्च हों।",
    p17_pre: "अगर Google Ads आपके व्यवसाय के लिए सही है या इस ऑफर को क्लेम करने के बारे में सवाल हैं,",
    p17_link: 'हमसे बात करें',
    p17_end: "— यह एक मुफ़्त बातचीत है और हम एक ईमानदार जवाब देंगे।",
  },
  mr: {
    title: "Google चे विनामूल्य ₹20,000 जाहिरात क्रेडिट — तुमच्या व्यवसायासाठी ते कसे मिळवायचे",
    description:
      "Google पहिले ₹20,000 खर्च केल्यावर ₹20,000 विनामूल्य जाहिरात क्रेडिट देते. हे प्रभावीपणे ₹40,000 ची पोहोच आहे. ते कसे मिळवायचे ते इथे सांगितले आहे.",
    date: '16 जून 2026',
    readTime: '5 मिनिटे',
    category: 'जाहिराती आणि पेड मार्केटिंग',
    p1: "जर तुम्ही कधीच Google Ads चालवले नसेल, तर एक प्रमोशन सुरू आहे जे जाणून घेण्यासारखे आहे: <strong>Google Ads वर ₹20,000 खर्च करा, आणि Google तुम्हाला अतिरिक्त ₹20,000 विनामूल्य जाहिरात क्रेडिट देते</strong>. हे ₹20,000 च्या खर्चात ₹40,000 ची जाहिरात — पहिल्या दिवसापासून तुमची पोहोच दुप्पट.",
    p2: "हे एक खरे Google ऑफर आहे (तृतीय-पक्ष प्रमोशन नाही) आणि ते नवीन Google Ads खात्यांसाठी उपलब्ध आहे. तुम्हाला जे माहित असणे आवश्यक आहे ते इथे आहे.",
    h2_what: 'ऑफर नक्की काय आहे?',
    p3: 'Google पहिल्यांदा जाहिरात देणाऱ्यांसाठी वेळोवेळी "X खर्च करा, X विनामूल्य मिळवा" प्रमोशन चालवते. भारतासाठी सध्याचे ऑफर: खाते तयार केल्यापासून आणि पेमेंट पद्धत जोडल्यापासून 60 दिवसांत Google Ads वर ₹20,000 खर्च केल्यावर, Google तुमच्या खात्यात ₹20,000 विनामूल्य जाहिरात खर्च जमा करते.',
    p4: "खर्चाची मर्यादा पूरी झाल्यावर विनामूल्य क्रेडिट आपोआप तुमच्या खात्यात दिसते — त्यासाठी वेगळ्याने अर्ज करण्याची गरज नाही.",
    h2_eligible: 'कोण पात्र आहे?',
    li_e1: 'तुम्ही <strong>नवीन Google Ads जाहिरातदार</strong> असणे आवश्यक आहे — म्हणजे या Google खात्याखाली कधीच Google Ads चालवले नसावेत',
    li_e2: 'तुम्ही खात्यात <strong>वैध पेमेंट पद्धत जोडणे</strong> आवश्यक आहे',
    li_e3: 'तुम्ही खाते सक्रिय केल्यापासून <strong>60 दिवसांत ₹20,000 खर्च</strong> करणे आवश्यक आहे',
    li_e4: 'हे ऑफर व्यवसायांसाठी आहे, वैयक्तिक वापरासाठी नाही',
    p5: "लक्षात घ्या: या प्रमोशनच्या अटी बदलू शकतात. खाते तयार करताना नेहमी <strong>ads.google.com</strong> वर सध्याच्या अटी तपासा.",
    h2_steps: 'ते कसे मिळवायचे — पायरी पायरीने',
    h3_s1: 'पायरी 1: Google Ads खाते तयार करा',
    p6: '<strong>ads.google.com</strong> वर जा आणि तुमच्या Google खात्याने साइन इन करा. "आत्ता सुरू करा" वर क्लिक करा. जर तुम्ही प्रमोशनल क्रेडिटसाठी पात्र असाल, तर सेटअप प्रक्रियेदरम्यान ते नमूद केले जाईल.',
    h3_s2: 'पायरी 2: तुमची पहिली मोहीम सेट करा',
    p7: 'Google तुम्हाला पहिली मोहीम सेट करण्यात मार्गदर्शन करेल. बहुतेक पुण्यातील लहान व्यवसायांसाठी, पुण्यात तुमची सेवा शोधणाऱ्या लोकांना लक्ष्य करणारी "Search" मोहीम योग्य सुरुवातीचा बिंदू आहे.',
    p8: "महत्त्वाचे: सेटअपमध्ये घाई करू नका. तुम्ही आत्ता सेट करत असलेले लक्ष्यीकरण, कीवर्ड आणि जाहिरात मजकूर तुमचे ₹20,000 (आणि विनामूल्य ₹20,000) प्रभावीपणे खर्च होईल की वाया जाईल हे ठरवतात.",
    h3_s3: 'पायरी 3: पेमेंट पद्धत जोडा',
    p9: 'तुमचे क्रेडिट कार्ड, डेबिट कार्ड किंवा UPI/नेट बँकिंग जोडा. भारतात Google Ads बहुतेक प्रमुख पेमेंट पद्धतींना समर्थन देते.',
    h3_s4: 'पायरी 4: 60 दिवसांत ₹20,000 खर्च करा',
    p10: 'हा पात्रता खर्च आहे. खाते सक्रिय केल्यापासून 60 दिवसांत ₹20,000 जाहिरात खर्च करायचा आहे. हे साधारण ₹333/दिवस होते — बहुतेक लहान व्यवसायांसाठी अतिशय व्यवस्थापनीय.',
    h3_s5: 'पायरी 5: तुमचे विनामूल्य ₹20,000 क्रेडिट मिळवा',
    p11: "₹20,000 च्या खर्चाची मर्यादा गाठल्यावर, विनामूल्य क्रेडिट काही दिवसांत आपोआप तुमच्या खात्यावर लागू होते.",
    h2_spend: '₹20,000 चांगले खर्च होईल याची खात्री कशी करायची',
    p12: "हा महत्त्वाचा भाग आहे. अनेक व्यवसाय हे ऑफर मिळवतात, ₹20,000 चुकीच्या पद्धतीने खर्च करतात (चुकीचे कीवर्ड, कमकुवत जाहिराती, कोणतेही लक्ष्यीकरण नाही), कोणतेही निकाल दिसत नाहीत आणि निष्कर्ष काढतात की \"Google Ads काम करत नाही.\" समस्या Google Ads नव्हती — सेटअप होती.",
    p13: "चांगला खर्च असा दिसतो:",
    li_s1: '<strong>विशिष्ट, संबंधित कीवर्ड लक्ष्य करा</strong> — "website designer Pune" "website" (खूप व्यापक) पेक्षा चांगले रूपांतरित होते',
    li_s2: '<strong>भौगोलिक लक्ष्यीकरण पुण्यावर सेट करा</strong> — जर तुम्ही पुण्याची सेवा देत असाल तर मुंबई किंवा दिल्लीतील क्लिकसाठी पैसे देऊ नका',
    li_s3: '<strong>विशिष्ट ऑफरसह स्पष्ट जाहिरात लिहा</strong> — "₹15,000 पासून 7 दिवसांत व्यावसायिक वेबसाइट — विनामूल्य कोटेशन मिळवा" चांगले काम करेल',
    li_s4: '<strong>क्लिक संबंधित लँडिंग पेजवर पाठवा</strong> — जाहिरात वेबसाइट डिझाइनबद्दल असेल तर क्लिक वेबसाइट डिझाइन सेवा पेजवर जावा, होमपेजवर नाही',
    li_s5: '<strong>रूपांतरणे ट्रॅक करा</strong> — रूपांतरण ट्रॅकिंग सेट करा जेणेकरून कोणते क्लिक चौकशी किंवा कॉलमध्ये रूपांतरित झाले हे कळेल',
    h2_help: 'हे स्वतः व्यवस्थापित करायचे की मदत घ्यायची?',
    p14: "जर तुम्ही तंत्रज्ञानाशी सोयीस्कर असाल आणि शिकण्यासाठी वेळ असेल, तर तुम्ही Google Ads स्वतः सेट करू शकता — Google कडे चांगले ट्युटोरियल आहेत आणि ₹20,000 क्रेडिट तुम्हाला चुकांमधून शिकण्यास वाव देते.",
    p15_pre: "जर तुम्हाला पहिल्या दिवसापासून योग्यरित्या सेट करायचे असेल — तुमचे ₹20,000 खर्च आणि विनामूल्य ₹20,000 क्रेडिट दोन्हींचे जास्तीत जास्त मूल्य मिळवायचे असेल — हेच Digital Safalta मध्ये आम्ही करतो. आमच्या Starter Ads योजनेत ₹15,000/महिन्यात पूर्ण Google Ads व्यवस्थापन समाविष्ट आहे. आमचे",
    p15_link: 'किंमत पृष्ठ',
    p15_mid: 'पाहा किंवा',
    p15_link2: 'संपर्क करा',
    p15_end: 'हे ऑफर जास्तीत जास्त कसे मिळवता येईल याबद्दल चर्चा करण्यासाठी.',
    h2_bottom: 'सारांश',
    p16: "Google चे ₹20,000 विनामूल्य क्रेडिट ऑफर खरे आहे, मिळवणे सोपे आहे आणि खरोखरच मौल्यवान आहे — विशेषतः जाहिरातींवर पैसे खर्च करण्याबद्दल सावध असलेल्या पहिल्यांदा जाहिरातदारासाठी. मुख्य गोष्ट म्हणजे पात्रतेसाठी खर्च केलेले ₹20,000 चांगले खर्च होतील याची खात्री करणे.",
    p17_pre: "Google Ads तुमच्या व्यवसायासाठी योग्य आहे का किंवा हे ऑफर कसे मिळवायचे याबद्दल प्रश्न असतील,",
    p17_link: 'आमच्याशी बोला',
    p17_end: "— हे एक विनामूल्य संभाषण आहे आणि आम्ही एक प्रामाणिक उत्तर देऊ.",
  },
};

interface Props {
  lang?: Lang;
}

export function GoogleFreeAdCredit({ lang = 'en' }: Props) {
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

      <h2>{c.h2_eligible}</h2>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_e1 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_e2 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_e3 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_e4 }} />
      </ul>
      <p dangerouslySetInnerHTML={{ __html: c.p5 }} />

      <h2>{c.h2_steps}</h2>
      <h3>{c.h3_s1}</h3>
      <p dangerouslySetInnerHTML={{ __html: c.p6 }} />
      <h3>{c.h3_s2}</h3>
      <p>{c.p7}</p>
      <p>{c.p8}</p>
      <h3>{c.h3_s3}</h3>
      <p>{c.p9}</p>
      <h3>{c.h3_s4}</h3>
      <p>{c.p10}</p>
      <h3>{c.h3_s5}</h3>
      <p>{c.p11}</p>

      <h2>{c.h2_spend}</h2>
      <p>{c.p12}</p>
      <p>{c.p13}</p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: c.li_s1 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_s2 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_s3 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_s4 }} />
        <li dangerouslySetInnerHTML={{ __html: c.li_s5 }} />
      </ul>

      <h2>{c.h2_help}</h2>
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
