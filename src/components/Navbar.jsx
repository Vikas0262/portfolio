import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll';

function Navbar() {
  // State to manage toggle for mobile menu
  const [toggle, settoggle] = useState(false);

  // Function to handle toggle state change
  const handletoggle = () => {
    settoggle(!toggle);
  };

  // State to manage scroll position
  const [scrolled, setScrolled] = useState(false);


  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    const offset = 80; // Adjust this value based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close mobile menu if open
    if (toggle) {
      settoggle(true);
    }
  };

  return (
    <>
      {/* Navbar container */}
      <div className="flex flex-col fixed items-center justify-center w-full md:h-[8rem] mt-10 md:mt-0 z-20">
        <div
          id="nav"
          className="bg-zinc-800/50 backdrop-blur-sm p-4 hidden rounded-full w-fit md:flex flex-row items-center px-[1rem] justify-between"
        >
          {/* Navigation Links */}
          <ul className="flex-row hidden gap-16 px-4 font-light md:flex text-slate-100 font-fira">
          {/* <a href="#hero" onClick={(e) => handleScroll(e, 'Home')}>  */}
              <li className="transition-all cursor-pointer"><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            {/* </a> */}
            {/* <a href="#skills"> */}
              <li className="transition-all cursor-pointer"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            {/* </a> */}
            {/* <a href="#projects"> */}
              <li className="transition-all cursor-pointer"><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            {/* </a> */}
            {/* <a href="#contact"> */}
              <li className="transition-all cursor-pointer"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            {/* </a> */}
          </ul>

         
          {/* Mobile Menu Toggle Button */}
          <div id="menuToggle" className="scale-75 md:hidden">
            <input id="checkbox" type="checkbox" onClick={handletoggle} />
            <label className="toggle" htmlFor="checkbox">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div
          id="mobnav"
          className="overflow-hidden flex items-center justify-center rounded-t-2xl h-[10vh] bottom-0 transition-all -z-10 md:hidden fixed w-full bg-zinc-800/50 backdrop-blur-lg"
        >
          <ul className="flex items-center justify-around gap-8 w-[90%] font-fira text-slate-50 text-lg">
            {/* Home Link */}
            <a href="#">
              <li className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 10.498c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1M12 17.988v-3" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <h2 className="text-sm font-normal font-ubuntu">Home</h2>
              </li>
            </a>

            {/* Skills Link */}
            <a href="#skills">
              <li className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M13 15h4" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <h2 className="text-sm font-normal font-ubuntu">Skills</h2>
              </li>
            </a>

            {/* Projects Link */}
            <a href="#projects">
              <li className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M2 9.5h10M12 14.5h10M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <h2 className="text-sm font-normal font-ubuntu">Project</h2>
              </li>
            </a>

            {/* contact Link */}
            <a href="#contact">
              <li className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0-2.21-.07-4-1.76-4.24-3.92C7.3 4.38 9.41 2 11.99 2M6.99 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.73-1.83-7.24-1.83-10.01 0Z" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <h2 className="text-sm font-normal font-ubuntu">Contact</h2>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
