"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ContactProps {
  scrollToSection: (id: string) => void;
}

export default function Contact({ scrollToSection }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "1702priyankakumari@gmail.com",
      href: "mailto:1702priyankakumari@gmail.com",
      ariaLabel: "Send email to Priyanka Kumari",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9560720902",
      href: "tel:9560720902",
      ariaLabel: "Call Priyanka Kumari",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "View Profile",
      href: "https://linkedin.com/in/priyanka-kumari-5a6387210",
      ariaLabel: "Visit Priyanka Kumari's LinkedIn profile",
      external: true,
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "View Profile",
      href: "https://github.com/priyankaakumari10",
      ariaLabel: "Visit Priyanka Kumari's GitHub profile",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-12"
        >
          I'm open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 + index * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={item.ariaLabel}
            >
              <div className="text-2xl mb-2" role="img" aria-hidden="true">
                {item.icon}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</div>
              <div
                className={`text-sm ${
                  item.external
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 break-all"
                }`}
              >
                {item.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

