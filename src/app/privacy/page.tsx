import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Head from "next/head";
import PrivacyPolicy from "@/sections/Privacy";

export default function privacy()
{
    return(<>
 <Head>
      <title>Safety2</title>

      <meta name="description" content="Safety2 Privacy"/>
      <meta property="og:title" content="Safety2 Privacy" />
      <meta property="og:description" content="this page clarifies the usage of data by safety" />
      <meta property="og:image" content="https://safety-doors.com/wp-content/uploads/2023/08/safety2_logo.svg" />
      <meta name="linkedin:card" content="" />
      

    </Head>
    <Header/>
    <PrivacyPolicy/>
    <Footer/>


   </> );

}
