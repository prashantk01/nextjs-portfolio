import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-[#2E3E4E] text-white p-6 rounded-2xl shadow-lg max-w-5xl w-[80%] mx-auto">
  <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
  <div className="text-base leading-relaxed space-y-3">
    <p>
      Hi, I&apos;m Prashant! I specialize in Layer 1 (Physical Layer) development in wireless networks, particularly focused on PRACH.
          I have experience in telecom protocols such as UDP, TCP, and ORAN and have worked on projects like Massive MIMO,
          Outdoor Small Cell, Indoor Small Cell, and IMG CA.
    </p>
    <p>
          Additionally, I have a strong interest in Machine Learning and Artificial Intelligence,
          exploring their applications in telecom and signal processing. I have worked on integrating ML into PRACH analysis and have experience deploying ML models using Flask.
          I am also proficient in Next.js, Firebase, Node.js, and MongoDB for web development.
    </p>
    <p>
      Outside of tech, I am a passionate badminton player, a nature photographer, and a problem solver who enjoys Sudoku and chess.
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