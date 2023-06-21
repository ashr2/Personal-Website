import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'; // Import more icons as needed

const ProjectCard = ({ project }) => {
  return (
    <div style={{
      border: '1px solid lightgray',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
    }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} style={{ fill: 'black' }} />
      </a>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {project.technologies.map((tech, index) => {
          switch (tech) {
            case 'React':
              return <SiReact key={index} size={30} style={{ fill: '#61DAFB' }} />
            case 'JavaScript':
              return <SiJavascript key={index} size={30} style={{ fill: '#F7DF1E' }} />
            case 'HTML':
              return <SiHtml5 key={index} size={30} style={{ fill: '#E34F26' }} />
            case 'CSS':
              return <SiCss3 key={index} size={30} style={{ fill: '#1572B6' }} />
            // Add more cases as needed for other technologies
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
