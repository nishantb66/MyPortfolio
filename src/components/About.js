import React from "react";
import Mypic from "./Mypic.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-[2.5rem] transform rotate-6"></div>
              <div className="relative bg-white p-4 rounded-[2rem] shadow-xl">
                <img
                  src={Mypic}
                  alt="Nishant Baruah"
                  className="w-full h-[500px] object-cover rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-3/5">
            <div className="max-w-xl">
              <h4 className="text-green-600 font-semibold mb-2">About Me</h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Crafting Digital Excellence with Purpose
              </h2>

              <div className="space-y-6 text-gray-600 mb-12">
                <p className="text-lg leading-relaxed">
                  Hello! I'm a Full Stack Developer and Data Analyst passionate
                  about building digital solutions that make a difference. I am
                  specialize in creating modern, responsive applications that
                  combine aesthetic design with robust functionality.
                </p>
                <p className="text-lg leading-relaxed">
                  With expertise in both frontend and backend development, I
                  enjoy tackling complex problems and turning them into simple,
                  beautiful solutions. My approach combines technical excellence
                  with creative problem-solving.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {[
                  "Full Stack Development",
                  "Data Analysis",
                  "AI Solutions",
                  "UI/UX Design",
                  "Problem Solving",
                  "Team Collaboration",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white px-4 py-3 rounded-xl border border-gray-100 
                             shadow-sm hover:border-green-200 transition-colors"
                  >
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1EFGOya6gsVi4o1Wp1IiY4gbEcc8ZuG5d/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white 
                         rounded-xl text-lg font-semibold transition-all
                         hover:bg-green-600 hover:shadow-lg"
              >
                View Resume
                <svg
                  className="ml-3 w-6 h-6"
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
