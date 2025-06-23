'use client'; // Add this if using Next.js App Router

import { useState } from 'react';
import Logo from '@/assets/safety2_logo.svg';
import MenuIcon from '@/assets/menu.svg';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "uns" },
  { href: "/#module", label: "modules" },
  { href: "/vision", label: "vision" },
  { href: "#", label: "contact" },
  { href: "/career", label: "career" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('HomePage');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#101820] border-b border-[#232b36]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-semibold text-white hidden sm:inline-block">Safety²</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2 xl:gap-6 items-center ml-auto">
          {navLinks.map((link) => {
            const isActive = (link.href === "/" && pathname === "/") || (link.href !== "/" && pathname.startsWith(link.href.replace('#','')));
            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={link.href.includes('#')}
                className={`px-3 py-2 text-base font-medium text-white/90 border-b-2 border-transparent hover:border-white/40 transition-all
                  ${isActive ? 'border-white' : ''}
                `}
              >
                {t(link.label)}
              </Link>
            );
          })}
        </nav>
        {/* Demo Button */}
        <Link href="#demo" className="hidden lg:inline-block ml-6 px-5 py-2 rounded-md bg-white text-[#101820] font-semibold text-base border border-white/20 hover:bg-[#eaeaea] transition-colors">
          {t('demo')}
        </Link>
        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden p-2 rounded-md text-white focus:outline-none ml-auto">
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>
      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setMenuOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-72 bg-[#101820] border-l border-[#232b36] flex flex-col p-6 gap-2 animate-slide-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setMenuOpen(false)} className="self-end text-white text-3xl mb-4">&times;</button>
            {navLinks.map((link) => {
              const isActive = (link.href === "/" && pathname === "/") || (link.href !== "/" && pathname.startsWith(link.href.replace('#','')));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={link.href.includes('#')}
                  className={`block px-2 py-3 text-lg font-medium text-white/90 border-b border-[#232b36] hover:bg-[#181f2a] rounded transition-all ${isActive ? 'underline underline-offset-4' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.label)}
                </Link>
              );
            })}
            <Link href="#demo" className="mt-6 px-5 py-3 rounded-md bg-white text-[#101820] font-semibold text-lg border border-white/20 hover:bg-[#eaeaea] transition-colors text-center" onClick={() => setMenuOpen(false)}>
              {t('demo')}
            </Link>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.25s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </header>
  );
};