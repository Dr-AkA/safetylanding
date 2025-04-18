import Logo from '@/assets/safety_2_only_logo.svg';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialYouyube from '@/assets/social-youtube.svg';
import Location from '@/assets/location.png';
import {getTranslations} from 'next-intl/server';

export  const Footer = async () => {
  const t = await getTranslations('footer');
  return (
    
    


    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:content-[""] before:top-2 before:blur before:bottom-0 before:h-full before:w-full before:absolute'>
      <Logo height={100}  alt='safety-ehs'/>
      </div>
      <nav  className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
        <a href='#'>{t('uns')}</a>
        <a href='#'>{t('modules')}</a>
        <a href='#'>{t('help')}</a>
        <a href='#'>{t('contact')}</a>
       </nav>
        <div className='flex justify-center gap-6 mt-6 '>
          <SocialX/>
          <SocialInsta/>
          <SocialLinkedIn/>
          <SocialYouyube/>
          <Image src={Location} className='h-[23px] w-[23px]' alt='Ruhenhof 4 48565 Steinfurt'/> 
          </div>
          <p className='mt-5'>Ruhenhof 4,48565 Steinfurt, Germany</p>

          <p className='mt-6'>&copy; 2025 Safety-doors GmbH All rights Reserved</p>
      </div>
    </footer>
  );
};
