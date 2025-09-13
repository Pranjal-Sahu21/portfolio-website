import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import logo from "../assets/apple-touch-icon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const [showHeader, setShowHeader] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 992;
      setIsDesktop(desktop);
      if (desktop) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll
  useEffect(() => {
    const sections = ["home", "journey", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      const homeSection = document.getElementById("home");
      if (!homeSection) return;
      setShowHeader(window.scrollY > homeSection.offsetHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      transition: { type: "tween", ease: "easeInOut", duration: 0.5 },
    },
    exit: {
      x: "100%",
      transition: { type: "tween", ease: "easeInOut", duration: 0.5 },
    },
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.nav
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
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
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeSection === link.id ? "active" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
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
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          onClick={() => setMenuOpen(false)}
                          className={activeSection === link.id ? "active" : ""}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
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
                animate={
                  menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bar"
              />
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
