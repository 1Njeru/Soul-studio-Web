import React from 'react'

//import slider
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import images

import baby from '../img/portfolio/baby.JPG'
import tradi from '../img/portfolio/tradi.jpg'
import outdoor from '../img/portfolio/outdoor.JPG'
import beauty from '../img/portfolio/beauty.jpg'
import event from '../img/portfolio/event.jpg'
import studio from '../img/portfolio/studio.JPG'
import shoots from '../img/portfolio/shoots.jpg'



import { Link } from 'react-router-dom'
import { ImAddressBook, ImProfile, ImHome } from 'react-icons/im';

import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

const Portfolio = () => {
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


return (
<motion.section
initial={{opacity: 0}}
animate={{opacity: 1}}
exit={{opacity: 0}}
transition={{transition1}}
className='section'>
<div className='mx-auto lg:h-screen relative items-center
grid justify-center bg-gray-500 Lg:pt-6 pt-6 lg:pb-20'>

<h1 className='flex justify-center text-4xl pb-16 font-primary'>Portifolio</h1>

<Carousel swipeable={true}
draggable={true}
transitionDuration={3000}
showDots={false} 
responsive={responsive}   
ssr={true} // means to render carousel on server-side.
infinite={true}
autoPlay={true}
autoPlaySpeed={6000}
keyBoardControl={true}
customTransition="all 1"
containerClass="carousel-container"
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
>


  <div className='gap-3 flex justify-center '>
  <img src={tradi} alt='' className='w-[310px]' />
 </div>
  <div className='gap-3 flex justify-center '>
  <img src={baby} alt='' className='w-[300px]' />
  </div>
  <div className='gap-3 flex justify-center '>  
  <img src={beauty} alt='' className=' w-[280px] ' />
  </div>
 
  <div className='gap-3 flex justify-center '>  
  <img src={event} alt='' className='lg:w-[330px]' />
  </div>
  
  <div className='gap-3 flex justify-center '>  
  <img src={studio} alt='' className='w-[300px] ' />
  </div>

  <div className='gap-3 flex justify-center '>  
  <img src={shoots} alt='' className='lg:w-[330px] ' />
  </div>


  <div className='gap-3 flex justify-center '>
  <img src={outdoor} alt='' className='lg:w-[330px]' />
  </div>

  

</Carousel>;

<div className='pt-7'>
<div className=' flex justify-center' >
<Link to={'/contact'} className='btn w-[200px] h-[20px] 
hover:scale-95 bg-gradient-to-b from-lime-600 to-black
mx-auto lg:mx-0 
'> Hire Us. </Link>
</div>


<div className='lg:hidden flex justify-center gap-16 pt-16'>
<Link to={'/About'} className='
text-black flex justify-center pb-8 hover:scale-105'> <ImProfile /> </Link>

<Link to={'/'} className='
text-black flex justify-center pb-8 hover:scale-105'> <ImHome /> </Link>


<Link to={'/Contact'} className='
text-black flex justify-center pb-8 '> <ImAddressBook /> </Link>

</div>
</div>
</div>
</motion.section>
)
}



export default Portfolio;
