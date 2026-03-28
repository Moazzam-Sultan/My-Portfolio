import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/profile.jpg";

const Hero = () => {
  // Animation Variants for reusability
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* 1. BACKGROUND TEXT: Sliding Animation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[12vw] font-black leading-none text-white uppercase tracking-tighter"
        >
          Software
        </motion.h1>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[12vw] font-black leading-none text-white uppercase tracking-tighter ml-20"
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
        {/* LEFT SIDE: Content Animations */}
        <motion.div
          variants={fadeInUp}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.h2 className="text-5xl md:text-7xl lg:text-8xl font-mono text-orange-400 leading-[0.85] uppercase mb-6 tracking-tighter">
            MernStack <br />
            Developer
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-sm md:text-base max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Specializing in building high-performance React applications and
            robust Java systems. Currently a 4th-semester Software Engineering
            student at UCP.
          </motion.p>

          {/* Stats Grid with Individual Hover Effects */}
          <div className="grid grid-cols-2 sm:grid-cols-3 text-orange-400 gap-4 max-w-lg mx-auto lg:mx-0">
            {[
              { val: "3.04", label: "Last GPA" },
              { val: "12+", label: "Projects" },
              { val: "UCP", label: "University" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(251, 146, 60, 0.5)",
                  color: "#fb923c",
                }}
                className="bg-orange/5 border border-orange/10 p-4 rounded-2xl  transition-colors cursor-default"
              >
                <div className="text-2xl font-bold text-orange-400">
                  {stat.val}
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Photo Animations */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          {/* Pulsing Circle Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-[20px] border-mint/5 rounded-full -z-10 blur-sm"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ rotateY: 10, rotateX: 5 }} // Slight 3D tilt effect
            className="relative w-full max-w-[350px] aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-neutral-900 group"
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
          </motion.div>

          {/* Floating Badge with Bounce Animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 bg-mint p-3 px-5 rounded-2xl rotate-12 shadow-xl hidden md:block border-4 border-black"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
