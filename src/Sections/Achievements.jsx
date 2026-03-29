import { motion } from "framer-motion";

import codethonImg from "../assets/codethon.jpg";
import esperanzaImg from "../assets/esperanza.jpg";

const achievements = [
  {
    title: "Codethon’26 - 2nd Rank",
    org: "PRPCEM (Techelons National Tech Fest)",
    description:
      "Secured 2nd Rank among 150+ participants in Codethon’26, a DSA competition conducted under Techelons. Excelled across multiple elimination rounds including competitive coding.",
    image: codethonImg,
  },
  {
    title: "Coding Decoding Competition - Joint 2nd Rank",
    org: "PRMIT&R (Esperanza 2K26)",
    description:
      "Secured Joint 2nd Rank among 117+ participants in the Coding Decoding Competition (Esperanza 2K26), demonstrating strong OOP, DSA, and problem-solving skills.",
    image: esperanzaImg,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-10 overflow-hidden bg-black text-white py-20 px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-semibold text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <p className="text-center text-gray-400 mb-14">
        Recognition & Milestones
      </p>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 
            ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Image */}
            <motion.div
              className="w-full md:w-1/2"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl border border-gray-700 shadow-lg w-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="w-full md:w-1/2 bg-gray-900/70 backdrop-blur border border-gray-700 rounded-xl p-6 shadow-lg"
              whileHover={{
                boxShadow: "0px 0px 25px rgba(20, 184, 166, 0.4)",
              }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-teal-400">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {item.org}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}