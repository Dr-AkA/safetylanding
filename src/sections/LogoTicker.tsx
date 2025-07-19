"use client";
import Betriebanweisung from '@/assets/betriebsanweisung.png';
import EHS from '@/assets/EHS-Basis.png';
import Qualifkationen from '@/assets/Qualifkationen.png';
import Gefahrdungsbeurteilungen from '@/assets/Gefährdungsbeurteilungen.png';
import Massnamen from '@/assets/Maßnahmen.png';
import Prufwartungsplan from '@/assets/prufwartungsplanner.png';
import UmfalManement from '@/assets/Unfallmanagement.png';
import Unterweisung from '@/assets/Unterweisungen.png';
import Beobachtungen from '@/assets/beobachtungen.svg';
import Audit from '@/assets/Audit_UebersichtAudits.svg';
import Image  from 'next/image';
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return <div className='py-8 md:py-12 antialiased bg-[#EAEEFE]'>
    <div className='container'>
    <motion.div
          className="flex gap-10"
          animate={{ x: ["50%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
         
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className='flex gap-10 flex-none items-center'>
           
            <Image src={Betriebanweisung} alt='Betriebsanweisung erstellen EHS'  className='logo-ticker-image '/>
        
           
            <Image src={EHS} alt='Safety Health and Environment' className='logo-ticker-image '/>
            
           
            <Image src={Qualifkationen} alt='Arbeitsschutzmanagement Qualifikation' className='logo-ticker-image '/>
         
            <Image src={Gefahrdungsbeurteilungen} alt='Gefährdungsbeurteilung erstellen' className='logo-ticker-image '/>
           
                    
            <Image src={Massnamen} alt='Sicherheitsmaßnahmen Arbeitsplatz' className='logo-ticker-image '/>
           
           
            <Image src={Prufwartungsplan} alt='Prüf- und Wartungsplan EHS' className='logo-ticker-image '/>
            
          
            <Image src={UmfalManement} alt='Unfallmanagement im Unternehmen' className='logo-ticker-image '/>
          
            <Image src={Unterweisung} alt='Sicherheitsunterweisung für Mitarbeiter' className='logo-ticker-image '/>
            <Audit  alt='Audit-Management' className='logo-ticker-image'/>
            <Beobachtungen  alt='Sichere Beobachtungen' className='logo-ticker-image'/>

          </div>
          </div>

          </motion.div>
                    
        </div>
  </div>;
};
