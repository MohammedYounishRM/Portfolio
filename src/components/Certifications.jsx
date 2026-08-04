import React, { useState } from 'react';
import { ExternalLink, Award, X } from 'lucide-react';

const certificationsData = [
  {
    id: 1,
    title: 'Fullstack Web Development',
    issuer: 'Udemy Certification',
    image: 'Fullstack course.jpg',
    description: 'Finished 62 hours of fullstack web development training and gained practical experience in building modern, scalable web applications.',
  },
  {
    id: 2,
    title: 'Fullstack Workshop - Blitz',
    issuer: 'VIT Chennai',
    image: 'Fullstack Blitz.png',
    description: "Completed fullstack development training at VIT Chennai workshop & enhanced technical building skills through interactive web development.",
  },
  {
    id: 3,
    title: 'Fullstack Workshop',
    issuer: 'HackerRank',
    image: 'Full-Stack Blitz - HackerRank Certificate.png',
    description: 'Finished the Fullstack Blitz technical assessment hosted on the HackerRank platform and gained coding proficiency across frontend and backend.',
  },
  {
    id: 4,
    title: 'TN EBPL Certificate',
    issuer: 'TNSDC',
    image: 'TN NaanMuthalvan.jpg',
    description: 'Completed EBPL technical training program conducted in tie up with ADROIT & Built industry-relevant skills and demonstrated technical growth.',
  },
  {
    id: 5,
    title: 'Paper Presentation - I Place',
    issuer: 'KSRCE',
    image: 'KSR 1st prize.png',
    description: 'Won 1st Prize in Paper Presentation during ABLAZE 2K25 and showcased innovative engineering concepts and technical communication.',
  },
  {
    id: 6,
    title: 'Technical Quiz - II Place',
    issuer: 'RPSIT',
    image: 'RP Sarathy 2nd Price.jpg',
    description: 'Awarded Second Place in Technical Quiz conducted by RPSIT and tested core programming expertise and rapid technical problem solving.',
  },
  {
    id: 7,
    title: 'Internship in Python and ML',
    issuer: 'ADVI group of company',
    image: 'ADVI Intern.jpg',
    description: 'Completed an internship focused Python and gained hands-on experience on integrating GPU software onto NVIDIA hardware and ML models.',
  },
  {
    id: 8,
    title: 'Nodejs Bootcamp',
    issuer: 'LetsUpgrade',
    image: 'nodejs.png',
    description: 'Finished Node.js bootcamp by LetsUpgrade and NSDC also mastered server-side JavaScript fundamentals and backend architecture concepts.',
  },
  {
    id: 9,
    title: 'TCS Career Edge',
    issuer: 'TCS Ion',
    image: 'TCS ion.jpg',
    description: 'Completed TCS iON Young Professional certification for core workplace skills, enhanced business communication, and corporate etiquette.',
  },
  {
    id: 10,
    title: 'Python Completion Certificate',
    issuer: 'Scaler',
    image: 'Python Scaler.jpg',
    description: 'Completed Python Essentials course covering fundamental program concepts, solved practical coding challenges to master syntax and logics.',
  },
  {
    id: 11,
    title: 'Digital Literacy and Productivity',
    issuer: 'Linkedin Learning',
    image: 'Linkedin Learning.jpg',
    description: 'Earned certificate in Digital Literacy and Productivity Learning Pathway & gained practical knowledge in virtual collaboration techniques.',
  },
  {
    id: 12,
    title: 'Oracle AI Foundation',
    issuer: 'Oracle',
    image: 'Oracle AI foundation.jpg',
    description: 'Achieved Oracle Certified Foundations Associate status in cloud AI technologies & understanding of AI principles and Oracle Cloud integration.',
  },
  {
    id: 13,
    title: 'Paper Presentation and Tech Quiz',
    issuer: 'RPSIT',
    image: 'RP Sarathy Presentation,Quiz.jpg',
    description: 'Presented technical paper and completed competitive quiz at national symposium & applied analytical skill, effective communication in events.',
  },
  {
    id: 14,
    title: 'KPR Hackathon',
    issuer: 'Unstop',
    image: 'unstop hackathon.jpg',
    description: 'Participated in HackXelerate25 software build competition & Applied collaborative development strategies to build modern application solutions.',
  },
  {
    id: 15,
    title: 'SRM Hackthon',
    issuer: 'unstop',
    image: 'SRM Hackathon.png',
    description: 'Participated in Innovex Storm Hackathon at SRM & developed innovative software concepts through rapid prototyping and team collaboration.',
  },
  {
    id: 16,
    title: 'Paper Presentation',
    issuer: 'SCET',
    image: 'Salem EC Presentation.jpg',
    description: 'Received Certificate of Excellence for Paper Presentation in national technical symposium and gained strong oral presentation skills to peers.',
  },
  {
    id: 17,
    title: 'Oracle Foundation Assosiate',
    issuer: 'oracle',
    image: 'Oracle Foundation.jpg',
    description: 'Certified as Oracle Cloud Infrastructure Foundation Associate professional, understanding of OCI core services, pricing, and infrastructure.',
  },
  {
    id: 18,
    title: 'UI/UX Designer',
    issuer: 'Lasak Edu',
    image: 'UIUX.jpg',
    description: 'Participated in hands-on UI/UX workshop held by Lasak Edu and developed core skills in user experience research, interface design, and layouts.',
  },
  {
    id: 19,
    title: 'KPR Hackathon Certificate',
    issuer: 'Hackathon',
    image: 'KPR hackathon.jpg',
    description: 'Participated in 24-hour national hackathon challenge hosted by KPR Institute & applied agile development to construct real-world solutions.',
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="cert-section">
      <div className="cert-container">
        
        <div className="cert-header">
          <h2 className="cert-title">Certifications & Credentials</h2>
          <p className="cert-subtitle">Accredited certifications validating core technical and professional expertise</p>
        </div>

        <div className="cert-scroll-track">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" loading='lazy' draggable="false" />
              </div>

              <div className="cert-info">
                <span className="cert-issuer">
                  <Award size={14} />
                  {cert.issuer}
                </span>
                <h3 className="cert-name">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>
                
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="view-cert-btn">
                  <span>View Certificate</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div>
                <h3 className="modal-cert-title">{selectedCert.title}</h3>
                <span className="modal-cert-issuer">{selectedCert.issuer}</span>
              </div>
              <button 
                className="close-modal-btn" 
                onClick={() => setSelectedCert(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="cert-modal-body">
              <img src={selectedCert.image} alt={selectedCert.title} className="modal-cert-img" loading='lazy' draggable="false" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;