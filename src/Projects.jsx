import "./style.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import voltMart from "../assets/voltmart.png";
import resuscope from "../assets/ResuScope.png";
import cheeType from "../assets/cheetype.png";
import tasteGpt from "../assets/tastegpt.png";
import skyLune from "../assets/skylune.png";
import plannix from "../assets/plannix.png";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const projects = [
    {
      title: "Voltmart",
      img: voltMart,
      link: "https://voltmart.netlify.app/",
      desc: "A quick-commerce web app built with React, featuring smooth navigation, persistent cart/orders/address storage, Clerk authentication, Lottie animations, slick UI components, and streamlined state management with Context API and protected routing.",
    },
    {
      title: "ResuScope",
      img: resuscope,
      link: "https://resuscope.netlify.app/",
      desc: "A group project focused on an AI-powered resume analyzer that evaluates resume–job fit using ATS, skills, content, and structure scores, while providing personalized tips through a modern React-based web interface.",
    },
    {
      title: "CheeType",
      img: cheeType,
      link: "https://cheetype.netlify.app/",
      desc: "An interactive React application that tests typing speed and accuracy, featuring dynamic word generation, real-time performance tracking, smooth UI feedback, and customizable challenge lengths.",
    },
    {
      title: "TasteGPT",
      img: tasteGpt,
      link: "https://tastegpt.netlify.app/",
      desc: "A React app that takes ingredients from the user and recommends a single recipe using the Spoonacular API, featuring a responsive interface with a dark/light mode toggle.",
    },
    {
      title: "SkyLune",
      img: skyLune,
      link: "https://skylune.netlify.app/",
      desc: "A clean, user-friendly weather app that delivers current conditions and a 4-day forecast. Focused on simplicity, performance, and clear presentation of essential information.",
    },
    {
      title: "Plannix",
      img: plannix,
      link: "https://plannix.netlify.app/",
      desc: "A clean and user-friendly to-do list application with a minimalist interface. The app is fully responsive and uses local storage to ensure tasks persist across sessions without requiring a backend.",
    },
  ];

  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="projects" className="section projects-section">
      <motion.h1
        ref={ref}
        className="heading"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="marquee-wrapper"
        initial={
          window.innerWidth > 768 ? { opacity: 0, rotate: 0 } : undefined
        }
        whileInView={
          window.innerWidth > 768 ? { opacity: 1, rotate: -5 } : undefined
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={
          window.innerWidth > 768
            ? { duration: 0.6, ease: "easeOut" }
            : undefined
        }
      >
        <motion.div
          className="marquee desktop-marquee"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: window.innerWidth <= 1024 ? 20 : 40,
          }}
        >
          {marqueeProjects.map((p, i) => (
            <a
              href={p.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-3d"
            >
              <img src={p.img} alt={p.title} />
              <h2 className="project-title">{p.title}</h2>
              <p className="project-desc">{p.desc}</p>
            </a>
          ))}
        </motion.div>

        <div className="mobile-cards">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img src={p.img} alt={p.title} />
              <h2 className="project-title">{p.title}</h2>
              <p className="project-desc">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
