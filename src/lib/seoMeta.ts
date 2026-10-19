/**
 * English SEO title/description overrides, keyed by page path.
 *
 * WHY THIS FILE EXISTS: an Ahrefs audit flagged titles over 60 characters and
 * meta descriptions over 160 (or under 110). Instead of editing ~25 page
 * files, the corrected wording for each page lives here and <SEO /> applies
 * it automatically.
 *
 * TO CHANGE A TITLE OR DESCRIPTION IN FUTURE: edit it HERE. The text inside
 * each page's own file is ignored for these paths (English only).
 *
 * Targets: title <= 60 characters, description 110-160 characters.
 * Hindi/Marathi versions are never touched (SEO.tsx skips Devanagari text).
 */
export const SEO_META: Record<string, { title?: string; description?: string }> = {
  '/': {
    description:
      'Digital Safalta helps Pune small businesses get online and get customers: website design, SEO, Google & Meta Ads. Founder-led, honest results.',
  },
  '/hardware': {
    description:
      'Buy second-hand desktops, tiny PCs, laptops, RAM and SSDs for office or home, sourced with partner Raj Infotech. Enquire on WhatsApp.',
  },
  '/about': {
    description:
      'Learn how Digital Safalta works with Pune businesses: honest, founder-led digital marketing focused on real results, not vanity metrics.',
  },
  '/contact': {
    description:
      'Get in touch with Digital Safalta for a free, no-obligation digital marketing consultation. We reply within 24 hours. Pune, serving all India.',
  },
  '/pricing': {
    description:
      'Transparent pricing for website design and digital marketing in Pune: website package at ₹15,000, ad plans from ₹15,000/month, no hidden fees.',
  },
  '/services': {
    description:
      "Digital Safalta's services for Pune businesses: website design, Google & Meta Ads, SEO, social media management, landing pages and branding.",
  },
  '/terms': {
    description:
      "The terms that govern your use of Digital Safalta's website and services. Please read them before you start a project with us.",
  },
  '/privacy': {
    description:
      'How Digital Safalta collects, uses and protects your personal data when you visit our website or contact us. Read our privacy policy.',
  },

  // Service pages
  '/services/website-design': {
    description:
      'A fast, mobile-friendly website for your Pune business, live in 7 working days. Includes custom email, SSL and Analytics. From ₹15,000.',
  },
  '/services/google-ads': {
    description:
      'Expert Google Ads management for Pune businesses. We set up, run and optimise campaigns, with ad budget and agency fee billed separately.',
  },
  '/services/meta-ads': {
    description:
      'Facebook and Instagram ad campaigns for Pune businesses that generate real leads and sales, not just likes. Transparent pricing from ₹15,000/month.',
  },
  '/services/social-media': {
    description:
      'Social media management for Pune businesses: consistent, engaging Instagram, Facebook and LinkedIn content that builds your brand.',
  },
  '/services/web-app-development': {
    description:
      "Custom web apps in Pune: admin panels, databases, user logins and dashboards for workflows a normal website can't handle. From ₹50,000.",
  },
  '/services/google-business-profile': {
    description:
      'Get your Google Business Profile set up and optimised in Pune. Show up in local map searches, get more calls and build trust with reviews.',
  },
  '/services/seo': {
    description:
      'SEO services for Pune businesses: local SEO, on-page optimisation, content and technical SEO to get found on Google. Honest timelines.',
  },
  '/services/kids-digital-skills': {
    description:
      '1-month live online program for kids (8 weekend sessions): safe internet use, graphic design basics, digital identity and websites. ₹15,000.',
  },
  '/services/ai-dev-mentorship': {
    title: 'AI App Development Mentorship in Pune | Digital Safalta',
    description:
      '1-on-1 mentorship with Hussain: learn to build websites, web apps and Android apps end to end using modern AI development tools. ₹1,00,000.',
  },
  '/services/excel-vba-automation': {
    description:
      'Custom Excel dashboards, VBA macros and workflow automation for Pune small businesses. Stop repeating manual spreadsheet work every week.',
  },

  // Blog posts
  '/blog/agency-near-me': {
    title: 'Digital Marketing Agency Near Me in Pune | Digital Safalta',
    description:
      'Searching for a digital marketing agency near you in Pune? What that means today, 5 questions to ask before hiring, and red flags to avoid.',
  },
  '/blog/website-cost-pune': {
    title: 'Website Cost in Pune: Honest 2026 Guide | Digital Safalta',
    description:
      'Website prices in Pune range from ₹3,000 to ₹3,00,000. What really drives the cost, what each price point gets you, and how to avoid overpaying.',
  },
  '/blog/what-is-seo': {
    title: 'What is SEO? A Simple Guide | Digital Safalta',
    description:
      'SEO means Search Engine Optimisation, but what does it do for your business? How Google ranks websites and what you can do about it.',
  },
  '/blog/what-is-a-website': {
    title: 'What is a Website? Why You Need One | Digital Safalta',
    description:
      "Your customers are online, but can they find you? A plain-English guide to what a website is and why it's the base of all digital marketing.",
  },
  '/blog/what-is-digital-marketing': {
    title: 'What is Digital Marketing? Beginner Guide | Digital Safalta',
    description:
      'Never heard of SEO, Google Ads or social media marketing? A plain-English guide to what digital marketing is and how it brings you customers.',
  },
  '/blog/custom-web-app-cost-india': {
    title: 'Custom Web App Cost in India (2026) | Digital Safalta',
    description:
      'Custom web apps in India cost from ₹50,000 to several lakhs. What drives the price, what each tier includes, and the running costs no one mentions.',
  },
  '/blog/website-vs-web-app': {
    title: 'Website vs Web App: Which Do You Need? | Digital Safalta',
    description:
      'Not sure if you need a website or a web app? The plain-English difference, five quick questions to decide, and typical costs for Pune businesses.',
  },
  '/blog/google-ads-vs-meta-ads': {
    title: 'Google Ads vs Meta Ads: Which is Better? | Digital Safalta',
    description:
      'Google, Facebook or Instagram? The honest answer depends on what you sell and who buys. A practical comparison to help you place your ad budget.',
  },
  '/blog/google-free-ad-credit': {
    title: "Claim Google's Free ₹20,000 Ad Credit | Digital Safalta",
    description:
      'Google gives ₹20,000 in free ad credit when you spend your first ₹20,000 on Google Ads. Here is exactly how to claim it for your business.',
  },
};
