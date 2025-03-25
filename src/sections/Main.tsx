import Arrowright from '@/assets/arrow-right.svg';
//import SafetyLogo from '@/assets/safety.png';
import PlaceHolder from '@/assets/placeHolder.webp';
import Image from 'next/image';

export const Main = () => {
  return (<section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7e8402,#c8d302_90%)] overflow-x-clip'>
    <div className="container">
      <div className='md:flex items-center'>
      <div className='w-[478px]'>
      <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is Here</div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-[#545721] to-black text-transparent bg-clip-text mt-6">Safety²  Enterprise Compliance with Confidence</h1>
      
      <p className="text-xl text-black tracking-tight mt-6 jus">Transform risk management with our adaptable, cloud-based EHS platform that ensures regulatory excellence while providing the secure foundation your organization needs to thrive.
         Our modular architecture adapts precisely to your company's unique requirements, allowing you to implement only the components essential to your operations.
      Safety² seamlessly integrates with your existing workflows, 
      offering customizable dashboards, reporting templates, and assessment protocols tailored to your industry's specific challenges. Experience the perfect balance of regulatory precision and operational efficiency, all while maintaining comprehensive audit trails that demonstrate your commitment to compliance.</p>
      
   <div className="flex gap-1 items-center mt-[30px]">
    <button className="btn btn-primary ">Request a Demo</button>
    <button className="btn btn-text gap-1"><span>Learn More</span>
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
