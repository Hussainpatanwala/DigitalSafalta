import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { SEO } from './SEO';
import { tealBtn } from '../lib/constants';
import { articleSchema, faqSchema, breadcrumbSchema } from '../lib/schema';
import { BLOG_POSTS } from '../lib/blogPosts';

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  /** Optional Q&A pairs shown/used for FAQPage schema — reuse this for any post with a Q&A section. */
  faqs?: { question: string; answer: string }[];
  /** Slugs of 2-3 related posts to show in the "Continue Reading" widget at the end. */
  relatedSlugs?: string[];
  children: React.ReactNode;
}

export function BlogPost({ title, description, date, readTime, category, faqs, relatedSlugs, children }: BlogPostProps) {
  const relatedPosts = (relatedSlugs || [])
    .map((slug) => BLOG_POSTS[slug])
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const schema = [
    articleSchema({ title, description, url: window.location.pathname, datePublished: date }),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: title, url: window.location.pathname },
    ]),
    ...(faqs && faqs.length > 0 ? [faqSchema(faqs)] : []),
  ];

  return (
    <>
      <SEO
        title={`${title} | Digital Safalta Blog`}
        description={description}
        type="article"
        schema={schema}
      />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-4">
              {category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">{description}</p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{readTime} read</span>
            </div>
          </div>

          <div className="h-px bg-white/8 mb-10" />

          {/* Article body */}
          <div className="prose prose-invert prose-slate max-w-none
            prose-headings:font-black prose-headings:text-white prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-5
            prose-strong:text-white prose-strong:font-bold
            prose-ul:text-slate-400 prose-ul:space-y-2
            prose-li:leading-relaxed
            prose-a:text-teal-400 prose-a:no-underline hover:prose-a:text-teal-300
          ">
            {children}
          </div>

          <div className="h-px bg-white/8 mt-12 mb-10" />

          {/* Continue Reading */}
          {relatedPosts.length > 0 && (
            <div className="mb-10">
              <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-5">Continue Reading</h3>
              <div className={`grid grid-cols-1 ${relatedPosts.length > 1 ? 'sm:grid-cols-2' : ''} gap-4`}>
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group block p-5 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-teal-500/25 transition-colors"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-3">
                      {post.category}
                    </span>
                    <h4 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-teal-300 transition-colors">
                      {post.title}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      {post.readTime} read
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/25 text-center">
            <h3 className="text-xl font-black text-white mb-3">Ready to grow your business online?</h3>
            <p className="text-slate-400 text-sm mb-6">Talk to Digital Safalta — free consultation, no obligation, honest advice.</p>
            <Link to="/contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold ${tealBtn}`}>
              Start the Conversation
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
