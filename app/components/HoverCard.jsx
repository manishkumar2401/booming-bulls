import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function HoverCard() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5], 
        ['10deg', '-10deg'] 
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ['-10deg', '10deg']
    );

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const newX = (e.clientX - rect.left) / rect.width - 0.5;
        const newY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(newX);
        y.set(newY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };


    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d', // Essential for 3D effects
            }}
            className="relative w-full max-w-md bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center p-2 transition-all duration-300 ease-out shadow-purple-500/50 hover:scale-0.95 hover:bg-gray-700"
            whileHover={{ scale: 1.05, rotateX: '0deg', rotateY: '0deg' }}
        >
            <img className='invert' src="/assets/img/qr.webp" width={250} alt="" />
        </motion.div>
    )
}

