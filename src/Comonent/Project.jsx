import React from 'react';
import "./Css/Project.css";


const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    link: 'https://yourportfolio.com',
  },
  {
    title: 'ToDo App',
    description: 'A simple and responsive to-do list app built using React.',
    link: 'https://yourtodoapp.com',
  },
  {
    title: 'Weather App',
    description: 'An app that displays real-time weather information using a public API.',
    link: 'https://yourweatherapp.com',
  },
];

const ProjectPage = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
