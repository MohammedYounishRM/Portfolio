import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

function PortfolioLayout({ isTerminalOpen, setIsTerminalOpen }) {
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

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;