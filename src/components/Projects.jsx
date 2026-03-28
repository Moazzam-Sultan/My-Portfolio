import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Bazaar E-Commerce",
      category: "MERN STACK",
      desc: "A complete e-commerce solution with product management, cart functionality, and a modern frontend.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com/Moazzam-Sultan/Bazaar-E-Commerce-WebSite",
      color: "group-hover:text-white"
    },
    {
      title: "Admin Dashboard",
      category: "FRONTEND / UI",
      desc: "High-performance React dashboard with interactive charts and dark-themed UI components.",
      tech: ["React.js", "Recharts", "Lucide-React", "Tailwind"],
      github: "https://github.com/Moazzam-Sultan/Dashboard",
      color: "group-hover:text-orange-400"
    },
    {
      title: "Library Management",
      category: "JAVA / OOP",
      desc: "A systematic approach to managing books, members, and transactions using core Java principles.",
      tech: ["Java", "Swing", "MySQL", "OOP"],
      github: "https://github.com/Moazzam-Sultan/Library-Management-System",
      color: "group-hover:text-white"
    },
    {
      title: "PDF Reader & TTS",
      category: "JAVA API",
      desc: "An innovative Java tool that reads PDF files and converts text to speech using API integration.",
      tech: ["Java", "TTS-API", "File-IO", "JSON"],
      github: "https://github.com/Moazzam-Sultan/PDF-Reader-with-Text-to-Speech-API-Integration-Java-",
      color: "group-hover:text-orange-400"
    },
    {
      title: "Java E-Commerce",
      category: "BACKEND LOGIC",
      desc: "Backend-focused e-commerce system exploring object-oriented design patterns in Java.",
      tech: ["Java", "JDBC", "Data Structures"],
      github: "https://github.com/Moazzam-Sultan/Java-E-Commerce",
      color: "group-hover:text-white"
    },
    {
      title: "HackerRank Solved",
      category: "DSA / LOGIC",
      desc: "A collection of complex algorithms and data structure problems solved during competitions.",
      tech: ["Java", "Algorithms", "DSA"],
      github: "https://github.com/Moazzam-Sultan/Hacker-Rank-Competition",
      color: "group-hover:text-orange-400"
    }
  ];

  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section id="projects" className="relative bg-black py-24 px-6 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-40 right-[-10%] opacity-[0.015] select-none pointer-events-none">
        <h2 className="text-[25vw] font-black text-white uppercase leading-none">Github</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h3 className="text-orange-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Selected Works</h3>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-tight">
              Featured <span className="text-mint">Repositories</span>
            </h2>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://github.com/Moazzam-Sultan"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-2"
          >
            Explore Full GitHub
          </motion.a>
        </motion.div>

        {/* Projects Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] hover:border-orange-400/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-2xl bg-black border border-white/5 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,231,170,0.15)] ${project.color}`}>
                    <FiFolder size={28} />
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white/20 hover:text-white transition-all hover:scale-110"
                    >
                      <FiGithub size={24} />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter transition-colors duration-500">
                    {project.title}
                  </h4>
                  
                  <p className="text-white/40 text-sm leading-relaxed mb-8 h-20 overflow-hidden group-hover:text-white/60 transition-colors">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[9px] font-bold text-white/30 border border-white/5 px-3 py-1.5 rounded-lg uppercase bg-white/[0.02] group-hover:border-white/10 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom Action */}
                <motion.a 
                  href={project.github}
                  className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${project.color}`}
                >
                  Source Code 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiExternalLink />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;