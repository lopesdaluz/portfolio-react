import "../styles/resume.css";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 min-h-[80vh] flex items-center justify-center"
    >
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Download Resume
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-md">
            <div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6
                         hover:bg-white/10 transition-all duration-300 
                         border border-white/10 text-center"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                  src="./resume2026.png"
                  alt="Resume"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm text-gray-400">Resume</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/resume2026.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary/20 
                     hover:bg-primary/30 text-primary rounded-lg 
                     transition-all duration-300 space-x-2"
          >
            <span className="font-medium">Download Resume</span>
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
    </section>
  );
}
// </section>
