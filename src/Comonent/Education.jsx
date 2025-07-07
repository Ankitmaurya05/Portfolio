import React from 'react';
import "./Css/Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>

      <div className="education-card">
        <h2>Bachelor of Computer Applications (BCA)</h2>
        <p className="education-college">
          📍 Bhagvaan Mahaveer College of Computer Application, Vesu, Surat
        </p>
        <p className="education-duration">June 2022 – May 2025</p>
        <p className="education-focus">Full Stack Web Development</p>
      </div>

      <div className="education-card">
        <h2>Full Stack Development Course</h2>
        <p className="education-college">
          📍 Easy Skill Career Academy
        </p>
        <p className="education-duration">2024 – 2025</p>
        <p className="education-focus">Full Stack Web Development</p>
      </div>
      
    </div>
  );
};

export default Education;
