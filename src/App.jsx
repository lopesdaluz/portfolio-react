// import "./App.css";
// import Header from "./Components/header";
// import Main from "./Components/main";
// import Projects from "./Components/projects";
// import Contact from "./Components/contact";
// import Skills from "./Components/skills";
// import Resume from "./Components/resume";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Skills />
//       <Projects />
//       <Resume />
//       <Contact />
//     </>
//   );
// }
import "./App.css";
import Header from "./Components/header";
import Main from "./Components/main";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Skills from "./Components/skills";
import Resume from "./Components/resume";
import IntroSection from "./Components/introsection";
import { useEffect } from "react";

import { useRef } from "react";

export default function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, title: "Tatiana | About Me" },
      { ref: skillsRef, title: "Tatiana | Skills" },
      { ref: projectsRef, title: "Tatiana | Projects" },
      { ref: resumeRef, title: "Tatiana | Resume" },
      { ref: contactRef, title: "Tatiana | Contact" },
    ];
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const section = sections.find(
            (s) => s.ref.current === visible.target
          );
          document.title = section
            ? section.title
            : "Tatiana Lopes Da Luz Portfolio";
        }
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <main className="space-y-24 py-16">
            <IntroSection />
            <section id="about" ref={aboutRef}>
              <Main />
            </section>
            <section id="skills" ref={skillsRef}>
              <Skills />
            </section>
            <section id="projects" ref={projectsRef}>
              <Projects />
            </section>
            <section id="resume" ref={resumeRef}>
              <Resume />
            </section>
            <section id="contact" ref={contactRef}>
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
