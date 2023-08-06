"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import undisclosed from "../../assets/undisclosed.jpeg";
import carmania from "../../assets/camania.png";
import marcos from "../../assets/marcos.png";
import moviedekho from "../../assets/moviedekho.png";
import Link from "next/link";
type Props = {};
type Project = {
  src: StaticImageData;
  title: string;
  projectSummary: string;
  link?: string;
};

export default function Projects({}: Props) {
  const projects: Project[] = [
    {
      src: undisclosed,
      title: "FOOD DELIVERY APP",
      projectSummary:
        "Since April 2023, I have been an integral part of the A FOOD DELIVERY APP's team, contributing to the development of an innovative app aimed at tackling the issue of long queues at shops at Universities . As a Frontend Developer, I have taken on the responsibility of developing and implementing the app's frontend using cutting-edge technologies like React,Redux-Toolkit and Tailwind CSS. My goal has been to create a seamless and intuitive food ordering experience for users, ensuring they can easily place orders and make payments online. Additionally, I have been instrumental in incorporating essential features, such as a vendor portal and real-time updates, which have significantly improved overall user satisfaction. In a collaborative effort with the team, I continuously strive to enhance the app's functionality and user experience, making CU FOODS a game-changer within the university communities.",
    },
    {
      src: carmania,
      title: "CAR MANIA",
      projectSummary:
        "From February to April 2023, I took charge of the Car Mania project, where I played a pivotal role in developing a user-friendly MERN stack car rental web application. By leveraging React and Tailwind CSS for the frontend, I ensured that users could seamlessly navigate the platform and book rental cars based on their preferences. Integrating Node.js and Express.js for the backend, I achieved a smooth and efficient connection between the frontend and backend, optimizing the app's performance. With MongoDB as the database, data storage and retrieval were streamlined, further enhancing the app's responsiveness. The positive user feedback I received for the app's intuitive interface and efficient functionality validated the hard work and attention to detail that I put into this project.",
      link: "https://carmania123.netlify.app/",
    },
    {
      src: marcos,
      title: "MARCOS",
      projectSummary:
        "In April 2023, I contributed significantly to the Marcos project, an ambitious hackathon endeavor. As part of the development team, we created a dynamic full-stack web application using the MERN stack and Tailwind CSS. The platform aimed to connect and empower young leaders in the development sector by fostering meaningful collaborations. My responsibilities included implementing essential features such as an alumni management system, mentor-mentee connection, and a comprehensive career portal showcasing job and internship opportunities. Furthermore, I developed an admin panel that facilitated content management and moderation, ensuring a safe and positive user experience for all participants. By utilizing MongoDB for efficient data management and retrieval, I optimized the app's performance and responsiveness. The Marcos project stands as a testament to my expertise in frontend and backend technologies and showcases my dedication to creating impactful web applications that make a difference in people's lives.",
      link: "https://marcos123.netlify.app/",
    },
    {
      src: moviedekho,
      title: "Movie Dekho",
      projectSummary:
        "In May 2023, I took on the enthralling MovieDekho project, where I skillfully harnessed the power of HTML, CSS, JavaScript, React.js, Tailwind CSS, and the TVmaze API. The result was an engaging and interactive web application that enabled users to explore and retrieve comprehensive movie details effortlessly. By dynamically fetching and rendering data from the TVmaze API, I ensured that the app offered real-time and up-to-date information on movie titles, genres, summaries, cast, and ratings. MovieDekho's responsive design and intuitive user interface garnered positive feedback from users, solidifying my reputation for crafting high-quality web applications that elevate the movie-watching experience.",
      link: "https://moviedekho1.netlify.app/",
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
      className="relative flex overflow-hidden flex-col text-left max-w-full justify-between py-24 lg:pt-24 lg:pb-0 lg:h-screen"
    >
      <h3 className="uppercase tracking-[20px] text-[#0DB760] font-semibold text-xl md:text-2xl w-full text-center">
        Projects
      </h3>

      <div className="md:-mt-32 relative w-full flex items-start overflow-x-scroll scrollbar scrollbar-track-[#0DB760]/20 scrollbar-thumb-[#0DB760] overflow-y-hidden snap-x snap-mandatory z-10">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44"
            >
              <motion.div
                initial={{
                  y: +300,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
              >
                <Image
                  className="h-48 w-64 lg:w-[30vw]"
                  src={project.src}
                  alt="project'homescreen image"
                />
              </motion.div>
              <div>
                <h4 className="text-4xl font-semibold text-center flex justify-center items-center gap-5 group">
                  {project.title}{" "}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:h-10 group-hover:w-10"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </Link>
                  )}
                </h4>
                <p className="text-lg text-justify font-semibold ">
                  {project.projectSummary}
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
