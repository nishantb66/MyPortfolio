import React, { useState, useEffect } from "react";
import Mypic from "./Mypic.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div
            className={`w-full lg:w-1/3 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-6 transition-transform duration-500 hover:rotate-0"></div>
              <img
                src={Mypic}
                alt="Nishant Baruah"
                className="relative rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`w-full lg:w-2/3 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Hello! I'm a Full Stack Developer and Data Analyst passionate
                about building digital solutions that make a difference. I
                specialize in creating modern, responsive applications that
                combine aesthetic design with robust functionality.
              </p>
              <p className="mt-4">
                With expertise in both frontend and backend development, I enjoy
                tackling complex problems and turning them into simple,
                beautiful solutions. My approach combines technical excellence
                with creative problem-solving.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Full Stack Development",
                "Data Analysis",
                "AI solutions",
                "UI/UX Design",
                "Problem Solving",
                "Team Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1EFGOya6gsVi4o1Wp1IiY4gbEcc8ZuG5d/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
            >
              View Resume
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
