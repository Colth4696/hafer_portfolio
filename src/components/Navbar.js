import React from "react";

export default function Navbar() {
  return (
    <header className="navigation_bar">
      <div className="navigation_container">
        <a className="navigation_links">
        <nav className="navbar">
          <a href="#about" className="about_link">
              Colt Hafer
          </a>
          <a href="#projects" className="project_link">
            Past Work
          </a>
          <a href="#skills" className="skills_link">
            Skills
          </a>
          <a href="#contact" className="contact_link">
            Hire Me
          </a>
        </nav>
        </a>
      </div>
    </header>
  );
}