import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Lang } from '../lib/constants';
import { content as contentEn } from '../content.en';
import { content as contentHi } from '../content.hi';
import { content as contentMr } from '../content.mr';
import type { SiteContent } from '../content.en';

const CONTENT_MAP: Record<Lang, SiteContent> = {
  en: contentEn,
  hi: contentHi,
  mr: contentMr,
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: SiteContent; // shorthand for "translations" / current content
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // No localStorage on purpose: every visit should show the picker again.
  const [lang, setLang] = useState<Lang>('en');

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: CONTENT_MAP[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
