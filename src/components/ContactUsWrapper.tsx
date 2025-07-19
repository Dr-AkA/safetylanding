import {Contact} from '@/sections/ContactUs';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function ContactUsWrapper() {
  const t = await getTranslations('contact');
  const translations = {
    title: t('title'),
    description: t('description'),
    first:t('first'),
    last:t('last'),
    company:t('company'),
    email:t('email'),
    phone:t('phone'),
    num:t('num'),
    message:t('message'),
    privacy:t('privacy'),
    policy:t('policy'),
    button:t('button'),
    alertTitle:t('alertTitle'),
    alertMessage:t('alertMessage')
  };

  return <Contact translations={translations} />;
}
