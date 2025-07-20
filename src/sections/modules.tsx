'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import ModuleModal from '@/sections/ModuleModal';

import EHS from '@/assets/EHS-Basis.png';
import Betriebanweisung from '@/assets/betriebsanweisung.png';
import Qualifkationen from '@/assets/Qualifkationen.png';
import Gefahrdungsbeurteilungen from '@/assets/Gefährdungsbeurteilungen.png';
import Massnamen from '@/assets/Maßnahmen.png';
import Prufwartungsplan from '@/assets/prufwartungsplanner.png';
import UmfalManement from '@/assets/Unfallmanagement.png';
import Unterweisung from '@/assets/Unterweisungen.png';
import beobachtung from '@/assets/beobachtungen.svg';
import audit from '@/assets/Audit_UebersichtAudits.svg';

import EHSTAB from '@/assets/ehsbasistab.jpg';
import Betriebanweisungtab from '@/assets/betriebanweisung1.jpg';
import QualificationTab from '@/assets/qualifcationtab.jpg';
import Gefahr from '@/assets/gefahr1.jpg';
import Massnahmen from '@/assets/Massnahmen-PC.png';
import Umfal from '@/assets/umfalmanagement.jpg';
import Unterweisung1 from '@/assets/unterweisung.jpg';
import Boebachtung from '@/assets/boebachtung.jpg';
import Pruf from '@/assets/pruf.jpg';
import audit1 from '@/assets/audit1.jpg';

type Module = {
  key: string;
  Logo: any;
  isSvg: boolean;
  screenshots: any[];
  description: string;
  title:string;
  alt:string;

};

type Props = {
  modules?: Module[]; 
};




export const Modules = ({ modules }: Props) => {
  const t = useTranslations('Modules');

const fachmodules: Module[] = [
  {
    key: 'EHS-Basis',
    Logo: EHS,
    isSvg: false,
    screenshots: [EHSTAB],
    description: t('EHS-Basis.description'),
    title:t('EHS-Basis.title'),
    alt:t('EHS-Basis.alt'),
  
  
  },
  {
    key: 'Betriebsanweisung',
    Logo: Betriebanweisung,
    isSvg: false,
    screenshots: [Betriebanweisungtab],
    description: t('Betriebsanweisung.description'),
     title:t('Betriebsanweisung.title'),
    alt:t('Betriebsanweisung.alt'),
     
  },
  {
    key: 'Qualifkationen',
    Logo: Qualifkationen,
    isSvg: false,
    screenshots: [QualificationTab],
    description: t('Qualifkationen.description'),
     title:t('Qualifkationen.title'),
    alt:t('Qualifkationen.alt'),
    
  },
  {
    key: 'Gefahrdungsbeurteilungen',
    Logo: Gefahrdungsbeurteilungen,
    isSvg: false,
    screenshots: [Gefahr],
    description: t('Gefahrdungsbeurteilungen.description'),
     title:t('Gefahrdungsbeurteilungen.title'),
    alt:t('Gefahrdungsbeurteilungen.alt'),
    
  },
  {
    key: 'Maßnahmen',
    Logo: Massnamen,
    isSvg: false,
    screenshots: [Massnahmen],
    description: t('Maßnahmen.description'),
     title:t('Maßnahmen.title'),
    alt:t('Maßnahmen.alt'),
 
  },
  {
    key: 'Prüf & Wartungsplaner',
    Logo: Prufwartungsplan,
    isSvg: false,
    screenshots: [Pruf],
    description: t('Prüf & Wartungsplaner.description'),
     title:t('Prüf & Wartungsplaner.title'),
    alt:t('Prüf & Wartungsplaner.alt'),
     
  },
  {
    key: 'Umfallmanagement',
    Logo: UmfalManement,
    isSvg: false,
    screenshots: [Umfal],
    description: t('Umfallmanagement.description'),
     title:t('Umfallmanagement.title'),
    alt:t('Umfallmanagement.alt'),
     
  },
  {
    key: 'Digitale Unterweisungen',
    Logo: Unterweisung,
    isSvg: false,
    screenshots: [Unterweisung1],
    description: t('Digitale Unterweisungen.description'),
     title:t('Digitale Unterweisungen.title'),
    alt:t('Digitale Unterweisungen.alt'),
   
  },
  {
    key: 'Sicherheits-Beobachtungen',
    Logo: beobachtung,
    isSvg: true,
    screenshots: [Boebachtung],
    description: t('Sicherheits-Beobachtungen.description'),
     title:t('Sicherheits-Beobachtungen.title'),
    alt:t('Sicherheits-Beobachtungen.alt'),
   
  },
  {
    key: 'Intelligente Audits & Begehungen',
    Logo: audit,
    isSvg: true,
    screenshots: [audit1],
    description: t('Intelligente Audits & Begehungen.description'),
     title:t('Intelligente Audits & Begehungen.title'),
    alt:t('Intelligente Audits & Begehungen.alt'),
    
  },
];
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedModule(fachmodules[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-10 py-24">
      <div className="container">
        <h2 className="section-title mt-5">
            {t('section.title')}

        </h2>
        <p className="section-paragraph mt-5">
            {t('section.paragraph')}

        </p>

        <div className="flex justify-center items-stretch flex-wrap gap-10 mt-10">
          {fachmodules.map((module, index) => {
            const title = t(`${module.key}.title`);
            const alt = t(`${module.key}.alt`);
            const buttonText = t(`${module.key}.buttonText`);
            const features = t(`${module.key}.features`).split('|');

            return (
              <div
                key={index}
                className="p-10 mt-5 border border-[#77B596]/50 rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center w-[300px] flex flex-col h-[500px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-black/70 mb-4">{title}</h3>
                  <div className="h-[100px] flex items-center justify-center mb-4">
                    {module.isSvg ? (
                      <module.Logo className="h-[100px] w-[90px]" />
                    ) : (
                      <Image
                        src={module.Logo}
                        alt={alt}
                        className="h-[100px] w-[90px]"
                        height={100}
                        width={100}
                      />
                    )}
                  </div>
                </div>

                <div className="flex-grow overflow-y-auto scrollbar-hide">
                  <ul className="flex flex-col gap-5">
                    {features.map((text, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-4 text-center">
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-5">
                  <button
                    className="btn btn-primary w-full"
                    onClick={() => openModal(index)}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {selectedModule && (
          <ModuleModal
            isOpen={isModalOpen}
            onClose={closeModal}
            moduleData={selectedModule}
          />
        )}
      </div>


<noscript>
  <section>
    <h2>Was ist Safety2 Modules?</h2>
    <p>Safety2 ist eine modulare SaaS-Plattform für Arbeitssicherheit, Umwelt- und Qualitätsmanagement.</p>

    <h3>Enthaltene Module</h3>
    <ul>
      <li>Betriebsanweisungen</li>
      <li>Gefährdungsbeurteilungen</li>
      <li>Qualifikationen</li>
      <li>Unfallmanagement</li>
      <li>Unterweisungen</li>
      <li>Beobachtungen</li>
      <li>Audits</li>
      <li>EHS-Basis</li>
      <li>Maßnahmen</li>
      <li>Prüf- und Wartungsplan</li>
    </ul>
  </section>
</noscript>




    </section>
  );
};
