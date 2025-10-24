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

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <div className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <main className="space-y-24 py-16">
            <IntroSection />
            <Main />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
