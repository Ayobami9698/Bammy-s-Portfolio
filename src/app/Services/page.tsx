"use client";


import React from 'react'
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="min-h-screen px-4 py-10 bg-[#121212]  ">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-white"
        >
          My Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          <ServiceCard
            title="Web Development"
            description="Modern, responsive websites built with React, Next.js, and Tailwind CSS."
            icon="🌐"
          />
          <ServiceCard
            title="UI/UX Design"
            description="Clean, user-focused design for web and mobile apps using Figma & design systems."
            icon="🎨"
          />
          <ServiceCard
            title="Backend Development"
            description="APIs and server logic using Node.js, Express, Python, or Firebase."
            icon="⚙️"
          />
          <ServiceCard
            title="SEO & Performance"
            description="Optimize websites for search engines, speed, and accessibility."
            icon="🚀"
          />
          <ServiceCard
            title="Content Management"
            description="Integrate CMS like Sanity, WordPress, or Notion API for easy content updates."
            icon="🗂️"
          />
          <ServiceCard
            title="Consulting & Mentorship"
            description="One-on-one sessions to review code, plan architecture, or improve your projects."
            icon="🤝"
          />
        </div>
      </div>
    </main>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

export default page
