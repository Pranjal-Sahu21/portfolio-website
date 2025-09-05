import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";
import logo from "../assets/apple-touch-icon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.5 },
    },
  };

  return (
    <motion.nav
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="header-nav"
    >
      <div className="logo">
        <div className="logo-circle">
          <img className="pranjal-logo" src={logo} alt="logo" />
        </div>
        <h3>Pranjal Sahu</h3>
      </div>

      <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#journey" onClick={() => setMenuOpen(false)}>
            Journey
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <div className="menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.nav>
  );
}
