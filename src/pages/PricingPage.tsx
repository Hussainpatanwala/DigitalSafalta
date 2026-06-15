import { SEO } from '../components/SEO';
import { Pricing } from '../components/Pricing';
import { PlatformMetrics } from '../components/PlatformMetrics';
import { FAQ } from '../components/FAQ';

export function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing - Website & Digital Marketing Plans | Digital Safalta"
        description="Transparent pricing for website design and digital marketing in Pune. One-time website package at ₹15,000, ad management plans starting at ₹15,000/month with no hidden fees."
      />
      <div className="pt-28 lg:pt-36">
        <Pricing />
        <PlatformMetrics />
        <FAQ />
      </div>
    </>
  );
}
