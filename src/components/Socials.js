import React from 'react'
//import icons

import {
    ImFacebook,
    ImTwitter,
    ImInstagram,
    ImWhatsapp,
} from 'react-icons/im'


const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
    
    <ul className='flex gap-x-4' >

    <li><a href='http://www.facebook.com' target='_blank' rel="noreferrer">
    <ImFacebook />
    </a>
    </li>

    <li><a href='http://www.twitter.com' target='_blank' rel="noreferrer">
    <ImTwitter />
    </a>
    </li>

    <li><a href='http://www.instagram.com' target='_blank' rel="noreferrer">
    <ImInstagram />
    </a>
    </li>

    <li><a href='http://www.whatsapp.com' target='_blank' rel="noreferrer">
    <ImWhatsapp />
    </a>
    </li>
    
    </ul>
    
    </div>
  )
}

export default Socials;
