import { useState, useEffect } from "react";
import QuizModal from "./QuizModal";

export default function Header() {
  // State for controlling menu and scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // React way of handling scroll events using useEffect
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/80 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button
                className="intro-btn text-base font-semibold px-4 py-1"
                onClick={() => setIsQuizOpen(true)}
              >
                Get to know me
              </button>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      {/* Mobile menu and overlay rendered outside header for full screen coverage */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 via-cyan-500/60 to-gray-900/80 backdrop-blur-md transition-opacity duration-300"></div>
          {/* Animated menu panel */}
          <nav className="relative w-4/5 max-w-sm bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-slideIn md:hidden">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <ul className="w-full mt-8 space-y-6">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block w-full text-xl font-semibold text-gray-800 hover:text-blue-500 px-6 py-3 rounded-lg transition-colors duration-200 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <style>{`
            @keyframes slideIn {
              0% { transform: translateY(-40px) scale(0.95); opacity: 0; }
              100% { transform: translateY(0) scale(1); opacity: 1; }
            }
            .animate-slideIn {
              animation: slideIn 1s cubic-bezier(0.4,0,0.2,1) forwards;
            }
          `}</style>
        </div>
      )}
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
    </>
  );
}
