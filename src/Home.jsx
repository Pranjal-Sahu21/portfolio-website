import "./style.css";
import picOfMe from "../assets/picofme (7).png";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 1.8,
    },
  },
};

export default function Home() {
  return (
    <section id="home" className="section hero">
      {/* Animated image */}
      <motion.div
        className="hero-img"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <img src={picOfMe} alt="Pranjal Sahu" />
      </motion.div>

      {/* Animated text block */}
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={item}>
          <span className="typewriter">
            Hi, I am <span className="name">Pranjal Sahu</span>
          </span>
        </motion.h1>

        <motion.h2 className="work" variants={item}>
          A FrontEnd Developer
        </motion.h2>

        <motion.p variants={item}>
          I'm Pranjal Sahu, a passionate FrontEnd Developer specializing in
          creating engaging, user-friendly websites and applications. I love
          crafting clean code and beautiful designs that bring ideas to life.
        </motion.p>

        <motion.a
          href="https://drive.google.com/file/d/1qgfwbu4S9dREyCyacf2gA3N1xGzGmOoe/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
          variants={item}
        >
          Download CV <i className="fas fa-arrow-up-right-from-square"></i>
        </motion.a>
      </motion.div>
    </section>
  );
}
