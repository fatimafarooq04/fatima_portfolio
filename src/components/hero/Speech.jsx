import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'


const Speech = () => {
  return (
    <motion.div
    animate={{opacity:[0,1]}}
    transition={{delay:0.3,duration:3}}
    className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
           1000,
    "I'm Fatima Farooq, a Web Developer",
    1000,
    "I'm Fatima Farooq, a Frontend Developer",
    1000,
    "I'm Fatima Farooq, a Backend Developer",
    1000,
    "I'm Fatima Farooq, a UI/UX Enthusiast",
    1000,
    "I'm Fatima Farooq, always learning and building!",
    1000


          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}


          repeat={Infinity}
        />
      </div>
      <div className="bubbleBg">

      <img src="public/images/background/bg.png" alt="" />
      </div>
    </motion.div>
  )
}

export default Speech