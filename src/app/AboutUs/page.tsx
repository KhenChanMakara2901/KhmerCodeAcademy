import React from "react";
import Image from "next/image";
import About1 from "@/public/About Us/About1.jpg";
import About2 from "@/public/About Us/About2.jpg";
import About3 from "@/public/About Us/About3.jpg";
import About4 from "@/public/About Us/About4.jpg";

export default function page() {
  return (
    <div className="text-center p-10">
      <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-fadeIn">
        WHY YOU SHOULD CHOOSE US
      </h2>
      <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <Image
            src={About1}
            alt="Image"
            className="inline-block rounded-xl shadow-lg shadow-fuchsia-600 border border-merino-400 animate-slideIn"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-3xl md:mt-0 sm:text-4xl">
            SIMPLE INTEGRATION
          </h3>
          <p className="sm:text-lg mt-6">
            Use the LocaleData gem to download translations directly into your
            Ruby on Rails projects using the provided command line interface.
            Just create a project and follow the step-by-step instructions.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <Image
            src={About2}
            alt="Image"
            className="inline-block rounded-xl shadow-lg shadow-lime-500 border border-merino-400 animate-slideIn"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-3xl md:mt-0 sm:text-4xl">
            EASY COLLABORATION
          </h3>
          <p className="sm:text-lg mt-6">
            All LocaleData projects are private. Each project can have multiple
            collaborators with different roles and access permissions. You
            determine who can see and edit your translations. Just add admins,
            developers, translators and configure their access rights.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <Image
            src={About3}
            alt="Image"
            className="inline-block rounded-xl shadow-lg shadow-emerald-600 border border-merino-400 animate-slideIn"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-3xl md:mt-0 sm:text-4xl">
            NO MORE SYNTAX ERRORS
          </h3>
          <p className="sm:text-lg mt-6">
            LocaleData provides you easy import/export functions for your YAML
            files. Use a simple editor with many predefined languages to manage
            your locales. LocaleData also supports multiple translation types,
            such as simple text, plural forms, numbers, booleans, symbols,
            arrays.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <Image
            src={About4}
            alt="Image"
            className="inline-block rounded-xl shadow-lg shadow-sky-600 border border-merino-400 animate-slideIn"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-3xl md:mt-0 sm:text-4xl">
            BULK EDITING
          </h3>
          <p className="sm:text-lg mt-6">
            Do you need to change the path of many translation keys at once? No
            problem, just use the bulk editing feature and enjoy the results.
          </p>
        </div>
      </div>
    </div>
  );
}
