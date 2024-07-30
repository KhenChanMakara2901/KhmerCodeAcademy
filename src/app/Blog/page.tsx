import React from "react";
import Image from "next/image";
import BLog1 from "@/public/Blog/Blog1.jpg";
import BLog2 from "@/public/Blog/Blog2.jpg";
import BLog3 from "@/public/Blog/Blog3.jpg";
import BLog4 from "@/public/Blog/Blog4.jpg";
import BLog5 from "@/public/Blog/Blog5.jpg";
import BLog6 from "@/public/Blog/Blog6.jpg";
import Link from "next/link";

export default function page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-4xl dark:text-white animate-fadeIn">
          FROM THE BLOG
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="lg:flex">
            <Image
              className="object-cover shadow shadow-emerald-600 w-full h-56 rounded-lg lg:w-64 animate-slideIn"
              src={BLog1}
              alt="Image"
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link
                href="#"
                className="text-2xl font-extrabold text-gray-800 hover:underline dark:text-white "
              >
                HOW TO USE STICKY NOTE FOR PROBLEM SOLVING
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>
          <div className="lg:flex">
            <Image
              className="object-cover shadow shadow-emerald-600 w-full h-56 rounded-lg lg:w-64 animate-slideIn"
              src={BLog2}
              alt="Image"
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link
                href="#"
                className="text-2xl font-extrabold text-gray-800 hover:underline dark:text-white "
              >
                HOW TO USE STICKY NOTE FOR PROBLEM SOLVING
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>
          <div className="lg:flex">
            <Image
              className="object-cover shadow shadow-emerald-600 w-full h-56 rounded-lg lg:w-64 animate-slideIn"
              src={BLog3}
              alt="Image"
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link
                href="#"
                className="text-2xl font-extrabold text-gray-800 hover:underline dark:text-white "
              >
                MORNING ROUTINE TO BOOST YOUR MOOD
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 25 November 2020
              </span>
            </div>
          </div>
          <div className="lg:flex">
            <Image
              className="object-cover shadow shadow-emerald-600 w-full h-56 rounded-lg lg:w-64 animate-slideIn"
              src={BLog4}
              alt="Image"
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link
                href="#"
                className="text-2xl font-extrabold text-gray-800 hover:underline dark:text-white "
              >
                ALL THE FEATUREA YOU WANT TO KNOW
              </Link>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 30 September 2020
              </span>
            </div>
          </div>
          <div className="lg:flex">
            <Image
              className="object-cover shadow shadow-emerald-600 w-full h-56 rounded-lg lg:w-64 animate-slideIn"
              src={BLog5}
              alt="Image"
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link
                href="#"
                className="text-2xl font-extrabold text-gray-800 hover:underline dark:text-white "
              >
                MINIMAL WORKSPACE FOR YOUR INSPIRATIONS
              </Link>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 13 October 2019
              </span>
            </div>
          </div>
          <div className="lg:flex">
            <Image
              className="object-cover shadow shadow-emerald-600 w-full h-56 rounded-lg lg:w-64 animate-slideIn"
              src={BLog6}
              alt="Image"
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link
                href="#"
                className="text-2xl font-extrabold text-gray-800 hover:underline dark:text-white "
              >
                WHAT DO YOU WANT TO KNOW ABOUT BLOCKCHANE
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
