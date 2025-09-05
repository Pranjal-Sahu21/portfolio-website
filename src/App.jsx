import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Journey from "./Journey";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "./style.css";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
          link.scrollIntoView({
            inline: "center",
            block: "nearest",
            behavior: "smooth",
          });
        }
      });

      
    };
    window.addEventListener("scroll", onScroll);

    const cards = document.querySelectorAll(".card-vibe");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        if (window.innerWidth <= 992) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.setProperty("--x", `${x - rect.width / 2}px`);
        card.style.setProperty("--y", `${y - rect.height / 2}px`);
      });

      card.addEventListener("mouseleave", () => {
        if (window.innerWidth <= 992) return;
        card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
        card.style.setProperty("--x", "0px");
        card.style.setProperty("--y", "0px");
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
