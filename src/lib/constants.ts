export const PHONE_NUMBER    = '+919029467352';
export const WHATSAPP_NUMBER = '919029467352';

export const glass      = 'backdrop-blur-md bg-white/5 border border-white/10';
export const glassHover = 'hover:bg-white/8 hover:border-white/20 transition-all duration-300';
export const tealBtn    = 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold hover:from-teal-400 hover:to-cyan-400 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/35 hover:-translate-y-0.5 transition-all duration-200';
export const inputCls   = 'w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed';

export type Lang = 'en' | 'hi' | 'mr';

export interface FormData {
  name: string; phone: string; email: string; company: string;
  business_type: string; existing_website: string; message: string;
}
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
