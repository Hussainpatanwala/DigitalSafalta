import { ServicePage } from '../../components/ServicePage';

export function MetaAdsPage() {
  return (
    <ServicePage
      title="Facebook & Instagram Ads for Pune Businesses"
      metaTitle="Facebook & Instagram Ads for Pune Businesses | Digital Safalta"
      metaDescription="Run effective Facebook and Instagram ad campaigns for your Pune business. We create, manage, and optimise Meta Ads that generate real leads and sales — not just likes. Transparent pricing from ₹15,000/month."
      category="Meta Ads"
      heroHeadline="Facebook & Instagram Ads for Pune Businesses"
      heroSubheading="Facebook and Instagram have over 500 million users in India. With the right targeting and creative, Meta Ads let you reach exactly the customers you want — by location, interest, age, income, and behaviour. We make every rupee of your ad budget count."
      whatItIs="Meta Ads are paid advertisements that appear on Facebook, Instagram, and across Meta's network (including Messenger and WhatsApp). Unlike organic social media posts, Meta Ads put your business in front of people who don't already follow you — the people who don't know you exist yet."
      whyItMatters="Most Pune businesses post on social media and wonder why they don't get customers. Organic reach on Facebook and Instagram is under 5% — most of your followers never see your posts. Ads bypass this entirely and put your business in front of thousands of targeted potential customers."
      includes={[
        "Campaign strategy and audience research",
        "Ad creative design (images/graphics)",
        "Copywriting (headlines, body text, CTAs)",
        "Audience targeting setup (interests, location, lookalikes)",
        "Facebook Pixel setup for conversion tracking",
        "Retargeting campaigns for website visitors",
        "A/B testing of ad variations",
        "Monthly performance report",
        "Direct WhatsApp access to your account manager",
        "WhatsApp lead integration (where applicable)",
      ]}
      benefits={[
        {
          title: "Reach People Who Don't Know You Yet",
          description: "Meta's targeting lets you reach people by location (Pune neighbourhoods, specific pin codes), interests, demographics, and even behaviours like 'recently moved' or 'small business owner'.",
        },
        {
          title: "Retarget People Who Showed Interest",
          description: "Someone visited your website but didn't enquire? We can show them your ads again on Facebook and Instagram — reminding them about your business until they're ready to act.",
        },
        {
          title: "Visual Brand Building That Compounds",
          description: "Unlike Google Ads which capture existing demand, Meta Ads build awareness and desire. Over time, people in Pune begin to recognise and trust your brand — driving long-term results beyond ad clicks.",
        },
        {
          title: "Transparent Budget Split",
          description: "Your ad spend goes directly to Meta. Our agency fee covers creative, strategy, management, and reporting. Always shown separately — you always know exactly what you're paying for.",
        },
      ]}
      faqs={[
        {
          question: "Should I choose Facebook, Instagram, or both?",
          answer: "It depends on your target audience and business type. Instagram tends to work better for visual businesses (food, fashion, fitness, interiors). Facebook often reaches an older, more B2B audience. We'll recommend the right mix based on your specific customers.",
        },
        {
          question: "How is Meta Ads different from just boosting a post?",
          answer: "Boosting is the lazy shortcut Meta pushes because it's easy — but it's also wasteful. Proper Meta Ads campaigns use the full Ads Manager with detailed targeting, conversion tracking, A/B testing, and audience segmentation. The results are incomparably better.",
        },
        {
          question: "What kind of results should I expect?",
          answer: "For most Pune local businesses, well-run Meta Ads campaigns can generate leads at ₹200–₹800 per lead depending on industry and competition. We'll give you an honest estimate based on your specific business on the discovery call.",
        },
        {
          question: "Do I need a Facebook page or Instagram account first?",
          answer: "Yes — you need a Facebook Business Page to run Meta Ads. We can help you set one up if you don't have one. A polished, complete profile also improves ad performance.",
        },
        {
          question: "Can Meta Ads work for a B2B business?",
          answer: "Yes, though Google Ads often performs better for B2B intent. Meta Ads can work extremely well for B2B awareness, event promotion, and retargeting. We'll advise on the right mix for your business.",
        },
      ]}
      ctaHeadline="Ready to turn Facebook & Instagram into a lead machine?"
      price="₹15,000/month"
      priceNote="Includes ₹10,000 ad budget + ₹5,000 agency fee. Ad budget goes directly to Meta."
    />
  );
}
