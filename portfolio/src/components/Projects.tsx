import React from "react";
import "../styles/Projects.css";

// Import project images
import globeBotImg from "../assets/GlobeBot.png";
import suaveAdsImg from "../assets/Suave.png";
import artFriendImg from "../assets/Artfriend.png";
import nikiImg from "../assets/Niki.png";
import timelessImg from "../assets/TimelessMarket.png";

// Project Data
const projects = [
  {
    category: "Figma Design Projects",
    items: [
      {
        image: globeBotImg,
        title: "GlobeBot Travel App",
        description: "A travel-savvy app prototype designed to make traveling easier for users",
        tag: "Figma",
        link: "https://www.figma.com/design/KeGMPYykIXxmg3t25qGpGT/DUX-Assignment-(DUX)?node-id=0-1&p=f&t=jTpgee4dFr00IcV5-0",
      },
      {
        image: suaveAdsImg,
        title: "Cloud Advertising Application (Suave)",
        description: "A fullstack team project on a cloud advertising application, Figma was used to create the low and high fidelity prototype",
        tag: "Figma",
        link: "https://www.figma.com/design/jzIHSMWwpdfMNans4pVNCn/Suave?node-id=0-1&p=f&t=467040uDj8IDOKam-0",
      },
      {
        image: artFriendImg,
        title: "Revamped Artfriend Website",
        description: "Revamped website for a more user-friendly experience",
        tag: "Figma",
        link: "https://www.figma.com/design/c4CTdqhLrs8KVtbkBvRCWa/DP_Assg_document_LeongXinYu?node-id=33-666&t=c4r4cOn1q21BuQ98-0",
      },
    ],
  },
  {
    category: "Web Development Projects",
    items: [
      {
        image: nikiImg,
        title: "Artist Website (NIKI)",
        description: "A website on my favorite artist",
        tag: "Github",
        link: "https://xinyuuuuuuuuu.github.io/Asg-1/",
      },
      {
        image: timelessImg,
        title: "Timeless Market",
        description: "Pair project to create a website for artisan markets",
        tag: "Github",
        link: "https://xinyuuuuuuuuu.github.io/FED_Grp77Website/",
      },
    ],
  },
];

const Projects: React.FC = () => {
    return (
      <div className="projects-section">
        {projects.map((projectGroup, index) => (
          <div key={index} className="project-category">
            <h2 className="category-title">{projectGroup.category}</h2>
  
            {/* Grid Layout */}
            <div className="project-grid">
              {projectGroup.items.map((project, i) => (
                <div key={i} className="project-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <p className="project-title">{project.title}</p>
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  
                  {/* Link Button */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="project-tag">{project.tag}</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;

