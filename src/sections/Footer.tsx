import Logo from '@/assets/safety_2_only_logo.svg';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialYouyube from '@/assets/social-youtube.svg';
import Location from '@/assets/location.png';
import {getTranslations} from 'next-intl/server';
import Link from 'next/link';

export  const Footer = async () => {
  const t = await getTranslations('footer');
  return (
    
    


    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:content-[""] before:top-2 before:blur before:bottom-0 before:h-full before:w-full before:absolute'>
      <Logo height={100}  alt='safety-ehs'/>
      </div>
      <nav  className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
        <Link href='/about'>{t('uns')}</Link>
        <Link href="/#module" scroll={true}>{t('modules')}</Link>
        <a href='#'>{t('help')}</a>
        <a href='#'>{t('contact')}</a>
        <a href='#'>{t('privacy')}</a>
       </nav>
        <div className='flex justify-center gap-6 mt-6 '>
          <SocialX/>
          <SocialInsta/>
          <SocialLinkedIn/>
          <SocialYouyube/>
          <a href='https://www.google.com/maps/place/Ruhenhof+4,+48565+Steinfurt/@52.1555973,7.3198097,17z/data=!3m1!4b1!4m6!3m5!1s0x47b835e77d3aef1b:0xb7dca09b3305d0c6!8m2!3d52.1555973!4d7.3198097!16s%2Fg%2F11c4kpyb2n?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
          <Image src={Location} className='h-[23px] w-[23px]' alt='Ruhenhof 4 48565 Steinfurt'/>
          </a> 
          </div>
          <p className='mt-5'>Ruhenhof 4,48565 Steinfurt, Germany</p>

          <p className='mt-6'>&copy; 2025 Safety-doors GmbH All rights Reserved</p>
      </div>
    </footer>
  );
};
