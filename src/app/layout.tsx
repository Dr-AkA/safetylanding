import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
const dmSans = DM_Sans({ subsets: ["latin"] });

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
  ]
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
      
      
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <NextIntlClientProvider>
        {children}
        </NextIntlClientProvider>
      </body>
    

    </html>
    
  );
}
