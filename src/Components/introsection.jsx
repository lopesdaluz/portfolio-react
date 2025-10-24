import { useState, useEffect } from "react";
import "../styles/introsection.css";

const IntroSection = () => {
  const name = "My name is Tatiana Lopes Da Luz";
  const [displayed, setDisplayed] = useState("");

  // setInterval each time it updates displayed to show one more letter of your time
  //i++ increases the index
  //clearInterval stops the interval when the full name is displayed

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(name.slice(0, i + 1));
      i++;
      if (i === name.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [name]);

  return (
    <section className="intro-section">
      <h1 className="intro-title">
        {displayed}
        <span className="cursor">|</span>
      </h1>
      <p className="intro-subtitle">Welcome to my portfolio!</p>
      <a href="#resume" className="intro-btn">
        View Resume
      </a>
    </section>
  );
};

export default IntroSection;
