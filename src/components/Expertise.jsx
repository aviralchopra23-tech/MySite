import React from "react";
import "./Expertise.css";

const Expertise = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="expertise">
      {/* Header */}
      <div className="expertise-header">
        <h1>
          Expertise That <span className="gradient-pink">Drives</span>
        </h1>
        <p>
          A proven set of skills and technical proficiencies applied to deliver meaningful
          impact and solve complex challenges.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {/* 1 */}
        <div className="skill-card">
          <div
            className="svg-wrapper"
            style={{ "--icon-url": `url(${base}gamedeveloper.svg)` }}
          />
          <h3>Full-Stack Web Development</h3>
          <p>
            Developed dynamic web applications with responsive UI/UX and backend integration,
            enabling scalable and efficient digital solutions.
          </p>
        </div>

        {/* 2 */}
        <div className="skill-card">
          <div
            className="svg-wrapper"
            style={{ "--icon-url": `url(${base}rootme.svg)` }}
          />
          <h3>AI & Automation Solutions</h3>
          <p>
            Applied AI concepts to automate workflows, predictive modeling, and
            process optimization for real-world use cases.
          </p>
        </div>

        {/* 3 */}
        <div className="skill-card">
          <div
            className="svg-wrapper"
            style={{ "--icon-url": `url(${base}three.svg)` }}
          />
          <h3>IT Systems & Infrastructure Optimization</h3>
          <p>
            Designed and maintained IT systems, optimized performance, and
            resolved technical challenges to improve organizational efficiency.
          </p>
        </div>

        {/* 4 */}
        <div className="skill-card">
          <div
            className="svg-wrapper"
            style={{ "--icon-url": `url(${base}four.svg)` }}
          />
          <h3>Data Analytics & Intelligent Insights</h3>
          <p>
            Processed complex datasets, implemented AI-driven analytics, and
            generated actionable insights to support strategic decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
