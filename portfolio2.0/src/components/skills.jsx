import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div style={{ verticalAlign: "center" }}>
      <heading id="head">Skills</heading>
      <div className="main">
        <div className="container">
          <div className="sideheading">: : Soft Skill</div>
          <div className="container2">
            <div className="skills">Communication</div>
            <div className="skills">Adaptivity</div>
            <div className="skills">Team work</div>
            <div className="skills">Critical Thinking</div>
            <div className="skills">Time Management</div>
            <br />
            <div className="skills">Self-Motivation</div>
            <div className="skills">Learninf Agility</div>
          </div>
        </div>
        <div className="container">
          <div className="sideheading">: : Technical Skills</div>
          <div className="container2">
            <div className="skills">Front-end Development</div>
            <div className="skills">Version Control</div>
            <div className="skills">Design Software</div>
            <div className="skills">Design Principles</div>
            <br />
            <div className="skills">Programming</div>
            <div className="skills">API Integrating</div>
          </div>
        </div>
        <div className="container">
          <div className="sideheading">: : Tools</div>
          <div className="container2">
            <div className="skills">Figma</div>
            <div className="skills">Adobe Lightroom</div>
            <br />
            <div className="skills">Adobe Photoshop</div>
            <div className="skills">Git/GitHub</div>
            <div className="skills">Canva</div>
            <br />

            <div className="skills">VS Code</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
