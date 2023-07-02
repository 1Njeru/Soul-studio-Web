import React, { useState } from 'react';
 
//import icons
 import { IoMdClose } from 'react-icons/io'
 import { CgMenuRight } from 'react-icons/cg'

 import { Link } from 'react-router-dom'

 import { motion } from 'framer-motion'

 //menu variants
 const menuVariants = {
    hidden: {
        x: '100%',
    },
    show: {
        x: '30%',
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
 };

const MobileNav = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='text-tertiary xl:hidden '>
    {/* nav open button */}
    <div onClick={()=> setOpenMenu(true)} className='text-3xl cursor-pointer'> 
    <CgMenuRight />
    </div>

    {/*menu bar */}
    <motion.div 
    variants={menuVariants}
    initial='hidden'
    animate= { openMenu ? 'show' : ''}

    className='bg-white shadow-2xl w-[400px] absolute top-2
    right-0 max-wxs h-screen z-20 '>

    {/**icon */}
    <div onClick={() => setOpenMenu(false)} className='text-4xl 
    absolute z-30 left-4 top-14 
    text-primary cursor-pointer'>
    <IoMdClose />
    </div>


    {/*mune list */}
    
    <ul className=' grid justify-center   pt-[50%]
     font-tertiary font-bold
     text-2xl'>

    <li className='pb-4'>
    <Link to='/'>Home</Link>
    </li>

    <li className='pb-4'>
    <Link to='/about'>About</Link>
    </li>

    <li className='pb-4'>
    <Link to='/portfolio'>Portfolio</Link>
    </li>

    <li className='pb-4'>
    <Link to='/contact'>Contact</Link>
    </li>

    </ul>
    
    </motion.div>
    </nav>
  )
}

export default MobileNav;