import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

// import { Link } from 'react-scroll';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


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
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Full-Stack Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                {/* <li><a href="#">Frontend Development</a></li> */}
                <li><a href="#">Responsive Design</a></li>
              </ul>
            </div>

            {/* <div className="footer-section">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>Mumbai, Maharashtra</li>
                <li>vikas.v6543@gmail.com</li>
                <li>+91 8600149671</li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
                    <a href="https://www.linkedin.com/in/vikasvishwakarma262/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/Vikas0262" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon" />
                    </a>
                    <a href="mailto:vikas.v6543@gmail.com">
                      <FaEnvelope className="icon" />
                    </a>
                    <a href="https://wa.me/8600149671" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="icon" />
                    </a>
                  </div>

          <div className="copyright">
            <p className="copyright">
          &copy; Designed and Developed by Vikas Vishwakarma <span className="heart-icon">❤️</span>
        </p>
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