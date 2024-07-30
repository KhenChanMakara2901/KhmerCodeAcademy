import React from "react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-sky-500">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            SUBSCRIBE TO NEWSTELLER
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-gray-950 sm:text-base md:mb-12">
            KHMER CODE ACADEMY (KCA)
          </p>
          <div className="mx-auto mb-4 flex max-w-xl justify-center">
            <form
              name="email-form"
              method="get"
              className="relative w-full max-w-lg"
            >
              <input
                type="email"
                className="h-9 w-full border border-solid border-black bg-white px-3 py-6 text-sm text-black"
                placeholder="Enter your email"
              />
              <input
                type="submit"
                value="Subscribe"
                className="relative right-0 top-1 w-full cursor-pointer bg-black px-6 py-2 text-center font-semibold text-white sm:absolute sm:right-[5px] sm:w-auto"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
