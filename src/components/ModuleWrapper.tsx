import {Modules} from '../sections/modules';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function ModuleWrapper() {
  const t = await getTranslations('Modules');
  const translations = [
    {
      title: t('EHS-Basis.title'),
      buttonText: t('EHS-Basis.buttonText'),
      description: t('EHS-Basis.description'),
      features: [t('EHS-Basis.features')],
      alt:t('EHS-Basis.alt')
    },
  ];
  return <Modules translations={translations} />;
}
