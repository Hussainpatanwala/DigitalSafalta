import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { SEO } from './SEO';
import { tealBtn } from '../lib/constants';

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  children: React.ReactNode;
}

export function BlogPost({ title, description, date, readTime, category, children }: BlogPostProps) {
  return (
    <>
      <SEO title={`${title} | Digital Safalta Blog`} description={description} />

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
