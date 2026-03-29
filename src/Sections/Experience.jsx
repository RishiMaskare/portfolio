import { useTransform, motion, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Anix AI",
    duration: "June 2025 – Sep 2025",
    description: [
      "Built responsive UI with Next.js & Tailwind",
      "Created 10+ accessible, high-performance components",
      "Improved UX with modern design systems",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Elite Coders Winter of Code (ECWOC ’26)",
    duration: "Jan 2026 – Mar 2026",
    description: [
      "Merged 40+ PRs (Top 6% globally)",
      "Fixed bugs & improved UI across projects",
      "Maintained consistent, high-quality contributions",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "JWoC '26",
    duration: "Feb 2026 – Mar 2026",
    description: [
      "Contributed to multiple repositories",
      "Enhanced UI & resolved key issues",
      "Collaborated in open-source environment",
    ],
  },
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  
  // Vertical displacement for alternating desktop cards
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [idx % 2 === 0 ? 30 : -30, 0]
  );
  
  // Horizontal slide for mobile cards
  const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0 px-4">
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}
        >
          {/* Connector Line */}
          <motion.div
            className={`absolute ${idx % 2 === 0 ? "-top-10" : "-bottom-10"} left-1/2 -translate-x-1/2 w-0.75 bg-white/40`}
            style={{ height: 40, opacity }}
          ></motion.div>
          
          {/* Experience Card */}
          <motion.article
            className={`absolute ${idx % 2 === 0 ? "bottom-16" : "top-16"} left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-md border border-gray-700/70 rounded-xl p-6 w-[320px] shadow-lg text-sm`}
            style={{ opacity, y }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-md text-gray-400 mb-3 font-medium">
              {exp.company} | {exp.duration}
            </p>
            <ul className="text-md text-gray-300 space-y-2">
              {exp.description.map((point, i) => (
                <li key={i} className="wrap-break-word leading-relaxed">• {point}</li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </div>
    );
  }

  // Mobile Layout
  return (
    <div className="relative flex items-start w-full gap-6">
      <motion.div
        className="shrink-0 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)] mt-2"
        style={{ scale, opacity }}
      ></motion.div>
      
      <motion.article
        className="flex-1 bg-gray-900/80 backdrop-blur-md border border-gray-700/70 rounded-xl p-5 shadow-lg max-w-[85vw] sm:max-w-md"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold text-white wrap-break-word">{exp.role}</h3>
        <p className="text-sm text-gray-400 mb-2 wrap-break-word">
          {exp.company} | {exp.duration}
        </p>
        <ul className="text-sm text-gray-300 space-y-2">
          {exp.description.map((point, i) => (
            <li key={i} className="wrap-break-word">• {point}</li>
          ))}
        </ul>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Control how much the user has to scroll to reveal all items
  const SCENE_HEIGHT_VH = isMobile ? 220 * experiences.length : 120 * experiences.length;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end 1.2"],
  });

  const thresholds = useMemo(() => {
    return experiences.map((_, i) => {
      if (i === experiences.length - 1) return 0.95; // delay last card
      return (i + 1) / (experiences.length + 0.5);
    });
  }, []);

  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative bg-black text-white pb-52">
      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: isMobile ? `${220 * experiences.length}vh` : '120vh' }}
        className="relative pb-40"
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-visible">
          <h2 className="text-4xl sm:text-5xl font-semibold mt-10 text-center tracking-tight">
            Experience
          </h2>
          
          <div className="flex flex-1 items-center justify-center px-6 pb-10 w-full max-w-7xl mx-auto">
            {!isMobile ? (
              <div className="relative w-full">
                {/* Horizontal Timeline Track */}
                <div className="relative h-1.5 bg-white/15 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-white rounded-full origin-left"
                    style={{ width: lineSize }}
                  ></motion.div>
                </div>
                
                {/* Desktop Items */}
                <div className="relative flex justify-between mt-0 items-start">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative w-full max-w-md pt-10">
                {/* Vertical Timeline Track */}
                <div className="absolute left-3.25 top-0 bottom-0 w-0.5 bg-white/15">
                  <motion.div
                    className="absolute left-0 top-0 w-full bg-white origin-top"
                    style={{ height: lineSize }}
                  ></motion.div>
                </div>
                
                {/* Mobile Items */}
                <div className="flex flex-col gap-12 pl-4">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}