import React, { useEffect, useState } from "react";
import { FaCode, FaDatabase, FaMobile, FaTools } from "react-icons/fa";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: <FaMobile />,
      skills: [
        { name: "Django", level: 70 },
        { name: "Flask", level: 75 },
        { name: "Kotlin", level: 65 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 delay-${
                idx * 200
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl text-indigo-600 mr-3">
                  {category.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
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
