import React, { useRef, useState } from 'react'
import './hero.css'
import HSectionLeft from './HSectionLeft'
import HSectionRight from './HSectionRight';
import BgPicture from './BgPicture'




const Hero = () => {


  return (
    <div className='hero' >
      {/* LEFT SECTION  */}
      <HSectionLeft />
      {/* RIGHT SECTION  */}
      <HSectionRight />
 

      <BgPicture />

    </div>
  )
}

export default Hero