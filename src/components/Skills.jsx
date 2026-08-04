import React, { useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';

const skillsData = {
  frontend: [
    { name: 'HTML5', desc: 'Building the clean structure and modern layout for easy-to-use websites.', level: 95, exp: 'Creating organized web pages, accessible designs, and smooth browser compatibility.' },
    { name: 'CSS3', desc: 'Designing beautiful styles, colorful themes, and layouts that look great on any device.', level: 90, exp: 'Flexible layouts, custom visual effects, animations, and modern website styling.' },
    { name: 'JavaScript (ES6+)', desc: 'Adding interactive features, buttons, animations, and smart logic to websites.', level: 88, exp: 'Handling page actions, working with dynamic data, and simple functional logic.' },
    { name: 'React.js', desc: 'Building reusable page sections to create fast and interactive web apps.', level: 90, exp: 'Managing page state, connecting components, and smooth user interfaces.' },
    { name: 'Bootstrap', desc: 'Using ready-made layout tools to build simple, mobile-friendly websites faster.', level: 85, exp: 'Organizing grids, responsive page blocks, and quick website styling.' },
    { name: 'jQuery', desc: 'Making website updates and interactive animations simple and quick to run.', level: 80, exp: 'Easy page navigation, click events, and loading data without page refreshes.' },
  ],
  backend: [
    { name: 'Node.js', desc: 'Running JavaScript on the background server to handle data behind the scenes.', level: 82, exp: 'Connecting websites to servers and handling user requests smoothly.' },
    { name: 'Express.js', desc: 'Building quick web pathways that link front websites to back servers.', level: 80, exp: 'Organizing website routes, sending responses, and backend setup.' },
    { name: 'Authentication & Security', desc: 'Protecting user login information, passwords, and private accounts safely.', level: 82, exp: 'Safe account sign-ins, modern user sessions, and password protection.' },
    { name: 'REST APIs', desc: 'Connecting front-end web pages to back-end servers so data moves smoothly.', level: 88, exp: 'Sending and receiving information accurately between different app systems.' },
    { name: 'PostgreSQL', desc: 'Organizing and saving website information inside neat data tables securely.', level: 90, exp: 'Writing database searches, connecting information tables, and fast data retrieval.' },
    { name: 'MongoDB', desc: 'Saving website data inside flexible documents that are simple to change.', level: 71, exp: 'Adding, reading, updating, and removing website information easily.' },
  ],
  tools: [
    { name: 'Python', desc: 'Writing smart code scripts to automate repetitive tasks and build backend features.', level: 85, exp: 'Object-oriented coding, helpful automation scripts, and simple data processing.' },
    { name: 'Java', desc: 'Building strong and reliable programs using classic coding methods.', level: 80, exp: 'Core programming logic, strong code structure, and step-by-step algorithms.' },
    { name: 'Git & GitHub', desc: 'Tracking daily code changes and collaborating smoothly with project teammates.', level: 90, exp: 'Saving code history, sharing updates, and managing project files safely.' },
    { name: 'VS Code', desc: 'My primary code editor for writing, fixing, and running project files.', level: 95, exp: 'Code highlighting, built-in terminal tools, and helpful coding extensions.' },
    { name: 'Figma', desc: 'Designing web page layouts, visual ideas, and interactive preview models.', level: 90, exp: 'Creating page blueprints, visual prototypes, and clear interface ideas.' },
    { name: 'Canva', desc: 'Making clean visual graphics, social banners, and pictures for projects.', level: 88, exp: 'Designing graphics, portfolio banners, and attractive brand visuals.' },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend & Framework', icon: Layout },
    { id: 'backend', label: 'Backend & Database', icon: Server },
    { id: 'tools', label: 'Languages & Tools', icon: Wrench },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            My technical toolkit across frontend design, backend systems, databases, and development tools.
          </p>
        </div>

        <div className="skills-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="skills-grid">
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>

              <div className="skill-hover-overlay">
                <div className="hover-header">
                  <span className="hover-title">{skill.name}</span>
                  <span className="hover-percentage">{skill.level}%</span>
                </div>

                <div className="progress-bar-track">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${skill.level}%` }} />
                </div>

                <p className="hover-exp">{skill.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;