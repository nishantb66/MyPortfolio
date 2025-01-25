import React, { useEffect, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("projects");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white to-gray-50 text-gray-800 min-h-screen"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-900 transition-transform duration-1000 ease-out ${
            isVisible ? "transform scale-100" : "transform scale-90 opacity-0"
          }`}
        >
          My Projects
        </h2>

        <p className="text-base text-indigo-600 mb-7 text-center">
          Explore my latest projects built using wide range of web and AI
          technologies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="project-card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              simpleArticle {"  "}
              <span className="px-3 py-1 text-sm bg-green-300 text-gray-700 rounded-full">
                New
              </span>
            </h3>
            <p className="text-base text-gray-600 mb-5">
              A platform to write, read, collaborate and much more!
            </p>
            <a
              href="https://simplearticles.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-sm font-medium"
            >
              Visit site and start exploring
            </a>
          </div>

          {/* Project 1 */}
          <div className="project-card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              SocialHub
            </h3>
            <p className="text-base text-gray-600 mb-5">
              A modern social media web application, having modern
              fucntionalities and real time features.
            </p>
            <a
              href="https://github.com/nishantb66/SocialHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View on GitHub
            </a>
            <br />
            <a
              href="https://drive.google.com/file/d/1xndaILrgQ3BtqdvE5t9X28k-nfGYL1hf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Demo video
            </a>
            <br />
            <a
              href="https://socialhub-frontend.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-sm font-medium"
            >
              Visit site
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              JobTracker
            </h3>
            <p className="text-base text-gray-600 mb-4">
              Manage you job applications seemlessly and track it using
              Jobtracker, a web-based application including admin features and
              status visualization.
            </p>
            <a
              href="https://github.com/nishantb66/JobTracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View on GitHub
            </a>
            <br />
            <a
              href="https://drive.google.com/file/d/1-OjFLlZSk9ECb0O-3gXm2FjRrq9iqoAJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Demo video
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              TextMind (Capstone project)
            </h3>
            <p className="text-base text-gray-600 mb-4">
              An AI tool for textual data analysis and real time conversations
              with advance feature including admin panel and results
              visualizations
            </p>
            <a
              href="https://github.com/nishantb66/TextMind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View on Github
            </a>
            <br />
            <a
              href="https://drive.google.com/file/d/16EkHPQwihVbBWwiYwN8WEOH4kCIXLgav/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Demo video
            </a>
          </div>

          {/* Project 4 */}
          <div className="project-card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              InfoAssist Bot
            </h3>
            <p className="text-base text-gray-600 mb-4">
              An offline AI chatbot with customisable database system,
              continuous user feedback system and admin panel
            </p>
            <a
              href="https://github.com/nishantb66/InfoAssist-all-MiniLM-L6-v2-model"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View on GitHub - all-MiniLM-L6-v2 model (more capable)
            </a>
            <br />
            <a
              href="https://github.com/nishantb66/InfoAssist-NN-model"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View on GitHub - Custom NN model (less capable)
            </a>
            <br />
            <a
              href="https://drive.google.com/file/d/1a_hH17_h1gIY-QtpCy1H-ojdLo4mSJF3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Demo video
            </a>
          </div>

          {/* Project 5 */}
          <div className="project-card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Cryptify
            </h3>
            <p className="text-base text-gray-600 mb-4">
              Encrypt and Decrypt your message using Cryptify Developed using
              various encryption-description algorithms and Streamlit+CSS for
              frontend
            </p>
            <a
              href="https://github.com/nishantb66/Criptify/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View on GitHub
            </a>
            <br />
            <a
              href="https://drive.google.com/file/d/1-yxmwFJREJz3h76p1vOnQNka7_8xkzMR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Demo video
            </a>
          </div>

          {/* Project 6 */}
          <div className="project-card shadow-lg rounded-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              PDFatEase
            </h3>
            <p className="text-base text-gray-600 mb-4">
              A one-stop shop for PDFs, built using Python, Flask, HTML,
              JavaScript, and Tailwind CSS.
            </p>
            <a
              href="https://github.com/nishantb66/PDFatEase/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View on GitHub
            </a>
            <br />
            <a
              href="https://drive.google.com/file/d/1kmpb0jcoqeLULgmf8bnzJLtyBX8UhwLc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Demo video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;