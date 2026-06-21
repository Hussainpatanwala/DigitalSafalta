import { useState, FormEvent } from 'react';
import type { ChangeEvent } from 'react';
import { Check, Loader2, Send } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { glass, tealBtn, inputCls } from '../lib/constants';
import type { FormData, FormStatus, Lang } from '../lib/constants';
import { getContent } from '../getContent';

const formInit: FormData = { name: '', phone: '', email: '', company: '', business_type: '', existing_website: '', message: '' };

const STRINGS: Record<Lang, {
  eyebrow: string; nameLabel: string; namePlaceholder: string;
  phoneLabel: string; emailLabel: string; companyLabel: string; companyPlaceholder: string;
  businessTypeLabel: string; businessTypePlaceholder: string;
  businessTypes: string[];
  websiteLabel: string; websitePlaceholder: string; websiteOptions: string[];
  messageLabel: string;
  sending: string; messageSent: string; thankYou: string; errorMsg: string;
}> = {
  en: {
    eyebrow: 'Free consultation · No obligation',
    nameLabel: 'Your Name', namePlaceholder: 'e.g. Priya Sharma',
    phoneLabel: 'Phone Number',
    emailLabel: 'Email Address',
    companyLabel: 'Business Name', companyPlaceholder: 'Your Business Name',
    businessTypeLabel: 'Type of Business', businessTypePlaceholder: 'Type of Business (optional)',
    businessTypes: ['Restaurant / Food Business', 'Retail / Shop', 'Professional Services (CA, Doctor, Lawyer)', 'Real Estate', 'Education / Coaching', 'E-commerce', 'Manufacturing / B2B', 'Other'],
    websiteLabel: 'Do You Have a Website?', websitePlaceholder: 'Do you have a website? (optional)',
    websiteOptions: ['No, I need everything from scratch', 'I have a domain but no website', 'I have a website but want to redesign it'],
    messageLabel: 'Tell Us About Your Goals',
    sending: 'Sending…', messageSent: 'Message Sent!',
    thankYou: "🎉 Thank you! We'll be in touch within 24 hours.",
    errorMsg: 'Something went wrong. Please try again or email us directly.',
  },
  hi: {
    eyebrow: 'मुफ़्त परामर्श · कोई बाध्यता नहीं',
    nameLabel: 'आपका नाम', namePlaceholder: 'उदा. प्रिया शर्मा',
    phoneLabel: 'फ़ोन नंबर',
    emailLabel: 'ईमेल पता',
    companyLabel: 'बिज़नेस का नाम', companyPlaceholder: 'आपके बिज़नेस का नाम',
    businessTypeLabel: 'बिज़नेस का प्रकार', businessTypePlaceholder: 'बिज़नेस का प्रकार (वैकल्पिक)',
    businessTypes: ['रेस्टोरेंट / फूड बिज़नेस', 'रिटेल / दुकान', 'प्रोफेशनल सेवाएं (CA, डॉक्टर, वकील)', 'रियल एस्टेट', 'शिक्षा / कोचिंग', 'ई-कॉमर्स', 'मैन्युफैक्चरिंग / B2B', 'अन्य'],
    websiteLabel: 'क्या आपके पास वेबसाइट है?', websitePlaceholder: 'क्या आपके पास वेबसाइट है? (वैकल्पिक)',
    websiteOptions: ['नहीं, मुझे शुरुआत से सब कुछ चाहिए', 'मेरे पास domain है पर वेबसाइट नहीं', 'मेरे पास वेबसाइट है पर redesign चाहिए'],
    messageLabel: 'हमें अपने लक्ष्यों के बारे में बताएं',
    sending: 'भेजा जा रहा है…', messageSent: 'मैसेज भेज दिया गया!',
    thankYou: '🎉 धन्यवाद! हम 24 घंटों के भीतर संपर्क करेंगे।',
    errorMsg: 'कुछ गलत हो गया। कृपया दोबारा कोशिश करें या सीधे हमें ईमेल करें।',
  },
  mr: {
    eyebrow: 'मोफत सल्ला · कोणतीही बांधिलकी नाही',
    nameLabel: 'तुमचे नाव', namePlaceholder: 'उदा. प्रिया शर्मा',
    phoneLabel: 'फोन नंबर',
    emailLabel: 'ईमेल पत्ता',
    companyLabel: 'व्यवसायाचे नाव', companyPlaceholder: 'तुमच्या व्यवसायाचे नाव',
    businessTypeLabel: 'व्यवसायाचा प्रकार', businessTypePlaceholder: 'व्यवसायाचा प्रकार (ऐच्छिक)',
    businessTypes: ['रेस्टॉरंट / फूड व्यवसाय', 'रिटेल / दुकान', 'व्यावसायिक सेवा (CA, डॉक्टर, वकील)', 'रिअल इस्टेट', 'शिक्षण / कोचिंग', 'ई-कॉमर्स', 'मॅन्युफॅक्चरिंग / B2B', 'इतर'],
    websiteLabel: 'तुमच्याकडे वेबसाइट आहे का?', websitePlaceholder: 'तुमच्याकडे वेबसाइट आहे का? (ऐच्छिक)',
    websiteOptions: ['नाही, मला सुरुवातीपासून सर्वकाही हवे आहे', 'माझ्याकडे domain आहे पण वेबसाइट नाही', 'माझ्याकडे वेबसाइट आहे पण redesign हवी आहे'],
    messageLabel: 'तुमच्या उद्दिष्टांबद्दल आम्हाला सांगा',
    sending: 'पाठवत आहे…', messageSent: 'मेसेज पाठवला!',
    thankYou: '🎉 धन्यवाद! आम्ही 24 तासांच्या आत संपर्क करू.',
    errorMsg: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा किंवा थेट आम्हाला ईमेल करा.',
  },
};

