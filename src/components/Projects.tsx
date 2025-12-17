"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Education Consultant Website",
    description:
      "Migrated multi-page website to Next.js SPA with TypeScript for scalable frontend architecture. Built responsive UI with Tailwind CSS and implemented SSR & SSG for SEO and performance optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Axios"],
    highlights: [
      "Migrated multi-page website to Next.js SPA",
      "Implemented SSR & SSG for SEO and performance",
      "Applied code splitting and lazy loading",
    ],
  },
  {
    title: "RealBetter CRM",
    description:
      "Built comprehensive CRM features for invoice and ticket management using React Admin. Implemented Role-Based Access Control (RBAC) and integrated REST APIs using Axios.",
    tech: ["React Admin", "Redux Toolkit", "Material UI", "Axios"],
    highlights: [
      "Built CRM features for invoice and ticket management",
      "Implemented Role-Based Access Control (RBAC)",
      "Maintained code quality with ESLint",
    ],
  },
  {
    title: "Propsur Mobile App",
    description:
      "Developed mobile application using React Native and TypeScript. Created reusable components and integrated Firebase Cloud Messaging (FCM) for push notifications.",
    tech: ["React Native", "TypeScript", "Firebase"],
    highlights: [
      "Built mobile app using React Native & TypeScript",
      "Created reusable components",
      "Integrated Firebase Cloud Messaging (FCM)",
      "Fixed production bugs and improved performance",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.15 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

