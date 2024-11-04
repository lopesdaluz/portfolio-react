// import React from "react";
import "../styles/resume.css";

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-logo">
        <h1>Download</h1>
      </div>
      <div className="resume-images">
        <div className="resume-item">
          <a href="/Software Developer.pdf" download>
            <img src="/software dev.png" alt="Resume Screenshot"></img>
            <p>Resume</p>
          </a>
        </div>
        <div className="resume-item">
          <a href="/Personal Letter-Software developer.pdf" download>
            <img
              src="/Skärmbild (1968).png"
              alt="PersonalLetter Screenshot"
            ></img>
            <p>Personal Letter</p>
          </a>
        </div>
      </div>
    </section>
  );
}
