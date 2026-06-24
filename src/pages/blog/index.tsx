import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { glass, glassHover, tealBtn } from '../../lib/constants';

type Lang = 'en' | 'hi' | 'mr';

const COPY = {
  en: {
    seoTitle: 'Blog — Digital Marketing Tips for Pune Businesses | Digital Safalta',
    seoDesc:
      'Plain-English guides on digital marketing, SEO, Google Ads, website design, and growing your business online — written for Pune small business owners.',
    badge: 'Free Knowledge — No Jargon',
    heading: 'Digital Marketing, Explained Simply',
    subheading:
      'Plain-English guides written for Pune business owners who want to understand digital marketing — and use it to grow.',
    readArticle: 'Read Article',
    read: 'Read',
  },
  hi: {
    seoTitle: 'ब्लॉग — पुणे व्यवसायों के लिए डिजिटल मार्केटिंग टिप्स | Digital Safalta',
    seoDesc:
      'डिजिटल मार्केटिंग, SEO, Google Ads, वेबसाइट डिज़ाइन और ऑनलाइन व्यवसाय बढ़ाने पर सरल भाषा में गाइड — पुणे के छोटे व्यवसाय मालिकों के लिए लिखी गई।',
    badge: 'मुफ़्त ज्ञान — बिना जटिल शब्दों के',
    heading: 'डिजिटल मार्केटिंग, सरल भाषा में',
    subheading:
      'पुणे के व्यवसाय मालिकों के लिए सरल भाषा में गाइड जो डिजिटल मार्केटिंग को समझना और इसका उपयोग बढ़ने के लिए करना चाहते हैं।',
    readArticle: 'लेख पढ़ें',
    read: 'पढ़ें',
  },
  mr: {
    seoTitle: 'ब्लॉग — पुण्यातील व्यवसायांसाठी डिजिटल मार्केटिंग टिप्स | Digital Safalta',
    seoDesc:
      'डिजिटल मार्केटिंग, SEO, Google Ads, वेबसाइट डिझाइन आणि ऑनलाइन व्यवसाय वाढवण्यावर सोप्या भाषेत मार्गदर्शन — पुण्यातील लहान व्यावसायिकांसाठी लिहिलेले.',
    badge: 'विनामूल्य ज्ञान — कोणतेही क्लिष्ट शब्द नाहीत',
    heading: 'डिजिटल मार्केटिंग, सोप्या भाषेत',
    subheading:
      'पुण्यातील व्यावसायिकांसाठी सोप्या भाषेत मार्गदर्शन जे डिजिटल मार्केटिंग समजून घेऊ इच्छितात आणि ते वाढीसाठी वापरू इच्छितात.',
    readArticle: 'लेख वाचा',
    read: 'वाचा',
  },
};

