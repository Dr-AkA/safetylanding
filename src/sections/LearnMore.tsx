import {getTranslations} from 'next-intl/server';
import Image from 'next/image';
import Placeholder from '@/assets/bundle.webp';
import Link from 'next/link';
import Head from 'next/head';
export const LearnMore = async () => {
  const t = await getTranslations('learn');
  
  return (
<>
<Head>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://safety-doors.com#en",
  "inLanguage": "en",
  "name": "Smarter, Safer Workplaces — Powered by Data",
  "description": "A unified HSE platform that enables safety, compliance, and risk control via dashboards, real-time reporting, smart alerts, and training management.",
  "url": "https://safety-doors.com/en",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "EUR",
    "description": "Schedule a demo to explore pricing options."
  },
  "creator": {
    "@type": "Organization",
    "name": "Safety Doors GmbH",
    "url": "https://safety-doors.com"
  },
  "featureList": [
    "Real-time incident reporting from any device",
    "Customizable audits and smart inspection tools",
    "ISO, OSHA, and regulatory compliance tracking",
    "Integrated safety training management",
    "Predictive analytics with automated alerts"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Safety, Compliance, and Operations Teams",
    "geographicArea": {
      "@type": "Place",
      "name": "Global"
    }
  },
  "industry": ["Construction", "Energy", "Manufacturing", "Logistics", "Industrial Operations"]
}
`}} />

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://safety-doors.com#de",
  "inLanguage": "de",
  "name": "Intelligentere, Sicherere Arbeitsplätze — Datenbasiert",
  "description": "Eine zentrale HSE-Plattform für Sicherheits-, Compliance- und Risikomanagement mit Dashboards, Echtzeitberichten, automatischen Warnungen und Schulungen.",
  "url": "https://safety-doors.com/de",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "EUR",
    "description": "Demo vereinbaren, um Preise zu besprechen."
  },
  "creator": {
    "@type": "Organization",
    "name": "Safety Doors GmbH",
    "url": "https://safety-doors.com"
  },
  "featureList": [
    "Echtzeit-Vorfallberichte von jedem Gerät",
    "Anpassbare Audits und smarte Inspektionstools",
    "ISO-, OSHA- und regulatorische Konformitätsverfolgung",
    "Integriertes Sicherheits-Schulungsmanagement",
    "Prädiktive Analysen mit automatischen Warnungen"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Sicherheits-, Compliance- und Betriebsteams",
    "geographicArea": {
      "@type": "Place",
      "name": "Weltweit"
    }
  },
  "industry": ["Bau", "Energie", "Fertigung", "Logistik", "Industriebetriebe"]
}
`}} />

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://safety-doors.com#es",
  "inLanguage": "es",
  "name": "Lugares de Trabajo Más Inteligentes y Seguros — Impulsados por Datos",
  "description": "Plataforma HSE unificada que permite gestionar la seguridad, el cumplimiento normativo y los riesgos mediante tableros, alertas inteligentes y capacitación.",
  "url": "https://safety-doors.com/es",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "EUR",
    "description": "Solicita una demo para conocer los precios."
  },
  "creator": {
    "@type": "Organization",
    "name": "Safety Doors GmbH",
    "url": "https://safety-doors.com"
  },
  "featureList": [
    "Informes de incidentes en tiempo real desde cualquier dispositivo",
    "Auditorías personalizables y herramientas inteligentes",
    "Seguimiento del cumplimiento con normativas como ISO y OSHA",
    "Gestión de formación en seguridad integrada",
    "Análisis predictivo y alertas automáticas"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Equipos de Seguridad, Cumplimiento y Operaciones",
    "geographicArea": {
      "@type": "Place",
      "name": "Global"
    }
  },
  "industry": ["Construcción", "Energía", "Manufactura", "Logística", "Operaciones industriales"]
}
`}} />

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://safety-doors.com#fr",
  "inLanguage": "fr",
  "name": "Des lieux de travail plus intelligents et plus sûrs — alimentés par les données",
  "description": "Une plateforme HSE unifiée qui permet de gérer la sécurité, la conformité et les risques avec des tableaux de bord, des alertes intelligentes et des modules de formation.",
  "url": "https://safety-doors.com/fr",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "EUR",
    "description": "Planifiez une démo pour découvrir les options tarifaires."
  },
  "creator": {
    "@type": "Organization",
    "name": "Safety Doors GmbH",
    "url": "https://safety-doors.com"
  },
  "featureList": [
    "Rapports d'incidents en temps réel sur tout appareil",
    "Outils d'audit personnalisables et inspections intelligentes",
    "Suivi de conformité ISO, OSHA et réglementaire",
    "Gestion de la formation à la sécurité intégrée",
    "Analytique prédictive avec alertes automatiques"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Équipes de sécurité, conformité et opérations",
    "geographicArea": {
      "@type": "Place",
      "name": "Mondial"
    }
  },
  "industry": ["Construction", "Énergie", "Fabrication", "Logistique", "Opérations industrielles"]
}
`}} />

