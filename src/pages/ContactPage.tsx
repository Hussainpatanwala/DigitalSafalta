import { SEO } from '../components/SEO';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us - Get a Free Consultation | Digital Safalta"
        description="Get in touch with Digital Safalta for a free, no-obligation digital marketing consultation. We respond within 24 hours. Pune, Maharashtra — serving clients across India."
      />
      <div className="pt-28 lg:pt-36">
        <Contact />
        <FAQ />
      </div>
    </>
  );
}
