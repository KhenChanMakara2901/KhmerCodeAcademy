import React from "react";
import Image from "next/image";
import next from "@/public/Features/next.svg";
import react from "@/public/Features/react.svg";
import database from "@/public/Features/database.svg";
import tailwind from "@/public/Features/tailwind.svg";
import Auth from "@/public/Features/Auth.png";
import nodejs from "@/public/Features/nodejs.svg";
import Link from "next/link";

export default function Featuress() {
  return (
    <section className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20 rounded-2xl">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold  text-3xl  leading-[1.1] sm:text-3xl md:text-6xl">
          WEB Development.
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-sky-500 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://nextjs.org/">
              <div className="space-y-2">
                <Image src={next} width={60} alt="Logo" />
                <h3 className="font-bold">Next.js 14</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-sky-500 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://react.dev/">
              <div className="space-y-2">
                <Image src={react} width={60} alt="Logo" />
                <h3 className="font-bold">React 18</h3>
                <p className="text-sm">
                  Server and Client Components. Use hook.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-sky-500 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://www.postgresql.org/">
              <div className="space-y-2">
                <Image src={database} width={60} alt="Logo" />
                <h3 className="font-bold">Database</h3>
                <p className="text-sm text-muted-foreground">
                  ORM using Prisma and deployed on PlanetScale.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-sky-500 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://tailwindcss.com/">
              <div className="space-y-2">
                <Image src={tailwind} width={60} alt="Logo" />
                <h3 className="font-bold">Components</h3>
                <p className="text-sm text-muted-foreground">
                  UI components built using Radix UI and styled with Tailwind
                  CSS.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-sky-500 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://next-auth.js.org/">
              <div className="space-y-2">
                <Image src={Auth} width={40} alt="Logo" />
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Authentication using NextAuth.js and middlewares.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-sky-500 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://nodejs.org/en">
              <div className="space-y-2">
                <Image src={nodejs} width={60} alt="Logo" />
                <h3 className="font-bold">Node.Js</h3>
                <p className="text-sm text-muted-foreground">
                  Free and Learning with Back.End
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
