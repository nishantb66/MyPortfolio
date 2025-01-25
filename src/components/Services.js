import React from "react";
import {
  FaCode,
  FaPalette,
  FaChartBar,
  FaMobile,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const Services = () => {
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

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Professional <span className="text-green-600">Services</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional solutions with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md
                       border border-green-100"
            >
              {/* Service Icon */}
              <div className="text-2xl sm:text-3xl text-green-600 mb-4">
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                {service.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs sm:text-sm bg-green-50 
                             text-green-700 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
