import React from 'react'
import { motion } from 'framer-motion'
type Props = {
    directionLeft?:boolean
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x:directionLeft?-200:200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:1
        }}
        viewport={{once:true}}
        className='rounded-full border-green-500 border h-20 w-20 md:h-28 md:w-28 filter group-hover:grayscale transition-all ease-in-out duration-300'
        src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"  />
        <div className='absolute opacity-0 group-hover:opacity-70 transition-all duration-300 ease-in-out group-hover:bg-green-100 h-20 w-20 md:h-28 md:w-28 rounded-full '>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}