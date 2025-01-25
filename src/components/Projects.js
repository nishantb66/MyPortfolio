import React, { useEffect, useState } from "react";
import { FaGithub, FaPlay, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "simpleArticle",
      description: "A platform to write, read, collaborate and much more!",
      isNew: true,
      liveLink: "https://simplearticles.space/",
      tags: ["MERN + NextJS", "TailwindCSS", "Python", "AI"],
    },
    {
      id: 2,
      title: "SocialHub",
      description:
        "A modern social media web application with real-time features.",
      github: "https://github.com/nishantb66/SocialHub",
      demo: "https://drive.google.com/file/d/1xndaILrgQ3BtqdvE5t9X28k-nfGYL1hf/view",
      liveLink: "https://socialhub-frontend.vercel.app/register",
      tags: ["MERN Stack", "SocketIO", "TailwindCSS"],
    },
    {
      id: 3,
      title: "JobTracker",
      description:
        "A web-based tool to manage and track your Job Applications seemlessly, integrated with various features",
      github: "https://github.com/nishantb66/JobTracker",
      demo: "https://drive.google.com/file/d/1-OjFLlZSk9ECb0O-3gXm2FjRrq9iqoAJ/view?usp=sharing",
      tags: ["MERN", "CRUD", "TailwindCSS"],
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            Exploring the intersection of design and technology through
            innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                    {project.isNew && (
                      <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        New
                      </span>
                    )}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <FaPlay className="mr-2" />
                      Demo
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors ml-auto"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
