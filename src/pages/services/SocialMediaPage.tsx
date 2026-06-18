import { ServicePage } from '../../components/ServicePage';

export function SocialMediaPage() {
  return (
    <ServicePage
      title="Social Media Management in Pune"
      metaTitle="Social Media Management in Pune | Digital Safalta"
      metaDescription="Professional social media management for Pune businesses. Consistent, engaging content on Instagram, Facebook, and LinkedIn that builds your brand and keeps your audience coming back. Included in Growth plan."
      category="Social Media"
      heroHeadline="Social Media Management in Pune"
      heroSubheading="Consistent social media presence builds trust, keeps your business top-of-mind, and turns followers into customers over time. But most business owners don't have time to post regularly — or don't know what to post. We handle it for you."
      whatItIs="Social media management is the ongoing process of creating, scheduling, and posting content on your business's social media accounts — Instagram, Facebook, LinkedIn, and others. It includes strategy, content creation, caption writing, and engagement."
      whyItMatters="Your social media profile is often the first place potential customers look after hearing about your business. An active, professional-looking feed builds credibility. A dormant one raises doubt. Consistency is the difference."
      includes={[
        "Up to 20 posts per month (reels, carousels, static posts)",
        "Content calendar planned in advance",
        "Graphic design for each post",
        "Caption writing with relevant hashtags",
        "Platform management (Instagram, Facebook, LinkedIn)",
        "Story content",
        "Monthly strategy review",
        "Content aligned to your brand colours and tone",
        "Competitor benchmarking",
        "Basic community management (comments, DMs)",
      ]}
      benefits={[
        {
          title: "Never Go Dark Again",
          description: "The biggest mistake businesses make on social media is inconsistency. We post regularly on your behalf so your profile always looks active and professional.",
        },
        {
          title: "Content That Reflects Your Brand",
          description: "Everything we post is aligned with your brand identity — colours, tone of voice, and the story you want to tell. You'll be presented professionally every time.",
        },
        {
          title: "Frees Up Your Time",
          description: "You run the business. We handle the content. No more stressing about what to post, scrambling for ideas, or feeling guilty about the last time you posted.",
        },
        {
          title: "Long-term Trust Building",
          description: "Social media is a marathon, not a sprint. Regular, valuable content builds a loyal audience that's more likely to choose you over an unfamiliar competitor.",
        },
      ]}
      faqs={[
        {
          question: "Which platforms do you manage?",
          answer: "We primarily manage Instagram and Facebook. LinkedIn is available as an add-on. We'll recommend the right platforms based on where your target customers actually spend time.",
        },
        {
          question: "Do I need to provide photos or content?",
          answer: "We can work with photos you provide, stock imagery, or help you plan a content shoot. For businesses in food, hospitality, or retail, original photography makes a big difference — we'll advise on this.",
        },
        {
          question: "Will you respond to comments and messages too?",
          answer: "Basic community management (replying to comments, flagging important DMs) is included. For high-volume accounts that need full-time community management, that's a separate conversation.",
        },
        {
          question: "How do I know what's going to be posted?",
          answer: "We prepare a content calendar every month for your review before anything is published. You'll always know what's going up and can request changes.",
        },
        {
          question: "Can social media alone bring me new customers?",
          answer: "Organic social media builds brand awareness and trust — it works best alongside paid ads. Social media management alone rarely generates a flood of leads overnight, but it creates the credibility that makes your ads convert better and turns enquiries into sales.",
        },
      ]}
      ctaHeadline="Let's build a social media presence worth following."
      price="Included in Growth plan"
      priceNote="₹35,000/month with Ads + SEO + Social Media. Or ask about standalone social media packages."
    />
  );
}
