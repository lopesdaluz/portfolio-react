import React from "react";
import "../styles/main.css";
import myPhoto from "../assets/126307010_1004261900086017_3906871137536479823_n.jpg";

export default function Main() {
  return (
    <section className="main-content">
      <div className="main-container">
        <img src={myPhoto} alt="Tatiana" className="main-image"></img>
        <h2>Welcome to my portfolio</h2>
        <p>
          Hi, I'm Tatiana. I'm a full stack developer. Let's build something
          amazing together!
        </p>
        <a href="#contact" className="btn">
          Get in touch
        </a>
      </div>
    </section>
  );
}
