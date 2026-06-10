import React from 'react';
import './SkillsGrid.css';

const SkillsGrid = () => {
  const skills = [
    "JavaScript", "TypeScript", "Python", "React", "Node.js", 
    "Docker", "SQL", "Git", "C++", "Go"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">{'['} МАТРИЦА НАВЫКОВ {']'}</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-bracket">[</span>
              <span className="skill-name">{skill}</span>
              <span className="skill-bracket">]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
