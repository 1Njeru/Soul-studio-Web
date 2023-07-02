import React from 'react'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'
import beauty from '../img/about/beauty.jpg'


import{
  ImHome,
} from 'react-icons/im'


//import link
import { Link } from 'react-router-dom'
import { FaImages } from 'react-icons/fa6'
import { ImAddressBook } from 'react-icons/im';


const About = () => {
  return (
 <motion.section
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={{transition1}}

 className='section'>

     <div className=' mx-auto lg:h-screen 
     grid justify-center lg:justify-center bg-gray-500 text-black'>
    <div className='grid grid-col items-center lg:flex-row 
     text-center pt-12 lg:pt-1 '>
    {/*text wrapper and img */}

 
   <div className='lg:flex justify-center gap-10'>

   {/*img */}
   <motion.div
   initial={{scale: 0}}
   animate={{scale: 1}}
   exit={{scale: 0}}
   transition={{transition1}}
    className='mx-auto w-[300px] lg:pt-4 '>
   <img src={beauty} alt='' />
   </motion.div>

    {/*text */}

    <motion.div 
    initial={{opacity: 0, y: '-80%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '-80%'}}
    transition={{transition1}}className=' grid justify-center'>
    <div className='flex justify-center pt-8 lg:pt-0'>
    <p className='h1 mb-4 max-w-sm  text-4xl'>
    Who Are We?</p>
    </div>

    <div className='font-semibold '>

    <p className='flex justify-center '>
    At Soul we aspire to provide </p>
    <p className='flex justify-center'>
    an enjoyable experience in front of the camera</p>
    <p className='flex justify-center'>as well as timeless photographs </p>
   <p className='flex justify-center'>that you will treasure for a lifetime</p>
   </div>


    <div className='flex justify-center pt-8'>
    <p className='h1 max-w-sm  text-4xl'>
    Our Services</p>
    </div>

    

    <div className='grid justify-center mx-auto pt-2 font-semibold '>
    <span> ~  Photoshoots & Studio Photograhy.   </span>
    <span> ~  Event Photography.  </span>
    <span> ~  Street Photography.  </span>
    <span> ~  Product Photograhy.  </span>
    <span> ~  Photo and Video Editing.  </span>
    <span> ~  Advertising & Commercial Photography.   </span>
    </div>
    

    <div className='grid gird-col pt-8 justify-center hover-2xl 
    lg:pt-8'> 
   <Link to={'/portfolio'} className='btn w-[250px] h-[20px]
    bg-gradient-to-b from-lime-700 to-grey-300 '> View Our Work </Link>
   </div>

   <div className='lg:hidden flex justify-center gap-16 pt-16'>
   <Link to={'/'} className='
   text-black flex justify-center pb-8 hover:scale-105'> <ImHome /> </Link>
   
   <Link to={'/Portfolio'} className='
  text-black flex justify-center pb-8 hover:scale-105'> <FaImages /> </Link>
   
  <Link to={'/Contact'} className='
text-black flex justify-center pb-8 '> <ImAddressBook /> </Link>
   </div>

    </motion.div>

   </div>
   
    </div>



   
    </div>
 
 
  
    </motion.section>
  )
}

export default About;
