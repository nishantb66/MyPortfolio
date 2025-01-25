import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Developer Intern",
      company: "ONGC Ltd. Mumbai",
      type: "Onsite",
      period: "May 2024 - July 2024",
      location: "Mumbai, India",
      description:
        "Developed and maintained custom chatbot web application using Flask, web-technologies and Docker. Worked with cross-functional teams to deliver features and optimized app performance in RedHat Linux.",
      skills: ["Flask", "Docker", "Linux", "Python", "Web Development"],
    },
    {
      id: 2,
      role: "Data Consultant Intern",
      company: "Mahindra and Mahindra",
      type: "Remote",
      period: "May 2023 - July 2024",
      location: "Remote",
      description:
        "Worked on building models, post-training optimization, and data analysis using SQL and Python.",
      skills: ["Python", "SQL", "Data Analysis", "Machine Learning"],
    },
    {
      id: 3,
      role: "Member of Sponsorship Committee",
      company: "Ignite Technical Festival, SVKM's NMIMS",
      type: "On-Campus",
      period: "Jan 2022 - April 2022",
      location: "Navi Mumbai, India",
      description:
        "Worked with a dynamic team to organize the technical festival Ignite, which attracted over 2000 participants and onboarding potential sponsors.",
      skills: ["HCommunication", "Team Management", "Negotiation"],
    },
  ];

  return (
    <section
      id="experience"
      className="pt-20 sm:pt-24 md:pt-28 py-8 sm:py-12 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Professional <span className="text-green-600">Journey</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200"></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3">
                <div className="w-full h-full rounded-full bg-green-500"></div>
              </div>

              {/* Content card */}
              <div
                className="ml-12 md:ml-0 md:w-5/12 bg-white rounded-xl p-6 sm:p-8 
                            shadow-md border border-green-100"
              >
                {/* Role & Company */}
                <div className="flex items-center gap-3 text-green-600 mb-4">
                  <FaBriefcase className="text-xl" />
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                </div>
                <p className="text-gray-700 font-medium mb-3">{exp.company}</p>

                {/* Period & Location */}
                <div className="text-gray-600 mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-green-500" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm">{exp.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-green-50 text-green-700 
                               rounded-md font-medium border border-green-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
