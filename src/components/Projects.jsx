import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
// import interactImage from '../assets/interact.jpg';
import FurnishHub from '../assets/Project/FurnishHub.png'
import TaskNext from '../assets/Project/TaskNext.png'
import "./Projects.css";

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });
  const projects = [
    {
      title: "FurnishHub - E-Commerce",
      url: "https://custom-furnish-hub.vercel.app/",
      description: "FurnishHub is a full-stack furniture e-commerce website built with the MERN stack. It offers product browsing, 3D previews, customization, cart, wishlist, and AR showroom features. Designed with a responsive UI, smooth animations, and a modern shopping experience.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: FurnishHub
    },
    {
      title: "TaskNext Website",
      url: "https://add-your-task.vercel.app/",
      description: "TaskNext is a modern task management web app built using the MERN stack. It helps users create, organize, and track tasks efficiently with smart filters and status control.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: TaskNext
    }
  ];

  return (
    <section className="projects-section" id="projects" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <span>&lt;Projects/&gt;</span>
      </motion.h2>
      
      <motion.hr
        initial={{ width: 0 }}
        animate={isInView ? { width: "80%" } : { width: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            layout={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;