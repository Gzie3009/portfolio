import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
type Props = {
  src: StaticImageData;
  proficiency: number;
};

export default function Skill({ src, proficiency }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          alt="skill image"
          className="rounded-full border-green-500 border-2 p-2 h-24 w-24 md:h-32 md:w-32 filter group-hover:grayscale transition-all ease-in-out duration-300"
          src={src}
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-90 transition-all duration-300 ease-in-out group-hover:bg-green-600 h-24 w-24 md:h-32 md:w-32 rounded-full ">
        <div className="flex items-center justify-center h-full">
          <p className="text-4xl font-bold text-black opacity-100">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}
