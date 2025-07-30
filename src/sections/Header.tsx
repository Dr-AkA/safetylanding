'use client'; 

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/safety2_logo.svg';
import MenuIcon from '@/assets/menu.svg';
import Head from 'next/head';
import { useTranslations } from 'next-intl'; 
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import StarBorder from '@/components/StarBorder';
import Magnet from '@/components/Magnet';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('HomePage');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
 <div className="bg-black text-white relative">
  <div className="flex justify-center items-center w-full max-w-7xl mx-auto px-4 py-2 sm:py-3 text-xs sm:text-sm gap-2 sm:gap-3">
    <p className='text-white/80 hidden md:block'>{t('header')}</p>
    <div className='inline-flex items-center gap-1'>
      <Link href="/contact">
          {t('demo')}
          </Link>
      
      <ArrowRight className="h-4 w-4" />
    </div>
  </div>
  <div className="absolute right-4 top-1/2 -translate-y-1/2">
    <LanguageSwitcher />
  </div>
</div>

  <div className='py-4 sm:py-5'>
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <Link href={'/'} className='hover:-translate-y-1 hover:scale-105 transition'>
          <Logo className="h-8 sm:h-10 md:h-12 w-auto" />
        </Link>
        <button onClick={toggleMenu} aria-label="Open navigation menu" className="md:hidden">
          <MenuIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
        <nav className={`md:flex flex-col md:flex-row gap-4 md:gap-6 text-black/80 items-center 
          ${isMenuOpen ? 'flex absolute top-24 left-0 right-0 bg-white shadow-lg py-4 z-30' : 'hidden'}`}>
          <Link className='whitespace-nowrap hover:-translate-y-1 hover:scale-105 transition' href='/'>{t('home')}</Link>
          <Link className='whitespace-nowrap hover:-translate-y-1 hover:scale-105 transition' href='/about'>{t('uns')}</Link>
          <Link className='whitespace-nowrap hover:-translate-y-1 hover:scale-105 transition' href='/#module' scroll={true}>{t('modules')}</Link>
          <Link className='whitespace-nowrap hover:-translate-y-1 hover:scale-105 transition' href='/vision'>{t('vision')}</Link>
          <Link className='whitespace-nowrap hover:-translate-y-1 hover:scale-105 transition' href='/contact'>{t('contact')}</Link>
          <Link className='whitespace-nowrap hover:-translate-y-1 hover:scale-105 transition' href='/career'>{t('career')}</Link>
          <Magnet padding={50} disabled={false} magnetStrength={50}>
            <Link href='/contact' className='bg-black text-white px-3 sm:px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-xs sm:text-sm md:text-base whitespace-nowrap hover:-translate-y-1 hover:scale-105 transition'>
             
           {t('demo')}
            </Link>
          </Magnet>
        </nav>
      </div>
    </div>
  </div>
</header>

  );
};