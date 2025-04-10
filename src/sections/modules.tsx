'use client';
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
import EHSTAB from '@/assets/ehsbasistab.jpg';
import Betriebanweisungtab from '@/assets//betriebanweisung1.jpg';
import QualificationTab from '@/assets/qualifcationtab.jpg';
import Gefahr from '@/assets/gefahr1.jpg';
import Massnahmen from '@/assets/Massnahmen-PC.png';;
import Umfal from '@/assets/umfalmanagement.jpg';
import Unterweisung1 from '@/assets/unterweisung.jpg';
import Boebachtung from '@/assets/boebachtung.jpg';
import Pruf from '@/assets/pruf.jpg';
import audit1 from '@/assets/audit1.jpg';
import Image from 'next/image';
import { useState } from 'react';
import ModuleModal from '@/sections/ModuleModal';


type Module = {
  title: string;
  buttonText: string;
  Logo: any;
  isSvg: boolean;
  screenshots: any[];
  description: string;
  alt: string;
  features: string[];
};


type Props = {
  modules: Module[];


  };




const fachmodules = [
  {
    title: "EHS-Basis",
    buttonText: "Mehr erfahren",
    Logo:EHS,
    isSvg:false,
    screenshots: [EHSTAB],
    description:"Die safety² EHS-Basis – Ihre zentrale Plattform für ein strukturiertes und effizientes Gesundheits- und Arbeitsschutzmanagement. Alle relevanten Daten werden zentral gebündelt, kontinuierlich aktualisiert und nahtlos mit weiteren Modulen verknüpft. Flexible Berechtigungsstrukturen gewährleisten höchste Datenschutz- und Sicherheitsstandards. Das individuell anpassbare Dokumentenmanagementsystem (DMS) sorgt für eine konsistente Dokumentation und ermöglicht allen Mitarbeitenden – standortübergreifend – den schnellen Zugriff auf aktuelle Richtlinien und Verfahren. Selbstverständlich ist safety² in mehreren Sprachen verfügbar.",
    alt:'Umwelt und sicherheit',
    features: [
      "safety² EHS-Basis zentralisiert Ihre Daten, hält sie aktuell und verknüpft sie intelligent mit allen Modulen. Anpassbare Berechtigungen gewährleisten höchste Datensicherheit.",
    ],
  },
  {
    title: "Betriebsanweisung",
    buttonText: "Mehr ehrfahren",
    Logo:Betriebanweisung,
    isSvg:false,
    screenshots: [Betriebanweisungtab],
    description:"Mit dem safety²-Modul Betriebsanweisungen erfüllen Sie Ihre Informationspflicht rechtssicher und standardisiert. Nutzen Sie praxisbewährte Vorlagen oder erstellen Sie individuelle Anweisungen, passgenau auf Ihr Unternehmen zugeschnitten. Integrieren Sie relevante Sicherheitsrichtlinien, Prozesse und Schutzmaßnahmen – für eine wirksame Risikominimierung und die zuverlässige Einhaltung gesetzlicher Vorgaben.",
    alt:'Betriebsanweisung online erstellen',
    features: [
     "Erstellen Sie Betriebsanweisungen effizient mit vordefinierten oder anpassbaren Bausteinen. Dank intelligenter Verknüpfung erfolgt die Generierung automatisch – strukturiert, zeitsparend und normgerecht."],
  },
  {
    title: "Qualifkationen",
    buttonText: "Mehr erfahren",
    Logo:Qualifkationen,
    isSvg:false,
    screenshots: [QualificationTab],
    description:"Gezielte Aufgabenvergabe basierend auf individuellen Qualifikationen – mit dem safety² Modul Qualifikationen. Das Modul unterstützt Sie dabei, Mitarbeitende passgenau gemäß ihrer Kompetenzen einzusetzen. So steigern Sie nicht nur die betriebliche Effizienz, sondern reduzieren gleichzeitig sicherheitsrelevante Risiken und verbessern den Arbeitsschutz nachhaltig. Durch die automatische Verknüpfung mit dem Modul Unterweisungen behalten Sie stets den Überblick über erforderliche Schulungen und ablaufende Zertifikate – und werden rechtzeitig erinnert.",
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
    isSvg:false,
    screenshots: [Gefahr],
    description:"Gefahren frühzeitig erkennen und wirksam vorbeugen – mit dem safety² Modul Gefährdungsbeurteilungen. Bewerten Sie Gefährdungen systematisch und stellen Sie sicher, dass geeignete Schutzmaßnahmen rechtzeitig umgesetzt werden. Das Modul unterstützt Sie bei der ganzheitlichen Risikobewertung und hilft, potenzielle Gefahrenquellen frühzeitig zu identifizieren – bevor sie zum Problem werden.",
    features: [
     "Umfassende digitale Risikoerfassung und -management mit safety² - identifiziert, dokumentiert und bewertet systematisch alle betrieblichen Gefährdungspotenziale für maximale Arbeitssicherheit und Compliance."
    ],
  },
  {
    title: "Maßnahmen",
    buttonText: "Mehr erfahren",
    Logo:Massnamen,
    isSvg:false,
    description:"Effizientes Maßnahmenmanagement – klar, zentral, transparent. Mit dem safety² Modul Maßnahmen behalten Sie sämtliche betrieblichen Maßnahmen im Blick. Erstellen Sie neue Maßnahmen mit wenigen Klicks und weisen Sie diese gezielt Verantwortlichen oder Abteilungen zu. Dank zentraler Übersicht und automatisierter Benachrichtigungen über Fristen, Änderungen und Statusupdates sorgen Sie für maximale Sicherheit, Transparenz und Nachverfolgbarkeit – ganz ohne Mehraufwand.",
    screenshots: [Massnahmen],
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
    description:"Zuverlässigkeit mit System – dank digitalem Prüf- und Wartungsmanagement. Mit dem safety² Modul Prüf- & Wartungsplaner erfassen Sie alle prüfpflichtigen Objekte und Arbeitsmittel zentral und digital. Hinterlegen Sie individuelle Checklisten und planen Sie automatische Zuweisungen in definierten Intervallen. Das integrierte Erinnerungssystem stellt sicher, dass alle gesetzlichen Prüfzyklen eingehalten werden – lückenlos, termingerecht und revisionssicher.",
    screenshots: [Pruf],
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
    description:"Ganzheitliches Unfallmanagement für mehr Sicherheit und weniger Risiko Mit dem safety² Modul Unfallmanagement erfassen und verwalten Sie Beinahe-Unfälle, Wegeunfälle und Arbeitsunfälle digital und strukturiert. Kritische Ereignisse werden systematisch bewertet, dokumentiert und in konkrete Maßnahmen zur Prävention überführt. Die intuitive Schnellerfassungsmaske ermöglicht eine effiziente Bearbeitung, während die integrierte Unfallanzeige-Funktion den Verwaltungsaufwand deutlich reduziert.",
    screenshots: [Umfal],
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
    description:"100 % rechtssichere Unterweisung – automatisiert, nachweisbar und individuell Mit dem safety² Modul Unterweisungen erfüllen Sie Ihre Unterweisungspflicht lückenlos und effizient – für interne wie externe Mitarbeitende. Erstellen Sie individuelle Schulungsthemen und -pläne, führen Sie Lernerfolgskontrollen durch und generieren Sie rechtssichere Zertifikate. Das Modul ermöglicht eine einfache Erstellung und Verwaltung von Unterweisungen, inklusive automatisierter Erinnerungen, Statusabfragen und umfassender Nachweisdokumentation.",
    screenshots: [Unterweisung1],
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
    description:"Sicherheitsrisiken früh erkennen – mit dem safety² Modul Beobachtungen. Fördern Sie eine aktive Sicherheitskultur durch gezielte Beobachtungen und digitale Dokumentation. Das Modul ermöglicht es Mitarbeitenden, unsicheres Verhalten oder Regelverstöße einfach und direkt an die zuständigen Stellen zu melden – abteilungsübergreifend und standortunabhängig. Potenzielle Gefahrenquellen wie defekte Arbeitsmittel oder ungeeignete Umgebungen werden strukturiert erfasst. In Kombination mit weiteren safety² Modulen lassen sich daraus automatisch Maßnahmenpläne oder Betriebsanweisungen ableiten – für mehr Sicherheit und weniger Risiko im Arbeitsalltag.",
    screenshots: [Boebachtung],
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
    description:"Exzellente Arbeitssicherheit durch systematisches Audit- und Begehungsmanagement. Mit dem safety² Modul Audits & Begehungen organisieren Sie alle Sicherheitsüberprüfungen zentral und effizient – für maximale Sicherheit und Compliance. Erfassen Sie Beobachtungen direkt vor Ort, dokumentieren Sie diese digital in Echtzeit, werten Sie Ergebnisse gezielt aus und leiten Sie sofort notwendige Maßnahmen ein. So optimieren Sie Ihre Sicherheitsstandards nachhaltig und erfüllen alle regulatorischen Anforderungen proaktiv.",
    screenshots: [audit1],
    alt:'Audit-Management',
    features: [
        " Optimieren Sie Ihre Compliance-Prozesse durch digitale Echtzeit-Dokumentation während der Begehungen. Unser integriertes Toolkit gewährleistet Richtlinienkonformität, proaktive Gefahrenerkennung und automatisierte Terminplanung – und verwandelt Routineinspektionen in strategische Sicherheitsintelligenz."
    ],
  },
  
];

