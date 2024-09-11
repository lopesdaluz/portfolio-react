// import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Tatiana</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
