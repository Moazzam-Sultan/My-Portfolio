import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/profile.jpg";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-colors duration-500 bg-white dark:bg-black">
      
      {/* 1. BACKGROUND TEXT: Adapted for both themes */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          className="text-[12vw] font-black leading-none uppercase tracking-tighter opacity-[0.05] dark:opacity-20 text-neutral-900 dark:text-white"
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Software
        </motion.h1>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          className="text-[12vw] font-black leading-none uppercase tracking-tighter ml-20 opacity-[0.05] dark:opacity-20 text-neutral-900 dark:text-white"
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Engineer
        </motion.h1>
      </div>

      {/* 2. MAIN CONTENT */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT SIDE: Content */}
        <motion.div
          variants={fadeInUp}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* text-black for light mode, dark:text-white is skipped here because orange looks good on both */}
          <motion.h2 className="text-5xl md:text-7xl lg:text-8xl font-mono text-orange-500 dark:text-orange-400 leading-[0.85] uppercase mb-6 tracking-tighter">
            MernStack <br />
            Developer
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-neutral-600 dark:text-white/50 text-sm md:text-base max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Specializing in building high-performance React applications and
            robust Java systems. Currently a 4th-semester Software Engineering
            student at UCP.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
            {[
              { val: "3.04", label: "Last CGPA" },
              { val: "12+", label: "Projects" },
              { val: "UCP", label: "University" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(249, 115, 22, 0.5)", // orange-500
                }}
                className="bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-4 rounded-2xl transition-all cursor-default"
              >
                <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                  {stat.val}
                </div>
                <div className="text-[10px] text-neutral-500 dark:text-white/40 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Photo */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-[20px] border-orange-500/5 dark:border-mint/5 rounded-full -z-10 blur-sm"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ rotateY: 10, rotateX: 5 }}
            className="relative w-full max-w-[350px] aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-neutral-200 dark:border-white/10 shadow-2xl bg-neutral-200 dark:bg-neutral-900 group"
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover grayscale brightness-90 dark:brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-black/80 via-transparent to-transparent opacity-80"></div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 bg-orange-500 dark:bg-mint p-3 px-5 rounded-2xl rotate-12 shadow-xl hidden md:block border-4 border-white dark:border-black"
          >
            <span className="text-white dark:text-black font-bold text-xs">Available for Hire</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;