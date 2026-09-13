export const PHONE_NUMBER    = '+919029467352';
export const WHATSAPP_NUMBER = '919029467352';

export const glass      = 'backdrop-blur-md bg-white/5 border border-white/10';
export const glassHover = 'hover:bg-white/8 hover:border-white/20 transition-all duration-300';
export const tealBtn    = 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/35 hover:-translate-y-0.5 transition-all duration-200';
export const inputCls   = 'w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed';

export type Lang = 'en' | 'hi' | 'mr';

export interface FormData {
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  phone: string;
  website_url: string;
  // Stored as 'yes' | 'no' | '' in form state (radio-driven, so native `required`
  // validation works); converted to real booleans right before the API call.
  runs_paid_ads: string;
  sends_newsletters: string;
  posts_social_regularly: string;
  main_marketing_channel: string;
  has_customer_database: string;
  uses_data_for_winback: string;
}
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
