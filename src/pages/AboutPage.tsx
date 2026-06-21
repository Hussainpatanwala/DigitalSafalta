import { SEO } from '../components/SEO';
import { Philosophy } from '../components/Philosophy';
import { Process } from '../components/Process';
import { Testimonial } from '../components/Testimonial';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function AboutPage({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).seo.about;
  return (
    <>
      <SEO title={t.title} description={t.description} lang={lang} />
      <div className="pt-28 lg:pt-36">
        <Philosophy lang={lang} />
        <Process lang={lang} />
        <Testimonial lang={lang} />
      </div>
    </>
  );
}
