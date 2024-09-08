import "../styles/contact.css";

export default function contact() {
  return (
    <section className="contact" id="contacts">
      <div className="contact-title">
        <h2>Contact Me</h2>
      </div>
      <form name="contact" method="POST" data-netlify="true">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required></textarea>

        <button type="submit" className="btn">
          Send Messae
        </button>
      </form>
    </section>
  );
}
