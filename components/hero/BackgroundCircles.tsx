import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.3,0.4,0.8,0.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={
      {
        duration:2.5
      }
    }
    className='relative flex justify-center items-center'>
        <div className='absolute border-2 border-[#0DB760] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='rounded-full border border-[#0DB760] opacity-20  absolute h-[300px] w-[300px] mt-52'/>
        <div className='rounded-full border border-[red] opacity-20  absolute h-[750px] w-[750px] mt-52 animate-pulse z-20'/>
    </motion.div>
  )
}