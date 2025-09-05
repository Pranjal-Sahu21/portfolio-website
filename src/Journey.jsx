import "./style.css";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <h2 className="heading">My Journey</h2>
      <div className="journey-container">
        <div className="journey-card">
          <h3>National Institute Of Technology, Rourkela</h3>
          <p>B.Tech in Computer Science</p>
          <p>(2024 - Present)</p>
          <p>CGPA - 8.48</p>
        </div>
        <div className="journey-card">
          <h3>SAI International School, Bhubaneswar</h3>
          <p>12th Boards</p>
          <p>(2022 - 2024)</p>
          <p>Grade: 92.2%</p>
        </div>
        <div className="journey-card">
          <h3>Vikash Convent School, Karanjia</h3>
          <p>10th Boards</p>
          <p>(2021- 2022)</p>
          <p>Grade: 96.2%</p>
        </div>
      </div>
    </section>
  );
}
