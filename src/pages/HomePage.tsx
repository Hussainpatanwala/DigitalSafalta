import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Services } from '../components/Services';
import { Results } from '../components/Results';
import { Testimonial } from '../components/Testimonial';
import { Pricing } from '../components/Pricing';

export function HomePage() {
  return (
    <>
      <SEO
        title="Digital Safalta - Digital Marketing Agency in Pune"
        description="Digital Safalta helps small and growing businesses in Pune build their online presence, run effective ad campaigns, and turn visitors into paying customers. Website design, SEO, Google & Meta Ads."
      />
      <Hero />
      <Philosophy />
      <Services />
      <Results />
      <Pricing />
      <Testimonial />
    </>
  );
}
