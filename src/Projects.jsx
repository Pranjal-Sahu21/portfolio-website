import "./style.css";
import { motion } from "framer-motion";

import cheeType from "../assets/cheetype.png";
import tasteGpt from "../assets/tastegpt.png";
import skyLune from "../assets/skylune.png";
import plannix from "../assets/plannix.png";
import greenTech from "../assets/greentech.png";

export default function Projects() {
  const projects = [
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
    {
      title: "GreenTech",
      img: greenTech,
      link: "https://greentechnologies.netlify.app/",
      desc: "My first project, built only with HTML and CSS, to practice Flexbox and responsive web design.",
    },
  ];

  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="projects" className="section projects-section">
      <h1 className="heading">Projects</h1>

      <motion.div
        className="marquee-wrapper"
        initial={window.innerWidth > 768 ? { rotate: 0 } : undefined}
        whileInView={window.innerWidth > 768 ? { rotate: -5} : undefined}
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
