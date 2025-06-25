'use client'; // Add this if using Next.js App Router

import { useState } from 'react';
import Logo from '@/assets/safety2_logo.svg';
import MenuIcon from '@/assets/menu.svg';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('HomePage');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-white/95 shadow-sm">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Logo left */}
        <Logo className="h-9 w-auto" />
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href='/' className="text-lg">{t('home')}</Link>
          <Link href='/about' className="text-lg">{t('uns')}</Link>
          <Link href='/#module' scroll={true} className="text-lg">{t('modules')}</Link>
          <Link href='/vision' className="text-lg">{t('vision')}</Link>
          <Link href='/contact' className="text-lg">{t('contact')}</Link>
          <Link href='/career' className="text-lg">{t('career')}</Link>
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Burger */}
        <button onClick={toggleMenu} className="md:hidden ml-auto">
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-30" onClick={toggleMenu}>
          <div className="absolute top-0 right-0 w-64 bg-white shadow-lg h-full flex flex-col p-6 gap-6" onClick={e => e.stopPropagation()}>
            <nav className="flex flex-col gap-4 text-black/80">
              <Link href='/' onClick={toggleMenu}>{t('home')}</Link>
              <Link href='/about' onClick={toggleMenu}>{t('uns')}</Link>
              <Link href='/#module' scroll={true} onClick={toggleMenu}>{t('modules')}</Link>
              <Link href='/vision' onClick={toggleMenu}>{t('vision')}</Link>
              <Link href='/contact' onClick={toggleMenu}>{t('contact')}</Link>
              <Link href='/career' onClick={toggleMenu}>{t('career')}</Link>
            </nav>
            <div className="mt-4 flex flex-col gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};