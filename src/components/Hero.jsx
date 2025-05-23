import React, { useState, useEffect } from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaCode, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';
import profile from '../assets/hero-profile.jpeg';
import resumeUrl from '../assets/Resume/Vikas_Vishwakarma_Resume.pdf'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textArray = ["Code for Web", "Design UI/UX", "Build Solutions"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => 
          (prevIndex + 1) % textArray.length
        );
        setAnimate(false);
      }, 500);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    
    try {
      // Replace this path with your actual resume file path
      const fileUrl = {resumeUrl}; // Assuming your file is in public folder
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = fileUrl;
      
      // Set the download attribute with your desired filename
      link.download = 'Vikas_Vishwakarma_Resume.pdf';
      
      // Append to the body, trigger click, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Optionally show an error message to the user
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id='hero' className={`hero ${isVisible ? 'visible' : ''}`}>
      {/* Left Content */}
      <div className="hero-content">
        <div className="intro-badge">
          <span className="wave">👋</span> Welcome to my Portfolio
        </div>

        <h1 className="name-heading">
          <span className="name">Vikas</span>
          <span className="lname">Vishwakarma</span>
        </h1>

        <h3 className={`profession ${animate ? 'fade-out' : 'fade-in'}`}>
          I {textArray[currentTextIndex]}
        </h3>

        <p className="description">
          I create digital experiences that are beautiful, functional, and user-focused.
          Let's build something amazing together!
        </p>

        <div className="buttons">
          <button 
            className="btn primary-btn" 
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <FaDownload className="btn-icon" />
            <span className="btn-text">
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </span>
          </button>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="#portfolio">
            <FaCode className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="mailto:contact@example.com">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="image-container">
        <img 
          src={profile}
          alt="Vikas Vishwakarma" 
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default Hero;