const posts = {
  en: [
    {
      slug: 'what-is-digital-marketing',
      title: "What is Digital Marketing? A Beginner's Guide for Indian Small Businesses",
      excerpt:
        "Never heard of SEO, Google Ads, or social media marketing? This plain-English guide explains what digital marketing is, why it matters, and how it can bring more customers to your business.",
      date: 'June 16, 2026',
      readTime: '7 min',
      category: 'Beginner Guide',
    },
    {
      slug: 'website-cost-pune',
      title: 'How Much Does a Website Cost in Pune? (Honest Answer for 2026)',
      excerpt:
        "Prices range from ₹3,000 to ₹3,00,000 — and that range means nothing. Here's what actually determines website cost, what you get at each price point, and how to avoid getting ripped off.",
      date: 'June 16, 2026',
      readTime: '6 min',
      category: 'Pricing Guide',
    },
    {
      slug: 'what-is-seo',
      title: 'What is SEO? A Simple Guide for Pune Business Owners',
      excerpt:
        "SEO stands for Search Engine Optimisation — but what does that actually mean for your business? Learn how Google decides which websites to show first, and what you can do about it.",
      date: 'June 16, 2026',
      readTime: '6 min',
      category: 'Beginner Guide',
    },
    {
      slug: 'google-ads-vs-meta-ads',
      title: 'Google Ads vs Meta Ads — Which is Better for Your Business?',
      excerpt:
        "Facebook, Instagram, or Google? The honest answer depends on what you're selling and who your customer is. Here's a practical comparison to help you decide where to spend your ad budget.",
      date: 'June 16, 2026',
      readTime: '7 min',
      category: 'Ads & Paid Marketing',
    },
    {
      slug: 'google-free-ad-credit',
      title: "Google's Free ₹20,000 Ad Credit — How to Claim It for Your Business",
      excerpt:
        "Google offers ₹20,000 in free ad credit when you spend your first ₹20,000 on Google Ads. That's effectively ₹40,000 worth of reach. Here's exactly how to claim it.",
      date: 'June 16, 2026',
      readTime: '5 min',
      category: 'Ads & Paid Marketing',
    },
    {
      slug: 'what-is-a-website',
      title: 'What is a Website and Why Does Your Pune Business Need One in 2026?',
      excerpt:
        "Your business exists. Your customers are online. But without a website, they can't find you. Here's a plain-English explanation of what a website is and why it's the foundation of every digital marketing effort.",
      date: 'June 16, 2026',
      readTime: '5 min',
      category: 'Beginner Guide',
    },
  ],
  hi: [
    {
      slug: 'what-is-digital-marketing',
      title: 'डिजिटल मार्केटिंग क्या है? भारतीय छोटे व्यवसायों के लिए एक शुरुआती गाइड',
      excerpt:
        'SEO, Google Ads या सोशल मीडिया मार्केटिंग के बारे में कभी नहीं सुना? यह गाइड सरल भाषा में बताती है कि डिजिटल मार्केटिंग क्या है, क्यों ज़रूरी है, और आपके व्यवसाय में अधिक ग्राहक कैसे ला सकती है।',
      date: '16 जून 2026',
      readTime: '7 मिनट',
      category: 'शुरुआती गाइड',
    },
    {
      slug: 'website-cost-pune',
      title: 'पुणे में वेबसाइट बनाने में कितना खर्च आता है? (2026 के लिए ईमानदार जवाब)',
      excerpt:
        'कीमतें ₹3,000 से ₹3,00,000 तक हैं — और यह सीमा कुछ नहीं बताती। यह लेख बताता है कि वेबसाइट की लागत असल में क्या तय करती है और ठगे जाने से कैसे बचें।',
      date: '16 जून 2026',
      readTime: '6 मिनट',
      category: 'मूल्य निर्धारण गाइड',
    },
    {
      slug: 'what-is-seo',
      title: 'SEO क्या है? पुणे के व्यवसाय मालिकों के लिए एक सरल गाइड',
      excerpt:
        'SEO का मतलब है सर्च इंजन ऑप्टिमाइज़ेशन — लेकिन आपके व्यवसाय के लिए इसका वास्तव में क्या अर्थ है? जानें कि Google कैसे तय करता है कि कौन सी वेबसाइट पहले दिखाई दे।',
      date: '16 जून 2026',
      readTime: '6 मिनट',
      category: 'शुरुआती गाइड',
    },
    {
      slug: 'google-ads-vs-meta-ads',
      title: 'Google Ads बनाम Meta Ads — आपके व्यवसाय के लिए कौन बेहतर है?',
      excerpt:
        'Facebook, Instagram या Google? ईमानदार जवाब इस पर निर्भर करता है कि आप क्या बेच रहे हैं और आपका ग्राहक कौन है। अपना विज्ञापन बजट कहां लगाएं यह तय करने के लिए एक व्यावहारिक तुलना।',
      date: '16 जून 2026',
      readTime: '7 मिनट',
      category: 'विज्ञापन और पेड मार्केटिंग',
    },
    {
      slug: 'google-free-ad-credit',
      title: 'Google का मुफ़्त ₹20,000 विज्ञापन क्रेडिट — अपने व्यवसाय के लिए इसे कैसे क्लेम करें',
      excerpt:
        'Google पहले ₹20,000 खर्च करने पर ₹20,000 मुफ़्त विज्ञापन क्रेडिट देता है। यह प्रभावी रूप से ₹40,000 की पहुंच है। इसे कैसे क्लेम करें यहां बताया गया है।',
      date: '16 जून 2026',
      readTime: '5 मिनट',
      category: 'विज्ञापन और पेड मार्केटिंग',
    },
    {
      slug: 'what-is-a-website',
      title: '2026 में पुणे के आपके व्यवसाय को वेबसाइट की ज़रूरत क्यों है?',
      excerpt:
        'आपका व्यवसाय है। आपके ग्राहक ऑनलाइन हैं। लेकिन बिना वेबसाइट के वे आपको नहीं ढूंढ सकते। यह गाइड सरल भाषा में बताती है कि वेबसाइट क्या है और यह डिजिटल मार्केटिंग की नींव क्यों है।',
      date: '16 जून 2026',
      readTime: '5 मिनट',
      category: 'शुरुआती गाइड',
    },
  ],
  mr: [
    {
      slug: 'what-is-digital-marketing',
      title: 'डिजिटल मार्केटिंग म्हणजे काय? भारतीय लहान व्यवसायांसाठी एक सुरुवातीचे मार्गदर्शन',
      excerpt:
        'SEO, Google Ads किंवा सोशल मीडिया मार्केटिंग बद्दल कधी ऐकले नाही? हे मार्गदर्शन सोप्या भाषेत सांगते की डिजिटल मार्केटिंग म्हणजे काय, ते का महत्त्वाचे आहे, आणि ते तुमच्या व्यवसायात अधिक ग्राहक कसे आणू शकते।',
      date: '16 जून 2026',
      readTime: '7 मिनिटे',
      category: 'सुरुवातीचे मार्गदर्शन',
    },
    {
      slug: 'website-cost-pune',
      title: 'पुण्यात वेबसाइट बनवण्यासाठी किती खर्च येतो? (2026 साठी प्रामाणिक उत्तर)',
      excerpt:
        'किंमती ₹3,000 ते ₹3,00,000 पर्यंत आहेत — आणि त्या श्रेणीचा काही अर्थ नाही. वेबसाइटची किंमत खरोखर काय ठरवते आणि फसवणूक कशी टाळावी हे हे लेख सांगतो.',
      date: '16 जून 2026',
      readTime: '6 मिनिटे',
      category: 'किंमत मार्गदर्शन',
    },
    {
      slug: 'what-is-seo',
      title: 'SEO म्हणजे काय? पुण्यातील व्यावसायिकांसाठी एक सोपे मार्गदर्शन',
      excerpt:
        'SEO म्हणजे सर्च इंजिन ऑप्टिमायझेशन — पण तुमच्या व्यवसायासाठी याचा नक्की अर्थ काय? Google कोणती वेबसाइट आधी दाखवायचे हे कसे ठरवते हे जाणून घ्या.',
      date: '16 जून 2026',
      readTime: '6 मिनिटे',
      category: 'सुरुवातीचे मार्गदर्शन',
    },
    {
      slug: 'google-ads-vs-meta-ads',
      title: 'Google Ads विरुद्ध Meta Ads — तुमच्या व्यवसायासाठी कोणते चांगले?',
      excerpt:
        'Facebook, Instagram की Google? प्रामाणिक उत्तर हे अवलंबून आहे तुम्ही काय विकता आणि तुमचा ग्राहक कोण आहे यावर. तुमचे जाहिरात बजट कुठे खर्च करायचे हे ठरवण्यासाठी एक व्यावहारिक तुलना.',
      date: '16 जून 2026',
      readTime: '7 मिनिटे',
      category: 'जाहिराती आणि पेड मार्केटिंग',
    },
    {
      slug: 'google-free-ad-credit',
      title: 'Google चे विनामूल्य ₹20,000 जाहिरात क्रेडिट — तुमच्या व्यवसायासाठी ते कसे मिळवायचे',
      excerpt:
        'Google पहिले ₹20,000 खर्च केल्यावर ₹20,000 विनामूल्य जाहिरात क्रेडिट देते. हे प्रभावीपणे ₹40,000 ची पोहोच आहे. ते कसे मिळवायचे ते इथे सांगितले आहे.',
      date: '16 जून 2026',
      readTime: '5 मिनिटे',
      category: 'जाहिराती आणि पेड मार्केटिंग',
    },
    {
      slug: 'what-is-a-website',
      title: '2026 मध्ये पुण्यातील तुमच्या व्यवसायाला वेबसाइटची गरज का आहे?',
      excerpt:
        'तुमचा व्यवसाय आहे. तुमचे ग्राहक ऑनलाइन आहेत. पण वेबसाइटशिवाय ते तुम्हाला सापडू शकत नाहीत. वेबसाइट म्हणजे काय आणि ती डिजिटल मार्केटिंगचा पाया का आहे हे सांगणारे हे मार्गदर्शन.',
      date: '16 जून 2026',
      readTime: '5 मिनिटे',
      category: 'सुरुवातीचे मार्गदर्शन',
    },
  ],
};

