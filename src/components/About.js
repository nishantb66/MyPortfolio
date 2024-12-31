import React, { useState, useEffect } from 'react';
import Mypic from './Mypic.jpg'; // Importing the image from the same directory

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="about"
      className={`relative p-8 bg-gradient-to-r from-amber-50 to-amber-100 text-gray-900 min-h-screen transition-all duration-500 ${
        isScrolled ? "p-4 opacity-90" : "p-8 opacity-100"
      }`}
      style={{ paddingTop: "140px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      ></div>

      {/* Content Box */}
      <div
        className={`relative container mx-auto max-w-5xl bg-white bg-opacity-90 hover:bg-opacity-95 p-8 md:p-12 rounded-3xl shadow-lg backdrop-blur-lg transform transition-all duration-500 ${
          isScrolled ? "scale-90" : "scale-100"
        }`}
        style={{ border: "2px solid #7C4D47" }}
      >
        <div className="relative flex flex-col items-center md:flex-row">
          {/* Circular Profile Picture */}
          <div className="relative flex-shrink-0 -mt-32 md:-mt-40 md:-ml-12">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-maroon-700 shadow-2xl">
              <img
                src={Mypic}
                alt="Nishant Baruah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-12 md:mt-0 md:ml-20 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-maroon-700">
              About Me
            </h2>
            <p className="text-gray-800 text-lg md:text-2xl leading-relaxed">
              Hello! I am a dedicated and passionate developer specializing in
              crafting modern, responsive applications and software. My goal is
              to create impactful digital solutions that merge aesthetic design
              with seamless functionality.
              <br />
              <br />I thrive on problem-solving, innovation, and building
              user-friendly interfaces that enhance user experience.
            </p>
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1EFGOya6gsVi4o1Wp1IiY4gbEcc8ZuG5d/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-4 py-2 bg-grey-700 text-black text-base font-semibold rounded-full shadow-md hover:bg-grey-800 hover:shadow-lg transition-all duration-300"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;





