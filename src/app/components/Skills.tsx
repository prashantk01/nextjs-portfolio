import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-5 text-center">
      <div className="bg-[#2b3b47] p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 uppercase">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "C / C++",
            "Java",
            "Python",
            "TypeScript",
            "JavaScript",
            "Node.js / Express.js",
            "Java Spring Boot",
            "Next.js / React.js",
            "RESTful API Development",
            "MongoDB",
            "Redis",
            "Firebase",
            "AWS S3 / Cloud Integrations",
            "CI/CD (Docker, GitHub Actions)",
            "Machine Learning",
            "Deep Learning",
            "TensorFlow / Keras",
            "Computer Vision / OpenCV",
            "Transformers / LLMs",
            "Reinforcement Learning",
            "Data Structures & Algorithms",
            "5G NR Layer 1 (PHY)",
            "PRACH Signal Processing",
            "Noise & Interference Cancellation",
            "Massive MIMO",
            "Protocols (UDP, TCP, ORAN)",
            "Wireless Communication",
            "Signal Processing",
            "Linux (CentOS, RedHat, Ubuntu)",
            "Git / GitHub",
            "Matlab Toolboxes",
            "Chai / Mocha (Testing)",
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
