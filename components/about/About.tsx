"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    transition={{
        duration:1.2
    }}
    whileInView={{
        opacity:1
    }}
    viewport={{once:true}}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#0DB760] font-semibold text-2xl">
        About
      </h3>
      <motion.img
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
        src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
        className="-mb-20 md:-mb-0 w-56 h-56 rounded-full object-cover flex-shrink-0 md:rounded-lg md:w-64 md:h-96 xl:h-[500px] xl:w-[600px]"
      />
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
