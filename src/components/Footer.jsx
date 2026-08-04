import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mohammed Younish's Portfolio & All rights reserved.
        </p>
        <span className="footer-terminal-tag">// SYSTEM_STATUS: SECURE</span>
      </div>
    </footer>
  );
};

export default Footer;