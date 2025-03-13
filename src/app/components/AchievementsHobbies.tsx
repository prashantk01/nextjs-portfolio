import React from "react";
const AchievementsHobbies: React.FC = () => {
  return (
    <section id="achievements-hobbies" className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mt-12 mb-4">Achievements & Hobbies</h2>
      
      <div className="text-lg text-gray-700 mb-6">
        <h3 className="text-2xl font-semibold mt-6">Achievements</h3>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl">
          <li>Captain of the college volleyball team, leading to multiple tournament victories.</li>
          <li>Secured 3rd Rank at Hack Aligarh Muslim University Hackathon powered by AMU-FOSSASIA in ZARF-19.</li>
          <li>Active participant in coding competitions and hackathons, demonstrating problem-solving skills.</li>
          <li>Developed an AI-based PRACH detection model, optimizing 5G signal processing.</li>
        </ul>
      </div>

      <div className="text-lg text-gray-700 mb-6">
        <h3 className="text-2xl font-semibold mt-6">Hobbies</h3>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl">
          <li>Solving Sudoku puzzles daily to enhance problem-solving skills.</li>
          <li>Playing chess and engaging in strategic thinking exercises.</li>
          <li>Football and Badminton enthusiast, staying active and competitive.</li>
          <li>Passionate about photography, capturing sunrise, sunsets, and nature scenery.</li>
          <li>Exploring and experimenting with AI/ML models, including Transformers and attention mechanisms.</li>
          <li>Skilled in storytelling, with a natural ability to engage audiences.</li>
        </ul>
      </div>
    </section>
  );
};

export default AchievementsHobbies;