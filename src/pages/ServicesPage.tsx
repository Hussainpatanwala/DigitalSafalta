import { SEO } from '../components/SEO';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Results } from '../components/Results';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function ServicesPage({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).seo.services;
  return (
    <>
      <SEO title={t.title} description={t.description} lang={lang} />
      <div className="pt-28 lg:pt-36">
        <Services lang={lang} />
        <Process lang={lang} />
        <Results lang={lang} />
      </div>
    </>
  );
}
