import React from "react";

const AchievementsHobbies: React.FC = () => {
  return (
    <section
      id="achievements-hobbies"
      className="py-10 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mt-8 mb-4">Achievements & Hobbies</h2>

      <section className="py-2 px-2 max-w-4xl mx-auto text-center bg-[#2B3B47]">
        <div className="text-lg text-gray-200  mb-3 text-left mx-auto max-w-4xl ">
          <h3 className="text-xl font-semibold mt-4">🏆 Achievements</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Secured 3rd Rank</strong> at Hack Aligarh Muslim
              University Hackathon powered by AMU-FOSSASIA in ZARF-19.
            </li>
            <li>
              Active participant in coding competitions and hackathons,
              showcasing <strong>problem-solving skills</strong>.
            </li>
            <li>
              Developed an <strong>AI-based PRACH detection model</strong>,
              optimizing 5G signal processing.
            </li>
          </ul>
        </div>

        <div className="text-lg text-gray-200 mb-3 text-left mx-auto max-w-4xl">
          <h3 className="text-xl font-semibold mt-4">🎮 Hobbies</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Playing Chess and Solving Sudoku puzzles </strong> to
              enhance problem-solving skills.
            </li>
            <li>
              <strong>Football and Badminton enthusiast</strong>, staying active
              and competitive.
            </li>
            <li>
              <strong>Passionate about photography</strong>, capturing sunrises,
              sunsets, and nature scenery.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default AchievementsHobbies;
