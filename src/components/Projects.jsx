import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import "./Projects.css";

// Skill icons are now referenced by path in ProjectCard

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });
  const projects = [
    {
      title: "FurnishHub - E-Commerce",
      url: "https://custom-furnish-hub.vercel.app/",
      description: "FurnishHub is a full-stack furniture e-commerce website built with the MERN stack. It offers product browsing, 3D previews, customization, cart, wishlist, and AR showroom features. Designed with a responsive UI, smooth animations, and a modern shopping experience.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: 'https://res.cloudinary.com/dcgtq8vao/image/upload/v1750240452/FurnishHub_xdvppg.png'
    },
     {
        title: "AiInterview",
        url: "https://ai-interview-vikas.vercel.app/",
        description: "AIInterview is a voice-enabled platform that simulates real interview experiences using AI. Users can select interview types, answer AI-asked questions by speaking, and get instant feedback. It also includes quizzes, scheduling, and progress tracking for complete preparation.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        image: 'https://res.cloudinary.com/dcgtq8vao/image/upload/v1750240452/aiImage_iin3aa.png'
      },
    {
       title: "PrepIQ",
       url: "https://ai-interview-vikas.vercel.app/",
       description: "PrepIQ is a voice-enabled platform that simulates real interview experiences using AI. Users can select interview types, answer AI-asked questions by speaking, and get instant feedback. It also includes quizzes, scheduling, and progress tracking for complete preparation.",
       tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
       image: 'https://res.cloudinary.com/dcgtq8vao/image/upload/v1750240452/aiImage_iin3aa.png'
     },
    {
      title: "Task Manager Website",
      url: "https://manage-yours-task.vercel.app/",
      description: "Task Manager is a modern task management web app built using the MERN stack. It helps users create, organize, and track tasks efficiently with smart filters and status control.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: 'https://res.cloudinary.com/dcgtq8vao/image/upload/v1750240451/TaskManager_m1tlzl.png'
    },
     
    {
      title: "Online Learning Platform",
      url: "https://online-learning-platform-vikas.vercel.app/",
      description: "Online E-Learning Platform is a MERN stack-based web app that enables users to browse, enroll, and learn through video courses. It offers secure authentication, progress tracking, and an admin dashboard for managing courses.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: 'https://res.cloudinary.com/dcgtq8vao/image/upload/v1750240452/olp_y5shki.png'
    }
    // {
    //   title: "NewsHub",
    //   url: "https://online-learning-platform-vikas.vercel.app/",
    //   description: "NewsHub is a responsive news website where users can view the latest updates, browse by category, and search articles easily.",
    //   tags: [
    //     { name: "HTML5", icon: htmlIcon },
    //     { name: "CSS3", icon: cssIcon },
    //     { name: "JavaScript", icon: jsIcon }
    //   ],
    //   image: olp
    // }
  ];

  return (
    <section className="projects-section" id="projects" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
      >
        <span>&lt;Projects/&gt;</span>
      </motion.h2>

      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: isInView ? "80%" : 0 }}
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
