import React from 'react'
import './hero.css'
import Speech from './Speech'
import { motion } from 'framer-motion'

const HSectionRight = () => {
    const followarients = {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 2,
                stagerChildren: 0.2
            }
        }
    }
    return (
        <div className="hSection right">
            {/* FOLLOW  */}
            <motion.div variants={followarients} initial="initial" animate="animate" className="follow">
                <motion.a variants={followarients} href="/">
                    <img src="/images/socialIcons/instagram.png" alt="" />
                </motion.a>
                <motion.a variants={followarients} href="/">
                    <img src="/images/socialIcons/facebook.png" alt="" />
                </motion.a>
                <motion.a variants={followarients} href="/">
                    <img src="/images/socialIcons/youtube.png" alt="" />
                </motion.a >
                <motion.div variants={followarients} className="followTextContainer">
                    <div className="followText">FOLLOW ME</div>
                </motion.div>
            </motion.div>
            {/* BUBBLE  */}
            <Speech />
            {/* CERTIFICATE  */}
            <motion.div
                animate={{x:[100,0], opacity: [0, 1] }}
                transition={{ delay: 0.3, duration: 2 }}
                className="certificate">
                <img src="/images/skillsIcons/starBadge.png" alt="" height={100} /> 
                <h3 style={{ marginBottom: '0.5rem' }}>My Achievements at Aptech</h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                    <li>🏅 3× Student of the Month</li>
                    <li>💡 1× Project of the Month</li>
                </ul>
            </motion.div>
            {/* CONTACT BUTTON  */}
            <motion.a
                animate={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ delay: 0.3, duration: 3 }}
                href="/#contact" className='contactLink'>
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                    className="contactButton">
                    <svg viewBox="0 0 200 200" width="130" height="130">
                        <circle cx="100" cy="100" r="90" fill="pink" />
                        <path
                            id="innerCirclePath"
                            fill="none"
                            d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                        />
                        <text className="circleText">
                            <textPath href='#innerCirclePath'>Hire Now .</textPath>
                        </text>
                        <text className="circleText">
                            <textPath href='#innerCirclePath' startOffset={'45%'}>Contact Me .</textPath>
                        </text>
                    </svg>
                    <div className="arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="50"
                            height="50"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                        >
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>
                    </div>
                </motion.div>
            </motion.a>
        </div>
    )
}

export default HSectionRight