import { useState, useRef } from 'react';
import { SEO } from '../components/SEO';
import { tealBtn, glass } from '../lib/constants';
import { Search, AlertTriangle, TrendingUp, Zap, Target, Users, Award, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';

const SYSTEM_PROMPT = `You are a senior digital marketing strategist with expertise in SEO, paid ads, conversion optimization, and social media growth. Your task is to perform a high-impact, brutally honest digital marketing audit for a business.

Your goal: Analyze this business like a consultant who is trying to uncover missed revenue opportunities.

IMPORTANT RULES:
- Never say "I cannot access the website" — always provide a confident, useful answer
- If data is missing, make smart assumptions based on typical industry patterns
- Be direct, sharp, no sugarcoating
- Focus on business impact: money, leads, growth
- Avoid generic advice — be specific to this business type and market
- Sound like an expert consultant, not a teacher

You MUST respond ONLY with valid JSON in this exact format (no markdown, no preamble, no explanation outside the JSON):

{
  "score": <number 0-100>,
  "scoreExplanation": "<1-line explanation of the score>",
  "criticalIssues": [
    { "title": "<issue title>", "detail": "<specific, direct explanation>" },
    { "title": "<issue title>", "detail": "<specific, direct explanation>" },
    { "title": "<issue title>", "detail": "<specific, direct explanation>" }
  ],
  "lostRevenue": {
    "range": "<e.g. ₹40,000–₹1,20,000/month>",
    "reasoning": "<brief reasoning for the estimate>"
  },
  "quickWins": [
    { "title": "<win title>", "detail": "<actionable improvement>" },
    { "title": "<win title>", "detail": "<actionable improvement>" },
    { "title": "<win title>", "detail": "<actionable improvement>" }
  ],
  "growthOpportunities": {
    "paidAds": { "title": "<title>", "detail": "<why it matters + what to do>" },
    "seo": { "title": "<title>", "detail": "<why it matters + what to do>" },
    "social": { "title": "<title>", "detail": "<why it matters + what to do>" }
  },
  "competitiveGap": "<2-3 sentences describing what competitors are likely doing better>",
  "finalVerdict": "<2-3 lines: how serious, underperforming/average/strong, what needs to happen>"
}`;

type AuditResult = {
  score: number;
  scoreExplanation: string;
  criticalIssues: { title: string; detail: string }[];
  lostRevenue: { range: string; reasoning: string };
  quickWins: { title: string; detail: string }[];
  growthOpportunities: {
    paidAds: { title: string; detail: string };
    seo: { title: string; detail: string };
    social: { title: string; detail: string };
  };
  competitiveGap: string;
  finalVerdict: string;
};

function ScoreRing({ score }: { score: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? '#14b8a6' : score >= 45 ? '#f59e0b' : '#ef4444';

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r={radius} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        <circle
          cx="64" cy="64" r={radius} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black text-white">{score}</span>
        <span className="text-xs text-slate-400 font-medium">/100</span>
      </div>
    </div>
  );
}

function Section({ icon: Icon, label, color, children }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-2xl p-6 ${glass}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-black uppercase tracking-wider text-slate-400">{label}</span>
      </div>
      {children}
    </div>
  );
}

