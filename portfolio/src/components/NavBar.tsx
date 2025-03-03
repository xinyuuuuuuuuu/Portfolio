import React from "react";
import { FaUser, FaListAlt, FaStar, FaEnvelope } from "react-icons/fa"; // ✅ Import FaEnvelope for Contact
import logo from "../assets/XinYu.png";
import "../styles/NavBar.css";

interface NavItemProps {
  icon: React.ReactElement;
  text: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, onClick }) => (
  <div className="nav-item" onClick={onClick}>
    {icon}
    <span>{text}</span>
  </div>
);

interface NavBarProps {
  scrollToTop: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToSkillset: () => void;
  scrollToContact: () => void; // ✅ Bring back Contact scroll function
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToTop,
  scrollToAbout,
  scrollToProjects,
  scrollToSkillset,
  scrollToContact,
}) => {
  return (
    <nav className="navbar">
      {/* Clickable Logo to scroll to top */}
      <div className="logo-container" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Xin Yu Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavItem icon={<FaUser />} text="About Me" onClick={scrollToAbout} />
        <NavItem icon={<FaListAlt />} text="Projects" onClick={scrollToProjects} />
        <NavItem icon={<FaStar />} text="Skillset" onClick={scrollToSkillset} />
        <NavItem icon={<FaEnvelope />} text="Contact" onClick={scrollToContact} /> {/* ✅ Added Contact */}
      </div>
    </nav>
  );
};

export default NavBar;
