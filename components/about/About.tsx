"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Mrinmoy2 from "../../assets/Mrinmoy2.png";
type Props = {};

export default function About({}: Props) {
  const src = "https://i.imgur.com/6sdTmRY.jpg";
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      className="py-24 flex flex-col relative text-center md:text-left px-10 md:px-10 max-w-6xl justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-[#0DB760] font-semibold text-2xl">
        About
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center pt-5 md:pt-14">
      <motion.div
        className="w-full md:w-1/2"
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          alt="Mrinmoy's Image"
          height={100}
          width={100}
          loader={() => src}
          src={src}
          className="rounded-full object-cover md:rounded-lg w-full"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10 lg:pr-0 w-full md:w-1/2"
      >
        <h4 className="text-4xl font-semibold mt-10 md:mt-0">
          Here is a{" "}
          <span className="underline decoration-[#FF0000]">little</span>{" "}
          background
        </h4>
        <p className="text-md text-justify">
          I&apos;m <b>Mrinmoy Saikia</b>, a passionate and highly skilled Frontend developer
          based in Kharar, Punjab. With a keen eye for detail and expertise in
          frontend technologies, including React.js, Next.js, and TypeScript, I
          thrive on building user-friendly and visually appealing web
          applications that leave a lasting impact. My journey as a web
          developer has been filled with exciting projects and opportunities to
          learn and innovate. From developing dynamic E-commerce storefronts
          using Next.js to creating user-friendly Food Ordering Apps with React,
          I take pride in crafting exceptional digital experiences and scalable
          solutions that exceed expectations. As a firm believer in continuous
          growth, I am always eager to explore new technologies.
        </p>
      </motion.div>
      </div>
    </motion.div>
  );
}
