import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
import ContactForm from "./components/ContactForm";
import "./styles/App.css";

const App: React.FC = () => {
  const topRef = useRef<HTMLDivElement>(null!);
  const aboutMeRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const skillsetRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div ref={topRef}></div>

      {/* ✅ Ensure scrollToContact is passed to NavBar */}
      <NavBar
        scrollToTop={() => scrollToSection(topRef)}
        scrollToAbout={() => scrollToSection(aboutMeRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkillset={() => scrollToSection(skillsetRef)}
        scrollToContact={() => scrollToSection(contactRef)} // ✅ Added Contact scroll
      />

      {/* Sections */}
      <div ref={aboutMeRef} id="about">
        <AboutMe />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={skillsetRef} id="skillset">
        <Skillset />
      </div>
      <div ref={contactRef} id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