interface Props {
  lang?: Lang;
}

export function BlogIndexPage({ lang = 'en' }: Props) {
  const c = COPY[lang];
  const p = posts[lang];

  return (
    <>
      <SEO
        title={c.seoTitle}
        description={c.seoDesc}
        lang={lang}
      />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              {c.badge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {c.heading}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              {c.subheading}
            </p>
          </div>

          {/* Featured post */}
          <div className={`rounded-2xl p-8 lg:p-10 mb-8 ${glass} hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300`}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-4">
              {p[0].category}
            </span>
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">{p[0].title}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">{p[0].excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-slate-500 text-sm">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{p[0].date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{p[0].readTime}</span>
              </div>
              <Link to={`/blog/${p[0].slug}`} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold ${tealBtn}`}>
                {c.readArticle} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.slice(1).map((post) => (
              <article key={post.slug} className={`rounded-2xl p-6 flex flex-col ${glass} ${glassHover}`}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-slate-400 mb-4 self-start">
                  {post.category}
                </span>
                <h2 className="text-base font-black text-white mb-3 leading-snug flex-1">{post.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
                  <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />{post.readTime}
                  </span>
                  <Link to={`/blog/${post.slug}`} className="text-teal-400 hover:text-teal-300 text-sm font-bold flex items-center gap-1 transition-colors">
                    {c.read} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
