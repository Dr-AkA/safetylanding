import CallToActionWrapper from "@/components/CookieConsentBannerWrapper";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Head from "next/head";
import { LearnMore } from "@/sections/LearnMore";

export default function learnMore() {
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
    <LearnMore/>
    <CallToActionWrapper/>
    <Footer/>
    
    </>);
}