"use client";
import {Header} from "@/sections/Header";
// import { Main } from "@/sections/Main";
import Head from "next/head";
import { useEffect, useState } from "react";
import modulesData from '../../messages/de.json';
// import {LogoTicker} from '@/sections/LogoTicker';
// import ProductShowcaseWrapper from "@/components/ProductShowCaseWrapper"
// import ModuleWrapper from '@/components/ModuleWrapper';
// import CallToActionWrapper from '@/components/CallToActionWrapper';
// import {Footer} from '@/sections/Footer';

const centerIcon = { src: "/assets/Module/EHS-Basis (1).webp", alt: "EHS-Basis", key: "EHS-Basis", top: "50%", left: "50%" };
const surroundingIcons = [
  { src: "/assets/Module/betriebsanweisung.webp", alt: "Betriebsanweisung", key: "Betriebsanweisung" },
  { src: "/assets/Module/Qualifkationen.webp", alt: "Qualifkationen", key: "Qualifkationen" },
  { src: "/assets/Module/Gefährdungsbeurteilungen.webp", alt: "Gefahrdungsbeurteilungen", key: "Gefahrdungsbeurteilungen" },
  { src: "/assets/Module/Maßnahmen.webp", alt: "Maßnahmen", key: "Maßnahmen" },
  { src: "/assets/Module/prufwartungsplanner.webp", alt: "Prüf & Wartungsplaner", key: "Prüf & Wartungsplaner" },
  { src: "/assets/Module/Unfallmanagement.webp", alt: "Umfallmanagement", key: "Umfallmanagement" },
  { src: "/assets/Module/Unterweisungen.webp", alt: "Digitale Unterweisungen", key: "Digitale Unterweisungen" },
  { src: "/assets/Module/boebachtung.png", alt: "Sicherheits-Beobachtungen", key: "Sicherheits-Beobachtungen" },
];

// Mapping von Modul-Key zu großem Bild (Foto)
const modulePhotos: Record<string, string> = {
  'EHS-Basis': '/src/assets/ehsbasistab.jpg',
  'Betriebsanweisung': '/src/assets/betriebanweisung1.jpg',
  'Qualifkationen': '/src/assets/qualifcationtab.jpg',
  'Gefahrdungsbeurteilungen': '/src/assets/gefahr1.jpg',
  'Maßnahmen': '/src/assets/Massnahmen-PC.png',
  'Prüf & Wartungsplaner': '/src/assets/pruf.jpg',
  'Umfallmanagement': '/src/assets/umfalmanagement.jpg',
  'Digitale Unterweisungen': '/src/assets/unterweisung.jpg',
  'Sicherheits-Beobachtungen': '/src/assets/boebachtung.jpg',
};

