import Betriebanweisung from '@/assets/betriebsanweisung.png';
import EHS from '@/assets/EHS-Basis.png';
import Qualifkationen from '@/assets/Qualifkationen.png';
import Gefahrdungsbeurteilungen from '@/assets/Gefährdungsbeurteilungen.png';
import Massnamen from '@/assets/Maßnahmen.png';
import Prufwartungsplan from '@/assets/prufwartungsplanner.png';
import UmfalManement from '@/assets/Unfallmanagement.png';
import Unterweisung from '@/assets/Unterweisungen.png';
import Image  from 'next/image';
const fachmodules = [
  {
    title: "EHS-Basis",
    buttonText: "Mehr erfahren",
    logo:EHS,
    alt:'Umwelt',
    features: [
      ""
    ],
  },
  {
    title: "Betriebanweisung",
    buttonText: "Mehr ehrfahren",
    logo:Betriebanweisung,
    alt:'Gesundheit & Sicherheit',
   features: [
     ""
    ],
  },
  {
    title: "Qualifkationen",
    buttonText: "Mehr erfahren",
    logo:Qualifkationen,
    alt:'Compliance',
    features: [
     ""
    ],
  },
  {
    title: "Gefahrdungsbeurteilungen",
    buttonText: "Mehr erfahren",
    logo:Gefahrdungsbeurteilungen,
    alt:'Risikomanagement',
    features: [
     ""
    ],
  },
  {
    title: "Massnamen",
    buttonText: "Mehr erfahren",
    logo:Massnamen,
    alt:'Audit-Management',
    features: [
      ""
    ],
  },
  {
    title: "Prufwartungsplan",
    buttonText: "Mehr erfahren",
    logo:Prufwartungsplan,
    alt:'Gesetzliche Vorschriften',
    features: [
    ""
    ],
  },
  {
    title: "UmfalManement",
    buttonText: "Mehr erfahren",
    logo:UmfalManement,
    alt:'Vorfallmanagement',
    features: [
      ""
    ],
  },
  {
    title: "Unterweisung",
    buttonText: "Mehr erfahren",
    logo:Unterweisung,
    alt:'Betriebliches Gesundheitsmanagement (BGM)',
    features: [
      ""
    ],
  },
  
];

export const Modules = () => {
  
  
  return <section className="mt-10 py-24">
    <div className="container">
      <h2 className="section-title">Fach Modules</h2>
      <p className="section-paragraph mt-5"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos recusandae possimus soluta veniam corporis quos accusantium. A pariatur magni iure. Illum consequuntur a quisquam optio, iste quae ratione nam perferendis?</p>
      <div className="flex justify-center items-stretch flex-wrap gap-10 mt-10">
  {fachmodules.map(({ title, buttonText, features, logo, alt }) => (
    <div className="p-10 mt-5 border border-[#77B596]/50 rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center w-[300px] flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-bold text-black/70">{title}</h3>
      <Image src={logo} alt={alt} className="h-[100px] w-[90px] mx-auto"/>
      <div className="flex-grow">
        <ul className="flex flex-col gap-5 mt-8">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex items-center gap-4 text-center">{feature}</li>
          ))}
        </ul>
      </div>
      <button className="btn btn-primary w-full mt-[30px]">{buttonText}</button>
    </div>
  ))}
</div>

    </div>
  </section>;
};
