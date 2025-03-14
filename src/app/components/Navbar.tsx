import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Prashant&apos; Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#education" className="hover:text-gray-400">Education</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#achievements-hobbies" className="hover:text-gray-400">Achievements & Hobbies</a></li>        
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
