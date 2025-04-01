import Logo from '@/assets/safety_2_only_logo.svg';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialYouyube from '@/assets/social-youtube.svg';



export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative before:content-[""] before:top-2 before:blur before:bottom-0 before:h-full before:w-full before:absolute'>
      <Logo height={60}  alt='safety-ehs'/>
      </div>
      <nav  className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
        <a href='#'>Über uns</a>
        <a href='#'>Fachmodule</a>
        <a href='#'>Hilfe</a>
        <a href='#'>Kontakt</a>
       </nav>
        <div className='flex justify-center gap-6 mt-6 '>
          <SocialX/>
          <SocialInsta/>
          <SocialLinkedIn/>
          <SocialYouyube/>   
          </div>
          <p className='mt-6'>&copy; 2025 Safety-doors GmbH All rights Reserved</p>
      </div>
    </footer>
  );
};
