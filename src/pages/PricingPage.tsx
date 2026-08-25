import { SEO } from '../components/SEO';
import { Pricing } from '../components/Pricing';
import { PlatformMetrics } from '../components/PlatformMetrics';
import { FAQ } from '../components/FAQ';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';
import { faqSchema } from '../lib/schema';

export function PricingPage({ lang = 'en' }: { lang?: Lang }) {
  const content = getContent(lang);
  const t = content.seo.pricing;
  return (
    <>
      <SEO
        title={t.title}
        description={t.description}
        lang={lang}
        schema={faqSchema(content.faqItems)}
      />
      <div className="pt-20 lg:pt-24">
        <Pricing lang={lang} />
        <PlatformMetrics lang={lang} />
        <FAQ lang={lang} />
      </div>
    </>
  );
}
