import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';
import { MobileActionBar } from './MobileActionBar';

const FOOTER_LINKS = ['/services', '/services', '/services', '/services'];
const COMPANY_LINKS = ['/about', '/pricing', '/contact'];

export function Footer({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang);

  return (
    <footer className="border-t border-white/8 py-12 lg:py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center" aria-hidden="true">
                <TrendingUp className="w-4 h-4 text-slate-950" />
              </div>
              <span className="text-lg font-black">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Digital</span>
                <span className="text-white"> Safalta</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{t.ui.navServices}</h4>
            <ul className="space-y-2">
              {t.footer.servicesList.map((label, idx) => (
                <li key={idx}><Link to={FOOTER_LINKS[idx]} className="text-slate-500 hover:text-teal-400 transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{lang === 'hi' ? 'कंपनी' : lang === 'mr' ? 'कंपनी' : 'Company'}</h4>
            <ul className="space-y-2">
              {t.footer.companyList.map((label, idx) => (
                <li key={idx}><Link to={COMPANY_LINKS[idx]} className="text-slate-500 hover:text-teal-400 transition-colors text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{t.ui.navContact}</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href={`mailto:${t.footer.contact.email}`} className="hover:text-teal-400 transition-colors">{t.footer.contact.email}</a></li>
              <li>{t.footer.contact.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <MobileActionBar />
    </footer>
  );
}