function getCirclePosition(index: number, total: number, radiusPercent: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const r = radiusPercent;
  const top = 50 + r * Math.sin(angle);
  const left = 50 + r * Math.cos(angle);
  return { top: `${top}%`, left: `${left}%` };
}

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [spotlight, setSpotlight] = useState<{x: number, y: number} | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Info-Panel Daten holen
  let info = null;
  let infoIcon = null;
  if (selected) {
    const allIcons = [centerIcon, ...surroundingIcons];
    infoIcon = allIcons.find(i => i.key === selected);
    const key = selected as keyof typeof modulesData.Modules;
    info = modulesData.Modules[key];
  }

  // Panel Animation steuern
  useEffect(() => {
    if (selected) {
      setShowPanel(true);
    } else {
      // Panel mit Animation ausblenden
      const timeout = setTimeout(() => setShowPanel(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [selected]);

  return (
    <>
      <Head>
        <title>BetriebAnweisung</title>
        <meta name="description" content="Vereinfachte Erstellung durch vorhandene oder konfigurierbare Textbausteine und Symbole. Automatisierte Erstellung durch die intelligente Verknüpfung der Module."/>
        <meta property="og:title" content="BetriebAnweisung" />
        <meta property="og:description" content="Vereinfachte Erstellung durch vorhandene oder konfigurierbare Textbausteine und Symbole. Automatisierte Erstellung durch die intelligente Verknüpfung der Module." />
        <meta property="og:image" content="https://safety-doors.com/wp-content/uploads/2023/08/safety2_logo.svg" />
        <meta name="linkedin:card" content="" />
      </Head>
      {/* Custom Keyframes für das Wippen und Panel */}
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .fade-in-scale {
          animation: fadeInScale 0.3s cubic-bezier(.4,0,.2,1);
        }
        .fade-out-scale {
          animation: fadeOutScale 0.25s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOutScale {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.95); }
        }
      `}</style>
      <Header/>
      <main
        className="flex items-center justify-center"
        style={{
          minHeight: 'calc(100vh - 56px)',
          height: 'calc(100vh - 56px)',
          width: '100vw',
          backgroundColor: '#000D14',
          backgroundImage: 'url(/assets/Module/HomePage.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dashboard bleibt immer sichtbar, wird aber bei Info-Panel ausgegraut und geblurrt */}
        <div
          className={`relative w-[80vw] h-[80vw] max-w-[950px] max-h-[950px] min-w-[320px] min-h-[320px] transition-all duration-300 ${selected ? 'opacity-40 blur-sm pointer-events-none' : ''}`}
          style={{ aspectRatio: '1/1' }}
          onMouseMove={e => {
            const rect = (e.target as HTMLDivElement).getBoundingClientRect();
            setSpotlight({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          }}
          onMouseLeave={() => setSpotlight(null)}
        >
          {/* Spotlight-Effekt */}
          {spotlight && !hovered && (
            <div
              className="pointer-events-none absolute z-30"
              style={{
                left: spotlight.x - 60,
                top: spotlight.y - 60,
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 70%, transparent 100%)',
                boxShadow: '0 0 32px 8px rgba(255,255,255,0.10)',
                pointerEvents: 'none',
              }}
            />
          )}
          {/* Mittleres Icon */}
          <img
            src={centerIcon.src}
            alt={centerIcon.alt}
            className={`absolute w-28 h-28 object-contain z-10 transition duration-200 ${hovered === centerIcon.alt ? 'brightness-75' : ''}`}
            style={{
              top: centerIcon.top,
              left: centerIcon.left,
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHovered(centerIcon.alt)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(centerIcon.key)}
          />
          {hovered === centerIcon.alt && (
            <div
              className="absolute z-20 left-1/2 top-[38%] -translate-x-1/2 -translate-y-full px-3 py-1 bg-black/80 text-white text-sm rounded shadow-lg pointer-events-none"
            >
              {centerIcon.alt}
            </div>
          )}
          {/* Kreisförmig angeordnete Icons mit Animation */}
          {surroundingIcons.map((icon, i) => {
            const pos = getCirclePosition(i, surroundingIcons.length, 35); // 35% Radius
            const delay = `${i * 0.18}s`;
            return (
              <div
                key={icon.alt}
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className={`w-24 h-24 object-contain transition duration-200 ${hovered === icon.alt ? 'brightness-75' : ''}`}
                  style={{
                    cursor: 'pointer',
                    animation: `floatY 3s ease-in-out infinite`,
                    animationDelay: delay,
                  }}
                  onMouseEnter={() => setHovered(icon.alt)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(icon.key)}
                />
                {hovered === icon.alt && (
                  <div className="absolute left-1/2 -top-3 -translate-x-1/2 -translate-y-full px-3 py-1 bg-black/80 text-white text-sm rounded shadow-lg pointer-events-none whitespace-nowrap">
                    {icon.alt}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* Info-Panel als Overlay mit Animation */}
        {showPanel && info && infoIcon && (
          <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/30 transition-all duration-300`}
            style={{ pointerEvents: selected ? 'auto' : 'none' }}
          >
            <div className={`relative flex flex-col items-center justify-center bg-black/80 rounded-xl p-8 max-w-xl w-full text-white shadow-2xl ${selected ? 'fade-in-scale' : 'fade-out-scale'}`}
              style={{ minHeight: 350 }}
            >
              <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelected(null)}>&#10005;</button>
              {/* Icon für alle Module */}
              <img src={infoIcon.src} alt={infoIcon.alt} className="w-24 h-24 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{info.title}</h2>
              {"description" in info && (
                <p className="mb-4 text-base whitespace-pre-line">{info.description}</p>
              )}
              {"features" in info && info.features && (
                <div className="bg-white/10 rounded p-3 text-sm mb-2">{info.features}</div>
              )}
            </div>
          </div>
        )}
      </main>
      {/*
      <Main/>
      <LogoTicker/>
      <ProductShowcaseWrapper/>
      <div id="module" className="scroll-mt-20">
        <ModuleWrapper/>
      </div>
      <CallToActionWrapper/>
      <Footer/>
      */}
    </>
  );
}
