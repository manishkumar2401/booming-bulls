"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
const steps = [
    { id: 1, scrollValue: 0, title: 'Step 1', subtitle: 'Register your account' },
    { id: 2, scrollValue: 0.25, title: 'Step 2', subtitle: 'Verify your email' },
    { id: 3, scrollValue: 0.5, title: 'Step 3', subtitle: 'Complete your profile' },
    { id: 4, scrollValue: 0.75, title: 'Step 4', subtitle: 'Complete your profile' },
];

export default function TimelineSteps() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
      })
    return (
        <div ref={ref} style={{ minHeight:"100%", background:"linear-gradient(186deg, rgb(0 0 0 / 73%), rgb(0 0 0)) 0% 0% / cover, url(/assets/img/home-1.webp)", backgroundSize:"cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
            {steps.map((el, i) => {
                return <Step key={i}
                    index={i}
                    title={el.title}
                    scrollValue={el.scrollValue}
                    subtitle={el.subtitle}
                    scrollY={scrollYProgress} />
            })}
        </div>
    )
}


const Step = ({ index, title, subtitle, scrollY, scrollValue }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const height = useTransform(scrollY, [scrollValue, (scrollValue + 0.25)], ["0%", "100%"]);
    
    return (
        (index + 1) % 2 === 0 ? <div ref={ref} className="flex w-full text-white h-75 pb-18">
            {/* Left Section */}
            <div className="w-1/5 md:w-1/2 order-first md:order-last"></div>
            {/* Center Section */}
            <div className="w-[1px] relative flex justify-center items-start order-2">
                <div className="absolute top-15 h-full w-1 bg-gray-500/10 rounded overflow-hidden shadow-md">
                    <motion.div
                        className="w-full bg-blue-500 rounded"
                        style={{ height }}
                    />
                </div>
                <div className="absolute text-center">
                    <div className="text-5xl font-bold">0{index + 1}</div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="w-4/5 md:w-1/2 flex flex-col items-start md:items-end pl-15 md:pr-12 order-last md:order-first">
                <span className="text-gray-400">{title}</span>
                <h2 className="text-2xl font-semibold">{subtitle}</h2>
            </motion.div>
        </div> : <div ref={ref} className="flex w-full text-white h-75 pb-18">
            {/* Left Section */}
            <div className="w-1/5 md:w-1/2"></div>
            {/* Center Section */}
            <div className="w-[1px] relative flex justify-center items-start">
                <div className="absolute top-15 h-full w-1 bg-gray-500/10 rounded overflow-hidden shadow-md">
                    <motion.div
                        className="w-full bg-blue-500 rounded"
                        style={{ height }}
                    />
                </div>
                <div className="absolute text-center">
                    <div className="text-5xl font-bold">0{index + 1}</div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="w-4/5 md:w-1/2 flex flex-col items-start md:items-start pl-15">
                <span className="text-gray-400">{title}</span>
                <h2 className="text-2xl font-semibold">{subtitle}</h2>
            </motion.div>
        </div>
    );
}