"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
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
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 object-cover"
        src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
        alt=""
      ></img>
      <div>
        <h2 className="text-lg lg:ml-3 uppercase text-[#0DB760] pb-2 tracking-[15px] font-bold">Frontend Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#0DB760" cursorBlinking></Cursor>
        </h1>
      </div>
    </div>
  );
}