export function Contact({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).contact;
  const s = STRINGS[lang];
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
            {s.eyebrow}
          </div>
          <h2 id="contact-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t.title}</h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto">{t.description}</p>
        </div>
        <div className={`rounded-3xl p-8 lg:p-10 relative overflow-hidden ${glass} shadow-2xl shadow-black/40`}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" aria-hidden="true" />
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{s.nameLabel}</label>
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={s.namePlaceholder} required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{s.phoneLabel}</label>
              <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{s.emailLabel}</label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{s.companyLabel}</label>
              <input id="contact-company" type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder={s.companyPlaceholder} disabled={formStatus === 'submitting'} className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-business-type" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{s.businessTypeLabel}</label>
              <select id="contact-business-type" name="business_type" value={formData.business_type} onChange={handleInputChange} disabled={formStatus === 'submitting'} className={`${inputCls} bg-slate-900`}>
                <option value="">{s.businessTypePlaceholder}</option>
                {s.businessTypes.map((opt) => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="contact-existing-website" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{s.websiteLabel}</label>
              <select id="contact-existing-website" name="existing_website" value={formData.existing_website} onChange={handleInputChange} disabled={formStatus === 'submitting'} className={`${inputCls} bg-slate-900`}>
                <option value="">{s.websitePlaceholder}</option>
                {s.websiteOptions.map((opt) => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{s.messageLabel}</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleInputChange} placeholder={t.formPlaceholder.message} rows={4} required disabled={formStatus === 'submitting'} className={`${inputCls} resize-none`} />
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
              {formStatus === 'submitting' ? (<><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />{s.sending}</>)
               : formStatus === 'success'  ? (<><Check className="w-5 h-5" aria-hidden="true" />{s.messageSent}</>)
               : (<>{t.buttonText}<Send className="w-5 h-5" aria-hidden="true" /></>)}
            </button>
          </form>
          {formStatus === 'success' && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-sm text-center" role="status">
              {s.thankYou}
            </div>
          )}
          {formStatus === 'error' && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-sm text-center" role="alert">
              {s.errorMsg}
            </div>
          )}
          <p className="text-center text-xs text-slate-500 mt-5">{t.responseTime}</p>
        </div>
      </div>
    </section>
  );
}
