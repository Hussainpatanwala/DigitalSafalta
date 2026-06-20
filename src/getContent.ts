import type { Lang } from './lib/constants';
import { content as contentEn } from './content.en';
import { content as contentHi } from './content.hi';
import { content as contentMr } from './content.mr';
import type { SiteContent } from './content.en';

const CONTENT_MAP: Record<Lang, SiteContent> = {
  en: contentEn,
  hi: contentHi,
  mr: contentMr,
};

/** Returns the full site content object for the given language. */
export function getContent(lang: Lang): SiteContent {
  return CONTENT_MAP[lang];
}
