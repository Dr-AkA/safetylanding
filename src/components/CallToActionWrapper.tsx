import {CallToAction} from '../sections/CallToAction';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function CallToActionWrapper() {
  const t = await getTranslations('callToAction');
  const translations = {
    Title: t('Title'),
    paragraph: t('paragraph'),
    button:t('button'),
    button2:t('button2')
  };

  return <CallToAction translations={translations} />;
}
