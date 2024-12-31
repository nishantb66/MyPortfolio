import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on mobile after clicking
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full transition-all duration-500 shadow-lg w-11/12 max-w-5xl ${
        isScrolled
          ? "bg-gray-900 bg-opacity-90 py-2"
          : "bg-gray-800 bg-opacity-100 py-4"
      }`}
      style={{
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-white font-bold text-2xl">Nishant</div>
        <div className="hidden md:flex space-x-6">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Skills", id: "skills" },
            { label: "Projects", id: "projects" },
            { label: "Experience", id: "experience" },
            { label: "Articles", id: "articles" },
            { label: "Contact", id: "footer" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-8 w-8 text-black" />
            ) : (
              <MenuIcon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 rounded-lg mt-2 py-4 shadow-md relative z-50">
          <div className="flex flex-col space-y-4 px-6">
            {[
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Experience", id: "experience" },
              { label: "Articles", id: "articles" },
              { label: "Contact", id: "footer" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
