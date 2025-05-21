import CookieConesntBanner from '../components/CookieConsentBanner';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function CallToActionWrapper() {
  const t = await getTranslations('Cookie');
  const translations = {
    paragraph: t('paragraph'),
    button:t('button'),
    button2:t('button2'),
    privacy:t('privacy')
  };

  return <CookieConesntBanner translations={translations} />;
}
