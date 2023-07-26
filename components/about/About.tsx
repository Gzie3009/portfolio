"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Mrinmoy2 from "../../assets/Mrinmoy2.png";
type Props = {};

export default function About({}: Props) {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#0DB760] font-semibold text-2xl">
        About
      </h3>
      <motion.div
      className="-mb-32 lg:-mb-0"
        initial={{
          x: -200,
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
          src={"https://i.imgur.com/6sdTmRY.jpg"}
          className=" h-full rounded-full object-cover flex-shrink-0 md:rounded-lg w-[300vw]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#FF0000]">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          autem ea labore obcaecati eligendi saepe sed dolore distinctio aliquam
          quae, mollitia perspiciatis nobis architecto velit ab quibusdam ipsa
          voluptate accusamus, voluptatem modi eius vero quod dignissimos!
          Suscipit soluta consequatur cum! Dolorem dolor quos explicabo nobis
          maxime rem optio rerum vero? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Earum voluptate eius vel et, vitae odit voluptas
          dignissimos!{" "}
        </p>
      </div>
    </motion.div>
  );
}
