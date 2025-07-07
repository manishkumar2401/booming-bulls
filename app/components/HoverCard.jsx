import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function HoverCard() {
    // Motion values for tracking mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring animations for smooth rotation
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform values to map mouse position to rotation angles
    // RotateY is controlled by mouseX (horizontal movement)
    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5], // Input range for Y position (normalized -0.5 to 0.5)
        ['10deg', '-10deg'] // Output range for X rotation
    );
    // RotateX is controlled by mouseY (vertical movement)
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5], // Input range for X position (normalized -0.5 to 0.5)
        ['-10deg', '10deg'] // Output range for Y rotation
    );

    // Handle mouse movement over the card
    const handleMouseMove = (e) => {
        // Get the bounding box of the card element
        const rect = e.currentTarget.getBoundingClientRect();
        // Calculate mouse position relative to the center of the card
        // Normalized to -0.5 to 0.5 range
        const newX = (e.clientX - rect.left) / rect.width - 0.5;
        const newY = (e.clientY - rect.top) / rect.height - 0.5;

        // Update motion values
        x.set(newX);
        y.set(newY);
    };

    // Handle mouse leaving the card
    const handleMouseLeave = () => {
        // Reset motion values to center when mouse leaves,
        // allowing the card to smoothly return to its original position
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

