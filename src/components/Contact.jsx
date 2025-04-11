import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowThankYou(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <span>&lt;Contact/&gt;</span>
      </motion.h2>

      <motion.hr
        initial={{ width: 0 }}
        animate={isInView ? { width: "80%" } : { width: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <p className="section-subtitle">Let's create something amazing together!</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-text">
                <h3>Email</h3>
                <p>vikas.v6543@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+91 8600149671</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-text">
                <h3>Location</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-background"></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="form-input"
                rows="4"
              ></textarea>
              <div className="input-highlight"></div>
            </div>

            <button
              type="submit"
              className={`submit-button ${isSubmitting ? 'submitting' : ''} ${showThankYou ? 'success' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="loading-spinner"></div>
              ) : showThankYou ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message <FaPaperPlane className="send-icon" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="contact-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Contact;