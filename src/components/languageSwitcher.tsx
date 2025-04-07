'use server';
import { useRouter } from 'next/router';
import React from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const changeLanguage = (lng: string) => {
    router.push(asPath, asPath, { locale: lng });
  };

  return (
    <select value={locale} onChange={(e) => changeLanguage(e.target.value)}>
      {locales?.map((lng) => (
        <option key={lng} value={lng}>
          {lng.toUpperCase()}
        </option>
      ))}
    </select>
  );
}