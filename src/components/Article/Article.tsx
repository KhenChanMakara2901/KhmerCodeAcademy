import React from "react";
import Web from "@/public/Profile/Web.svg";
import figma from "@/public/Profile/figma.svg";
import flutter from "@/public/Profile/flutter.svg";
import Image from "next/image";
import Link from "next/link";
export default function Profile() {
  return (
    <div className="w-screen  mx-auto p-6 lg:px-30 sm:px-8">
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <h3 className="mx-4 mb-0 text-center capitalize text-2xl md:text-4xl font-bold text-shadesOfBlue">
          THE WAY YOU JOIN OUR COURSE
        </h3>
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12 my-16">
        <div className="group w-64 h-96 bg-gradient-to-r from-sky-600 to-violet-200  shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
          <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
            <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
              <Image src={Web} width={50} alt="Logo" />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
            <div>
              <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4">
                WEB Development.
              </h2>
            </div>
            <div>
              <p className="text-center text-base dark:text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus saepe odio, dolores corporis voluptatum nesciunt?
              </p>
            </div>
            <Link
              className="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
              href="/Course"
            >
              view details
            </Link>
          </div>
        </div>
        <div className="group w-64 h-96 bg-gradient-to-r from-sky-600 to-red-300 shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
          <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
            <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
              <Image src={figma} width={50} alt="Logo" />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
            <div>
              <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4">
                UX/UI Design.
              </h2>
            </div>
            <div>
              <p className="text-center text-base dark:text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus saepe odio, dolores corporis voluptatum nesciunt?
              </p>
            </div>
            <Link
              className="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
              href="/Course"
            >
              view details
            </Link>
          </div>
        </div>
        <div className="group w-64 h-96 bg-gradient-to-r from-blue-300 to-indigo-200 shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
          <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
            <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
              <Image src={flutter} width={50} alt="Logo" />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
            <div>
              <h2 className="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4">
                MOBILE Development.
              </h2>
            </div>
            <div>
              <p className="text-center text-base dark:text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus saepe odio, dolores corporis voluptatum nesciunt?
              </p>
            </div>
            <Link
              className="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
              href="/Course"
            >
              view details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
