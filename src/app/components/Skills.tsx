import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      
      <div className="text-left text-lg text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Programming Languages & Frameworks</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-gray-200 p-2 rounded">C</p>
            <p className="bg-gray-200 p-2 rounded">C++</p>
            <p className="bg-gray-200 p-2 rounded">Java</p>
            <p className="bg-gray-200 p-2 rounded">Python</p>
            <p className="bg-gray-200 p-2 rounded">TypeScript</p>
            <p className="bg-gray-200 p-2 rounded">JavaScript</p>
            <p className="bg-gray-200 p-2 rounded">Next.js</p>
            <p className="bg-gray-200 p-2 rounded">React.js</p>
            <p className="bg-gray-200 p-2 rounded">Node.js</p>
            <p className="bg-gray-200 p-2 rounded">Express.js</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Databases & Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-gray-200 p-2 rounded">MongoDB</p>
            <p className="bg-gray-200 p-2 rounded">Firebase</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Machine Learning & AI</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-gray-200 p-2 rounded">Machine Learning</p>
            <p className="bg-gray-200 p-2 rounded">Deep Learning</p>
            <p className="bg-gray-200 p-2 rounded">Computer Vision</p>
            <p className="bg-gray-200 p-2 rounded">Attention Mechanism (Self/Multi-Head)</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Telecom & Networking</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-gray-200 p-2 rounded">Data Structures & Algorithms</p>
            <p className="bg-gray-200 p-2 rounded">Telecom Protocols (UDP, TCP, ORAN)</p>
            <p className="bg-gray-200 p-2 rounded">5G NR PRACH</p>
            <p className="bg-gray-200 p-2 rounded">Wireless Communication</p>
            <p className="bg-gray-200 p-2 rounded">Signal Processing</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Operating Systems & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <p className="bg-gray-200 p-2 rounded">Linux Scripting & Command Line</p>
            <p className="bg-gray-200 p-2 rounded">CentOS & RedHat Commands</p>
            <p className="bg-gray-200 p-2 rounded">Git</p>
            <p className="bg-gray-200 p-2 rounded">GitHub</p>
            <p className="bg-gray-200 p-2 rounded">Phabricator</p>
            <p className="bg-gray-200 p-2 rounded">Chai/Mocha (Testing)</p>
            <p className="bg-gray-200 p-2 rounded">Matlab Toolboxes</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;