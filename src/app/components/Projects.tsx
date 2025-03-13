import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, TypeScript, and TailwindCSS to showcase my skills and projects.",
    link: "https://github.com/prashantk01/nextjs-portfolio",
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management app with React, Node.js, Express, and MongoDB, enabling users to create and manage tasks efficiently.",
    link: "https://github.com/prashantk01/task-manager",
  },
  {
    title: "Calorie Estimation App",
    description: "An AI-powered app that estimates calorie intake from food images using deep learning and computer vision techniques.",
    link: "https://github.com/prashantk01/calorie-estimation",
  },
  {
    title: "Human Facial Expression Detection",
    description: "A deep learning model that classifies human facial expressions into emotions like happy, sad, and angry using CNNs.",
    link: "https://github.com/prashantk01/facial-expression-detection",
  },
  {
    title: "Social Media Backend (MERN)",
    description: "Backend APIs for a social media platform built with Express.js, Node.js, and MongoDB, featuring authentication, CRUD operations, and user management.",
    link: "https://github.com/prashantk01/social-media-backend",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Projects</h2>  {/* Dark gray for visibility */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>  {/* Blue for contrast */}
            <p className="text-gray-700 mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
