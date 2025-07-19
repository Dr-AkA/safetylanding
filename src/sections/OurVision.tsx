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
  return (
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
    </section>
  );
}
