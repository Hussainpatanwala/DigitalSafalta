import { useState, useEffect, FormEvent, useRef } from 'react';
import { supabase } from './supabaseClient';
import type { ChangeEvent } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Users,
  Settings,
  ChevronDown,
  Check,
  Star,
  Lightbulb,
  Rocket,
  Palette,
  Globe,
  Mail,
  MousePointer,
  Send,
  Loader2,
} from 'lucide-react';

import {
  brandName,
  navLinks,
  heroHeadline,
  heroSubheading,
  heroCtaText,
  heroSecondaryCtaText,
  heroMetrics,
  philosophyTitle,
  philosophyPrinciples,
  servicesTitle,
  servicesDescription,
  services,
  resultsTitle,
  resultsDescription,
  caseStudies,
  processTitle,
  processDescription,
  processSteps,
  platformMetrics,
  pricingTitle,
  pricingDescription,
  pricingPlans,
  testimonialQuote,
  testimonialAuthor,
  testimonialRole,
  testimonialInitials,
  faqItems,
  contactTitle,
  contactDescription,
  contactFormPlaceholder,
  contactButtonText,
  contactResponseTime,
  footerDescription,
  footerServices,
  footerCompany,
  footerContact,
  footerCopyright,
} from './content';

// Icon mapping for services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  BarChart3,
  Users,
  MousePointer,
  Palette,
  Globe,
  Mail,
  Settings,
};

// Type definitions for form state
interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  business_type: string;
  existing_website: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    business_type: '',
    existing_website: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track scroll for sticky nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll FAQ into view when opened
  useEffect(() => {
    if (openFaq !== null && faqRefs.current[openFaq]) {
      faqRefs.current[openFaq]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [openFaq]);

  // Close mobile menu on link click
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Form submission handler
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Step 1: Save to Supabase database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          business_type: formData.business_type,
          existing_website: formData.existing_website,
          message: formData.message,
          source: 'website',
        }]);

      if (dbError) throw new Error(dbError.message);

      // Step 2: Trigger Edge Function to send email notification
      const { error: fnError } = await supabase.functions.invoke(
        'notify-form-submission',
        {
          body: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            company: formData.company,
            business_type: formData.business_type,
            existing_website: formData.existing_website,
            message: formData.message,
            source: 'website',
          },
        }
      );

      if (fnError) throw new Error(fnError.message);

      // Success
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', business_type: '', existing_website: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);

    } catch (err) {
      console.error('Form submission error:', err);
      setFormStatus('error');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-emerald-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        onNavClick={handleNavClick}
      />

      <main id="main-content">
        <Hero />
        <Philosophy />
        <Services />
        <Results />
        <Process />
        <PlatformMetrics />
        <Pricing />
        <Testimonial />
        <FAQ
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
          faqRefs={faqRefs}
        />
        <Contact
          formData={formData}
          formStatus={formStatus}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
      </main>

      <Footer />
    </div>
  );
}

// ============================================
// NAVIGATION COMPONENT
// ============================================

function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
  onNavClick,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  scrolled: boolean;
  onNavClick: () => void;
}) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2" aria-label={`${brandName} - Home`}>
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center" aria-hidden="true">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">{brandName}</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              {heroCtaText} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavClick}
              className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={onNavClick}
            className="block bg-emerald-600 text-white px-5 py-3 rounded-lg font-medium text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {heroCtaText}
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// HERO SECTION
// ============================================

