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
      "Implemented multi-user PRACH detection, enhancing resource allocation and reducing latency.",
      "Integrated AI/ML techniques for PRACH detection, leveraging deep learning models (CNN/FNN).",
      "5G NR Physical Layer R&D, optimizing PRACH receiver algorithms for better signal detection and synchronization.",
      "Built and validated complete uplink PHY processing chains (PRACH, PUSCH, and other channels) through MATLAB simulations (5G Toolbox, Wireless, Deep Learning), AWGN/TDL channel modeling, lab verification, and live field deployments.",
      "Used C++, Python, and MATLAB in HPC environments to develop highly optimized and production-ready telecom software components and solutions.",
      "Performed in-depth analysis of low-level PHY logs, ORAN fronthaul captures, and MATLAB-based signal processing for performance validation and tuning.",
      "Achieved a 3 dB gain in Noise and Interference Cancellation (NIC) algorithms for uplink PRACH channels, significantly improving signal robustness in challenging RF environments.",
      "Led 5G NR Layer 1 PHY development focusing on uplink PRACH signal processing and real-time low-latency optimizations. Reduced PRACH processing latency from 3 milliseconds to 700 microseconds, enabling ultra-low-latency network operations in Integrated Macro gNodeB Carrier Aggregation (ImgCA).",
      "Designed, trained, and deployed CNN / FNN AI models, unified ML model integrated into Layer 1 PHY modules, for PRACH detection and timing advance estimation. Generated MATLAB‐based datasets, training/validating models, and outperforming standard correlation‐based receivers under low‐SNR conditions.",
      "Collaborated extensively with L1-L2 protocol stack teams to enhance NR gNodeB functionalities including CCDU, MRU, and LRU feature development and troubleshooting. Implemented and optimized carrier aggregation features to increase bandwidth efficiency and spectral usage for high-throughput uplink scenarios.",
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
      <h2 className="text-2xl font-bold mb-6 text-white uppercase">
        WORK EXPERIENCE
      </h2>
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
                priority={true}
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
              <ul className="list-disc list-outside ml-2 mt-2 space-y-1 text-gray-300 leading-relaxeds w-full text-justify">
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
