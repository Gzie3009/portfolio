"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#0DB760] font-semibold text-xl md:text-2xl w-full text-center">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll scrollbar scrollbar-track-[#0DB760]/20 scrollbar-thumb-[#0DB760] overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((val, index) => {
          return (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:0-44 h-screen">
              <motion.img
                initial={{
                    y:-300,
                  opacity: 0,
                }}
                whileInView={{
                    y:0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{ once: true }}
                className="h-48 w-48"
                src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
                alt=""
              />
              <div>
                <h4 className="text-4xl font-semibold text-center">
                  Case Study 1 of 3 :UPS clone
                </h4>
                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem, ut obcaecati optio, culpa harum tenetur
                  consectetur in quae odio laudantium cum. Consequuntur nisi
                  tempore quae tempora eveniet ex, maxime in consectetur
                  eligendi? Amet rerum doloribus aut atque architecto expedita,
                  minus possimus labore ducimus repellat consequuntur quo modi
                  quia sapiente enim?
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-green-100 opacity-70 h-[500px] left-0 -skew-y-12"></div>
    </motion.div>
  );
}
