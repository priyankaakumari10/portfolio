"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 text-black bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Education & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech (CSE)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Ganga Institute of Technology & Management
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2020–2023 • 75%</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Diploma (CSE)</h4>
                <p className="text-gray-700 dark:text-gray-300">Kasturba Institute of Technology</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2016–2019 • 75%</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Certifications
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  SQL Certification
                </h4>
                <p className="text-gray-700 dark:text-gray-300">HackerRank</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Java Certification
                </h4>
                <p className="text-gray-700 dark:text-gray-300">HackerRank</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

