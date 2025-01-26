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
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-green-600 font-semibold mb-2">My Expertise</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive toolkit for modern software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] 
                       border-2 border-transparent hover:border-green-50"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="flex items-center justify-center w-12 h-12 
                              rounded-xl bg-green-50 text-green-600"
                >
                  <span className="text-xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-green-600 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-600"
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
