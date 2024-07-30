import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 mt-20">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
        <div className="md:w-1/3 p-6 rounded-lg border shadow shadow-blue-700 bg-gradient-to-r  from-orange-600 to-orange-200 animate-slideIn">
          <h2 className="text-2xl font-bold mb-2">HTML</h2>
          <p className="text-white mb-4">3 PROJECT</p>
          <p className="text-4xl font-bold mb-4">
            $60<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Html Form</li>
            <li>Html Table</li>
            <li>Html Crud</li>
            <li>Html Link</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-white text-gray-900 font-bold rounded-full hover:bg-green-600 hover:scale-105 focus:outline-none focus:shadow-outline-blue transition duration-200">
            <Link target="-blank" href="https://t.me/Kongsun">
              REGISTER NOW
            </Link>
          </button>
        </div>
        <div className="md:w-1/3 p-6 rounded-lg border shadow shadow-orange-600 bg-gradient-to-r from-blue-700 to-blue-200 animate-slideIn">
          <h2 className="text-2xl font-bold mb-2">CSS</h2>
          <p className="text-white mb-4">3 PROJECT</p>
          <p className="text-4xl font-bold mb-4">
            $60<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Css Building Block</li>
            <li>Css Styling</li>
            <li>Css Layout</li>
            <li>Css Advance</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-white text-gray-900 font-bold rounded-full hover:bg-green-700 hover:scale-105 focus:outline-none focus:shadow-outline-blue transition duration-200">
            <Link target="-blank" href="https://t.me/Kongsun">
              REGISTER NOW
            </Link>
          </button>
        </div>
        <div className="md:w-1/3 p-6 rounded-lg border shadow shadow-black bg-gradient-to-r from-yellow-500 to-yellow-200 animate-slideIn">
          <h2 className="text-2xl font-bold mb-2">JAVASRICPT</h2>
          <p className="text-white mb-4">3 PROJECT</p>
          <p className="text-4xl font-bold mb-4">
            $75<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Syntax</li>
            <li>Variable</li>
            <li>Data Types</li>
            <li>Array</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-white text-gray-900 font-bold rounded-full hover:bg-green-700 hover:scale-105 focus:outline-none focus:shadow-outline-blue transition duration-200">
            <Link target="-blank" href="https://t.me/Kongsun">
              REGISTER NOW
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-center pt-10">
        <div className="md:w-1/3 p-6 rounded-lg border shadow shadow-yellow-500  bg-gradient-to-r from-blue-900 to-blue-200 animate-slideIn">
          <h2 className="text-2xl font-bold mb-2">JQUERY</h2>
          <p className="text-white mb-4">3 PROJECT</p>
          <p className="text-4xl font-bold mb-4">
            $80<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Jquery Effect</li>
            <li>jQuery HTML/CSS</li>
            <li>jQuery Form</li>
            <li>jQuery Events</li>
            <li>jQuery Misc</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-white text-gray-900 font-bold rounded-full hover:bg-green-700 hover:scale-105 focus:outline-none focus:shadow-outline-blue transition duration-200">
            <Link target="-blank" href="https://t.me/Kongsun">
              REGISTER NOW
            </Link>
          </button>
        </div>
        <div className="md:w-1/3 p-6 rounded-lg border shadow shadow-blue-950 bg-gradient-to-r from-sky-500 to-sky-200 animate-slideIn">
          <h2 className="text-2xl font-bold mb-2">REACT.JS</h2>
          <p className="text-white mb-4">PROJECT Free TAILWIND</p>
          <p className="text-4xl font-bold mb-4">
            $100<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Components</li>
            <li>Rendering</li>
            <li>Hooks</li>
            <li>Routers</li>
            <li>Stat Management</li>
            <li>Styling</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-white text-gray-900 font-bold rounded-full hover:bg-green-700 hover:scale-105 focus:outline-none focus:shadow-outline-blue transition duration-200">
            <Link target="-blank" href="https://t.me/Kongsun">
              REGISTER NOW
            </Link>
          </button>
        </div>
        <div className="md:w-1/3 p-6 rounded-lg border shadow shadow-sky-600  bg-gradient-to-r from-black to-white animate-slideIn">
          <h2 className="text-2xl font-bold mb-2 text-white">NEXT.JS 14</h2>
          <p className="text-white mb-4">3 PROJECT Free TAILWIND</p>
          <p className="text-4xl text-white font-bold mb-4">
            $125<span className="text-white text-lg">/month</span>
          </p>
          <ul className="text-sm text-white">
            <li>Routing</li>
            <li>Data Fetcing</li>
            <li>Rendering</li>
            <li>Styling/Caching</li>
            <li>Configuring</li>
            <li>Deploying.Vercel</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-white text-gray-900 font-bold rounded-full hover:bg-green-700 hover:scale-105 focus:outline-none focus:shadow-outline-blue transition duration-200">
            <Link target="-blank" href="https://t.me/Kongsun">
              REGISTER NOW
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
