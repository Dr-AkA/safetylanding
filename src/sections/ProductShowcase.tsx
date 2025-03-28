import Betriebanweisung from '@/assets/betriebsanweisung.png';
import Placeholder from '@/assets/placeHolder.webp';
import Basis from '@/assets/EHS-Basis.png';
import Image from 'next/image';
export const ProductShowcase = () => {
  return <section className='bg-gradient-to-b from-[#D@DCFF] to-[#FFFFFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className='max-w-[540px] mx-auto'>
      <div className='flex justify-center'>
      <div className='tag'>Sicherheit zuerst, Compliance stets.</div>
      </div>
      <h2 className='section-title mt-5'> a more effective to make sure everything is safe</h2>
      <p className='section-paragraph mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quam? Nihil, id quasi maiores rerum laboriosam corporis ad necessitatibus itaque odit laudantium sed animi dolorum sint esse sit quis debitis.
      </p>
      </div>
    <div className='relative'>
    <Image src={Placeholder} alt="Betriebsanweisung nach Gefahrstoffverordnung" className=' mt-10 '/>
    <Image src={Betriebanweisung} alt='Betriebsanweisung nach Gefahrstoffverordnung' className='hidden md:block absolute -right-36 -top-32' height={200} width={190}/>
    <Image src={Basis} alt='EHS System Implementierung' height={200} width={190} className='hidden md:block absolute bottom-30 -left-36' />
    </div>
    </div>
  </section>;
};
