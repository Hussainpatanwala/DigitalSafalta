import { useState, FormEvent } from 'react';
import type { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Loader2, Send } from 'lucide-react';
import { glass, tealBtn, inputCls } from '../lib/constants';
import type { FormData, FormStatus, Lang } from '../lib/constants';
import { getContent } from '../getContent';

const formInit: FormData = {
  first_name: '', last_name: '', company_name: '', email: '', phone: '', website_url: '',
  runs_paid_ads: '', sends_newsletters: '', posts_social_regularly: '',
  main_marketing_channel: '', has_customer_database: '', uses_data_for_winback: '',
};

// Cloudflare Worker endpoint.
const CONTACT_ENDPOINT = 'https://digitalsafalta-contact.patanwalahussain.workers.dev';

// Fixed dropdown values the Worker validates against — do not translate these,
// only the visible label. If you add/remove an option here, update the
// VALID_CHANNELS list in worker.js too.
const CHANNEL_VALUES = ['SEO', 'Paid Ads', 'Social Media', 'Content', 'Email', 'Other'] as const;

const STRINGS: Record<Lang, {
  eyebrow: string;
  firstNameLabel: string; firstNamePlaceholder: string;
  lastNameLabel: string; lastNamePlaceholder: string;
  companyLabel: string; companyPlaceholder: string;
  emailLabel: string;
  phoneLabel: string;
  websiteLabel: string; websitePlaceholder: string;
  questionnaireHeading: string;
  paidAdsQ: string; newslettersQ: string; socialQ: string;
  channelLabel: string; channelPlaceholder: string; channelLabels: Record<typeof CHANNEL_VALUES[number], string>;
  customerDbQ: string; winbackQ: string;
  yesLabel: string; noLabel: string;
  sending: string; messageSent: string; thankYou: string; redirecting: string; errorMsg: string;
}> = {
  en: {
    eyebrow: 'Free marketing audit · No obligation',
    firstNameLabel: 'First Name', firstNamePlaceholder: 'e.g. Priya',
    lastNameLabel: 'Last Name', lastNamePlaceholder: 'e.g. Sharma',
    companyLabel: 'Business / Company Name', companyPlaceholder: 'No company? Use your handle or your own name',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone Number (optional)',
    websiteLabel: 'Website URL (optional)', websitePlaceholder: 'https://yourbusiness.com',
    questionnaireHeading: 'Quick questions about your marketing',
    paidAdsQ: 'Do you run paid ads?',
    newslettersQ: 'Do you send email newsletters?',
    socialQ: 'Do you post regularly on social media?',
    channelLabel: 'What is your main marketing channel?',
    channelPlaceholder: 'Select one',
    channelLabels: { SEO: 'SEO', 'Paid Ads': 'Paid Ads', 'Social Media': 'Social Media', Content: 'Content', Email: 'Email', Other: 'Other' },
    customerDbQ: 'Do you have a database of customers (Excel or DB)?',
    winbackQ: 'Do you use existing customer data to win back lapsed customers?',
    yesLabel: 'Yes', noLabel: 'No',
    sending: 'Sending…', messageSent: 'Request Sent!',
    thankYou: '🎉 Thank you for requesting your free audit. We will contact you shortly.',
    redirecting: 'Taking you back to the homepage…',
    errorMsg: 'Something went wrong. Please try again or email us directly.',
  },
  hi: {
    eyebrow: 'मुफ़्त मार्केटिंग ऑडिट · कोई बाध्यता नहीं',
    firstNameLabel: 'पहला नाम', firstNamePlaceholder: 'उदा. प्रिया',
    lastNameLabel: 'अंतिम नाम', lastNamePlaceholder: 'उदा. शर्मा',
    companyLabel: 'बिज़नेस / कंपनी का नाम', companyPlaceholder: 'कोई कंपनी नहीं? अपना हैंडल या अपना नाम लिखें',
    emailLabel: 'ईमेल पता',
    phoneLabel: 'फ़ोन नंबर (वैकल्पिक)',
    websiteLabel: 'वेबसाइट URL (वैकल्पिक)', websitePlaceholder: 'https://yourbusiness.com',
    questionnaireHeading: 'आपकी मार्केटिंग के बारे में कुछ सवाल',
    paidAdsQ: 'क्या आप पेड ऐड्स चलाते हैं?',
    newslettersQ: 'क्या आप ईमेल न्यूज़लेटर भेजते हैं?',
    socialQ: 'क्या आप सोशल मीडिया पर नियमित रूप से पोस्ट करते हैं?',
    channelLabel: 'आपका मुख्य मार्केटिंग चैनल क्या है?',
    channelPlaceholder: 'एक चुनें',
    channelLabels: { SEO: 'SEO', 'Paid Ads': 'पेड ऐड्स', 'Social Media': 'सोशल मीडिया', Content: 'कंटेंट', Email: 'ईमेल', Other: 'अन्य' },
    customerDbQ: 'क्या आपके पास ग्राहकों का डेटाबेस है (Excel या DB में)?',
    winbackQ: 'क्या आप मौजूदा ग्राहक डेटा का उपयोग निष्क्रिय ग्राहकों को वापस लाने के लिए करते हैं?',
    yesLabel: 'हाँ', noLabel: 'नहीं',
    sending: 'भेजा जा रहा है…', messageSent: 'अनुरोध भेज दिया गया!',
    thankYou: '🎉 अपने मुफ़्त ऑडिट के अनुरोध के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
    redirecting: 'आपको होमपेज पर वापस ले जाया जा रहा है…',
    errorMsg: 'कुछ गलत हो गया। कृपया दोबारा कोशिश करें या सीधे हमें ईमेल करें।',
  },
  mr: {
    eyebrow: 'मोफत मार्केटिंग ऑडिट · कोणतीही बांधिलकी नाही',
    firstNameLabel: 'पहिले नाव', firstNamePlaceholder: 'उदा. प्रिया',
    lastNameLabel: 'आडनाव', lastNamePlaceholder: 'उदा. शर्मा',
    companyLabel: 'व्यवसाय / कंपनीचे नाव', companyPlaceholder: 'कंपनी नाही? तुमचे हँडल किंवा नाव लिहा',
    emailLabel: 'ईमेल पत्ता',
    phoneLabel: 'फोन नंबर (ऐच्छिक)',
    websiteLabel: 'वेबसाइट URL (ऐच्छिक)', websitePlaceholder: 'https://yourbusiness.com',
    questionnaireHeading: 'तुमच्या मार्केटिंगबद्दल काही प्रश्न',
    paidAdsQ: 'तुम्ही पेड जाहिराती चालवता का?',
    newslettersQ: 'तुम्ही ईमेल न्यूजलेटर पाठवता का?',
    socialQ: 'तुम्ही सोशल मीडियावर नियमितपणे पोस्ट करता का?',
    channelLabel: 'तुमचे मुख्य मार्केटिंग चॅनेल कोणते आहे?',
    channelPlaceholder: 'एक निवडा',
    channelLabels: { SEO: 'SEO', 'Paid Ads': 'पेड जाहिराती', 'Social Media': 'सोशल मीडिया', Content: 'कंटेंट', Email: 'ईमेल', Other: 'इतर' },
    customerDbQ: 'तुमच्याकडे ग्राहकांचा डेटाबेस आहे का (Excel किंवा DB मध्ये)?',
    winbackQ: 'निष्क्रिय ग्राहकांना परत आणण्यासाठी तुम्ही सध्याच्या ग्राहक डेटाचा वापर करता का?',
    yesLabel: 'होय', noLabel: 'नाही',
    sending: 'पाठवत आहे…', messageSent: 'विनंती पाठवली!',
    thankYou: '🎉 तुमच्या मोफत ऑडिटच्या विनंतीबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क करू.',
    redirecting: 'तुम्हाला होमपेजवर परत नेले जात आहे…',
    errorMsg: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा किंवा थेट आम्हाला ईमेल करा.',
  },
};

