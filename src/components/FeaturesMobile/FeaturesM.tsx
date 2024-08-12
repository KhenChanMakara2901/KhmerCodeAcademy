import React from "react";
import Image from "next/image";
import reactnative from "@/public/FeaturesCard/reactnative.svg";
import python from "@/public/FeaturesCard/python.svg";
import java from "@/public/FeaturesCard/java.svg";
import swift from "@/public/FeaturesCard/swift.svg";
import kotlin from "@/public/FeaturesCard/kotlin.svg";
import flutter from "@/public/FeaturesCard/flutter.svg";
import Link from "next/link";
export default function Features() {
  return (
    <section className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-start space-y-4">
        <h2 className="font-bold text-3xl  leading-[1.1] sm:text-3xl md:text-6xl">
          MOBILE Application:
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-indigo-600 p-2 hover:animate-scaleUp transition-transform">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://reactnative.dev/">
              <div className="space-y-2">
                <Image src={reactnative} alt="Logo" width={60} />
                <h3 className="font-bold">React Native</h3>
                <p className="text-sm text-muted-foreground">
                  The Basics, Workflow,UI & Interaction, Debugging and Testing.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-indigo-600 p-2 hover:animate-scaleUp transition-transform">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://www.python.org/">
              <div className="space-y-2">
                <Image src={python} alt="Logo" width={50} />
                <h3 className="font-bold">Python</h3>
                <p className="text-sm">
                  High-Level,ObJect-Oriented Interpreted and Interactive.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-indigo-600 p-2 hover:animate-scaleUp transition-transform">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://www.java.com/">
              <div className="space-y-2">
                <Image src={java} alt="Logo" width={50} />
                <h3 className="font-bold">Java</h3>
                <p className="text-sm text-muted-foreground">
                  The Basics,Java Advande,Spring Boot,Microservice.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-indigo-600 p-2 hover:animate-scaleUp transition-transform">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://swift.org/">
              <div className="space-y-2">
                <Image src={swift} alt="Logo" width={50} />
                <h3 className="font-bold">Swift</h3>
                <p className="text-sm text-muted-foreground">
                  Basics Syntax,Playground in Swift,Advantage and Disadvantage.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-indigo-600 p-2 hover:animate-scaleUp transition-transform">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://kotlinlang.org/">
              <div className="space-y-2">
                <Image src={kotlin} alt="Logo" width={50} />
                <h3 className="font-bold">Kotlin</h3>
                <p className="text-sm text-muted-foreground">
                  Variable ,Data Types ,While and For Loop ,Array and Function.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-indigo-600 p-2 hover:animate-scaleUp transition-transform">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Link target="-blank" href="https://flutter.dev/">
              <div className="space-y-2">
                <Image src={flutter} alt="Logo" width={50} />
                <h3 className="font-bold">Flutter</h3>
                <p className="text-sm text-muted-foreground">
                  Architecture ,Dart ,Widgets and Layout ,State ,Database
                  Concepts.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
