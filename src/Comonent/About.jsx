import React from 'react'
import "./Css/About.css"
import anku from "../assets/dpimg.jpg"

const About = () => {
  return (
    <div className="container">
      
      <div className="about-container">
            <img  className="about-image" src={anku} alt="" />
        
        <div className="about-content">
          <h3>Who am I?</h3>
          <p>
           I'm an aspiring full stack developer with a strong foundation in both frontend 
            and backend technologies, and a keen eye for design and user experience.
            I've built several personal and academic projects that reflect my passion for creating clean, 
            responsive, and functional web applications.
          </p>
          <p>
            I'm always eager to explore new technologies, contribute to open-source projects,
            and share what I learn through blog posts and tutorials. I believe in continuous learning and
            staying up-to-date with the latest trends to grow as a developer and make meaningful contributions to the tech community.
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
