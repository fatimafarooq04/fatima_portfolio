import React from 'react'
import { motion } from 'framer-motion'
import Shape from './Shape'

const BgPicture = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.3, duration: 2 }}
      className="bg">


      <Shape />

      <div className="hImg">
        <img src="public/images/background/fatima2.png" alt="" />
      </div>
    </motion.div>
  )
}

export default BgPicture