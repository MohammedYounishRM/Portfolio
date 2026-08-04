import React, { useState, useEffect } from 'react';

const devFacts = [
  "A developer spends 20% of their time writing code and 80% figuring out why it doesn't work.",
  "There are two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.",
  "It’s not a bug, it’s an undocumented feature.",
  "Fixing a bug in production is like repairing an airplane engine mid-flight.",
  "6 months of debugging can save you 5 minutes of reading the documentation.",
  "First, solve the problem. Then, write the code.",
  "The best code is the code you didn't have to write—less code means fewer bugs.",
  "Make it work, make it right, make it fast—strictly in that order.",
  "Code is read much more often than it is written; always write for readability.",
  "Deleting dead code improves a codebase faster than adding new features.",
  "The term 'bug' became famous in 1947 when Grace Hopper found an actual moth inside a computer relay.",
  "Over 90% of the world's financial transactions rely on code written in COBOL.",
  "JavaScript was originally created in just 10 days by Brendan Eich in May 1995.",
  "The first web page ever published is still live today on W3C servers.",
  "Git was created by Linus Torvalds in 2005 in just a few days to manage Linux kernel development."
];

const Loader = ({ onComplete }) => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * devFacts.length);
    setFact(devFacts[randomIndex]);

    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="dev-loader-screen">
      <div className="dev-loader-card">
        
        <div className="modern-spinner">
          <div className="spinner-ring"></div>
        </div>

        <div className="fact-container">
          <p className="fact-text">"{fact}"</p>
        </div>

        <div className="progress-bar-track">
          <div className="progress-bar-fill"></div>
        </div>

      </div>
    </div>
  );
};

export default Loader;