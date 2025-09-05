import "./style.css";

export default function Home() {
  return (
    <section id="home" className="section hero">
      <div className="hero-img">
        <img src="/assets/picofme (7).png" alt="Pranjal Sahu" />
      </div>
      <div className="hero-content">
        <h1>
          <span className="typewriter">
            Hi, I am <span className="name">Pranjal Sahu</span>
          </span>
        </h1>
        <h2 className="work">A FrontEnd Developer</h2>
        <p>
          I'm Pranjal Sahu, a passionate FrontEnd Developer specializing in
          creating engaging, user-friendly websites and applications.
        </p>
        <a
          href="https://drive.google.com/file/d/1qgfwbu4S9dREyCyacf2gA3N1xGzGmOoe/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download CV <i className="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </section>
  );
}
