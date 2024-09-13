// import React from "react";
import "../styles/main.css";
import myPhoto from "../assets/126307010_1004261900086017_3906871137536479823_n.jpg";

export default function Main() {
  return (
    <section className="main-content" id="about">
      <div className="main-container">
        <img src={myPhoto} alt="Tatiana" className="main-image"></img>
        <h2>Welcome to my portfolio</h2>
        <p>
          Im Tatiana, a Full Stack Developer based in Gothenburg, Sweden. With a
          lifelong interest in technology, I decided to fully commit to my
          passion in 2022, enrolling in the developer program at IT Högskolan in
          Gothenburg.
        </p>

        <p>
          During my time there, I had the opportunity to complete an internship
          at Junio AB, where my team and I developed a school platform that
          allows teachers to seamlessly manage and share educational materials
          with their students.
        </p>

        <p>
          Coming from a background rich in customer-focused roles, I bring a
          unique perspective to software development. My ability to understand
          customer needs, combined with my technical expertise, allows me to
          create solutions that are not only functional but also user-centric. I
          believe this dual perspective is invaluable in the IT industry, where
          technology should always serve to enhance the user experience.
        </p>

        <p>
          Im particularly passionate about accessibility and inclusivity in
          tech, which is why WCAG (Web Content Accessibility Guidelines) is a
          key focus for me. When I build applications, I do so with the mindset
          that technology should be accessible to everyone, ensuring that the
          digital world is inclusive and welcoming.
        </p>

        <p>
          What excites me most about software development is the constant
          evolution of the field. I thrive on learning new technologies,
          tackling complex challenges, and pushing the boundaries of what is
          possible. I am always eager to take on new projects and learn from the
          people I work with.
        </p>

        <p>
          If you are looking for someone who combines a deep understanding of
          customer experience with a passion for innovative solutions, I would
          love to connect and explore how we can create something extraordinary
          together!
        </p>

        <a href="#contacts" className="btn">
          Get in touch
        </a>
      </div>
    </section>
  );
}
