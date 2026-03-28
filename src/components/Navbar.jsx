import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // Start with 'home' as default
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120; // Thora extra offset smooth detection ke liye

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });

      // Agar page bilkul top par hai toh Home active rahe
      if (window.scrollY < 50) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
  ];

  // Home link click fix
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT: Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={handleHomeClick}>
          <div className="w-10 h-10 rounded-full border-2 border-mint flex items-center justify-center bg-mint/5 group-hover:bg-mint transition-all duration-300">
            <span className="text-white group-hover:text-orange-400 font-black text-lg">MS</span>
          </div>
          <div className="leading-none">
            <h1 className="text-orange-400 mt-2 font-black text-xl tracking-tighter group-hover:text-white transition-colors">Moazzam Sultan</h1>
            <p className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase">Software Engineer</p>
          </div>
        </div>

        {/* CENTER: Navigation Links (Fixed Hover & Click) */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={item.id === 'home' ? handleHomeClick : undefined}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative ${
                activeSection === item.id 
                ? 'bg-orange-400 text-black shadow-lg shadow-orange-400/20' 
                : 'text-white/70 hover:text-orange-400 hover:bg-white/5'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Download CV Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className={`hidden lg:block text-sm font-semibold transition-colors hover:scale-105 ${
              activeSection === 'contact' ? 'text-orange-400 underline underline-offset-8' : 'text-white/70 hover:text-orange-400'
            }`}
          >
            Contact Us
          </a>
          
          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1jl0wrTjpr_Yz1fMelqcQXG7ie4w0VIRA/view?usp=drive_link', '_blank')}
            className="group relative flex items-center gap-2 bg-mint px-6 py-2.5 rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,231,170,0.3)] active:scale-95"
          >
            <span className="text-orange-400 font-black text-sm z-10">Download CV</span>
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <svg className="w-3 h-3 text-mint rotate-[135deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;