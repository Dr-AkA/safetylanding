import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/safety2_logo.svg';
import MenuIcon from '@/assets/menu.svg';
import Head from 'next/head';
import {getTranslations} from 'next-intl/server';



export const Header =async () => {
  const t = await getTranslations('HomePage');

  return ( 
  <header className='sticky top-0 backdrop-blur-sm z-20'>
  <div className="flex justify-center items-center py-3 bg-black text-white  text-sm gap-3">
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
  <MenuIcon  className="h-7 w-7 md:hidden"/>
  <nav className='hidden md:flex gap-6 text-black/80 items-center'>
  <a href='#'>{t('uns')}</a>
<a href='#'>{t('modules')}</a>
<a href='#'>{t('help')}</a>
<a href='#'>{t('contact')}</a>
<button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>{t('demo')}</button>

  </nav>
  </div>
  </div>
  </div>
  </header>
  );

};
