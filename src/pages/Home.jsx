import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Skills from '../components/Skills.jsx'
import ProjectsSection from '../components/Projects.jsx'
import Certifications from '../components/Certifications.jsx'
// import AboutSection from '../components/AboutSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Footer from '../components/Footer.jsx'
// import ThemeToggle from '../components/ThemeToggle.jsx'

function Home() {
  return (
    <div className="app-container">
        {/* <ThemeToggle /> */}
        <Navbar />
        <Hero />
        <Skills />
        <ProjectsSection />
        <Certifications />
        {/* <AboutSection /> */}
        <ContactSection />
        <Footer />
        
    </div>
  )
}

export default Home