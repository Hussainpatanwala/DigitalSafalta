import { SEO } from '../components/SEO';
import { Pricing } from '../components/Pricing';
import { PlatformMetrics } from '../components/PlatformMetrics';
import { FAQ } from '../components/FAQ';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function PricingPage({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).seo.pricing;
  return (
    <>
      <SEO title={t.title} description={t.description} lang={lang} />
      <div className="pt-28 lg:pt-36">
        <Pricing lang={lang} />
        <PlatformMetrics lang={lang} />
        <FAQ lang={lang} />
      </div>
    </>
  );
}
