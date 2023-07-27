"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 flex items-start justify-between px-3 md:px-32 lg:px-56 mx-auto z-20 xl:items-center p-5 bg-white w-full">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          target="_blank"
          url="https://twitter.com/MrinmoyDev_Gzie"
          fgColor="#0DB760"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://github.com/Gzie3009"
          fgColor="#0DB760"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/mrinmoy-saikia-40a5aa227/"
          fgColor="#0DB760"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://www.instagram.com/mrinmoy_saikia__/"
          fgColor="#0DB760"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#0DB760"
          bgColor="transparent"
          url="#contact"
        />
        <Link href="#contact" className="uppercase hidden md:inline-flex text-sm text-[#0DB760]">
          Get In Touch
        </Link>
      </motion.div>
    </header>
  );
}
