import React from 'react';
import "./Css/Skill.css";

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Git & GitHub',
  'Tailwind CSS',
  'Bootstrap',
];

const SkillPage = () => {
  return (
    <div className="skill-container">
      <h1 className="skill-title">My Skills</h1>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
