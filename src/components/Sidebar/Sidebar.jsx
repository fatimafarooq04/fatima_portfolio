import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import '../index.css'

export const Sidebar=()=>{
  const [showmenu, setShowMenu] = useState(false);

    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 4, ease: 'easeInOut' }}
        className="icon">
          {/* Hamburger Icon */}
          {!showmenu && (
            <GiHamburgerMenu
              className="hamburger"
              onClick={() => setShowMenu(!showmenu)}
            />
          )}
          <AnimatePresence>

            {/* Overlay */}
            {showmenu && (
              <motion.div
                className="overlay"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}

              >
                <div className="close-flex">

                  <button
                    className="close-btn"
                    onClick={() => setShowMenu(!showmenu)}
                  >
                    <IoIosClose className='close' />

                  </button>
                </div>
                <div className="overlay-content">
                  <h2> Home</h2>
                  <h2><Link to="/Portfolio"> Portfolio</Link></h2>
                  <h2><a href=""> Contact</a></h2>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

    )
}