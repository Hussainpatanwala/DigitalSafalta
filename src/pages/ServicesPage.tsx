import { SEO } from '../components/SEO';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Results } from '../components/Results';

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services - Website Design, SEO & Ads | Digital Safalta"
        description="Explore Digital Safalta's digital marketing services for Pune businesses: website design, Google & Meta ads, SEO, social media management, landing pages, branding and more."
      />
      <div className="pt-28 lg:pt-36">
        <Services />
        <Process />
        <Results />
      </div>
    </>
  );
}
