"use client"; // Add this line at the top
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#181A1B] bg-opacity-70 backdrop-blur-md p-0 border-b border-gray-700 fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-white">
          {/* Portfolio Title */}
          <h1 className="text-xl font-bold whitespace-nowrap text-white">
            Prashant&apos;s <span className="text-blue-400">Portfolio</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/#about" className="hover:text-blue-400">
              About
            </Link>
            <Link href="/#education" className="hover:text-blue-400">
              Education
            </Link>
            <Link href="/#skills" className="hover:text-blue-400">
              Skills
            </Link>
            <Link href="/#experience" className="hover:text-blue-400">
              Experience
            </Link>
            <Link href="/#projects" className="hover:text-blue-400">
              Projects
            </Link>
            <Link href="/#achievements-hobbies" className="hover:text-blue-400">
              Achievements & Hobbies
            </Link>
            <Link href="/#contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#181A1B] border-t border-gray-700">
          <ul className="flex flex-col space-y-4 py-4 text-center">
            <li>
              <Link href="/#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#education" onClick={() => setIsOpen(false)}>
                Education
              </Link>
            </li>
            <li>
              <Link href="/#skills" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#experience" onClick={() => setIsOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#achievements-hobbies"
                onClick={() => setIsOpen(false)}
              >
                Achievements & Hobbies
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
