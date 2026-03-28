import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Icons for toggle

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  // Theme state: LocalStorage se check karega ya default 'dark' rakhega
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Theme apply karne ki logic
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120;

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

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    // Added: bg-white/80 and dark:bg-black/80 for theme switching
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT: Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={handleHomeClick}>
          <div className="w-10 h-10 rounded-full border-2 border-mint flex items-center justify-center bg-mint/5 group-hover:bg-mint transition-all duration-300">
            {/* Added: text-black dark:text-white */}
            <span className="text-black dark:text-white group-hover:text-orange-400 font-black text-lg">MS</span>
          </div>
          <div className="leading-none">
            <h1 className="text-orange-500 dark:text-orange-400 mt-2 font-black text-xl tracking-tighter group-hover:text-black dark:group-hover:text-white transition-colors">Moazzam Sultan</h1>
            {/* Added: text-neutral-500 dark:text-white/50 */}
            <p className="text-[10px] text-neutral-500 dark:text-white/50 font-bold tracking-[0.2em] uppercase">Software Engineer</p>
          </div>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-100 dark:bg-white/5 p-1 rounded-full border border-neutral-200 dark:border-white/10">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={item.id === 'home' ? handleHomeClick : undefined}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative ${
                activeSection === item.id 
                ? 'bg-orange-500 dark:bg-orange-400 text-white dark:text-black shadow-lg' 
                : 'text-neutral-600 dark:text-white/70 hover:text-orange-500 dark:hover:text-orange-400'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT: Theme Toggle & CV */}
        <div className="flex items-center gap-4">
          
          {/* THEME TOGGLE BUTTON */}
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-neutral-200 dark:bg-white/10 text-orange-500 dark:text-orange-400 hover:scale-110 transition-all border border-neutral-300 dark:border-white/10"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a 
            href="#contact" 
            className={`hidden lg:block text-sm font-semibold transition-colors hover:scale-105 ${
              activeSection === 'contact' ? 'text-orange-500 dark:text-orange-400 underline underline-offset-8' : 'text-neutral-600 dark:text-white/70 hover:text-orange-500 dark:hover:text-orange-400'
            }`}
          >
            Contact Us
          </a>
          
          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1jl0wrTjpr_Yz1fMelqcQXG7ie4w0VIRA/view?usp=drive_link', '_blank')}
            className="group relative flex items-center gap-2 bg-mint px-6 py-2.5 rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,231,170,0.3)] active:scale-95"
          >
            <span className="text-black font-black text-sm z-10">Download CV</span>
            <div className="w-6 h-6 bg-black/20 dark:bg-orange-400 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <svg className="w-3 h-3 text-black rotate-[135deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
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