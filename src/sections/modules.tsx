'use server';
import Betriebanweisung from '@/assets/betriebsanweisung.png';
import EHS from '@/assets/EHS-Basis.png';
import Qualifkationen from '@/assets/Qualifkationen.png';
import Gefahrdungsbeurteilungen from '@/assets/Gefährdungsbeurteilungen.png';
import Massnamen from '@/assets/Maßnahmen.png';
import Prufwartungsplan from '@/assets/prufwartungsplanner.png';
import UmfalManement from '@/assets/Unfallmanagement.png';
import Unterweisung from '@/assets/Unterweisungen.png';
import beobachtung from '@/assets/beobachtungen.svg';
import audit from '@/assets/Audit_UebersichtAudits.svg';

import Image  from 'next/image';
const fachmodules = [
  {
    title: "EHS-Basis",
    buttonText: "Mehr erfahren",
    Logo:EHS,
    isSvg:false,
    alt:'Umwelt und sicherheit',
    features: [
      "safety² EHS-Basis zentralisiert Ihre Daten, hält sie aktuell und verknüpft sie intelligent mit allen Modulen. Anpassbare Berechtigungen gewährleisten höchste Datensicherheit."
    ],
  },
  {
    title: "Betriebsanweisung",
    buttonText: "Mehr ehrfahren",
    Logo:Betriebanweisung,
    isSvg:false,

    alt:'Betriebsanweisung online erstellen',
   features: [
     "Erstellen Sie Betriebsanweisungen effizient mit vordefinierten oder anpassbaren Bausteinen. Dank intelligenter Verknüpfung erfolgt die Generierung automatisch – strukturiert, zeitsparend und normgerecht."],
  },
  {
    title: "Qualifkationen",
    buttonText: "Mehr erfahren",
    Logo:Qualifkationen,
    isSvg:false,

    alt:'Compliance Zertifikaten',
    features: [
     "Zentrales, digitales Kompetenzmanagement mit umfassender Übersicht aller Mitarbeiterqualifikationen. Ermöglicht gezielte Filterung nach spezifischen Fachkompetenzen und Expertisen für optimale Ressourcenplanung."
    ],
  },
  {
    title: "Gefahrdungsbeurteilungen",
    buttonText: "Mehr erfahren",
    Logo:Gefahrdungsbeurteilungen,
    alt:'Risikomanagement',
    features: [
     "Umfassende digitale Risikoerfassung und -management mit safety² - identifiziert, dokumentiert und bewertet systematisch alle betrieblichen Gefährdungspotenziale für maximale Arbeitssicherheit und Compliance."
    ],
  },
  {
    title: "Maßnahmen",
    buttonText: "Mehr erfahren",
    Logo:Massnamen,
    isSvg:false,

    alt:'Audit-Management',
    features: [
      "Zentrales digitales Maßnahmenmanagement mit safety² – ermöglicht lückenlose Planung, Verfolgung und Dokumentation aller unternehmensweiten Maßnahmen. Inklusive intelligentem Erinnerungssystem für termingerechte Umsetzung und automatischen Benachrichtigungen zu kritischen Änderungen."
    ],
  },
  {
    title: "Prüf & Wartungsplaner",
    buttonText: "Mehr erfahren",
    Logo:Prufwartungsplan,
    isSvg:false,

    alt:'Gesetzliche Vorschriften',
    features: [
    "Zentrale digitale Erfassung und Überwachung aller prüfpflichtigen Objekte und Arbeitsmittel. Gewährleistet maximale Sicherheit und lückenlose Compliance durch strukturierte Verwaltung von Prüfmitteln und Wartungsaktivitäten mit automatisierter Fristenkontrolle."
    ],
  },
  {
    title: "UmfalManement",
    buttonText: "Mehr erfahren",
    Logo:UmfalManement,
    isSvg:false,

    alt:'Vorfallmanagement',
    features: [
      "Smarte Arbeitsschutz-Dokumentation: Digitale Erfassung und Analyse von Arbeitsplatzunfällen für ein sichereres Arbeitsumfeld."
    ],
  },
  {
    title: "Digitale Unterweisungen",
    buttonText: "Mehr erfahren",
    Logo:Unterweisung,
    isSvg:false,

    alt:'Digitale Unterweisungen erstellen',
    features: [
      "Effiziente Online-Schulungen, die Ihre gesetzlichen Unterweisungspflichten einfach und nachweisbar erfüllen."
    ],
  },
  {
    title: "Sicherheits-Beobachtungen",
    buttonText: "Mehr erfahren",
    Logo:beobachtung,
    isSvg:true,

    alt:'Sichere Beobachtungen',
    features: [
      "Digitale Erfassung von Arbeitsplatzverhalten und -bedingungen für gezielte Präventionsmaßnahmen und kontinuierliche Verbesserung."
    ],
  },
  {
    title: "Intelligente Audits & Begehungen",
    buttonText: "Mehr erfahren",
    Logo:audit,
    isSvg:true,

    alt:'Audit-Management',
    features: [
        " Optimieren Sie Ihre Compliance-Prozesse durch digitale Echtzeit-Dokumentation während der Begehungen. Unser integriertes Toolkit gewährleistet Richtlinienkonformität, proaktive Gefahrenerkennung und automatisierte Terminplanung – und verwandelt Routineinspektionen in strategische Sicherheitsintelligenz."
    ],
  },
  
];

export const Modules = () => {
  
  
  return <section className="mt-10 py-24">
    <div className="container">
      <h2 className="section-title mt-5">Alle EHS-Prozesse, eine Lösung  Maximale Kontrolle mit einem Klick      </h2>
      <p className="section-paragraph mt-5"> Unsere vielfältigen Fachmodule ermöglichen es Ihnen, alle wichtigen EHS-Prozesse zentral zu steuern. Von Risikomanagement über Compliance bis hin zu Arbeitssicherheit – alles in einer Plattform, alles unter Ihrer Kontrolle.

 Modular & flexibel  genau auf Ihre Bedürfnisse abgestimmt
 Effiziente Verwaltung & transparente Prozesse
 Ein Klick, volle Kontrolle
 Optimieren Sie Ihr EHS-Management – einfacher, schneller, intelligenter.</p>
      <div className="flex justify-center items-stretch flex-wrap gap-10 mt-10">
  {fachmodules.map(({ title, buttonText, features, Logo, alt,isSvg }) => (
    <div className="p-10 mt-5 border border-[#77B596]/50 rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center w-[300px] flex flex-col h-[500px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-black/70 mb-4">{title}</h3>
        <div className="h-[100px] flex items-center justify-center mb-4">
          {isSvg?(
            <Logo className="h-[100px] w-[90px]"/>
          ):(
            <Image src={Logo} alt={alt} className="h-[100px] w-[90px]" height={100} width={100} />
          )}
        
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        <ul className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex items-center gap-4 text-center">
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
        <button className="btn btn-primary w-full">{buttonText}</button>
      </div>
    </div>
  ))}
</div>
    </div>
  </section>;
};
