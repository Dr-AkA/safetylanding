'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn,
  faTruckFast,
  faShield,
  faCloud,
  faPenNib,
  faBolt,
  faRobot,
  faLanguage,
  faBarsProgress
} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

type Props = {
  translations: {
    intro: string;
    title: string;
    description: string;
    features: {
      title: string;
      description: string;
      icon: string;
      color: string;
    }[];
  };
};

const ICONS: Record<string, any> = {
  faChartColumn,
  faTruckFast,
  faShield,
  faCloud,
  faPenNib,
  faBolt,
  faRobot,
  faLanguage,
  faBarsProgress,
};

export const Vision = ({ translations }: Props) =>{
  return (<>   
  <Head>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist die Vision von Safety2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unsere Vision ist es, Sicherheit zu vereinfachen, Bürokratie abzuschaffen und Compliance zu digitalisieren. Safety2 ersetzt veraltete Arbeitsabläufe durch eine zentrale Plattform für das gesamte HSE-Management."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Analysen bietet Safety2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mit fortschrittlichen Dashboards und Berichten bietet Safety2 Einblicke in Audit-Leistungen, Qualifikationsverfolgung und weitere sicherheitsrelevante Kennzahlen – für fundierte Entscheidungen statt Vermutungen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie schnell lässt sich Safety2 integrieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safety2 lässt sich nahtlos in bestehende Systeme integrieren. Dokumente, Aufgaben und Verantwortlichkeiten – von Betriebsanweisungen bis zu Wartungsplänen – werden zentral verwaltet."
      }
    },
    {
      "@type": "Question",
      "name": "Wie sorgt Safety2 für Datensicherheit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Datenschutz steht bei Safety2 an erster Stelle: Mit gesichertem Zugriff, vollständigen Audit-Trails und konsequentem Schutz sensibler HSE-Daten."
      }
    },
    {
      "@type": "Question",
      "name": "Ist Safety2 cloudbasiert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Safety2 ermöglicht ortsunabhängiges Arbeiten – ob vor Ort oder remote. Daten, Dokumente und Schulungen sind jederzeit verfügbar, mit Versionskontrolle und sicherer Speicherung."
      }
    },
    {
      "@type": "Question",
      "name": "Wie unterstützt Safety2 das Aufgabenmanagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aufgaben können klar zugewiesen, verfolgt und verifiziert werden – damit kein HSE-Thema übersehen wird und Fristen eingehalten werden."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Leistungskennzahlen erfasst Safety2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safety2 misst z. B. die Anzahl abgeschlossener Anweisungen, Inspektionshäufigkeit und Risikotrends – für kontinuierliche Optimierung Ihrer Prozesse."
      }
    },
    {
      "@type": "Question",
      "name": "Welche zukünftigen Funktionen sind geplant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir entwickeln KI-gestützte Tools zur Automatisierung von Workflows, frühzeitigen Risikoerkennung und präventivem HSE-Management – für weniger Papierkram und mehr Sicherheit."
      }
    },
    {
      "@type": "Question",
      "name": "Für wen ist Safety2 geeignet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safety2 eignet sich für kleine Betriebe und multinationale Unternehmen. Die Benutzeroberfläche ist intuitiv, mehrsprachig und für echte Nutzer gemacht – nicht nur für Administratoren."
      }
    },
    {
      "@type": "Question",
      "name": "Wie benutzerfreundlich ist Safety2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safety2 benötigt keine Schulungsmarathons oder Handbücher. Die Plattform ist so gestaltet, dass sich Nutzer sofort zurechtfinden – damit sie sich auf Sicherheit konzentrieren können, nicht auf Software."
      }
    }
  ]
}
`}} />

  </Head>
   
     <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {translations.intro}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
            {translations.description}
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {translations.features.map((feature, index) => (
            <div
              key={index}
              className={`md:p-8 lg:p-14 ${index >= 3 ? 'md:border-t md:border-gray-200' : ''} ${
                index % 3 !== 0 ? 'md:border-l md:border-gray-200' : ''
              } flex flex-col justify-center items-center`}
            >
              <div className={`w-14 h-14 rounded-full ${feature.color} flex justify-center items-center`}>
               <FontAwesomeIcon
                icon={ICONS[feature.icon]}
                className={`text-3xl ${
                 ['bg-slate-700', 'bg-blue-500', 'bg-indigo-500', 'bg-gray-800','bg-purple-500','bg-teal-500','bg-yellow-500','bg-red-500','bg-green-500','bg-orange-500','bg-slate-500'
                  ,'bg-sky-500'
                 ].includes(feature.color)
                  ? 'text-white'
                 : 'text-white'
    }`}
  />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-5 text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
  
  {/* this is for Generative AI optimization */}

          <noscript>
  <section>
    <h2>Was ist die Vision von Safety2?</h2>
    <p>Unsere Vision ist es, Sicherheit zu vereinfachen, Bürokratie abzuschaffen und Compliance zu digitalisieren. Safety2 ersetzt veraltete Arbeitsabläufe durch eine zentrale Plattform für das gesamte HSE-Management.</p>

    <h2>Welche Analysen bietet Safety2?</h2>
    <p>Mit fortschrittlichen Dashboards und Berichten bietet Safety2 Einblicke in Audit-Leistungen, Qualifikationsverfolgung und weitere sicherheitsrelevante Kennzahlen – für fundierte Entscheidungen statt Vermutungen.</p>

    <h2>Wie schnell lässt sich Safety2 integrieren?</h2>
    <p>Safety2 lässt sich nahtlos in bestehende Systeme integrieren. Dokumente, Aufgaben und Verantwortlichkeiten – von Betriebsanweisungen bis zu Wartungsplänen – werden zentral verwaltet.</p>

    <h2>Wie sorgt Safety2 für Datensicherheit?</h2>
    <p>Datenschutz steht bei Safety2 an erster Stelle: Mit gesichertem Zugriff, vollständigen Audit-Trails und konsequentem Schutz sensibler HSE-Daten.</p>

    <h2>Ist Safety2 cloudbasiert?</h2>
    <p>Ja. Safety2 ermöglicht ortsunabhängiges Arbeiten – ob vor Ort oder remote. Daten, Dokumente und Schulungen sind jederzeit verfügbar, mit Versionskontrolle und sicherer Speicherung.</p>

    <h2>Wie unterstützt Safety2 das Aufgabenmanagement?</h2>
    <p>Aufgaben können klar zugewiesen, verfolgt und verifiziert werden – damit kein HSE-Thema übersehen wird und Fristen eingehalten werden.</p>

    <h2>Welche Leistungskennzahlen erfasst Safety2?</h2>
    <p>Safety2 misst z. B. die Anzahl abgeschlossener Anweisungen, Inspektionshäufigkeit und Risikotrends – für kontinuierliche Optimierung Ihrer Prozesse.</p>

    <h2>Welche zukünftigen Funktionen sind geplant?</h2>
    <p>Wir entwickeln KI-gestützte Tools zur Automatisierung von Workflows, frühzeitigen Risikoerkennung und präventivem HSE-Management – für weniger Papierkram und mehr Sicherheit.</p>

    <h2>Für wen ist Safety2 geeignet?</h2>
    <p>Safety2 eignet sich für kleine Betriebe und multinationale Unternehmen. Die Benutzeroberfläche ist intuitiv, mehrsprachig und für echte Nutzer gemacht – nicht nur für Administratoren.</p>

    <h2>Wie benutzerfreundlich ist Safety2?</h2>
    <p>Safety2 benötigt keine Schulungsmarathons oder Handbücher. Die Plattform ist so gestaltet, dass sich Nutzer sofort zurechtfinden – damit sie sich auf Sicherheit konzentrieren können, nicht auf Software.</p>
  </section>
</noscript>




  
    </section>
  </>
    
);
}
