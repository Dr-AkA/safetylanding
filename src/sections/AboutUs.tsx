import Arrowright from '@/assets/arrow-right.svg';
//import SafetyLogo from '@/assets/safety.png';
import PlaceHolder from '@/assets/twocolleague.gif';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import Magnet from '@/components/Magnet';

export const About = async () => {
  const t = await getTranslations('aboutUs');
  return (<section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_80%_at_bottom_right,white,black_90%)] overflow-x-clip'>
    <div className="container">
      <div className='md:flex items-center'>
      <div className='w-full max-w-[478px]'>
      <h1 className="text-4xl  font-bold tracking-tighter bg-gradient-to-b from-white to-[#8f8382] text-transparent bg-clip-text mt-6 md:text-2xl md:text-balance sm:text-1xl">{t('title')}</h1>
      
      <p className="text-xl text-[white] tracking-tight mt-6 justify-center  sm:text-balance md:text-balance md:text-2xl sm:text-1xl ">{t('description')}</p>
   <div className="flex gap-1 items-center mt-[30px]">
    
    <button className="btn btn-primary ">{t('demo')}</button>
  
    <button className="btn btn-text gap-1 text-white/90"><span>{t('learn')}</span>
    <Arrowright className="h-5 w-5"/></button>
    </div>
    </div>
  <div 
  className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative h-[300px] w-full
             animate-[float_3s_ease-in-out_infinite] 
             shadow-[0_15px_30px_rgba(0,0,0,0.1)] 
             transform-gpu rounded-2xl">
  
  <Image 
    unoptimized 
    src={PlaceHolder} 
    alt="gefahrbeurteilung" 
    className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 object-contain h-full w-auto" 
  />
</div>
  </div>
    </div>
  </section>);
};
