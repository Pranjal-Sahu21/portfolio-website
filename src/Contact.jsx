import "./style.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h1 className="heading">Contact Me</h1>
      <form action="#" method="post" className="contact-card">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send</button>
      </form>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/prsahu_21/?next=%2F"
          target="_blank"
          rel="noreferrer"
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
        <a href="mailto:sahupranjal1619@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}
