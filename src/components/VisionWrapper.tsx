import {Vision} from '../sections/OurVision';
import { getTranslations } from 'next-intl/server';

export default async function VisionWrapper() {
  const t = await getTranslations('Vision');

  const features = [
    'feature1',
    'feature2',
    'feature3',
    'feature4',
    'feature5',
    'feature6',
    'feature7',
    'feature8',
    'feature9'
  ].map((key) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    icon: t(`${key}.icon`),
    color: t(`${key}.color`)
  }));

  const translations = {
    intro: t('intro'),
    title: t('title'),
    description: t('description'),
    features
  };

  return <Vision translations={translations} />;
}
