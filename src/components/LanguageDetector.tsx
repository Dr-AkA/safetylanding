'use client';

import { useEffect } from 'react';

export function LanguageDetector() {
  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');

    if (!storedLocale) {
      const navigatorLocale = navigator.language.split('-')[0];
      const supportedLocales = ['en', 'de', 'pt', 'es'];
      const fallbackLocale = 'en';

      const selectedLocale = supportedLocales.includes(navigatorLocale)
        ? navigatorLocale
        : fallbackLocale;

      localStorage.setItem('locale', selectedLocale);
      document.cookie = `locale=${selectedLocale}; path=/`;

      window.location.reload();
    }
  }, []);

  return null;
}
