import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, layout }) => {
  return (
    <motion.div 
      className={`project-card ${layout}-layout`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="card-content">
        {/* Image with Top Box */}
        <div className="image-container">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="image-top-box">
            {/* <span ></span> */}
            {/* <input type='button' value='View Live' className="category-badge" /> */}
            <a href={project.url} target='_blank' className="category-badge">View Live</a>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="text-content">
          <div className="title-container">
            <h3 className="project-title">{project.title}</h3>
            <div className="highlight-text">{project.highlight}</div>
          </div>

          <p className="project-description">{project.description}</p>

          <div className="tech-stack">
            {project.tags.map((tag, index) => (
              <React.Fragment key={index}>
                <span className="tech-tag">{tag}</span>
                {index < project.tags.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;