import React from "react";
import Mypic from "./Mypic.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pt-20 sm:pt-24 md:pt-28 py-8 sm:py-12 md:py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Image Column */}
          <div className="w-full sm:w-3/4 lg:w-2/5 max-w-md mx-auto lg:mx-0">
            <div className="relative bg-green-50 rounded-2xl p-3">
              <img
                src={Mypic}
                alt="Nishant Baruah"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-green-600">Me</span>
            </h2>

            <div className="text-gray-600 mb-8 space-y-4">
              <p className="text-base sm:text-lg">
                Hello! I'm a Full Stack Developer and Data Analyst passionate
                about building digital solutions that make a difference. I
                specialize in creating modern, responsive applications that
                combine aesthetic design with robust functionality.
              </p>
              <p className="text-base sm:text-lg">
                With expertise in both frontend and backend development, I enjoy
                tackling complex problems and turning them into simple,
                beautiful solutions. My approach combines technical excellence
                with creative problem-solving.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
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
                  className="px-4 py-2 bg-green-50 text-green-700 rounded-lg 
                           text-sm font-medium border border-green-100"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Resume Button */}
            <div className="text-center lg:text-left">
              <a
                href="https://drive.google.com/file/d/1EFGOya6gsVi4o1Wp1IiY4gbEcc8ZuG5d/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 
                         text-white rounded-lg text-sm sm:text-base font-medium 
                         shadow-sm hover:bg-green-700"
              >
                View Resume
                <svg
                  className="ml-2 w-5 h-5"
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
      </div>
    </section>
  );
};

export default About;
