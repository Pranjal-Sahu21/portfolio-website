import "./style.css";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import tailwindLogo from "../assets/tailwindcss-logo.png";
import vanillaLogo from "../assets/js-logo.png";
import reactLogo from "../assets/react-logo.png";
import javaLogo from "../assets/java-logo.png";
import pythonLogo from "../assets/python-logo.png";
import mySqlLogo from "../assets/mysql-logo.png";
import dsaLogo from "../assets/dsa.png";

export default function Skills() {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "Tailwind CSS", img: tailwindLogo },
    { name: "Vanilla JS", img: vanillaLogo },
    { name: "React.js", img: reactLogo },
    { name: "Java", img: javaLogo },
    { name: "Python", img: pythonLogo },
    { name: "MySQL", img: mySqlLogo },
    { name: "DSA", img: dsaLogo },
  ];

  return (
    <section id="skills">
      <h2 className="heading">My Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-item" key={s.name}>
            <div className="skill-icon">
              <img src={s.img} alt={s.name} />
            </div>
            <p className="skill-name">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
