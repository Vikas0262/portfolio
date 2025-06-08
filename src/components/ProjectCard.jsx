import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Import all skill icons
const skillIcons = {
  'React.js': '/src/assets/skills/react.svg',
  'Node.js': '/src/assets/skills/nodeIcon.png',
  'Express.js': '/src/assets/skills/expressIcon.png',
  'MongoDB': '/src/assets/skills/mongoodbIcon.png',
  'Tailwind CSS': '/src/assets/skills/Tailwind-CSS.png',
  'JavaScript': '/src/assets/skills/jsIcon.png',
  'HTML': '/src/assets/skills/HTML5.png',
  'CSS': '/src/assets/skills/CSS3.png'
};

const ProjectCard = ({ project, layout }) => {
  return (
    <motion.div 
      className={`project-card ${layout}-layout`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1], // Same custom easing for bounce effect
        }
      }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="card-content bg-none">
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
                <div 
                  className="tech-tag" 
                  data-tooltip-id="tech-tooltip" 
                  data-tooltip-content={tag}
                >
                  <img 
                    src={skillIcons[tag] || ''} 
                    alt={tag}
                    className="tech-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.className = 'tech-fallback';
                      fallback.textContent = tag;
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>
                {index < project.tags.length - 1 && <span className="separator"></span>}
              </React.Fragment>
            ))}
            <Tooltip id="tech-tooltip" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;