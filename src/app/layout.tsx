import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
const dmSans = DM_Sans({ subsets: ["latin"] });

export async function generateStaticParams()
{
  return [{locale:'en'},{locale:'fr'},{locale:'es'},{locale:'pl'},{locale:'de'},{locale:'ar'}]
}

export const metadata: Metadata = {
  title: "Safety",
  description: "Safety group",
};



export default function RootLayout({
  children,
  params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params:{locale:string}
}>) {
  return (

    
    <html lang={locale} className="relative">
      
      
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    

    </html>
    
  );
}
