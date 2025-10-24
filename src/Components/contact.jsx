import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Get in Touch
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Whether you want to collaborate, ask a question, or just say hi. Feel
          free to reach out! I’m always happy to connect.
        </p>

        <div className="flex justify-center space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tlopesdaluz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="w-8 h-8" aria-label="LinkedIn" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/lopesdaluz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-transform duration-300 transform hover:scale-110"
          >
            <FaGithub className="w-8 h-8" aria-label="GitHub" />
          </a>

          {/* Email */}
          <a
            href="mailto:tati_daluz_89@hotmail.com"
            className="text-gray-400 hover:text-primary transition-transform duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>
        </div>

        <div className="mt-12">
          <a
            href="mailto:tati_daluz_89@hotmail.com"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg 
              hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
