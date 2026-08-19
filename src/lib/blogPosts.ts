/**
 * Shared metadata for every English blog post — single source of truth
 * used by the "Continue Reading" widget in BlogPost.tsx so related-post
 * cards don't need duplicated title/category/readTime strings at every
 * call site.
 */
export interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  readTime: string;
}

export const BLOG_POSTS: Record<string, BlogPostMeta> = {
  'agency-near-me': {
    slug: 'agency-near-me',
    title: 'Digital Marketing Agency Near Me — How to Choose the Right One in Pune',
    category: 'Choosing an Agency',
    readTime: '7 min',
  },
  'what-is-digital-marketing': {
    slug: 'what-is-digital-marketing',
    title: "What is Digital Marketing? A Beginner's Guide for Indian Small Businesses",
    category: 'Beginner Guide',
    readTime: '7 min',
  },
  'what-is-seo': {
    slug: 'what-is-seo',
    title: 'What is SEO? A Simple Guide for Pune Business Owners',
    category: 'Beginner Guide',
    readTime: '6 min',
  },
  'website-cost-pune': {
    slug: 'website-cost-pune',
    title: 'How Much Does a Website Cost in Pune? (Honest Answer for 2026)',
    category: 'Pricing Guide',
    readTime: '6 min',
  },
  'what-is-a-website': {
    slug: 'what-is-a-website',
    title: 'What is a Website and Why Does Your Pune Business Need One in 2026?',
    category: 'Beginner Guide',
    readTime: '5 min',
  },
  'google-ads-vs-meta-ads': {
    slug: 'google-ads-vs-meta-ads',
    title: 'Google Ads vs Meta Ads — Which is Better for Your Business?',
    category: 'Ads & Paid Marketing',
    readTime: '7 min',
  },
  'google-free-ad-credit': {
    slug: 'google-free-ad-credit',
    title: "Google's Free ₹20,000 Ad Credit — How to Claim It for Your Business",
    category: 'Ads & Paid Marketing',
    readTime: '5 min',
  },
};
