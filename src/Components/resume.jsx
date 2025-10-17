// import React from "react";
import "../styles/resume.css";

export default function Resume() {
  return (
    <section id="resume" className="py-20 min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Download Resume
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {/* Page 1 */}
          <div className="w-full max-w-md mx-auto">
            <div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6
                         hover:bg-white/10 transition-all duration-300 
                         border border-white/10 text-center"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                  src="./resume1.png"
                  alt="Resume Page 1"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm text-gray-400">Page 1</span>
            </div>
          </div>

          {/* Page 2 */}
          <div className="w-full max-w-md mx-auto">
            <div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6
                         hover:bg-white/10 transition-all duration-300 
                         border border-white/10 text-center"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                  src="./resume2.png"
                  alt="Resume Page 2"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm text-gray-400">Page 2</span>
            </div>
          </div>

          {/* Download Button - Centered below both images */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <a
              href="/resume2025.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary/20 
                       hover:bg-primary/30 text-primary rounded-lg 
                       transition-all duration-300 space-x-2"
            >
              <span className="font-medium">Download Complete Resume</span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
