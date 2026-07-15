/**
 * ===================================================================
 * DIGITAL SAFALTA — ENGLISH CONTENT
 * ===================================================================
 * This is the master content file. Its shape (the `SiteContent` type)
 * is the contract that content.hi.ts and content.mr.ts must also follow.
 *
 * Edit the values below to update ENGLISH site content only.
 * For Hindi, edit content.hi.ts. For Marathi, edit content.mr.ts.
 * ===================================================================
 */

export const content = {
  brand: {
    name: "Digital Safalta",
    tagline: "The science of Safalta.",
  },

  // ============================================
  // SHARED UI STRINGS (buttons, nav, labels used across many pages)
  // ============================================
  ui: {
    navHome: "Home",
    navServices: "Services",
    navPricing: "Pricing",
    navAbout: "About",
    navContact: "Contact",
    navBlog: "Blog",
    navCtaButton: "Start a Project",
    learnMore: "Learn More",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to main content",
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    eyebrow: "Pune · Maharashtra · Digital Marketing Agency",
    headlineLine1: "Grow Your Business",
    headlineLine2: "Digitally — The Right Way.",
    subheading: "Digital Safalta helps small and growing businesses in Pune build their online presence, run effective ad campaigns, and turn visitors into paying customers.",
    ctaText: "Start the Conversation",
    secondaryCtaText: "See What We Offer",
    auditCtaTitle: "Free Marketing Audit",
    auditCtaSubtitle: "Paste your URL → get a full audit in 30 seconds",
    growthHooksHeading: "Questions Small Business Owners Ask Us",
    growthHooksSubheading: "Straight answers — no jargon, no guesswork.",
    growthHooksCtaText: "See Posting Plans",
    growthHooksCtaSubtext: "starting ₹1,000/month",
    growthHooks: [
      {
        question: "I post every day but it's not turning into customers. What's going wrong?",
        answer: "Posting keeps you visible, but visibility alone doesn't close the sale — what happens after someone notices you matters just as much: fast replies, a clear offer, an easy way to reach you. That's exactly what our posting plans are built around — consistent content paired with a plan for turning attention into enquiries.",
      },
      {
        question: "People message asking the price, then go silent. How do I stop losing them?",
        answer: "Most of the time it's not really about the price — it's about how fast you reply. Buyers usually go with whoever answers first, so a slow or missed reply loses more sales than people realize. Our plans include response guidance so you never leave a customer waiting.",
      },
      {
        question: "There are 3–4 shops like mine nearby — why should someone choose mine?",
        answer: "Being active and responsive online — with real reviews and recent posts — often matters more than being the biggest or cheapest. It's what makes a new customer feel confident walking in. Our posting plans keep your profile consistently active so you're the obvious, trustworthy choice.",
      },
      {
        question: "My reels get views but I don't see new faces walking in. Why?",
        answer: "Views show interest, not trust. What actually gets someone to visit is a recent, well-reviewed profile with a clear reason to come today. Our plans focus on content that builds that trust, not just numbers that look good.",
      },
      {
        question: "How do I actually know if this is working?",
        answer: "You'll get a plain monthly update — how many people saw your posts, which post worked best, and how many enquiries came in. No jargon, just numbers you can act on. This is built into every posting plan we run.",
      },
      {
        question: "What should I fix first?",
        answer: "A complete, active profile — Google Business Profile, Instagram, and Facebook — with recent posts and replies. It's the single biggest thing that makes people trust you enough to visit. Our posting plans start exactly here.",
      },
    ],
  },

  // ============================================
  // PHILOSOPHY SECTION
  // ============================================
  philosophy: {
    title: "Our Philosophy",
    principles: [
      {
        number: "01",
        title: "Honesty First",
        description: "We tell you what will work and what won't — even if it's not what you want to hear. No overselling, no false promises. Just honest digital marketing advice for your Pune business."
      },
      {
        number: "02",
        title: "Results Over Vanity",
        description: "Likes and impressions don't pay bills. We focus on leads, conversions, and revenue — metrics that actually matter to your business growth in Pune and beyond."
      },
      {
        number: "03",
        title: "Founder-Led Service",
        description: "You work directly with the founder — not a junior executive juggling 50 accounts. Your business gets real attention, real strategy, and someone personally invested in your growth."
      },
    ],
  },

  // ============================================
  // SERVICES SECTION
  // ============================================
  services: {
    title: "Digital Marketing Services in Pune",
    description: "End-to-end digital marketing services built for small and growing businesses across Pune, Maharashtra and India.",
    items: [
      {
        title: "Website Design",
        description: "Fast, mobile-friendly websites that represent your business 24/7. Includes custom email, SSL, Google Analytics, leads database, and Google Maps — live in 7 working days.",
        icon: "Globe",
        href: "/services/website-design"
      },
      {
        title: "Performance Ads",
        description: "Facebook, Instagram, and Google Ads managed to get you real leads and sales. You control the ad budget — we make every rupee work harder.",
        icon: "Zap",
        href: "/services/google-ads"
      },
      {
        title: "SEO",
        description: "Get found on Google by people in Pune and across India actively searching for what you offer.",
        icon: "BarChart3",
        href: "/services/seo"
      },
      {
        title: "Social Media Management",
        description: "Consistent, engaging content that builds your brand and keeps your audience coming back.",
        icon: "Users",
        href: "/services/social-media"
      },
      {
        title: "Landing Pages & Funnels",
        description: "High-converting landing pages designed to turn your ad traffic into paying customers.",
        icon: "MousePointer"
      },
      {
        title: "Brand Identity",
        description: "Logo, colors, and visual identity that makes your business look professional and trustworthy.",
        icon: "Palette"
      },
      {
        title: "Email Marketing",
        description: "Stay top of mind with your customers through smart, automated email marketing campaigns.",
        icon: "Mail"
      },
      {
        title: "Analytics & Reporting",
        description: "Clear, simple reports so you always know exactly where your money is going and what it is returning.",
        icon: "Settings"
      },
    ],
  },

  // ============================================
  // RESULTS SECTION
  // ============================================
  results: {
    title: "What You Can Expect",
    description: "We are a new digital marketing agency in Pune — so instead of fabricated case studies, here is what we commit to delivering.",
    caseStudies: [
      {
        category: "Transparency",
        result: "No Hidden Fees",
        description: "Ad budget and agency fee are always shown separately. You know exactly what goes to the platform and what comes to us. No blended billing, no surprises.",
        metrics: ["Split billing", "Clear dashboards", "Open communication"]
      },
      {
        category: "Speed",
        result: "Live in 7 Days",
        description: "Your website goes live in 7 working days. Ad campaigns are set up and running within days of onboarding. Your business growth should not wait.",
        metrics: ["7-day website launch", "Fast ad setup", "Weekly check-ins"]
      },
      {
        category: "Commitment",
        result: "Founder-Led, Always",
        description: "You deal directly with the founder — someone who treats your business like their own. No account managers, no hand-offs, no information lost in translation.",
        metrics: ["Direct founder access", "Personal strategy", "24hr response time"]
      },
    ],
  },

  // ============================================
  // PROCESS SECTION
  // ============================================
  process: {
    title: "How We Work",
    description: "A simple, proven digital marketing process to get your Pune business growing online.",
    steps: [
      {
        number: "01",
        title: "Discovery Call",
        description: "We understand your business, goals, target customers, and current challenges — completely free, no obligation."
      },
      {
        number: "02",
        title: "Custom Strategy",
        description: "We build a tailored digital marketing plan specific to your business, budget, and goals in the Pune market and beyond."
      },
      {
        number: "03",
        title: "Execute & Launch",
        description: "We set everything up and go live — website, ads, SEO, content, tracking, and reporting all in one place."
      },
      {
        number: "04",
        title: "Optimise & Grow",
        description: "We monitor, test, and improve every week so your results keep getting better over time."
      },
    ],
  },

  // ============================================
  // PLATFORM METRICS SECTION
  // ============================================
  platformMetrics: [
    { value: "8+", label: "Years of Marketing Experience" },
    { value: "₹5k", label: "Agency Fee to Start Ads" },
    { value: "Zero", label: "Hidden Fees — Ever" },
    { value: "24hr", label: "Support Response Time" },
  ],

  // ============================================
  // PRICING SECTION
  // ============================================
  pricing: {
    title: "Simple, Transparent Pricing",
    description: "Ad budget and agency fee are always shown separately. You decide what to spend on ads — we charge only for our work.",
    plans: [
      {
        name: "Website Package",
        price: "15,000",
        currency: "₹",
        period: "one-time",
        description: "Everything your business needs to go live professionally — in 7 working days",
        features: [
          "Up to 5 pages (Home, About, Services, Contact + 1 more)",
          "Mobile responsive design",
          "Contact form connected to your email",
          "Professional custom email (hello@yourbusiness.in)",
          "Google Business Profile setup + Google Maps",
          "SSL certificate (HTTPS) — free forever",
          "Basic SEO setup",
          "Google Analytics connected",
          "Leads database — every enquiry stored with date & details",
          "Live in 7 working days",
        ],
        note: "Need something beyond this? Custom builds are tailored to your requirements.",
        highlighted: false
      },
      {
        name: "Starter Ads",
        price: "15,000",
        currency: "₹",
        period: "month",
        description: "Start running real ads on Meta or Google with full management — no guesswork",
        features: [
          "₹10,000 goes directly to your ad platform (Meta or Google)",
          "₹5,000 agency fee — our management & strategy",
          "1 active ad channel of your choice",
          "Ad creative + copywriting included",
          "Audience research & targeting setup",
          "Monthly performance report",
          "Direct WhatsApp access to your account manager",
        ],
        note: "💡 New to Google Ads? Spend ₹20,000 on Google and get ₹20,000 free ad credit — effectively doubling your reach from day one. Ask us how.",
        highlighted: true
      },
      {
        name: "Growth",
        price: "35,000",
        currency: "₹",
        period: "month",
        description: "A tailored multi-channel plan for businesses ready to scale seriously",
        features: [
          "Custom ad budget split across Meta + Google",
          "SEO — on-page optimisation + keyword targeting",
          "Social media management (up to 20 posts/month)",
          "Landing page creation for campaigns",
          "Weekly reporting + monthly strategy call",
          "Retargeting campaigns setup",
          "Priority support — faster turnaround",
        ],
        note: "Every Growth plan is scoped to your business. Final breakdown shared on the discovery call.",
        highlighted: false
      },
    ],
  },

  // ============================================
  // TESTIMONIAL SECTION
  // ============================================
  testimonial: {
    quote: "We just launched Digital Safalta to help businesses like yours grow online. We would love for you to be one of our first success stories — reach out and let us build something great together.",
    author: "Hussain Patanwala",
    role: "Founder, Digital Safalta — Digital Marketing Agency, Pune",
    initials: "HP",
  },

  // ============================================
  // FAQ SECTION
  // ============================================
  faqItems: [
    {
      question: "Is the ₹15,000/month ad plan an all-in price or does ad budget come on top?",
      answer: "The ₹15,000/month Starter plan already includes your ad budget. ₹10,000 goes directly to your chosen ad platform (Meta or Google) and ₹5,000 is our agency fee for managing your campaigns. You will always see both numbers separately — we never blend them."
    },
    {
      question: "What is the Google Ads free credit offer you mentioned?",
      answer: "Google offers ₹20,000 in free ad credit when you spend your first ₹20,000 on Google Ads. That means you effectively get ₹40,000 worth of ad reach for ₹20,000 in spend — doubling your visibility from day one. This is a limited Google promotion. Reach out and we will walk you through how to claim it."
    },
    {
      question: "Is the ₹15,000 website package really one-time? What about maintenance?",
      answer: "Yes, ₹15,000 is a one-time fee for the first year — which covers everything in the package including your custom email, SSL, leads database, and Google setup. After the first year, hosting and maintenance costs are minimal and we will discuss them transparently before renewal."
    },
    {
      question: "Who will I be working with — will I always reach you directly?",
      answer: "Right now you work directly with the founder. No account managers, no hand-offs. As we grow, any team member handling your account will be personally trained and supervised to maintain the same standard. You will always have a direct line to someone who knows your business."
    },
    {
      question: "Are you a new digital marketing agency in Pune? Why should I trust you?",
      answer: "Yes, we are new — and that is actually a strength. You get a founder with 8+ years of marketing experience who is personally invested in your results, not a junior executive managing 50 clients. We are building our reputation one Pune business at a time, and your success is our best marketing."
    },
    {
      question: "How long before we see results from digital marketing?",
      answer: "Paid ads can show results within the first 2-4 weeks. SEO typically takes 3-6 months to show results on Google. We set honest expectations upfront and give you regular updates so you always know what is happening with your budget."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "We start with a 3-month minimum so we have enough time to show real results. After that, it is month-to-month. We believe in earning your business every month, not locking you in."
    },
    {
      question: "What kind of businesses do you work with in Pune?",
      answer: "We work with small and growing businesses across Pune and Maharashtra — local services, e-commerce, coaching, real estate, hospitality, restaurants, and more. If you have a product or service and want more customers online, we can help."
    },
  ],

  // ============================================
  // CONTACT SECTION
  // ============================================
  contact: {
    title: "Let's Talk About Your Business",
    description: "Tell us about your business and goals. We will get back to you within 24 hours with honest advice — whether or not we end up working together.",
    formPlaceholder: {
      name: "Your Name",
      email: "Your Email",
      company: "Business Name",
      message: "Tell us about your business and what you are looking to achieve..."
    },
    buttonText: "Start the Conversation",
    responseTime: "We respond within 24 hours — usually much faster.",
  },

  // ============================================
  // FOOTER SECTION
  // ============================================
  footer: {
    description: "Digital marketing agency in Pune helping growing businesses succeed online — honestly and effectively.",
    servicesList: ["Performance Ads", "SEO", "Social Media", "Website Design"],
    companyList: ["About", "Our Process", "Pricing", "Contact"],
    contact: {
      email: "hello@digitalsafalta.in",
      location: "Pune, Maharashtra · Serving clients across India"
    },
    copyright: "© 2026 Digital Safalta. All rights reserved.",
  },

  heroImageId: "3184291",

  // ============================================
  // SEO META (per-page titles/descriptions)
  // Filled in as each page is migrated — homepage first.
  // ============================================
  seo: {
    home: {
      title: "Digital Safalta - Digital Marketing Agency in Pune",
      description: "Digital Safalta helps small and growing businesses in Pune build their online presence, run effective ad campaigns, and turn visitors into paying customers. Website design, SEO, Google & Meta Ads.",
    },
    about: {
      title: "About Us - Our Philosophy & Process | Digital Safalta",
      description: "Learn how Digital Safalta works with Pune businesses — honest, founder-led digital marketing focused on real results, not vanity metrics. Our philosophy and process explained.",
    },
    services: {
      title: "Our Services - Website Design, SEO & Ads | Digital Safalta",
      description: "Explore Digital Safalta's digital marketing services for Pune businesses: website design, Google & Meta ads, SEO, social media management, landing pages, branding and more.",
    },
    pricing: {
      title: "Pricing - Website & Digital Marketing Plans | Digital Safalta",
      description: "Transparent pricing for website design and digital marketing in Pune. One-time website package at ₹15,000, ad management plans starting at ₹15,000/month with no hidden fees.",
    },
    contact: {
      title: "Contact Us - Get a Free Consultation | Digital Safalta",
      description: "Get in touch with Digital Safalta for a free, no-obligation digital marketing consultation. We respond within 24 hours. Pune, Maharashtra — serving clients across India.",
    },
  },
};

export type SiteContent = typeof content;
