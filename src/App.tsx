import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguagePicker } from './components/LanguagePicker';
import { Chatbot } from './components/Chatbot';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogIndexPage } from './pages/blog/index';
import { WhatIsDigitalMarketing } from './pages/blog/what-is-digital-marketing';
import { WebsiteDesignPage } from './pages/services/WebsiteDesignPage';
import { GoogleAdsPage } from './pages/services/GoogleAdsPage';
import { MetaAdsPage } from './pages/services/MetaAdsPage';
import { SEOPage } from './pages/services/SEOPage';
import { SocialMediaPage } from './pages/services/SocialMediaPage';
import { GoogleBusinessProfilePage } from './pages/services/GoogleBusinessProfilePage';
import { MarketingAuditPage } from './pages/MarketingAuditPage';
import { WebsiteCostPune } from './pages/blog/website-cost-pune';
import { WhatIsSEO } from './pages/blog/what-is-seo';
import { GoogleAdsVsMetaAds } from './pages/blog/google-ads-vs-meta-ads';
import { GoogleFreeAdCredit } from './pages/blog/google-free-ad-credit';
import { WhatIsAWebsite } from './pages/blog/what-is-a-website';
import type { Lang } from './lib/constants';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [lang, setLang]             = useState<Lang | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ds_lang') as Lang | null;
    if (saved && ['en', 'hi', 'mr'].includes(saved)) {
      setLang(saved);
    } else {
      setShowPicker(true);
    }
  }, []);

  const handleLangSelect = (l: Lang) => {
    localStorage.setItem('ds_lang', l);
    setLang(l);
    setShowPicker(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLang = lang ?? 'en';

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased overflow-x-hidden pb-[72px] lg:pb-0">
      {showPicker && <LanguagePicker onSelect={handleLangSelect} />}

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-teal-500 focus:text-slate-950 focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>

      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-teal-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-violet-500/7 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        onNavClick={() => setIsMenuOpen(false)}
        lang={activeLang}
      />

      <ScrollToTop />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage lang={activeLang} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/what-is-digital-marketing" element={<WhatIsDigitalMarketing />} />
          <Route path="/blog/website-cost-pune" element={<WebsiteCostPune />} />
          <Route path="/blog/what-is-seo" element={<WhatIsSEO />} />
          <Route path="/blog/google-ads-vs-meta-ads" element={<GoogleAdsVsMetaAds />} />
          <Route path="/blog/google-free-ad-credit" element={<GoogleFreeAdCredit />} />
          <Route path="/blog/what-is-a-website" element={<WhatIsAWebsite />} />
          <Route path="/services/website-design" element={<WebsiteDesignPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route path="/services/meta-ads" element={<MetaAdsPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/google-business-profile" element={<GoogleBusinessProfilePage />} />
          <Route path="/tools/marketing-audit" element={<MarketingAuditPage />} />
        </Routes>
      </main>

      <Footer lang={activeLang} />
      <Chatbot lang={activeLang} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
