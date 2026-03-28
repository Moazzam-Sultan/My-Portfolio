import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Components folder se import karein
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contactus from './components/Contactus';
import './index.css';

function App() {
  return (
    // "bg-black" aur "min-h-screen" se poori screen dark ho jaye gi
    <div className="bg-black min-h-screen font-sans selection:bg-mint/30">
      
    
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Blog/>
      <Contactus/>
      

    </div>
  );
}

export default App;