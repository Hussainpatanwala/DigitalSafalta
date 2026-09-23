import { useState, useEffect, lazy, Suspense } from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import { LanguagePicker } from './components/LanguagePicker';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { supabase } from './supabaseClient';
import type { Lang } from './lib/constants';

// Everything below is route-level or below-the-fold content that isn't
// needed for the initial paint, so it's code-split into its own chunk and
// only downloaded when the visitor actually navigates there or the page
// finishes loading. This keeps the main bundle small for the LCP path.
const Chatbot = lazy(() => import('./components/Chatbot').then(m => ({ default: m.Chatbot })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BlogIndexPage = lazy(() => import('./pages/blog/index').then(m => ({ default: m.BlogIndexPage })));
const WhatIsDigitalMarketing = lazy(() => import('./pages/blog/what-is-digital-marketing').then(m => ({ default: m.WhatIsDigitalMarketing })));
const WebsiteDesignPage = lazy(() => import('./pages/services/WebsiteDesignPage').then(m => ({ default: m.WebsiteDesignPage })));
const GoogleAdsPage = lazy(() => import('./pages/services/GoogleAdsPage').then(m => ({ default: m.GoogleAdsPage })));
const MetaAdsPage = lazy(() => import('./pages/services/MetaAdsPage').then(m => ({ default: m.MetaAdsPage })));
const SEOPage = lazy(() => import('./pages/services/SEOPage').then(m => ({ default: m.SEOPage })));
const SocialMediaPage = lazy(() => import('./pages/services/SocialMediaPage').then(m => ({ default: m.SocialMediaPage })));
const GoogleBusinessProfilePage = lazy(() => import('./pages/services/GoogleBusinessProfilePage').then(m => ({ default: m.GoogleBusinessProfilePage })));
const ExcelVbaAutomationPage = lazy(() => import('./pages/services/ExcelVbaAutomationPage').then(m => ({ default: m.ExcelVbaAutomationPage })));
const AiDevMentorshipPage = lazy(() => import('./pages/services/AiDevMentorshipPage').then(m => ({ default: m.AiDevMentorshipPage })));
const KidsDigitalSkillsPage = lazy(() => import('./pages/services/KidsDigitalSkillsPage').then(m => ({ default: m.KidsDigitalSkillsPage })));
const MarketingAuditPage = lazy(() => import('./pages/MarketingAuditPage').then(m => ({ default: m.MarketingAuditPage })));
const WebsiteCostPune = lazy(() => import('./pages/blog/website-cost-pune').then(m => ({ default: m.WebsiteCostPune })));
const WhatIsSEO = lazy(() => import('./pages/blog/what-is-seo').then(m => ({ default: m.WhatIsSEO })));
const GoogleAdsVsMetaAds = lazy(() => import('./pages/blog/google-ads-vs-meta-ads').then(m => ({ default: m.GoogleAdsVsMetaAds })));
const GoogleFreeAdCredit = lazy(() => import('./pages/blog/google-free-ad-credit').then(m => ({ default: m.GoogleFreeAdCredit })));
const WhatIsAWebsite = lazy(() => import('./pages/blog/what-is-a-website').then(m => ({ default: m.WhatIsAWebsite })));
const AgencyNearMe = lazy(() => import('./pages/blog/agency-near-me').then(m => ({ default: m.AgencyNearMe })));
const ProductReviewsIndexPage = lazy(() => import('./pages/blog/ProductReviewsIndexPage').then(m => ({ default: m.ProductReviewsIndexPage })));
const ProductReviewPage = lazy(() => import('./pages/blog/ProductReviewPage').then(m => ({ default: m.ProductReviewPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// vite-react-ssg's routes array is defined once, outside the component
// tree, so page components can't receive `lang` as a normal React prop the
// way they used to when routes were plain JSX inside Layout. Instead,
// Layout provides the current language via <Outlet context={lang} />, and
// this wrapper reads it back out with useOutletContext() and forwards it
// to the page as a prop — so every page component's own signature
// (`{ lang = 'en' }: { lang?: Lang }`) stays completely unchanged.
function withLang(Page: React.ComponentType<{ lang: Lang }>) {
  return function LangWrappedPage() {
    const lang = useOutletContext<Lang>();
    return <Page lang={lang} />;
  };
}

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [lang, setLang]             = useState<Lang | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // Delay the chatbot bundle/mount until the browser is idle (or after a
    // short fallback timeout) so it never competes with the LCP/critical path.
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const idleId = w.requestIdleCallback
      ? w.requestIdleCallback(() => setShowChatbot(true), { timeout: 4000 })
      : window.setTimeout(() => setShowChatbot(true), 2000);
    return () => {
      if (w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);

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
        onLangChange={handleLangSelect}
      />

      <ScrollToTop />

      <main id="main-content">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet context={activeLang} />
        </Suspense>
      </main>

      <Footer lang={activeLang} />
      {showChatbot && (
        <Suspense fallback={null}>
          <Chatbot lang={activeLang} />
        </Suspense>
      )}
    </div>
  );
}

const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: withLang(HomePage) },
      { path: 'services', Component: withLang(ServicesPage) },
      { path: 'pricing', Component: withLang(PricingPage) },
      { path: 'about', Component: withLang(AboutPage) },
      { path: 'privacy', Component: PrivacyPolicyPage },
      { path: 'terms', Component: TermsOfServicePage },
      { path: 'contact', Component: withLang(ContactPage) },
      { path: 'blog', Component: BlogIndexPage },
      { path: 'blog/what-is-digital-marketing', Component: WhatIsDigitalMarketing },
      { path: 'blog/website-cost-pune', Component: WebsiteCostPune },
      { path: 'blog/what-is-seo', Component: WhatIsSEO },
      { path: 'blog/google-ads-vs-meta-ads', Component: GoogleAdsVsMetaAds },
      { path: 'blog/google-free-ad-credit', Component: GoogleFreeAdCredit },
      { path: 'blog/what-is-a-website', Component: WhatIsAWebsite },
      { path: 'blog/agency-near-me', Component: AgencyNearMe },
      { path: 'blog/reviews', Component: ProductReviewsIndexPage },
      {
        path: 'blog/reviews/:slug',
        Component: ProductReviewPage,
        // Enumerates every published review slug at build time so each one
        // gets its own real, statically-generated HTML page (instead of
        // relying on the client to fetch from Supabase before anything is
        // visible to a crawler). Falls back to an empty list — rather than
        // failing the whole build — if Supabase is unreachable at build
        // time; those pages just won't be pre-rendered that run, and will
        // still work fine client-side same as before.
        getStaticPaths: async () => {
          try {
            const { data, error } = await supabase
              .from('product_reviews')
              .select('slug')
              .eq('status', 'published');
            if (error || !data) return [];
            return data.map((r: { slug: string }) => `blog/reviews/${r.slug}`);
          } catch {
            return [];
          }
        },
      },
      { path: 'services/website-design', Component: withLang(WebsiteDesignPage) },
      { path: 'services/google-ads', Component: withLang(GoogleAdsPage) },
      { path: 'services/meta-ads', Component: withLang(MetaAdsPage) },
      { path: 'services/seo', Component: withLang(SEOPage) },
      { path: 'services/social-media', Component: withLang(SocialMediaPage) },
      { path: 'services/google-business-profile', Component: withLang(GoogleBusinessProfilePage) },
      { path: 'services/excel-vba-automation', Component: withLang(ExcelVbaAutomationPage) },
      { path: 'services/ai-dev-mentorship', Component: withLang(AiDevMentorshipPage) },
      { path: 'services/kids-digital-skills', Component: withLang(KidsDigitalSkillsPage) },
      { path: 'tools/marketing-audit', Component: MarketingAuditPage },
    ],
  },
];

export default routes;
