import React, { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("experience");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="p-8 md:p-16 bg-gradient-to-r from-[#7e5a3c] to-[#5f3d2e] text-white min-h-screen"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-center text-[#f5c900] transition-transform duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          My Experience
        </h2>
        <div className="relative">
          {/* Timeline */}
          <div className="border-l-4 border-[#f5c900] pl-6 md:pl-8">
            {/* Experience 1 */}
            <div
              className={`mb-12 pl-6 md:pl-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="absolute left-[-14px] md:left-[-18px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#f5c900] rounded-full animate-ping"></div>
              <div className="absolute left-[-14px] md:left-[-18px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#f5c900] rounded-full"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f5c900]">
                Developer Intern - Onsite
              </h3>
              <p className="text-sm sm:text-lg text-gray-400">
                ONGC Ltd. Mumbai | May 2024 - July 2024
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mt-2">
                Developed and maintained custom chatbot web application using
                Flask, web-technologies and Docker. Worked with cross-functional
                teams to deliver features and optimized app performance in RedHat
                Linux.
              </p>
            </div>

            {/* Experience 2 */}
            <div
              className={`mb-12 pl-6 md:pl-8 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="absolute left-[-14px] md:left-[-18px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#f5c900] rounded-full animate-ping"></div>
              <div className="absolute left-[-14px] md:left-[-18px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#f5c900] rounded-full"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f5c900]">
                Data Consultant Intern - Remote
              </h3>
              <p className="text-sm sm:text-lg text-gray-400">
                Mahindra and Mahindra | May 2023 - July 2024
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mt-2">
                Worked on building models, post-training optimization, and data
                analysis using SQL and Python.
              </p>
            </div>

            {/* Experience 3 */}
            <div
              className={`mb-12 pl-6 md:pl-8 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="absolute left-[-14px] md:left-[-18px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#f5c900] rounded-full animate-ping"></div>
              <div className="absolute left-[-14px] md:left-[-18px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#f5c900] rounded-full"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f5c900]">
                Member of sponsorship committee 
              </h3>
              <p className="text-sm sm:text-lg text-gray-400">
                Ignite Technical Festival, SVKM's NMIMS Navi Mumbai | Jan 2022 - April 2022
              </p>
              <p className="text-sm sm:text-lg text-gray-300 mt-2">
                Contributed to the development of internal tools using HTML,
                CSS, and JavaScript. Optimized code for better performance and
                supported the backend team with API integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
