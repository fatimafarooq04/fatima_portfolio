import React from 'react'
import './hero.css'
import { motion } from 'framer-motion'
const HSectionLeft = () => {
  const awardVarients = {
    initial: {
      x: -100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 2,
        stagerChildren: 0.2
      }
    }
  }


  return (
    <div className="hSection left">
      {/* TITLE  */}
      <motion.h1 className="hTitle"
        animate={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ delay: 0.3, duration: 2, ease: "easeInOut" }}
      >
        Hey There <br /> <span>I'm Fatima</span>
      </motion.h1>
      {/* AWARDS  */}
      <motion.div
        variants={awardVarients}
        initial="initial"
        animate="animate"
        className="awards">
        <motion.h2>What I Know</motion.h2>
        <motion.p variants={awardVarients}>These are the top technologies and tools I've learned and practiced. </motion.p>
        <motion.div variants={awardVarients} className="awardList">
          <motion.img variants={awardVarients} src="/images/skillsIcons/react.png" alt="" />
          <motion.img variants={awardVarients} src="/images/skillsIcons/js.png" alt="" />
          <motion.img variants={awardVarients} src="/images/skillsIcons/dotnet.png" alt="" />
          <motion.img variants={awardVarients} src="/images/skillsIcons/flutter.png" alt="" />
        </motion.div>
      </motion.div>
      {/* SCROLL SVG  */}
      <motion.a
        animate={{ y: [0, 5], opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        href="#services" className='scroll'>
        <svg
          width="50px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
            stroke="white"
            strokeWidth="1"
          />
          <path
            animate={{ y: [0, 5] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            d="M12 5V8"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </motion.a>
    </div>
  )
}

export default HSectionLeft