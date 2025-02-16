import React from "react";
import { FaGithub, FaPlay, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise Portal",
      description:
        "A robust enterprise-grade web application designed for employees, offering multiple full-scale features. Launched as an MVP with a focus on scalability and enterprise-level integrations.",
      isNew: true,
      liveLink: "https://bpcl-portal.vercel.app/",
      tags: ["MERN + NextJS", "TailwindCSS"],
    },
    {
      id: 2,
      title: "simpleArticle",
      description: "A platform to write, read, collaborate and much more!",
      isNew: true,
      liveLink: "https://simplearticles.space/",
      tags: ["MERN + NextJS", "TailwindCSS", "Python", "AI"],
    },
    {
      id: 3,
      title: "SocialHub",
      description:
        "A modern social media web application with real-time features.",
      github: "https://github.com/nishantb66/SocialHub",
      demo: "https://drive.google.com/file/d/1xndaILrgQ3BtqdvE5t9X28k-nfGYL1hf/view",
      liveLink: "https://socialhub-frontend.vercel.app/register",
      tags: ["MERN Stack", "SocketIO", "TailwindCSS"],
    },
    {
      id: 4,
      title: "TextMind (Capstone project)",
      description: "An AI tool and one-stop-shop for all textual data analysis",
      github: "https://github.com/nishantb66/TextMind",
      demo: "https://drive.google.com/file/d/16EkHPQwihVbBWwiYwN8WEOH4kCIXLgav/view?usp=sharing",
      tags: ["Python", "Flask", "TailwindCSS", "NLP", "HuggingFace"],
    },
    {
      id: 5,
      title: "InfoAssist Bot",
      description:
        "An offline AI chatbot with customisable database system, continuous user feedback system and admin panel.",
      github: "https://github.com/nishantb66/InfoAssist-all-MiniLM-L6-v2-model",
      demo: "https://drive.google.com/file/d/1a_hH17_h1gIY-QtpCy1H-ojdLo4mSJF3/view?usp=sharing",
      tags: ["Python", "Flask", "Javascript", "NLP", "HuggingFace"],
    },
    {
      id: 6,
      title: "PDFatEase",
      description: " A one-stop-shop for your all PDFs.",
      github: "https://github.com/nishantb66/PDFatEase/tree/main",
      demo: "https://drive.google.com/file/d/1kmpb0jcoqeLULgmf8bnzJLtyBX8UhwLc/view?usp=sharing",
      tags: ["Python", "Flask", "TailwindCSS"],
    },
    // Add other projects similarly...
  ];

  return (
    <section
      id="projects"
      className="pt-20 sm:pt-24 md:pt-28 py-8 sm:py-12 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Featured <span className="text-green-600">Projects</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Exploring the intersection of technology and design through
            innovative 24x7 solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md
                       border border-green-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {project.title}
                  {project.isNew && (
                    <span
                      className="ml-2 px-3 py-1 text-xs bg-green-50 
                                   text-green-700 rounded-full"
                    >
                      New
                    </span>
                  )}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs sm:text-sm bg-green-50 
                             text-green-700 rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-green-100">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600"
                  >
                    <FaGithub className="mr-2" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600"
                  >
                    <FaPlay className="mr-2" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 ml-auto"
                  >
                    <span className="text-sm font-medium">Live Site</span>
                    <FaExternalLinkAlt className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
