import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <footer ref={ref} className="flex items-center justify-center py-30 px-4 font-inter">
        <div>
            <motion.p
                ref={ref}
                style={{
                    x: isInView ? -100 : 0,
                    transition: "opacity 0.5s ease-in-out",
                }}
                className='text-7xl font-bold text-center text-gray-800 dark:text-white'
            >
                Trade Anytime, Anywhere
            </motion.p>
        </div>
            <div className="text-center max-w-4xl mx-auto">

            </div>
        </footer>
    )
}
