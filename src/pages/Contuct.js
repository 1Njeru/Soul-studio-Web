import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ImHome, ImProfile
} from 'react-icons/im'
import { FaImages } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

const Contact = () => {
  return (
    <motion.section 
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={{transition1}}
    className='section relative'>
    <div className=' mx-auto lg:h-screen bg-gray-500 grid justify-center
     items-center'>
    <div className=' lg:flex-row grid items-center justify-center
     lg:text-left pt-16'>

    {/*text & form*/}

    <div>
    <div className='lg:flex-1  px-4 grid justify-center'>
    <h1 className='h1 text-4xl flex justify-center'> Contact Us Now </h1>
    <p className='pt-4 text-xl flex justify-center'> We would like to hear from you. </p>

    {/*form */}
    <form className='flex flex-col gap-y-4 pt-4 items-center '> 

    <motion.div
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={{transition1}}
     className='flex gap-x-10'>

     <div className=' text-black'>
     <form action="https://getform.io/f/27b21687-26f0-47ab-a3c5-9a6e3bd8e6c0" method='POST' className='flex flex-col w-full  items-center justify-center'>
        
     <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent outline-none
               border-b border-b-primary
              h-[60px] font-secondary w-full
               text-black focus:outline-none "
            />
            <input
            type="text"
            name="name"
            placeholder="Enter your Email"
            className="p-2 bg-transparent outline-none
             border-b border-b-primary
            h-[60px] font-secondary w-full
             text-black focus:outline-none "
          />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="pt-6 bg-transparent outline-none border-b
               text-black focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b
              from-lime-600  to-black px-6 py-3 my-8 mx-auto flex
             items-center rounded-md hover:scale-110 duration-300">
             Send Message
            </button>
    </form>
    </div>
    
    </motion.div>


    </form>


    </div>
    {/*links */}
  
    </div>
    <div className=' gap-10 sm:pt-10 flex justify-center'>
    <div className='lg:hidden'>
    <Link to={'/'} className='
    text-black flex justify-center pb-8 hover:scale-105'> <ImHome /> </Link>
    </div>

    <div className='lg:hidden '>
    <Link to={'/About'} className='
    text-black flex justify-center pb-8 hover:scale-105'> <ImProfile /> </Link>
    </div>

    <div className='lg:hidden '>
    <Link to={'/Portifolio'} className='
    text-black flex justify-center pb-8 hover:scale-105'> <FaImages /> </Link>
    </div>

    </div>
    </div>
    <footer className="font-extralight font-lime-500 flex 
    justify-center">
    
    <li className='hover:scale-95 text-black hover:text-white'>
    <a href='https://www.youtube.com/watch?v=O3bxkdMpXuY&ab_channel=JustinaSyokau'
     target='_blank rel="noreferrer"'>
     Click Me. :: 1Njeru
    </a>
    </li>
   
    </footer>
  


 

</div>
    </motion.section>
  )
}

export default Contact