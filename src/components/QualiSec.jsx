import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";

const fadeInUpProps = {
  variants: fadeIn("right", 0.3),
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.1 }
};

function QualiSec(props) {
    const {from, to, inst, clg, addr, disc1, disc2, cur = false} = props;
    
    // Create a single motion component for the entire content
    const MotionArticle = motion.article;
    const MotionDiv = motion.div;
    
    return (
        <MotionArticle
            id="qualifications"
            className="relative text-left w-full h-fit mt-4 pr-0 p-[1rem]"
            role="article"
            aria-label={`Education at ${clg} from ${from} to ${to}`}
            variants={fadeInUpProps.variants}
            initial={fadeInUpProps.initial}
            whileInView={fadeInUpProps.whileInView}
            viewport={fadeInUpProps.viewport}
        >
            {/* <MotionDiv
                variants={fadeIn("", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                id="pointball"
                className={`absolute w-5 animate-pulse rounded-full h-5 top-[2rem] ${cur ? 'flex' : 'hidden'} -left-[1px] -translate-x-[50%] -translate-y-[50%] bg-indigo-900`}
                aria-hidden="true"
            /> */}
            <div
                id="pointball"
                className="absolute w-3 rounded-full h-3 top-[2rem] -left-[1px] -translate-x-[50%] -translate-y-[50%] bg-indigo-500"
                aria-hidden="true"
            />

            <h3 className="text-slate-500 md:text-lg font-small">
                {from}-{to} | {inst}
            </h3>
            <h2 className="font-ubuntu text-white text-xl md:text-2xl font-semibold">
                {clg}
            </h2>
            <h2 className="text-slate-400 text-base font-semibold pb-4">
                {addr}
            </h2>
            <p className="text-[#d1d1d1] leading-relaxed text-base transition-colors duration-300 ease-in-out">
                {disc1}
            </p>
            <p className="text-[#d1d1d1] leading-relaxed text-base transition-colors duration-300 ease-in-out">
                {disc2}
            </p>
        </MotionArticle>
    )
}

export default QualiSec