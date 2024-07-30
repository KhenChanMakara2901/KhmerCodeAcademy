import React from "react";
import Image from "next/image";
import facebook from "@/public/Footer/facebook.svg";
import telegram from "@/public/Footer/telegram.svg";
import tiktok from "@/public/Footer/tiktok.svg";
import youtube from "@/public/Footer/youtube.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-12 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <p className="mt-5 text-sm text-gray-900 xl:ml-6 xl:mt-0">
              © Copyright 2024
            </p>
          </div>
          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-900 transition-all duration-200 hover:underline"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/AboutUs"
                  className="text-sm text-gray-900 transition-all duration-200 hover:underline"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/Course"
                  className="text-sm text-gray-900 transition-all duration-200 hover:underline"
                >
                  COURSE
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-sm text-gray-900 transition-all duration-200 hover:underline"
                >
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link
                  href="/Blog"
                  className="text-sm text-gray-900 transition-all duration-200 hover:underline"
                >
                  BLOG
                </Link>
              </li>
            </ul>
            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>
            <ul className="flex items-center justify-center space-x-8 xl:justify-end">
              <li>
                <Link
                  target="-blank"
                  href="https://www.facebook.com/khmercodeacademy?mibextid=LQQJ4d"
                >
                  <Image className="" src={facebook} alt="Logo" width={30} />
                </Link>
              </li>
              <li>
                <Link target="-blank" href="https://t.me/khmercodeacademy">
                  <Image src={telegram} alt="Logo" width={30} />
                </Link>
              </li>
              <li>
                <Link
                  target="-blank"
                  href="https://www.tiktok.com/@khmer_code_academy?_t=8oQBNiqWkga&_r=1"
                >
                  <Image src={tiktok} alt="Logo" width={30} />
                </Link>
              </li>
              <li>
                <Link
                  target="-blank"
                  href="http://www.youtube.com/@khmercodeacademy"
                >
                  <Image src={youtube} alt="Logo" width={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
