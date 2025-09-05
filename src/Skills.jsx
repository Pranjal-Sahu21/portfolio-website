import "./style.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import tailwindLogo from "../assets/tailwindcss-logo.png";
import vanillaLogo from "../assets/js-logo.png";
import reactLogo from "../assets/react-logo.png";
import javaLogo from "../assets/java-logo.png";
import pythonLogo from "../assets/python-logo.png";
import mySqlLogo from "../assets/mysql-logo.png";
import dsaLogo from "../assets/dsa.png";

export default function Skills() {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "Tailwind CSS", img: tailwindLogo },
    { name: "Vanilla JS", img: vanillaLogo },
    { name: "React.js", img: reactLogo },
    { name: "Java", img: javaLogo },
    { name: "Python", img: pythonLogo },
    { name: "MySQL", img: mySqlLogo },
    { name: "DSA", img: dsaLogo },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" ref={ref}>
      <h2 className="heading">My Skills</h2>
      <motion.div
        className="skills-grid"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      >
        {skills.map((s) => (
          <div className="skill-item" key={s.name}>
            <div className="skill-icon">
              <img src={s.img} alt={s.name} />
            </div>
            <p className="skill-name">{s.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
