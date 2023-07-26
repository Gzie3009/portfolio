"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../assets/Mrinmoy.jpeg";
import { motion } from "framer-motion";
type Props = {};
export default function Hero({}: Props) {
  const [text, useText] = useTypewriter({
    words: [
      "Hi, The Name's Mrinmoy Saikia",
      "Guy-Who-Loves-Great-UI/UX",
      "<But-Loves-To-Code-More/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center pt-48 space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div initial={{
        y:-200,
        opacity:0,
        scale:2,
      }}
      whileInView={{
        y:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5,
      }}
      viewport={{once:true}}
      
      >

        <Image
          className="relative rounded-full h-40 w-40 object-cover"
          src={profilePic}
          alt="Mrinmoy Saikia' Image"
          width={200}
          height={200}
        ></Image>
      </motion.div>
      <div className="z-20">
        <h2 className="text-lg lg:ml-3 uppercase text-[#0DB760] pb-2 tracking-[15px] font-bold">
          Frontend Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#0DB760" cursorBlinking></Cursor>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton mt-2 sm:mt-0">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
