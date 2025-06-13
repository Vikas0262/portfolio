import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import { getDatabase, set, ref } from 'firebase/database';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null); // ✅ for emailjs
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

    // Firebase
    // const db = getDatabase(app);
    // await set(ref(db, "Name/" + formData.name), {
    //   email: formData.email,
    //   subject: formData.subject,
    //   message: formData.message
    // });

    // EmailJS
    emailjs
      .sendForm(
        'service_1mknffg',
        'template_9yuap3s',
        formRef.current,
        'NFnHTHYk6gCzKH4Jb'
      )
      .then(
        () => {
          // console.log('Email sent successfully');
        },
        (error) => {
          console.error('Email send error:', error);
        }
      );

    setIsSubmitting(false);
    setShowThankYou(true);

    // Reset form
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
            <a href="https://www.linkedin.com/in/vikasvishwakarma262/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Vikas0262" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://wa.me/8600149671" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-background"></div>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
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
