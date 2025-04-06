'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import {motion} from 'framer-motion';
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#EAEEFE] to-[#D2DCFF] py-24">
      <div className="container">
        <div className='section-heading'>
        <h2 className="section-title">Kostenlose Demo – Jetzt anmelden!</h2>
        <p className="section-paragraph mt-5">Erleben Sie unsere Lösung in Aktion! Melden Sie sich noch heute für eine kostenlose Demo an und entdecken Sie, wie wir Ihr Unternehmen auf das nächste Level bringen können – unverbindlich & kostenlos!</p>
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