// Small reusable Yes/No radio pair — keeps the six questionnaire fields consistent
// and gives us free native "please select one" browser validation via `required`.
function YesNoField({
  id, name, label, value, onChange, yesLabel, noLabel, disabled,
}: {
  id: string; name: keyof FormData; label: string; value: string;
  onChange: (name: keyof FormData, value: string) => void;
  yesLabel: string; noLabel: string; disabled: boolean;
}) {
  return (
    <div>
      <span className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{label}</span>
      <div className="flex gap-4">
        {(['yes', 'no'] as const).map((opt) => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="radio"
              id={`${id}-${opt}`}
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(name, opt)}
              required
              disabled={disabled}
              className="w-4 h-4 border-slate-600 bg-slate-800 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-950 cursor-pointer"
            />
            <span className="text-sm text-slate-300">{opt === 'yes' ? yesLabel : noLabel}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function Contact({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).contact;
  const s = STRINGS[lang];
  const navigate = useNavigate();
  const [formData, setFormData]     = useState<FormData>(formInit);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [agreed, setAgreed]         = useState(false);

  // Bump these whenever the Privacy Policy or Terms text materially changes,
  // and keep them matching the "Last updated" date on those pages.
  const POLICY_VERSION = '2026-08-13';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return; // belt-and-suspenders — button is disabled too
    setFormStatus('submitting');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          company_name: formData.company_name,
          email: formData.email,
          phone: formData.phone || null,
          website_url: formData.website_url || null,
          runs_paid_ads: formData.runs_paid_ads === 'yes',
          sends_newsletters: formData.sends_newsletters === 'yes',
          posts_social_regularly: formData.posts_social_regularly === 'yes',
          main_marketing_channel: formData.main_marketing_channel,
          has_customer_database: formData.has_customer_database === 'yes',
          uses_data_for_winback: formData.uses_data_for_winback === 'yes',
          consent_given_at: new Date().toISOString(),
          terms_version: POLICY_VERSION,
          privacy_version: POLICY_VERSION,
        }),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || `Request failed with status ${res.status}`);
      }
      setFormStatus('success');
      setFormData(formInit);
      setAgreed(false);
      // Show the inline thank-you message, then send them home.
      setTimeout(() => navigate('/'), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setFormStatus('error');
    }
  };

  const submitting = formStatus === 'submitting';

  return (
    <section id="contact" className="pt-2 pb-6 lg:pt-2 lg:pb-8 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[700px] h-72 bg-teal-500/8 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-start">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
              {s.eyebrow}
            </div>
            <h2 id="contact-heading" className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t.title}</h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">{t.description}</p>
          </div>
          <div className={`rounded-3xl p-4 lg:p-5 relative overflow-hidden ${glass} shadow-2xl shadow-black/40`}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" aria-hidden="true" />
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="contact-first-name" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{s.firstNameLabel}</label>
                  <input id="contact-first-name" type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} placeholder={s.firstNamePlaceholder} required disabled={submitting} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{s.lastNameLabel}</label>
                  <input id="contact-last-name" type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} placeholder={s.lastNamePlaceholder} required disabled={submitting} className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{s.emailLabel}</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required disabled={submitting} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{s.phoneLabel}</label>
                  <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" disabled={submitting} className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="contact-company" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{s.companyLabel}</label>
                  <input id="contact-company" type="text" name="company_name" value={formData.company_name} onChange={handleInputChange} placeholder={s.companyPlaceholder} required disabled={submitting} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="contact-website" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{s.websiteLabel}</label>
                  <input id="contact-website" type="url" name="website_url" value={formData.website_url} onChange={handleInputChange} placeholder={s.websitePlaceholder} disabled={submitting} className={inputCls} />
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-xs font-bold text-teal-300/80 tracking-widest uppercase mb-3 mt-2">{s.questionnaireHeading}</p>
                <div className="space-y-3">
                  <YesNoField id="paid-ads" name="runs_paid_ads" label={s.paidAdsQ} value={formData.runs_paid_ads} onChange={handleRadioChange} yesLabel={s.yesLabel} noLabel={s.noLabel} disabled={submitting} />
                  <YesNoField id="newsletters" name="sends_newsletters" label={s.newslettersQ} value={formData.sends_newsletters} onChange={handleRadioChange} yesLabel={s.yesLabel} noLabel={s.noLabel} disabled={submitting} />
                  <YesNoField id="social" name="posts_social_regularly" label={s.socialQ} value={formData.posts_social_regularly} onChange={handleRadioChange} yesLabel={s.yesLabel} noLabel={s.noLabel} disabled={submitting} />

                  <div>
                    <label htmlFor="contact-channel" className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-1.5">{s.channelLabel}</label>
                    <select id="contact-channel" name="main_marketing_channel" value={formData.main_marketing_channel} onChange={handleInputChange} required disabled={submitting} className={`${inputCls} bg-slate-900`}>
                      <option value="" disabled className="bg-slate-900 text-slate-400">{s.channelPlaceholder}</option>
                      {CHANNEL_VALUES.map((value) => (
                        <option key={value} value={value} className="bg-slate-900 text-white">{s.channelLabels[value]}</option>
                      ))}
                    </select>
                  </div>

                  <YesNoField id="customer-db" name="has_customer_database" label={s.customerDbQ} value={formData.has_customer_database} onChange={handleRadioChange} yesLabel={s.yesLabel} noLabel={s.noLabel} disabled={submitting} />
                  <YesNoField id="winback" name="uses_data_for_winback" label={s.winbackQ} value={formData.uses_data_for_winback} onChange={handleRadioChange} yesLabel={s.yesLabel} noLabel={s.noLabel} disabled={submitting} />
                </div>
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer select-none pt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-slate-800 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-950 cursor-pointer"
                />
                <span className="text-xs text-slate-400">
                  I agree to the{' '}
                  <Link to="/terms" className="underline hover:text-slate-300" onClick={(e) => e.stopPropagation()}>Terms of Service</Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="underline hover:text-slate-300" onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>.
                </span>
              </label>
              <button
                type="submit"
                disabled={submitting || !agreed || formStatus === 'success'}
                className={`w-full py-2.5 rounded-xl text-base font-bold flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                  submitting || !agreed ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : formStatus === 'success'  ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 cursor-default'
                  : tealBtn
                }`}
              >
                {submitting ? (<><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />{s.sending}</>)
                 : formStatus === 'success'  ? (<><Check className="w-5 h-5" aria-hidden="true" />{s.messageSent}</>)
                 : (<>{t.buttonText}<Send className="w-5 h-5" aria-hidden="true" /></>)}
              </button>
            </form>
            {formStatus === 'success' && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-sm text-center" role="status">
                {s.thankYou}
                <div className="mt-1 text-emerald-400/70 text-xs">{s.redirecting}</div>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-sm text-center" role="alert">
                {s.errorMsg}
              </div>
            )}
            <p className="text-center text-xs text-slate-500 mt-3">{t.responseTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
