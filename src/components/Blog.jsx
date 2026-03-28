import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBookOpen, FiClock } from 'react-icons/fi';

const Blog = () => {
  const posts = [
    {
      title: "Mastering React State Management",
      date: "March 15, 2026",
      readTime: "5 min read",
      excerpt: "Understanding the transition from Prop Drilling to Context API and Redux Toolkit in modern MERN applications.",
      tags: ["React", "Architecture"],
      // Light mode mein border thora dark aur dark mode mein light rakha hai
      color: "border-neutral-200 dark:border-mint/20 hover:border-mint/50"
    },
    {
      title: "Java OOP: Why Abstraction Matters",
      date: "Feb 28, 2026",
      readTime: "8 min read",
      excerpt: "Deep dive into how abstraction and interfaces help in building scalable Library Management Systems.",
      tags: ["Java", "OOP"],
      color: "border-neutral-200 dark:border-orange-400/20 hover:border-orange-400/50"
    },
    {
      title: "My Journey at UCP: 4th Semester Insights",
      date: "Jan 10, 2026",
      readTime: "4 min read",
      excerpt: "Reflecting on Software Engineering coursework, GPA 3.04 strategies, and balancing projects.",
      tags: ["Education", "Life"],
      color: "border-neutral-200 dark:border-mint/20 hover:border-mint/50"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="blog" className="relative bg-white dark:bg-black py-24 px-6 overflow-hidden transition-colors duration-500">
      
      {/* Background Glow Effect - Adjusted for themes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mint/5 dark:bg-mint/5 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-100"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h3 className="text-orange-500 dark:text-orange-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm transition-colors">// Thoughts & Articles</h3>
            <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase leading-none transition-colors">
              Latest <span className="text-mint">Stories.</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-black dark:text-white font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 dark:hover:bg-white/10 transition-all"
          >
            View All Posts
          </motion.button>
        </motion.div>

        {/* Blog Posts List */}
        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              whileHover={{ x: 15 }}
              className={`group relative p-8 bg-neutral-50 dark:bg-white/[0.02] border rounded-[2.5rem] ${post.color} transition-all duration-500 cursor-pointer overflow-hidden shadow-sm dark:shadow-none`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                <div className="flex-1">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-orange-600 dark:text-orange-400 flex items-center gap-1.5"><FiClock /> {post.date}</span>
                    <span className="text-neutral-300 dark:text-white/20">|</span>
                    <span className="text-mint flex items-center gap-1.5"><FiBookOpen /> {post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white mb-3 group-hover:text-mint transition-colors uppercase tracking-tighter">
                    {post.title}
                  </h4>
                  
                  {/* Excerpt */}
                  <p className="text-neutral-600 dark:text-white/40 text-sm max-w-2xl leading-relaxed transition-colors">
                    {post.excerpt}
                  </p>
                </div>

                {/* Right Side: Tags & Arrow */}
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-1 rounded-full bg-neutral-200 dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-[10px] text-neutral-600 dark:text-white/40 font-bold uppercase transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-14 h-14 rounded-full bg-neutral-200 dark:bg-white/5 flex items-center justify-center group-hover:bg-mint group-hover:text-black transition-all duration-500 shadow-lg dark:shadow-xl border border-neutral-300 dark:border-white/5 group-hover:border-transparent">
                    <FiArrowRight size={24} className="text-black dark:text-white group-hover:text-black transition-colors" />
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Gradient on Hover */}
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-mint/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;