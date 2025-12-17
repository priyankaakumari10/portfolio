"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStack = ["React.js", "Next.js", "TypeScript", "React Native", "Redux Toolkit"];

  return (
    <section
      id="hero"
      ref={ref}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto text-center w-full"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Frontend Developer{" "}
          <motion.span
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400 text-2xl block sm:inline"
          >
            <br className="hidden sm:block" /> 2+ Years Experience
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          I build{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">
            scalable, high-performance
          </span>{" "}
          web applications and mobile apps using{" "}
          <span className="font-medium text-gray-800 dark:text-gray-200">
            React.js, Next.js, TypeScript, and React Native
          </span>
          .
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300 mb-12"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5 + index * 0.1, duration: shouldReduceMotion ? 0 : 0.3 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Navigate to contact section"
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="https://github.com/priyankaakumari10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Visit GitHub profile (opens in new tab)"
          >
            View GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

