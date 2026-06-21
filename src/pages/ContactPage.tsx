import { SEO } from '../components/SEO';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import type { Lang } from '../lib/constants';
import { getContent } from '../getContent';

export function ContactPage({ lang = 'en' }: { lang?: Lang }) {
  const t = getContent(lang).seo.contact;
  return (
    <>
      <SEO title={t.title} description={t.description} lang={lang} />
      <div className="pt-28 lg:pt-36">
        <Contact lang={lang} />
        <FAQ lang={lang} />
      </div>
    </>
  );
}
