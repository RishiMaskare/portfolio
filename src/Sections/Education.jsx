import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "Government College of Engineering, Amravati",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2023 — 2027",
    score: "CGPA: 8.76/10",
  },
  {
    institution: "Bhawanji Bhai Chavhan Jr. College, Chandrapur",
    degree: "Higher Secondary Education (HSC) – Maharashtra State Board",
    duration: "2021 — 2023",
    score: "88.50%",
  },
  {
    institution: "M.B. Model High School, Chandrapur",
    degree: "Secondary School Certificate (SSC) – Maharashtra State Board",
    duration: "2020 — 2021",
    score: "88.60%",
  }
];

export default function Education() {
  return (
    <section id="education" className="bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500"
        >
          Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:via-purple-500 before:to-transparent">
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot Icon - Adjusted for Mobile positioning */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black absolute left-0 md:left-1/2 md:-translate-x-1/2 shadow-[0_0_15px_rgba(20,184,166,0.5)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300 z-10">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-purple-500"></div>
              </div>

              {/* Content Card - Added ml-12 for mobile to clear the dot */}
              <div className="w-full ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-teal-500/50 transition-all duration-300 shadow-xl">
                <div className="flex flex-col mb-2">
                  <span className="text-xs font-mono text-purple-400 mb-1">{edu.duration}</span>
                  <h3 className="font-bold text-lg text-teal-400 leading-snug">{edu.institution}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {edu.degree}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold tracking-wide">
                  {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}