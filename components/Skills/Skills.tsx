"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { StaticImageData } from "next/image";
import nextjs from "../../assets/next-js.png";
import reactjs from "../../assets/Reactjs.png";
import html from "../../assets/html.png";
import css from "../../assets/css.webp";
import js from "../../assets/javascript.png";
import tailwind from "../../assets/tailwind.png";
import typescript from "../../assets/typescript.png";
import github from "../../assets/github.png";
import redux from "../../assets/redux.webp";
import materialUi from "../../assets/materialUi.png";
import express from "../../assets/expressjs.png";
import node from "../../assets/nodejs.png";
import mongo from "../../assets/mongodb.webp";
type Props = {};
type skill = {
  src: StaticImageData;
  proficiency: number;
};

export default function Skills({}: Props) {
  const skills: skill[] = [
    {
      src: nextjs,
      proficiency: 40,
    },
    {
      src: reactjs,
      proficiency: 75,
    },
    {
      src: redux,
      proficiency: 80,
    },
    {
      src: tailwind,
      proficiency: 90,
    },
    {
      src: html,
      proficiency: 95,
    },
    {
      src: css,
      proficiency: 90,
    },
    {
      src: js,
      proficiency: 70,
    },
    {
      src: typescript,
      proficiency: 60,
    },
    {
      src: github,
      proficiency: 80,
    },
    {
      src: materialUi,
      proficiency: 70,
    },
    {
      src: node,
      proficiency: 50,
    },
    {
      src: express,
      proficiency: 50,
    },
    {
      src: mongo,
      proficiency: 50,
    },
  ];
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
      className="flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center xl:space-y-0 py-24"
    >
      <h3 className="uppercase tracking-[20px] text-[#0DB760] font-semibold text-xl md:text-2xl">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-sm text-[#0DB760] md:flex px-2 py-10">
        <span className="hidden lg:block">Hover &nbsp; </span>
        <span className="lg:hidden">Click</span> over a skill for
        proficiency
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {skills &&
          skills.map((skill, index) => {
            return (
              <Skill
                key={index}
                src={skill.src}
                proficiency={skill.proficiency}
              />
            );
          })}
      </div>
    </motion.div>
  );
}
