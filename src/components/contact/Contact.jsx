import React, { useState } from 'react'
import { motion, useInView } from "framer-motion"
import './contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { meta } from '@eslint/js';
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';
import ContactSvg from './ContactSvg';

const listVarient = {
  initial: {
    x: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    }
  }
}
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const ref=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY
      })
      .then(
        () => {
          // console.log('SUCCESS');
          setSuccess(true);
          setError(false);
        },
        (error) => {
          // console.log('FaILED....', error.text);
          setError(true);
          setSuccess(false);
          
        },
      );
    };
    const isInView = useInView(ref, { margin: "-200px" })
    return (
      <div className='contact' ref={ref} onSubmit={sendEmail}>
      <div className="cSection">
        <motion.form
          variants={listVarient}
          animate={isInView ? "animate" : "initial"}
          ref={form} >
          <motion.h1 variants={listVarient} className="cTitle">Let's keep in touch</motion.h1>
          <motion.div variants={listVarient} className="formItem">
            <label htmlFor="user_username">Name</label>
            <input type="text" placeholder='Type your name' id='user_username' />
          </motion.div>
          <motion.div variants={listVarient} className="formItem">
            <label htmlFor="user_email">Email</label>
            <input type="email" placeholder='Type your email' id='user_email' name='user_email' />
          </motion.div>  <motion.div variants={listVarient} className="formItem">
            <label htmlFor="user_message">Message</label>
            <textarea name="user_message" id="user_message" rows={10} placeholder='Write your message here.....' ></textarea>
          </motion.div>
          <motion.button variants={listVarient} className="formButton">Send</motion.button>
          {success && <span>Your message has been sent</span>}
          {error && <span>Something went wrong</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg/>
      </div>
    </div>
  )
}

export default Contact