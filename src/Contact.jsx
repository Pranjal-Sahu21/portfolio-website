import "./style.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [state, handleSubmit] = useForm("movnrvqz");

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      >
        Contact Me
      </motion.h1>

      {state.succeeded ? (
        <div className="thank-you-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2>Thank you!</h2>
          <p>
            Your message has been sent successfully. I’ll get back to you soon.
          </p>
        </div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="contact-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.2,
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input type="email" name="email" placeholder="Your Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </motion.form>
      )}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: 0.4,
        }}
      >
        <a 
          href="https://www.instagram.com/prsahu_21/?next=%2F" 
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pranjal-sahu-/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Pranjal-Sahu21"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </motion.div>
    </section>
  );
}
