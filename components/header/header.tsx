"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 flex items-center justify-between px-3 md:px-32 lg:px-56 mx-auto z-20 xl:items-center p-5 bg-white w-full">
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
        className="flex flex-row gap-3 justify-center items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-green-500 font-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </Link>
        <Link
          href="#contact"
          className="uppercase hidden md:inline-flex text-sm text-[#0DB760]"
        >
          Get In Touch
        </Link>
      </motion.div>
    </header>
  );
}
