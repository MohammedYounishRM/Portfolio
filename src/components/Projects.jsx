import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Little Bloom - ECCE App',
    subtitle: 'Fullstack Web Application',
    image: '/little bloom.png',
    description: 'A full-stack early childhood management application designed to streamline student tracking, attendance logging, and growth record monitoring with a complete Teacher focused application.',
    liveLink: 'https://little-bloom.onrender.com',
    githubLink: 'https://github.com/MohammedYounishRM/Little_Bloom',
  },
  {
    id: 2,
    title: 'Web OS',
    subtitle: 'Frontend Application',
    image: '/web os.png',
    description: 'Web OS turns the browser into a fully functional desktop workspace with taskbar navigation, and integrated tools like Notes and Music Player—all powered by frontend technologies.',
    liveLink: 'https://mohammedyounishrm.github.io/Web_OS/',
    githubLink: 'https://github.com/MohammedYounishRM/Web_OS',
  },
  {
    id: 3,
    title: 'FLAMS Bridge',
    subtitle: 'Frontend Application',
    image: '/flams bridge.png',
    description: 'Built a responsive multi-user web interface during the KPRIET Hackathon, Empowers farmers and businesses with a direct, transparent agricultural marketplace designed to eliminate middleman.',
    liveLink: 'https://mohammedyounishrm.github.io/Flams-Bridge_Project/',
    githubLink: 'https://github.com/MohammedYounishRM/Flams-Bridge_Project',
  },
  {
    id: 4,
    title: 'Book Slap - API',
    subtitle: 'Backend and API',
    image: '/book slap.png',
    description: 'Book Slap is a web application designed to help users to discover and explore comprehensive information across various book categories, search functionality and literary resources.',
    liveLink: 'https://book-slap-api.onrender.com/',
    githubLink: 'https://github.com/MohammedYounishRM/Library-API',
  },
  {
    id: 5,
    title: 'Cinema Intelligence',
    subtitle: 'Web Application',
    image: '/cinema intelligence.png',
    description: 'Cinema Intelligence combines genre-based browsing and trending movie discovery, which delivers a smart, interactive movie-finding experience by helping users explore films.',
    liveLink: 'https://mohammedyounishrm.github.io/Cinema_Intelligence/',
    githubLink: 'https://github.com/MohammedYounishRM/Cinema_Intelligence',
  },
  {
    id: 6,
    title: 'Mern Auth System',
    subtitle: 'Authentication & Security',
    image: '/mern auth.png',
    description: 'A modern MERN stack authentication system providing full-fledged user identity management with secure token authentication, designed with a responsive React frontend and a robust backend.',
    liveLink: 'https://mern-auth-rp4e.onrender.com/',
    githubLink: 'https://github.com/MohammedYounishRM/Mern_Auth',
  },
  {
    id: 7,
    title: 'Transliteration',
    subtitle: 'UI/UX Design',
    image: '/transliteration.png',
    description: 'Designed specifically to assist travelers, explorers, and pilgrims, It enables them to instantly convert and understand local scripts using manual text input or camera image capture.',
    figmaLink: 'https://www.figma.com/proto/ML0I49mMhRzCLAvFmYvryB/Transliteration-App-UI?node-id=1-2&p=f&t=c2pEa7pNgkTmtj2l-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
  },
  {
    id: 8,
    title: 'Civix - Mobile Design',
    subtitle: 'Mobile App UI Design',
    image: '/civix.png',
    description: 'Designed from onboarding to issue resolution, Civix features an intuitive user flow for reporting local infrastructure problems, tracking complaints, and attending civic events.',
    figmaLink: 'https://www.figma.com/proto/FeKo9L9mK3ZAkTObUdV6Vj/Civix?node-id=6-57&p=f&t=LNUtPNOUNcgGATwz-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A57',
  },
  {
    id: 9,
    title: 'Civix - Web Design',
    subtitle: 'Web App UI Design',
    image: '/civix web.png',
    description: 'Designed a comprehensive admin dashboard designed for government officials to efficiently manage and resolve incoming public complaints and it increase civic transparency.',
    figmaLink: 'https://www.figma.com/proto/dQHwJVgbvHD8CwsMEBgS1Z/Civix-Web?node-id=0-1&t=CaX8PIwKH2xxh6eJ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A10138',
  }
];

const Projects = () => {
  const [activeId, setActiveId] = useState(projectsData[0].id);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Explore full-stack design and engineering projects that I have designed to solve real-world user problems.
          </p>
        </div>

        <div className="scroll-wrapper">
          <div className="accordion-track">
            {projectsData.map((project) => {
              const isExpanded = activeId === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`accordion-card ${isExpanded ? 'expanded' : 'collapsed'}`} >
                  <div className="card-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image" loading='lazy' draggable="false" />
                    
                    {!isExpanded && (
                      <div className="collapsed-bar-overlay">
                        <span className="collapsed-title-vertical">{project.title}</span>
                      </div>
                    )}
                  </div>

                  {isExpanded && (
                    <div className="expanded-details-content">
                      <div className="expanded-meta">
                        <div>
                          <span className="project-subtitle-badge">
                            • {project.subtitle}
                          </span>
                          <h3 className="project-heading">{project.title}</h3>
                        </div>

                        <div className="project-actions">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              className="project-btn primary"
                              onClick={(e) => e.stopPropagation()} >
                              <ExternalLink size={15} />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noreferrer"
                              className="project-btn secondary"
                              onClick={(e) => e.stopPropagation()} >
                              <FaGithub size={15} />
                              <span>Code</span>
                            </a>
                          )}
                          {project.figmaLink && (
                            <a
                              href={project.figmaLink}
                              target="_blank"
                              rel="noreferrer"
                              className="project-btn secondary"
                              onClick={(e) => e.stopPropagation()} >
                              <FaFigma size={15} />
                              <span>Figma</span>
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="project-description">{project.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;