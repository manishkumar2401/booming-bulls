"use client"
import Head from 'next/head';
import TimelineSteps from "./TimelineSteps"
import { motion, useTime, useTransform } from 'framer-motion';
import React from 'react';


export default function HomePageComponent() {
  const time = useTime()
  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false })
  const bgAnimate = useTransform(rotate, (r) => { return `conic-gradient(from ${r}deg, black, grey, black)` })
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main className="h-100vh bg-black">
        <header className="flex items-center justify-center py-16 px-4 font-inter">
          <div className="text-center max-w-4xl mx-auto">
            {/* "Our Process" button/tag */}
            <div className="inline-block px-4 py-2 mb-2 text-xs text-[#caa1ca] rounded-full shadow-sm backdrop-blur-sm bg-transparent heading-button">
              Our Process
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter font-semibold text-white leading-tight mb-3">
              Become a <span className="text-[#a35ca2]">Abcd Pro</span> in sec...
            </h1>

            {/* Tagline with emoji */}
            <p className="text-md text-white flex items-center justify-center">
              <span role="img" aria-label="rocket" className="mr-2 font-sm">🚀</span>
              Sign up. Fund. Trade.
            </p>
          </div>
        </header>

        <TimelineSteps />
        <div className='flex justify-center items-center py-15'>
          <div className="button-container relative">
            <div className='relative rounded-lg overflow-hidden py-2 px-1 before:absolute before:top-[-50%] before:bottom-[-50%] before:left-[-50%] before:right-[-50%] before:bg-conic-180  before:from-indigo-600 before:via-indigo-50 before:to-indigo-600 before:to-50% before:animate-spin'>
              <a href="/" className='relative bg-[#6242a5] px-5 py-2 rounded-lg text-white transition-colors duration-200 z-10'>Open FREE Acount</a>
            </div>
            {/* <motion.div className='absolute  rounded-lg' style={{ background: bgAnimate }}/> */}
          </div>
        </div>


      </main>
    </>
  );
}