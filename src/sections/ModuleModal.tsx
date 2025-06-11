'use client';
import Image from 'next/image';
import { ComponentType } from 'react';

type ModuleData = {
  title: string;
  Logo: string | ComponentType<{ className?: string }>;
  isSvg: boolean;
  description?: string;
  features?: string[];
  screenshots?: string[];
  alt: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  moduleData: ModuleData;
};

export default function ModuleModal({ isOpen, onClose, moduleData }: Props) {
  if (!isOpen) return null;

  const { title, Logo, isSvg, description, features, screenshots, alt } = moduleData;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6 gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {isSvg ? (
              <Logo className="h-12 w-12 flex-shrink-0" />
            ) : (
              <Image src={Logo as string} alt={alt} className="h-12 w-12" height={48} width={48} />
            )}
            <h2 className="text-xl font-bold "  style={{
      width: '100%',
      minWidth: 0,
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
      whiteSpace: 'normal',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}>{title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 flex-shrink-0 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-gray-700 mb-6">{description || "Keine Beschreibung verfügbar."}</p>
          </div>

          <div className="lg:w-1/2">
            {screenshots && screenshots.length > 0 ? (
              <Image
                src={screenshots[0]}
                alt={`${title} screenshot`}
                className="w-full rounded-lg shadow-md"
                width={800}
                height={500}
              />
            ) : (
              <div className="bg-gray-100 flex items-center justify-center h-64 rounded-lg">
                <p className="text-gray-500">Kein Screenshot verfügbar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
