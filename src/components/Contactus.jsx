import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiSend, FiGithub, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative bg-black py-24 px-6 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE: PERSONAL INFO */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-mint font-bold tracking-[0.3em] uppercase mb-4 text-sm">// Get In Touch</h3>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-none mb-8">
              Let's <br /> <span className="text-orange-400">Talk.</span>
            </h2>
            
            <div className="space-y-8 mt-12">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-white group-hover:text-orange-400 transition-all">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Email Me</p>
                  <a href="mailto:dev.moazamsultan@gmail.com" className="text-lg text-white font-bold hover:text-orange-400 transition-colors">
                    dev.moazamsultan@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone/WhatsApp */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 group-hover:bg-white group-hover:text-green-400 transition-all">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Call / WhatsApp</p>
                  <a href="tel:+923286403604" className="text-lg text-white font-bold hover:text-mint transition-colors">
                    +92 328 6403604
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:border-white group-hover:text-white transition-all">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold">Johar Town , Lahore  Pakistan</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                <motion.a whileHover={{ y: -5 }} href="https://github.com/Moazzam-Sultan" target="_blank" className="w-12 h-12 rounded-full border border-white/90 flex items-center justify-center text-white/90 hover:text-white hover:border-white transition-all">
                  <FiGithub size={20} />
                </motion.a>
                <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/moazzam-sultan/" target="_blank" className="w-12 h-12 rounded-full border-white/90 bg-blue-500 border-black/10 flex items-center justify-center text-white/90 hover:text-white hover:border-white transition-all">
                  <FiLinkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: MODERN FORM */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-md"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-2">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-mint transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-2">Email Address</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-400 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea rows="4" placeholder="Tell me about your project..." className="w-full bg-black/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-mint transition-all resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-mint text-white font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-400 transition-all"
              >
                Send Message <FiSend size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.6em]">
            Developed by Moazzam Sultan Baig &copy; 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;