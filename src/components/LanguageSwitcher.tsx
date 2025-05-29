'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const supportedLocales = ['en', 'de', 'pt', 'es', 'fr', 'pl','ro'];

export function LanguageSwitcher() {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<string>('en');
  
  useEffect(() => {
    const cookies = document.cookie.split(';');
    const localeCookie = cookies.find(cookie => cookie.trim().startsWith('locale='));
    const storedLocale = localeCookie ? localeCookie.split('=')[1] : 'en';
    setCurrentLocale(storedLocale);
  }, []);
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    
    document.cookie = `locale=${selectedLocale}; path=/`;
    localStorage.setItem('locale', selectedLocale);
    
    window.location.href = window.location.pathname;
  };
  
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const selectLocale = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    localStorage.setItem('locale', locale);
    setCurrentLocale(locale);
    setIsDropdownOpen(false);
    window.location.href = window.location.pathname;
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2 bg-black text-white rounded-md border border-gray-300"
      >
        <Image 
          src={`/flags/${currentLocale}.png`} 
          alt={currentLocale} 
          width={15} 
          height={10} 
        />
        <span>{currentLocale.toUpperCase()}</span>
        <svg 
          className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isDropdownOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden">
          {supportedLocales.map((locale) => (
            <button
              key={locale}
              onClick={() => selectLocale(locale)}
              className={`flex items-center gap-2 w-full p-2 text-left hover:bg-gray-100 ${
                currentLocale === locale ? 'bg-gray-100' : ''
              }`}
            >
              <Image 
                src={`/flags/${locale}.png`} 
                alt={locale} 
                width={20} 
                height={15} 
              />
              <span>{locale.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
      
      <select 
        value={currentLocale} 
        onChange={handleChange}
        className="sr-only"
        aria-hidden="true"
      >
        {supportedLocales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}