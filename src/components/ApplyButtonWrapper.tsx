import {ApplyButton} from '@/components/ApplyButton'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function ApplyButtonWrapper({ id, type, label }: { id: number; type: "job" | "training"; label: string }) {
  const t = await getTranslations('apply');
  const translation = {
    firstName: t('first'),
    lastName: t('last'),
    email: t('email'),
    address: t('address'),
    phone: t('phone'),
    cv: t('cv'),
    upload: t('upload'),
    apply: t('apply'),
    cancel: t('cancel')
  };

  return <ApplyButton id={id} type={type} label={label} translation={translation} />;
}
