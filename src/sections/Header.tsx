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
  const [isClosing, setIsClosing] = useState(false);
  const t = useTranslations('HomePage');

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 200);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      handleMenuClose();
    } else {
      setIsMenuOpen(true);
      setIsClosing(false);
    }
  };

  return (
    <header className='sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow-sm'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/80 hidden md:block'>{t('header')}</p>
        <div className='inline-flex items-center gap-1'>
          <p>{t('demo')}</p>
          <ArrowRight className="h-4 w-4 justify-center items-center"/>
        </div>
      </div>
      <div className='py-4'>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
              <Logo className="h-10 w-auto"/>
            </Link>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="p-2 hover:bg-gray-100/50 rounded-lg transition-all duration-200"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {!isMenuOpen ? (
                  <MenuIcon className="h-6 w-6"/>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <nav className={`
              md:flex items-center gap-8
              ${isMenuOpen && !isClosing
                ? 'flex flex-col absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 rounded-xl animate-fadeIn' 
                : isClosing
                  ? 'flex flex-col absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 rounded-xl animate-fadeOut'
                  : 'hidden md:flex'
              }
            `}>
              <Link 
                href='/' 
                className="text-gray-600 hover:text-black px-4 py-2 hover:bg-gray-50/50 rounded-lg transition-all duration-200 relative group"
                onClick={handleMenuClose}
              >
                {t('home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href='/about' 
                className="text-gray-600 hover:text-black px-4 py-2 hover:bg-gray-50/50 rounded-lg transition-all duration-200 relative group"
                onClick={handleMenuClose}
              >
                {t('uns')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href='/#module' 
                scroll={true} 
                className="text-gray-600 hover:text-black px-4 py-2 hover:bg-gray-50/50 rounded-lg transition-all duration-200 relative group"
                onClick={handleMenuClose}
              >
                {t('modules')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href='/vision' 
                className="text-gray-600 hover:text-black px-4 py-2 hover:bg-gray-50/50 rounded-lg transition-all duration-200 relative group"
                onClick={handleMenuClose}
              >
                {t('vision')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href='#' 
                className="text-gray-600 hover:text-black px-4 py-2 hover:bg-gray-50/50 rounded-lg transition-all duration-200 relative group"
                onClick={handleMenuClose}
              >
                {t('contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href='/career' 
                className="text-gray-600 hover:text-black px-4 py-2 hover:bg-gray-50/50 rounded-lg transition-all duration-200 relative group"
                onClick={handleMenuClose}
              >
                {t('career')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <button className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg'>{t('demo')}</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};