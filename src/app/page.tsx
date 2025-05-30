import {Header} from "@/sections/Header";
import { Main } from "@/sections/Main";
import Head from "next/head";
import {LogoTicker} from '@/sections/LogoTicker';
import ProductShowcaseWrapper from "@/components/ProductShowCaseWrapper"
import ModuleWrapper from '@/components/ModuleWrapper';
import CallToActionWrapper from '@/components/CallToActionWrapper';
import {Footer} from '@/sections/Footer';

export default  function Home() {
 
  return (<>
  
    <Head>
      <title>BetriebAnweisung</title>

      <meta name="description" content="Vereinfachte Erstellung durch vorhandene oder konfigurierbare Textbausteine und Symbole. Automatisierte Erstellung durch die intelligente Verknüpfung der Module."/>
      <meta property="og:title" content="BetriebAnweisung" />
      <meta property="og:description" content="Vereinfachte Erstellung durch vorhandene oder konfigurierbare Textbausteine und Symbole. Automatisierte Erstellung durch die intelligente Verknüpfung der Module." />
      <meta property="og:image" content="https://safety-doors.com/wp-content/uploads/2023/08/safety2_logo.svg" />
      <meta name="linkedin:card" content="" />
      

    </Head>
    
    <Header/>
    <Main/>
    <LogoTicker/>
    <ProductShowcaseWrapper/>
    <div id="module" className="scroll-mt-20">
    <ModuleWrapper/>
    </div>
    <CallToActionWrapper/>
    <Footer/>
    
    </>);
}
