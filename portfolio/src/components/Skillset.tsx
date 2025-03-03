import React from "react";
import "../styles/Skillset.css";

// Import images directly
import figmaImg from "../assets/Figma.png";
import htmlImg from "../assets/Html.png";
import cssImg from "../assets/Css.png";
import jsImg from "../assets/Javascript.png";
import nodejsImg from "../assets/Nodejs.png";
import reactImg from "../assets/React.png";

// Skill data
const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Teamwork", level: 90 },
  { name: "Patience", level: 80 },
];

const technicalSkills = [
  { name: "Figma", image: figmaImg },
  { name: "HTML", image: htmlImg },
  { name: "CSS", image: cssImg },
  { name: "JavaScript", image: jsImg },
  { name: "Node.js", image: nodejsImg },
  { name: "React", image: reactImg },
];

const Skillset: React.FC = () => {
  return (
    <div className="skillset-container">
      {/* Soft Skills */}
      <h2 className="section-title">Skillset</h2>
      <div className="soft-skills">
        {softSkills.map((skill, index) => (
          <div className="skill-row" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              >
                <span className="progress-text">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Skills */}
      <h3 className="sub-title">Technical Skills</h3>
      <div className="technical-skills">
        {technicalSkills.map((skill, index) => (
          <div className="skill-icon" key={index}>
            <img src={skill.image} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
