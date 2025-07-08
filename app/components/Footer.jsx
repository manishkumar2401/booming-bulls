import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import HoverCard from './HoverCard';

export default function Footer() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const x = useTransform(scrollYProgress, [0.25, 0.5], [-100, 200]);
    return (
        <footer ref={containerRef} className="relative flex items-center justify-center py-20 pt-30 px-4 font-inter">
            <div  className="scroll-container py-20 overflow-hidden">
                <motion.div ref={textRef} className="scroll-text text-[8rem] text-white" style={{ x }}>
                    Trade Anytime, <span className="text-[#a35ca2]">Anywhere</span>
                </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center max-w-4xl mx-auto">
                <div className="img-container bg-black rounded-lg p-4 mb-4">
                <HoverCard/>
                {/* <img src="/assets/img/qr.webp" width={200} alt="" /> */}
                </div>
                <img src="/assets/img/apps.webp" width={120} alt="" />
            </div>
        </footer>
    )
}
