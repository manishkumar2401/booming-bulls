"use client"
import Head from 'next/head';
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef } from 'react';

const timelineData = [
  {
    title: "Order Received",
    description: "We’ve received your order and it’s being processed.",
  },
  {
    title: "Processing",
    description: "Your items are being carefully packed and labeled.",
  },
  {
    title: "Quality Check",
    description: "Each item undergoes quality inspection.",
  },
  {
    title: "Dispatched",
    description: "The shipment has left our warehouse.",
  },
  {
    title: "Delivered",
    description: "Package delivered to the destination successfully.",
  },
];

export default function HomePageComponent() {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start 0.3", "end start"],
  // });

  // const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  const steps = [
    { id: 1, title: "Step 1", content: "Description of step 1" },
    { id: 2, title: "Step 2", content: "Description of step 2" },
    { id: 3, title: "Step 3", content: "Description of step 3" },
  ];

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main className="bg-black">
        <header className="bg-gray-950 flex items-center justify-center py-16 px-4 font-inter">
          <div className="text-center max-w-4xl mx-auto">
            {/* "Our Process" button/tag */}
            <div className="inline-block px-4 py-2 mb-2 text-xs font-sm text-[#caa1ca] rounded-full shadow-sm backdrop-blur-sm bg-transparent">
              Our Process
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter font-semibold text-white leading-tight mb-3">
              Become a <span className="text-[#a35ca2]">Abcd Pro</span> in sec...
            </h1>

            {/* Tagline with emoji */}
            <p className="text-md text-white flex items-center justify-center">
              <span role="img" aria-label="rocket" className="mr-2 font-sm">🚀</span>
              Sign up. Fund. Trade.
            </p>
          </div>
        </header>

        <motion.div style={{ scale, opacity }}>
          {steps.map((step) => (
            <motion.div key={step.id} className="step">
              <motion.div className="circle" />
              <div className="content">
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="relative min-h-screen p-10 bg-gray-100" ref={containerRef}>
          <div className="relative flex max-w-3xl mx-auto">
            <div className="relative w-1 bg-gray-300 rounded-full mx-4">
              <motion.div
                className="absolute top-0 left-0 w-1 bg-green-500 rounded-full origin-top"
                style={{ height: progressHeight }}
              />
            </div>

            <div className="flex flex-col gap-24 pl-6">
              {timelineData.map((item, index) => (
                index % 2 ? <TimelineStepRight
                  key={index}
                  index={index + 1}
                  right={true}
                  title={item.title}
                  description={item.description}
                /> : ""
              ))}
            </div>
          </div>
        </div> */}


      </main>
    </>
  );
}


function TimelineStepRight({ index, title, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-6"
    >
      <motion.div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm transition-all duration-300 ${isInView ? "bg-green-600" : "bg-gray-400"
          }`}
      >
        {index}
      </motion.div>
      <div>
        <h3 className={"text-lg font-semibold "}>{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

function TimelineStepLeft({ index, title, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-6"
    >
      <motion.div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm transition-all duration-300 ${isInView ? "bg-green-600" : "bg-gray-400"
          }`}
      >
        {index}
      </motion.div>
      <div>
        <h3 className={"text-lg font-semibold "}>{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}