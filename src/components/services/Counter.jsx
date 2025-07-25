import { animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const Counter = ({from,to,text}) => {
  const [count,SetCount]=useState(from)
  const ref=useRef();
  const isInView=useInView(ref)
  useEffect(()=>{
const animation=animate(from,to,{
  duration:4,
  ease:"easeOut",
  onUpdate:(prev=>{
     SetCount(Math.floor(prev));
  })
});
return()=>animation.cancel()
  },[isInView,from,to])
  return (
<div className="counter" ref={ref}>
    <h1>{count}+</h1>
    <p>{text}</p>
</div>
)
}

export default Counter