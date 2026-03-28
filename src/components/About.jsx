import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      /* bg-white for light mode, dark:bg-black for dark mode */
      className="relative min-h-screen bg-white dark:bg-black py-24 px-6 overflow-hidden transition-colors duration-500"
    >
      {/* Background Watermark - Adjusted opacity for light mode */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        className="absolute top-10 right-[-5%] select-none pointer-events-none hidden md:block"
      >
        <h2 className="text-[18vw] font-black text-neutral-900 dark:text-white uppercase leading-none opacity-10 dark:opacity-5">
          ABOUT
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* --- TOP PART --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side Header */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-[0.9] uppercase mb-8 transition-colors">
              Bridging <br />
              <span className="text-mint">Design &</span> <br />
              Engineering.
            </h2>
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-20 bg-orange-500 dark:bg-orange-400"></div>
              <p className="text-neutral-500 dark:text-white/50 text-3xl font-black tracking-wide transition-colors">
                Moazzam Sultan Baig
              </p>
            </div>
          </motion.div>

          {/* Right Side Bio */}
          <motion.div variants={staggerContainer} className="space-y-10">
            <motion.p
              variants={fadeInUp}
              className="text-neutral-700 dark:text-white/70 text-lg leading-relaxed border-l-4 border-mint pl-6 transition-colors"
            >
              I am a dedicated **Software Engineering student** with a passion
              for building scalable web applications. My expertise lies in the
              **MERN Stack** and **Java**.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 bg-neutral-100 dark:bg-white/5 rounded-3xl border border-neutral-200 dark:border-white/10 hover:border-orange-400/40 transition-all group"
              >
                <h4 className="text-black dark:text-white font-bold mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                  Frontend
                </h4>
                <p className="text-neutral-500 dark:text-white/40 text-sm transition-colors">
                  React.js, Tailwind CSS, Framer Motion.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 bg-neutral-100 dark:bg-white/5 rounded-3xl border border-neutral-200 dark:border-white/10 hover:border-mint/40 transition-all group"
              >
                <h4 className="text-orange-500 dark:text-orange-400 font-bold mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Backend
                </h4>
                <p className="text-neutral-500 dark:text-white/40 text-sm transition-colors">
                  Node.js, MongoDB, Java (OOP & DSA).
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- EDUCATION PART --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="mt-32 pt-16 border-t border-neutral-200 dark:border-white/5"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="text-4xl font-black text-black dark:text-white uppercase transition-colors">
              Academic Background
            </h2>
            <div className="text-mint font-bold tracking-widest text-sm bg-mint/10 px-4 py-2 rounded-lg">
              CURRENT CGPA: 3.04
            </div>
          </div>

          {/* Timeline Entries */}
          <div className="space-y-12 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-neutral-200 dark:bg-white/10"></div>

            {/* UCP */}
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative pl-10 group"
            >
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-mint group-hover:bg-mint transition-all"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-2xl font-black text-black dark:text-white group-hover:text-mint transition-colors">
                    BS SOFTWARE ENGINEERING
                  </h4>
                  <p className="text-neutral-600 dark:text-white/60 font-semibold uppercase text-sm transition-colors">
                    University of Central Punjab (2024 - Present)
                  </p>
                  <p className="text-neutral-500 dark:text-white/40 text-sm mt-4 max-w-3xl leading-relaxed transition-colors">
                    Focused on core computer science subjects including Data
                    Structures & Algorithms, Database Systems, and Software
                    Design Patterns. Actively involved in building practical
                    projects using React and Java.
                  </p>
                </div>
                <div className="bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-5 py-2 rounded-2xl text-orange-500 dark:text-orange-400 font-bold text-xs transition-colors">
                  2024 - PRESENT
                </div>
              </div>
            </motion.div>

            {/* PGC */}
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative pl-10 group"
            >
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-neutral-300 dark:border-white/20 group-hover:border-orange-500 transition-all"></div>
              <h4 className="text-xl font-bold text-neutral-800 dark:text-white/80 transition-colors">
                INTERMEDIATE IN COMPUTER SCIENCE
              </h4>
              <p className="text-neutral-600 dark:text-white/60 font-semibold uppercase text-sm transition-colors">
                Punjab Group of Colleges (2022 - 2024)
              </p>
              <p className="text-neutral-500 dark:text-white/40 text-sm mt-4 max-w-3xl leading-relaxed transition-colors">
                Developed a strong foundation in core computer science
                principles, including Programming Fundamentals.
              </p>
            </motion.div>

            {/* Unique Group */}
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="relative pl-10 group"
            >
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-neutral-300 dark:border-white/20 group-hover:border-orange-500 transition-all"></div>
              <h4 className="text-xl font-bold text-neutral-800 dark:text-white/80 transition-colors">
                MATRICULATION IN COMPUTER SCIENCE
              </h4>
              <p className="text-neutral-600 dark:text-white/60 font-semibold uppercase text-sm transition-colors">
                Unique Group of Institution (2020 - 2022)
              </p>
              <p className="text-neutral-500 dark:text-white/40 text-sm mt-4 max-w-3xl leading-relaxed transition-colors">
                Developed fundamental logic building and introductory programming concepts.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;