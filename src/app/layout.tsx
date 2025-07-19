// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { LanguageDetector } from '@/components/LanguageDetector';
import dynamic from "next/dynamic";
import ClientLayout from "@/components/ClientLayout"; 
import icon from "@/app/icon.svg";
import ChatbotWrapper from "@/components/ChatBotWrapper";

const dmSans = DM_Sans({ subsets: ["latin"] });


const CookieConsentBanner = dynamic(() => import('@/components/CookieConsentBannerWrapper'), { ssr: false });

export const metadata: Metadata = {
  title: "Safety",
  description: "Safety group",
  keywords: [
    'gefahrstoffe', 'gefährdungsbeurteilungen gefahrstoffe', 'ehs software', 'betriebanweisung',
    'ehs safety software', 'software ehs', 'ehs management systems', 'ehs management software',
    'environmental health and safety management software', 'health and safety software',
    'best ehs software', 'ehs compliance software', 'top 10 ehs software', 'health & safety software',
    'iso19011', 'audit managerial', 'iso 27001 lead auditor', 'iso 27001 auditor',
    'audit management', 'unterweisungen', 'maßnahmen', 'Gefahrdungsbeurteilungen',
    'hse', 'hs&e', 'h&s executive', 'health safety & environment', 'hse solutions', 'hse 2',
    'health and safety executive', 'hse health and safety', 'hse health safety and environment',
    'hse uk', 'hse DE', 'hse Germany', 'hse Deutschland', 'hse planning','Safety 2.0'
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="relative">
         <head>
      
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>


      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        
        <LanguageDetector />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout>
            {children}
          </ClientLayout>
         <ChatbotWrapper/>
        </NextIntlClientProvider>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
