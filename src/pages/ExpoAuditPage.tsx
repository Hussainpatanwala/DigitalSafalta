import { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';
import { glass, tealBtn, inputCls } from '../lib/constants';
import { CheckCircle2, Circle, Loader2, Award, RotateCcw } from 'lucide-react';

// Same Worker that already handles the contact form — just a different path.
const API_BASE = 'https://digitalsafalta-contact.patanwalahussain.workers.dev';

type Section = {
  key: string;
  title: string;
  max: number;
  items: { id: string; label: string }[];
};

// Mirrors CHECKLIST_ITEMS in worker/worker.js exactly — the server recomputes
// the real score from these same ids, this is just for rendering the form.
const SECTIONS: Section[] = [
  {
    key: 'google', title: 'Google Presence', max: 10,
    items: [
      { id: 'gp_profile_exists', label: 'Google Business Profile exists' },
      { id: 'gp_reviews_above_20', label: 'Google Reviews above 20' },
      { id: 'gp_correct_phone', label: 'Correct phone number listed' },
      { id: 'gp_latest_photos', label: 'Latest photos uploaded' },
      { id: 'gp_maps_optimized', label: 'Google Maps optimized' },
    ],
  },
  {
    key: 'website', title: 'Website', max: 10,
    items: [
      { id: 'web_mobile_friendly', label: 'Mobile friendly' },
      { id: 'web_fast_loading', label: 'Fast loading' },
      { id: 'web_ssl_enabled', label: 'SSL enabled (https)' },
      { id: 'web_whatsapp_button', label: 'WhatsApp button' },
      { id: 'web_contact_form', label: 'Contact form' },
    ],
  },
  {
    key: 'leadgen', title: 'Lead Generation', max: 20,
    items: [
      { id: 'lg_website_inquiries', label: 'Website generating inquiries' },
      { id: 'lg_facebook_active', label: 'Facebook page active' },
      { id: 'lg_instagram_active', label: 'Instagram active' },
      { id: 'lg_linkedin_active', label: 'LinkedIn active' },
      { id: 'lg_sources_tracked', label: 'Lead sources tracked' },
    ],
  },
  {
    key: 'sales', title: 'Sales Process', max: 20,
    items: [
      { id: 'sp_enquiries_1day', label: 'Enquiries answered within 1 day' },
      { id: 'sp_whatsapp_followup', label: 'WhatsApp follow-up system' },
      { id: 'sp_customer_database', label: 'Customer database maintained' },
      { id: 'sp_followup_reminders', label: 'Follow-up reminders' },
      { id: 'sp_quotation_tracking', label: 'Quotation tracking' },
    ],
  },
  {
    key: 'branding', title: 'Branding', max: 20,
    items: [
      { id: 'br_professional_logo', label: 'Professional logo' },
      { id: 'br_product_catalogue', label: 'Product catalogue' },
      { id: 'br_hq_images', label: 'High-quality images' },
      { id: 'br_brand_consistency', label: 'Brand consistency' },
      { id: 'br_testimonials', label: 'Customer testimonials' },
    ],
  },
  {
    key: 'growth', title: 'Growth Readiness', max: 20,
    items: [
      { id: 'gr_monthly_target', label: 'Monthly growth target set' },
      { id: 'gr_marketing_budget', label: 'Marketing budget allocated' },
      { id: 'gr_lead_tracking', label: 'Lead tracking in place' },
      { id: 'gr_conversion_tracking', label: 'Conversion tracking in place' },
      { id: 'gr_roi_tracking', label: 'ROI tracking in place' },
    ],
  },
];

const REVENUE_RANGES = ['< ₹10L', '₹10L – ₹50L', '₹50L – ₹1Cr', '₹1Cr – ₹5Cr', '₹5Cr+'];

type Status = 'checking' | 'inactive' | 'form' | 'submitting' | 'done' | 'error';

type Scores = {
  total: number; tier: string;
  breakdown: Record<'google' | 'website' | 'leadgen' | 'sales' | 'branding' | 'growth', number>;
};

export function ExpoAuditPage() {
  const [status, setStatus] = useState<Status>('checking');
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [revenueRange, setRevenueRange] = useState('');
  const [biggestChallenge, setBiggestChallenge] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<Scores | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/exhibition/status`)
      .then(r => r.json())
      .then((d: { active?: boolean }) => setStatus(d.active ? 'form' : 'inactive'))
      .catch(() => setStatus('inactive'));
  }, []);

  const toggle = (id: string) => setAnswers(a => ({ ...a, [id]: !a[id] }));

  const checkedCount = Object.values(answers).filter(Boolean).length;

  const handleSubmit = async () => {
    if (!name.trim() || !company.trim() || !mobile.trim()) {
      setError('Name, company, and mobile are required.');
      return;
    }
    setError('');
    setStatus('submitting');
    try {
      const res = await fetch(`${API_BASE}/exhibition/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(), company: company.trim(), mobile: mobile.trim(),
          email: email.trim() || undefined, industry: industry.trim() || undefined,
          revenue_range: revenueRange || undefined, biggest_challenge: biggestChallenge.trim() || undefined,
          answers,
        }),
      });
      const data = await res.json() as { success?: boolean; error?: string; score?: number; tier?: string; breakdown?: Scores['breakdown'] };
      if (!res.ok || !data.success) {
        setError(data.error || 'Something went wrong. Please try again.');
        setStatus('form');
        return;
      }
      setResult({ total: data.score!, tier: data.tier!, breakdown: data.breakdown! });
      setStatus('done');
    } catch {
      setError('Network error. Please try again.');
      setStatus('form');
    }
  };

  const reset = () => {
    setAnswers({}); setName(''); setCompany(''); setMobile(''); setEmail('');
    setIndustry(''); setRevenueRange(''); setBiggestChallenge(''); setResult(null);
    setError(''); setStatus('form');
  };

  const tierColor = (tier: string) =>
    tier === 'Growth Ready' ? 'text-teal-400' : tier === 'Growth Opportunity' ? 'text-amber-400' : 'text-red-400';

  return (
    <>
      <SEO title="Business Growth Audit | Digital Safalta" description="Free 10-minute business growth audit — get your score on the spot." />
      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {status === 'checking' && (
            <div className="text-center py-20">
              <Loader2 className="w-8 h-8 text-teal-400 animate-spin mx-auto" />
            </div>
          )}

          {status === 'inactive' && (
            <div className={`rounded-2xl p-10 text-center ${glass}`}>
              <h1 className="text-2xl font-black text-white mb-2">Business Growth Audit</h1>
              <p className="text-slate-400">This audit isn't running right now — check back at our next event, or ask our team directly.</p>
            </div>
          )}

          {(status === 'form' || status === 'submitting') && (
            <>
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 border border-teal-500/25 text-teal-300 mb-4">Free — 10 Minutes</span>
                <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">Business Growth Audit</h1>
                <p className="text-slate-400">Answer honestly — get your Business Health Score, top growth opportunities, and a free tools kit instantly.</p>
              </div>

              <div className={`rounded-2xl p-6 mb-5 ${glass}`}>
                <h2 className="text-sm font-black text-white uppercase tracking-wider mb-4">Your Details</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input className={inputCls} placeholder="Your name *" value={name} onChange={e => setName(e.target.value)} />
                  <input className={inputCls} placeholder="Company / Business name *" value={company} onChange={e => setCompany(e.target.value)} />
                  <input className={inputCls} placeholder="Mobile number *" value={mobile} onChange={e => setMobile(e.target.value)} />
                  <input className={inputCls} placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                  <input className={inputCls} placeholder="Industry" value={industry} onChange={e => setIndustry(e.target.value)} />
                  <select className={inputCls} value={revenueRange} onChange={e => setRevenueRange(e.target.value)}>
                    <option value="">Annual revenue range</option>
                    {REVENUE_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <textarea className={`${inputCls} mt-3 resize-none`} rows={2}
                  placeholder="What's your single biggest business challenge right now?"
                  value={biggestChallenge} onChange={e => setBiggestChallenge(e.target.value)} />
              </div>

              {SECTIONS.map(section => (
                <div key={section.key} className={`rounded-2xl p-6 mb-4 ${glass}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-black text-white uppercase tracking-wider">{section.title}</h2>
                    <span className="text-xs text-slate-500 font-bold">/{section.max}</span>
                  </div>
                  <div className="space-y-2">
                    {section.items.map(item => {
                      const checked = !!answers[item.id];
                      return (
                        <button key={item.id} type="button" onClick={() => toggle(item.id)}
                          className="w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
                          {checked
                            ? <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                            : <Circle className="w-5 h-5 text-slate-600 shrink-0" />}
                          <span className={`text-sm ${checked ? 'text-white' : 'text-slate-400'}`}>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-500">{checkedCount} / {SECTIONS.reduce((a, s) => a + s.items.length, 0)} checked</span>
              </div>

              <button onClick={handleSubmit} disabled={status === 'submitting'}
                className={`w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 ${tealBtn} disabled:opacity-50`}>
                {status === 'submitting' ? <><Loader2 className="w-4 h-4 animate-spin" /> Calculating...</> : 'Get My Score'}
              </button>
            </>
          )}

          {status === 'done' && result && (
            <div className="space-y-5">
              <div className={`rounded-2xl p-8 text-center ${glass}`}>
                <Award className={`w-10 h-10 mx-auto mb-3 ${tierColor(result.tier)}`} />
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Your Business Health Score</p>
                <p className="text-5xl font-black text-white mb-2">{result.total}<span className="text-xl text-slate-500">/100</span></p>
                <p className={`text-lg font-black ${tierColor(result.tier)}`}>{result.tier}</p>
              </div>

              <div className={`rounded-2xl p-6 ${glass}`}>
                <h2 className="text-sm font-black text-white uppercase tracking-wider mb-4">Section Breakdown</h2>
                <div className="space-y-3">
                  {SECTIONS.map(s => (
                    <div key={s.key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">{s.title}</span>
                        <span className="text-slate-400">{result.breakdown[s.key as keyof Scores['breakdown']]} / {s.max}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
                          style={{ width: `${(result.breakdown[s.key as keyof Scores['breakdown']] / s.max) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/25 text-center">
                <h3 className="text-lg font-black text-white mb-2">Want the full breakdown + free tools kit?</h3>
                <p className="text-slate-400 text-sm mb-5">Our team will scan the QR code shared at the stand and follow up with your detailed report.</p>
                <button onClick={reset} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                  <RotateCcw className="w-3.5 h-3.5" /> Next Visitor
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
