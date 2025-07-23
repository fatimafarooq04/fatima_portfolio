import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar=()=>{
  const [showmenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

  // Easy scroll function
  const goToHomeAndScroll = (sectionId) => {
    setShowMenu(false);
    navigate("/"); // go to homepage

    // wait 300ms then scroll to the section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
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
                 <h2>
        <span onClick={() => goToHomeAndScroll("home")} style={{ cursor: "pointer" }}>
          Home
        </span>
      </h2>
                  <h2><Link to="/Portfolio"> Portfolio</Link></h2>
<h2>
        <span onClick={() => goToHomeAndScroll("contact")} style={{ cursor: "pointer" }}>
          Contact
        </span>
      </h2>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

    )
}