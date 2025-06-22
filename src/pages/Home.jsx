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
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
      {/* // seo code  */}
      <Helmet>
        <title>Vikas Vishwakarma | Full Stack Developer</title>
        <meta name="description" content="I’m a Full Stack Developer skilled in React, Node.js, and MongoDB." />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, MongoDB, MERN, Portfolio" />
        <meta name="author" content="Vikas Vishwakarma" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Vikas Vishwakarma Portfolio" />
        <meta property="og:description" content="Explore projects and skills of Vikas, a MERN stack developer." />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://vikas-vishwakarma.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Saarthi",
      "url": "https://vikas-vishwakarma.vercel.app/",
      "logo": "/tabLogo.png",
      "sameAs": [
        "https://www.linkedin.com/in/vikasvishwakarma262"
      ],
      "description": "I’m a Full Stack Developer skilled in React, Node.js, and MongoDB."
    }
  `}</script>
      </Helmet>

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