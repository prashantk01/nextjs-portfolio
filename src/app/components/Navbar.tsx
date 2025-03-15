import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#181A1B] bg-opacity-70 backdrop-blur-md p-4 border-b border-gray-700 fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Prashant&apos;s Portfolio
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-400">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements-hobbies" className="hover:text-gray-400">
              Achievements & Hobbies
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
