import "./style.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Journey() {
  const journeyData = [
    {
      title: "National Institute Of Technology, Rourkela",
      details: [
        "B.Tech in Computer Science & Engineering",
        "(2024 - Present)",
        "CGPA - 8.48",
      ],
    },
    {
      title: "SAI International School, Bhubaneswar",
      details: ["12th Boards", "(2022 - 2024)", "Grade: 92.2%"],
    },
    {
      title: "Vikash Convent School, Karanjia",
      details: ["10th Boards", "(2021 - 2022)", "Grade: 96.2%"],
    },
  ];

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.3 });

  const cardVariants = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -400 : direction === "right" ? 400 : 0,
      y: window.innerWidth < 768 ? 30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
        opacity: { duration: 0.8, ease: "easeInOut" },
      },
    },
  });

  return (
    <section id="journey" className="section">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8,
        }}
        className="heading"
      >
        My Journey
      </motion.h2>

      <div className="journey-container">
        {journeyData.map((journey, index) => {
          const cardRef = useRef(null);
          const isInView = useInView(cardRef, {
            once: true,
            margin: "-30% 0px",
          });

          return (
            <motion.div
              key={index}
              ref={cardRef}
              className="journey-card"
              variants={cardVariants(index % 2 === 0 ? "left" : "right")}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="journey-title">{journey.title}</h3>
              {journey.details.map((line, i) => (
                <p className="journey-desc" key={i}>{line}</p>
              ))}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
