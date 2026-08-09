import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Terminal, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailAddress = "mohammedyounish1911@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const payload = {
      sender: {
        name: formData.name,
        email: import.meta.env.VITE_USERMAIL,
      },
      to: [
        {
          email: import.meta.env.VITE_USERMAIL,
          name: "Mohammed Younish R M",
        }
      ],
      replyTo: {
        email: formData.email,
        name: formData.name,
      },
      subject: `${formData.subject} - from Portfolio`,
      htmlContent: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>`,
    };

    try {
      const response = await fetch(import.meta.env.VITE_API, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': import.meta.env.VITE_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus(null), 4000);
      } else {
        const errorData = await response.json();
        console.error('Brevo API Error:', errorData);
        alert('Failed to send message: ' + (errorData.message || 'Key or configuration invalid'));
        setFormStatus(null);
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('Network error while sending message.');
      setFormStatus(null);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind, a question, or want to collaborate? Send a command or connect via social networks.
          </p>
        </div>

        <div className="contact-grid">
          
          <div className="contact-left-col">
            
            <div className="social-links-container">
              <h3 className="left-section-label">// CONNECT VIA SOCIAL NETWORKS</h3>
              
              <div className="social-links-grid">
                <a 
                  href="https://github.com/MohammedYounishRM"
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-card" >
                  <div className="social-card-left">
                    <FaGithub size={20} />
                    <div>
                      <span className="social-platform">GitHub</span>
                      <span className="social-handle">@MohammedYounishRM</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="social-arrow" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/Mohammed-younish-r-m-739b3832b" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-card"  >
                  <div className="social-card-left">
                    <FaLinkedin size={20} />
                    <div>
                      <span className="social-platform">LinkedIn</span>
                      <span className="social-handle">www.linkedin.com/in/Mohammed-younish-r-m-739b3832b</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="social-arrow" />
                </a>

                <a 
                  href="https://www.hackerrank.com/profile/mohammedyounish1"
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-card"  >
                  <div className="social-card-left">
                    <SiHackerrank size={20} />
                    <div>
                      <span className="social-platform">HackerRank</span>
                      <span className="social-handle">hackerrank/profile/mohammedyounish1</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="social-arrow" />
                </a>

                <a 
                  href={`mailto:${emailAddress}`}
                  className="social-card" >
                  <div className="social-card-left">
                    <Mail size={20} />
                    <div>
                      <span className="social-platform">Direct Email</span>
                      <span className="social-handle">{emailAddress}</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="social-arrow" />
                </a>
              </div>
            </div>

            <div className="extra-info-container">
              <div className="info-badge-card">
                <div className="info-badge-row">
                  <MapPin size={18} className="info-icon" />
                  <div>
                    <span className="info-title">Location</span>
                    <span className="info-desc">Ammapet, Salem, TamilNadu</span>
                  </div>
                </div>

                <div className="info-badge-row">
                  <span className="ping-dot"></span>
                  <div>
                    <span className="info-title">Availability</span>
                    <span className="info-desc">Open for Freelance & Full-time Roles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="terminal-form-card">
            <div className="terminal-form-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-title">
                <Terminal size={14} />
                <span>send_message.sh</span>
              </div>
            </div>

            <div className="terminal-form-body">
              <div className="terminal-prompt-line">
                <span className="prompt-symbol">$</span>
                <span className="prompt-text">initiate --contact-form --interactive</span>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <span className="label-prefix">&gt;</span> NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mohammed Younish"
                      required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <span className="label-prefix">&gt;</span> EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mohammedyounish1911@gmail.com"
                      required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <span className="label-prefix">&gt;</span> SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <span className="label-prefix">&gt;</span> MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    required ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="terminal-submit-btn"
                  disabled={formStatus === 'sending'} >
                  {formStatus === 'sending' ? (
                    <span>[TRANSMITTING...]</span>
                  ) : formStatus === 'success' ? (
                  <><Check size={16} />
                    <span>[TRANSMISSION COMPLETE]</span></>
                  ) : (
                    <><span>[EXECUTE SEND]</span>
                      <Send size={15} /></>
                  )}
                </button>

                {formStatus === 'success' && (
                  <p className="form-success-msg">
                    &gt; Success: Message received in terminal queue!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
