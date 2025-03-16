import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio with Next.js, TypeScript & Firebase",
    description:
      "A personal portfolio built with Next.js, TypeScript TailwindCSS to showcase my skills, experience, education and projects. Integrated Firebase for backend services, vercel for deplyoment",
    link: "https://github.com/prashantk01/nextjs-portfolio",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management app with React, Node.js, Express, and MongoDB, enabling users to create and manage tasks. Leveraged Jest for robust unit testing",
    link: "https://github.com/prashantk01/task-manager-nodejs",
  },
  {
    title: "Calorie Estimation App",
    description:
      "An AI-powered app that estimates calorie intake from food images using deep learning and computer vision techniques. Flask server is used to deploy ML Classifier",
    link: "https://github.com/prashantk01/Calorie-estimation-from-food-images",
  },
  {
    title: "Human Facial Expression Detection",
    description:
      "A deep learning model that classifies human facial expressions into emotions like happy, sad, surprise, neutral, fear, disgust and angry using CNNs.",
    link: "https://github.com/prashantk01/Facial_Emotion_Recognition",
  },
  {
    title: "Social Media Backend (MERN)",
    description:
      "Backend APIs for a social media platform built with Express.js, Node.js, and MongoDB, featuring authentication, implementing RESTful APIs for core functionalities, CRUD operations",
    link: "https://github.com/prashantk01/social-media-platform-backend",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-10 max-w-5xl mx-auto text-center  text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-[#2B3B47] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              {project.title}
            </h3>
            <p className="text-gray-200 mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center space-x-2"
            >
              <FaGithub className="text-xl" />
              <span>View on GitHub</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
