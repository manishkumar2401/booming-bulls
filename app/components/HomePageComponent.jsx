"use client"
import Head from 'next/head';
import TimelineSteps from "./TimelineSteps"
import Footer from "./Footer"
import { motion, useAnimation, useInView, useTime, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';


export default function HomePageComponent() {
  const time = useTime()
  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false })
  const bgAnimate = useTransform(rotate, (r) => { return `conic-gradient(from ${r}deg, black, grey, black)` })
  const deviderCss = "relative pb-[10px] py-3 before:absolute before:pb-[1px] before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#c06cbf8c] before:to-transparent mx-auto"

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView])


  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main className="h-100vh bg-black">
        <header className="flex items-center justify-center py-16 px-4 font-inter">
          <div className="text-center max-w-4xl mx-auto">
            {/* "Our Process" button/tag */}
            <div className="inline-block px-4 py-2 mb-2 text-xs text-[#caa1ca] rounded-full backdrop-blur-sm bg-transparent heading-button">
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

        {/* Compare Plans Section */}
        <div className="flex flex-col items-center justify-center px-4 font-inter">

          <div className="text-center max-w-4xl py-16 mx-auto w-full">
            <div className="inline-block px-4 py-2 mb-2 text-xs text-[#caa1ca] rounded-full backdrop-blur-sm bg-transparent heading-button">
              Compare Plans
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter font-semibold text-white leading-tight mb-3">
              Compare your <span className="text-[#a35ca2]">Abcd</span> plan
            </h1>
            <p className="text-md text-white flex items-center justify-center">
              Flexible Deposits for Every Trader
            </p>
          </div>

          <div className='flex w-full mx-auto items-center justify-center px-4 max-w-4x1 md:max-w-5xl lg:max-w-7xl'>
            <ul className='w-1/4 text-white'>
              <li className={deviderCss}>Who It's For</li>
              <li className={deviderCss}>Initial Capital Requirement</li>
              <li className={deviderCss}>Spread Advantage</li>
              <li className={deviderCss}>Trading Fees</li>
              <li className={deviderCss}>Leverage Capacity</li>
              <li className={deviderCss}>Minimum Lot Size</li>
              <li className={deviderCss}>Trade Execution Limit</li>
              <li className={deviderCss}>Open Position Capacity</li>
              <li className={deviderCss}>Stop Out Threshold</li>
              <li className={deviderCss}>Margin Call Activation</li>
              <li className={deviderCss}>Swap Policy</li>
              <li className={deviderCss}>Risk Exposure</li>
              <li className='pb-[10px] py-3'>Asset Options</li>
            </ul>
            <ul className='w-1/4 text-white text-center bg-linear-145 from-[#a35ca228] to-transparent to-80% p-8 rounded-lg'>
              <li className={deviderCss + " text-3xl"}>Abce Vintage</li>
              <li className={deviderCss}>Perfect for balanced, all-level traders looking for consistency and solid growth</li>
              <li className={deviderCss}>$10%</li>
              <li className={deviderCss}>from 0.2 pips</li>
              <li className={deviderCss}>No commission</li>
              <li className={deviderCss}>1:Unlimited</li>
              <li className={deviderCss}>0.01</li>
              <li className={deviderCss}>200 trades during peak hours</li>
              <li className={deviderCss}>Unlimited</li>
              <li className={deviderCss}>0%</li>
              <li className={deviderCss}>30%</li>
              <li className={deviderCss}>0%</li>
              <li className={deviderCss}>Moderate</li>
              <li className='pb-[10px] py-3'>Forex, Crypto, Stocks, Commodities, Indices</li>
              <li className='pb-[10px] py-5'>
                <a href="/" className='text-white text-center bg-linear-145 from-[#6242a5] to-[#7e5ec4] to-80% px-5 py-3 rounded-xl'>Start Trading</a>
              </li>
            </ul>
            <ul className='w-1/4 text-white text-center p-8'>
              <li className={deviderCss + " text-3xl"}>Abce Cent</li>
              <li className={deviderCss}>Designed for beginners ready to step into the trading world with minimal risk.</li>
              <li className={deviderCss}>$10</li>
              <li className={deviderCss}>from 0.3 pips</li>
              <li className={deviderCss}>Zero commission</li>
              <li className={deviderCss}>1:Unlimited</li>
              <li className={deviderCss}>same</li>
              <li className={deviderCss}>200 trades during peak hours</li>
              <li className={deviderCss}>Unlimited</li>
              <li className={deviderCss}>0%</li>
              <li className={deviderCss}>30%</li>
              <li className={deviderCss}>0%</li>
              <li className={deviderCss}>Low</li>
              <li className='pb-[10px] py-3'>Forex, Crypto, Stocks, Commodities, Indices</li>
              <li className='pb-[10px] py-5'>
                <a href="/" className='text-white text-center bg-linear-145 from-[#6242a5] to-[#7e5ec4] to-80% px-5 py-3 rounded-xl'>Start Trading</a>
              </li>
            </ul>
            <ul className='w-1/4 text-white text-center bg-linear-145 from-[#a35ca228] to-transparent to-80% p-8 rounded-lg'>
              <li className={deviderCss + " text-3xl"}>Abce Pro</li>
              <li className={deviderCss}>Ideal for experienced traders seeking precision, speed, and high-stakes performance.</li>
              <li className={deviderCss}>$500</li>
              <li className={deviderCss}>from 0.1 pips</li>
              <li className={deviderCss}>No commission</li>
              <li className={deviderCss}>1:Unlimited</li>
              <li className={deviderCss}>same</li>
              <li className={deviderCss}>200 trades during peak hours</li>
              <li className={deviderCss}>Unlimited</li>
              <li className={deviderCss}>0%</li>
              <li className={deviderCss}>30%</li>
              <li className={deviderCss}>0%</li>
              <li className={deviderCss}>Hight</li>
              <li className='pb-[10px] py-3'>Forex, Crypto, Stocks, Commodities, Indices</li>
              <li className='pb-[10px] py-5'>
                <a href="/" className='text-white text-center bg-linear-145 from-[#6242a5] to-[#7e5ec4] to-80% px-5 py-3 rounded-xl'>Start Trading</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payouts Section */}
        <div className="relative flex flex-col items-center justify-center font-inter">

          <div className="absolute top-0 text-center max-w-4xl px-4 mx-auto pt-16 w-full z-10">
            <div className="inline-block py-2 px-3 mb-2 text-xs text-[#caa1ca] rounded-full backdrop-blur-sm bg-transparent heading-button">
              Payouts
            </div>
            <div ref={ref}>
              <motion.h1 initial="hidden" transition={{ staggerChildren: 0.05 }} animate={mainControls} className="text-3xl md:text-4xl lg:text-6xl tracking-tighter font-semibold text-white leading-tight mb-3">
                {("We've Paid Out Over").split("").map((word, index) => <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, scale: 1 } }} key={index}>{word}</motion.span>)}
                <br />
                {("$1M to Traders").split("").map((word, index) => <motion.span variants={{ hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, scale: 1 } }} key={index}>{word}</motion.span>)}
              </motion.h1>
            </div>
            <p className="text-md text-white flex items-center justify-center">
              Your Trust is Our Fuel—Power Up with Abcd
            </p>
            <div className="counter text-white text-9xl opacity-40"> $999,186+ </div>
          </div>

          <div className='relative flex flex-col w-full mx-auto items-center overflow-hidden' style={{ height: "575px", paddingTop: "140px" }}>
            <video autoPlay muted loop playsInline preload="true" className="rounded-lg shadow-lg">
              <source src="/assets/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className='absolute w-full h-full flex justify-center pb-[180px] bg-[black]/50' style={{alignItems: "end"}}>
              <a href="/" className='px-3 py-2 bg-black text-white rounded-lg' rel="noopener noreferrer">Are you next?</a>
            </div>
          </div>
        </div>

        <Footer/>

      </main>
    </>
  );
}