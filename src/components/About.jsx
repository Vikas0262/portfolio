import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import Qualification from "./Qualification";
import Aboutcomp from "./Aboutcomp.jsx";
import { useInView } from "framer-motion";
import { useRef } from "react";

import './About.css'

function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });
  return (
    <>
      <div id="About" ref={containerRef} className="mt-[6rem] About w-full h-fit px-6 md:py-10 md:px-[10%] mb-10">
        <div className="header-container flex flex-col items-center">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full text-center"
          >
            <h1 className={`about-heading text-xl md:text-4xl text-slate-100 mb-4 ${isInView ? 'animate' : ''}`}>
              <span className="text-gradient">&lt;About/&gt;</span>
            </h1>
          </motion.div>
          <motion.hr 
            className="w-3/4 border-t-2 border-indigo-500 my-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "75%" } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
        </div>
        <div id="abbackgroud" className='flex md:flex-row flex-col w-full h-fit mt-8'>
          <Aboutcomp />
          <Qualification />
        </div>

      </div>
    </>
  )
}

export default About