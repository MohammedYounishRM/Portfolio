import React, { useState, useEffect } from 'react';
import { Home, Wrench, FolderGit2, Award, User, Mail } from 'lucide-react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer;

    const handleMouseMove = () => {
      setVisible(true);
      clearTimeout(timer);
    
      timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Wrench, label: 'Skills / Tools', href: '#skills' },
    { icon: FolderGit2, label: 'Projects', href: '#projects' },
    { icon: Award, label: 'Certifications', href: '#certifications' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`vertical-navbar ${!visible ? 'hidden-nav' : ''}`}>
      <div className="navbar-pill-vertical">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="nav-item"
              aria-label={item.label} >
              <Icon size={20} />
              <span className="nav-tooltip-right">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;