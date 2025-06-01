import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Certifications from '../components/Certifications.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import About from '../components/About.jsx'
// import ThemeToggle from '../components/ThemeToggle.jsx'

function Home() {
  return (
    <>
    
    {/* // <div className="app-container"> */}
        {/* <ThemeToggle /> */}
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <About />
        <Contact />
        <Footer />
        
    {/* // </div> */}
    </>
  )
}

export default Home