import React from "react";
import "./Css/Home.css"
import { Link, NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="text-primary">Ankit Maurya</span>
        </h1>
        <p className="hero-subtitle">
          Web Developer & Fullstack Developer
        </p>
        <p className="hero-text">
          I create beautiful, responsive websites with modern technologies to deliver exceptional user experiences.
        </p>
        <div className="hero-buttons">
                    <NavLink to="/Project">Project</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
