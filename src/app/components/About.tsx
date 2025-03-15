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

    // <section id="about" className="bg-[#2A3B47] p-6 rounded-lg shadow-lg my-6">
    //   <h2 className="text-2xl font-bold ">About Me</h2>
    //   <p className="mt-2 text-gray-300">
    //     Hi, I&apos;m Prashant! I specialize in Layer 1 (Physical Layer) development in wireless networks,
    //     particularly focused on PRACH. I have experience in telecom protocols such as UDP, TCP, and ORAN,
    //     and have worked on projects like Massive MIMO, Outdoor Small Cell, Indoor Small Cell, and IMG CA.
    //   </p>
    //   <p className="text-lg text-gray-700 mb-4">
    //     Additionally, I have a strong interest in Machine Learning and Artificial Intelligence, exploring their
    //     applications in telecom and signal processing. I have worked on integrating ML into PRACH analysis
    //     and have experience deploying ML models using Flask. I am also proficient in Next.js, Firebase, Node.js,
    //     and MongoDB for web development.
    //   </p>
    //   <p className="text-lg text-gray-700">
    //     Outside of tech, I am a passionate badminton player, a nature photographer, and a problem solver
    //     who enjoys Sudoku and chess.
    //   </p>
    // </section>
  );
};

export default About;
