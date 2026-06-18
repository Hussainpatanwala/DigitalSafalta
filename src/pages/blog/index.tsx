import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { glass, glassHover, tealBtn } from '../../lib/constants';

const posts = [
  {
    slug: 'what-is-digital-marketing',
    title: 'What is Digital Marketing? A Beginner\'s Guide for Indian Small Businesses',
    excerpt: 'Never heard of SEO, Google Ads, or social media marketing? This plain-English guide explains what digital marketing is, why it matters, and how it can bring more customers to your business.',
    date: 'June 16, 2026',
    readTime: '7 min',
    category: 'Beginner Guide',
  },
  {
    slug: 'website-cost-pune',
    title: 'How Much Does a Website Cost in Pune? (Honest Answer for 2026)',
    excerpt: 'Prices range from ₹3,000 to ₹3,00,000 — and that range means nothing. Here\'s what actually determines website cost, what you get at each price point, and how to avoid getting ripped off.',
    date: 'June 16, 2026',
    readTime: '6 min',
    category: 'Pricing Guide',
  },
  {
    slug: 'what-is-seo',
    title: 'What is SEO? A Simple Guide for Pune Business Owners',
    excerpt: 'SEO stands for Search Engine Optimisation — but what does that actually mean for your business? Learn how Google decides which websites to show first, and what you can do about it.',
    date: 'June 16, 2026',
    readTime: '6 min',
    category: 'Beginner Guide',
  },
  {
    slug: 'google-ads-vs-meta-ads',
    title: 'Google Ads vs Meta Ads — Which is Better for Your Business?',
    excerpt: 'Facebook, Instagram, or Google? The honest answer depends on what you\'re selling and who your customer is. Here\'s a practical comparison to help you decide where to spend your ad budget.',
    date: 'June 16, 2026',
    readTime: '7 min',
    category: 'Ads & Paid Marketing',
  },
  {
    slug: 'google-free-ad-credit',
    title: 'Google\'s Free ₹20,000 Ad Credit — How to Claim It for Your Business',
    excerpt: 'Google offers ₹20,000 in free ad credit when you spend your first ₹20,000 on Google Ads. That\'s effectively ₹40,000 worth of reach. Here\'s exactly how to claim it.',
    date: 'June 16, 2026',
    readTime: '5 min',
    category: 'Ads & Paid Marketing',
  },
  {
    slug: 'what-is-a-website',
    title: 'What is a Website and Why Does Your Pune Business Need One in 2026?',
    excerpt: 'Your business exists. Your customers are online. But without a website, they can\'t find you. Here\'s a plain-English explanation of what a website is and why it\'s the foundation of every digital marketing effort.',
    date: 'June 16, 2026',
    readTime: '5 min',
    category: 'Beginner Guide',
  },
];

export function BlogIndexPage() {
  return (
    <>
      <SEO
        title="Blog — Digital Marketing Tips for Pune Businesses | Digital Safalta"
        description="Plain-English guides on digital marketing, SEO, Google Ads, website design, and growing your business online — written for Pune small business owners."
      />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Free Knowledge — No Jargon
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Digital Marketing, Explained Simply
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Plain-English guides written for Pune business owners who want to understand digital marketing — and use it to grow.
            </p>
          </div>

          {/* Featured post */}
          <div className={`rounded-2xl p-8 lg:p-10 mb-8 ${glass} hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300`}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-4">
              {posts[0].category}
            </span>
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">{posts[0].title}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">{posts[0].excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-slate-500 text-sm">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{posts[0].date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{posts[0].readTime} read</span>
              </div>
              <Link to={`/blog/${posts[0].slug}`} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold ${tealBtn}`}>
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
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
                    Read <ArrowRight className="w-3.5 h-3.5" />
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
