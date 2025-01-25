import React, { useEffect, useState } from "react";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".experience-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

   return (
     <section
       id="experience"
       className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
     >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
           Professional Journey
         </h2>

         <div className="relative">
           {/* Timeline line */}
           <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-500"></div>

           {experiences.map((exp, index) => (
             <div
               key={exp.id}
               id={`exp-${exp.id}`}
               className={`experience-card relative flex flex-col md:flex-row gap-8 mb-12 ${
                 index % 2 === 0 ? "md:flex-row-reverse" : ""
               }`}
             >
               {/* Timeline dot */}
               <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4">
                 <div className="w-full h-full rounded-full bg-indigo-400 animate-ping opacity-75"></div>
                 <div className="absolute inset-0 rounded-full bg-indigo-500"></div>
               </div>

               {/* Content card */}
               <div
                 className={`ml-8 md:ml-0 md:w-1/2 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-700 hover:shadow-xl ${
                   visibleItems.has(`exp-${exp.id}`)
                     ? "translate-y-0 opacity-100"
                     : "translate-y-20 opacity-0"
                 }`}
               >
                 <div className="flex items-center gap-3 text-indigo-600 mb-2">
                   <FaBriefcase className="text-xl" />
                   <h3 className="text-xl font-semibold">{exp.role}</h3>
                 </div>

                 <p className="text-gray-600 font-medium mb-2">{exp.company}</p>

                 <div className="text-gray-500 mb-4">
                   <div className="flex items-center gap-2 mb-1">
                     <FaCalendar className="text-indigo-400" />
                     <span>{exp.period}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <FaMapMarkerAlt className="text-indigo-400" />
                     <span>{exp.location}</span>
                   </div>
                 </div>

                 <p className="text-gray-600 mb-4 leading-relaxed">
                   {exp.description}
                 </p>

                 <div className="flex flex-wrap gap-2">
                   {exp.skills.map((skill, i) => (
                     <span
                       key={i}
                       className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full font-medium"
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
