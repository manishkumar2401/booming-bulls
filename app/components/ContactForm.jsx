"use client"
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto grid gap-4"
    >
      <input type="text" placeholder="Your Name" className="border p-3 rounded-md w-full" required />
      <input type="email" placeholder="Your Email" className="border p-3 rounded-md w-full" required />
      <textarea placeholder="Your Message" rows="5" className="border p-3 rounded-md w-full" required />
      <button type="submit" className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition">
        Send Message
      </button>
    </motion.form>
  );
}
