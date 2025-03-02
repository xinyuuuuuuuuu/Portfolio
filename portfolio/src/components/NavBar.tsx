import React from "react";
import { FaUser, FaListAlt, FaStar } from "react-icons/fa";
import logo from "../assets/XinYu.png"; // ✅ Import logo from assets
import "../styles/Navbar.css"; // ✅ Ensure filename matches exactly

// Define the type for NavItem props
interface NavItemProps {
  icon: React.ReactElement;
  text: string;
}

// Reusable Nav Item Component
const NavItem: React.FC<NavItemProps> = ({ icon, text }) => (
  <div className="nav-item">
    {icon}
    <span>{text}</span>
  </div>
);

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo Image */}
      <div className="logo-container">
        <img src={logo} alt="Xin Yu Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <NavItem icon={<FaUser />} text="About Me" />
        <NavItem icon={<FaListAlt />} text="Projects" />
        <NavItem icon={<FaStar />} text="Skillset" />
      </div>
    </nav>
  );
};

export default Navbar;
