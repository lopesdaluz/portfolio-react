// import React from "react";
import "../styles/main.css";
import myPhoto from "../assets/126307010_1004261900086017_3906871137536479823_n.jpg";

export default function Main() {
  return (
    <section className="main-content">
      <div className="main-container">
        <img src={myPhoto} alt="Tatiana" className="main-image"></img>
        <h2>Welcome to my portfolio</h2>
        <p>
          Hi, Im Tatiana. Im a full stack developer. Lets build something
          amazing together! I am a driven and passionated for full stack and
          based in Sweden. Keen on breaking into the job market to continue my
          professional growth. Eager to learn new things and contribute to
          innovative projects, I aspire to bring my skills and enthusiasm to a
          dynamic work environment.
        </p>
        <a href="#contact" className="btn">
          Get in touch
        </a>
      </div>
    </section>
  );
}
