"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:text-center">
        <div className="md:mt-2 md:w-3/5 mx-auto">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Akhil!
          </h1>
          <p className="text-lg mt-8 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <a
              href="https://x.com/0xAkhil_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-600 hover:text-teal-800 transition-colors duration-200"
            >
              Web3 Builder
            </a>{" "}
            and Engineer on the Trading team at{" "}
            <a
              href="https://www.anchorage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-600 hover:text-teal-800 transition-colors duration-200"
            >
              Anchorage Digital
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection