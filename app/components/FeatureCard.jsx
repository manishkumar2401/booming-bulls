"use client"
import { motion } from 'framer-motion';

export default function FeatureCard({ id }) {
  const titles = ['Fast Performance', 'Custom Design', '24/7 Support'];
  const descriptions = [
    'Built with performance in mind using modern frameworks.',
    'Tailored UI/UX that reflects your brand identity.',
    'Always here to assist you, anytime, anywhere.'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: id * 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md text-center"
    >
      <div className="text-3xl font-bold text-indigo-600 mb-4">🚀</div>
      <h3 className="text-xl font-semibold mb-2">{titles[id - 1]}</h3>
      <p className="text-gray-600">{descriptions[id - 1]}</p>
    </motion.div>
  );
}
