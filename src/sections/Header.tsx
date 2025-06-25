'use client'; // Add this if using Next.js App Router

import { useState } from 'react';
import Logo from '@/assets/safety2_logo.svg';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('HomePage');

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-white/95 shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo className="h-8 w-auto sm:h-9" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href='/' className="text-base xl:text-lg hover:text-blue-600 transition-colors">{t('home')}</Link>
          <Link href='/about' className="text-base xl:text-lg hover:text-blue-600 transition-colors">{t('uns')}</Link>
          <Link href='/#module' scroll={true} className="text-base xl:text-lg hover:text-blue-600 transition-colors">{t('modules')}</Link>
          <Link href='/vision' className="text-base xl:text-lg hover:text-blue-600 transition-colors">{t('vision')}</Link>
          <Link href='/contact' className="text-base xl:text-lg hover:text-blue-600 transition-colors">{t('contact')}</Link>
          <Link href='/career' className="text-base xl:text-lg hover:text-blue-600 transition-colors">{t('career')}</Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex items-center gap-3">
          <div className="scale-90">
            <LanguageSwitcher />
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2 pointer-events-none'}`}>
        <nav className="px-6 py-4">
          <div className="flex flex-col items-center space-y-3">
            <Link href='/' onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors">{t('home')}</Link>
            <Link href='/about' onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors">{t('uns')}</Link>
            <Link href='/#module' scroll={true} onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors">{t('modules')}</Link>
            <Link href='/vision' onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors">{t('vision')}</Link>
            <Link href='/contact' onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors">{t('contact')}</Link>
            <Link href='/career' onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors">{t('career')}</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};