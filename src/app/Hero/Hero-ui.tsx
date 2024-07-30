"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/src/components/ui/Hero/images-slider";
import Link from "next/link";

export function ImagesSliderDemo() {
  const images = [
    "https://nextr.in/blog/wp-content/uploads/2023/09/Educational-Technology-5.jpg",
    "https://static.toiimg.com/thumb/msid-94152758,width-1280,height-720,resizemode-4/94152758.jpg",
    "https://i0.wp.com/www.dailymaverick.co.za/wp-content/uploads/2024/04/sml-iStock-1486507846.jpg?fit=720%2C384&quality=89&ssl=1",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-extrabold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          WELCOME TO <br /> KHMER CODE ACADEMY (KCA)
        </motion.p>
        <Link href="/Contact">
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-green-500">
            <span>Get Started →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
