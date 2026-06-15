import { SEO } from '../components/SEO';
import { Philosophy } from '../components/Philosophy';
import { Process } from '../components/Process';
import { Testimonial } from '../components/Testimonial';

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us - Our Philosophy & Process | Digital Safalta"
        description="Learn how Digital Safalta works with Pune businesses — honest, founder-led digital marketing focused on real results, not vanity metrics. Our philosophy and process explained."
      />
      <div className="pt-28 lg:pt-36">
        <Philosophy />
        <Process />
        <Testimonial />
      </div>
    </>
  );
}
