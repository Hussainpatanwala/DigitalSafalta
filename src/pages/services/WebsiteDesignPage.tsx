import { ServicePage } from '../../components/ServicePage';

export function WebsiteDesignPage() {
  return (
    <ServicePage
      title="Professional Website Design in Pune"
      metaTitle="Professional Website Design in Pune | Digital Safalta"
      metaDescription="Get a fast, mobile-friendly, professionally designed website for your Pune business. Live in 7 working days. Includes custom email, SSL, Google Analytics, and leads database. Starting ₹15,000."
      category="Website Design"
      heroHeadline="Professional Website Design in Pune"
      heroSubheading="Your website is your most important salesperson — it works 24/7, never takes a day off, and is often the first impression a customer gets of your business. We build fast, mobile-friendly websites that actually convert visitors into enquiries."
      whatItIs="Website design is the process of planning, creating, and launching a professional online presence for your business. A good website is more than pretty — it loads fast, works perfectly on mobile, and is built to appear on Google."
      whyItMatters="Over 70% of people search online before making a purchase or visiting a business. If you don't have a professional website — or if yours is slow, outdated, or hard to navigate — you're handing customers to your competitors every single day."
      includes={[
        "Up to 5 pages (Home, About, Services, Contact + 1 more)",
        "Mobile-responsive design",
        "Contact form connected to your email",
        "Professional custom email (hello@yourbusiness.in)",
        "Google Business Profile setup + Google Maps integration",
        "SSL certificate (HTTPS) — free forever",
        "Basic SEO setup (meta titles, descriptions, schema)",
        "Google Analytics connected",
        "Leads database — every enquiry stored with date & details",
        "Live in 7 working days",
        "Speed-optimised for Core Web Vitals",
        "1 round of revisions included",
      ]}
      benefits={[
        {
          title: "Live in 7 Working Days",
          description: "We don't drag projects out for months. Your business needs an online presence now, and we deliver it in 7 working days — without cutting corners on quality.",
        },
        {
          title: "Built to Be Found on Google",
          description: "Every website we build includes basic on-page SEO — proper meta tags, fast load times, mobile optimisation, and Google Search Console setup so Google knows you exist.",
        },
        {
          title: "Captures Every Lead",
          description: "Enquiries from your contact form are stored in a leads database — not just emailed to you where they can get lost. You'll always have a record of every potential customer who reached out.",
        },
        {
          title: "Honest, Transparent Pricing",
          description: "₹15,000 one-time. No hidden hosting charges sprung on you later. After the first year, renewal costs are minimal and always discussed upfront.",
        },
      ]}
      faqs={[
        {
          question: "Is ₹15,000 really all-inclusive or are there hidden costs?",
          answer: "The ₹15,000 covers everything listed — design, development, custom email, SSL, Google Analytics, leads database, and Google Maps setup. After the first year, hosting and maintenance is minimal and always discussed before renewal. No surprises.",
        },
        {
          question: "What if I need more than 5 pages?",
          answer: "5 pages covers most small businesses. If you need more — an e-commerce store, a booking system, or a larger brochure site — we'll give you a custom quote based on what you actually need.",
        },
        {
          question: "Do I need to provide content or will you write it?",
          answer: "We can work with content you provide, or help you structure what to say. Copywriting can be included as an add-on — just let us know on the discovery call.",
        },
        {
          question: "Will the website work well on mobile?",
          answer: "Absolutely — mobile-first design is non-negotiable. Over 60% of web traffic in India is from mobile. Every website we build is tested on multiple screen sizes.",
        },
        {
          question: "What happens if I want to make changes later?",
          answer: "Small changes (text, images, adding a page) are easy to arrange. Larger redesigns are priced separately. We'll always give you a clear quote before doing any work.",
        },
      ]}
      ctaHeadline="Ready to get a website your business deserves?"
      price="₹15,000"
      priceNote="One-time fee. Live in 7 working days."
    />
  );
}
