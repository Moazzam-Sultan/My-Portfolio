import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiServer, FiSmartphone, FiGlobe } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: "MERN Stack Dev",
      desc: "Building full-stack applications using MongoDB, Express, React, and Node.js with high performance.",
      icon: <FiCode className="text-3xl" />,
      color: "hover:border-white/50",
      accent: "text-white"
    },
    {
      title: "UI/UX Design",
      desc: "Creating modern, clean, and user-centric digital interfaces that focus on conversion and aesthetics.",
      icon: <FiLayout className="text-3xl" />,
      color: "hover:border-orange-400/50",
      accent: "text-orange-400"
    },
    {
      title: "Java Backend",
      desc: "Developing robust and scalable server-side logic using Java, OOP principles, and Spring Framework.",
      icon: <FiServer className="text-3xl" />,
      color: "hover:border-white/50",
      accent: "text-white"
    },
    {
      title: "Database Design",
      desc: "Architecting efficient SQL & NoSQL databases with optimized queries and clean ER diagrams.",
      icon: <FiDatabase className="text-3xl" />,
      color: "hover:border-orange-400/50",
      accent: "text-orange-400"
    },
    {
      title: "App Development",
      desc: "Crafting cross-platform mobile experiences that are fast, responsive, and user-friendly.",
      icon: <FiSmartphone className="text-3xl" />,
      color: "hover:border-white/50",
      accent: "text-white"
    },
    {
      title: "Web Optimization",
      desc: "Improving site speed, SEO, and overall performance to ensure the best user experience.",
      icon: <FiGlobe className="text-3xl" />,
      color: "hover:border-orange-400/50",
      accent: "text-orange-400"
    }
  ];

  // Container variant for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Har card 0.2s ke gap se ayega
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="services" className="relative bg-black py-24 px-6 overflow-hidden">
      
      {/* Animated Background Text */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.03, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 text-[15vw] font-black text-white select-none pointer-events-none"
      >
        EXPERTISE
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-orange-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm">My Specializations</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none">
            Tech <span className="text-mint">Solutions.</span>
          </h2>
        </motion.div>

        {/* Services Grid with Stagger Effect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3 } 
              }}
              className={`p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] transition-all duration-500 group ${service.color} cursor-default relative overflow-hidden`}
            >
              {/* Subtle hover background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-mint/10 to-orange-400/10 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Floating Icon Container */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-16 h-16 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-8 shadow-xl group-hover:border-current transition-colors ${service.accent}`}
                >
                  {service.icon}
                </motion.div>

                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-white">
                  {service.title}
                </h4>
                
                <p className="text-white/40 text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>

                {/* Animated Bottom Line */}
                <div className="w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-mint transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;