export function MarketingAuditPage() {
  const [url, setUrl] = useState('');
  const [businessContext, setBusinessContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');
  const [showContext, setShowContext] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleAudit = async () => {
    if (!url.trim()) {
      setError('Please enter a website or social media URL.');
      return;
    }
    setError('');
    setLoading(true);
    setResult(null);

    const userMessage = `Audit this business: ${url.trim()}${businessContext.trim() ? `\n\nAdditional context: ${businessContext.trim()}` : ''}`;

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: 'user', content: userMessage }],
        }),
      });

      const data = await response.json();
      const text = data.content?.find((b: { type: string }) => b.type === 'text')?.text || '';
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed: AuditResult = JSON.parse(clean);
      setResult(parsed);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const scoreLabel = result
    ? result.score >= 70 ? 'Strong' : result.score >= 45 ? 'Average' : 'Underperforming'
    : '';
  const scoreLabelColor = result
    ? result.score >= 70 ? 'text-teal-400' : result.score >= 45 ? 'text-amber-400' : 'text-red-400'
    : '';

  return (
    <>
      <SEO
        title="Free Digital Marketing Audit Tool | Digital Safalta"
        description="Get a brutally honest AI-powered digital marketing audit for your business in seconds. Score, critical issues, lost revenue estimate, quick wins, and growth strategy — free."
      />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-5">
              Free Tool
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Marketing Audit in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">30 Seconds</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
              Paste your website or social media link. Get a senior strategist-level audit — score, issues, revenue leaks, and a growth plan — instantly.
            </p>
          </div>

          {/* Input Card */}
          <div className={`rounded-2xl p-6 mb-4 ${glass}`}>
            <label className="block text-sm font-bold text-white mb-2">
              Your Website or Social Media URL
            </label>
            <div className="flex gap-3">
              <input
                type="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !loading && handleAudit()}
                placeholder="https://yourbusiness.com  or  instagram.com/yourbusiness"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all"
                disabled={loading}
              />
              <button
                onClick={handleAudit}
                disabled={loading}
                className={`px-5 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0 ${tealBtn} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                <Search className="w-4 h-4" />
                {loading ? 'Analysing...' : 'Audit'}
              </button>
            </div>

            {/* Optional context toggle */}
            <button
              onClick={() => setShowContext(v => !v)}
              className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showContext ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              Add business context (optional — improves accuracy)
            </button>
            {showContext && (
              <textarea
                value={businessContext}
                onChange={e => setBusinessContext(e.target.value)}
                placeholder="e.g. We're a Pune-based dental clinic, 5 years old, mainly walk-in patients, no ads running currently..."
                rows={3}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 transition-all resize-none"
                disabled={loading}
              />
            )}

            {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
          </div>

          {/* Trust line */}
          <p className="text-center text-xs text-slate-500 mb-10">
            Powered by AI · No sign-up required · 100% free · Built by Digital Safalta, Pune
          </p>

          {/* Loading */}
          {loading && (
            <div className={`rounded-2xl p-10 ${glass} text-center`}>
              <div className="w-10 h-10 border-2 border-teal-500/30 border-t-teal-400 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white font-bold mb-1">Analysing your business...</p>
              <p className="text-slate-400 text-sm">Running a full digital marketing audit. This takes about 15–20 seconds.</p>
            </div>
          )}

          {/* Results */}
          {result && (
            <div ref={resultRef} className="space-y-5">

              {/* Score */}
              <div className={`rounded-2xl p-6 ${glass} text-center`}>
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">Overall Marketing Score</p>
                <ScoreRing score={result.score} />
                <p className={`text-lg font-black mt-3 ${scoreLabelColor}`}>{scoreLabel}</p>
                <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">{result.scoreExplanation}</p>
              </div>

              {/* Critical Issues */}
              <Section icon={AlertTriangle} label="Critical Issues — Top 3" color="bg-red-500/15 text-red-400">
                <div className="space-y-4">
                  {result.criticalIssues.map((issue, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-red-400 font-black text-sm shrink-0 mt-0.5">{i + 1}.</span>
                      <div>
                        <p className="text-white font-bold text-sm">{issue.title}</p>
                        <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{issue.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Lost Revenue */}
              <Section icon={TrendingUp} label="Lost Revenue Estimate" color="bg-amber-500/15 text-amber-400">
                <p className="text-2xl font-black text-amber-400 mb-2">{result.lostRevenue.range}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{result.lostRevenue.reasoning}</p>
              </Section>

              {/* Quick Wins */}
              <Section icon={Zap} label="Quick Wins — Low Effort, High Impact" color="bg-teal-500/15 text-teal-400">
                <div className="space-y-4">
                  {result.quickWins.map((win, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-teal-400 font-black text-sm shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="text-white font-bold text-sm">{win.title}</p>
                        <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{win.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Growth Opportunities */}
              <Section icon={Target} label="Growth Opportunities — Strategic" color="bg-violet-500/15 text-violet-400">
                <div className="space-y-4">
                  {[
                    { label: '📣 Paid Ads', data: result.growthOpportunities.paidAds },
                    { label: '🔍 SEO', data: result.growthOpportunities.seo },
                    { label: '📱 Social / Content', data: result.growthOpportunities.social },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl bg-white/3 border border-white/8 p-4">
                      <p className="text-xs font-bold text-violet-400 mb-1">{item.label}</p>
                      <p className="text-white font-bold text-sm">{item.data.title}</p>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.data.detail}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Competitive Gap */}
              <Section icon={Users} label="Competitive Gap" color="bg-cyan-500/15 text-cyan-400">
                <p className="text-slate-300 text-sm leading-relaxed">{result.competitiveGap}</p>
              </Section>

              {/* Final Verdict */}
              <Section icon={Award} label="Final Verdict" color="bg-teal-500/15 text-teal-400">
                <p className="text-white text-base leading-relaxed font-medium">{result.finalVerdict}</p>
              </Section>

              {/* CTA */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/25 text-center">
                <h3 className="text-lg font-black text-white mb-2">Want help fixing these issues?</h3>
                <p className="text-slate-400 text-sm mb-5">Digital Safalta helps Pune businesses fix exactly these problems. Free consultation, no obligation.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="/contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold ${tealBtn}`}>
                    Talk to Us — Free
                  </a>
                  <button
                    onClick={() => { setResult(null); setUrl(''); setBusinessContext(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Audit Another
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
