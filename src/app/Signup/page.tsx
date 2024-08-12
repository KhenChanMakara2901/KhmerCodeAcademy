import React from "react";
import Image from "next/image";
import Sign1 from "@/public/Sign/Sign1.png";
import Sign2 from "@/public/Sign/Sign2.webp";
import Sign3 from "@/public/Sign/Sign3.png";
import Link from "next/link";
export default function page() {
  return (
    <div className="bg-slate-100 max-w-screen-2xl mx-auto">
      <div className="bg-gradient-to-r  from-sky-700 to-fuchsia-400  animate-slide-Out h-ful p-5">
        <h2 className="font-extrabold text-white text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl animate-fadeIn">
          SIGN UP TO CELEBRATION
        </h2>
      </div>
      <div className="bg-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-slate-100 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <p className="mt-2 text-base text-gray-600">
                ALREADY HAVE AN ACCOUNT?
                <Link
                  href="/Signin"
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  LOGIN
                </Link>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Enter Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="block w-full p-4 text-black placeholder-gray-400 transition-all duration-200 border border-gray-950 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Enter Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-500 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        placeholder="Password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-500 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                    <div>
                      <div className="mt-5">
                        <input
                          type="password"
                          placeholder="Comfirm Password"
                          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-500 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      className="w-5 h-5 text-blue-600 bg-white border-gray-500 rounded"
                    />
                    <label className="ml-3 text-sm font-medium text-gray-500">
                      I agree to Khmer code Academy
                      <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        Terms of Service
                      </Link>
                      and
                      <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Create free account
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-500 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-1">
                    <Image src={Sign2} alt="Logo" width={50} />
                  </div>
                  <Link
                    target="-blank"
                    href="https://accounts.google.com/signup/v2/kidaccountinfo?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                  >
                    Sign Up with Google
                  </Link>
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-500 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-1 ml-1">
                    <Image src={Sign3} alt="Logo" width={38} />
                  </div>
                  <Link target="-blank" href="https://github.com/join">
                    Sign Up With GitHub
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 sm:px-6 lg:px-8  animate-slideIn">
            <div>
              <Image
                className="w-full mx-auto shadow shadow-green-500"
                src={Sign1}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
