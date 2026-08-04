import React from 'react';
import { Terminal, User, Code2, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Passionate software developer focused on engineering elegant digital experiences.</p>
        </div>

        <div className="about-layout">
          
          <div className="about-image-wrapper">
            <div className="watermark-name">MOHAMMED YOUNISH</div>

            <div className="profile-image-card">
              <img
                src='aboutProfile.png'
                alt="Profile"
                className="profile-img" loading='lazy' draggable="false" />
            </div>
          </div>

          <div className="about-bio-card">
            <div className="bio-card-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-title">
                <Terminal size={14} />
                <span>developer_bio.js</span>
              </div>
            </div>

            <div className="bio-card-body">
              <p className="bio-tagline">
                <User size={18} className="bio-icon" />
                <span>Passionate Fullstack Developer & Designer</span>
              </p>
              
              <p className="bio-text">
                I build high-performance, visually striking web applications using modern web technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong>.
              </p>

              <p className="bio-text">
                FullStack Developer and CSE student specializing in end-to-end web development. Experienced in UI/UX design and building high-performance, Responsive backend systems. Passionate about translating complex requirements into seamless digital products.
              </p>

              <div className="bio-code-snippet">
                <span className="code-line"><span className="code-keyword">const</span> developer = &#123;</span>
                <span className="code-line indent">role: <span className="code-string">'Fullstack Web Developer'</span>,</span>
                <span className="code-line indent">focus: [<span className="code-string">'Frontend'</span>, <span className="code-string">'Backend'</span>, <span className="code-string">'Database'</span>, <span className="code-string">'UI/UX'</span>],</span>
                <span className="code-line indent">status: <span className="code-string">'Ready for New Opportunities'</span>,</span>
                <span className="code-line">&#125;;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;