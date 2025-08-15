import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center uppercase">
        ABOUT ME
      </h2>
      <div className="text-base leading-relaxed space-y-3 bg-[#2E3E4E] p-6 rounded-2xl shadow-lg max-w-5xl w-[90%] mx-auto">
        <p className="w-full text-justify">
          I am a Software Engineer with over 4 years of experience designing and
          building high‑performance, real‑time systems at Jio Platforms Limited.
          My work focuses on 5G NR Layer 1 (PHY) development, where I have
          engineered uplink PRACH signal processing pipelines and signal chain
          modules to achieve ultra‑low latency and improved accuracy. I have
          deep hands‑on experience in C++, Linux, 3GPP‑compliant telecom
          systems, and HPC toolchains. Key achievements include -
          <ul className="list-disc list-inside ml-4">
            <li>
              Reduced PRACH latency in the Integrated Macro gNodeB Carrier
              Aggregation (ImgCA) project from 3 ms to 700 µs.
            </li>
            <li>
              Delivered a 3 dB gain in Noise & Interference Cancellation (NIC)
              algorithms for uplink channels.
            </li>
            <li>
              Integrated CNN/FNN models into PHY modules to improve preamble
              detection accuracy.
            </li>
          </ul>
        </p>
        <p className="w-full text-justify">
          Alongside telecom work, I have developed scalable backend systems in
          Node.js (TypeScript) and Java (Spring Boot). I’ve designed and
          deployed secure RESTful APIs with JWT/OAuth2 authentication,
          implemented efficient data management with MongoDB and Redis,
          integrated cloud storage with AWS S3, and built CI/CD pipelines using
          Docker and GitHub Actions. My work spans enterprise‑grade deployments
          and startup‑style rapid prototypes, with a consistent focus on
          performance, scalability, and clean architecture.
        </p>
        <p className="w-full text-justify">
          I’m passionate about applying artificial intelligence and machine
          learning to solve real‑world problems. In telecom, I’ve deployed deep
          learning models for PRACH detection and timing advance estimation. In
          computer vision, my projects include traffic signal recognition (GTSRB
          dataset), facial emotion detection, and food image calorie estimation
          systems. I am actively upskilling in Transformer‑based Large Language
          Models (encoder, decoder, encoder‑decoder), ResNet/AlexNet
          architectures, and reinforcement learning—with the goal of building
          autonomous, agentic AI systems that combine perception, planning, and
          adaptive decision‑making.
        </p>
      </div>
    </div>
  );
};

export default About;
