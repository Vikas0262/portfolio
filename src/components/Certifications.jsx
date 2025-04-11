import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });
  
  const certifications = [
    {
      issuer: "Scalar",
      title: "JavaScript Course - Mastering the Fundamentals",
      credentialUrl: "https://moonshot.scaler.com/s/sl/rvMU5ZuMv_?_gl=1*tu0td2*_ga*MTkyMzEyOTA1MS4xNjkwMzMyMjk0*_ga_53S71ZZG1X*MTY5MDU3Nzc2NC41LjEuMTY5MDU3Nzc5MS4wLjAuMA.."
    },
    {
      issuer: "Great Learning",
      title: "Java Programming",
      credentialUrl: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/2925680/original/Vikas_Vishwakarma20230715-66-1mdm4q8.jpg"
    },
    {
      issuer: "Forage",
      title: "Deloitte Australia - Technology Job Simulation",
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_rcQjdyjs3YsRYXEYY_1740423920630_completion_certificate.pdf"
    }
  ];

  return (
    <section className="certifications-section" id="certifications" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <span>&lt;Certifications/&gt;</span>
      </motion.h2>
      
      <motion.hr
        initial={{ width: 0 }}
        animate={isInView ? { width: "80%" } : { width: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <motion.div 
            key={certification.issuer}
            className="certification-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="certification-header">
              <h3 className="issuer">{certification.issuer}</h3>
              <div className="issuer-border"></div>
            </div>
            <p className="certification-title">{certification.title}</p>
            <a 
              href={certification.credentialUrl}
              className="credential-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Credential
              <span className="button-arrow">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;