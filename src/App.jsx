import React, { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import TerminalModal from './components/TerminalModal';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <TerminalModal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} />
      <main>
        <Home onOpenTerminal={() => setIsTerminalOpen(true)} />
        <Skills />
        <Projects />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;