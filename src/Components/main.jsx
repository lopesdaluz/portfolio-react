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
          Hi, Im Tatiana, a Full Stack Developer based in Sweden. With a passion
          for crafting innovative solutions and a relentless drive for
          professional growth, Im eager to bring my diverse skill set to dynamic
          teams and exciting projects. I thrive on learning new technologies,
          solving complex problems, and contributing to cutting-edge
          applications. Lets connect and explore how we can build something
          extraordinary together!
        </p>
        <a href="#contacts" className="btn">
          Get in touch
        </a>
      </div>
    </section>
  );
}
