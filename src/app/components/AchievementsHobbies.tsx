import React from "react";

const AchievementsHobbies: React.FC = () => {
  return (
    <section
      id="achievements-hobbies"
      className="py-10 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-2xl font-bold mt-8 mb-4 uppercase">
        Achievements & Hobbies
      </h2>
      <section className="py-2 px-2 max-w-4xl mx-auto text-center bg-[#2B3B47]">
        <div className="text-lg text-gray-200  mb-3 text-left mx-auto max-w-4xl ">
          <h3 className="text-xl font-semibold mt-4">🏆 Achievements</h3>
          <ul className="list-disc list-outside ml-6 space-y-1 text-justify">
            <li>
              <strong>3rd Rank</strong> – Hackathon at Aligarh Muslim University
              (ZARF‑19) powered by AMU‑FOSSASIA.
            </li>
            <li>
              Achieved <strong>+3 dB gain</strong> in Noise & Interference
              Cancellation (NIC) algorithm for uplink PRACH channel.
            </li>
            <li>
              Active participant in coding competitions, consistently applying
              and improving <strong>problem‑solving skills</strong>.
            </li>
            <li>
              <strong>Reduced PRACH latency</strong> in 5G NR Layer 1 from{" "}
              <strong>3 ms to 700 µs</strong> in the Integrated Macro gNodeB
              Carrier Aggregation project.
            </li>
          </ul>
        </div>

        <div className="text-lg text-gray-200 mb-3 text-left mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mt-4">🎮 Hobbies</h3>
          <ul className="list-disc list-outside ml-6 space-y-1 text-justify">
            <li>
              <strong>Playing Chess & Solving Sudoku</strong> – sharpening
              logical thinking and strategic planning.
            </li>
            <li>
              <strong>Football & Badminton enthusiast</strong> – promoting
              teamwork, focus, and agility.
            </li>
            <li>
              <strong>Photography</strong> enthusiast – capturing sunrises,
              sunsets, and nature to enhance creativity and observation skills.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default AchievementsHobbies;
