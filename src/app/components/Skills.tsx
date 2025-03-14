import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-5 text-center">
      <div className="bg-[#2b3b47] p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[ 
            "C / C++", "Java", "Python", "TypeScript", "JavaScript", "Next.js / React.js", "Node.js / Express.js", 
            "MongoDB", "Firebase", "Machine Learning", "Deep Learning", "Computer Vision", 
            "Data Structures & Algorithms", "Telecom Protocols", "UDP, TCP, ORAN", "5G NR PRACH", "Wireless Communication", "Signal Processing", 
            "Linux Scripting", "CentOS & RedHat OS", "Git / GitHub", "Phabricator", "Chai/Mocha (Testing)", "Matlab Toolboxes"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-[#181d20] text-gray-100 py-2 px-4 rounded-lg shadow-md"
            >
              {skill} 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
