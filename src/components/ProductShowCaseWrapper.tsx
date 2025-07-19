import {ProductShowcase} from '../sections/ProductShowcase';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function ProductShowcaseWrapper() {
  const t = await getTranslations('Showcase');
  const translations = {
    header: t('header'),
    header2: t('header2'),
    header3:t('header3'),
    description:t('description')
  };

  return <ProductShowcase translations={translations} />;
}