export const Modules = ({ modules }: Props) => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (moduleIndex) => {
    setSelectedModule(fachmodules[moduleIndex]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="mt-10 py-24">
      <div className="container">
        <h2 className="section-title mt-5">Alle EHS-Prozesse, eine Lösung Maximale Kontrolle mit einem Klick</h2>
        <p className="section-paragraph mt-5">
          Unsere vielfältigen Fachmodule ermöglichen es Ihnen, alle wichtigen EHS-Prozesse zentral zu steuern. Von Risikomanagement über Compliance bis hin zu Arbeitssicherheit – alles in einer Plattform, alles unter Ihrer Kontrolle.

          Modular & flexibel genau auf Ihre Bedürfnisse abgestimmt
          Effiziente Verwaltung & transparente Prozesse
          Ein Klick, volle Kontrolle
          Optimieren Sie Ihr EHS-Management – einfacher, schneller, intelligenter.
        </p>
        <div className="flex justify-center items-stretch flex-wrap gap-10 mt-10">
          {fachmodules.map((module, index) => (
            <div key={index} className="p-10 mt-5 border border-[#77B596]/50 rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center w-[300px] flex flex-col h-[500px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-black/70 mb-4">{module.title}</h3>
                <div className="h-[100px] flex items-center justify-center mb-4">
                  {module.isSvg ? (
                    <module.Logo className="h-[100px] w-[90px]" />
                  ) : (
                    <Image src={module.Logo} alt={module.alt} className="h-[100px] w-[90px]" height={100} width={100} />
                  )}
                </div>
              </div>

              <div className="flex-grow overflow-y-auto scrollbar-hide">
                <ul className="flex flex-col gap-5">
                  {module.features.map((description, featureIndex) => (
                    <li key={description} className="text-sm flex items-center gap-4 text-center">
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-5">
                <button 
                  className="btn btn-primary w-full"
                  onClick={() => openModal(index)}
                >
                  {module.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedModule && (
          <ModuleModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            moduleData={selectedModule} 
          />
        )}
      </div>
    </section>
  );
};