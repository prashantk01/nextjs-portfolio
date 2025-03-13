import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <div className="text-lg text-gray-700">
        <p className="mb-2 font-semibold">Bachelor of Technology (B.Tech) in Computer Science & Engineering</p>
        <p className="mb-2">Zakir Husain College of Engineering and Technology (ZHCET), Aligarh Muslim University, Aligarh</p>
        <p className="mb-4">Relevant Coursework: Data Structures, Algorithm Design, Computer Architecture, Operating Systems, Wireless Communication, Signal Processing, Machine Learning, Computer Networks</p>
        
        <p className="mb-2 font-semibold">Senior Secondary (12th Grade) - PCM</p>
        <p className="mb-2">Jawahar Navodaya Vidyalaya, Etah (CBSE)</p>
        <p className="mb-4">Percentage: 92%</p>
        
        <p className="mb-2 font-semibold">Secondary (10th Grade)</p>
        <p className="mb-2">Jawahar Navodaya Vidyalaya, Etah (CBSE)</p>
        <p>CGPA: 10.0</p>
      </div>
    </section>
  );
};

export default Education;