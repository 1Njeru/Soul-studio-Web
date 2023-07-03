import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

//import icons

import {
  ImFacebook,
  ImInstagram,
  ImWhatsapp,
  ImMail,
  ImPhone,
  ImCamera,
  ImLocation,
  ImYoutube
 
  
} from 'react-icons/im'


import { FaArrowRight } from 'react-icons/fa6'

const Home = () => {
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{transition1}}
    className='section'>
    <div className='pl-3 pr-3 mx-auto h-screen relative 
     grid justify-center bg-gray-500 '>
    <div className='grid grid-col items-center lg:flex-row h-full 
     text-center lg:text-left bg-gray-500 
    '>
    {/*text */}
    <motion.div 
    initial={{opacity: 0, y: '-100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '-100%'}}
    transition={{transition1}}
    className='flex flex-col lg:items-start'>
    <h1 className='h1 font-partial text-4xl flex justify-center
    '>PHOTOGRAPHY <br /> & FILM MAKING</h1>
    <p className='pt-4 font-primary font-semibold text-3xl'>Nairobi, Fedha-Tasia Complex
    </p>

    <p className='pt-5 font-bold text-xl'> Find Us On:</p>

    
    <motion.ul 
    initial={{scale: 0}}
    animate={{scale: 1}}
    exit={{scale: 0}}
    transition={{transition1}}
    className='flex gap-5 pt-7 justify-center text-2xl' >

    <li className='hover:scale-95 hover:text-blue-600'>
    <a href='http://www.facebook.com' target='_blank rel="noreferrer"'>
    <ImFacebook />
    </a>
    </li>

    <li className='hover:scale-105 hover:text-red-500'>
    <a href='http://www.twitter.com' target='_blank rel="noreferrer"'>
    <ImYoutube />
    </a>
    </li>

    <li className='hover:scale-95 hover:text-pink-600'>
    <a href='https://www.instagram.com/soulstudio1620/' target='_blank' rel="noreferrer">
    <ImInstagram />
    </a>
    </li>

    <li className='hover:scale-105 hover:text-green-600'>
    <a href='https://wa.me/qr/TRLUNZXNS35ZL1' target='_blank' rel="noreferrer">
    <ImWhatsapp />
    </a>
    </li>

    <li className='hover:scale-95 hover:text-yellow-600'>
    <a href='mailto:http://www.emilyngatha@gmail.com' target='_blank' rel="noreferrer">
    <ImMail />
    </a>
    </li>

    <li className='hover:scale-105 hover:text-cyan-600'>
    <a href='tel:0722175068' target='_blank' rel="noreferrer">
    <ImPhone />
    </a>
    </li>

    <li className='hover:scale-95 hover:text-purple-400'>
    <a href='https://www.instagram.com/soulstudio1620/' target='_blank' rel="noreferrer">
    <ImCamera />
    </a>
    </li>

    <li className='hover:scale-105 hover:text-red-700'>
    <a href='https://www.google.com/maps/search/fedha+tasia+complex+/@-1.3123842,36.8952388,17z/data=!3m1!4b1?entry=ttu'
     target='_blank' rel="noreferrer">
    <ImLocation />
    </a>
    </li>
    
    </motion.ul>


    <div className='  flex hover:scale-90 duration-500 pt-9'>
    <Link to={'/About'} className='  font-tertiary
    mb-[30px] mx-auto lg:mx-0 font-semibold flex items-center gap-5 text-xl
    '> About Us <FaArrowRight className='pt-1' /> </Link>
    </div>

    <div className=' flex hover:scale-90 duration-500'>
    <Link to={'/Portfolio'} className='  font-tertiary
    mb-[30px] mx-auto lg:mx-0 font-semibold flex items-center text-xl gap-5
    '> Portfolio <FaArrowRight className='pt-1' /> </Link>
    </div>

   
  
    <div className='flex hover:scale-90 duration-500'>
    <Link to={'/Contact'} className='  font-tertiary
    mb-[30px] mx-auto lg:mx-0 font-semibold flex items-center text-xl gap-5
    '> Get In Touch <FaArrowRight className='pt-1' /> </Link>
    </div>

    </motion.div>
    
    </div>


    </div>   
  

    </motion.section>
    
    
  )
}



export default Home;
