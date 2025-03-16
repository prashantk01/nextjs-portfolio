import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-white p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
      <div className="text-base leading-relaxed space-y-3 bg-[#2E3E4E] p-6 rounded-2xl shadow-lg max-w-5xl w-[90%] mx-auto">
        <p>
          Hi, I&apos;m Prashant! I am a software developer with knowledge in
          backend development, and full-stack web technologies. My tech stack
          includes Next.js, Firebase, Node.js, MongoDB, and Express, and I have
          experience in building scalable applications, deploying ML models and
          exploring Deep learning algorithms.
        </p>
        <p>
          With a strong foundation in wireless networks and telecom, I have
          worked extensively on Layer 1 (Physical Layer) development,
          particularly focusing on PRACH, signal processing, and ML-driven
          optimizations. I am proficient in telecom protocols like UDP, TCP ORAN
          and have contributed to projects such as Massive MIMO, Outdoor Small
          Cell, and IMG CA.
        </p>
        <p>
          Beyond development, I am passionate about problem-solving, coding
          challenges, and exploring emerging technologies like AI and machine
          learning. In my free time, I am a passionate sports person.
        </p>
      </div>
    </div>
  );
};

export default About;
