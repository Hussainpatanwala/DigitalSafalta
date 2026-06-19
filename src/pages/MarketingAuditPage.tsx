import { useState, useRef } from 'react';
import { SEO } from '../components/SEO';
import { tealBtn, glass } from '../lib/constants';
import { Search, AlertTriangle, TrendingUp, Zap, Target, Users, Award, ChevronDown, ChevronUp, RotateCcw, Download } from 'lucide-react';

const SYSTEM_PROMPT = `You are a senior digital marketing strategist with expertise in SEO, paid ads, conversion optimization, and social media growth. Your task is to perform a high-impact, brutally honest digital marketing audit for a business.

Your goal: Analyze this business like a consultant who is trying to uncover missed revenue opportunities.

IMPORTANT RULES:
- Never say "I cannot access the website" — always provide a confident, useful answer
- If data is missing, make smart assumptions based on typical industry patterns
- Be direct, sharp, no sugarcoating
- Focus on business impact: money, leads, growth
- Avoid generic advice — be specific to this business type and market
- Sound like an expert consultant, not a teacher
- Use Indian Rupee for all monetary estimates

You MUST respond ONLY with valid JSON. No markdown. No backticks. No text before or after. Just the raw JSON object:

{
  "score": 42,
  "scoreExplanation": "one line explanation here",
  "criticalIssues": [
    { "title": "Issue title", "detail": "Specific explanation" },
    { "title": "Issue title", "detail": "Specific explanation" },
    { "title": "Issue title", "detail": "Specific explanation" }
  ],
  "lostRevenue": {
    "range": "₹40,000–₹1,20,000/month",
    "reasoning": "Brief reasoning here"
  },
  "quickWins": [
    { "title": "Win title", "detail": "Actionable improvement" },
    { "title": "Win title", "detail": "Actionable improvement" },
    { "title": "Win title", "detail": "Actionable improvement" }
  ],
  "growthOpportunities": {
    "paidAds": { "title": "Title here", "detail": "Why it matters and what to do" },
    "seo": { "title": "Title here", "detail": "Why it matters and what to do" },
    "social": { "title": "Title here", "detail": "Why it matters and what to do" }
  },
  "competitiveGap": "2-3 sentences about what competitors do better",
  "finalVerdict": "2-3 lines verdict here"
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
        <circle cx="64" cy="64" r={radius} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease' }} />
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
  label: string; color: string; children: React.ReactNode;
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

  // Normalise Instagram handles: "safalta" or "@safalta" → "instagram.com/safalta"
  const normaliseInput = (raw: string): string => {
    const trimmed = raw.trim();
    if (!trimmed) return trimmed;
    // Already a full URL — leave it alone
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    // Contains a dot → treat as domain/URL (e.g. digitalsafalta.in)
    if (trimmed.includes('.')) return trimmed;
    // Bare handle: strip leading @
    const handle = trimmed.replace(/^@/, '');
    return `instagram.com/${handle}`;
  };

  const handleAudit = async () => {
    if (!url.trim()) { setError('Please enter your website URL or Instagram username.'); return; }
    setError('');
    setLoading(true);
    setResult(null);

    const resolved = normaliseInput(url);
    const prompt = `Audit this business: ${resolved}${businessContext.trim() ? '\n\nAdditional context: ' + businessContext.trim() : ''}`;

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ system: SYSTEM_PROMPT, prompt }),
      });

      const data = await response.json() as { text?: string; error?: string; detail?: string };

      if (!response.ok || data.error) {
        setError('API error: ' + (data.error ?? 'unknown') + (data.detail ? ' — ' + String(data.detail).slice(0, 200) : ''));
        setLoading(false);
        return;
      }

      const rawText = data.text ?? '';

      // Strip any markdown fences Gemini might wrap around the JSON
      const clean = rawText
        .replace(/^\s*```json\s*/i, '')
        .replace(/^\s*```\s*/i, '')
        .replace(/\s*```\s*$/i, '')
        .trim();

      // Find the JSON object in case there's any stray text
      const jsonStart = clean.indexOf('{');
      const jsonEnd = clean.lastIndexOf('}');

      if (jsonStart === -1 || jsonEnd === -1) {
        setError('Gemini did not return valid JSON. Raw response: ' + clean.slice(0, 300));
        setLoading(false);
        return;
      }

      const jsonStr = clean.slice(jsonStart, jsonEnd + 1);

      let parsed: AuditResult;
      try {
        parsed = JSON.parse(jsonStr);
      } catch (parseErr) {
        setError('JSON parse failed: ' + String(parseErr) + ' | Raw: ' + jsonStr.slice(0, 200));
        setLoading(false);
        return;
      }

      setResult(parsed);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);

    } catch (err) {
      setError('Network error: ' + String(err));
    } finally {
      setLoading(false);
    }
  };


  const handleDownload = () => {
    if (!result) return;
    const scoreLabel = result.score >= 70 ? 'Strong' : result.score >= 45 ? 'Average' : 'Underperforming';
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Marketing Audit Report — ${url}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 24px; color: #1e293b; background: #fff; }
  h1 { font-size: 28px; font-weight: 900; color: #0f172a; margin-bottom: 4px; }
  .meta { color: #64748b; font-size: 14px; margin-bottom: 32px; }
  .score-box { background: #f0fdfa; border: 2px solid #14b8a6; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px; }
  .score-num { font-size: 56px; font-weight: 900; color: ${result.score >= 70 ? '#14b8a6' : result.score >= 45 ? '#d97706' : '#ef4444'}; line-height: 1; }
  .score-label { font-size: 18px; font-weight: 700; color: ${result.score >= 70 ? '#14b8a6' : result.score >= 45 ? '#d97706' : '#ef4444'}; margin-top: 4px; }
  .score-exp { color: #475569; font-size: 14px; margin-top: 8px; }
  .section { border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
  .section-title { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 16px; }
  .issue { display: flex; gap: 12px; margin-bottom: 14px; }
  .issue-num { font-weight: 900; color: #ef4444; min-width: 20px; }
  .issue-title { font-weight: 700; color: #0f172a; font-size: 15px; }
  .issue-detail { color: #475569; font-size: 14px; margin-top: 3px; line-height: 1.5; }
  .revenue { font-size: 28px; font-weight: 900; color: #d97706; margin-bottom: 8px; }
  .win { display: flex; gap: 12px; margin-bottom: 14px; }
  .win-check { color: #14b8a6; font-weight: 900; }
  .opp { background: #f8fafc; border-radius: 8px; padding: 14px; margin-bottom: 10px; }
  .opp-label { font-size: 11px; font-weight: 700; color: #7c3aed; margin-bottom: 4px; }
  .opp-title { font-weight: 700; color: #0f172a; font-size: 14px; }
  .opp-detail { color: #475569; font-size: 13px; margin-top: 4px; line-height: 1.5; }
  .verdict { background: #f0fdfa; border-radius: 12px; padding: 20px; font-size: 15px; color: #0f172a; font-weight: 500; line-height: 1.6; }
  .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px; text-align: center; }
  @media print { body { padding: 20px; } }
</style>
</head>
<body>
<h1>📊 Marketing Audit Report</h1>
<div class="meta">Business: ${url} &nbsp;·&nbsp; Generated by Digital Safalta &nbsp;·&nbsp; ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>

<div class="score-box">
  <div class="score-num">${result.score}</div>
  <div class="score-label">${scoreLabel} — Score out of 100</div>
  <div class="score-exp">${result.scoreExplanation}</div>
</div>

<div class="section">
  <div class="section-title">⚠️ Critical Issues — Top 3</div>
  ${result.criticalIssues.map((issue, i) => `
  <div class="issue">
    <div class="issue-num">${i + 1}.</div>
    <div>
      <div class="issue-title">${issue.title}</div>
      <div class="issue-detail">${issue.detail}</div>
    </div>
  </div>`).join('')}
</div>

<div class="section">
  <div class="section-title">💸 Lost Revenue Estimate</div>
  <div class="revenue">${result.lostRevenue.range}</div>
  <div class="issue-detail">${result.lostRevenue.reasoning}</div>
</div>

<div class="section">
  <div class="section-title">⚡ Quick Wins — Low Effort, High Impact</div>
  ${result.quickWins.map(win => `
  <div class="win">
    <div class="win-check">✓</div>
    <div>
      <div class="issue-title">${win.title}</div>
      <div class="issue-detail">${win.detail}</div>
    </div>
  </div>`).join('')}
</div>

<div class="section">
  <div class="section-title">🎯 Growth Opportunities — Strategic</div>
  <div class="opp">
    <div class="opp-label">📣 Paid Ads</div>
    <div class="opp-title">${result.growthOpportunities.paidAds.title}</div>
    <div class="opp-detail">${result.growthOpportunities.paidAds.detail}</div>
  </div>
  <div class="opp">
    <div class="opp-label">🔍 SEO</div>
    <div class="opp-title">${result.growthOpportunities.seo.title}</div>
    <div class="opp-detail">${result.growthOpportunities.seo.detail}</div>
  </div>
  <div class="opp">
    <div class="opp-label">📱 Social / Content</div>
    <div class="opp-title">${result.growthOpportunities.social.title}</div>
    <div class="opp-detail">${result.growthOpportunities.social.detail}</div>
  </div>
</div>

<div class="section">
  <div class="section-title">👥 Competitive Gap</div>
  <div class="issue-detail">${result.competitiveGap}</div>
</div>

<div class="section">
  <div class="section-title">🏆 Final Verdict</div>
  <div class="verdict">${result.finalVerdict}</div>
</div>

<div class="footer">
  Report generated by Digital Safalta — digitalsafalta.in &nbsp;·&nbsp; Free Marketing Audit Tool<br/>
  Want help fixing these issues? Contact us at digitalsafalta.in/contact
</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `marketing-audit-${new Date().toISOString().slice(0,10)}.html`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const scoreLabel = result ? result.score >= 70 ? 'Strong' : result.score >= 45 ? 'Average' : 'Underperforming' : '';
  const scoreLabelColor = result ? result.score >= 70 ? 'text-teal-400' : result.score >= 45 ? 'text-amber-400' : 'text-red-400' : '';

  return (
    <>
      <SEO
        title="Free Digital Marketing Audit Tool | Digital Safalta"
        description="Get a brutally honest AI-powered digital marketing audit for your business in seconds. Score, critical issues, lost revenue estimate, quick wins, and growth strategy — free."
      />
      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-5">Free Tool</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Marketing Audit in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">30 Seconds</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
              Paste your website or social media link. Get a senior strategist-level audit — score, issues, revenue leaks, and a growth plan — instantly.
            </p>
          </div>

          <div className={`rounded-2xl p-6 mb-4 ${glass}`}>
            <label className="block text-sm font-bold text-white mb-2">Website URL or Instagram Username</label>
            <div className="flex gap-3">
              <input
                type="text" value={url}
                onChange={e => setUrl(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !loading && handleAudit()}
                placeholder="yourpage  or  @yourpage  or  https://yourbusiness.com"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 transition-all"
                disabled={loading}
              />
              <button onClick={handleAudit} disabled={loading}
                className={`px-5 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shrink-0 ${tealBtn} disabled:opacity-50 disabled:cursor-not-allowed`}>
                <Search className="w-4 h-4" />
                {loading ? 'Analysing...' : 'Audit'}
              </button>
            </div>

            <button onClick={() => setShowContext(v => !v)}
              className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
              {showContext ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              Add business context (optional — improves accuracy)
            </button>
            {showContext && (
              <textarea value={businessContext} onChange={e => setBusinessContext(e.target.value)}
                placeholder="e.g. We're a Pune-based dental clinic, 5 years old, mainly walk-in patients, no ads running currently..."
                rows={3}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 transition-all resize-none"
                disabled={loading} />
            )}

            {error && (
              <div className="mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <p className="text-red-400 text-xs leading-relaxed break-all">{error}</p>
              </div>
            )}
          </div>

          <p className="text-center text-xs text-slate-500 mb-10">
            Powered by Gemini AI · No sign-up required · 100% free · Built by Digital Safalta, Pune
          </p>

          {loading && (
            <div className={`rounded-2xl p-10 ${glass} text-center`}>
              <div className="w-10 h-10 border-2 border-teal-500/30 border-t-teal-400 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white font-bold mb-1">Analysing your business...</p>
              <p className="text-slate-400 text-sm">Running a full digital marketing audit. This takes about 15–20 seconds.</p>
            </div>
          )}

          {result && (
            <div ref={resultRef} className="space-y-5">
              <div className={`rounded-2xl p-6 ${glass} text-center`}>
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">Overall Marketing Score</p>
                <ScoreRing score={result.score} />
                <p className={`text-lg font-black mt-3 ${scoreLabelColor}`}>{scoreLabel}</p>
                <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">{result.scoreExplanation}</p>
              </div>

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

              <Section icon={TrendingUp} label="Lost Revenue Estimate" color="bg-amber-500/15 text-amber-400">
                <p className="text-2xl font-black text-amber-400 mb-2">{result.lostRevenue.range}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{result.lostRevenue.reasoning}</p>
              </Section>

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

              <Section icon={Users} label="Competitive Gap" color="bg-cyan-500/15 text-cyan-400">
                <p className="text-slate-300 text-sm leading-relaxed">{result.competitiveGap}</p>
              </Section>

              <Section icon={Award} label="Final Verdict" color="bg-teal-500/15 text-teal-400">
                <p className="text-white text-base leading-relaxed font-medium">{result.finalVerdict}</p>
              </Section>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/25 text-center">
                <h3 className="text-lg font-black text-white mb-2">Want help fixing these issues?</h3>
                <p className="text-slate-400 text-sm mb-5">Digital Safalta helps Pune businesses fix exactly these problems. Free consultation, no obligation.</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="/contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold ${tealBtn}`}>
                    Talk to Us — Free
                  </a>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                    <Download className="w-3.5 h-3.5" /> Download Report
                  </button>
                  <button
                    onClick={() => { setResult(null); setUrl(''); setBusinessContext(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
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
