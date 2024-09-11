import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contacts">
      <div className="contact-title">
        <h2>Contact Me</h2>
      </div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
      <div className="links">
        <h2>Links</h2>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/tlopesdaluz/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin aria-label="LinkedIn" />
          </a>
          <a
            href="https://github.com/lopesdaluz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub aria-label="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
}
