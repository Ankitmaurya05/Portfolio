import React from 'react';
import "./Css/Project.css";


const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    link: 'https://github.com/Ankumaurya07',
  },
  {
    title: 'ToDo App',
    description: 'A simple and responsive to-do list app built using React.',
    link: 'https://github.com/Ankumaurya07',
  },
  {
    title: 'Rest_Api',
    description: 'Developed a responsive website using HTML,CSS, Bootstrap, and JavaScript..',
    link: 'https://github.com/Ankumaurya07',
  },
  {
    title: 'Bike-Handell',
    description: 'Developed a responsive website using HTML,CSS, Bootstrap, and JavaScript..',
    link: 'https://github.com/Ankumaurya07',
  },
  {
    title: 'Curd',
    description: 'These operations allow users to manipulate and interact with data from the application.',
    link: 'https://github.com/Ankumaurya07',
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
