import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen py-4 shadow-md " style={{ background: "linear-gradient(to right, #C0C0C0, #606060)" }}>
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="#projects" className="text-white hover:text-blue-300 transition-colors">
           Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="text-white hover:text-blue-300 transition-colors">
            Experience
          </a>
        </li>
       
        <li>
          <a href="#contact" className="text-white hover:text-blue-300 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
