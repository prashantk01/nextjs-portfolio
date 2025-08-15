import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#23272f] to-[#2E3E4E] py-12 px-5 text-white text-center rounded-2xl shadow-lg">
      {/* Name */}
      <h2 className="text-4xl font-bold mb-4 ">Prashant Kumar</h2>

      {/* Professional Title */}
      <h3 className="text-2xl md:text-2xl font-medium mb-6">
        Software Developer (C++ | 5G NR PHY) | Backend & API Developer | AI/ML
        Practitioner
      </h3>

      {/* Tagline */}
      <p className="text-lg max-w-4xl mx-auto mb-4 leading-relaxed text-gray-300">
        Building ultra‑low‑latency 5G telecom systems, scalable backend APIs,
        and intelligent AI‑powered solutions.
      </p>

      {/* Quick Stats */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-350 mb-8">
        <span>⚡ 4+ Years Experience</span>
        <span>🚀 PRACH Latency: 3 ms ➜ 700 µs</span>
        <span>📶 +3 dB NIC Feature Gain in PRACH</span>
      </div>
    </section>
  );
};

export default Hero;
