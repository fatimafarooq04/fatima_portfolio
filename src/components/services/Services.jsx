import React, { useRef, useState } from 'react'
import ComputerModelContainer from './Computer/ComputerModelContainer'
import './services.css'
import IphoneModelContainer from './iphone/IphoneModelContainer'
import Counter from './Counter'
import { motion, useInView } from 'framer-motion'
const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35
  },
  {
    id: 2,
    img: "/service2.png",
    title: "App Development",
    counter: 1
  },
]

const textVarient = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const listVarient = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    }
  }
}
const Services = () => {
  const [currentServicesId, setCurrentServiceId] = useState(1)
  const ref = useRef()
  const isInView = useInView(ref, { margin: "-200px" })
  return (
    <div className="services" ref={ref}>
      <div className="Section left">
        <motion.h1 variants={textVarient} initial="initial" animate={isInView ? 'animate' : 'initial'} className="sTitle">How do I help?</motion.h1>
        <motion.div variants={listVarient} initial="initial" animate={isInView ? 'animate' : 'initial'} className="serviceList">
          {services.map((service) => (
            <motion.div variants={listVarient} className="service" key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <p className='title'>{service.title}</p>
                <p>{service.counter} projects</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text={"Project Completed"} />
        </div>
      </div>
      <div className="Section right">
        {currentServicesId == 1 ? (<ComputerModelContainer />) : (<IphoneModelContainer />)}
        {/* <ComputerModelContainer/> */}
        {/* <IphoneModelContainer/> */}
      </div>
    </div>
  )
}

export default Services