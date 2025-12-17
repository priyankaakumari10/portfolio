"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Priyanka Kumari. All rights reserved.
      </p>
    </footer>
  );
}

