import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Software Development Engineer (R&D)",
    company: "Jio Platforms Limited",
    location: "Mumbai, India",
    duration: "June 2021 – Present",
    logo: "/logos/logo_jio.png",
    details: [
      "5G NR Physical Layer R&D, optimizing PRACH receiver algorithms for better signal detection and synchronization.",
      "Developed noise and interference cancellation features to improve receiver sensitivity.",
      "Worked on carrier aggregation to enhance bandwidth utilization and spectral efficiency.",
      "Implemented multi-user PRACH detection, enhancing resource allocation and reducing latency.",
      "Integrated AI/ML techniques for PRACH detection, leveraging deep learning models (CNN/FNN).",
      "Analyzed low-PHY logs, ORAN fronthaul logs, and performed PRACH signal processing in MATLAB.",
      "Worked across L1-L2 teams, supporting feature development, troubleshooting, and enhancing NR gNodeB, CCDU, MRU, and LRU functionalities.",
    ],
  },
  {
    title: "Technical Internship",
    company: "IIT Kanpur (iSmriti Collaboration)",
    location: "Domain: Machine Learning & Robotics",
    duration: "Internship Period",
    logo: "/logos/logo_iitk.png",
    details: [
      "Developed and deployed ML models with real-world datasets, gaining hands-on AI experience.",
      "Built an autonomous toy car using a microcontroller, sensors, and a breadboard for real-time decision-making.",
      "Designed a CNN-based facial image recognition AI model, applying deep learning and computer vision.",
      "Explored AI/ML applications in embedded systems and robotics, enhancing problem-solving skills in automation.",
    ],
  },
  {
    title: "Volunteer Internship",
    company: "Udaan Society, Aligarh",
    location: "Community Development & Social Work",
    duration: "Internship Period",
    logo: "/logos/logo_udaan.png",
    details: [
      "Provided books, clothes, and study sessions for underprivileged children.",
      "Conducted government surveys in rural villages for social welfare programs.",
      "Organized a Nukkad Natak (street play) on Environment Day, spreading awareness about conservation.",
      "Engaged with media to amplify the campaign's reach, leading to newspaper coverage.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 px-5 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>
      <div className="max-w-5xl mx-auto space-y-8 ">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#2B3B47] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start text-left"
          >
            <div className="w-16 h-16 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white leading-snug">
                {exp.title} | {exp.company}
              </h3>
              <p className="text-gray-300 italic">
                {exp.location} | {exp.duration}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 leading-relaxeds">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
