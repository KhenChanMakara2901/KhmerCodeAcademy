import Image from "next/image";
import React from "react";
import Phone from "@/public/Contact/Phone.png";
import Mail from "@/public/Contact/Mail.png";
import Location from "@/public/Contact/Location.png";
export default function page() {
  return (
    <div className="max-w-screen-2xl bg-slate-100 mx-auto">
      <div className="bg-gradient-to-r  from-sky-700 to-fuchsia-400  animate-slide-Out h-ful p-5">
        <h2 className="font-extrabold text-white text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl animate-fadeIn">
          CONTACT US
        </h2>
      </div>
      <div className="py-10 bg-slate-100 sm:py-16 lg:py-24 animate-fadeIn">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white shadow shadow-blue-900 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 mx-auto pt-8">
                  <Image
                    className="items-center"
                    src={Phone}
                    alt="Logo"
                    width={50}
                  />
                </div>
                <div className="p-6">
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    (+855) 70 256 959
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-white shadow shadow-red-900 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 mx-auto pt-8">
                  <Image
                    className="items-center"
                    src={Mail}
                    alt="Logo"
                    width={50}
                  />
                </div>
                <div className="p-6">
                  <p className="mt-6 text-lg font-medium text-gray-900">
                    academy@KCA.example.com
                  </p>
                </div>
              </div>
              <div className="overflow-hidden bg-white shadow shadow-fuchsia-900 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 mx-auto pt-8">
                  <Image
                    className="items-center"
                    src={Location}
                    alt="Logo"
                    width={50}
                  />
                </div>
                <div className="p-6">
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                    SP Building, Toul Kork <br /> Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 overflow-hidden bg-white shadow shadow-lime-900 rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  GET IN TOUCH
                </h3>
                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        NAME*
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        EMAIL*
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        PHONE*
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        ADDRESS*
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-base font-medium text-gray-900">
                        MESSAGE*
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"></textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        SUBMITE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
