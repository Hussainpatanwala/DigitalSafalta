import { ServicePage } from '../../components/ServicePage';

export function GoogleAdsPage() {
  return (
    <ServicePage
      title="Google Ads Management in Pune"
      metaTitle="Google Ads Management in Pune | Digital Safalta"
      metaDescription="Expert Google Ads management for Pune businesses. We set up, run, and optimise your campaigns so every rupee works harder. Transparent billing — ad budget and agency fee always shown separately."
      category="Google Ads"
      heroHeadline="Google Ads Management in Pune"
      heroSubheading="When someone in Pune searches for your product or service on Google, your ad should be right there at the top. We set up, manage, and continuously optimise your Google Ads campaigns so you get real leads — not just clicks."
      whatItIs="Google Ads (formerly Google AdWords) lets you place your business at the top of Google search results for keywords your customers are actively searching. You pay only when someone clicks — and we make sure the right people are clicking."
      whyItMatters="Google Ads puts you in front of people at the exact moment they're looking for what you offer. Unlike social media ads where you interrupt people who aren't looking, Google Ads captures active demand — people who are ready to buy right now."
      includes={[
        "Campaign strategy and keyword research",
        "Ad copywriting (headlines, descriptions, extensions)",
        "Audience targeting and bid strategy setup",
        "Conversion tracking setup (calls, form fills)",
        "Negative keyword management",
        "A/B testing of ad creatives",
        "Monthly performance report",
        "Direct WhatsApp access to your account manager",
        "Landing page recommendations",
        "Google Ad credit claim support (up to ₹20,000 free credit for new accounts)",
      ]}
      benefits={[
        {
          title: "Appear on Page 1 Immediately",
          description: "Unlike SEO which takes months, Google Ads puts you at the top of search results from day one. Perfect for new businesses or for capturing demand right now.",
        },
        {
          title: "Pay Only for Clicks",
          description: "You only spend money when someone actually clicks on your ad. Combined with precise targeting, your budget goes towards people most likely to become customers.",
        },
        {
          title: "Double Your Reach with Google's Free Credit",
          description: "New to Google Ads? Google offers ₹20,000 in free ad credit when you spend your first ₹20,000. That's effectively ₹40,000 of advertising for ₹20,000 — we'll help you claim it.",
        },
        {
          title: "Full Transparency, Always",
          description: "Your ad budget and our agency fee are always shown separately. You know exactly how much goes to Google and how much comes to us. No blended billing.",
        },
      ]}
      faqs={[
        {
          question: "How much should I spend on Google Ads?",
          answer: "For Pune-based local businesses, ₹10,000–₹20,000/month in ad spend is a solid starting point. It depends on your industry and competition. We'll give you honest expectations on the discovery call based on your specific keywords.",
        },
        {
          question: "What's the difference between the ad budget and your agency fee?",
          answer: "The ad budget goes directly to Google — we never touch it. Our agency fee covers strategy, setup, management, and reporting. In our Starter plan, ₹10,000 goes to Google and ₹5,000 is our fee. Always shown separately.",
        },
        {
          question: "How long before I start seeing results?",
          answer: "Google Ads can show results within the first 2-4 weeks. The first month is partly about learning — which keywords, ads, and audiences perform best. Campaigns typically improve significantly from month 2 onwards.",
        },
        {
          question: "Do I need a website to run Google Ads?",
          answer: "Yes — people who click your ad need somewhere to land. A fast, relevant landing page dramatically improves conversion rates. We can build you one, or optimise your existing site.",
        },
        {
          question: "What if the ads aren't performing well?",
          answer: "We monitor and optimise continuously. If something isn't working, we test different ad copies, adjust bidding, refine targeting, and add negative keywords. Underperforming campaigns are a problem to solve, not ignore.",
        },
      ]}
      ctaHeadline="Ready to appear at the top of Google?"
      price="₹15,000/month"
      priceNote="Includes ₹10,000 ad budget + ₹5,000 agency fee. Ad budget goes directly to Google."
    />
  );
}
