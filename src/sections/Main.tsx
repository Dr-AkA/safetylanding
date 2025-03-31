import Arrowright from '@/assets/arrow-right.svg';
//import SafetyLogo from '@/assets/safety.png';
import PlaceHolder from '@/assets/mock.jpg';
import Image from 'next/image';
import cylinderImage from '@/assets/cylinder.png';
export const Main = () => {
  return (<section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_80%_at_bottom_right,white,black_90%)] overflow-x-clip'>
    <div className="container">
      <div className='md:flex items-center'>
      <div className='w-[478px]'>
      <div className="tag">Version 2.0 is Here</div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#8f8382] text-transparent bg-clip-text mt-6">Safety² Die fortschrittlichste EHS-Software für maximale Arbeitssicherheit</h1>
      
      <p className="text-xl text-white tracking-tight mt-6 jus">safety² ist die flexible, browser- und cloudbasierte EHS-Software, die sich nahtlos an Ihre Unternehmensanforderungen anpasst. Dank des modularen Aufbaus bestimmen Sie selbst, welche Funktionen Sie benötigen.
      Revisionssicher, normgerecht und stets auf dem neuesten Stand – für ein sicheres Arbeitsumfeld, das keine Kompromisse macht.</p>
   <div className="flex gap-1 items-center mt-[30px]">
    <button className="btn btn-primary ">Demo anfordern</button>
    <button className="btn btn-text gap-1 text-white/90"><span>Mehr erfahren</span>
    <Arrowright className="h-5 w-5"/></button>
    </div>
    </div>
    <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative h-[300px] w-full'>
      <Image src={PlaceHolder} alt='gefahrbeurteilung' className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6 object-contain h-full w-auto'/> 
     </div>
    </div>
    </div>
  </section>);
};
