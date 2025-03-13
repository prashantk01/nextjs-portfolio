import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaFilePdf, FaCode } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mt-12 mb-4">Technical Profiles</h2>
      <p className="text-lg text-gray-700 mb-6">Connect with me on these platforms.</p>

      <div className="flex justify-center space-x-6 text-2xl">
        <a href="https://www.linkedin.com/in/prashantk01/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/prashantk01/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/prashantk01/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="LeetCode">
          <FaCode />
        </a>
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-12">Contact</h2>
      <p className="text-lg text-gray-700 mb-6">Feel free to reach out to me via email or check my resume.</p>
      
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="mailto:kumarprince2510@gmail.com" className="text-gray-600 hover:text-gray-900" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://drive.google.com/file/d/1tJB7Jp67mzE6zZcLCUK-NrsMO261PXR8/view" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900" aria-label="Resume">
          <FaFilePdf />
        </a>
      </div>
      
      <p className="text-lg text-gray-700 mt-6 flex justify-center items-center">
        <FaMapMarkerAlt className="mr-2" /> Mumbai, India
      </p>
    </section>
  );
};

export default Contact;