function Hero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {heroHeadline}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {heroSubheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              {heroCtaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#results"
              className="border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              {heroSecondaryCtaText}
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" role="list" aria-label="Key metrics">
          {heroMetrics.map((metric, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group"
              role="listitem"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600" aria-hidden="true" />
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PHILOSOPHY - 3 PRINCIPLES
// ============================================

function Philosophy() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="philosophy-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="philosophy-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          {philosophyTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {philosophyPrinciples.map((principle, idx) => (
            <article key={idx} className="relative pl-16">
              <div className="absolute left-0 top-0 text-6xl font-bold text-emerald-100" aria-hidden="true">
                {principle.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SERVICES - 8 CAPABILITIES
// ============================================

function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {servicesTitle}
          </h2>
          <p className="text-lg text-gray-600">{servicesDescription}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <IconComponent className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CASE STUDIES / RESULTS
// ============================================

function Results() {
  return (
    <section id="results" className="py-16 lg:py-24 bg-gray-900" aria-labelledby="results-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="results-heading" className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {resultsTitle}
          </h2>
          <p className="text-lg text-gray-400">{resultsDescription}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <article
              key={idx}
              className="bg-gray-800 rounded-2xl p-6 lg:p-8 border border-gray-700 hover:border-emerald-500 transition-colors"
            >
              <div className="text-sm text-emerald-400 font-medium mb-3 uppercase tracking-wide">
                {study.category}
              </div>
              <div className="text-3xl font-bold text-white mb-4">{study.result}</div>
              <p className="text-gray-400 mb-6">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.metrics.map((metric, midx) => (
                  <span
                    key={midx}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROCESS - 4D GROWTH SYSTEM
// ============================================

function Process() {
  const icons = [Lightbulb, Target, Rocket, BarChart3];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="process-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {processTitle}
          </h2>
          <p className="text-lg text-gray-600">{processDescription}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => {
            const IconComponent = icons[idx] || Lightbulb;
            return (
              <article key={idx} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4" aria-hidden="true">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 right-0 transform translate-x-full" aria-hidden="true">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PLATFORM METRICS
// ============================================

function PlatformMetrics() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" aria-label="Platform metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {platformMetrics.map((metric, idx) => (
            <div key={idx} className="text-center" role="listitem">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PRICING
// ============================================

function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {pricingTitle}
          </h2>
          <p className="text-lg text-gray-600">{pricingDescription}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <article
              key={idx}
              className={`rounded-2xl p-6 lg:p-8 ${
                plan.highlighted
                  ? 'bg-emerald-600 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Star className="w-4 h-4" aria-hidden="true" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? 'text-emerald-100' : 'text-gray-600'}>{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.currency}{plan.price}
                </span>
                {plan.period && (
                  <span className={plan.highlighted ? 'text-emerald-100' : 'text-gray-600'}>
                    /{plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8" aria-label="Plan features">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-emerald-200' : 'text-emerald-600'}`}
                      aria-hidden="true"
                    />
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-600'
                    : 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900'
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIAL
// ============================================

function Testimonial() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" aria-label="Client testimonial">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl text-emerald-200 font-serif" aria-hidden="true">
            "
          </div>
          <p className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed relative z-10 pt-8">
            {testimonialQuote}
          </p>
        </blockquote>
        <footer className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center" aria-hidden="true">
            <span className="text-emerald-600 font-bold text-lg">{testimonialInitials}</span>
          </div>
          <div className="text-left">
            <cite className="font-semibold text-gray-900 not-italic">{testimonialAuthor}</cite>
            <div className="text-gray-600 text-sm">{testimonialRole}</div>
          </div>
        </footer>
      </div>
    </section>
  );
}

// ============================================
// FAQ
// ============================================

function FAQ({
  openFaq,
  setOpenFaq,
  faqRefs,
}: {
  openFaq: number | null;
  setOpenFaq: (v: number | null) => void;
  faqRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Everything you need to know about partnering with us.
        </p>

        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <div
              key={idx}
              ref={(el) => { faqRefs.current[idx] = el; }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === idx ? 'max-h-96' : 'max-h-0'
                }`}
                aria-hidden={openFaq !== idx}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT
// ============================================

function Contact({
  formData,
  formStatus,
  onInputChange,
  onSubmit,
}: {
  formData: FormData;
  formStatus: FormStatus;
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-emerald-600" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="contact-heading" className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {contactTitle}
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">{contactDescription}</p>

        <div className="bg-white rounded-2xl p-8 lg:p-10 max-w-xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                placeholder="Your Name"
                required
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                placeholder="Phone Number (e.g. +91 98765 43210)"
                required
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="sr-only">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                placeholder="Your Email Address"
                required
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="contact-company" className="sr-only">Business Name</label>
              <input
                id="contact-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={onInputChange}
                placeholder="Your Business Name"
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="contact-business-type" className="sr-only">Type of Business</label>
              <select
                id="contact-business-type"
                name="business_type"
                value={formData.business_type}
                onChange={onInputChange as any}
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-gray-500 bg-white"
              >
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
              <label htmlFor="contact-existing-website" className="sr-only">Existing Website</label>
              <select
                id="contact-existing-website"
                name="existing_website"
                value={formData.existing_website}
                onChange={onInputChange as any}
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-gray-500 bg-white"
              >
                <option value="">Do you have a website? (optional)</option>
                <option>No, I need everything from scratch</option>
                <option>I have a domain but no website</option>
                <option>I have a website but want to redesign it</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={onInputChange}
                placeholder="Tell us about your business and what you are looking to achieve..."
                rows={4}
                required
                disabled={formStatus === 'submitting'}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : formStatus === 'success' ? (
                <>
                  <Check className="w-5 h-5" aria-hidden="true" />
                  Message Sent!
                </>
              ) : (
                <>
                  {contactButtonText}
                  <Send className="w-5 h-5" aria-hidden="true" />
                </>
              )}
            </button>
          </form>

          {formStatus === 'success' && (
            <div className="mt-4 p-4 bg-emerald-50 text-emerald-800 rounded-lg text-sm" role="status">
              Thank you! We'll be in touch soon.
            </div>
          )}

          {formStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg text-sm" role="alert">
              Something went wrong. Please try again.
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4">{contactResponseTime}</p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 lg:py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{brandName}</span>
            </a>
            <p className="text-gray-400">{footerDescription}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerCompany.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${footerContact.email}`} className="hover:text-white transition-colors">
                  {footerContact.email}
                </a>
              </li>
              <li>{footerContact.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{footerCopyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
