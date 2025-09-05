import "./style.css";

export default function Skills() {
  const skills = [
    { name: "HTML", img: "/assets/html-logo.png" },
    { name: "CSS", img: "/assets/css-logo.png" },
    { name: "Tailwind CSS", img: "/assets/tailwindcss-logo.png" },
    { name: "Vanilla JS", img: "/assets/js-logo.png" },
    { name: "React.js", img: "/assets/react-logo.png" },
    { name: "Java", img: "/assets/java-logo.png" },
    { name: "Python", img: "/assets/python-logo.png" },
    { name: "MySQL", img: "/assets/mysql-logo.png" },
    { name: "DSA", img: "/assets/dsa.png" },
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
