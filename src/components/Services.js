import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaPalette,
  FaChartBar,
  FaMobile,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const Services = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Full-stack development with modern frameworks and technologies",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences",
      tags: ["Figma", "Adobe XD", "Prototyping"],
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics",
      description: "Data-driven insights and machine learning solutions",
      tags: ["Python", "TensorFlow", "Data Visualization"],
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      tags: ["React Native", "Flutter", "Native Apps"],
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Scalable and efficient database architectures",
      tags: ["SQL", "NoSQL", "Data Modeling"],
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment",
      tags: ["AWS", "Azure", "DevOps"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".service-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional solutions with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={`service-${index}`}
              className={`service-card backdrop-blur-lg bg-white/90 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                visibleSections.includes(`service-${index}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-3xl text-indigo-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
