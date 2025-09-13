import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.css";

export default function Home() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

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

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    function drawAurora() {
      ctx.clearRect(0, 0, width, height);

      const layers = [
        { speed: 0.5, offset: 0, opacity: 0.2 },
        { speed: 0.3, offset: 50, opacity: 0.15 },
        { speed: 0.4, offset: 100, opacity: 0.1 },
      ];

      layers.forEach((layer, i) => {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(
          0,
          `${primary}${Math.floor(layer.opacity * 255).toString(16)}`
        );
        gradient.addColorStop(
          1,
          `${accent}${Math.floor(layer.opacity * 255).toString(16)}`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const y =
            height / 2 +
            Math.sin(x * 0.01 + time * layer.speed + layer.offset) *
              (100 + i * 20) +
            Math.cos(x * 0.005 + time * layer.speed * 0.5) * 50;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      });

      time += 0.02;
      requestAnimationFrame(drawAurora);
    }

    drawAurora();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.section
    style={{ position: "relative", zIndex: 1, y, opacity }}
     id="home" className="hero sticky-hero">
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
