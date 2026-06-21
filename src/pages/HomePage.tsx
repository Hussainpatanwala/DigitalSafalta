import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { Services } from '../components/Services';
import { Results } from '../components/Results';
import { Testimonial } from '../components/Testimonial';
import { Pricing } from '../components/Pricing';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function HomePage({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang);

  return (
    <>
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        lang={lang}
      />
      <Hero lang={lang} />
      <Philosophy lang={lang} />
      <Services lang={lang} />
      <Results lang={lang} />
      <Pricing lang={lang} />
      <Testimonial lang={lang} />
    </>
  );
}
