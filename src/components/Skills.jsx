import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Skills.css";
import htmlIcon from "../assets/Skills/HTML5.png";
import cssIcon from "../assets/Skills/CSS3.png";
// import jsIcon from "../assets/Skills/JavaScript.png";
import reactIcon from "../assets/Skills/react.svg";
// import mongoIcon from "../assets/Skills/MongoDB.png";
import nextIcon from "../assets/Skills/Next.js.svg";
// import nodeIcon from "../assets/Skills/Node.js.png";
// import gitIcon from "../assets/Skills/Git.png";
import tailwindIcon from "../assets/Skills/Tailwind-CSS.png";
import bootstrapIcon from "../assets/Skills/Bootstrap.png";
import githubIcon from "../assets/Skills/GitHub.png";
import figmaIcon from "../assets/Skills/Figma.png";
import firebaseIcon from "../assets/Skills/Firebase.png";
import materialuiIcon from "../assets/Skills/materialui.png";
import nextjsIcon from "../assets/Skills/Next.js.svg";
import pythonIcon from "../assets/Skills/Python.png";
// import javaIcon from "../assets/Skills/Java.png";
import cIcon from "../assets/Skills/C.png";
// import javaIcon from "../assets/Skills/Java.png";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
//   { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
//   { name: "Node.js", icon: nodeIcon },
//   { name: "MongoDB", icon: mongoIcon },
//   { name: "Java", icon: javaIcon },
//   { name: "Git", icon: gitIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "materialui", icon: materialuiIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Next.Js", icon: nextjsIcon },
//   { name: "Java", icon: javaIcon },
  { name: "Python", icon: pythonIcon },
  { name: "C", icon: cIcon },
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