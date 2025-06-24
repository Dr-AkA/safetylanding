import Arrowright from '@/assets/arrow-right.svg';
//import SafetyLogo from '@/assets/safety.png';
import PlaceHolder from '@/assets/twocolleague.gif';
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

export const Contact = async () => {
  const t = await getTranslations('contact');
  return (<section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_80%_at_bottom_right,white,black_90%)] overflow-x-clip'>
    
  </section>);
};
