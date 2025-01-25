import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/nishantbaru/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/nishantb66",
    },
    {
      name: "Medium",
      icon: <FaMediumM />,
      url: "https://medium.com/@baruahnishant2003",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1/2">
        <svg
          className="relative block w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Nishant Baruah
            </h3>
            <p className="text-gray-400">
               Developer & Programmer building innovative solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Articles", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:nishantbaruah3@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope className="mr-2" />
                nishantbaruah3@gmail.com
              </a>
              <div className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                +91 8486910792
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nishant Baruah. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
