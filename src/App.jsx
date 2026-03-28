import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contactus from './components/Contactus';
import './index.css';

function App() {
  return (
    /* Ek hi main wrapper kaafi hai jo dark aur light mode handle karega */
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-mint/30 transition-colors duration-500">
      
      <Navbar />
      
      {/* Har section ke andar apni ids (home, about, etc.) honi chahiye */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contactus />
      </main>

      {/* Aap yahan ek simple footer bhi add kar sakte hain */}
    </div>
  );
}

export default App;