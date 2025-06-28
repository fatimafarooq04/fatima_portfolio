import { useEffect, useState,useRef } from 'react'
import './Portfolio.css'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    img: '/p1.jpg',
    title: "App development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique, earum dolores adipisci distinctio optio. Itaque laudantium dolorum quia veritatis!",
    languages: 'Flutter& Dart',
    Link: '/'
  },
  {
    id: 2,
    img: '/p2.jpg',
    title: "web development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique, earum dolores adipisci distinctio optio. Itaque laudantium dolorum quia veritatis!",
    languages: 'Html,css',
    Link: '/'
  },
  {
    id: 3,
    img: '/p3.jpg',
    title: "App development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique, earum dolores adipisci distinctio optio. Itaque laudantium dolorum quia veritatis!",
    languages: 'Html',
    Link: '/'
  }, {
    id: 4,
    img: '/p4.jpg',
    title: "App development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique, earum dolores adipisci distinctio optio. Itaque laudantium dolorum quia veritatis!",
    languages: 'Html',
    Link: '/'
  },
   {
    id: 5,
    img: '/p5.jpg',
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus similique, earum dolores adipisci distinctio optio. Itaque laudantium dolorum quia veritatis!",
    languages: 'Html',
    Link: '/'
  }
]

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="pItem" ref={ref}>
      <motion.div className="pImg"
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div className="pText"
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.Link}><button>View Project</button></motion.a>
      </motion.div>
    </div>
  )
}



const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length]);
  
  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList"
       style={{ x: xTranslate }}
       >
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>


    </div>
  )
}

export default Portfolio