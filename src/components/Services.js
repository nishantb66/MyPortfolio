import React, { useEffect, useState } from "react";

const Services = () => {
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleServices((prevVisibleServices) => [
              ...prevVisibleServices,
              entry.target.dataset.index,
            ]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section
      id="services"
      className="relative p-8 md:p-16 bg-gradient-to-r from-indigo-50 to-indigo-100 text-gray-900 min-h-screen overflow-hidden"
    >
      {/* Subtle Background Patterns */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-indigo-200 to-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <h2
          className={`text-4xl md:text-6xl font-extrabold mb-12 md:mb-20 text-center text-indigo-800 transition-transform duration-1000 ease-out ${
            visibleServices.length > 0
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {[
            {
              title: "Development",
              description:
                "Building responsive and modern applications with the latest technologies.",
              icon: "🌐",
            },
            {
              title: "UI/UX Design",
              description:
                "Creating user-friendly and visually appealing designs for a seamless experience.",
              icon: "🎨",
            },
            {
              title: "Data Science/Analysis",
              description:
                "Providing solutions and insights on data, modeling ML solutions and Natural Language Processing.",
              icon: "💡",
            },
          ].map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card ${
                visibleServices.includes(index.toString())
                  ? "scale-105 translate-y-0 opacity-100 shadow-xl"
                  : "scale-90 translate-y-12 opacity-0"
              } bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-6 md:p-10 rounded-xl transform transition-all duration-[1200ms] ease-in-out delay-[${
                index * 300
              }ms] hover:scale-110 hover:shadow-2xl`}
              style={{
                boxShadow: visibleServices.includes(index.toString())
                  ? "0 10px 30px rgba(0, 0, 0, 0.2)"
                  : "0 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Icon */}
              <div
                className={`text-4xl md:text-5xl mb-4 md:mb-6 transition-all ${
                  visibleServices.includes(index.toString())
                    ? "text-indigo-600 rotate-0"
                    : "text-indigo-400 -rotate-12"
                } transform duration-1000 ease-out`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`${
                  visibleServices.includes(index.toString())
                    ? "text-2xl md:text-3xl"
                    : "text-xl"
                } font-bold text-indigo-800 transition-all duration-1000`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-2 md:mt-4 ${
                  visibleServices.includes(index.toString())
                    ? "text-gray-800"
                    : "text-gray-500"
                } transition-colors duration-1000`}
              >
                {service.description}
              </p>

              {/* Gradient Accent Line */}
              <div
                className={`mt-4 md:mt-6 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full ${
                  visibleServices.includes(index.toString())
                    ? "scale-x-100"
                    : "scale-x-0"
                } transition-transform duration-[1200ms] ease-out`}
                style={{ transformOrigin: "left" }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
