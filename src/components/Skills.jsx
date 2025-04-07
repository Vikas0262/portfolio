import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Skills.css";
import htmlIcon from "../assets/skills/HTML5.png";
import cssIcon from "../assets/skills/CSS3.png";
import jsIcon from "../assets/skills/JavaScript.png";
import reactIcon from "../assets/skills/react.png";
import mongoIcon from "../assets/skills/MongoDB.png";
import nextIcon from "../assets/skills/Next.js.svg";
import nodeIcon from "../assets/skills/Node.js.png";
import javaIcon from "../assets/skills/Java.png";
import gitIcon from "../assets/skills/Git.png";
import tailwindIcon from "../assets/skills/Tailwind-CSS.png";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Java", icon: javaIcon },
  { name: "Git", icon: gitIcon },
  { name: "Tailwind", icon: tailwindIcon },
];

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  return (
    <section className="skills-section" id="skills" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <span>&lt;Skills/&gt;</span>
      </motion.h2>
      
      <motion.hr
        initial={{ width: 0 }}
        animate={isInView ? { width: "80%" } : { width: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Technologies I Work With
      </motion.h3>

      <div className="card-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom easing for more bounce
                delay: index * 0.08       // Faster stagger
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-img"
                loading="lazy"
              />
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;