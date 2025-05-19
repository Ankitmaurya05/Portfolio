import React from 'react'
import "./Css/About.css"
import anku from "../assets/dpimg.jpg"
import ReactTypingEffect from 'react-typing-effect';

const About = () => {
  return (
    <div className="container">
      
      <div className="about-container">
            <img  className="about-image" src={anku} alt="" />
        
        <div className="about-content">
          <h3>Who am I?</h3>
          <p>
            I'm a passionate web developer with a strong foundation in frontend technologies
            and a keen eye for design. With over 5 years of experience in creating modern
            web applications, I enjoy bringing ideas to life through code.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing my knowledge through blog posts and tutorials.
            I believe in continuous learning and staying up-to-date with industry trends.
          </p>
          
          <div className="about-info">
            <div className="about-info-item">
              <h4>Name:</h4>
              <p>Ankit Maurya</p>
            </div>
            <div className="about-info-item">
              <h4>Email:</h4>
              <p>ankitmaurya9537@gmail.com</p>
            </div>
            <div className="about-info-item">
              <h4>Location:</h4>
              <p>Udhna Surat</p>
            </div>
            <div className="about-info-item">
              <h4>Availability:</h4>
              <p>Available for freelance</p>
            </div>
          </div>
          
          <button className="btn btn-primary">
            <a href="https://drive.google.com/file/d/1yenYuLZpCvUVVo3hczGuDuHR-lbwyqDq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </button> 
        </div>
      </div>
    </div>
  );
};

export default About;