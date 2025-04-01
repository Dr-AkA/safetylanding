'use client';
import Betriebanweisung from '@/assets/check-mark-3280.svg';
import Placeholder from '@/assets/bundle.webp';
import Basis from '@/assets/cyber-security-protection-process-black-outline-shield-23043.svg';
import Image from 'next/image';
import {useRef} from 'react';
import {motion,useScroll,useTransform} from 'framer-motion';
export const ProductShowcase = () => {
  const sectionRef=useRef(null);
  const {scrollYProgress}= useScroll({
     target:sectionRef,
     offset:['start end','end start']
   });
   const translateY=useTransform(scrollYProgress,[0,1],[150,-150])

  return <section ref={sectionRef} className='bg-gradient-to-b from-[#D@DCFF] to-[#FFFFFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className='max-w-[540px] mx-auto'>
      <div className='flex justify-center'>
      <div className='tag'>Sicherheit zuerst, Compliance stets.</div>
      </div>
      <h2 className='section-title mt-5'>Maximale Sicherheit intelligenter schneller zuverlässiger.</h2>
      <p className='section-paragraph mt-6 text-center'>
     <span className='font-bold text-3xl'>Sicherheit Effizienz. Compliance</span> <br></br>
     Schaffen Sie eine sichere und regelkonforme Arbeitsumgebung  
     ohne Kompromisse.
     Unsere EHS-Software hilft Ihnen,
     Risiken frühzeitig zu erkennen,
     Vorschriften mühelos einzuhalten und Prozesse effizient zu steuern.

      </p>
      </div>
    <div className='relative'>
     <Image src={Placeholder} alt="Betriebsanweisung nach Gefahrstoffverordnung" className=' mt-10   object-contain' />
     <motion.div
    style={{ translateY }}
    className="hidden md:block absolute md:w-[200px] md:h-[200px] -right-36 -top-32"
    >
     <Betriebanweisung alt="Vorfallmanagement" />
    </motion.div>

    <motion.div
     style={{ translateY }}
    className="hidden md:block absolute md:w-[200px] md:h-[200px] -left-36 bottom-30"
    >
     <Basis alt="Sichere Beobachtungen" />
    </motion.div>

    </div>
    </div>
  </section>;
};
