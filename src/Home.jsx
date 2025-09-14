import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.css";

export default function Home() {
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue("--primary").trim();
    const accent = rootStyles.getPropertyValue("--accent").trim();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const numStars = 50;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const color = "rgba(200, 200, 200, ";
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        delta: Math.random() * 0.02 + 0.005,
        color,
      });
    }

    const numPlanets = 5;
    const orbitRadiusX = Math.min(width, height) * 0.35;
    const orbitRadiusY = Math.min(width, height) * 0.2;
    const planets = [];
    for (let i = 0; i < numPlanets; i++) {
      const angle = (i / numPlanets) * Math.PI * 2;
      planets.push({
        angle,
        radius: 40 + Math.random() * 40,
        speed: 0.002 + Math.random() * 0.001,
        color: Math.random() < 0.5 ? primary : accent,
      });
    }

    function drawScene() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.opacity += star.delta;
        if (star.opacity > 1 || star.opacity < 0) star.delta *= -1;

        ctx.fillStyle = `${star.color}${Math.floor(star.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      planets.forEach((p) => {
        const x = width / 2 + Math.cos(p.angle + time * p.speed) * orbitRadiusX;
        const y =
          height / 2 + Math.sin(p.angle + time * p.speed) * orbitRadiusY;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.radius);
        gradient.addColorStop(0, `${p.color}FF`);
        gradient.addColorStop(0.7, `${p.color}66`);
        gradient.addColorStop(1, `${p.color}00`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 1;
      requestAnimationFrame(drawScene);
    }

    drawScene();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      style={{ position: "relative", zIndex: 1, y, opacity }}
      id="home"
      className="hero sticky-hero"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <motion.div
        className="glass-panel"
        style={{ position: "relative", zIndex: 1, y, opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm <span className="name">Pranjal</span>
        </motion.h1>

        <motion.h2
          className="glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          A Frontend Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          I craft engaging, performant, and modern web experiences using the
          latest technologies. With a passion for sleek design and smooth
          animations, I turn ideas into interactive digital products.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1qgfwbu4S9dREyCyacf2gA3N1xGzGmOoe/view?usp=drive_link"
            target="_blank"
            className="primary"
            download
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            className="secondary"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
