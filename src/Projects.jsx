import "./style.css";
import cheeType from "../assets/cheetype.png";
import tasteGpt from "../assets/tastegpt.png";
import skyLune from "../assets/skylune.png";
import plannix from "../assets/plannix.png";
import greenTech from "../assets/greentech.png";

export default function Projects() {
  const projects = [
    {
      title: "CheeType",
      desc: "An interactive React application that tests typing speed and accuracy, featuring dynamic word generation, real-time performance tracking, smooth UI feedback, and customizable challenge lengths.",
      img: cheeType,
      link: "https://cheetype.netlify.app/",
    },
    {
      title: "TasteGPT",
      desc: "A React app that takes ingredients from the user and recommends a single recipe using the Spoonacular API, featuring a responsive interface with a dark/light mode toggle.",
      img: tasteGpt,
      link: "https://tastegpt.netlify.app/",
    },
    {
      title: "SkyLune",
      desc: "A clean, user-friendly weather app that delivers current conditions and a 4-day forecast. Focused on simplicity, performance, and clear presentation of essential information.",
      img: skyLune,
      link: "https://skylune.netlify.app/",
    },
    {
      title: "Plannix",
      desc: "A clean and user-friendly to-do list application with a minimalist interface. The app is fully responsive and uses local storage to ensure tasks persist across sessions without requiring a backend.",
      img: plannix,
      link: "https://plannix.netlify.app/",
    },
    {
      title: "GreenTech",
      desc: "My first project, built only with HTML and CSS, to practice Flexbox and responsive web design.",
      img: greenTech,
      link: "https://greentechnologies.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h1 className="heading">My Projects</h1>
      <div className="projects">
        {projects.map((p) => (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            key={p.title}
          >
            <div className="project-card card-vibe">
              <img src={p.img} alt={p.title} className="project-img" />
              <h2 className="project-title">{p.title}</h2>
              <p className="project-desc">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
