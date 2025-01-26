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
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-green-600 font-semibold mb-2">What I Offer</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Services
          </h2>
          <p className="text-lg text-gray-600">
            Delivering exceptional solutions with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] 
                       border-2 border-transparent hover:border-green-50"
            >
              {/* Service Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 
                            rounded-xl bg-green-50 text-green-600 mb-6"
              >
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-1.5 text-sm bg-gray-50 text-gray-700 
                             rounded-lg font-medium"
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
