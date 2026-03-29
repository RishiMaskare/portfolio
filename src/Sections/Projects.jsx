import { motion } from "framer-motion";

const projects = [
  {
    title: "MERN Gym Website",
    description:
      "Full-stack gym management app with email sending system using Nodemailer, and BMI calculation.",
    tech: ["MongoDB", "Express", "React", "Node", "Nodemailer", "Tailwind CSS"],
    github: "https://github.com/RishiMaskare/mern-gym-website",
    featured: true,
    category: "Fullstack",
  },
  {
    title: "Currency Converter",
    description:
      "Currency conversion app using real-time exchange rates and API integration.",
    tech: ["HTML", "CSS", "JavaScript", "FrankFurter API"],
    github: "https://github.com/RishiMaskare/Currency-Converter",
    category: "JavaScript",
  },
  {
    title: "Mini Projects",
    description:
      "Collection of small projects focused on strengthening core web development skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RishiMaskare",
    category: "Practice",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-5 sm:text-5xl bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#16105b] z-10">
        Projects 
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl border border-white/10 backdrop-blur-lg transition
              ${
                project.featured
                  ? "md:col-span-2 bg-linear-to-br from-purple-600/20 to-pink-600/20"
                  : "bg-white/5"
              }`}
          >
            <span className="text-xs text-purple-400 uppercase tracking-wide">
              {project.category}
            </span>

            <h3 className="text-2xl font-semibold mt-2 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:underline"
            >
              View Code →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}