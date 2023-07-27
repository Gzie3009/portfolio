"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import wictronix from "../../assets/wictronix.jpeg";
import { StaticImageData } from "next/image";
import stunhaul from "../../assets/stunhaul.jpeg";
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
type Props = {};
type Experience = {
  logo: StaticImageData;
  role: string;
  company: string;
  technologies: StaticImageData[];
  summaryPoints: string[];
  startedAt: string;
  endedAt: string;
};
export default function Experience({}: Props) {
  const experiences: Experience[] = [
    {
      logo: wictronix,
      role: "React.js Developer Intern",
      company: "Wictronix Pvt. Ltd.",
      technologies: [
        nextjs,
        reactjs,
        redux,
        html,
        css,
        js,
        tailwind,
        typescript,
        github,
        materialUi,
      ],
      summaryPoints: [
        "Developed and launched a dynamic E-commerce storefront using Next.js, delivering an engaging and user-friendly online shopping experience.",
        "Led the successful implementation of a Restaurant Management System, optimizing operations and enhancing efficiency for restaurant owners and staff.",
        "Collaborated closely with the development team to deliver high-quality code and ensure seamless integration of frontend and backend functionalities.",
        "Acquired proficiency in Next.js, a powerful React framework, enabling server-side rendering and enhancing web application performance.",
      ],
      startedAt: "12th June , 2023",
      endedAt: "12th August , 2023",
    },
    {
      logo: stunhaul,
      role: "Frontend Developer Intern",
      company: "Wictronix Pvt. Ltd.",
      technologies: [reactjs, redux, html, css, js, tailwind, github],
      summaryPoints: [
        "Developed and implemented the first functional version of Stunhaul Pvt Ltd's customized gift e-commerce platform, contributing to enhanced user experience and revenue growth.",
        "Designed and executed the frontend of the platform using cutting-edge technologies like React and Tailwind CSS, ensuring a visually appealing and responsive user interface.",
        "Collaborated with cross-functional teams, including designers and backend developers, to translate business requirements into innovative web designs and features.",
        "Demonstrated meticulous attention to detail, delivering high-quality code and ensuring seamless functionality across diverse devices and browsers.",
      ],
      startedAt: "12th December , 2022",
      endedAt: "12th March , 2023",
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
      className="flex relative overflow-hidden flex-col text-left max-w-full px-3 md:px-10 justify-evenly mx-auto items-center py-24"
    >
      <h3 className="uppercase tracking-[20px] text-[#0DB760] font-semibold text-xl md:text-2xl w-full text-center">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll py-10 snap-x snap-mandatory scrollbar scrollbar-track-[#0DB760]/20 scrollbar-thumb-[#0DB760]">
        {experiences &&
          experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={index}
                logo={experience.logo}
                role={experience.role}
                company={experience.company}
                technologies={experience.technologies}
                summaryPoints={experience.summaryPoints}
                startedAt={experience.startedAt}
                endedAt={experience.endedAt}
              />
            );
          })}
      </div>
    </motion.div>
  );
}
