'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import {motion} from 'framer-motion';
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#EAEEFE] to-[#D2DCFF] py-24">
      <div className="container">
        <div className='section-heading'>
        <h2 className="section-title">Signup for free today</h2>
        <p className="section-paragraph mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod esse aliquam, doloremque possimus odio quasi deserunt, nihil voluptatum pariatur molestiae sit soluta quia modi quas rerum corrupti. Facere, exercitationem pariatur.</p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">get for free</button>
          <button className="btn btn-text gap-1"><span>learn more</span>
          <ArrowRight className="h-5 w-5"/></button>
        </div>
      </div>
    </section>
  );
};
