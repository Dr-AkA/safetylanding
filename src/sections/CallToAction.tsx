'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import {motion} from 'framer-motion';
import Magnet from '@/components/Magnet';
import Link from 'next/link';
type Props = {
  translations: {
    Title: string;
    paragraph: string;
    button:string;
    button2:string;

  };
};

export const CallToAction = ({ translations }: Props) => {
  return (
    <section className="bg-gradient-to-b from-[#EAEEFE] to-[#D2DCFF] py-24">
      <div className="container">
        <div className='section-heading'>
        <h2 className="section-title">{translations.Title}</h2>
        <p className="section-paragraph mt-5">{translations.paragraph}</p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Magnet padding={60} disabled={false} magnetStrength={50}>

          <Link href="/contact" className="btn btn-primary">
          {translations.button}
          </Link>
          </Magnet>
         <Magnet padding={60} disabled={false} magnetStrength={50}>

          <button className="btn btn-text gap-1"><span>{translations.button2}</span>
          <ArrowRight className="h-5 w-5"/></button>
          </Magnet>
        </div>
      </div>
    </section>
  );
};
