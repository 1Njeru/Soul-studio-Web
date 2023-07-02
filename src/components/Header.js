import React from 'react'
import Socials from './Socials'
import MobileNav from './MobileNav'

//import link
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='relative bg-gray-500 w-full px-[20px]
    lg:px-[100px] z-30 h-[70px] lg:h-[90px] flex
     items-center '>
     <div className='flex flex-col lg:flex-row lg:items-center
     w-full justify-between'>
     
     {/* logo */}
     <p className='btn flex justify-center h-[40px] max-w-[200px] text-xl
     bg-gradient-to-b
     from-lime-600  to-black px-6  font-primary
     font-bold'>
      <Link to={'/'} className=' hover:text-primary
     transition'>Soul Studio</Link>
     </p>

     {/*nav initially hidden - show on desktop mode */}
     <nav className='hidden lg:flex gap-x-12 font-semibold text-Black'>

     <Link to={'/'} className=' hover:text-white
     transition'>Home</Link>  
    
     <Link to={'/about'} className=' hover:text-white
     transition'>About</Link>
     
     <Link to={'/portfolio'} className=' hover:text-white
     transition'>Portfolio</Link>
     
     <Link to={'/contact'} className=' hover:text-white
     transition'>Contact</Link>
     </nav>

    

     </div>

      {/*socials */}
      <Socials />


     {/*mobile nav */}
     <MobileNav />

    
     </header>
  )
}

export default Header;