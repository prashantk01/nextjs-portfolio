import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-4">
        Hi, I&apos;m Prashant! I specialize in Layer 1 (Physical Layer) development in wireless networks,
        particularly focused on PRACH. I have experience in telecom protocols such as UDP, TCP, and ORAN,
        and have worked on projects like Massive MIMO, Outdoor Small Cell, Indoor Small Cell, and IMG CA.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Additionally, I have a strong interest in Machine Learning and Artificial Intelligence, exploring their
        applications in telecom and signal processing. I have worked on integrating ML into PRACH analysis
        and have experience deploying ML models using Flask. I am also proficient in Next.js, Firebase, Node.js,
        and MongoDB for web development.
      </p>
      <p className="text-lg text-gray-700">
        Outside of tech, I am a passionate badminton player, a nature photographer, and a problem solver
        who enjoys Sudoku and chess.
      </p>
    </section>
  );
};

export default About;