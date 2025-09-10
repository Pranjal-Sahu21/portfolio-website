import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import logo from "../assets/apple-touch-icon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 992;
      setIsDesktop(desktop);
      if (desktop) setMenuOpen(false);
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

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      },
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

      {isDesktop ? (
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#journey">Journey</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      ) : (
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="nav-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.ul
                className="nav-drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
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
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      )}

      {!isDesktop && (
        <div className="menu" onClick={toggleMenu}>
          <motion.div
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bar"
          />
          <motion.div
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="bar"
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bar"
          />
        </div>
      )}
    </motion.nav>
  );
}
