import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/safety2_logo.svg';
import MenuIcon from '@/assets/menu.svg';
export const Header = () => {
  return <header className='sticky top-0 backdrop-blur-sm z-20'>
  <div className="flex justify-center items-center py-3 bg-[#c8d400] text-black text-sm gap-3">
    <p className='text-black/60 hidden md:block'>Safety First, Compliance Always.</p>
    <div className='inline-flex items-center gap-1'>
    <p>Get a Demo Today For Free</p>
    
    <ArrowRight className="h-4 w-4 justify-center items-center"/>
    </div>
  </div>
  <div className='py-5'>
    <div className="container">
      <div className="flex justify-between items-center">
  <Logo className="h-12 w-13"/>
  <MenuIcon  className="h-7 w-7 md:hidden"/>
  <nav className='hidden md:flex gap-6 text-black/60 items-center'>
    <a href='#'>About</a>
    <a href='#'>Features</a>
    <a href='#'>Help</a>
    <a href='#'>Contact</a>
    <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Get a Demo Today</button>

  </nav>
  </div>
  </div>
  </div>
  </header>;

};
