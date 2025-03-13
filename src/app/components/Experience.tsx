import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience</h2>
      
      <div className="text-left text-lg text-gray-700 space-y-6">
        
        {/* Work Experience - Jio Platforms Limited */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Software Development Engineer | Jio Platforms Limited</h3>
          <p className="italic">Mumbai, India | June 2021 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>5G NR Physical Layer R&D, optimizing PRACH receiver algorithms for better signal detection and synchronization.</li>
            <li>Implemented multi-user PRACH detection, enhancing resource allocation and reducing latency.</li>
            <li>Developed noise and interference cancellation features to improve receiver sensitivity.</li>
            <li>Worked on carrier aggregation to enhance bandwidth utilization and spectral efficiency.</li>
            <li>Analyzed low-PHY logs, ORAN fronthaul logs, and performed PRACH signal processing in MATLAB.</li>
            <li>Integrated AI/ML techniques for PRACH detection, leveraging deep learning models (CNN/FNN).</li>
          </ul>
        </div>

        {/* Technical Internship - IIT Kanpur */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Technical Internship | IIT Kanpur (iSmriti Collaboration)</h3>
          <p className="italic">Domain: Machine Learning & Robotics</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Developed and deployed ML models with real-world datasets, gaining hands-on AI experience.</li>
            <li>Built an autonomous toy car using a microcontroller, sensors, and a breadboard for real-time decision-making.</li>
            <li>Designed a CNN-based facial image recognition AI model, applying deep learning and computer vision.</li>
            <li>Explored AI/ML applications in embedded systems and robotics, enhancing problem-solving skills in automation.</li>
          </ul>
        </div>

        {/* Non-Technical Internship - Udaan Society */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Volunteer Internship | Udaan Society, Aligarh</h3>
          <p className="italic">Community Development & Social Work</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Provided books, clothes, and study sessions for underprivileged children.</li>
            <li>Conducted government surveys in rural villages for social welfare programs.</li>
            <li>Organized a Nukkad Natak (street play) on Environment Day, spreading awareness about conservation.</li>
            <li>Engaged with media to amplify the campaign's reach, leading to newspaper coverage.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;