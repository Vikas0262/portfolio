import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML5", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560478/HTML5_n2y9e7.png" },
  { name: "CSS3", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560470/CSS3_yiyvj1.png" },
  { name: "JavaScript", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560480/jsIcon_j74v6l.png" },
  { name: "React.js", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560493/react_ifzoo3.svg" },
  { name: "Node.js", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560487/nodeIcon_qlyyab.png" },
  { name: "Express.js", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560471/expressIcon_kxbczc.png" },
  { name: "MongoDB", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560484/mongoodbIcon_dlabjx.png" },
  { name: "Git", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560477/gitIcon_zxfjhe.png" },
  { name: "GitHub", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560476/GitHub_prtxhz.png" },
  { name: "TypeScript", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560494/ts_iftz3z.png" },
  { name: "Next.Js", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560487/Next.js_wc6mvu.svg" },
  { name: "Tailwind-CSS", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560493/Tailwind-CSS_i0xcrj.png" },
  { name: "Firebase", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560471/Firebase_ici2vp.png" },
  { name: "Bootstrap", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560469/Bootstrap_fqsrqk.png" },
  { name: "Figma", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560471/Figma_sbkil5.png" },
  { name: "Postman", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560488/Postman_xkdirg.png" },
  { name: "Material UI", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560482/materialui_rzy6nk.png" },
  { name: "C", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560470/C_zltmyq.png" },
  { name: "CPP", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560471/cppIcon_azano9.png" },
  { name: "Java", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560479/javaIcon_eakqle.png" },
  { name: "Python", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560493/Python_d1wctn.png" },
  { name: "Docker", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560469/docker_k3srqr.svg" },
  { name: "AWS", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560470/aws_nqhlmh.png" },
  { name: "Nest.js", icon: "https://res.cloudinary.com/dcgtq8vao/image/upload/v1749560487/Next.js_wc6mvu.svg" }
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
        transition={{ duration: 0.8, delay: 0.6 }}
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
                duration: 0.6,
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