import React, { useState } from 'react';
import { TerminalIcon, X } from 'lucide-react';

const TerminalModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState(['Type "help" to view available navigation commands.']);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = `> ${cmd}`;

      if (['home', 'skills', 'projects', 'certifications', 'about', 'contact'].includes(cmd)) {
        const userInput = document.getElementById(cmd);
        if (userInput) userInput.scrollIntoView({ behavior: 'smooth' });
          output += `: Navigating to #${cmd}...`;
          setTimeout(() => {
            onClose();
          }, 1000);
      } else if (cmd === 'help') {
          output += `: Commands -> [home, about, skills, projects, certifications, contact, clear]`;
      } else if (cmd === 'clear') {
          setLogs([]);
          setInput('');
          return;
      } else {
          output += `: Command not recognized. Type "help".`;
      }

      setLogs((prev) => [...prev, output]);
      setInput('');
    }
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-title">
            <TerminalIcon size={16} />
            <span>bash - navigation shell</span>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close Terminal">
            <X size={18} />
          </button>
        </div>
        <div className="terminal-body">
          {logs.map((log, index) => (
            <div key={`${log}-${index}`} className="terminal-log">{log}</div>
          ))}
          <div className="terminal-input-row">
            <span className="prompt-symbol">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="type a command..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;