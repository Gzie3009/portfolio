import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image, { StaticImageData } from "next/image";
type Props = {
  logo: StaticImageData;
  role: string;
  company: string;
  technologies: StaticImageData[];
  summaryPoints: string[];
  startedAt: string;
  endedAt: string;
};

export default function ExperienceCard({
  logo,
  role,
  company,
  technologies,
  summaryPoints,
  startedAt,
  endedAt,
}: Props) {
  return (
    <article className="flex justify-evenly flex-col border-[4px] border-transparent hover:border-green-600 hover:shadow-lg hover:shadow-green-100 rounded-lg items-center space-y-7 flex-shrink-0 w-[90vw] md:w-2/3 snap-center bg-green-200 md:bg-green-100 px-4 md:px-10 py-10 opacity-100 md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="w-full flex gap-5 items-center justify-around">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
        >
          <Image
            className="rounded-full object-stretch object-center"
            src={logo}
            alt={`${company} Logo`}
          />
        </motion.div>
        <div>
          <h4 className="text-xl md:text-4xl font-bold w-mmax">
            {role} at {company}
          </h4>
          <p className="uppercase py-5 text-gray-600 tracking-[3px] font-black">
            {startedAt} - {endedAt}
          </p>
        </div>
      </div>
      <div className="px-0 md:px-10 w-full">
        <div className="flex space-x-2 my-2 flex-wrap gap-3">
          {technologies &&
            technologies.map((val, index) => {
              return (
                <Image
                  key={index}
                  src={val}
                  height={100}
                  width={100}
                  alt="tech stack logo"
                  className="h-10 w-10 rounded-full"
                ></Image>
              );
            })}
        </div>
        <ul className="list-disc space-y-4 ml-5 mt-5 text-lg font-bold tracking-wide">
          {summaryPoints &&
            summaryPoints.map((val, index) => {
              return <li className="test-justify" key={index}>{val}</li>;
            })}
        </ul>
      </div>
    </article>
  );
}
