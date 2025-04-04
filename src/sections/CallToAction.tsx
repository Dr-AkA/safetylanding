'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import {motion} from 'framer-motion';
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#EAEEFE] to-[#D2DCFF] py-24">
      <div className="container">
        <div className='section-heading'>
        <h2 className="section-title">Melden Sie sich noch heute kostenlos an</h2>
        <p className="section-paragraph mt-5">Nutzen Sie jetzt unser fortschrittliches EHS-System und verbessern Sie Ihr Arbeitsschutz-, Gesundheits- und Umweltmanagement. Unsere Plattform hilft Ihnen, Compliance-Anforderungen zu erfüllen, Risiken zu minimieren und die Sicherheit am Arbeitsplatz zu erhöhen. Mit intuitiven Dashboards, automatisierten Berichten und umfassenden Analysetools optimieren Sie Ihre EHS-Prozesse und schützen sowohl Ihre Mitarbeiter als auch die Umwelt. Unser Expertenteam unterstützt Sie bei der nahtlosen Integration in Ihre bestehenden Abläufe – ganz ohne anfängliche Kosten.</p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Demo anfordern</button>
          <button className="btn btn-text gap-1"><span>Mehr erfahren</span>
          <ArrowRight className="h-5 w-5"/></button>
        </div>
      </div>
    </section>
  );
};
