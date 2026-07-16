import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, TrendingUp } from 'lucide-react';
import { tealBtn } from '../lib/constants';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function Navigation({
  isMenuOpen, setIsMenuOpen, scrolled, onNavClick, lang = 'en', onLangChange,
}: {
  isMenuOpen: boolean; setIsMenuOpen: (v: boolean) => void;
  scrolled: boolean; onNavClick: () => void; lang?: Lang; onLangChange?: (l: Lang) => void;
}) {
  const t = getContent(lang);

  const LANGS: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हि' },
    { code: 'mr', label: 'मरा' },
  ];

  const LangSwitcher = ({ className = '' }: { className?: string }) => (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-xl border border-white/10 bg-white/5 ${className}`}
      role="group"
      aria-label="Select language"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => onLangChange?.(l.code)}
          aria-pressed={lang === l.code}
          aria-label={`Switch to ${l.label}`}
          className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            lang === l.code ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-white'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  const NAV_ITEMS = [
    { label: t.ui.navHome, to: '/' },
    { label: t.ui.navServices, to: '/services' },
    { label: t.ui.navPricing, to: '/pricing' },
    { label: t.ui.navAbout, to: '/about' },
    { label: t.ui.navContact, to: '/contact' },
    { label: t.ui.navBlog, to: '/blog' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-teal-400' : 'text-slate-400 hover:text-white'}`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 text-sm font-medium transition-colors ${isActive ? 'text-teal-400' : 'text-slate-400 hover:text-white'}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-white/8 shadow-lg shadow-black/30' : 'bg-transparent'}`}
      role="navigation" aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5" aria-label={`${t.brand.name} - Home`}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-teal-500/30" aria-hidden="true">
              <TrendingUp className="w-4 h-4 text-slate-950" />
            </div>
            <span className="text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Digital</span>
              <span className="text-white"> Safalta</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <LangSwitcher />
            <Link to="/contact" className={`px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${tealBtn}`}>
              {t.ui.navCtaButton} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-expanded={isMenuOpen} aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t.ui.closeMenu : t.ui.openMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`} aria-hidden={!isMenuOpen}>
        <div className="bg-slate-950/95 backdrop-blur-lg border-t border-white/8 px-4 py-5 space-y-3">
          <LangSwitcher className="mb-1" />
          {NAV_ITEMS.map(item => (
            <NavLink key={item.to} to={item.to} onClick={onNavClick} className={mobileLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={onNavClick} className={`block text-center px-5 py-3 rounded-xl text-sm font-bold mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${tealBtn}`}>
            {t.ui.navCtaButton}
          </Link>
        </div>
      </div>
    </nav>
  );
}
