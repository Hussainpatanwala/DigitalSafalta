import { useState, FormEvent } from 'react';
import type { ChangeEvent } from 'react';
import { Check, Loader2, Send } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { glass, tealBtn, inputCls } from '../lib/constants';
import type { FormData, FormStatus } from '../lib/constants';
import { contactTitle, contactDescription, contactButtonText, contactResponseTime } from '../content';

const formInit: FormData = { name: '', phone: '', email: '', company: '', business_type: '', existing_website: '', message: '' };

export function Contact() {
  const [formData, setFormData]     = useState<FormData>(formInit);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert([{ ...formData, source: 'website' }]);
      if (dbError) throw new Error(dbError.message);
      const { error: fnError } = await supabase.functions.invoke('notify-form-submission', { body: { ...formData, source: 'website' } });
      if (fnError) throw new Error(fnError.message);
      setFormStatus('success');
      setFormData(formInit);
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-28 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[700px] h-72 bg-teal-500/8 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            Free consultation · No obligation
          </div>
          <h2 id="contact-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{contactTitle}</h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto">{contactDescription}</p>
        </div>
        <div className={`rounded-3xl p-8 lg:p-10 relative overflow-hidden ${glass} shadow-2xl shadow-black/40`}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" aria-hidden="true" />
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Your Name</label>
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Priya Sharma" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Phone Number</label>
              <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Email Address</label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Business Name</label>
              <input id="contact-company" type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your Business Name" disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-business-type" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Type of Business</label>
              <select id="contact-business-type" name="business_type" value={formData.business_type} onChange={handleInputChange} disabled={formStatus === 'submitting'} className={`${inputCls} bg-slate-900`}>
                <option value="">Type of Business (optional)</option>
                <option>Restaurant / Food Business</option>
                <option>Retail / Shop</option>
                <option>Professional Services (CA, Doctor, Lawyer)</option>
                <option>Real Estate</option>
                <option>Education / Coaching</option>
                <option>E-commerce</option>
                <option>Manufacturing / B2B</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-existing-website" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Do You Have a Website?</label>
              <select id="contact-existing-website" name="existing_website" value={formData.existing_website} onChange={handleInputChange} disabled={formStatus === 'submitting'} className={`${inputCls} bg-slate-900`}>
                <option value="">Do you have a website? (optional)</option>
                <option>No, I need everything from scratch</option>
                <option>I have a domain but no website</option>
                <option>I have a website but want to redesign it</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Tell Us About Your Goals</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your business and what you are looking to achieve..." rows={4} required disabled={formStatus === 'submitting'} className={`${inputCls} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                formStatus === 'submitting' ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : formStatus === 'success'  ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 cursor-default'
                : tealBtn
              }`}
            >
              {formStatus === 'submitting' ? (<><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />Sending…</>)
               : formStatus === 'success'  ? (<><Check className="w-5 h-5" aria-hidden="true" />Message Sent!</>)
               : (<>{contactButtonText}<Send className="w-5 h-5" aria-hidden="true" /></>)}
            </button>
          </form>
          {formStatus === 'success' && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-sm text-center" role="status">
              🎉 Thank you! We'll be in touch within 24 hours.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-sm text-center" role="alert">
              Something went wrong. Please try again or email us directly.
            </div>
          )}
          <p className="text-center text-xs text-slate-500 mt-5">{contactResponseTime}</p>
        </div>
      </div>
    </section>
  );
}
