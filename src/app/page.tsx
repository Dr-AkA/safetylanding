import {Header} from "@/sections/Header";
import { Main } from "@/sections/Main";
import Head from "next/head";
import {LogoTicker} from '@/sections/LogoTicker';
import {ProductShowcase} from '@/sections/ProductShowcase';
import {Modules} from '@/sections/modules';
export default function Home() {
  return (<>
    <Head>
      <title>BetriebAnweisung</title>
      <meta name="description" content="Vereinfachte Erstellung durch vorhandene oder konfigurierbare Textbausteine und Symbole. Automatisierte Erstellung durch die intelligente Verknüpfung der Module."/>
      <meta property="og:title" content="BetriebAnweisung" />
      <meta property="og:description" content="Vereinfachte Erstellung durch vorhandene oder konfigurierbare Textbausteine und Symbole. Automatisierte Erstellung durch die intelligente Verknüpfung der Module." />
      <meta property="og:image" content="https://safety-doors.com/wp-content/uploads/2023/08/safety2_logo.svg" />
      <meta name="twitter:card" content="" />
      

    </Head>
    <Header/>
    <Main/>
    <LogoTicker/>
    <ProductShowcase/>
    <Modules/>
    
    </>);
}
