import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';
// import { Link } from 'react-scroll';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <h3 className="logo-text">Vikas<span>Vishwakarma</span></h3>
            <p className="footer-description">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer-links">
            {/* <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skill" className='cursor-pointer'><Link to="skills" smooth={true} duration={500}>Skills</Link></a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div> */}

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Frontend Development</a></li>
                <li><a href="#services">Responsive Design</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>Mumbai, Maharashtra</li>
                <li>vikas.v6543@gmail.com</li>
                <li>+91 8600149671</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
            <a href="mailto:contact@vikasdev.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>

          <div className="copyright">
            <p>
              {/* Made with <FaHeart className="heart-icon" /> by{" "} */}
              {/* <a href="#home" className="highlight">Vikas Vishwakarma</a> */}
            </p>
            <p>© {currentYear} All rights reserved.</p>
          </div>

          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>

      <div className="footer-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </footer>
  );
};

export default Footer; 