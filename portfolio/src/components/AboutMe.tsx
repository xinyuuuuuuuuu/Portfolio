import React from "react";
import "../styles/AboutMe.css";
import profileImage from "../assets/AboutMe.png"; // Update path as needed
import linkedinIcon from "../assets/LinkedIn.png"; // Update path as needed
import githubIcon from "../assets/GitHub.png"; // Update path as needed
import gmailIcon from "../assets/Gmail.png"; // Update path as needed

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-section">
      <div className="content-wrapper">
        {/* Left - Profile Image + Social Links */}
        <div className="profile-container">
          <img src={profileImage} alt="Xin Yu" className="profile-image" />

          {/* Social Links Below Profile Image */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/xin-yu-leong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a
              href="https://github.com/xinyuuuuuuuuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a href="mailto:leongxinyuu@gmail.com">
              <img src={gmailIcon} alt="Email" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right - Bio Content */}
        <div className="bio-container">
          <p className="bio-text">
            Hello! My name is Xin Yu, I am interested in creating user-centric
            designs and prototypes that are user-friendly.
          </p>
          <p className="bio-text">
            In my spare time, I enjoy capturing moments through photography and
            practising taekwondo.
          </p>
          <p className="bio-text">Let's connect!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
