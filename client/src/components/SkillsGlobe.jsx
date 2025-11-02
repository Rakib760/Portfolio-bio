import React from "react";
import "./SkillsGlobe.css";

const SkillsGlobe = () => {
  const skills = [
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Database", icon: "fas fa-database", color: "#336791" },
    { name: "Java", icon: "fab fa-java", color: "#007396" },
  ];

  return (
    <div className="skills-globe-container">
      <div className="header-section">
        <h2 className="title">My Tech Stack</h2>
        <p className="subtitle">Technologies I work with</p>
      </div>
      
      <div className="globe-wrapper">
        <div className="orbit-sphere">
          <div className="core-sphere">
            <div className="inner-glow"></div>
            <div className="core-text">Skills</div>
          </div>
          
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-orbit"
              style={{ 
                animationDuration: `${8 + index % 4}s`, // Slower animation
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div 
                className="skill-point"
                style={{ 
                  animationDuration: `${9 + index % 3}s`, // Slower animation
                  animationDelay: `${index * 0.2}s`,
                  backgroundColor: skill.color
                }}
              >
                <div className="skill-icon" style={{ color: "#fff" }}>
                  <i className={skill.icon}></i>
                </div>
                <div className="skill-tooltip" style={{ backgroundColor: skill.color }}>
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="globe-base"></div>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ borderTopColor: skill.color }}>
            <div className="skill-card-icon" style={{ color: skill.color }}>
              <i className={skill.icon}></i>
            </div>
            <div className="skill-card-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGlobe;