import { motion } from "framer-motion";
import { LettersPullUp } from '../framer/LettersPullUp.jsx';

function Aboutcomp() {

  const text = `A dedicated full-stack developer with a Master of Computer Applications (MCA) degree and a passion for building seamless and interactive web applications. From crafting intuitive user interfaces to managing robust backends, I enjoy solving problems with clean, efficient, and maintainable code. My skills include JavaScript, React, Node.js, MongoDB, and Python, and I’m always excited to learn new technologies and improve my craft.

When I’m not coding, I’m exploring new ideas and staying curious. I believe life is about balance and embracing every opportunity to grow.

For me, every day is a chance to innovate, learn, and make a meaningful impact!`.split(" ");

  return (
    <section 
      id="abcontainer" 
      className="md:w-[50%] h-fit p-[1rem]"
      aria-labelledby="about-heading"
    >
      <div 
        id="aboutsection" 
        className="w-full h-fit"
        role="region"
        aria-label="About section"
      >
        <h1 
          id="about-heading"
          className="sr-only"
        >
          About me - Web Developer & Designer
        </h1>
        <LettersPullUp 
          text="About me" 
          aria-hidden="true"
        />

        <div
          id="aboutcontent"
          className="mt-4 text-justify w-full h-fit flex flex-wrap gap-2 text-slate-400"
          role="article"
        >
          {text.map((el, i) => (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.25,
                delay: i / 50,
              }}
              key={i}
              className="md:text-xl text-base tracking-tighter"
            >
              {el}{" "}
            </motion.p>
          ))}
        </div>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Skills & Expertise</h2>
          <ul>
            <li>Web Development</li>
            <li>React.js Development</li>
            <li>JavaScript Programming</li>
            <li>Python Development</li>
            <li>Node.js Backend Development</li>
            <li>MongoDB Database Management</li>
            <li>Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>UI/UX Design</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Aboutcomp;