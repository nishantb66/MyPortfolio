import React from "react";
import { FaCode, FaDatabase, FaMobile, FaTools } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "ReactJS", level: 80 },
        { name: "NestJS", level: 70 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaDatabase />,
      skills: [
        { name: "NodeJS", level: 82 },
        { name: "ExpressJS", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 78 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <FaTools />,
      skills: [
        { name: "Python", level: 80 },
        { name: "Java", level: 90 },
        { name: "C++", level: 80 },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: <FaMobile />,
      skills: [
        { name: "Django", level: 70 },
        { name: "Flask", level: 75 },
        { name: "Kotlin", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Technical <span className="text-green-600">Expertise</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md
                       border border-green-100"
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl sm:text-3xl text-green-600 mr-3">
                  {category.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-green-600 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-green-50 rounded-full">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
