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
      className="bg-gradient-to-b from-green-800 to-green-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Nishant Baruah
            </h3>
            <p className="text-green-100 text-sm">
              Developer & Programmer building innovative solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Articles", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-green-100 hover:text-white text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:nishantbaruah3@gmail.com"
                className="flex items-center text-green-100 hover:text-white text-sm"
              >
                <FaEnvelope className="mr-2" />
                nishantbaruah3@gmail.com
              </a>
              <div className="flex items-center text-green-100 text-sm">
                <FaPhone className="mr-2" />
                +91 8486910792
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center 
                           text-green-100 hover:bg-green-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <p className="text-center text-green-100 text-sm">
            &copy; {new Date().getFullYear()} Nishant Baruah. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
