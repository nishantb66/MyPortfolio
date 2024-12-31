import React, { useEffect, useState } from "react";
import "./Skills.css"; // Import custom CSS for unique font and animation

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("skills");
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
      id="skills"
      className="relative p-8 md:p-16 bg-gradient-to-r from-indigo-50 to-indigo-100 text-gray-900 min-h-screen overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-purple-300 to-pink-400 rounded-full blur-[80px] md:blur-[120px] opacity-40 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <h2
          className={`unique-heading text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 sm:mb-12 md:mb-20 text-center transition-transform duration-1000 ease-out ${
            isVisible
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-75 translate-y-10 opacity-0"
          }`}
        >
          My Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {[
            "JavaScript",
            "ReactJS",
            "ExpressJS",
            "NodeJS",
            "Tailwind CSS",
            "MongoDB",
            "SQL",
            "Java Programming",
            "C++ Programming",
            "Python",
            "Flask",
            "Django",
            "Kotlin Basics",
          ].map((skill, index) => (
            <div
              key={index}
              className={`${
                isVisible
                  ? "scale-100 opacity-100 translate-y-0 shadow-xl"
                  : "scale-75 opacity-0 translate-y-10"
              } bg-white bg-opacity-90 text-indigo-800 text-sm sm:text-lg md:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform transition-all duration-[1000ms] ease-in-out delay-[${
                index * 100
              }ms] hover:scale-110 hover:shadow-2xl`}
              style={{
                boxShadow: isVisible
                  ? "0 10px 30px rgba(0, 0, 0, 0.2)"
                  : "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
