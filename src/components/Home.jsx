import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DotPattern from './DotField';

const Home = ({ onOpenTerminal }) => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const homeRef = useRef(null);
  const toastFired = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },{ threshold: 0.45 });

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);
  
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  
  useEffect(() => {
    if (isHomeVisible && !toastFired.current) {
      toast.success("Welcome, and thank you for reviewing my portfolio", {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "dark"
      });
      toastFired.current = true;
    }
  }, [isHomeVisible]);

  const myName = "Mohammed Younish";
  const [scrambledName, setScrambledName] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*1234567890";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledName(myName.split("").map((char, index) => {
        if (char === " ") { return " "};
        if (index < iteration) {
          return myName[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      }).join(""));

      if (iteration >= myName.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const roles = ["Fullstack developer", "UI/UX Designer", "Python Programmer", "Java Programmer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(targetText.substring(0, typedText.length + 1));
        if (typedText === targetText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypedText(targetText.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <div id="home" ref={homeRef} className="min-h-screen relative">
      <DotPattern />
      <header className={`sketch-header ${!isHomeVisible ? 'header-hidden' : ''}`}>
        <div className="brand-name-top">MOHAMMED YOUNISH R M</div>
        <button
          onClick={onOpenTerminal}
          className="terminal-mode-btn">
          <Terminal size={16} />
          <span>Terminal Mode</span>
        </button>
      </header>

      <main className="hero-layout-sketch">
        <div className="hero-text-content">
          <h1 className="sketch-greeting">
            Hi Buddy, I'm <br />
            <span className="sketch-name-highlight">{scrambledName}</span>
          </h1>

          <div className="sketch-subtext">
            I'm a <span className='type-writer'>{typedText}</span><span>|</span>
          </div>

          <div className="sketch-cta-group">
            <a href="#projects" className="btn-pill-action btn-work">View work</a>
            <a href="/Mohammed Younish - RESUME.pdf" className="btn-pill-action btn-resume">Download Resume</a>
          </div>

          <div className="sketch-social-group">
            <a href="https://www.linkedin.com/in/Mohammed-younish-r-m-739b3832b" target="_blank" rel="noreferrer" className="social-pill">
              <FaLinkedin size={17} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/MohammedYounishRM" target="_blank" rel="noreferrer" className="social-pill">
              <FaGithub size={17} />
              <span>Github</span>
            </a>
            <a href="https://www.hackerrank.com/profile/mohammedyounish1" target="_blank" rel="noreferrer" className="social-pill">
              <SiHackerrank size={17} />
              <span>HackerRank</span>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="sketch-photo-container">
            <div className="inverted-card-frame">              
              <div className="notch-top-left">
                <div className="sketch-badge-inside">
                  <span>B.E. Computer Science</span>
                </div>
              </div>

              <img src="homeProfile.png" alt="Mohammed Younish" loading='lazy' draggable="false" />

              <div className="notch-bottom-right">
                <div className="sketch-badge-inside">
                  <span>Web developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isHomeVisible && <ToastContainer />}
      </main>
    </div>
  );
};

export default Home;  
