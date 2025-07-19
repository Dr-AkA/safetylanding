import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ locale: defaultLocale }) => {
  // Try to get locale from cookie first
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('locale');
  
  // Use cookie locale if available, otherwise fall back to default
  const selectedLocale = localeCookie?.value || defaultLocale || 'en';
  
  console.log('Using locale from cookie/default:', selectedLocale);
  
  try {
    return {
      locale: selectedLocale,
      messages: (await import(`../../messages/${selectedLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Error loading locale: ${selectedLocale}`, error);
    return {
      locale: 'en',
      messages: (await import(`../../messages/en.json`)).default
    };
  }
});