</Head>
<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
       
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">
               {t('headline')}
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
               {t('intro')}
              </p>
            </div>
          </div>
        </div>
       <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
       <Image
        alt=""
        src={Placeholder}
        layout="responsive"
        width={900}
        height={900}
        className="rounded-xl bg-gray-200 shadow-xl ring-1 ring-gray-150/10"
        />
</div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <h2> <strong className='mt-2 text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'> {t('subsection1')}</strong></h2>
             <ul role="list" className="mt-8 space-y-8 text-gray-600">
  <li className="flex gap-x-3">
    <span>•</span>
    <span>
      <strong className="font-semibold text-gray-900">{t('subsection1title1')}</strong> {t('subsection1bullet1')}
    </span>
  </li>

  <li className="flex gap-x-3">
    <span>•</span>
    <span>
      <strong className="font-semibold text-gray-900">{t('subsection1title2')}</strong> {t('subsection1bullet2')}
    </span>
  </li>

  <li className="flex gap-x-3">
    <span>•</span>
    <span>
      <strong className="font-semibold text-gray-900">{t('subsection1title3')}</strong> {t('subsection1bullet3')}
    </span>
  </li>

  <li className="flex gap-x-3">
    <span>•</span>
    <span>
      <strong className="font-semibold text-gray-900">{t('subsection1title4')}</strong> {t('subsection1bullet4')}
    </span>
  </li>

    <li className="flex gap-x-3">
     <span>•</span>
     <span>
       <strong className="font-semibold text-gray-900">{t('subsection1title5')}</strong> {t('subsection1bullet5')}
         </span>
        </li>
        </ul>
              <h2 className="mt-8  text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              <strong>  {t('subsection2title1')}</strong>
              </h2>
            
              <p className="mt-6">
               {t('subsection2description')}
              </p>

             <h2 className="mt-8  text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              <strong>  {t('subsection3title1')}</strong>
              </h2>

                <ul role="list" className="mt-8 space-y-8 text-gray-700">
                <li className="flex gap-x-3">
                 <span>•</span>
                <span>{t('subsection3bullet1')}</span>
                </li>
                <li className="flex gap-x-3">
               <span>•</span>
              <span>{t('subsection3bullet2')}</span>
              </li>
              <li className="flex gap-x-3">
              <span>•</span>
             <span>{t('subsection3bullet3')}</span>
             </li>
             <li className="flex gap-x-3">
             <span>•</span>
             <span>{t('subsection3bullet4')}</span>
             </li>
            </ul>

             <h2 className="mt-8  text-lg font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              <strong>  {t('subsection4title')}</strong>
              </h2>
              <ol role="list" className="mt-8 space-y-8 text-gray-700">
                <li className="flex gap-x-3">
                 <span>•</span>
                <span>{t('subsection4bullet1')}</span>
                </li>
                <li className="flex gap-x-3">
               <span>•</span>
              <span>{t('subsection4bullet2')}</span>
              </li>
              <li className="flex gap-x-3">
              <span>•</span>
             <span>{t('subsection4bullet3')}</span>
             </li>
            
            </ol>


           



            </div>
          </div>
        </div>
      </div>
    </div>


        <section className="bg-gradient-to-b from-[#fefeff] to-[#f4f6ff] py-24">
      <div className="container">
        <div className='section-heading'>
        <h2 className="section-title">{t('cta')}</h2>
       
        </div>
        <div className="flex gap-2 mt-10 justify-center">
         
          <Link href="/contact" className="btn btn-primary">
          {t('cta1')}
          </Link>
       
      

         
         
        </div>
      </div>
    </section>



   

<noscript>
  <div>
    Smarter, Safer Workplaces — Powered by Data.
    Our HSE platform empowers safety and compliance teams to track incidents, audit operations, train staff, and stay aligned with ISO, OSHA, and other regulations.
    Core Features: Real-time incident reporting, customizable audits, compliance tracking, training modules, analytics, and alerts.
    Built for: Organizations in construction, energy, logistics, and manufacturing.
    Benefits: Reduce human error, cut response time, prevent costly fines, and prove compliance instantly.
    Actions: Capture data, analyze trends, and automate responses.
    Schedule a demo to see how it works.
  </div>
</noscript>


</>


  )
}
