"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p className="text-lg mb-4">
            I am a Frontend Developer with 1.4+ years of professional experience at Techvins
            Software Pvt. Ltd, specializing in building scalable web applications and mobile apps.
            I have a strong foundation in React.js, Next.js, and React Native, with expertise in
            TypeScript, Redux Toolkit, and modern CSS frameworks.
          </p>
          <p className="text-lg mb-4">
            My experience includes migrating legacy applications to modern frameworks, implementing
            SSR and SSG for performance optimization, building CRM systems with role-based access
            control, and developing cross-platform mobile applications. I am passionate about
            writing clean, maintainable code and creating user-friendly interfaces.
          </p>
          <p className="text-lg">
            I am currently seeking opportunities to contribute to innovative projects and continue
            growing as a frontend developer in a collaborative environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

