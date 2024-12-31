import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-12"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Section */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h3>
            <p className="text-base sm:text-lg mb-6">
              I am always open to new opportunities and collaborations. Let's
              connect!
            </p>
            <div className="text-base sm:text-lg mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nishantbaruah3@gmail.com"
                className="text-gray-800 hover:text-gray-900 transition duration-300"
              >
                nishantbaruah3@gmail.com
              </a>
            </div>
            <div className="text-base sm:text-lg">
              <strong>Phone:</strong>{" "}
              <span className="text-gray-800">+91 8486910792</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Follow Me</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.linkedin.com/in/nishantbaru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-900 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nishantb66"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-900 transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://medium.com/@baruahnishant2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-gray-900 transition duration-300"
              >
                Medium
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center lg:text-right">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Get in Touch
            </h3>
            <p className="text-base sm:text-lg mb-6">
              Interested in collaborating or working together? Feel free to
              reach out.
            </p>
            <a
              href="mailto:nishantbaruah3@gmail.com"
              className="text-lg text-gray-800 hover:text-gray-900 border-b-2 border-gray-800 transition duration-300"
            >
              Send an Email
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg">
            &copy; 2024 Nishant Baruah. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
