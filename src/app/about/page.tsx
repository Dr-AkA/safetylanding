import CallToActionWrapper from "@/components/CookieConsentBannerWrapper";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Head from "next/head";
import {About} from "@/sections/AboutUs";
import { useTranslations } from 'next-intl';
import ehsbasistab from '@/assets/ehsbasistab.jpg';
import Image from 'next/image';

export default function aboutUs() {
  const t = useTranslations('aboutUs');
  return (<>
  
    <Head>
      <title>Safety2</title>

      <meta name="description" content="Simplified creation through existing or configurable text modules and symbols. Automated creation through intelligent linking of modules."/>
      <meta property="og:title" content="operating instructions" />
      <meta property="og:description" content="Simplified creation through existing or configurable text modules and symbols. Automated creation through intelligent linking of modules." />
      <meta property="og:image" content="https://safety-doors.com/wp-content/uploads/2023/08/safety2_logo.svg" />
      <meta name="linkedin:card" content="" />
      

    </Head>
    
    <Header/>
    <main
      className="min-h-[calc(100vh-56px)] w-full flex flex-col items-center justify-center bg-[#101820] py-20 px-2"
      style={{ minHeight: 'calc(100vh - 56px)' }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-16">
        <div className="flex-shrink-0 w-full md:w-[320px] flex justify-center md:justify-start mb-10 md:mb-0">
          <Image src={ehsbasistab} alt="EHS-Basis" width={320} className="w-[320px] h-auto rounded-2xl shadow-lg object-cover" />
        </div>
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-left">{t('title')}</h1>
          <div className="text-xl md:text-2xl text-white leading-relaxed text-left space-y-6 tracking-wide max-w-2xl" style={{lineHeight: '2.1', letterSpacing: '0.02em'}}>
            {t('description').split('\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    
    </>);
}
