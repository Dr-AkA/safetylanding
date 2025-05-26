'use client'; // Add this if using Next.js App Router

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/safety2_logo.svg';
import MenuIcon from '@/assets/menu.svg';
import Head from 'next/head';
import { useTranslations } from 'next-intl'; // Changed from getTranslations for client component
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('HomePage');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/80 hidden md:block'>{t('header')}</p>
        <div className='inline-flex items-center gap-1'>
          <p>{t('demo')}</p>
          <ArrowRight className="h-4 w-4 justify-center items-center"/>
        </div>
      </div>
      <div className='py-5'>
        <div className="container">
          <div className="flex justify-between items-center">
            <Logo className="h-12 w-13"/>
            <button onClick={toggleMenu} className="md:hidden">
              <MenuIcon className="h-7 w-7"/>
            </button>
            <nav className={`md:flex gap-6 text-black/80 items-center ${isMenuOpen ? 'flex flex-col absolute top-24 left-0 right-0 bg-white shadow-lg py-4 z-30' : 'hidden'}`}>
              <Link href='/'>{t('home')}</Link>
              <Link href='/about'>{t('uns')}</Link>
              <Link href='/#module' scroll={true}>{t('modules')}</Link>
              <a href='#'>{t('help')}</a>
              <a href='#'>{t('contact')}</a>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>{t('demo')}</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};